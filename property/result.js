if(document.querySelector('.v-result') && document.querySelector('.v-operation')) {
    document.querySelector(".v-operation").addEventListener("click", () => {
        let e=document.querySelector(".v-var-1").value;
        r = document.querySelector(".v-var-2").value;
        t = Number(e) + Number(r);
        u = Number(t);
        document.querySelector(".v-result").innerText = u;
    }) 
}