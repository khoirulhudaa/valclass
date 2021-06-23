// agar dibuatkan sebuat style di tag head secara otomatis ketika browser di load
// to make a style in the head tag automatically when the browser is loaded

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

//============================//==============================//

// Memanggil file property sesuai nama kelas yang tertera pada tag body
// #developerValclass - Muhammad Khoirul Huda -> developervalclass@gmail.com

// Call the property file according to the class name listed in the body tag
// #developerValclass - Muhammad Khoirul Huda -> developervalclass@gmail.com


if(document.querySelector("body").classList.contains("active")) {
    js = "https://cdn.jsdelivr.net/gh/valclassdevelop/valclassDocumentation/property/active.js";

    script = document.createElement("script")
    body = document.getElementsByTagName("body")[0]
    script.src = js
    body.appendChild(script)
}

if(document.querySelector("body").classList.contains("align-content")) {
    js = "https://cdn.jsdelivr.net/gh/valclassdevelop/valclassDocumentation/property/alignContent.js";

    script = document.createElement("script")
    body = document.getElementsByTagName("body")[0]
    script.src = js
    body.appendChild(script)
}

if(document.querySelector("body").classList.contains("align-items")) {
    js = "https://cdn.jsdelivr.net/gh/valclassdevelop/valclassDocumentation/property/alignItems.js";

    script = document.createElement("script")
    body = document.getElementsByTagName("body")[0]
    script.src = js
    body.appendChild(script)
}

if(document.querySelector("body").classList.contains("align-self")) {
    js = "https://cdn.jsdelivr.net/gh/valclassdevelop/valclassDocumentation/property/alignSelf.js";

    script = document.createElement("script")
    body = document.getElementsByTagName("body")[0]
    script.src = js
    body.appendChild(script)
}

if(document.querySelector("body").classList.contains("animation")) {
    js = "https://cdn.jsdelivr.net/gh/valclassdevelop/valclassDocumentation/property/animation.js";

    script = document.createElement("script")
    body = document.getElementsByTagName("body")[0]
    script.src = js
    body.appendChild(script)
}

if(document.querySelector("body").classList.contains("background-attachment")) {
    js = "https://cdn.jsdelivr.net/gh/valclassdevelop/valclassDocumentation/property/backgroundAttachment.js";

    script = document.createElement("script")
    body = document.getElementsByTagName("body")[0]
    script.src = js
    body.appendChild(script)
}

if(document.querySelector("body").classList.contains("background-blend")) {
    js = "https://cdn.jsdelivr.net/gh/valclassdevelop/valclassDocumentation/property/backgroundBlendMode.js";

    script = document.createElement("script")
    body = document.getElementsByTagName("body")[0]
    script.src = js
    body.appendChild(script)
}

if(document.querySelector("body").classList.contains("background-clip")) {
    js = "https://cdn.jsdelivr.net/gh/valclassdevelop/valclassDocumentation/property/backgroundClip.js";

    script = document.createElement("script")
    body = document.getElementsByTagName("body")[0]
    script.src = js
    body.appendChild(script)
}

if(document.querySelector("body").classList.contains("background-color")) {
    js = "https://cdn.jsdelivr.net/gh/valclassdevelop/valclassDocumentation/property/backgroundColor.js";

    script = document.createElement("script")
    body = document.getElementsByTagName("body")[0]
    script.src = js
    body.appendChild(script)
}

if(document.querySelector("body").classList.contains("background-origin")) {
    js = "https://cdn.jsdelivr.net/gh/valclassdevelop/valclassDocumentation/property/backgroundOrigin.js";

    script = document.createElement("script")
    body = document.getElementsByTagName("body")[0]
    script.src = js
    body.appendChild(script)
}

if(document.querySelector("body").classList.contains("background-position")) {
    js = "https://cdn.jsdelivr.net/gh/valclassdevelop/valclassDocumentation/property/backgroundPosition.js";

    script = document.createElement("script")
    body = document.getElementsByTagName("body")[0]
    script.src = js
    body.appendChild(script)
}

