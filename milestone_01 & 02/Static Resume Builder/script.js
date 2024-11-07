document.addEventListener('DOMContentLoaded', function () {
    var toggleButton = document.getElementById('toggleButton');
    var skillsList = document.getElementById('skillsList');
    if (toggleButton && skillsList) {
        toggleButton.addEventListener('click', function () {
            var isHidden = skillsList.classList.toggle('hidden');
            this.textContent = isHidden ? 'Show Skills' : 'Hide Skills';
            this.setAttribute('aria-expanded', String(!isHidden));
        });
    }
});
