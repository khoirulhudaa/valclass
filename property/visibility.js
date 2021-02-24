let propertiesvisibility = [
    'v-visibility-collapse',
    'v-visibility-hidden',
    'v-visibility-visible'
]
let valuesvisibility = [
    'visibility: collapse;',
    'visibility: hidden;',
    'visibility: visible;',
]
for (var i = 0; i <= propertiesvisibility.length; i++) {
    if (document.querySelector(`.${propertiesvisibility[i]}`) && !document.querySelector('style').innerText.includes(propertiesvisibility[i])) {
        let styles = ` 
            .${propertiesvisibility[i]} { 
                ${valuesvisibility[i]}
            }`;
        document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
    }
}