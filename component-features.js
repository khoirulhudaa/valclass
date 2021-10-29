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
   "v-font-pacifico",
   "v-font-volkhov",
   "v-font-open-sans",
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
   "https://fonts.googleapis.com/css2?family=Pacifico&display=swap",
   "https://fonts.googleapis.com/css2?family=Volkhov:ital,wght@0,400;0,700;1,400;1,700&display=swap",
   "https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700;1,800&display=swap",
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
   "font-family: 'Pacifico', cursive;",
   "font-family: 'Volkhov', serif;",
   "font-family: 'Open Sans', sans-serif;",
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

let nameIcons = [
    'v-home-icon',
    'v-cog-icon',
    'v-car-icon',
    'v-chart-line-icon',
    'v-thumbs-up-icon',
    'v-mobile-icon',
    'v-laptop-icon',
    'v-desktop-icon',
    'v-bars-icon',
    'v-comments-icon',
    'v-tachometer-alt-icon',
    'v-rocket-icon',
    'v-bell-icon',
    'v-table-icon',
    'v-pen-icon',
    'v-thumbtack-icon',
    'v-trophy-icon',
    'v-modal-icon',
    'v-calendar-alt-icon',
    'v-chart-pie-icon',
    'v-map-marked-alt-icon',
    'v-dollar-signin-icon',
    'v-plus-circle-icon',
    'v-search-icon',
    'v-folder-plus-icon',
    'v-cart-plus-icon',
    'v-envelope-icon',
    'v-paper-plane-icon',
    'v-smile-icon',
    'v-star-icon',
    'v-facebook-icon',
    'v-whatsapp-icon',
    'v-instagram-icon',
    'v-discord-icon',
    'v-github-icon',
    'v-youtube-icon',
    'v-dribbble-icon',
    'v-behance-icon',
    'v-figma-icon',
    'v-undo-alt-icon',
    'v-share-icon',
    'v-sign-out-icon',
    'v-sign-in-icon',
    'v-keyboard-icon',
    'v-key-icon',
    'v-backspace-icon',
    'v-trash-icon',
    'v-moon-icon',
    'v-lightbulb-icon',
    'v-comment-icon',
    'v-icons-icon',
    'v-wrench-icon',
    'v-utensils-icon',
    'v-hamburger-icon',
    'v-brain-icon',
    'v-align-left-icon',
    'v-address-card-icon',
    'v-angle-down-icon',
    'v-angle-up-icon',
    'v-angle-left-icon',
    'v-angle-right-icon',
    'v-arrow-down-icon',
    'v-arrow-up-icon',
    'v-arrow-left-icon',
    'v-arrow-right-icon',
    'v-hospital-icon',
    'v-hotel-icon',
    'v-stethoscope-icon',
    'v-tablets-icon',
    'v-capsules-icon',
    'v-prescription-bottle-icon',
    'v-cloud-upload-icon',
    'v-cloud-download-icon',
    'v-cloud-showers-heavy-icon',
    'v-cloud-sun-icon',
    'v-cloud-moon-icon',
    'v-flag-icon',
    'v-volume-up-icon',
    'v-html5-icon',
    'v-css3-icon',
    'v-js-icon',
    'v-react-icon',
    'v-laravel-icon',
    'v-node-icon',
    'v-python-icon',
    'v-android-icon',
    'v-apple-icon',
    'v-hourglass-icon',
    'v-skull-crossbones-icon',
    'v-crown-icon',
    'v-compas-icon',
    'v-coffee-icon',
    'v-crosshairs-icon',
    'v-eye-icon',
    'v-globe-asia-icon',
    'v-gem-icon',
    'v-book-icon',
    'v-object-ungroup-icon',
    'v-truck-icon',
    'v-tree-icon',
    'v-plane-icon',
    'v-traffic-light-icon',
    'v-tv-icon',
    'v-tty-icon',
    'v-toggle-on-icon',
    'v-tint-icon',
    'v-twitter-icon',
    'v-tired-icon',
    'v-times-circle-icon',
    'v-times-icon',
    'v-tiktok-icon',
    'v-toilet-paper-icon',
    'v-toilet-icon',
    'v-tshirt-icon',
    'v-twitch-icon',
    'v-bolt-icon',
    'v-algolia-icon',
    'v-ambulance-icon',
]
let valueIcons = [
    "fas fa-home",
    "fas fa-cog",
    "fas fa-car",
    "fas fa-chart-line",
    "fas fa-thumbs-up",
    "fas fa-mobile",
    "fas fa-laptop",
    "fas fa-desktop",
    "fas fa-bars",
    "fas fa-comments",
    "fas fa-tachometer-alt",
    "fas fa-rocket",
    "fas fa-bell",
    "fas fa-table",
    "fas fa-pen",
    "fas fa-thumbtack",
    "fas fa-trophy",
    "fas fa-medal",
    "fas fa-calendar-alt",
    "fas fa-chart-pie",
    "fas fa-map-marked-alt",
    "fas fa-dollar-sign",
    "fas fa-plus-circle",
    "fas fa-search",
    "fas fa-folder-plus",
    "fas fa-cart-plus",
    "fas fa-envelope",
    "fas fa-paper-plane",
    "fas fa-smile",
    "fas fa-star",
    "fab fa-facebook",
    "fab fa-whatsapp",
    "fab fa-instagram",
    "fab fa-discord",
    "fab fa-github",
    "fab fa-youtube",
    "fab fa-dribbble",
    "fab fa-behance",
    "fab fa-figma",
    "fas fa-undo-alt",
    "fas fa-share",
    "fas fa-sign-out-alt",
    "fas fa-sign-in-alt",
    "fas fa-keyboard",
    "fas fa-key",
    "fas fa-backspace",
    "fas fa-trash",
    "fas fa-moon",
    "fas fa-lightbulb",
    "fas fa-comment",
    "fas fa-icons",
    "fas fa-wrench",
    "fas fa-utensils",
    "fas fa-hamburger",
    "fas fa-brain",
    "fas fa-align-left",
    "fas fa-address-card",
    "fas fa-angle-down",
    "fas fa-angle-up",
    "fas fa-angle-left",
    "fas fa-angle-right",
    "fas fa-arrow-down",
    "fas fa-arrow-up",
    "fas fa-arrow-left",
    "fas fa-arrow-right",
    "fas fa-hospital",
    "fas fa-hotel",
    "fas fa-stethoscope",
    "fas fa-tablets",
    "fas fa-capsules",
    "fas fa-prescription-bottle-alt",
    "fas fa-cloud-upload-alt",
    "fas fa-cloud-download-alt",
    "fas fa-cloud-showers-heavy",
    "fas fa-cloud-sun",
    "fas fa-cloud-moon",
    "fas fa-flag",
    "fas fa-volume-up",
    "fab fa-html5",
    "fab fa-css3",
    "fab fa-js",
    "fab fa-react",
    "fab fa-laravel",
    "fab fa-node",
    "fab fa-python",
    "fab fa-android",
    "fab fa-apple",
    "fas fa-hourglass",
    "fas fa-skull-crossbones",
    "fas fa-crown",
    "fas fa-compass",
    "fas fa-coffee",
    "fas fa-crosshairs",
    "fas fa-eye",
    "fas fa-globe-asia",
    "fas fa-gem",
    "fas fa-book",
    "fas fa-object-ungroup",
    "fas fa-truck",
    "fas fa-tree",
    "fas fa-plane",
    "fas fa-traffic-light",
    "fas fa-tv",
    "fas fa-tty",
    "fas fa-toggle-on",
    "fas fa-tint",
    "fab fa-twitter",
    "fas fa-tired",
    "fas fa-times-circle",
    "fas fa-times",
    "fab fa-tiktok",
    "fas fa-toilet-paper",
    "fas fa-toilet",
    "fas fa-tshirt",
    "fab fa-twitch",
    "fas fa-bolt",
    "fab fa-algolia",
    "fas fa-ambulance",
]

for (let i = 0; i <= nameIcons.length; i++) {
    
    let element = document.getElementsByClassName(`${nameIcons[i]}`);
    
    for(let x = 0; x < element.length; x++) {
        console.log('ok :',element)
        if (document.getElementsByClassName(`${nameIcons[i]}`)) {
            element[x].className = element[x].className.replace(`${nameIcons[i]}`, `${valueIcons[i]}`);
        }
    }
   

for (let i = 0; i <= nameIcons.length - 1; i++) {
if (document.querySelector(`.${nameIcons[i]}`)) {
      document.querySelector(`.${nameIcons[i]}`).className = document.querySelector(`.${nameIcons[i]}`).className.replace(`${nameIcons[i]}`, `${valueIcons[i]}`);
   }
}
}

link = document.createElement("link")
head = document.getElementsByTagName("head")[0]
tmp = link ;
tmp.href ='https://cdn.jsdelivr.net/gh/valclassdevelop/valclass/icons/css/all.min.css'
link.rel = "stylesheet"
head.appendChild(tmp)