if(document.querySelector("body").classList.contains("background-repeat")) {
    js = "https://cdn.jsdelivr.net/gh/valclassdevelop/valclassDocumentation/property/backgroundRepeat.js";

    script = document.createElement("script")
    body = document.getElementsByTagName("body")[0]
    script.src = js
    body.appendChild(script)
}

if(document.querySelector("body").classList.contains("background-size")) {
    js = "https://cdn.jsdelivr.net/gh/valclassdevelop/valclassDocumentation/property/backgroundSize.js";

    script = document.createElement("script")
    body = document.getElementsByTagName("body")[0]
    script.src = js
    body.appendChild(script)
}

if(document.querySelector("body").classList.contains("back-to-top")) {
    js = "https://cdn.jsdelivr.net/gh/valclassdevelop/valclassDocumentation/property/backToTop.js";

    script = document.createElement("script")
    body = document.getElementsByTagName("body")[0]
    script.src = js
    body.appendChild(script)
}

if(document.querySelector("body").classList.contains("border")) {
    js = "https://cdn.jsdelivr.net/gh/valclassdevelop/valclassDocumentation/property/border.js";

    script = document.createElement("script")
    body = document.getElementsByTagName("body")[0]
    script.src = js
    body.appendChild(script)
}

if(document.querySelector("body").classList.contains("box-shadow")) {
    js = "https://cdn.jsdelivr.net/gh/valclassdevelop/valclassDocumentation/property/boxShadow.js";

    script = document.createElement("script")
    body = document.getElementsByTagName("body")[0]
    script.src = js
    body.appendChild(script)
}

if(document.querySelector("body").classList.contains("box-sizing")) {
    js = "https://cdn.jsdelivr.net/gh/valclassdevelop/valclassDocumentation/property/boxSizing.js";

    script = document.createElement("script")
    body = document.getElementsByTagName("body")[0]
    script.src = js
    body.appendChild(script)
}

if(document.querySelector("body").classList.contains("grid")) {
    js = [ 
        "https://cdn.jsdelivr.net/gh/valclassdevelop/valclassDocumentation/property/grid.js",
        "https://cdn.jsdelivr.net/gh/valclassdevelop/valclassDocumentation/property/columnCustom.js"
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
        "https://cdn.jsdelivr.net/gh/valclassdevelop/valclassDocumentation/property/component.js",
        "https://cdn.jsdelivr.net/gh/valclassdevelop/valclassDocumentation/property/DOMnavbar.js"
    ]
    
    for(i = 0; i < js.length; i++) {
        script = document.createElement("script")
        body = document.getElementsByTagName("body")[0]
        script.src = js[i];
        body.appendChild(script)
     }
}

if(document.querySelector("body").classList.contains("connectivity")) {
    js = "https://cdn.jsdelivr.net/gh/valclassdevelop/valclassDocumentation/property/connectivity.js";

    script = document.createElement("script")
    body = document.getElementsByTagName("body")[0]
    script.src = js
    body.appendChild(script)
}

if(document.querySelector("body").classList.contains("cursor")) {
    js = "https://cdn.jsdelivr.net/gh/valclassdevelop/valclassDocumentation/property/cursor.js";

    script = document.createElement("script")
    body = document.getElementsByTagName("body")[0]
    script.src = js
    body.appendChild(script)
}

if(document.querySelector("body").classList.contains("mode")) {
    js = "https://cdn.jsdelivr.net/gh/valclassdevelop/valclassDocumentation/property/darkMode.js";

    script = document.createElement("script")
    body = document.getElementsByTagName("body")[0]
    script.src = js
    body.appendChild(script)
}

if(document.querySelector("body").classList.contains("decoration")) {
    js = "https://cdn.jsdelivr.net/gh/valclassdevelop/valclassDocumentation/property/decoration.js";

    script = document.createElement("script")
    body = document.getElementsByTagName("body")[0]
    script.src = js
    body.appendChild(script)
}

if(document.querySelector("body").classList.contains("display")) {
    js = "https://cdn.jsdelivr.net/gh/valclassdevelop/valclassDocumentation/property/display.js";

    script = document.createElement("script")
    body = document.getElementsByTagName("body")[0]
    script.src = js
    body.appendChild(script)
}

