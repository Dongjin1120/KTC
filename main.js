const toggleBtn = document.querySelector('.navbar_toggleBtn');
const menu = document.querySelector('.navbar-nav');

toggleBtn.addEventListener('click', () => { 
    menu.classList.toggle('active');
});