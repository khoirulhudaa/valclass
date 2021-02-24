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
            }`;
        document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
    }
}