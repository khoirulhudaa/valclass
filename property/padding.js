let propertiesPadding = [
    'v-p-0',
    'v-p-1',
    'v-p-2',
    'v-p-3',
    'v-p-4',
    'v-pt-0',
    'v-pt-1',
    'v-pt-2',
    'v-pt-3',
    'v-pt-4',
    'v-pl-0',
    'v-pl-1',
    'v-pl-2',
    'v-pl-3',
    'v-pl-4',
    'v-pr-0',
    'v-pr-1',
    'v-pr-2',
    'v-pr-3',
    'v-pr-4',
    'v-pb-0',
    'v-pb-1',
    'v-pb-2',
    'v-pb-3',
    'v-pb-4'
]
let valuesPadding = [
    'padding: 0px',
    'padding: 10px',
    'padding: 20px;',
    'padding: 30px;',
    'padding: 40px;',
    'padding-top: 0px',
    'padding-top: 10px',
    'padding-top: 20px;',
    'padding-top: 30px;',
    'padding-top: 40px;',
    'padding-left: 0px;',
    'padding-left: 10px;',
    'padding-left: 20px;',
    'padding-left: 30px;',
    'padding-left: 40px;',
    'padding-right: 0px;',
    'padding-right: 10px;',
    'padding-right: 20px;',
    'padding-right: 30px;',
    'padding-right: 40px;',
    'padding-bottom: 0px;',
    'padding-bottom: 10px;',
    'padding-bottom: 20px;',
    'padding-bottom: 30px;',
    'padding-bottom: 40px;',
]
for (var i = 0; i <= propertiesPadding.length; i++) {
    if (document.querySelector(`.${propertiesPadding[i]}`) && !document.querySelector('style').innerText.includes(propertiesPadding[i])) {
        let styles = ` 
            .${propertiesPadding[i]} { 
                ${valuesPadding[i]}
            }`;
        document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
    }
}