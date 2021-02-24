let propertiesTLRB = [
    'v-t-1',
    'v-t-2',
    'v-t-3',
    'v-t-4',
    'v-l-1',
    'v-l-2',
    'v-l-3',
    'v-l-4',
    'v-r-1',
    'v-r-2',
    'v-r-3',
    'v-r-4',
    'v-b-1',
    'v-b-2',
    'v-b-3',
    'v-b-4'
]
let valuesTLRB = [
    'top: 10px',
    'top: 20px;',
    'top: 30px;',
    'top: 40px;',
    'left: 10px;',
    'left: 20px;',
    'left: 30px;',
    'left: 40px;',
    'right: 10px;',
    'right: 20px;',
    'right: 30px;',
    'right: 40px;',
    'bottom: 10px;',
    'bottom: 20px;',
    'bottom: 30px;',
    'bottom: 40px;',
]
for (var i = 0; i <= propertiesTLRB.length; i++) {
    if (document.querySelector(`.${propertiesTLRB[i]}`) && !document.querySelector('style').innerText.includes(propertiesTLRB[i])) {
        let styles = ` 
            .${propertiesTLRB[i]} { 
                ${valuesTLRB[i]}
            }`;
        document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
    }
}