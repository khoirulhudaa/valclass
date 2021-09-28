let propertiesPosition = [
    'v-relative',
    'v-absolute',
    'v-fixed',
    'v-sticky',
    'v-static'
]

let valuesPosition = [
    'position: relative;',
    'position: absolute;',
    'position: fixed;',
    'position: sticky;',
    'position: static;'
]
for (var i = 0; i <= propertiesPosition.length; i++) {
    if (document.querySelector(`.${propertiesPosition[i]}`) && !document.querySelector('style').innerText.includes(propertiesPosition[i])) {
        let styles = ` 
        @media screen and (min-width: 900px){
            .${propertiesPosition[i]} { 
                ${valuesPosition[i]}
            }
        }`;
        document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
    }
}