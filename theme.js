document.addEventListener('DOMContentLoaded', function() {
    const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');
    
    function applyTheme(theme) {
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
    }

    function handleThemeChange(event) {
        const theme = event.target.checked ? 'dark' : 'light';
        document.body.classList.add('theme-transition');
        applyTheme(theme);
        setTimeout(() => {
            document.body.classList.remove('theme-transition');
        }, 500);
    }

    const prefersDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (localStorage.getItem('theme') === 'dark' || (prefersDarkMode && !localStorage.getItem('theme'))) {
        applyTheme('dark');
        toggleSwitch.checked = true;
    } else {
        applyTheme('light');
    }

    toggleSwitch.addEventListener('change', handleThemeChange);
});
