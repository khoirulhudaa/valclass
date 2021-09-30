let propertiesOpacity = [
    'v-opacity-0',
    'v-opacity-1',
    'v-opacity-2',
    'v-opacity-3',
    'v-opacity-4'
]
let valuesOpacity = [
    'opacity: 0%',
    'opacity: 25%',
    'opacity: 50%;',
    'opacity: 75%;',
    'opacity: 100%;'
]
for (var i = 0; i <= propertiesOpacity.length; i++) {
    if (document.querySelector(`.${propertiesOpacity[i]}`) && !document.querySelector('style').innerText.includes(propertiesOpacity[i])) {
        let styles = ` 
        @media screen and (min-width: 900px) and (max-width: 1920px) {
            .${propertiesOpacity[i]} { 
                ${valuesOpacity[i]}
            }
        }`;
        document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
    }
}
let propertiesOpacity2 = [
    'mb:v-opacity-0',
    'mb:v-opacity-1',
    'mb:v-opacity-2',
    'mb:v-opacity-3',
    'mb:v-opacity-4'
]
let valuesOpacity2 = [
    'opacity: 0%',
    'opacity: 25%',
    'opacity: 50%;',
    'opacity: 75%;',
    'opacity: 100%;'
]
for (var i = 0; i <= propertiesOpacity2.length; i++) {
    if (document.querySelector(`.${propertiesOpacity2[i]}`) && !document.querySelector('style').innerText.includes(propertiesOpacity2[i])) {
        let styles = ` 
        @media screen and (min-width: 320px) and (max-width: 600px){
            .${propertiesOpacity2[i]} { 
                ${valuesOpacity2[i]}
            }
        }`;
        document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
    }
}
let propertiesOpacity3 = [
    'tb:v-opacity-0',
    'tb:v-opacity-1',
    'tb:v-opacity-2',
    'tb:v-opacity-3',
    'tb:v-opacity-4'
]
let valuesOpacity3 = [
    'opacity: 0%',
    'opacity: 25%',
    'opacity: 50%;',
    'opacity: 75%;',
    'opacity: 100%;'
]
for (var i = 0; i <= propertiesOpacity3.length; i++) {
    if (document.querySelector(`.${propertiesOpacity3[i]}`) && !document.querySelector('style').innerText.includes(propertiesOpacity3[i])) {
        let styles = ` 
        @media screen and (min-width: 600px) and (max-width: 900px){
            .${propertiesOpacity3[i]} { 
                ${valuesOpacity3[i]}
            }
        }`;
        document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
    }
}
let propertiesOpacity4 = [
    'pc:v-opacity-0',
    'pc:v-opacity-1',
    'pc:v-opacity-2',
    'pc:v-opacity-3',
    'pc:v-opacity-4'
]
let valuesOpacity4 = [
    'opacity: 0%',
    'opacity: 25%',
    'opacity: 50%;',
    'opacity: 75%;',
    'opacity: 100%;'
]
for (var i = 0; i <= propertiesOpacity4.length; i++) {
    if (document.querySelector(`.${propertiesOpacity4[i]}`) && !document.querySelector('style').innerText.includes(propertiesOpacity4[i])) {
        let styles = ` 
        @media screen and (min-width: 1920px){
            .${propertiesOpacity4[i]} { 
                ${valuesOpacity4[i]}
            }
        }`;
        document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
    }
}