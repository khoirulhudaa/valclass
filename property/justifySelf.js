let propertiesSelf = [
    'v-just-self-auto',
    'v-just-self-start',
    'v-just-self-end',
    'v-just-self-center',
    'v-just-self-stretch'
]
let valuesSelf = [
    'justify-self: auto',
    'justify-self: start',
    'justify-self: end;',
    'justify-self: center;',
    'justify-self: stretch;'
]
for (var i = 0; i <= propertiesSelf.length; i++) {
    if (document.querySelector(`.${propertiesSelf[i]}`) && !document.querySelector('style').innerText.includes(propertiesSelf[i])) {
        let styles = ` 
            .${propertiesSelf[i]} { 
                ${valuesSelf[i]}
            }`;
        document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
    }
}