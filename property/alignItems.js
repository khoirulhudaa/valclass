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
            @media screen and (min-width: 900px) and (max-width: 1920px) {
                .${propertiesAlignItems[i]} { 
                    ${valuesAlignItems[i]}
                }
            }`;
        document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
    }
}

let propertiesAlignItems2 = [
    'mb:v-items-center',
    'mb:v-items-flex-end',
    'mb:v-items-flex-start',
    'mb:v-items-stretch',
    'mb:v-items-baseline'
]
let valuesAlignItems2 = [
    'align-items: center;',
    'align-items: flex-end;',
    'align-items: flex-start;',
    'align-items: stretch;',
    'align-items: baseline;'
]
for (var i = 0; i <= propertiesAlignItems2.length; i++) {
    if (document.querySelector(`.${propertiesAlignItems2[i]}`) && !document.querySelector('style').innerText.includes(propertiesAlignItems2[i])) {
        let styles = ` 
            @media screen and (min-width: 320px) and (max-width: 600px){
                .${propertiesAlignItems2[i]} { 
                    ${valuesAlignItems2[i]}
                }
            }`;
        document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
    }
}

let propertiesAlignItems3 = [
    'tb:v-items-center',
    'tb:v-items-flex-end',
    'tb:v-items-flex-start',
    'tb:v-items-stretch',
    'tb:v-items-baseline'
]
let valuesAlignItems3 = [
    'align-items: center;',
    'align-items: flex-end;',
    'align-items: flex-start;',
    'align-items: stretch;',
    'align-items: baseline;'
]
for (var i = 0; i <= propertiesAlignItems3.length; i++) {
    if (document.querySelector(`.${propertiesAlignItems3[i]}`) && !document.querySelector('style').innerText.includes(propertiesAlignItems3[i])) {
        let styles = ` 
            @media screen and (min-width: 600px) and (max-width: 900px){
                .${propertiesAlignItems3[i]} { 
                    ${valuesAlignItems3[i]}
                }
            }`;
        document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
    }
}

let propertiesAlignItems4 = [
    'pc:v-items-center',
    'pc:v-items-flex-end',
    'pc:v-items-flex-start',
    'pc:v-items-stretch',
    'pc:v-items-baseline'
]
let valuesAlignItems4 = [
    'align-items: center;',
    'align-items: flex-end;',
    'align-items: flex-start;',
    'align-items: stretch;',
    'align-items: baseline;'
]
for (var i = 0; i <= propertiesAlignItems4.length; i++) {
    if (document.querySelector(`.${propertiesAlignItems4[i]}`) && !document.querySelector('style').innerText.includes(propertiesAlignItems4[i])) {
        let styles = ` 
            @media screen and (min-width: 1920px){
                .${propertiesAlignItems4[i]} { 
                    ${valuesAlignItems4[i]}
                }
            }`;
        document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
    }
}