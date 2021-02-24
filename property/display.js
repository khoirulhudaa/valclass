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
                .${propertiesDisplay[i]} { 
                    ${valuesDisplay[i]}
                }`;
        document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
    }
}