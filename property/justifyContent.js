
let propertiesJustify = [
    'v-justify-center',
    'v-justify-left',
    'v-justify-right',
    'v-justify-safe',
    'v-justify-unsafe',
    'v-justify-start',
    'v-justify-end',
    'v-justify-flex-start',
    'v-justify-flex-end',
    'v-justify-between',
    'v-justify-around',
    'v-justify-evenly',
    'v-justify-stretch',
    'v-justify-last-baseline'
]
let valuesJustify = [
    'justify-content: center',
    'justify-content: left',
    'justify-content: right;',
    'justify-content: safe;',
    'justify-content: unsafe;',
    'justify-content: start',
    'justify-content: end',
    'justify-content: flex-start;',
    'justify-content: flex-end;',
    'justify-content: space-between;',
    'justify-content: space-around',
    'justify-content: space-evenly',
    'justify-content: stretch;',
    'justify-content: last baseline;'
]
for (var i = 0; i <= propertiesJustify.length; i++) {
    if (document.querySelector(`.${propertiesJustify[i]}`) && !document.querySelector('style').innerText.includes(propertiesJustify[i])) {
        let styles = ` 
            .${propertiesJustify[i]} { 
                ${valuesJustify[i]}
            }`;
        document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
    }
}