let propertiesTextColors = [
    'v-text-dark',
    'v-text-light',
    'v-text-danger',
    'v-text-info',
    'v-text-primary',
    'v-text-smooth',
    'v-text-transparent',
    'v-text-secondary',
    'v-text-warning',
    'v-text-green',
    'v-text-white'
]
let valuesTextColors = [
    'color: rgb(70, 70, 70);',
    'color: rgb(238, 238, 238);',
    'color: rgb(255, 76, 44);',
    'color: rgb(2, 168, 245);',
    'color: rgb(42, 131, 248);',
    'color: rgb(255, 242, 242);',
    'color: transparent;',
    'color: rgb(141, 141, 141);',
    'color: rgb(253, 207, 0);',
    'color: rgb(14, 253, 201);',
    'color: #fff;'
]
for (var i = 0; i <= propertiesTextColors.length; i++) {
    if (document.querySelector(`.${propertiesTextColors[i]}`) && !document.querySelector('style').innerText.includes(propertiesTextColors[i])) {
        let styles = ` 
                    .${propertiesTextColors[i]} { 
                    ${valuesTextColors[i]}
                }`;
        document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
    }
}