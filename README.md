<h1 align="center">EHI Export</h1>

<h3 align="center">

[Documentation](https://docs.google.com/document/d/1xyShyyp8x73FuUKEFVD1-8QiOph2B4wsCfzn0zlYRD8/edit?usp=sharing)

</h3>

# What is this repository?
This is the [omniwound.com](https://omniwound.com) repository of Electronic Health Information (EHI) JSON file. [Main template](https://github.com/omniwound/ehi-template) file used for patient Electronic Health Record (EHR) export.

You can find a patient EHI export sample from [here](https://omniwound.github.io/ehi-template/).

# Where did you get the samples?
We got inspired to make all the samples for each component (Allergies, Medications, etc) from: https://hl7.org/FHIR/resourcelist.html.

# Why was this repository created?
This repository was created to make a publicly accessible hyperlink to our current template in accordance to §170.315(b)(10) certification criteria: https://www.healthit.gov/test-method/electronic-health-information-export.

# How your samples were structured?
We are using our own JSON format and our export structure looks like this:
<ul>
<li>Organization</li>
<li>Location (Facility)</li>
<li>Care Team (Provider)</li>
<li>Patient</li>
<li>Encounter</li>
    <ul>
        <li>HPI</li>
        <li>Wounds</li>
        <li>Social History</li>
        <li>Vital Signs</li>
        <li>Plan Of Care</li>
        <li>Medications</li>
        <li>Allergies</li>
        <li>Procedures</li>
        <li>Goals</li>
        <li>Health Concerns</li>
        <li>Immunizations</li>
        <li>Devices</li>
        <li>Assessments</li>
    </ul>
</ul>

# Contact
For questions on this repository please contact us at <a href="mailto:it@integratedwc.com?subject=Support Page from omniwound.com">it@integratedwc.com</a>

# Viewer Preview
![EHI Viewer](./viewer1.png "Viewer Preview")
![EHI Viewer2](./viewer2.png "Viewer Preview 2")