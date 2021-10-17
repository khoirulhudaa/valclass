let propertiesWordSpacing = [
    'v-word-spacing-normal',
    'v-word-spacing-1',
    'v-word-spacing-2',
    'v-word-spacing-3',
    'v-word-spacing-4'
]
let valuesWordSpacing = [
  'word-spacing: normal',
  'word-spacing: 10px',
  'word-spacing: 20px',
  'word-spacing: 30px',
  'word-spacing: 40px'
]
for (var i = 0; i <= propertiesWordSpacing.length; i++) {
    if (document.querySelector(`.${propertiesWordSpacing[i]}`) && !document.querySelector('style').innerText.includes(propertiesWordSpacing[i])) {
        let styles = ` 
        @media screen and (min-width: 900px) and (max-width: 1920px) {
            .${propertiesWordSpacing[i]} { 
                ${valuesWordSpacing[i]}
            }
        }`;
        document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
    }
}
let propertiesWordSpacing2 = [
    'mb_v-word-spacing-normal',
    'mb_v-word-spacing-1',
    'mb_v-word-spacing-2',
    'mb_v-word-spacing-3',
    'mb_v-word-spacing-4'
]
let valuesWordSpacing2 = [
  'word-spacing: normal',
  'word-spacing: 10px',
  'word-spacing: 20px',
  'word-spacing: 30px',
  'word-spacing: 40px'
]
for (var i = 0; i <= propertiesWordSpacing2.length; i++) {
    if (document.querySelector(`.${propertiesWordSpacing2[i]}`) && !document.querySelector('style').innerText.includes(propertiesWordSpacing2[i])) {
        let styles = ` 
        @media screen and (min-width: 320px) and (max-width: 600px){
            .${propertiesWordSpacing2[i]} { 
                ${valuesWordSpacing2[i]}
            }
        }`;
        document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
    }
}
let propertiesWordSpacing3 = [
    'tb_v-word-spacing-normal',
    'tb_v-word-spacing-1',
    'tb_v-word-spacing-2',
    'tb_v-word-spacing-3',
    'tb_v-word-spacing-4'
]
let valuesWordSpacing3 = [
  'word-spacing: normal',
  'word-spacing: 10px',
  'word-spacing: 20px',
  'word-spacing: 30px',
  'word-spacing: 40px'
]
for (var i = 0; i <= propertiesWordSpacing3.length; i++) {
    if (document.querySelector(`.${propertiesWordSpacing3[i]}`) && !document.querySelector('style').innerText.includes(propertiesWordSpacing3[i])) {
        let styles = ` 
        @media screen and (min-width: 600px) and (max-width: 900px){
            .${propertiesWordSpacing3[i]} { 
                ${valuesWordSpacing3[i]}
            }
        }`;
        document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
    }
}
let propertiesWordSpacing4 = [
    'pc_v-word-spacing-normal',
    'pc_v-word-spacing-1',
    'pc_v-word-spacing-2',
    'pc_v-word-spacing-3',
    'pc_v-word-spacing-4'
]
let valuesWordSpacing4 = [
    'word-spacing: normal',
    'word-spacing: 10px',
    'word-spacing: 20px',
    'word-spacing: 30px',
    'word-spacing: 40px'
]
for (var i = 0; i <= propertiesWordSpacing4.length; i++) {
    if (document.querySelector(`.${propertiesWordSpacing4[i]}`) && !document.querySelector('style').innerText.includes(propertiesWordSpacing4[i])) {
        let styles = ` 
        @media screen and (min-width: 1920px){
            .${propertiesWordSpacing4[i]} { 
                ${valuesWordSpacing4[i]}
            }
        }`;
        document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
    }
}