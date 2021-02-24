let propertiesItems = [
    'v-just-items-auto',
    'v-just-items-start',
    'v-just-items-end',
    'v-just-items-center',
    'v-just-items-flex-end',
    'v-just-items-flex-start'
]
let valuesItems = [
    'justify-items: auto',
    'justify-items: start',
    'justify-items: end;',
    'justify-items: center;',
    'justify-items: flex-end;',
    'justify-items: flex-start;'
]
for (var i = 0; i <= propertiesItems.length; i++) {
    if (document.querySelector(`.${propertiesItems[i]}`) && !document.querySelector('style').innerText.includes(propertiesItems[i])) {
        let styles = ` 
            .${propertiesItems[i]} { 
                ${valuesItems[i]}
            }`;
        document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
    }
}