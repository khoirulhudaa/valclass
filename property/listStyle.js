let propertiesListStyle = [
    'v-list-none',
    'v-list-square',
    'v-list-circle',
    'v-list-desc',
    'v-list-decimal',
    'v-list-armenian',
    'v-list-georgian'
]
let valuesListStyle = [
    'list-style-type: none',
    'list-style-type: square',
    'list-style-type: circle;',
    'list-style-type: desc;',
    'list-style-type: decimal;',
    'list-style-type: armenian',
    'list-style-type: georgian'
]
for (var i = 0; i <= propertiesListStyle.length; i++) {
    if (document.querySelector(`.${propertiesListStyle[i]}`) && !document.querySelector('style').innerText.includes(propertiesListStyle[i])) {
        let styles = ` 
        @media screen and (min-width: 900px) and (max-width: 1920px) {
            .${propertiesListStyle[i]} { 
                ${valuesListStyle[i]}
            }
        }`;
        document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
    }
}
let propertiesListStyle2 = [
    'mb:v-list-none',
    'mb:v-list-square',
    'mb:v-list-circle',
    'mb:v-list-desc',
    'mb:v-list-decimal',
    'mb:v-list-armenian',
    'mb:v-list-georgian'
]
let valuesListStyle2 = [
    'list-style-type: none',
    'list-style-type: square',
    'list-style-type: circle;',
    'list-style-type: desc;',
    'list-style-type: decimal;',
    'list-style-type: armenian',
    'list-style-type: georgian'
]
for (var i = 0; i <= propertiesListStyle2.length; i++) {
    if (document.querySelector(`.${propertiesListStyle2[i]}`) && !document.querySelector('style').innerText.includes(propertiesListStyle2[i])) {
        let styles = ` 
        @media screen and (min-width: 320px) and (max-width: 600px){
            .${propertiesListStyle2[i]} { 
                ${valuesListStyle2[i]}
            }
        }`;
        document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
    }
}
let propertiesListStyle3 = [
    'tb:v-list-none',
    'tb:v-list-square',
    'tb:v-list-circle',
    'tb:v-list-desc',
    'tb:v-list-decimal',
    'tb:v-list-armenian',
    'tb:v-list-georgian'
]
let valuesListStyle3 = [
    'list-style-type: none',
    'list-style-type: square',
    'list-style-type: circle;',
    'list-style-type: desc;',
    'list-style-type: decimal;',
    'list-style-type: armenian',
    'list-style-type: georgian'
]
for (var i = 0; i <= propertiesListStyle3.length; i++) {
    if (document.querySelector(`.${propertiesListStyle3[i]}`) && !document.querySelector('style').innerText.includes(propertiesListStyle3[i])) {
        let styles = ` 
        @media screen and (min-width: 600px) and (max-width: 900px){
            .${propertiesListStyle3[i]} { 
                ${valuesListStyle3[i]}
            }
        }`;
        document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
    }
}
let propertiesListStyle4 = [
    'pc:v-list-none',
    'pc:v-list-square',
    'pc:v-list-circle',
    'pc:v-list-desc',
    'pc:v-list-decimal',
    'pc:v-list-armenian',
    'pc:v-list-georgian'
]
let valuesListStyle4 = [
    'list-style-type: none',
    'list-style-type: square',
    'list-style-type: circle;',
    'list-style-type: desc;',
    'list-style-type: decimal;',
    'list-style-type: armenian',
    'list-style-type: georgian'
]
for (var i = 0; i <= propertiesListStyle4.length; i++) {
    if (document.querySelector(`.${propertiesListStyle4[i]}`) && !document.querySelector('style').innerText.includes(propertiesListStyle4[i])) {
        let styles = ` 
        @media screen and (min-width: 1920px){
            .${propertiesListStyle4[i]} { 
                ${valuesListStyle4[i]}
            }
        }`;
        document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
    }
}