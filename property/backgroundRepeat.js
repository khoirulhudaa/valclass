let propertiesBackgroundRepeat = [
    'v-bg-rpt-repeat',
    'v-bg-rpt-norepeat'
]
let valuesBackgroundRepeat = [
    'background-repeat: repeat',
    'background-repeat: no-repeat'
]
for (var i = 0; i <= propertiesBackgroundRepeat.length; i++) {
    if (document.querySelector(`.${propertiesBackgroundRepeat[i]}`) && !document.querySelector('style').innerText.includes(propertiesBackgroundRepeat[i])) {
        let styles = ` 
            .${propertiesBackgroundRepeat[i]} { 
                ${valuesBackgroundRepeat[i]}
            }
            @media screen and (min-width: 900px) and (max-width: 1920px) {
                .${propertiesBackgroundRepeat[i]} { 
                    ${valuesBackgroundRepeat[i]}
                }
            }`;
        document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
    }
}

let propertiesBackgroundRepeat2 = [
    'mb_v-bg-rpt-repeat',
    'mb_v-bg-rpt-norepeat'
]
let valuesBackgroundRepeat2 = [
    'background-repeat: repeat',
    'background-repeat: no-repeat'
]
for (var i = 0; i <= propertiesBackgroundRepeat2.length; i++) {
    if (document.querySelector(`.${propertiesBackgroundRepeat2[i]}`) && !document.querySelector('style').innerText.includes(propertiesBackgroundRepeat2[i])) {
        let styles = ` 
            .${propertiesBackgroundRepeat2[i]} { 
                ${valuesBackgroundRepeat2[i]}
            }
            @media screen and (min-width: 320px) and (max-width: 600px){
                .${propertiesBackgroundRepeat2[i]} { 
                    ${valuesBackgroundRepeat2[i]}
                }
            }`;
        document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
    }
}

let propertiesBackgroundRepeat3 = [
    'tb_v-bg-rpt-repeat',
    'tb_v-bg-rpt-norepeat'
]
let valuesBackgroundRepeat3 = [
    'background-repeat: repeat',
    'background-repeat: no-repeat'
]
for (var i = 0; i <= propertiesBackgroundRepeat3.length; i++) {
    if (document.querySelector(`.${propertiesBackgroundRepeat3[i]}`) && !document.querySelector('style').innerText.includes(propertiesBackgroundRepeat3[i])) {
        let styles = ` 
            .${propertiesBackgroundRepeat3[i]} { 
                ${valuesBackgroundRepeat3[i]}
            }
            @media screen and (min-width: 600px) and (max-width: 900px){
                .${propertiesBackgroundRepeat3[i]} { 
                    ${valuesBackgroundRepeat3[i]}
                }
            }`;
        document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
    }
}

let propertiesBackgroundRepeat4 = [
    'pc_v-bg-rpt-repeat',
    'pc_v-bg-rpt-norepeat'
]
let valuesBackgroundRepeat4 = [
    'background-repeat: repeat',
    'background-repeat: no-repeat'
]
for (var i = 0; i <= propertiesBackgroundRepeat4.length; i++) {
    if (document.querySelector(`.${propertiesBackgroundRepeat4[i]}`) && !document.querySelector('style').innerText.includes(propertiesBackgroundRepeat4[i])) {
        let styles = ` 
            .${propertiesBackgroundRepeat4[i]} { 
                ${valuesBackgroundRepeat4[i]}
            }
            @media screen and (min-width: 1920px){
                .${propertiesBackgroundRepeat4[i]} { 
                    ${valuesBackgroundRepeat4[i]}
                }
            }`;
        document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
    }
}