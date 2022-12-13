const nav = document.querySelector('.nav')
const navBtn = document.querySelector('.nav-button')
const navImage = document.querySelector('#nav-button-image')

navBtn.onclick = ()  => {
    if (nav.classList.toggle('open')) {
        navImage.src = './img/icons/close-nav.svg'
    } else {
        navImage.src = './img/icons/open-nav.svg'
    }
}

AOS.init({
    // disable: 'mobile'
    once: true
})