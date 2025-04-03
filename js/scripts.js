const toggleTheme = document.getElementById('toggle-theme');
const toggleIcon = document.getElementById('toggle-icon');
const toggleText = document.getElementById('toggle-text');
const toggleColors = document.getElementById('toggle-colors');
const rootStyles = document.documentElement.style;

toggleTheme.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    if (toggleIcon.src.includes('moon.svg')) {
        toggleIcon.src='assets/icons/sun.svg';
        toggleText.textContent='light Mode';
    } else{
        toggleIcon.src = 'assets/icons/moon.svg';
        toggleText.textContent = 'Dark Mode';
    }
});

toggleColors.addEventListener('click', (e)=>{
    rootStyles.setProperty('--primary-color', e.target.dataset.color);
});

document.addEventListener("DOMContentLoaded", () => {

    const skillBars = document.querySelectorAll(".skills__bar");

    skillBars.forEach(bar => {
        const percentageClass = [...bar.classList].find(cls => cls.includes("skills__bar--"));
        if (percentageClass) {
            const percentage = percentageClass.split("--")[1];
            bar.querySelector("::after")?.style.setProperty("width", percentage + "%");
        }
    });
});