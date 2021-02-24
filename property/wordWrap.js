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
            .${propertiesWordWrap[i]} { 
                ${valuesWordWrap[i]}
            }`;
        document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
    }
}