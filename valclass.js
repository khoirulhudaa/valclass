// agar dibuatkan sebuat style di tag head secara otomatis ketika browser di load
// to make a style in the head tag automatically when the browser is loaded

let style_ = document.getElementsByTagName("head")[0]
let css = document.createElement('style');

if (style_) {
    css.type = 'text/css';

    let styles = ` 
            body { 
                padding: 0;
                margin: 0;
            }
            `;
    if (css.styleSheet) {
        css.stext = styles;
    }
    else {
        css.appendChild(document.createTextNode(styles));
    }
    document.getElementsByTagName("head")[0].appendChild(css);
}

if(document.querySelector("body").classList.contains("active")) {
    js = "https://cdn.jsdelivr.net/gh/valclassdevelop/valclass/property/active.js";

    script = document.createElement("script")
    body = document.getElementsByTagName("body")[0]
    script.src = js
    body.appendChild(script)
}

if(document.querySelector("body").classList.contains("align-content")) {
    js = "https://cdn.jsdelivr.net/gh/valclassdevelop/valclass/property/alignContent.js";

    script = document.createElement("script")
    body = document.getElementsByTagName("body")[0]
    script.src = js
    body.appendChild(script)
}

if(document.querySelector("body").classList.contains("align-items")) {
    js = "https://cdn.jsdelivr.net/gh/valclassdevelop/valclass/property/alignItems.js";

    script = document.createElement("script")
    body = document.getElementsByTagName("body")[0]
    script.src = js
    body.appendChild(script)
}

if(document.querySelector("body").classList.contains("align-self")) {
    js = "https://cdn.jsdelivr.net/gh/valclassdevelop/valclass/property/alignSelf.js";

    script = document.createElement("script")
    body = document.getElementsByTagName("body")[0]
    script.src = js
    body.appendChild(script)
}

if(document.querySelector("body").classList.contains("animation")) {
    js = "https://cdn.jsdelivr.net/gh/valclassdevelop/valclass/property/animation.js";

    script = document.createElement("script")
    body = document.getElementsByTagName("body")[0]
    script.src = js
    body.appendChild(script)
}

if(document.querySelector("body").classList.contains("background-attachment")) {
    js = "https://cdn.jsdelivr.net/gh/valclassdevelop/valclass/property/backgroundAttachment.js";

    script = document.createElement("script")
    body = document.getElementsByTagName("body")[0]
    script.src = js
    body.appendChild(script)
}

if(document.querySelector("body").classList.contains("background-blend")) {
    js = "https://cdn.jsdelivr.net/gh/valclassdevelop/valclass/property/backgroundBlendMode.js";

    script = document.createElement("script")
    body = document.getElementsByTagName("body")[0]
    script.src = js
    body.appendChild(script)
}

if(document.querySelector("body").classList.contains("background-clip")) {
    js = "https://cdn.jsdelivr.net/gh/valclassdevelop/valclass/property/backgroundClip.js";

    script = document.createElement("script")
    body = document.getElementsByTagName("body")[0]
    script.src = js
    body.appendChild(script)
}

if(document.querySelector("body").classList.contains("background-color")) {
    js = "https://cdn.jsdelivr.net/gh/valclassdevelop/valclass/property/backgroundColor.js";

    script = document.createElement("script")
    body = document.getElementsByTagName("body")[0]
    script.src = js
    body.appendChild(script)
}

if(document.querySelector("body").classList.contains("background-origin")) {
    js = "https://cdn.jsdelivr.net/gh/valclassdevelop/valclass/property/backgroundOrigin.js";

    script = document.createElement("script")
    body = document.getElementsByTagName("body")[0]
    script.src = js
    body.appendChild(script)
}

if(document.querySelector("body").classList.contains("background-position")) {
    js = "https://cdn.jsdelivr.net/gh/valclassdevelop/valclass/property/backgroundPosition.js";

    script = document.createElement("script")
    body = document.getElementsByTagName("body")[0]
    script.src = js
    body.appendChild(script)
}

if(document.querySelector("body").classList.contains("background-repeat")) {
    js = "https://cdn.jsdelivr.net/gh/valclassdevelop/valclass/property/backgroundRepeat.js";

    script = document.createElement("script")
    body = document.getElementsByTagName("body")[0]
    script.src = js
    body.appendChild(script)
}

if(document.querySelector("body").classList.contains("background-size")) {
    js = "https://cdn.jsdelivr.net/gh/valclassdevelop/valclass/property/backgroundSize.js";

    script = document.createElement("script")
    body = document.getElementsByTagName("body")[0]
    script.src = js
    body.appendChild(script)
}

if(document.querySelector("body").classList.contains("back-to-top")) {
    js = "https://cdn.jsdelivr.net/gh/valclassdevelop/valclass/property/backToTop.js";

    script = document.createElement("script")
    body = document.getElementsByTagName("body")[0]
    script.src = js
    body.appendChild(script)
}

if(document.querySelector("body").classList.contains("border")) {
    js = "https://cdn.jsdelivr.net/gh/valclassdevelop/valclass/property/border.js";

    script = document.createElement("script")
    body = document.getElementsByTagName("body")[0]
    script.src = js
    body.appendChild(script)
}

if(document.querySelector("body").classList.contains("box-shadow")) {
    js = "https://cdn.jsdelivr.net/gh/valclassdevelop/valclass/property/boxShadow.js";

    script = document.createElement("script")
    body = document.getElementsByTagName("body")[0]
    script.src = js
    body.appendChild(script)
}

if(document.querySelector("body").classList.contains("box-sizing")) {
    js = "https://cdn.jsdelivr.net/gh/valclassdevelop/valclass/property/boxSizing.js";

    script = document.createElement("script")
    body = document.getElementsByTagName("body")[0]
    script.src = js
    body.appendChild(script)
}

if(document.querySelector("body").classList.contains("grid")) {
    js = [ 
        "https://cdn.jsdelivr.net/gh/valclassdevelop/valclass/property/grid.js",
        "https://cdn.jsdelivr.net/gh/valclassdevelop/valclass/property/columnCustom.js"
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
        "https://cdn.jsdelivr.net/gh/valclassdevelop/valclass/property/component.js",
        "https://cdn.jsdelivr.net/gh/valclassdevelop/valclass/property/DOMnavbar.js"
    ]
    
    for(i = 0; i < js.length; i++) {
        script = document.createElement("script")
        body = document.getElementsByTagName("body")[0]
        script.src = js[i];
        body.appendChild(script)
     }
}

if(document.querySelector("body").classList.contains("connectivity")) {
    js = "https://cdn.jsdelivr.net/gh/valclassdevelop/valclass/property/connectivity.js";

    script = document.createElement("script")
    body = document.getElementsByTagName("body")[0]
    script.src = js
    body.appendChild(script)
}

if(document.querySelector("body").classList.contains("cursor")) {
    js = "https://cdn.jsdelivr.net/gh/valclassdevelop/valclass/property/cursor.js";

    script = document.createElement("script")
    body = document.getElementsByTagName("body")[0]
    script.src = js
    body.appendChild(script)
}

if(document.querySelector("body").classList.contains("mode")) {
    js = "https://cdn.jsdelivr.net/gh/valclassdevelop/valclass/property/darkMode.js";

    script = document.createElement("script")
    body = document.getElementsByTagName("body")[0]
    script.src = js
    body.appendChild(script)
}

if(document.querySelector("body").classList.contains("decoration")) {
    js = "https://cdn.jsdelivr.net/gh/valclassdevelop/valclass/property/decoration.js";

    script = document.createElement("script")
    body = document.getElementsByTagName("body")[0]
    script.src = js
    body.appendChild(script)
}

if(document.querySelector("body").classList.contains("display")) {
    js = "https://cdn.jsdelivr.net/gh/valclassdevelop/valclass/property/display.js";

    script = document.createElement("script")
    body = document.getElementsByTagName("body")[0]
    script.src = js
    body.appendChild(script)
}

if(document.querySelector("body").classList.contains("empty-cell")) {
    js = "https://cdn.jsdelivr.net/gh/valclassdevelop/valclass/property/emptyCell.js";

    script = document.createElement("script")
    body = document.getElementsByTagName("body")[0]
    script.src = js
    body.appendChild(script)
}

if(document.querySelector("body").classList.contains("filter")) {
    js = "https://cdn.jsdelivr.net/gh/valclassdevelop/valclass/property/filter.js";

    script = document.createElement("script")
    body = document.getElementsByTagName("body")[0]
    script.src = js
    body.appendChild(script)
}

if(document.querySelector("body").classList.contains("flex")) {
    js = "https://cdn.jsdelivr.net/gh/valclassdevelop/valclass/property/flex.js";

    script = document.createElement("script")
    body = document.getElementsByTagName("body")[0]
    script.src = js
    body.appendChild(script)
}

if(document.querySelector("body").classList.contains("float")) {
    js = "https://cdn.jsdelivr.net/gh/valclassdevelop/valclass/property/float.js";

    script = document.createElement("script")
    body = document.getElementsByTagName("body")[0]
    script.src = js
    body.appendChild(script)
}

if(document.querySelector("body").classList.contains("focus")) {
    js = "https://cdn.jsdelivr.net/gh/valclassdevelop/valclass/property/focus.js";

    script = document.createElement("script")
    body = document.getElementsByTagName("body")[0]
    script.src = js
    body.appendChild(script)
}

if(document.querySelector("body").classList.contains("font")) {
    js = [ 
        "https://cdn.jsdelivr.net/gh/valclassdevelop/valclass/property/fontFamily.js",
        "https://cdn.jsdelivr.net/gh/valclassdevelop/valclass/property/font.js"
    ]
    
    for(i = 0; i < js.length; i++) {
        script = document.createElement("script")
        body = document.getElementsByTagName("body")[0]
        script.src = js[i];
        body.appendChild(script)
     }
}

if(document.querySelector("body").classList.contains("hover")) {
    js = "https://cdn.jsdelivr.net/gh/valclassdevelop/valclass/property/hover.js";

    script = document.createElement("script")
    body = document.getElementsByTagName("body")[0]
    script.src = js
    body.appendChild(script)
}

if(document.querySelector("body").classList.contains("icon")) {
    js = "https://cdn.jsdelivr.net/gh/valclassdevelop/valclass/property/icons.js";

    script = document.createElement("script")
    body = document.getElementsByTagName("body")[0]
    script.src = js
    body.appendChild(script)

    link = document.createElement("link")
    head = document.getElementsByTagName("head")[0]

    tmp = link ;
    tmp.href ='https://cdn.jsdelivr.net/gh/valclassdevelop/valclass/icons/css/all.min.css'
    link.rel = "stylesheet"
    head.appendChild(tmp)
}

if(document.querySelector("body").classList.contains("increment")) {
    js = "https://cdn.jsdelivr.net/gh/valclassdevelop/valclass/property/increment.js";

    script = document.createElement("script")
    body = document.getElementsByTagName("body")[0]
    script.src = js
    body.appendChild(script)
}

if(document.querySelector("body").classList.contains("justify-content")) {
    js = "https://cdn.jsdelivr.net/gh/valclassdevelop/valclass/property/justifyContent.js";

    script = document.createElement("script")
    body = document.getElementsByTagName("body")[0]
    script.src = js
    body.appendChild(script)
}

if(document.querySelector("body").classList.contains("justify-items")) {
    js = "https://cdn.jsdelivr.net/gh/valclassdevelop/valclass/property/justifyItems.js";

    script = document.createElement("script")
    body = document.getElementsByTagName("body")[0]
    script.src = js
    body.appendChild(script)
}

if(document.querySelector("body").classList.contains("justify-self")) {
    js = "https://cdn.jsdelivr.net/gh/valclassdevelop/valclass/property/justifySelf.js";

    script = document.createElement("script")
    body = document.getElementsByTagName("body")[0]
    script.src = js
    body.appendChild(script)
}

if(document.querySelector("body").classList.contains("letter-spacing")) {
    js = "https://cdn.jsdelivr.net/gh/valclassdevelop/valclass/property/letterSpacing.js";

    script = document.createElement("script")
    body = document.getElementsByTagName("body")[0]
    script.src = js
    body.appendChild(script)
}

if(document.querySelector("body").classList.contains("line-height")) {
    js = "https://cdn.jsdelivr.net/gh/valclassdevelop/valclass/property/lineHeight.js";

    script = document.createElement("script")
    body = document.getElementsByTagName("body")[0]
    script.src = js
    body.appendChild(script)
}

if(document.querySelector("body").classList.contains("line-style")) {
    js = "https://cdn.jsdelivr.net/gh/valclassdevelop/valclass/property/lineStyle.js";

    script = document.createElement("script")
    body = document.getElementsByTagName("body")[0]
    script.src = js
    body.appendChild(script)
}

if(document.querySelector("body").classList.contains("margin")) {
    js = "https://cdn.jsdelivr.net/gh/valclassdevelop/valclass/property/margin.js";

    script = document.createElement("script")
    body = document.getElementsByTagName("body")[0]
    script.src = js
    body.appendChild(script)
}

if(document.querySelector("body").classList.contains("office")) {
    js = [ 
        "https://cdn.jsdelivr.net/gh/valclassdevelop/valclass/property/officeExcel.js",
        "https://cdn.jsdelivr.net/gh/valclassdevelop/valclass/property/officePdf.js",
        "https://cdn.jsdelivr.net/gh/valclassdevelop/valclass/property/officeWord.js"
    ]
    
    for(i = 0; i < js.length; i++) {
        script = document.createElement("script")
        body = document.getElementsByTagName("body")[0]
        script.src = js[i];
        body.appendChild(script)
     }
}

if(document.querySelector("body").classList.contains("opacity")) {
    js = "https://cdn.jsdelivr.net/gh/valclassdevelop/valclass/property/opacity.js";

    script = document.createElement("script")
    body = document.getElementsByTagName("body")[0]
    script.src = js
    body.appendChild(script)
}

if(document.querySelector("body").classList.contains("outline")) {
    js = "https://cdn.jsdelivr.net/gh/valclassdevelop/valclass/property/outline.js";

    script = document.createElement("script")
    body = document.getElementsByTagName("body")[0]
    script.src = js
    body.appendChild(script)
}

if(document.querySelector("body").classList.contains("overflow")) {
    js = "https://cdn.jsdelivr.net/gh/valclassdevelop/valclass/property/overflow.js";

    script = document.createElement("script")
    body = document.getElementsByTagName("body")[0]
    script.src = js
    body.appendChild(script)
}

if(document.querySelector("body").classList.contains("padding")) {
    js = "https://cdn.jsdelivr.net/gh/valclassdevelop/valclass/property/padding.js";

    script = document.createElement("script")
    body = document.getElementsByTagName("body")[0]
    script.src = js
    body.appendChild(script)
}

if(document.querySelector("body").classList.contains("page")) {
    js = "https://cdn.jsdelivr.net/gh/valclassdevelop/valclass/property/page.js";

    script = document.createElement("script")
    body = document.getElementsByTagName("body")[0]
    script.src = js
    body.appendChild(script)
}

if(document.querySelector("body").classList.contains("perspective")) {
    js = "https://cdn.jsdelivr.net/gh/valclassdevelop/valclass/property/perspective.js";

    script = document.createElement("script")
    body = document.getElementsByTagName("body")[0]
    script.src = js
    body.appendChild(script)
}

if(document.querySelector("body").classList.contains("position")) {
    js = "https://cdn.jsdelivr.net/gh/valclassdevelop/valclass/property/position.js";

    script = document.createElement("script")
    body = document.getElementsByTagName("body")[0]
    script.src = js
    body.appendChild(script)
}

if(document.querySelector("body").classList.contains("reload")) {
    js = "https://cdn.jsdelivr.net/gh/valclassdevelop/valclass/property/reload.js";

    script = document.createElement("script")
    body = document.getElementsByTagName("body")[0]
    script.src = js
    body.appendChild(script)
}

if(document.querySelector("body").classList.contains("result")) {
    js = "https://cdn.jsdelivr.net/gh/valclassdevelop/valclass/property/result.js";

    script = document.createElement("script")
    body = document.getElementsByTagName("body")[0]
    script.src = js
    body.appendChild(script)
}

