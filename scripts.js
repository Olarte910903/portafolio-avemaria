const logo = document.querySelector('img');

function borroso(){
    logo.style.filter = 'blur(2px)';
}

logo.addEventListener(click,borroso);

