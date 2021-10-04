let propertiesSelf = [
    'v-just-self-auto',
    'v-just-self-start',
    'v-just-self-end',
    'v-just-self-center',
    'v-just-self-stretch'
]
let valuesSelf = [
    'justify-self: auto',
    'justify-self: start',
    'justify-self: end;',
    'justify-self: center;',
    'justify-self: stretch;'
]
for (var i = 0; i <= propertiesSelf.length; i++) {
    if (document.querySelector(`.${propertiesSelf[i]}`) && !document.querySelector('style').innerText.includes(propertiesSelf[i])) {
        let styles = ` 
        @media screen and (min-width: 900px) and (max-width: 1920px) {
            .${propertiesSelf[i]} { 
                ${valuesSelf[i]}
            }
        }`;
        document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
    }
}
let propertiesSelf2 = [
    'mb_v-just-self-auto',
    'mb_v-just-self-start',
    'mb_v-just-self-end',
    'mb_v-just-self-center',
    'mb_v-just-self-stretch'
]
let valuesSelf2 = [
    'justify-self: auto',
    'justify-self: start',
    'justify-self: end;',
    'justify-self: center;',
    'justify-self: stretch;'
]
for (var i = 0; i <= propertiesSelf2.length; i++) {
    if (document.querySelector(`.${propertiesSelf2[i]}`) && !document.querySelector('style').innerText.includes(propertiesSelf2[i])) {
        let styles = ` 
        @media screen and (min-width: 320px) and (max-width: 600px){
            .${propertiesSelf2[i]} { 
                ${valuesSelf2[i]}
            }
        }`;
        document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
    }
}
let propertiesSelf3 = [
    'tb_v-just-self-auto',
    'tb_v-just-self-start',
    'tb_v-just-self-end',
    'tb_v-just-self-center',
    'tb_v-just-self-stretch'
]
let valuesSelf3 = [
    'justify-self: auto',
    'justify-self: start',
    'justify-self: end;',
    'justify-self: center;',
    'justify-self: stretch;'
]
for (var i = 0; i <= propertiesSelf3.length; i++) {
    if (document.querySelector(`.${propertiesSelf3[i]}`) && !document.querySelector('style').innerText.includes(propertiesSelf3[i])) {
        let styles = ` 
        @media screen and (min-width: 600px) and (max-width: 900px){
            .${propertiesSelf3[i]} { 
                ${valuesSelf3[i]}
            }
        }`;
        document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
    }
}
let propertiesSelf4 = [
    'pc_v-just-self-auto',
    'pc_v-just-self-start',
    'pc_v-just-self-end',
    'pc_v-just-self-center',
    'pc_v-just-self-stretch'
]
let valuesSelf4 = [
    'justify-self: auto',
    'justify-self: start',
    'justify-self: end;',
    'justify-self: center;',
    'justify-self: stretch;'
]
for (var i = 0; i <= propertiesSelf4.length; i++) {
    if (document.querySelector(`.${propertiesSelf4[i]}`) && !document.querySelector('style').innerText.includes(propertiesSelf4[i])) {
        let styles = ` 
        @media screen and (min-width: 1920px){
            .${propertiesSelf4[i]} { 
                ${valuesSelf4[i]}
            }
        }`;
        document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
    }
}