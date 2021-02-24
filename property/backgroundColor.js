let propertiesBgColors = [
    'v-dark',
    'v-light',
    'v-danger',
    'v-info',
    'v-primary',
    'v-smooth',
    'v-transparent',
    'v-secondary',
    'v-warning',
    'v-green',
    'v-white'
]
let valuesBgColors = [
    'background-color: rgb(70, 70, 70);',
    'background-color: rgb(238, 238, 238);',
    'background-color: rgb(255, 76, 44);',
    'background-color: rgb(2, 168, 245);',
    'background-color: rgb(42, 131, 248);',
    'background-color: rgb(255, 242, 242);',
    'background-color: transparent;',
    'background-color: rgb(141, 141, 141);',
    'background-color: rgb(253, 207, 0);',
    'background-color: rgb(14, 253, 201);',
    'background-color: #fff;'
]
for (var i = 0; i <= propertiesBgColors.length; i++) {
    if (document.querySelector(`.${propertiesBgColors[i]}`) && !document.querySelector('style').innerText.includes(propertiesBgColors[i])) {
        let styles = ` 
                    .${propertiesBgColors[i]} { 
                    ${valuesBgColors[i]}
                }`;
        document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
    }
}