let propertiesLoad = [
    `v-overlay`,
    `v-overlay-2`,
    `v-wrapper-overlay`
]

let valuesLoad = [
    `
    .v-overlay {
        position: relative;
        width: 100%;
        height: 100px;
        background-color:rgb(230, 230, 230);
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }
    
    .v-overlay .v-loading {
        position: absolute;
        width: 50px;
        height: 50px;
        border-top: 3px solid rgb(0, 123, 255);
        border-radius: 50%;
        animation: rotate 1s infinite linear;
    }
    
    .v-loading2 {
        position: absolute;
        z-index: 2;
        width: 50px;
        height: 50px;
        border: 3px solid white;
        border-radius: 50%;
        border-top: 3px solid red;
        animation: rotate2 1s infinite linear;
    }
    
    @keyframes rotate {
        to {
            transform: rotate(360deg);
        }
    }
    
    @keyframes rotate2 {
        to {
            transform: rotate(0deg);
        }
    }
    `,
    `
    .v-overlay2 {
        position: relative;
        width: 100%;
        height: 100px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    
    .v-overlay2 .v-loading {
        width: 40px;
        height: 40px;
        border-radius: 50%;
        margin: 0 10px;
        background-color: #fff;
    }
    
    .v-load1 {
        animation: pulse1 2s infinite linear;
    }
    .v-load2 {
        animation: pulse2 2.3s infinite linear;
    }
    .v-load3 {
        animation: pulse3 2.5s infinite linear;
    }
    
    @keyframes pulse1 {
     to {
         transform: scale(1.2);
         opacity: 0;
     }
    }
    
    @keyframes pulse2 {
     to {
         transform: scale(1.2);
         opacity: 0;
     }
    }
    
    @keyframes pulse3 {
     to {
         transform: scale(1.2);
         opacity: 0;
     }
    }
    `,
    `
    .v-wrapper {
       position: relative;
       z-index: 2;
       width: 100%;
       height: 100px;
       display: flex;
       justify-content: center;
       align-items: center;
    }
    
    .v-bouncing-arrow {
        position: relative;
        top: 15px;
        left: 0%;
        height: 64px;
        margin: 0 12px;
        border: 3px solid white;
        background-color: #fff;
        width: 64px;
    }
    
    .v-bc1 {
        animation: 2.3s ease 0s normal none infinite running bounce;
    }
    
    @keyframes bounce { 
        0%, 20%, 50%, 80%, 100% {
            border-radius: 50%;
            transform: translateY(0);
        } 
        40% {transform: translateY(-60px) scale(0.7);
            border-radius: 50%;
        } 
        60% {transform: translateY(-33px);
            border-radius: 50%;
        } 
    } 
    
    .bounce { 
        animation-name: bounce; 
    }
    `
];
for (var i = 0; i <= propertiesLoad.length; i++) {
    if (document.querySelector(`.${propertiesLoad[i]}`) && !document.querySelector('style').innerText.includes(propertiesLoad[i])) {
        let styles = ` 
            .${propertiesLoad[i]} { 
                ${valuesLoad[i]}
            }`;
        document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
    }
}