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
    'mb:v-decoration-none',
    'mb:v-decoration-dashed',
    'mb:v-decoration-double',
    'mb:v-decoration-through',
    'mb:v-decoration-overline',
    'mb:v-decoration-solid',
    'mb:v-decoration-underline',
    'mb:v-decoration-wavy'
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
    'tb:v-decoration-none',
    'tb:v-decoration-dashed',
    'tb:v-decoration-double',
    'tb:v-decoration-through',
    'tb:v-decoration-overline',
    'tb:v-decoration-solid',
    'tb:v-decoration-underline',
    'tb:v-decoration-wavy'
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
    'pc:v-decoration-none',
    'pc:v-decoration-dashed',
    'pc:v-decoration-double',
    'pc:v-decoration-through',
    'pc:v-decoration-overline',
    'pc:v-decoration-solid',
    'pc:v-decoration-underline',
    'pc:v-decoration-wavy'
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