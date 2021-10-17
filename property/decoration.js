let propertiesDirections = [
    'v-decoration-none',
    'v-decoration-dashed',
    'v-decoration-double',
    'v-decoration-through',
    'v-decoration-overline',
    'v-decoration-solid',
    'v-decoration-underline',
    'v-decoration-wavy'
]
let valuesDirections = [
    'text-decoration: none',
    'text-decoration: dashed;',
    'text-decoration: double;',
    'text-decoration: line-through;',
    'text-decoration: overline;',
    'text-decoration: solid;',
    'text-decoration: underline;',
    'text-decoration: wavy;'
]
for (var i = 0; i <= propertiesDirections.length; i++) {
    if (document.querySelector(`.${propertiesDirections[i]}`) && !document.querySelector('style').innerText.includes(propertiesDirections[i])) {
        let styles = ` 
            .${propertiesDirections[i]} { 
                ${valuesDirections[i]}
            }`;
        document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
    }
}

let propertiesDirections2 = [
    'mb_v-decoration-none',
    'mb_v-decoration-dashed',
    'mb_v-decoration-double',
    'mb_v-decoration-through',
    'mb_v-decoration-overline',
    'mb_v-decoration-solid',
    'mb_v-decoration-underline',
    'mb_v-decoration-wavy'
]
let valuesDirections2 = [
    'text-decoration: none',
    'text-decoration: dashed;',
    'text-decoration: double;',
    'text-decoration: line-through;',
    'text-decoration: overline;',
    'text-decoration: solid;',
    'text-decoration: underline;',
    'text-decoration: wavy;'
]
for (var i = 0; i <= propertiesDirections2.length; i++) {
    if (document.querySelector(`.${propertiesDirections2[i]}`) && !document.querySelector('style').innerText.includes(propertiesDirections2[i])) {
        let styles = ` 
            @media screen and (min-width: 320px) and (max-width: 600px){
                .${propertiesDirections2[i]} { 
                    ${valuesDirections2[i]}
                }
            }`;
        document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
    }
}
let propertiesDirections3 = [
    'tb_v-decoration-none',
    'tb_v-decoration-dashed',
    'tb_v-decoration-double',
    'tb_v-decoration-through',
    'tb_v-decoration-overline',
    'tb_v-decoration-solid',
    'tb_v-decoration-underline',
    'tb_v-decoration-wavy'
]
let valuesDirections3 = [
    'text-decoration: none',
    'text-decoration: dashed;',
    'text-decoration: double;',
    'text-decoration: line-through;',
    'text-decoration: overline;',
    'text-decoration: solid;',
    'text-decoration: underline;',
    'text-decoration: wavy;'
]
for (var i = 0; i <= propertiesDirections3.length; i++) {
    if (document.querySelector(`.${propertiesDirections3[i]}`) && !document.querySelector('style').innerText.includes(propertiesDirections3[i])) {
        let styles = ` 
            @media screen and (min-width: 600px) and (max-width: 900px){
                .${propertiesDirections3[i]} { 
                    ${valuesDirections3[i]}
                }
            }`;
        document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
    }
}
let propertiesDirections4 = [
    'pc_v-decoration-none',
    'pc_v-decoration-dashed',
    'pc_v-decoration-double',
    'pc_v-decoration-through',
    'pc_v-decoration-overline',
    'pc_v-decoration-solid',
    'pc_v-decoration-underline',
    'pc_v-decoration-wavy'
]
let valuesDirections4 = [
    'text-decoration: none',
    'text-decoration: dashed;',
    'text-decoration: double;',
    'text-decoration: line-through;',
    'text-decoration: overline;',
    'text-decoration: solid;',
    'text-decoration: underline;',
    'text-decoration: wavy;'
]
for (var i = 0; i <= propertiesDirections4.length; i++) {
    if (document.querySelector(`.${propertiesDirections4[i]}`) && !document.querySelector('style').innerText.includes(propertiesDirections4[i])) {
        let styles = ` 
            @media screen and (min-width: 1920px){
                .${propertiesDirections4[i]} { 
                    ${valuesDirections4[i]}
                }
            }`;
        document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
    }
}