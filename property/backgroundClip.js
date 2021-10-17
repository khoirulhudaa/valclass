let propertiesBackgroundClip = [
    'v-bg-clip-border',
    'v-bg-clip-padding',
    'v-bg-clip-content',
    'v-bg-clip-text'
]
let valuesBackgroundClip = [
    'background-clip: border-box',
    'background-clip: padding-box',
    'background-clip: content-box',
    'background-clip: text'
]
for (var i = 0; i <= propertiesBackgroundClip.length; i++) {
    if (document.querySelector(`.${propertiesBackgroundClip[i]}`) && !document.querySelector('style').innerText.includes(propertiesBackgroundClip[i])) {
        let styles = ` 
            .${propertiesBackgroundClip[i]} { 
                ${valuesBackgroundClip[i]}
            }
            @media screen and (min-width: 900px) and (max-width: 1920px) {
                .${propertiesBackgroundClip[i]} { 
                    ${valuesBackgroundClip[i]}
                }
            }`;
        document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
    }
}

let propertiesBackgroundClip2 = [
    'mb_v-bg-clip-border',
    'mb_v-bg-clip-padding',
    'mb_v-bg-clip-content',
    'mb_v-bg-clip-text'
]
let valuesBackgroundClip2 = [
    'background-clip: border-box',
    'background-clip: padding-box',
    'background-clip: content-box',
    'background-clip: text'
]
for (var i = 0; i <= propertiesBackgroundClip2.length; i++) {
    if (document.querySelector(`.${propertiesBackgroundClip2[i]}`) && !document.querySelector('style').innerText.includes(propertiesBackgroundClip2[i])) {
        let styles = ` 
            .${propertiesBackgroundClip2[i]} { 
                ${valuesBackgroundClip2[i]}
            }
            @media screen and (min-width: 320px) and (max-width: 600px){
                .${propertiesBackgroundClip2[i]} { 
                    ${valuesBackgroundClip2[i]}
                }
            }`;
        document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
    }
}

let propertiesBackgroundClip3 = [
    'tb_v-bg-clip-border',
    'tb_v-bg-clip-padding',
    'tb_v-bg-clip-content',
    'tb_v-bg-clip-text'
]
let valuesBackgroundClip3 = [
    'background-clip: border-box',
    'background-clip: padding-box',
    'background-clip: content-box',
    'background-clip: text'
]
for (var i = 0; i <= propertiesBackgroundClip3.length; i++) {
    if (document.querySelector(`.${propertiesBackgroundClip3[i]}`) && !document.querySelector('style').innerText.includes(propertiesBackgroundClip3[i])) {
        let styles = ` 
            .${propertiesBackgroundClip3[i]} { 
                ${valuesBackgroundClip3[i]}
            }
            @media screen and (min-width: 600px) and (max-width: 900px){
                .${propertiesBackgroundClip3[i]} { 
                    ${valuesBackgroundClip3[i]}
                }
            }`;
        document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
    }
}

let propertiesBackgroundClip4 = [
    'pc_v-bg-clip-border',
    'pc_v-bg-clip-padding',
    'pc_v-bg-clip-content',
    'pc_v-bg-clip-text'
]
let valuesBackgroundClip4 = [
    'background-clip: border-box',
    'background-clip: padding-box',
    'background-clip: content-box',
    'background-clip: text'
]
for (var i = 0; i <= propertiesBackgroundClip4.length; i++) {
    if (document.querySelector(`.${propertiesBackgroundClip4[i]}`) && !document.querySelector('style').innerText.includes(propertiesBackgroundClip4[i])) {
        let styles = ` 
            .${propertiesBackgroundClip4[i]} { 
                ${valuesBackgroundClip4[i]}
            }
            @media screen and (min-width: 1920px){
                .${propertiesBackgroundClip4[i]} { 
                    ${valuesBackgroundClip4[i]}
                }
            }`;
        document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
    }
}