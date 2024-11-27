const dropButtons = document.querySelectorAll('.filter__drop-btn');

dropButtons.forEach(button => {
    button.addEventListener('click', () => {
        const menu = button.nextElementSibling;
        menu.classList.toggle('filter__drop-menu_visible');
    });
});