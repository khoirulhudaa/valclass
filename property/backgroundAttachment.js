let propertiesBackgroundAttachment = [
    'v-attachment-fixed',
    'v-attachment-local',
    'v-attachment-scroll'
]
let valuesBackgroundAttachment = [
    'background-attachment: fixed',
    'background-attachment: local',
    'background-attachment: scroll'
]
for (var i = 0; i <= propertiesBackgroundAttachment.length; i++) {
    if (document.querySelector(`.${propertiesBackgroundAttachment[i]}`) && !document.querySelector('style').innerText.includes(propertiesBackgroundAttachment[i])) {
        let styles = ` 
            @media screen and (min-width: 900px) and (max-width: 1920px) {
                .${propertiesBackgroundAttachment[i]} { 
                    ${valuesBackgroundAttachment[i]}
                }
            }`;
        document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
    }
}

let propertiesBackgroundAttachment2 = [
    'mb:v-attachment-fixed',
    'mb:v-attachment-local',
    'mb:v-attachment-scroll'
]
let valuesBackgroundAttachment2 = [
    'background-attachment: fixed',
    'background-attachment: local',
    'background-attachment: scroll'
]
for (var i = 0; i <= propertiesBackgroundAttachment2.length; i++) {
    if (document.querySelector(`.${propertiesBackgroundAttachment2[i]}`) && !document.querySelector('style').innerText.includes(propertiesBackgroundAttachment2[i])) {
        let styles = ` 
            @media screen and (min-width: 320px) and (max-width: 600px){
                .${propertiesBackgroundAttachment2[i]} { 
                    ${valuesBackgroundAttachment2[i]}
                }
            }`;
        document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
    }
}

let propertiesBackgroundAttachment3 = [
    'tb:v-attachment-fixed',
    'tb:v-attachment-local',
    'tb:v-attachment-scroll'
]
let valuesBackgroundAttachment3 = [
    'background-attachment: fixed',
    'background-attachment: local',
    'background-attachment: scroll'
]
for (var i = 0; i <= propertiesBackgroundAttachment3.length; i++) {
    if (document.querySelector(`.${propertiesBackgroundAttachment3[i]}`) && !document.querySelector('style').innerText.includes(propertiesBackgroundAttachment3[i])) {
        let styles = ` 
            @media screen and (min-width: 600px) and (max-width: 900px){
                .${propertiesBackgroundAttachment3[i]} { 
                    ${valuesBackgroundAttachment3[i]}
                }
            }`;
        document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
    }
}

let propertiesBackgroundAttachment4 = [
    'pc:v-attachment-fixed',
    'pc:v-attachment-local',
    'pc:v-attachment-scroll'
]
let valuesBackgroundAttachment4 = [
    'background-attachment: fixed',
    'background-attachment: local',
    'background-attachment: scroll'
]
for (var i = 0; i <= propertiesBackgroundAttachment4.length; i++) {
    if (document.querySelector(`.${propertiesBackgroundAttachment4[i]}`) && !document.querySelector('style').innerText.includes(propertiesBackgroundAttachment4[i])) {
        let styles = ` 
            @media screen and (min-width: 1920px){
                .${propertiesBackgroundAttachment4[i]} { 
                    ${valuesBackgroundAttachment4[i]}
                }
            }`;
        document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
    }
}