let propertiesColumnCustom = [
    'v-col',
    'v-col-2',
    'v-col-3',
    'v-col-4'
]
let valueColumnCustom = [
    `column-count: 1; 
     padding: 10px;`,
    `column-count: 2;
     padding: 10px;`,
    `column-count: 3; 
     padding: 10px;`,
    `column-count: 4; 
     padding: 10px;`
]
for (var i = 0; i <= propertiesColumnCustom.length; i++) {
    if (document.querySelector(`.${propertiesColumnCustom[i]}`) && !document.querySelector('style').innerText.includes(propertiesColumnCustom[i])) {
        let styles = ` 
                .${propertiesColumnCustom[i]} { 
                    ${valueColumnCustom[i]}
                }`;
        document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
    }
}