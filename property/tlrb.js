let propertiesTLRB = [
    'v-t-0',
    'v-t-1',
    'v-t-2',
    'v-t-3',
    'v-t-4',
    'v-l-0',
    'v-l-1',
    'v-l-2',
    'v-l-3',
    'v-l-4',
    'v-r-0',
    'v-r-1',
    'v-r-2',
    'v-r-3',
    'v-r-4',
    'v-b-0',
    'v-b-1',
    'v-b-2',
    'v-b-3',
    'v-b-4'
]
let valuesTLRB = [
    'top: 0',
    'top: 10px',
    'top: 20px;',
    'top: 30px;',
    'top: 40px;',
    'left: 0',
    'left: 10px;',
    'left: 20px;',
    'left: 30px;',
    'left: 40px;',
    'right: 0',
    'right: 10px;',
    'right: 20px;',
    'right: 30px;',
    'right: 40px;',
    'bottom: 0',
    'bottom: 10px;',
    'bottom: 20px;',
    'bottom: 30px;',
    'bottom: 40px;',
]
for (var i = 0; i <= propertiesTLRB.length; i++) {
    if (document.querySelector(`.${propertiesTLRB[i]}`) && !document.querySelector('style').innerText.includes(propertiesTLRB[i])) {
        let styles = ` 
        @media screen and (min-width: 900px) and (max-width: 1920px) {
            .${propertiesTLRB[i]} { 
                ${valuesTLRB[i]}
            }
        }`;
        document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
    }
}
let propertiesTLRB2 = [
    'mb:v-t-0',
    'mb:v-t-1',
    'mb:v-t-2',
    'mb:v-t-3',
    'mb:v-t-4',
    'mb:v-l-0',
    'mb:v-l-1',
    'mb:v-l-2',
    'mb:v-l-3',
    'mb:v-l-4',
    'mb:v-r-0',
    'mb:v-r-1',
    'mb:v-r-2',
    'mb:v-r-3',
    'mb:v-r-4',
    'mb:v-b-0',
    'mb:v-b-1',
    'mb:v-b-2',
    'mb:v-b-3',
    'mb:v-b-4'
]
let valuesTLRB2 = [
    'top: 0',
    'top: 10px',
    'top: 20px;',
    'top: 30px;',
    'top: 40px;',
    'left: 0',
    'left: 10px;',
    'left: 20px;',
    'left: 30px;',
    'left: 40px;',
    'right: 0',
    'right: 10px;',
    'right: 20px;',
    'right: 30px;',
    'right: 40px;',
    'bottom: 0',
    'bottom: 10px;',
    'bottom: 20px;',
    'bottom: 30px;',
    'bottom: 40px;',
]
for (var i = 0; i <= propertiesTLRB2.length; i++) {
    if (document.querySelector(`.${propertiesTLRB2[i]}`) && !document.querySelector('style').innerText.includes(propertiesTLRB2[i])) {
        let styles = ` 
        @media screen and (min-width: 320px) and (max-width: 600px){
            .${propertiesTLRB2[i]} { 
                ${valuesTLRB2[i]}
            }
        }`;
        document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
    }
}
let propertiesTLRB3 = [
    'tb:v-t-0',
    'tb:v-t-1',
    'tb:v-t-2',
    'tb:v-t-3',
    'tb:v-t-4',
    'tb:v-l-0',
    'tb:v-l-1',
    'tb:v-l-2',
    'tb:v-l-3',
    'tb:v-l-4',
    'tb:v-r-0',
    'tb:v-r-1',
    'tb:v-r-2',
    'tb:v-r-3',
    'tb:v-r-4',
    'tb:v-b-0',
    'tb:v-b-1',
    'tb:v-b-2',
    'tb:v-b-3',
    'tb:v-b-4'
]
let valuesTLRB3 = [
    'top: 0',
    'top: 10px',
    'top: 20px;',
    'top: 30px;',
    'top: 40px;',
    'left: 0',
    'left: 10px;',
    'left: 20px;',
    'left: 30px;',
    'left: 40px;',
    'right: 0',
    'right: 10px;',
    'right: 20px;',
    'right: 30px;',
    'right: 40px;',
    'bottom: 0',
    'bottom: 10px;',
    'bottom: 20px;',
    'bottom: 30px;',
    'bottom: 40px;',
]
for (var i = 0; i <= propertiesTLRB3.length; i++) {
    if (document.querySelector(`.${propertiesTLRB3[i]}`) && !document.querySelector('style').innerText.includes(propertiesTLRB3[i])) {
        let styles = ` 
        @media screen and (min-width: 600px) and (max-width: 900px){
            .${propertiesTLRB3[i]} { 
                ${valuesTLRB3[i]}
            }
        }`;
        document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
    }
}
let propertiesTLRB4 = [
    'pc:v-t-0',
    'pc:v-t-1',
    'pc:v-t-2',
    'pc:v-t-3',
    'pc:v-t-4',
    'pc:v-l-0',
    'pc:v-l-1',
    'pc:v-l-2',
    'pc:v-l-3',
    'pc:v-l-4',
    'pc:v-r-0',
    'pc:v-r-1',
    'pc:v-r-2',
    'pc:v-r-3',
    'pc:v-r-4',
    'pc:v-b-0',
    'pc:v-b-1',
    'pc:v-b-2',
    'pc:v-b-3',
    'pc:v-b-4'
]
let valuesTLRB4 = [
    'top: 0',
    'top: 10px',
    'top: 20px;',
    'top: 30px;',
    'top: 40px;',
    'left: 0',
    'left: 10px;',
    'left: 20px;',
    'left: 30px;',
    'left: 40px;',
    'right: 0',
    'right: 10px;',
    'right: 20px;',
    'right: 30px;',
    'right: 40px;',
    'bottom: 0',
    'bottom: 10px;',
    'bottom: 20px;',
    'bottom: 30px;',
    'bottom: 40px;',
]
for (var i = 0; i <= propertiesTLRB4.length; i++) {
    if (document.querySelector(`.${propertiesTLRB4[i]}`) && !document.querySelector('style').innerText.includes(propertiesTLRB4[i])) {
        let styles = ` 
        @media screen and (min-width: 1920px){
            .${propertiesTLRB4[i]} { 
                ${valuesTLRB4[i]}
            }
        }`;
        document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
    }
}