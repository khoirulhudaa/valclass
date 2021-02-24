
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
                .${propertiesBackgroundRepeat[i]} { 
                    ${valuesBackgroundRepeat[i]}
                }`;
        document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
    }
}