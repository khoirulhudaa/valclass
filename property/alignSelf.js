let propertiesAlignSelf = [
    'v-self-center',
    'v-self-flex-end',
    'v-self-flex-start',
    'v-self-stretch',
    'v-self-baseline',
    'v-self-auto'
]
let valuesAlignSelf = [
    'align-self: center;',
    'align-self: flex-end;',
    'align-self: flex-start;',
    'align-self: stretch;',
    'align-self: baseline;',
    'align-self: auto;',
]
for (var i = 0; i <= propertiesAlignSelf.length; i++) {
    if (document.querySelector(`.${propertiesAlignSelf[i]}`) && !document.querySelector('style').innerText.includes(propertiesAlignSelf[i])) {
        let styles = ` 
            .${propertiesAlignSelf[i]} { 
                ${valuesAlignSelf[i]}
            }
            @media screen and (min-width: 900px) and (max-width: 1920px) {
                .${propertiesAlignSelf[i]} { 
                    ${valuesAlignSelf[i]}
                }
            }`;
        document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
    }
}

let propertiesAlignSelf2 = [
    'mb_v-self-center',
    'mb_v-self-flex-end',
    'mb_v-self-flex-start',
    'mb_v-self-stretch',
    'mb_v-self-baseline',
    'mb_v-self-auto'
]
let valuesAlignSelf2 = [
    'align-self: center;',
    'align-self: flex-end;',
    'align-self: flex-start;',
    'align-self: stretch;',
    'align-self: baseline;',
    'align-self: auto;',
]
for (var i = 0; i <= propertiesAlignSelf2.length; i++) {
    if (document.querySelector(`.${propertiesAlignSelf2[i]}`) && !document.querySelector('style').innerText.includes(propertiesAlignSelf2[i])) {
        let styles = ` 
            .${propertiesAlignSelf2[i]} { 
                ${valuesAlignSelf2[i]}
            }
            @media screen and (min-width: 320px) and (max-width: 600px){
                .${propertiesAlignSelf2[i]} { 
                    ${valuesAlignSelf2[i]}
                }
            }`;
        document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
    }
}

let propertiesAlignSelf3 = [
    'tb_v-self-center',
    'tb_v-self-flex-end',
    'tb_v-self-flex-start',
    'tb_v-self-stretch',
    'tb_v-self-baseline',
    'tb_v-self-auto'
]
let valuesAlignSelf3 = [
    'align-self: center;',
    'align-self: flex-end;',
    'align-self: flex-start;',
    'align-self: stretch;',
    'align-self: baseline;',
    'align-self: auto;',
]
for (var i = 0; i <= propertiesAlignSelf3.length; i++) {
    if (document.querySelector(`.${propertiesAlignSelf3[i]}`) && !document.querySelector('style').innerText.includes(propertiesAlignSelf3[i])) {
        let styles = ` 
            .${propertiesAlignSelf3[i]} { 
                ${valuesAlignSelf3[i]}
            }
            @media screen and (min-width: 600px) and (max-width: 900px){
                .${propertiesAlignSelf3[i]} { 
                    ${valuesAlignSelf3[i]}
                }
            }`;
        document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
    }
}

let propertiesAlignSelf4 = [
    'pc_v-self-center',
    'pc_v-self-flex-end',
    'pc_v-self-flex-start',
    'pc_v-self-stretch',
    'pc_v-self-baseline',
    'pc_v-self-auto'
]
let valuesAlignSelf4 = [
    'align-self: center;',
    'align-self: flex-end;',
    'align-self: flex-start;',
    'align-self: stretch;',
    'align-self: baseline;',
    'align-self: auto;',
]
for (var i = 0; i <= propertiesAlignSelf4.length; i++) {
    if (document.querySelector(`.${propertiesAlignSelf4[i]}`) && !document.querySelector('style').innerText.includes(propertiesAlignSelf4[i])) {
        let styles = ` 
            .${propertiesAlignSelf4[i]} { 
                ${valuesAlignSelf4[i]}
            }
            @media screen and (min-width: 1920px){
                .${propertiesAlignSelf4[i]} { 
                    ${valuesAlignSelf4[i]}
                }
            }`;
        document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
    }
}