if(document.querySelector("body").classList.contains("empty-cell")) {
    js = "https://cdn.jsdelivr.net/gh/valclassdevelop/valclassDocumentation/property/emptyCell.js";

    script = document.createElement("script")
    body = document.getElementsByTagName("body")[0]
    script.src = js
    body.appendChild(script)
}

if(document.querySelector("body").classList.contains("filter")) {
    js = "https://cdn.jsdelivr.net/gh/valclassdevelop/valclassDocumentation/property/filter.js";

    script = document.createElement("script")
    body = document.getElementsByTagName("body")[0]
    script.src = js
    body.appendChild(script)
}

if(document.querySelector("body").classList.contains("flex")) {
    js = "https://cdn.jsdelivr.net/gh/valclassdevelop/valclassDocumentation/property/flex.js";

    script = document.createElement("script")
    body = document.getElementsByTagName("body")[0]
    script.src = js
    body.appendChild(script)
}

if(document.querySelector("body").classList.contains("float")) {
    js = "https://cdn.jsdelivr.net/gh/valclassdevelop/valclassDocumentation/property/float.js";

    script = document.createElement("script")
    body = document.getElementsByTagName("body")[0]
    script.src = js
    body.appendChild(script)
}

if(document.querySelector("body").classList.contains("focus")) {
    js = "https://cdn.jsdelivr.net/gh/valclassdevelop/valclassDocumentation/property/focus.js";

    script = document.createElement("script")
    body = document.getElementsByTagName("body")[0]
    script.src = js
    body.appendChild(script)
}

if(document.querySelector("body").classList.contains("font")) {
    js = [ 
        "https://cdn.jsdelivr.net/gh/valclassdevelop/valclassDocumentation/property/fontFamily.js",
        "https://cdn.jsdelivr.net/gh/valclassdevelop/valclassDocumentation/property/font.js"
    ]
    
    for(i = 0; i < js.length; i++) {
        script = document.createElement("script")
        body = document.getElementsByTagName("body")[0]
        script.src = js[i];
        body.appendChild(script)
     }
}

if(document.querySelector("body").classList.contains("hover")) {
    js = "https://cdn.jsdelivr.net/gh/valclassdevelop/valclassDocumentation/property/hover.js";

    script = document.createElement("script")
    body = document.getElementsByTagName("body")[0]
    script.src = js
    body.appendChild(script)
}

if(document.querySelector("body").classList.contains("icon")) {
    js = "https://cdn.jsdelivr.net/gh/valclassdevelop/valclassDocumentation/property/icons.js";

    script = document.createElement("script")
    body = document.getElementsByTagName("body")[0]
    script.src = js
    body.appendChild(script)
}

if(document.querySelector("body").classList.contains("increment")) {
    js = "https://cdn.jsdelivr.net/gh/valclassdevelop/valclassDocumentation/property/increment.js";

    script = document.createElement("script")
    body = document.getElementsByTagName("body")[0]
    script.src = js
    body.appendChild(script)
}

if(document.querySelector("body").classList.contains("justify-content")) {
    js = "https://cdn.jsdelivr.net/gh/valclassdevelop/valclassDocumentation/property/justifyContent.js";

    script = document.createElement("script")
    body = document.getElementsByTagName("body")[0]
    script.src = js
    body.appendChild(script)
}

if(document.querySelector("body").classList.contains("justify-items")) {
    js = "https://cdn.jsdelivr.net/gh/valclassdevelop/valclassDocumentation/property/justifyItems.js";

    script = document.createElement("script")
    body = document.getElementsByTagName("body")[0]
    script.src = js
    body.appendChild(script)
}

if(document.querySelector("body").classList.contains("justify-self")) {
    js = "https://cdn.jsdelivr.net/gh/valclassdevelop/valclassDocumentation/property/justifySelf.js";

    script = document.createElement("script")
    body = document.getElementsByTagName("body")[0]
    script.src = js
    body.appendChild(script)
}

