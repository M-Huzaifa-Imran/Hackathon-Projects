document.addEventListener('DOMContentLoaded', function () {
    // Get references from the form and display to area
    var form = document.getElementById('resume-form');
    var resumeDisplayElement = document.getElementById('resume-display');
    // Handle form submission
    form.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent page reload
        // Get form data
        var name = document.getElementById('name').value;
        var email = document.getElementById('email').value;
        var phone = document.getElementById('phone').value;
        var education = document.getElementById('education').value;
        var experience = document.getElementById('experience').value; // Ensure this ID is correct
        var skills = document.getElementById('skills').value;
        // Generate resume content dynamically
        var resumeHtml = "\n        <h2><b>Editable Resume</b></h2>\n        <h3>Personal Information</h3>\n        <p><b><span contenteditable=\"true\">Name: ".concat(name, "</span></b></p>\n        <p><b><span contenteditable=\"true\">Email: ").concat(email, "</span></b></p>\n        <p><b><span contenteditable=\"true\">Phone: ").concat(phone, "</span></b></p>\n        \n        <h3>Education</h3>\n        <p> <span contenteditable=\"true\"> ").concat(education, " </span></p>\n        \n        <h3>Experience</h3>\n        <p> <span contenteditable=\"true\"> ").concat(experience, "</span></p>\n        \n        <h3>Skills</h3>\n        <p> <span contenteditable=\"true\"> ").concat(skills, "</span></p>");
        // Display the resume in the area
        if (resumeDisplayElement) {
            resumeDisplayElement.innerHTML = resumeHtml;
        }
        else {
            console.log('The resume display element is missing');
        }
    });
});
