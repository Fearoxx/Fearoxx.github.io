let nav = $("nav")
let menuButton = $(".menu__button")

let buttonWidth = menuButton.outerWidth() * 2 // Используем outerWidth для учета padding и border
let navWidth = nav.outerWidth()
let condition = true
nav.css({
    width: buttonWidth + 'px',
})

function menuOpen() {
    anime({
        targets: '.menu__button',
        width: '100%',
        height: 100,
        borderRadius: 0,
        duration: 500,
        easing: 'easeInOutQuad',
    })

    anime({
        targets: 'nav',
        top: 100,
        duration: 500,
        easing: 'easeInOutQuad',
        delay: 500,
    })

    condition = false
}

function menuClose() {
    anime({
        targets: '.menu__button',
        width: '50%',
        height: 50,
        borderRadius: 10,
        duration: 500,
        easing: 'easeInOutQuad',
        delay: 500,
    })
    
    anime({
        targets: 'nav',
        top: -205,
        duration: 500,
        easing: 'easeInOutQuad',
    })

    condition = true
}

menuButton.on('click', function() {
    if(condition){
        menuOpen()
    } else {
        menuClose()
    }
})
