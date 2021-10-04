let propertiesBackgroundBlend = [
    'v-bg-blend-color',
    'v-bg-blend-multiply',
    'v-bg-blend-screen',
    'v-bg-blend-normal',
    'v-bg-blend-darken',
    'v-bg-blend-lighten'
]
let valuesBackgroundBlend = [
    'background-blend-mode: color',
    'background-blend-mode: multiply',
    'background-blend-mode: screen',
    'background-blend-mode: normal',
    'background-blend-mode: darken',
    'background-blend-mode: lighten'
]
for (var i = 0; i <= propertiesBackgroundBlend.length; i++) {
    if (document.querySelector(`.${propertiesBackgroundBlend[i]}`) && !document.querySelector('style').innerText.includes(propertiesBackgroundBlend[i])) {
        let styles = ` 
            @media screen and (min-width: 900px) and (max-width: 1920px) {
                .${propertiesBackgroundBlend[i]} { 
                    ${valuesBackgroundBlend[i]}
                }
            }`;
        document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
    }
}

let propertiesBackgroundBlend2 = [
    'mb_v-bg-blend-color',
    'mb_v-bg-blend-multiply',
    'mb_v-bg-blend-screen',
    'mb_v-bg-blend-normal',
    'mb_v-bg-blend-darken',
    'mb_v-bg-blend-lighten'
]
let valuesBackgroundBlend2 = [
    'background-blend-mode: color',
    'background-blend-mode: multiply',
    'background-blend-mode: screen',
    'background-blend-mode: normal',
    'background-blend-mode: darken',
    'background-blend-mode: lighten'
]
for (var i = 0; i <= propertiesBackgroundBlend2.length; i++) {
    if (document.querySelector(`.${propertiesBackgroundBlend2[i]}`) && !document.querySelector('style').innerText.includes(propertiesBackgroundBlend2[i])) {
        let styles = ` 
            @media screen and (min-width: 320px) and (max-width: 600px){
                .${propertiesBackgroundBlend2[i]} { 
                    ${valuesBackgroundBlend2[i]}
                }
            }`;
        document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
    }
}

let propertiesBackgroundBlend3 = [
    'tb_v-bg-blend-color',
    'tb_v-bg-blend-multiply',
    'tb_v-bg-blend-screen',
    'tb_v-bg-blend-normal',
    'tb_v-bg-blend-darken',
    'tb_v-bg-blend-lighten'
]
let valuesBackgroundBlend3 = [
    'background-blend-mode: color',
    'background-blend-mode: multiply',
    'background-blend-mode: screen',
    'background-blend-mode: normal',
    'background-blend-mode: darken',
    'background-blend-mode: lighten'
]
for (var i = 0; i <= propertiesBackgroundBlend3.length; i++) {
    if (document.querySelector(`.${propertiesBackgroundBlend3[i]}`) && !document.querySelector('style').innerText.includes(propertiesBackgroundBlend3[i])) {
        let styles = ` 
            @media screen and (min-width: 320px) and (max-width: 600px){
                .${propertiesBackgroundBlend3[i]} { 
                    ${valuesBackgroundBlend3[i]}
                }
            }`;
        document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
    }
}

let propertiesBackgroundBlend4 = [
    'pc_v-bg-blend-color',
    'pc_v-bg-blend-multiply',
    'pc_v-bg-blend-screen',
    'pc_v-bg-blend-normal',
    'pc_v-bg-blend-darken',
    'pc_v-bg-blend-lighten'
]
let valuesBackgroundBlend4 = [
    'background-blend-mode: color',
    'background-blend-mode: multiply',
    'background-blend-mode: screen',
    'background-blend-mode: normal',
    'background-blend-mode: darken',
    'background-blend-mode: lighten'
]
for (var i = 0; i <= propertiesBackgroundBlend4.length; i++) {
    if (document.querySelector(`.${propertiesBackgroundBlend4[i]}`) && !document.querySelector('style').innerText.includes(propertiesBackgroundBlend4[i])) {
        let styles = ` 
            @media screen and (min-width: 320px) and (max-width: 600px){
                .${propertiesBackgroundBlend4[i]} { 
                    ${valuesBackgroundBlend4[i]}
                }
            }`;
        document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
    }
}