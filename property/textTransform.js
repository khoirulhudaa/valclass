let propertiesTextTransform = [
    'v-text-transform-upper',
    'v-text-transform-lower',
    'v-text-transform-capital',
    'v-text-transform-none'
]
let valuesTextTransform = [
    'text-transform: uppercase;',
    'text-transform: lowercase;',
    'text-transform: capitalize;',
    'text-transform: none;'
]
for (var i = 0; i <= propertiesTextTransform.length; i++) {
    if (document.querySelector(`.${propertiesTextTransform[i]}`) && !document.querySelector('style').innerText.includes(propertiesTextTransform[i])) {
        let styles = ` 
        @media screen and (min-width: 900px) and (max-width: 1920px) {
            .${propertiesTextTransform[i]} { 
                ${valuesTextTransform[i]}
            }
        }`;
        document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
    }
}
let propertiesTextTransform2 = [
    'mb_v-text-transform-upper',
    'mb_v-text-transform-lower',
    'mb_v-text-transform-capital',
    'mb_v-text-transform-none'
]
let valuesTextTransform2 = [
    'text-transform: uppercase;',
    'text-transform: lowercase;',
    'text-transform: capitalize;',
    'text-transform: none;'
]
for (var i = 0; i <= propertiesTextTransform2.length; i++) {
    if (document.querySelector(`.${propertiesTextTransform2[i]}`) && !document.querySelector('style').innerText.includes(propertiesTextTransform2[i])) {
        let styles = ` 
        @media screen and (min-width: 320px) and (max-width: 600px){
            .${propertiesTextTransform2[i]} { 
                ${valuesTextTransform2[i]}
            }
        }`;
        document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
    }
}
let propertiesTextTransform3 = [
    'tb_v-text-transform-upper',
    'tb_v-text-transform-lower',
    'tb_v-text-transform-capital',
    'tb_v-text-transform-none'
]
let valuesTextTransform3 = [
    'text-transform: uppercase;',
    'text-transform: lowercase;',
    'text-transform: capitalize;',
    'text-transform: none;'
]
for (var i = 0; i <= propertiesTextTransform3.length; i++) {
    if (document.querySelector(`.${propertiesTextTransform3[i]}`) && !document.querySelector('style').innerText.includes(propertiesTextTransform3[i])) {
        let styles = ` 
        @media screen and (min-width: 600px) and (max-width: 900px){
            .${propertiesTextTransform3[i]} { 
                ${valuesTextTransform3[i]}
            }
        }`;
        document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
    }
}
let propertiesTextTransform4 = [
    'pc_v-text-transform-upper',
    'pc_v-text-transform-lower',
    'pc_v-text-transform-capital',
    'pc_v-text-transform-none'
]
let valuesTextTransform4 = [
    'text-transform: uppercase;',
    'text-transform: lowercase;',
    'text-transform: capitalize;',
    'text-transform: none;'
]
for (var i = 0; i <= propertiesTextTransform4.length; i++) {
    if (document.querySelector(`.${propertiesTextTransform4[i]}`) && !document.querySelector('style').innerText.includes(propertiesTextTransform4[i])) {
        let styles = ` 
        @media screen and (min-width: 1920px){
            .${propertiesTextTransform4[i]} { 
                ${valuesTextTransform4[i]}
            }
        }`;
        document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
    }
}