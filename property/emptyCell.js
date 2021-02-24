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
                .${propertiesEmptyCells[i]} { 
                    ${valuesEmptyCells[i]}
                }`;
        document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
    }
}