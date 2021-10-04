let propertiesFloats = [
    'v-float-left',
    'v-float-right',
    'v-float-none',
    'v-float-inline-end',
    'v-float-inline-start'
]
let valuesFloats = [
    'float: left;',
    'float: right;',
    'float: none;',
    'float: inline-end;',
    'float: inline-start;'
]
for (var i = 0; i <= propertiesFloats.length; i++) {
    if (document.querySelector(`.${propertiesFloats[i]}`) && !document.querySelector('style').innerText.includes(propertiesFloats[i])) {
        let styles = ` 
            @media screen and (min-width: 900px) and (max-width: 1920px) {
                .${propertiesFloats[i]} { 
                    ${valuesFloats[i]}
                }
            }`;
        document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
    }
}
let propertiesFloats2 = [
    'mb_v-float-left',
    'mb_v-float-right',
    'mb_v-float-none',
    'mb_v-float-inline-end',
    'mb_v-float-inline-start'
]
let valuesFloats2 = [
    'float: left;',
    'float: right;',
    'float: none;',
    'float: inline-end;',
    'float: inline-start;'
]
for (var i = 0; i <= propertiesFloats2.length; i++) {
    if (document.querySelector(`.${propertiesFloats2[i]}`) && !document.querySelector('style').innerText.includes(propertiesFloats2[i])) {
        let styles = ` 
            @media screen and (min-width: 320px) and (max-width: 600px){
                .${propertiesFloats2[i]} { 
                    ${valuesFloats2[i]}
                }
            }`;
        document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
    }
}
let propertiesFloats3 = [
    'tb_v-float-left',
    'tb_v-float-right',
    'tb_v-float-none',
    'tb_v-float-inline-end',
    'tb_v-float-inline-start'
]
let valuesFloats3 = [
    'float: left;',
    'float: right;',
    'float: none;',
    'float: inline-end;',
    'float: inline-start;'
]
for (var i = 0; i <= propertiesFloats3.length; i++) {
    if (document.querySelector(`.${propertiesFloats3[i]}`) && !document.querySelector('style').innerText.includes(propertiesFloats3[i])) {
        let styles = ` 
            @media screen and (min-width: 600px) and (max-width: 900px){
                .${propertiesFloats3[i]} { 
                    ${valuesFloats3[i]}
                }
            }`;
        document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
    }
}
let propertiesFloats4 = [
    'pc_v-float-left',
    'pc_v-float-right',
    'pc_v-float-none',
    'pc_v-float-inline-end',
    'pc_v-float-inline-start'
]
let valuesFloats4 = [
    'float: left;',
    'float: right;',
    'float: none;',
    'float: inline-end;',
    'float: inline-start;'
]
for (var i = 0; i <= propertiesFloats4.length; i++) {
    if (document.querySelector(`.${propertiesFloats4[i]}`) && !document.querySelector('style').innerText.includes(propertiesFloats4[i])) {
        let styles = ` 
            @media screen and (min-width: 1920px){
                .${propertiesFloats4[i]} { 
                    ${valuesFloats4[i]}
                }
            }`;
        document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
    }
}