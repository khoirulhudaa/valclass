let propertiesBackgroundSize = [
    'v-bg-sz-auto',
    'v-bg-sz-contain',
    'v-bg-sz-cover',
    'v-bg-sz--1',
    'v-bg-sz--2',
    'v-bg-sz--3',
    'v-bg-sz--4',
    'v-bg-sz--full',
    'v-bg-sz-0',
    'v-bg-sz-1',
    'v-bg-sz-2',
    'v-bg-sz-3',
    'v-bg-sz-4',
    'v-bg-sz-full'
]
let valuesBackgroundSize = [
    'background-size: auto',
    'background-size: contain',
    'background-size: cover',
    'background-size: -20%',
    'background-size: -40%',
    'background-size: -60%',
    'background-size: -80%',
    'background-size: -100%',
    'background-size: 0%',
    'background-size: 20%',
    'background-size: 40%',
    'background-size: 60%',
    'background-size: 80%',
    'background-size: 100%',
]
for (var i = 0; i <= propertiesBackgroundSize.length; i++) {
    if (document.querySelector(`.${propertiesBackgroundSize[i]}`) && !document.querySelector('style').innerText.includes(propertiesBackgroundSize[i])) {
        let styles = ` 
            @media screen and (min-width: 900px) and (max-width: 1920px) {
                .${propertiesBackgroundSize[i]} { 
                    ${valuesBackgroundSize[i]}
                }
            }`;
        document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
    }
}

let propertiesBackgroundSize2= [
    'mb:v-bg-sz-auto',
    'mb:v-bg-sz-contain',
    'mb:v-bg-sz-cover',
    'mb:v-bg-sz--1',
    'mb:v-bg-sz--2',
    'mb:v-bg-sz--3',
    'mb:v-bg-sz--4',
    'mb:v-bg-sz--full',
    'mb:v-bg-sz-0',
    'mb:v-bg-sz-1',
    'mb:v-bg-sz-2',
    'mb:v-bg-sz-3',
    'mb:v-bg-sz-4',
    'mb:v-bg-sz-full'
]
let valuesBackgroundSize2 = [
    'background-size: auto',
    'background-size: contain',
    'background-size: cover',
    'background-size: -20%',
    'background-size: -40%',
    'background-size: -60%',
    'background-size: -80%',
    'background-size: -100%',
    'background-size: 0%',
    'background-size: 20%',
    'background-size: 40%',
    'background-size: 60%',
    'background-size: 80%',
    'background-size: 100%',
]
for (var i = 0; i <= propertiesBackgroundSize2.length; i++) {
    if (document.querySelector(`.${propertiesBackgroundSize2[i]}`) && !document.querySelector('style').innerText.includes(propertiesBackgroundSize2[i])) {
        let styles = ` 
            @media screen and (min-width: 320px) and (max-width: 600px){
                .${propertiesBackgroundSize2[i]} { 
                    ${valuesBackgroundSize2[i]}
                }
            }`;
        document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
    }
}

let propertiesBackgroundSize3= [
    'tb:v-bg-sz-auto',
    'tb:v-bg-sz-contain',
    'tb:v-bg-sz-cover',
    'tb:v-bg-sz--1',
    'tb:v-bg-sz--2',
    'tb:v-bg-sz--3',
    'tb:v-bg-sz--4',
    'tb:v-bg-sz--full',
    'tb:v-bg-sz-0',
    'tb:v-bg-sz-1',
    'tb:v-bg-sz-2',
    'tb:v-bg-sz-3',
    'tb:v-bg-sz-4',
    'tb:v-bg-sz-full'
]
let valuesBackgroundSize3 = [
    'background-size: auto',
    'background-size: contain',
    'background-size: cover',
    'background-size: -20%',
    'background-size: -40%',
    'background-size: -60%',
    'background-size: -80%',
    'background-size: -100%',
    'background-size: 0%',
    'background-size: 20%',
    'background-size: 40%',
    'background-size: 60%',
    'background-size: 80%',
    'background-size: 100%',
]
for (var i = 0; i <= propertiesBackgroundSize3.length; i++) {
    if (document.querySelector(`.${propertiesBackgroundSize3[i]}`) && !document.querySelector('style').innerText.includes(propertiesBackgroundSize3[i])) {
        let styles = ` 
            @media screen and (min-width: 600px) and (max-width: 900px){
                .${propertiesBackgroundSize3[i]} { 
                    ${valuesBackgroundSize3[i]}
                }
            }`;
        document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
    }
}

let propertiesBackgroundSize4 = [
    'pc:v-bg-sz-auto',
    'pc:v-bg-sz-contain',
    'pc:v-bg-sz-cover',
    'pc:v-bg-sz--1',
    'pc:v-bg-sz--2',
    'pc:v-bg-sz--3',
    'pc:v-bg-sz--4',
    'pc:v-bg-sz--full',
    'pc:v-bg-sz-0',
    'pc:v-bg-sz-1',
    'pc:v-bg-sz-2',
    'pc:v-bg-sz-3',
    'pc:v-bg-sz-4',
    'pc:v-bg-sz-full'
]
let valuesBackgroundSize4 = [
    'background-size: auto',
    'background-size: contain',
    'background-size: cover',
    'background-size: -20%',
    'background-size: -40%',
    'background-size: -60%',
    'background-size: -80%',
    'background-size: -100%',
    'background-size: 0%',
    'background-size: 20%',
    'background-size: 40%',
    'background-size: 60%',
    'background-size: 80%',
    'background-size: 100%',
]
for (var i = 0; i <= propertiesBackgroundSize4.length; i++) {
    if (document.querySelector(`.${propertiesBackgroundSize4[i]}`) && !document.querySelector('style').innerText.includes(propertiesBackgroundSize4[i])) {
        let styles = ` 
            @media screen and (min-width: 1920px){
                .${propertiesBackgroundSize4[i]} { 
                    ${valuesBackgroundSize4[i]}
                }
            }`;
        document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
    }
}