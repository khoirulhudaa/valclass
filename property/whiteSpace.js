let propertiesWhiteSpaces = [
    'v-space-wrap',
    'v-space-nowrap',
    'v-space-pre',
    'v-space-pre-line',
    'v-space-pre-wrap'
]
let valuesWhiteSpaces = [
    'white-space: collapse;',
    'white-space: hidden;',
    'white-space: pre;',
    'white-space: pre-line;',
    'white-space: pre-wrap;'
]
for (var i = 0; i <= propertiesWhiteSpaces.length; i++) {
    if (document.querySelector(`.${propertiesWhiteSpaces[i]}`) && !document.querySelector('style').innerText.includes(propertiesWhiteSpaces[i])) {
        let styles = ` 
            .${propertiesWhiteSpaces[i]} { 
                ${valuesWhiteSpaces[i]}
            }`;
        document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
    }
}