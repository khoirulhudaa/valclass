let propertiesBoxShadow = [
    'v-box-shadow-sm',
    'v-box-shadow-md',
    'v-box-shadow-lg',
    'v-box-shadow-xl'
]
let valuesBoxShadow = [
    "box-shadow: 2px 2px 2px rgb(199, 199, 199);",
    "box-shadow: 3px 3px 3px rgb(197, 197, 197);",
    "box-shadow: 3.5px 3.5px 2px rgb(197, 197, 197);",
    "box-shadow: 4px 4px 2px rgb(173, 173, 173);"
]
for (var i = 0; i <= propertiesBoxShadow.length; i++) {
    if (document.querySelector(`.${propertiesBoxShadow[i]}`) && !document.querySelector('style').innerText.includes(propertiesBoxShadow[i])) {
        let styles = ` 
            .${propertiesBoxShadow[i]} { 
                ${valuesBoxShadow[i]}
            }
            @media screen and (min-width: 900px) and (max-width: 1920px) {
                .${propertiesBoxShadow[i]} { 
                    ${valuesBoxShadow[i]}
                }
            }`;
        document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
    }
}

let propertiesBoxShadow2 = [
    'mb_v-box-shadow-sm',
    'mb_v-box-shadow-md',
    'mb_v-box-shadow-lg',
    'mb_v-box-shadow-xl'
]
let valuesBoxShadow2 = [
    "box-shadow: 2px 2px 2px rgb(199, 199, 199);",
    "box-shadow: 3px 3px 3px rgb(197, 197, 197);",
    "box-shadow: 3.5px 3.5px 2px rgb(197, 197, 197);",
    "box-shadow: 4px 4px 2px rgb(173, 173, 173);"
]
for (var i = 0; i <= propertiesBoxShadow2.length; i++) {
    if (document.querySelector(`.${propertiesBoxShadow2[i]}`) && !document.querySelector('style').innerText.includes(propertiesBoxShadow2[i])) {
        let styles = ` 
            .${propertiesBoxShadow2[i]} { 
                ${valuesBoxShadow2[i]}
            }
            @media screen and (min-width: 320px) and (max-width: 600px){
                .${propertiesBoxShadow2[i]} { 
                    ${valuesBoxShadow2[i]}
                }
            }`;
        document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
    }
}

let propertiesBoxShadow3 = [
    'tb_v-box-shadow-sm',
    'tb_v-box-shadow-md',
    'tb_v-box-shadow-lg',
    'tb_v-box-shadow-xl'
]
let valuesBoxShadow3 = [
    "box-shadow: 2px 2px 2px rgb(199, 199, 199);",
    "box-shadow: 3px 3px 3px rgb(197, 197, 197);",
    "box-shadow: 3.5px 3.5px 2px rgb(197, 197, 197);",
    "box-shadow: 4px 4px 2px rgb(173, 173, 173);"
]
for (var i = 0; i <= propertiesBoxShadow3.length; i++) {
    if (document.querySelector(`.${propertiesBoxShadow3[i]}`) && !document.querySelector('style').innerText.includes(propertiesBoxShadow3[i])) {
        let styles = ` 
            .${propertiesBoxShadow3[i]} { 
                ${valuesBoxShadow3[i]}
            }
            @media screen and (min-width: 600px) and (max-width: 900px){
                .${propertiesBoxShadow3[i]} { 
                    ${valuesBoxShadow3[i]}
                }
            }`;
        document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
    }
}

let propertiesBoxShadow4 = [
    'pc_v-box-shadow-sm',
    'pc_v-box-shadow-md',
    'pc_v-box-shadow-lg',
    'pc_v-box-shadow-xl'
]
let valuesBoxShadow4 = [
    "box-shadow: 2px 2px 2px rgb(199, 199, 199);",
    "box-shadow: 3px 3px 3px rgb(197, 197, 197);",
    "box-shadow: 3.5px 3.5px 2px rgb(197, 197, 197);",
    "box-shadow: 4px 4px 2px rgb(173, 173, 173);"
]
for (var i = 0; i <= propertiesBoxShadow4.length; i++) {
    if (document.querySelector(`.${propertiesBoxShadow4[i]}`) && !document.querySelector('style').innerText.includes(propertiesBoxShadow4[i])) {
        let styles = ` 
            .${propertiesBoxShadow4[i]} { 
                ${valuesBoxShadow4[i]}
            }
            @media screen and (min-width: 1920px){
                .${propertiesBoxShadow4[i]} { 
                    ${valuesBoxShadow4[i]}
                }
            }`;
        document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
    }
}