let propertiesComponent = [
   'v-btn',
   'v-btn-dark',
   'v-btn-light',
   'v-btn-danger',
   'v-btn-primary',
   'v-btn-info',
   'v-btn-smooth',
   'v-btn-secondary',
   'v-btn-warning',
   'v-btn-green',
   'v-table-hovered',
   'v-table-striped',
   'v-table-head-dark',
   'v-hero',
   'v-navbar',
   'v-navbar-fixed',
   'v-alert-info',
   'v-alert-danger',
   'v-alert-warning',
   'v-alert-primary',
   'v-alert-secondary',
   'v-alert-dark',
   'v-alert-light',
   'v-alert-smooth',
   'v-alert-green',
   'v-modal',
   'v-modal-info',
   'v-modal-danger',
   'v-modal-warning',
   'v-modal-primary',
   'v-modal-secondary',
   'v-modal-dark',
   'v-modal-light',
   'v-modal-smooth',
   'v-modal-green',
   'v-card',
   'v-card-2',
   'v-form',
   'v-slider',
 ]
 
 let valueComponent = [
   `.v-btn {
        position: relative;
        top: 0;
        width: max-content;
        height: 40px;
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        border-radius: 3px;
        cursor: pointer;
        margin: 10px;
        padding: 5px 15px;
        background-color: grey;
        font-weight: 500;
        color: white;
        border: none;
        font-size: 1.5em;
        outline: none;
        box-shadow: 2px 2px 10px rgb(201, 201, 201);
        transition: 0.2s;
        filter: brightness(100%)
    }
    
    .v-btn:active {
        top: -5px;
        transition: 0.2s;
    }
    
    .v-btn:hover {
        filter: brightness(85%)
    }`,
   `.v-btn-dark {
        position: relative;
        top: 0;
        width: max-content;
        height: 40px;
        display: flex;
        justify-content: center;
        align-items: center;
        font-weight: 500;
        text-align: center;
        border-radius: 3px;
        cursor: pointer;
        margin: 10px;
        padding: 5px 15px;
        background-color: rgb(70, 70, 70);
        font-weight: 500;
        color: white;
        border: none;
        font-size: 1.5em;
        outline: none;
        box-shadow: 2px 2px 10px rgb(201, 201, 201);
        transition: 0.2s;
        filter: brightness(100%)
    }
    
    .v-btn-dark:active {
        top: -5px;
        transition: 0.2s;
        
    }
    
    .v-btn-dark:hover {
        filter: brightness(85%)
    }`,
   `.v-btn-light {
        position: relative;
        top: 0;
        width: max-content;
        height: 40px;
        display: flex;
        justify-content: center;
        align-items: center;
        font-weight: 500;
        text-align: center;
        border-radius: 3px;
        cursor: pointer;
        margin: 10px;
        padding: 5px 15px;
        background-color: rgb(238, 238, 238);
        font-weight: 500;
        color: rgb(39, 39, 39);
        border: none;
        font-size: 1.5em;
        outline: none;
        box-shadow: 2px 2px 10px rgb(201, 201, 201);
        transition: 0.2s;
        filter: brightness(100%)
    }
    
    .v-btn-light:active {
        top: -5px;
        transition: 0.2s;
        
    }
    
    .v-btn-light:hover {
        filter: brightness(85%)
    }`,
   `.v-btn-danger {
        position: relative;
        top: 0;
        width: max-content;
        height: 40px;
        display: flex;
        justify-content: center;
        align-items: center;
        font-weight: 500;
        text-align: center;
        border-radius: 3px;
        cursor: pointer;
        margin: 10px;
        padding: 5px 15px;
        background-color: rgb(255, 76, 44);
        font-weight: 500;
        color: white;
        border: none;
        font-size: 1.5em;
        outline: none;
        box-shadow: 2px 2px 10px rgb(201, 201, 201);
        transition: 0.2s;
        filter: brightness(100%)
    }
    
    .v-btn-danger:active {
        top: -5px;
        transition: 0.2s;
        
    }
    
    .v-btn-danger:hover {
        filter: brightness(85%)
    }`,
   `.v-btn-primary {
        position: relative;
        top: 0;
        width: max-content;
        height: 40px;
        display: flex;
        justify-content: center;
        align-items: center;
        font-weight: 500;
        text-align: center;
        border-radius: 3px;
        cursor: pointer;
        margin: 10px;
        padding: 5px 15px;
        background-color: rgb(42, 131, 248);
        font-weight: 500;
        color: white;
        border: none;
        font-size: 1.5em;
        outline: none;
        box-shadow: 2px 2px 10px rgb(201, 201, 201);
        transition: 0.2s;
        filter: brightness(100%)
    }
    
    .v-btn-primary:active {
        top: -5px;
        transition: 0.2s;
    }
    
    .v-btn-primary:hover {
        filter: brightness(85%)
    }`,
   `.v-btn-info {
        position: relative;
        top: 0;
        width: max-content;
        height: 40px;
        display: flex;
        justify-content: center;
        align-items: center;
        font-weight: 500;
        text-align: center;
        border-radius: 3px;
        cursor: pointer;
        margin: 10px;
        padding: 5px 15px;
        background-color: rgb(2, 168, 245);
        font-weight: 500;
        color: white;
        border: none;
        font-size: 1.5em;
        outline: none;
        box-shadow: 2px 2px 10px rgb(201, 201, 201);
        transition: 0.2s;
        filter: brightness(100%)
    }
    
    .v-btn-info:active {
        top: -5px;
        transition: 0.2s;
        
    }
    
    .v-btn-info:hover {
        filter: brightness(85%)
    }`,
   `.v-btn-smooth {
        position: relative;
        top: 0;
        width: max-content;
        height: 40px;
        display: flex;
        justify-content: center;
        align-items: center;
        font-weight: 500;
        text-align: center;
        border-radius: 3px;
        cursor: pointer;
        margin: 10px;
        padding: 5px 15px;
        background-color: rgb(255, 242, 242);
        font-weight: 500;
        color: rgb(39, 39, 39);
        border: none;
        font-size: 1.5em;
        outline: none;
        box-shadow: 2px 2px 10px rgb(201, 201, 201);
        transition: 0.2s;
        filter: brightness(100%)
    }
    
    .v-btn-smooth:active {
        top: -5px;
        transition: 0.2s;
        
    }
    
    .v-btn-smooth:hover {
        filter: brightness(85%)
    }`,
   `.v-btn-secondary {
        position: relative;
        top: 0;
        width: max-content;
        height: 40px;
        display: flex;
        justify-content: center;
        align-items: center;
        font-weight: 500;
        text-align: center;
        border-radius: 3px;
        cursor: pointer;
        margin: 10px;
        padding: 5px 15px;
        background-color: rgb(141, 141, 141);
        font-weight: 500;
        color: white;
        border: none;
        font-size: 1.5em;
        outline: none;
        box-shadow: 2px 2px 10px rgb(201, 201, 201);
        transition: 0.2s;
        filter: brightness(100%)
    }
    
    .v-btn-secondary:active {
        top: -5px;
        transition: 0.2s;
        
    }
    
    .v-btn-secondary:hover {
        filter: brightness(85%)
    }`,
   `.v-btn-warning {
        position: relative;
        top: 0;
        width: max-content;
        height: 40px;
        display: flex;
        justify-content: center;
        align-items: center;
        font-weight: 500;
        text-align: center;
        border-radius: 3px;
        cursor: pointer;
        margin: 10px;
        padding: 5px 15px;
        background-color: rgb(253, 207, 0);
        font-weight: 500;
        color: white;
        border: none;
        font-size: 1.5em;
        outline: none;
        box-shadow: 2px 2px 10px rgb(201, 201, 201);
        transition: 0.2s;
        filter: brightness(100%)
    }
    
    .v-btn-warning:active {
        top: -5px;
        transition: 0.2s;
        
    }
    
    .v-btn-warning:hover {
        filter: brightness(85%)
    }`,
   `.v-btn-green {
        position: relative;
        top: 0;
        width: max-content;
        height: 40px;
        display: flex;
        justify-content: center;
        align-items: center;
        font-weight: 500;
        text-align: center;
        border-radius: 3px;
        cursor: pointer;
        margin: 10px;
        padding: 5px 15px;
        background-color: #0de982;
        font-weight: 500;
        color: white;
        border: none;
        font-size: 1.5em;
        outline: none;
        box-shadow: 2px 2px 10px rgb(201, 201, 201);
        transition: 0.2s;
        filter: brightness(100%)
    }
    
    .v-btn-green:active {
        top: -5px;
        transition: 0.2s;
        
    }
    
    .v-btn-green:hover {
        filter: brightness(85%)
    }`,
   `table {
        margin: auto;
        font-family: "Lucida Sans Unicode", "Lucida Grande", "Segoe Ui";
        font-size: 12px;
        width: 100vw;
        text-align: center;
     }
 
     .v-table-hovered {
        border-collapse: collapse;
        table-layout: auto;
        font-size: 15px;
     }
     
     .v-table-hovered th, 
     .v-table-hovered td {
        border-bottom: 1px solid rgb(221, 221, 221);
        padding: 7px 17px;
     }
 
     caption {
        caption-side: top;
        margin-bottom: 10px;
     }
 
     .v-table-hovered thead {
        color: black;
        border-color: #6ea1cc !important;
     }
     
     .v-table-hovered tbody td {
        color: #353535;
     }
     
     .v-table-hovered tbody tr:hover th,
     .v-table-hovered tbody tr:hover td {
        background-color: rgb(236, 236, 236);
        opacity: 0.9;
        transition: all .2s;
     }`,
   `
     table {
        margin: auto;
        font-family: "Lucida Sans Unicode", "Lucida Grande", "Segoe Ui";
        font-size: 12px;
        width: 100vw;
        text-align: center;
     }
 
     .v-table-striped {
      border-collapse: collapse;
      table-layout: auto;
      font-size: 15px;
   }
   
   .v-table-striped th, 
   .v-table-striped td {
      border-bottom: 1px solid rgb(221, 221, 221);
      padding: 7px 17px;
   }
  
   caption {
      caption-side: top;
      margin-bottom: 10px;
   }
   
   .v-table-striped thead {
      color: black;
      border-color: #6ea1cc !important;
   }
   
   .v-table-striped tbody tr:nth-child(odd) td {
      background-color: #dddddd;
   }
  
   .v-table-striped tbody td {
      color: #353535;
   }`,
   `
     table {
        margin: auto;
        font-family: "Lucida Sans Unicode", "Lucida Grande", "Segoe Ui";
        font-size: 12px;
        width: 100vw;
        text-align: center;
     }
 
     .v-table-head-dark {
        border-collapse: collapse;
        table-layout: auto;
        font-size: 15px;
     }
     
     thead, th {
        background-color: black;
        color: white;
        padding: 9px 17px;
     }
     
     .v-table-head-dark td {
        border-bottom: 1px solid rgb(221, 221, 221);
        padding: 7px 17px;
     }
 
     caption {
        caption-side: top;
        margin-bottom: 10px;
     }
     
     .v-table-head-dark thead {
        color: black;
        border-color: #6ea1cc !important;
     }
    
     .v-table-head-dark tbody td {
        color: #353535;
     }`,
     `
     .v-hero {
      position: relative;
      max-width: 100vw;
      min-height: 280px;
      padding: 40px;
      background-color: rgb(253, 207, 0);
   }
   
   .v-hero p {
      width: 80%;
      font-size: 18px;
      color: white;
      margin-left: 0px;
   }
   
   .v-hero h1 {
      margin-top: 30px;
      font-size: 55px;
      margin-left: 0px;
      color: white;
   }
   
   .v-hero button {
      position: relative;
      left: -10px;
      top: 0;
      width: auto;
      height: auto;
      font-weight: 500;
      text-align: center;
      background-color: rgb(238, 238, 238);
      border-radius: 3px;
      border-radius: 30px;
      cursor: pointer;
      margin: 10px 10px 10px 10px;
      padding: 7px 15px;
      font-weight: 500;
      color: rgb(0, 0, 0);
      border: none;
      font-size: 1.3em;
      border: none;
      outline: none;
      box-shadow: 2px 2px 10px rgba(92, 92, 92, 0.281);
      transition: 0.2s;
   }`,
   `
     .v-navbar {
       position: relative;
       z-index: 999;
       display: flex;
       font-family:sans-serif;
       justify-content: space-around;
       height: 64px;
       align-items: center;
       transition: 0.4s;
       color: rgb(255, 255, 255);
   }
   
   .v-navbar h3 {
      align-items: center;
   }
   
   .v-brand {
     position: relative;
     top: 0px;
 }
 
    .v-navbar ul {
       display: flex;
       transition: 0.4s;
       justify-content: space-between;
       list-style: none;
       align-items: center;
       width: 40%;
   }
 
   .v-navbar ul li a:hover {
       filter: brightness(90%);
   }
 
   .v-navbar ul li a {
       color: rgb(255, 255, 255);
       text-decoration: none;
   }
 
   .v-navbar li {
       margin-top: 10px;
   }
   
   .v-btn-toggle {
       position: relative;
       display: flex;
       z-index: 2;
       flex-direction: column;
       cursor: pointer;
       height: 23px;
       justify-content: space-between;
       display: none;
   }
   
   .v-btn-toggle:hover {
      transition: 0.5s;
      transform: scale(0.97);
   }
   
   .v-btn-toggle span {
      width: 30px;
      height: 3px;
      background-color: rgb(255, 255, 255);
      border-radius: 10px;
   }
   
   .v-btn-toggle input {
      margin-top: 0px;
      margin-left: 0px;
      opacity: 0;
      width: 30px;
      height: 24px;
      position: absolute;
      z-index: 4;
   }
   
   .v-navbar.show {
    transform: translateX(0%);
    right: 0;
    height: max-content;
    opacity: 1;
    transition: 0.4s linear;
 }
 
   .v-navbar .v-btn-toggle:active {
       transform: rotate(360deg);
   }
 
   .v-navbar input:checked ~ span:nth-child(2) {
       transform-origin: 0 0;
       transform: rotate(45deg) translate(1px, -2px);
   }
 
    .v-navbar input:checked ~ span:nth-child(3) {
       transform: scale(0);
    }
 
    .v-navbar input:checked ~ span:nth-child(4) {
       transform-origin: 0 0;
       transform: rotate(-45deg);
     }
   
   
   /* tablet */
   @media screen and (max-width: 768px) {
      .v-navbar ul {
         width: 100%;
      }
   }
   
   /* mobile */
   @media screen and (max-width: 576px) {
     .v-navbar {
         display: block;
         height: 70px;
         overflow: hidden;
         transition: 0.4s;
     }
 
    .v-btn-toggle {
       display: flex;
    }
    
    .v-navbar ul {
       position: relative;
       flex-direction: column;
       display: block;
       z-index: 1;
       top: 28px;
       transition: 0.4s;
       right: 0;
       width: 100%;
       align-items: left;
       opacity: 1;
       padding: 10px 25px 25px 25px;
       height: max-content;
       /* justify-content: space-evenly; */
       transition: 0.4s ease;
    }
 
    .v-navbar ul li {
        margin: 0 0 20px 0;
    }
 
    .v-brand {
        position: relative;
        top: 5px;
        left: 20px;
    }
        
    .v-btn-toggle {
        position: absolute;
        display: flex;
        z-index: 2;
        flex-direction: column;
        cursor: pointer;
        height: 23px;
        top: 20px;
        right: 40px;
        justify-content: space-between;
        transition: 0.5s;
    }
    
    .v-btn-toggle:hover {
        transition: 0.5s;
        transform: scale(0.97);
    }
    
    .v-btn-toggle span {
        width: 30px;
        height: 3px;
        background-color: rgb(255, 255, 255);
        border-radius: 10px;
    }
    
    .v-btn-toggle input {
        margin-top: 0px;
        margin-left: 0px;
        opacity: 0;
        width: 30px;
        height: 24px;
        position: absolute;
        z-index: 4;
    }
 
 }`,
   `
     .v-navbar-fixed {
       position: fixed;
       z-index: 999;
       width: 100vw;
       display: flex;
       font-family:sans-serif;
       justify-content: space-around;
       height: 64px;
       align-items: center;
       transition: 0.4s;
       color: rgb(255, 255, 255);
   }
   
   .v-navbar-fixed h3 {
      align-items: center;
   }
   
   .v-brand {
     position: relative;
     top: 0px;
 }
 
    .v-navbar-fixed ul {
       display: flex;
       transition: 0.4s;
       justify-content: space-between;
       list-style: none;
       align-items: center;
       width: 40%;
   }
 
   .v-navbar-fixed ul li a:hover {
       filter: brightness(90%);
   }
 
   .v-navbar-fixed ul li a {
       color: rgb(255, 255, 255);
       text-decoration: none;
   }
 
   .v-navbar-fixed li {
       margin-top: 10px;
   }
   
   .v-btn-toggle {
       position: relative;
       display: flex;
       z-index: 2;
       flex-direction: column;
       cursor: pointer;
       height: 23px;
       justify-content: space-between;
       display: none;
   }
   
   .v-btn-toggle:hover {
      transition: 0.5s;
      transform: scale(0.97);
   }
   
   .v-btn-toggle span {
      width: 30px;
      height: 3px;
      background-color: rgb(255, 255, 255);
      border-radius: 10px;
   }
   
   .v-btn-toggle input {
      margin-top: 0px;
      margin-left: 0px;
      opacity: 0;
      width: 30px;
      height: 24px;
      position: absolute;
      z-index: 4;
   }
   
   .v-navbar-fixed.show {
    transform: translateX(0%);
    right: 0;
    height: max-content;
    opacity: 1;
    transition: 0.4s linear;
 }
 
   .v-navbar-fixed .v-btn-toggle:active {
       transform: rotate(360deg);
   }
 
   .v-navbar-fixed input:checked ~ span:nth-child(2) {
       transform-origin: 0 0;
       transform: rotate(45deg) translate(1px, -2px);
   }
 
    .v-navbar-fixed input:checked ~ span:nth-child(3) {
       transform: scale(0);
    }
 
    .v-navbar-fixed input:checked ~ span:nth-child(4) {
       transform-origin: 0 0;
       transform: rotate(-45deg);
     }
   
   
   /* tablet */
   @media screen and (max-width: 768px) {
      .v-navbar-fixed ul {
         width: 100%;
      }
   }
   
   /* mobile */
   @media screen and (max-width: 576px) {
     .v-navbar-fixed {
         display: block;
         height: 70px;
         overflow: hidden;
         transition: 0.4s;
     }
 
    .v-btn-toggle {
       display: flex;
    }
    
    .v-navbar-fixed ul {
       position: relative;
       flex-direction: column;
       display: block;
       z-index: 1;
       top: 28px;
       transition: 0.4s;
       right: 0;
       width: 100%;
       align-items: left;
       opacity: 1;
       padding: 10px 25px 25px 25px;
       height: max-content;
       /* justify-content: space-evenly; */
       transition: 0.4s ease;
    }
 
    .v-navbar-fixed ul li {
        margin: 0 0 20px 0;
    }
 
    .v-brand {
        position: relative;
        top: 5px;
        left: 20px;
    }
        
    .v-btn-toggle {
        position: absolute;
        display: flex;
        z-index: 2;
        flex-direction: column;
        cursor: pointer;
        height: 23px;
        top: 20px;
        right: 40px;
        justify-content: space-between;
        transition: 0.5s;
    }
    
    .v-btn-toggle:hover {
        transition: 0.5s;
        transform: scale(0.97);
    }
    
    .v-btn-toggle span {
        width: 30px;
        height: 3px;
        background-color: rgb(255, 255, 255);
        border-radius: 10px;
    }
    
    .v-btn-toggle input {
        margin-top: 0px;
        margin-left: 0px;
        opacity: 0;
        width: 30px;
        height: 24px;
        position: absolute;
        z-index: 4;
    }
 
 }`,
   `.v-alert-info {
      position: fixed;
      top: 0;
      left: 0;
      width: 100vw;
      color: rgb(202, 234, 255);
      display: flex;
      height: 64px;
      padding-left: 20px;
      align-items: center;
      z-index: 999;
      background-color: rgb(113, 196, 252);
   }`,
   `.v-alert-danger {
      position: fixed;
      top: 0;
      left: 0;
      width: 100vw;
      color: rgb(255, 202, 202);
      display: flex;
      height: 64px;
      padding-left: 20px;
      align-items: center;
      z-index: 999;
      background-color: rgb(252, 113, 113);
   }`,
   `.v-alert-warning {
      position: fixed;
      top: 0;
      left: 0;
      width: 100vw;
      color: rgb(255, 249, 230);
      display: flex;
      height: 64px;
      padding-left: 20px;
      align-items: center;
      z-index: 999;
      background-color: rgb(252, 230, 104);
   }`,
   `.v-alert-primary {
      position: fixed;
      top: 0;
      left: 0;
      width: 100vw;
      color: rgb(202, 213, 250);
      display: flex;
      height: 64px;
      padding-left: 20px;
      align-items: center;
      z-index: 999;
      background-color: rgb(104, 151, 252);
   }`,
   `.v-alert-secondary {
      position: fixed;
      top: 0;
      left: 0;
      width: 100vw;
      color: rgb(224, 224, 224);
      display: flex;
      height: 64px;
      padding-left: 20px;
      align-items: center;
      z-index: 999;
      background-color: rgb(128, 128, 128);
   }`,
   `.v-alert-dark {
      position: fixed;
      top: 0;
      left: 0;
      width: 100vw;
      color: rgb(224, 224, 224);
      display: flex;
      height: 64px;
      padding-left: 20px;
      align-items: center;
      z-index: 999;
      background-color: rgb(61, 61, 61);
   }`,
   `.v-alert-light {
      position: fixed;
      top: 0;
      left: 0;
      width: 100vw;
      color: rgb(255, 255, 255);
      display: flex;
      height: 64px;
      padding-left: 20px;
      align-items: center;
      z-index: 999;
      background-color: rgb(231, 231, 231);
   }`,
   `.v-alert-smooth {
      position: fixed;
      top: 0;
      left: 0;
      width: 100vw;
      color: rgb(165, 165, 165);
      display: flex;
      height: 64px;
      padding-left: 20px;
      align-items: center;
      z-index: 999;
      background-color: rgb(255, 236, 236);
   }`,
   `.v-alert-green {
      position: fixed;
      top: 0;
      left: 0;
      width: 100vw;
      color: rgb(212, 255, 246);
      display: flex;
      height: 64px;
      padding-left: 20px;
      align-items: center;
      z-index: 999;
      background-color: rgb(14, 253, 201);
   }`,
   `.v-modal {
      position: fixed;
      top: 0;
      left: 0;
      padding: 0;
      width: 100vw;
      z-index: 99999;
      height: 100vh;
      display: flex;
      justify-content: center;
      align-items: center;
   }
   .modal::before {
      position: absolute;
      top: 0;
      left: 0;
      content: '';
      z-index: 1;
      left: 0;
      width: 100vw;
      height: 100vh;
      background: #000;
      opacity: 0.6;
   }
 
   .v-modal h2 {
      font-weight: normal;
   }
   
   .v-modal-content {
      position: absolute;
      top: 10vh;
      width: 500px;
      min-height: 250px;;
      overflow: hidden;
      border-radius: 8px;
      opacity: 1;
      z-index: 99999;
      background-color: #fff;
      animation: slideUp-12gdg .5s ease-in;
      box-shadow: 2px 2px 20px rgb(73, 73, 73);
      transform: scale() rotateX(90deg);
   }
 
   .v-modal-content-lg {
      position: absolute;
      top: 10vh;
      width: 700px;
      min-height: 250px;;
      overflow: hidden;
      border-radius: 8px;
      opacity: 1;
      z-index: 99999;
      background-color: #fff;
      animation: slideUp-12gdg .5s ease-in;
      box-shadow: 2px 2px 20px rgb(73, 73, 73);
      transform: scale() rotateX(90deg);
   }
   
   @keyframes slideUp-12gdg {
      0% {
         opacity: 0;
         top: 0;
         display: none;
      }
      100% {
         display: block;
         top: 10vh;
         opacity: 1;
         transform: scale(1);
 
      }
   }
   
   .v-modal-head img {
      background-color: #fff;
      border-radius: 11px;
      padding: 2.8px 5px;
      cursor: pointer;
      transition: 0.4s;
   }
   
   .v-modal-head img:hover {
      transition: 0.4s;
      transform: scale(0.93);
   }
   
   .v-modal-head {
      display: flex;
      justify-content: space-between;
      align-items: center;
      color: black;
      padding: 0 30px;
      background-color: rgb(247, 247, 247);
   }
   
   .hiddenModal {
      transition: 0.3s;
      top: 0vh;
      opacity: 0;
   }
 
   .showModal-6gsdz {
      transition: 0.5s;
      top: 10vh;
      opacity: 1;
   }
 
   .hiddenSModals {
      z-index: -5;
      transition: 0.3s;
      opacity: 0;
   }
 
   .showSModals {
      z-index: 9999;
      transition: 0.5s;
      opacity: 1;
   }
 
   @media screen and (max-width: 510px){
      .v-modal-content {
         position: absolute;
         top: 10vh;
         width: 90%;
         min-height: 250px;
         overflow: hidden;
         border-radius: 8px;
         opacity: 1;
         z-index: 99999;
         background-color: #fff;
         animation: slideUp-12gdg .5s ease-in;
         box-shadow: 2px 2px 20px rgb(73, 73, 73);
         transform: scale() rotateX(90deg);
      }
   }
   `,
   `.v-modal-info {
      position: fixed;
      top: 0;
      left: 0;
      padding: 0;
      width: 100vw;
      height: 100vh;
      z-index: 99999;
      display: flex;
      justify-content: center;
      align-items: center;
   }
   .modal::before {
      position: absolute;
      top: 0;
      left: 0;
      content: '';
      z-index: 1;
      left: 0;
      width: 100vw;
      height: 100vh;
      background: #000;
      opacity: 0.6;
   }
   
   .v-modal h2 {
      font-weight: normal;
   }
   
   .v-modal-content {
      position: absolute;
      top: 10vh;
      width: 500px;
      min-height: 250px;;
      overflow: hidden;
      border-radius: 8px;
      opacity: 1;
      z-index: 99999;
      background-color: #fff;
      animation: slideUp-12gdg .5s ease-in;
      box-shadow: 2px 2px 20px rgb(73, 73, 73);
      transform: scale() rotateX(90deg);
   }
 
   .v-modal-content-lg {
      position: absolute;
      top: 10vh;
      width: 700px;
      min-height: 250px;;
      overflow: hidden;
      border-radius: 8px;
      opacity: 1;
      z-index: 99999;
      background-color: #fff;
      animation: slideUp-12gdg .5s ease-in;
      box-shadow: 2px 2px 20px rgb(73, 73, 73);
      transform: scale() rotateX(90deg);
   }
 
   @keyframes slideUp-12gdg {
      0% {
         opacity: 0;
         top: 0;
         display: none;
      }
      100% {
         display: block;
         top: 10vh;
         opacity: 1;
         transform: scale(1);
         
      }
   }
   
   .v-modal-head img {
      background-color: #fff;
      border-radius: 11px;
      padding: 2.8px 5px;
      cursor: pointer;
      transition: 0.4s;
   }
 
   .v-modal-head img:hover {
      transition: 0.4s;
      transform: scale(0.93);
   }
   
   .v-modal-head {
      display: flex;
      justify-content: space-between;
      align-items: center;
      color: white;
      padding: 0 30px;
      background-color: rgb(113, 196, 252);
   }
   
   .hiddenModal {
      transition: 0.3s;
      top: 0vh;
      opacity: 0;
   }
 
   .showModal-6gsdz {
      transition: 0.5s;
      top: 10vh;
      opacity: 1;
   }
 
   .hiddenSModals {
      z-index: -5;
      transition: 0.3s;
      opacity: 0;
   }
 
   .showSModals {
      z-index: 9999;
      transition: 0.5s;
      opacity: 1;
   }
 
   @media screen and (max-width: 510px){
      .v-modal-content {
         position: absolute;
         top: 10vh;
         width: 90%;
         min-height: 250px;
         overflow: hidden;
         border-radius: 8px;
         opacity: 1;
         z-index: 99999;
         background-color: #fff;
         animation: slideUp-12gdg .5s ease-in;
         box-shadow: 2px 2px 20px rgb(73, 73, 73);
         transform: scale() rotateX(90deg);
      }
   }
   `,
   `.v-modal-danger {
      position: fixed;
      top: 0;
      left: 0;
      padding: 0;
      width: 100vw;
      height: 100vh;
      z-index: 99999;
      display: flex;
      justify-content: center;
      align-items: center;
   }
   .modal::before {
      position: absolute;
      top: 0;
      left: 0;
      content: '';
      z-index: 1;
      left: 0;
      width: 100vw;
      height: 100vh;
      background: #000;
      opacity: 0.6;
   }
 
   .v-modal h2 {
      font-weight: normal;
   }
   
   .v-modal-content {
      position: absolute;
      top: 10vh;
      width: 500px;
      min-height: 250px;;
      overflow: hidden;
      border-radius: 8px;
      opacity: 1;
      z-index: 99999;
      background-color: #fff;
      animation: slideUp-12gdg .5s ease-in;
      box-shadow: 2px 2px 20px rgb(73, 73, 73);
      transform: scale() rotateX(90deg);
   }
 
   .v-modal-content-lg {
      position: absolute;
      top: 10vh;
      width: 700px;
      min-height: 250px;;
      overflow: hidden;
      border-radius: 8px;
      opacity: 1;
      z-index: 99999;
      background-color: #fff;
      animation: slideUp-12gdg .5s ease-in;
      box-shadow: 2px 2px 20px rgb(73, 73, 73);
      transform: scale() rotateX(90deg);
   }
 
   @keyframes slideUp-12gdg {
      0% {
         opacity: 0;
         top: 0;
         display: none;
      }
      100% {
         display: block;
         top: 10vh;
         opacity: 1;
         transform: scale(1);
         
      }
   }
 
   .v-modal-head img {
      background-color: #fff;
      border-radius: 11px;
      padding: 2.8px 5px;
      cursor: pointer;
      transition: 0.4s;
   }
 
   .v-modal-head img:hover {
      transition: 0.4s;
      transform: scale(0.93);
   }
   
   .v-modal-head {
      display: flex;
      justify-content: space-between;
      align-items: center;
      color: white;
      padding: 0 30px;
      background-color: rgb(252, 113, 113);
   }
   
   .hiddenModal {
      transition: 0.3s;
      top: 0vh;
      opacity: 0;
   }
 
   .showModal-6gsdz {
      transition: 0.5s;
      top: 10vh;
      opacity: 1;
   }
 
   .hiddenSModals {
      z-index: -5;
      transition: 0.3s;
      opacity: 0;
   }
 
   .showSModals {
      z-index: 9999;
      transition: 0.5s;
      opacity: 1;
   }
 
   @media screen and (max-width: 510px){
      .v-modal-content {
         position: absolute;
         top: 10vh;
         width: 90%;
         min-height: 250px;
         overflow: hidden;
         border-radius: 8px;
         opacity: 1;
         z-index: 99999;
         background-color: #fff;
         animation: slideUp-12gdg .5s ease-in;
         box-shadow: 2px 2px 20px rgb(73, 73, 73);
         transform: scale() rotateX(90deg);
      }
   }
   `,
   `.v-modal-warning {
      position: fixed;
      top: 0;
      left: 0;
      padding: 0;
      z-index: 99999;
      width: 100vw;
      height: 100vh;
      display: flex;
      justify-content: center;
      align-items: center;
   }
   .modal::before {
      position: absolute;
      top: 0;
      left: 0;
      content: '';
      z-index: 1;
      left: 0;
      width: 100vw;
      height: 100vh;
      background: #000;
      opacity: 0.6;
   }
 
   .v-modal h2 {
      font-weight: normal;
   }
 
   .v-modal-content {
      position: absolute;
      top: 10vh;
      width: 500px;
      min-height: 250px;;
      overflow: hidden;
      border-radius: 8px;
      opacity: 1;
      z-index: 99999;
      background-color: #fff;
      animation: slideUp-12gdg .5s ease-in;
      box-shadow: 2px 2px 20px rgb(73, 73, 73);
      transform: scale() rotateX(90deg);
   }
 
   .v-modal-content-lg {
      position: absolute;
      top: 10vh;
      width: 700px;
      min-height: 250px;;
      overflow: hidden;
      border-radius: 8px;
      opacity: 1;
      z-index: 99999;
      background-color: #fff;
      animation: slideUp-12gdg .5s ease-in;
      box-shadow: 2px 2px 20px rgb(73, 73, 73);
      transform: scale() rotateX(90deg);
   }
 
   @keyframes slideUp-12gdg {
      0% {
         opacity: 0;
         top: 0;
         display: none;
      }
      100% {
         display: block;
         top: 10vh;
         opacity: 1;
         transform: scale(1);
 
      }
   }
 
   .v-modal-head img {
      background-color: #fff;
      border-radius: 11px;
      padding: 2.8px 5px;
      cursor: pointer;
      transition: 0.4s;
   }
 
   .v-modal-head img:hover {
      transition: 0.4s;
      transform: scale(0.93);
   }
 
   .v-modal-head {
      display: flex;
      justify-content: space-between;
      align-items: center;
      color: white;
      padding: 0 30px;
      background-color: rgb(252, 230, 104);
   }
   
   .hiddenModal {
      transition: 0.3s;
      top: 0vh;
      opacity: 0;
   }
 
   .showModal-6gsdz {
      transition: 0.5s;
      top: 10vh;
      opacity: 1;
   }
 
   .hiddenSModals {
      z-index: -5;
      transition: 0.3s;
      opacity: 0;
   }
 
   .showSModals {
      z-index: 9999;
      transition: 0.5s;
      opacity: 1;
   }
 
   @media screen and (max-width: 510px){
      .v-modal-content {
         position: absolute;
         top: 10vh;
         width: 90%;
         min-height: 250px;
         overflow: hidden;
         border-radius: 8px;
         opacity: 1;
         z-index: 99999;
         background-color: #fff;
         animation: slideUp-12gdg .5s ease-in;
         box-shadow: 2px 2px 20px rgb(73, 73, 73);
         transform: scale() rotateX(90deg);
      }
   }
   `,
   `.v-modal-primary {
      position: fixed;
      top: 0;
      left: 0;
      padding: 0;
      width: 100vw;
      height: 100vh;
      display: flex;
      justify-content: center;
      align-items: center;
   }
   .modal::before {
      position: absolute;
      top: 0;
      left: 0;
      content: '';
      z-index: 1;
      left: 0;
      width: 100vw;
      height: 100vh;
      background: #000;
      opacity: 0.6;
   }
 
   .v-modal h2 {
      font-weight: normal;
   }
   
   .v-modal-content {
      position: absolute;
      top: 10vh;
      width: 500px;
      min-height: 250px;;
      overflow: hidden;
      border-radius: 8px;
      opacity: 1;
      z-index: 99999;
      background-color: #fff;
      animation: slideUp-12gdg .5s ease-in;
      box-shadow: 2px 2px 20px rgb(73, 73, 73);
      transform: scale() rotateX(90deg);
   }
 
   .v-modal-content-lg {
      position: absolute;
      top: 10vh;
      width: 700px;
      min-height: 250px;;
      overflow: hidden;
      border-radius: 8px;
      opacity: 1;
      z-index: 99999;
      background-color: #fff;
      animation: slideUp-12gdg .5s ease-in;
      box-shadow: 2px 2px 20px rgb(73, 73, 73);
      transform: scale() rotateX(90deg);
   }
 
   @keyframes slideUp-12gdg {
      0% {
         opacity: 0;
         top: 0;
         display: none;
      }
      100% {
         display: block;
         top: 10vh;
         opacity: 1;
         transform: scale(1);
         
      }
   }
   
   .v-modal-head img {
      background-color: #fff;
      border-radius: 11px;
      padding: 2.8px 5px;
      cursor: pointer;
      transition: 0.4s;
   }
   
   .v-modal-head img:hover {
      transition: 0.4s;
      transform: scale(0.93);
   }
   
   .v-modal-head {
      display: flex;
      justify-content: space-between;
      align-items: center;
      color: white;
      padding: 0 30px;
      background-color: rgb(104, 151, 252);
   }
   
   .hiddenModal {
      transition: 0.3s;
      top: 0vh;
      opacity: 0;
   }
 
   .showModal-6gsdz {
      transition: 0.5s;
      top: 10vh;
      opacity: 1;
   }
 
   .hiddenSModals {
      z-index: -5;
      transition: 0.3s;
      opacity: 0;
   }
 
   .showSModals {
      z-index: 9999;
      transition: 0.5s;
      opacity: 1;
   }
 
   @media screen and (max-width: 510px){
      .v-modal-content {
         position: absolute;
         top: 10vh;
         width: 90%;
         min-height: 250px;
         overflow: hidden;
         border-radius: 8px;
         opacity: 1;
         z-index: 99999;
         background-color: #fff;
         animation: slideUp-12gdg .5s ease-in;
         box-shadow: 2px 2px 20px rgb(73, 73, 73);
         transform: scale() rotateX(90deg);
      }
   }
   `,
   `.v-modal-secondary {
      position: fixed;
      top: 0;
      left: 0;
      padding: 0;
      width: 100vw;
      height: 100vh;
      display: flex;
      justify-content: center;
      align-items: center;
   }
   .modal::before {
      position: absolute;
      top: 0;
      left: 0;
      content: '';
      z-index: 1;
      left: 0;
      width: 100vw;
      height: 100vh;
      background: #000;
      opacity: 0.6;
   }
   
   .v-modal h2 {
      font-weight: normal;
   }
   
   .v-modal-content {
      position: absolute;
      top: 10vh;
      width: 500px;
      min-height: 250px;;
      overflow: hidden;
      border-radius: 8px;z-index: 99999;
      opacity: 1;
      z-index: 99999;
      background-color: #fff;
      animation: slideUp-12gdg .5s ease-in;
      box-shadow: 2px 2px 20px rgb(73, 73, 73);
      transform: scale() rotateX(90deg);
   }
 
   .v-modal-content-lg {
      position: absolute;
      top: 10vh;
      width: 700px;
      min-height: 250px;;
      overflow: hidden;
      border-radius: 8px;
      opacity: 1;
      z-index: 99999;
      background-color: #fff;
      animation: slideUp-12gdg .5s ease-in;
      box-shadow: 2px 2px 20px rgb(73, 73, 73);
      transform: scale() rotateX(90deg);
   }
   
   @keyframes slideUp-12gdg {
      0% {
         opacity: 0;
         top: 0;
         display: none;
      }
      100% {
         display: block;
         top: 10vh;
         opacity: 1;
         transform: scale(1);
         
      }
   }
 
   .v-modal-head img {
      background-color: #fff;
      border-radius: 11px;
      padding: 2.8px 5px;
      cursor: pointer;
      transition: 0.4s;
   }
 
   .v-modal-head img:hover {
      transition: 0.4s;
      transform: scale(0.93);
   }
   
   .v-modal-head {
      display: flex;
      justify-content: space-between;
      align-items: center;
      color: white;
      padding: 0 30px;
      background-color: rgb(128, 128, 128);
   }
   
   .hiddenModal {
      transition: 0.3s;
      top: 0vh;
      opacity: 0;
   }
 
   .showModal-6gsdz {
      transition: 0.5s;
      top: 10vh;
      opacity: 1;
   }
 
   .hiddenSModals {
      z-index: -5;
      transition: 0.3s;
      opacity: 0;
   }
 
   .showSModals {
      z-index: 9999;
      transition: 0.5s;
      opacity: 1;
   }
 
   @media screen and (max-width: 510px){
      .v-modal-content {
         position: absolute;
         top: 10vh;
         width: 90%;
         min-height: 250px;
         overflow: hidden;
         border-radius: 8px;
         opacity: 1;
         z-index: 99999;
         background-color: #fff;
         animation: slideUp-12gdg .5s ease-in;
         box-shadow: 2px 2px 20px rgb(73, 73, 73);
         transform: scale() rotateX(90deg);
      }
   }
   `,
   `.v-modal-dark {
      position: fixed;
      top: 0;
      left: 0;
      padding: 0;
      width: 100vw;
      height: 100vh;
      display: flex;
      justify-content: center;
      align-items: center;
   }
   .modal::before {
      position: absolute;
      top: 0;
      left: 0;
      content: '';
      z-index: 1;
      left: 0;
      width: 100vw;
      height: 100vh;
      background: #000;
      opacity: 0.6;
   }
 
   .v-modal h2 {
      font-weight: normal;
   }
   
   .v-modal-content {
      position: absolute;
      top: 10vh;
      width: 500px;
      min-height: 250px;;
      overflow: hidden;
      border-radius: 8px;
      opacity: 1;
      z-index: 99999;
      background-color: #fff;
      animation: slideUp-12gdg .5s ease-in;
      box-shadow: 2px 2px 20px rgb(73, 73, 73);
      transform: scale() rotateX(90deg);
   }
 
   .v-modal-content-lg {
      position: absolute;
      top: 10vh;
      width: 700px;
      min-height: 250px;;
      overflow: hidden;
      border-radius: 8px;
      opacity: 1;
      z-index: 99999;
      background-color: #fff;
      animation: slideUp-12gdg .5s ease-in;
      box-shadow: 2px 2px 20px rgb(73, 73, 73);
      transform: scale() rotateX(90deg);
   }
   
   @keyframes slideUp-12gdg {
      0% {
         opacity: 0;
         top: 0;
         display: none;
      }
      100% {
         display: block;
         top: 10vh;
         opacity: 1;
         transform: scale(1);
 
      }
   }
   
   .v-modal-head img {
      background-color: #fff;
      border-radius: 11px;
      padding: 2.8px 5px;x;
      cursor: pointer;
      transition: 0.4s;
   }
   
   .v-modal-head img:hover {
      transition: 0.4s;
      transform: scale(0.93);
   }
   
   .v-modal-head {
      display: flex;
      justify-content: space-between;
      align-items: center;
      color: white;
      padding: 0 30px;
      background-color: rgb(61, 61, 61);
   }
   
   .hiddenModal {
      transition: 0.3s;
      top: 0vh;
      opacity: 0;
   }
 
   .showModal-6gsdz {
      transition: 0.5s;
      top: 10vh;
      opacity: 1;
   }
 
   .hiddenSModals {
      z-index: -5;
      transition: 0.3s;
      opacity: 0;
   }
 
   .showSModals {
      z-index: 9999;
      transition: 0.5s;
      opacity: 1;
   }
 
   @media screen and (max-width: 510px){
      .v-modal-content {
         position: absolute;
         top: 10vh;
         width: 90%;
         min-height: 250px;
         overflow: hidden;
         border-radius: 8px;
         opacity: 1;
         z-index: 99999;
         background-color: #fff;
         animation: slideUp-12gdg .5s ease-in;
         box-shadow: 2px 2px 20px rgb(73, 73, 73);
         transform: scale() rotateX(90deg);
      }
   }
   `,
   `.v-modal-light {
      position: fixed;
      top: 0;
      left: 0;
      padding: 0;
      width: 100vw;
      height: 100vh;
      display: flex;
      justify-content: center;
      align-items: center;
   }
   .modal::before {
      position: absolute;
      top: 0;
      left: 0;
      content: '';
      z-index: 1;
      left: 0;
      width: 100vw;
      height: 100vh;
      background: #000;
      opacity: 0.6;
   }
 
   .v-modal h2 {
      font-weight: normal;
   }
   
   .v-modal-content {
      position: absolute;
      top: 10vh;
      width: 500px;
      min-height: 250px;;
      overflow: hidden;
      border-radius: 8px;
      opacity: 1;
      z-index: 99999;
      background-color: #fff;
      animation: slideUp-12gdg .5s ease-in;
      box-shadow: 2px 2px 20px rgb(73, 73, 73);
      transform: scale() rotateX(90deg);
   }
 
   .v-modal-content-lg {
      position: absolute;
      top: 10vh;
      width: 700px;
      min-height: 250px;;
      overflow: hidden;
      border-radius: 8px;
      opacity: 1;
      z-index: 99999;
      background-color: #fff;
      animation: slideUp-12gdg .5s ease-in;
      box-shadow: 2px 2px 20px rgb(73, 73, 73);
      transform: scale() rotateX(90deg);
   }
 
   @keyframes slideUp-12gdg {
      0% {
         opacity: 0;
         top: 0;
         display: none;
      }
      100% {
         display: block;
         top: 10vh;
         opacity: 1;
         transform: scale(1);
 
      }
   }
 
   .v-modal-head img {
      background-color: #fff;
      border-radius: 11px;
      padding: 2.8px 5px;
      cursor: pointer;
      transition: 0.4s;
   }
 
   .v-modal-head img:hover {
      transition: 0.4s;
      transform: scale(0.93);
   }
   
   .v-modal-head {
      display: flex;
      justify-content: space-between;
      align-items: center;
      color: rgb(37, 37, 37);
      padding: 0 30px;
      background-color: rgb(231, 231, 231);
   }
   
   .hiddenModal {
      transition: 0.3s;
      top: 0vh;
      opacity: 0;
   }
 
   .showModal-6gsdz {
      transition: 0.5s;
      top: 10vh;
      opacity: 1;
   }
 
   .hiddenSModals {
      z-index: -5;
      transition: 0.3s;
      opacity: 0;
   }
 
   .showSModals {
      z-index: 9999;
      transition: 0.5s;
      opacity: 1;
   }
 
   @media screen and (max-width: 510px){
      .v-modal-content {
         position: absolute;
         top: 10vh;
         width: 90%;
         min-height: 250px;
         overflow: hidden;
         border-radius: 8px;
         opacity: 1;
         z-index: 99999;
         background-color: #fff;
         animation: slideUp-12gdg .5s ease-in;
         box-shadow: 2px 2px 20px rgb(73, 73, 73);
         transform: scale() rotateX(90deg);
      }
   }
   `,
   `.v-modal-smooth {
      position: fixed;
      top: 0;
      left: 0;
      padding: 0;
      width: 100vw;
      height: 100vh;
      display: flex;
      justify-content: center;
      align-items: center;
   }
   .modal::before {
      position: absolute;
      top: 0;
      left: 0;
      content: '';
      z-index: 1;
      left: 0;
      width: 100vw;
      height: 100vh;
      background: #000;
      opacity: 0.6;
   }
 
   .v-modal h2 {
      font-weight: normal;
   }
   
   .v-modal-content {
      position: absolute;
      top: 10vh;
      width: 500px;
      min-height: 250px;;
      overflow: hidden;
      border-radius: 8px;
      opacity: 1;
      z-index: 99999;
      background-color: #fff;
      animation: slideUp-12gdg .5s ease-in;
      box-shadow: 2px 2px 20px rgb(73, 73, 73);
      transform: scale() rotateX(90deg);
   }
 
   .v-modal-content-lg {
      position: absolute;
      top: 10vh;
      width: 700px;
      min-height: 250px;;
      overflow: hidden;
      border-radius: 8px;
      opacity: 1;
      z-index: 99999;
      background-color: #fff;
      animation: slideUp-12gdg .5s ease-in;
      box-shadow: 2px 2px 20px rgb(73, 73, 73);
      transform: scale() rotateX(90deg);
   }
   
   @keyframes slideUp-12gdg {
      0% {
         opacity: 0;
         top: 0;
         display: none;
      }
      100% {
         display: block;
         top: 10vh;
         opacity: 1;
         transform: scale(1);
 
      }
   }
   
   .v-modal-head img {
      background-color: #fff;
      border-radius: 11px;
      padding: 2.8px 5px;
      cursor: pointer;
      transition: 0.4s;
   }
   
   .v-modal-head img:hover {
      transition: 0.4s;
      transform: scale(0.93);
   }
   
   .v-modal-head {
      display: flex;
      justify-content: space-between;
      align-items: center;
      color: rgb(37, 37, 37);
      padding: 0 30px;
      background-color: rgb(255, 236, 236);
   }
   
   .hiddenModal {
      transition: 0.3s;
      top: 0vh;
      opacity: 0;
   }
 
   .showModal-6gsdz {
      transition: 0.5s;
      top: 10vh;
      opacity: 1;
   }
 
   .hiddenSModals {
      z-index: -5;
      transition: 0.3s;
      opacity: 0;
   }
 
   .showSModals {
      z-index: 9999;
      transition: 0.5s;
      opacity: 1;
   }
 
   @media screen and (max-width: 510px){
      .v-modal-content {
         position: absolute;
         top: 10vh;
         width: 90%;
         min-height: 250px;
         overflow: hidden;
         border-radius: 8px;
         opacity: 1;
         z-index: 99999;
         background-color: #fff;
         animation: slideUp-12gdg .5s ease-in;
         box-shadow: 2px 2px 20px rgb(73, 73, 73);
         transform: scale() rotateX(90deg);
      }
   }
   `,
   `.v-modal-green {
      position: fixed;
      top: 0;
      left: 0;
      padding: 0;
      width: 100vw;
      height: 100vh;
      display: flex;
      justify-content: center;
      align-items: center;
   }
   .modal::before {
      position: absolute;
      top: 0;
      left: 0;
      content: '';
      z-index: 1;
      left: 0;
      width: 100vw;
      height: 100vh;
      background: #000;
      opacity: 0.6;
   }
 
   .v-modal h2 {
      font-weight: normal;
   }
 
   .v-modal-content {
      position: absolute;
      top: 10vh;
      width: 500px;
      min-height: 250px;;
      overflow: hidden;
      border-radius: 8px;
      opacity: 1;
      z-index: 99999;
      background-color: #fff;
      animation: slideUp-12gdg .5s ease-in;
      box-shadow: 2px 2px 20px rgb(73, 73, 73);
      transform: scale() rotateX(90deg);
   }
 
   .v-modal-content-lg {
      position: absolute;
      top: 10vh;
      width: 700px;
      min-height: 250px;;
      overflow: hidden;
      border-radius: 8px;
      opacity: 1;
      z-index: 99999;
      background-color: #fff;
      animation: slideUp-12gdg .5s ease-in;
      box-shadow: 2px 2px 20px rgb(73, 73, 73);
      transform: scale() rotateX(90deg);
   }
   
   @keyframes slideUp-12gdg {
      0% {
         opacity: 0;
         top: 0;
         display: none;
      }
      100% {
         display: block;
         top: 10vh;
         opacity: 1;
         transform: scale(1);
         
      }
   }
   
   .v-modal-head img {
      background-color: #fff;
      border-radius: 11px;
      padding: 2.8px 5px;
      cursor: pointer;
      transition: 0.4s;
   }
   
   .v-modal-head img:hover {
      transition: 0.4s;
      transform: scale(0.93);
   }
   
   .v-modal-head {
      display: flex;
      justify-content: space-between;
      align-items: center;
      color: white;
      padding: 0 30px;
      background-color: #0de982;
   }
   
   .hiddenModal {
      transition: 0.3s;
      top: 0vh;
      opacity: 0;
   }
 
   .showModal-6gsdz {
      transition: 0.5s;
      top: 10vh;
      opacity: 1;
   }
 
   .hiddenSModals {
      z-index: -5;
      transition: 0.3s;
      opacity: 0;
   }
 
   .showSModals {
      z-index: 9999;
      transition: 0.5s;
      opacity: 1;
   }
 
   @media screen and (max-width: 510px){
      .v-modal-content {
         position: absolute;
         top: 10vh;
         width: 90%;
         min-height: 250px;
         overflow: hidden;
         border-radius: 8px;
         opacity: 1;
         z-index: 99999;
         background-color: #fff;
         animation: slideUp-12gdg .5s ease-in;
         box-shadow: 2px 2px 20px rgb(73, 73, 73);
         transform: rotateX(90deg);
      }
   }
   `,
   `
   .v-card {
      position: relative;
      display: flex;
      flex-direction: column;
      justify-content: center;
      background-color: rgb(255, 255, 255);
      align-items: center;
      min-height: max-content;
      margin: 10px;
      border-radius: 5px;
      box-shadow: 2px 2px 22px rgba(70, 70, 70, 0.226);
      overflow: hidden;   
  }
  
  .v-card-images {
      position: relative;
      width: 100%;
      height: 60%;
      display: flex;
      padding: 0;
      box-sizing: border-box;
      align-items: center;
      overflow: hidden;
      background-size: cover;
      background-position: center;
  }
  
  .v-card-images img {
      position: relative;
      width: 100%;
      height: auto;
  }
  
  .v-card-content {
      width: 100%;
      height: 40%;
      padding: 10px;
  }
  
  .v-card-content h2 {
      font-weight: bold;
      margin: 10px;
  }
  
  .v-card-content p {
      font-weight: 500;
      margin: 10px;
  }
   `,
   `
   .v-card-2 {
      position: relative;
      border-radius: 10px;
      width: 370px;
      overflow: hidden;
      height: 140px;
      margin: 20px;
      padding: 0;
      display: flex;
      justify-content: center;
      align-items: center;
      box-shadow: 2px 2px 20px rgb(216, 216, 216);
   }
 
   .v-card-images-2 {
      width: 35%;
      overflow: hidden;
      height: 100%;
   }
 
   .v-card-images-2:hover {
      box-shadow: 0px 2px 20px rgb(173, 173, 173);
      transition: 0.3s;
   }
 
   .v-card-content-2 h2 {
      font-weight: bold;
   }
 
   .v-card-content-2 p {
      font-weight: 500;
   }
 
   .v-card-images-2 img {
      width: 100%;
      height: 100%;
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
   }
 
   .v-card-content-2 {
      padding: 0 5px 0 15px;
      width: 65%;
      height: 150px;
   }
   `,
   ` 
   .v-form {
      position: relative;
      margin-left: 20px;
      height: max-content;
      border-radius: 10px;
      padding: 10px;
      width: 600px;
      box-sizing: border-box;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
   }
 
   .v-form-section {
      width: 100%;
      display: flex;
   }
 
   .v-form-section:nth-child(2) {
      display: block;
   }
 
   .v-form-section div:nth-child(2) {
      margin-left: 30px;
   }
 
   .v-form label {
      margin-top: -5px;
   }
 
   .v-form-section:nth-child(2) {
      display: block;
      margin-top: 15px;
   }
 
   .v-form input {
      border-radius: 3px;
      outline: none;
      width: 100%;
      margin: 10px 10px 10px 0;
      font-weight: normal;
      font-size: 19px;
      border:1px solid rgb(201, 201, 201);
      padding: 8px;
   }
 
   .v-form-caption {
      margin-left: 1px;
      color: rgb(172, 172, 172);
   }
 
   .v-btn-submit {
      border: none;
      outline: none;
      cursor: pointer;
      font-weight: 500;
      padding: 8px 6px;
      color: white;
      margin-left: 14px;
      margin-top: 15px;
      border-radius: 4px;
      transform: scale(1.2);
      font-size: 19px;
      transition: 0.3s;
   }
 
   .v-btn-submit:hover {
      filter: brightness(90%);
      transition: 0.3s;
   }
 
   .v-form-checkbox {
      display: flex;
      margin-top: auto;
      justify-content: left;
      align-items: center;
   }
 
   .v-form-checkbox input {
      width: max-content;
   }
 
   .v-form-checkbox label {
      margin-top: 0px;
      width: max-content;
   }
 
   .v-disabled {
      transition: 0s;
      filter: brightness(80%);
   }
 
   .v-disabled:hover {
      transition: 0s;
      cursor: default;
      filter: brightness(80%);
   }
   
   @media screen and (max-width: 575px){
      .v-form {
         width: 100%;
         margin-left: 0px;
      }
   }
   `,
   `
   .v-slider {
      margin: 10px auto;
      width: 800px;
      max-width: 100%;
      text-align: center;
      transition: 0.5s;
      color: white;
  }
  .fa-arrows-alt-h {
     font-size: 34px;
     background-color: grey;
     color: white;
     cursor: pointer;
     border-radius: 9999px;
     padding: 4px;
     box-sizing: border-box;
  }
  .v-slider h2 {
      color: white;
  }
  .v-slider input[type=radio] {
      display: none;
      transition: 0.5s;
  }
  .v-slider label {
      cursor: pointer;
      text-decoration: none;
      transition: 0.5s;
  }
  .v-slides {
      transition: 0.5s;
      background: #fff;
      position: relative;
      z-index: 1;
  }
  .v-overflow {
      width: 100%;
      overflow: hidden;
      transition: 0.5s;
      border-radius: 8px;
  }
  #slide1:checked ~ .v-slides .v-inner {
      margin-left: 0%;
      transition: 0.5s cubic-bezier(0. 770, 0.000, 0.175, 1.000);
  }
  #slide2:checked ~ .v-slides .v-inner {
      margin-left: -100%;
      transition: 0.5s cubic-bezier(0. 770, 0.000, 0.175, 1.000);
  }
  #slide3:checked ~ .v-slides .v-inner {
      margin-left: -200%;
      transition: 0.5s cubic-bezier(0. 770, 0.000, 0.175, 1.000);
  }
  #slide4:checked ~ .v-slides .v-inner {
      margin-left: -300%;
      transition: 0.5s cubic-bezier(0. 770, 0.000, 0.175, 1.000);
  }
  .v-slides .v-inner {
      transition: 800ms;
      width: 400%;
      border-radius: 10px;
      height: 400px;
  }
  .v-slides .v-slide {
      position: relative;
      width: 25%;
      float: left;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100%;
      color: #fff;
      background-color: rgb(184, 184, 184);
  }
  .v-slide h1 {
      position: relative;
      top: -110px;
      color: white;
      font-size: 35px;
      opacity: 0.6;
  }
  .v-slide-content {
      position: absolute;
      bottom: 20px;
      line-height: 1em;
  }
  .v-slides .slide_1 {
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
  }
  .v-slides .slide_2 {
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
  }
  .v-slides .slide_3 {
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
  }
  .v-slides .slide_4 {
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
  }
  .controls {
      margin: -130px 0 0 0;
      width: 100%;
      height: 50px;
      z-index: 3;
      position: relative;
  }
  .controls label {
      transition: opacity 0.2s ease-out;
      display: none;
      width: 50px;
      height: 50px;
      opacity: .4;
  }
  .controls label:hover {
      opacity: .6;
  }
  #slide1:checked ~ .controls label:nth-child(2),
  #slide2:checked ~ .controls label:nth-child(3),
  #slide3:checked ~ .controls label:nth-child(4),
  #slide4:checked ~ .controls label:nth-child(1) {
      background-size: contain;
      background-position: center;
      background-repeat: no-repeat;
      float: right;
      width: 50px;
      height: 50px;
      margin: 0 -50px 0 0;
      display: block;
  }
  #slide1:checked ~ .controls label:nth-last-child(2),
  #slide2:checked ~ .controls label:nth-last-child(3),
  #slide3:checked ~ .controls label:nth-last-child(4),
  #slide4:checked ~ .controls label:nth-last-child(1) {
      background-size: contain;
      background-position: center;
      background-repeat: no-repeat;
      float: left;
      width: 50px;
      height: 50px;
      margin: 0 0 0 -50px;
      display: block;
  }
  .controls label {
      position: relative;
      top: -100px;
      color: rgb(184, 184, 184);
      transform: scale(0.9);
  }
  .bullets {
      margin: 100px 0 0;  
      text-align: center;
  }
  .bullets label {
      display: inline-block;
      width: 10px;
      height: 10px;
      border-radius: 100%;
      background: #ccc;
      margin: 0 10px;
  }
  #slide1:checked ~ .bullets label:nth-child(1),
  #slide2:checked ~ .bullets label:nth-child(2),
  #slide3:checked ~ .bullets label:nth-child(3),
  #slide4:checked ~ .bullets label:nth-child(4) {
      background: #444;
      box-shadow: 1px 1px 3px rgba(0,0,0,0.15), 
      1px 1px 1px rgba(0,0,0,0.15), 
      0 1px 1px rgba(0,0,0,0.15), 
      0 1px 1px rgba(0,0,0,0.15);
      animation: blts 1s linear;
  }
  @keyframes blts {
  0% {
      transform: scale(1);
      }
  50% {
          transform: scale(1.6);
      }
  100% {
          transform: scale(1);
      }
  }
  @media screen and (max-width: 900px) {
      #slide1:checked ~ .controls label:nth-child(2),
      #slide2:checked ~ .controls label:nth-child(3),
      #slide3:checked ~ .controls label:nth-child(4),
      #slide4:checked ~ .controls label:nth-child(1),
      #slide1:checked ~ .controls label:nth-last-child(2),
      #slide2:checked ~ .controls label:nth-last-child(3),
      #slide3:checked ~ .controls label:nth-last-child(4),
      #slide4:checked ~ .controls label:nth-last-child(1) {
         margin: 0;
      }
  }
   `,
 ]
 for (var i = 0; i <= propertiesComponent.length; i++) {
   if (document.querySelector(`.${propertiesComponent[i]}`) && !document.querySelector('style').innerText.includes(propertiesComponent[i])) {
       let s = ` 
               ${valueComponent[i]}
               `;
       document.getElementsByTagName('style')[0].appendChild(document.createTextNode(s));
   }
 }

 let style = `
.v-currency {
    border-radius: 3px;
    outline: none;
    width: 100%;
    margin: 10px 10px 10px 0;
    font-weight: normal;
    border-radius: 40px;
    border: none;
    outline: transparent;
    font-size: 19px;
    padding: 8px;
}
`
if (!document.querySelector('style').innerText.includes(style)) {
document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style))
}

