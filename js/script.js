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

        //   function logger() {
        //     alert('Bro, you shoud follow me!');
        //   };

        //   let id = setTimeout(function log() {
        //     console.log('Hello');
        //     id =setTimeout(log, 500);
        //   },500);

          tabElementRemove();
          rabElementShow();
});