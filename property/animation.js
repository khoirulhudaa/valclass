let propertiesAnimations = [
    'v-animation-none',
    'v-animation-spin',
    'v-animation-ping',
    'v-animation-pulse',
    'v-animation-bounce',
    'v-animation-typing-text'
]
let valuesAnimations = [
    'animation: none;',
    `animation: spin 1s linear infinite;`,
    `animation: ping 1s cubic-bezier(0, 0, 0.2, 1) infinite; `,
    `animation: pulse 1.6s cubic-bezier(0.4, 0, 0.6, 1) infinite;`,
    `animation: bounce 2s infinite ease-in;`,
    `animation: typing 10s steps(70, end) infinite;`
]
let animations = [
    ``,
    `
    @keyframes spin {
        from {
            transform: rotate(0deg);
        }
        to {
            transform: rotate(360deg);
        }
    }
    `,
    `@keyframes ping {
        75%, 100% {
            transform: scale(2);
         opacity: 0;
        }
    }`,
    `@keyframes pulse {
        0%, 100% {
            opacity: 1;
        }
        50% {
            opacity: 0.5;
        }
    }`,
    `@keyframes bounce { 
        0%, 20%, 50%, 80%, 100% {
            transform: translateY(0);
        } 
        40% {
            transform: translateY(-30px);
        } 
        60% {
            transform: translateY(-15px);
        } 
    }`,
    `@keyframes typing {
        0% {
           width: 0%;
        }
        100% {
           width: 100%;
        }
    }`
]
for (var i = 0; i <= propertiesAnimations.length; i++) {
    if (document.querySelector(`.${propertiesAnimations[i]}`) && !document.querySelector('style').innerText.includes(propertiesAnimations[i])) {
        let styles = ` 
                .${propertiesAnimations[i]} { 
                    ${valuesAnimations[i]}
                }
                ${animations[i]}`;
        document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
    }
}