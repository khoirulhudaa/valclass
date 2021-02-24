if (document.querySelector('.v-navbar')) {

    document.querySelector('.v-btn-toggle input').addEventListener('click', () => {
        document.querySelector('.v-navbar ul').classList.toggle('show')
    })
}

if (document.querySelector('.v-navbar-fixed')) {

    document.querySelector('.v-btn-toggle input').addEventListener('click', () => {
        document.querySelector('.v-navbar-fixed ul').classList.toggle('show')
    })
}