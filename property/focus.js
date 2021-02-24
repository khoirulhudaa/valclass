let propertiesFocus = [
    'v-focus-scale',
    'v-focus-pulse',
    'v-focus-width',
    'v-focus-border'
]
let valuesFocus = [
    `
    v-focus-scale {
        transition: 0.3s;
        transform: scale(1);
    }`,
    `
    v-focus-pulse {
        transition: 0.3s;
        opacity: 1;
    }`,
    `
    v-focus-width {
        transition: 0.3s;
        width: 60%;
    }`
]
let focuss = [
    `
    .v-focus-scale:focus {
        transition: 0.3s;
        transform: scale(0.97);
    }`,
    `
    .v-focus-pulse:focus {
        transition: 0.3s;
        opacity: 0.7;
    }`,
    `
    .v-focus-width:focus {
        transition: 0.3s;
        width: 90%;
    }`,
    `
    .v-focus-border:focus {
        border-top: none;
        border-radius: 0px;
        transition: 0.5s;
        background-color: transparent;
        border-left: none;
        border-right: none;
        outline: none;
        border-bottom: 2px solid black;
    }`
]
for (var i = 0; i <= propertiesFocus.length; i++) {
    if (document.querySelector(`.${propertiesFocus[i]}`) && !document.querySelector('style').innerText.includes(propertiesFocus[i])) {
        let styles = ` 
            .${propertiesFocus[i]} { 
                ${valuesFocus[i]}
            }
            ${focuss[i]}`;
        document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
    }
}