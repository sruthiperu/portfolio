(function () {
    const root = document.documentElement;
    const toggle = document.querySelector('.theme-toggle');

    function getTheme() {
        return root.getAttribute('data-theme') === 'light' ? 'light' : 'dark';
    }

    function setTheme(theme) {
        const next = theme === 'light' ? 'light' : 'dark';
        root.setAttribute('data-theme', next);
        try {
            localStorage.removeItem('portfolio-theme');
        } catch (_) { /* ignore */ }
        if (toggle) {
            toggle.setAttribute(
                'aria-label',
                next === 'light' ? 'switch to dark mode' : 'switch to light mode'
            );
        }
    }

    // Always open / refresh in dark mode
    setTheme('dark');

    if (toggle) {
        toggle.addEventListener('click', () => {
            setTheme(getTheme() === 'light' ? 'dark' : 'light');
        });
    }
})();
