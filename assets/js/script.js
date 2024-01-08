(() => {
    const cta = document.querySelector('.sec-main__content__form__cta');
    const result = document.querySelector('.sec-main__content__result');
    const form = document.querySelector('.sec-main__content__form');

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        result.setAttribute('style', 'display: block !important;');
    });

})();