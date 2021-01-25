var colors = ["red","green","blue","pink","magenta","cyan","purple","brown","tan","olive","navy","lime","indigo","teal"];
var color = "";


function createHearts() {
  var heart = document.createElement('div');
  heart.classList.add('heart');
  heart.innerHTML = '❤';
  heart.style.color = color;
  heart.style.left = Math.random() * 100 + 'vw';
  
  heart.style.animationDuration = Math.random() * 2 + 3 + 's';
  
  
  document.body.appendChild(heart);
  
  setTimeout(function() {
    heart.remove();
  }, 4000); 
};


setInterval(function() {
  createHearts();
  color = colors[Math.floor(Math.random() * colors.length)];
},300);