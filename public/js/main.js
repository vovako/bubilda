window.onload = () => {
    console.log(1)
    //вход
    const loginShowBtn = document.querySelector('.header__login-btn')
    const loginPopup = document.querySelector('#login-popup')
    const loginCloseBtn = loginPopup.querySelector('.popup__close')
    const loginBg = loginPopup.querySelector('.popup__bg')

    loginShowBtn.addEventListener('click', function(){
        loginPopup.classList.add('_active')
    })
    loginCloseBtn.addEventListener('click', function(){
        loginPopup.classList.remove('_active')
    })
    loginBg.addEventListener('click', function(){
        loginPopup.classList.remove('_active')
    })

    //регистрация
    const regShowBtn = document.querySelector('.popup__reg-btn')
    const regPopup = document.querySelector('#reg-popup')
    const regCloseBtn = regPopup.querySelector('.popup__close')
    const regBg = regPopup.querySelector('.popup__bg')

    regShowBtn.addEventListener('click', function(){
        loginPopup.classList.remove('_active')
        regPopup.classList.add('_active')
    })
    regCloseBtn.addEventListener('click', function(){
        regPopup.classList.remove('_active')
    })
    regBg.addEventListener('click', function(){
        regPopup.classList.remove('_active')
    })
}