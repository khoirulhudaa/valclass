let propertiesTextShadow = [
    'v-text-shadow-sm',
    'v-text-shadow-md',
    'v-text-shadow-lg',
    'v-text-shadow-xl'
]
let valuesTextShadow = [
    "text-shadow: 2px 2px 2px rgb(199, 199, 199);",
    "text-shadow: 3px 3px 3px rgb(197, 197, 197);",
    "text-shadow: 3.5px 3.5px 2px rgb(197, 197, 197);",
    "text-shadow: 4px 4px 2px rgb(173, 173, 173);"
]
for (var i = 0; i <= propertiesTextShadow.length; i++) {
    if (document.querySelector(`.${propertiesTextShadow[i]}`) && !document.querySelector('style').innerText.includes(propertiesTextShadow[i])) {
        let styles = ` 
                .${propertiesTextShadow[i]} { 
                    ${valuesTextShadow[i]}
                }`;
        document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
    }
}