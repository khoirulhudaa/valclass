let propertiesBoxShadow = [
    'v-box-shadow-sm',
    'v-box-shadow-md',
    'v-box-shadow-lg',
    'v-box-shadow-xl'
]
let valuesBoxShadow = [
    "box-shadow: 2px 2px 2px rgb(199, 199, 199);",
    "box-shadow: 3px 3px 3px rgb(197, 197, 197);",
    "box-shadow: 3.5px 3.5px 2px rgb(197, 197, 197);",
    "box-shadow: 4px 4px 2px rgb(173, 173, 173);"
]
for (var i = 0; i <= propertiesBoxShadow.length; i++) {
    if (document.querySelector(`.${propertiesBoxShadow[i]}`) && !document.querySelector('style').innerText.includes(propertiesBoxShadow[i])) {
        let styles = ` 
                .${propertiesBoxShadow[i]} { 
                    ${valuesBoxShadow[i]}
                }`;
        document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
    }
}