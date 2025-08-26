'use strict';
{
    const fizzBuzzObj = {
        title: 'FizzBuzz',
        content:'0~100までの数字を入力してFizzBuzzを出力してみよう',
        message:'数字の入力をお願いします',
        fizzbuzz: function() {
            const checkMath = prompt(this.message);    
            const main = document.querySelector('main');
            const section  = document.createElement('section');
            const ol = document.createElement('ol');

            for (let i =1; i <= checkMath; i ++) {
                const li = document.createElement('li');
                if ( i%3 === 0 && i%5 === 0 ) {
                    li.textContent = 'FizzBuzz';
                } else if( i%3 === 0 ) {
                    li.textContent = 'Fizz';
                } else if( i%5 === 0 ) {
                    li.textContent = 'Buzz';
                } else {
                    li.textContent = i;
                }
                ol.appendChild(li);
                section.appendChild(ol);
                main.appendChild(section);
            }
        },
        reset: function() {
            location.reload();
        }
    }
    const startButton = document.getElementById('start-button');
    startButton.addEventListener('click', (e)=> {
        fizzBuzzObj.fizzbuzz();
        },false);
    const resetButton = document.getElementById('reset-button');
    resetButton.addEventListener('click',()=> {
        fizzBuzzObj.reset();
    },false);

}