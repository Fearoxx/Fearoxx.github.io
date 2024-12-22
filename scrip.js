//let menuButton = $(".menu__button")
//let variable = getComputedStyle(':root').getPropertyValue('--standartCol')
//menuButton.width = menuButton.style.width
//let menuButtonWidth = menuButton.innerWidth
let nav = $("nav")
let menuButton = $(".menu__button")

menuButton.on('click', function() {
    let buttonWidth = menuButton.outerWidth() // Используем outerWidth для учета padding и border
    let navWidth = nav.outerWidth()

    anime({
        targets: '.menu__button',
        width: '100%',
        duration: 2000,
    })
    
    anime({
        targets: 'nav',
        //width: menuButton.outerWidth() + 'px',
        right: 0,
        duration: 2000,
    })
    // anime({
    //     targets: ['.menu__button', 'nav'],
    //     duration: 1000,
    //     easing: 'linear',
    //     direction: 'alternate', // Добавлено для обратной анимации
    //     update: function(anim) {
    //         // Обновление ширины nav во время анимации
    //         nav.width(anim.animatables[0].target.offsetWidth)
    //     },
    //     complete: function(){
    //         // Возвращаем nav к изначальному состоянию после завершения
    //         nav.width(navWidth)
    //         //Можно и кнопку вернуть
    //         menuButton.width(buttonWidth)
    //     },
    //     autoplay: true,
    //     targets: ['.menu__button', 'nav'],
    //     width: [
    //         {value: '100%', duration: 500},
    //         {value: buttonWidth, duration: 500}
    //     ],
    // })
})