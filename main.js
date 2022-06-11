const menuToggleIcon = document.getElementById('menu-toggle-icon');
const navmMobile = document.getElementById('nav');
//const menuToggleIcon = document.getElementById('menu-toggle-icon')
//const menuToggleIcon = document.getElementById('menu-toggle-icon')

const toggleMenu = () =>{
    navmMobile.classList.toggle('active');
}


menuToggleIcon.addEventListener('click,' toggleMenu);