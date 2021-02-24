let propertiesCursors = [
    'v-cursor-pointer',
    'v-cursor-col-resize',
    'v-cursor-context-menu ',
    'v-cursor-all-scroll',
    'v-cursor-cell',
    'v-cursor-alias',
    'v-cursor-default',
    'v-cursor-none',
    'v-cursor-progress'
]
let valuesCursors = [
    'cursor: pointer;',
    'cursor: col-resize;',
    'cursor: context-menu;',
    'cursor: all-scroll;',
    'cursor: cell;',
    'cursor: alias;',
    'cursor: default;',
    'cursor: none;',
    'cursor: progress;'
]
for (var i = 0; i <= propertiesCursors.length; i++) {
    if (document.querySelector(`.${propertiesCursors[i]}`) && !document.querySelector('style').innerText.includes(propertiesCursors[i])) {
        let styles = ` 
                .${propertiesCursors[i]} { 
                    ${valuesCursors[i]}
                }`;
        document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
    }
}