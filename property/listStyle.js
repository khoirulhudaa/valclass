let propertiesListStyle = [
    'v-list-none',
    'v-list-square',
    'v-list-circle',
    'v-list-desc',
    'v-list-decimal',
    'v-list-armenian',
    'v-list-georgian'
]
let valuesListStyle = [
    'list-style-type: none',
    'list-style-type: square',
    'list-style-type: circle;',
    'list-style-type: desc;',
    'list-style-type: decimal;',
    'list-style-type: armenian',
    'list-style-type: georgian'
]
for (var i = 0; i <= propertiesListStyle.length; i++) {
    if (document.querySelector(`.${propertiesListStyle[i]}`) && !document.querySelector('style').innerText.includes(propertiesListStyle[i])) {
        let styles = ` 
            .${propertiesListStyle[i]} { 
                ${valuesListStyle[i]}
            }`;
        document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
    }
}