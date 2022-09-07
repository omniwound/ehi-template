async function setTree(data) {
  return jsonview.create(data)
}

async function getJson() {
  // Get data from file
  const response = await fetch('./john_smith.json')

  // Return response as json
  const json = await response.json()

  return JSON.stringify(json)
}

;(async () => {
  // Get JSON data from sample file
  var data = await getJson()

  // Set tree
  var tree = await setTree(data)

  // Render tree
  jsonview.render(tree, document.querySelector('.root'))
  jsonview.expand(tree)

  function collapseTree() {
    // collapse tree
    jsonview.collapse(tree)
  }

  function expandTree() {
    // expand tree
    jsonview.expand(tree)
  }

  function downloadEHI() {
    // Download json
    const e = document.createElement('a')
    e.setAttribute(
      'href',
      'data:text/plain;charset=utf-8,' + encodeURIComponent(data)
    )

    // Get patient name from html
    const patient_name = document.querySelector('.card-title > span').innerHTML

    e.setAttribute('download', patient_name + '.json')
    e.style.display = 'none'
    document.body.appendChild(e)
    e.click()
    document.body.removeChild(e)
  }

  async function uploadEHI() {
    // upload EHI
    const input = document.createElement('input')
    input.type = 'file'
    input.accept = '.json'
    input.onchange = async (e) => {
      const file = e.target.files[0]
      const reader = new FileReader()
      reader.readAsText(file, 'UTF-8')
      reader.onload = async (readerEvent) => {
        // Get file content
        const content = readerEvent.target.result

        // Remove old tree
        await jsonview.destroy(tree)

        // Get patient name and dob from file
        const json = JSON.parse(content)
        const patient_name =
          json['patient']['lastName'] + ' ' + json['patient']['firstName'] ||
          'No patient selected'

        // Get patient birth date and convert to english format
        const dob = json['patient']['birthDate']
        const dob_date = new Date(dob) || new Date()
        const dob_english = dob_date.toLocaleDateString('en-GB')

        // Update patient name and dob
        document.querySelector('.card-title').innerHTML =
          'Patient: <span>' + patient_name + '</span>'
        document.querySelector('.col > p').innerHTML =
          '<strong>DOB:</strong> ' + dob_english

        // Create new tree and render
        data = content
        tree = await jsonview.create(data)
        await jsonview.render(tree, document.querySelector('.root'))
        await jsonview.expand(tree)
      }
    }
    input.click()
  }

  document.getElementById('collapse').addEventListener('click', collapseTree)
  document.getElementById('expand').addEventListener('click', expandTree)
  document.getElementById('download').addEventListener('click', downloadEHI)
  document.getElementById('upload').addEventListener('click', uploadEHI)
})()
