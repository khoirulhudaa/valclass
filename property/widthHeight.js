let propertiesWidthHeight = [
    'v-w-1',
    'v-w-2',
    'v-w-3',
    'v-w-4',
    'v-w-full',
    'v-w-screen',
    'v-w-min',
    'v-w-max',
    'v-w-half',
    'v-w-100',
    'v-w-200',
    'v-w-300',
    'v-w-400',
    'v-w-500',
    'v-w-600',
    'v-w-700',
    'v-w-800',
    'v-h-1',
    'v-h-2',
    'v-h-3',
    'v-h-4',
    'v-h-full',
    'v-h-screen',
    'v-h-min',
    'v-h-max',
    'v-h-half',
    'v-h-100',
    'v-h-200',
    'v-h-300',
    'v-h-400',
    'v-h-500',
    'v-h-600',
    'v-h-700',
    'v-h-800',
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
    'width: 50%;',
    'width: 100px;',
    'width: 200px;',
    'width: 300px;',
    'width: 400px;',
    'width: 500px;',
    'width: 600px;',
    'width: 700px;',
    'width: 800px;',
    'height: 20%;',
    'height: 40%;',
    'height: 60%;',
    'height: 80%;',
    'height: 100%;',
    'height: 100vw;',
    'height: min-content;',
    'height: max-content;',
    'height: 50%;',
    'height: 100px;',
    'height: 200px;',
    'height: 300px;',
    'height: 400px;',
    'height: 500px;',
    'height: 600px;',
    'height: 700px;',
    'height: 800px;',
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
