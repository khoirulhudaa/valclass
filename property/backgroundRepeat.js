let propertiesBackgroundRepeat = [
    'v-bg-repeat',
    'v-bg-norepeat'
]
let valuesBackgroundRepeat = [
    'background-repeat: repeat',
    'background-repeat: no-repeat'
]
for (var i = 0; i <= propertiesBackgroundRepeat.length; i++) {
    if (document.querySelector(`.${propertiesBackgroundRepeat[i]}`) && !document.querySelector('style').innerText.includes(propertiesBackgroundRepeat[i])) {
        let styles = ` 
            @media screen and (min-width: 900px) and (max-width: 1920px) {
                .${propertiesBackgroundRepeat[i]} { 
                    ${valuesBackgroundRepeat[i]}
                }
            }`;
        document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
    }
}

let propertiesBackgroundRepeat2 = [
    'mb:v-bg-repeat',
    'mb:v-bg-norepeat'
]
let valuesBackgroundRepeat2 = [
    'background-repeat: repeat',
    'background-repeat: no-repeat'
]
for (var i = 0; i <= propertiesBackgroundRepeat2.length; i++) {
    if (document.querySelector(`.${propertiesBackgroundRepeat2[i]}`) && !document.querySelector('style').innerText.includes(propertiesBackgroundRepeat2[i])) {
        let styles = ` 
            @media screen and (min-width: 320px) and (max-width: 600px){
                .${propertiesBackgroundRepeat2[i]} { 
                    ${valuesBackgroundRepeat2[i]}
                }
            }`;
        document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
    }
}

let propertiesBackgroundRepeat3 = [
    'tb:v-bg-repeat',
    'tb:v-bg-norepeat'
]
let valuesBackgroundRepeat3 = [
    'background-repeat: repeat',
    'background-repeat: no-repeat'
]
for (var i = 0; i <= propertiesBackgroundRepeat3.length; i++) {
    if (document.querySelector(`.${propertiesBackgroundRepeat3[i]}`) && !document.querySelector('style').innerText.includes(propertiesBackgroundRepeat3[i])) {
        let styles = ` 
            @media screen and (min-width: 600px) and (max-width: 900px){
                .${propertiesBackgroundRepeat3[i]} { 
                    ${valuesBackgroundRepeat3[i]}
                }
            }`;
        document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
    }
}

let propertiesBackgroundRepeat4 = [
    'pc:v-bg-repeat',
    'pc:v-bg-norepeat'
]
let valuesBackgroundRepeat4 = [
    'background-repeat: repeat',
    'background-repeat: no-repeat'
]
for (var i = 0; i <= propertiesBackgroundRepeat4.length; i++) {
    if (document.querySelector(`.${propertiesBackgroundRepeat4[i]}`) && !document.querySelector('style').innerText.includes(propertiesBackgroundRepeat4[i])) {
        let styles = ` 
            @media screen and (min-width: 1920px){
                .${propertiesBackgroundRepeat4[i]} { 
                    ${valuesBackgroundRepeat4[i]}
                }
            }`;
        document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
    }
}