// agar dibuatkan sebuat style di tag head secara otomatis ketika pertama kali browser di load

if (document.querySelector('body')) {
    let css = document.createElement('style');
    css.type = 'text/css';

    let styles = ` 
        body { 
            padding: 0;
            margin: 0;
        }`;
    if (css.styleSheet) {
        css.styleSheet.cssText = styles;
    }
    else {
        css.appendChild(document.createTextNode(styles));
    }
    document.getElementsByTagName("head")[0].appendChild(css);
}


// Memanggil file property sesuai nama kelas yang tertera pada tag body
// #developerValclass - Muhammad Khoirul Huda -> developervalclass@gmail.com


if(document.querySelector("body").classList.contains("active")) {
    js = "./property/active.js";

    script = document.createElement("script")
    body = document.getElementsByTagName("body")[0]
    script.src = js
    body.appendChild(script)
}

if(document.querySelector("body").classList.contains("align-content")) {
    js = "./property/alignContent.js";

    script = document.createElement("script")
    body = document.getElementsByTagName("body")[0]
    script.src = js
    body.appendChild(script)
}

if(document.querySelector("body").classList.contains("align-items")) {
    js = "./property/alignItems.js";

    script = document.createElement("script")
    body = document.getElementsByTagName("body")[0]
    script.src = js
    body.appendChild(script)
}

if(document.querySelector("body").classList.contains("align-self")) {
    js = "./property/alignSelf.js";

    script = document.createElement("script")
    body = document.getElementsByTagName("body")[0]
    script.src = js
    body.appendChild(script)
}

if(document.querySelector("body").classList.contains("animation")) {
    js = "./property/animation.js";

    script = document.createElement("script")
    body = document.getElementsByTagName("body")[0]
    script.src = js
    body.appendChild(script)
}

if(document.querySelector("body").classList.contains("background-attachment")) {
    js = "./property/backgroundAttachment.js";

    script = document.createElement("script")
    body = document.getElementsByTagName("body")[0]
    script.src = js
    body.appendChild(script)
}

if(document.querySelector("body").classList.contains("background-blend")) {
    js = "./property/backgroundBlendMode.js";

    script = document.createElement("script")
    body = document.getElementsByTagName("body")[0]
    script.src = js
    body.appendChild(script)
}

if(document.querySelector("body").classList.contains("background-clip")) {
    js = "./property/backgroundClip.js";

    script = document.createElement("script")
    body = document.getElementsByTagName("body")[0]
    script.src = js
    body.appendChild(script)
}

if(document.querySelector("body").classList.contains("background-color")) {
    js = "./property/backgroundColor.js";

    script = document.createElement("script")
    body = document.getElementsByTagName("body")[0]
    script.src = js
    body.appendChild(script)
}

if(document.querySelector("body").classList.contains("background-origin")) {
    js = "./property/backgroundOrigin.js";

    script = document.createElement("script")
    body = document.getElementsByTagName("body")[0]
    script.src = js
    body.appendChild(script)
}

if(document.querySelector("body").classList.contains("background-position")) {
    js = "./property/backgroundPosition.js";

    script = document.createElement("script")
    body = document.getElementsByTagName("body")[0]
    script.src = js
    body.appendChild(script)
}

if(document.querySelector("body").classList.contains("background-repeat")) {
    js = "./property/backgroundRepeat.js";

    script = document.createElement("script")
    body = document.getElementsByTagName("body")[0]
    script.src = js
    body.appendChild(script)
}

if(document.querySelector("body").classList.contains("background-size")) {
    js = "./property/backgroundSize.js";

    script = document.createElement("script")
    body = document.getElementsByTagName("body")[0]
    script.src = js
    body.appendChild(script)
}

if(document.querySelector("body").classList.contains("back-to-top")) {
    js = "./property/backToTop.js";

    script = document.createElement("script")
    body = document.getElementsByTagName("body")[0]
    script.src = js
    body.appendChild(script)
}

if(document.querySelector("body").classList.contains("border")) {
    js = "./property/border.js";

    script = document.createElement("script")
    body = document.getElementsByTagName("body")[0]
    script.src = js
    body.appendChild(script)
}

