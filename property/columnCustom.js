let propertiesColumnCustom = [
    'v-col',
    'v-cols-2',
    'v-cols-3',
    'v-cols-4'
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
            @media screen and (min-width: 900px){ 
                .${propertiesColumnCustom[i]} { 
                    ${valueColumnCustom[i]}
                }
            }`;
        document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
    }
}