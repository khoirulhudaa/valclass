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
            .${propertiesWordSpacing[i]} { 
                ${valuesWordSpacing[i]}
            }`;
        document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
    }
}