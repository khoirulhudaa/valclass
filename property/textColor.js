let propertiesTextColors = [
    'v-color-dark',
    'v-color-light',
    'v-color-danger',
    'v-color-info',
    'v-color-primary',
    'v-color-smooth',
    'v-color-transparent',
    'v-color-secondary',
    'v-color-warning',
    'v-color-green',
    'v-color-white'
]
let valuesTextColors = [
    'color: black;',
    'color: rgb(238, 238, 238);',
    'color: rgb(255, 76, 44);',
    'color: rgb(2, 168, 245);',
    'color: rgb(42, 131, 248);',
    'color: rgb(255, 242, 242);',
    'color: transparent;',
    'color: rgb(141, 141, 141);',
    'color: rgb(253, 207, 0);',
    'color: #0de982;',
    'color: #fff;'
]
for (var i = 0; i <= propertiesTextColors.length; i++) {
    if (document.querySelector(`.${propertiesTextColors[i]}`) && !document.querySelector('style').innerText.includes(propertiesTextColors[i])) {
        let styles = ` 
            @media screen and (min-width: 900px) and (max-width: 1920px) {
                    .${propertiesTextColors[i]} { 
                    ${valuesTextColors[i]}
                }
            }`;
        document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
    }
}
let propertiesTextColors2 = [
    'mb_v-color-dark',
    'mb_v-color-light',
    'mb_v-color-danger',
    'mb_v-color-info',
    'mb_v-color-primary',
    'mb_v-color-smooth',
    'mb_v-color-transparent',
    'mb_v-color-secondary',
    'mb_v-color-warning',
    'mb_v-color-green',
    'mb_v-color-white'
]
let valuesTextColors2 = [
    'color: black;',
    'color: rgb(238, 238, 238);',
    'color: rgb(255, 76, 44);',
    'color: rgb(2, 168, 245);',
    'color: rgb(42, 131, 248);',
    'color: rgb(255, 242, 242);',
    'color: transparent;',
    'color: rgb(141, 141, 141);',
    'color: rgb(253, 207, 0);',
    'color: #0de982;',
    'color: #fff;'
]
for (var i = 0; i <= propertiesTextColors2.length; i++) {
    if (document.querySelector(`.${propertiesTextColors2[i]}`) && !document.querySelector('style').innerText.includes(propertiesTextColors2[i])) {
        let styles = ` 
            @media screen and (min-width: 320px) and (max-width: 600px){
                    .${propertiesTextColors2[i]} { 
                    ${valuesTextColors2[i]}
                }
            }`;
        document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
    }
}
let propertiesTextColors3 = [
    'tb_v-color-dark',
    'tb_v-color-light',
    'tb_v-color-danger',
    'tb_v-color-info',
    'tb_v-color-primary',
    'tb_v-color-smooth',
    'tb_v-color-transparent',
    'tb_v-color-secondary',
    'tb_v-color-warning',
    'tb_v-color-green',
    'tb_v-color-white'
]
let valuesTextColors3 = [
    'color: black;',
    'color: rgb(238, 238, 238);',
    'color: rgb(255, 76, 44);',
    'color: rgb(2, 168, 245);',
    'color: rgb(42, 131, 248);',
    'color: rgb(255, 242, 242);',
    'color: transparent;',
    'color: rgb(141, 141, 141);',
    'color: rgb(253, 207, 0);',
    'color: #0de982;',
    'color: #fff;'
]
for (var i = 0; i <= propertiesTextColors3.length; i++) {
    if (document.querySelector(`.${propertiesTextColors3[i]}`) && !document.querySelector('style').innerText.includes(propertiesTextColors3[i])) {
        let styles = ` 
            @media screen and (min-width: 600px) and (max-width: 900px){
                    .${propertiesTextColors3[i]} { 
                    ${valuesTextColors3[i]}
                }
            }`;
        document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
    }
}
let propertiesTextColors4 = [
    'pc_v-color-dark',
    'pc_v-color-light',
    'pc_v-color-danger',
    'pc_v-color-info',
    'pc_v-color-primary',
    'pc_v-color-smooth',
    'pc_v-color-transparent',
    'pc_v-color-secondary',
    'pc_v-color-warning',
    'pc_v-color-green',
    'pc_v-color-white'
]
let valuesTextColors4 = [
    'color: black;',
    'color: rgb(238, 238, 238);',
    'color: rgb(255, 76, 44);',
    'color: rgb(2, 168, 245);',
    'color: rgb(42, 131, 248);',
    'color: rgb(255, 242, 242);',
    'color: transparent;',
    'color: rgb(141, 141, 141);',
    'color: rgb(253, 207, 0);',
    'color: #0de982;',
    'color: #fff;'
]
for (var i = 0; i <= propertiesTextColors4.length; i++) {
    if (document.querySelector(`.${propertiesTextColors4[i]}`) && !document.querySelector('style').innerText.includes(propertiesTextColors4[i])) {
        let styles = ` 
                @media screen and (min-width: 1920px){
                    .${propertiesTextColors4[i]} { 
                    ${valuesTextColors4[i]}
                }
            }`;
        document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
    }
}