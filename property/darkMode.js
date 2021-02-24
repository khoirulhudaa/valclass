if (document.querySelector('.v-template-light-mode')) {
    let stylesX = ` 
    .v-dark-mode {
        background-color: rgb(44, 44, 44);
        border: none;
        width: 100px;
        outline: none;
        height: max-content;
        border-radius: 40px;
        padding: 5px;
        text-align: center;
        font-weight: 500;
     }
     
     .v-dark-mode-on {
        background-color: rgb(160, 160, 160);
        border: none;
        width: 100px;
        outline: none;
        height: max-content;
        border-radius: 40px;
        padding: 5px;
        text-align: center;
        font-weight: 500;
     }
     
     .v-dark-mode .toggle-mode {
        position: relative;
        width: 35px;
        height: 35px;
        left: 0;
        cursor: pointer;
        border-radius: 90px;
        background-color: #fff;
        transition: 0.3s;
     }
     
     .toggle-mode:hover {
        opacity: 0.8;
        transform: scale(0.97);
        transition: 0.3s;
     }
     
     .modeDarks {
        position: relative;
        margin-left: 55px;
        transition: 0.3s;
        background-color: rgb(44, 44, 44);
     }
     
     .darkModes { 
        background-color: #313131;
        color: white;
     }
     
     .lightModes {
        background-color: white;
        color: #313131;
     }`;
    document.getElementsByTagName('style')[0].appendChild(document.createTextNode(stylesX));
    s = 0;
    document.querySelector('.toggle-mode').addEventListener('click', () => {
        s += 1;
        if (s % 2 == 0) {
            for (var i = 0; i < document.querySelectorAll('.v-template-light-mode').length; i++) {
                document.querySelector('.toggle-mode').classList.remove('modeDarks');
                document.querySelector('.v-dark-mode').classList.remove('v-dark-mode-on');
                document.querySelectorAll('.v-template-light-mode')[i].classList.remove('lightModes');
            }
        } else {
            for (var i = 0; i < document.querySelectorAll('.v-template-light-mode').length; i++) {
                document.querySelector('.toggle-mode').classList.add('modeDarks');
                document.querySelector('.v-dark-mode').classList.add('v-dark-mode-on');
                document.querySelectorAll('.v-template-light-mode')[i].classList.add('lightModes');
            }
        }
    })
}
if (document.querySelector('.v-template-dark-mode')) {
    let stylesX = ` 
    .v-dark-mode {
        background-color: rgb(44, 44, 44);
        border: none;
        width: 100px;
        outline: none;
        height: max-content;
        border-radius: 40px;
        padding: 5px;
        text-align: center;
        font-weight: 500;
     }
     
     .v-dark-mode-on {
        background-color: rgb(160, 160, 160);
        border: none;
        width: 100px;
        outline: none;
        height: max-content;
        border-radius: 40px;
        padding: 5px;
        text-align: center;
        font-weight: 500;
     }
     
     .v-dark-mode .toggle-mode {
        position: relative;
        width: 35px;
        height: 35px;
        left: 0;
        cursor: pointer;
        border-radius: 90px;
        background-color: #fff;
        transition: 0.3s;
     }
     
     .toggle-mode:hover {
        opacity: 0.8;
        transform: scale(0.97);
        transition: 0.3s;
     }
     
     .modeDarks {
        position: relative;
        margin-left: 55px;
        transition: 0.3s;
        background-color: rgb(44, 44, 44);
     }
     
     .darkModes { 
        background-color: #313131;
        color: white;
     }
     
     .lightModes {
        background-color: white;
        color: #313131;
     }`;
    document.getElementsByTagName('style')[0].appendChild(document.createTextNode(stylesX));
    s = 0;
    document.querySelector('.toggle-mode').addEventListener('click', () => {
        s += 1;
        if (s % 2 == 0) {
            for (var i = 0; i < document.querySelectorAll('.v-template-dark-mode').length; i++) {
                document.querySelector('.toggle-mode').classList.remove('modeDarks');
                document.querySelector('.v-dark-mode').classList.remove('v-dark-mode-on');
                document.querySelectorAll('.v-template-dark-mode')[i].classList.remove('darkModes');
            }
        } else {
            for (var i = 0; i < document.querySelectorAll('.v-template-dark-mode').length; i++) {
                document.querySelector('.toggle-mode').classList.add('modeDarks');
                document.querySelector('.v-dark-mode').classList.add('v-dark-mode-on');
                document.querySelectorAll('.v-template-dark-mode')[i].classList.add('darkModes');
            }
        }
    })
}