let propertiesOpacity = [
    'v-opacity-0',
    'v-opacity-1',
    'v-opacity-2',
    'v-opacity-3',
    'v-opacity-4'
]
let valuesOpacity = [
    'opacity: 0%',
    'opacity: 25%',
    'opacity: 50%;',
    'opacity: 75%;',
    'opacity: 100%;'
]
for (var i = 0; i <= propertiesOpacity.length; i++) {
    if (document.querySelector(`.${propertiesOpacity[i]}`) && !document.querySelector('style').innerText.includes(propertiesOpacity[i])) {
        let styles = ` 
            .${propertiesOpacity[i]} { 
                ${valuesOpacity[i]}
            }`;
        document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
    }
}