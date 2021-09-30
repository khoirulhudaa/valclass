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
            @media screen and (min-width: 900px) and (max-width: 1920px) {
                    .${propertiesBgColors[i]} { 
                    ${valuesBgColors[i]}
                }
            }`;
        document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
    }
}

let propertiesBgColors2 = [
    'mb:v-dark',
    'mb:v-light',
    'mb:v-danger',
    'mb:v-info',
    'mb:v-primary',
    'mb:v-smooth',
    'mb:v-transparent',
    'mb:v-secondary',
    'mb:v-warning',
    'mb:v-green',
    'mb:v-white'
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
    'tb:v-dark',
    'tb:v-light',
    'tb:v-danger',
    'tb:v-info',
    'tb:v-primary',
    'tb:v-smooth',
    'tb:v-transparent',
    'tb:v-secondary',
    'tb:v-warning',
    'tb:v-green',
    'tb:v-white'
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
    'pc:v-dark',
    'pc:v-light',
    'pc:v-danger',
    'pc:v-info',
    'pc:v-primary',
    'pc:v-smooth',
    'pc:v-transparent',
    'pc:v-secondary',
    'pc:v-warning',
    'pc:v-green',
    'pc:v-white'
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