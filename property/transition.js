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
            .${propertiesTransition[i]} { 
                ${valuesTransition[i]}
            }`;
        document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
    }
}