var attr = document.querySelectorAll('.v-currency');
   if(attr.length > 1) {
      var i;
      for(i = 0; i < attr.length; i++) {
      var bilangan = document.querySelector('.v-currency').value;
		var preceded = document.querySelector('.v-currency').attributes.preceded.value;
		var number_string = bilangan.replace(/[^,\d]/g, '').toString();
		split = number_string.split(',');
		sisa   = split[0].length % 3;
		rupiah   = split[0].substr(0, sisa)
		ribuan   = split[0].substr(sisa).match(/\d{3}/gi);
      
      if (ribuan) {
         separator = sisa ? '.' : '';
         rupiah += separator + ribuan.join('.');
         document.querySelectorAll('.v-currency')[i].value = `${preceded}${rupiah}`
      }
   }
}

let propertiesImage= [
  `v-card-of-btn`,
  `v-card-of-zoom`
]

let valuesImage = [
  `
  .v-card-of-btn {
      position: relative;
      border-radius: 5px;
      margin: 20px;
      overflow: hidden;
      display: flex;
      justify-content: center;
      align-items: center;
      transition: 0.3s;
  }

  .v-card-of-btn::after {
      transition: 0.3s;
      position: absolute;
      content: '';
      z-index: 3;
      width: 100%;
      height: 100%;
      background-color: rgba(39, 39, 39, 0);
      transition: 0.3s;
  }

  .v-card-of-btn:hover::after {
      position: absolute;
      content: '';
      z-index: 3;
      width: 100%;
      height: 100%;
      background-color: rgba(39, 39, 39, 0.493);
      transition: 0.3s;
  }

  .v-card-full-images {
      position: relative;
      width: 100%;
      height: 100%;
      transition: 0.4s;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      z-index: 2;
      overflow: hidden;
      background-position: center;
      background-size: cover;
      background-repeat: no-repeat;
  }

  .v-card-full-images img {
      width: 100%;
      height: 100%;
      transition: 0.4s;
  }

  .v-btn-hover-on {
      position: absolute;
      opacity: 0;
      margin: auto;
      color: white;
      border-radius: 2px;
      cursor: pointer;
      border: none;
      font-size: 25px;
      outline: none;
      padding: 3px;
      box-shadow: 0 1px 1px rgba(0,0,0,0.15), 
          0 2px 2px rgba(0,0,0,0.15), 
          0 4px 4px rgba(0,0,0,0.15), 
          0 8px 8px rgba(0,0,0,0.15);

      z-index: 1;
      transition: 0.5s;
      transform: scale(0.6)

  }

  .v-card-of-btn:hover .v-btn-hover-on {
      position: absolute;
      transition: 0.5s;
      opacity: 1;
      transform: scale(1);
      z-index: 6;
  }

  .v-btn-hover-on:hover {
      transition: 0.3s;
      filter: brightness(95%);
  }
  `,
  `
  .v-card-of-zoom {
      position: relative;
      border-radius: 5px;
      margin: 20px;
      overflow: hidden;
      display: flex;
      justify-content: center;
      align-items: center;
      transition: 0.3s;
  }

  .v-card-full-images {
      position: relative;
      width: 100%;
      height: 100%;
      transition: 0.4s;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      z-index: 2;
      overflow: hidden;
      background-position: center;
      background-size: cover;
      background-repeat: no-repeat;
  }

  .v-card-full-images img {
      width: 100%;
      height: 100%;
      transition: 0.4s;
  }

  .v-card-of-zoom:hover img {
      transform: scale(1.2);
      transition: 0.8s;
  }
  `
];
for (var i = 0; i <= propertiesImage.length; i++) {
  if (document.querySelector(`.${propertiesImage[i]}`) && !document.querySelector('style').innerText.includes(propertiesImage[i])) {
      let styles = ` 
              ${valuesImage[i]}
              `
      document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
  }
}

