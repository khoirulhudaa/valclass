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
    'mb_v-vertical-baseline',
    'mb_v-vertical-text-top',
    'mb_v-vertical-text-bottom',
    'mb_v-vertical-sub',
    'mb_v-vertical-super'
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
    'tb_v-vertical-baseline',
    'tb_v-vertical-text-top',
    'tb_v-vertical-text-bottom',
    'tb_v-vertical-sub',
    'tb_v-vertical-super'
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
    'pc_v-vertical-baseline',
    'pc_v-vertical-text-top',
    'pc_v-vertical-text-bottom',
    'pc_v-vertical-sub',
    'pc_v-vertical-super'
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