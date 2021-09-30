let propertiesTextTransform = [
    'v-text-uppercase',
    'v-text-lowercase',
    'v-text-capitalize',
    'v-text-none'
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
    'mb:v-text-uppercase',
    'mb:v-text-lowercase',
    'mb:v-text-capitalize',
    'mb:v-text-none'
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
    'tb:v-text-uppercase',
    'tb:v-text-lowercase',
    'tb:v-text-capitalize',
    'tb:v-text-none'
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
    'pc:v-text-uppercase',
    'pc:v-text-lowercase',
    'pc:v-text-capitalize',
    'pc:v-text-none'
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