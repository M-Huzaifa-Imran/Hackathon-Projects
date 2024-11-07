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
        var resumeHtml = "\n        <h2><b>Resume</b></h2>\n        <h3>Personal Information</h3>\n        <p><b>Name: ".concat(name, "</b></p>\n        <p><b>Email: ").concat(email, "</b></p>\n        <p><b>Phone: ").concat(phone, "</b></p>\n        \n        <h3>Education</h3>\n        <p>").concat(education, "</p>\n        \n        <h3>Experience</h3>\n        <p>").concat(experience, "</p>\n        \n        <h3>Skills</h3>\n        <p>").concat(skills, "</p>");
        // Display the resume in the area
        if (resumeDisplayElement) {
            resumeDisplayElement.innerHTML = resumeHtml;
        }
        else {
            console.log('The resume display element is missing');
        }
    });
});
