'use strict';

    const FizzBuzz = {
        elements:{},
        init: function() {

            this.createEl();
            this.bindBtn();
        },
        createEl: function() {
            const title = 'FizzBuzz';
            const msg = '数字の入力をお願いします';
            const alertMsg = '1~100までの数字を入力してください'
            //タイトルボタンの生成
            const h1El = document.querySelector('#title');
            h1El.textContent = title;
            //スタートボタンを生成
            const startBtn = document.querySelector('#startBtn');
            //リセットボタンを生成
            const resetBtn = document.querySelector('#reset');
            const mainEl = document.querySelector('#main');
            const result_sectionEl = document.querySelector('#result');
            const olEl = document.querySelector('#ol');
            

            this.elements = { msg, alertMsg,result_sectionEl,mainEl, olEl, startBtn, resetBtn };
        },
        fizzbuzz: function() {
            const { msg, alertMsg, mainEl, result_sectionEl, olEl} = this.elements;
            //既存の結果を削除
            const oldSection = document.getElementById('result');
            if (oldSection) oldSection.remove();

            const checkMath = Number(prompt(msg));  
            if ( isNaN(checkMath) || checkMath < 1 || checkMath > 100 ) {
                alert(alertMsg);
                return;
            }

            for (let i = 1; i <= checkMath; i ++) {
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
                olEl.appendChild(li);
            }
                result_sectionEl.appendChild(olEl);
                
                mainEl.appendChild(result_sectionEl);
        },
        reset: function() {
            const oldSection = document.getElementById('result');
            if (oldSection) oldSection.remove();
        },
        bindBtn: function() {
        const { startBtn, resetBtn } = this.elements;
        startBtn.addEventListener('click', ()=> {
            this.fizzbuzz();
            },false);
        // resetBtn.addEventListener('click',()=> {
        //     this.reset();
        // },false);
        }
    };
    FizzBuzz.init();
    
    

