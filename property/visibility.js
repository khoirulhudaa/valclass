let propertiesvisibility = [
    'v-visibility-collapse',
    'v-visibility-hidden',
    'v-visibility-visible'
]
let valuesvisibility = [
    'visibility: collapse;',
    'visibility: hidden;',
    'visibility: visible;',
]
for (var i = 0; i <= propertiesvisibility.length; i++) {
    if (document.querySelector(`.${propertiesvisibility[i]}`) && !document.querySelector('style').innerText.includes(propertiesvisibility[i])) {
        let styles = ` 
        @media screen and (min-width: 900px) and (max-width: 1920px) {
            .${propertiesvisibility[i]} { 
                ${valuesvisibility[i]}
            }
        }`;
        document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
    }
}
let propertiesvisibility2 = [
    'mb:v-visibility-collapse',
    'mb:v-visibility-hidden',
    'mb:v-visibility-visible'
]
let valuesvisibility2 = [
    'visibility: collapse;',
    'visibility: hidden;',
    'visibility: visible;',
]
for (var i = 0; i <= propertiesvisibility2.length; i++) {
    if (document.querySelector(`.${propertiesvisibility2[i]}`) && !document.querySelector('style').innerText.includes(propertiesvisibility2[i])) {
        let styles = ` 
        @media screen and (min-width: 320px) and (max-width: 600px){
            .${propertiesvisibility2[i]} { 
                ${valuesvisibility2[i]}
            }
        }`;
        document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
    }
}
let propertiesvisibility3 = [
    'tb:v-visibility-collapse',
    'tb:v-visibility-hidden',
    'tb:v-visibility-visible'
]
let valuesvisibility3 = [
    'visibility: collapse;',
    'visibility: hidden;',
    'visibility: visible;',
]
for (var i = 0; i <= propertiesvisibility3.length; i++) {
    if (document.querySelector(`.${propertiesvisibility3[i]}`) && !document.querySelector('style').innerText.includes(propertiesvisibility3[i])) {
        let styles = ` 
        @media screen and (min-width: 600px) and (max-width: 900px){
            .${propertiesvisibility3[i]} { 
                ${valuesvisibility3[i]}
            }
        }`;
        document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
    }
}
let propertiesvisibility4 = [
    'pc:v-visibility-collapse',
    'pc:v-visibility-hidden',
    'pc:v-visibility-visible'
]
let valuesvisibility4 = [
    'visibility: collapse;',
    'visibility: hidden;',
    'visibility: visible;',
]
for (var i = 0; i <= propertiesvisibility4.length; i++) {
    if (document.querySelector(`.${propertiesvisibility4[i]}`) && !document.querySelector('style').innerText.includes(propertiesvisibility4[i])) {
        let styles = ` 
        @media screen and (min-width: 1920px){
            .${propertiesvisibility4[i]} { 
                ${valuesvisibility4[i]}
            }
        }`;
        document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
    }
}