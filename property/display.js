let propertiesDisplay = [
    'v-d-flex',
    'v-d-block',
    'v-d-flexbox',
    'v-d-inline',
    'v-d-table',
    'v-d-inline-flex',
    'v-d-inline-block',
    'v-d-inline-flexbox',
    'v-d-inline-table',
    'v-d-grid',
    'v-d-table-column-group',
    'v-d-table-footer-group',
    'v-d-table-header-group',
    'v-d-table-row',
    'v-d-table-cell',
    'v-d-table-column',
    'v-d-none',
    'v-d-flow-root'
]
let valuesDisplay = [
    'display: flex',
    'display: block;',
    'display: flexbox;',
    'display: inline;',
    'display: table',
    'display: inline-flex;',
    'display: inline-block;',
    'display: inline-flexbox;',
    'display: inline-table;',
    'display: grid;',
    'display: table-column-group;',
    'display: table-footer-group;',
    'display: table-header-group;',
    'display: table-row;',
    'display: table-cell;',
    'display: table-column;',
    'display: none;',
    'display: flow-root;'
]
for (var i = 0; i <= propertiesDisplay.length; i++) {
    if (document.querySelector(`.${propertiesDisplay[i]}`) && !document.querySelector('style').innerText.includes(propertiesDisplay[i])) {
        let styles = ` 
            @media screen and (min-width: 900px) and (max-width: 1920px) {
                .${propertiesDisplay[i]} { 
                    ${valuesDisplay[i]}
                }
            }`;
        document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
    }
}
let propertiesDisplay2 = [
    'mb:v-d-flex',
    'mb:v-d-block',
    'mb:v-d-flexbox',
    'mb:v-d-inline',
    'mb:v-d-table',
    'mb:v-d-inline-flex',
    'mb:v-d-inline-block',
    'mb:v-d-inline-flexbox',
    'mb:v-d-inline-table',
    'mb:v-d-grid',
    'mb:v-d-table-column-group',
    'mb:v-d-table-footer-group',
    'mb:v-d-table-header-group',
    'mb:v-d-table-row',
    'mb:v-d-table-cell',
    'mb:v-d-table-column',
    'mb:v-d-none',
    'mb:v-d-flow-root'
]
let valuesDisplay2 = [
    'display: flex',
    'display: block;',
    'display: flexbox;',
    'display: inline;',
    'display: table',
    'display: inline-flex;',
    'display: inline-block;',
    'display: inline-flexbox;',
    'display: inline-table;',
    'display: grid;',
    'display: table-column-group;',
    'display: table-footer-group;',
    'display: table-header-group;',
    'display: table-row;',
    'display: table-cell;',
    'display: table-column;',
    'display: none;',
    'display: flow-root;'
]
for (var i = 0; i <= propertiesDisplay2.length; i++) {
    if (document.querySelector(`.${propertiesDisplay2[i]}`) && !document.querySelector('style').innerText.includes(propertiesDisplay2[i])) {
        let styles = ` 
            @media screen and (min-width: 320px) and (max-width: 600px){
                .${propertiesDisplay2[i]} { 
                    ${valuesDisplay2[i]}
                }
            }`;
        document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
    }
}
let propertiesDisplay3 = [
    'tb:v-d-flex',
    'tb:v-d-block',
    'tb:v-d-flexbox',
    'tb:v-d-inline',
    'tb:v-d-table',
    'tb:v-d-inline-flex',
    'tb:v-d-inline-block',
    'tb:v-d-inline-flexbox',
    'tb:v-d-inline-table',
    'tb:v-d-grid',
    'tb:v-d-table-column-group',
    'tb:v-d-table-footer-group',
    'tb:v-d-table-header-group',
    'tb:v-d-table-row',
    'tb:v-d-table-cell',
    'tb:v-d-table-column',
    'tb:v-d-none',
    'tb:v-d-flow-root'
]
let valuesDisplay3 = [
    'display: flex',
    'display: block;',
    'display: flexbox;',
    'display: inline;',
    'display: table',
    'display: inline-flex;',
    'display: inline-block;',
    'display: inline-flexbox;',
    'display: inline-table;',
    'display: grid;',
    'display: table-column-group;',
    'display: table-footer-group;',
    'display: table-header-group;',
    'display: table-row;',
    'display: table-cell;',
    'display: table-column;',
    'display: none;',
    'display: flow-root;'
]
for (var i = 0; i <= propertiesDisplay3.length; i++) {
    if (document.querySelector(`.${propertiesDisplay3[i]}`) && !document.querySelector('style').innerText.includes(propertiesDisplay3[i])) {
        let styles = ` 
            @media screen and (min-width: 600px) and (max-width: 900px){
                .${propertiesDisplay3[i]} { 
                    ${valuesDisplay3[i]}
                }
            }`;
        document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
    }
}
let propertiesDisplay4 = [
    'pc:v-d-flex',
    'pc:v-d-block',
    'pc:v-d-flexbox',
    'pc:v-d-inline',
    'pc:v-d-table',
    'pc:v-d-inline-flex',
    'pc:v-d-inline-block',
    'pc:v-d-inline-flexbox',
    'pc:v-d-inline-table',
    'pc:v-d-grid',
    'pc:v-d-table-column-group',
    'pc:v-d-table-footer-group',
    'pc:v-d-table-header-group',
    'pc:v-d-table-row',
    'pc:v-d-table-cell',
    'pc:v-d-table-column',
    'pc:v-d-none',
    'pc:v-d-flow-root'
]
let valuesDisplay4 = [
    'display: flex',
    'display: block;',
    'display: flexbox;',
    'display: inline;',
    'display: table',
    'display: inline-flex;',
    'display: inline-block;',
    'display: inline-flexbox;',
    'display: inline-table;',
    'display: grid;',
    'display: table-column-group;',
    'display: table-footer-group;',
    'display: table-header-group;',
    'display: table-row;',
    'display: table-cell;',
    'display: table-column;',
    'display: none;',
    'display: flow-root;'
]
for (var i = 0; i <= propertiesDisplay4.length; i++) {
    if (document.querySelector(`.${propertiesDisplay4[i]}`) && !document.querySelector('style').innerText.includes(propertiesDisplay4[i])) {
        let styles = ` 
            @media screen and (min-width: 1920px){
                .${propertiesDisplay4[i]} { 
                    ${valuesDisplay4[i]}
                }
            }`;
        document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
    }
}