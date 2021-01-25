var close = document.getElementById('modal-close'), 
    show = document.getElementById('modal-show'),
    modal = document.getElementById('modal');

show.addEventListener('click', function () {
  modal.classList.toggle('modal-hidden');
}, false);

close.addEventListener('click', function () {
  modal.classList.toggle('modal-hidden');
}, false);