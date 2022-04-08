window.addEventListener('DOMContentLoaded', () => {
    const menuIcon = document.querySelector('.nav-wrapper > button');
    const menu = document.querySelector('.nav-wrapper > nav');
    
    menuIcon.addEventListener('click', () => {
        const expanded = (menu.getAttribute('aria-expanded')) === 'true' ? true : false;
        const newValue = !expanded;
        menuIcon.dataset.open = `${newValue}`;
        menu.setAttribute('aria-expanded', newValue.toString());
    });
});