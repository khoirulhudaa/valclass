let propertiesZooms = [
    'v-zoom-none',
    'v-zoom-sm',
    'v-zoom-md',
    'v-zoom-lg',
    'v-zoom-xl',
    'v-zoom-full' 
]
let valuesZooms = [
    'zoom: none;',
    'zoom: 20%;',
    'zoom: -40%;',
    'zoom: 60%;',
    'zoom: 80%;',
    'zoom: 100%;'
]
for (var i = 0; i <= propertiesZooms.length; i++) {
    if (document.querySelector(`.${propertiesZooms[i]}`) && !document.querySelector('style').innerText.includes(propertiesZooms[i])) {
        let styles = ` 
        @media screen and (min-width: 900px) and (max-width: 1920px) {
            .${propertiesZooms[i]} { 
                ${valuesZooms[i]}
            }
        }`;
        document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
    }
}
let propertiesZooms2 = [
    'mb_v-zoom-none',
    'mb_v-zoom-sm',
    'mb_v-zoom-md',
    'mb_v-zoom-lg',
    'mb_v-zoom-xl',
    'mb_v-zoom-full' 
]
let valuesZooms2 = [
    'zoom: none;',
    'zoom: 20%;',
    'zoom: -40%;',
    'zoom: 60%;',
    'zoom: 80%;',
    'zoom: 100%;'
]
for (var i = 0; i <= propertiesZooms2.length; i++) {
    if (document.querySelector(`.${propertiesZooms2[i]}`) && !document.querySelector('style').innerText.includes(propertiesZooms2[i])) {
        let styles = ` 
        @media screen and (min-width: 320px) and (max-width: 600px){
            .${propertiesZooms2[i]} { 
                ${valuesZooms2[i]}
            }
        }`;
        document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
    }
}
let propertiesZooms3 = [
    'tb_v-zoom-none',
    'tb_v-zoom-sm',
    'tb_v-zoom-md',
    'tb_v-zoom-lg',
    'tb_v-zoom-xl',
    'tb_v-zoom-full' 
]
let valuesZooms3 = [
    'zoom: none;',
    'zoom: 20%;',
    'zoom: -40%;',
    'zoom: 60%;',
    'zoom: 80%;',
    'zoom: 100%;'
]
for (var i = 0; i <= propertiesZooms3.length; i++) {
    if (document.querySelector(`.${propertiesZooms3[i]}`) && !document.querySelector('style').innerText.includes(propertiesZooms3[i])) {
        let styles = ` 
        @media screen and (min-width: 600px) and (max-width: 900px){
            .${propertiesZooms3[i]} { 
                ${valuesZooms3[i]}
            }
        }`;
        document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
    }
}
let propertiesZooms4 = [
    'pc_v-zoom-none',
    'pc_v-zoom-sm',
    'pc_v-zoom-md',
    'pc_v-zoom-lg',
    'pc_v-zoom-xl',
    'pc_v-zoom-full' 
]
let valuesZooms4 = [
    'zoom: none;',
    'zoom: 20%;',
    'zoom: -40%;',
    'zoom: 60%;',
    'zoom: 80%;',
    'zoom: 100%;'
]
for (var i = 0; i <= propertiesZooms4.length; i++) {
    if (document.querySelector(`.${propertiesZooms4[i]}`) && !document.querySelector('style').innerText.includes(propertiesZooms4[i])) {
        let styles = ` 
        @media screen and (min-width: 1920px){
            .${propertiesZooms4[i]} { 
                ${valuesZooms4[i]}
            }
        }`;
        document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
    }
}