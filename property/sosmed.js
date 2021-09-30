if(document.querySelector('.v-sosmed-wa')) {   
    document.querySelector(".v-sosmed-wa").addEventListener("click",()=>{
        window.open(document.querySelector(".v-sosmed-wa").getAttribute("url"))
    })
}
if(document.querySelector('.v-sosmed-fb')) {
    document.querySelector(".v-sosmed-fb").addEventListener("click",()=>{
        window.open(document.querySelector(".v-sosmed-fb").getAttribute("url"))
    })
}
if(document.querySelector('.v-sosmed-ig')) {
    document.querySelector(".v-sosmed-ig").addEventListener("click",()=>{
        window.open(document.querySelector(".v-sosmed-ig").getAttribute("url"))
    })
}