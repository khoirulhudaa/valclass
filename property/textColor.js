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
    'mb:v-text-dark',
    'mb:v-text-light',
    'mb:v-text-danger',
    'mb:v-text-info',
    'mb:v-text-primary',
    'mb:v-text-smooth',
    'mb:v-text-transparent',
    'mb:v-text-secondary',
    'mb:v-text-warning',
    'mb:v-text-green',
    'mb:v-text-white'
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
    'tb:v-text-dark',
    'tb:v-text-light',
    'tb:v-text-danger',
    'tb:v-text-info',
    'tb:v-text-primary',
    'tb:v-text-smooth',
    'tb:v-text-transparent',
    'tb:v-text-secondary',
    'tb:v-text-warning',
    'tb:v-text-green',
    'tb:v-text-white'
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
    'pc:v-text-dark',
    'pc:v-text-light',
    'pc:v-text-danger',
    'pc:v-text-info',
    'pc:v-text-primary',
    'pc:v-text-smooth',
    'pc:v-text-transparent',
    'pc:v-text-secondary',
    'pc:v-text-warning',
    'pc:v-text-green',
    'pc:v-text-white'
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