if(document.querySelector("body").classList.contains("box-shadow")) {
    js = "./property/boxShadow.js";

    script = document.createElement("script")
    body = document.getElementsByTagName("body")[0]
    script.src = js
    body.appendChild(script)
}

if(document.querySelector("body").classList.contains("box-sizing")) {
    js = "./property/boxSizing.js";

    script = document.createElement("script")
    body = document.getElementsByTagName("body")[0]
    script.src = js
    body.appendChild(script)
}

if(document.querySelector("body").classList.contains("grid")) {
    js = [ 
        "./property/grid.js",
        "./property/columnCustom.js"
    ]
    
    for(i = 0; i < js.length; i++) {
        script = document.createElement("script")
        body = document.getElementsByTagName("body")[0]
        script.src = js[i];
        body.appendChild(script)
     }
}

if(document.querySelector("body").classList.contains("component")) {
    js = [ 
        "./property/component.js",
        "./property/DOMnavbar.js"
    ]
    
    for(i = 0; i < js.length; i++) {
        script = document.createElement("script")
        body = document.getElementsByTagName("body")[0]
        script.src = js[i];
        body.appendChild(script)
     }
}

if(document.querySelector("body").classList.contains("connectivity")) {
    js = "./property/connectivity.js";

    script = document.createElement("script")
    body = document.getElementsByTagName("body")[0]
    script.src = js
    body.appendChild(script)
}

if(document.querySelector("body").classList.contains("cursor")) {
    js = "./property/cursor.js";

    script = document.createElement("script")
    body = document.getElementsByTagName("body")[0]
    script.src = js
    body.appendChild(script)
}

if(document.querySelector("body").classList.contains("mode")) {
    js = "./property/darkMode.js";

    script = document.createElement("script")
    body = document.getElementsByTagName("body")[0]
    script.src = js
    body.appendChild(script)
}

if(document.querySelector("body").classList.contains("decoration")) {
    js = "./property/decoration.js";

    script = document.createElement("script")
    body = document.getElementsByTagName("body")[0]
    script.src = js
    body.appendChild(script)
}

if(document.querySelector("body").classList.contains("display")) {
    js = "./property/display.js";

    script = document.createElement("script")
    body = document.getElementsByTagName("body")[0]
    script.src = js
    body.appendChild(script)
}

if(document.querySelector("body").classList.contains("empty-cell")) {
    js = "./property/emptyCell.js";

    script = document.createElement("script")
    body = document.getElementsByTagName("body")[0]
    script.src = js
    body.appendChild(script)
}

if(document.querySelector("body").classList.contains("filter")) {
    js = "./property/filter.js";

    script = document.createElement("script")
    body = document.getElementsByTagName("body")[0]
    script.src = js
    body.appendChild(script)
}

if(document.querySelector("body").classList.contains("flex")) {
    js = "./property/flex.js";

    script = document.createElement("script")
    body = document.getElementsByTagName("body")[0]
    script.src = js
    body.appendChild(script)
}

if(document.querySelector("body").classList.contains("float")) {
    js = "./property/float.js";

    script = document.createElement("script")
    body = document.getElementsByTagName("body")[0]
    script.src = js
    body.appendChild(script)
}

if(document.querySelector("body").classList.contains("focus")) {
    js = "./property/focus.js";

    script = document.createElement("script")
    body = document.getElementsByTagName("body")[0]
    script.src = js
    body.appendChild(script)
}

if(document.querySelector("body").classList.contains("font")) {
    js = [ 
        "./property/fontFamily.js",
        "./property/font.js"
    ]
    
    for(i = 0; i < js.length; i++) {
        script = document.createElement("script")
        body = document.getElementsByTagName("body")[0]
        script.src = js[i];
        body.appendChild(script)
     }
}

if(document.querySelector("body").classList.contains("hover")) {
    js = "./property/hover.js";

    script = document.createElement("script")
    body = document.getElementsByTagName("body")[0]
    script.src = js
    body.appendChild(script)
}

if(document.querySelector("body").classList.contains("icon")) {
    js = "./property/icons.js";

    script = document.createElement("script")
    body = document.getElementsByTagName("body")[0]
    script.src = js
    body.appendChild(script)
}

