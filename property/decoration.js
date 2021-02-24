let propertiesDirections = [
    'v-decoration-none',
    'v-decoration-dashed',
    'v-decoration-double',
    'v-decoration-through',
    'v-decoration-overline',
    'v-decoration-solid',
    'v-decoration-underline',
    'v-decoration-wavy'
]
let valuesDirections = [
    'text-decoration: none',
    'text-decoration: dashed;',
    'text-decoration: double;',
    'text-decoration: line-through;',
    'text-decoration: overline;',
    'text-decoration: solid;',
    'text-decoration: underline;',
    'text-decoration: wavy;'
]
for (var i = 0; i <= propertiesDirections.length; i++) {
    if (document.querySelector(`.${propertiesDirections[i]}`) && !document.querySelector('style').innerText.includes(propertiesDirections[i])) {
        let styles = ` 
                .${propertiesDirections[i]} { 
                    ${valuesDirections[i]}
                }`;
        document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
    }
}