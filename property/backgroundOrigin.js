let propertiesBackgroundOrigin = [
    'v-bg-content-box',
    'v-bg-border-box',
    'v-bg-padding-box'
]
let valuesBackgroundOrigin = [
    'background-origin: content-box',
    'background-origin: border-box',
    'background-origin: padding-box'
]
for (var i = 0; i <= propertiesBackgroundOrigin.length; i++) {
    if (document.querySelector(`.${propertiesBackgroundOrigin[i]}`) && !document.querySelector('style').innerText.includes(propertiesBackgroundOrigin[i])) {
        let styles = ` 
            .${propertiesBackgroundOrigin[i]} { 
                ${valuesBackgroundOrigin[i]}
            }
            @media screen and (min-width: 900px) and (max-width: 1920px)
                .${propertiesBackgroundOrigin[i]} { 
                    ${valuesBackgroundOrigin[i]}
                }
            }`;
        document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
    }
}

let propertiesBackgroundOrigin2 = [
    'mb_v-bg-content-box',
    'mb_v-bg-border-box',
    'mb_v-bg-padding-box'
]
let valuesBackgroundOrigin2 = [
    'background-origin: content-box',
    'background-origin: border-box',
    'background-origin: padding-box'
]
for (var i = 0; i <= propertiesBackgroundOrigin2.length; i++) {
    if (document.querySelector(`.${propertiesBackgroundOrigin2[i]}`) && !document.querySelector('style').innerText.includes(propertiesBackgroundOrigin2[i])) {
        let styles = ` 
            .${propertiesBackgroundOrigin2[i]} { 
                ${valuesBackgroundOrigin2[i]}
            }
            @media screen and (min-width: 320px) and (max-width: 600px){
                .${propertiesBackgroundOrigin2[i]} { 
                    ${valuesBackgroundOrigin2[i]}
                }
            }`;
        document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
    }
}

let propertiesBackgroundOrigin3 = [
    'tb_v-bg-content-box',
    'tb_v-bg-border-box',
    'tb_v-bg-padding-box'
]
let valuesBackgroundOrigin3 = [
    'background-origin: content-box',
    'background-origin: border-box',
    'background-origin: padding-box'
]
for (var i = 0; i <= propertiesBackgroundOrigin3.length; i++) {
    if (document.querySelector(`.${propertiesBackgroundOrigin3[i]}`) && !document.querySelector('style').innerText.includes(propertiesBackgroundOrigin3[i])) {
        let styles = ` 
            .${propertiesBackgroundOrigin3[i]} { 
                ${valuesBackgroundOrigin3[i]}
            }
            @media screen and (min-width: 600px) and (max-width: 900px){
                .${propertiesBackgroundOrigin3[i]} { 
                    ${valuesBackgroundOrigin3[i]}
                }
            }`;
        document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
    }
}

let propertiesBackgroundOrigin4 = [
    'pc_v-bg-content-box',
    'pc_v-bg-border-box',
    'pc_v-bg-padding-box'
]
let valuesBackgroundOrigin4 = [
    'background-origin: content-box',
    'background-origin: border-box',
    'background-origin: padding-box'
]
for (var i = 0; i <= propertiesBackgroundOrigin4.length; i++) {
    if (document.querySelector(`.${propertiesBackgroundOrigin4[i]}`) && !document.querySelector('style').innerText.includes(propertiesBackgroundOrigin4[i])) {
        let styles = ` 
            .${propertiesBackgroundOrigin4[i]} { 
                ${valuesBackgroundOrigin4[i]}
            }
            @media screen and (min-width: 1920px){
                .${propertiesBackgroundOrigin4[i]} { 
                    ${valuesBackgroundOrigin4[i]}
                }
            }`;
        document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
    }
}