let propertiesHover = [
    'v-hover-scale',
    'v-hover-up',
    'v-hover-pulse'
]
let valuesHover = [
    `
    transition: 0.3s;
    transform: scale(1);
    `,
    `
    transition: 0.3s;
    margin-top: 0px;
    `,
    `
    transition: 0.3s;
    opacity: 1;
   `
]
let hover = [
    `
    .v-hover-scale:hover {
        transition: 0.3s;
        transform: scale(0.97);
    }`,
    `
    .v-hover-up:hover {
        transition: 0.3s;
        margin-top: -10px;
    }`,
    `
    .v-hover-pulse:hover {
        transition: 0.3s;
        opacity: 0.5;
    }`
]
for (var i = 0; i <= propertiesHover.length; i++) {
    if (document.querySelector(`.${propertiesHover[i]}`) && !document.querySelector('style').innerText.includes(propertiesHover[i])) {
        let styles = ` 
            .${propertiesHover[i]} { 
                ${valuesHover[i]}
            }
            ${hover[i]}`;
        document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
    }
}