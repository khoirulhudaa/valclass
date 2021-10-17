
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
        .${propertiesJustify[i]} { 
            ${valuesJustify[i]}
        }
        @media screen and (min-width: 900px) and (max-width: 1920px) {
            .${propertiesJustify[i]} { 
                ${valuesJustify[i]}
            }
        }`;
        document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
    }
}
let propertiesJustify2 = [
    'mb_v-justify-center',
    'mb_v-justify-left',
    'mb_v-justify-right',
    'mb_v-justify-safe',
    'mb_v-justify-unsafe',
    'mb_v-justify-start',
    'mb_v-justify-end',
    'mb_v-justify-flex-start',
    'mb_v-justify-flex-end',
    'mb_v-justify-between',
    'mb_v-justify-around',
    'mb_v-justify-evenly',
    'mb_v-justify-stretch',
    'mb_v-justify-last-baseline'
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
        .${propertiesJustify2[i]} { 
            ${valuesJustify2[i]}
        }
        @media screen and (min-width: 320px) and (max-width: 600px){
            .${propertiesJustify2[i]} { 
                ${valuesJustify2[i]}
            }
        }`;
        document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
    }
}
let propertiesJustify3 = [
    'tb_v-justify-center',
    'tb_v-justify-left',
    'tb_v-justify-right',
    'tb_v-justify-safe',
    'tb_v-justify-unsafe',
    'tb_v-justify-start',
    'tb_v-justify-end',
    'tb_v-justify-flex-start',
    'tb_v-justify-flex-end',
    'tb_v-justify-between',
    'tb_v-justify-around',
    'tb_v-justify-evenly',
    'tb_v-justify-stretch',
    'tb_v-justify-last-baseline'
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
        .${propertiesJustify3[i]} { 
            ${valuesJustify3[i]}
        }
        @media screen and (min-width: 600px) and (max-width: 900px){
            .${propertiesJustify3[i]} { 
                ${valuesJustify3[i]}
            }
        }`;
        document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
    }
}
let propertiesJustify4 = [
    'pc_v-justify-center',
    'pc_v-justify-left',
    'pc_v-justify-right',
    'pc_v-justify-safe',
    'pc_v-justify-unsafe',
    'pc_v-justify-start',
    'pc_v-justify-end',
    'pc_v-justify-flex-start',
    'pc_v-justify-flex-end',
    'pc_v-justify-between',
    'pc_v-justify-around',
    'pc_v-justify-evenly',
    'pc_v-justify-stretch', 
    'pc_v-justify-last-baseline'
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
        .${propertiesJustify4[i]} { 
            ${valuesJustify4[i]}
        }
        @media screen and (min-width: 1920px){
            .${propertiesJustify4[i]} { 
                ${valuesJustify4[i]}
            }
        }`;
        document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
    }
}