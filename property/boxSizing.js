let propertiesBoxSizing = [
    'v-box-border',
    'v-box-content'
]
let valuesBoxSizing = [
    'box-sizing: border-box;',
    'box-sizing: content-box;'
]
for (var i = 0; i <= propertiesBoxSizing.length; i++) {
    if (document.querySelector(`.${propertiesBoxSizing[i]}`) && !document.querySelector('style').innerText.includes(propertiesBoxSizing[i])) {
        let styles = ` 
            .${propertiesBoxSizing[i]} { 
                ${valuesBoxSizing[i]}
            }
            @media screen and (min-width: 900px) and (max-width: 1920px) {
                .${propertiesBoxSizing[i]} { 
                    ${valuesBoxSizing[i]}
                }
            }`;
        document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
    }
}

let propertiesBoxSizing2 = [
    'mb_v-box-border',
    'mb_v-box-content'
]
let valuesBoxSizing2 = [
    'box-sizing: border-box;',
    'box-sizing: content-box;'
]
for (var i = 0; i <= propertiesBoxSizing2.length; i++) {
    if (document.querySelector(`.${propertiesBoxSizing2[i]}`) && !document.querySelector('style').innerText.includes(propertiesBoxSizing2[i])) {
        let styles = ` 
            .${propertiesBoxSizing2[i]} { 
                ${valuesBoxSizing2[i]}
            }
            @media screen and (min-width: 320px) and (max-width: 600px){
                .${propertiesBoxSizing2[i]} { 
                    ${valuesBoxSizing2[i]}
                }
            }`;
        document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
    }
}

let propertiesBoxSizing3 = [
    'tb_v-box-border',
    'tb_v-box-content'
]
let valuesBoxSizing3 = [
    'box-sizing: border-box;',
    'box-sizing: content-box;'
]
for (var i = 0; i <= propertiesBoxSizing3.length; i++) {
    if (document.querySelector(`.${propertiesBoxSizing3[i]}`) && !document.querySelector('style').innerText.includes(propertiesBoxSizing3[i])) {
        let styles = ` 
            .${propertiesBoxSizing3[i]} { 
                ${valuesBoxSizing3[i]}
            }
            @media screen and (min-width: 600px) and (max-width: 900px){
                .${propertiesBoxSizing3[i]} { 
                    ${valuesBoxSizing3[i]}
                }
            }`;
        document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
    }
}

let propertiesBoxSizing4 = [
    'pc_v-box-border',
    'pc_v-box-content'
]
let valuesBoxSizing4 = [
    'box-sizing: border-box;',
    'box-sizing: content-box;'
]
for (var i = 0; i <= propertiesBoxSizing4.length; i++) {
    if (document.querySelector(`.${propertiesBoxSizing4[i]}`) && !document.querySelector('style').innerText.includes(propertiesBoxSizing4[i])) {
        let styles = ` 
            .${propertiesBoxSizing4[i]} { 
                ${valuesBoxSizing4[i]}
            }
            @media screen and (min-width: 1920px){
                .${propertiesBoxSizing4[i]} { 
                    ${valuesBoxSizing4[i]}
                }
            }`;
        document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
    }
}