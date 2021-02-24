let valueContent = [
    'align-content: center;',
    'align-content: flex-end;',
    'align-content: flex-start;',
    'align-content: space-evenly;',
    'align-content: space-between;',
    'align-content: space-around;',
]
for (var i = 0; i <= propertiesAlignContent.length; i++) {
    if (document.querySelector(`.${propertiesAlignContent[i]}`) && !document.querySelector('style').innerText.includes(propertiesAlignContent[i])) {
        let styles = ` 
                .${propertiesAlignContent[i]} { 
                    ${valueContent[i]}
                }`;
        document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
    }
}
