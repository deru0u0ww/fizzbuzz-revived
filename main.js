'use strict';

    const FizzBuzz = {
        elements:{},
        init: function() {
            this.createEl();
            this.bindBtn();
        },
        createEl() {
            const title = 'FizzBuzz';
            const msg = '数字の入力をお願いします';
            const alertMsg = '1~100までの数字を入力してください';


            //タイトルボタンの生成
            const h1El = document.querySelector('#title');
            //スタートボタンを生成
            const startBtn = document.querySelector('#startBtn');
            //リセットボタンを生成
            const resetBtn = document.querySelector('#resetBtn');
            const mainEl = document.querySelector('#main');
            const result_sectionEl = document.querySelector('#result');
            // const olEl = document.querySelector('#ol');
            
            if( !h1El || !startBtn || !resetBtn || !mainEl || !result_sectionEl) { throw new Error('要素が見つかりません。');}
            h1El.textContent = title;
            this.elements = { msg, alertMsg,result_sectionEl,mainEl, startBtn, resetBtn };
        },
        fizzbuzz(){
            const { msg, alertMsg, mainEl, result_sectionEl} = this.elements;
            // 既存の結果エリアをクリア（要素は残す）
            result_sectionEl.replaceChildren();

            const n = Number(prompt(msg));
            if (!Number.isInteger(n) || n < 1 || n > 100) {
                    alert(alertMsg);
                    return;
            }


            // 毎回新しい <ol> を作る（過去の li を引きずらない）
            const ol = document.createElement('ol');

            for (let i = 1; i <= n; i++) {
            const li = document.createElement('li');
            li.textContent = (i % 15 === 0) ? 'FizzBuzz'
                            : (i % 3  === 0) ? 'Fizz'
                            : (i % 5  === 0) ? 'Buzz'
                            : String(i);
            ol.appendChild(li);
            }
                result_sectionEl.appendChild(ol);
                // result_sectionEl が main 内に無い可能性も考えて保険でアペンド
                if (!mainEl.contains(result_sectionEl)) mainEl.appendChild(result_sectionEl);
                
        },
        reset: function(){
            const { result_sectionEl } = this.elements;
            result_sectionEl.replaceChildren();   // 中身だけ消す
        },
        bindBtn: function() {
        const { startBtn, resetBtn } = this.elements;
        startBtn.addEventListener('click', ()=> {
            this.fizzbuzz();
            startBtn.disabled = true;
            resetBtn.disabled = false;
            });
        resetBtn.addEventListener('click',()=> {
            this.reset();
            resetBtn.disabled = true;
            startBtn.disabled = false;
        });
        // 初期状態
            resetBtn.disabled = true;
        }
    };
    FizzBuzz.init();
    
    

