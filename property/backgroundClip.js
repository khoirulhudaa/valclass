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
                }`;
        document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
    }
}