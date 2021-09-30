let propertiesPages = [
    'v-pg-after-always',
    'v-pg-after-auto',
    'v-pg-after-avoid',
    'v-pg-after-left',
    'v-pg-after-right',
    'v-pg-inside-auto',
    'v-pg-inside-avoid',
    'v-pg-before-always',
    'v-pg-before-auto',
    'v-pg-before-avoid',
    'v-pg-before-left',
    'v-pg-before-right',
]
let valuesPages = [
    'page-break-after: always;',
    'page-break-after: auto;',
    'page-break-after: avoid;',
    'page-break-after: left;',
    'page-break-after: right;',
    'page-break-inside: auto;',
    'page-break-inside: avoid;',
    'page-break-before: always;',
    'page-break-before: auto;',
    'page-break-before: avoid;',
    'page-break-before: left;',
    'page-break-before: right;',
]
for (var i = 0; i <= propertiesPages.length; i++) {
    if (document.querySelector(`.${propertiesPages[i]}`) && !document.querySelector('style').innerText.includes(propertiesPages[i])) {
        let styles = ` 
        @media screen and (min-width: 900px) and (max-width: 1920px) {
            .${propertiesPages[i]} { 
                ${valuesPages[i]}
            }
        }`;
        document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
    }
}
let propertiesPages2 = [
    'mb:v-pg-after-always',
    'mb:v-pg-after-auto',
    'mb:v-pg-after-avoid',
    'mb:v-pg-after-left',
    'mb:v-pg-after-right',
    'mb:v-pg-inside-auto',
    'mb:v-pg-inside-avoid',
    'mb:v-pg-before-always',
    'mb:v-pg-before-auto',
    'mb:v-pg-before-avoid',
    'mb:v-pg-before-left',
    'mb:v-pg-before-right',
]
let valuesPages2 = [
    'page-break-after: always;',
    'page-break-after: auto;',
    'page-break-after: avoid;',
    'page-break-after: left;',
    'page-break-after: right;',
    'page-break-inside: auto;',
    'page-break-inside: avoid;',
    'page-break-before: always;',
    'page-break-before: auto;',
    'page-break-before: avoid;',
    'page-break-before: left;',
    'page-break-before: right;',
]
for (var i = 0; i <= propertiesPages2.length; i++) {
    if (document.querySelector(`.${propertiesPages2[i]}`) && !document.querySelector('style').innerText.includes(propertiesPages2[i])) {
        let styles = ` 
        @media screen and (min-width: 320px) and (max-width: 600px){
            .${propertiesPages2[i]} { 
                ${valuesPages2[i]}
            }
        }`;
        document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
    }
}
let propertiesPages3 = [
    'tb:v-pg-after-always',
    'tb:v-pg-after-auto',
    'tb:v-pg-after-avoid',
    'tb:v-pg-after-left',
    'tb:v-pg-after-right',
    'tb:v-pg-inside-auto',
    'tb:v-pg-inside-avoid',
    'tb:v-pg-before-always',
    'tb:v-pg-before-auto',
    'tb:v-pg-before-avoid',
    'tb:v-pg-before-left',
    'tb:v-pg-before-right',
]
let valuesPages3 = [
    'page-break-after: always;',
    'page-break-after: auto;',
    'page-break-after: avoid;',
    'page-break-after: left;',
    'page-break-after: right;',
    'page-break-inside: auto;',
    'page-break-inside: avoid;',
    'page-break-before: always;',
    'page-break-before: auto;',
    'page-break-before: avoid;',
    'page-break-before: left;',
    'page-break-before: right;',
]
for (var i = 0; i <= propertiesPages3.length; i++) {
    if (document.querySelector(`.${propertiesPages3[i]}`) && !document.querySelector('style').innerText.includes(propertiesPages3[i])) {
        let styles = ` 
        @media screen and (min-width: 600px) and (max-width: 900px){
            .${propertiesPages3[i]} { 
                ${valuesPages3[i]}
            }
        }`;
        document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
    }
}
let propertiesPages4 = [
    'pc:v-pg-after-always',
    'pc:v-pg-after-auto',
    'pc:v-pg-after-avoid',
    'pc:v-pg-after-left',
    'pc:v-pg-after-right',
    'pc:v-pg-inside-auto',
    'pc:v-pg-inside-avoid',
    'pc:v-pg-before-always',
    'pc:v-pg-before-auto',
    'pc:v-pg-before-avoid',
    'pc:v-pg-before-left',
    'pc:v-pg-before-right',
]
let valuesPages4 = [
    'page-break-after: always;',
    'page-break-after: auto;',
    'page-break-after: avoid;',
    'page-break-after: left;',
    'page-break-after: right;',
    'page-break-inside: auto;',
    'page-break-inside: avoid;',
    'page-break-before: always;',
    'page-break-before: auto;',
    'page-break-before: avoid;',
    'page-break-before: left;',
    'page-break-before: right;',
]
for (var i = 0; i <= propertiesPages4.length; i++) {
    if (document.querySelector(`.${propertiesPages4[i]}`) && !document.querySelector('style').innerText.includes(propertiesPages4[i])) {
        let styles = ` 
        @media screen and (min-width: 1920px){
            .${propertiesPages4[i]} { 
                ${valuesPages4[i]}
            }
        }`;
        document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
    }
}