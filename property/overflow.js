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
        @media screen and (min-width: 900px) and (max-width: 1920px) {
            .${propertiesOverflows[i]} { 
                ${valuesOverflows[i]}
            }
        }`;
        document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
    }
}
let propertiesOverflows2 = [
    'mb:v-overflow-hidden',
    'mb:v-overflow-scroll',
    'mb:v-overflow-auto',
    'mb:v-overflow-visible',
    'mb:v-overflowX-hidden',
    'mb:v-overflowX-scroll',
    'mb:v-overflowX-auto',
    'mb:v-overflowX-visible',
    'mb:v-overflowY-hidden',
    'mb:v-overflowY-scroll',
    'mb:v-overflowY-auto',
    'mb:v-overflowY-visible',
    'mb:v-overflow-break-word',
    'mb:v-overflow-normal',
    'mb:v-overflow-moz-unscrollable',
]
let valuesOverflows2 = [
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
for (var i = 0; i <= propertiesOverflows2.length; i++) {
    if (document.querySelector(`.${propertiesOverflows2[i]}`) && !document.querySelector('style').innerText.includes(propertiesOverflows2[i])) {
        let styles = ` 
        @media screen and (min-width: 320px) and (max-width: 600px){
            .${propertiesOverflows2[i]} { 
                ${valuesOverflows2[i]}
            }
        }`;
        document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
    }
}
let propertiesOverflows3 = [
    'tb:v-overflow-hidden',
    'tb:v-overflow-scroll',
    'tb:v-overflow-auto',
    'tb:v-overflow-visible',
    'tb:v-overflowX-hidden',
    'tb:v-overflowX-scroll',
    'tb:v-overflowX-auto',
    'tb:v-overflowX-visible',
    'tb:v-overflowY-hidden',
    'tb:v-overflowY-scroll',
    'tb:v-overflowY-auto',
    'tb:v-overflowY-visible',
    'tb:v-overflow-break-word',
    'tb:v-overflow-normal',
    'tb:v-overflow-moz-unscrollable',
]
let valuesOverflows3 = [
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
for (var i = 0; i <= propertiesOverflows3.length; i++) {
    if (document.querySelector(`.${propertiesOverflows3[i]}`) && !document.querySelector('style').innerText.includes(propertiesOverflows3[i])) {
        let styles = ` 
        @media screen and (min-width: 600px) and (max-width: 900px){
            .${propertiesOverflows3[i]} { 
                ${valuesOverflows3[i]}
            }
        }`;
        document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
    }
}
let propertiesOverflows4 = [
    'pc:v-overflow-hidden',
    'pc:v-overflow-scroll',
    'pc:v-overflow-auto',
    'pc:v-overflow-visible',
    'pc:v-overflowX-hidden',
    'pc:v-overflowX-scroll',
    'pc:v-overflowX-auto',
    'pc:v-overflowX-visible',
    'pc:v-overflowY-hidden',
    'pc:v-overflowY-scroll',
    'pc:v-overflowY-auto',
    'pc:v-overflowY-visible',
    'pc:v-overflow-break-word',
    'pc:v-overflow-normal',
    'pc:v-overflow-moz-unscrollable',
]
let valuesOverflows4 = [
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
for (var i = 0; i <= propertiesOverflows4.length; i++) {
    if (document.querySelector(`.${propertiesOverflows4[i]}`) && !document.querySelector('style').innerText.includes(propertiesOverflows4[i])) {
        let styles = ` 
        @media screen and (min-width: 1920px){
            .${propertiesOverflows4[i]} { 
                ${valuesOverflows4[i]}
            }
        }`;
        document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
    }
}