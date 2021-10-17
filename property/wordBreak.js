let propertiesWordBreak = [
    'v-break-normal',
    'v-break-words',
    'v-break-all'
]
let valuesWordBreak = [
  `overflow-wrap: normal; 
   word-break: normal;`,    
  'overflow-wrap: break-word;',
  'word-break: break-all'
]
for (var i = 0; i <= propertiesWordBreak.length; i++) {
    if (document.querySelector(`.${propertiesWordBreak[i]}`) && !document.querySelector('style').innerText.includes(propertiesWordBreak[i])) {
        let styles = ` 
        .${propertiesWordBreak[i]} { 
            ${valuesWordBreak[i]}
        }
        @media screen and (min-width: 900px) and (max-width: 1920px) {
            .${propertiesWordBreak[i]} { 
                ${valuesWordBreak[i]}
            }
        }`;
        document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
    }
}
let propertiesWordBreak2 = [
    'mb_v-break-normal',
    'mb_v-break-words',
    'mb_v-break-all'
]
let valuesWordBreak2 = [
  `overflow-wrap: normal; 
   word-break: normal;`,    
  'overflow-wrap: break-word;',
  'word-break: break-all'
]
for (var i = 0; i <= propertiesWordBreak2.length; i++) {
    if (document.querySelector(`.${propertiesWordBreak2[i]}`) && !document.querySelector('style').innerText.includes(propertiesWordBreak2[i])) {
        let styles = ` 
        .${propertiesWordBreak2[i]} { 
            ${valuesWordBreak2[i]}
        }
        @media screen and (min-width: 320px) and (max-width: 600px){
            .${propertiesWordBreak2[i]} { 
                ${valuesWordBreak2[i]}
            }
        }`;
        document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
    }
}
let propertiesWordBreak3 = [
    'tb_v-break-normal',
    'tb_v-break-words',
    'tb_v-break-all'
]
let valuesWordBreak3 = [
  `overflow-wrap: normal; 
   word-break: normal;`,    
  'overflow-wrap: break-word;',
  'word-break: break-all'
]
for (var i = 0; i <= propertiesWordBreak3.length; i++) {
    if (document.querySelector(`.${propertiesWordBreak3[i]}`) && !document.querySelector('style').innerText.includes(propertiesWordBreak3[i])) {
        let styles = ` 
        .${propertiesWordBreak3[i]} { 
            ${valuesWordBreak3[i]}
        }
        @media screen and (min-width: 600px) and (max-width: 900px){
            .${propertiesWordBreak3[i]} { 
                ${valuesWordBreak3[i]}
            }
        }`;
        document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
    }
}
let propertiesWordBreak4 = [
    'pc_v-break-normal',
    'pc_v-break-words',
    'pc_v-break-all'
]
let valuesWordBreak4 = [
  `overflow-wrap: normal; 
   word-break: normal;`,    
  'overflow-wrap: break-word;',
  'word-break: break-all'
]
for (var i = 0; i <= propertiesWordBreak4.length; i++) {
    if (document.querySelector(`.${propertiesWordBreak4[i]}`) && !document.querySelector('style').innerText.includes(propertiesWordBreak4[i])) {
        let styles = ` 
        .${propertiesWordBreak4[i]} { 
            ${valuesWordBreak4[i]}
        }
        @media screen and (min-width: 1920px){
            .${propertiesWordBreak4[i]} { 
                ${valuesWordBreak4[i]}
            }
        }`;
        document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
    }
}