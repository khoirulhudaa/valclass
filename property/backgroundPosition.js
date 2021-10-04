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
    'mb_v-bg-post-center',
    'mb_v-bg-post-top',
    'mb_v-bg-post-left',
    'mb_v-bg-post-right',
    'mb_v-bg-post-bottom',
    'mb_v-bg-post--1',
    'mb_v-bg-post--2',
    'mb_v-bg-post--3',
    'mb_v-bg-post--4',
    'mb_v-bg-post--full',
    'mb_v-bg-post-0',
    'mb_v-bg-post-1',
    'mb_v-bg-post-2',
    'mb_v-bg-post-3',
    'mb_v-bg-post-4',
    'mb_v-bg-post-full'
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
    'tb_v-bg-post-center',
    'tb_v-bg-post-top',
    'tb_v-bg-post-left',
    'tb_v-bg-post-right',
    'tb_v-bg-post-bottom',
    'tb_v-bg-post--1',
    'tb_v-bg-post--2',
    'tb_v-bg-post--3',
    'tb_v-bg-post--4',
    'tb_v-bg-post--full',
    'tb_v-bg-post-0',
    'tb_v-bg-post-1',
    'tb_v-bg-post-2',
    'tb_v-bg-post-3',
    'tb_v-bg-post-4',
    'tb_v-bg-post-full'
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
    'pc_v-bg-post-center',
    'pc_v-bg-post-top',
    'pc_v-bg-post-left',
    'pc_v-bg-post-right',
    'pc_v-bg-post-bottom',
    'pc_v-bg-post--1',
    'pc_v-bg-post--2',
    'pc_v-bg-post--3',
    'pc_v-bg-post--4',
    'pc_v-bg-post--full',
    'pc_v-bg-post-0',
    'pc_v-bg-post-1',
    'pc_v-bg-post-2',
    'pc_v-bg-post-3',
    'pc_v-bg-post-4',
    'pc_v-bg-post-full'
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