let propertiesTextShadow=["v-text-shadow-sm","v-text-shadow-md","v-text-shadow-lg","v-text-shadow-xl"],valuesTextShadow=["text-shadow: 2px 2px 2px rgb(199, 199, 199);","text-shadow: 3px 3px 3px rgb(197, 197, 197);","text-shadow: 3.5px 3.5px 2px rgb(197, 197, 197);","text-shadow: 4px 4px 2px rgb(173, 173, 173);"];for(var i=0;i<=propertiesTextShadow.length;i++)if(document.querySelector(`.${propertiesTextShadow[i]}`)&&!document.querySelector("style").innerText.includes(propertiesTextShadow[i])){let e=` \n            .${propertiesTextShadow[i]} { \n                ${valuesTextShadow[i]}\n            }\n            @media screen and (min-width: 900px) and (max-width: 1920px) {\n                .${propertiesTextShadow[i]} { \n                    ${valuesTextShadow[i]}\n                }\n            }`;document.getElementsByTagName("style")[0].appendChild(document.createTextNode(e))}let propertiesTextShadow2=["mb_v-text-shadow-sm","mb_v-text-shadow-md","mb_v-text-shadow-lg","mb_v-text-shadow-xl"],valuesTextShadow2=["text-shadow: 2px 2px 2px rgb(199, 199, 199);","text-shadow: 3px 3px 3px rgb(197, 197, 197);","text-shadow: 3.5px 3.5px 2px rgb(197, 197, 197);","text-shadow: 4px 4px 2px rgb(173, 173, 173);"];for(i=0;i<=propertiesTextShadow2.length;i++)if(document.querySelector(`.${propertiesTextShadow2[i]}`)&&!document.querySelector("style").innerText.includes(propertiesTextShadow2[i])){let e=` \n            .${propertiesTextShadow2[i]} { \n                ${valuesTextShadow2[i]}\n            }\n            @media screen and (min-width: 320px) and (max-width: 600px){\n                .${propertiesTextShadow2[i]} { \n                    ${valuesTextShadow2[i]}\n                }\n            }`;document.getElementsByTagName("style")[0].appendChild(document.createTextNode(e))}let propertiesTextShadow3=["tb_v-text-shadow-sm","tb_v-text-shadow-md","tb_v-text-shadow-lg","tb_v-text-shadow-xl"],valuesTextShadow3=["text-shadow: 2px 2px 2px rgb(199, 199, 199);","text-shadow: 3px 3px 3px rgb(197, 197, 197);","text-shadow: 3.5px 3.5px 2px rgb(197, 197, 197);","text-shadow: 4px 4px 2px rgb(173, 173, 173);"];for(i=0;i<=propertiesTextShadow3.length;i++)if(document.querySelector(`.${propertiesTextShadow3[i]}`)&&!document.querySelector("style").innerText.includes(propertiesTextShadow3[i])){let e=` \n            .${propertiesTextShadow3[i]} { \n                ${valuesTextShadow3[i]}\n            }\n            @media screen and (min-width: 600px) and (max-width: 900px){\n                .${propertiesTextShadow3[i]} { \n                    ${valuesTextShadow3[i]}\n                }\n            }`;document.getElementsByTagName("style")[0].appendChild(document.createTextNode(e))}let propertiesTextShadow4=["pc_v-text-shadow-sm","pc_v-text-shadow-md","pc_v-text-shadow-lg","pc_v-text-shadow-xl"],valuesTextShadow4=["text-shadow: 2px 2px 2px rgb(199, 199, 199);","text-shadow: 3px 3px 3px rgb(197, 197, 197);","text-shadow: 3.5px 3.5px 2px rgb(197, 197, 197);","text-shadow: 4px 4px 2px rgb(173, 173, 173);"];for(i=0;i<=propertiesTextShadow4.length;i++)if(document.querySelector(`.${propertiesTextShadow4[i]}`)&&!document.querySelector("style").innerText.includes(propertiesTextShadow4[i])){let e=` \n            .${propertiesTextShadow4[i]} { \n                ${valuesTextShadow4[i]}\n            }\n            @media screen and (min-width: 1920px){\n                .${propertiesTextShadow4[i]} { \n                    ${valuesTextShadow4[i]}\n                }\n            }`;document.getElementsByTagName("style")[0].appendChild(document.createTextNode(e))}