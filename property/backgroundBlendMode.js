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
                .${propertiesBackgroundBlend[i]} { 
                    ${valuesBackgroundBlend[i]}
                }`;
        document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
    }
}