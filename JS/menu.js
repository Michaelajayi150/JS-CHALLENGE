var menu = document.getElementById('ham-menu');
var navbar = document.getElementById('nav-bar');

menu.addEventListener('click', function() {
  navbar.classList.toggle('change');
});