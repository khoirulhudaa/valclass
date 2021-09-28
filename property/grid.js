
let propertiesGrid = [
    'v-row',
    'v-rows-2',
    'v-rows-3',
    'v-rows-4',
    'v-grid-gap-1',
    'v-grid-gap-2',
    'v-grid-gap-3',
    'v-grid-gap-4',
    'v-col'
]
let valueGrids = [
    `grid-template-columns: auto; display: flex; flex-wrap: wrap;flex-direction: column;padding: 10px;box-sizing: border-box;`,
    `grid-template-columns: auto auto; display: flex; flex-wrap: wrap;flex-direction: column;box-sizing: border-box;`,
    `grid-template-columns: auto auto auto; display: flex; flex-wrap: wrap;flex-direction: column;box-sizing: border-box;`,
    `grid-template-columns: auto auto auto auto; display: flex; flex-wrap: wrap;flex-direction: column;box-sizing: border-box;`,
    `grid-gap: 5px`,
    `grid-gap: 10px`,
    `grid-gap: 15px`,
    `grid-gap: 20px`,
    `padding: 20px 0; 
     flex: 1; `
]
for (var i = 0; i <= propertiesGrid.length; i++) {
    if (document.querySelector(`.${propertiesGrid[i]}`) && !document.querySelector('style').innerText.includes(propertiesGrid[i])) {
        let styles = ` 
            @media screen and (min-width: 900px){
                .${propertiesGrid[i]} { 
                    ${valueGrids[i]}
                }
            }`;
        document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
    }
}