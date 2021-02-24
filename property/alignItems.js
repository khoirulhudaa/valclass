let propertiesAlignItems = [
    'v-items-center',
    'v-items-flex-end',
    'v-items-flex-start',
    'v-items-stretch',
    'v-items-baseline'
]
let valuesAlignItems = [
    'align-items: center;',
    'align-items: flex-end;',
    'align-items: flex-start;',
    'align-items: stretch;',
    'align-items: baseline;'
]
for (var i = 0; i <= propertiesAlignItems.length; i++) {
    if (document.querySelector(`.${propertiesAlignItems[i]}`) && !document.querySelector('style').innerText.includes(propertiesAlignItems[i])) {
        let styles = ` 
                .${propertiesAlignItems[i]} { 
                    ${valuesAlignItems[i]}
                }`;
        document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
    }
}