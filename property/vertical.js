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
        @media screen and (min-width: 900px) and (max-width: 1920px) {
            .${propertiesVertical[i]} { 
                ${valuesVertical[i]}
            }
        }`;
        document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
    }
}
let propertiesVertical2 = [
    'mb:v-vertical-baseline',
    'mb:v-vertical-text-top',
    'mb:v-vertical-text-bottom',
    'mb:v-vertical-sub',
    'mb:v-vertical-super'
]
let valuesVertical2 = [
    'vertical-align: baseline;',
    'vertical-align: text-top;',
    'vertical-align: text-bottom;',
    'vertical-align: sub;',
    'vertical-align: super;'
]
for (var i = 0; i <= propertiesVertical2.length; i++) {
    if (document.querySelector(`.${propertiesVertical2[i]}`) && !document.querySelector('style').innerText.includes(propertiesVertical2[i])) {
        let styles = ` 
        @media screen and (min-width: 320px) and (max-width: 600px){
            .${propertiesVertical2[i]} { 
                ${valuesVertical2[i]}
            }
        }`;
        document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
    }
}
let propertiesVertical3 = [
    'tb:v-vertical-baseline',
    'tb:v-vertical-text-top',
    'tb:v-vertical-text-bottom',
    'tb:v-vertical-sub',
    'tb:v-vertical-super'
]
let valuesVertical3 = [
    'vertical-align: baseline;',
    'vertical-align: text-top;',
    'vertical-align: text-bottom;',
    'vertical-align: sub;',
    'vertical-align: super;'
]
for (var i = 0; i <= propertiesVertical3.length; i++) {
    if (document.querySelector(`.${propertiesVertical3[i]}`) && !document.querySelector('style').innerText.includes(propertiesVertical3[i])) {
        let styles = ` 
        @media screen and (min-width: 600px) and (max-width: 900px){
            .${propertiesVertical3[i]} { 
                ${valuesVertical3[i]}
            }
        }`;
        document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
    }
}
let propertiesVertical4 = [
    'pc:v-vertical-baseline',
    'pc:v-vertical-text-top',
    'pc:v-vertical-text-bottom',
    'pc:v-vertical-sub',
    'pc:v-vertical-super'
]
let valuesVertical4 = [
    'vertical-align: baseline;',
    'vertical-align: text-top;',
    'vertical-align: text-bottom;',
    'vertical-align: sub;',
    'vertical-align: super;'
]
for (var i = 0; i <= propertiesVertical4.length; i++) {
    if (document.querySelector(`.${propertiesVertical4[i]}`) && !document.querySelector('style').innerText.includes(propertiesVertical4[i])) {
        let styles = ` 
        @media screen and (min-width: 1920px){
            .${propertiesVertical4[i]} { 
                ${valuesVertical4[i]}
            }
        }`;
        document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
    }
}