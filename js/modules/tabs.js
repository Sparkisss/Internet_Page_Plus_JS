function tabs(tabsSelector, tabsContentSelector, tabsParentSelector, activeClass) {   

    let tabs = document.querySelectorAll(tabsSelector),
        tabContent = document.querySelectorAll(tabsContentSelector),          
        parentElement = document.querySelector(tabsParentSelector);       

    function tabElementRemove() {
        tabContent.forEach(item => {
            item.classList.add('hide');
            item.classList.remove('show', 'fade');
        });

        tabs.forEach(item => {
            item.classList.remove(activeClass);
        });        
       };

    function tabElementShow(i = 0) {
        tabContent[i].classList.add('show', 'fade');
        tabContent[i].classList.remove('hide');
        tabs[i].classList.add(activeClass);
    }
    
    tabElementRemove();
    tabElementShow();

    parentElement.addEventListener('click', (e) => {
        const target = e.target;

        if(target && target.classList.contains(tabsSelector.slice(1))) {
            tabs.forEach((item, i) => {
                if(target === item) {
                    tabElementRemove();
                    tabElementShow(i);
                };                    
            });
        };
    });             
    
}

export default tabs;