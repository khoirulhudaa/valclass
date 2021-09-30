let propertiesAlignContent = [
    'v-content-center',
    'v-content-flex-end',
    'v-content-flex-start',
    'v-content-evenly',
    'v-content-basebetweenline',
    'v-content-around'
]

let valueContent = [
    'align-content: center;',
    'align-content: flex-end;',
    'align-content: flex-start;',
    'align-content: space-evenly;',
    'align-content: space-between;',
    'align-content: space-around;',
]
for (var i = 0; i <= propertiesAlignContent.length; i++) {
    if (document.querySelector(`.${propertiesAlignContent[i]}`) && !document.querySelector('style').innerText.includes(propertiesAlignContent[i])) {
        let styles = ` 
            @media screen and (min-width: 900px) and (max-width: 1920px) {
                .${propertiesAlignContent[i]} { 
                    ${valueContent[i]}
                }
            }`;
        document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
    }
}

let propertiesAlignContent2 = [
    'mb:v-content-center',
    'mb:v-content-flex-end',
    'mb:v-content-flex-start',
    'mb:v-content-evenly',
    'mb:v-content-basebetweenline',
    'mb:v-content-around'
]

let valueContent2 = [
    'align-content: center;',
    'align-content: flex-end;',
    'align-content: flex-start;',
    'align-content: space-evenly;',
    'align-content: space-between;',
    'align-content: space-around;',
]
for (var i = 0; i <= propertiesAlignContent2.length; i++) {
    if (document.querySelector(`.${propertiesAlignContent2[i]}`) && !document.querySelector('style').innerText.includes(propertiesAlignContent2[i])) {
        let styles = ` 
            @media screen and (min-width: 320px) and (max-width: 600px){
                .${propertiesAlignContent2[i]} { 
                    ${valueContent2[i]}
                }
            }`;
        document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
    }
}

let propertiesAlignContent3 = [
    'tb:v-content-center',
    'tb:v-content-flex-end',
    'tb:v-content-flex-start',
    'tb:v-content-evenly',
    'tb:v-content-basebetweenline',
    'tb:v-content-around'
]

let valueContent3 = [
    'align-content: center;',
    'align-content: flex-end;',
    'align-content: flex-start;',
    'align-content: space-evenly;',
    'align-content: space-between;',
    'align-content: space-around;',
]
for (var i = 0; i <= propertiesAlignContent3.length; i++) {
    if (document.querySelector(`.${propertiesAlignContent3[i]}`) && !document.querySelector('style').innerText.includes(propertiesAlignContent3[i])) {
        let styles = ` 
            @media screen and (min-width: 600px) and (max-width: 900px){
                .${propertiesAlignContent3[i]} { 
                    ${valueContent3[i]}
                }
            }`;
        document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
    }
}

let propertiesAlignContent4 = [
    'pc:v-content-center',
    'pc:v-content-flex-end',
    'pc:v-content-flex-start',
    'pc:v-content-evenly',
    'pc:v-content-basebetweenline',
    'pc:v-content-around'
]

let valueContent4 = [
    'align-content: center;',
    'align-content: flex-end;',
    'align-content: flex-start;',
    'align-content: space-evenly;',
    'align-content: space-between;',
    'align-content: space-around;',
]
for (var i = 0; i <= propertiesAlignContent4.length; i++) {
    if (document.querySelector(`.${propertiesAlignContent4[i]}`) && !document.querySelector('style').innerText.includes(propertiesAlignContent4[i])) {
        let styles = ` 
            @media screen and (min-width: 1920px){
                .${propertiesAlignContent4[i]} { 
                    ${valueContent4[i]}
                }
            }`;
        document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
    }
}