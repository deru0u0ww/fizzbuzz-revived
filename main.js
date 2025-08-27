'use strict';
{
    const FizzBuzzObj = {
        title: 'FizzBuzz',
        createBtn: function() {
            const main = document.querySelector('main');
            const h1 = document.createElement('h1');
            h1.textContent = this.title;
            main.appendChild(h1);

            const startButton = document.createElement('button');
            startButton.id = 'start-button';
            startButton.textContent = 'Start';
            main.appendChild(startButton);

            const resetButton = document.createElement('button');
            resetButton.id = 'reset-button';
            resetButton.textContent = 'Reset';
            main.appendChild(resetButton);
        },
        content:'0~100までの数字を入力してFizzBuzzを出力してみよう',
        message:'数字の入力をお願いします',
        
        fizzbuzz: function() {
            //既存の結果を削除
            const oldSection = document.getElementById('result');
            if (oldSection) oldSection.remove();

            const checkMath = Number(prompt(this.message));  
            if ( isNaN(checkMath) || checkMath < 1 || checkMath > 100 ) {
                alert('1~100までの数字を入力してください');
                return;
            }


            const main = document.querySelector('main');
            const section  = document.createElement('section');
            //結果管理のためのid付与付与
            section.id = 'result';
            const ol = document.createElement('ol');

            for (let i = 1; i <= checkMath; i ++) {
                const li = document.createElement('li');
                if ( i%3 === 0 && i%5 === 0 ) {
                    li.textContent = 'FizzBuzz';
                    li.style.color = 'yellowgreen';
                } else if( i%3 === 0 ) {
                    li.textContent = 'Fizz';
                    li.style.color = 'blue';
                } else if( i%5 === 0 ) {
                    li.textContent = 'Buzz';
                    li.style.color = 'red';
                } else {
                    li.textContent = i;
                }
                ol.appendChild(li);
            }
                section.appendChild(ol);
                main.appendChild(section);
        },
        reset: function() {
            const oldSection = document.getElementById('result');
            if (oldSection) oldSection.remove();
        }
    };
    //初期化処理
    FizzBuzzObj.createBtn();
    const startButton = document.getElementById('start-button');
    startButton.addEventListener('click', ()=> {
        FizzBuzzObj.fizzbuzz();
        },false);
    const resetButton = document.getElementById('reset-button');
    resetButton.addEventListener('click',()=> {
        FizzBuzzObj.reset();
       
    },false);

}