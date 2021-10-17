
let propertiesFlex = [
    'v-flex--1',
    'v-flex--2',
    'v-flex--3',
    'v-flex--4',
    'v-flex-0',
    'v-flex-1',
    'v-flex-2',
    'v-flex-3',
    'v-flex-4',
    'v-flex-auto',
    'v-flex-content',
    'v-flex-none',
    'v-flex-basis-auto',
    'v-flex-basis-content',
    'v-wrap-wrap',
    'v-wrap-nowrap',
    'v-wrap-wrap-reverse',
    'v-direction-column',
    'v-direction-column-reverse',
    'v-direction-row',
    'v-direction-row-reverse',
    'v-shrink-1',
    'v-shrink-2',
    'v-shrink-3',
    'v-shrink-4'
]
let valuesFlex = [
    'flex: 0.20;',
    'flex: 0.40;',
    'flex: 0.60;',
    'flex: 0.80;',
    'flex: 0;',
    'flex: 1;',
    'flex: 2;',
    'flex: 3;',
    'flex: 4;',
    'flex: auto;',
    'flex: content;',
    'flex: none;',
    'flex-basis: auto;',
    'flex-basis: content;',
    'flex-wrap: wrap;',
    'flex-wrap: nowrap;',
    'flex-wrap: wrap-reverse;',
    'flex-direction: column;',
    'flex-direction: column-reverse;',
    'flex-direction: row;',
    'flex-direction: row-reverse;',
    'flex-shrink: 1;',
    'flex-shrink: 2;',
    'flex-shrink: 3;',
    'flex-shrink: 4;'
]
for (var i = 0; i <= propertiesFlex.length; i++) {
    if (document.querySelector(`.${propertiesFlex[i]}`) && !document.querySelector('style').innerText.includes(propertiesFlex[i])) {
        let styles = ` 
            @media screen and (min-width: 900px) and (max-width: 1920px) {
                .${propertiesFlex[i]} { 
                    ${valuesFlex[i]}
                }
            }`;
        document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
    }
}
let propertiesFlex2 = [
    'mb_v-flex--1',
    'mb_v-flex--2',
    'mb_v-flex--3',
    'mb_v-flex--4',
    'mb_v-flex-0',
    'mb_v-flex-1',
    'mb_v-flex-2',
    'mb_v-flex-3',
    'mb_v-flex-4',
    'mb_v-flex-auto',
    'mb_v-flex-content',
    'mb_v-flex-none',
    'mb_v-flex-basis-auto',
    'mb_v-flex-basis-content',
    'mb_v-wrap-wrap',
    'mb_v-wrap-nowrap',
    'mb_v-wrap-wrap-reverse',
    'mb_v-direction-column',
    'mb_v-direction-column-reverse',
    'mb_v-direction-row',
    'mb_v-direction-row-reverse',
    'mb_v-shrink-1',
    'mb_v-shrink-2',
    'mb_v-shrink-3',
    'mb_v-shrink-4'
]
let valuesFlex2 = [
    'flex: 0.20;',
    'flex: 0.40;',
    'flex: 0.60;',
    'flex: 0.80;',
    'flex: 0;',
    'flex: 1;',
    'flex: 2;',
    'flex: 3;',
    'flex: 4;',
    'flex: auto;',
    'flex: content;',
    'flex: none;',
    'flex-basis: auto;',
    'flex-basis: content;',
    'flex-wrap: wrap;',
    'flex-wrap: nowrap;',
    'flex-wrap: wrap-reverse;',
    'flex-direction: column;',
    'flex-direction: column-reverse;',
    'flex-direction: row;',
    'flex-direction: row-reverse;',
    'flex-shrink: 1;',
    'flex-shrink: 2;',
    'flex-shrink: 3;',
    'flex-shrink: 4;'
]
for (var i = 0; i <= propertiesFlex2.length; i++) {
    if (document.querySelector(`.${propertiesFlex2[i]}`) && !document.querySelector('style').innerText.includes(propertiesFlex2[i])) {
        let styles = ` 
            @media screen and (min-width: 320px) and (max-width: 600px){
                .${propertiesFlex2[i]} { 
                    ${valuesFlex2[i]}
                }
            }`;
        document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
    }
}
let propertiesFlex3 = [
    'tb_v-flex--1',
    'tb_v-flex--2',
    'tb_v-flex--3',
    'tb_v-flex--4',
    'tb_v-flex-0',
    'tb_v-flex-1',
    'tb_v-flex-2',
    'tb_v-flex-3',
    'tb_v-flex-4',
    'tb_v-flex-auto',
    'tb_v-flex-content',
    'tb_v-flex-none',
    'tb_v-flex-basis-auto',
    'tb_v-flex-basis-content',
    'tb_v-wrap-wrap',
    'tb_v-wrap-nowrap',
    'tb_v-wrap-wrap-reverse',
    'tb_v-direction-column',
    'tb_v-direction-column-reverse',
    'tb_v-direction-row',
    'tb_v-direction-row-reverse',
    'tb_v-shrink-1',
    'tb_v-shrink-2',
    'tb_v-shrink-3',
    'tb_v-shrink-4'
]
let valuesFlex3 = [
    'flex: 0.20;',
    'flex: 0.40;',
    'flex: 0.60;',
    'flex: 0.80;',
    'flex: 0;',
    'flex: 1;',
    'flex: 2;',
    'flex: 3;',
    'flex: 4;',
    'flex: auto;',
    'flex: content;',
    'flex: none;',
    'flex-basis: auto;',
    'flex-basis: content;',
    'flex-wrap: wrap;',
    'flex-wrap: nowrap;',
    'flex-wrap: wrap-reverse;',
    'flex-direction: column;',
    'flex-direction: column-reverse;',
    'flex-direction: row;',
    'flex-direction: row-reverse;',
    'flex-shrink: 1;',
    'flex-shrink: 2;',
    'flex-shrink: 3;',
    'flex-shrink: 4;'
]
for (var i = 0; i <= propertiesFlex3.length; i++) {
    if (document.querySelector(`.${propertiesFlex3[i]}`) && !document.querySelector('style').innerText.includes(propertiesFlex3[i])) {
        let styles = ` 
            @media screen and (min-width: 600px) and (max-width: 900px){
                .${propertiesFlex3[i]} { 
                    ${valuesFlex3[i]}
                }
            }`;
        document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
    }
}
let propertiesFlex4 = [
    'pc_v-flex--1',
    'pc_v-flex--2',
    'pc_v-flex--3',
    'pc_v-flex--4',
    'pc_v-flex-0',
    'pc_v-flex-1',
    'pc_v-flex-2',
    'pc_v-flex-3',
    'pc_v-flex-4',
    'pc_v-flex-auto',
    'pc_v-flex-content',
    'pc_v-flex-none',
    'pc_v-flex-basis-auto',
    'pc_v-flex-basis-content',
    'pc_v-wrap-wrap',
    'pc_v-wrap-nowrap',
    'pc_v-wrap-wrap-reverse',
    'pc_v-direction-column',
    'pc_v-direction-column-reverse',
    'pc_v-direction-row',
    'pc_v-direction-row-reverse',
    'pc_v-shrink-1',
    'pc_v-shrink-2',
    'pc_v-shrink-3',
    'pc_v-shrink-4'
]
let valuesFlex4 = [
    'flex: 0.20;',
    'flex: 0.40;',
    'flex: 0.60;',
    'flex: 0.80;',
    'flex: 0;',
    'flex: 1;',
    'flex: 2;',
    'flex: 3;',
    'flex: 4;',
    'flex: auto;',
    'flex: content;',
    'flex: none;',
    'flex-basis: auto;',
    'flex-basis: content;',
    'flex-wrap: wrap;',
    'flex-wrap: nowrap;',
    'flex-wrap: wrap-reverse;',
    'flex-direction: column;',
    'flex-direction: column-reverse;',
    'flex-direction: row;',
    'flex-direction: row-reverse;',
    'flex-shrink: 1;',
    'flex-shrink: 2;',
    'flex-shrink: 3;',
    'flex-shrink: 4;'
]
for (var i = 0; i <= propertiesFlex4.length; i++) {
    if (document.querySelector(`.${propertiesFlex4[i]}`) && !document.querySelector('style').innerText.includes(propertiesFlex4[i])) {
        let styles = ` 
            @media screen and (min-width: 1920px){
                .${propertiesFlex4[i]} { 
                    ${valuesFlex4[i]}
                }
            }`;
        document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
    }
}