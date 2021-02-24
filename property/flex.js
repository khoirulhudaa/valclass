
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
                .${propertiesFlex[i]} { 
                    ${valuesFlex[i]}
                }`;
        document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
    }
}