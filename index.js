const navSlide = () => {
    const hamburgerButton = document.querySelector('.hamburger-button');
    const buttonsMenu = document.querySelector('.buttons-menu');
    const closeButton = document.querySelector('.close-button');
    hamburgerButton.addEventListener('click',() => {
        buttonsMenu.classList.toggle('nav-active');
        buttonsMenu.style.animation = "opacityChange 0.75s ease forwards"
    })
    closeButton.addEventListener('click',() => {
        buttonsMenu.classList.toggle('nav-active');
        buttonsMenu.style.animation = "opacityReverse 0.75s ease forwards"
    })
}

navSlide();