if(document.querySelector('.v-brand')) {
  document.querySelector('.v-brand').addEventListener('click', () => {
     window.location.reload();
  })
}

if (document.querySelector('.modal') && document.querySelector('.v-modal-content')) {

     document.querySelector('.v-modal-content').classList.add('hiddenModal')
     document.querySelector('.modal').classList.add('hiddenSModals')

  if (document.querySelector('.v-close')) {
     document.querySelector('.v-close').innerHTML = '<i class="fas fa-times"></i>'
     document.querySelector('.v-close').style.fontWeight = 'bold';
     document.querySelector('.v-close').style.fontSize = '24px';
     document.querySelector('.v-close').style.cursor = 'pointer';
  }

  if(document.querySelector('.v-close')) {
     document.querySelector('.v-close').addEventListener('click', () => {
        document.querySelector('.v-modal-content').classList.add('hiddenModal')
        document.querySelector('.v-modal-content').classList.remove('showModal-6gsdz')
        setTimeout(() => {
           document.querySelector('.modal').classList.add('hiddenSModals')
           document.querySelector('.modal').classList.remove('showSModals')
        }, 300)
     })
  }
  
  document.querySelector('.v-btn-modal').addEventListener('click', () => {
     document.querySelector('.v-modal-content').classList.add('showModal-6gsdz')
     document.querySelector('.v-modal-content').classList.remove('hiddenModal')
     document.querySelector('.modal').classList.add('showSModals')
     document.querySelector('.modal').classList.remove('hiddenSModals')
  })
}