if(document.querySelector("body").classList.contains("increment")) {
    js = "./property/increment.js";

    script = document.createElement("script")
    body = document.getElementsByTagName("body")[0]
    script.src = js
    body.appendChild(script)
}

if(document.querySelector("body").classList.contains("justify-content")) {
    js = "./property/justifyContent.js";

    script = document.createElement("script")
    body = document.getElementsByTagName("body")[0]
    script.src = js
    body.appendChild(script)
}

if(document.querySelector("body").classList.contains("justify-items")) {
    js = "./property/justifyItems.js";

    script = document.createElement("script")
    body = document.getElementsByTagName("body")[0]
    script.src = js
    body.appendChild(script)
}

if(document.querySelector("body").classList.contains("justify-self")) {
    js = "./property/justifySelf.js";

    script = document.createElement("script")
    body = document.getElementsByTagName("body")[0]
    script.src = js
    body.appendChild(script)
}

if(document.querySelector("body").classList.contains("letter-spacing")) {
    js = "./property/letterSpacing.js";

    script = document.createElement("script")
    body = document.getElementsByTagName("body")[0]
    script.src = js
    body.appendChild(script)
}

if(document.querySelector("body").classList.contains("line-height")) {
    js = "./property/lineHeight.js";

    script = document.createElement("script")
    body = document.getElementsByTagName("body")[0]
    script.src = js
    body.appendChild(script)
}

if(document.querySelector("body").classList.contains("line-style")) {
    js = "./property/lineStyle.js";

    script = document.createElement("script")
    body = document.getElementsByTagName("body")[0]
    script.src = js
    body.appendChild(script)
}

if(document.querySelector("body").classList.contains("margin")) {
    js = "./property/margin.js";

    script = document.createElement("script")
    body = document.getElementsByTagName("body")[0]
    script.src = js
    body.appendChild(script)
}

if(document.querySelector("body").classList.contains("office")) {
    js = [ 
        "./property/officeExcel.js",
        "./property/officePdf.js",
        "./property/officeWord.js"
    ]
    
    for(i = 0; i < js.length; i++) {
        script = document.createElement("script")
        body = document.getElementsByTagName("body")[0]
        script.src = js[i];
        body.appendChild(script)
     }
}

if(document.querySelector("body").classList.contains("opacity")) {
    js = "./property/opacity.js";

    script = document.createElement("script")
    body = document.getElementsByTagName("body")[0]
    script.src = js
    body.appendChild(script)
}

if(document.querySelector("body").classList.contains("outline")) {
    js = "./property/outline.js";

    script = document.createElement("script")
    body = document.getElementsByTagName("body")[0]
    script.src = js
    body.appendChild(script)
}

if(document.querySelector("body").classList.contains("overflow")) {
    js = "./property/overflow.js";

    script = document.createElement("script")
    body = document.getElementsByTagName("body")[0]
    script.src = js
    body.appendChild(script)
}

if(document.querySelector("body").classList.contains("padding")) {
    js = "./property/padding.js";

    script = document.createElement("script")
    body = document.getElementsByTagName("body")[0]
    script.src = js
    body.appendChild(script)
}

if(document.querySelector("body").classList.contains("page")) {
    js = "./property/page.js";

    script = document.createElement("script")
    body = document.getElementsByTagName("body")[0]
    script.src = js
    body.appendChild(script)
}

if(document.querySelector("body").classList.contains("perspective")) {
    js = "./property/perspective.js";

    script = document.createElement("script")
    body = document.getElementsByTagName("body")[0]
    script.src = js
    body.appendChild(script)
}

if(document.querySelector("body").classList.contains("position")) {
    js = "./property/position.js";

    script = document.createElement("script")
    body = document.getElementsByTagName("body")[0]
    script.src = js
    body.appendChild(script)
}

if(document.querySelector("body").classList.contains("reload")) {
    js = "./property/reload.js";

    script = document.createElement("script")
    body = document.getElementsByTagName("body")[0]
    script.src = js
    body.appendChild(script)
}

if(document.querySelector("body").classList.contains("result")) {
    js = "./property/result.js";

    script = document.createElement("script")
    body = document.getElementsByTagName("body")[0]
    script.src = js
    body.appendChild(script)
}

