let propertiesBgColors = [
    'v-dark',
    'v-light',
    'v-danger',
    'v-info',
    'v-primary',
    'v-smooth',
    'v-transparent',
    'v-secondary',
    'v-warning',
    'v-green',
    'v-white'
]
let valuesBgColors = [
    'background-color: rgb(70, 70, 70);',
    'background-color: rgb(238, 238, 238);',
    'background-color: rgb(255, 76, 44);',
    'background-color: rgb(2, 168, 245);',
    'background-color: rgb(42, 131, 248);',
    'background-color: rgb(255, 242, 242);',
    'background-color: transparent;',
    'background-color: rgb(141, 141, 141);',
    'background-color: rgb(253, 207, 0);',
    'background-color: #0de982;',
    'background-color: #fff;'
]
for (var i = 0; i <= propertiesBgColors.length; i++) {
    if (document.querySelector(`.${propertiesBgColors[i]}`) && !document.querySelector('style').innerText.includes(propertiesBgColors[i])) {
        let styles = ` 
            .${propertiesBgColors[i]} { 
                ${valuesBgColors[i]}
            }`;
        document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
    }
}

let propertiesBgColors2 = [
    'mb_v-dark',
    'mb_v-light',
    'mb_v-danger',
    'mb_v-info',
    'mb_v-primary',
    'mb_v-smooth',
    'mb_v-transparent',
    'mb_v-secondary',
    'mb_v-warning',
    'mb_v-green',
    'mb_v-white'
]
let valuesBgColors2 = [
    'background-color: rgb(70, 70, 70);',
    'background-color: rgb(238, 238, 238);',
    'background-color: rgb(255, 76, 44);',
    'background-color: rgb(2, 168, 245);',
    'background-color: rgb(42, 131, 248);',
    'background-color: rgb(255, 242, 242);',
    'background-color: transparent;',
    'background-color: rgb(141, 141, 141);',
    'background-color: rgb(253, 207, 0);',
    'background-color: #0de982;',
    'background-color: #fff;'
]
for (var i = 0; i <= propertiesBgColors2.length; i++) {
    if (document.querySelector(`.${propertiesBgColors2[i]}`) && !document.querySelector('style').innerText.includes(propertiesBgColors2[i])) {
        let styles = ` 
            @media screen and (min-width: 320px) and (max-width: 600px){
                    .${propertiesBgColors2[i]} { 
                    ${valuesBgColors2[i]}
                }
            }`;
        document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
    }
}

let propertiesBgColors3 = [
    'tb_v-dark',
    'tb_v-light',
    'tb_v-danger',
    'tb_v-info',
    'tb_v-primary',
    'tb_v-smooth',
    'tb_v-transparent',
    'tb_v-secondary',
    'tb_v-warning',
    'tb_v-green',
    'tb_v-white'
]
let valuesBgColors3 = [
    'background-color: rgb(70, 70, 70);',
    'background-color: rgb(238, 238, 238);',
    'background-color: rgb(255, 76, 44);',
    'background-color: rgb(2, 168, 245);',
    'background-color: rgb(42, 131, 248);',
    'background-color: rgb(255, 242, 242);',
    'background-color: transparent;',
    'background-color: rgb(141, 141, 141);',
    'background-color: rgb(253, 207, 0);',
    'background-color: #0de982;',
    'background-color: #fff;'
]
for (var i = 0; i <= propertiesBgColors3.length; i++) {
    if (document.querySelector(`.${propertiesBgColors3[i]}`) && !document.querySelector('style').innerText.includes(propertiesBgColors3[i])) {
        let styles = ` 
            @media screen and (min-width: 600px) and (max-width: 900px){
                    .${propertiesBgColors3[i]} { 
                    ${valuesBgColors3[i]}
                }
            }`;
        document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
    }
}

let propertiesBgColors4 = [
    'pc_v-dark',
    'pc_v-light',
    'pc_v-danger',
    'pc_v-info',
    'pc_v-primary',
    'pc_v-smooth',
    'pc_v-transparent',
    'pc_v-secondary',
    'pc_v-warning',
    'pc_v-green',
    'pc_v-white'
]
let valuesBgColors4 = [
    'background-color: rgb(70, 70, 70);',
    'background-color: rgb(238, 238, 238);',
    'background-color: rgb(255, 76, 44);',
    'background-color: rgb(2, 168, 245);',
    'background-color: rgb(42, 131, 248);',
    'background-color: rgb(255, 242, 242);',
    'background-color: transparent;',
    'background-color: rgb(141, 141, 141);',
    'background-color: rgb(253, 207, 0);',
    'background-color: #0de982;',
    'background-color: #fff;'
]
for (var i = 0; i <= propertiesBgColors4.length; i++) {
    if (document.querySelector(`.${propertiesBgColors4[i]}`) && !document.querySelector('style').innerText.includes(propertiesBgColors4[i])) {
        let styles = ` 
            @media screen and (min-width: 1920px){
                    .${propertiesBgColors4[i]} { 
                    ${valuesBgColors4[i]}
                }
            }`;
        document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
    }
}