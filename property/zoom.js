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
            .${propertiesZooms[i]} { 
                ${valuesZooms[i]}
            }`;
        document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
    }
}