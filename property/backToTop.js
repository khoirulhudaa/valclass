if (document.querySelector('.v-back')) {
    document.querySelector('.v-back').addEventListener('click', () => {
        let style = `
                html {
                    scroll-behavior: smooth
                }
                `
        if (!document.querySelector('style').innerText.includes(style)) {
            document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style))
        }

        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0  // For Chrome, Firefox, IE dan Opera
    })
}