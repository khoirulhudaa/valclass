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
    'mb_v-perspective--1',
    'mb_v-perspective--2',
    'mb_v-perspective--3',
    'mb_v-perspective--4',
    'mb_v-perspective-none',
    'mb_v-perspective-1',
    'mb_v-perspective-2',
    'mb_v-perspective-3',
    'mb_v-perspective-4',
    'mb_v-perspective-top',
    'mb_v-perspective-bottom',
    'mb_v-perspective-left',
    'mb_v-perspective-right',
    'mb_v-perspective-center'
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
    'tb_v-perspective--1',
    'tb_v-perspective--2',
    'tb_v-perspective--3',
    'tb_v-perspective--4',
    'tb_v-perspective-none',
    'tb_v-perspective-1',
    'tb_v-perspective-2',
    'tb_v-perspective-3',
    'tb_v-perspective-4',
    'tb_v-perspective-top',
    'tb_v-perspective-bottom',
    'tb_v-perspective-left',
    'tb_v-perspective-right',
    'tb_v-perspective-center'
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
    'pc_v-perspective--1',
    'pc_v-perspective--2',
    'pc_v-perspective--3',
    'pc_v-perspective--4',
    'pc_v-perspective-none',
    'pc_v-perspective-1',
    'pc_v-perspective-2',
    'pc_v-perspective-3',
    'pc_v-perspective-4',
    'pc_v-perspective-top',
    'pc_v-perspective-bottom',
    'pc_v-perspective-left',
    'pc_v-perspective-right',
    'pc_v-perspective-center'
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