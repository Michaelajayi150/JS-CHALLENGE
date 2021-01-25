var button = document.querySelector('.btn');

function bgChanger() {
  document.body.style.background = `hsl(${Math.floor(Math.random() * 360)}, 60%, 30%)`;
}

button.addEventListener('click', bgChanger, false);