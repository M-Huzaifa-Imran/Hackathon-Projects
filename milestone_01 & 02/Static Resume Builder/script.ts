document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.getElementById('toggleButton') as HTMLButtonElement | null;
    const skillsList = document.getElementById('skillsList') as HTMLUListElement | null;

    if (toggleButton && skillsList) {
        toggleButton.addEventListener('click', function() {
            const isHidden = skillsList.classList.toggle('hidden');
            this.textContent = isHidden ? 'Show Skills' : 'Hide Skills';
            this.setAttribute('aria-expanded', String(!isHidden));
        });
    }
});