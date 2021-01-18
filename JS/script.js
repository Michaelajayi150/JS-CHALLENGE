window.onload = fadeout;

function fadeout() {
 setTimeout(function() {
    var body = document.getElementById('load');
    body.classList.add('loaded');
  }, 2500);
}