if(document.querySelector("body").classList.contains("sosmed")) {
    js = "https://cdn.jsdelivr.net/gh/valclassdevelop/valclass/property/sosmed.js";

    script = document.createElement("script")
    body = document.getElementsByTagName("body")[0]
    script.src = js
    body.appendChild(script)
}

if(document.querySelector("body").classList.contains("text-align")) {
    js = "https://cdn.jsdelivr.net/gh/valclassdevelop/valclass/property/textAlign.js";

    script = document.createElement("script")
    body = document.getElementsByTagName("body")[0]
    script.src = js
    body.appendChild(script)
}

if(document.querySelector("body").classList.contains("text-color")) {
    js = "https://cdn.jsdelivr.net/gh/valclassdevelop/valclass/property/textColor.js";

    script = document.createElement("script")
    body = document.getElementsByTagName("body")[0]
    script.src = js
    body.appendChild(script)
}

if(document.querySelector("body").classList.contains("text-shadow")) {
    js = "https://cdn.jsdelivr.net/gh/valclassdevelop/valclass/property/textShadow.js";

    script = document.createElement("script")
    body = document.getElementsByTagName("body")[0]
    script.src = js
    body.appendChild(script)
}

if(document.querySelector("body").classList.contains("text-transform")) {
    js = "https://cdn.jsdelivr.net/gh/valclassdevelop/valclass/property/textTransform.js";

    script = document.createElement("script")
    body = document.getElementsByTagName("body")[0]
    script.src = js
    body.appendChild(script)
}

if(document.querySelector("body").classList.contains("time")) {
    js = "https://cdn.jsdelivr.net/gh/valclassdevelop/valclass/property/time.js";

    script = document.createElement("script")
    body = document.getElementsByTagName("body")[0]
    script.src = js
    body.appendChild(script)
}

if(document.querySelector("body").classList.contains("tlrb")) {
    js = "https://cdn.jsdelivr.net/gh/valclassdevelop/valclass/property/tlrb.js";

    script = document.createElement("script")
    body = document.getElementsByTagName("body")[0]
    script.src = js
    body.appendChild(script)
}

if(document.querySelector("body").classList.contains("transform")) {
    js = "https://cdn.jsdelivr.net/gh/valclassdevelop/valclass/property/transform.js";

    script = document.createElement("script")
    body = document.getElementsByTagName("body")[0]
    script.src = js
    body.appendChild(script)
}

if(document.querySelector("body").classList.contains("transition")) {
    js = "https://cdn.jsdelivr.net/gh/valclassdevelop/valclass/property/transition.js";

    script = document.createElement("script")
    body = document.getElementsByTagName("body")[0]
    script.src = js
    body.appendChild(script)
}

if(document.querySelector("body").classList.contains("vertical")) {
    js = "https://cdn.jsdelivr.net/gh/valclassdevelop/valclass/property/vertical.js";

    script = document.createElement("script")
    body = document.getElementsByTagName("body")[0]
    script.src = js
    body.appendChild(script)
}

if(document.querySelector("body").classList.contains("visibility")) {
    js = "https://cdn.jsdelivr.net/gh/valclassdevelop/valclass/property/visibility.js";

    script = document.createElement("script")
    body = document.getElementsByTagName("body")[0]
    script.src = js
    body.appendChild(script)
}

if(document.querySelector("body").classList.contains("white-space")) {
    js = "https://cdn.jsdelivr.net/gh/valclassdevelop/valclass/property/whiteSpace.js";

    script = document.createElement("script")
    body = document.getElementsByTagName("body")[0]
    script.src = js
    body.appendChild(script)
}

if(document.querySelector("body").classList.contains("width-height")) {
    js = "https://cdn.jsdelivr.net/gh/valclassdevelop/valclass/property/widthHeight.js";

    script = document.createElement("script")
    body = document.getElementsByTagName("body")[0]
    script.src = js
    body.appendChild(script)
}

if(document.querySelector("body").classList.contains("word-break")) {
    js = "https://cdn.jsdelivr.net/gh/valclassdevelop/valclass/property/wordBreak.js";

    script = document.createElement("script")
    body = document.getElementsByTagName("body")[0]
    script.src = js
    body.appendChild(script)
}

if(document.querySelector("body").classList.contains("word-spacing")) {
    js = "https://cdn.jsdelivr.net/gh/valclassdevelop/valclass/property/wordSpacing.js";

    script = document.createElement("script")
    body = document.getElementsByTagName("body")[0]
    script.src = js
    body.appendChild(script)
}

if(document.querySelector("body").classList.contains("word-wrap")) {
    js = "https://cdn.jsdelivr.net/gh/valclassdevelop/valclass/property/wordWrap.js";

    script = document.createElement("script")
    body = document.getElementsByTagName("body")[0]
    script.src = js
    body.appendChild(script)
}

if(document.querySelector("body").classList.contains("z-index")) {
    js = "https://cdn.jsdelivr.net/gh/valclassdevelop/valclass/property/zIndex.js";

    script = document.createElement("script")
    body = document.getElementsByTagName("body")[0]
    script.src = js
    body.appendChild(script)
}

if(document.querySelector("body").classList.contains("zoom")) {
    js = "https://cdn.jsdelivr.net/gh/valclassdevelop/valclass/property/zoom.js";

    script = document.createElement("script")
    body = document.getElementsByTagName("body")[0]
    script.src = js
    body.appendChild(script)
}

if(document.querySelector("body").classList.contains("media")) {
    js = "https://cdn.jsdelivr.net/gh/valclassdevelop/valclass/property/media.js";

    script = document.createElement("script")
    body = document.getElementsByTagName("body")[0]
    script.src = js
    body.appendChild(script)
}

if(document.querySelector("body").classList.contains("load")) {
    js = "https://cdn.jsdelivr.net/gh/valclassdevelop/valclass/property/load.js";

    script = document.createElement("script")
    body = document.getElementsByTagName("body")[0]
    script.src = js
    body.appendChild(script)
}

if(document.querySelector("body").classList.contains("image")) {
    js = "https://cdn.jsdelivr.net/gh/valclassdevelop/valclass/property/image.js";

    script = document.createElement("script")
    body = document.getElementsByTagName("body")[0]
    script.src = js
    body.appendChild(script)
}

