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
   'v-swiper'
]

let valueComponent = [
   `.v-btn {
        position: relative;
        top: 0;
        width: auto;
        height: auto;
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
        width: auto;
        height: auto;
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
        width: auto;
        height: auto;
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
        width: auto;
        height: auto;
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
        width: auto;
        height: auto;
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
        width: auto;
        height: auto;
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
        width: auto;
        height: auto;
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
        width: auto;
        height: auto;
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
        width: auto;
        height: auto;
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
        width: auto;
        height: auto;
        font-weight: 500;
        text-align: center;
        border-radius: 3px;
        cursor: pointer;
        margin: 10px;
        padding: 5px 15px;
        background-color: rgb(14, 253, 201);
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
     top: 5px;
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
        top: 20px;
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
     top: 5px;
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
         display: fixed;
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
        top: 20px;
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
      position: absolute;
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
      position: absolute;
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
      position: absolute;
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
      position: absolute;
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
      position: absolute;
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
      position: absolute;
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
      position: absolute;
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
      position: absolute;
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
      position: absolute;
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
      background-color: rgb(14, 253, 201);
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
      height: 180px;
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
      height: 100%;
  }
  
  .v-card-content {
      width: 100%;
      height: max-content;
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
      margin-left: 10px;
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
      padding: 4px 6px;
      color: white;
      margin-top: 15px;
      border-radius: 4px;
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
      background-image: url('./img/next.png');
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
      background-image: url('./img/left-arrow.png');
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
   `
   .swiper-container {
      width: 100%;
      padding-top: 50px;
      padding-bottom: 50px;
   }

   .swiper-slide {
      background-position: center;
      background-size: cover;
      width: 300px;
      height: 300px;
   }
   `
]
for (var i = 0; i <= propertiesComponent.length; i++) {
   if (document.querySelector(`.${propertiesComponent[i]}`) && !document.querySelector('style').innerText.includes(propertiesComponent[i])) {
       let s = ` 
               ${valueComponent[i]}
               `;
       document.getElementsByTagName('style')[0].appendChild(document.createTextNode(s));
   }
}

if(document.querySelector('.v-swiper')) {
   
   document.getElementsByTagName("style")[0].appendChild(document.createTextNode(style))

   link = document.createElement("link")
   head = document.getElementsByTagName("head")[0]

   tmp = link ;
   tmp.href = "https://unpkg.com/swiper/swiper-bundle.min.css";
   link.rel = "stylesheet"
   head.appendChild(tmp)

   js = [ 
      "https://unpkg.com/swiper/swiper-bundle.min.js",
      "./swiper.js"
  ]
  
  for(i = 0; i < js.length; i++) {
      script = document.createElement("script")
      body = document.getElementsByTagName("body")[0]
      script.src = js[i];
      body.appendChild(script)
   }
}

if(document.querySelector('.v-brand')) {
   document.querySelector('.v-brand').addEventListener('click', () => {
      window.location.reload();
   })
}

if (document.querySelector('.modal')) {

      document.querySelector('.v-modal-content').classList.add('hiddenModal')
      document.querySelector('.modal').classList.add('hiddenSModals')

   if (document.querySelector('.v-close')) {
      document.querySelector('.v-close').innerHTML = '<img class="v-times-icon-xgHs76" src="https://github.com/valclassdevelop/valclassDocumentation/blob/main/times-solid.svg">'
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
