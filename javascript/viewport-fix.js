// Force remove all borders and ensure full viewport coverage
(function () {
    'use strict';

    function fixViewport() {
        // Get actual viewport height
        const vh = window.innerHeight;
        const vw = window.innerWidth;

        // Set CSS custom properties
        document.documentElement.style.setProperty('--vh', `${vh}px`);
        document.documentElement.style.setProperty('--vw', `${vw}px`);

        // Force body and html to full height
        document.documentElement.style.height = '100%';
        document.documentElement.style.minHeight = `${vh}px`;
        document.body.style.height = '100%';
        document.body.style.minHeight = `${vh}px`;

        // Remove all margin and padding
        document.documentElement.style.margin = '0';
        document.documentElement.style.padding = '0';
        document.body.style.margin = '0';
        document.body.style.padding = '0';

        // Ensure background color
        const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        const bgColor = isDark ? '#000000' : '#ffffff';
        document.documentElement.style.backgroundColor = bgColor;
        document.body.style.backgroundColor = bgColor;
    }

    // Run on load
    fixViewport();

    // Run on resize
    window.addEventListener('resize', fixViewport);

    // Run on orientation change
    window.addEventListener('orientationchange', () => {
        setTimeout(fixViewport, 100);
    });

    // Run when theme changes
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', fixViewport);
})();
