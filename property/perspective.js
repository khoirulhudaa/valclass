let propertiesPerspective = [
    'v-perspective--1',
    'v-perspective--2',
    'v-perspective--3',
    'v-perspective--4',
    'v-perspective-none',
    'v-perspective-1',
    'v-perspective-2',
    'v-perspective-3',
    'v-perspective-4',
    'v-perspective-top',
    'v-perspective-bottom',
    'v-perspective-left',
    'v-perspective-right',
    'v-perspective-center'
]
let valuesPerspective = [
    'perspective: -20px;',
    'perspective: -40px;',
    'perspective: -60px;',
    'perspective: -80px;',
    'perspective: none;',
    'perspective: 20px;',
    'perspective: 40px;',
    'perspective: 60px;',
    'perspective: 80px;',
    'perspective-origin: top;',
    'perspective-origin: bottom;',
    'perspective-origin: left;',
    'perspective-origin: right;',
    'perspective-origin: center;'
]
for (var i = 0; i <= propertiesPerspective.length; i++) {
    if (document.querySelector(`.${propertiesPerspective[i]}`) && !document.querySelector('style').innerText.includes(propertiesPerspective[i])) {
        let styles = `  
        @media screen and (min-width: 900px) and (max-width: 1920px) {
            .${propertiesPerspective[i]} { 
                ${valuesPerspective[i]}
            }
        }`;
        document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
    }
}
let propertiesPerspective2 = [
    'mb:v-perspective--1',
    'mb:v-perspective--2',
    'mb:v-perspective--3',
    'mb:v-perspective--4',
    'mb:v-perspective-none',
    'mb:v-perspective-1',
    'mb:v-perspective-2',
    'mb:v-perspective-3',
    'mb:v-perspective-4',
    'mb:v-perspective-top',
    'mb:v-perspective-bottom',
    'mb:v-perspective-left',
    'mb:v-perspective-right',
    'mb:v-perspective-center'
]
let valuesPerspective2 = [
    'perspective: -20px;',
    'perspective: -40px;',
    'perspective: -60px;',
    'perspective: -80px;',
    'perspective: none;',
    'perspective: 20px;',
    'perspective: 40px;',
    'perspective: 60px;',
    'perspective: 80px;',
    'perspective-origin: top;',
    'perspective-origin: bottom;',
    'perspective-origin: left;',
    'perspective-origin: right;',
    'perspective-origin: center;'
]
for (var i = 0; i <= propertiesPerspective2.length; i++) {
    if (document.querySelector(`.${propertiesPerspective2[i]}`) && !document.querySelector('style').innerText.includes(propertiesPerspective2[i])) {
        let styles = `  
        @media screen and (min-width: 320px) and (max-width: 600px){
            .${propertiesPerspective2[i]} { 
                ${valuesPerspective2[i]}
            }
        }`;
        document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
    }
}
let propertiesPerspective3 = [
    'tb:v-perspective--1',
    'tb:v-perspective--2',
    'tb:v-perspective--3',
    'tb:v-perspective--4',
    'tb:v-perspective-none',
    'tb:v-perspective-1',
    'tb:v-perspective-2',
    'tb:v-perspective-3',
    'tb:v-perspective-4',
    'tb:v-perspective-top',
    'tb:v-perspective-bottom',
    'tb:v-perspective-left',
    'tb:v-perspective-right',
    'tb:v-perspective-center'
]
let valuesPerspective3 = [
    'perspective: -20px;',
    'perspective: -40px;',
    'perspective: -60px;',
    'perspective: -80px;',
    'perspective: none;',
    'perspective: 20px;',
    'perspective: 40px;',
    'perspective: 60px;',
    'perspective: 80px;',
    'perspective-origin: top;',
    'perspective-origin: bottom;',
    'perspective-origin: left;',
    'perspective-origin: right;',
    'perspective-origin: center;'
]
for (var i = 0; i <= propertiesPerspective3.length; i++) {
    if (document.querySelector(`.${propertiesPerspective3[i]}`) && !document.querySelector('style').innerText.includes(propertiesPerspective3[i])) {
        let styles = `  
        @media screen and (min-width: 600px) and (max-width: 900px){
            .${propertiesPerspective3[i]} { 
                ${valuesPerspective3[i]}
            }
        }`;
        document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
    }
}
let propertiesPerspective4 = [
    'pc:v-perspective--1',
    'pc:v-perspective--2',
    'pc:v-perspective--3',
    'pc:v-perspective--4',
    'pc:v-perspective-none',
    'pc:v-perspective-1',
    'pc:v-perspective-2',
    'pc:v-perspective-3',
    'pc:v-perspective-4',
    'pc:v-perspective-top',
    'pc:v-perspective-bottom',
    'pc:v-perspective-left',
    'pc:v-perspective-right',
    'pc:v-perspective-center'
]
let valuesPerspective4 = [
    'perspective: -20px;',
    'perspective: -40px;',
    'perspective: -60px;',
    'perspective: -80px;',
    'perspective: none;',
    'perspective: 20px;',
    'perspective: 40px;',
    'perspective: 60px;',
    'perspective: 80px;',
    'perspective-origin: top;',
    'perspective-origin: bottom;',
    'perspective-origin: left;',
    'perspective-origin: right;',
    'perspective-origin: center;'
]
for (var i = 0; i <= propertiesPerspective4.length; i++) {
    if (document.querySelector(`.${propertiesPerspective4[i]}`) && !document.querySelector('style').innerText.includes(propertiesPerspective4[i])) {
        let styles = `  
        @media screen and (min-width: 1920px){
            .${propertiesPerspective4[i]} { 
                ${valuesPerspective4[i]}
            }
        }`;
        document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
    }
}