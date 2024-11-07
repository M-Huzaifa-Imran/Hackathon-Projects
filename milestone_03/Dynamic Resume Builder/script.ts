document.addEventListener('DOMContentLoaded', () => {
    // Get references from the form and display to area
    const form = document.getElementById('resume-form') as HTMLFormElement;
    const resumeDisplayElement = document.getElementById('resume-display') as HTMLDivElement;

    // Handle form submission
    form.addEventListener('submit', (event: Event) => {
        event.preventDefault(); // Prevent page reload

        // Get form data
        const name = (document.getElementById('name') as HTMLInputElement).value;
        const email = (document.getElementById('email') as HTMLInputElement).value;
        const phone = (document.getElementById('phone') as HTMLInputElement).value;
        const education = (document.getElementById('education') as HTMLTextAreaElement).value;
        const experience = (document.getElementById('experience') as HTMLTextAreaElement).value; // Ensure this ID is correct
        const skills = (document.getElementById('skills') as HTMLTextAreaElement).value;

        // Generate resume content dynamically
        const resumeHtml = `
        <h2><b>Resume</b></h2>
        <h3>Personal Information</h3>
        <p><b>Name: ${name}</b></p>
        <p><b>Email: ${email}</b></p>
        <p><b>Phone: ${phone}</b></p>
        
        <h3>Education</h3>
        <p>${education}</p>
        
        <h3>Experience</h3>
        <p>${experience}</p>
        
        <h3>Skills</h3>
        <p>${skills}</p>`;

        // Display the resume in the area
        if (resumeDisplayElement) {
            resumeDisplayElement.innerHTML = resumeHtml;
        } else {
            console.log('The resume display element is missing');
        }
    });
});