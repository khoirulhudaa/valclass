
let propertiesJustify = [
    'v-justify-center',
    'v-justify-left',
    'v-justify-right',
    'v-justify-safe',
    'v-justify-unsafe',
    'v-justify-start',
    'v-justify-end',
    'v-justify-flex-start',
    'v-justify-flex-end',
    'v-justify-between',
    'v-justify-around',
    'v-justify-evenly',
    'v-justify-stretch',
    'v-justify-last-baseline'
]
let valuesJustify = [
    'justify-content: center',
    'justify-content: left',
    'justify-content: right;',
    'justify-content: safe;',
    'justify-content: unsafe;',
    'justify-content: start',
    'justify-content: end',
    'justify-content: flex-start;',
    'justify-content: flex-end;',
    'justify-content: space-between;',
    'justify-content: space-around',
    'justify-content: space-evenly',
    'justify-content: stretch;',
    'justify-content: last baseline;'
]
for (var i = 0; i <= propertiesJustify.length; i++) {
    if (document.querySelector(`.${propertiesJustify[i]}`) && !document.querySelector('style').innerText.includes(propertiesJustify[i])) {
        let styles = `
        @media screen and (min-width: 900px) and (max-width: 1920px) {
            .${propertiesJustify[i]} { 
                ${valuesJustify[i]}
            }
        }`;
        document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
    }
}
let propertiesJustify2 = [
    'mb:v-justify-center',
    'mb:v-justify-left',
    'mb:v-justify-right',
    'mb:v-justify-safe',
    'mb:v-justify-unsafe',
    'mb:v-justify-start',
    'mb:v-justify-end',
    'mb:v-justify-flex-start',
    'mb:v-justify-flex-end',
    'mb:v-justify-between',
    'mb:v-justify-around',
    'mb:v-justify-evenly',
    'mb:v-justify-stretch',
    'mb:v-justify-last-baseline'
]
let valuesJustify2 = [
    'justify-content: center',
    'justify-content: left',
    'justify-content: right;',
    'justify-content: safe;',
    'justify-content: unsafe;',
    'justify-content: start',
    'justify-content: end',
    'justify-content: flex-start;',
    'justify-content: flex-end;',
    'justify-content: space-between;',
    'justify-content: space-around',
    'justify-content: space-evenly',
    'justify-content: stretch;',
    'justify-content: last baseline;'
]
for (var i = 0; i <= propertiesJustify2.length; i++) {
    if (document.querySelector(`.${propertiesJustify2[i]}`) && !document.querySelector('style').innerText.includes(propertiesJustify2[i])) {
        let styles = `
        @media screen and (min-width: 320px) and (max-width: 600px){
            .${propertiesJustify2[i]} { 
                ${valuesJustify2[i]}
            }
        }`;
        document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
    }
}
let propertiesJustify3 = [
    'tb:v-justify-center',
    'tb:v-justify-left',
    'tb:v-justify-right',
    'tb:v-justify-safe',
    'tb:v-justify-unsafe',
    'tb:v-justify-start',
    'tb:v-justify-end',
    'tb:v-justify-flex-start',
    'tb:v-justify-flex-end',
    'tb:v-justify-between',
    'tb:v-justify-around',
    'tb:v-justify-evenly',
    'tb:v-justify-stretch',
    'tb:v-justify-last-baseline'
]
let valuesJustify3 = [
    'justify-content: center',
    'justify-content: left',
    'justify-content: right;',
    'justify-content: safe;',
    'justify-content: unsafe;',
    'justify-content: start',
    'justify-content: end',
    'justify-content: flex-start;',
    'justify-content: flex-end;',
    'justify-content: space-between;',
    'justify-content: space-around',
    'justify-content: space-evenly',
    'justify-content: stretch;',
    'justify-content: last baseline;'
]
for (var i = 0; i <= propertiesJustify3.length; i++) {
    if (document.querySelector(`.${propertiesJustify3[i]}`) && !document.querySelector('style').innerText.includes(propertiesJustify3[i])) {
        let styles = `
        @media screen and (min-width: 600px) and (max-width: 900px){
            .${propertiesJustify3[i]} { 
                ${valuesJustify3[i]}
            }
        }`;
        document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
    }
}
let propertiesJustify4 = [
    'pc:v-justify-center',
    'pc:v-justify-left',
    'pc:v-justify-right',
    'pc:v-justify-safe',
    'pc:v-justify-unsafe',
    'pc:v-justify-start',
    'pc:v-justify-end',
    'pc:v-justify-flex-start',
    'pc:v-justify-flex-end',
    'pc:v-justify-between',
    'pc:v-justify-around',
    'pc:v-justify-evenly',
    'pc:v-justify-stretch', 
    'pc:v-justify-last-baseline'
]
let valuesJustify4 = [
    'justify-content: center',
    'justify-content: left',
    'justify-content: right;',
    'justify-content: safe;',
    'justify-content: unsafe;',
    'justify-content: start',
    'justify-content: end',
    'justify-content: flex-start;',
    'justify-content: flex-end;',
    'justify-content: space-between;',
    'justify-content: space-around',
    'justify-content: space-evenly',
    'justify-content: stretch;',
    'justify-content: last baseline;'
]
for (var i = 0; i <= propertiesJustify4.length; i++) {
    if (document.querySelector(`.${propertiesJustify4[i]}`) && !document.querySelector('style').innerText.includes(propertiesJustify4[i])) {
        let styles = `
        @media screen and (min-width: 1920px){
            .${propertiesJustify4[i]} { 
                ${valuesJustify4[i]}
            }
        }`;
        document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
    }
}