if(document.querySelector("body").classList.contains("sosmed")) {
    js = "./property/sosmed.js";

    script = document.createElement("script")
    body = document.getElementsByTagName("body")[0]
    script.src = js
    body.appendChild(script)
}

if(document.querySelector("body").classList.contains("text-align")) {
    js = "./property/textAlign.js";

    script = document.createElement("script")
    body = document.getElementsByTagName("body")[0]
    script.src = js
    body.appendChild(script)
}

if(document.querySelector("body").classList.contains("text-color")) {
    js = "./property/textColor.js";

    script = document.createElement("script")
    body = document.getElementsByTagName("body")[0]
    script.src = js
    body.appendChild(script)
}

if(document.querySelector("body").classList.contains("text-shadow")) {
    js = "./property/textShadow.js";

    script = document.createElement("script")
    body = document.getElementsByTagName("body")[0]
    script.src = js
    body.appendChild(script)
}

if(document.querySelector("body").classList.contains("text-transform")) {
    js = "./property/textTransform.js";

    script = document.createElement("script")
    body = document.getElementsByTagName("body")[0]
    script.src = js
    body.appendChild(script)
}

if(document.querySelector("body").classList.contains("time")) {
    js = "./property/time.js";

    script = document.createElement("script")
    body = document.getElementsByTagName("body")[0]
    script.src = js
    body.appendChild(script)
}

if(document.querySelector("body").classList.contains("tlrb")) {
    js = "./property/tlrb.js";

    script = document.createElement("script")
    body = document.getElementsByTagName("body")[0]
    script.src = js
    body.appendChild(script)
}

if(document.querySelector("body").classList.contains("transform")) {
    js = "./property/transform.js";

    script = document.createElement("script")
    body = document.getElementsByTagName("body")[0]
    script.src = js
    body.appendChild(script)
}

if(document.querySelector("body").classList.contains("transition")) {
    js = "./property/transition.js";

    script = document.createElement("script")
    body = document.getElementsByTagName("body")[0]
    script.src = js
    body.appendChild(script)
}

if(document.querySelector("body").classList.contains("vertical")) {
    js = "./property/vertical.js";

    script = document.createElement("script")
    body = document.getElementsByTagName("body")[0]
    script.src = js
    body.appendChild(script)
}

if(document.querySelector("body").classList.contains("visibility")) {
    js = "./property/visibility.js";

    script = document.createElement("script")
    body = document.getElementsByTagName("body")[0]
    script.src = js
    body.appendChild(script)
}

if(document.querySelector("body").classList.contains("white-space")) {
    js = "./property/whiteSpace.js";

    script = document.createElement("script")
    body = document.getElementsByTagName("body")[0]
    script.src = js
    body.appendChild(script)
}

if(document.querySelector("body").classList.contains("width-height")) {
    js = "./property/widthHeight.js";

    script = document.createElement("script")
    body = document.getElementsByTagName("body")[0]
    script.src = js
    body.appendChild(script)
}

if(document.querySelector("body").classList.contains("word-break")) {
    js = "./property/wordBreak.js";

    script = document.createElement("script")
    body = document.getElementsByTagName("body")[0]
    script.src = js
    body.appendChild(script)
}

if(document.querySelector("body").classList.contains("word-spacing")) {
    js = "./property/wordSpacing.js";

    script = document.createElement("script")
    body = document.getElementsByTagName("body")[0]
    script.src = js
    body.appendChild(script)
}

if(document.querySelector("body").classList.contains("word-wrap")) {
    js = "./property/wordWrap.js";

    script = document.createElement("script")
    body = document.getElementsByTagName("body")[0]
    script.src = js
    body.appendChild(script)
}

if(document.querySelector("body").classList.contains("z-index")) {
    js = "./property/zIndex.js";

    script = document.createElement("script")
    body = document.getElementsByTagName("body")[0]
    script.src = js
    body.appendChild(script)
}

if(document.querySelector("body").classList.contains("zoom")) {
    js = "./property/zoom.js";

    script = document.createElement("script")
    body = document.getElementsByTagName("body")[0]
    script.src = js
    body.appendChild(script)
}

// akhir dari pengkondisian untuk pemanggilan file property
// #developerValclass - Muhammad Khoirul Huda -> developervalclass@gmail.com