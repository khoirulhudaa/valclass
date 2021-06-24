if (document.querySelector('.v-navbar')) {

    document.querySelector('.v-btn-toggle input').addEventListener('click', () => {
        document.querySelector('.v-navbar').classList.toggle('show')
    })
}

if (document.querySelector('.v-navbar-fixed')) {

    document.querySelector('.v-btn-toggle input').addEventListener('click', () => {
        document.querySelector('.v-navbar-fixed').classList.toggle('show')
    })
}
