const clicks = document.getElementById('clicks'); 
const names = ['Sandy', 'Cassi', 'Jim', 'Pratha', 'Tay', 'Jamie', 'Sok'];

function button() {
    clicks.innerHTML =  
    names[Math.floor(Math.random() * names.length)]; 
}

const buttons = document.querySelector('button');
const body = document.querySelector('body');
const color = ['#FF5733', '#FFBD33', '#DBFF33', '#75FF33', '#33FF57', '#33FFBD'];

function count() {
    clicks += 1;
    document.getElementById("clicks").innerHTML = clicks;
};
function reset(){
    clicks = 0;
    document.getElementById("clicks").innerHTML = clicks;
    body.style.backgroundColor = "#E6E6FA";
};

body.style.backgroundColor = "#E6E6FA"
buttons.addEventListener('click', changeBackground)

function changeBackground(){
    const colorIndex= parseInt(Math.random()*color.length)
    body.style.backgroundColor = color[colorIndex]
};





