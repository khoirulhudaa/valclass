let propertiesItems = [
    'v-just-items-auto',
    'v-just-items-start',
    'v-just-items-end',
    'v-just-items-center',
    'v-just-items-flex-end',
    'v-just-items-flex-start'
]
let valuesItems = [
    'justify-items: auto',
    'justify-items: start',
    'justify-items: end;',
    'justify-items: center;',
    'justify-items: flex-end;',
    'justify-items: flex-start;'
]
for (var i = 0; i <= propertiesItems.length; i++) {
    if (document.querySelector(`.${propertiesItems[i]}`) && !document.querySelector('style').innerText.includes(propertiesItems[i])) {
        let styles = ` 
        .${propertiesItems[i]} { 
            ${valuesItems[i]}
        }
        @media screen and (min-width: 900px) and (max-width: 1920px) {
            .${propertiesItems[i]} { 
                ${valuesItems[i]}
            }
        }`;
        document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
    }
}
let propertiesItems2 = [
    'mb_v-just-items-auto',
    'mb_v-just-items-start',
    'mb_v-just-items-end',
    'mb_v-just-items-center',
    'mb_v-just-items-flex-end',
    'mb_v-just-items-flex-start'
]
let valuesItems2 = [
    'justify-items: auto',
    'justify-items: start',
    'justify-items: end;',
    'justify-items: center;',
    'justify-items: flex-end;',
    'justify-items: flex-start;'
]
for (var i = 0; i <= propertiesItems2.length; i++) {
    if (document.querySelector(`.${propertiesItems2[i]}`) && !document.querySelector('style').innerText.includes(propertiesItems2[i])) {
        let styles = ` 
        .${propertiesItems2[i]} { 
            ${valuesItems2[i]}
        }
        @media screen and (min-width: 320px) and (max-width: 600px){
            .${propertiesItems2[i]} { 
                ${valuesItems2[i]}
            }
        }`;
        document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
    }
}
let propertiesItems3 = [
    'tb_v-just-items-auto',
    'tb_v-just-items-start',
    'tb_v-just-items-end',
    'tb_v-just-items-center',
    'tb_v-just-items-flex-end',
    'tb_v-just-items-flex-start'
]
let valuesItems3 = [
    'justify-items: auto',
    'justify-items: start',
    'justify-items: end;',
    'justify-items: center;',
    'justify-items: flex-end;',
    'justify-items: flex-start;'
]
for (var i = 0; i <= propertiesItems3.length; i++) {
    if (document.querySelector(`.${propertiesItems3[i]}`) && !document.querySelector('style').innerText.includes(propertiesItems3[i])) {
        let styles = ` 
        .${propertiesItems3[i]} { 
            ${valuesItems3[i]}
        }
        @media screen and (min-width: 600px) and (max-width: 900px){
            .${propertiesItems3[i]} { 
                ${valuesItems3[i]}
            }
        }`;
        document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
    }
}let propertiesItems4 = [
    'pc_v-just-items-auto',
    'pc_v-just-items-start',
    'pc_v-just-items-end',
    'pc_v-just-items-center',
    'pc_v-just-items-flex-end',
    'pc_v-just-items-flex-start'
]
let valuesItems4 = [
    'justify-items: auto',
    'justify-items: start',
    'justify-items: end;',
    'justify-items: center;',
    'justify-items: flex-end;',
    'justify-items: flex-start;'
]
for (var i = 0; i <= propertiesItems4.length; i++) {
    if (document.querySelector(`.${propertiesItems4[i]}`) && !document.querySelector('style').innerText.includes(propertiesItems4[i])) {
        let styles = ` 
        .${propertiesItems4[i]} { 
            ${valuesItems4[i]}
        }
        @media screen and (min-width: 1920px){
            .${propertiesItems4[i]} { 
                ${valuesItems4[i]}
            }
        }`;
        document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
    }
}