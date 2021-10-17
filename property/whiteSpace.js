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
        }
        @media screen and (min-width: 900px) and (max-width: 1920px) {
            .${propertiesWhiteSpaces[i]} { 
                ${valuesWhiteSpaces[i]}
            }
        }`;
        document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
    }
}
let propertiesWhiteSpaces2 = [
    'mb_v-space-wrap',
    'mb_v-space-nowrap',
    'mb_v-space-pre',
    'mb_v-space-pre-line',
    'mb_v-space-pre-wrap'
]
let valuesWhiteSpaces2 = [
    'white-space: collapse;',
    'white-space: hidden;',
    'white-space: pre;',
    'white-space: pre-line;',
    'white-space: pre-wrap;'
]
for (var i = 0; i <= propertiesWhiteSpaces2.length; i++) {
    if (document.querySelector(`.${propertiesWhiteSpaces2[i]}`) && !document.querySelector('style').innerText.includes(propertiesWhiteSpaces2[i])) {
        let styles = ` 
        .${propertiesWhiteSpaces2[i]} { 
            ${valuesWhiteSpaces2[i]}
        }
        @media screen and (min-width: 320px) and (max-width: 600px){
            .${propertiesWhiteSpaces2[i]} { 
                ${valuesWhiteSpaces2[i]}
            }
        }`;
        document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
    }
}
let propertiesWhiteSpaces3 = [
    'tb_v-space-wrap',
    'tb_v-space-nowrap',
    'tb_v-space-pre',
    'tb_v-space-pre-line',
    'tb_v-space-pre-wrap'
]
let valuesWhiteSpaces3 = [
    'white-space: collapse;',
    'white-space: hidden;',
    'white-space: pre;',
    'white-space: pre-line;',
    'white-space: pre-wrap;'
]
for (var i = 0; i <= propertiesWhiteSpaces3.length; i++) {
    if (document.querySelector(`.${propertiesWhiteSpaces3[i]}`) && !document.querySelector('style').innerText.includes(propertiesWhiteSpaces3[i])) {
        let styles = ` 
        .${propertiesWhiteSpaces3[i]} { 
            ${valuesWhiteSpaces3[i]}
        }
        @media screen and (min-width: 600px) and (max-width: 900px){
            .${propertiesWhiteSpaces3[i]} { 
                ${valuesWhiteSpaces3[i]}
            }
        }`;
        document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
    }
}
let propertiesWhiteSpaces4 = [
    'pc_v-space-wrap',
    'pc_v-space-nowrap',
    'pc_v-space-pre',
    'pc_v-space-pre-line',
    'pc_v-space-pre-wrap'
]
let valuesWhiteSpaces4 = [
    'white-space: collapse;',
    'white-space: hidden;',
    'white-space: pre;',
    'white-space: pre-line;',
    'white-space: pre-wrap;'
]
for (var i = 0; i <= propertiesWhiteSpaces4.length; i++) {
    if (document.querySelector(`.${propertiesWhiteSpaces4[i]}`) && !document.querySelector('style').innerText.includes(propertiesWhiteSpaces4[i])) {
        let styles = ` 
        .${propertiesWhiteSpaces4[i]} { 
            ${valuesWhiteSpaces4[i]}
        }
        @media screen and (min-width: 1920px){
            .${propertiesWhiteSpaces4[i]} { 
                ${valuesWhiteSpaces4[i]}
            }
        }`;
        document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
    }
}