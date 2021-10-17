let propertiesTextAlign = [
    'v-text-center',
    'v-text-left',
    'v-text-right',
    'v-text-jsutify'
]
let valuesTextAlign = [
    'text-align: center;',
    'text-align: left;',
    'text-align: right;',
    'text-align: justify;'
]
for (var i = 0; i <= propertiesTextAlign.length; i++) {
    if (document.querySelector(`.${propertiesTextAlign[i]}`) && !document.querySelector('style').innerText.includes(propertiesTextAlign[i])) {
        let styles = ` 
            .${propertiesTextAlign[i]} { 
                ${valuesTextAlign[i]}
            }
            @media screen and (min-width: 900px) and (max-width: 1920px) {
                    .${propertiesTextAlign[i]} { 
                    ${valuesTextAlign[i]}
                }
            }`;
        document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
    }
}
let propertiesTextAlign2 = [
    'mb_v-text-center',
    'mb_v-text-left',
    'mb_v-text-right',
    'mb_v-text-jsutify'
]
let valuesTextAlign2 = [
    'text-align: center;',
    'text-align: left;',
    'text-align: right;',
    'text-align: justify;'
]
for (var i = 0; i <= propertiesTextAlign2.length; i++) {
    if (document.querySelector(`.${propertiesTextAlign2[i]}`) && !document.querySelector('style').innerText.includes(propertiesTextAlign2[i])) {
        let styles = ` 
            .${propertiesTextAlign2[i]} { 
                ${valuesTextAlign2[i]}
            }
            @media screen and (min-width: 320px) and (max-width: 600px){
                .${propertiesTextAlign2[i]} { 
                    ${valuesTextAlign2[i]}
                }
            }`;
        document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
    }
}
let propertiesTextAlign3 = [
    'tb_v-text-center',
    'tb_v-text-left',
    'tb_v-text-right',
    'tb_v-text-jsutify'
]
let valuesTextAlign3 = [
    'text-align: center;',
    'text-align: left;',
    'text-align: right;',
    'text-align: justify;'
]
for (var i = 0; i <= propertiesTextAlign3.length; i++) {
    if (document.querySelector(`.${propertiesTextAlign3[i]}`) && !document.querySelector('style').innerText.includes(propertiesTextAlign3[i])) {
        let styles = ` 
            .${propertiesTextAlign3[i]} { 
                ${valuesTextAlign3[i]}
            }
            @media screen and (min-width: 600px) and (max-width: 900px){
                .${propertiesTextAlign3[i]} { 
                    ${valuesTextAlign3[i]}
                }
            }`;
        document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
    }
}
let propertiesTextAlign4 = [
    'pc_v-text-center',
    'pc_v-text-left',
    'pc_v-text-right',
    'pc_v-text-jsutify'
]
let valuesTextAlign4 = [
    'text-align: center;',
    'text-align: left;',
    'text-align: right;',
    'text-align: justify;'
]
for (var i = 0; i <= propertiesTextAlign4.length; i++) {
    if (document.querySelector(`.${propertiesTextAlign4[i]}`) && !document.querySelector('style').innerText.includes(propertiesTextAlign4[i])) {
        let styles = ` 
            .${propertiesTextAlign4[i]} { 
                ${valuesTextAlign4[i]}
            }
            @media screen and (min-width: 1920px){
                    .${propertiesTextAlign4[i]} { 
                    ${valuesTextAlign4[i]}
                }
            }`;
        document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
    }
}