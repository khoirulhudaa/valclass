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
        @media screen and (min-width: 900px) and (max-width: 1920px) {
            .${propertiesWhiteSpaces[i]} { 
                ${valuesWhiteSpaces[i]}
            }
        }`;
        document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
    }
}
let propertiesWhiteSpaces2 = [
    'mb:v-space-wrap',
    'mb:v-space-nowrap',
    'mb:v-space-pre',
    'mb:v-space-pre-line',
    'mb:v-space-pre-wrap'
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
        @media screen and (min-width: 320px) and (max-width: 600px){
            .${propertiesWhiteSpaces2[i]} { 
                ${valuesWhiteSpaces2[i]}
            }
        }`;
        document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
    }
}
let propertiesWhiteSpaces3 = [
    'tb:v-space-wrap',
    'tb:v-space-nowrap',
    'tb:v-space-pre',
    'tb:v-space-pre-line',
    'tb:v-space-pre-wrap'
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
        @media screen and (min-width: 600px) and (max-width: 900px){
            .${propertiesWhiteSpaces3[i]} { 
                ${valuesWhiteSpaces3[i]}
            }
        }`;
        document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
    }
}
let propertiesWhiteSpaces4 = [
    'pc:v-space-wrap',
    'pc:v-space-nowrap',
    'pc:v-space-pre',
    'pc:v-space-pre-line',
    'pc:v-space-pre-wrap'
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
        @media screen and (min-width: 1920px){
            .${propertiesWhiteSpaces4[i]} { 
                ${valuesWhiteSpaces4[i]}
            }
        }`;
        document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
    }
}