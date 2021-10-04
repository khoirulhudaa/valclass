let propertiesTextColors = [
    'v-text-dark',
    'v-text-light',
    'v-text-danger',
    'v-text-info',
    'v-text-primary',
    'v-text-smooth',
    'v-text-transparent',
    'v-text-secondary',
    'v-text-warning',
    'v-text-green',
    'v-text-white'
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
    'mb_v-text-dark',
    'mb_v-text-light',
    'mb_v-text-danger',
    'mb_v-text-info',
    'mb_v-text-primary',
    'mb_v-text-smooth',
    'mb_v-text-transparent',
    'mb_v-text-secondary',
    'mb_v-text-warning',
    'mb_v-text-green',
    'mb_v-text-white'
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
    'tb_v-text-dark',
    'tb_v-text-light',
    'tb_v-text-danger',
    'tb_v-text-info',
    'tb_v-text-primary',
    'tb_v-text-smooth',
    'tb_v-text-transparent',
    'tb_v-text-secondary',
    'tb_v-text-warning',
    'tb_v-text-green',
    'tb_v-text-white'
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
    'pc_v-text-dark',
    'pc_v-text-light',
    'pc_v-text-danger',
    'pc_v-text-info',
    'pc_v-text-primary',
    'pc_v-text-smooth',
    'pc_v-text-transparent',
    'pc_v-text-secondary',
    'pc_v-text-warning',
    'pc_v-text-green',
    'pc_v-text-white'
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