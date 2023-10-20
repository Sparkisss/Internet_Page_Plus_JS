function showModalWindow(modalSelector, modalTimer) {
  const modal = document.querySelector(modalSelector); 
  modal.classList.add("show");
  modal.classList.remove('hidden');
  document.body.style.overflow = 'hidden';

  if (modalTimer) {
    clearInterval(modalTimer);
  }
 
};

function hiddenModalWindow(modalSelector) {
  const modal = document.querySelector(modalSelector); 
  modal.classList.add('hidden');
  modal.classList.remove("show");
  document.body.style.overflow = '';
};

function modal(triggerSelector, modalSelector, modalTimer) {
    const modalBtn = document.querySelectorAll(triggerSelector),
          modal = document.querySelector(modalSelector); 

    modalBtn.forEach(btn => {
        btn.addEventListener('click', () => showModalWindow(modalSelector, modalTimer));
      });      

    document.addEventListener("keydown", function(event) {
        if (event.key === "Escape" && modal.classList.contains('show')) {
          hiddenModalWindow(modalSelector);
        };
      });
      
    modal.addEventListener('click', (e) => {
        if (e.target === modal || e.target.getAttribute('data-close') == '') hiddenModalWindow(modalSelector);
      });    

    function showModalWindowByScroll() {
        if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight - 1) {
          showModalWindow(modalSelector, modalTimer);
          window.removeEventListener('scroll', showModalWindowByScroll);
        };
      };

    window.addEventListener('scroll', showModalWindowByScroll);
}

export default modal;
export {showModalWindow};
export {hiddenModalWindow};