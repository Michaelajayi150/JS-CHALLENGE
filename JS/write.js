var i = 0;

function reType() {
  var text = document.getElementById('input');
  var name = text.value;
  var type = document.getElementById('type');
  
  if (i < name.length) {
    type.innerHTML += name.charAt(i);
    i++;
    
    setTimeout(reType,115);
  };
}
