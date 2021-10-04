let propertiesTransition = [
    'v-transition--1',
    'v-transition--2',
    'v-transition--3',
    'v-transition--4',
    'v-transition--5',
    'v-transition--6',
    'v-transition--7',
    'v-transition--8',
    'v-transition--9',
    'v-transition-1',
    'v-transition-2',
    'v-transition-3',
    'v-transition-4',
]
let valuesTransition = [
    'transition: 0.1s;',
    'transition: 0.2s;',
    'transition: 0.3s;',
    'transition: 0.4s;',
    'transition: 0.5s;',
    'transition: 0.6s;',
    'transition: 0.7s',
    'transition: 0.8s;',
    'transition: 0.9s;',
    'transition: 1s;',
    'transition: 2s;',
    'transition: 3s;',
    'transition: 4s;',
]
for (var i = 0; i <= propertiesTransition.length; i++) {
    if (document.querySelector(`.${propertiesTransition[i]}`) && !document.querySelector('style').innerText.includes(propertiesTransition[i])) {
        let styles = ` 
        @media screen and (min-width: 900px) and (max-width: 1920px) {
            .${propertiesTransition[i]} { 
                ${valuesTransition[i]}
            }
        }`;
        document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
    }
}
let propertiesTransition2 = [
    'mb_v-transition--1',
    'mb_v-transition--2',
    'mb_v-transition--3',
    'mb_v-transition--4',
    'mb_v-transition--5',
    'mb_v-transition--6',
    'mb_v-transition--7',
    'mb_v-transition--8',
    'mb_v-transition--9',
    'mb_v-transition-1',
    'mb_v-transition-2',
    'mb_v-transition-3',
    'mb_v-transition-4',
]
let valuesTransition2 = [
    'transition: 0.1s;',
    'transition: 0.2s;',
    'transition: 0.3s;',
    'transition: 0.4s;',
    'transition: 0.5s;',
    'transition: 0.6s;',
    'transition: 0.7s',
    'transition: 0.8s;',
    'transition: 0.9s;',
    'transition: 1s;',
    'transition: 2s;',
    'transition: 3s;',
    'transition: 4s;',
]
for (var i = 0; i <= propertiesTransition2.length; i++) {
    if (document.querySelector(`.${propertiesTransition2[i]}`) && !document.querySelector('style').innerText.includes(propertiesTransition2[i])) {
        let styles = ` 
        @media screen and (min-width: 320px) and (max-width: 600px){
            .${propertiesTransition2[i]} { 
                ${valuesTransition2[i]}
            }
        }`;
        document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
    }
}
let propertiesTransition3 = [
    'tb_v-transition--1',
    'tb_v-transition--2',
    'tb_v-transition--3',
    'tb_v-transition--4',
    'tb_v-transition--5',
    'tb_v-transition--6',
    'tb_v-transition--7',
    'tb_v-transition--8',
    'tb_v-transition--9',
    'tb_v-transition-1',
    'tb_v-transition-2',
    'tb_v-transition-3',
    'tb_v-transition-4',
]
let valuesTransition3 = [
    'transition: 0.1s;',
    'transition: 0.2s;',
    'transition: 0.3s;',
    'transition: 0.4s;',
    'transition: 0.5s;',
    'transition: 0.6s;',
    'transition: 0.7s',
    'transition: 0.8s;',
    'transition: 0.9s;',
    'transition: 1s;',
    'transition: 2s;',
    'transition: 3s;',
    'transition: 4s;',
]
for (var i = 0; i <= propertiesTransition3.length; i++) {
    if (document.querySelector(`.${propertiesTransition3[i]}`) && !document.querySelector('style').innerText.includes(propertiesTransition3[i])) {
        let styles = ` 
        @media screen and (min-width: 600px) and (max-width: 900px){
            .${propertiesTransition3[i]} { 
                ${valuesTransition3[i]}
            }
        }`;
        document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
    }
}
let propertiesTransition4 = [
    'pc_v-transition--1',
    'pc_v-transition--2',
    'pc_v-transition--3',
    'pc_v-transition--4',
    'pc_v-transition--5',
    'pc_v-transition--6',
    'pc_v-transition--7',
    'pc_v-transition--8',
    'pc_v-transition--9',
    'pc_v-transition-1',
    'pc_v-transition-2',
    'pc_v-transition-3',
    'pc_v-transition-4',
]
let valuesTransition4 = [
    'transition: 0.1s;',
    'transition: 0.2s;',
    'transition: 0.3s;',
    'transition: 0.4s;',
    'transition: 0.5s;',
    'transition: 0.6s;',
    'transition: 0.7s',
    'transition: 0.8s;',
    'transition: 0.9s;',
    'transition: 1s;',
    'transition: 2s;',
    'transition: 3s;',
    'transition: 4s;',
]
for (var i = 0; i <= propertiesTransition4.length; i++) {
    if (document.querySelector(`.${propertiesTransition4[i]}`) && !document.querySelector('style').innerText.includes(propertiesTransition4[i])) {
        let styles = ` 
        @media screen and (min-width: 1920px){
            .${propertiesTransition4[i]} { 
                ${valuesTransition4[i]}
            }
        }`;
        document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
    }
}