if (document.querySelector('.modal') && document.querySelector('.v-modal-content-lg')) {

     document.querySelector('.v-modal-content-lg').classList.add('hiddenModal')
     document.querySelector('.modal').classList.add('hiddenSModals')

  if (document.querySelector('.v-close')) {
     document.querySelector('.v-close').innerHTML = '<i class="fas fa-times"></i>'
  }

  if(document.querySelector('.v-close')) {
     document.querySelector('.v-close').addEventListener('click', () => {
        document.querySelector('.v-modal-content-lg').classList.add('hiddenModal')
        document.querySelector('.v-modal-content-lg').classList.remove('showModal-6gsdz')
        setTimeout(() => {
           document.querySelector('.modal').classList.add('hiddenSModals')
           document.querySelector('.modal').classList.remove('showSModals')
        }, 300)
     })
  }
  
  document.querySelector('.v-btn-modal').addEventListener('click', () => {
     document.querySelector('.v-modal-content-lg').classList.add('showModal-6gsdz')
     document.querySelector('.v-modal-content-lg').classList.remove('hiddenModal')
     document.querySelector('.modal').classList.add('showSModals')
     document.querySelector('.modal').classList.remove('hiddenSModals')
  })
}

if(document.querySelector('.v-result') && document.querySelector('.v-operation')) {
   document.querySelector(".v-operation").addEventListener("click", () => {
       let e=document.querySelector(".v-var-1").value;
       r = document.querySelector(".v-var-2").value;
       t = Number(e) + Number(r);
       u = Number(t);
       document.querySelector(".v-result").innerText = u;
   }) 
}


