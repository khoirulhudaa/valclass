let propertiesBoxSizing = [
    'v-box-border',
    'v-box-content'
]
let valuesBoxSizing = [
    'box-sizing: border-box;',
    'box-sizing: content-box;'
]
for (var i = 0; i <= propertiesBoxSizing.length; i++) {
    if (document.querySelector(`.${propertiesBoxSizing[i]}`) && !document.querySelector('style').innerText.includes(propertiesBoxSizing[i])) {
        let styles = ` 
            @media screen and (min-width: 900px){
                .${propertiesBoxSizing[i]} { 
                    ${valuesBoxSizing[i]}
                }
            }`;
        document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
    }
}