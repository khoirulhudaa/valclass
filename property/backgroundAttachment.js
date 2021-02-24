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
                .${propertiesBackgroundAttachment[i]} { 
                    ${valuesBackgroundAttachment[i]}
                }`;
        document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
    }
}