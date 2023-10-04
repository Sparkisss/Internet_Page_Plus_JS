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
          tabElementRemove();
          rabElementShow();

          //////////////////////////////Timer//////////////////////////////

          const deadLine = '2023-11-01';

      function getTimeRemaning(endtime) {
        let days, hours, minutes, seconds;
        const t = Date.parse(endtime) - Date.parse(new Date());
        if (t <= 0) {
          days = 0;
          hours = 0;
          minutes = 0;
          seconds = 0;
        }else {
          days = Math.floor(t / (1000 * 60 * 60 * 24)),
          hours = Math.floor((t / (1000 * 60 * 60) % 24)),
          minutes = Math.floor((t / 1000 / 60)% 60),
          seconds = Math.floor((t / 1000) % 60);
        }
              

              return {
                tottal: t,
                days: days,
                hours: hours,
                minutes: minutes,
                seconds: seconds 
              };
      };
      
      function getZero(num) {
        if (num >= 0 && num < 10) return `0${num}`;
        else return num;
      }

      function setClock(selector, endtime) {
        const timer = document.querySelector(selector),
              days = timer.querySelector('#days'),
              hours = timer.querySelector('#hours'),
              minutes = timer.querySelector('#minutes'),
              seconds = timer.querySelector('#seconds'),
              timerInterval = setInterval(updateClock, 1000);

              updateClock();

              function updateClock() {
                const t = getTimeRemaning(endtime);

                days.innerHTML = getZero(t.days);
                hours.innerHTML = getZero(t.hours);
                minutes.innerHTML = getZero(t.minutes);
                seconds.innerHTML = getZero(t.seconds);

                if (t.tottal <= 0) {
                  clearInterval(timerInterval);
                }
              };
      };

      setClock('.timer', deadLine);

//////////////////////////////Modal window//////////////////////////////
const modalBtn = document.querySelectorAll('[data-modal]'),
      modal = document.querySelector('.modal'),
      modalClose = document.querySelector('[data-close]');

const modalTimer = setTimeout(showModalWindow, 3000);


      modalBtn.forEach(btn => {
        btn.addEventListener('click', showModalWindow);
      });

      modalClose.addEventListener('click', hiddenModalWindow);

      document.addEventListener("keydown", function(event) {
        if (event.key === "Escape" && modal.classList.contains('show')) {
          hiddenModalWindow();
        };
      });
      
      modal.addEventListener('click', (e) => {
        if (e.target === modal) hiddenModalWindow();
      });

      function showModalWindow() {
        modal.classList.add("show");
        modal.classList.remove('hidden');
        document.body.style.overflow = 'hidden';
        clearInterval(modalTimer);
      };

      function hiddenModalWindow() {
        modal.classList.add('hidden');
        modal.classList.remove("show");
        document.body.style.overflow = '';
      };

      function showModalWindowByScroll() {
        if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight - 1) {
          showModalWindow();
          window.removeEventListener('scroll', showModalWindowByScroll);
        };
      };

      window.addEventListener('scroll', showModalWindowByScroll);











});