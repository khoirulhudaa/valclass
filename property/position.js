let propertiesPosition = [
    'v-pst-relative',
    'v-pst-absolute',
    'v-pst-fixed',
    'v-pst-sticky',
    'v-pst-static'
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
        .${propertiesPosition[i]} { 
            ${valuesPosition[i]}
        }
        @media screen and (min-width: 900px) and (max-width: 1920px) {
            .${propertiesPosition[i]} { 
                ${valuesPosition[i]}
            }
        }`;
        document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
    }
}
let propertiesPosition2 = [
    'mb_v-pst-relative',
    'mb_v-pst-absolute',
    'mb_v-pst-fixed',
    'mb_v-pst-sticky',
    'mb_v-pst-static'
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
        .${propertiesPosition2[i]} { 
            ${valuesPosition2[i]}
        }
        @media screen and (min-width: 320px) and (max-width: 600px){
            .${propertiesPosition2[i]} { 
                ${valuesPosition2[i]}
            }
        }`;
        document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
    }
}
let propertiesPosition3 = [
    'tb_v-pst-relative',
    'tb_v-pst-absolute',
    'tb_v-pst-fixed',
    'tb_v-pst-sticky',
    'tb_v-pst-static'
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
        .${propertiesPosition3[i]} { 
            ${valuesPosition3[i]}
        }
        @media screen and (min-width: 600px) and (max-width: 900px){
            .${propertiesPosition3[i]} { 
                ${valuesPosition3[i]}
            }
        }`;
        document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
    }
}
let propertiesPosition4 = [
    'pc_v-pst-relative',
    'pc_v-pst-absolute',
    'pc_v-pst-fixed',
    'pc_v-pst-sticky',
    'pc_v-pst-static'
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
        .${propertiesPosition4[i]} { 
            ${valuesPosition4[i]}
        }
        @media screen and (min-width: 1920px){
            .${propertiesPosition4[i]} { 
                ${valuesPosition4[i]}
            }
        }`;
        document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
    }
}