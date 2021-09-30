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
    'mb:v-zoom-none',
    'mb:v-zoom-sm',
    'mb:v-zoom-md',
    'mb:v-zoom-lg',
    'mb:v-zoom-xl',
    'mb:v-zoom-full' 
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
    'tb:v-zoom-none',
    'tb:v-zoom-sm',
    'tb:v-zoom-md',
    'tb:v-zoom-lg',
    'tb:v-zoom-xl',
    'tb:v-zoom-full' 
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
    'pc:v-zoom-none',
    'pc:v-zoom-sm',
    'pc:v-zoom-md',
    'pc:v-zoom-lg',
    'pc:v-zoom-xl',
    'pc:v-zoom-full' 
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