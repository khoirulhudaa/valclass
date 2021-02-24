let propertiesFloats = [
    'v-float-left',
    'v-float-right',
    'v-float-none',
    'v-float-inline-end',
    'v-float-inline-start'
]
let valuesFloats = [
    'float: left;',
    'float: right;',
    'float: none;',
    'float: inline-end;',
    'float: inline-start;'
]
for (var i = 0; i <= propertiesFloats.length; i++) {
    if (document.querySelector(`.${propertiesFloats[i]}`) && !document.querySelector('style').innerText.includes(propertiesFloats[i])) {
        let styles = ` 
                .${propertiesFloats[i]} { 
                    ${valuesFloats[i]}
                }`;
        document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
    }
}