
let nameIcons = [
    'v-facebook-icon',
    'v-car-icon'
]
let valueIcons = [
    'fab fa-facebook',
    'fas fa-car',
]

for (let i = 0; i <= nameIcons.length - 1; i++) {
    
    if (document.querySelector(`.${nameIcons[i]}`)) {
        console.log(`${valueIcons[i]}`)
        console.log(`${nameIcons[i]}`)
        document.querySelector(`.${nameIcons[i]}`).className = document.querySelector(`.${nameIcons[i]}`).className.replace(`${nameIcons[i]}`, `${valueIcons[i]}`);
    }
}