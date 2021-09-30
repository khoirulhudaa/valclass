let propertiesFontsFamily = [
    "v-font-roboto",
    "v-font-raleway",
    "v-font-poppins",
    "v-font-montserrat",
    "v-font-lobster",
    "v-font-anton",
    "v-font-barcode",
    "v-font-oi",
    "v-font-ubuntu",
    "v-font-bebas-neue",
    "v-font-nunito",
    "v-font-monoton",
    "v-font-quintessential",
    "v-font-pacifico"
]
valuesFontsFamily = [
    "https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap",
    "https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap",
    "https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap",
    "https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap",
    "https://fonts.googleapis.com/css2?family=Lobster&display=swap",
    "https://fonts.googleapis.com/css2?family=Anton&display=swap",
    "https://fonts.googleapis.com/css2?family=Libre+Barcode+128&display=swap",
    "https://fonts.googleapis.com/css2?family=Oi&display=swap",
    "https://fonts.googleapis.com/css2?family=Ubuntu:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap",
    "https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap",
    "https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,200;0,300;0,400;0,600;0,700;0,800;0,900;1,200;1,400;1,600;1,700;1,800;1,900&display=swap",
    "https://fonts.googleapis.com/css2?family=Monoton&display=swap",
    "https://fonts.googleapis.com/css2?family=Quintessential&display=swap",
    "https://fonts.googleapis.com/css2?family=Pacifico&display=swap"
]
fonts = [
    "font-family: 'Anton', sans-serif;",
    "font-family: 'Raleway', sans-serif;",
    "font-family: 'Poppins', sans-serif;",
    "font-family: 'Montserrat', sans-serif;",
    "font-family: 'Lobster', cursive;",
    "font-family: 'Anton', sans-serif;",
    "font-family: 'Libre Barcode 128', cursive;",
    "font-family: 'Oi', cursive;",
    "font-family: 'Ubuntu', sans-serif;",
    "font-family: 'Bebas Neue', cursive;",
    "font-family: 'Nunito', sans-serif;",
    "font-family: 'Monoton', cursive;",
    "font-family: 'Quintessential', cursive;",
    "font-family: 'Pacifico', cursive;"
]
for(var i=0;i<=propertiesFontsFamily.length;i++)
if(document.querySelector(`.${propertiesFontsFamily[i]}`) && !document.querySelector("style").innerText.includes(propertiesFontsFamily[i])) {

    let style = `.${propertiesFontsFamily[i]} { 
        ${fonts[i]}
    }`;
    
    document.getElementsByTagName("style")[0].appendChild(document.createTextNode(style))

    link = document.createElement("link")
    head = document.getElementsByTagName("head")[0]

    tmp = link ;
    tmp.href = valuesFontsFamily[i]
    link.rel = "stylesheet"
    head.appendChild(tmp)
}