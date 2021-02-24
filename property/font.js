
let propertiesFonts = [
    'v-weight-normal',
    'v-weight-bold',
    'v-weight-100',
    'v-weight-200',
    'v-weight-300',
    'v-weight-400',
    'v-weight-500',
    'v-weight-600',
    'v-weight-700',
    'v-weight-800',
    'v-font-italic',
    'v-font-normal',
    'v-font-oblique',
    'v-font-sm',
    'v-font-md',
    'v-font-lg',
    'v-font-xl'
]
let valuesFonts = [
    'font-weight: normal;',
    'font-weight: bold;',
    'font-weight: 100;',
    'font-weight: 200;',
    'font-weight: 300;',
    'font-weight: 400;',
    'font-weight: 500;',
    'font-weight: 600;',
    'font-weight: 700;',
    'font-weight: 800;',
    'font-style: italic;',
    'font-style: normal;',
    'font-style: oblique;',
    'font-size: 15px;',
    'font-size: 20px;',
    'font-size: 25px;',
    'font-size: 30px;'
]
for (var i = 0; i <= propertiesFonts.length; i++) {
    if (document.querySelector(`.${propertiesFonts[i]}`) && !document.querySelector('style').innerText.includes(propertiesFonts[i])) {
        let styles = ` 
                .${propertiesFonts[i]} { 
                    ${valuesFonts[i]}
                }`;
        document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
    }
}