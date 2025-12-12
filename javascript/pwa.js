document.addEventListener('DOMContentLoaded', () => {
    // Check if running in standalone mode (iOS PWA)
    const isStandalone = window.navigator.standalone === true;

    // For testing/debugging purposes, you can uncomment the line below to force the button to appear
    // const isStandalone = true;

    if (isStandalone) {
        const heroContent = document.querySelector('.hero-content');
        if (heroContent) {
            // Determine language based on HTML lang attribute
            const lang = document.documentElement.lang || 'en';
            const isThai = lang === 'th';

            const buttonText = isThai ? 'ฟังบน Apple Podcasts' : 'Listen on Apple Podcasts';
            const linkUrl = 'https://podcasts.apple.com/th/channel/stnet-radio/id6442482179?hasPaidContent=true';

            const pwaButton = document.createElement('a');
            pwaButton.href = linkUrl;
            pwaButton.className = 'btn-solid pwa-btn';
            pwaButton.textContent = buttonText;
            pwaButton.style.marginTop = '1rem';
            pwaButton.style.backgroundColor = '#ff0000ff';
            pwaButton.style.color = 'white';
            pwaButton.style.display = 'inline-block';

            // Add an icon if possible, or just text for now. 
            // Simple styling to make it stand out.

            // Append to hero content
            // We want it after the description
            const heroDesc = heroContent.querySelector('.hero-desc');
            if (heroDesc) {
                heroDesc.insertAdjacentElement('afterend', pwaButton);
            } else {
                heroContent.appendChild(pwaButton);
            }
        }

        // Relink "Get STNET Radio+" button to Apple Podcasts
        const plusButtons = document.querySelectorAll('a[href="/plus"], a[href="/plus/"], a[href="/th/plus"], a[href="/th/plus/"]');
        plusButtons.forEach(btn => {
            if (btn.textContent.includes('STNET Radio+')) {
                btn.href = 'https://podcasts.apple.com/th/channel/stnet-radio/id6442482179?hasPaidContent=true';
            }
        });

        // Language Switcher
        const langSwitchText = isThai ? 'English' : 'ภาษาไทย';
        const langSwitchUrl = isThai ? '/' : '/th/';

        const langButton = document.createElement('a');
        langButton.href = langSwitchUrl;
        langButton.className = 'btn-solid';
        langButton.textContent = langSwitchText;
        langButton.style.marginTop = '1rem';
        langButton.style.marginLeft = '0.5rem';
        langButton.style.display = 'inline-block';
        langButton.style.backgroundColor = '#333'; // Neutral color for language switch
        langButton.style.color = 'white';
        langButton.style.cursor = 'pointer';

        // Append next to the PWA button if it exists, or append to hero content
        if (pwaButton && pwaButton.parentNode) {
            pwaButton.insertAdjacentElement('afterend', langButton);
        } else {
            const heroDesc = heroContent.querySelector('.hero-desc');
            if (heroDesc) {
                heroDesc.insertAdjacentElement('afterend', langButton);
            } else {
                heroContent.appendChild(langButton);
            }
        }


        // Inject into Mobile Menu
        const mobileNav = document.querySelector('nav ul');
        if (mobileNav) {
            // Separator
            const separator = document.createElement('li');
            separator.style.borderTop = '1px solid rgba(255,255,255,0.1)';
            separator.style.margin = '10px 0';
            mobileNav.appendChild(separator);

            // Apple Podcasts Link in Menu
            const menuPodcastsLi = document.createElement('li');
            const menuPodcastsLink = document.createElement('a');
            menuPodcastsLink.href = 'https://podcasts.apple.com/th/channel/stnet-radio/id6442482179?hasPaidContent=true';
            menuPodcastsLink.textContent = isThai ? 'ฟังบน Apple Podcasts' : 'Listen on Apple Podcasts';
            menuPodcastsLink.style.color = '#ff0000'; // Brand color
            menuPodcastsLi.appendChild(menuPodcastsLink);
            mobileNav.appendChild(menuPodcastsLi);

            // Language Switcher in Menu
            const menuLangLi = document.createElement('li');
            const menuLangLink = document.createElement('a');
            menuLangLink.href = langSwitchUrl;
            menuLangLink.textContent = langSwitchText;
            menuLangLi.appendChild(menuLangLink);
            mobileNav.appendChild(menuLangLi);
        }
    }
});
