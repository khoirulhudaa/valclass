let propertiesVertical = [
    'v-vertical-baseline',
    'v-vertical-text-top',
    'v-vertical-text-bottom',
    'v-vertical-sub',
    'v-vertical-super'
]
let valuesVertical = [
    'vertical-align: baseline;',
    'vertical-align: text-top;',
    'vertical-align: text-bottom;',
    'vertical-align: sub;',
    'vertical-align: super;'
]
for (var i = 0; i <= propertiesVertical.length; i++) {
    if (document.querySelector(`.${propertiesVertical[i]}`) && !document.querySelector('style').innerText.includes(propertiesVertical[i])) {
        let styles = ` 
            .${propertiesVertical[i]} { 
                ${valuesVertical[i]}
            }`;
        document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
    }
}