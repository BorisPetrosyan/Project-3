export default class ShowInfo {
    constructor(triggers) {
        this.btns = document.querySelectorAll(triggers);
    }

    init() {
        this.btns.forEach(btn => {
            btn.addEventListener('click', () => {
                let plusMinus = btn.firstElementChild.firstElementChild
                const sibling = btn.closest('.module__info-show').nextElementSibling;
                sibling.classList.add('animated', 'slideInUp')


                sibling.classList.toggle('msg');

                sibling.classList.add('animated', 'slideInUp')

                sibling.style.marginTop = '20px'
                plusMinus.classList.toggle('hide')

            })
        })
    }
}