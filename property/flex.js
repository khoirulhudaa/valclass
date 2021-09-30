
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
    'v-flex-wrap',
    'v-flex-nowrap',
    'v-flex-wrap-reverse',
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
    'mb:v-flex--1',
    'mb:v-flex--2',
    'mb:v-flex--3',
    'mb:v-flex--4',
    'mb:v-flex-0',
    'mb:v-flex-1',
    'mb:v-flex-2',
    'mb:v-flex-3',
    'mb:v-flex-4',
    'mb:v-flex-auto',
    'mb:v-flex-content',
    'mb:v-flex-none',
    'mb:v-flex-basis-auto',
    'mb:v-flex-basis-content',
    'mb:v-flex-wrap',
    'mb:v-flex-nowrap',
    'mb:v-flex-wrap-reverse',
    'mb:v-direction-column',
    'mb:v-direction-column-reverse',
    'mb:v-direction-row',
    'mb:v-direction-row-reverse',
    'mb:v-shrink-1',
    'mb:v-shrink-2',
    'mb:v-shrink-3',
    'mb:v-shrink-4'
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
    'tb:v-flex--1',
    'tb:v-flex--2',
    'tb:v-flex--3',
    'tb:v-flex--4',
    'tb:v-flex-0',
    'tb:v-flex-1',
    'tb:v-flex-2',
    'tb:v-flex-3',
    'tb:v-flex-4',
    'tb:v-flex-auto',
    'tb:v-flex-content',
    'tb:v-flex-none',
    'tb:v-flex-basis-auto',
    'tb:v-flex-basis-content',
    'tb:v-flex-wrap',
    'tb:v-flex-nowrap',
    'tb:v-flex-wrap-reverse',
    'tb:v-direction-column',
    'tb:v-direction-column-reverse',
    'tb:v-direction-row',
    'tb:v-direction-row-reverse',
    'tb:v-shrink-1',
    'tb:v-shrink-2',
    'tb:v-shrink-3',
    'tb:v-shrink-4'
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
    'pc:v-flex--1',
    'pc:v-flex--2',
    'pc:v-flex--3',
    'pc:v-flex--4',
    'pc:v-flex-0',
    'pc:v-flex-1',
    'pc:v-flex-2',
    'pc:v-flex-3',
    'pc:v-flex-4',
    'pc:v-flex-auto',
    'pc:v-flex-content',
    'pc:v-flex-none',
    'pc:v-flex-basis-auto',
    'pc:v-flex-basis-content',
    'pc:v-flex-wrap',
    'pc:v-flex-nowrap',
    'pc:v-flex-wrap-reverse',
    'pc:v-direction-column',
    'pc:v-direction-column-reverse',
    'pc:v-direction-row',
    'pc:v-direction-row-reverse',
    'pc:v-shrink-1',
    'pc:v-shrink-2',
    'pc:v-shrink-3',
    'pc:v-shrink-4'
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