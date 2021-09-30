
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
        @media screen and (min-width: 900px) and (max-width: 1920px) {
            .${propertiesLineHeight[i]} { 
                ${valuesLineHeight[i]}
            }
        }`;
        document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
    }
}
let propertiesLineHeight2 = [
    'mb:v-leading-1',
    'mb:v-leading-2',
    'mb:v-leading-3',
    'mb:v-leading-4',
    'mb:v-leading-none',
    'mb:v-leading-tight',
    'mb:v-leading-snug',
    'mb:v-leading-normal',
    'mb:v-leading-relaxed',
    'mb:v-leading-loose'
]
let valuesLineHeight2 = [
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
for (var i = 0; i <= propertiesLineHeight2.length; i++) {
    if (document.querySelector(`.${propertiesLineHeight2[i]}`) && !document.querySelector('style').innerText.includes(propertiesLineHeight2[i])) {
        let styles = ` 
        @media screen and (min-width: 320px) and (max-width: 600px){
            .${propertiesLineHeight2[i]} { 
                ${valuesLineHeight2[i]}
            }
        }`;
        document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
    }
}
let propertiesLineHeight3 = [
    'tb:v-leading-1',
    'tb:v-leading-2',
    'tb:v-leading-3',
    'tb:v-leading-4',
    'tb:v-leading-none',
    'tb:v-leading-tight',
    'tb:v-leading-snug',
    'tb:v-leading-normal',
    'tb:v-leading-relaxed',
    'tb:v-leading-loose'
]
let valuesLineHeight3 = [
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
for (var i = 0; i <= propertiesLineHeight3.length; i++) {
    if (document.querySelector(`.${propertiesLineHeight3[i]}`) && !document.querySelector('style').innerText.includes(propertiesLineHeight3[i])) {
        let styles = ` 
        @media screen and (min-width: 600px) and (max-width: 900px){
            .${propertiesLineHeight3[i]} { 
                ${valuesLineHeight3[i]}
            }
        }`;
        document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
    }
}
let propertiesLineHeight4 = [
    'pc:v-leading-1',
    'pc:v-leading-2',
    'pc:v-leading-3',
    'pc:v-leading-4',
    'pc:v-leading-none',
    'pc:v-leading-tight',
    'pc:v-leading-snug',
    'pc:v-leading-normal',
    'pc:v-leading-relaxed',
    'pc:v-leading-loose'
]
let valuesLineHeight4 = [
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
for (var i = 0; i <= propertiesLineHeight4.length; i++) {
    if (document.querySelector(`.${propertiesLineHeight4[i]}`) && !document.querySelector('style').innerText.includes(propertiesLineHeight4[i])) {
        let styles = ` 
        @media screen and (min-width: 1920px){
            .${propertiesLineHeight4[i]} { 
                ${valuesLineHeight4[i]}
            }
        }`;
        document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
    }
}