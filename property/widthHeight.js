let propertiesWidthHeight = [
    'v-w-1',
    'v-w-2',
    'v-w-3',
    'v-w-4',
    'v-w-full',
    'v-w-screen',
    'v-w-min',
    'v-w-max',
    'v-h-1',
    'v-h-2',
    'v-h-3',
    'v-h-4',
    'v-h-full',
    'v-h-screen',
    'v-h-min',
    'v-h-max',
]
let valuesWidthHeight = [
    'width: 20%;',
    'width: 40%;',
    'width: 60%;',
    'width: 80%;',
    'width: 100%;',
    'width: 100vw;',
    'width: min-content;',
    'width: max-content;',
    'height: 20%;',
    'height: 40%;',
    'height: 60%;',
    'height: 80%;',
    'height: 100%;',
    'height: 100vw;',
    'height: min-content;',
    'height: max-content;',
]
for (var i = 0; i <= propertiesWidthHeight.length; i++) {
    if (document.querySelector(`.${propertiesWidthHeight[i]}`) && !document.querySelector('style').innerText.includes(propertiesWidthHeight[i])) {
        let styles = ` 
            .${propertiesWidthHeight[i]} { 
                ${valuesWidthHeight[i]}
            }`;
        document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
    }
}