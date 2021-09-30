let propertiesBackgroundPosition = [
    'v-bg-post-center',
    'v-bg-post-top',
    'v-bg-post-left',
    'v-bg-post-right',
    'v-bg-post-bottom',
    'v-bg-post--1',
    'v-bg-post--2',
    'v-bg-post--3',
    'v-bg-post--4',
    'v-bg-post--full',
    'v-bg-post-0',
    'v-bg-post-1',
    'v-bg-post-2',
    'v-bg-post-3',
    'v-bg-post-4',
    'v-bg-post-full'
]
let valuesBackgroundPosition = [
    'background-position: center',
    'background-position: top',
    'background-position: left',
    'background-position: right',
    'background-position: bottom',
    'background-position: -20%',
    'background-position: -40%',
    'background-position: -60%',
    'background-position: -80%',
    'background-position: -100%',
    'background-position: 0%',
    'background-position: 20%',
    'background-position: 40%',
    'background-position: 60%',
    'background-position: 80%',
    'background-position: 100%',
]
for (var i = 0; i <= propertiesBackgroundPosition.length; i++) {
    if (document.querySelector(`.${propertiesBackgroundPosition[i]}`) && !document.querySelector('style').innerText.includes(propertiesBackgroundPosition[i])) {
        let styles = ` 
            @media screen and (min-width: 900px){
                .${propertiesBackgroundPosition[i]} { 
                    ${valuesBackgroundPosition[i]}
                }
            }`;
        document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
    }
}

let propertiesBackgroundPosition2 = [
    'mb:v-bg-post-center',
    'mb:v-bg-post-top',
    'mb:v-bg-post-left',
    'mb:v-bg-post-right',
    'mb:v-bg-post-bottom',
    'mb:v-bg-post--1',
    'mb:v-bg-post--2',
    'mb:v-bg-post--3',
    'mb:v-bg-post--4',
    'mb:v-bg-post--full',
    'mb:v-bg-post-0',
    'mb:v-bg-post-1',
    'mb:v-bg-post-2',
    'mb:v-bg-post-3',
    'mb:v-bg-post-4',
    'mb:v-bg-post-full'
]
let valuesBackgroundPosition2 = [
    'background-position: center',
    'background-position: top',
    'background-position: left',
    'background-position: right',
    'background-position: bottom',
    'background-position: -20%',
    'background-position: -40%',
    'background-position: -60%',
    'background-position: -80%',
    'background-position: -100%',
    'background-position: 0%',
    'background-position: 20%',
    'background-position: 40%',
    'background-position: 60%',
    'background-position: 80%',
    'background-position: 100%',
]
for (var i = 0; i <= propertiesBackgroundPosition2.length; i++) {
    if (document.querySelector(`.${propertiesBackgroundPosition2[i]}`) && !document.querySelector('style').innerText.includes(propertiesBackgroundPosition2[i])) {
        let styles = ` 
            @media screen and (min-width: 320px) and (max-width: 600px){
                .${propertiesBackgroundPosition2[i]} { 
                    ${valuesBackgroundPosition2[i]}
                }
            }`;
        document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
    }
}

let propertiesBackgroundPosition3 = [
    'tb:v-bg-post-center',
    'tb:v-bg-post-top',
    'tb:v-bg-post-left',
    'tb:v-bg-post-right',
    'tb:v-bg-post-bottom',
    'tb:v-bg-post--1',
    'tb:v-bg-post--2',
    'tb:v-bg-post--3',
    'tb:v-bg-post--4',
    'tb:v-bg-post--full',
    'tb:v-bg-post-0',
    'tb:v-bg-post-1',
    'tb:v-bg-post-2',
    'tb:v-bg-post-3',
    'tb:v-bg-post-4',
    'tb:v-bg-post-full'
]
let valuesBackgroundPosition3 = [
    'background-position: center',
    'background-position: top',
    'background-position: left',
    'background-position: right',
    'background-position: bottom',
    'background-position: -20%',
    'background-position: -40%',
    'background-position: -60%',
    'background-position: -80%',
    'background-position: -100%',
    'background-position: 0%',
    'background-position: 20%',
    'background-position: 40%',
    'background-position: 60%',
    'background-position: 80%',
    'background-position: 100%',
]
for (var i = 0; i <= propertiesBackgroundPosition3.length; i++) {
    if (document.querySelector(`.${propertiesBackgroundPosition3[i]}`) && !document.querySelector('style').innerText.includes(propertiesBackgroundPosition3[i])) {
        let styles = ` 
            @media screen and (min-width: 600px) and (max-width: 900px){
                .${propertiesBackgroundPosition3[i]} { 
                    ${valuesBackgroundPosition3[i]}
                }
            }`;
        document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
    }
}

let propertiesBackgroundPosition4 = [
    'pc:v-bg-post-center',
    'pc:v-bg-post-top',
    'pc:v-bg-post-left',
    'pc:v-bg-post-right',
    'pc:v-bg-post-bottom',
    'pc:v-bg-post--1',
    'pc:v-bg-post--2',
    'pc:v-bg-post--3',
    'pc:v-bg-post--4',
    'pc:v-bg-post--full',
    'pc:v-bg-post-0',
    'pc:v-bg-post-1',
    'pc:v-bg-post-2',
    'pc:v-bg-post-3',
    'pc:v-bg-post-4',
    'pc:v-bg-post-full'
]
let valuesBackgroundPosition4 = [
    'background-position: center',
    'background-position: top',
    'background-position: left',
    'background-position: right',
    'background-position: bottom',
    'background-position: -20%',
    'background-position: -40%',
    'background-position: -60%',
    'background-position: -80%',
    'background-position: -100%',
    'background-position: 0%',
    'background-position: 20%',
    'background-position: 40%',
    'background-position: 60%',
    'background-position: 80%',
    'background-position: 100%',
]
for (var i = 0; i <= propertiesBackgroundPosition4.length; i++) {
    if (document.querySelector(`.${propertiesBackgroundPosition4[i]}`) && !document.querySelector('style').innerText.includes(propertiesBackgroundPosition4[i])) {
        let styles = ` 
            @media screen and (min-width: 1920px){
                .${propertiesBackgroundPosition4[i]} { 
                    ${valuesBackgroundPosition4[i]}
                }
            }`;
        document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
    }
}