if(document.querySelector("body").classList.contains("letter-spacing")) {
    js = "https://cdn.jsdelivr.net/gh/valclassdevelop/valclassDocumentation/property/letterSpacing.js";

    script = document.createElement("script")
    body = document.getElementsByTagName("body")[0]
    script.src = js
    body.appendChild(script)
}

if(document.querySelector("body").classList.contains("line-height")) {
    js = "https://cdn.jsdelivr.net/gh/valclassdevelop/valclassDocumentation/property/lineHeight.js";

    script = document.createElement("script")
    body = document.getElementsByTagName("body")[0]
    script.src = js
    body.appendChild(script)
}

if(document.querySelector("body").classList.contains("line-style")) {
    js = "https://cdn.jsdelivr.net/gh/valclassdevelop/valclassDocumentation/property/lineStyle.js";

    script = document.createElement("script")
    body = document.getElementsByTagName("body")[0]
    script.src = js
    body.appendChild(script)
}

if(document.querySelector("body").classList.contains("margin")) {
    js = "https://cdn.jsdelivr.net/gh/valclassdevelop/valclassDocumentation/property/margin.js";

    script = document.createElement("script")
    body = document.getElementsByTagName("body")[0]
    script.src = js
    body.appendChild(script)
}

if(document.querySelector("body").classList.contains("office")) {
    js = [ 
        "https://cdn.jsdelivr.net/gh/valclassdevelop/valclassDocumentation/property/officeExcel.js",
        "https://cdn.jsdelivr.net/gh/valclassdevelop/valclassDocumentation/property/officePdf.js",
        "https://cdn.jsdelivr.net/gh/valclassdevelop/valclassDocumentation/property/officeWord.js"
    ]
    
    for(i = 0; i < js.length; i++) {
        script = document.createElement("script")
        body = document.getElementsByTagName("body")[0]
        script.src = js[i];
        body.appendChild(script)
     }
}

if(document.querySelector("body").classList.contains("opacity")) {
    js = "https://cdn.jsdelivr.net/gh/valclassdevelop/valclassDocumentation/property/opacity.js";

    script = document.createElement("script")
    body = document.getElementsByTagName("body")[0]
    script.src = js
    body.appendChild(script)
}

if(document.querySelector("body").classList.contains("outline")) {
    js = "https://cdn.jsdelivr.net/gh/valclassdevelop/valclassDocumentation/property/outline.js";

    script = document.createElement("script")
    body = document.getElementsByTagName("body")[0]
    script.src = js
    body.appendChild(script)
}

if(document.querySelector("body").classList.contains("overflow")) {
    js = "https://cdn.jsdelivr.net/gh/valclassdevelop/valclassDocumentation/property/overflow.js";

    script = document.createElement("script")
    body = document.getElementsByTagName("body")[0]
    script.src = js
    body.appendChild(script)
}

if(document.querySelector("body").classList.contains("padding")) {
    js = "https://cdn.jsdelivr.net/gh/valclassdevelop/valclassDocumentation/property/padding.js";

    script = document.createElement("script")
    body = document.getElementsByTagName("body")[0]
    script.src = js
    body.appendChild(script)
}

if(document.querySelector("body").classList.contains("page")) {
    js = "https://cdn.jsdelivr.net/gh/valclassdevelop/valclassDocumentation/property/page.js";

    script = document.createElement("script")
    body = document.getElementsByTagName("body")[0]
    script.src = js
    body.appendChild(script)
}

if(document.querySelector("body").classList.contains("perspective")) {
    js = "https://cdn.jsdelivr.net/gh/valclassdevelop/valclassDocumentation/property/perspective.js";

    script = document.createElement("script")
    body = document.getElementsByTagName("body")[0]
    script.src = js
    body.appendChild(script)
}

if(document.querySelector("body").classList.contains("position")) {
    js = "https://cdn.jsdelivr.net/gh/valclassdevelop/valclassDocumentation/property/position.js";

    script = document.createElement("script")
    body = document.getElementsByTagName("body")[0]
    script.src = js
    body.appendChild(script)
}