var VanillaTilt = (function () {
    'use strict';
    
    /**
     * Created by Sergiu Șandor (micku7zu) on 1/27/2017.
     * Original idea: https://github.com/gijsroge/tilt.js
     * MIT License.
     * Version 1.7.0
     */
    
    class VanillaTilt {
      constructor(element, settings = {}) {
        if (!(element instanceof Node)) {
          throw ("Can't initialize VanillaTilt because " + element + " is not a Node.");
        }
    
        this.width = null;
        this.height = null;
        this.clientWidth = null;
        this.clientHeight = null;
        this.left = null;
        this.top = null;
    
        // for Gyroscope sampling
        this.gammazero = null;
        this.betazero = null;
        this.lastgammazero = null;
        this.lastbetazero = null;
    
        this.transitionTimeout = null;
        this.updateCall = null;
        this.event = null;
    
        this.updateBind = this.update.bind(this);
        this.resetBind = this.reset.bind(this);
    
        this.element = element;
        this.settings = this.extendSettings(settings);
    
        this.reverse = this.settings.reverse ? -1 : 1;
        this.glare = VanillaTilt.isSettingTrue(this.settings.glare);
        this.glarePrerender = VanillaTilt.isSettingTrue(this.settings["glare-prerender"]);
        this.fullPageListening = VanillaTilt.isSettingTrue(this.settings["full-page-listening"]);
        this.gyroscope = VanillaTilt.isSettingTrue(this.settings.gyroscope);
        this.gyroscopeSamples = this.settings.gyroscopeSamples;
    
        this.elementListener = this.getElementListener();
    
        if (this.glare) {
          this.prepareGlare();
        }
    
        if (this.fullPageListening) {
          this.updateClientSize();
        }
    
        this.addEventListeners();
        this.updateInitialPosition();
      }
    
      static isSettingTrue(setting) {
        return setting === "" || setting === true || setting === 1;
      }
    
      /**
       * Method returns element what will be listen mouse events
       * @return {Node}
       */
      getElementListener() {
        if (this.fullPageListening) {
          return window.document;
        }
    
        if (typeof this.settings["mouse-event-element"] === "string") {
          const mouseEventElement = document.querySelector(this.settings["mouse-event-element"]);
    
          if (mouseEventElement) {
            return mouseEventElement;
          }
        }
    
        if (this.settings["mouse-event-element"] instanceof Node) {
          return this.settings["mouse-event-element"];
        }
    
        return this.element;
      }
    
      /**
       * Method set listen methods for this.elementListener
       * @return {Node}
       */
      addEventListeners() {
        this.onMouseEnterBind = this.onMouseEnter.bind(this);
        this.onMouseMoveBind = this.onMouseMove.bind(this);
        this.onMouseLeaveBind = this.onMouseLeave.bind(this);
        this.onWindowResizeBind = this.onWindowResize.bind(this);
        this.onDeviceOrientationBind = this.onDeviceOrientation.bind(this);
    
        this.elementListener.addEventListener("mouseenter", this.onMouseEnterBind);
        this.elementListener.addEventListener("mouseleave", this.onMouseLeaveBind);
        this.elementListener.addEventListener("mousemove", this.onMouseMoveBind);
    
        if (this.glare || this.fullPageListening) {
          window.addEventListener("resize", this.onWindowResizeBind);
        }
    
        if (this.gyroscope) {
          window.addEventListener("deviceorientation", this.onDeviceOrientationBind);
        }
      }
    
      /**
       * Method remove event listeners from current this.elementListener
       */
      removeEventListeners() {
        this.elementListener.removeEventListener("mouseenter", this.onMouseEnterBind);
        this.elementListener.removeEventListener("mouseleave", this.onMouseLeaveBind);
        this.elementListener.removeEventListener("mousemove", this.onMouseMoveBind);
    
        if (this.gyroscope) {
          window.removeEventListener("deviceorientation", this.onDeviceOrientationBind);
        }
    
        if (this.glare || this.fullPageListening) {
          window.removeEventListener("resize", this.onWindowResizeBind);
        }
      }
    
      destroy() {
        clearTimeout(this.transitionTimeout);
        if (this.updateCall !== null) {
          cancelAnimationFrame(this.updateCall);
        }
    
        this.reset();
    
        this.removeEventListeners();
        this.element.vanillaTilt = null;
        delete this.element.vanillaTilt;
    
        this.element = null;
      }
    
      onDeviceOrientation(event) {
        if (event.gamma === null || event.beta === null) {
          return;
        }
    
        this.updateElementPosition();
    
        if (this.gyroscopeSamples > 0) {
          this.lastgammazero = this.gammazero;
          this.lastbetazero = this.betazero;
    
          if (this.gammazero === null) {
            this.gammazero = event.gamma;
            this.betazero = event.beta;
          } else {
            this.gammazero = (event.gamma + this.lastgammazero) / 2;
            this.betazero = (event.beta + this.lastbetazero) / 2;
          }
    
          this.gyroscopeSamples -= 1;
        }
    
        const totalAngleX = this.settings.gyroscopeMaxAngleX - this.settings.gyroscopeMinAngleX;
        const totalAngleY = this.settings.gyroscopeMaxAngleY - this.settings.gyroscopeMinAngleY;
    
        const degreesPerPixelX = totalAngleX / this.width;
        const degreesPerPixelY = totalAngleY / this.height;
    
        const angleX = event.gamma - (this.settings.gyroscopeMinAngleX + this.gammazero);
        const angleY = event.beta - (this.settings.gyroscopeMinAngleY + this.betazero);
    
        const posX = angleX / degreesPerPixelX;
        const posY = angleY / degreesPerPixelY;
    
        if (this.updateCall !== null) {
          cancelAnimationFrame(this.updateCall);
        }
    
        this.event = {
          clientX: posX + this.left,
          clientY: posY + this.top,
        };
    
        this.updateCall = requestAnimationFrame(this.updateBind);
      }
    
      onMouseEnter() {
        this.updateElementPosition();
        this.element.style.willChange = "transform";
        this.setTransition();
      }
    
      onMouseMove(event) {
        if (this.updateCall !== null) {
          cancelAnimationFrame(this.updateCall);
        }
    
        this.event = event;
        this.updateCall = requestAnimationFrame(this.updateBind);
      }
    
      onMouseLeave() {
        this.setTransition();
    
        if (this.settings.reset) {
          requestAnimationFrame(this.resetBind);
        }
      }
    
      reset() {
        this.event = {
          clientX: this.left + this.width / 2,
          clientY: this.top + this.height / 2
        };
    
        if (this.element && this.element.style) {
          this.element.style.transform = `perspective(${this.settings.perspective}px) ` +
            `rotateX(0deg) ` +
            `rotateY(0deg) ` +
            `scale3d(1, 1, 1)`;
        }
    
        this.resetGlare();
      }
    
      resetGlare() {
        if (this.glare) {
          this.glareElement.style.transform = "rotate(180deg) translate(-50%, -50%)";
          this.glareElement.style.opacity = "0";
        }
      }
    
      updateInitialPosition() {
        if (this.settings.startX === 0 && this.settings.startY === 0) {
          return;
        }
    
        this.onMouseEnter();
    
        if (this.fullPageListening) {
          this.event = {
            clientX: (this.settings.startX + this.settings.max) / (2 * this.settings.max) * this.clientWidth,
            clientY: (this.settings.startY + this.settings.max) / (2 * this.settings.max) * this.clientHeight
          };
        } else {
          this.event = {
            clientX: this.left + ((this.settings.startX + this.settings.max) / (2 * this.settings.max) * this.width),
            clientY: this.top + ((this.settings.startY + this.settings.max) / (2 * this.settings.max) * this.height)
          };
        }
    
    
        let backupScale = this.settings.scale;
        this.settings.scale = 1;
        this.update();
        this.settings.scale = backupScale;
        this.resetGlare();
      }
    
      getValues() {
        let x, y;
    
        if (this.fullPageListening) {
          x = this.event.clientX / this.clientWidth;
          y = this.event.clientY / this.clientHeight;
        } else {
          x = (this.event.clientX - this.left) / this.width;
          y = (this.event.clientY - this.top) / this.height;
        }
    
        x = Math.min(Math.max(x, 0), 1);
        y = Math.min(Math.max(y, 0), 1);
    
        let tiltX = (this.reverse * (this.settings.max - x * this.settings.max * 2)).toFixed(2);
        let tiltY = (this.reverse * (y * this.settings.max * 2 - this.settings.max)).toFixed(2);
        let angle = Math.atan2(this.event.clientX - (this.left + this.width / 2), -(this.event.clientY - (this.top + this.height / 2))) * (180 / Math.PI);
    
        return {
          tiltX: tiltX,
          tiltY: tiltY,
          percentageX: x * 100,
          percentageY: y * 100,
          angle: angle
        };
      }
    
      updateElementPosition() {
        let rect = this.element.getBoundingClientRect();
    
        this.width = this.element.offsetWidth;
        this.height = this.element.offsetHeight;
        this.left = rect.left;
        this.top = rect.top;
      }
    
      update() {
        let values = this.getValues();
    
        this.element.style.transform = "perspective(" + this.settings.perspective + "px) " +
          "rotateX(" + (this.settings.axis === "x" ? 0 : values.tiltY) + "deg) " +
          "rotateY(" + (this.settings.axis === "y" ? 0 : values.tiltX) + "deg) " +
          "scale3d(" + this.settings.scale + ", " + this.settings.scale + ", " + this.settings.scale + ")";
    
        if (this.glare) {
          this.glareElement.style.transform = `rotate(${values.angle}deg) translate(-50%, -50%)`;
          this.glareElement.style.opacity = `${values.percentageY * this.settings["max-glare"] / 100}`;
        }
    
        this.element.dispatchEvent(new CustomEvent("tiltChange", {
          "detail": values
        }));
    
        this.updateCall = null;
      }
    
      /**
       * Appends the glare element (if glarePrerender equals false)
       * and sets the default style
       */
      prepareGlare() {
        // If option pre-render is enabled we assume all html/css is present for an optimal glare effect.
        if (!this.glarePrerender) {
          // Create glare element
          const jsTiltGlare = document.createElement("div");
          jsTiltGlare.classList.add("js-tilt-glare");
    
          const jsTiltGlareInner = document.createElement("div");
          jsTiltGlareInner.classList.add("js-tilt-glare-inner");
    
          jsTiltGlare.appendChild(jsTiltGlareInner);
          this.element.appendChild(jsTiltGlare);
        }
    
        this.glareElementWrapper = this.element.querySelector(".js-tilt-glare");
        this.glareElement = this.element.querySelector(".js-tilt-glare-inner");
    
        if (this.glarePrerender) {
          return;
        }
    
        Object.assign(this.glareElementWrapper.style, {
          "position": "absolute",
          "top": "0",
          "left": "0",
          "width": "100%",
          "height": "100%",
          "overflow": "hidden",
          "pointer-events": "none"
        });
    
        Object.assign(this.glareElement.style, {
          "position": "absolute",
          "top": "50%",
          "left": "50%",
          "pointer-events": "none",
          "background-image": `linear-gradient(0deg, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 100%)`,
          "width": `${this.element.offsetWidth * 2}px`,
          "height": `${this.element.offsetWidth * 2}px`,
          "transform": "rotate(180deg) translate(-50%, -50%)",
          "transform-origin": "0% 0%",
          "opacity": "0",
        });
      }
    
      updateGlareSize() {
        if (this.glare) {
          Object.assign(this.glareElement.style, {
            "width": `${this.element.offsetWidth * 2}`,
            "height": `${this.element.offsetWidth * 2}`,
          });
        }
      }
    
      updateClientSize() {
        this.clientWidth = window.innerWidth
          || document.documentElement.clientWidth
          || document.body.clientWidth;
    
        this.clientHeight = window.innerHeight
          || document.documentElement.clientHeight
          || document.body.clientHeight;
      }
    
      onWindowResize() {
        this.updateGlareSize();
        this.updateClientSize();
      }
    
      setTransition() {
        clearTimeout(this.transitionTimeout);
        this.element.style.transition = this.settings.speed + "ms " + this.settings.easing;
        if (this.glare) this.glareElement.style.transition = `opacity ${this.settings.speed}ms ${this.settings.easing}`;
    
        this.transitionTimeout = setTimeout(() => {
          this.element.style.transition = "";
          if (this.glare) {
            this.glareElement.style.transition = "";
          }
        }, this.settings.speed);
    
      }
    
      /**
       * Method return patched settings of instance
       * @param {boolean} settings.reverse - reverse the tilt direction
       * @param {number} settings.max - max tilt rotation (degrees)
       * @param {startX} settings.startX - the starting tilt on the X axis, in degrees. Default: 0
       * @param {startY} settings.startY - the starting tilt on the Y axis, in degrees. Default: 0
       * @param {number} settings.perspective - Transform perspective, the lower the more extreme the tilt gets
       * @param {string} settings.easing - Easing on enter/exit
       * @param {number} settings.scale - 2 = 200%, 1.5 = 150%, etc..
       * @param {number} settings.speed - Speed of the enter/exit transition
       * @param {boolean} settings.transition - Set a transition on enter/exit
       * @param {string|null} settings.axis - What axis should be disabled. Can be X or Y
       * @param {boolean} settings.glare - What axis should be disabled. Can be X or Y
       * @param {number} settings.max-glare - the maximum "glare" opacity (1 = 100%, 0.5 = 50%)
       * @param {boolean} settings.glare-prerender - false = VanillaTilt creates the glare elements for you, otherwise
       * @param {boolean} settings.full-page-listening - If true, parallax effect will listen to mouse move events on the whole document, not only the selected element
       * @param {string|object} settings.mouse-event-element - String selector or link to HTML-element what will be listen mouse events
       * @param {boolean} settings.reset - false = If the tilt effect has to be reset on exit
       * @param {gyroscope} settings.gyroscope - Enable tilting by deviceorientation events
       * @param {gyroscopeSensitivity} settings.gyroscopeSensitivity - Between 0 and 1 - The angle at which max tilt position is reached. 1 = 90deg, 0.5 = 45deg, etc..
       * @param {gyroscopeSamples} settings.gyroscopeSamples - How many gyroscope moves to decide the starting position.
       */
      extendSettings(settings) {
        let defaultSettings = {
          reverse: false,
          max: 15,
          startX: 0,
          startY: 0,
          perspective: 1000,
          easing: "cubic-bezier(.03,.98,.52,.99)",
          scale: 1,
          speed: 300,
          transition: true,
          axis: null,
          glare: false,
          "max-glare": 1,
          "glare-prerender": false,
          "full-page-listening": false,
          "mouse-event-element": null,
          reset: true,
          gyroscope: true,
          gyroscopeMinAngleX: -45,
          gyroscopeMaxAngleX: 45,
          gyroscopeMinAngleY: -45,
          gyroscopeMaxAngleY: 45,
          gyroscopeSamples: 10
        };
    
        let newSettings = {};
        for (var property in defaultSettings) {
          if (property in settings) {
            newSettings[property] = settings[property];
          } else if (this.element.hasAttribute("data-tilt-" + property)) {
            let attribute = this.element.getAttribute("data-tilt-" + property);
            try {
              newSettings[property] = JSON.parse(attribute);
            } catch (e) {
              newSettings[property] = attribute;
            }
    
          } else {
            newSettings[property] = defaultSettings[property];
          }
        }
    
        return newSettings;
      }
    
      static init(elements, settings) {
        if (elements instanceof Node) {
          elements = [elements];
        }
    
        if (elements instanceof NodeList) {
          elements = [].slice.call(elements);
        }
    
        if (!(elements instanceof Array)) {
          return;
        }
    
        elements.forEach((element) => {
          if (!("vanillaTilt" in element)) {
            element.vanillaTilt = new VanillaTilt(element, settings);
          }
        });
      }
    }
    
    if (typeof document !== "undefined") {
      /* expose the class to window */
      window.VanillaTilt = VanillaTilt;
    
      /**
       * Auto load
       */
      VanillaTilt.init(document.querySelectorAll("[data-tilt]"));
    }
    
    return VanillaTilt;
    
    }());

    
