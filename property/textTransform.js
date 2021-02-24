let propertiesTextTransform = [
    'v-text-uppercase',
    'v-text-lowercase',
    'v-text-capitalize',
    'v-text-none'
]
let valuesTextTransform = [
    'text-transform: uppercase;',
    'text-transform: lowercase;',
    'text-transform: capitalize;',
    'text-transform: none;'
]
for (var i = 0; i <= propertiesTextTransform.length; i++) {
    if (document.querySelector(`.${propertiesTextTransform[i]}`) && !document.querySelector('style').innerText.includes(propertiesTextTransform[i])) {
        let styles = ` 
            .${propertiesTextTransform[i]} { 
                ${valuesTextTransform[i]}
            }`;
        document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
    }
}