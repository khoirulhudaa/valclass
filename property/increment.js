let propertiesIncrement = [
    'v-increment'
]
let valuesIncrement = [
    'counter-increment: my-sec-counter; content: counter(my-sec-counter)'
]
for (var i = 0; i <= propertiesIncrement.length; i++) {
    if (document.querySelector(`.${propertiesIncrement[i]}`) && !document.querySelector('style').innerText.includes(propertiesIncrement[i])) {
        let styles = ` 
            body {
                margin: 0;
                padding: 0;
                counter-reset: my-sec-counter;
            }
    
            .v-increment::before { 
                ${valuesIncrement[i]}
            }`;
        document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
    }
}