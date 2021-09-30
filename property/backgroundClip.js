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
            @media screen and (min-width: 900px) and (max-width: 1920px) {
                .${propertiesBackgroundClip[i]} { 
                    ${valuesBackgroundClip[i]}
                }
            }`;
        document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
    }
}

let propertiesBackgroundClip2 = [
    'mb:v-bg-clip-border',
    'mb:v-bg-clip-padding',
    'mb:v-bg-clip-content',
    'mb:v-bg-clip-text'
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
            @media screen and (min-width: 320px) and (max-width: 600px){
                .${propertiesBackgroundClip2[i]} { 
                    ${valuesBackgroundClip2[i]}
                }
            }`;
        document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
    }
}

let propertiesBackgroundClip3 = [
    'tb:v-bg-clip-border',
    'tb:v-bg-clip-padding',
    'tb:v-bg-clip-content',
    'tb:v-bg-clip-text'
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
            @media screen and (min-width: 600px) and (max-width: 900px){
                .${propertiesBackgroundClip3[i]} { 
                    ${valuesBackgroundClip3[i]}
                }
            }`;
        document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
    }
}

let propertiesBackgroundClip4 = [
    'pc:v-bg-clip-border',
    'pc:v-bg-clip-padding',
    'pc:v-bg-clip-content',
    'pc:v-bg-clip-text'
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
            @media screen and (min-width: 1920px){
                .${propertiesBackgroundClip4[i]} { 
                    ${valuesBackgroundClip4[i]}
                }
            }`;
        document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
    }
}