let styles = ` 
.v-connectivity {
    position: absolute;
    top: 10px;
    right: 45px;
    z-index: 2;
    font-family: 'Poppins', sans-serif;
    width: max-content;
    height: max-content;
    padding: 10px 25px;
    border-radius: 4px;
    background-color: white;
    color: black;
    box-shadow: 0 1px 2px rgba(0,0,0,0.07), 
            0 2px 4px rgba(0,0,0,0.07), 
            0 4px 8px rgba(0,0,0,0.07), 
            0 8px 16px rgba(0,0,0,0.07),
            0 16px 32px rgba(0,0,0,0.07), 
            0 32px 64px rgba(0,0,0,0.07);
    font-weight: bold;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 20px;
    animation: slideUp-12gdgs .7s linear;
    transform: scale() rotateX(90deg);
 }
 
 .v-connectivity-dark {
    position: absolute;
    top: 10px;
    right: 45px;
    z-index: 2;
    font-family: 'Poppins', sans-serif;
    width: max-content;
    height: max-content;
    padding: 10px 25px;
    border-radius: 4px;
    background-color: rgb(41, 41, 41);
    color: white;
    box-shadow: 0 1px 2px rgba(0,0,0,0.07), 
            0 2px 4px rgba(0,0,0,0.07), 
            0 4px 8px rgba(0,0,0,0.07), 
            0 8px 16px rgba(0,0,0,0.07),
            0 16px 32px rgba(0,0,0,0.07), 
            0 32px 64px rgba(0,0,0,0.07);
    font-weight: bold;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 20px;
    animation: slideUp-12gdgs .7s linear;
    transform: scale() rotateX(90deg);
 }
 
 .v-connectivity span, .v-connectivity-dark span {
   font-weight: 500;
 }
 
 @keyframes slideUp-12gdgs {
  0% {
     opacity: 0;
     top: -25px;
  }
  100% {
     top: 10px;
     opacity: 1;
     transform: scale(1);
  }
 }
 
 .v-connectivity::after {
    position: absolute;
    content: '';
    left: 0;
    bottom: 0;
    width: 0;
    height: 5px;
    background-color: rgb(0, 243, 142);
    animation: after-connect 3s linear;
 }
 
 .v-connectivity-dark::after {
    position: absolute;
    content: '';
    left: 0;
    bottom: 0;
    width: 0;
    height: 5px;
    background-color: rgb(0, 243, 142);
    animation: after-connect 3s linear;
 }
 
 .v-connectivity2::after {
    position: absolute;
    content: '';
    left: 0;
    bottom: 0;
    width: 0;
    height: 5px;
    background-color: rgb(0, 243, 142);
    animation: after-connect 3s linear;
 }
 
 @keyframes after-connect {
    from {
        width: 100%;
    }
    to {
        width: 0;
    }
 }
 
 .icon-connect {
    margin-right: 10px;
    background-color: rgb(0, 243, 142);
    border-radius: 50%;
    padding: 3px;
    color: white;
    text-align: center;
    justify-content: center;
    align-items: center;
 }
`;
document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));

setTimeout(() => {
    document.querySelector('.v-connectivity').style.display = 'none';
}, 3100)
document.querySelector('.v-connectivity').addEventListener('click', () => {
    document.querySelector('.v-connectivity').style.display = 'none';
})

if (document.querySelector('.v-connectivity') || document.querySelector('.v-connectivity-dark')) {
        if (navigator.onLine) {
            document.querySelector('.v-status').innerHTML = '<i class="las la-wifi icon-connect"></i> Online';
        } else {
            document.querySelector('.v-status').innerHTML = '<i class="las la-globe-asia icon-connect"></i> Offline';
        }
}