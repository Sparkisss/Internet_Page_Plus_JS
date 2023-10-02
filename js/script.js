'use strict'
//////////////////////////////Tabs//////////////////////////////
window.addEventListener('DOMContentLoaded', () => {
    const parentElement = document.querySelector(".tabheader__items"),
          tabContent = document.querySelectorAll(".tabcontent"),
          tabInfo = parentElement.querySelectorAll(".tabheader__item"),
          btn = document.querySelector('.btn.btn_white');          


          function tabElementRemove() {
            tabContent.forEach(item => {
                item.classList.add('hide');
                item.classList.remove('show', 'fade');

                tabInfo.forEach(item => {
                    item.classList.remove('tabheader__item_active');
                });
            });
          };

          function rabElementShow(i = 0) {
            tabContent[i].classList.add('show', 'fade');
            tabContent[i].classList.remove('hide');
            tabInfo[i].classList.add('tabheader__item_active');
          }

          parentElement.addEventListener('click', (e) => {
            const target = e.target;

            if(target && target.classList.contains("tabheader__item")) {
                tabInfo.forEach((item, i) => {
                    if(target === item) {
                        tabElementRemove();
                        rabElementShow(i);
                    };                    
                });
            };
          });
         //////////////////////////////My style//////////////////////////////
          btn.addEventListener('click', myAnimation);         

          function myAnimation() {
            const logo = document.querySelector('.header__link');
            
            let pos = 0;
            const id = setInterval(frame, 30);
            function frame() {
                if (pos == 20){
                    clearInterval(id);
                    
                }else {
                    console.log('ds');
                    pos++;
                    logo.style.fontSize = pos + 'px';
                }
            }
          }        
          tabElementRemove();
          rabElementShow();
          //////////////////////////////Timer//////////////////////////////

          const deadLine = '2023-11-01';

          function getTimeRemaining (endTime) {
            const t = Date.parse(endTime) - Date.parse(new Date()),
                  days = Math.floor(t / (1000 * 60 * 60 * 24)),
                  hours = Math.floor((t / (1000 * 60 * 60) % 24)),
                  minutes = Math.floor((t / 1000 / 60) % 60),
                  seconds = Math.floor((t / 1000) % 60);                  

            return {
                totalCount: t,
                days: days,
                hours: hours,
                minutes: minutes,
                seconds: seconds
            };        
          };

          function getZero (num) {
            if (num >= 0 && num < 10) return `0${num}`;
            else return num;
          }



        function setClock (selector, endtime) {
            const timer = document.querySelector(selector),
                  days = timer.querySelector('#days'),
                  hours = timer.querySelector('#hours'),
                  minutes = timer.querySelector('#minutes'),
                  seconds = timer.querySelector('#seconds'),
                  timerInterval = setInterval(updateClock, 1000);
                  updateClock ();

                  function updateClock () {
                    const t = getTimeRemaining(endtime);
                    
                    days.innerHTML = getZero(t.days);
                    hours.innerHTML = getZero(t.hours);
                    minutes.innerHTML = getZero(t.minutes);
                    seconds.innerHTML = getZero(t.seconds);

                    if (t.totalCount <= 0) {
                        clearInterval(timerInterval);
                    }
                  }
        }

setClock('.timer', deadLine);






});