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
    'mb_v-content-center',
    'mb_v-content-flex-end',
    'mb_v-content-flex-start',
    'mb_v-content-evenly',
    'mb_v-content-basebetweenline',
    'mb_v-content-around'
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
    'tb_v-content-center',
    'tb_v-content-flex-end',
    'tb_v-content-flex-start',
    'tb_v-content-evenly',
    'tb_v-content-basebetweenline',
    'tb_v-content-around'
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
    'pc_v-content-center',
    'pc_v-content-flex-end',
    'pc_v-content-flex-start',
    'pc_v-content-evenly',
    'pc_v-content-basebetweenline',
    'pc_v-content-around'
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