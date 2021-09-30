let propertiesActive = [
    'v-active-scale',
    'v-active-up',
    'v-active-pulse'
]
let valuesActive = [
    `
        transition: 0.3s;
        transform: scale(1);
        `,
    `
        transition: 0.3s;
        `,
    `
        transition: 0.3s;
    `
]
let Active = [
    `
        .v-active-scale:active {
            transition: 0.3s;
            transform: scale(0.97);
        }`,
    `
        .v-active-up:active {
            transition: 0.3s;
            margin-top: -10px;
        }`,
    `
        .v-active-pulse:active {
            transition: 0.3s;
            opacity: 0.7;
        }`
]
for (var i = 0; i <= propertiesActive.length; i++) {
    if (document.querySelector(`.${propertiesActive[i]}`) && !document.querySelector('style').innerText.includes(propertiesActive[i])) {
        let styles = ` 
                .${propertiesActive[i]} { 
                    ${valuesActive[i]}
                }
                ${Active[i]}`;
        document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
    }
}