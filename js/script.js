const header = document.querySelector('#header')
const menu = document.querySelector('#menu')
const productInfo = document.querySelector('#productInfo')
const descriptions = document.querySelectorAll('.carousel-item-description')

function toggleTheme() {
    header.classList.toggle('navbar-dark')
    header.classList.toggle('bg-dark')
    menu.classList.toggle('navbar-dark')
    menu.classList.toggle('bg-dark')
    document.body.classList.toggle('bg-dark')
    if (productInfo) {
        productInfo.classList.toggle('text-dark')
    }
}

function toggleDescriptions() {
    descriptions.forEach((item) => {
        item.classList.toggle('d-md-block')
    })
}

function showInformations() {
    alert(`
        Desenvolvido por: Kayky de Sousa
        Github: https://github.com/KaykySousa/revisao_pw
        3º DS-A
    `)
}