if(document.querySelector("body").classList.contains("3d")) {
     js = [ 
        "https://cdn.jsdelivr.net/gh/valclassdevelop/valclass/property/vanilla-tilt.js",
        "https://cdn.jsdelivr.net/gh/valclassdevelop/valclass/property/tilt.js"
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

if(document.querySelector("body").classList.contains("currency")) {
    js = "https://cdn.jsdelivr.net/gh/valclassdevelop/valclass/property/currency.js";

    script = document.createElement("script")
    body = document.getElementsByTagName("body")[0]
    script.src = js
    body.appendChild(script)
}

if(document.querySelector("body").classList.contains("scroll")) {
    js = "https://cdn.jsdelivr.net/gh/valclassdevelop/valclass/property/scroll.js";

    script = document.createElement("script")
    body = document.getElementsByTagName("body")[0]
    script.src = js
    body.appendChild(script)
}

let uniteValclass = {
  
}

let makerUtilitiesName = {
  
}

let group_ = {};
let groupClass = {};
let utilitiesName_ = {};
let groupUtilitiesName = {};

// daftar nama items
let vallclass = {
  display: [],
  alignItems: [],
  boxSizing: [],
  floats: [],
  overflow: [],
  overflowX: [],
  overflowY: [],
  position: [],
  top: [],
  left: [],
  right: [],
  bottom: [],
  index: [],
  visibility: [],
  flex: [],
  direction: [],
  wrap: [],
  shrink: [],
  basis: [],
  justify: [],
  justItems: [],
  justSelf: [],
  alignContent: [],
  alignItems: [],
  alignSelf: [],
  padding: [],
  paddingTop: [],
  paddingLeft: [],
  paddingRight: [],
  paddingBottom: [],
  margin: [],
  marginTop: [],
  marginLeft: [],
  marginRight: [],
  marginBottom: [],
  width: [],
  height: [],
  fontSize: [],
  fontStyle: [] ,
  fontWeight: [], 
  letterSpacing: [],
  lineHeight: [],
	textAlign: [],
	textColor: [],
	decoration: [],
	textTransform: [],
	wordBreak: [],
	bgAttachment: [],
	bgClip: [],
	bgColor: [],
	bgPosition: [],
	bgRepeat: [],
	bgSize: [],
	border: [],
	borderTop: [],
	borderLeft: [],
	borderRight: [],
	borderBottom: [],
	borderRadius: [],
	borderStyle: [],
	borderColor: [],
	borderType: [],
	rotate: [],
	skew: [],
	scale: [],
	translate: [],
	translateX: [],
	translateY: [],
	translateZ: [],
	cursor: [],
	transition: [],
	outline: [],
	oTop: [],
	oLeft: [],
	oRight: [],
	oBottom: [],
	oColor: [],
	oStyle: [],
	opacity: [],
	blur: [],
	grayscale: [],
	saturate: [],
	brightness: [],
	contrast: [],
	MBdisplay: [],
	MBalignItems: [],
  MBboxSizing: [],
  MBfloats: [],
  MBoverflow: [],
  MBoverflowX: [],
  MBoverflowY: [],
  MBposition: [],
  MBtop: [],
  MBleft: [],
  MBright: [],
  MBbottom: [],
  MBindex: [],
  MBvisibility: [],
  MBflex: [],
  MBdirection: [],
  MBwrap: [],
  MBshrink: [],
  MBbasis: [],
  MBjustify: [],
  MBjustItems: [],
  MBjustSelf: [],
  MBalignContent: [],
  MBalignItems: [],
  MBalignSelf: [],
  MBpadding: [],
  MBpaddingTop: [],
  MBpaddingLeft: [],
  MBpaddingRight: [],
  MBpaddingBottom: [],
  MBmargin: [],
  MBmarginTop: [],
  MBmarginLeft: [],
  MBmarginRight: [],
  MBmarginBottom: [],
  MBwidth: [],
  MBheight: [],
  MBfontSize: [],
  MBfontStyle: [] ,
  MBfontWeight: [], 
  MBletterSpacing: [],
  MBlineHeight: [],
	MBtextAlign: [],
	MBtextColor: [],
	MBdecoration: [],
	MBtextTransform: [],
	MBwordBreak: [],
	MBbgAttachment: [],
	MBbgClip: [],
	MBbgColor: [],
	MBbgPosition: [],
	MBbgRepeat: [],
	MBbgSize: [],
	MBborder: [],
	MBborderTop: [],
	MBborderLeft: [],
	MBborderRight: [],
	MBborderBottom: [],
	MBborderRadius: [],
	MBborderStyle: [],
	MBborderColor: [],
	MBborderType: [],
	MBrotate: [],
	MBskew: [],
	MBscale: [],
	MBtranslate: [],
	MBtranslateX: [],
	MBtranslateY: [],
	MBtranslateZ: [],
	MBcursor: [],
	MBtransition: [],
	MBoutline: [],
	MBoTop: [],
	MBoLeft: [],
	MBoRight: [],
	MBoBottom: [],
	MBoColor: [],
	MBoStyle: [],
	MBopacity: [],
	MBblur: [],
	MBgrayscale: [],
	MBsaturate: [],
	MBbrightness: [],
	MBcontrast: [],
	TBdisplay: [],
	TBalignItems: [],
  TBboxSizing: [],
  TBfloats: [],
  TBoverflow: [],
  TBoverflowX: [],
  TBoverflowY: [],
  TBposition: [],
  TBtop: [],
  TBleft: [],
  TBright: [],
  TBbottom: [],
  TBindex: [],
  TBvisibility: [],
  TBflex: [],
  TBdirection: [],
  TBwrap: [],
  TBshrink: [],
  TBbasis: [],
  TBjustify: [],
  TBjustItems: [],
  TBjustSelf: [],
  TBalignContent: [],
  TBalignItems: [],
  TBalignSelf: [],
  TBpadding: [],
  TBpaddingTop: [],
  TBpaddingLeft: [],
  TBpaddingRight: [],
  TBpaddingBottom: [],
  TBmargin: [],
  TBmarginTop: [],
  TBmarginLeft: [],
  TBmarginRight: [],
  TBmarginBottom: [],
  TBwidth: [],
  TBheight: [],
  TBfontSize: [],
  TBfontStyle: [] ,
  TBfontWeight: [], 
  TBletterSpacing: [],
  TBlineHeight: [],
	TBtextAlign: [],
	TBtextColor: [],
	TBdecoration: [],
	TBtextTransform: [],
	TBwordBreak: [],
	TBbgAttachment: [],
	TBbgClip: [],
	TBbgColor: [],
	TBbgPosition: [],
	TBbgRepeat: [],
	TBbgSize: [],
	TBborder: [],
	TBborderTop: [],
	TBborderLeft: [],
	TBborderRight: [],
	TBborderBottom: [],
	TBborderRadius: [],
	TBborderStyle: [],
	TBborderColor: [],
	TBborderType: [],
	TBrotate: [],
	TBskew: [],
	TBscale: [],
	TBtranslate: [],
	TBtranslateX: [],
	TBtranslateY: [],
	TBtranslateZ: [],
	TBcursor: [],
	TBtransition: [],
	TBoutline: [],
	TBoTop: [],
	TBoLeft: [],
	TBoRight: [],
	TBoBottom: [],
	TBoColor: [],
	TBoStyle: [],
	TBopacity: [],
	TBblur: [],
	TBgrayscale: [],
	TBsaturate: [],
	TBbrightness: [],
	TBcontrast: [],
	PCdisplay: [],
	PCalignItems: [],
  PCboxSizing: [],
  PCfloats: [],
  PCoverflow: [],
  PCoverflowX: [],
  PCoverflowY: [],
  PCposition: [],
  PCtop: [],
  PCleft: [],
  PCright: [],
  PCbottom: [],
  PCindex: [],
  PCvisibility: [],
  PCflex: [],
  PCdirection: [],
  PCwrap: [],
  PCshrink: [],
  PCbasis: [],
  PCjustify: [],
  PCjustItems: [],
  PCjustSelf: [],
  PCalignContent: [],
  PCalignItems: [],
  PCalignSelf: [],
  PCpadding: [],
  PCpaddingTop: [],
  PCpaddingLeft: [],
  PCpaddingRight: [],
  PCpaddingBottom: [],
  PCmargin: [],
  PCmarginTop: [],
  PCmarginLeft: [],
  PCmarginRight: [],
  PCmarginBottom: [],
  PCwidth: [],
  PCheight: [],
  PCfontSize: [],
  PCfontStyle: [] ,
  PCfontWeight: [], 
  PCletterSpacing: [],
  PClineHeight: [],
	PCtextAlign: [],
	PCtextColor: [],
	PCdecoration: [],
	PCtextTransform: [],
	PCwordBreak: [],
	PCbgAttachment: [],
	PCbgClip: [],
	PCbgColor: [],
	PCbgPosition: [],
	PCbgRepeat: [],
	PCbgSize: [],
	PCborder: [],
	PCborderTop: [],
	PCborderLeft: [],
	PCborderRight: [],
	PCborderBottom: [],
	PCborderRadius: [],
	PCborderStyle: [],
	PCborderColor: [],
	PCborderType: [],
	PCrotate: [],
	PCskew: [],
	PCscale: [],
	PCtranslate: [],
	PCtranslateX: [],
	PCtranslateY: [],
	PCtranslateZ: [],
	PCcursor: [],
	PCtransition: [],
	PCoutline: [],
	PCoTop: [],
	PCoLeft: [],
	PCoRight: [],
	PCoBottom: [],
	PCoColor: [],
	PCoStyle: [],
	PCopacity: [],
	PCblur: [],
	PCgrayscale: [],
	PCsaturate: [],
	PCbrightness: [],
	PCcontrast: [],
}

// daftar nama class dan nama items 
// yang akan di gunakan oleh class itu sendiri
let utility = {
  "vc-d": "display",
  "vc-items": "alignItems",
  "vc-box": "boxSizing",
  "vc-float": "floats",
  "vc-overflow": "overflow",
  "vc-overflowX": "overflowX",
  "vc-overflowY": "overflowY",
  "vc-pst": "position",
  "vc-t": "top",
  "vc-l": "left",
  "vc-r": "right",
  "vc-b": "bottom",
  "vc-index": "index",
  "vc-visibility": "visibility",
  "vc-flex": "flex",
  "vc-direction": "direction",
  "vc-wrap": "wrap",
  "vc-shrink": "shrink",
  "vc-basis": "basis",
  "vc-justify": "justify",
  "vc-just-items": "justItems", 
  "vc-just-self": "justSelf", 
  "vc-content": "alignContent", 
  "vc-items": "alignItems", 
  "vc-self": "alignSelf", 
  "vc-p": "padding", 
  "vc-pt": "paddingTop", 
  "vc-pl": "paddingLeft", 
  "vc-pr": "paddingRight", 
  "vc-pb": "paddingBottom", 
  "vc-m": "margin", 
  "vc-mt": "marginTop", 
  "vc-ml": "marginLeft", 
  "vc-mr": "marginRight", 
  "vc-mb": "marginBottom", 
  "vc-w": "width", 
  "vc-h": "height", 
  "vc-font-sz": "fontSize", 
  "vc-font-style": "fontStyle", 
  "vc-weight": "fontWeight", 
  "vc-let-spacing": "letterSpacing", 
  "vc-leading": "lineHeight", 
  "vc-text": "textAlign", 
  "vc-color": "textColor", 
  "vc-decoration": "decoration", 
  "vc-text-transform": "textTransform", 
  "vc-break": "wordBreak", 
  "vc-attachment": "bgAttachment", 
  "vc-bg-clip": "bgClip", 
  "vc-bg": "bgColor", 
  "vc-bg-post": "bgPosition", 
  "vc-bg-rpt": "bgRepeat", 
  "vc-bg-sz": "bgSize", 
  "vc-border": "border", 
  "vc-border-t": "borderTop", 
  "vc-border-l": "borderLeft", 
  "vc-border-r": "borderRight", 
  "vc-border-b": "borderBottom", 
  "vc-radius": "borderRadius", 
  "vc-style": "borderStyle", 
  "vc-border-clr": "borderColor", 
  "vc-border-type": "borderType", 
  "vc-rotate": "rotate", 
  "vc-skew": "skew", 
  "vc-scale": "scale", 
  "vc-translate": "translate", 
  "vc-translateX": "translateX", 
  "vc-translateY": "translateY", 
  "vc-translateZ": "translateZ", 
  "vc-cursor": "cursor", 
  "vc-transition": "transition", 
  "vc-o": "outline", 
  "vc-o-top": "oTop", 
  "vc-o-left": "oLeft", 
  "vc-o-right": "oRight", 
  "vc-o-bottom": "oBottom", 
  "vc-o-color": "oColor", 
  "vc-o-style": "oStyle", 
  "vc-opacity": "opacity", 
  "vc-blur": "blur", 
  "vc-grayscale": "grayscale", 
  "vc-saturate": "saturate", 
  "vc-brightness": "brightness", 
  "vc-contrast": "contrast", 
  "mb_vc-d": "MBdisplay",
  "mb_vc-items": "MBalignItems",
  "mb_vc-box": "MBboxSizing",
  "mb_vc-float": "MBfloats",
  "mb_vc-overflow": "MBoverflow",
  "mb_vc-overflowX": "MBoverflowX",
  "mb_vc-overflowY": "MBoverflowY",
  "mb_vc-pst": "MBposition",
  "mb_vc-t": "MBtop",
  "mb_vc-l": "MBleft",
  "mb_vc-r": "MBright",
  "mb_vc-b": "MBbottom",
  "mb_vc-index": "MBindex",
  "mb_vc-visibility": "MBvisibility",
  "mb_vc-flex": "MBflex",
  "mb_vc-direction": "MBdirection",
  "mb_vc-wrap": "MBwrap",
  "mb_vc-shrink": "MBshrink",
  "mb_vc-basis": "MBbasis",
  "mb_vc-justify": "MBjustify",
  "mb_vc-just-items": "MBjustItems", 
  "mb_vc-just-self": "MBjustSelf", 
  "mb_vc-content": "MBalignContent", 
  "mb_vc-items": "MBalignItems", 
  "mb_vc-self": "MBalignSelf", 
  "mb_vc-p": "MBpadding", 
  "mb_vc-pt": "MBpaddingTop", 
  "mb_vc-pl": "MBpaddingLeft", 
  "mb_vc-pr": "MBpaddingRight", 
  "mb_vc-pb": "MBpaddingBottom", 
  "mb_vc-m": "MBmargin", 
  "mb_vc-mt": "MBmarginTop", 
  "mb_vc-ml": "MBmarginLeft", 
  "mb_vc-mr": "MBmarginRight", 
  "mb_vc-mb": "MBmarginBottom", 
  "mb_vc-w": "MBwidth", 
  "mb_vc-h": "MBheight", 
  "mb_vc-font-sz": "MBfontSize", 
  "mb_vc-font-style": "MBfontStyle", 
  "mb_vc-weight": "MBfontWeight", 
  "mb_vc-let-spacing": "MBletterSpacing", 
  "mb_vc-leading": "MBlineHeight", 
  "mb_vc-text": "MBtextAlign", 
  "mb_vc-color": "MBtextColor", 
  "mb_vc-decoration": "MBdecoration", 
  "mb_vc-text-transform": "MBtextTransform", 
  "mb_vc-break": "MBwordBreak", 
  "mb_vc-attachment": "MBbgAttachment", 
  "mb_vc-bg-clip": "MBbgClip", 
  "mb_vc-bg": "MBbgColor", 
  "mb_vc-bg-post": "MBbgPosition", 
  "mb_vc-bg-rpt": "MBbgRepeat", 
  "mb_vc-bg-sz": "MBbgSize", 
  "mb_vc-border": "MBborder", 
  "mb_vc-border-t": "MBborderTop", 
  "mb_vc-border-l": "MBborderLeft", 
  "mb_vc-border-r": "MBborderRight", 
  "mb_vc-border-b": "MBborderBottom", 
  "mb_vc-radius": "MBborderRadius", 
  "mb_vc-style": "MBborderStyle", 
  "mb_vc-border-clr": "MBborderColor", 
  "mb_vc-border-type": "MBborderType", 
  "mb_vc-rotate": "MBrotate", 
  "mb_vc-skew": "MBskew", 
  "mb_vc-scale": "MBscale", 
  "mb_vc-translate": "MBtranslate", 
  "mb_vc-translateX": "MBtranslateX", 
  "mb_vc-translateY": "MBtranslateY", 
  "mb_vc-translateZ": "MBtranslateZ", 
  "mb_vc-cursor": "MBcursor", 
  "mb_vc-transition": "MBtransition", 
  "mb_vc-o": "MBoutline", 
  "mb_vc-o-top": "MBoTop", 
  "mb_vc-o-left": "MBoLeft", 
  "mb_vc-o-right": "MBoRight", 
  "mb_vc-o-bottom": "MBoBottom", 
  "mb_vc-o-color": "MBoColor", 
  "mb_vc-o-style": "MBoStyle", 
  "mb_vc-opacity": "MBopacity", 
  "mb_vc-blur": "MBblur", 
  "mb_vc-grayscale": "MBgrayscale", 
  "mb_vc-saturate": "MBsaturate", 
  "mb_vc-brightness": "MBbrightness", 
  "mb_vc-contrast": "MBcontrast", 
  "tb_vc-d": "TBdisplay",
  "tb_vc-items": "TBalignItems",
  "tb_vc-box": "TBboxSizing",
  "tb_vc-float": "TBfloats",
  "tb_vc-overflow": "TBoverflow",
  "tb_vc-overflowX": "TBoverflowX",
  "tb_vc-overflowY": "TBoverflowY",
  "tb_vc-pst": "TBposition",
  "tb_vc-t": "TBtop",
  "tb_vc-l": "TBleft",
  "tb_vc-r": "TBright",
  "tb_vc-b": "TBbottom",
  "tb_vc-index": "TBindex",
  "tb_vc-visibility": "TBvisibility",
  "tb_vc-flex": "TBflex",
  "tb_vc-direction": "TBdirection",
  "tb_vc-wrap": "TBwrap",
  "tb_vc-shrink": "TBshrink",
  "tb_vc-basis": "TBbasis",
  "tb_vc-justify": "TBjustify",
  "tb_vc-just-items": "TBjustItems", 
  "tb_vc-just-self": "TBjustSelf", 
  "tb_vc-content": "TBalignContent", 
  "tb_vc-items": "TBalignItems", 
  "tb_vc-self": "TBalignSelf", 
  "tb_vc-p": "TBpadding", 
  "tb_vc-pt": "TBpaddingTop", 
  "tb_vc-pl": "TBpaddingLeft", 
  "tb_vc-pr": "TBpaddingRight", 
  "tb_vc-pb": "TBpaddingBottom", 
  "tb_vc-m": "TBmargin", 
  "tb_vc-mt": "TBmarginTop", 
  "tb_vc-ml": "TBmarginLeft", 
  "tb_vc-mr": "TBmarginRight", 
  "tb_vc-mb": "TBmarginBottom", 
  "tb_vc-w": "TBwidth", 
  "tb_vc-h": "TBheight", 
  "tb_vc-font-sz": "TBfontSize", 
  "tb_vc-font-style": "TBfontStyle", 
  "tb_vc-weight": "TBfontWeight", 
  "tb_vc-let-spacing": "TBletterSpacing", 
  "tb_vc-leading": "TBlineHeight", 
  "tb_vc-text": "TBtextAlign", 
  "tb_vc-color": "TBtextColor", 
  "tb_vc-decoration": "TBdecoration", 
  "tb_vc-text-transform": "TBtextTransform", 
  "tb_vc-break": "TBwordBreak", 
  "tb_vc-attachment": "TBbgAttachment", 
  "tb_vc-bg-clip": "TBbgClip", 
  "tb_vc-bg": "TBbgColor", 
  "tb_vc-bg-post": "TBbgPosition", 
  "tb_vc-bg-rpt": "TBbgRepeat", 
  "tb_vc-bg-sz": "TBbgSize", 
  "tb_vc-border": "TBborder", 
  "tb_vc-border-t": "TBborderTop", 
  "tb_vc-border-l": "TBborderLeft", 
  "tb_vc-border-r": "TBborderRight", 
  "tb_vc-border-b": "TBborderBottom", 
  "tb_vc-radius": "TBborderRadius", 
  "tb_vc-style": "TBborderStyle", 
  "tb_vc-border-clr": "TBborderColor", 
  "tb_vc-border-type": "TBborderType", 
  "tb_vc-rotate": "TBrotate", 
  "tb_vc-skew": "TBskew", 
  "tb_vc-scale": "TBscale", 
  "tb_vc-translate": "TBtranslate", 
  "tb_vc-translateX": "TBtranslateX", 
  "tb_vc-translateY": "TBtranslateY", 
  "tb_vc-translateZ": "TBtranslateZ", 
  "tb_vc-cursor": "TBcursor", 
  "tb_vc-transition": "TBtransition", 
  "tb_vc-o": "TBoutline", 
  "tb_vc-o-top": "TBoTop", 
  "tb_vc-o-left": "TBoLeft", 
  "tb_vc-o-right": "TBoRight", 
  "tb_vc-o-bottom": "TBoBottom", 
  "tb_vc-o-color": "TBoColor", 
  "tb_vc-o-style": "TBoStyle", 
  "tb_vc-opacity": "TBopacity", 
  "tb_vc-blur": "TBblur", 
  "tb_vc-grayscale": "TBgrayscale", 
  "tb_vc-saturate": "TBsaturate", 
  "tb_vc-brightness": "TBbrightness", 
  "tb_vc-contrast": "TBcontrast", 
  "pc_vc-d": "PCdisplay",
  "pc_vc-items": "PCalignItems",
  "pc_vc-box": "PCboxSizing",
  "pc_vc-float": "PCfloats",
  "pc_vc-overflow": "PCoverflow",
  "pc_vc-overflowX": "PCoverflowX",
  "pc_vc-overflowY": "PCoverflowY",
  "pc_vc-pst": "PCposition",
  "pc_vc-t": "PCtop",
  "pc_vc-l": "PCleft",
  "pc_vc-r": "PCright",
  "pc_vc-b": "PCbottom",
  "pc_vc-index": "PCindex",
  "pc_vc-visibility": "PCvisibility",
  "pc_vc-flex": "PCflex",
  "pc_vc-direction": "PCdirection",
  "pc_vc-wrap": "PCwrap",
  "pc_vc-shrink": "PCshrink",
  "pc_vc-basis": "PCbasis",
  "pc_vc-justify": "PCjustify",
  "pc_vc-just-items": "PCjustItems", 
  "pc_vc-just-self": "PCjustSelf", 
  "pc_vc-content": "PCalignContent", 
  "pc_vc-items": "PCalignItems", 
  "pc_vc-self": "PCalignSelf", 
  "pc_vc-p": "PCpadding", 
  "pc_vc-pt": "PCpaddingTop", 
  "pc_vc-pl": "PCpaddingLeft", 
  "pc_vc-pr": "PCpaddingRight", 
  "pc_vc-pb": "PCpaddingBottom", 
  "pc_vc-m": "PCmargin", 
  "pc_vc-mt": "PCmarginTop", 
  "pc_vc-ml": "PCmarginLeft", 
  "pc_vc-mr": "PCmarginRight", 
  "pc_vc-mb": "PCmarginBottom", 
  "pc_vc-w": "PCwidth", 
  "pc_vc-h": "PCheight", 
  "pc_vc-font-sz": "PCfontSize", 
  "pc_vc-font-style": "PCfontStyle", 
  "pc_vc-weight": "PCfontWeight", 
  "pc_vc-let-spacing": "PCletterSpacing", 
  "pc_vc-leading": "PClineHeight", 
  "pc_vc-text": "PCtextAlign", 
  "pc_vc-color": "PCtextColor", 
  "pc_vc-decoration": "PCdecoration", 
  "pc_vc-text-transform": "PCtextTransform", 
  "pc_vc-break": "PCwordBreak", 
  "pc_vc-attachment": "PCbgAttachment", 
  "pc_vc-bg-clip": "PCbgClip", 
  "pc_vc-bg": "PCbgColor", 
  "pc_vc-bg-post": "PCbgPosition", 
  "pc_vc-bg-rpt": "PCbgRepeat", 
  "pc_vc-bg-sz": "PCbgSize", 
  "pc_vc-border": "PCborder", 
  "pc_vc-border-t": "PCborderTop", 
  "pc_vc-border-l": "PCborderLeft", 
  "pc_vc-border-r": "PCborderRight", 
  "pc_vc-border-b": "PCborderBottom", 
  "pc_vc-radius": "PCborderRadius", 
  "pc_vc-style": "PCborderStyle", 
  "pc_vc-border-clr": "PCborderColor", 
  "pc_vc-border-type": "PCborderType", 
  "pc_vc-rotate": "PCrotate", 
  "pc_vc-skew": "PCskew", 
  "pc_vc-scale": "PCscale", 
  "pc_vc-translate": "PCtranslate", 
  "pc_vc-translateX": "PCtranslateX", 
  "pc_vc-translateY": "PCtranslateY", 
  "pc_vc-translateZ": "PCtranslateZ", 
  "pc_vc-cursor": "PCcursor", 
  "pc_vc-transition": "PCtransition", 
  "pc_vc-o": "PCoutline", 
  "pc_vc-o-top": "PCoTop", 
  "pc_vc-o-left": "PCoLeft", 
  "pc_vc-o-right": "PCoRight", 
  "pc_vc-o-bottom": "PCoBottom", 
  "pc_vc-o-color": "PCoColor", 
  "pc_vc-o-style": "PCoStyle", 
  "pc_vc-opacity": "PCopacity", 
  "pc_vc-blur": "PCblur", 
  "pc_vc-grayscale": "PCgrayscale", 
  "pc_vc-saturate": "PCsaturate", 
  "pc_vc-brightness": "PCbrightness", 
  "pc_vc-contrast": "PCcontrast", 
}

function createGrupStyle(group){

  for(let unity in group){

    groupClass[unity] = `${unity}_group`;

  }

  for(let x in groupClass){

    group_[groupClass[x]] = uniteValclass[x]; 

  }

}

function createUtilitiesName(group){

  for(let unity in group){

    groupUtilitiesName[unity] = `${unity}_group`;

  }

  for(let x in groupUtilitiesName){

    utilitiesName_[groupUtilitiesName[x]] = makerUtilitiesName[x]; 

  }

}

// =========================================
//  valclass core adalah file yang berisi
//  berbagai macam fungsi yang dapat
//  melakukan manipulasi style dengan membaca
//  seluruh className milik semua element
//  yang ada di dalam body
// =========================================

// fungsi Core adalah fungsi yang berperan sebagai
// fungsi untuk menambahkan setiap class utility yang ada
// di dalam className dari semua element
// yang ada di dalam body


function uuidv4() {
	return 'xxxxxxxx-xxxx-4xxx'.replace(/[xy]/g, function(c) {
	  var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
	  return v.toString(16);
	});
  }
  
  let cssFunction = [];


function Core(element){

  createGrupStyle(uniteValclass)
  createUtilitiesName(makerUtilitiesName)

  let allClass = element?.className?.split(" ") || [];

  allClass.forEach(e =>{

	function check(args){

		if(/(rgb\(.*?\)|rgba\(.*?\)|#.*?)/igm.test(args)){

			return {
				nativeCode: args,
				value: args.split("-").filter((e,i)=> i !== args.split("-").length-1).join("-")+"-"+uuidv4(),
				status: true
			} 

		}else{
			return{
				nativeCode: null,
				value: null,
				status: false
			}
		}

	}

	if(check(e).status) cssFunction.push({
		value: {
			[check(e).value]: e
		},
		property: check(e).nativeCode?.split("-").filter((e_,i)=> i === check(e)?.nativeCode.split("-").length).join(""),
		nativeCode: check(e).nativeCode
	})

	});

	for(let x of cssFunction){

		if(new RegExp((/\(/igm,"\\\(").replace(/\)/igm,"\\\)")).test(element.className) || /\#.*?/igm.test(element.className)){

			element.className = element.className.replaceAll(x.nativeCode,Object.keys(x.value).join(""))

		}

	}

  allClass.forEach(e =>{

    let token = e.split("-");

    if(token.length === 4){

      let type = token.splice(token.length-1)

      if(token.join("-") in utility){

        vallclass[utility[token.join("-")]].push(type[0]);
        vallclass[utility[token.join("-")]] = [...new Set(vallclass[utility[token.join("-")]])];

      }

      return;

    }

    if(token.length === 3){

      let type = token.splice(token.length-1,token.length-1)

      if(token.join("-") in utility){

        vallclass[utility[token.join("-")]].push(type[0]);
        vallclass[utility[token.join("-")]] = [...new Set(vallclass[utility[token.join("-")]])];

      }

      return;

    }

    if(token.length === 2){

      let type = token.splice(token.length-1,token.length-1);

      if(token.join("-") in utility){

        vallclass[utility[token.join("-")]].push(type[0]);
        vallclass[utility[token.join("-")]] = [...new Set(vallclass[utility[token.join("-")]])];

      }   

      return;
    }

  })

  for(let x in group_){

    if(element.className.match(x.replaceAll("_group","")) && element.className.includes('@')){
      element.className = element.className.replaceAll(x.replaceAll("_group",""),group_[x].join(" "));
      Core(document.body);

    }

  }

  if(element.children.length > 0){

    for(let x of element.children) Core(x);

  }

}

Core(document.body);
// custom style sheet template (CUSTOM)
// jika tidak di perlukan cukup biarkan menjadi string kosong (``)
let style_sheet = ``;

function valclass_initalization(){

    // melakukan looping untuk menambahkan valclass
    // ke dalam element style 

    for(let className in vallclass){

        for(let _class of vallclass[className]){
            if(className === "display"){
                style_sheet +=`
                .vc-d-${_class}{
                    display: ${_class};
                }
                @media screen and (min-width: 900px) and (max-width: 1920px) {
                    .vc-d-${_class}{
                        display: ${_class};
                    }
                }
                `;              
            document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "alignItems"){
                style_sheet +=`
                .vc-items-${_class}{
                    align-items: ${_class};
                }
                @media screen and (min-width: 900px) and (max-width: 1920px) {
                    .vc-items-${_class}{
                        align-items: ${_class};
                    }
                }
                `;              
            document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "boxSizing"){
                style_sheet +=`
                .vc-box-${_class}{
                    box-sizing: ${_class};
                }
                @media screen and (min-width: 900px) and (max-width: 1920px) {
                    .vc-box-${_class}{
                        box-sizing: ${_class};
                    }
                }
                `;  
            document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "floats"){
                style_sheet +=`
                .vc-float-${_class}{
                    float: ${_class};
                }
                @media screen and (min-width: 900px) and (max-width: 1920px) {
                    .vc-float-${_class}{
                        float: ${_class};
                    }
                }
                `;  
            document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "overflow"){
                style_sheet +=`
                .vc-overflow-${_class}{
                    overflow: ${_class};
                }
                @media screen and (min-width: 900px) and (max-width: 1920px) {
                    .vc-overflow-${_class}{
                        overflow: ${_class};
                    }
                }
                `;  
            document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "overflowX"){
                style_sheet +=`
                .vc-overflowX-${_class}{
                    overflow-x: ${_class};
                }
                @media screen and (min-width: 900px) and (max-width: 1920px) {
                    .vc-overflowX-${_class}{
                        overflow-x: ${_class};
                    }
                }
                `;  
            document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "overflowY"){
                style_sheet +=`
                .vc-overflowY-${_class}{
                    overflow-y: ${_class};
                }
                @media screen and (min-width: 900px) and (max-width: 1920px) {
                    .vc-overflowY-${_class}{
                        overflow-y: ${_class};
                    }
                }
                `;  
            document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "position"){
                style_sheet +=`
                .vc-pst-${_class}{
                    position: ${_class};
                }
                @media screen and (min-width: 900px) and (max-width: 1920px) {
                    .vc-pst-${_class}{
                        position: ${_class};
                    }
                }
                `;  
            document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "top"){
                style_sheet +=`
                .vc-t-${_class}{
                    top: ${_class};
                }
                @media screen and (min-width: 900px) and (max-width: 1920px) {
                    .vc-t-${_class}{
                        top: ${_class};
                    }
                }
                `;  
            document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "left"){
                style_sheet +=`
                .vc-l-${_class}{
                    left: ${_class};
                }
                @media screen and (min-width: 900px) and (max-width: 1920px) {
                    .vc-l-${_class}{
                        left: ${_class};
                    }
                }
                `;  
            document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "right"){
                style_sheet +=`
                .vc-r-${_class}{
                    right: ${_class};
                }
                @media screen and (min-width: 900px) and (max-width: 1920px) {
                    .vc-r-${_class}{
                        right: ${_class};
                    }
                }
                `;  
            document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "bottom"){
                style_sheet +=`
                .vc-b-${_class}{
                    bottom: ${_class};
                }
                @media screen and (min-width: 900px) and (max-width: 1920px) {
                    .vc-b-${_class}{
                        bottom: ${_class};
                    }
                }
                `;  
            document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "index"){
                style_sheet +=`
                .vc-index-${_class}{
                    z-index: ${_class};
                }
                @media screen and (min-width: 900px) and (max-width: 1920px) {
                    .vc-index-${_class}{
                        z-index: ${_class};
                    }
                }
                `;  
            document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "visibility"){
                style_sheet +=`
                .vc-visibility-${_class}{
                    visibility: ${_class};
                }
                @media screen and (min-width: 900px) and (max-width: 1920px) {
                    .vc-visibility-${_class}{
                        visibility: ${_class};
                    }
                }
                `;  
            document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "flex"){
                style_sheet +=`
                .vc-flex-${_class}{
                    flex: ${_class};
                }
                @media screen and (min-width: 900px) and (max-width: 1920px) {
                    .vc-flex-${_class}{
                        flex: ${_class};
                    }
                }
                `;  
            document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "direction"){
                style_sheet +=`
                .vc-direction-${_class}{
                    flex-direction: ${_class};
                }
                @media screen and (min-width: 900px) and (max-width: 1920px) {
                    .vc-direction-${_class}{
                        flex-direction: ${_class};
                    }
                }
                `;  
            document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "wrap"){
                style_sheet +=`
                .vc-wrap-${_class}{
                    flex-wrap: ${_class};
                }
                @media screen and (min-width: 900px) and (max-width: 1920px) {
                    .vc-wrap-${_class}{
                        flex-wrap: ${_class};
                    }
                }
                `;  
            document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "shrink"){
                style_sheet +=`
                .vc-shrink-${_class}{
                    flex-shrink: ${_class};
                }
                @media screen and (min-width: 900px) and (max-width: 1920px) {
                    .vc-shrink-${_class}{
                        flex-shrink: ${_class};
                    }
                }
                `;  
            document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "basis"){
                style_sheet +=`
                .vc-basis-${_class}{
                    flex-basis: ${_class};
                }
                @media screen and (min-width: 900px) and (max-width: 1920px) {
                    .vc-basis-${_class}{
                        flex-basis: ${_class};
                    }
                }
                `;  
            document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "justify"){
                style_sheet +=`
                .vc-justify-${_class}{
                    justify-content: ${_class};
                }
                @media screen and (min-width: 900px) and (max-width: 1920px) {
                    .vc-justify-${_class}{
                        justify-content: ${_class};
                    }
                }
                `;  
            document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "justItems"){
                style_sheet +=`
                .vc-just-items-${_class}{
                    justify-items: ${_class};
                }
                @media screen and (min-width: 900px) and (max-width: 1920px) {
                    .vc-just-items-${_class}{
                        justify-items: ${_class};
                    }
                }
                `;  
            document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "justSelf"){
                style_sheet +=`
                .vc-just-self-${_class}{
                    justify-self: ${_class};
                }
                @media screen and (min-width: 900px) and (max-width: 1920px) {
                    .vc-just-self-${_class}{
                        justify-self: ${_class};
                    }
                }
                `;  
            document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "alignContent"){
                style_sheet +=`
                .vc-content-${_class}{
                    align-content: ${_class};
                }
                @media screen and (min-width: 900px) and (max-width: 1920px) {
                    .vc-content-${_class}{
                        align-content: ${_class};
                    }
                }
                `;  
            document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "alignItems"){
                style_sheet +=`
                .vc-items-${_class}{
                    align-items: ${_class};
                }
                @media screen and (min-width: 900px) and (max-width: 1920px) {
                    .vc-items-${_class}{
                        align-items: ${_class};
                    }
                }
                `;  
            document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "alignSelf"){
                style_sheet +=`
                .vc-self-${_class}{
                    align-self: ${_class};
                }
                @media screen and (min-width: 900px) and (max-width: 1920px) {
                    .vc-self-${_class}{
                        align-self: ${_class};
                    }
                }
                `;  
            document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "padding"){
                style_sheet +=`
                .vc-p-${_class}{
                    padding: ${_class};
                }
                @media screen and (min-width: 900px) and (max-width: 1920px) {
                    .vc-p-${_class}{
                        padding: ${_class};
                    }
                }
                `;  
            document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "paddingTop"){
                style_sheet +=`
                .vc-pt-${_class}{
                    padding-top: ${_class};
                }
                @media screen and (min-width: 900px) and (max-width: 1920px) {
                    .vc-pt-${_class}{
                        padding-top: ${_class};
                    }
                }
                `;  
            document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "paddingLeft"){
                style_sheet +=`
                .vc-pl-${_class}{
                    padding-left: ${_class};
                }
                @media screen and (min-width: 900px) and (max-width: 1920px) {
                    .vc-pl-${_class}{
                        padding-left: ${_class};
                    }
                }
                `;  
            document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "paddingRight"){
                style_sheet +=`
                .vc-pr-${_class}{
                    padding-right: ${_class};
                }
                @media screen and (min-width: 900px) and (max-width: 1920px) {
                    .vc-pr-${_class}{
                        padding-right: ${_class};
                    }
                }
                `;  
            document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "paddingBottom"){
                style_sheet +=`
                .vc-pb-${_class}{
                    padding-bottom: ${_class};
                }
                @media screen and (min-width: 900px) and (max-width: 1920px) {
                    .vc-pb-${_class}{
                        padding-bottom: ${_class};
                    }
                }
                `;  
            document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "margin"){
                style_sheet +=`
                .vc-m-${_class}{
                    margin: ${_class};
                }
                @media screen and (min-width: 900px) and (max-width: 1920px) {
                    .vc-m-${_class}{
                        margin: ${_class};
                    }
                }
                `;  
            document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "marginTop"){
                style_sheet +=`
                .vc-mt-${_class}{
                    margin-top: ${_class};
                }
                @media screen and (min-width: 900px) and (max-width: 1920px) {
                    .vc-mt-${_class}{
                        margin-top: ${_class};
                    }
                }
                `;  
            document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "marginLeft"){
                style_sheet +=`
                .vc-ml-${_class}{
                    margin-left: ${_class};
                }
                @media screen and (min-width: 900px) and (max-width: 1920px) {
                    .vc-ml-${_class}{
                        margin-left: ${_class};
                    }
                }
                `;  
            document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "marginRight"){
                style_sheet +=`
                .vc-mr-${_class}{
                    margin-right: ${_class};
                }
                @media screen and (min-width: 900px) and (max-width: 1920px) {
                    .vc-mr-${_class}{
                        margin-right: ${_class};
                    }
                }
                `;  
            document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "marginBottom"){
                style_sheet +=`
                .vc-mb-${_class}{
                    margin-bottom: ${_class};
                }
                @media screen and (min-width: 900px) and (max-width: 1920px) {
                    .vc-mb-${_class}{
                        margin-bottom: ${_class};
                    }
                }
                `;  
            document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "width"){

                style_sheet +=`
                .vc-w-${_class}{
                        width: ${_class};
                    }
                    .vc-w-${_class}{
                        width: ${_class};
                    }
                @media screen and (min-width: 900px) and (max-width: 1920px) {
                    .vc-w-${_class}{
                        width: ${_class};
                    }
                }
                `;  
            document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "height"){
                style_sheet +=`
                .vc-h-${_class}{
                        height: ${_class};
                    }
                    .vc-h-${_class}{
                        height: ${_class};
                    }
                @media screen and (min-width: 900px) and (max-width: 1920px) {
                    .vc-h-${_class}{
                        height: ${_class};
                    }
                }
                `;  
            document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "fontSize"){
                style_sheet +=`
                .vc-font-sz-${_class}{
                    font-size: ${_class};
                }
                @media screen and (min-width: 900px) and (max-width: 1920px) {
                    .vc-font-sz-${_class}{
                        font-size: ${_class};
                    }
                }
                `;  
            document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "fontStyle"){
                style_sheet +=`
                .vc-font-style-${_class}{
                    font-style: ${_class};
                }
                @media screen and (min-width: 900px) and (max-width: 1920px) {
                    .vc-font-style-${_class}{
                        font-style: ${_class};
                    }
                }
                `;  
            document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "fontWeight"){
                style_sheet +=`
                .vc-weight-${_class}{
                    font-weight: ${_class};
                }
                @media screen and (min-width: 900px) and (max-width: 1920px) {
                    .vc-weight-${_class}{
                        font-weight: ${_class};
                    }
                }
                `;  
            document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "letterSpacing"){
                style_sheet +=`
                .vc-let-spacing-${_class}{
                    letter-spacing: ${_class};
                }
                @media screen and (min-width: 900px) and (max-width: 1920px) {
                    .vc-let-spacing-${_class}{
                        letter-spacing: ${_class};
                    }
                }
                `;  
            document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "lineHeight"){
                style_sheet +=`
                .vc-leading-${_class}{
                    line-height: ${_class};
                }
                @media screen and (min-width: 900px) and (max-width: 1920px) {
                    .vc-leading-${_class}{
                        line-height: ${_class};
                    }
                }
                `;  
            document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "textAlign"){
                style_sheet +=`
                .vc-text-${_class}{
                    text-align: ${_class};
                }
                @media screen and (min-width: 900px) and (max-width: 1920px) {
                    .vc-text-${_class}{
                        text-align: ${_class};
                    }
                }
                `;  
            document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "textColor"){
                style_sheet +=`
                .vc-color-${_class}{
                    color: ${_class};
                }
                @media screen and (min-width: 900px) and (max-width: 1920px) {
                    .vc-color-${_class}{
                        color: ${_class};
                    }
                }
                `;  
            document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "decoration"){
                style_sheet +=`
                .vc-decoration-${_class}{
                    text-decoration: ${_class};
                }
                @media screen and (min-width: 900px) and (max-width: 1920px) {
                    .vc-decoration-${_class}{
                        text-decoration: ${_class};
                    }
                }
                `;  
            document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "textTransform"){
                style_sheet +=`
                .vc-text-transform-${_class}{
                    text-transform: ${_class};
                }
                @media screen and (min-width: 900px) and (max-width: 1920px) {
                    .vc-text-transform-${_class}{
                        text-transform: ${_class};
                    }
                }
                `;  
            document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "wordBreak"){
                style_sheet +=`
                .vc-break-${_class}{
                    word-break: ${_class};
                    overflow-wrap: break-word;
                }
                @media screen and (min-width: 900px) and (max-width: 1920px) {
                    .vc-break-${_class}{
                        word-break: ${_class};
                        overflow-wrap: break-word;
                    }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "bgAttachment"){
                style_sheet +=`
                .vc-attachment-${_class}{
                    background-attachment: ${_class};
                }
                @media screen and (min-width: 900px) and (max-width: 1920px) {
                    .vc-attachment-${_class}{
                        background-attachment: ${_class};
                    }
                }
                `;  
            document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "bgClip"){
                style_sheet +=`
                .vc-bg-clip-${_class}{
                    background-clip: ${_class};
                }
                @media screen and (min-width: 900px) and (max-width: 1920px) {
                    .vc-bg-clip-${_class}{
                        background-clip: ${_class};
                    }
                }
                `;  
            document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "bgColor"){
                style_sheet +=`
                .vc-bg-${_class}{
                        background-color: ${_class};
                    }
                    .vc-bg-${_class}{
                        background-color: ${_class};
                    }
                @media screen and (min-width: 900px) and (max-width: 1920px) {
                    .vc-bg-${_class}{
                        background-color: ${_class};
                    }
                }
                `;  
            document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "bgPosition"){
                style_sheet +=`
                .vc-bg-post-${_class}{
                    background-position: ${_class};
                }
                @media screen and (min-width: 900px) and (max-width: 1920px) {
                    .vc-bg-post-${_class}{
                        background-position: ${_class};
                    }
                }
                `;  
            document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "bgRepeat"){
                style_sheet +=`
                .vc-bg-rpt-${_class}{
                    background-repeat: ${_class};
                }
                @media screen and (min-width: 900px) and (max-width: 1920px) {
                    .vc-bg-rpt-${_class}{
                        background-repeat: ${_class};
                    }
                }
                `;  
            document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "bgSize"){
                style_sheet +=`
                .vc-bg-sz-${_class}{
                    background-size: ${_class};
                }
                @media screen and (min-width: 900px) and (max-width: 1920px) {
                    .vc-bg-sz-${_class}{
                        background-size: ${_class};
                    }
                }
                `;  
            document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "border"){
                style_sheet +=`
                .vc-border-${_class}{
                    border: ${_class};
                }
                @media screen and (min-width: 900px) and (max-width: 1920px) {
                    .vc-border-${_class}{
                        border: ${_class};
                    }
                }
                `;  
            document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "borderTop"){
                style_sheet +=`
                .vc-border-top-${_class}{
                    border-top: ${_class};
                }
                @media screen and (min-width: 900px) and (max-width: 1920px) {
                    .vc-border-top-${_class}{
                        border-top: ${_class};
                    }
                }
                `;  
            document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "borderLeft"){
                style_sheet +=`
                .vc-border-l-${_class}{
                    border-left: ${_class};
                }
                @media screen and (min-width: 900px) and (max-width: 1920px) {
                    .vc-border-l-${_class}{
                        border-left: ${_class};
                    }
                }
                `;  
            document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "borderRight"){
                style_sheet +=`
                .vc-border-r-${_class}{
                    border-right: ${_class};
                }
                @media screen and (min-width: 900px) and (max-width: 1920px) {
                    .vc-border-r-${_class}{
                        border-right: ${_class};
                    }
                }
                `;  
            document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "borderBottom"){
                style_sheet +=`
                .vc-border-b-${_class}{
                    border-bottom: ${_class};
                }
                @media screen and (min-width: 900px) and (max-width: 1920px) {
                    .vc-border-b-${_class}{
                        border-bottom: ${_class};
                    }
                }
                `;  
            document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "borderRadius"){
                style_sheet +=`
                .vc-radius-${_class}{
                    border-radius: ${_class};
                }
                @media screen and (min-width: 900px) and (max-width: 1920px) {
                    .vc-radius-${_class}{
                        border-radius: ${_class};
                    }
                }
                `;  
            document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "borderStyle"){
                style_sheet +=`
                .vc-style-${_class}{
                    border-style: ${_class};
                }
                @media screen and (min-width: 900px) and (max-width: 1920px) {
                    .vc-style-${_class}{
                        border-style: ${_class};
                    }
                }
                `;  
            document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "borderColor"){
                style_sheet +=`
                .vc-border-clr-${_class}{
                    border-color: ${_class};
                }
                @media screen and (min-width: 900px) and (max-width: 1920px) {
                    .vc-border-clr-${_class}{
                        border-color: ${_class};
                    }
                }
                `;  
            document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "borderType"){
                style_sheet +=`
                .vc-border-type-${_class}{
                    border-collapse: ${_class};
                }
                @media screen and (min-width: 900px) and (max-width: 1920px) {
                    .vc-border-type-${_class}{
                        border-collapse: ${_class};
                    }
                }
                `;  
            document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "rotate"){
                style_sheet +=`
                .vc-rotate-${_class}{
                    transform: rotate(${_class});
                }
                @media screen and (min-width: 900px) and (max-width: 1920px) {
                    .vc-rotate-${_class}{
                        transform: rotate(${_class});
                    }
                }
                `;  
            document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "skew"){
                style_sheet +=`
                .vc-skew-${_class}{
                    transform: skew(${_class});
                }
                @media screen and (min-width: 900px) and (max-width: 1920px) {
                    .vc-skew-${_class}{
                        transform: skew(${_class});
                    }
                }
                `;  
            document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "scale"){
                style_sheet +=`
                .vc-scale-${_class}{
                    transform: scale(${_class});
                }
                @media screen and (min-width: 900px) and (max-width: 1920px) {
                    .vc-scale-${_class}{
                        transform: scale(${_class});
                    }
                }
                `;  
            document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "translate"){
                style_sheet +=`
                .vc-translate-${_class}{
                    transform: translate(${_class});
                }
                @media screen and (min-width: 900px) and (max-width: 1920px) {
                    .vc-translate-${_class}{
                        transform: translate(${_class});
                    }
                }
                `;  
            document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "translateX"){
                style_sheet +=`
                .vc-translateX-${_class}{
                    transform: translateX(${_class});
                }
                @media screen and (min-width: 900px) and (max-width: 1920px) {
                    .vc-translateX-${_class}{
                        transform: translateX(${_class});
                    }
                }
                `;  
            document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "translateY"){
                style_sheet +=`
                .vc-translateY-${_class}{
                    transform: translateY(${_class});
                }
                @media screen and (min-width: 900px) and (max-width: 1920px) {
                    .vc-translateY-${_class}{
                        transform: translateY(${_class});
                    }
                }
                `;  
            document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "translateZ"){
                style_sheet +=`
                .vc-translateZ-${_class}{
                    transform: translateZ(${_class});
                }
                @media screen and (min-width: 900px) and (max-width: 1920px) {
                    .vc-translateZ-${_class}{
                        transform: translateZ(${_class});
                    }
                }
                `;  
            document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "cursor"){
                style_sheet +=`
                .vc-cursor-${_class}{
                    cursor: ${_class};
                }
                @media screen and (min-width: 900px) and (max-width: 1920px) {
                    .vc-cursor-${_class}{
                        cursor: ${_class};
                    }
                }
                `;  
            document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "transition"){
                style_sheet +=`
                .vc-transition-${_class}{
                    transition: ${_class};
                }
                @media screen and (min-width: 900px) and (max-width: 1920px) {
                    .vc-transition-${_class}{
                        transition: ${_class};
                    }
                }
                `;  
            document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "outline"){
                style_sheet +=`
                .vc-o-${_class}{
                    outline: ${_class};
                }
                @media screen and (min-width: 900px) and (max-width: 1920px) {
                    .vc-o-${_class}{
                        outline: ${_class};
                    }
                }
                `;  
            document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "oTop"){
                style_sheet +=`
                .vc-o-top-${_class}{
                    outline-top: ${_class};
                }
                @media screen and (min-width: 900px) and (max-width: 1920px) {
                    .vc-o-top-${_class}{
                        outline-top: ${_class};
                    }
                }
                `;  
            document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "oLeft"){
                style_sheet +=`
                .vc-o-left-${_class}{
                    outline-left: ${_class};
                }
                @media screen and (min-width: 900px) and (max-width: 1920px) {
                    .vc-o-left-${_class}{
                        outline-left: ${_class};
                    }
                }
                `;  
            document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "oRight"){
                style_sheet +=`
                .vc-o-right-${_class}{
                    outline-right: ${_class};
                }
                @media screen and (min-width: 900px) and (max-width: 1920px) {
                    .vc-o-right-${_class}{
                        outline-right: ${_class};
                    }
                }
                `;  
            document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "oBottom"){
                style_sheet +=`
                .vc-o-bottom-${_class}{
                    outline-bottom: ${_class};
                }
                @media screen and (min-width: 900px) and (max-width: 1920px) {
                    .vc-o-bottom-${_class}{
                        outline-bottom: ${_class};
                    }
                }
                `;  
            document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "oColor"){
                style_sheet +=`
                .vc-o-color-${_class}{
                    outline-color: ${_class};
                }
                @media screen and (min-width: 900px) and (max-width: 1920px) {
                    .vc-o-color-${_class}{
                        outline-color: ${_class};
                    }
                }
                `;  
            document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "oStyle"){
                style_sheet +=`
                .vc-o-style-${_class}{
                    outline-style: ${_class};
                }
                @media screen and (min-width: 900px) and (max-width: 1920px) {
                    .vc-o-style-${_class}{
                        outline-style: ${_class};
                    }
                }
                `;  
            document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "opacity"){
                style_sheet +=`
                .vc-opacity-${_class}{
                    opacity: ${_class};
                }
                @media screen and (min-width: 900px) and (max-width: 1920px) {
                    .vc-opacity-${_class}{
                        opacity: ${_class};
                    }
                }
                `;  
            document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "blur"){
                style_sheet +=`
                .vc-blur-${_class}{
                    filter: blur(${_class});
                }
                @media screen and (min-width: 900px) and (max-width: 1920px) {
                    .vc-blur-${_class}{
                        filter: blur(${_class});
                    }
                }
                `;  
            document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "grayscale"){
                style_sheet +=`
                .vc-grayscale-${_class}{
                    filter: grayscale(${_class});
                }
                @media screen and (min-width: 900px) and (max-width: 1920px) {
                    .vc-grayscale-${_class}{
                        filter: grayscale(${_class});
                    }
                }
                `;  
            document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "saturate"){
                style_sheet +=`
                .vc-saturate-${_class}{
                    filter: saturate(${_class});
                }
                @media screen and (min-width: 900px) and (max-width: 1920px) {
                    .vc-saturate-${_class}{
                        filter: saturate(${_class});
                    }
                }
                `;  
            document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "brightness"){
                style_sheet +=`
                .vc-brightness-${_class}{
                    filter: brightness(${_class});
                }
                @media screen and (min-width: 900px) and (max-width: 1920px) {
                    .vc-brightness-${_class}{
                        filter: brightness(${_class});
                    }
                }
                `;  
            document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "contrast"){
                style_sheet +=`
                .vc-contrast-${_class}{
                    filter: contrast(${_class});
                }
                @media screen and (min-width: 900px) and (max-width: 1920px) {
                    .vc-contrast-${_class}{
                        filter: contrast(${_class});
                    }
                }
                `;  
            document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "MBdisplay"){
                style_sheet +=`
                @media screen and (min-width: 320px) and (max-width: 600px){
                        .mb_vc-d-${_class}{
                        display: ${_class};
                    }
                }
                `;              
            document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "MBalignItems"){
                style_sheet +=`
                @media screen and (min-width: 320px) and (max-width: 600px){
                    .mb_vc-items-${_class}{
                        align-items: ${_class};
                    }
                }
                `;              
            document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "MBboxSizing"){
                style_sheet +=`
                @media screen and (min-width: 320px) and (max-width: 600px){
                    .mb_vc-box-${_class}{
                        box-sizing: ${_class};
                    }
                }
                `;  
            document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "MBfloats"){
                style_sheet +=`
                @media screen and (min-width: 320px) and (max-width: 600px){
                    .mb_vc-float-${_class}{
                        float: ${_class};
                    }
                }
                `;  
            document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "MBoverflow"){
                style_sheet +=`
                @media screen and (min-width: 320px) and (max-width: 600px){
                    .mb_vc-overflow-${_class}{
                        overflow: ${_class};
                    }
                }
                `;  
            document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "MBoverflowX"){
                style_sheet +=`
                @media screen and (min-width: 320px) and (max-width: 600px){
                    .mb_vc-overflowX-${_class}{
                        overflow-x: ${_class};
                    }
                }
                `;  
            document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "MBoverflowY"){
                style_sheet +=`
                @media screen and (min-width: 320px) and (max-width: 600px){
                    .mb_vc-overflowY-${_class}{
                        overflow-y: ${_class};
                    }
                }
                `;  
            document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "MBposition"){
                style_sheet +=`
                @media screen and (min-width: 320px) and (max-width: 600px){
                    .mb_vc-pst-${_class}{
                        position: ${_class};
                    }
                }
                `;  
            document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "MBtop"){
                style_sheet +=`
                @media screen and (min-width: 320px) and (max-width: 600px){
                    .mb_vc-t-${_class}{
                        top: ${_class};
                    }
                }
                `;  
            document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "MBleft"){
                style_sheet +=`
                @media screen and (min-width: 320px) and (max-width: 600px){
                    .mb_vc-l-${_class}{
                        left: ${_class};
                    }
                }
                `;  
            document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "MBright"){
                style_sheet +=`
                @media screen and (min-width: 320px) and (max-width: 600px){
                    .mb_vc-r-${_class}{
                        right: ${_class};
                    }
                }
                `;  
            document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "MBbottom"){
                style_sheet +=`
                @media screen and (min-width: 320px) and (max-width: 600px){
                    .mb_vc-b-${_class}{
                        bottom: ${_class};
                    }
                }
                `;  
            document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "MBindex"){
                style_sheet +=`
                @media screen and (min-width: 320px) and (max-width: 600px){
                    .mb_vc-index-${_class}{
                        z-index: ${_class};
                    }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "MBvisibility"){
                style_sheet +=`
                @media screen and (min-width: 320px) and (max-width: 600px){
                    .mb_vc-visibility-${_class}{
                        visibility: ${_class};
                    }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "MBflex"){
                style_sheet +=`
                @media screen and (min-width: 320px) and (max-width: 600px){
                    .mb_vc-flex-${_class}{
                        flex: ${_class};
                    }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "MBdirection"){
                style_sheet +=`
                @media screen and (min-width: 320px) and (max-width: 600px){
                    .mb_vc-direction-${_class}{
                        flex-direction: ${_class};
                    }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "MBwrap"){
                style_sheet +=`
                @media screen and (min-width: 320px) and (max-width: 600px){
                    .mb_vc-wrap-${_class}{
                        flex-wrap: ${_class};
                    }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "MBshrink"){
                style_sheet +=`
                @media screen and (min-width: 320px) and (max-width: 600px){
                    .mb_vc-shrink-${_class}{
                        flex-shrink: ${_class};
                    }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "MBbasis"){
                style_sheet +=`
                @media screen and (min-width: 320px) and (max-width: 600px){
                    .mb_vc-basis-${_class}{
                        flex-basis: ${_class};
                    }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "MBjustify"){
                style_sheet +=`
                @media screen and (min-width: 320px) and (max-width: 600px){
                    .mb_vc-justify-${_class}{
                        justify-content: ${_class};
                    }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "MBjustItems"){
                style_sheet +=`
                @media screen and (min-width: 320px) and (max-width: 600px){
                    .mb_vc-just-items-${_class}{
                        justify-items: ${_class};
                    }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "MBjustSelf"){
                style_sheet +=`
                @media screen and (min-width: 320px) and (max-width: 600px){
                    .mb_vc-just-self-${_class}{
                        justify-self: ${_class};
                    }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "MBalignContent"){
                style_sheet +=`
                @media screen and (min-width: 320px) and (max-width: 600px){
                    .mb_vc-content-${_class}{
                        align-content: ${_class};
                    }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "MBalignItems"){
                style_sheet +=`
                @media screen and (min-width: 320px) and (max-width: 600px){
                    .mb_vc-items-${_class}{
                        align-items: ${_class};
                    }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "MBalignSelf"){
                style_sheet +=`
                @media screen and (min-width: 320px) and (max-width: 600px){
                    .mb_vc-self-${_class}{
                        align-self: ${_class};
                    }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "MBpadding"){
                style_sheet +=`
                @media screen and (min-width: 320px) and (max-width: 600px){
                    .mb_vc-p-${_class}{
                        padding: ${_class};
                    }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "MBpaddingTop"){
                style_sheet +=`
                @media screen and (min-width: 320px) and (max-width: 600px){
                    .mb_vc-pt-${_class}{
                        padding-top: ${_class};
                    }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "MBpaddingLeft"){
                style_sheet +=`
                @media screen and (min-width: 320px) and (max-width: 600px){
                    .mb_vc-pl-${_class}{
                        padding-left: ${_class};
                    }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "MBpaddingRight"){
                style_sheet +=`
                @media screen and (min-width: 320px) and (max-width: 600px){
                    .mb_vc-pr-${_class}{
                        padding-right: ${_class};
                    }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "MBpaddingBottom"){
                style_sheet +=`
                @media screen and (min-width: 320px) and (max-width: 600px){
                    .mb_vc-pb-${_class}{
                        padding-bottom: ${_class};
                    }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "MBmargin"){
                style_sheet +=`
                @media screen and (min-width: 320px) and (max-width: 600px){
                    .mb_vc-m-${_class}{
                        margin: ${_class};
                    }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "MBmarginTop"){
                style_sheet +=`
                @media screen and (min-width: 320px) and (max-width: 600px){
                    .mb_vc-mt-${_class}{
                        margin-top: ${_class};
                    }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "MBmarginLeft"){
                style_sheet +=`
                @media screen and (min-width: 320px) and (max-width: 600px){
                    .mb_vc-ml-${_class}{
                        margin-left: ${_class};
                    }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "MBmarginRight"){
                style_sheet +=`
                @media screen and (min-width: 320px) and (max-width: 600px){
                    .mb_vc-mr-${_class}{
                        margin-right: ${_class};
                    }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "MBmarginBottom"){
                style_sheet +=`
                @media screen and (min-width: 320px) and (max-width: 600px){
                    .mb_vc-mb-${_class}{
                        margin-bottom: ${_class};
                    }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "MBwidth"){
                style_sheet +=`
                @media screen and (min-width: 320px) and (max-width: 600px){
                    .mb_vc-w-${_class}{
                        width: ${_class};
                    }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "MBheight"){
                style_sheet +=`
                @media screen and (min-width: 320px) and (max-width: 600px){
                    .mb_vc-h-${_class}{
                        height: ${_class};
                    }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "MBfontSize"){
                style_sheet +=`
                @media screen and (min-width: 320px) and (max-width: 600px){
                    .mb_vc-font-sz-${_class}{
                        font-size: ${_class};
                    }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "MBfontStyle"){
                style_sheet +=`
                @media screen and (min-width: 320px) and (max-width: 600px){
                    .mb_vc-font-style-${_class}{
                        font-style: ${_class};
                    }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "MBfontWeight"){
                style_sheet +=`
                @media screen and (min-width: 320px) and (max-width: 600px){
                    .mb_vc-weight-${_class}{
                        font-weight: ${_class};
                    }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "MBletterSpacing"){
                style_sheet +=`
                @media screen and (min-width: 320px) and (max-width: 600px){
                    .mb_vc-let-spacing-${_class}{
                        letter-spacing: ${_class};
                    }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "MBlineHeight"){
                style_sheet +=`
                @media screen and (min-width: 320px) and (max-width: 600px){
                    .mb_vc-leading-${_class}{
                        line-height: ${_class};
                    }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "MBtextAlign"){
                style_sheet +=`
                @media screen and (min-width: 320px) and (max-width: 600px){
                    .mb_vc-text-${_class}{
                        text-align: ${_class};
                    }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "MBtextColor"){
                style_sheet +=`
                @media screen and (min-width: 320px) and (max-width: 600px){
                    .mb_vc-color-${_class}{
                        color: ${_class};
                    }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "MBdecoration"){
                style_sheet +=`
                @media screen and (min-width: 320px) and (max-width: 600px){
                    .mb_vc-decoration-${_class}{
                        text-decoration: ${_class};
                    }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "MBtextTransform"){
                style_sheet +=`
                @media screen and (min-width: 320px) and (max-width: 600px){
                    .mb_vc-text-transform-${_class}{
                        text-transform: ${_class};
                    }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "MBwordBreak"){
                style_sheet +=`
                @media screen and (min-width: 320px) and (max-width: 600px){
                    .mb_vc-break-${_class}{
                        word-break: ${_class};
                        overflow-wrap: break-word;
                    }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "MBbgAttachment"){
                style_sheet +=`
                @media screen and (min-width: 320px) and (max-width: 600px){
                    .mb_vc-attachment-${_class}{
                        background-attachment: ${_class};
                    }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "MBbgClip"){
                style_sheet +=`
                @media screen and (min-width: 320px) and (max-width: 600px){
                    .mb_vc-bg-clip-${_class}{
                        background-clip: ${_class};
                    }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "MBbgColor"){
                style_sheet +=`
                @media screen and (min-width: 320px) and (max-width: 600px){
                    .mb_vc-bg-${_class}{
                        background-color: ${_class};
                    }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "MBbgPosition"){
                style_sheet +=`
                @media screen and (min-width: 320px) and (max-width: 600px){
                    .mb_vc-bg-post-${_class}{
                        background-position: ${_class};
                    }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "MBbgRepeat"){
                style_sheet +=`
                @media screen and (min-width: 320px) and (max-width: 600px){
                    .mb_vc-bg-rpt-${_class}{
                        background-repeat: ${_class};
                    }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "MBbgSize"){
                style_sheet +=`
                @media screen and (min-width: 320px) and (max-width: 600px){
                    .mb_vc-bg-sz-${_class}{
                        background-size: ${_class};
                    }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "MBborder"){
                style_sheet +=`
                @media screen and (min-width: 320px) and (max-width: 600px){
                    .mb_vc-border-${_class}{
                        border: ${_class};
                    }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "MBborderTop"){
                style_sheet +=`
                @media screen and (min-width: 320px) and (max-width: 600px){
                    .mb_vc-border-top-${_class}{
                        border-top: ${_class};
                    }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "MBborderLeft"){
                style_sheet +=`
                @media screen and (min-width: 320px) and (max-width: 600px){
                    .mb_vc-border-l-${_class}{
                        border-left: ${_class};
                    }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "MBborderRight"){
                style_sheet +=`
                @media screen and (min-width: 320px) and (max-width: 600px){
                    .mb_vc-border-r-${_class}{
                        border-right: ${_class};
                    }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "MBborderBottom"){
                style_sheet +=`
                @media screen and (min-width: 320px) and (max-width: 600px){
                    .mb_vc-border-b-${_class}{
                        border-bottom: ${_class};
                    }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "MBborderRadius"){
                style_sheet +=`
                @media screen and (min-width: 320px) and (max-width: 600px){
                    .mb_vc-radius-${_class}{
                        border-radius: ${_class};
                    }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "MBborderStyle"){
                style_sheet +=`
                @media screen and (min-width: 320px) and (max-width: 600px){
                    .mb_vc-style-${_class}{
                        border-style: ${_class};
                    }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "MBborderColor"){
                style_sheet +=`
                @media screen and (min-width: 320px) and (max-width: 600px){
                    .mb_vc-border-clr-${_class}{
                        border-color: ${_class};
                    }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "MBborderType"){
                style_sheet +=`
                @media screen and (min-width: 320px) and (max-width: 600px){
                    .mb_vc-border-type-${_class}{
                        border-collapse: ${_class};
                    }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "MBrotate"){
                style_sheet +=`
                @media screen and (min-width: 320px) and (max-width: 600px){
                    .mb_vc-rotate-${_class}{
                        transform: rotate(${_class});
                    }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "MBskew"){
                style_sheet +=`
                @media screen and (min-width: 320px) and (max-width: 600px){
                    .mb_vc-skew-${_class}{
                        transform: skew(${_class});
                    }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "MBscale"){
                style_sheet +=`
                @media screen and (min-width: 320px) and (max-width: 600px){
                    .mb_vc-scale-${_class}{
                        transform: scale(${_class});
                    }
                }
                `;  
            document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "MBtranslate"){
                style_sheet +=`
                @media screen and (min-width: 320px) and (max-width: 600px){
                    .mb_vc-translate-${_class}{
                        transform: translate(${_class});
                    }
                }
                `;  
            document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "MBtranslateX"){
                style_sheet +=`
                @media screen and (min-width: 320px) and (max-width: 600px){
                    .mb_vc-translateX-${_class}{
                        transform: translateX(${_class});
                    }
                }
                `;  
            document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "MBtranslateY"){
                style_sheet +=`
                @media screen and (min-width: 320px) and (max-width: 600px){
                    .mb_vc-translateY-${_class}{
                        transform: translateY(${_class});
                    }
                }
                `;  
            document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "MBtranslateZ"){
                style_sheet +=`
                @media screen and (min-width: 320px) and (max-width: 600px){
                    .mb_vc-translateZ-${_class}{
                        transform: translateZ(${_class});
                    }
                }
                `;  
            document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "MBcursor"){
                style_sheet +=`
                @media screen and (min-width: 320px) and (max-width: 600px){
                    .mb_vc-cursor-${_class}{
                        cursor: ${_class};
                    }
                }
                `;  
            document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "MBtransition"){
                style_sheet +=`
                @media screen and (min-width: 320px) and (max-width: 600px){
                    .mb_vc-transition-${_class}{
                        transition: ${_class};
                    }
                }
                `;  
            document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "MBoutline"){
                style_sheet +=`
                @media screen and (min-width: 320px) and (max-width: 600px){
                    .mb_vc-o-${_class}{
                        outline: ${_class};
                    }
                }
                `;  
            document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "MBoTop"){
                style_sheet +=`
                @media screen and (min-width: 320px) and (max-width: 600px){
                    .mb_vc-o-top-${_class}{
                        outline-top: ${_class};
                    }
                }
                `;  
            document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "MBoLeft"){
                style_sheet +=`
                @media screen and (min-width: 320px) and (max-width: 600px){
                    .mb_vc-o-left-${_class}{
                        outline-left: ${_class};
                    }
                }
                `;  
            document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "MBoRight"){
                style_sheet +=`
                @media screen and (min-width: 320px) and (max-width: 600px){
                    .mb_vc-o-right-${_class}{
                        outline-right: ${_class};
                    }
                }
                `;  
            document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "MBoBottom"){
                style_sheet +=`
                @media screen and (min-width: 320px) and (max-width: 600px){
                    .mb_vc-o-bottom-${_class}{
                        outline-bottom: ${_class};
                    }
                }
                `;  
            document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "MBoColor"){
                style_sheet +=`
                @media screen and (min-width: 320px) and (max-width: 600px){
                    .mb_vc-o-color-${_class}{
                        outline-color: ${_class};
                    }
                }
                `;  
            document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "MBoStyle"){
                style_sheet +=`
                @media screen and (min-width: 320px) and (max-width: 600px){
                    .mb_vc-o-style-${_class}{
                        outline-style: ${_class};
                    }
                }
                `;  
            document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "MBopacity"){
                style_sheet +=`
                @media screen and (min-width: 320px) and (max-width: 600px){
                    .mb_vc-opacity-${_class}{
                        opacity: ${_class};
                    }
                }
                `;  
            document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "MBblur"){
                style_sheet +=`
                @media screen and (min-width: 320px) and (max-width: 600px){
                    .mb_vc-blur-${_class}{
                        filter: blur(${_class});
                    }
                }
                `;  
            document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "MBgrayscale"){
                style_sheet +=`
                @media screen and (min-width: 320px) and (max-width: 600px){
                    .mb_vc-grayscale-${_class}{
                        filter: grayscale(${_class});
                    }
                }
                `;  
            document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "MBsaturate"){
                style_sheet +=`
                @media screen and (min-width: 320px) and (max-width: 600px){
                    .mb_vc-saturate-${_class}{
                        filter: saturate(${_class});
                    }
                }
                `;  
            document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "MBbrightness"){
                style_sheet +=`
                @media screen and (min-width: 320px) and (max-width: 600px){
                    .mb_vc-brightness-${_class}{
                        filter: brightness(${_class});
                    }
                }
                `;  
            document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "MBcontrast"){
                style_sheet +=`
                @media screen and (min-width: 320px) and (max-width: 600px){
                    .mb_vc-contrast-${_class}{
                        filter: contrast(${_class});
                    }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "TBdisplay"){
                style_sheet +=`
                @media screen and (min-width: 600px) and (max-width: 900px){
                    .tb_vc-d-${_class}{
                        display: ${_class};
                    }
                }
                `;              
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "TBalignItems"){
                style_sheet +=`
                @media screen and (min-width: 600px) and (max-width: 900px){
                    .tb_vc-items-${_class}{
                        align-items: ${_class};
                    }
                }
                `;              
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "TBboxSizing"){
                style_sheet +=`
                @media screen and (min-width: 600px) and (max-width: 900px){
                    .tb_vc-box-${_class}{
                        box-sizing: ${_class};
                    }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "TBfloats"){
                style_sheet +=`
                @media screen and (min-width: 600px) and (max-width: 900px){
                    .tb_vc-float-${_class}{
                        float: ${_class};
                    }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "TBoverflow"){
                style_sheet +=`
                @media screen and (min-width: 600px) and (max-width: 900px){
                    .tb_vc-overflow-${_class}{
                        overflow: ${_class};
                    }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "TBoverflowX"){
                style_sheet +=`
                @media screen and (min-width: 600px) and (max-width: 900px){
                    .tb_vc-overflowX-${_class}{
                        overflow-x: ${_class};
                    }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "TBoverflowY"){
                style_sheet +=`
                @media screen and (min-width: 600px) and (max-width: 900px){
                    .tb_vc-overflowY-${_class}{
                        overflow-y: ${_class};
                    }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "TBposition"){
                style_sheet +=`
                @media screen and (min-width: 600px) and (max-width: 900px){
                    .tb_vc-pst-${_class}{
                        position: ${_class};
                    }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "TBtop"){
                style_sheet +=`
                @media screen and (min-width: 600px) and (max-width: 900px){
                    .tb_vc-t-${_class}{
                        top: ${_class};
                    }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "TBleft"){
                style_sheet +=`
                @media screen and (min-width: 600px) and (max-width: 900px){
                    .tb_vc-l-${_class}{
                        left: ${_class};
                    }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "TBright"){
                style_sheet +=`
                @media screen and (min-width: 600px) and (max-width: 900px){
                    .tb_vc-r-${_class}{
                        right: ${_class};
                    }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "TBbottom"){
                style_sheet +=`
                @media screen and (min-width: 600px) and (max-width: 900px){
                    .tb_vc-b-${_class}{
                        bottom: ${_class};
                    }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "TBindex"){
                style_sheet +=`
                @media screen and (min-width: 600px) and (max-width: 900px){
                    .tb_vc-index-${_class}{
                        z-index: ${_class};
                    }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "TBvisibility"){
                style_sheet +=`
                @media screen and (min-width: 600px) and (max-width: 900px){
                    .tb_vc-visibility-${_class}{
                        visibility: ${_class};
                    }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "TBflex"){
                style_sheet +=`
                @media screen and (min-width: 600px) and (max-width: 900px){
                    .tb_vc-flex-${_class}{
                        flex: ${_class};
                    }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "TBdirection"){
                style_sheet +=`
                @media screen and (min-width: 600px) and (max-width: 900px){
                    .tb_vc-direction-${_class}{
                        flex-direction: ${_class};
                    }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "TBwrap"){
                style_sheet +=`
                @media screen and (min-width: 600px) and (max-width: 900px){
                    .tb_vc-wrap-${_class}{
                        flex-wrap: ${_class};
                    }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "TBshrink"){
                style_sheet +=`
                @media screen and (min-width: 600px) and (max-width: 900px){
                    .tb_vc-shrink-${_class}{
                        flex-shrink: ${_class};
                    }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "TBbasis"){
                style_sheet +=`
                @media screen and (min-width: 600px) and (max-width: 900px){
                    .tb_vc-basis-${_class}{
                        flex-basis: ${_class};
                    }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "TBjustify"){
                style_sheet +=`
                @media screen and (min-width: 600px) and (max-width: 900px){
                    .tb_vc-justify-${_class}{
                        justify-content: ${_class};
                    }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "TBjustItems"){
                style_sheet +=`
                @media screen and (min-width: 600px) and (max-width: 900px){
                    .tb_vc-just-items-${_class}{
                        justify-items: ${_class};
                    }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "TBjustSelf"){
                style_sheet +=`
                @media screen and (min-width: 600px) and (max-width: 900px){
                    .tb_vc-just-self-${_class}{
                        justify-self: ${_class};
                    }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "TBalignContent"){
                style_sheet +=`
                @media screen and (min-width: 600px) and (max-width: 900px){
                    .tb_vc-content-${_class}{
                        align-content: ${_class};
                    }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "TBalignItems"){
                style_sheet +=`
                @media screen and (min-width: 600px) and (max-width: 900px){
                    .tb_vc-items-${_class}{
                        align-items: ${_class};
                    }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "TBalignSelf"){
                style_sheet +=`
                @media screen and (min-width: 600px) and (max-width: 900px){
                    .tb_vc-self-${_class}{
                        align-self: ${_class};
                    }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "TBpadding"){
                style_sheet +=`
                @media screen and (min-width: 600px) and (max-width: 900px){
                    .tb_vc-p-${_class}{
                        padding: ${_class};
                    }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "TBpaddingTop"){
                style_sheet +=`
                @media screen and (min-width: 600px) and (max-width: 900px){
                    .tb_vc-pt-${_class}{
                        padding-top: ${_class};
                    }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "TBpaddingLeft"){
                style_sheet +=`
                @media screen and (min-width: 600px) and (max-width: 900px){
                    .tb_vc-pl-${_class}{
                        padding-left: ${_class};
                    }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "TBpaddingRight"){
                style_sheet +=`
                @media screen and (min-width: 600px) and (max-width: 900px){
                    .tb_vc-pr-${_class}{
                        padding-right: ${_class};
                    }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "TBpaddingBottom"){
                style_sheet +=`
                @media screen and (min-width: 600px) and (max-width: 900px){
                    .tb_vc-pb-${_class}{
                        padding-bottom: ${_class};
                    }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "TBmargin"){
                style_sheet +=`
                @media screen and (min-width: 600px) and (max-width: 900px){
                    .tb_vc-m-${_class}{
                        margin: ${_class};
                    }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "TBmarginTop"){
                style_sheet +=`
                @media screen and (min-width: 600px) and (max-width: 900px){
                    .tb_vc-mt-${_class}{
                        margin-top: ${_class};
                    }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "TBmarginLeft"){
                style_sheet +=`
                @media screen and (min-width: 600px) and (max-width: 900px){
                    .tb_vc-ml-${_class}{
                        margin-left: ${_class};
                    }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "TBmarginRight"){
                style_sheet +=`
                @media screen and (min-width: 600px) and (max-width: 900px){
                    .tb_vc-mr-${_class}{
                        margin-right: ${_class};
                    }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "TBmarginBottom"){
                style_sheet +=`
                @media screen and (min-width: 600px) and (max-width: 900px){
                    .tb_vc-mb-${_class}{
                        margin-bottom: ${_class};
                    }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "TBwidth"){
                style_sheet +=`
                @media screen and (min-width: 600px) and (max-width: 900px){
                    .tb_vc-w-${_class}{
                        width: ${_class};
                    }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "TBheight"){
                style_sheet +=`
                @media screen and (min-width: 600px) and (max-width: 900px){
                    .tb_vc-h-${_class}{
                        height: ${_class};
                    }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "TBfontSize"){
                style_sheet +=`
                @media screen and (min-width: 600px) and (max-width: 900px){
                    .tb_vc-font-sz-${_class}{
                        font-size: ${_class};
                    }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "TBfontStyle"){
                style_sheet +=`
                @media screen and (min-width: 600px) and (max-width: 900px){
                    .tb_vc-font-style-${_class}{
                        font-style: ${_class};
                    }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "TBfontWeight"){
                style_sheet +=`
                @media screen and (min-width: 600px) and (max-width: 900px){
                    .tb_vc-weight-${_class}{
                        font-weight: ${_class};
                    }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "TBletterSpacing"){
                style_sheet +=`
                @media screen and (min-width: 600px) and (max-width: 900px){
                    .tb_vc-let-spacing-${_class}{
                        letter-spacing: ${_class};
                    }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "TBlineHeight"){
                style_sheet +=`
                @media screen and (min-width: 600px) and (max-width: 900px){
                    .tb_vc-leading-${_class}{
                        line-height: ${_class};
                    }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "TBtextAlign"){
                style_sheet +=`
                @media screen and (min-width: 600px) and (max-width: 900px){
                    .tb_vc-text-${_class}{
                        text-align: ${_class};
                    }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "TBtextColor"){
                style_sheet +=`
                @media screen and (min-width: 600px) and (max-width: 900px){
                    .tb_vc-color-${_class}{
                        color: ${_class};
                    }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "TBdecoration"){
                style_sheet +=`
                @media screen and (min-width: 600px) and (max-width: 900px){
                    .tb_vc-decoration-${_class}{
                        text-decoration: ${_class};
                    }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "TBtextTransform"){
                style_sheet +=`
                @media screen and (min-width: 600px) and (max-width: 900px){
                    .tb_vc-text-transform-${_class}{
                        text-transform: ${_class};
                    }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "TBwordBreak"){
                style_sheet +=`
                @media screen and (min-width: 600px) and (max-width: 900px){
                    .tb_vc-break-${_class}{
                        word-break: ${_class};
                        overflow-wrap: break-word;
                    }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "TBbgAttachment"){
                style_sheet +=`
                @media screen and (min-width: 600px) and (max-width: 900px){
                    .tb_vc-attachment-${_class}{
                        background-attachment: ${_class};
                    }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "TBbgClip"){
                style_sheet +=`
                @media screen and (min-width: 600px) and (max-width: 900px){
                    .tb_vc-bg-clip-${_class}{
                        background-clip: ${_class};
                    }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "TBbgColor"){
                style_sheet +=`
                @media screen and (min-width: 600px) and (max-width: 900px){
                    .tb_vc-bg-${_class}{
                        background-color: ${_class};
                    }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "TBbgPosition"){
                style_sheet +=`
                @media screen and (min-width: 600px) and (max-width: 900px){
                    .tb_vc-bg-post-${_class}{
                        background-position: ${_class};
                    }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "TBbgRepeat"){
                style_sheet +=`
                @media screen and (min-width: 600px) and (max-width: 900px){
                    .tb_vc-bg-rpt-${_class}{
                        background-repeat: ${_class};
                    }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "TBbgSize"){
                style_sheet +=`
                @media screen and (min-width: 600px) and (max-width: 900px){
                    .tb_vc-bg-sz-${_class}{
                        background-size: ${_class};
                    }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "TBborder"){
                style_sheet +=`
                @media screen and (min-width: 600px) and (max-width: 900px){
                    .tb_vc-border-${_class}{
                        border: ${_class};
                    }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "TBborderTop"){
                style_sheet +=`
                @media screen and (min-width: 600px) and (max-width: 900px){
                    .tb_vc-border-top-${_class}{
                        border-top: ${_class};
                    }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "TBborderLeft"){
                style_sheet +=`
                @media screen and (min-width: 600px) and (max-width: 900px){
                    .tb_vc-border-l-${_class}{
                        border-left: ${_class};
                    }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "TBborderRight"){
                style_sheet +=`
                @media screen and (min-width: 600px) and (max-width: 900px){
                    .tb_vc-border-r-${_class}{
                        border-right: ${_class};
                    }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "TBborderBottom"){
                style_sheet +=`
                @media screen and (min-width: 600px) and (max-width: 900px){
                    .tb_vc-border-b-${_class}{
                        border-bottom: ${_class};
                    }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "TBborderRadius"){
                style_sheet +=`
                @media screen and (min-width: 600px) and (max-width: 900px){
                    .tb_vc-radius-${_class}{
                        border-radius: ${_class};
                    }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "TBborderStyle"){
                style_sheet +=`
                @media screen and (min-width: 600px) and (max-width: 900px){
                    .tb_vc-style-${_class}{
                        border-style: ${_class};
                    }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "TBborderColor"){
                style_sheet +=`
                @media screen and (min-width: 600px) and (max-width: 900px){
                    .tb_vc-border-clr-${_class}{
                        border-color: ${_class};
                    }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "TBborderType"){
                style_sheet +=`
                @media screen and (min-width: 600px) and (max-width: 900px){
                    .tb_vc-border-type-${_class}{
                        border-collapse: ${_class};
                    }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "TBrotate"){
                style_sheet +=`
                @media screen and (min-width: 600px) and (max-width: 900px){
                    .tb_vc-rotate-${_class}{
                        transform: rotate(${_class});
                    }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "TBskew"){
                style_sheet +=`
                @media screen and (min-width: 600px) and (max-width: 900px){
                    .tb_vc-skew-${_class}{
                        transform: skew(${_class});
                    }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "TBscale"){
                style_sheet +=`
                @media screen and (min-width: 600px) and (max-width: 900px){
                    .tb_vc-scale-${_class}{
                        transform: scale(${_class});
                    }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "TBtranslate"){
                style_sheet +=`
                @media screen and (min-width: 600px) and (max-width: 900px){
                    .tb_vc-translate-${_class}{
                        transform: translate(${_class});
                    }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "TBtranslateX"){
                style_sheet +=`
                @media screen and (min-width: 600px) and (max-width: 900px){
                    .tb_vc-translateX-${_class}{
                        transform: translateX(${_class});
                    }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "TBtranslateY"){
                style_sheet +=`
                @media screen and (min-width: 600px) and (max-width: 900px){
                    .tb_vc-translateY-${_class}{
                        transform: translateY(${_class});
                    }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "TBtranslateZ"){
                style_sheet +=`
                @media screen and (min-width: 600px) and (max-width: 900px){
                    .tb_vc-translateZ-${_class}{
                        transform: translateZ(${_class});
                    }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "TBcursor"){
                style_sheet +=`
                @media screen and (min-width: 600px) and (max-width: 900px){
                    .tb_vc-cursor-${_class}{
                        cursor: ${_class};
                    }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "TBtransition"){
                style_sheet +=`
                @media screen and (min-width: 600px) and (max-width: 900px){
                    .tb_vc-transition-${_class}{
                        transition: ${_class};
                    }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "TBoutline"){
                style_sheet +=`
                @media screen and (min-width: 600px) and (max-width: 900px){
                    .tb_vc-o-${_class}{
                        outline: ${_class};
                    }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "TBoTop"){
                style_sheet +=`
                @media screen and (min-width: 600px) and (max-width: 900px){
                    .tb_vc-o-top-${_class}{
                        outline-top: ${_class};
                    }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "TBoLeft"){
                style_sheet +=`
                @media screen and (min-width: 600px) and (max-width: 900px){
                    .tb_vc-o-left-${_class}{
                        outline-left: ${_class};
                    }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "TBoRight"){
                style_sheet +=`
                @media screen and (min-width: 600px) and (max-width: 900px){
                    .tb_vc-o-right-${_class}{
                        outline-right: ${_class};
                    }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "TBoBottom"){
                style_sheet +=`
                @media screen and (min-width: 600px) and (max-width: 900px){
                    .tb_vc-o-bottom-${_class}{
                        outline-bottom: ${_class};
                    }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "TBoColor"){
                style_sheet +=`
                @media screen and (min-width: 600px) and (max-width: 900px){
                    .tb_vc-o-color-${_class}{
                        outline-color: ${_class};
                    }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "TBoStyle"){
                style_sheet +=`
                @media screen and (min-width: 600px) and (max-width: 900px){
                    .tb_vc-o-style-${_class}{
                        outline-style: ${_class};
                    }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "TBopacity"){
                style_sheet +=`
                @media screen and (min-width: 600px) and (max-width: 900px){
                    .tb_vc-opacity-${_class}{
                        opacity: ${_class};
                    }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "TBblur"){
                style_sheet +=`
                @media screen and (min-width: 600px) and (max-width: 900px){
                    .tb_vc-blur-${_class}{
                        filter: blur(${_class});
                    }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "TBgrayscale"){
                style_sheet +=`
                @media screen and (min-width: 600px) and (max-width: 900px){
                    .tb_vc-grayscale-${_class}{
                        filter: grayscale(${_class});
                    }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "TBsaturate"){
                style_sheet +=`
                @media screen and (min-width: 600px) and (max-width: 900px){
                    .tb_vc-saturate-${_class}{
                        filter: saturate(${_class});
                    }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "TBbrightness"){
                style_sheet +=`
                @media screen and (min-width: 600px) and (max-width: 900px){
                    .tb_vc-brightness-${_class}{
                        filter: brightness(${_class});
                    }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "TBcontrast"){
                style_sheet +=`
                @media screen and (min-width: 600px) and (max-width: 900px){
                    .tb_vc-contrast-${_class}{
                        filter: contrast(${_class});
                    }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "PCdisplay"){
                style_sheet +=`
                @media screen and (min-width: 1920px){
                    .pc_vc-d-${_class}{
                        display: ${_class};
                    }
                }
                `;              
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "PCalignItems"){
                style_sheet +=`
                @media screen and (min-width: 1920px){
                    .pc_vc-items-${_class}{
                        align-items: ${_class};
                    }
                }
                `;              
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "PCboxSizing"){
                style_sheet +=`
                @media screen and (min-width: 1920px){
                    .pc_vc-box-${_class}{
                        box-sizing: ${_class};
                    }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "PCfloats"){
                style_sheet +=`
                @media screen and (min-width: 1920px){
                    .pc_vc-float-${_class}{
                        float: ${_class};
                    }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "PCoverflow"){
                style_sheet +=`
                @media screen and (min-width: 1920px){
                    .pc_vc-overflow-${_class}{
                        overflow: ${_class};
                    }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "PCoverflowX"){
                style_sheet +=`
                @media screen and (min-width: 1920px){
                    .pc_vc-overflowX-${_class}{
                        overflow-x: ${_class};
                    }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "PCoverflowY"){
                style_sheet +=`
                @media screen and (min-width: 1920px){
                    .pc_vc-overflowY-${_class}{
                        overflow-y: ${_class};
                    }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "PCposition"){
                style_sheet +=`
                @media screen and (min-width: 1920px){
                    .pc_vc-pst-${_class}{
                        position: ${_class};
                    }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "PCtop"){
                style_sheet +=`
                @media screen and (min-width: 1920px){
                    .pc_vc-t-${_class}{
                        top: ${_class};
                    }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "PCleft"){
                style_sheet +=`
                @media screen and (min-width: 1920px){
                    .pc_vc-l-${_class}{
                        left: ${_class};
                    }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "PCright"){
                style_sheet +=`
                @media screen and (min-width: 1920px){
                    .pc_vc-r-${_class}{
                        right: ${_class};
                    }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "PCbottom"){
                style_sheet +=`
                @media screen and (min-width: 1920px){
                    .pc_vc-b-${_class}{
                        bottom: ${_class};
                    }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "PCindex"){
                style_sheet +=`
                @media screen and (min-width: 1920px){
                    .pc_vc-index-${_class}{
                        z-index: ${_class};
                    }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "PCvisibility"){
                style_sheet +=`
                @media screen and (min-width: 1920px){
                    .pc_vc-visibility-${_class}{
                        visibility: ${_class};
                    }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "PCflex"){
                style_sheet +=`
                @media screen and (min-width: 1920px){
                    .pc_vc-flex-${_class}{
                        flex: ${_class};
                    }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "PCdirection"){
                style_sheet +=`
                @media screen and (min-width: 1920px){
                    .pc_vc-direction-${_class}{
                        flex-direction: ${_class};
                    }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "PCwrap"){
                style_sheet +=`
                @media screen and (min-width: 1920px){
                    .pc_vc-wrap-${_class}{
                        flex-wrap: ${_class};
                    }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "PCshrink"){
                style_sheet +=`
                @media screen and (min-width: 1920px){
                    .pc_vc-shrink-${_class}{
                        flex-shrink: ${_class};
                    }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "PCbasis"){
                style_sheet +=`
                @media screen and (min-width: 1920px){
                    .pc_vc-basis-${_class}{
                        flex-basis: ${_class};
                    }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "PCjustify"){
                style_sheet +=`
                @media screen and (min-width: 1920px){
                    .pc_vc-justify-${_class}{
                        justify-content: ${_class};
                    }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "PCjustItems"){
                style_sheet +=`
                @media screen and (min-width: 1920px){
                    .pc_vc-just-items-${_class}{
                        justify-items: ${_class};
                    }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "PCjustSelf"){
                style_sheet +=`
                @media screen and (min-width: 1920px){
                    .pc_vc-just-self-${_class}{
                        justify-self: ${_class};
                    }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "PCalignContent"){
                style_sheet +=`
                @media screen and (min-width: 1920px){
                    .pc_vc-content-${_class}{
                        align-content: ${_class};
                    }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "PCalignItems"){
                style_sheet +=`
                @media screen and (min-width: 1920px){
                    .pc_vc-items-${_class}{
                        align-items: ${_class};
                    }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "PCalignSelf"){
                style_sheet +=`
                @media screen and (min-width: 1920px){
                    .pc_vc-self-${_class}{
                        align-self: ${_class};
                    }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "PCpadding"){
                style_sheet +=`
                @media screen and (min-width: 1920px){
                    .pc_vc-p-${_class}{
                        padding: ${_class};
                    }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "PCpaddingTop"){
                style_sheet +=`
                @media screen and (min-width: 1920px){
                    .pc_vc-pt-${_class}{
                        padding-top: ${_class};
                    }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "PCpaddingLeft"){
                style_sheet +=`
                @media screen and (min-width: 1920px){
                    .pc_vc-pl-${_class}{
                        padding-left: ${_class};
                    }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "PCpaddingRight"){
                style_sheet +=`
                @media screen and (min-width: 1920px){
                    .pc_vc-pr-${_class}{
                        padding-right: ${_class};
                    }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "PCpaddingBottom"){
                style_sheet +=`
                @media screen and (min-width: 1920px){
                    .pc_vc-pb-${_class}{
                        padding-bottom: ${_class};
                    }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "PCmargin"){
                style_sheet +=`
                @media screen and (min-width: 1920px){
                    .pc_vc-m-${_class}{
                        margin: ${_class};
                    }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "PCmarginTop"){
                style_sheet +=`
                @media screen and (min-width: 1920px){
                    .pc_vc-mt-${_class}{
                        margin-top: ${_class};
                    }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "PCmarginLeft"){
                style_sheet +=`
                @media screen and (min-width: 1920px){
                    .pc_vc-ml-${_class}{
                        margin-left: ${_class};
                    }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "PCmarginRight"){
                style_sheet +=`
                @media screen and (min-width: 1920px){
                    .pc_vc-mr-${_class}{
                        margin-right: ${_class};
                    }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "PCmarginBottom"){
                style_sheet +=`
                @media screen and (min-width: 1920px){
                    .pc_vc-mb-${_class}{
                        margin-bottom: ${_class};
                    }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "PCwidth"){
                style_sheet +=`
                @media screen and (min-width: 1920px){
                    .pc_vc-w-${_class}{
                        width: ${_class};
                    }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "PCheight"){
                style_sheet +=`
                @media screen and (min-width: 1920px){
                    .pc_vc-h-${_class}{
                        height: ${_class};
                    }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "PCfontSize"){
                style_sheet +=`
                @media screen and (min-width: 1920px){
                    .pc_vc-font-sz-${_class}{
                        font-size: ${_class};
                    }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "PCfontStyle"){
                style_sheet +=`
                @media screen and (min-width: 1920px){
                    .pc_vc-font-style-${_class}{
                        font-style: ${_class};
                    }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "PCfontWeight"){
                style_sheet +=`
                @media screen and (min-width: 1920px){
                    .pc_vc-weight-${_class}{
                        font-weight: ${_class};
                    }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "PCletterSpacing"){
                style_sheet +=`
                @media screen and (min-width: 1920px){
                    .pc_vc-let-spacing-${_class}{
                        letter-spacing: ${_class};
                    }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "PClineHeight"){
                style_sheet +=`
                @media screen and (min-width: 1920px){
                    .pc_vc-leading-${_class}{
                        line-height: ${_class};
                    }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "PCtextAlign"){
                style_sheet +=`
                @media screen and (min-width: 1920px){
                    .pc_vc-text-${_class}{
                        text-align: ${_class};
                    }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "PCtextColor"){
                style_sheet +=`
                @media screen and (min-width: 1920px){
                    .pc_vc-color-${_class}{
                        color: ${_class};
                    }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "PCdecoration"){
                style_sheet +=`
                @media screen and (min-width: 1920px){
                    .pc_vc-decoration-${_class}{
                        text-decoration: ${_class};
                    }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "PCtextTransform"){
                style_sheet +=`
                @media screen and (min-width: 1920px){
                    .pc_vc-text-transform-${_class}{
                        text-transform: ${_class};
                    }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "PCwordBreak"){
                style_sheet +=`
                @media screen and (min-width: 1920px){
                    .pc_vc-break-${_class}{
                        word-break: ${_class};
                        overflow-wrap: break-word;
                    }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "PCbgAttachment"){
                style_sheet +=`
                @media screen and (min-width: 1920px){
                    .pc_vc-attachment-${_class}{
                        background-attachment: ${_class};
                    }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "PCbgClip"){
                style_sheet +=`
                @media screen and (min-width: 1920px){
                    .pc_vc-bg-clip-${_class}{
                        background-clip: ${_class};
                    }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "PCbgColor"){
                style_sheet +=`
                @media screen and (min-width: 1920px){
                    .pc_vc-bg-${_class}{
                        background-color: ${_class};
                    }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "PCbgPosition"){
                style_sheet +=`
                @media screen and (min-width: 1920px){
                    .pc_vc-bg-post-${_class}{
                        background-position: ${_class};
                    }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "PCbgRepeat"){
                style_sheet +=`
                @media screen and (min-width: 1920px){
                    .pc_vc-bg-rpt-${_class}{
                        background-repeat: ${_class};
                    }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "PCbgSize"){
                style_sheet +=`
                @media screen and (min-width: 1920px){
                    .pc_vc-bg-sz-${_class}{
                        background-size: ${_class};
                    }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "PCborder"){
                style_sheet +=`
                @media screen and (min-width: 1920px){
                    .pc_vc-border-${_class}{
                        border: ${_class};
                    }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "PCborderTop"){
                style_sheet +=`
                @media screen and (min-width: 1920px){
                    .pc_vc-border-top-${_class}{
                        border-top: ${_class};
                    }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "PCborderLeft"){
                style_sheet +=`
                @media screen and (min-width: 1920px){
                    .pc_vc-border-l-${_class}{
                        border-left: ${_class};
                    }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "PCborderRight"){
                style_sheet +=`
                @media screen and (min-width: 1920px){
                    .pc_vc-border-r-${_class}{
                        border-right: ${_class};
                    }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "PCborderBottom"){
                style_sheet +=`
                @media screen and (min-width: 1920px){
                    .pc_vc-border-b-${_class}{
                        border-bottom: ${_class};
                    }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "PCborderRadius"){
                style_sheet +=`
                @media screen and (min-width: 1920px){
                    .pc_vc-radius-${_class}{
                        border-radius: ${_class};
                    }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "PCborderStyle"){
                style_sheet +=`
                @media screen and (min-width: 1920px){
                    .pc_vc-style-${_class}{
                        border-style: ${_class};
                    }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "PCborderColor"){
                style_sheet +=`
                @media screen and (min-width: 1920px){
                    .pc_vc-border-clr-${_class}{
                        border-color: ${_class};
                    }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "PCborderType"){
                style_sheet +=`
                @media screen and (min-width: 1920px){
                    .pc_vc-border-type-${_class}{
                        border-collapse: ${_class};
                    }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "PCrotate"){
                style_sheet +=`
                @media screen and (min-width: 1920px){
                    .pc_vc-rotate-${_class}{
                        transform: rotate(${_class});
                    }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "PCskew"){
                style_sheet +=`
                @media screen and (min-width: 1920px){
                    .pc_vc-skew-${_class}{
                        transform: skew(${_class});
                    }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "PCscale"){
                style_sheet +=`
                @media screen and (min-width: 1920px){
                    .pc_vc-scale-${_class}{
                        transform: scale(${_class});
                    }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "PCtranslate"){
                style_sheet +=`
                @media screen and (min-width: 1920px){
                    .pc_vc-translate-${_class}{
                        transform: translate(${_class});
                    }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "PCtranslateX"){
                style_sheet +=`
                @media screen and (min-width: 1920px){
                    .pc_vc-translateX-${_class}{
                        transform: translateX(${_class});
                    }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "PCtranslateY"){
                style_sheet +=`
                @media screen and (min-width: 1920px){
                    .pc_vc-translateY-${_class}{
                        transform: translateY(${_class});
                    }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "PCtranslateZ"){
                style_sheet +=`
                @media screen and (min-width: 1920px){
                    .pc_vc-translateZ-${_class}{
                        transform: translateZ(${_class});
                    }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "PCcursor"){
                style_sheet +=`
                @media screen and (min-width: 1920px){
                    .pc_vc-cursor-${_class}{
                        cursor: ${_class};
                    }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "PCtransition"){
                style_sheet +=`
                @media screen and (min-width: 1920px){
                    .pc_vc-transition-${_class}{
                        transition: ${_class};
                    }
                }
                `;  
                
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "PCoutline"){
                style_sheet +=`
                @media screen and (min-width: 1920px){
                    .pc_vc-o-${_class}{
                        outline: ${_class};
                    }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "PCoTop"){
                style_sheet +=`
                @media screen and (min-width: 1920px){
                    .pc_vc-o-top-${_class}{
                        outline-top: ${_class};
                    }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "PCoLeft"){
                style_sheet +=`
                @media screen and (min-width: 1920px){
                    .pc_vc-o-left-${_class}{
                        outline-left: ${_class};
                    }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "PCoRight"){
                style_sheet +=`
                @media screen and (min-width: 1920px){
                    .pc_vc-o-right-${_class}{
                        outline-right: ${_class};
                    }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "PCoBottom"){
                style_sheet +=`
                @media screen and (min-width: 1920px){
                    .pc_vc-o-bottom-${_class}{
                        outline-bottom: ${_class};
                    }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "PCoColor"){
                style_sheet +=`
                @media screen and (min-width: 1920px){
                    .pc_vc-o-color-${_class}{
                        outline-color: ${_class};
                    }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "PCoStyle"){
                style_sheet +=`
                @media screen and (min-width: 1920px){
                    .pc_vc-o-style-${_class}{
                        outline-style: ${_class};
                    }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "PCopacity"){
                style_sheet +=`
                @media screen and (min-width: 1920px){
                    .pc_vc-opacity-${_class}{
                        opacity: ${_class};
                    }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "PCblur"){
                style_sheet +=`
                @media screen and (min-width: 1920px){
                    .pc_vc-blur-${_class}{
                        filter: blur(${_class});
                    }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "PCgrayscale"){
                style_sheet +=`
                @media screen and (min-width: 1920px){
                    .pc_vc-grayscale-${_class}{
                        filter: grayscale(${_class});
                    }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "PCsaturate"){
                style_sheet +=`
                @media screen and (min-width: 1920px){
                    .pc_vc-saturate-${_class}{
                        filter: saturate(${_class});
                    }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "PCbrightness"){
                style_sheet +=`
                @media screen and (min-width: 1920px){
                    .pc_vc-brightness-${_class}{
                        filter: brightness(${_class});
                    }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "PCcontrast"){
                style_sheet +=`
                @media screen and (min-width: 1920px){
                    .pc_vc-contrast-${_class}{
                        filter: contrast(${_class});
                    }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            
        }
        
    }  
    
    for(let x of cssFunction){

        if(new RegExp((/\(/igm,"\\\(").replace(/\)/igm,"\\\)")).test(style_sheet)){
            
            style_sheet = style_sheet.replaceAll(x.nativeCode,`${Object.keys(x.value).join("")}${x.property}`)
            
            document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));

        }

    }

}  
// ketika halaman web sudah siap
// maka lakukan inisalisasi
// dan masukan valclass ke dalam nya


let updateStyle = ()=>{

  valclass_initalization();

  let style_ = document.head.querySelector("style");

  if(style_ instanceof HTMLStyleElement){

	valclass_initalization();
	style_.textContent += style_.textContent.replace(/\@style_sheet/igm,style_sheet);

  }else{

	let style = document.createElement("style");

	document.head.appendChild(style);
	style.textContent = style_sheet;
    
	valclass_initalization();

  }

}

onload= updateStyle;


function createGroupClass(name,array){

  uniteValclass[name] = array;
  Core(document.body)
  
}

function createComponentClass(card){
  
  for(let x in card){
    createGroupClass(x,card[x]);
    }
}

function createGroupUtilitiesName(name,array){

  makerUtilitiesName[name] = array;
  Core(document.body)
  
}

function createMakerUtilitiesName(card){
  
  for(let x in card){
    createGroupUtilitiesName(x,card[x]);
    }
    // console.log('makerUtilitiesName: ', makerUtilitiesName.createValueUtilities)
    // console.log('makerUtilitiesNameLength: ', makerUtilitiesName.createValueUtilities.length)

    for (var i = 0; i <= makerUtilitiesName.createUtilities.length; i++) {
        if (document.querySelector(`.${makerUtilitiesName.createUtilities[i]}`) && !document.querySelector('style').innerText.includes(makerUtilitiesName.createUtilities[i])) {
            let breakpoints = '';
            if(makerUtilitiesName.createBreakPointsUtilities[i] === 'mb'){
                breakpoints = '@media screen and (min-width: 320px) and (max-width: 600px) {'
            }else if(makerUtilitiesName.createBreakPointsUtilities[i] === 'tb') {
                breakpoints = '@media screen and (min-width: 601px) and (max-width: 900px) {'
            }else if(makerUtilitiesName.createBreakPointsUtilities[i] === 'df') {
                breakpoints = '@media screen and (min-width: 901px) and (max-width: 1920px) {'
            }else if(makerUtilitiesName.createBreakPointsUtilities[i] === 'pc') {
                breakpoints = '@media screen and (min-width: 1921px) {'
            }

            let styles = `
                ${breakpoints}
                    .${makerUtilitiesName.createUtilities[i]} { 
                        ${makerUtilitiesName.createValueUtilities[i]}
                    }
                }
                `;
            document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));

        }
    }
}

// console.log('unitevalclass: ', uniteValclass)



//============================//==============================//

// end of the conditions for calling the file property
// #developerValclass - Muhammad Khoirul Huda -> developervalclass@gmail.com
