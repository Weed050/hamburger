let isOpen = false;

let hamb = document.getElementById("hamb");

function statusMenu(){
    hamb.className= isOpen ? "open" : "closed";
}
function toogleMenu(){
    isOpen = !isOpen;
    statusMenu()
}

hamb.addEventListener('click',toogleMenu);