
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
            @media screen and (min-width: 900px) and (max-width: 1920px) {
                .${propertiesFilter[i]} { 
                    ${valuesFilter[i]}
                }
            }`;
        document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
    }
}
let propertiesFilter2 = [
    'mb:v-blur-0',
    'mb:v-blur-1',
    'mb:v-blur-2',
    'mb:v-blur-3',
    'mb:v-blur-4',
    'mb:v-blur-full',
    'mb:v-gryscale-0',
    'mb:v-gryscale-1',
    'mb:v-gryscale-2',
    'mb:v-gryscale-3',
    'mb:v-gryscale-4',
    'mb:v-gryscale-full',
    'mb:v-saturate-0',
    'mb:v-saturate-1',
    'mb:v-saturate-2',
    'mb:v-saturate-3',
    'mb:v-saturate-4',
    'mb:v-saturate-full',
    'mb:v-brightness-0',
    'mb:v-brightness-1',
    'mb:v-brightness-2',
    'mb:v-brightness-3',
    'mb:v-brightness-4',
    'mb:v-brightness-full',
    'mb:v-contrast-0',
    'mb:v-contrast-1',
    'mb:v-contrast-2',
    'mb:v-contrast-3',
    'mb:v-contrast-4',
    'mb:v-contrast-full'
]
let valuesFilter2 = [
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
for (var i = 0; i <= propertiesFilter2.length; i++) {
    if (document.querySelector(`.${propertiesFilter2[i]}`) && !document.querySelector('style').innerText.includes(propertiesFilter2[i])) {
        let styles = ` 
            @media screen and (min-width: 320px) and (max-width: 600px){
                .${propertiesFilter2[i]} { 
                    ${valuesFilter2[i]}
                }
            }`;
        document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
    }
}
let propertiesFilter3 = [
    'tb:v-blur-0',
    'tb:v-blur-1',
    'tb:v-blur-2',
    'tb:v-blur-3',
    'tb:v-blur-4',
    'tb:v-blur-full',
    'tb:v-gryscale-0',
    'tb:v-gryscale-1',
    'tb:v-gryscale-2',
    'tb:v-gryscale-3',
    'tb:v-gryscale-4',
    'tb:v-gryscale-full',
    'tb:v-saturate-0',
    'tb:v-saturate-1',
    'tb:v-saturate-2',
    'tb:v-saturate-3',
    'tb:v-saturate-4',
    'tb:v-saturate-full',
    'tb:v-brightness-0',
    'tb:v-brightness-1',
    'tb:v-brightness-2',
    'tb:v-brightness-3',
    'tb:v-brightness-4',
    'tb:v-brightness-full',
    'tb:v-contrast-0',
    'tb:v-contrast-1',
    'tb:v-contrast-2',
    'tb:v-contrast-3',
    'tb:v-contrast-4',
    'tb:v-contrast-full'
]
let valuesFilter3 = [
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
for (var i = 0; i <= propertiesFilter3.length; i++) {
    if (document.querySelector(`.${propertiesFilter3[i]}`) && !document.querySelector('style').innerText.includes(propertiesFilter3[i])) {
        let styles = ` 
            @media screen and (min-width: 600px) and (max-width: 900px){
                .${propertiesFilter3[i]} { 
                    ${valuesFilter3[i]}
                }
            }`;
        document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
    }
}
let propertiesFilter4 = [
    'pc:v-blur-0',
    'pc:v-blur-1',
    'pc:v-blur-2',
    'pc:v-blur-3',
    'pc:v-blur-4',
    'pc:v-blur-full',
    'pc:v-gryscale-0',
    'pc:v-gryscale-1',
    'pc:v-gryscale-2',
    'pc:v-gryscale-3',
    'pc:v-gryscale-4',
    'pc:v-gryscale-full',
    'pc:v-saturate-0',
    'pc:v-saturate-1',
    'pc:v-saturate-2',
    'pc:v-saturate-3',
    'pc:v-saturate-4',
    'pc:v-saturate-full',
    'pc:v-brightness-0',
    'pc:v-brightness-1',
    'pc:v-brightness-2',
    'pc:v-brightness-3',
    'pc:v-brightness-4',
    'pc:v-brightness-full',
    'pc:v-contrast-0',
    'pc:v-contrast-1',
    'pc:v-contrast-2',
    'pc:v-contrast-3',
    'pc:v-contrast-4',
    'pc:v-contrast-full'
]
let valuesFilter4 = [
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
for (var i = 0; i <= propertiesFilter4.length; i++) {
    if (document.querySelector(`.${propertiesFilter4[i]}`) && !document.querySelector('style').innerText.includes(propertiesFilter4[i])) {
        let styles = ` 
            @media screen and (min-width: 1920px){
                .${propertiesFilter4[i]} { 
                    ${valuesFilter4[i]}
                }
            }`;
        document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
    }
}