let propertiesTextShadow = [
    'v-text-shadow-sm',
    'v-text-shadow-md',
    'v-text-shadow-lg',
    'v-text-shadow-xl'
]
let valuesTextShadow = [
    "text-shadow: 2px 2px 2px rgb(199, 199, 199);",
    "text-shadow: 3px 3px 3px rgb(197, 197, 197);",
    "text-shadow: 3.5px 3.5px 2px rgb(197, 197, 197);",
    "text-shadow: 4px 4px 2px rgb(173, 173, 173);"
]
for (var i = 0; i <= propertiesTextShadow.length; i++) {
    if (document.querySelector(`.${propertiesTextShadow[i]}`) && !document.querySelector('style').innerText.includes(propertiesTextShadow[i])) {
        let styles = ` 
            @media screen and (min-width: 900px) and (max-width: 1920px) {
                .${propertiesTextShadow[i]} { 
                    ${valuesTextShadow[i]}
                }
            }`;
        document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
    }
}
let propertiesTextShadow2 = [
    'mb_v-text-shadow-sm',
    'mb_v-text-shadow-md',
    'mb_v-text-shadow-lg',
    'mb_v-text-shadow-xl'
]
let valuesTextShadow2 = [
    "text-shadow: 2px 2px 2px rgb(199, 199, 199);",
    "text-shadow: 3px 3px 3px rgb(197, 197, 197);",
    "text-shadow: 3.5px 3.5px 2px rgb(197, 197, 197);",
    "text-shadow: 4px 4px 2px rgb(173, 173, 173);"
]
for (var i = 0; i <= propertiesTextShadow2.length; i++) {
    if (document.querySelector(`.${propertiesTextShadow2[i]}`) && !document.querySelector('style').innerText.includes(propertiesTextShadow2[i])) {
        let styles = ` 
            @media screen and (min-width: 320px) and (max-width: 600px){
                .${propertiesTextShadow2[i]} { 
                    ${valuesTextShadow2[i]}
                }
            }`;
        document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
    }
}
let propertiesTextShadow3 = [
    'tb_v-text-shadow-sm',
    'tb_v-text-shadow-md',
    'tb_v-text-shadow-lg',
    'tb_v-text-shadow-xl'
]
let valuesTextShadow3 = [
    "text-shadow: 2px 2px 2px rgb(199, 199, 199);",
    "text-shadow: 3px 3px 3px rgb(197, 197, 197);",
    "text-shadow: 3.5px 3.5px 2px rgb(197, 197, 197);",
    "text-shadow: 4px 4px 2px rgb(173, 173, 173);"
]
for (var i = 0; i <= propertiesTextShadow3.length; i++) {
    if (document.querySelector(`.${propertiesTextShadow3[i]}`) && !document.querySelector('style').innerText.includes(propertiesTextShadow3[i])) {
        let styles = ` 
            @media screen and (min-width: 600px) and (max-width: 900px){
                .${propertiesTextShadow3[i]} { 
                    ${valuesTextShadow3[i]}
                }
            }`;
        document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
    }
}
let propertiesTextShadow4 = [
    'pc_v-text-shadow-sm',
    'pc_v-text-shadow-md',
    'pc_v-text-shadow-lg',
    'pc_v-text-shadow-xl'
]
let valuesTextShadow4 = [
    "text-shadow: 2px 2px 2px rgb(199, 199, 199);",
    "text-shadow: 3px 3px 3px rgb(197, 197, 197);",
    "text-shadow: 3.5px 3.5px 2px rgb(197, 197, 197);",
    "text-shadow: 4px 4px 2px rgb(173, 173, 173);"
]
for (var i = 0; i <= propertiesTextShadow4.length; i++) {
    if (document.querySelector(`.${propertiesTextShadow4[i]}`) && !document.querySelector('style').innerText.includes(propertiesTextShadow4[i])) {
        let styles = ` 
            @media screen and (min-width: 1920px){
                .${propertiesTextShadow4[i]} { 
                    ${valuesTextShadow4[i]}
                }
            }`;
        document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
    }
}