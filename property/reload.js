if(document.querySelector('.v-reload-web')) {
    for (var i = 0; i <= document.querySelectorAll('.v-reload-web').length; i++) {
        document.querySelectorAll('.v-reload-web')[i].addEventListener('click', () => {
           window.location.reload()
        })
    }
}