VanillaTilt.init(document.querySelector(".v-card-3d"), {
   max: 25,
   speed: 400
 });
    

    if (document.querySelector('.v-office-excel')) {
        document.querySelector('.v-office-excel').innerText = 'Download excel';
        document.querySelector('.v-office-excel').addEventListener('click', () => {
        var downloadLink;
        var dataType = 'application/vnd.ms-excel';
        var tableSelect = document.querySelector('.v-template-excel');
        var tableHTML = tableSelect.outerHTML.replace(/ /g, '%20');

        filename = 'excel_data.xls';

        downloadLink = document.createElement("a");

        document.body.appendChild(downloadLink);

        if (navigator.msSaveOrOpenBlob) {
            var blob = new Blob(['\ufeff', tableHTML], {
                type: dataType
            });
            navigator.msSaveOrOpenBlob(blob, filename);
        } else {
            downloadLink.href = 'data:' + dataType + ', ' + tableHTML;

            downloadLink.download = filename;

            downloadLink.click();
        }
    })
}

if (document.querySelector('.v-office-pdf')) {
        document.querySelector('.v-office-pdf').innerText = 'Download pdf'
        document.querySelector('.v-office-pdf').addEventListener('click', () => {
        var sTable = document.querySelector('.v-template-pdf').innerHTML;
        var style = "<style>";
        style = style + "table {width: 100%;font: 25px Calibri;}";
        style = style + "table, th, td {border: solid 1px #DDD; border-collapse: collapse;";
        style = style + "padding: 2px 3px;text-align: center;}";
        style = style + "</style>";

        var win = window.open('', '', 'height=700,width=700');

        win.document.write('<html><head>');
        win.document.write('<title>Profile</title>');
        win.document.write(style);
        win.document.write('</head>');
        win.document.write('<body>');
        win.document.write(sTable);
        win.document.write('</body></html>');

        win.document.close();

        win.print();
    })
}

