let propertiesIndex = [
    'v-index--1',
    'v-index--2',
    'v-index--3',
    'v-index--4',
    'v-index-0',
    'v-index-1',
    'v-index-2',
    'v-index-3',
    'v-index-4'
]
let valuesIndex = [
    'z-index: -1;',
    'z-index: -2;',
    'z-index: -3;',
    'z-index: -4;',
    'z-index: 0;',
    'z-index: 1;',
    'z-index: 2;',
    'z-index: 3;',
    'z-index: 4;'
]
for (var i = 0; i <= propertiesIndex.length; i++) {
    if (document.querySelector(`.${propertiesIndex[i]}`) && !document.querySelector('style').innerText.includes(propertiesIndex[i])) {
        let styles = ` 
            .${propertiesIndex[i]} { 
                ${valuesIndex[i]}
            }`;
        document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
    }
}