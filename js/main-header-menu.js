const burger = document.querySelector('.main-header-nav-var');
const sidebar = document.querySelector('.main-container-left');

burger.addEventListener('click', () => {
    if (sidebar.style.display === 'flex') {
        sidebar.style.display = 'none';
    } else {
        sidebar.style.display = 'flex';
    }
});
