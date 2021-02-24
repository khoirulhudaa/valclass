
let propertiesLineHeight = [
    'v-leading-1',
    'v-leading-2',
    'v-leading-3',
    'v-leading-4',
    'v-leading-none',
    'v-leading-tight',
    'v-leading-snug',
    'v-leading-normal',
    'v-leading-relaxed',
    'v-leading-loose'
]
let valuesLineHeight = [
    'line-height: .75rem;',
    'line-height: 1rem;',
    'line-height: 1.25rem;',
    'line-height: 1.5rem;',
    'line-height: 1;',
    'line-height: 1.25;',
    'line-height: 1.375;',
    'line-height: 1.5;',
    'line-height: 1.625;',
    'line-height: 2;'
]
for (var i = 0; i <= propertiesLineHeight.length; i++) {
    if (document.querySelector(`.${propertiesLineHeight[i]}`) && !document.querySelector('style').innerText.includes(propertiesLineHeight[i])) {
        let styles = ` 
            .${propertiesLineHeight[i]} { 
                ${valuesLineHeight[i]}
            }`;
        document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
    }
}