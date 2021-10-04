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
let propertiesCursors2 = [
    'mb_v-cursor-pointer',
    'mb_v-cursor-col-resize',
    'mb_v-cursor-context-menu ',
    'mb_v-cursor-all-scroll',
    'mb_v-cursor-cell',
    'mb_v-cursor-alias',
    'mb_v-cursor-default',
    'mb_v-cursor-none',
    'mb_v-cursor-progress'
]
let valuesCursors2 = [
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
for (var i = 0; i <= propertiesCursors2.length; i++) {
    if (document.querySelector(`.${propertiesCursors2[i]}`) && !document.querySelector('style').innerText.includes(propertiesCursors2[i])) {
        let styles = ` 
            @media screen and (min-width: 320px) and (max-width: 600px){
                .${propertiesCursors2[i]} { 
                    ${valuesCursors2[i]}
                }
            }`;
        document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
    }
}
let propertiesCursors3 = [
    'tb_v-cursor-pointer',
    'tb_v-cursor-col-resize',
    'tb_v-cursor-context-menu ',
    'tb_v-cursor-all-scroll',
    'tb_v-cursor-cell',
    'tb_v-cursor-alias',
    'tb_v-cursor-default',
    'tb_v-cursor-none',
    'tb_v-cursor-progress'
]
let valuesCursors3 = [
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
for (var i = 0; i <= propertiesCursors3.length; i++) {
    if (document.querySelector(`.${propertiesCursors3[i]}`) && !document.querySelector('style').innerText.includes(propertiesCursors3[i])) {
        let styles = ` 
            @media screen and (min-width: 600px) and (max-width: 900px){
                .${propertiesCursors3[i]} { 
                    ${valuesCursors3[i]}
                }
            }`;
        document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
    }
}
let propertiesCursors4 = [
    'pc_v-cursor-pointer',
    'pc_v-cursor-col-resize',
    'pc_v-cursor-context-menu ',
    'pc_v-cursor-all-scroll',
    'pc_v-cursor-cell',
    'pc_v-cursor-alias',
    'pc_v-cursor-default',
    'pc_v-cursor-none',
    'pc_v-cursor-progress'
]
let valuesCursors4 = [
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
for (var i = 0; i <= propertiesCursors4.length; i++) {
    if (document.querySelector(`.${propertiesCursors4[i]}`) && !document.querySelector('style').innerText.includes(propertiesCursors4[i])) {
        let styles = ` 
            @media screen and (min-width: 1920px){
                .${propertiesCursors4[i]} { 
                    ${valuesCursors4[i]}
                }
            }`;
        document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
    }
}