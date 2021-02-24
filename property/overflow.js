let propertiesOverflows = [
    'v-overflow-hidden',
    'v-overflow-scroll',
    'v-overflow-auto',
    'v-overflow-visible',
    'v-overflowX-hidden',
    'v-overflowX-scroll',
    'v-overflowX-auto',
    'v-overflowX-visible',
    'v-overflowY-hidden',
    'v-overflowY-scroll',
    'v-overflowY-auto',
    'v-overflowY-visible',
    'v-overflow-break-word',
    'v-overflow-normal',
    'v-overflow-moz-unscrollable',
]
let valuesOverflows = [
    'overflow: hidden;',
    'overflow: scroll;',
    'overflow: auto;',
    'overflow: visible;',
    'overflow-x: hidden;',
    'overflow-x: scroll;',
    'overflow-x: auto;',
    'overflow-x: visible;',
    'overflow-y: hidden;',
    'overflow-y: scroll;',
    'overflow-y: auto;',
    'overflow-y: visible;',
    'overflow-wrap: break-word;',
    'overflow-wrap: normal;',
    'overflow: moz-hidden-unscrollable;',
]
for (var i = 0; i <= propertiesOverflows.length; i++) {
    if (document.querySelector(`.${propertiesOverflows[i]}`) && !document.querySelector('style').innerText.includes(propertiesOverflows[i])) {
        let styles = ` 
            .${propertiesOverflows[i]} { 
                ${valuesOverflows[i]}
            }`;
        document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
    }
}