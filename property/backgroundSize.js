let propertiesBackgroundSize = [
    'v-bg-sz-auto',
    'v-bg-sz-contain',
    'v-bg-sz-cover',
    'v-bg-sz--1',
    'v-bg-sz--2',
    'v-bg-sz--3',
    'v-bg-sz--4',
    'v-bg-sz--full',
    'v-bg-sz-0',
    'v-bg-sz-1',
    'v-bg-sz-2',
    'v-bg-sz-3',
    'v-bg-sz-4',
    'v-bg-sz-full'
]
let valuesBackgroundSize = [
    'background-size: auto',
    'background-size: contain',
    'background-size: cover',
    'background-size: -20%',
    'background-size: -40%',
    'background-size: -60%',
    'background-size: -80%',
    'background-size: -100%',
    'background-size: 0%',
    'background-size: 20%',
    'background-size: 40%',
    'background-size: 60%',
    'background-size: 80%',
    'background-size: 100%',
]
for (var i = 0; i <= propertiesBackgroundSize.length; i++) {
    if (document.querySelector(`.${propertiesBackgroundSize[i]}`) && !document.querySelector('style').innerText.includes(propertiesBackgroundSize[i])) {
        let styles = ` 
                .${propertiesBackgroundSize[i]} { 
                    ${valuesBackgroundSize[i]}
                }`;
        document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
    }
}