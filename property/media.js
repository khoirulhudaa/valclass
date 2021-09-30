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

document.querySelector('.v-play').addEventListener('click', fplay)
document.querySelector('.v-pause').addEventListener('click', fmuted)
document.querySelector('.v-volume').addEventListener('mousemove', fvol)

// play music
function fplay() {
    music.play();
}

// mute music
function fmuted() {
    music.pause();
}

// volume music
  function fvol() {
    music.volume = document.querySelector('.v-volume').value / 100;
}