let propertiesOpacity=["v-opacity-0","v-opacity-1","v-opacity-2","v-opacity-3","v-opacity-4"],valuesOpacity=["opacity: 0%","opacity: 25%","opacity: 50%;","opacity: 75%;","opacity: 100%;"];for(var i=0;i<=propertiesOpacity.length;i++)if(document.querySelector(`.${propertiesOpacity[i]}`)&&!document.querySelector("style").innerText.includes(propertiesOpacity[i])){let e=` \n        .${propertiesOpacity[i]} { \n            ${valuesOpacity[i]}\n        }\n        @media screen and (min-width: 900px) and (max-width: 1920px) {\n            .${propertiesOpacity[i]} { \n                ${valuesOpacity[i]}\n            }\n        }`;document.getElementsByTagName("style")[0].appendChild(document.createTextNode(e))}let propertiesOpacity2=["mb_v-opacity-0","mb_v-opacity-1","mb_v-opacity-2","mb_v-opacity-3","mb_v-opacity-4"],valuesOpacity2=["opacity: 0%","opacity: 25%","opacity: 50%;","opacity: 75%;","opacity: 100%;"];for(i=0;i<=propertiesOpacity2.length;i++)if(document.querySelector(`.${propertiesOpacity2[i]}`)&&!document.querySelector("style").innerText.includes(propertiesOpacity2[i])){let e=` \n        .${propertiesOpacity2[i]} { \n            ${valuesOpacity2[i]}\n        }\n        @media screen and (min-width: 320px) and (max-width: 600px){\n            .${propertiesOpacity2[i]} { \n                ${valuesOpacity2[i]}\n            }\n        }`;document.getElementsByTagName("style")[0].appendChild(document.createTextNode(e))}let propertiesOpacity3=["tb_v-opacity-0","tb_v-opacity-1","tb_v-opacity-2","tb_v-opacity-3","tb_v-opacity-4"],valuesOpacity3=["opacity: 0%","opacity: 25%","opacity: 50%;","opacity: 75%;","opacity: 100%;"];for(i=0;i<=propertiesOpacity3.length;i++)if(document.querySelector(`.${propertiesOpacity3[i]}`)&&!document.querySelector("style").innerText.includes(propertiesOpacity3[i])){let e=` \n        .${propertiesOpacity3[i]} { \n            ${valuesOpacity3[i]}\n        }\n        @media screen and (min-width: 600px) and (max-width: 900px){\n            .${propertiesOpacity3[i]} { \n                ${valuesOpacity3[i]}\n            }\n        }`;document.getElementsByTagName("style")[0].appendChild(document.createTextNode(e))}let propertiesOpacity4=["pc_v-opacity-0","pc_v-opacity-1","pc_v-opacity-2","pc_v-opacity-3","pc_v-opacity-4"],valuesOpacity4=["opacity: 0%","opacity: 25%","opacity: 50%;","opacity: 75%;","opacity: 100%;"];for(i=0;i<=propertiesOpacity4.length;i++)if(document.querySelector(`.${propertiesOpacity4[i]}`)&&!document.querySelector("style").innerText.includes(propertiesOpacity4[i])){let e=` \n        .${propertiesOpacity4[i]} { \n            ${valuesOpacity4[i]}\n        }\n        @media screen and (min-width: 1920px){\n            .${propertiesOpacity4[i]} { \n                ${valuesOpacity4[i]}\n            }\n        }`;document.getElementsByTagName("style")[0].appendChild(document.createTextNode(e))}