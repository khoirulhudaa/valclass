
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
            @media screen and (min-width: 900px) and (max-width: 1920px) {
                .${propertiesGrid[i]} { 
                    ${valueGrids[i]}
                }
            }`;
        document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
    }
}
let propertiesGrid2 = [
    'mb:v-row',
    'mb:v-rows-2',
    'mb:v-rows-3',
    'mb:v-rows-4',
    'mb:v-grid-gap-1',
    'mb:v-grid-gap-2',
    'mb:v-grid-gap-3',
    'mb:v-grid-gap-4',
    'mb:v-col'
]
let valueGrids2 = [
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
for (var i = 0; i <= propertiesGrid2.length; i++) {
    if (document.querySelector(`.${propertiesGrid2[i]}`) && !document.querySelector('style').innerText.includes(propertiesGrid2[i])) {
        let styles = ` 
            @media screen and (min-width: 320px) and (max-width: 600px){
                .${propertiesGrid2[i]} { 
                    ${valueGrids2[i]}
                }
            }`;
        document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
    }
}
let propertiesGrid3 = [
    'tb:v-row',
    'tb:v-rows-2',
    'tb:v-rows-3',
    'tb:v-rows-4',
    'tb:v-grid-gap-1',
    'tb:v-grid-gap-2',
    'tb:v-grid-gap-3',
    'tb:v-grid-gap-4',
    'tb:v-col'
]
let valueGrids3 = [
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
for (var i = 0; i <= propertiesGrid3.length; i++) {
    if (document.querySelector(`.${propertiesGrid3[i]}`) && !document.querySelector('style').innerText.includes(propertiesGrid3[i])) {
        let styles = ` 
            @media screen and (min-width: 600px) and (max-width: 900px){
                .${propertiesGrid3[i]} { 
                    ${valueGrids3[i]}
                }
            }`;
        document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
    }
}
let propertiesGrid4 = [
    'pc:v-row',
    'pc:v-rows-2',
    'pc:v-rows-3',
    'pc:v-rows-4',
    'pc:v-grid-gap-1',
    'pc:v-grid-gap-2',
    'pc:v-grid-gap-3',
    'pc:v-grid-gap-4',
    'pc:v-col'
]
let valueGrids4 = [
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
for (var i = 0; i <= propertiesGrid4.length; i++) {
    if (document.querySelector(`.${propertiesGrid4[i]}`) && !document.querySelector('style').innerText.includes(propertiesGrid4[i])) {
        let styles = ` 
            @media screen and (min-width: 1920px){
                .${propertiesGrid4[i]} { 
                    ${valueGrids4[i]}
                }
            }`;
        document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
    }
}