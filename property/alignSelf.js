let propertiesAlignSelf = [
    'v-self-center',
    'v-self-flex-end',
    'v-self-flex-start',
    'v-self-stretch',
    'v-self-baseline',
    'v-self-auto'
]
let valuesAlignSelf = [
    'align-self: center;',
    'align-self: flex-end;',
    'align-self: flex-start;',
    'align-self: stretch;',
    'align-self: baseline;',
    'align-self: auto;',
]
for (var i = 0; i <= propertiesAlignSelf.length; i++) {
    if (document.querySelector(`.${propertiesAlignSelf[i]}`) && !document.querySelector('style').innerText.includes(propertiesAlignSelf[i])) {
        let styles = ` 
                .${propertiesAlignSelf[i]} { 
                    ${valuesAlignSelf[i]}
                }`;
        document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
    }
}