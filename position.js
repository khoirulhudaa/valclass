let propertiesPosition = [
    'v-relative',
    'v-absolute',
    'v-fixed',
    'v-sticky',
    'v-static'
]

let valuesPosition = [
    'position: relative;',
    'position: absolute;',
    'position: fixed;',
    'position: sticky;',
    'position: static;'
]
for (var i = 0; i <= propertiesPosition.length; i++) {
    if (document.querySelector(`.${propertiesPosition[i]}`) && !document.querySelector('style').innerText.includes(propertiesPosition[i])) {
        let styles = ` 
        @media screen and (min-width: 900px) and (max-width: 1920px) {
            .${propertiesPosition[i]} { 
                ${valuesPosition[i]}
            }
        }`;
        document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
    }
}
let propertiesPosition2 = [
    'mb_v-relative',
    'mb_v-absolute',
    'mb_v-fixed',
    'mb_v-sticky',
    'mb_v-static'
]

let valuesPosition2 = [
    'position: relative;',
    'position: absolute;',
    'position: fixed;',
    'position: sticky;',
    'position: static;'
]
for (var i = 0; i <= propertiesPosition2.length; i++) {
    if (document.querySelector(`.${propertiesPosition2[i]}`) && !document.querySelector('style').innerText.includes(propertiesPosition2[i])) {
        let styles = ` 
        @media screen and (min-width: 320px) and (max-width: 600px){
            .${propertiesPosition2[i]} { 
                ${valuesPosition2[i]}
            }
        }`;
        document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
    }
}
let propertiesPosition3 = [
    'tb_v-relative',
    'tb_v-absolute',
    'tb_v-fixed',
    'tb_v-sticky',
    'tb_v-static'
]

let valuesPosition3 = [
    'position: relative;',
    'position: absolute;',
    'position: fixed;',
    'position: sticky;',
    'position: static;'
]
for (var i = 0; i <= propertiesPosition3.length; i++) {
    if (document.querySelector(`.${propertiesPosition3[i]}`) && !document.querySelector('style').innerText.includes(propertiesPosition3[i])) {
        let styles = ` 
        @media screen and (min-width: 600px) and (max-width: 900px){
            .${propertiesPosition3[i]} { 
                ${valuesPosition3[i]}
            }
        }`;
        document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
    }
}
let propertiesPosition4 = [
    'pc_v-relative',
    'pc_v-absolute',
    'pc_v-fixed',
    'pc_v-sticky',
    'pc_v-static'
]

let valuesPosition4 = [
    'position: relative;',
    'position: absolute;',
    'position: fixed;',
    'position: sticky;',
    'position: static;'
]
for (var i = 0; i <= propertiesPosition4.length; i++) {
    if (document.querySelector(`.${propertiesPosition4[i]}`) && !document.querySelector('style').innerText.includes(propertiesPosition4[i])) {
        let styles = ` 
        @media screen and (min-width: 1920px){
            .${propertiesPosition4[i]} { 
                ${valuesPosition4[i]}
            }
        }`;
        document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
    }
}