if(document.querySelector("body").classList.contains("reload")) {
    js = "https://cdn.jsdelivr.net/gh/valclassdevelop/valclassDocumentation/property/reload.js";

    script = document.createElement("script")
    body = document.getElementsByTagName("body")[0]
    script.src = js
    body.appendChild(script)
}

if(document.querySelector("body").classList.contains("result")) {
    js = "https://cdn.jsdelivr.net/gh/valclassdevelop/valclassDocumentation/property/result.js";

    script = document.createElement("script")
    body = document.getElementsByTagName("body")[0]
    script.src = js
    body.appendChild(script)
}

if(document.querySelector("body").classList.contains("sosmed")) {
    js = "https://cdn.jsdelivr.net/gh/valclassdevelop/valclassDocumentation/property/sosmed.js";

    script = document.createElement("script")
    body = document.getElementsByTagName("body")[0]
    script.src = js
    body.appendChild(script)
}

if(document.querySelector("body").classList.contains("text-align")) {
    js = "https://cdn.jsdelivr.net/gh/valclassdevelop/valclassDocumentation/property/textAlign.js";

    script = document.createElement("script")
    body = document.getElementsByTagName("body")[0]
    script.src = js
    body.appendChild(script)
}

if(document.querySelector("body").classList.contains("text-color")) {
    js = "https://cdn.jsdelivr.net/gh/valclassdevelop/valclassDocumentation/property/textColor.js";

    script = document.createElement("script")
    body = document.getElementsByTagName("body")[0]
    script.src = js
    body.appendChild(script)
}

if(document.querySelector("body").classList.contains("text-shadow")) {
    js = "https://cdn.jsdelivr.net/gh/valclassdevelop/valclassDocumentation/property/textShadow.js";

    script = document.createElement("script")
    body = document.getElementsByTagName("body")[0]
    script.src = js
    body.appendChild(script)
}

if(document.querySelector("body").classList.contains("text-transform")) {
    js = "https://cdn.jsdelivr.net/gh/valclassdevelop/valclassDocumentation/property/textTransform.js";

    script = document.createElement("script")
    body = document.getElementsByTagName("body")[0]
    script.src = js
    body.appendChild(script)
}

if(document.querySelector("body").classList.contains("time")) {
    js = "https://cdn.jsdelivr.net/gh/valclassdevelop/valclassDocumentation/property/time.js";

    script = document.createElement("script")
    body = document.getElementsByTagName("body")[0]
    script.src = js
    body.appendChild(script)
}

if(document.querySelector("body").classList.contains("tlrb")) {
    js = "https://cdn.jsdelivr.net/gh/valclassdevelop/valclassDocumentation/property/tlrb.js";

    script = document.createElement("script")
    body = document.getElementsByTagName("body")[0]
    script.src = js
    body.appendChild(script)
}

if(document.querySelector("body").classList.contains("transform")) {
    js = "https://cdn.jsdelivr.net/gh/valclassdevelop/valclassDocumentation/property/transform.js";

    script = document.createElement("script")
    body = document.getElementsByTagName("body")[0]
    script.src = js
    body.appendChild(script)
}

if(document.querySelector("body").classList.contains("transition")) {
    js = "https://cdn.jsdelivr.net/gh/valclassdevelop/valclassDocumentation/property/transition.js";

    script = document.createElement("script")
    body = document.getElementsByTagName("body")[0]
    script.src = js
    body.appendChild(script)
}

if(document.querySelector("body").classList.contains("vertical")) {
    js = "https://cdn.jsdelivr.net/gh/valclassdevelop/valclassDocumentation/property/vertical.js";

    script = document.createElement("script")
    body = document.getElementsByTagName("body")[0]
    script.src = js
    body.appendChild(script)
}

if(document.querySelector("body").classList.contains("visibility")) {
    js = "https://cdn.jsdelivr.net/gh/valclassdevelop/valclassDocumentation/property/visibility.js";

    script = document.createElement("script")
    body = document.getElementsByTagName("body")[0]
    script.src = js
    body.appendChild(script)
}

