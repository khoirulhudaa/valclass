let propertiesIndex = [
    'v-index--1',
    'v-index--2',
    'v-index--3',
    'v-index--4',
    'v-index-0',
    'v-index-1',
    'v-index-2',
    'v-index-3',
    'v-index-4'
]
let valuesIndex = [
    'z-index: -1;',
    'z-index: -2;',
    'z-index: -3;',
    'z-index: -4;',
    'z-index: 0;',
    'z-index: 1;',
    'z-index: 2;',
    'z-index: 3;',
    'z-index: 4;'
]
for (var i = 0; i <= propertiesIndex.length; i++) {
    if (document.querySelector(`.${propertiesIndex[i]}`) && !document.querySelector('style').innerText.includes(propertiesIndex[i])) {
        let styles = ` 
        @media screen and (min-width: 900px) and (max-width: 1920px) {
            .${propertiesIndex[i]} { 
                ${valuesIndex[i]}
            }
        }`;
        document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
    }
}
let propertiesIndex2 = [
    'mb:v-index--1',
    'mb:v-index--2',
    'mb:v-index--3',
    'mb:v-index--4',
    'mb:v-index-0',
    'mb:v-index-1',
    'mb:v-index-2',
    'mb:v-index-3',
    'mb:v-index-4'
]
let valuesIndex2 = [
    'z-index: -1;',
    'z-index: -2;',
    'z-index: -3;',
    'z-index: -4;',
    'z-index: 0;',
    'z-index: 1;',
    'z-index: 2;',
    'z-index: 3;',
    'z-index: 4;'
]
for (var i = 0; i <= propertiesIndex2.length; i++) {
    if (document.querySelector(`.${propertiesIndex2[i]}`) && !document.querySelector('style').innerText.includes(propertiesIndex2[i])) {
        let styles = ` 
        @media screen and (min-width: 320px) and (max-width: 600px){
            .${propertiesIndex2[i]} { 
                ${valuesIndex2[i]}
            }
        }`;
        document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
    }
}
let propertiesIndex3 = [
    'tb:v-index--1',
    'tb:v-index--2',
    'tb:v-index--3',
    'tb:v-index--4',
    'tb:v-index-0',
    'tb:v-index-1',
    'tb:v-index-2',
    'tb:v-index-3',
    'tb:v-index-4'
]
let valuesIndex3 = [
    'z-index: -1;',
    'z-index: -2;',
    'z-index: -3;',
    'z-index: -4;',
    'z-index: 0;',
    'z-index: 1;',
    'z-index: 2;',
    'z-index: 3;',
    'z-index: 4;'
]
for (var i = 0; i <= propertiesIndex3.length; i++) {
    if (document.querySelector(`.${propertiesIndex3[i]}`) && !document.querySelector('style').innerText.includes(propertiesIndex3[i])) {
        let styles = ` 
        @media screen and (min-width: 600px) and (max-width: 900px){
            .${propertiesIndex3[i]} { 
                ${valuesIndex3[i]}
            }
        }`;
        document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
    }
}
let propertiesIndex4 = [
    'pc:v-index--1',
    'pc:v-index--2',
    'pc:v-index--3',
    'pc:v-index--4',
    'pc:v-index-0',
    'pc:v-index-1',
    'pc:v-index-2',
    'pc:v-index-3',
    'pc:v-index-4'
]
let valuesIndex4 = [
    'z-index: -1;',
    'z-index: -2;',
    'z-index: -3;',
    'z-index: -4;',
    'z-index: 0;',
    'z-index: 1;',
    'z-index: 2;',
    'z-index: 3;',
    'z-index: 4;'
]
for (var i = 0; i <= propertiesIndex4.length; i++) {
    if (document.querySelector(`.${propertiesIndex4[i]}`) && !document.querySelector('style').innerText.includes(propertiesIndex4[i])) {
        let styles = ` 
        @media screen and (min-width: 1920px){
            .${propertiesIndex4[i]} { 
                ${valuesIndex4[i]}
            }
        }`;
        document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
    }
}