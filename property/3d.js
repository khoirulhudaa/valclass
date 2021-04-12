if(document.querySelector("body").classList.contains("3d")) {
    js = [ 
        "./property/vanilla-tilt.js",
        "./property/tilt.js"
    ]
    
    for(i = 0; i < js.length; i++) {
        script = document.createElement("script")
        body = document.getElementsByTagName("body")[0]
        script.src = js[i];
        body.appendChild(script)
     }
}