let propertiesLetterSpacing = [
    'v-let-spacing-normal',
    'v-let-spacing-1',
    'v-let-spacing-2',
    'v-let-spacing-3',
    'v-let-spacing-4'
]
let valuesLetterSpacing = [
    'letter-spacing: normal',
    'letter-spacing: 10px',
    'letter-spacing: 15px',
    'letter-spacing: 20px',
    'letter-spacing: 25px'
]
for (var i = 0; i <= propertiesLetterSpacing.length; i++) {
    if (document.querySelector(`.${propertiesLetterSpacing[i]}`) && !document.querySelector('style').innerText.includes(propertiesLetterSpacing[i])) {
        let styles = ` 
        @media screen and (min-width: 900px) and (max-width: 1920px) {
            .${propertiesLetterSpacing[i]} { 
                ${valuesLetterSpacing[i]}
            }
        }`;
        document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
    }
}
let propertiesLetterSpacing2 = [
    'mb:v-let-spacing-normal',
    'mb:v-let-spacing-1',
    'mb:v-let-spacing-2',
    'mb:v-let-spacing-3',
    'mb:v-let-spacing-4'
]
let valuesLetterSpacing2 = [
    'letter-spacing: normal',
    'letter-spacing: 10px',
    'letter-spacing: 15px',
    'letter-spacing: 20px',
    'letter-spacing: 25px'
]
for (var i = 0; i <= propertiesLetterSpacing2.length; i++) {
    if (document.querySelector(`.${propertiesLetterSpacing2[i]}`) && !document.querySelector('style').innerText.includes(propertiesLetterSpacing2[i])) {
        let styles = ` 
        @media screen and (min-width: 320px) and (max-width: 600px){
            .${propertiesLetterSpacing2[i]} { 
                ${valuesLetterSpacing2[i]}
            }
        }`;
        document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
    }
}
let propertiesLetterSpacing3 = [
    'tb:v-let-spacing-normal',
    'tb:v-let-spacing-1',
    'tb:v-let-spacing-2',
    'tb:v-let-spacing-3',
    'tb:v-let-spacing-4'
]
let valuesLetterSpacing3 = [
    'letter-spacing: normal',
    'letter-spacing: 10px',
    'letter-spacing: 15px',
    'letter-spacing: 20px',
    'letter-spacing: 25px'
]
for (var i = 0; i <= propertiesLetterSpacing3.length; i++) {
    if (document.querySelector(`.${propertiesLetterSpacing3[i]}`) && !document.querySelector('style').innerText.includes(propertiesLetterSpacing3[i])) {
        let styles = ` 
        @media screen and (min-width: 600px) and (max-width: 900px){
            .${propertiesLetterSpacing3[i]} { 
                ${valuesLetterSpacing3[i]}
            }
        }`;
        document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
    }
}
let propertiesLetterSpacing4 = [
    'pc:v-let-spacing-normal',
    'pc:v-let-spacing-1',
    'pc:v-let-spacing-2',
    'pc:v-let-spacing-3',
    'pc:v-let-spacing-4'
]
let valuesLetterSpacing4 = [
    'letter-spacing: normal',
    'letter-spacing: 10px',
    'letter-spacing: 15px',
    'letter-spacing: 20px',
    'letter-spacing: 25px'
]
for (var i = 0; i <= propertiesLetterSpacing4.length; i++) {
    if (document.querySelector(`.${propertiesLetterSpacing4[i]}`) && !document.querySelector('style').innerText.includes(propertiesLetterSpacing4[i])) {
        let styles = ` 
        @media screen and (min-width: 1920px){
            .${propertiesLetterSpacing4[i]} { 
                ${valuesLetterSpacing4[i]}
            }
        }`;
        document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
    }
}