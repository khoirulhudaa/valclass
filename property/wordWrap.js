let propertiesWordWrap = [
    'v-word-wrap-normal',
    'v-word-wrap-break-word'
]
let valuesWordWrap = [
  'word-wrap: normal',
  'word-wrap: break-word'
]
for (var i = 0; i <= propertiesWordWrap.length; i++) {
    if (document.querySelector(`.${propertiesWordWrap[i]}`) && !document.querySelector('style').innerText.includes(propertiesWordWrap[i])) {
        let styles = ` 
        @media screen and (min-width: 900px) and (max-width: 1920px) {
            .${propertiesWordWrap[i]} { 
                ${valuesWordWrap[i]}
            }
        }`;
        document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
    }
}
let propertiesWordWrap2 = [
    'mb_v-word-wrap-normal',
    'mb_v-word-wrap-break-word'
]
let valuesWordWrap2 = [
  'word-wrap: normal',
  'word-wrap: break-word'
]
for (var i = 0; i <= propertiesWordWrap2.length; i++) {
    if (document.querySelector(`.${propertiesWordWrap2[i]}`) && !document.querySelector('style').innerText.includes(propertiesWordWrap2[i])) {
        let styles = ` 
        @media screen and (min-width: 320px) and (max-width: 600px){
            .${propertiesWordWrap2[i]} { 
                ${valuesWordWrap2[i]}
            }
        }`;
        document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
    }
}
let propertiesWordWrap3 = [
    'tb_v-word-wrap-normal',
    'tb_v-word-wrap-break-word'
]
let valuesWordWrap3 = [
  'word-wrap: normal',
  'word-wrap: break-word'
]
for (var i = 0; i <= propertiesWordWrap3.length; i++) {
    if (document.querySelector(`.${propertiesWordWrap3[i]}`) && !document.querySelector('style').innerText.includes(propertiesWordWrap3[i])) {
        let styles = ` 
        @media screen and (min-width: 600px) and (max-width: 900px){
            .${propertiesWordWrap3[i]} { 
                ${valuesWordWrap3[i]}
            }
        }`;
        document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
    }
}
let propertiesWordWrap4 = [
    'pc_v-word-wrap-normal',
    'pc_v-word-wrap-break-word'
]
let valuesWordWrap4 = [
  'word-wrap: normal',
  'word-wrap: break-word'
]
for (var i = 0; i <= propertiesWordWrap4.length; i++) {
    if (document.querySelector(`.${propertiesWordWrap4[i]}`) && !document.querySelector('style').innerText.includes(propertiesWordWrap4[i])) {
        let styles = ` 
        @media screen and (min-width: 1920px){
            .${propertiesWordWrap4[i]} { 
                ${valuesWordWrap4[i]}
            }
        }`;
        document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
    }
}