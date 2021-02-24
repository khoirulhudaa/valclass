let propertiesTextAlign = [
    'v-text-center',
    'v-text-left',
    'v-text-right',
    'v-text-jsutify'
]
let valuesTextAlign = [
    'text-align: center;',
    'text-align: left;',
    'text-align: right;',
    'text-align: justify;'
]
for (var i = 0; i <= propertiesTextAlign.length; i++) {
    if (document.querySelector(`.${propertiesTextAlign[i]}`) && !document.querySelector('style').innerText.includes(propertiesTextAlign[i])) {
        let styles = ` 
                    .${propertiesTextAlign[i]} { 
                    ${valuesTextAlign[i]}
                }`;
        document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
    }
}