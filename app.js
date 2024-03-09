console.log("working");

document.getElementById('toggle-menu').addEventListener('click', function() {
    const menuItems = document.getElementById('menu-items');
    menuItems.classList.toggle('show');
  });