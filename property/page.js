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
            .${propertiesPages[i]} { 
                ${valuesPages[i]}
            }`;
        document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
    }
}