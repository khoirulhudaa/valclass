let propertiesListStyle = [
    'v-list-none',
    'v-list-square',
    'v-list-circle',
    'v-list-desc',
    'v-list-decimal',
    'v-list-armenian',
    'v-list-georgian'
]
let valuesListStyle = [
    'list-style-type: none',
    'list-style-type: square',
    'list-style-type: circle;',
    'list-style-type: desc;',
    'list-style-type: decimal;',
    'list-style-type: armenian',
    'list-style-type: georgian'
]
for (var i = 0; i <= propertiesListStyle.length; i++) {
    if (document.querySelector(`.${propertiesListStyle[i]}`) && !document.querySelector('style').innerText.includes(propertiesListStyle[i])) {
        let styles = ` 
        .${propertiesListStyle[i]} { 
            ${valuesListStyle[i]}
        }
        @media screen and (min-width: 900px) and (max-width: 1920px) {
            .${propertiesListStyle[i]} { 
                ${valuesListStyle[i]}
            }
        }`;
        document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
    }
}
let propertiesListStyle2 = [
    'mb_v-list-none',
    'mb_v-list-square',
    'mb_v-list-circle',
    'mb_v-list-desc',
    'mb_v-list-decimal',
    'mb_v-list-armenian',
    'mb_v-list-georgian'
]
let valuesListStyle2 = [
    'list-style-type: none',
    'list-style-type: square',
    'list-style-type: circle;',
    'list-style-type: desc;',
    'list-style-type: decimal;',
    'list-style-type: armenian',
    'list-style-type: georgian'
]
for (var i = 0; i <= propertiesListStyle2.length; i++) {
    if (document.querySelector(`.${propertiesListStyle2[i]}`) && !document.querySelector('style').innerText.includes(propertiesListStyle2[i])) {
        let styles = ` 
        .${propertiesListStyle2[i]} { 
            ${valuesListStyle2[i]}
        }
        @media screen and (min-width: 320px) and (max-width: 600px){
            .${propertiesListStyle2[i]} { 
                ${valuesListStyle2[i]}
            }
        }`;
        document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
    }
}
let propertiesListStyle3 = [
    'tb_v-list-none',
    'tb_v-list-square',
    'tb_v-list-circle',
    'tb_v-list-desc',
    'tb_v-list-decimal',
    'tb_v-list-armenian',
    'tb_v-list-georgian'
]
let valuesListStyle3 = [
    'list-style-type: none',
    'list-style-type: square',
    'list-style-type: circle;',
    'list-style-type: desc;',
    'list-style-type: decimal;',
    'list-style-type: armenian',
    'list-style-type: georgian'
]
for (var i = 0; i <= propertiesListStyle3.length; i++) {
    if (document.querySelector(`.${propertiesListStyle3[i]}`) && !document.querySelector('style').innerText.includes(propertiesListStyle3[i])) {
        let styles = ` 
        .${propertiesListStyle3[i]} { 
            ${valuesListStyle3[i]}
        }
        @media screen and (min-width: 600px) and (max-width: 900px){
            .${propertiesListStyle3[i]} { 
                ${valuesListStyle3[i]}
            }
        }`;
        document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
    }
}
let propertiesListStyle4 = [
    'pc_v-list-none',
    'pc_v-list-square',
    'pc_v-list-circle',
    'pc_v-list-desc',
    'pc_v-list-decimal',
    'pc_v-list-armenian',
    'pc_v-list-georgian'
]
let valuesListStyle4 = [
    'list-style-type: none',
    'list-style-type: square',
    'list-style-type: circle;',
    'list-style-type: desc;',
    'list-style-type: decimal;',
    'list-style-type: armenian',
    'list-style-type: georgian'
]
for (var i = 0; i <= propertiesListStyle4.length; i++) {
    if (document.querySelector(`.${propertiesListStyle4[i]}`) && !document.querySelector('style').innerText.includes(propertiesListStyle4[i])) {
        let styles = ` 
        .${propertiesListStyle4[i]} { 
            ${valuesListStyle4[i]}
        }
        @media screen and (min-width: 1920px){
            .${propertiesListStyle4[i]} { 
                ${valuesListStyle4[i]}
            }
        }`;
        document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
    }
}