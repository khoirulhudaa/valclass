let propertiesBackgroundPosition = [
    'v-bg-post-center',
    'v-bg-post-top',
    'v-bg-post-left',
    'v-bg-post-right',
    'v-bg-post-bottom',
    'v-bg-post--1',
    'v-bg-post--2',
    'v-bg-post--3',
    'v-bg-post--4',
    'v-bg-post--full',
    'v-bg-post-0',
    'v-bg-post-1',
    'v-bg-post-2',
    'v-bg-post-3',
    'v-bg-post-4',
    'v-bg-post-full'
]
let valuesBackgroundPosition = [
    'background-position: center',
    'background-position: top',
    'background-position: left',
    'background-position: right',
    'background-position: bottom',
    'background-position: -20%',
    'background-position: -40%',
    'background-position: -60%',
    'background-position: -80%',
    'background-position: -100%',
    'background-position: 0%',
    'background-position: 20%',
    'background-position: 40%',
    'background-position: 60%',
    'background-position: 80%',
    'background-position: 100%',
]
for (var i = 0; i <= propertiesBackgroundPosition.length; i++) {
    if (document.querySelector(`.${propertiesBackgroundPosition[i]}`) && !document.querySelector('style').innerText.includes(propertiesBackgroundPosition[i])) {
        let styles = ` 
                .${propertiesBackgroundPosition[i]} { 
                    ${valuesBackgroundPosition[i]}
                }`;
        document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
    }
}