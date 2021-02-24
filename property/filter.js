
let propertiesFilter = [
    'v-blur-0',
    'v-blur-1',
    'v-blur-2',
    'v-blur-3',
    'v-blur-4',
    'v-blur-full',
    'v-gryscale-0',
    'v-gryscale-1',
    'v-gryscale-2',
    'v-gryscale-3',
    'v-gryscale-4',
    'v-gryscale-full',
    'v-saturate-0',
    'v-saturate-1',
    'v-saturate-2',
    'v-saturate-3',
    'v-saturate-4',
    'v-saturate-full',
    'v-brightness-0',
    'v-brightness-1',
    'v-brightness-2',
    'v-brightness-3',
    'v-brightness-4',
    'v-brightness-full',
    'v-contrast-0',
    'v-contrast-1',
    'v-contrast-2',
    'v-contrast-3',
    'v-contrast-4',
    'v-contrast-full'
]
let valuesFilter = [
    'filter: blur(0px);',
    'filter: blur(2px);',
    'filter: blur(4px);',
    'filter: blur(6px);',
    'filter: blur(8px);',
    'filter: blur(10px);',
    'filter: gryscale(0%);',
    'filter: gryscale(20%);',
    'filter: gryscale(40%);',
    'filter: gryscale(60%);',
    'filter: gryscale(80%);',
    'filter: gryscale(100%);',
    'filter: saturate(0%);',
    'filter: saturate(20%);',
    'filter: saturate(40%);',
    'filter: saturate(60%);',
    'filter: saturate(80%);',
    'filter: saturate(100%);',
    'filter: brightness(0%);',
    'filter: brightness(20%);',
    'filter: brightness(40%);',
    'filter: brightness(60%);',
    'filter: brightness(80%);',
    'filter: brightness(100%);',
    'filter: contrast(0%);',
    'filter: contrast(20%);',
    'filter: contrast(40%);',
    'filter: contrast(60%);',
    'filter: contrast(80%);',
    'filter: contrast(100%);',
]
for (var i = 0; i <= propertiesFilter.length; i++) {
    if (document.querySelector(`.${propertiesFilter[i]}`) && !document.querySelector('style').innerText.includes(propertiesFilter[i])) {
        let styles = ` 
                .${propertiesFilter[i]} { 
                    ${valuesFilter[i]}
                }`;
        document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
    }
}