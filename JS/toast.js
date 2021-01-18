var toastCon = document.querySelector('.toast-div');

var Toast = {
  init() {
    this.hideTimeout = null;
    
    this.el = document.createElement('span');
    this.el.className = 'toast';
    toastCon.appendChild(this.el);
  },
  
  show (message)  {
    clearTimeout(this.hideTimeout); 
    
    this.el.textContent = 'Programming is absolutely fun';
    this.el.className = 'toast toast-visible';
    
    this.hideTimeout = setTimeout(() => {
      this.el.classList.remove('toast-visible');
    }, 2000);
  }
};

document.addEventListener('DOMContentLoaded', () => Toast.init());

function ring() {
  document.querySelector('#audio').play();
  Toast.show();
}