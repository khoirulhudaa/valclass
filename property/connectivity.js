if (document.querySelector('.v-connect')) {
    for (var i = 0; i < document.querySelectorAll('.v-connect').length; i++) {
        if (navigator.onLine) {
            document.querySelectorAll('.v-connect')[i].innerHTML = 'Online'

        } else {
            document.querySelectorAll('.v-connect')[i].innerHTML = 'Offline'
        }
    }
}