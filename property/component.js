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
      z-index: 999;
      display: flex;
      font-family:sans-serif;
      background-color: rgb(107, 107, 103);
      justify-content: space-around;
      height: 64px;
      align-items: center;
      color: rgb(255, 255, 255);
   }
   
   .v-navbar h3 {
      align-items: center;
   }
   
   .v-navbar ul {
      display: flex;
      justify-content: space-between;
      list-style: none;
      width: 40%;
   }
   
   .v-navbar ul li a:hover {
      filter: brightness(90%);
   }
   
   .v-navbar ul li a {
      color: rgb(255, 255, 255);
      text-decoration: none;
   }
   
   .v-btn-toggle {
      position: relative;
      display: flex;
      z-index: 2;
      flex-direction: column;
      cursor: pointer;
      height: 23px;
      justify-content: space-between;
      transition: 0.5s;
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
   
   .v-navbar ul.show {
      transform: translateX(0%);
      right: 0;
      opacity: 1;
      transition: 0.4s ease;
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
         width: 50%;
      }
   }
   
   /* mobile */
   @media screen and (max-width: 576px) {
      .v-btn-toggle {
         display: flex;
      }
      
      .v-navbar ul {
         position: absolute;
         flex-direction: column;
         background-color: rgb(107, 107, 103);
         z-index: 1;
         right: 0;
         transform: translateX(100%);
         align-items: center;
         opacity: 0;
         top: 30px;
         height: 100vh;
         justify-content: space-evenly;
         transition: 0.4s ease;
      }

   }`,
   `
     .v-navbar-fixed {
      position: fixed;
      width: 100vw;
      z-index: 999;
      display: flex;
      font-family:sans-serif;
      background-color: rgb(107, 107, 103);
      justify-content: space-around;
      height: 64px;
      overflow: hidden;
      align-items: center;
      color: rgb(255, 255, 255);
   }
   
   .v-navbar-fixed h3 {
      align-items: center;
   }
   
   .v-navbar-fixed ul {
      display: flex;
      justify-content: space-between;
      list-style: none;
      width: 40%;
   }
   
   .v-navbar-fixed ul li a:hover {
      filter: brightness(90%);
   }
   
   .v-navbar-fixed ul li a {
      color: rgb(255, 255, 255);
      text-decoration: none;
      margin: 10px 0;
   }
   
   .v-btn-toggle {
      position: relative;
      display: flex;
      z-index: 2;
      flex-direction: column;
      cursor: pointer;
      height: 23px;
      justify-content: space-between;
      transition: 0.5s;
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
   
   .v-navbar-fixed ul.show {
      transform: translateX(0%);
      opacity: 1;
      right: 0;
      transition: 0.4s ease;
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
         width: 50%;
      }
   }
   
   /* mobile */
   @media screen and (max-width: 576px) {
      .v-btn-toggle {
         display: flex;
      }
   
      .v-navbar-fixed ul {
         position: fixed;
         flex-direction: column;
         background-color: rgb(107, 107, 103);
         z-index: -1;
         right: 0;
         transform: translateX(100%);
         align-items: center;
         opacity: 0;
         top: 47px;
         height: 100vh;
         justify-content: space-evenly;
         transition: 0.4s ease;
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
      z-index: 3;
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
         z-index: 3;
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
      z-index: 3;
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
         z-index: 3;
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
      z-index: 3;
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
         z-index: 3;
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
      z-index: 3;
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
         z-index: 3;
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
      z-index: 3;
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
         z-index: 3;
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
      border-radius: 8px;
      opacity: 1;
      z-index: 3;
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
         z-index: 3;
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
      z-index: 3;
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
         z-index: 3;
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
      z-index: 3;
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
         z-index: 3;
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
      z-index: 3;
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
         z-index: 3;
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
      z-index: 3;
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
         z-index: 3;
         background-color: #fff;
         animation: slideUp-12gdg .5s ease-in;
         box-shadow: 2px 2px 20px rgb(73, 73, 73);
         transform: rotateX(90deg);
      }
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

if (document.querySelector('.modal')) {

      document.querySelector('.v-modal-content').classList.add('hiddenModal')
      document.querySelector('.modal').classList.add('hiddenSModals')

   if (document.querySelector('.v-close')) {
      document.querySelector('.v-close').innerHTML = '<img class="v-times-icon-xgHs76" src="./times-solid.svg">'
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