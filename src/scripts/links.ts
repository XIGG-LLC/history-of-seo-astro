window.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('main.main a');
    links.forEach(link => {
        if(link.getAttribute('href').indexOf('http') > -1) {
            const url = new URL(link.getAttribute('href'));
            if (url.origin !== location.origin && link.getAttribute('target') === null) {
                link.setAttribute('target', '_blank');
            }
        }
    });
});