if (document.querySelector('.v-office-word')) {
        document.querySelector('.v-office-word').innerText = 'Download word'
        document.querySelector('.v-office-word').addEventListener('click', () => {
        const header = "<html xmlns:o='urn:schemas-microsoft-com:office:office' " +
            "xmlns:w='urn:schemas-microsoft-com:office:word' " +
            "xmlns='http://www.w3.org/TR/REC-html40'>" +
            "<head><meta charset='utf-8'><title>Export data table to Word Document with Valclass Framework</title></head><body>";
        const footer = "</body></html>";
        const sourceHTML = header + document.querySelector('.v-template-word').innerHTML + footer;

        const source = 'data:application/vnd.ms-word;charset=utf-8,' + encodeURIComponent(sourceHTML);
        const fileDownload = document.createElement("a");
        document.body.appendChild(fileDownload);
        fileDownload.href = source;
        fileDownload.download = 'document.doc';
        fileDownload.click();
        document.body.removeChild(fileDownload);
    })
}

var music = document.querySelector('.v-media');
   

let styles = ` 
.v-range {
    font-family: 'Poppins', sans-serif;
    box-shadow: 0 1px 1px rgba(0,0,0,0.11), 
      0 0px 2px rgba(0,0,0,0.11), 
      0 2px 4px rgba(0,0,0,0.11), 
      0 4px 5px rgba(0,0,0,0.11),
      0 6px 12px rgba(0,0,0,0.11);
    height: 50px;
    box-sizing: border-box;
    width: max-content;
    background-color: #fff;
    border-radius: 4px;
    padding: 0px 35px 0px 35px;
}

.v-range .v-field {
    position: relative;
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
}

.v-range .v-field .v-value {
    position: absolute;
    font-size: 18px;
    font-weight: 600;
    color: #664AFF;
}

.v-range .v-field .v-value.left {
    position: relative;
    left: 0px;
    margin-right: 10px;
}

.v-range .v-field .v-value.right {
    position: relative;
    right: 0px;
    margin-left: 10px;
}

.v-range .v-field input {
    -webkit-appearance: none;
    height: 3px;
    width: 100%;
    background-color: #ddd;
    border-radius: 5px;
    outline: none;
    border: none;
}

.v-range .v-field input::-webkit-slider-thumb {
    -webkit-appearance: none;
    width: 25px;
    height: 25px;
    background-color: blueviolet;
    border-radius: 25px;
    cursor: pointer;
    color: white;
    transition: 0.3s;
}

.v-range .v-field input::-webkit-slider-thumb:hover {
    transition: 0.3s;
    filter: brightness(90%);
}

@media screen and (max-width: 576px) {
    .v-range {
        display: flex;
        justify-content: center;
        align-center: center;
        width: 100%;
    }
}

`;
document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));

document.querySelector('.v-play').addEventListener('click', () => {
    music.play();
})
document.querySelector('.v-pause').addEventListener('click', () => {
    music.pause();
})
document.querySelector('.v-volume').addEventListener('mousemove', () => {
    music.volume = document.querySelector('.v-volume').value / 100;
})

for(let i = 0; i <= document.querySelectorAll('.v-play').length; i++) {
    document.querySelectorAll('.v-play')[i].addEventListener('click', () => {
        music.play();
    })
    document.querySelectorAll('.v-pause')[i].addEventListener('click', () => {
        music.pause();
    })
    document.querySelectorAll('.v-volume')[i].addEventListener('mousemove', () => {
        music.volume = document.querySelector('.v-volume').value / 100;
    })
}

