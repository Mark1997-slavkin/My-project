let plus;
let minus;
let multiply;
let divide;

let num1 = document.getElementById('num1');
let num2 = document.getElementById('num2');

let changeBtn = document.getElementById('changeBtn').addEventListener('click', () => {
    document.getElementById('changeBtn').innerText = 'Change Numbers'
    document.getElementById('bottoms').innerText = '';
    document.getElementById('total').value = '';
    num1.innerText = Math.floor((Math.random() * 10) + 1);
    num2.innerText = Math.floor((Math.random() * 10) + 1);
    plus = Number(num1.innerText) + Number(num2.innerText);
    minus = Number(num1.innerText) - Number(num2.innerText);
    multiply = Number(num1.innerText) * Number(num2.innerText);
    divide = Number(num1.innerText) / Number(num2.innerText);
});


document.getElementById('btn').addEventListener('click', () => {

    let sign = document.getElementById('mathOperation').value;
    let bottoms = document.getElementById('bottoms');
    let total = document.getElementById('total').value

    if (total == plus && sign === '+') {
        bottoms.innerText = 'You are Correct!';
    }
    else if (total == minus && sign === '-') {
        bottoms.innerText = 'You are Correct!';
    }
    else if (total == multiply && sign === 'x') {
        bottoms.innerText = 'You are Correct!';
    }
    else if (total == divide && sign === '/') {
        bottoms.innerText = 'You are Correct!';

    } else {
        bottoms.innerText = 'You are wrong try again!'
        document.getElementById('total').value = '';

    }
});


