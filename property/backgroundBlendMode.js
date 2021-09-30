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
    'mb:v-bg-blend-color',
    'mb:v-bg-blend-multiply',
    'mb:v-bg-blend-screen',
    'mb:v-bg-blend-normal',
    'mb:v-bg-blend-darken',
    'mb:v-bg-blend-lighten'
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
    'tb:v-bg-blend-color',
    'tb:v-bg-blend-multiply',
    'tb:v-bg-blend-screen',
    'tb:v-bg-blend-normal',
    'tb:v-bg-blend-darken',
    'tb:v-bg-blend-lighten'
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
    'pc:v-bg-blend-color',
    'pc:v-bg-blend-multiply',
    'pc:v-bg-blend-screen',
    'pc:v-bg-blend-normal',
    'pc:v-bg-blend-darken',
    'pc:v-bg-blend-lighten'
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