if(document.querySelector("body").classList.contains("white-space")) {
    js = "https://cdn.jsdelivr.net/gh/valclassdevelop/valclassDocumentation/property/whiteSpace.js";

    script = document.createElement("script")
    body = document.getElementsByTagName("body")[0]
    script.src = js
    body.appendChild(script)
}

if(document.querySelector("body").classList.contains("width-height")) {
    js = "https://cdn.jsdelivr.net/gh/valclassdevelop/valclassDocumentation/property/widthHeight.js";

    script = document.createElement("script")
    body = document.getElementsByTagName("body")[0]
    script.src = js
    body.appendChild(script)
}

if(document.querySelector("body").classList.contains("word-break")) {
    js = "https://cdn.jsdelivr.net/gh/valclassdevelop/valclassDocumentation/property/wordBreak.js";

    script = document.createElement("script")
    body = document.getElementsByTagName("body")[0]
    script.src = js
    body.appendChild(script)
}

if(document.querySelector("body").classList.contains("word-spacing")) {
    js = "https://cdn.jsdelivr.net/gh/valclassdevelop/valclassDocumentation/property/wordSpacing.js";

    script = document.createElement("script")
    body = document.getElementsByTagName("body")[0]
    script.src = js
    body.appendChild(script)
}

if(document.querySelector("body").classList.contains("word-wrap")) {
    js = "https://cdn.jsdelivr.net/gh/valclassdevelop/valclassDocumentation/property/wordWrap.js";

    script = document.createElement("script")
    body = document.getElementsByTagName("body")[0]
    script.src = js
    body.appendChild(script)
}

if(document.querySelector("body").classList.contains("z-index")) {
    js = "https://cdn.jsdelivr.net/gh/valclassdevelop/valclassDocumentation/property/zIndex.js";

    script = document.createElement("script")
    body = document.getElementsByTagName("body")[0]
    script.src = js
    body.appendChild(script)
}

if(document.querySelector("body").classList.contains("zoom")) {
    js = "https://cdn.jsdelivr.net/gh/valclassdevelop/valclassDocumentation/property/zoom.js";

    script = document.createElement("script")
    body = document.getElementsByTagName("body")[0]
    script.src = js
    body.appendChild(script)
}

if(document.querySelector("body").classList.contains("media")) {
    js = "https://cdn.jsdelivr.net/gh/valclassdevelop/valclassDocumentation/property/media.js";

    script = document.createElement("script")
    body = document.getElementsByTagName("body")[0]
    script.src = js
    body.appendChild(script)
}

if(document.querySelector("body").classList.contains("load")) {
    js = "https://cdn.jsdelivr.net/gh/valclassdevelop/valclassDocumentation/property/load.js";

    script = document.createElement("script")
    body = document.getElementsByTagName("body")[0]
    script.src = js
    body.appendChild(script)
}

if(document.querySelector("body").classList.contains("image")) {
    js = "https://cdn.jsdelivr.net/gh/valclassdevelop/valclassDocumentation/property/image.js";

    script = document.createElement("script")
    body = document.getElementsByTagName("body")[0]
    script.src = js
    body.appendChild(script)
}

if(document.querySelector("body").classList.contains("3d")) {
     js = [ 
        "https://cdn.jsdelivr.net/gh/valclassdevelop/valclassDocumentation/property/vanilla-tilt.js",
        "https://cdn.jsdelivr.net/gh/valclassdevelop/valclassDocumentation/property/tilt.js"
    ]
    
    for(i = 0; i < js.length; i++) {
        script = document.createElement("script")
        body = document.getElementsByTagName("body")[0]
        script.src = js[i];
        body.appendChild(script)
     }

    script = document.createElement("script")
    body = document.getElementsByTagName("body")[0]
    script.src = js
    body.appendChild(script)
}

//============================//==============================//

// akhir dari pengkondisian untuk pemanggilan file property
// #developerValclass - Muhammad Khoirul Huda -> developervalclass@gmail.com

// end of the conditions for calling the file property
// #developerValclass - Muhammad Khoirul Huda -> developervalclass@gmail.com
    