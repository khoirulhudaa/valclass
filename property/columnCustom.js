let propertiesColumnCustom = [
    'v-col-1',
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
            @media screen and (min-width: 900px) and (max-width: 1920px) { 
                .${propertiesColumnCustom[i]} { 
                    ${valueColumnCustom[i]}
                }
            }`;
        document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
    }
}
let propertiesColumnCustom2 = [
    'mb_v-col-1',
    'mb_v-col-2',
    'mb_v-col-3',
    'mb_v-col-4'
]
let valueColumnCustom2 = [
    `column-count: 1; 
     padding: 10px;`,
    `column-count: 2;
     padding: 10px;`,
    `column-count: 3; 
     padding: 10px;`,
    `column-count: 4; 
     padding: 10px;`
]
for (var i = 0; i <= propertiesColumnCustom2.length; i++) {
    if (document.querySelector(`.${propertiesColumnCustom2[i]}`) && !document.querySelector('style').innerText.includes(propertiesColumnCustom2[i])) {
        let styles = `
            @media screen and (min-width: 320px) and (max-width: 600px){ 
                .${propertiesColumnCustom2[i]} { 
                    ${valueColumnCustom2[i]}
                }
            }`;
        document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
    }
}
let propertiesColumnCustom3 = [
    'tb_v-col-1',
    'tb_v-col-2',
    'tb_v-col-3',
    'tb_v-col-4'
]
let valueColumnCustom3 = [
    `column-count: 1; 
     padding: 10px;`,
    `column-count: 2;
     padding: 10px;`,
    `column-count: 3; 
     padding: 10px;`,
    `column-count: 4; 
     padding: 10px;`
]
for (var i = 0; i <= propertiesColumnCustom3.length; i++) {
    if (document.querySelector(`.${propertiesColumnCustom3[i]}`) && !document.querySelector('style').innerText.includes(propertiesColumnCustom3[i])) {
        let styles = `
            @media screen and (min-width: 600px) and (max-width: 900px){ 
                .${propertiesColumnCustom3[i]} { 
                    ${valueColumnCustom3[i]}
                }
            }`;
        document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
    }
}
let propertiesColumnCustom4 = [
    'pc_v-col-1',
    'pc_v-col-2',
    'pc_v-col-3',
    'pc_v-col-4'
]
let valueColumnCustom4 = [
    `column-count: 1; 
     padding: 10px;`,
    `column-count: 2;
     padding: 10px;`,
    `column-count: 3; 
     padding: 10px;`,
    `column-count: 4; 
     padding: 10px;`
]
for (var i = 0; i <= propertiesColumnCustom4.length; i++) {
    if (document.querySelector(`.${propertiesColumnCustom4[i]}`) && !document.querySelector('style').innerText.includes(propertiesColumnCustom4[i])) {
        let styles = `
            @media screen and (min-width: 1920px){ 
                .${propertiesColumnCustom4[i]} { 
                    ${valueColumnCustom4[i]}
                }
            }`;
        document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
    }
}