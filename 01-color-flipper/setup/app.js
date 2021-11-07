const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];

const btn = document.querySelector('#btn');

// const btn = document.getElementById('btn');

const color = document.querySelector('.color');

btn.addEventListener('click', () => {
    //obtener numero random entre 0 -3 (del array colors[])
    const randomNumber = getRandomNumber();
    console.log(randomNumber)
    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber]
})

// function getRandomNumber() {
//     return Math.floor(Math.random() * colors.length); //random devuelve un numero entre 0 - 1
// }

const getRandomNumber = () => {
    return Math.floor(Math.random() * colors.length);
}