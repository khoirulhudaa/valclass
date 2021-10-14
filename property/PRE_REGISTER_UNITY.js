for (var i = 0; i <= window.PRE_REGISTER_UNITY.length - 1; i++) {
    let className = window.PRE_REGISTER_UNITY[i];
    let unityClassName = window.uniteValclass[className]
    console.log('unityClassName :', unityClassName)
    console.log('className :', className)
    
    if (document.querySelector(`.${window.PRE_REGISTER_UNITY[i]}`) || document.querySelectorAll(`.${window.PRE_REGISTER_UNITY[i]}`)[i]) {
        document.querySelector(`.${window.PRE_REGISTER_UNITY[i]}`).classList.add(...window.uniteValclass[className]) && document.querySelectorAll(`.${window.PRE_REGISTER_UNITY[i]}`)[i].classList.add(...window.uniteValclass[className]);
        document.querySelectorAll(`.${window.PRE_REGISTER_UNITY[i]}`)[i].classList.add(...window.uniteValclass[className]);
        Core(document.body);
    }
}