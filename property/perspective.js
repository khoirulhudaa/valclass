let propertiesPerspective = [
    'v-perspective--1',
    'v-perspective--2',
    'v-perspective--3',
    'v-perspective--4',
    'v-perspective-none',
    'v-perspective-1',
    'v-perspective-2',
    'v-perspective-3',
    'v-perspective-4',
    'v-perspective-top',
    'v-perspective-bottom',
    'v-perspective-left',
    'v-perspective-right',
    'v-perspective-center'
]
let valuesPerspective = [
    'perspective: -20px;',
    'perspective: -40px;',
    'perspective: -60px;',
    'perspective: -80px;',
    'perspective: none;',
    'perspective: 20px;',
    'perspective: 40px;',
    'perspective: 60px;',
    'perspective: 80px;',
    'perspective-origin: top;',
    'perspective-origin: bottom;',
    'perspective-origin: left;',
    'perspective-origin: right;',
    'perspective-origin: center;'
]
for (var i = 0; i <= propertiesPerspective.length; i++) {
    if (document.querySelector(`.${propertiesPerspective[i]}`) && !document.querySelector('style').innerText.includes(propertiesPerspective[i])) {
        let styles = ` 
            .${propertiesPerspective[i]} { 
                ${valuesPerspective[i]}
            }`;
        document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
    }
}