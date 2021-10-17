let propertiesEmptyCells = [
    'v-cells-show',
    'v-cells-hidden'
]
let valuesEmptyCells = [
    'empty-cells: show',
    'empty-cells: hidden;'
]
for (var i = 0; i <= propertiesEmptyCells.length; i++) {
    if (document.querySelector(`.${propertiesEmptyCells[i]}`) && !document.querySelector('style').innerText.includes(propertiesEmptyCells[i])) {
        let styles = ` 
            @media screen and (min-width: 900px) and (max-width: 1920px) {
                .${propertiesEmptyCells[i]} { 
                    ${valuesEmptyCells[i]}
                }
            }`;
        document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
    }
}
let propertiesEmptyCells2 = [
    'mb_v-cells-show',
    'mb_v-cells-hidden'
]
let valuesEmptyCells2 = [
    'empty-cells: show',
    'empty-cells: hidden;'
]
for (var i = 0; i <= propertiesEmptyCells2.length; i++) {
    if (document.querySelector(`.${propertiesEmptyCells2[i]}`) && !document.querySelector('style').innerText.includes(propertiesEmptyCells2[i])) {
        let styles = ` 
            @media screen and (min-width: 320px) and (max-width: 600px){
                .${propertiesEmptyCells2[i]} { 
                    ${valuesEmptyCells2[i]}
                }
            }`;
        document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
    }
}
let propertiesEmptyCells3 = [
    'tb_v-cells-show',
    'tb_v-cells-hidden'
]
let valuesEmptyCells3 = [
    'empty-cells: show',
    'empty-cells: hidden;'
]
for (var i = 0; i <= propertiesEmptyCells3.length; i++) {
    if (document.querySelector(`.${propertiesEmptyCells3[i]}`) && !document.querySelector('style').innerText.includes(propertiesEmptyCells3[i])) {
        let styles = ` 
            @media screen and (min-width: 600px) and (max-width: 900px){
                .${propertiesEmptyCells3[i]} { 
                    ${valuesEmptyCells3[i]}
                }
            }`;
        document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
    }
}
let propertiesEmptyCells4 = [
    'pc_v-cells-show',
    'pc_v-cells-hidden'
]
let valuesEmptyCells4 = [
    'empty-cells: show',
    'empty-cells: hidden;'
]
for (var i = 0; i <= propertiesEmptyCells4.length; i++) {
    if (document.querySelector(`.${propertiesEmptyCells4[i]}`) && !document.querySelector('style').innerText.includes(propertiesEmptyCells4[i])) {
        let styles = ` 
            @media screen and (min-width: 1920px){
                .${propertiesEmptyCells4[i]} { 
                    ${valuesEmptyCells4[i]}
                }
            }`;
        document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
    }
}