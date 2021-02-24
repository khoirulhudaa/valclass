let propertiesBackgroundOrigin = [
    'v-bg-content-box',
    'v-bg-border-box',
    'v-bg-padding-box'
]
let valuesBackgroundOrigin = [
    'background-origin: content-box',
    'background-origin: border-box',
    'background-origin: padding-box'
]
for (var i = 0; i <= propertiesBackgroundOrigin.length; i++) {
    if (document.querySelector(`.${propertiesBackgroundOrigin[i]}`) && !document.querySelector('style').innerText.includes(propertiesBackgroundOrigin[i])) {
        let styles = ` 
                .${propertiesBackgroundOrigin[i]} { 
                    ${valuesBackgroundOrigin[i]}
                }`;
        document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
    }
}