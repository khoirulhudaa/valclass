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
    'mb:v-cursor-pointer',
    'mb:v-cursor-col-resize',
    'mb:v-cursor-context-menu ',
    'mb:v-cursor-all-scroll',
    'mb:v-cursor-cell',
    'mb:v-cursor-alias',
    'mb:v-cursor-default',
    'mb:v-cursor-none',
    'mb:v-cursor-progress'
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
    'tb:v-cursor-pointer',
    'tb:v-cursor-col-resize',
    'tb:v-cursor-context-menu ',
    'tb:v-cursor-all-scroll',
    'tb:v-cursor-cell',
    'tb:v-cursor-alias',
    'tb:v-cursor-default',
    'tb:v-cursor-none',
    'tb:v-cursor-progress'
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
    'pc:v-cursor-pointer',
    'pc:v-cursor-col-resize',
    'pc:v-cursor-context-menu ',
    'pc:v-cursor-all-scroll',
    'pc:v-cursor-cell',
    'pc:v-cursor-alias',
    'pc:v-cursor-default',
    'pc:v-cursor-none',
    'pc:v-cursor-progress'
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