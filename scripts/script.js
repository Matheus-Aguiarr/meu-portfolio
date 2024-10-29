const menuHamburguer = document.querySelector('.menu-hamburguer');
menuHamburguer.addEventListener('click', () => {
    toggleMenu();
})

function toggleMenu() {
    const nav = document.querySelector('.nav-responsive')
    menuHamburguer.classList.toggle('change');
    
    if (menuHamburguer.classList.contains('change')) {
        nav.style.display = 'block';
    } else {
        nav.style.display = 'none';
    }
}

/* IDADE */

const age = document.getElementById('age');

let born = new Date(2007, 11, 23);
let thisYear = new Date()
let myAge = thisYear.getFullYear() - born.getFullYear();
if (thisYear < new Date(thisYear.getFullYear(), born.getMonth(), born.getDate())) {
    myAge--;
}

age.innerHTML = myAge;



