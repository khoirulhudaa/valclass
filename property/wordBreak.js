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
        @media screen and (min-width: 900px) and (max-width: 1920px) {
            .${propertiesWordBreak[i]} { 
                ${valuesWordBreak[i]}
            }
        }`;
        document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
    }
}
let propertiesWordBreak2 = [
    'mb:v-break-normal',
    'mb:v-break-words',
    'mb:v-break-all'
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
        @media screen and (min-width: 320px) and (max-width: 600px){
            .${propertiesWordBreak2[i]} { 
                ${valuesWordBreak2[i]}
            }
        }`;
        document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
    }
}
let propertiesWordBreak3 = [
    'tb:v-break-normal',
    'tb:v-break-words',
    'tb:v-break-all'
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
        @media screen and (min-width: 600px) and (max-width: 900px){
            .${propertiesWordBreak3[i]} { 
                ${valuesWordBreak3[i]}
            }
        }`;
        document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
    }
}
let propertiesWordBreak4 = [
    'pc:v-break-normal',
    'pc:v-break-words',
    'pc:v-break-all'
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
        @media screen and (min-width: 1920px){
            .${propertiesWordBreak4[i]} { 
                ${valuesWordBreak4[i]}
            }
        }`;
        document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
    }
}