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

            html {
                scroll-behavior: smooth;
            }
            `;
    if (css.styleSheet) {
        css.text = styles;
    }
    else {
        css.appendChild(document.createTextNode(styles));
    }
    document.getElementsByTagName("head")[0].appendChild(css);
    
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
  "mb-vc-d": "MBdisplay",
  "mb-vc-items": "MBalignItems",
  "mb-vc-box": "MBboxSizing",
  "mb-vc-float": "MBfloats",
  "mb-vc-overflow": "MBoverflow",
  "mb-vc-overflowX": "MBoverflowX",
  "mb-vc-overflowY": "MBoverflowY",
  "mb-vc-pst": "MBposition",
  "mb-vc-t": "MBtop",
  "mb-vc-l": "MBleft",
  "mb-vc-r": "MBright",
  "mb-vc-b": "MBbottom",
  "mb-vc-index": "MBindex",
  "mb-vc-visibility": "MBvisibility",
  "mb-vc-flex": "MBflex",
  "mb-vc-direction": "MBdirection",
  "mb-vc-wrap": "MBwrap",
  "mb-vc-shrink": "MBshrink",
  "mb-vc-basis": "MBbasis",
  "mb-vc-justify": "MBjustify",
  "mb-vc-just-items": "MBjustItems", 
  "mb-vc-just-self": "MBjustSelf", 
  "mb-vc-content": "MBalignContent", 
  "mb-vc-items": "MBalignItems", 
  "mb-vc-self": "MBalignSelf", 
  "mb-vc-p": "MBpadding", 
  "mb-vc-pt": "MBpaddingTop", 
  "mb-vc-pl": "MBpaddingLeft", 
  "mb-vc-pr": "MBpaddingRight", 
  "mb-vc-pb": "MBpaddingBottom", 
  "mb-vc-m": "MBmargin", 
  "mb-vc-mt": "MBmarginTop", 
  "mb-vc-ml": "MBmarginLeft", 
  "mb-vc-mr": "MBmarginRight", 
  "mb-vc-mb": "MBmarginBottom", 
  "mb-vc-w": "MBwidth", 
  "mb-vc-h": "MBheight", 
  "mb-vc-font-sz": "MBfontSize", 
  "mb-vc-font-style": "MBfontStyle", 
  "mb-vc-weight": "MBfontWeight", 
  "mb-vc-let-spacing": "MBletterSpacing", 
  "mb-vc-leading": "MBlineHeight", 
  "mb-vc-text": "MBtextAlign", 
  "mb-vc-color": "MBtextColor", 
  "mb-vc-decoration": "MBdecoration", 
  "mb-vc-text-transform": "MBtextTransform", 
  "mb-vc-break": "MBwordBreak", 
  "mb-vc-attachment": "MBbgAttachment", 
  "mb-vc-bg-clip": "MBbgClip", 
  "mb-vc-bg": "MBbgColor", 
  "mb-vc-bg-post": "MBbgPosition", 
  "mb-vc-bg-rpt": "MBbgRepeat", 
  "mb-vc-bg-sz": "MBbgSize", 
  "mb-vc-border": "MBborder", 
  "mb-vc-border-t": "MBborderTop", 
  "mb-vc-border-l": "MBborderLeft", 
  "mb-vc-border-r": "MBborderRight", 
  "mb-vc-border-b": "MBborderBottom", 
  "mb-vc-radius": "MBborderRadius", 
  "mb-vc-style": "MBborderStyle", 
  "mb-vc-border-clr": "MBborderColor", 
  "mb-vc-border-type": "MBborderType", 
  "mb-vc-rotate": "MBrotate", 
  "mb-vc-skew": "MBskew", 
  "mb-vc-scale": "MBscale", 
  "mb-vc-translate": "MBtranslate", 
  "mb-vc-translateX": "MBtranslateX", 
  "mb-vc-translateY": "MBtranslateY", 
  "mb-vc-translateZ": "MBtranslateZ", 
  "mb-vc-cursor": "MBcursor", 
  "mb-vc-transition": "MBtransition", 
  "mb-vc-o": "MBoutline", 
  "mb-vc-o-top": "MBoTop", 
  "mb-vc-o-left": "MBoLeft", 
  "mb-vc-o-right": "MBoRight", 
  "mb-vc-o-bottom": "MBoBottom", 
  "mb-vc-o-color": "MBoColor", 
  "mb-vc-o-style": "MBoStyle", 
  "mb-vc-opacity": "MBopacity", 
  "mb-vc-blur": "MBblur", 
  "mb-vc-grayscale": "MBgrayscale", 
  "mb-vc-saturate": "MBsaturate", 
  "mb-vc-brightness": "MBbrightness", 
  "mb-vc-contrast": "MBcontrast", 
  "tb-vc-d": "TBdisplay",
  "tb-vc-items": "TBalignItems",
  "tb-vc-box": "TBboxSizing",
  "tb-vc-float": "TBfloats",
  "tb-vc-overflow": "TBoverflow",
  "tb-vc-overflowX": "TBoverflowX",
  "tb-vc-overflowY": "TBoverflowY",
  "tb-vc-pst": "TBposition",
  "tb-vc-t": "TBtop",
  "tb-vc-l": "TBleft",
  "tb-vc-r": "TBright",
  "tb-vc-b": "TBbottom",
  "tb-vc-index": "TBindex",
  "tb-vc-visibility": "TBvisibility",
  "tb-vc-flex": "TBflex",
  "tb-vc-direction": "TBdirection",
  "tb-vc-wrap": "TBwrap",
  "tb-vc-shrink": "TBshrink",
  "tb-vc-basis": "TBbasis",
  "tb-vc-justify": "TBjustify",
  "tb-vc-just-items": "TBjustItems", 
  "tb-vc-just-self": "TBjustSelf", 
  "tb-vc-content": "TBalignContent", 
  "tb-vc-items": "TBalignItems", 
  "tb-vc-self": "TBalignSelf", 
  "tb-vc-p": "TBpadding", 
  "tb-vc-pt": "TBpaddingTop", 
  "tb-vc-pl": "TBpaddingLeft", 
  "tb-vc-pr": "TBpaddingRight", 
  "tb-vc-pb": "TBpaddingBottom", 
  "tb-vc-m": "TBmargin", 
  "tb-vc-mt": "TBmarginTop", 
  "tb-vc-ml": "TBmarginLeft", 
  "tb-vc-mr": "TBmarginRight", 
  "tb-vc-mb": "TBmarginBottom", 
  "tb-vc-w": "TBwidth", 
  "tb-vc-h": "TBheight", 
  "tb-vc-font-sz": "TBfontSize", 
  "tb-vc-font-style": "TBfontStyle", 
  "tb-vc-weight": "TBfontWeight", 
  "tb-vc-let-spacing": "TBletterSpacing", 
  "tb-vc-leading": "TBlineHeight", 
  "tb-vc-text": "TBtextAlign", 
  "tb-vc-color": "TBtextColor", 
  "tb-vc-decoration": "TBdecoration", 
  "tb-vc-text-transform": "TBtextTransform", 
  "tb-vc-break": "TBwordBreak", 
  "tb-vc-attachment": "TBbgAttachment", 
  "tb-vc-bg-clip": "TBbgClip", 
  "tb-vc-bg": "TBbgColor", 
  "tb-vc-bg-post": "TBbgPosition", 
  "tb-vc-bg-rpt": "TBbgRepeat", 
  "tb-vc-bg-sz": "TBbgSize", 
  "tb-vc-border": "TBborder", 
  "tb-vc-border-t": "TBborderTop", 
  "tb-vc-border-l": "TBborderLeft", 
  "tb-vc-border-r": "TBborderRight", 
  "tb-vc-border-b": "TBborderBottom", 
  "tb-vc-radius": "TBborderRadius", 
  "tb-vc-style": "TBborderStyle", 
  "tb-vc-border-clr": "TBborderColor", 
  "tb-vc-border-type": "TBborderType", 
  "tb-vc-rotate": "TBrotate", 
  "tb-vc-skew": "TBskew", 
  "tb-vc-scale": "TBscale", 
  "tb-vc-translate": "TBtranslate", 
  "tb-vc-translateX": "TBtranslateX", 
  "tb-vc-translateY": "TBtranslateY", 
  "tb-vc-translateZ": "TBtranslateZ", 
  "tb-vc-cursor": "TBcursor", 
  "tb-vc-transition": "TBtransition", 
  "tb-vc-o": "TBoutline", 
  "tb-vc-o-top": "TBoTop", 
  "tb-vc-o-left": "TBoLeft", 
  "tb-vc-o-right": "TBoRight", 
  "tb-vc-o-bottom": "TBoBottom", 
  "tb-vc-o-color": "TBoColor", 
  "tb-vc-o-style": "TBoStyle", 
  "tb-vc-opacity": "TBopacity", 
  "tb-vc-blur": "TBblur", 
  "tb-vc-grayscale": "TBgrayscale", 
  "tb-vc-saturate": "TBsaturate", 
  "tb-vc-brightness": "TBbrightness", 
  "tb-vc-contrast": "TBcontrast", 
  "pc-vc-d": "PCdisplay",
  "pc-vc-items": "PCalignItems",
  "pc-vc-box": "PCboxSizing",
  "pc-vc-float": "PCfloats",
  "pc-vc-overflow": "PCoverflow",
  "pc-vc-overflowX": "PCoverflowX",
  "pc-vc-overflowY": "PCoverflowY",
  "pc-vc-pst": "PCposition",
  "pc-vc-t": "PCtop",
  "pc-vc-l": "PCleft",
  "pc-vc-r": "PCright",
  "pc-vc-b": "PCbottom",
  "pc-vc-index": "PCindex",
  "pc-vc-visibility": "PCvisibility",
  "pc-vc-flex": "PCflex",
  "pc-vc-direction": "PCdirection",
  "pc-vc-wrap": "PCwrap",
  "pc-vc-shrink": "PCshrink",
  "pc-vc-basis": "PCbasis",
  "pc-vc-justify": "PCjustify",
  "pc-vc-just-items": "PCjustItems", 
  "pc-vc-just-self": "PCjustSelf", 
  "pc-vc-content": "PCalignContent", 
  "pc-vc-items": "PCalignItems", 
  "pc-vc-self": "PCalignSelf", 
  "pc-vc-p": "PCpadding", 
  "pc-vc-pt": "PCpaddingTop", 
  "pc-vc-pl": "PCpaddingLeft", 
  "pc-vc-pr": "PCpaddingRight", 
  "pc-vc-pb": "PCpaddingBottom", 
  "pc-vc-m": "PCmargin", 
  "pc-vc-mt": "PCmarginTop", 
  "pc-vc-ml": "PCmarginLeft", 
  "pc-vc-mr": "PCmarginRight", 
  "pc-vc-mb": "PCmarginBottom", 
  "pc-vc-w": "PCwidth", 
  "pc-vc-h": "PCheight", 
  "pc-vc-font-sz": "PCfontSize", 
  "pc-vc-font-style": "PCfontStyle", 
  "pc-vc-weight": "PCfontWeight", 
  "pc-vc-let-spacing": "PCletterSpacing", 
  "pc-vc-leading": "PClineHeight", 
  "pc-vc-text": "PCtextAlign", 
  "pc-vc-color": "PCtextColor", 
  "pc-vc-decoration": "PCdecoration", 
  "pc-vc-text-transform": "PCtextTransform", 
  "pc-vc-break": "PCwordBreak", 
  "pc-vc-attachment": "PCbgAttachment", 
  "pc-vc-bg-clip": "PCbgClip", 
  "pc-vc-bg": "PCbgColor", 
  "pc-vc-bg-post": "PCbgPosition", 
  "pc-vc-bg-rpt": "PCbgRepeat", 
  "pc-vc-bg-sz": "PCbgSize", 
  "pc-vc-border": "PCborder", 
  "pc-vc-border-t": "PCborderTop", 
  "pc-vc-border-l": "PCborderLeft", 
  "pc-vc-border-r": "PCborderRight", 
  "pc-vc-border-b": "PCborderBottom", 
  "pc-vc-radius": "PCborderRadius", 
  "pc-vc-style": "PCborderStyle", 
  "pc-vc-border-clr": "PCborderColor", 
  "pc-vc-border-type": "PCborderType", 
  "pc-vc-rotate": "PCrotate", 
  "pc-vc-skew": "PCskew", 
  "pc-vc-scale": "PCscale", 
  "pc-vc-translate": "PCtranslate", 
  "pc-vc-translateX": "PCtranslateX", 
  "pc-vc-translateY": "PCtranslateY", 
  "pc-vc-translateZ": "PCtranslateZ", 
  "pc-vc-cursor": "PCcursor", 
  "pc-vc-transition": "PCtransition", 
  "pc-vc-o": "PCoutline", 
  "pc-vc-o-top": "PCoTop", 
  "pc-vc-o-left": "PCoLeft", 
  "pc-vc-o-right": "PCoRight", 
  "pc-vc-o-bottom": "PCoBottom", 
  "pc-vc-o-color": "PCoColor", 
  "pc-vc-o-style": "PCoStyle", 
  "pc-vc-opacity": "PCopacity", 
  "pc-vc-blur": "PCblur", 
  "pc-vc-grayscale": "PCgrayscale", 
  "pc-vc-saturate": "PCsaturate", 
  "pc-vc-brightness": "PCbrightness", 
  "pc-vc-contrast": "PCcontrast", 
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

  
  let cssFunction = [];


function Core(element){
    
  createGrupStyle(uniteValclass)
  createUtilitiesName(makerUtilitiesName)

  let allClass = element?.className?.split(" ") || [];

  allClass.forEach(e =>{


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

// custom style sheet template (CUSTOM)
// jika tidak di perlukan cukup biarkan menjadi string kosong (``)
let style_sheet = ``;


function valclass_initalization(){
    // melakukan looping untuk menambahkan valclass
    // ke dalam element style 
    for(let className in vallclass){


        for(let _class of vallclass[className]){
            if(className === "display" && !document.querySelector('style').innerText.includes(`vc-d-${_class}`)){
                let style_sheet =`
                @media screen and (min-width: 900px) and (max-width: 2400px) {
                    .vc-d-${_class}{
                        display: ${_class};
                    }
                }
                `;              
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "alignItems" && !document.querySelector('style').innerText.includes(`vc-items-${_class}`)){
                let style_sheet =`
                @media screen and (min-width: 900px) and (max-width: 2400px) {
                    .vc-items-${_class}{
                        align-items: ${_class};
                    }
                }
                `;              
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "boxSizing" && !document.querySelector('style').innerText.includes(`vc-box-${_class}`)){
                let style_sheet =`
                @media screen and (min-width: 900px) and (max-width: 2400px) {
                    .vc-box-${_class}{
                        box-sizing: ${_class};
                    }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "floats" && !document.querySelector('style').innerText.includes(`vc-float-${_class}`)){
                let style_sheet =`
                @media screen and (min-width: 900px) and (max-width: 2400px) {
                    .vc-float-${_class}{
                    }
                    float: ${_class};
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "overflow" && !document.querySelector('style').innerText.includes(`vc-overflow-${_class}`)){
                let style_sheet =`
                @media screen and (min-width: 900px) and (max-width: 2400px) {
                    .vc-overflow-${_class}{
                        overflow: ${_class};
                    }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "overflowX" && !document.querySelector('style').innerText.includes(`vc-overflowX-${_class}`)){
                let style_sheet =`
                @media screen and (min-width: 900px) and (max-width: 2400px) {
                    .vc-overflowX-${_class}{
                        overflow-x: ${_class};
                    }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "overflowY" && !document.querySelector('style').innerText.includes(`vc-overflowY-${_class}`)){
                let style_sheet =`
                @media screen and (min-width: 900px) and (max-width: 2400px) {
                    .vc-overflowY-${_class}{
                        overflow-y: ${_class};
                    }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "position" && !document.querySelector('style').innerText.includes(`vc-pst-${_class}`)){
                let style_sheet =`
                @media screen and (min-width: 900px) and (max-width: 2400px) {
                    .vc-pst-${_class}{
                        position: ${_class};
                    }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "top" && !document.querySelector('style').innerText.includes(`vc-t-${_class}`)){
                let style_sheet =`
                @media screen and (min-width: 900px) and (max-width: 2400px) {
                    .vc-t-${_class}{
                        top: ${_class};
                    }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "left" && !document.querySelector('style').innerText.includes(`vc-l-${_class}`)){
                let style_sheet =`
                @media screen and (min-width: 900px) and (max-width: 2400px) {
                    .vc-l-${_class}{
                        left: ${_class};
                    }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "right" && !document.querySelector('style').innerText.includes(`vc-r-${_class}`)){
                let style_sheet =`
                @media screen and (min-width: 900px) and (max-width: 2400px) {
                    .vc-r-${_class}{
                        right: ${_class};
                    }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "bottom" && !document.querySelector('style').innerText.includes(`vc-b-${_class}`)){
                let style_sheet =`
                @media screen and (min-width: 900px) and (max-width: 2400px) {
                    .vc-b-${_class}{
                        bottom: ${_class};
                    }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "index" && !document.querySelector('style').innerText.includes(`vc-index-${_class}`)){
                let style_sheet =`
                @media screen and (min-width: 900px) and (max-width: 2400px) {
                    .vc-index-${_class}{
                        z-index: ${_class};
                    }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "visibility" && !document.querySelector('style').innerText.includes(`vc-visibility-${_class}`)){
                let style_sheet =`
                @media screen and (min-width: 900px) and (max-width: 2400px) {
                    .vc-visibility-${_class}{
                        visibility: ${_class};
                    }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "flex" && !document.querySelector('style').innerText.includes(`vc-flex-${_class}`)){
                let style_sheet =`
                @media screen and (min-width: 900px) and (max-width: 2400px) {
                    .vc-flex-${_class}{
                        flex: ${_class};
                    }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "direction" && !document.querySelector('style').innerText.includes(`vc-direction-${_class}`)){
                let style_sheet =`
                @media screen and (min-width: 900px) and (max-width: 2400px) {
                    .vc-direction-${_class}{
                        flex-direction: ${_class};
                    }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "wrap" && !document.querySelector('style').innerText.includes(`vc-wrap-${_class}`)){
                let style_sheet =`
                @media screen and (min-width: 900px) and (max-width: 2400px) {
                    .vc-wrap-${_class}{
                        flex-wrap: ${_class};
                    }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "shrink" && !document.querySelector('style').innerText.includes(`vc-shrink-${_class}`)){
                let style_sheet =`
                @media screen and (min-width: 900px) and (max-width: 2400px) {
                    .vc-shrink-${_class}{
                        flex-shrink: ${_class};
                    }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "basis" && !document.querySelector('style').innerText.includes(`vc-basis-${_class}`)){
                let style_sheet =`
                @media screen and (min-width: 900px) and (max-width: 2400px) {
                    .vc-basis-${_class}{
                        flex-basis: ${_class};
                    }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "justify" && !document.querySelector('style').innerText.includes(`vc-justify-${_class}`)){
                let style_sheet =`
                @media screen and (min-width: 900px) and (max-width: 2400px) {
                    .vc-justify-${_class}{
                        justify-content: ${_class};
                    }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "justItems" && !document.querySelector('style').innerText.includes(`vc-just-items-${_class}`)){
                let style_sheet =`
                @media screen and (min-width: 900px) and (max-width: 2400px) {
                    .vc-just-items-${_class}{
                        justify-items: ${_class};
                    }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "justSelf" && !document.querySelector('style').innerText.includes(`vc-just-self-${_class}`)){
                let style_sheet =`
                @media screen and (min-width: 900px) and (max-width: 2400px) {
                    .vc-just-self-${_class}{
                        justify-self: ${_class};
                    }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "alignContent" && !document.querySelector('style').innerText.includes(`vc-content-${_class}`)){
                let style_sheet =`
                @media screen and (min-width: 900px) and (max-width: 2400px) {
                    .vc-content-${_class}{
                        align-content: ${_class};
                    }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "alignItems" && !document.querySelector('style').innerText.includes(`vc-items-${_class}`)){
                let style_sheet =`
                @media screen and (min-width: 900px) and (max-width: 2400px) {
                    .vc-items-${_class}{
                        align-items: ${_class};
                    }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "alignSelf" && !document.querySelector('style').innerText.includes(`vc-self-${_class}`)){
                let style_sheet =`
                @media screen and (min-width: 900px) and (max-width: 2400px) {
                    .vc-self-${_class}{
                        align-self: ${_class};
                    }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "padding" && !document.querySelector('style').innerText.includes(`vc-p-${_class}`)){
                let style_sheet =`
                @media screen and (min-width: 900px) and (max-width: 2400px) {
                    .vc-p-${_class}{
                        padding: ${_class};
                    }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "paddingTop" && !document.querySelector('style').innerText.includes(`vc-pt-${_class}`)){
                let style_sheet =`
                @media screen and (min-width: 900px) and (max-width: 2400px) {
                    .vc-pt-${_class}{
                        padding-top: ${_class};
                    }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "paddingLeft" && !document.querySelector('style').innerText.includes(`vc-pl-${_class}`)){
                let style_sheet =`
                @media screen and (min-width: 900px) and (max-width: 2400px) {
                    .vc-pl-${_class}{
                        padding-left: ${_class};
                    }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "paddingRight" && !document.querySelector('style').innerText.includes(`vc-pr-${_class}`)){
                let style_sheet =`
                @media screen and (min-width: 900px) and (max-width: 2400px) {
                    .vc-pr-${_class}{
                        padding-right: ${_class};
                    }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "paddingBottom" && !document.querySelector('style').innerText.includes(`vc-pb-${_class}`)){
                let style_sheet =`
                @media screen and (min-width: 900px) and (max-width: 2400px) {
                    .vc-pb-${_class}{
                        padding-bottom: ${_class};
                    }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "margin" && !document.querySelector('style').innerText.includes(`vc-m-${_class}`)){
                let style_sheet =`
                @media screen and (min-width: 900px) and (max-width: 2400px) {
                    .vc-m-${_class}{
                        margin: ${_class};
                    }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "marginTop" && !document.querySelector('style').innerText.includes(`vc-mt-${_class}`)){
                let style_sheet =`
                @media screen and (min-width: 900px) and (max-width: 2400px) {
                    .vc-mt-${_class}{
                        margin-top: ${_class};
                    }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "marginLeft" && !document.querySelector('style').innerText.includes(`vc-ml-${_class}`)){
                let style_sheet =`
                @media screen and (min-width: 900px) and (max-width: 2400px) {
                    .vc-ml-${_class}{
                        margin-left: ${_class};
                    }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "marginRight" && !document.querySelector('style').innerText.includes(`vc-mr-${_class}`)){
                let style_sheet =`
                @media screen and (min-width: 900px) and (max-width: 2400px) {
                    .vc-mr-${_class}{
                        margin-right: ${_class};
                    }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "marginBottom" && !document.querySelector('style').innerText.includes(`vc-mb-${_class}`)){
                let style_sheet =`
                @media screen and (min-width: 900px) and (max-width: 2400px) {
                    .vc-mb-${_class}{
                        margin-bottom: ${_class};
                    }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "width" && !document.querySelector('style').innerText.includes(`vc-w-${_class}`)){
                let style_sheet =`
                @media screen and (min-width: 900px) and (max-width: 2400px) {
                    .vc-w-${_class}{
                        width: ${_class};
                    }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "height" && !document.querySelector('style').innerText.includes(`vc-h-${_class}`)){
                let style_sheet =`
                @media screen and (min-width: 900px) and (max-width: 2400px) {
                    .vc-h-${_class}{
                        height: ${_class};
                    }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "fontSize" && !document.querySelector('style').innerText.includes(`vc-font-sz-${_class}`)){
                let style_sheet =`
                @media screen and (min-width: 900px) and (max-width: 2400px) {
                    .vc-font-sz-${_class}{
                        font-size: ${_class};
                    }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "fontStyle" && !document.querySelector('style').innerText.includes(`vc-font-style-${_class}`)){
                let style_sheet =`
                @media screen and (min-width: 900px) and (max-width: 2400px) {
                    .vc-font-style-${_class}{
                        font-style: ${_class};
                    }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "fontWeight" && !document.querySelector('style').innerText.includes(`vc-weight-${_class}`)){
                let style_sheet =`
                @media screen and (min-width: 900px) and (max-width: 2400px) {
                    .vc-weight-${_class}{
                        font-weight: ${_class};
                    }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "letterSpacing" && !document.querySelector('style').innerText.includes(`vc-let-spacing-${_class}`)){
                let style_sheet =`
                @media screen and (min-width: 900px) and (max-width: 2400px) {
                    .vc-let-spacing-${_class}{
                        letter-spacing: ${_class};
                    }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "lineHeight" && !document.querySelector('style').innerText.includes(`vc-leading-${_class}`)){
                let style_sheet =`
                @media screen and (min-width: 900px) and (max-width: 2400px) {
                    .vc-leading-${_class}{
                        line-height: ${_class};
                    }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "textAlign" && !document.querySelector('style').innerText.includes(`vc-text-${_class}`)){
                let style_sheet =`
                @media screen and (min-width: 900px) and (max-width: 2400px) {
                    .vc-text-${_class}{
                        text-align: ${_class};
                    }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "textColor" && !document.querySelector('style').innerText.includes(`.vc-color-${_class}`)){
                style_sheet +=`
                .vc-color-${_class}{
                    color: ${_class};
                }
                @media screen and (min-width: 900px) and (max-width: 2400px) {
                    .vc-color-${_class}{
                        color: ${_class};
                    }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "decoration" && !document.querySelector('style').innerText.includes(`vc-decoration-${_class}`)){
                let style_sheet =`
                @media screen and (min-width: 900px) and (max-width: 2400px) {
                    .vc-decoration-${_class}{
                        text-decoration: ${_class};
                    }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "textTransform" && !document.querySelector('style').innerText.includes(`vc-text-transform-${_class}`)){
                let style_sheet =`
                @media screen and (min-width: 900px) and (max-width: 2400px) {
                    .vc-text-transform-${_class}{
                        text-transform: ${_class};
                    }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "wordBreak" && !document.querySelector('style').innerText.includes(`vc-break-${_class}`)){
                let style_sheet =`
                @media screen and (min-width: 900px) and (max-width: 2400px) {
                    .vc-break-${_class}{
                        word-break: ${_class};
                        overflow-wrap: break-word;
                    }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "bgAttachment" && !document.querySelector('style').innerText.includes(`vc-attachment-${_class}`)){
                let style_sheet =`
                @media screen and (min-width: 900px) and (max-width: 2400px) {
                    .vc-attachment-${_class}{
                        background-attachment: ${_class};
                    }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "bgClip" && !document.querySelector('style').innerText.includes(`vc-bg-clip-${_class}`)){
                let style_sheet =`
                @media screen and (min-width: 900px) and (max-width: 2400px) {
                    .vc-bg-clip-${_class}{
                        background-clip: ${_class};
                    }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "bgColor" && !document.querySelector('style').innerText.includes(`.vc-bg-${_class}`)){
               let style_sheet =`
                @media screen and (min-width: 900px) and (max-width: 2400px) {
                    .vc-bg-${_class}{
                        background-color: ${_class};
                    }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "bgPosition" && !document.querySelector('style').innerText.includes(`vc-bg-post-${_class}`)){
                let style_sheet =`
                @media screen and (min-width: 900px) and (max-width: 2400px) {
                    .vc-bg-post-${_class}{
                        background-position: ${_class};
                    }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "bgRepeat" && !document.querySelector('style').innerText.includes(`vc-bg-rpt-${_class}`)){
                let style_sheet =`
                @media screen and (min-width: 900px) and (max-width: 2400px) {
                    .vc-bg-rpt-${_class}{
                        background-repeat: ${_class};
                    }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "bgSize" && !document.querySelector('style').innerText.includes(`vc-bg-sz-${_class}`)){
                let style_sheet =`
                @media screen and (min-width: 900px) and (max-width: 2400px) {
                    .vc-bg-sz-${_class}{
                        background-size: ${_class};
                    }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "border" && !document.querySelector('style').innerText.includes(`vc-border-${_class}`)){
                let style_sheet =`
                @media screen and (min-width: 900px) and (max-width: 2400px) {
                    .vc-border-${_class}{
                        border: ${_class};
                    }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "borderTop" && !document.querySelector('style').innerText.includes(`vc-border-top-${_class}`)){
                let style_sheet =`
                @media screen and (min-width: 900px) and (max-width: 2400px) {
                    .vc-border-top-${_class}{
                        border-top: ${_class};
                    }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "borderLeft" && !document.querySelector('style').innerText.includes(`vc-border-l-${_class}`)){
                let style_sheet =`
                @media screen and (min-width: 900px) and (max-width: 2400px) {
                    .vc-border-l-${_class}{
                        border-left: ${_class};
                    }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "borderRight" && !document.querySelector('style').innerText.includes(`vc-border-r-${_class}`)){
                let style_sheet =`
                @media screen and (min-width: 900px) and (max-width: 2400px) {
                    .vc-border-r-${_class}{
                        border-right: ${_class};
                    }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "borderBottom" && !document.querySelector('style').innerText.includes(`vc-border-b-${_class}`)){
                let style_sheet =`
                @media screen and (min-width: 900px) and (max-width: 2400px) {
                    .vc-border-b-${_class}{
                        border-bottom: ${_class};
                    }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "borderRadius" && !document.querySelector('style').innerText.includes(`vc-radius-${_class}`)){
                let style_sheet =`
                @media screen and (min-width: 900px) and (max-width: 2400px) {
                    .vc-radius-${_class}{
                        border-radius: ${_class};
                    }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "borderStyle" && !document.querySelector('style').innerText.includes(`vc-style-${_class}`)){
                let style_sheet =`
                @media screen and (min-width: 900px) and (max-width: 2400px) {
                    .vc-style-${_class}{
                        border-style: ${_class};
                    }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "borderColor" && !document.querySelector('style').innerText.includes(`vc-border-clr-${_class}`)){
                let style_sheet =`
                @media screen and (min-width: 900px) and (max-width: 2400px) {
                    .vc-border-clr-${_class}{
                        border-color: ${_class};
                    }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "borderType" && !document.querySelector('style').innerText.includes(`vc-border-type-${_class}`)){
                let style_sheet =`
                @media screen and (min-width: 900px) and (max-width: 2400px) {
                    .vc-border-type-${_class}{
                        border-collapse: ${_class};
                    }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "rotate" && !document.querySelector('style').innerText.includes(`vc-rotate-${_class}`)){
                let style_sheet =`
                @media screen and (min-width: 900px) and (max-width: 2400px) {
                    .vc-rotate-${_class}{
                        transform: rotate(${_class});
                    }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "skew" && !document.querySelector('style').innerText.includes(`vc-skew-${_class}`)){
                let style_sheet =`
                @media screen and (min-width: 900px) and (max-width: 2400px) {
                    .vc-skew-${_class}{
                        transform: skew(${_class});
                    }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "scale" && !document.querySelector('style').innerText.includes(`vc-scale-${_class}`)){
                let style_sheet =`
                @media screen and (min-width: 900px) and (max-width: 2400px) {
                    .vc-scale-${_class}{
                        transform: scale(${_class});
                    }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "translate" && !document.querySelector('style').innerText.includes(`vc-translate-${_class}`)){
                let style_sheet =`
                @media screen and (min-width: 900px) and (max-width: 2400px) {
                    .vc-translate-${_class}{
                        transform: translate(${_class});
                    }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "translateX" && !document.querySelector('style').innerText.includes(`vc-translateX-${_class}`)){
                let style_sheet =`
                @media screen and (min-width: 900px) and (max-width: 2400px) {
                    .vc-translateX-${_class}{
                        transform: translateX(${_class});
                    }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "translateY" && !document.querySelector('style').innerText.includes(`vc-translateY-${_class}`)){
                let style_sheet =`
                @media screen and (min-width: 900px) and (max-width: 2400px) {
                    .vc-translateY-${_class}{
                        transform: translateY(${_class});
                    }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "translateZ" && !document.querySelector('style').innerText.includes(`vc-translateZ-${_class}`)){
                let style_sheet =`
                @media screen and (min-width: 900px) and (max-width: 2400px) {
                    .vc-translateZ-${_class}{
                        transform: translateZ(${_class});
                    }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "cursor" && !document.querySelector('style').innerText.includes(`vc-cursor-${_class}`)){
                let style_sheet =`
                @media screen and (min-width: 900px) and (max-width: 2400px) {
                    .vc-cursor-${_class}{
                        cursor: ${_class};
                    }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "transition" && !document.querySelector('style').innerText.includes(`vc-transition-${_class}`)){
                let style_sheet =`
                @media screen and (min-width: 900px) and (max-width: 2400px) {
                    .vc-transition-${_class}{
                        transition: ${_class};
                    }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "outline" && !document.querySelector('style').innerText.includes(`vc-o-${_class}`)){
                let style_sheet =`
                @media screen and (min-width: 900px) and (max-width: 2400px) {
                    .vc-o-${_class}{
                        outline: ${_class};
                    }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "oTop" && !document.querySelector('style').innerText.includes(`vc-o-top-${_class}`)){
                let style_sheet =`
                @media screen and (min-width: 900px) and (max-width: 2400px) {
                    .vc-o-top-${_class}{
                        outline-top: ${_class};
                    }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "oLeft" && !document.querySelector('style').innerText.includes(`vc-o-left-${_class}`)){
                let style_sheet =`
                @media screen and (min-width: 900px) and (max-width: 2400px) {
                    .vc-o-left-${_class}{
                        outline-left: ${_class};
                    }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "oRight" && !document.querySelector('style').innerText.includes(`vc-o-right-${_class}`)){
                let style_sheet =`
                @media screen and (min-width: 900px) and (max-width: 2400px) {
                    .vc-o-right-${_class}{
                        outline-right: ${_class};
                    }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "oBottom" && !document.querySelector('style').innerText.includes(`vc-o-bottom-${_class}`)){
                let style_sheet =`
                @media screen and (min-width: 900px) and (max-width: 2400px) {
                    .vc-o-bottom-${_class}{
                        outline-bottom: ${_class};
                    }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "oColor" && !document.querySelector('style').innerText.includes(`vc-o-color-${_class}`)){
                let style_sheet =`
                @media screen and (min-width: 900px) and (max-width: 2400px) {
                    .vc-o-color-${_class}{
                        outline-color: ${_class};
                    }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "oStyle" && !document.querySelector('style').innerText.includes(`vc-o-style-${_class}`)){
                let style_sheet =`
                @media screen and (min-width: 900px) and (max-width: 2400px) {
                    .vc-o-style-${_class}{
                        outline-style: ${_class};
                    }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "opacity" && !document.querySelector('style').innerText.includes(`vc-opacity-${_class}`)){
                let style_sheet =`
                @media screen and (min-width: 900px) and (max-width: 2400px) {
                    .vc-opacity-${_class}{
                        opacity: ${_class};
                    }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "blur" && !document.querySelector('style').innerText.includes(`vc-blur-${_class}`)){
                let style_sheet =`
                @media screen and (min-width: 900px) and (max-width: 2400px) {
                    .vc-blur-${_class}{
                        filter: blur(${_class});
                    }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "grayscale" && !document.querySelector('style').innerText.includes(`vc-grayscale-${_class}`)){
                let style_sheet =`
                @media screen and (min-width: 900px) and (max-width: 2400px) {
                    .vc-grayscale-${_class}{
                        filter: grayscale(${_class});
                    }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "saturate" && !document.querySelector('style').innerText.includes(`vc-saturate-${_class}`)){
                let style_sheet =`
                @media screen and (min-width: 900px) and (max-width: 2400px) {
                    .vc-saturate-${_class}{
                        filter: saturate(${_class});
                    }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "brightness" && !document.querySelector('style').innerText.includes(`vc-brightness-${_class}`)){
                let style_sheet =`
                @media screen and (min-width: 900px) and (max-width: 2400px) {
                    .vc-brightness-${_class}{
                        filter: brightness(${_class});
                    }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "contrast" && !document.querySelector('style').innerText.includes(`vc-contrast-${_class}`)){
                let style_sheet =`
                @media screen and (min-width: 900px) and (max-width: 2400px) {
                    .vc-contrast-${_class}{
                        filter: contrast(${_class});
                    }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "MBdisplay" && !document.querySelector('style').innerText.includes(`mb-vc-d-${_class}`)){
                let style_sheet =`
                @media screen and (min-width: 320px) and (max-width: 600px){
                    .mb-vc-d-${_class}{
                        display: ${_class};
                    }
                }
                `;              
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "MBalignItems" && !document.querySelector('style').innerText.includes(`mb-vc-items-${_class}`)){
                let style_sheet =`
                @media screen and (min-width: 320px) and (max-width: 600px){
                    .mb-vc-items-${_class}{
                        align-items: ${_class};
                    }
                }
                `;              
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "MBboxSizing" && !document.querySelector('style').innerText.includes(`mb-vc-box-${_class}`)){
                let style_sheet =`
                @media screen and (min-width: 320px) and (max-width: 600px){
                    .mb-vc-box-${_class}{
                        box-sizing: ${_class};
                    }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "MBfloats" && !document.querySelector('style').innerText.includes(`mb-vc-float-${_class}`)){
                let style_sheet =`
                @media screen and (min-width: 320px) and (max-width: 600px){
                    .mb-vc-float-${_class}{
                        float: ${_class};
                    }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "MBoverflow" && !document.querySelector('style').innerText.includes(`mb-vc-overflow-${_class}`)){
                let style_sheet =`
                @media screen and (min-width: 320px) and (max-width: 600px){
                    .mb-vc-overflow-${_class}{
                        overflow: ${_class};
                    }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "MBoverflowX" && !document.querySelector('style').innerText.includes(`mb-vc-overflowX-${_class}`)){
                let style_sheet =`
                @media screen and (min-width: 320px) and (max-width: 600px){
                    .mb-vc-overflowX-${_class}{
                        overflow-x: ${_class};
                    }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "MBoverflowY" && !document.querySelector('style').innerText.includes(`mb-vc-overflowY-${_class}`)){
                let style_sheet =`
                @media screen and (min-width: 320px) and (max-width: 600px){
                    .mb-vc-overflowY-${_class}{
                        overflow-y: ${_class};
                    }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "MBposition" && !document.querySelector('style').innerText.includes(`mb-vc-pst-${_class}`)){
                let style_sheet =`
                @media screen and (min-width: 320px) and (max-width: 600px){
                    .mb-vc-pst-${_class}{
                        position: ${_class};
                    }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "MBtop" && !document.querySelector('style').innerText.includes(`mb-vc-t-${_class}`)){
                let style_sheet =`
                @media screen and (min-width: 320px) and (max-width: 600px){
                    .mb-vc-t-${_class}{
                        top: ${_class};
                    }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "MBleft" && !document.querySelector('style').innerText.includes(`mb-vc-l-${_class}`)){
                let style_sheet =`
                @media screen and (min-width: 320px) and (max-width: 600px){
                    .mb-vc-l-${_class}{
                        left: ${_class};
                    }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "MBright" && !document.querySelector('style').innerText.includes(`mb-vc-r-${_class}`)){
                let style_sheet =`
                @media screen and (min-width: 320px) and (max-width: 600px){
                    .mb-vc-r-${_class}{
                        right: ${_class};
                    }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "MBbottom" && !document.querySelector('style').innerText.includes(`mb-vc-b-${_class}`)){
                let style_sheet =`
                @media screen and (min-width: 320px) and (max-width: 600px){
                    .mb-vc-b-${_class}{
                        bottom: ${_class};
                    }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "MBindex" && !document.querySelector('style').innerText.includes(`mb-vc-index-${_class}`)){
                let style_sheet =`
                @media screen and (min-width: 320px) and (max-width: 600px){
                    .mb-vc-index-${_class}{
                        z-index: ${_class};
                    }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "MBvisibility" && !document.querySelector('style').innerText.includes(`mb-vc-visibility-${_class}`)){
                let style_sheet =`
                @media screen and (min-width: 320px) and (max-width: 600px){
                    .mb-vc-visibility-${_class}{
                        visibility: ${_class};
                    }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "MBflex" && !document.querySelector('style').innerText.includes(`mb-vc-flex-${_class}`)){
                let style_sheet =`
                @media screen and (min-width: 320px) and (max-width: 600px){
                    .mb-vc-flex-${_class}{
                        flex: ${_class};
                    }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "MBdirection" && !document.querySelector('style').innerText.includes(`mb-vc-direction-${_class}`)){
                let style_sheet =`
                @media screen and (min-width: 320px) and (max-width: 600px){
                    .mb-vc-direction-${_class}{
                        flex-direction: ${_class};
                    }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "MBwrap" && !document.querySelector('style').innerText.includes(`mb-vc-wrap-${_class}`)){
                let style_sheet =`
                @media screen and (min-width: 320px) and (max-width: 600px){
                    .mb-vc-wrap-${_class}{
                        flex-wrap: ${_class};
                    }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "MBshrink" && !document.querySelector('style').innerText.includes(`mb-vc-shrink-${_class}`)){
                let style_sheet =`
                @media screen and (min-width: 320px) and (max-width: 600px){
                    .mb-vc-shrink-${_class}{
                        flex-shrink: ${_class};
                    }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "MBbasis" && !document.querySelector('style').innerText.includes(`mb-vc-basis-${_class}`)){
                let style_sheet =`
                @media screen and (min-width: 320px) and (max-width: 600px){
                    .mb-vc-basis-${_class}{
                        flex-basis: ${_class};
                    }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "MBjustify" && !document.querySelector('style').innerText.includes(`mb-vc-justify-${_class}`)){
                let style_sheet =`
                @media screen and (min-width: 320px) and (max-width: 600px){
                    .mb-vc-justify-${_class}{
                        justify-content: ${_class};
                    }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "MBjustItems" && !document.querySelector('style').innerText.includes(`mb-vc-just-items-${_class}`)){
                let style_sheet =`
                @media screen and (min-width: 320px) and (max-width: 600px){
                    .mb-vc-just-items-${_class}{
                        justify-items: ${_class};
                    }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "MBjustSelf" && !document.querySelector('style').innerText.includes(`mb-vc-just-self-${_class}`)){
                let style_sheet =`
                @media screen and (min-width: 320px) and (max-width: 600px){
                    .mb-vc-just-self-${_class}{
                        justify-self: ${_class};
                    }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "MBalignContent" && !document.querySelector('style').innerText.includes(`mb-vc-content-${_class}`)){
                let style_sheet =`
                @media screen and (min-width: 320px) and (max-width: 600px){
                    .mb-vc-content-${_class}{
                        align-content: ${_class};
                    }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "MBalignItems" && !document.querySelector('style').innerText.includes(`mb-vc-items-${_class}`)){
                let style_sheet =`
                @media screen and (min-width: 320px) and (max-width: 600px){
                    .mb-vc-items-${_class}{
                        align-items: ${_class};
                    }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "MBalignSelf" && !document.querySelector('style').innerText.includes(`mb-vc-self-${_class}`)){
                let style_sheet =`
                @media screen and (min-width: 320px) and (max-width: 600px){
                    .mb-vc-self-${_class}{
                        align-self: ${_class};
                    }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "MBpadding" && !document.querySelector('style').innerText.includes(`mb-vc-p-${_class}`)){
                let style_sheet =`
                @media screen and (min-width: 320px) and (max-width: 600px){
                    .mb-vc-p-${_class}{
                        padding: ${_class};
                    }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "MBpaddingTop" && !document.querySelector('style').innerText.includes(`mb-vc-pt-${_class}`)){
                let style_sheet =`
                @media screen and (min-width: 320px) and (max-width: 600px){
                    .mb-vc-pt-${_class}{
                        padding-top: ${_class};
                    }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "MBpaddingLeft" && !document.querySelector('style').innerText.includes(`mb-vc-pl-${_class}`)){
                let style_sheet =`
                @media screen and (min-width: 320px) and (max-width: 600px){
                    .mb-vc-pl-${_class}{
                        padding-left: ${_class};
                    }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "MBpaddingRight" && !document.querySelector('style').innerText.includes(`mb-vc-pr-${_class}`)){
                let style_sheet =`
                @media screen and (min-width: 320px) and (max-width: 600px){
                    .mb-vc-pr-${_class}{
                        padding-right: ${_class};
                    }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "MBpaddingBottom" && !document.querySelector('style').innerText.includes(`mb-vc-pb-${_class}`)){
                let style_sheet =`
                @media screen and (min-width: 320px) and (max-width: 600px){
                    .mb-vc-pb-${_class}{
                        padding-bottom: ${_class};
                    }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "MBmargin" && !document.querySelector('style').innerText.includes(`mb-vc-m-${_class}`)){
                let style_sheet =`
                @media screen and (min-width: 320px) and (max-width: 600px){
                    .mb-vc-m-${_class}{
                        margin: ${_class};
                    }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "MBmarginTop" && !document.querySelector('style').innerText.includes(`mb-vc-mt-${_class}`)){
                let style_sheet =`
                @media screen and (min-width: 320px) and (max-width: 600px){
                    .mb-vc-mt-${_class}{
                        margin-top: ${_class};
                    }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "MBmarginLeft" && !document.querySelector('style').innerText.includes(`mb-vc-ml-${_class}`)){
                let style_sheet =`
                @media screen and (min-width: 320px) and (max-width: 600px){
                    .mb-vc-ml-${_class}{
                        margin-left: ${_class};
                    }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "MBmarginRight" && !document.querySelector('style').innerText.includes(`mb-vc-mr-${_class}`)){
                let style_sheet =`
                @media screen and (min-width: 320px) and (max-width: 600px){
                    .mb-vc-mr-${_class}{
                        margin-right: ${_class};
                    }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "MBmarginBottom" && !document.querySelector('style').innerText.includes(`mb-vc-mb-${_class}`)){
                let style_sheet =`
                @media screen and (min-width: 320px) and (max-width: 600px){
                    .mb-vc-mb-${_class}{
                        margin-bottom: ${_class};
                    }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "MBwidth" && !document.querySelector('style').innerText.includes(`mb-vc-w-${_class}`)){
                let style_sheet =`
                @media screen and (min-width: 320px) and (max-width: 600px){
                    .mb-vc-w-${_class}{
                        width: ${_class};
                    }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "MBheight" && !document.querySelector('style').innerText.includes(`mb-vc-h-${_class}`)){
                let style_sheet =`
                @media screen and (min-width: 320px) and (max-width: 600px){
                    .mb-vc-h-${_class}{
                        height: ${_class};
                    }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "MBfontSize" && !document.querySelector('style').innerText.includes(`mb-vc-font-sz-${_class}`)){
                let style_sheet =`
                @media screen and (min-width: 320px) and (max-width: 600px){
                    .mb-vc-font-sz-${_class}{
                        font-size: ${_class};
                    }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "MBfontStyle" && !document.querySelector('style').innerText.includes(`mb-vc-font-style-${_class}`)){
                let style_sheet =`
                @media screen and (min-width: 320px) and (max-width: 600px){
                    .mb-vc-font-style-${_class}{
                        font-style: ${_class};
                    }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "MBfontWeight" && !document.querySelector('style').innerText.includes(`mb-vc-weight-${_class}`)){
                let style_sheet =`
                @media screen and (min-width: 320px) and (max-width: 600px){
                    .mb-vc-weight-${_class}{
                        font-weight: ${_class};
                    }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "MBletterSpacing" && !document.querySelector('style').innerText.includes(`mb-vc-let-spacing-${_class}`)){
                let style_sheet =`
                @media screen and (min-width: 320px) and (max-width: 600px){
                    .mb-vc-let-spacing-${_class}{
                        letter-spacing: ${_class};
                    }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "MBlineHeight" && !document.querySelector('style').innerText.includes(`mb-vc-leading-${_class}`)){
                let style_sheet =`
                @media screen and (min-width: 320px) and (max-width: 600px){
                    .mb-vc-leading-${_class}{
                        line-height: ${_class};
                    }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "MBtextAlign" && !document.querySelector('style').innerText.includes(`mb-vc-text-${_class}`)){
                let style_sheet =`
                @media screen and (min-width: 320px) and (max-width: 600px){
                    .mb-vc-text-${_class}{
                        text-align: ${_class};
                    }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "MBtextColor" && !document.querySelector('style').innerText.includes(`mb-vc-color-${_class}`)){
                let style_sheet =`
                @media screen and (min-width: 320px) and (max-width: 600px){
                    .mb-vc-color-${_class}{
                        color: ${_class};
                    }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "MBdecoration" && !document.querySelector('style').innerText.includes(`mb-vc-decoration-${_class}`)){
                let style_sheet =`
                @media screen and (min-width: 320px) and (max-width: 600px){
                    .mb-vc-decoration-${_class}{
                        text-decoration: ${_class};
                    }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "MBtextTransform" && !document.querySelector('style').innerText.includes(`mb-vc-text-transform-${_class}`)){
                let style_sheet =`
                @media screen and (min-width: 320px) and (max-width: 600px){
                    .mb-vc-text-transform-${_class}{
                        text-transform: ${_class};
                    }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "MBwordBreak" && !document.querySelector('style').innerText.includes(`mb-vc-break-${_class}`)){
                let style_sheet =`
                @media screen and (min-width: 320px) and (max-width: 600px){
                    .mb-vc-break-${_class}{
                        word-break: ${_class};
                        overflow-wrap: break-word;
                    }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "MBbgAttachment" && !document.querySelector('style').innerText.includes(`mb-vc-attachment-${_class}`)){
                let style_sheet =`
                @media screen and (min-width: 320px) and (max-width: 600px){
                    .mb-vc-attachment-${_class}{
                        background-attachment: ${_class};
                    }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "MBbgClip" && !document.querySelector('style').innerText.includes(`mb-vc-bg-clip-${_class}`)){
                let style_sheet =`
                @media screen and (min-width: 320px) and (max-width: 600px){
                    .mb-vc-bg-clip-${_class}{
                        background-clip: ${_class};
                    }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "MBbgColor" && !document.querySelector('style').innerText.includes(`mb-vc-bg-${_class}`)){
                style_sheet +=`
                @media screen and (min-width: 320px) and (max-width: 600px){
                    .mb-vc-bg-${_class}{
                        background-color: ${_class};
                    }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "MBbgPosition" && !document.querySelector('style').innerText.includes(`mb-vc-bg-post-${_class}`)){
                let style_sheet =`
                @media screen and (min-width: 320px) and (max-width: 600px){
                    .mb-vc-bg-post-${_class}{
                        background-position: ${_class};
                    }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "MBbgRepeat" && !document.querySelector('style').innerText.includes(`mb-vc-bg-rpt-${_class}`)){
                let style_sheet =`
                @media screen and (min-width: 320px) and (max-width: 600px){
                    .mb-vc-bg-rpt-${_class}{
                        background-repeat: ${_class};
                    }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "MBbgSize" && !document.querySelector('style').innerText.includes(`mb-vc-bg-sz-${_class}`)){
                let style_sheet =`
                @media screen and (min-width: 320px) and (max-width: 600px){
                    .mb-vc-bg-sz-${_class}{
                        background-size: ${_class};
                    }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "MBborder" && !document.querySelector('style').innerText.includes(`mb-vc-border-${_class}`)){
                let style_sheet =`
                @media screen and (min-width: 320px) and (max-width: 600px){
                    .mb-vc-border-${_class}{
                        border: ${_class};
                    }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "MBborderTop" && !document.querySelector('style').innerText.includes(`mb-vc-border-top-${_class}`)){
                let style_sheet =`
                @media screen and (min-width: 320px) and (max-width: 600px){
                    .mb-vc-border-top-${_class}{
                        border-top: ${_class};
                    }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "MBborderLeft" && !document.querySelector('style').innerText.includes(`mb-vc-border-l-${_class}`)){
                let style_sheet =`
                @media screen and (min-width: 320px) and (max-width: 600px){
                    .mb-vc-border-l-${_class}{
                        border-left: ${_class};
                    }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "MBborderRight" && !document.querySelector('style').innerText.includes(`mb-vc-border-r-${_class}`)){
                let style_sheet =`
                @media screen and (min-width: 320px) and (max-width: 600px){
                    .mb-vc-border-r-${_class}{
                        border-right: ${_class};
                    }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "MBborderBottom" && !document.querySelector('style').innerText.includes(`mb-vc-border-b-${_class}`)){
                let style_sheet =`
                @media screen and (min-width: 320px) and (max-width: 600px){
                    .mb-vc-border-b-${_class}{
                        border-bottom: ${_class};
                    }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "MBborderRadius" && !document.querySelector('style').innerText.includes(`mb-vc-radius-${_class}`)){
                let style_sheet =`
                @media screen and (min-width: 320px) and (max-width: 600px){
                    .mb-vc-radius-${_class}{
                        border-radius: ${_class};
                    }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "MBborderStyle" && !document.querySelector('style').innerText.includes(`mb-vc-style-${_class}`)){
                let style_sheet =`
                @media screen and (min-width: 320px) and (max-width: 600px){
                    .mb-vc-style-${_class}{
                        border-style: ${_class};
                    }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "MBborderColor" && !document.querySelector('style').innerText.includes(`mb-vc-border-clr-${_class}`)){
                let style_sheet =`
                @media screen and (min-width: 320px) and (max-width: 600px){
                    .mb-vc-border-clr-${_class}{
                        border-color: ${_class};
                    }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "MBborderType" && !document.querySelector('style').innerText.includes(`mb-vc-border-type-${_class}`)){
                let style_sheet =`
                @media screen and (min-width: 320px) and (max-width: 600px){
                    .mb-vc-border-type-${_class}{
                        border-collapse: ${_class};
                    }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "MBrotate" && !document.querySelector('style').innerText.includes(`mb-vc-rotate-${_class}`)){
                let style_sheet =`
                @media screen and (min-width: 320px) and (max-width: 600px){
                    .mb-vc-rotate-${_class}{
                        transform: rotate(${_class});
                    }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "MBskew" && !document.querySelector('style').innerText.includes(`mb-vc-skew-${_class}`)){
                let style_sheet =`
                @media screen and (min-width: 320px) and (max-width: 600px){
                    .mb-vc-skew-${_class}{
                        transform: skew(${_class});
                    }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "MBscale" && !document.querySelector('style').innerText.includes(`mb-vc-scale-${_class}`)){
                let style_sheet =`
                @media screen and (min-width: 320px) and (max-width: 600px){
                    .mb-vc-scale-${_class}{
                        transform: scale(${_class});
                    }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "MBtranslate" && !document.querySelector('style').innerText.includes(`mb-vc-translate-${_class}`)){
                let style_sheet =`
                @media screen and (min-width: 320px) and (max-width: 600px){
                    .mb-vc-translate-${_class}{
                        transform: translate(${_class});
                    }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "MBtranslateX" && !document.querySelector('style').innerText.includes(`mb-vc-translateX-${_class}`)){
                let style_sheet =`
                @media screen and (min-width: 320px) and (max-width: 600px){
                    .mb-vc-translateX-${_class}{
                        transform: translateX(${_class});
                    }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "MBtranslateY" && !document.querySelector('style').innerText.includes(`mb-vc-translateY-${_class}`)){
                let style_sheet =`
                @media screen and (min-width: 320px) and (max-width: 600px){
                    .mb-vc-translateY-${_class}{
                        transform: translateY(${_class});
                    }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "MBtranslateZ" && !document.querySelector('style').innerText.includes(`mb-vc-translateZ-${_class}`)){
                let style_sheet =`
                @media screen and (min-width: 320px) and (max-width: 600px){
                    .mb-vc-translateZ-${_class}{
                        transform: translateZ(${_class});
                    }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "MBcursor" && !document.querySelector('style').innerText.includes(`mb-vc-cursor-${_class}`)){
                let style_sheet =`
                @media screen and (min-width: 320px) and (max-width: 600px){
                    .mb-vc-cursor-${_class}{
                        cursor: ${_class};
                    }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "MBtransition" && !document.querySelector('style').innerText.includes(`mb-vc-transition-${_class}`)){
                let style_sheet =`
                @media screen and (min-width: 320px) and (max-width: 600px){
                    .mb-vc-transition-${_class}{
                        transition: ${_class};
                    }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "MBoutline" && !document.querySelector('style').innerText.includes(`mb-vc-o-${_class}`)){
                let style_sheet =`
                @media screen and (min-width: 320px) and (max-width: 600px){
                    .mb-vc-o-${_class}{
                        outline: ${_class};
                    }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "MBoTop" && !document.querySelector('style').innerText.includes(`mb-vc-o-top-${_class}`)){
                let style_sheet =`
                @media screen and (min-width: 320px) and (max-width: 600px){
                    .mb-vc-o-top-${_class}{
                        outline-top: ${_class};
                    }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "MBoLeft" && !document.querySelector('style').innerText.includes(`mb-vc-o-left-${_class}`)){
                let style_sheet =`
                @media screen and (min-width: 320px) and (max-width: 600px){
                    .mb-vc-o-left-${_class}{
                        outline-left: ${_class};
                    }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "MBoRight" && !document.querySelector('style').innerText.includes(`mb-vc-o-right-${_class}`)){
                let style_sheet =`
                @media screen and (min-width: 320px) and (max-width: 600px){
                    .mb-vc-o-right-${_class}{
                        outline-right: ${_class};
                    }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "MBoBottom" && !document.querySelector('style').innerText.includes(`mb-vc-o-bottom-${_class}`)){
                let style_sheet =`
                @media screen and (min-width: 320px) and (max-width: 600px){
                    .mb-vc-o-bottom-${_class}{
                        outline-bottom: ${_class};
                    }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "MBoColor" && !document.querySelector('style').innerText.includes(`mb-vc-o-color-${_class}`)){
                let style_sheet =`
                @media screen and (min-width: 320px) and (max-width: 600px){
                    .mb-vc-o-color-${_class}{
                        outline-color: ${_class};
                    }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "MBoStyle" && !document.querySelector('style').innerText.includes(`mb-vc-o-style-${_class}`)){
                let style_sheet =`
                @media screen and (min-width: 320px) and (max-width: 600px){
                    .mb-vc-o-style-${_class}{
                        outline-style: ${_class};
                    }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "MBopacity" && !document.querySelector('style').innerText.includes(`mb-vc-opacity-${_class}`)){
                let style_sheet =`
                @media screen and (min-width: 320px) and (max-width: 600px){
                    .mb-vc-opacity-${_class}{
                        opacity: ${_class};
                    }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "MBblur" && !document.querySelector('style').innerText.includes(`mb-vc-blur-${_class}`)){
                let style_sheet =`
                @media screen and (min-width: 320px) and (max-width: 600px){
                    .mb-vc-blur-${_class}{
                        filter: blur(${_class});
                    }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "MBgrayscale" && !document.querySelector('style').innerText.includes(`mb-vc-grayscale-${_class}`)){
                let style_sheet =`
                @media screen and (min-width: 320px) and (max-width: 600px){
                    .mb-vc-grayscale-${_class}{
                        filter: grayscale(${_class});
                    }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "MBsaturate" && !document.querySelector('style').innerText.includes(`mb-vc-saturate-${_class}`)){
                let style_sheet =`
                @media screen and (min-width: 320px) and (max-width: 600px){
                    .mb-vc-saturate-${_class}{
                        filter: saturate(${_class});
                    }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "MBbrightness" && !document.querySelector('style').innerText.includes(`mb-vc-brightness-${_class}`)){
                let style_sheet =`
                @media screen and (min-width: 320px) and (max-width: 600px){
                    .mb-vc-brightness-${_class}{
                        filter: brightness(${_class});
                    }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "MBcontrast" && !document.querySelector('style').innerText.includes(`mb-vc-contrast-${_class}`)){
                let style_sheet =`
                @media screen and (min-width: 320px) and (max-width: 600px){
                    .mb-vc-contrast-${_class}{
                        filter: contrast(${_class});
                    }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "TBdisplay" && !document.querySelector('style').innerText.includes(`tb-vc-d-${_class}`)){
                let style_sheet =`
                @media screen and (min-width: 600px) and (max-width: 900px){
                    .tb-vc-d-${_class}{
                        display: ${_class};
                    }
                }
                `;              
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "TBalignItems" && !document.querySelector('style').innerText.includes(`tb-vc-items-${_class}`)){
                let style_sheet =`
                @media screen and (min-width: 600px) and (max-width: 900px){
                    .tb-vc-items-${_class}{
                        align-items: ${_class};
                    }
                }
                `;              
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "TBboxSizing" && !document.querySelector('style').innerText.includes(`tb-vc-box-${_class}`)){
                let style_sheet =`
                @media screen and (min-width: 600px) and (max-width: 900px){
                    .tb-vc-box-${_class}{
                        box-sizing: ${_class};
                    }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "TBfloats" && !document.querySelector('style').innerText.includes(`tb-vc-float-${_class}`)){
                let style_sheet =`
                @media screen and (min-width: 600px) and (max-width: 900px){
                    .tb-vc-float-${_class}{
                        float: ${_class};
                    }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "TBoverflow" && !document.querySelector('style').innerText.includes(`tb-vc-overflow-${_class}`)){
                let style_sheet =`
                @media screen and (min-width: 600px) and (max-width: 900px){
                    .tb-vc-overflow-${_class}{
                        overflow: ${_class};
                    }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "TBoverflowX" && !document.querySelector('style').innerText.includes(`tb-vc-overflowX-${_class}`)){
                let style_sheet =`
                @media screen and (min-width: 600px) and (max-width: 900px){
                    .tb-vc-overflowX-${_class}{
                        overflow-x: ${_class};
                    }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "TBoverflowY" && !document.querySelector('style').innerText.includes(`tb-vc-overflowY-${_class}`)){
                let style_sheet =`
                @media screen and (min-width: 600px) and (max-width: 900px){
                    .tb-vc-overflowY-${_class}{
                        overflow-y: ${_class};
                    }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "TBposition" && !document.querySelector('style').innerText.includes(`tb-vc-pst-${_class}`)){
                let style_sheet =`
                @media screen and (min-width: 600px) and (max-width: 900px){
                    .tb-vc-pst-${_class}{
                        position: ${_class};
                    }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "TBtop" && !document.querySelector('style').innerText.includes(`tb-vc-t-${_class}`)){
                let style_sheet =`
                @media screen and (min-width: 600px) and (max-width: 900px){
                    .tb-vc-t-${_class}{
                        top: ${_class};
                    }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "TBleft" && !document.querySelector('style').innerText.includes(`tb-vc-l-${_class}`)){
                let style_sheet =`
                @media screen and (min-width: 600px) and (max-width: 900px){
                    .tb-vc-l-${_class}{
                        left: ${_class};
                    }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "TBright" && !document.querySelector('style').innerText.includes(`tb-vc-r-${_class}`)){
                let style_sheet =`
                @media screen and (min-width: 600px) and (max-width: 900px){
                    .tb-vc-r-${_class}{
                        right: ${_class};
                    }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "TBbottom" && !document.querySelector('style').innerText.includes(`tb-vc-b-${_class}`)){
                let style_sheet =`
                @media screen and (min-width: 600px) and (max-width: 900px){
                    .tb-vc-b-${_class}{
                        bottom: ${_class};
                    }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "TBindex" && !document.querySelector('style').innerText.includes(`tb-vc-index-${_class}`)){
                let style_sheet =`
                @media screen and (min-width: 600px) and (max-width: 900px){
                    .tb-vc-index-${_class}{
                        z-index: ${_class};
                    }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "TBvisibility" && !document.querySelector('style').innerText.includes(`tb-vc-visibility-${_class}`)){
                let style_sheet =`
                @media screen and (min-width: 600px) and (max-width: 900px){
                    .tb-vc-visibility-${_class}{
                        visibility: ${_class};
                    }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "TBflex" && !document.querySelector('style').innerText.includes(`tb-vc-flex-${_class}`)){
                let style_sheet =`
                @media screen and (min-width: 600px) and (max-width: 900px){
                    .tb-vc-flex-${_class}{
                        flex: ${_class};
                    }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "TBdirection" && !document.querySelector('style').innerText.includes(`tb-vc-direction-${_class}`)){
                let style_sheet =`
                @media screen and (min-width: 600px) and (max-width: 900px){
                    .tb-vc-direction-${_class}{
                        flex-direction: ${_class};
                    }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "TBwrap" && !document.querySelector('style').innerText.includes(`tb-vc-wrap-${_class}`)){
                let style_sheet =`
                @media screen and (min-width: 600px) and (max-width: 900px){
                    .tb-vc-wrap-${_class}{
                        flex-wrap: ${_class};
                    }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "TBshrink" && !document.querySelector('style').innerText.includes(`tb-vc-shrink-${_class}`)){
                let style_sheet =`
                @media screen and (min-width: 600px) and (max-width: 900px){
                    .tb-vc-shrink-${_class}{
                        flex-shrink: ${_class};
                    }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "TBbasis" && !document.querySelector('style').innerText.includes(`tb-vc-basis-${_class}`)){
                let style_sheet =`
                @media screen and (min-width: 600px) and (max-width: 900px){
                    .tb-vc-basis-${_class}{
                        flex-basis: ${_class};
                    }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "TBjustify" && !document.querySelector('style').innerText.includes(`tb-vc-justify-${_class}`)){
                let style_sheet =`
                @media screen and (min-width: 600px) and (max-width: 900px){
                    .tb-vc-justify-${_class}{
                        justify-content: ${_class};
                    }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "TBjustItems" && !document.querySelector('style').innerText.includes(`tb-vc-just-items-${_class}`)){
                let style_sheet =`
                @media screen and (min-width: 600px) and (max-width: 900px){
                    .tb-vc-just-items-${_class}{
                        justify-items: ${_class};
                    }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "TBjustSelf" && !document.querySelector('style').innerText.includes(`tb-vc-just-self-${_class}`)){
                let style_sheet =`
                @media screen and (min-width: 600px) and (max-width: 900px){
                    .tb-vc-just-self-${_class}{
                        justify-self: ${_class};
                    }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "TBalignContent" && !document.querySelector('style').innerText.includes(`tb-vc-content-${_class}`)){
                let style_sheet =`
                @media screen and (min-width: 600px) and (max-width: 900px){
                    .tb-vc-content-${_class}{
                        align-content: ${_class};
                    }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "TBalignItems" && !document.querySelector('style').innerText.includes(`tb-vc-items-${_class}`)){
                let style_sheet =`
                @media screen and (min-width: 600px) and (max-width: 900px){
                    .tb-vc-items-${_class}{
                        align-items: ${_class};
                    }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "TBalignSelf" && !document.querySelector('style').innerText.includes(`tb-vc-self-${_class}`)){
                let style_sheet =`
                @media screen and (min-width: 600px) and (max-width: 900px){
                    .tb-vc-self-${_class}{
                        align-self: ${_class};
                    }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "TBpadding" && !document.querySelector('style').innerText.includes(`tb-vc-p-${_class}`)){
                let style_sheet =`
                @media screen and (min-width: 600px) and (max-width: 900px){
                    .tb-vc-p-${_class}{
                        padding: ${_class};
                    }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "TBpaddingTop" && !document.querySelector('style').innerText.includes(`tb-vc-pt-${_class}`)){
                let style_sheet =`
                @media screen and (min-width: 600px) and (max-width: 900px){
                    .tb-vc-pt-${_class}{
                        padding-top: ${_class};
                    }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "TBpaddingLeft" && !document.querySelector('style').innerText.includes(`tb-vc-pl-${_class}`)){
                let style_sheet =`
                @media screen and (min-width: 600px) and (max-width: 900px){
                    .tb-vc-pl-${_class}{
                        padding-left: ${_class};
                    }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "TBpaddingRight" && !document.querySelector('style').innerText.includes(`tb-vc-pr-${_class}`)){
                let style_sheet =`
                @media screen and (min-width: 600px) and (max-width: 900px){
                    .tb-vc-pr-${_class}{
                        padding-right: ${_class};
                    }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "TBpaddingBottom" && !document.querySelector('style').innerText.includes(`tb-vc-pb-${_class}`)){
                let style_sheet =`
                @media screen and (min-width: 600px) and (max-width: 900px){
                    .tb-vc-pb-${_class}{
                        padding-bottom: ${_class};
                    }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "TBmargin" && !document.querySelector('style').innerText.includes(`tb-vc-m-${_class}`)){
                let style_sheet =`
                @media screen and (min-width: 600px) and (max-width: 900px){
                    .tb-vc-m-${_class}{
                        margin: ${_class};
                    }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "TBmarginTop" && !document.querySelector('style').innerText.includes(`tb-vc-mt-${_class}`)){
                let style_sheet =`
                @media screen and (min-width: 600px) and (max-width: 900px){
                    .tb-vc-mt-${_class}{
                        margin-top: ${_class};
                    }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "TBmarginLeft" && !document.querySelector('style').innerText.includes(`tb-vc-ml-${_class}`)){
                let style_sheet =`
                @media screen and (min-width: 600px) and (max-width: 900px){
                    .tb-vc-ml-${_class}{
                        margin-left: ${_class};
                    }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "TBmarginRight" && !document.querySelector('style').innerText.includes(`tb-vc-mr-${_class}`)){
                let style_sheet =`
                @media screen and (min-width: 600px) and (max-width: 900px){
                    .tb-vc-mr-${_class}{
                        margin-right: ${_class};
                    }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "TBmarginBottom" && !document.querySelector('style').innerText.includes(`tb-vc-mb-${_class}`)){
                let style_sheet =`
                @media screen and (min-width: 600px) and (max-width: 900px){
                    .tb-vc-mb-${_class}{
                        margin-bottom: ${_class};
                    }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "TBwidth" && !document.querySelector('style').innerText.includes(`tb-vc-w-${_class}`)){
                let style_sheet =`
                @media screen and (min-width: 600px) and (max-width: 900px){
                    .tb-vc-w-${_class}{
                        width: ${_class};
                    }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "TBheight" && !document.querySelector('style').innerText.includes(`tb-vc-h-${_class}`)){
                let style_sheet =`
                @media screen and (min-width: 600px) and (max-width: 900px){
                    .tb-vc-h-${_class}{
                        height: ${_class};
                    }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "TBfontSize" && !document.querySelector('style').innerText.includes(`tb-vc-font-sz-${_class}`)){
                let style_sheet =`
                @media screen and (min-width: 600px) and (max-width: 900px){
                    .tb-vc-font-sz-${_class}{
                        font-size: ${_class};
                    }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "TBfontStyle" && !document.querySelector('style').innerText.includes(`tb-vc-font-style-${_class}`)){
                let style_sheet =`
                @media screen and (min-width: 600px) and (max-width: 900px){
                    .tb-vc-font-style-${_class}{
                        font-style: ${_class};
                    }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "TBfontWeight" && !document.querySelector('style').innerText.includes(`tb-vc-weight-${_class}`)){
                let style_sheet =`
                @media screen and (min-width: 600px) and (max-width: 900px){
                    .tb-vc-weight-${_class}{
                        font-weight: ${_class};
                    }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "TBletterSpacing" && !document.querySelector('style').innerText.includes(`tb-vc-let-spacing-${_class}`)){
                let style_sheet =`
                @media screen and (min-width: 600px) and (max-width: 900px){
                    .tb-vc-let-spacing-${_class}{
                        letter-spacing: ${_class};
                    }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "TBlineHeight" && !document.querySelector('style').innerText.includes(`tb-vc-leading-${_class}`)){
                let style_sheet =`
                @media screen and (min-width: 600px) and (max-width: 900px){
                    .tb-vc-leading-${_class}{
                        line-height: ${_class};
                    }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "TBtextAlign" && !document.querySelector('style').innerText.includes(`tb-vc-text-${_class}`)){
                let style_sheet =`
                @media screen and (min-width: 600px) and (max-width: 900px){
                    .tb-vc-text-${_class}{
                        text-align: ${_class};
                    }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "TBtextColor" && !document.querySelector('style').innerText.includes(`tb-vc-color-${_class}`)){
                let style_sheet =`
                @media screen and (min-width: 600px) and (max-width: 900px){
                    .tb-vc-color-${_class}{
                        color: ${_class};
                    }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "TBdecoration" && !document.querySelector('style').innerText.includes(`tb-vc-decoration-${_class}`)){
                let style_sheet =`
                @media screen and (min-width: 600px) and (max-width: 900px){
                    .tb-vc-decoration-${_class}{
                        text-decoration: ${_class};
                    }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "TBtextTransform" && !document.querySelector('style').innerText.includes(`tb-vc-text-transform-${_class}`)){
                let style_sheet =`
                @media screen and (min-width: 600px) and (max-width: 900px){
                    .tb-vc-text-transform-${_class}{
                        text-transform: ${_class};
                    }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "TBwordBreak" && !document.querySelector('style').innerText.includes(`tb-vc-break-${_class}`)){
                let style_sheet =`
                @media screen and (min-width: 600px) and (max-width: 900px){
                    .tb-vc-break-${_class}{
                        word-break: ${_class};
                        overflow-wrap: break-word;
                    }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "TBbgAttachment" && !document.querySelector('style').innerText.includes(`tb-vc-attachment-${_class}`)){
                let style_sheet =`
                @media screen and (min-width: 600px) and (max-width: 900px){
                    .tb-vc-attachment-${_class}{
                        background-attachment: ${_class};
                    }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "TBbgClip" && !document.querySelector('style').innerText.includes(`tb-vc-bg-clip-${_class}`)){
                let style_sheet =`
                @media screen and (min-width: 600px) and (max-width: 900px){
                    .tb-vc-bg-clip-${_class}{
                        background-clip: ${_class};
                    }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "TBbgColor" && !document.querySelector('style').innerText.includes(`tb-vc-bg-${_class}`)){
                style_sheet +=`
                @media screen and (min-width: 600px) and (max-width: 900px){
                    .tb-vc-bg-${_class}{
                        background-color: ${_class};
                    }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "TBbgPosition" && !document.querySelector('style').innerText.includes(`tb-vc-bg-post-${_class}`)){
                let style_sheet =`
                @media screen and (min-width: 600px) and (max-width: 900px){
                    .tb-vc-bg-post-${_class}{
                        background-position: ${_class};
                    }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "TBbgRepeat" && !document.querySelector('style').innerText.includes(`tb-vc-bg-rpt-${_class}`)){
                let style_sheet =`
                @media screen and (min-width: 600px) and (max-width: 900px){
                    .tb-vc-bg-rpt-${_class}{
                        background-repeat: ${_class};
                    }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "TBbgSize" && !document.querySelector('style').innerText.includes(`tb-vc-bg-sz-${_class}`)){
                let style_sheet =`
                @media screen and (min-width: 600px) and (max-width: 900px){
                    .tb-vc-bg-sz-${_class}{
                        background-size: ${_class};
                    }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "TBborder" && !document.querySelector('style').innerText.includes(`tb-vc-border-${_class}`)){
                let style_sheet =`
                @media screen and (min-width: 600px) and (max-width: 900px){
                    .tb-vc-border-${_class}{
                        border: ${_class};
                    }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "TBborderTop" && !document.querySelector('style').innerText.includes(`tb-vc-border-top-${_class}`)){
                let style_sheet =`
                @media screen and (min-width: 600px) and (max-width: 900px){
                    .tb-vc-border-top-${_class}{
                        border-top: ${_class};
                    }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "TBborderLeft" && !document.querySelector('style').innerText.includes(`tb-vc-border-l-${_class}`)){
                let style_sheet =`
                @media screen and (min-width: 600px) and (max-width: 900px){
                    .tb-vc-border-l-${_class}{
                        border-left: ${_class};
                    }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "TBborderRight" && !document.querySelector('style').innerText.includes(`tb-vc-border-r-${_class}`)){
                let style_sheet =`
                @media screen and (min-width: 600px) and (max-width: 900px){
                    .tb-vc-border-r-${_class}{
                        border-right: ${_class};
                    }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "TBborderBottom" && !document.querySelector('style').innerText.includes(`tb-vc-border-b-${_class}`)){
                let style_sheet =`
                @media screen and (min-width: 600px) and (max-width: 900px){
                    .tb-vc-border-b-${_class}{
                        border-bottom: ${_class};
                    }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "TBborderRadius" && !document.querySelector('style').innerText.includes(`tb-vc-radius-${_class}`)){
                let style_sheet =`
                @media screen and (min-width: 600px) and (max-width: 900px){
                    .tb-vc-radius-${_class}{
                        border-radius: ${_class};
                    }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "TBborderStyle" && !document.querySelector('style').innerText.includes(`tb-vc-style-${_class}`)){
                let style_sheet =`
                @media screen and (min-width: 600px) and (max-width: 900px){
                    .tb-vc-style-${_class}{
                        border-style: ${_class};
                    }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "TBborderColor" && !document.querySelector('style').innerText.includes(`tb-vc-border-clr-${_class}`)){
                let style_sheet =`
                @media screen and (min-width: 600px) and (max-width: 900px){
                    .tb-vc-border-clr-${_class}{
                        border-color: ${_class};
                    }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "TBborderType" && !document.querySelector('style').innerText.includes(`tb-vc-border-type-${_class}`)){
                let style_sheet =`
                @media screen and (min-width: 600px) and (max-width: 900px){
                    .tb-vc-border-type-${_class}{
                        border-collapse: ${_class};
                    }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "TBrotate" && !document.querySelector('style').innerText.includes(`tb-vc-rotate-${_class}`)){
                let style_sheet =`
                @media screen and (min-width: 600px) and (max-width: 900px){
                    .tb-vc-rotate-${_class}{
                        transform: rotate(${_class});
                    }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "TBskew" && !document.querySelector('style').innerText.includes(`tb-vc-skew-${_class}`)){
                let style_sheet =`
                @media screen and (min-width: 600px) and (max-width: 900px){
                    .tb-vc-skew-${_class}{
                        transform: skew(${_class});
                    }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "TBscale" && !document.querySelector('style').innerText.includes(`tb-vc-scale-${_class}`)){
                let style_sheet =`
                @media screen and (min-width: 600px) and (max-width: 900px){
                    .tb-vc-scale-${_class}{
                        transform: scale(${_class});
                    }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "TBtranslate" && !document.querySelector('style').innerText.includes(`tb-vc-translate-${_class}`)){
                let style_sheet =`
                @media screen and (min-width: 600px) and (max-width: 900px){
                    .tb-vc-translate-${_class}{
                        transform: translate(${_class});
                    }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "TBtranslateX" && !document.querySelector('style').innerText.includes(`tb-vc-translateX-${_class}`)){
                let style_sheet =`
                @media screen and (min-width: 600px) and (max-width: 900px){
                    .tb-vc-translateX-${_class}{
                        transform: translateX(${_class});
                    }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "TBtranslateY" && !document.querySelector('style').innerText.includes(`tb-vc-translateY-${_class}`)){
                let style_sheet =`
                @media screen and (min-width: 600px) and (max-width: 900px){
                    .tb-vc-translateY-${_class}{
                        transform: translateY(${_class});
                    }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "TBtranslateZ" && !document.querySelector('style').innerText.includes(`tb-vc-translateZ-${_class}`)){
                let style_sheet =`
                @media screen and (min-width: 600px) and (max-width: 900px){
                    .tb-vc-translateZ-${_class}{
                        transform: translateZ(${_class});
                    }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "TBcursor" && !document.querySelector('style').innerText.includes(`tb-vc-cursor-${_class}`)){
                let style_sheet =`
                @media screen and (min-width: 600px) and (max-width: 900px){
                    .tb-vc-cursor-${_class}{
                        cursor: ${_class};
                    }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "TBtransition" && !document.querySelector('style').innerText.includes(`tb-vc-transition-${_class}`)){
                let style_sheet =`
                @media screen and (min-width: 600px) and (max-width: 900px){
                    .tb-vc-transition-${_class}{
                        transition: ${_class};
                    }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "TBoutline" && !document.querySelector('style').innerText.includes(`tb-vc-o-${_class}`)){
                let style_sheet =`
                @media screen and (min-width: 600px) and (max-width: 900px){
                    .tb-vc-o-${_class}{
                        outline: ${_class};
                    }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "TBoTop" && !document.querySelector('style').innerText.includes(`tb-vc-o-top-${_class}`)){
                let style_sheet =`
                @media screen and (min-width: 600px) and (max-width: 900px){
                    .tb-vc-o-top-${_class}{
                        outline-top: ${_class};
                    }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "TBoLeft" && !document.querySelector('style').innerText.includes(`tb-vc-o-left-${_class}`)){
                let style_sheet =`
                @media screen and (min-width: 600px) and (max-width: 900px){
                    .tb-vc-o-left-${_class}{
                        outline-left: ${_class};
                    }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "TBoRight" && !document.querySelector('style').innerText.includes(`tb-vc-o-right-${_class}`)){
                let style_sheet =`
                @media screen and (min-width: 600px) and (max-width: 900px){
                    .tb-vc-o-right-${_class}{
                        outline-right: ${_class};
                    }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "TBoBottom" && !document.querySelector('style').innerText.includes(`tb-vc-o-bottom-${_class}`)){
                let style_sheet =`
                @media screen and (min-width: 600px) and (max-width: 900px){
                    .tb-vc-o-bottom-${_class}{
                        outline-bottom: ${_class};
                    }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "TBoColor" && !document.querySelector('style').innerText.includes(`tb-vc-o-color-${_class}`)){
                let style_sheet =`
                @media screen and (min-width: 600px) and (max-width: 900px){
                    .tb-vc-o-color-${_class}{
                        outline-color: ${_class};
                    }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "TBoStyle" && !document.querySelector('style').innerText.includes(`tb-vc-o-style-${_class}`)){
                let style_sheet =`
                @media screen and (min-width: 600px) and (max-width: 900px){
                    .tb-vc-o-style-${_class}{
                        outline-style: ${_class};
                    }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "TBopacity" && !document.querySelector('style').innerText.includes(`tb-vc-opacity-${_class}`)){
                let style_sheet =`
                @media screen and (min-width: 600px) and (max-width: 900px){
                    .tb-vc-opacity-${_class}{
                        opacity: ${_class};
                    }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "TBblur" && !document.querySelector('style').innerText.includes(`tb-vc-blur-${_class}`)){
                let style_sheet =`
                @media screen and (min-width: 600px) and (max-width: 900px){
                    .tb-vc-blur-${_class}{
                        filter: blur(${_class});
                    }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "TBgrayscale" && !document.querySelector('style').innerText.includes(`tb-vc-grayscale-${_class}`)){
                let style_sheet =`
                @media screen and (min-width: 600px) and (max-width: 900px){
                    .tb-vc-grayscale-${_class}{
                        filter: grayscale(${_class});
                    }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "TBsaturate" && !document.querySelector('style').innerText.includes(`tb-vc-saturate-${_class}`)){
                let style_sheet =`
                @media screen and (min-width: 600px) and (max-width: 900px){
                    .tb-vc-saturate-${_class}{
                        filter: saturate(${_class});
                    }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "TBbrightness" && !document.querySelector('style').innerText.includes(`tb-vc-brightness-${_class}`)){
                let style_sheet =`
                @media screen and (min-width: 600px) and (max-width: 900px){
                    .tb-vc-brightness-${_class}{
                        filter: brightness(${_class});
                    }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "TBcontrast" && !document.querySelector('style').innerText.includes(`tb-vc-contrast-${_class}`)){
                let style_sheet =`
                @media screen and (min-width: 600px) and (max-width: 900px){
                    .tb-vc-contrast-${_class}{
                        filter: contrast(${_class});
                    }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "PCdisplay" && !document.querySelector('style').innerText.includes(`pc-vc-d-${_class}`)){
                let style_sheet =`
                @media screen and (min-width: 1920px){
                    .pc-vc-d-${_class}{
                        display: ${_class};
                    }
                }
                `;              
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "PCalignItems" && !document.querySelector('style').innerText.includes(`pc-vc-items-${_class}`)){
                let style_sheet =`
                @media screen and (min-width: 1920px){
                    .pc-vc-items-${_class}{
                        align-items: ${_class};
                    }
                }
                `;              
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "PCboxSizing" && !document.querySelector('style').innerText.includes(`pc-vc-box-${_class}`)){
                let style_sheet =`
                @media screen and (min-width: 1920px){
                    .pc-vc-box-${_class}{
                        box-sizing: ${_class};
                    }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "PCfloats" && !document.querySelector('style').innerText.includes(`pc-vc-float-${_class}`)){
                let style_sheet =`
                @media screen and (min-width: 1920px){
                    .pc-vc-float-${_class}{
                        float: ${_class};
                    }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "PCoverflow" && !document.querySelector('style').innerText.includes(`pc-vc-overflow-${_class}`)){
                let style_sheet =`
                @media screen and (min-width: 1920px){
                    .pc-vc-overflow-${_class}{
                        overflow: ${_class};
                    }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "PCoverflowX" && !document.querySelector('style').innerText.includes(`pc-vc-overflowX-${_class}`)){
                let style_sheet =`
                @media screen and (min-width: 1920px){
                    .pc-vc-overflowX-${_class}{
                        overflow-x: ${_class};
                    }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "PCoverflowY" && !document.querySelector('style').innerText.includes(`pc-vc-overflowY-${_class}`)){
                let style_sheet =`
                @media screen and (min-width: 1920px){
                    .pc-vc-overflowY-${_class}{
                        overflow-y: ${_class};
                    }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "PCposition" && !document.querySelector('style').innerText.includes(`pc-vc-pst-${_class}`)){
                let style_sheet =`
                @media screen and (min-width: 1920px){
                    .pc-vc-pst-${_class}{
                        position: ${_class};
                    }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "PCtop" && !document.querySelector('style').innerText.includes(`pc-vc-t-${_class}`)){
                let style_sheet =`
                @media screen and (min-width: 1920px){
                    .pc-vc-t-${_class}{
                        top: ${_class};
                    }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "PCleft" && !document.querySelector('style').innerText.includes(`pc-vc-l-${_class}`)){
                let style_sheet =`
                @media screen and (min-width: 1920px){
                    .pc-vc-l-${_class}{
                        left: ${_class};
                    }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "PCright" && !document.querySelector('style').innerText.includes(`pc-vc-r-${_class}`)){
                let style_sheet =`
                @media screen and (min-width: 1920px){
                    .pc-vc-r-${_class}{
                        right: ${_class};
                    }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "PCbottom" && !document.querySelector('style').innerText.includes(`pc-vc-b-${_class}`)){
                let style_sheet =`
                @media screen and (min-width: 1920px){
                    .pc-vc-b-${_class}{
                        bottom: ${_class};
                    }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "PCindex" && !document.querySelector('style').innerText.includes(`pc-vc-index-${_class}`)){
                let style_sheet =`
                @media screen and (min-width: 1920px){
                    .pc-vc-index-${_class}{
                        z-index: ${_class};
                    }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "PCvisibility" && !document.querySelector('style').innerText.includes(`pc-vc-visibility-${_class}`)){
                let style_sheet =`
                @media screen and (min-width: 1920px){
                    .pc-vc-visibility-${_class}{
                        visibility: ${_class};
                    }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "PCflex" && !document.querySelector('style').innerText.includes(`pc-vc-flex-${_class}`)){
                let style_sheet =`
                @media screen and (min-width: 1920px){
                    .pc-vc-flex-${_class}{
                        flex: ${_class};
                    }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "PCdirection" && !document.querySelector('style').innerText.includes(`pc-vc-direction-${_class}`)){
                let style_sheet =`
                @media screen and (min-width: 1920px){
                    .pc-vc-direction-${_class}{
                        flex-direction: ${_class};
                    }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "PCwrap" && !document.querySelector('style').innerText.includes(`pc-vc-wrap-${_class}`)){
                let style_sheet =`
                @media screen and (min-width: 1920px){
                    .pc-vc-wrap-${_class}{
                        flex-wrap: ${_class};
                    }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "PCshrink" && !document.querySelector('style').innerText.includes(`pc-vc-shrink-${_class}`)){
                let style_sheet =`
                @media screen and (min-width: 1920px){
                    .pc-vc-shrink-${_class}{
                        flex-shrink: ${_class};
                    }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "PCbasis" && !document.querySelector('style').innerText.includes(`pc-vc-basis-${_class}`)){
                let style_sheet =`
                @media screen and (min-width: 1920px){
                    .pc-vc-basis-${_class}{
                        flex-basis: ${_class};
                    }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "PCjustify" && !document.querySelector('style').innerText.includes(`pc-vc-justify-${_class}`)){
                let style_sheet =`
                @media screen and (min-width: 1920px){
                    .pc-vc-justify-${_class}{
                        justify-content: ${_class};
                    }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "PCjustItems" && !document.querySelector('style').innerText.includes(`pc-vc-just-items-${_class}`)){
                let style_sheet =`
                @media screen and (min-width: 1920px){
                    .pc-vc-just-items-${_class}{
                        justify-items: ${_class};
                    }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "PCjustSelf" && !document.querySelector('style').innerText.includes(`pc-vc-just-self-${_class}`)){
                let style_sheet =`
                @media screen and (min-width: 1920px){
                    .pc-vc-just-self-${_class}{
                        justify-self: ${_class};
                    }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "PCalignContent" && !document.querySelector('style').innerText.includes(`pc-vc-content-${_class}`)){
                let style_sheet =`
                @media screen and (min-width: 1920px){
                    .pc-vc-content-${_class}{
                        align-content: ${_class};
                    }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "PCalignItems" && !document.querySelector('style').innerText.includes(`pc-vc-items-${_class}`)){
                let style_sheet =`
                @media screen and (min-width: 1920px){
                    .pc-vc-items-${_class}{
                        align-items: ${_class};
                    }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "PCalignSelf" && !document.querySelector('style').innerText.includes(`pc-vc-self-${_class}`)){
                let style_sheet =`
                @media screen and (min-width: 1920px){
                    .pc-vc-self-${_class}{
                        align-self: ${_class};
                    }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "PCpadding" && !document.querySelector('style').innerText.includes(`pc-vc-p-${_class}`)){
                let style_sheet =`
                @media screen and (min-width: 1920px){
                    .pc-vc-p-${_class}{
                        padding: ${_class};
                    }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "PCpaddingTop" && !document.querySelector('style').innerText.includes(`pc-vc-pt-${_class}`)){
                let style_sheet =`
                @media screen and (min-width: 1920px){
                    .pc-vc-pt-${_class}{
                        padding-top: ${_class};
                    }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "PCpaddingLeft" && !document.querySelector('style').innerText.includes(`pc-vc-pl-${_class}`)){
                let style_sheet =`
                @media screen and (min-width: 1920px){
                    .pc-vc-pl-${_class}{
                        padding-left: ${_class};
                    }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "PCpaddingRight" && !document.querySelector('style').innerText.includes(`pc-vc-pr-${_class}`)){
                let style_sheet =`
                @media screen and (min-width: 1920px){
                    .pc-vc-pr-${_class}{
                        padding-right: ${_class};
                    }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "PCpaddingBottom" && !document.querySelector('style').innerText.includes(`pc-vc-pb-${_class}`)){
                let style_sheet =`
                @media screen and (min-width: 1920px){
                    .pc-vc-pb-${_class}{
                        padding-bottom: ${_class};
                    }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "PCmargin" && !document.querySelector('style').innerText.includes(`pc-vc-m-${_class}`)){
                let style_sheet =`
                @media screen and (min-width: 1920px){
                    .pc-vc-m-${_class}{
                        margin: ${_class};
                    }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "PCmarginTop" && !document.querySelector('style').innerText.includes(`pc-vc-mt-${_class}`)){
                let style_sheet =`
                @media screen and (min-width: 1920px){
                    .pc-vc-mt-${_class}{
                        margin-top: ${_class};
                    }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "PCmarginLeft" && !document.querySelector('style').innerText.includes(`pc-vc-ml-${_class}`)){
                let style_sheet =`
                @media screen and (min-width: 1920px){
                    .pc-vc-ml-${_class}{
                        margin-left: ${_class};
                    }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "PCmarginRight" && !document.querySelector('style').innerText.includes(`pc-vc-mr-${_class}`)){
                let style_sheet =`
                @media screen and (min-width: 1920px){
                    .pc-vc-mr-${_class}{
                        margin-right: ${_class};
                    }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "PCmarginBottom" && !document.querySelector('style').innerText.includes(`pc-vc-mb-${_class}`)){
                let style_sheet =`
                @media screen and (min-width: 1920px){
                    .pc-vc-mb-${_class}{
                        margin-bottom: ${_class};
                    }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "PCwidth" && !document.querySelector('style').innerText.includes(`pc-vc-w-${_class}`)){
                let style_sheet =`
                @media screen and (min-width: 1920px){
                    .pc-vc-w-${_class}{
                        width: ${_class};
                    }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "PCheight" && !document.querySelector('style').innerText.includes(`pc-vc-h-${_class}`)){
                let style_sheet =`
                @media screen and (min-width: 1920px){
                    .pc-vc-h-${_class}{
                        height: ${_class};
                    }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "PCfontSize" && !document.querySelector('style').innerText.includes(`pc-vc-font-sz-${_class}`)){
                let style_sheet =`
                @media screen and (min-width: 1920px){
                    .pc-vc-font-sz-${_class}{
                        font-size: ${_class};
                    }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "PCfontStyle" && !document.querySelector('style').innerText.includes(`pc-vc-font-style-${_class}`)){
                let style_sheet =`
                @media screen and (min-width: 1920px){
                    .pc-vc-font-style-${_class}{
                        font-style: ${_class};
                    }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "PCfontWeight" && !document.querySelector('style').innerText.includes(`pc-vc-weight-${_class}`)){
                let style_sheet =`
                @media screen and (min-width: 1920px){
                    .pc-vc-weight-${_class}{
                        font-weight: ${_class};
                    }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "PCletterSpacing" && !document.querySelector('style').innerText.includes(`pc-vc-let-spacing-${_class}`)){
                let style_sheet =`
                @media screen and (min-width: 1920px){
                    .pc-vc-let-spacing-${_class}{
                        letter-spacing: ${_class};
                    }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "PClineHeight" && !document.querySelector('style').innerText.includes(`pc-vc-leading-${_class}`)){
                let style_sheet =`
                @media screen and (min-width: 1920px){
                    .pc-vc-leading-${_class}{
                        line-height: ${_class};
                    }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "PCtextAlign" && !document.querySelector('style').innerText.includes(`pc-vc-text-${_class}`)){
                let style_sheet =`
                @media screen and (min-width: 1920px){
                    .pc-vc-text-${_class}{
                        text-align: ${_class};
                    }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "PCtextColor" && !document.querySelector('style').innerText.includes(`pc-vc-color-${_class}`)){
                let style_sheet =`
                @media screen and (min-width: 1920px){
                    .pc-vc-color-${_class}{
                        color: ${_class};
                    }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "PCdecoration" && !document.querySelector('style').innerText.includes(`pc-vc-decoration-${_class}`)){
                let style_sheet =`
                @media screen and (min-width: 1920px){
                    .pc-vc-decoration-${_class}{
                        text-decoration: ${_class};
                    }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "PCtextTransform" && !document.querySelector('style').innerText.includes(`pc-vc-text-transform-${_class}`)){
                let style_sheet =`
                @media screen and (min-width: 1920px){
                    .pc-vc-text-transform-${_class}{
                        text-transform: ${_class};
                    }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "PCwordBreak" && !document.querySelector('style').innerText.includes(`pc-vc-break-${_class}`)){
                let style_sheet =`
                @media screen and (min-width: 1920px){
                    .pc-vc-break-${_class}{
                        word-break: ${_class};
                        overflow-wrap: break-word;
                    }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "PCbgAttachment" && !document.querySelector('style').innerText.includes(`pc-vc-attachment-${_class}`)){
                let style_sheet =`
                @media screen and (min-width: 1920px){
                    .pc-vc-attachment-${_class}{
                        background-attachment: ${_class};
                    }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "PCbgClip" && !document.querySelector('style').innerText.includes(`pc-vc-bg-clip-${_class}`)){
                let style_sheet =`
                @media screen and (min-width: 1920px){
                    .pc-vc-bg-clip-${_class}{
                        background-clip: ${_class};
                    }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "PCbgColor" && !document.querySelector('style').innerText.includes(`pc-vc-bg-${_class}`)){
                style_sheet +=`
                @media screen and (min-width: 1920px){
                    .pc-vc-bg-${_class}{
                        background-color: ${_class};
                    }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "PCbgPosition" && !document.querySelector('style').innerText.includes(`pc-vc-bg-post-${_class}`)){
                let style_sheet =`
                @media screen and (min-width: 1920px){
                    .pc-vc-bg-post-${_class}{
                        background-position: ${_class};
                    }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "PCbgRepeat" && !document.querySelector('style').innerText.includes(`pc-vc-bg-rpt-${_class}`)){
                let style_sheet =`
                @media screen and (min-width: 1920px){
                    .pc-vc-bg-rpt-${_class}{
                        background-repeat: ${_class};
                    }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "PCbgSize" && !document.querySelector('style').innerText.includes(`pc-vc-bg-sz-${_class}`)){
                let style_sheet =`
                @media screen and (min-width: 1920px){
                    .pc-vc-bg-sz-${_class}{
                        background-size: ${_class};
                    }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "PCborder" && !document.querySelector('style').innerText.includes(`pc-vc-border-${_class}`)){
                let style_sheet =`
                @media screen and (min-width: 1920px){
                    .pc-vc-border-${_class}{
                        border: ${_class};
                    }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "PCborderTop" && !document.querySelector('style').innerText.includes(`pc-vc-border-top-${_class}`)){
                let style_sheet =`
                @media screen and (min-width: 1920px){
                    .pc-vc-border-top-${_class}{
                        border-top: ${_class};
                    }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "PCborderLeft" && !document.querySelector('style').innerText.includes(`pc-vc-border-l-${_class}`)){
                let style_sheet =`
                @media screen and (min-width: 1920px){
                    .pc-vc-border-l-${_class}{
                        border-left: ${_class};
                    }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "PCborderRight" && !document.querySelector('style').innerText.includes(`pc-vc-border-r-${_class}`)){
                let style_sheet =`
                @media screen and (min-width: 1920px){
                    .pc-vc-border-r-${_class}{
                        border-right: ${_class};
                    }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "PCborderBottom" && !document.querySelector('style').innerText.includes(`pc-vc-border-b-${_class}`)){
                let style_sheet =`
                @media screen and (min-width: 1920px){
                    .pc-vc-border-b-${_class}{
                        border-bottom: ${_class};
                    }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "PCborderRadius" && !document.querySelector('style').innerText.includes(`pc-vc-radius-${_class}`)){
                let style_sheet =`
                @media screen and (min-width: 1920px){
                    .pc-vc-radius-${_class}{
                        border-radius: ${_class};
                    }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "PCborderStyle" && !document.querySelector('style').innerText.includes(`pc-vc-style-${_class}`)){
                let style_sheet =`
                @media screen and (min-width: 1920px){
                    .pc-vc-style-${_class}{
                        border-style: ${_class};
                    }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "PCborderColor" && !document.querySelector('style').innerText.includes(`pc-vc-border-clr-${_class}`)){
                let style_sheet =`
                @media screen and (min-width: 1920px){
                    .pc-vc-border-clr-${_class}{
                        border-color: ${_class};
                    }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "PCborderType" && !document.querySelector('style').innerText.includes(`pc-vc-border-type-${_class}`)){
                let style_sheet =`
                @media screen and (min-width: 1920px){
                    .pc-vc-border-type-${_class}{
                        border-collapse: ${_class};
                    }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "PCrotate" && !document.querySelector('style').innerText.includes(`pc-vc-rotate-${_class}`)){
                let style_sheet =`
                @media screen and (min-width: 1920px){
                    .pc-vc-rotate-${_class}{
                        transform: rotate(${_class});
                    }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "PCskew" && !document.querySelector('style').innerText.includes(`pc-vc-skew-${_class}`)){
                let style_sheet =`
                @media screen and (min-width: 1920px){
                    .pc-vc-skew-${_class}{
                        transform: skew(${_class});
                    }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "PCscale" && !document.querySelector('style').innerText.includes(`pc-vc-scale-${_class}`)){
                let style_sheet =`
                @media screen and (min-width: 1920px){
                    .pc-vc-scale-${_class}{
                        transform: scale(${_class});
                    }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "PCtranslate" && !document.querySelector('style').innerText.includes(`pc-vc-translate-${_class}`)){
                let style_sheet =`
                @media screen and (min-width: 1920px){
                    .pc-vc-translate-${_class}{
                        transform: translate(${_class});
                    }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "PCtranslateX" && !document.querySelector('style').innerText.includes(`pc-vc-translateX-${_class}`)){
                let style_sheet =`
                @media screen and (min-width: 1920px){
                    .pc-vc-translateX-${_class}{
                        transform: translateX(${_class});
                    }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "PCtranslateY" && !document.querySelector('style').innerText.includes(`pc-vc-translateY-${_class}`)){
                let style_sheet =`
                @media screen and (min-width: 1920px){
                    .pc-vc-translateY-${_class}{
                        transform: translateY(${_class});
                    }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "PCtranslateZ" && !document.querySelector('style').innerText.includes(`pc-vc-translateZ-${_class}`)){
                let style_sheet =`
                @media screen and (min-width: 1920px){
                    .pc-vc-translateZ-${_class}{
                        transform: translateZ(${_class});
                    }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "PCcursor" && !document.querySelector('style').innerText.includes(`pc-vc-cursor-${_class}`)){
                let style_sheet =`
                @media screen and (min-width: 1920px){
                    .pc-vc-cursor-${_class}{
                        cursor: ${_class};
                    }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "PCtransition" && !document.querySelector('style').innerText.includes(`pc-vc-transition-${_class}`)){
                let style_sheet =`
                @media screen and (min-width: 1920px){
                    .pc-vc-transition-${_class}{
                        transition: ${_class};
                    }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
                
            }
            if(className === "PCoutline" && !document.querySelector('style').innerText.includes(`pc-vc-o-${_class}`)){
                let style_sheet =`
                @media screen and (min-width: 1920px){
                    .pc-vc-o-${_class}{
                        outline: ${_class};
                    }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "PCoTop" && !document.querySelector('style').innerText.includes(`pc-vc-o-top-${_class}`)){
                let style_sheet =`
                @media screen and (min-width: 1920px){
                    .pc-vc-o-top-${_class}{
                        outline-top: ${_class};
                    }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "PCoLeft" && !document.querySelector('style').innerText.includes(`pc-vc-o-left-${_class}`)){
                let style_sheet =`
                @media screen and (min-width: 1920px){
                    .pc-vc-o-left-${_class}{
                        outline-left: ${_class};
                    }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "PCoRight" && !document.querySelector('style').innerText.includes(`pc-vc-o-right-${_class}`)){
                let style_sheet =`
                @media screen and (min-width: 1920px){
                    .pc-vc-o-right-${_class}{
                        outline-right: ${_class};
                    }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "PCoBottom" && !document.querySelector('style').innerText.includes(`pc-vc-o-bottom-${_class}`)){
                let style_sheet =`
                @media screen and (min-width: 1920px){
                    .pc-vc-o-bottom-${_class}{
                        outline-bottom: ${_class};
                    }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "PCoColor" && !document.querySelector('style').innerText.includes(`pc-vc-o-color-${_class}`)){
                let style_sheet =`
                @media screen and (min-width: 1920px){
                    .pc-vc-o-color-${_class}{
                        outline-color: ${_class};
                    }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "PCoStyle" && !document.querySelector('style').innerText.includes(`pc-vc-o-style-${_class}`)){
                let style_sheet =`
                @media screen and (min-width: 1920px){
                    .pc-vc-o-style-${_class}{
                        outline-style: ${_class};
                    }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "PCopacity" && !document.querySelector('style').innerText.includes(`pc-vc-opacity-${_class}`)){
                let style_sheet =`
                @media screen and (min-width: 1920px){
                    .pc-vc-opacity-${_class}{
                        opacity: ${_class};
                    }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "PCblur" && !document.querySelector('style').innerText.includes(`pc-vc-blur-${_class}`)){
                let style_sheet =`
                @media screen and (min-width: 1920px){
                    .pc-vc-blur-${_class}{
                        filter: blur(${_class});
                    }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "PCgrayscale" && !document.querySelector('style').innerText.includes(`pc-vc-grayscale-${_class}`)){
                let style_sheet =`
                @media screen and (min-width: 1920px){
                    .pc-vc-grayscale-${_class}{
                        filter: grayscale(${_class});
                    }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "PCsaturate" && !document.querySelector('style').innerText.includes(`pc-vc-saturate-${_class}`)){
                let style_sheet =`
                @media screen and (min-width: 1920px){
                    .pc-vc-saturate-${_class}{
                        filter: saturate(${_class});
                    }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "PCbrightness" && !document.querySelector('style').innerText.includes(`pc-vc-brightness-${_class}`)){
                let style_sheet =`
                @media screen and (min-width: 1920px){
                    .pc-vc-brightness-${_class}{
                        filter: brightness(${_class});
                    }
                }
                `;  
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style_sheet));
            }
            if(className === "PCcontrast" && !document.querySelector('style').innerText.includes(`pc-vc-contrast-${_class}`)){
                let style_sheet =`
                @media screen and (min-width: 1920px){
                    .pc-vc-contrast-${_class}{
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
            style_sheet = style_sheet.replaceAll(x.nativeCode,`${Object.keys(x.value).join("")}${x.property}`);
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

  }


}

onload= updateStyle;

function createGroupClass(name,array){

  uniteValclass[name] = array;
  
}

function createComponentClass(card){
  
  for(let x in card){
    createGroupClass(x,card[x]);
    }
}

function createGroupUtilitiesName(name,array){

  makerUtilitiesName[name] = array;
  
}

function createMakerUtilitiesName(card){
  
  for(let x in card){
    createGroupUtilitiesName(x,card[x]);
    }

    for (var i = 0; i <= makerUtilitiesName.createUtilities.length; i++) {
        if (document.querySelector(`.${makerUtilitiesName.createUtilities[i]}`) && !document.querySelector('style').innerText.includes(makerUtilitiesName.createUtilities[i])) {
            let breakpoints = '';
            if(makerUtilitiesName.createBreakPointsUtilities[i] === 'mb'){
                breakpoints = '@media screen and (min-width: 320px) and (max-width: 600px) {'
            }else if(makerUtilitiesName.createBreakPointsUtilities[i] === 'tb') {
                breakpoints = '@media screen and (min-width: 601px) and (max-width: 900px) {'
            }else if(makerUtilitiesName.createBreakPointsUtilities[i] === 'df') {
                breakpoints = '@media screen and (min-width: 901px) and (max-width: 2400px) {'
            }else if(makerUtilitiesName.createBreakPointsUtilities[i] === 'pc') {
                breakpoints = '@media screen and (min-width: 1921px) {'
            }

            let styles = `
                .${makerUtilitiesName.createUtilities[i]} { 
                    ${makerUtilitiesName.createValueUtilities[i]}
                }
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


let propertiesDisplay = [
    'v-content-center',
    'v-content-flex-end',
    'v-content-flex-start',
    'v-content-evenly',
    'v-content-between',
    'v-content-around',
    'v-items-center',
    'v-items-flex-end',
    'v-items-flex-start',
    'v-items-stretch',
    'v-items-baseline',
    'v-self-center',
    'v-self-flex-end',
    'v-self-flex-start',
    'v-self-stretch',
    'v-self-baseline',
    'v-self-auto',
    'v-attachment-fixed',
    'v-attachment-local',
    'v-attachment-scroll',
    'v-bg-blend-color',
    'v-bg-blend-multiply',
    'v-bg-blend-screen',
    'v-bg-blend-normal',
    'v-bg-blend-darken',
    'v-bg-blend-lighten',
    'v-bg-clip-border',
    'v-bg-clip-padding',
    'v-bg-clip-content',
    'v-bg-clip-text',
    'v-bg-dark',
    'v-bg-light',
    'v-bg-danger',
    'v-bg-info',
    'v-bg-primary',
    'v-bg-smooth',
    'v-bg-transparent',
    'v-bg-secondary',
    'v-bg-warning',
    'v-bg-green',
    'v-bg-white',
    'v-bg-content-box',
    'v-bg-border-box',
    'v-bg-padding-box',
    'v-bg-post-center',
    'v-bg-post-top',
    'v-bg-post-left',
    'v-bg-post-right',
    'v-bg-post-bottom',
    'v-bg-post--1',
    'v-bg-post--2',
    'v-bg-post--3',
    'v-bg-post--4',
    'v-bg-post--full',
    'v-bg-post-0',
    'v-bg-post-1',
    'v-bg-post-2',
    'v-bg-post-3',
    'v-bg-post-4',
    'v-bg-post-full',
    'v-bg-rpt-repeat',
    'v-bg-rpt-norepeat',
    'v-bg-sz-auto',
    'v-bg-sz-contain',
    'v-bg-sz-cover',
    'v-bg-sz--1',
    'v-bg-sz--2',
    'v-bg-sz--3',
    'v-bg-sz--4',
    'v-bg-sz--full',
    'v-bg-sz-0',
    'v-bg-sz-1',
    'v-bg-sz-2',
    'v-bg-sz-3',
    'v-bg-sz-4',
    'v-bg-sz-full',
    'v-style-dotted',
    'v-style-dashed',
    'v-style-double',
    'v-style-groove',
    'v-style-solid',
    'v-style-ridge',
    'v-style-hidden',
    'v-radius-sm',
    'v-radius-md',
    'v-radius-lg',
    'v-radius-xl',
    'v-radius-full',
    'v-border-1',
    'v-border-2',
    'v-border-3',
    'v-border-4',
    'v-border-t-1',
    'v-border-t-2',
    'v-border-t-3',
    'v-border-t-4',
    'v-border-l-1',
    'v-border-l-2',
    'v-border-l-3',
    'v-border-l-4',
    'v-border-r-1',
    'v-border-r-2',
    'v-border-r-3',
    'v-border-r-4',
    'v-border-b-1',
    'v-border-b-2',
    'v-border-b-3',
    'v-border-b-4',
    'v-border-clr-dark',
    'v-border-clr-light',
    'v-border-clr-danger',
    'v-border-clr-info',
    'v-border-clr-primary',
    'v-border-clr-smooth',
    'v-border-clr-transparent',
    'v-border-clr-secondary',
    'v-border-clr-warning',
    'v-border-clr-green',
    'v-border-type-collapse',
    'v-border-type-separate',
    'v-box-shadow-sm',
    'v-box-shadow-md',
    'v-box-shadow-lg',
    'v-box-shadow-xl',
    'v-box-border',
    'v-box-content',
    'v-col-1',
    'v-col-2',
    'v-col-3',
    'v-col-4',
    'v-cursor-pointer',
    'v-cursor-col-resize',
    'v-cursor-context-menu ',
    'v-cursor-all-scroll',
    'v-cursor-cell',
    'v-cursor-alias',
    'v-cursor-default',
    'v-cursor-none',
    'v-cursor-progress',
    'v-decoration-none',
    'v-decoration-dashed',
    'v-decoration-double',
    'v-decoration-through',
    'v-decoration-overline',
    'v-decoration-solid',
    'v-decoration-underline',
    'v-cells-show',
    'v-cells-hidden',
    'v-blur-0',
    'v-blur-1',
    'v-blur-2',
    'v-blur-3',
    'v-blur-4',
    'v-blur-full',
    'v-gryscale-0',
    'v-gryscale-1',
    'v-gryscale-2',
    'v-gryscale-3',
    'v-gryscale-4',
    'v-gryscale-full',
    'v-saturate-0',
    'v-saturate-1',
    'v-saturate-2',
    'v-saturate-3',
    'v-saturate-4',
    'v-saturate-full',
    'v-brightness-0',
    'v-brightness-1',
    'v-brightness-2',
    'v-brightness-3',
    'v-brightness-4',
    'v-brightness-full',
    'v-contrast-0',
    'v-contrast-1',
    'v-contrast-2',
    'v-contrast-3',
    'v-contrast-4',
    'v-contrast-full',
    'v-flex--1',
    'v-flex--2',
    'v-flex--3',
    'v-flex--4',
    'v-flex-0',
    'v-flex-1',
    'v-flex-2',
    'v-flex-3',
    'v-flex-4',
    'v-flex-auto',
    'v-flex-content',
    'v-flex-none',
    'v-flex-basis-auto',
    'v-flex-basis-content',
    'v-wrap-wrap',
    'v-wrap-nowrap',
    'v-wrap-wrap-reverse',
    'v-direction-column',
    'v-direction-column-reverse',
    'v-direction-row',
    'v-direction-row-reverse',
    'v-shrink-1',
    'v-shrink-2',
    'v-shrink-3',
    'v-shrink-4',
    'v-float-left',
    'v-float-right',
    'v-float-none',
    'v-float-inline-end',
    'v-float-inline-start',
    'v-weight-normal',
    'v-weight-bold',
    'v-weight-100',
    'v-weight-200',
    'v-weight-300',
    'v-weight-400',
    'v-weight-500',
    'v-weight-600',
    'v-weight-700',
    'v-weight-800',
    'v-font-style-italic',
    'v-font-style-normal',
    'v-font-style-oblique',
    'v-font-sz-sm',
    'v-font-sz-md',
    'v-font-sz-lg',
    'v-font-sz-xl',
    'v-font-sz-10px',
    'v-font-sz-12px',
    'v-font-sz-14px',
    'v-font-sz-16px',
    'v-font-sz-18px',
    'v-font-sz-20px',
    'v-font-sz-22px',
    'v-font-sz-24px',
    'v-font-sz-26px',
    'v-font-sz-28px',
    'v-font-sz-30px',
    'v-font-sz-32px',
    'v-font-sz-34px',
    'v-font-sz-36px',
    'v-font-sz-38px',
    'v-font-sz-40px',
    'v-font-sz-42px',
    'v-font-sz-44px',
    'v-font-sz-46px',
    'v-font-sz-48px',
    'v-font-sz-50px',
    'v-font-sz-52px',
    'v-font-sz-54px',
    'v-font-sz-56px',
    'v-font-sz-58px',
    'v-font-sz-60px',
    'v-font-sz-62px',
    'v-font-sz-64px',
    'v-font-sz-66px',
    'v-font-sz-68px',
    'v-font-sz-70px',
    'v-row-1',
    'v-row-2',
    'v-row-3',
    'v-row-4',
    'v-grid-gap-1',
    'v-grid-gap-2',
    'v-grid-gap-3',
    'v-grid-gap-4',
    'v-col',
    'v-justify-center',
    'v-justify-left',
    'v-justify-right',
    'v-justify-safe',
    'v-justify-unsafe',
    'v-justify-start',
    'v-justify-end',
    'v-justify-flex-start',
    'v-justify-flex-end',
    'v-justify-between',
    'v-justify-around',
    'v-justify-evenly',
    'v-justify-stretch',
    'v-justify-last-baseline',
    'v-just-items-auto',
    'v-just-items-start',
    'v-just-items-end',
    'v-just-items-center',
    'v-just-items-flex-end',
    'v-just-items-flex-start',
    'v-just-self-auto',
    'v-just-self-start',
    'v-just-self-end',
    'v-just-self-center',
    'v-just-self-stretch',
    'v-let-spacing-normal',
    'v-let-spacing-1',
    'v-let-spacing-2',
    'v-let-spacing-3',
    'v-let-spacing-4',
    'v-leading-1',
    'v-leading-2',
    'v-leading-3',
    'v-leading-4',
    'v-leading-none',
    'v-leading-tight',
    'v-leading-snug',
    'v-leading-normal',
    'v-leading-relaxed',
    'v-leading-loose',
    'v-list-none',
    'v-list-square',
    'v-list-circle',
    'v-list-desc',
    'v-list-decimal',
    'v-list-armenian',
    'v-list-georgian',
    'v-m-auto',
    'v-m-0px',
    'v-m-5px',
    'v-m-10px',
    'v-m-15px',
    'v-m-20px',
    'v-m-25px',
    'v-m-30px',
    'v-m-35px',
    'v-m-40px',
    'v-m-45px',
    'v-m-50px',
    'v-m-55px',
    'v-m-60px',
    'v-m-65px',
    'v-m-70px',
    'v-m-75px',
    'v-m-80px',
    'v-m-85px',
    'v-m-90px',
    'v-m-95px',
    'v-m-100px',
    'v-m-200px',
    'v-m-300px',
    'v-m-400px',
    'v-m-500px',
    'v-m-600px',
    'v-m-700px',
    'v-m-800px',
    'v-mt-auto',
    'v-mt-0px',
    'v-mt-5px',
    'v-mt-10px',
    'v-mt-15px',
    'v-mt-20px',
    'v-mt-25px',
    'v-mt-30px',
    'v-mt-35px',
    'v-mt-40px',
    'v-mt-45px',
    'v-mt-50px',
    'v-mt-55px',
    'v-mt-60px',
    'v-mt-65px',
    'v-mt-70px',
    'v-mt-75px',
    'v-mt-80px',
    'v-mt-85px',
    'v-mt-90px',
    'v-mt-95px',
    'v-mt-100px',
    'v-mt-200px',
    'v-mt-300px',
    'v-mt-400px',
    'v-mt-500px',
    'v-mt-600px',
    'v-mt-700px',
    'v-mt-800px',
    'v-ml-auto',
    'v-ml-0px',
    'v-ml-5px',
    'v-ml-10px',
    'v-ml-15px',
    'v-ml-20px',
    'v-ml-25px',
    'v-ml-30px',
    'v-ml-35px',
    'v-ml-40px',
    'v-ml-45px',
    'v-ml-50px',
    'v-ml-55px',
    'v-ml-60px',
    'v-ml-65px',
    'v-ml-70px',
    'v-ml-75px',
    'v-ml-80px',
    'v-ml-85px',
    'v-ml-90px',
    'v-ml-95px',
    'v-ml-100px',
    'v-ml-200px',
    'v-ml-300px',
    'v-ml-400px',
    'v-ml-500px',
    'v-ml-600px',
    'v-ml-700px',
    'v-ml-800px',
    'v-mr-auto',
    'v-mr-0px',
    'v-mr-5px',
    'v-mr-10px',
    'v-mr-15px',
    'v-mr-20px',
    'v-mr-25px',
    'v-mr-30px',
    'v-mr-35px',
    'v-mr-40px',
    'v-mr-45px',
    'v-mr-50px',
    'v-mr-55px',
    'v-mr-60px',
    'v-mr-65px',
    'v-mr-70px',
    'v-mr-75px',
    'v-mr-80px',
    'v-mr-85px',
    'v-mr-90px',
    'v-mr-95px',
    'v-mr-100px',
    'v-mr-200px',
    'v-mr-300px',
    'v-mr-400px',
    'v-mr-500px',
    'v-mr-600px',
    'v-mr-700px',
    'v-mr-800px',
    'v-mb-auto',
    'v-mb-0px',
    'v-mb-5px',
    'v-mb-10px',
    'v-mb-15px',
    'v-mb-20px',
    'v-mb-25px',
    'v-mb-30px',
    'v-mb-35px',
    'v-mb-40px',
    'v-mb-45px',
    'v-mb-50px',
    'v-mb-55px',
    'v-mb-60px',
    'v-mb-65px',
    'v-mb-70px',
    'v-mb-75px',
    'v-mb-80px',
    'v-mb-85px',
    'v-mb-90px',
    'v-mb-95px',
    'v-mb-100px',
    'v-mb-200px',
    'v-mb-300px',
    'v-mb-400px',
    'v-mb-500px',
    'v-mb-600px',
    'v-mb-700px',
    'v-mb-800px',
    'v-opacity-0',
    'v-opacity-1',
    'v-opacity-2',
    'v-opacity-3',
    'v-opacity-4',
    'v-o-style-dotted',
    'v-o-style-dashed',
    'v-o-style-double',
    'v-o-style-groove',
    'v-o-style-solid',
    'v-o-style-ridge',
    'v-o-style-hidden',
    'v-o-1',
    'v-o-2',
    'v-o-3',
    'v-o-4',
    'v-o-top-1',
    'v-o-top-2',
    'v-o-top-3',
    'v-o-top-4',
    'v-o-left-1',
    'v-o-left-2',
    'v-o-left-3',
    'v-o-left-4',
    'v-o-right-1',
    'v-o-right-2',
    'v-o-right-3',
    'v-o-right-4',
    'v-o-bottom-1',
    'v-o-bottom-2',
    'v-o-bottom-3',
    'v-o-bottom-4',
    'v-o-color-dark',
    'v-o-color-light',
    'v-o-color-danger',
    'v-o-color-info',
    'v-o-color-primary',
    'v-o-color-smooth',
    'v-o-color-transparent',
    'v-o-color-secondary',
    'v-o-color-warning',
    'v-o-color-green',
    'v-overflow-hidden',
    'v-overflow-scroll',
    'v-overflow-auto',
    'v-overflow-visible',
    'v-overflowX-hidden',
    'v-overflowX-scroll',
    'v-overflowX-auto',
    'v-overflowX-visible',
    'v-overflowY-hidden',
    'v-overflowY-scroll',
    'v-overflowY-auto',
    'v-overflowY-visible',
    'v-overflow-break-word',
    'v-overflow-normal',
    'v-overflow-moz-unscrollable',
    'v-p-auto',
    'v-p-0px',
    'v-p-5px',
    'v-p-10px',
    'v-p-15px',
    'v-p-20px',
    'v-p-25px',
    'v-p-30px',
    'v-p-35px',
    'v-p-40px',
    'v-p-45px',
    'v-p-50px',
    'v-p-55px',
    'v-p-60px',
    'v-p-65px',
    'v-p-70px',
    'v-p-75px',
    'v-p-80px',
    'v-p-85px',
    'v-p-90px',
    'v-p-95px',
    'v-p-100px',
    'v-p-200px',
    'v-p-300px',
    'v-p-400px',
    'v-p-500px',
    'v-p-600px',
    'v-p-700px',
    'v-p-800px',
    'v-pt-auto',
    'v-pt-0px',
    'v-pt-5px',
    'v-pt-10px',
    'v-pt-15px',
    'v-pt-20px',
    'v-pt-25px',
    'v-pt-30px',
    'v-pt-35px',
    'v-pt-40px',
    'v-pt-45px',
    'v-pt-50px',
    'v-pt-55px',
    'v-pt-60px',
    'v-pt-65px',
    'v-pt-70px',
    'v-pt-75px',
    'v-pt-80px',
    'v-pt-85px',
    'v-pt-90px',
    'v-pt-95px',
    'v-pt-100px',
    'v-pt-200px',
    'v-pt-300px',
    'v-pt-400px',
    'v-pt-500px',
    'v-pt-600px',
    'v-pt-700px',
    'v-pt-800px',
    'v-pl-auto',
    'v-pl-0px',
    'v-pl-5px',
    'v-pl-10px',
    'v-pl-15px',
    'v-pl-20px',
    'v-pl-25px',
    'v-pl-30px',
    'v-pl-35px',
    'v-pl-40px',
    'v-pl-45px',
    'v-pl-50px',
    'v-pl-55px',
    'v-pl-60px',
    'v-pl-65px',
    'v-pl-70px',
    'v-pl-75px',
    'v-pl-80px',
    'v-pl-85px',
    'v-pl-90px',
    'v-pl-95px',
    'v-pl-100px',
    'v-pl-200px',
    'v-pl-300px',
    'v-pl-400px',
    'v-pl-500px',
    'v-pl-600px',
    'v-pl-700px',
    'v-pl-800px',
    'v-pr-auto',
    'v-pr-0px',
    'v-pr-5px',
    'v-pr-10px',
    'v-pr-15px',
    'v-pr-20px',
    'v-pr-25px',
    'v-pr-30px',
    'v-pr-35px',
    'v-pr-40px',
    'v-pr-45px',
    'v-pr-50px',
    'v-pr-55px',
    'v-pr-60px',
    'v-pr-65px',
    'v-pr-70px',
    'v-pr-75px',
    'v-pr-80px',
    'v-pr-85px',
    'v-pr-90px',
    'v-pr-95px',
    'v-pr-100px',
    'v-pr-200px',
    'v-pr-300px',
    'v-pr-400px',
    'v-pr-500px',
    'v-pr-600px',
    'v-pr-700px',
    'v-pr-800px',
    'v-pb-auto',
    'v-pb-0px',
    'v-pb-5px',
    'v-pb-10px',
    'v-pb-15px',
    'v-pb-20px',
    'v-pb-25px',
    'v-pb-30px',
    'v-pb-35px',
    'v-pb-40px',
    'v-pb-45px',
    'v-pb-50px',
    'v-pb-55px',
    'v-pb-60px',
    'v-pb-65px',
    'v-pb-70px',
    'v-pb-75px',
    'v-pb-80px',
    'v-pb-85px',
    'v-pb-90px',
    'v-pb-95px',
    'v-pb-100px',
    'v-pb-200px',
    'v-pb-300px',
    'v-pb-400px',
    'v-pb-500px',
    'v-pb-600px',
    'v-pb-700px',
    'v-pb-800px',
    'v-perspective--1',
    'v-perspective--2',
    'v-perspective--3',
    'v-perspective--4',
    'v-perspective-none',
    'v-perspective-1',
    'v-perspective-2',
    'v-perspective-3',
    'v-perspective-4',
    'v-perspective-top',
    'v-perspective-bottom',
    'v-perspective-left',
    'v-perspective-right',
    'v-perspective-center',
    'v-pst-relative',
    'v-pst-absolute',
    'v-pst-fixed',
    'v-pst-sticky',
    'v-pst-static',
    'v-text-center',
    'v-text-left',
    'v-text-right',
    'v-text-justify',
    'v-color-dark',
    'v-color-light',
    'v-color-danger',
    'v-color-info',
    'v-color-primary',
    'v-color-smooth',
    'v-color-transparent',
    'v-color-secondary',
    'v-color-warning',
    'v-color-green',
    'v-color-white',
    'v-text-shadow-sm',
    'v-text-shadow-md',
    'v-text-shadow-lg',
    'v-text-shadow-xl',
    'v-text-transform-upper',
    'v-text-transform-lower',
    'v-text-transform-capital',
    'v-text-transform-none',
    'v-t-auto',
    'v-t-0px',
    'v-t-5px',
    'v-t-10px',
    'v-t-15px',
    'v-t-20px',
    'v-t-25px',
    'v-t-30px',
    'v-t-35px',
    'v-t-40px',
    'v-t-45px',
    'v-t-50px',
    'v-t-55px',
    'v-t-60px',
    'v-t-65px',
    'v-t-70px',
    'v-t-75px',
    'v-t-80px',
    'v-t-85px',
    'v-t-90px',
    'v-t-95px',
    'v-t-100px',
    'v-t-200px',
    'v-t-300px',
    'v-t-400px',
    'v-t-500px',
    'v-t-600px',
    'v-t-700px',
    'v-t-800px',
    'v-l-auto',
    'v-l-0px',
    'v-l-5px',
    'v-l-10px',
    'v-l-15px',
    'v-l-20px',
    'v-l-25px',
    'v-l-30px',
    'v-l-35px',
    'v-l-40px',
    'v-l-45px',
    'v-l-50px',
    'v-l-55px',
    'v-l-60px',
    'v-l-65px',
    'v-l-70px',
    'v-l-75px',
    'v-l-80px',
    'v-l-85px',
    'v-l-90px',
    'v-l-95px',
    'v-l-100px',
    'v-l-200px',
    'v-l-300px',
    'v-l-400px',
    'v-l-500px',
    'v-l-600px',
    'v-l-700px',
    'v-l-800px',
    'v-r-auto',
    'v-r-0px',
    'v-r-5px',
    'v-r-10px',
    'v-r-15px',
    'v-r-20px',
    'v-r-25px',
    'v-r-30px',
    'v-r-35px',
    'v-r-40px',
    'v-r-45px',
    'v-r-50px',
    'v-r-55px',
    'v-r-60px',
    'v-r-65px',
    'v-r-70px',
    'v-r-75px',
    'v-r-80px',
    'v-r-85px',
    'v-r-90px',
    'v-r-95px',
    'v-r-100px',
    'v-r-200px',
    'v-r-300px',
    'v-r-400px',
    'v-r-500px',
    'v-r-600px',
    'v-r-700px',
    'v-r-800px',
    'v-b-auto',
    'v-b-0px',
    'v-b-5px',
    'v-b-10px',
    'v-b-15px',
    'v-b-20px',
    'v-b-25px',
    'v-b-30px',
    'v-b-35px',
    'v-b-40px',
    'v-b-45px',
    'v-b-50px',
    'v-b-55px',
    'v-b-60px',
    'v-b-65px',
    'v-b-70px',
    'v-b-75px',
    'v-b-80px',
    'v-b-85px',
    'v-b-90px',
    'v-b-95px',
    'v-b-100px',
    'v-b-200px',
    'v-b-300px',
    'v-b-400px',
    'v-b-500px',
    'v-b-600px',
    'v-b-700px',
    'v-b-800px',
    'v-rotate-0',
    'v-rotate-30',
    'v-rotate-45',
    'v-rotate-90',
    'v-rotate-120',
    'v-rotate-180',
    'v-rotate-360',
    'v-scale--1',
    'v-scale--2',
    'v-scale--3',
    'v-scale--4',
    'v-scale--5',
    'v-scale--6',
    'v-scale--7',
    'v-scale--8',
    'v-scale--9',
    'v-scale-1',
    'v-scale-2',
    'v-scale-3',
    'v-scale-4',
    'v-skew-1',
    'v-skew-2',
    'v-skew-3',
    'v-skew-4',
    '-v-skew-1',
    '-v-skew-2',
    '-v-skew-3',
    '-v-skew-4',
    'v-translate-1',
    'v-translate-2',
    'v-translate-3',
    'v-translate-4',
    'v-translate-middle',
    '-v-translate-1',
    '-v-translate-2',
    '-v-translate-3',
    '-v-translate-4',
    '-v-translate-middle',
    'v-translateX-1',
    'v-translateX-2',
    'v-translateX-3',
    'v-translateX-4',
    'v-translateX-middle',
    '-v-translateX-1',
    '-v-translateX-2',
    '-v-translateX-3',
    '-v-translateX-4',
    '-v-translateX-middle',
    'v-translateY-1',
    'v-translateY-2',
    'v-translateY-3',
    'v-translateY-4',
    'v-translateY-middle',
    '-v-translateY-1',
    '-v-translateY-2',
    '-v-translateY-3',
    '-v-translateY-4',
    '-v-translateY-middle',
    'v-translateZ-1',
    'v-translateZ-2',
    'v-translateZ-3',
    'v-translateZ-4',
    'v-translateZ-middle',
    '-v-translateZ-1',
    '-v-translateZ-2',
    '-v-translateZ-3',
    '-v-translateZ-4',
    '-v-translateZ-middle',
    'v-transition--1',
    'v-transition--2',
    'v-transition--3',
    'v-transition--4',
    'v-transition--5',
    'v-transition--6',
    'v-transition--7',
    'v-transition--8',
    'v-transition--9',
    'v-transition-1',
    'v-transition-2',
    'v-transition-3',
    'v-transition-4',
    'v-visibility-collapse',
    'v-visibility-hidden',
    'v-visibility-visible',
    'v-space-wrap',
    'v-space-nowrap',
    'v-space-pre',
    'v-space-pre-line',
    'v-space-pre-wrap',
    'v-w-5',
    'v-w-10',
    'v-w-15',
    'v-w-20',
    'v-w-25',
    'v-w-30',
    'v-w-33',
    'v-w-35',
    'v-w-40',
    'v-w-45',
    'v-w-50',
    'v-w-55',
    'v-w-60',
    'v-w-65',
    'v-w-70',
    'v-w-75',
    'v-w-80',
    'v-w-85',
    'v-w-90',
    'v-w-95',
    'v-w-full',
    'v-w-screen',
    'v-w-min',
    'v-w-max',
    'v-w-half',
    'v-w-5px',
    'v-w-10px',
    'v-w-15px',
    'v-w-20px',
    'v-w-25px',
    'v-w-30px',
    'v-w-35px',
    'v-w-40px',
    'v-w-45px',
    'v-w-50px',
    'v-w-55px',
    'v-w-60px',
    'v-w-65px',
    'v-w-70px',
    'v-w-75px',
    'v-w-80px',
    'v-w-85px',
    'v-w-90px',
    'v-w-95px',
    'v-w-100px',
    'v-w-200px',
    'v-w-300px',
    'v-w-400px',
    'v-w-500px',
    'v-w-600px',
    'v-w-700px',
    'v-w-800px',  
    'v-h-5',
    'v-h-10',
    'v-h-15',
    'v-h-20',
    'v-h-25',
    'v-h-30',
    'v-h-35',
    'v-h-40',
    'v-h-45',
    'v-h-50',
    'v-h-55',
    'v-h-60',
    'v-h-65',
    'v-h-70',
    'v-h-75',
    'v-h-80',
    'v-h-85',
    'v-h-90',
    'v-h-95',
    'v-h-full',
    'v-h-screen',
    'v-h-min',
    'v-h-max',
    'v-h-half',
    'v-h-5px',
    'v-h-10px',
    'v-h-15px',
    'v-h-20px',
    'v-h-25px',
    'v-h-30px',
    'v-h-35px',
    'v-h-40px',
    'v-h-45px',
    'v-h-50px',
    'v-h-55px',
    'v-h-60px',
    'v-h-65px',
    'v-h-70px',
    'v-h-75px',
    'v-h-80px',
    'v-h-85px',
    'v-h-90px',
    'v-h-95px',
    'v-h-100px',
    'v-h-200px',
    'v-h-300px',
    'v-h-400px',
    'v-h-500px',
    'v-h-600px',
    'v-h-700px',
    'v-h-800px',
    'v-word-spacing-normal',
    'v-word-spacing-1',
    'v-word-spacing-2',
    'v-word-spacing-3',
    'v-word-spacing-4',
    'v-word-wrap-normal',
    'v-word-wrap-break-word',
    'v-index--1',
    'v-index--2',
    'v-index--3',
    'v-index--4',
    'v-index-0',
    'v-index-1',
    'v-index-2',
    'v-index-3',
    'v-index-4',
    'v-d-flex',
    'v-d-block',
    'v-d-flexbox',
    'v-d-inline',
    'v-d-table',
    'v-d-inline-flex',
    'v-d-inline-block',
    'v-d-inline-flexbox',
    'v-d-inline-table',
    'v-d-grid',
    'v-d-table-row',
    'v-d-table-cell',
    'v-d-table-column',
    'v-d-none',
]
let valuesDisplay = [
    'align-content: center;',
    'align-content: flex-end;',
    'align-content: flex-start;',
    'align-content: space-evenly;',
    'align-content: space-between;',
    'align-content: space-around;',
    'align-items: center;',
    'align-items: flex-end;',
    'align-items: flex-start;',
    'align-items: stretch;',
    'align-items: baseline;',
    'align-self: center;',
    'align-self: flex-end;',
    'align-self: flex-start;',
    'align-self: stretch;',
    'align-self: baseline;',
    'align-self: auto;',
    'background-attachment: fixed',
    'background-attachment: local',
    'background-attachment: scroll',
    'background-blend-mode: color',
    'background-blend-mode: multiply',
    'background-blend-mode: screen',
    'background-blend-mode: normal',
    'background-blend-mode: darken',
    'background-blend-mode: lighten',
    'background-clip: border-box',
    'background-clip: padding-box',
    'background-clip: content-box',
    'background-clip: text',
    'background-color: rgb(70, 70, 70);',
    'background-color: rgb(238, 238, 238);',
    'background-color: rgb(255, 76, 44);',
    'background-color: rgb(2, 168, 245);',
    'background-color: rgb(42, 131, 248);',
    'background-color: rgb(255, 242, 242);',
    'background-color: transparent;',
    'background-color: rgb(141, 141, 141);',
    'background-color: rgb(253, 207, 0);',
    'background-color: #0de982;',
    'background-color: #fff;',
    'background-origin: content-box',
    'background-origin: border-box',
    'background-origin: padding-box',
    'background-position: center',
    'background-position: top',
    'background-position: left',
    'background-position: right',
    'background-position: bottom',
    'background-position: -20%',
    'background-position: -40%',
    'background-position: -60%',
    'background-position: -80%',
    'background-position: -100%',
    'background-position: 0%',
    'background-position: 20%',
    'background-position: 40%',
    'background-position: 60%',
    'background-position: 80%',
    'background-position: 100%',
    'background-repeat: repeat',
    'background-repeat: no-repeat',
    'background-size: auto',
    'background-size: contain',
    'background-size: cover',
    'background-size: -20%',
    'background-size: -40%',
    'background-size: -60%',
    'background-size: -80%',
    'background-size: -100%',
    'background-size: 0%',
    'background-size: 20%',
    'background-size: 40%',
    'background-size: 60%',
    'background-size: 80%',
    'background-size: 100%',
    'border: dotted;',
    'border: dashed;',
    'border: double',
    'border: groove;',
    'border: solid',
    'border: ridge;',
    'border: none;',
    'border-radius: 5px;',
    'border-radius: 10px;',
    'border-radius: 15px;',
    'border-radius: 20px;',
    'border-radius: 99999px;',
    'border: 1px solid black;',
    'border: 2px solid black;',
    'border: 3px solid black;',
    'border: 4px solid black;',
    'border-top: 1px solid black;',
    'border-top: 2px solid black;',
    'border-top: 3px solid black;',
    'border-top: 4px solid black;',
    'border-left: 1px solid black;',
    'border-left: 2px solid black;',
    'border-left: 3px solid black;',
    'border-left: 4px solid black;',
    'border-right: 1px solid black;',
    'border-right: 2px solid black;',
    'border-right: 3px solid black;',
    'border-right: 4px solid black;',
    'border-bottom: 1px solid black;',
    'border-bottom: 2px solid black;',
    'border-bottom: 3px solid black;',
    'border-bottom: 4px solid black;',
    'border-color: rgb(70, 70, 70);',
    'border-color: rgb(238, 238, 238);',
    'border-color: rgb(255, 76, 44);',
    'border-color: rgb(2, 168, 245);',
    'border-color: rgb(42, 131, 248);',
    'border-color: rgb(255, 242, 242);',
    'border-color: transparent;',
    'border-color: rgb(141, 141, 141);',
    'border-color: rgb(253, 207, 0);',
    'border-color: rgb(14, 253, 201);',
    'border-collapse: collapse;',
    'border-collapse: separate',
    'box-shadow: 2px 2px 2px rgb(199, 199, 199);',
    'box-shadow: 3px 3px 3px rgb(197, 197, 197);',
    'box-shadow: 3.5px 3.5px 2px rgb(197, 197, 197);',
    'box-shadow: 4px 4px 2px rgb(173, 173, 173);',
    'box-sizing: border-box;',
    'box-sizing: content-box;',
    'column-count: 1;padding: 10px;',
    'column-count: 2;padding: 10px;',
    'column-count: 3;padding: 10px;',
    'column-count: 4;padding: 10px;',
    'cursor: pointer;',
    'cursor: col-resize;',
    'cursor: context-menu;',
    'cursor: all-scroll;',
    'cursor: cell;',
    'cursor: alias;',
    'cursor: default;',
    'cursor: none;',
    'cursor: progress;',
    'text-decoration: none',
    'text-decoration: dashed;',
    'text-decoration: double;',
    'text-decoration: line-through;',
    'text-decoration: overline;',
    'text-decoration: solid;',
    'text-decoration: underline;',
    'empty-cells: show',
    'empty-cells: hidden;',
    'filter: blur(0px);',
    'filter: blur(2px);',
    'filter: blur(4px);',
    'filter: blur(6px);',
    'filter: blur(8px);',
    'filter: blur(10px);',
    'filter: gryscale(0%);',
    'filter: gryscale(20%);',
    'filter: gryscale(40%);',
    'filter: gryscale(60%);',
    'filter: gryscale(80%);',
    'filter: gryscale(100%);',
    'filter: saturate(0%);',
    'filter: saturate(20%);',
    'filter: saturate(40%);',
    'filter: saturate(60%);',
    'filter: saturate(80%);',
    'filter: saturate(100%);',
    'filter: brightness(0%);',
    'filter: brightness(20%);',
    'filter: brightness(40%);',
    'filter: brightness(60%);',
    'filter: brightness(80%);',
    'filter: brightness(100%);',
    'filter: contrast(0%);',
    'filter: contrast(20%);',
    'filter: contrast(40%);',
    'filter: contrast(60%);',
    'filter: contrast(80%);',
    'filter: contrast(100%);',
    'flex: 0.20;',
    'flex: 0.40;',
    'flex: 0.60;',
    'flex: 0.80;',
    'flex: 0;',
    'flex: 1;',
    'flex: 2;',
    'flex: 3;',
    'flex: 4;',
    'flex: auto;',
    'flex: content;',
    'flex: none;',
    'flex-basis: auto;',
    'flex-basis: content;',
    'flex-wrap: wrap;',
    'flex-wrap: nowrap;',
    'flex-wrap: wrap-reverse;',
    'flex-direction: column;',
    'flex-direction: column-reverse;',
    'flex-direction: row;',
    'flex-direction: row-reverse;',
    'flex-shrink: 1;',
    'flex-shrink: 2;',
    'flex-shrink: 3;',
    'flex-shrink: 4;',
    'float: left;',
    'float: right;',
    'float: none;',
    'float: inline-end;',
    'float: inline-start;',
    'font-weight: normal;',
    'font-weight: bold;',
    'font-weight: 100;',
    'font-weight: 200;',
    'font-weight: 300;',
    'font-weight: 400;',
    'font-weight: 500;',
    'font-weight: 600;',
    'font-weight: 700;',
    'font-weight: 800;',
    'font-style: italic;',
    'font-style: normal;',
    'font-style: oblique;',
    'font-size: 15px;',
    'font-size: 20px;',
    'font-size: 25px;',
    'font-size: 30px;',
    'font-size: 10px;',
    'font-size: 12px;',
    'font-size: 14px;',
    'font-size: 16px;',
    'font-size: 18px;',
    'font-size: 20px;',
    'font-size: 22px;',
    'font-size: 24px;',
    'font-size: 26px;',
    'font-size: 28px;',
    'font-size: 30px;',
    'font-size: 32px;',
    'font-size: 34px;',
    'font-size: 36px;',
    'font-size: 38px;',
    'font-size: 40px;',
    'font-size: 42px;',
    'font-size: 44px;',
    'font-size: 46px;',
    'font-size: 48px;',
    'font-size: 50px;',
    'font-size: 52px;',
    'font-size: 54px;',
    'font-size: 56px;',
    'font-size: 58px;',
    'font-size: 60px;',
    'font-size: 62px;',
    'font-size: 64px;',
    'font-size: 66px;',
    'font-size: 68px;',
    'font-size: 70px;',
    `grid-template-columns: auto; display: flex; flex-wrap: wrap;flex-direction: column;padding: 10px;box-sizing: border-box;`,
    `grid-template-columns: auto auto; display: flex; flex-wrap: wrap;flex-direction: column;box-sizing: border-box;`,
    `grid-template-columns: auto auto auto; display: flex; flex-wrap: wrap;flex-direction: column;box-sizing: border-box;`,
    `grid-template-columns: auto auto auto auto; display: flex; flex-wrap: wrap;flex-direction: column;box-sizing: border-box;`,
    `grid-gap: 5px`,
    `grid-gap: 10px`,
    `grid-gap: 15px`,
    `grid-gap: 20px`,
    `padding: 20px 0; 
     flex: 1; `,
    'justify-content: center',
    'justify-content: left',
    'justify-content: right;',
    'justify-content: safe;',
    'justify-content: unsafe;',
    'justify-content: start',
    'justify-content: end',
    'justify-content: flex-start;',
    'justify-content: flex-end;',
    'justify-content: space-between;',
    'justify-content: space-around',
    'justify-content: space-evenly',
    'justify-content: stretch;',
    'justify-content: last baseline;',
    'justify-items: auto',
    'justify-items: start',
    'justify-items: end;',
    'justify-items: center;',
    'justify-items: flex-end;',
    'justify-items: flex-start;',
    'justify-self: auto',
    'justify-self: start',
    'justify-self: end;',
    'justify-self: center;',
    'justify-self: stretch;',
    'letter-spacing: normal',
    'letter-spacing: 10px',
    'letter-spacing: 15px',
    'letter-spacing: 20px',
    'letter-spacing: 25px',
    'line-height: .75rem;',
    'line-height: 1rem;',
    'line-height: 1.25rem;',
    'line-height: 1.5rem;',
    'line-height: 1;',
    'line-height: 1.25;',
    'line-height: 1.375;',
    'line-height: 1.5;',
    'line-height: 1.625;',
    'line-height: 2;',
    'list-style-type: none',
    'list-style-type: square',
    'list-style-type: circle;',
    'list-style-type: desc;',
    'list-style-type: decimal;',
    'list-style-type: armenian',
    'list-style-type: georgian',
    'margin: auto;',
    'margin: 0px;',
    'margin: 5px;',
    'margin: 10px;',
    'margin: 15px;',
    'margin: 20px;',
    'margin: 25px;',
    'margin: 30px;',
    'margin: 35px;',
    'margin: 40px;',
    'margin: 45px;',
    'margin: 50px;',
    'margin: 55px;',
    'margin: 60px;',
    'margin: 65px;',
    'margin: 70px;',
    'margin: 75px;',
    'margin: 80px;',
    'margin: 85px;',
    'margin: 90px;',
    'margin: 95px;',
    'margin: 100px;',
    'margin: 200px;',
    'margin: 300px;',
    'margin: 400px;',
    'margin: 500px;',
    'margin: 600px;',
    'margin: 700px;',
    'margin: 800px;',
    'margin-top: auto;',
    'margin-top: 0px;',
    'margin-top: 5px;',
    'margin-top: 10px;',
    'margin-top: 15px;',
    'margin-top: 20px;',
    'margin-top: 25px;',
    'margin-top: 30px;',
    'margin-top: 35px;',
    'margin-top: 40px;',
    'margin-top: 45px;',
    'margin-top: 50px;',
    'margin-top: 55px;',
    'margin-top: 60px;',
    'margin-top: 65px;',
    'margin-top: 70px;',
    'margin-top: 75px;',
    'margin-top: 80px;',
    'margin-top: 85px;',
    'margin-top: 90px;',
    'margin-top: 95px;',
    'margin-top: 100px;',
    'margin-top: 200px;',
    'margin-top: 300px;',
    'margin-top: 400px;',
    'margin-top: 500px;',
    'margin-top: 600px;',
    'margin-top: 700px;',
    'margin-top: 800px;',
    'margin-left: auto;',
    'margin-left: 0px;',
    'margin-left: 5px;',
    'margin-left: 10px;',
    'margin-left: 15px;',
    'margin-left: 20px;',
    'margin-left: 25px;',
    'margin-left: 30px;',
    'margin-left: 35px;',
    'margin-left: 40px;',
    'margin-left: 45px;',
    'margin-left: 50px;',
    'margin-left: 55px;',
    'margin-left: 60px;',
    'margin-left: 65px;',
    'margin-left: 70px;',
    'margin-left: 75px;',
    'margin-left: 80px;',
    'margin-left: 85px;',
    'margin-left: 90px;',
    'margin-left: 95px;',
    'margin-left: 100px;',
    'margin-left: 200px;',
    'margin-left: 300px;',
    'margin-left: 400px;',
    'margin-left: 500px;',
    'margin-left: 600px;',
    'margin-left: 700px;',
    'margin-left: 800px;',
    'margin-right: auto;',
    'margin-right: 0px;',
    'margin-right: 5px;',
    'margin-right: 10px;',
    'margin-right: 15px;',
    'margin-right: 20px;',
    'margin-right: 25px;',
    'margin-right: 30px;',
    'margin-right: 35px;',
    'margin-right: 40px;',
    'margin-right: 45px;',
    'margin-right: 50px;',
    'margin-right: 55px;',
    'margin-right: 60px;',
    'margin-right: 65px;',
    'margin-right: 70px;',
    'margin-right: 75px;',
    'margin-right: 80px;',
    'margin-right: 85px;',
    'margin-right: 90px;',
    'margin-right: 95px;',
    'margin-right: 100px;',
    'margin-right: 200px;',
    'margin-right: 300px;',
    'margin-right: 400px;',
    'margin-right: 500px;',
    'margin-right: 600px;',
    'margin-right: 700px;',
    'margin-right: 800px;',
    'margin-bottom: auto;',
    'margin-bottom: 0px;',
    'margin-bottom: 5px;',
    'margin-bottom: 10px;',
    'margin-bottom: 15px;',
    'margin-bottom: 20px;',
    'margin-bottom: 25px;',
    'margin-bottom: 30px;',
    'margin-bottom: 35px;',
    'margin-bottom: 40px;',
    'margin-bottom: 45px;',
    'margin-bottom: 50px;',
    'margin-bottom: 55px;',
    'margin-bottom: 60px;',
    'margin-bottom: 65px;',
    'margin-bottom: 70px;',
    'margin-bottom: 75px;',
    'margin-bottom: 80px;',
    'margin-bottom: 85px;',
    'margin-bottom: 90px;',
    'margin-bottom: 95px;',
    'margin-bottom: 100px;',
    'margin-bottom: 200px;',
    'margin-bottom: 300px;',
    'margin-bottom: 400px;',
    'margin-bottom: 500px;',
    'margin-bottom: 600px;',
    'margin-bottom: 700px;',
    'margin-bottom: 800px;',
    'opacity: 0%',
    'opacity: 25%',
    'opacity: 50%;',
    'opacity: 75%;',
    'opacity: 100%;',
    'outline: dotted;',
    'outline: dashed;',
    'outline: double',
    'outline: groove;',
    'outline: solid',
    'outline: ridge;',
    'outline: none;',
    'outline: 1px;',
    'outline: 2px;',
    'outline: 3px;',
    'outline: 4px;',
    'outline-top: 1px;',
    'outline-top: 2px;',
    'outline-top: 3px;',
    'outline-top: 4px;',
    'outline-left: 1px;',
    'outline-left: 2px;',
    'outline-left: 3px;',
    'outline-left: 4px;',
    'outline-right: 1px;',
    'outline-right: 2px;',
    'outline-right: 3px;',
    'outline-right: 4px;',
    'outline-bottom: 1px;',
    'outline-bottom: 2px;',
    'outline-bottom: 3px;',
    'outline-bottom: 4px;',
    'outline-color: rgb(70, 70, 70);',
    'outline-color: rgb(238, 238, 238);',
    'outline-color: rgb(255, 76, 44);',
    'outline-color: rgb(2, 168, 245);',
    'outline-color: rgb(42, 131, 248);',
    'outline-color: rgb(255, 242, 242);',
    'outline-color: transparent;',
    'outline-color: rgb(141, 141, 141);',
    'outline-color: rgb(253, 207, 0);',
    'outline-color: rgb(11, 245, 101);',
    'overflow: hidden;',
    'overflow: scroll;',
    'overflow: auto;',
    'overflow: visible;',
    'overflow-x: hidden;',
    'overflow-x: scroll;',
    'overflow-x: auto;',
    'overflow-x: visible;',
    'overflow-y: hidden;',
    'overflow-y: scroll;',
    'overflow-y: auto;',
    'overflow-y: visible;',
    'overflow-wrap: break-word;',
    'overflow-wrap: normal;',
    'overflow: moz-hidden-unscrollable;',
    'padding: auto;',
    'padding: 0px;',
    'padding: 5px;',
    'padding: 10px;',
    'padding: 15px;',
    'padding: 20px;',
    'padding: 25px;',
    'padding: 30px;',
    'padding: 35px;',
    'padding: 40px;',
    'padding: 45px;',
    'padding: 50px;',
    'padding: 55px;',
    'padding: 60px;',
    'padding: 65px;',
    'padding: 70px;',
    'padding: 75px;',
    'padding: 80px;',
    'padding: 85px;',
    'padding: 90px;',
    'padding: 95px;',
    'padding: 100px;',
    'padding: 200px;',
    'padding: 300px;',
    'padding: 400px;',
    'padding: 500px;',
    'padding: 600px;',
    'padding: 700px;',
    'padding: 800px;',
    'padding-top: auto;',
    'padding-top: 0px;',
    'padding-top: 5px;',
    'padding-top: 10px;',
    'padding-top: 15px;',
    'padding-top: 20px;',
    'padding-top: 25px;',
    'padding-top: 30px;',
    'padding-top: 35px;',
    'padding-top: 40px;',
    'padding-top: 45px;',
    'padding-top: 50px;',
    'padding-top: 55px;',
    'padding-top: 60px;',
    'padding-top: 65px;',
    'padding-top: 70px;',
    'padding-top: 75px;',
    'padding-top: 80px;',
    'padding-top: 85px;',
    'padding-top: 90px;',
    'padding-top: 95px;',
    'padding-top: 100px;',
    'padding-top: 200px;',
    'padding-top: 300px;',
    'padding-top: 400px;',
    'padding-top: 500px;',
    'padding-top: 600px;',
    'padding-top: 700px;',
    'padding-top: 800px;',
    'padding-left: auto;',
    'padding-left: 0px;',
    'padding-left: 5px;',
    'padding-left: 10px;',
    'padding-left: 15px;',
    'padding-left: 20px;',
    'padding-left: 25px;',
    'padding-left: 30px;',
    'padding-left: 35px;',
    'padding-left: 40px;',
    'padding-left: 45px;',
    'padding-left: 50px;',
    'padding-left: 55px;',
    'padding-left: 60px;',
    'padding-left: 65px;',
    'padding-left: 70px;',
    'padding-left: 75px;',
    'padding-left: 80px;',
    'padding-left: 85px;',
    'padding-left: 90px;',
    'padding-left: 95px;',
    'padding-left: 100px;',
    'padding-left: 200px;',
    'padding-left: 300px;',
    'padding-left: 400px;',
    'padding-left: 500px;',
    'padding-left: 600px;',
    'padding-left: 700px;',
    'padding-left: 800px;',
    'padding-right: auto;',
    'padding-right: 0px;',
    'padding-right: 5px;',
    'padding-right: 10px;',
    'padding-right: 15px;',
    'padding-right: 20px;',
    'padding-right: 25px;',
    'padding-right: 30px;',
    'padding-right: 35px;',
    'padding-right: 40px;',
    'padding-right: 45px;',
    'padding-right: 50px;',
    'padding-right: 55px;',
    'padding-right: 60px;',
    'padding-right: 65px;',
    'padding-right: 70px;',
    'padding-right: 75px;',
    'padding-right: 80px;',
    'padding-right: 85px;',
    'padding-right: 90px;',
    'padding-right: 95px;',
    'padding-right: 100px;',
    'padding-right: 200px;',
    'padding-right: 300px;',
    'padding-right: 400px;',
    'padding-right: 500px;',
    'padding-right: 600px;',
    'padding-right: 700px;',
    'padding-right: 800px;',
    'padding-bottom: auto;',
    'padding-bottom: 0px;',
    'padding-bottom: 5px;',
    'padding-bottom: 10px;',
    'padding-bottom: 15px;',
    'padding-bottom: 20px;',
    'padding-bottom: 25px;',
    'padding-bottom: 30px;',
    'padding-bottom: 35px;',
    'padding-bottom: 40px;',
    'padding-bottom: 45px;',
    'padding-bottom: 50px;',
    'padding-bottom: 55px;',
    'padding-bottom: 60px;',
    'padding-bottom: 65px;',
    'padding-bottom: 70px;',
    'padding-bottom: 75px;',
    'padding-bottom: 80px;',
    'padding-bottom: 85px;',
    'padding-bottom: 90px;',
    'padding-bottom: 95px;',
    'padding-bottom: 100px;',
    'padding-bottom: 200px;',
    'padding-bottom: 300px;',
    'padding-bottom: 400px;',
    'padding-bottom: 500px;',
    'padding-bottom: 600px;',
    'padding-bottom: 700px;',
    'padding-bottom: 800px;',
    'perspective: -20px;',
    'perspective: -40px;',
    'perspective: -60px;',
    'perspective: -80px;',
    'perspective: none;',
    'perspective: 20px;',
    'perspective: 40px;',
    'perspective: 60px;',
    'perspective: 80px;',
    'perspective-origin: top;',
    'perspective-origin: bottom;',
    'perspective-origin: left;',
    'perspective-origin: right;',
    'perspective-origin: center;',
    'position: relative;',
    'position: absolute;',
    'position: fixed;',
    'position: sticky;',
    'position: static;',
    'text-align: center;',
    'text-align: left;',
    'text-align: right;',
    'text-align: justify;',
    'color: black;',
    'color: rgb(238, 238, 238);',
    'color: rgb(255, 76, 44);',
    'color: rgb(2, 168, 245);',
    'color: rgb(42, 131, 248);',
    'color: rgb(255, 242, 242);',
    'color: transparent;',
    'color: rgb(141, 141, 141);',
    'color: rgb(253, 207, 0);',
    'color: #0de982;',
    'color: #fff;',
    'text-shadow: 2px 2px 2px rgb(199, 199, 199);',
    'text-shadow: 3px 3px 3px rgb(197, 197, 197);',
    'text-shadow: 3.5px 3.5px 2px rgb(197, 197, 197);',
    'text-shadow: 4px 4px 2px rgb(173, 173, 173);',
    'text-transform: uppercase;',
    'text-transform: lowercase;',
    'text-transform: capitalize;',
    'text-transform: none;',
    'top: auto;',
    'top: 0px;',
    'top: 5px;',
    'top: 10px;',
    'top: 15px;',
    'top: 20px;',
    'top: 25px;',
    'top: 30px;',
    'top: 35px;',
    'top: 40px;',
    'top: 45px;',
    'top: 50px;',
    'top: 55px;',
    'top: 60px;',
    'top: 65px;',
    'top: 70px;',
    'top: 75px;',
    'top: 80px;',
    'top: 85px;',
    'top: 90px;',
    'top: 95px;',
    'top: 100px;',
    'top: 200px;',
    'top: 300px;',
    'top: 400px;',
    'top: 500px;',
    'top: 600px;',
    'top: 700px;',
    'top: 800px;',
    'left: auto;',
    'left: 0px;',
    'left: 5px;',
    'left: 10px;',
    'left: 15px;',
    'left: 20px;',
    'left: 25px;',
    'left: 30px;',
    'left: 35px;',
    'left: 40px;',
    'left: 45px;',
    'left: 50px;',
    'left: 55px;',
    'left: 60px;',
    'left: 65px;',
    'left: 70px;',
    'left: 75px;',
    'left: 80px;',
    'left: 85px;',
    'left: 90px;',
    'left: 95px;',
    'left: 100px;',
    'left: 200px;',
    'left: 300px;',
    'left: 400px;',
    'left: 500px;',
    'left: 600px;',
    'left: 700px;',
    'left: 800px;',
    'right: auto;',
    'right: 0px;',
    'right: 5px;',
    'right: 10px;',
    'right: 15px;',
    'right: 20px;',
    'right: 25px;',
    'right: 30px;',
    'right: 35px;',
    'right: 40px;',
    'right: 45px;',
    'right: 50px;',
    'right: 55px;',
    'right: 60px;',
    'right: 65px;',
    'right: 70px;',
    'right: 75px;',
    'right: 80px;',
    'right: 85px;',
    'right: 90px;',
    'right: 95px;',
    'right: 100px;',
    'right: 200px;',
    'right: 300px;',
    'right: 400px;',
    'right: 500px;',
    'right: 600px;',
    'right: 700px;',
    'right: 800px;',
    'bottom: auto;',
    'bottom: 0px;',
    'bottom: 5px;',
    'bottom: 10px;',
    'bottom: 15px;',
    'bottom: 20px;',
    'bottom: 25px;',
    'bottom: 30px;',
    'bottom: 35px;',
    'bottom: 40px;',
    'bottom: 45px;',
    'bottom: 50px;',
    'bottom: 55px;',
    'bottom: 60px;',
    'bottom: 65px;',
    'bottom: 70px;',
    'bottom: 75px;',
    'bottom: 80px;',
    'bottom: 85px;',
    'bottom: 90px;',
    'bottom: 95px;',
    'bottom: 100px;',
    'bottom: 200px;',
    'bottom: 300px;',
    'bottom: 400px;',
    'bottom: 500px;',
    'bottom: 600px;',
    'bottom: 700px;',
    'bottom: 800px;',
    'transform: rotate(0deg)',
    'transform: rotate(30deg)',
    'transform: rotate(45deg)',
    'transform: rotate(90deg)',
    'transform: rotate(120deg)',
    'transform: rotate(180deg)',
    'transform: rotate(360deg)',
    'transform: scale(0.1)',
    'transform: scale(0.2)',
    'transform: scale(0.3)',
    'transform: scale(0.4)',
    'transform: scale(0.5)',
    'transform: scale(0.6)',
    'transform: scale(0.7)',
    'transform: scale(0.8)',
    'transform: scale(0.9)',
    'transform: scale(1)',
    'transform: scale(2)',
    'transform: scale(3)',
    'transform: scale(4)',
    'transform: skew(5deg)',
    'transform: skew(10deg)',
    'transform: skew(15deg)',
    'transform: skew(20deg)',
    'transform: skew(-5deg)',
    'transform: skew(-10deg)',
    'transform: skew(-15deg)',
    'transform: skew(-20deg)',
    'transform: translate(10%)',
    'transform: translate(20%)',
    'transform: translate(30%)',
    'transform: translate(40%)',
    'transform: translate(50%)',
    'transform: translate(-10%)',
    'transform: translate(-20%)',
    'transform: translate(-30%)',
    'transform: translate(-40%)',
    'transform: translate(-50%)',
    'transform: translateX(10%)',
    'transform: translateX(20%)',
    'transform: translateX(30%)',
    'transform: translateX(40%)',
    'transform: translateX(50%)',
    'transform: translateX(-10%)',
    'transform: translateX(-20%)',
    'transform: translateX(-30%)',
    'transform: translateX(-40%)',
    'transform: translateX(-50%)',
    'transform: translateY(10%)',
    'transform: translateY(20%)',
    'transform: translateY(30%)',
    'transform: translateY(40%)',
    'transform: translateY(50%)',
    'transform: translateY(-10%)',
    'transform: translateY(-20%)',
    'transform: translateY(-30%)',
    'transform: translateY(-40%)',
    'transform: translateY(-50%)',
    'transform: translateZ(10%)',
    'transform: translateZ(20%)',
    'transform: translateZ(30%)',
    'transform: translateZ(40%)',
    'transform: translateZ(50%)',
    'transform: translateZ(-10%)',
    'transform: translateZ(-20%)',
    'transform: translateZ(-30%)',
    'transform: translateZ(-40%)',
    'transform: translateZ(-50%)',
    'transition: 0.1s;',
    'transition: 0.2s;',
    'transition: 0.3s;',
    'transition: 0.4s;',
    'transition: 0.5s;',
    'transition: 0.6s;',
    'transition: 0.7s',
    'transition: 0.8s;',
    'transition: 0.9s;',
    'transition: 1s;',
    'transition: 2s;',
    'transition: 3s;',
    'transition: 4s;',
    'visibility: collapse;',
    'visibility: hidden;',
    'visibility: visible;',
    'white-space: collapse;',
    'white-space: hidden;',
    'white-space: pre;',
    'white-space: pre-line;',
    'white-space: pre-wrap;',
    'width: 5%;',
    'width: 10%;',
    'width: 15%;',
    'width: 20%;',
    'width: 25%;',
    'width: 30%;',
    'width: 33%;',
    'width: 35%;',
    'width: 40%;',
    'width: 45%;',
    'width: 50%;',
    'width: 55%;',
    'width: 60%;',
    'width: 65%;',
    'width: 70%;',
    'width: 75%;',
    'width: 80%;',
    'width: 85%;',
    'width: 90%;',
    'width: 95%;',
    'width: 100%;',
    'width: 100vw;',
    'width: min-content;',
    'width: max-content;',
    'width: 50%;',
    'width: 5px;',
    'width: 10px;',
    'width: 15px;',
    'width: 20px;',
    'width: 25px;',
    'width: 30px;',
    'width: 35px;',
    'width: 40px;',
    'width: 45px;',
    'width: 50px;',
    'width: 55px;',
    'width: 60px;',
    'width: 65px;',
    'width: 70px;',
    'width: 75px;',
    'width: 80px;',
    'width: 85px;',
    'width: 90px;',
    'width: 95px;',
    'width: 100px;',
    'width: 200px;',
    'width: 300px;',
    'width: 400px;',
    'width: 500px;',
    'width: 600px;',
    'width: 700px;',
    'width: 800px;',
    'height: 5%;',
    'height: 10%;',
    'height: 15%;',
    'height: 20%;',
    'height: 25%;',
    'height: 30%;',
    'height: 35%;',
    'height: 40%;',
    'height: 45%;',
    'height: 50%;',
    'height: 55%;',
    'height: 60%;',
    'height: 65%;',
    'height: 70%;',
    'height: 75%;',
    'height: 80%;',
    'height: 85%;',
    'height: 90%;',
    'height: 95%;',
    'height: 100%;',
    'height: 100vh;',
    'height: min-content;',
    'height: max-content;',
    'height: 50%;',
    'height: 5px;',
    'height: 10px;',
    'height: 15px;',
    'height: 20px;',
    'height: 25px;',
    'height: 30px;',
    'height: 35px;',
    'height: 40px;',
    'height: 45px;',
    'height: 50px;',
    'height: 55px;',
    'height: 60px;',
    'height: 65px;',
    'height: 70px;',
    'height: 75px;',
    'height: 80px;',
    'height: 85px;',
    'height: 90px;',
    'height: 95px;',
    'height: 100px;',
    'height: 200px;',
    'height: 300px;',
    'height: 400px;',
    'height: 500px;',
    'height: 600px;',
    'height: 700px;',
    'height: 800px;',
    'word-spacing: normal',
    'word-spacing: 10px',
    'word-spacing: 20px',
    'word-spacing: 30px',
    'word-spacing: 40px',
    'word-wrap: normal',
    'word-wrap: break-word',
    'z-index: -1;',
    'z-index: -2;',
    'z-index: -3;',
    'z-index: -4;',
    'z-index: 0;',
    'z-index: 1;',
    'z-index: 2;',
    'z-index: 3;',
    'z-index: 4;',
    'display: flex',
    'display: block;',
    'display: flexbox;',
    'display: inline;',
    'display: table',
    'display: inline-flex;',
    'display: inline-block;',
    'display: inline-flexbox;',
    'display: inline-table;',
    'display: grid;',
    'display: table-row;',
    'display: table-cell;',
    'display: table-column;',
    'display: none;',
]

for (var i = 0; i <= propertiesDisplay.length; i++) {
        if (document.querySelector(`.${propertiesDisplay[i]}`) && !document.querySelector('style').innerText.includes(propertiesDisplay[i])) {
            let styles = ` 
            .${propertiesDisplay[i]} { 
                ${valuesDisplay[i]}
            }
            @media screen and (min-width: 901px) and (max-width: 2400px) {
                .${propertiesDisplay[i]} { 
                    ${valuesDisplay[i]}
                }
            }`;
            document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
        }
    }
    
let propertiesDisplay2 = [
    'mb-content-center',
    'mb-content-flex-end',
    'mb-content-flex-start',
    'mb-content-evenly',
    'mb-content-between',
    'mb-content-around',
    'mb-items-center',
    'mb-items-flex-end',
    'mb-items-flex-start',
    'mb-items-stretch',
    'mb-items-baseline',
    'mb-self-center',
    'mb-self-flex-end',
    'mb-self-flex-start',
    'mb-self-stretch',
    'mb-self-baseline',
    'mb-self-auto',
    'mb-attachment-fixed',
    'mb-attachment-local',
    'mb-attachment-scroll',
    'mb-bg-blend-color',
    'mb-bg-blend-multiply',
    'mb-bg-blend-screen',
    'mb-bg-blend-normal',
    'mb-bg-blend-darken',
    'mb-bg-blend-lighten',
    'mb-bg-clip-border',
    'mb-bg-clip-padding',
    'mb-bg-clip-content',
    'mb-bg-clip-text',
    'mb-bg-dark',
    'mb-bg-light',
    'mb-bg-danger',
    'mb-bg-info',
    'mb-bg-primary',
    'mb-bg-smooth',
    'mb-bg-transparent',
    'mb-bg-secondary',
    'mb-bg-warning',
    'mb-bg-green',
    'mb-bg-white',
    'mb-bg-content-box',
    'mb-bg-border-box',
    'mb-bg-padding-box',
    'mb-bg-post-center',
    'mb-bg-post-top',
    'mb-bg-post-left',
    'mb-bg-post-right',
    'mb-bg-post-bottom',
    'mb-bg-post--1',
    'mb-bg-post--2',
    'mb-bg-post--3',
    'mb-bg-post--4',
    'mb-bg-post--full',
    'mb-bg-post-0',
    'mb-bg-post-1',
    'mb-bg-post-2',
    'mb-bg-post-3',
    'mb-bg-post-4',
    'mb-bg-post-full',
    'mb-bg-rpt-repeat',
    'mb-bg-rpt-norepeat',
    'mb-bg-sz-auto',
    'mb-bg-sz-contain',
    'mb-bg-sz-cover',
    'mb-bg-sz--1',
    'mb-bg-sz--2',
    'mb-bg-sz--3',
    'mb-bg-sz--4',
    'mb-bg-sz--full',
    'mb-bg-sz-0',
    'mb-bg-sz-1',
    'mb-bg-sz-2',
    'mb-bg-sz-3',
    'mb-bg-sz-4',
    'mb-bg-sz-full',
    'mb-style-dotted',
    'mb-style-dashed',
    'mb-style-double',
    'mb-style-groove',
    'mb-style-solid',
    'mb-style-ridge',
    'mb-style-hidden',
    'mb-radius-sm',
    'mb-radius-md',
    'mb-radius-lg',
    'mb-radius-xl',
    'mb-radius-full',
    'mb-border-1',
    'mb-border-2',
    'mb-border-3',
    'mb-border-4',
    'mb-border-t-1',
    'mb-border-t-2',
    'mb-border-t-3',
    'mb-border-t-4',
    'mb-border-l-1',
    'mb-border-l-2',
    'mb-border-l-3',
    'mb-border-l-4',
    'mb-border-r-1',
    'mb-border-r-2',
    'mb-border-r-3',
    'mb-border-r-4',
    'mb-border-b-1',
    'mb-border-b-2',
    'mb-border-b-3',
    'mb-border-b-4',
    'mb-border-clr-dark',
    'mb-border-clr-light',
    'mb-border-clr-danger',
    'mb-border-clr-info',
    'mb-border-clr-primary',
    'mb-border-clr-smooth',
    'mb-border-clr-transparent',
    'mb-border-clr-secondary',
    'mb-border-clr-warning',
    'mb-border-clr-green',
    'mb-border-type-collapse',
    'mb-border-type-separate',
    'mb-box-shadow-sm',
    'mb-box-shadow-md',
    'mb-box-shadow-lg',
    'mb-box-shadow-xl',
    'mb-box-border',
    'mb-box-content',
    'mb-col-1',
    'mb-col-2',
    'mb-col-3',
    'mb-col-4',
    'mb-cursor-pointer',
    'mb-cursor-col-resize',
    'mb-cursor-context-menu ',
    'mb-cursor-all-scroll',
    'mb-cursor-cell',
    'mb-cursor-alias',
    'mb-cursor-default',
    'mb-cursor-none',
    'mb-cursor-progress',
    'mb-decoration-none',
    'mb-decoration-dashed',
    'mb-decoration-double',
    'mb-decoration-through',
    'mb-decoration-overline',
    'mb-decoration-solid',
    'mb-decoration-underline',
    'mb-cells-show',
    'mb-cells-hidden',
    'mb-blur-0',
    'mb-blur-1',
    'mb-blur-2',
    'mb-blur-3',
    'mb-blur-4',
    'mb-blur-full',
    'mb-gryscale-0',
    'mb-gryscale-1',
    'mb-gryscale-2',
    'mb-gryscale-3',
    'mb-gryscale-4',
    'mb-gryscale-full',
    'mb-saturate-0',
    'mb-saturate-1',
    'mb-saturate-2',
    'mb-saturate-3',
    'mb-saturate-4',
    'mb-saturate-full',
    'mb-brightness-0',
    'mb-brightness-1',
    'mb-brightness-2',
    'mb-brightness-3',
    'mb-brightness-4',
    'mb-brightness-full',
    'mb-contrast-0',
    'mb-contrast-1',
    'mb-contrast-2',
    'mb-contrast-3',
    'mb-contrast-4',
    'mb-contrast-full',
    'mb-flex--1',
    'mb-flex--2',
    'mb-flex--3',
    'mb-flex--4',
    'mb-flex-0',
    'mb-flex-1',
    'mb-flex-2',
    'mb-flex-3',
    'mb-flex-4',
    'mb-flex-auto',
    'mb-flex-content',
    'mb-flex-none',
    'mb-flex-basis-auto',
    'mb-flex-basis-content',
    'mb-wrap-wrap',
    'mb-wrap-nowrap',
    'mb-wrap-wrap-reverse',
    'mb-direction-column',
    'mb-direction-column-reverse',
    'mb-direction-row',
    'mb-direction-row-reverse',
    'mb-shrink-1',
    'mb-shrink-2',
    'mb-shrink-3',
    'mb-shrink-4',
    'mb-float-left',
    'mb-float-right',
    'mb-float-none',
    'mb-float-inline-end',
    'mb-float-inline-start',
    'mb-weight-normal',
    'mb-weight-bold',
    'mb-weight-100',
    'mb-weight-200',
    'mb-weight-300',
    'mb-weight-400',
    'mb-weight-500',
    'mb-weight-600',
    'mb-weight-700',
    'mb-weight-800',
    'mb-font-style-italic',
    'mb-font-style-normal',
    'mb-font-style-oblique',
    'mb-font-sz-sm',
    'mb-font-sz-md',
    'mb-font-sz-lg',
    'mb-font-sz-xl',
    'mb-font-sz-10px',
    'mb-font-sz-12px',
    'mb-font-sz-14px',
    'mb-font-sz-16px',
    'mb-font-sz-18px',
    'mb-font-sz-20px',
    'mb-font-sz-22px',
    'mb-font-sz-24px',
    'mb-font-sz-26px',
    'mb-font-sz-28px',
    'mb-font-sz-30px',
    'mb-font-sz-32px',
    'mb-font-sz-34px',
    'mb-font-sz-36px',
    'mb-font-sz-38px',
    'mb-font-sz-40px',
    'mb-font-sz-42px',
    'mb-font-sz-44px',
    'mb-font-sz-46px',
    'mb-font-sz-48px',
    'mb-font-sz-50px',
    'mb-font-sz-52px',
    'mb-font-sz-54px',
    'mb-font-sz-56px',
    'mb-font-sz-58px',
    'mb-font-sz-60px',
    'mb-font-sz-62px',
    'mb-font-sz-64px',
    'mb-font-sz-66px',
    'mb-font-sz-68px',
    'mb-font-sz-70px',
    'mb-row-1',
    'mb-row-2',
    'mb-row-3',
    'mb-row-4',
    'mb-grid-gap-1',
    'mb-grid-gap-2',
    'mb-grid-gap-3',
    'mb-grid-gap-4',
    'mb-col',
    'mb-justify-center',
    'mb-justify-left',
    'mb-justify-right',
    'mb-justify-safe',
    'mb-justify-unsafe',
    'mb-justify-start',
    'mb-justify-end',
    'mb-justify-flex-start',
    'mb-justify-flex-end',
    'mb-justify-between',
    'mb-justify-around',
    'mb-justify-evenly',
    'mb-justify-stretch',
    'mb-justify-last-baseline',
    'mb-just-items-auto',
    'mb-just-items-start',
    'mb-just-items-end',
    'mb-just-items-center',
    'mb-just-items-flex-end',
    'mb-just-items-flex-start',
    'mb-just-self-auto',
    'mb-just-self-start',
    'mb-just-self-end',
    'mb-just-self-center',
    'mb-just-self-stretch',
    'mb-let-spacing-normal',
    'mb-let-spacing-1',
    'mb-let-spacing-2',
    'mb-let-spacing-3',
    'mb-let-spacing-4',
    'mb-leading-1',
    'mb-leading-2',
    'mb-leading-3',
    'mb-leading-4',
    'mb-leading-none',
    'mb-leading-tight',
    'mb-leading-snug',
    'mb-leading-normal',
    'mb-leading-relaxed',
    'mb-leading-loose',
    'mb-list-none',
    'mb-list-square',
    'mb-list-circle',
    'mb-list-desc',
    'mb-list-decimal',
    'mb-list-armenian',
    'mb-list-georgian',
    'mb-m-auto',
    'mb-m-0px',
    'mb-m-5px',
    'mb-m-10px',
    'mb-m-15px',
    'mb-m-20px',
    'mb-m-25px',
    'mb-m-30px',
    'mb-m-35px',
    'mb-m-40px',
    'mb-m-45px',
    'mb-m-50px',
    'mb-m-55px',
    'mb-m-60px',
    'mb-m-65px',
    'mb-m-70px',
    'mb-m-75px',
    'mb-m-80px',
    'mb-m-85px',
    'mb-m-90px',
    'mb-m-95px',
    'mb-m-100px',
    'mb-m-200px',
    'mb-m-300px',
    'mb-m-400px',
    'mb-m-500px',
    'mb-m-600px',
    'mb-m-700px',
    'mb-m-800px',
    'mb-mt-auto',
    'mb-mt-0px',
    'mb-mt-5px',
    'mb-mt-10px',
    'mb-mt-15px',
    'mb-mt-20px',
    'mb-mt-25px',
    'mb-mt-30px',
    'mb-mt-35px',
    'mb-mt-40px',
    'mb-mt-45px',
    'mb-mt-50px',
    'mb-mt-55px',
    'mb-mt-60px',
    'mb-mt-65px',
    'mb-mt-70px',
    'mb-mt-75px',
    'mb-mt-80px',
    'mb-mt-85px',
    'mb-mt-90px',
    'mb-mt-95px',
    'mb-mt-100px',
    'mb-mt-200px',
    'mb-mt-300px',
    'mb-mt-400px',
    'mb-mt-500px',
    'mb-mt-600px',
    'mb-mt-700px',
    'mb-mt-800px',
    'mb-ml-auto',
    'mb-ml-0px',
    'mb-ml-5px',
    'mb-ml-10px',
    'mb-ml-15px',
    'mb-ml-20px',
    'mb-ml-25px',
    'mb-ml-30px',
    'mb-ml-35px',
    'mb-ml-40px',
    'mb-ml-45px',
    'mb-ml-50px',
    'mb-ml-55px',
    'mb-ml-60px',
    'mb-ml-65px',
    'mb-ml-70px',
    'mb-ml-75px',
    'mb-ml-80px',
    'mb-ml-85px',
    'mb-ml-90px',
    'mb-ml-95px',
    'mb-ml-100px',
    'mb-ml-200px',
    'mb-ml-300px',
    'mb-ml-400px',
    'mb-ml-500px',
    'mb-ml-600px',
    'mb-ml-700px',
    'mb-ml-800px',
    'mb-mr-auto',
    'mb-mr-0px',
    'mb-mr-5px',
    'mb-mr-10px',
    'mb-mr-15px',
    'mb-mr-20px',
    'mb-mr-25px',
    'mb-mr-30px',
    'mb-mr-35px',
    'mb-mr-40px',
    'mb-mr-45px',
    'mb-mr-50px',
    'mb-mr-55px',
    'mb-mr-60px',
    'mb-mr-65px',
    'mb-mr-70px',
    'mb-mr-75px',
    'mb-mr-80px',
    'mb-mr-85px',
    'mb-mr-90px',
    'mb-mr-95px',
    'mb-mr-100px',
    'mb-mr-200px',
    'mb-mr-300px',
    'mb-mr-400px',
    'mb-mr-500px',
    'mb-mr-600px',
    'mb-mr-700px',
    'mb-mr-800px',
    'mb-mb-auto',
    'mb-mb-0px',
    'mb-mb-5px',
    'mb-mb-10px',
    'mb-mb-15px',
    'mb-mb-20px',
    'mb-mb-25px',
    'mb-mb-30px',
    'mb-mb-35px',
    'mb-mb-40px',
    'mb-mb-45px',
    'mb-mb-50px',
    'mb-mb-55px',
    'mb-mb-60px',
    'mb-mb-65px',
    'mb-mb-70px',
    'mb-mb-75px',
    'mb-mb-80px',
    'mb-mb-85px',
    'mb-mb-90px',
    'mb-mb-95px',
    'mb-mb-100px',
    'mb-mb-200px',
    'mb-mb-300px',
    'mb-mb-400px',
    'mb-mb-500px',
    'mb-mb-600px',
    'mb-mb-700px',
    'mb-mb-800px',
    'mb-opacity-0',
    'mb-opacity-1',
    'mb-opacity-2',
    'mb-opacity-3',
    'mb-opacity-4',
    'mb-o-style-dotted',
    'mb-o-style-dashed',
    'mb-o-style-double',
    'mb-o-style-groove',
    'mb-o-style-solid',
    'mb-o-style-ridge',
    'mb-o-style-hidden',
    'mb-o-1',
    'mb-o-2',
    'mb-o-3',
    'mb-o-4',
    'mb-o-top-1',
    'mb-o-top-2',
    'mb-o-top-3',
    'mb-o-top-4',
    'mb-o-left-1',
    'mb-o-left-2',
    'mb-o-left-3',
    'mb-o-left-4',
    'mb-o-right-1',
    'mb-o-right-2',
    'mb-o-right-3',
    'mb-o-right-4',
    'mb-o-bottom-1',
    'mb-o-bottom-2',
    'mb-o-bottom-3',
    'mb-o-bottom-4',
    'mb-o-color-dark',
    'mb-o-color-light',
    'mb-o-color-danger',
    'mb-o-color-info',
    'mb-o-color-primary',
    'mb-o-color-smooth',
    'mb-o-color-transparent',
    'mb-o-color-secondary',
    'mb-o-color-warning',
    'mb-o-color-green',
    'mb-overflow-hidden',
    'mb-overflow-scroll',
    'mb-overflow-auto',
    'mb-overflow-visible',
    'mb-overflowX-hidden',
    'mb-overflowX-scroll',
    'mb-overflowX-auto',
    'mb-overflowX-visible',
    'mb-overflowY-hidden',
    'mb-overflowY-scroll',
    'mb-overflowY-auto',
    'mb-overflowY-visible',
    'mb-overflow-break-word',
    'mb-overflow-normal',
    'mb-overflow-moz-unscrollable',
    'mb-p-auto',
    'mb-p-0px',
    'mb-p-5px',
    'mb-p-10px',
    'mb-p-15px',
    'mb-p-20px',
    'mb-p-25px',
    'mb-p-30px',
    'mb-p-35px',
    'mb-p-40px',
    'mb-p-45px',
    'mb-p-50px',
    'mb-p-55px',
    'mb-p-60px',
    'mb-p-65px',
    'mb-p-70px',
    'mb-p-75px',
    'mb-p-80px',
    'mb-p-85px',
    'mb-p-90px',
    'mb-p-95px',
    'mb-p-100px',
    'mb-p-200px',
    'mb-p-300px',
    'mb-p-400px',
    'mb-p-500px',
    'mb-p-600px',
    'mb-p-700px',
    'mb-p-800px',
    'mb-pt-auto',
    'mb-pt-0px',
    'mb-pt-5px',
    'mb-pt-10px',
    'mb-pt-15px',
    'mb-pt-20px',
    'mb-pt-25px',
    'mb-pt-30px',
    'mb-pt-35px',
    'mb-pt-40px',
    'mb-pt-45px',
    'mb-pt-50px',
    'mb-pt-55px',
    'mb-pt-60px',
    'mb-pt-65px',
    'mb-pt-70px',
    'mb-pt-75px',
    'mb-pt-80px',
    'mb-pt-85px',
    'mb-pt-90px',
    'mb-pt-95px',
    'mb-pt-100px',
    'mb-pt-200px',
    'mb-pt-300px',
    'mb-pt-400px',
    'mb-pt-500px',
    'mb-pt-600px',
    'mb-pt-700px',
    'mb-pt-800px',
    'mb-pl-auto',
    'mb-pl-0px',
    'mb-pl-5px',
    'mb-pl-10px',
    'mb-pl-15px',
    'mb-pl-20px',
    'mb-pl-25px',
    'mb-pl-30px',
    'mb-pl-35px',
    'mb-pl-40px',
    'mb-pl-45px',
    'mb-pl-50px',
    'mb-pl-55px',
    'mb-pl-60px',
    'mb-pl-65px',
    'mb-pl-70px',
    'mb-pl-75px',
    'mb-pl-80px',
    'mb-pl-85px',
    'mb-pl-90px',
    'mb-pl-95px',
    'mb-pl-100px',
    'mb-pl-200px',
    'mb-pl-300px',
    'mb-pl-400px',
    'mb-pl-500px',
    'mb-pl-600px',
    'mb-pl-700px',
    'mb-pl-800px',
    'mb-pr-auto',
    'mb-pr-0px',
    'mb-pr-5px',
    'mb-pr-10px',
    'mb-pr-15px',
    'mb-pr-20px',
    'mb-pr-25px',
    'mb-pr-30px',
    'mb-pr-35px',
    'mb-pr-40px',
    'mb-pr-45px',
    'mb-pr-50px',
    'mb-pr-55px',
    'mb-pr-60px',
    'mb-pr-65px',
    'mb-pr-70px',
    'mb-pr-75px',
    'mb-pr-80px',
    'mb-pr-85px',
    'mb-pr-90px',
    'mb-pr-95px',
    'mb-pr-100px',
    'mb-pr-200px',
    'mb-pr-300px',
    'mb-pr-400px',
    'mb-pr-500px',
    'mb-pr-600px',
    'mb-pr-700px',
    'mb-pr-800px',
    'mb-pb-auto',
    'mb-pb-0px',
    'mb-pb-5px',
    'mb-pb-10px',
    'mb-pb-15px',
    'mb-pb-20px',
    'mb-pb-25px',
    'mb-pb-30px',
    'mb-pb-35px',
    'mb-pb-40px',
    'mb-pb-45px',
    'mb-pb-50px',
    'mb-pb-55px',
    'mb-pb-60px',
    'mb-pb-65px',
    'mb-pb-70px',
    'mb-pb-75px',
    'mb-pb-80px',
    'mb-pb-85px',
    'mb-pb-90px',
    'mb-pb-95px',
    'mb-pb-100px',
    'mb-pb-200px',
    'mb-pb-300px',
    'mb-pb-400px',
    'mb-pb-500px',
    'mb-pb-600px',
    'mb-pb-700px',
    'mb-pb-800px',
    'mb-perspective--1',
    'mb-perspective--2',
    'mb-perspective--3',
    'mb-perspective--4',
    'mb-perspective-none',
    'mb-perspective-1',
    'mb-perspective-2',
    'mb-perspective-3',
    'mb-perspective-4',
    'mb-perspective-top',
    'mb-perspective-bottom',
    'mb-perspective-left',
    'mb-perspective-right',
    'mb-perspective-center',
    'mb-pst-relative',
    'mb-pst-absolute',
    'mb-pst-fixed',
    'mb-pst-sticky',
    'mb-pst-static',
    'mb-text-center',
    'mb-text-left',
    'mb-text-right',
    'mb-text-justify',
    'mb-color-dark',
    'mb-color-light',
    'mb-color-danger',
    'mb-color-info',
    'mb-color-primary',
    'mb-color-smooth',
    'mb-color-transparent',
    'mb-color-secondary',
    'mb-color-warning',
    'mb-color-green',
    'mb-color-white',
    'mb-text-shadow-sm',
    'mb-text-shadow-md',
    'mb-text-shadow-lg',
    'mb-text-shadow-xl',
    'mb-text-transform-upper',
    'mb-text-transform-lower',
    'mb-text-transform-capital',
    'mb-text-transform-none',
    'mb-t-auto',
    'mb-t-0px',
    'mb-t-5px',
    'mb-t-10px',
    'mb-t-15px',
    'mb-t-20px',
    'mb-t-25px',
    'mb-t-30px',
    'mb-t-35px',
    'mb-t-40px',
    'mb-t-45px',
    'mb-t-50px',
    'mb-t-55px',
    'mb-t-60px',
    'mb-t-65px',
    'mb-t-70px',
    'mb-t-75px',
    'mb-t-80px',
    'mb-t-85px',
    'mb-t-90px',
    'mb-t-95px',
    'mb-t-100px',
    'mb-t-200px',
    'mb-t-300px',
    'mb-t-400px',
    'mb-t-500px',
    'mb-t-600px',
    'mb-t-700px',
    'mb-t-800px',
    'mb-l-auto',
    'mb-l-0px',
    'mb-l-5px',
    'mb-l-10px',
    'mb-l-15px',
    'mb-l-20px',
    'mb-l-25px',
    'mb-l-30px',
    'mb-l-35px',
    'mb-l-40px',
    'mb-l-45px',
    'mb-l-50px',
    'mb-l-55px',
    'mb-l-60px',
    'mb-l-65px',
    'mb-l-70px',
    'mb-l-75px',
    'mb-l-80px',
    'mb-l-85px',
    'mb-l-90px',
    'mb-l-95px',
    'mb-l-100px',
    'mb-l-200px',
    'mb-l-300px',
    'mb-l-400px',
    'mb-l-500px',
    'mb-l-600px',
    'mb-l-700px',
    'mb-l-800px',
    'mb-r-auto',
    'mb-r-0px',
    'mb-r-5px',
    'mb-r-10px',
    'mb-r-15px',
    'mb-r-20px',
    'mb-r-25px',
    'mb-r-30px',
    'mb-r-35px',
    'mb-r-40px',
    'mb-r-45px',
    'mb-r-50px',
    'mb-r-55px',
    'mb-r-60px',
    'mb-r-65px',
    'mb-r-70px',
    'mb-r-75px',
    'mb-r-80px',
    'mb-r-85px',
    'mb-r-90px',
    'mb-r-95px',
    'mb-r-100px',
    'mb-r-200px',
    'mb-r-300px',
    'mb-r-400px',
    'mb-r-500px',
    'mb-r-600px',
    'mb-r-700px',
    'mb-r-800px',
    'mb-b-auto',
    'mb-b-0px',
    'mb-b-5px',
    'mb-b-10px',
    'mb-b-15px',
    'mb-b-20px',
    'mb-b-25px',
    'mb-b-30px',
    'mb-b-35px',
    'mb-b-40px',
    'mb-b-45px',
    'mb-b-50px',
    'mb-b-55px',
    'mb-b-60px',
    'mb-b-65px',
    'mb-b-70px',
    'mb-b-75px',
    'mb-b-80px',
    'mb-b-85px',
    'mb-b-90px',
    'mb-b-95px',
    'mb-b-100px',
    'mb-b-200px',
    'mb-b-300px',
    'mb-b-400px',
    'mb-b-500px',
    'mb-b-600px',
    'mb-b-700px',
    'mb-b-800px',
    'mb-rotate-0',
    'mb-rotate-30',
    'mb-rotate-45',
    'mb-rotate-90',
    'mb-rotate-120',
    'mb-rotate-180',
    'mb-rotate-360',
    'mb-scale--1',
    'mb-scale--2',
    'mb-scale--3',
    'mb-scale--4',
    'mb-scale--5',
    'mb-scale--6',
    'mb-scale--7',
    'mb-scale--8',
    'mb-scale--9',
    'mb-scale-1',
    'mb-scale-2',
    'mb-scale-3',
    'mb-scale-4',
    'mb-skew-1',
    'mb-skew-2',
    'mb-skew-3',
    'mb-skew-4',
    '-mb-skew-1',
    '-mb-skew-2',
    '-mb-skew-3',
    '-mb-skew-4',
    'mb-translate-1',
    'mb-translate-2',
    'mb-translate-3',
    'mb-translate-4',
    'mb-translate-middle',
    '-mb-translate-1',
    '-mb-translate-2',
    '-mb-translate-3',
    '-mb-translate-4',
    '-mb-translate-middle',
    'mb-translateX-1',
    'mb-translateX-2',
    'mb-translateX-3',
    'mb-translateX-4',
    'mb-translateX-middle',
    '-mb-translateX-1',
    '-mb-translateX-2',
    '-mb-translateX-3',
    '-mb-translateX-4',
    '-mb-translateX-middle',
    'mb-translateY-1',
    'mb-translateY-2',
    'mb-translateY-3',
    'mb-translateY-4',
    'mb-translateY-middle',
    '-mb-translateY-1',
    '-mb-translateY-2',
    '-mb-translateY-3',
    '-mb-translateY-4',
    '-mb-translateY-middle',
    'mb-translateZ-1',
    'mb-translateZ-2',
    'mb-translateZ-3',
    'mb-translateZ-4',
    'mb-translateZ-middle',
    '-mb-translateZ-1',
    '-mb-translateZ-2',
    '-mb-translateZ-3',
    '-mb-translateZ-4',
    '-mb-translateZ-middle',
    'mb-transition--1',
    'mb-transition--2',
    'mb-transition--3',
    'mb-transition--4',
    'mb-transition--5',
    'mb-transition--6',
    'mb-transition--7',
    'mb-transition--8',
    'mb-transition--9',
    'mb-transition-1',
    'mb-transition-2',
    'mb-transition-3',
    'mb-transition-4',
    'mb-visibility-collapse',
    'mb-visibility-hidden',
    'mb-visibility-visible',
    'mb-space-wrap',
    'mb-space-nowrap',
    'mb-space-pre',
    'mb-space-pre-line',
    'mb-space-pre-wrap',
    'mb-w-5',
    'mb-w-10',
    'mb-w-15',
    'mb-w-20',
    'mb-w-25',
    'mb-w-30',
    'mb-w-33',
    'mb-w-35',
    'mb-w-40',
    'mb-w-45',
    'mb-w-50',
    'mb-w-55',
    'mb-w-60',
    'mb-w-65',
    'mb-w-70',
    'mb-w-75',
    'mb-w-80',
    'mb-w-85',
    'mb-w-90',
    'mb-w-95',
    'mb-w-full',
    'mb-w-screen',
    'mb-w-min',
    'mb-w-max',
    'mb-w-half',
    'mb-w-5px',
    'mb-w-10px',
    'mb-w-15px',
    'mb-w-20px',
    'mb-w-25px',
    'mb-w-30px',
    'mb-w-35px',
    'mb-w-40px',
    'mb-w-45px',
    'mb-w-50px',
    'mb-w-55px',
    'mb-w-60px',
    'mb-w-65px',
    'mb-w-70px',
    'mb-w-75px',
    'mb-w-80px',
    'mb-w-85px',
    'mb-w-90px',
    'mb-w-95px',
    'mb-w-100px',
    'mb-w-200px',
    'mb-w-300px',
    'mb-w-400px',
    'mb-w-500px',
    'mb-w-600px',
    'mb-w-700px',
    'mb-w-800px',  
    'mb-h-5',
    'mb-h-10',
    'mb-h-15',
    'mb-h-20',
    'mb-h-25',
    'mb-h-30',
    'mb-h-35',
    'mb-h-40',
    'mb-h-45',
    'mb-h-50',
    'mb-h-55',
    'mb-h-60',
    'mb-h-65',
    'mb-h-70',
    'mb-h-75',
    'mb-h-80',
    'mb-h-85',
    'mb-h-90',
    'mb-h-95',
    'mb-h-full',
    'mb-h-screen',
    'mb-h-min',
    'mb-h-max',
    'mb-h-half',
    'mb-h-5px',
    'mb-h-10px',
    'mb-h-15px',
    'mb-h-20px',
    'mb-h-25px',
    'mb-h-30px',
    'mb-h-35px',
    'mb-h-40px',
    'mb-h-45px',
    'mb-h-50px',
    'mb-h-55px',
    'mb-h-60px',
    'mb-h-65px',
    'mb-h-70px',
    'mb-h-75px',
    'mb-h-80px',
    'mb-h-85px',
    'mb-h-90px',
    'mb-h-95px',
    'mb-h-100px',
    'mb-h-200px',
    'mb-h-300px',
    'mb-h-400px',
    'mb-h-500px',
    'mb-h-600px',
    'mb-h-700px',
    'mb-h-800px',
    'mb-word-spacing-normal',
    'mb-word-spacing-1',
    'mb-word-spacing-2',
    'mb-word-spacing-3',
    'mb-word-spacing-4',
    'mb-word-wrap-normal',
    'mb-word-wrap-break-word',
    'mb-index--1',
    'mb-index--2',
    'mb-index--3',
    'mb-index--4',
    'mb-index-0',
    'mb-index-1',
    'mb-index-2',
    'mb-index-3',
    'mb-index-4',
    'mb-d-flex',
    'mb-d-block',
    'mb-d-flexbox',
    'mb-d-inline',
    'mb-d-table',
    'mb-d-inline-flex',
    'mb-d-inline-block',
    'mb-d-inline-flexbox',
    'mb-d-inline-table',
    'mb-d-grid',
    'mb-d-table-row',
    'mb-d-table-cell',
    'mb-d-table-column',
    'mb-d-none',
]
let valuesDisplay2 = [
    'align-content: center;',
    'align-content: flex-end;',
    'align-content: flex-start;',
    'align-content: space-evenly;',
    'align-content: space-between;',
    'align-content: space-around;',
    'align-items: center;',
    'align-items: flex-end;',
    'align-items: flex-start;',
    'align-items: stretch;',
    'align-items: baseline;',
    'align-self: center;',
    'align-self: flex-end;',
    'align-self: flex-start;',
    'align-self: stretch;',
    'align-self: baseline;',
    'align-self: auto;',
    'background-attachment: fixed',
    'background-attachment: local',
    'background-attachment: scroll',
    'background-blend-mode: color',
    'background-blend-mode: multiply',
    'background-blend-mode: screen',
    'background-blend-mode: normal',
    'background-blend-mode: darken',
    'background-blend-mode: lighten',
    'background-clip: border-box',
    'background-clip: padding-box',
    'background-clip: content-box',
    'background-clip: text',
    'background-color: rgb(70, 70, 70);',
    'background-color: rgb(238, 238, 238);',
    'background-color: rgb(255, 76, 44);',
    'background-color: rgb(2, 168, 245);',
    'background-color: rgb(42, 131, 248);',
    'background-color: rgb(255, 242, 242);',
    'background-color: transparent;',
    'background-color: rgb(141, 141, 141);',
    'background-color: rgb(253, 207, 0);',
    'background-color: #0de982;',
    'background-color: #fff;',
    'background-origin: content-box',
    'background-origin: border-box',
    'background-origin: padding-box',
    'background-position: center',
    'background-position: top',
    'background-position: left',
    'background-position: right',
    'background-position: bottom',
    'background-position: -20%',
    'background-position: -40%',
    'background-position: -60%',
    'background-position: -80%',
    'background-position: -100%',
    'background-position: 0%',
    'background-position: 20%',
    'background-position: 40%',
    'background-position: 60%',
    'background-position: 80%',
    'background-position: 100%',
    'background-repeat: repeat',
    'background-repeat: no-repeat',
    'background-size: auto',
    'background-size: contain',
    'background-size: cover',
    'background-size: -20%',
    'background-size: -40%',
    'background-size: -60%',
    'background-size: -80%',
    'background-size: -100%',
    'background-size: 0%',
    'background-size: 20%',
    'background-size: 40%',
    'background-size: 60%',
    'background-size: 80%',
    'background-size: 100%',
    'border: dotted;',
    'border: dashed;',
    'border: double',
    'border: groove;',
    'border: solid',
    'border: ridge;',
    'border: none;',
    'border-radius: 5px;',
    'border-radius: 10px;',
    'border-radius: 15px;',
    'border-radius: 20px;',
    'border-radius: 99999px;',
    'border: 1px solid black;',
    'border: 2px solid black;',
    'border: 3px solid black;',
    'border: 4px solid black;',
    'border-top: 1px solid black;',
    'border-top: 2px solid black;',
    'border-top: 3px solid black;',
    'border-top: 4px solid black;',
    'border-left: 1px solid black;',
    'border-left: 2px solid black;',
    'border-left: 3px solid black;',
    'border-left: 4px solid black;',
    'border-right: 1px solid black;',
    'border-right: 2px solid black;',
    'border-right: 3px solid black;',
    'border-right: 4px solid black;',
    'border-bottom: 1px solid black;',
    'border-bottom: 2px solid black;',
    'border-bottom: 3px solid black;',
    'border-bottom: 4px solid black;',
    'border-color: rgb(70, 70, 70);',
    'border-color: rgb(238, 238, 238);',
    'border-color: rgb(255, 76, 44);',
    'border-color: rgb(2, 168, 245);',
    'border-color: rgb(42, 131, 248);',
    'border-color: rgb(255, 242, 242);',
    'border-color: transparent;',
    'border-color: rgb(141, 141, 141);',
    'border-color: rgb(253, 207, 0);',
    'border-color: rgb(14, 253, 201);',
    'border-collapse: collapse;',
    'border-collapse: separate',
    'box-shadow: 2px 2px 2px rgb(199, 199, 199);',
    'box-shadow: 3px 3px 3px rgb(197, 197, 197);',
    'box-shadow: 3.5px 3.5px 2px rgb(197, 197, 197);',
    'box-shadow: 4px 4px 2px rgb(173, 173, 173);',
    'box-sizing: border-box;',
    'box-sizing: content-box;',
    'column-count: 1;padding: 10px;',
    'column-count: 2;padding: 10px;',
    'column-count: 3;padding: 10px;',
    'column-count: 4;padding: 10px;',
    'cursor: pointer;',
    'cursor: col-resize;',
    'cursor: context-menu;',
    'cursor: all-scroll;',
    'cursor: cell;',
    'cursor: alias;',
    'cursor: default;',
    'cursor: none;',
    'cursor: progress;',
    'text-decoration: none',
    'text-decoration: dashed;',
    'text-decoration: double;',
    'text-decoration: line-through;',
    'text-decoration: overline;',
    'text-decoration: solid;',
    'text-decoration: underline;',
    'empty-cells: show',
    'empty-cells: hidden;',
    'filter: blur(0px);',
    'filter: blur(2px);',
    'filter: blur(4px);',
    'filter: blur(6px);',
    'filter: blur(8px);',
    'filter: blur(10px);',
    'filter: gryscale(0%);',
    'filter: gryscale(20%);',
    'filter: gryscale(40%);',
    'filter: gryscale(60%);',
    'filter: gryscale(80%);',
    'filter: gryscale(100%);',
    'filter: saturate(0%);',
    'filter: saturate(20%);',
    'filter: saturate(40%);',
    'filter: saturate(60%);',
    'filter: saturate(80%);',
    'filter: saturate(100%);',
    'filter: brightness(0%);',
    'filter: brightness(20%);',
    'filter: brightness(40%);',
    'filter: brightness(60%);',
    'filter: brightness(80%);',
    'filter: brightness(100%);',
    'filter: contrast(0%);',
    'filter: contrast(20%);',
    'filter: contrast(40%);',
    'filter: contrast(60%);',
    'filter: contrast(80%);',
    'filter: contrast(100%);',
    'flex: 0.20;',
    'flex: 0.40;',
    'flex: 0.60;',
    'flex: 0.80;',
    'flex: 0;',
    'flex: 1;',
    'flex: 2;',
    'flex: 3;',
    'flex: 4;',
    'flex: auto;',
    'flex: content;',
    'flex: none;',
    'flex-basis: auto;',
    'flex-basis: content;',
    'flex-wrap: wrap;',
    'flex-wrap: nowrap;',
    'flex-wrap: wrap-reverse;',
    'flex-direction: column;',
    'flex-direction: column-reverse;',
    'flex-direction: row;',
    'flex-direction: row-reverse;',
    'flex-shrink: 1;',
    'flex-shrink: 2;',
    'flex-shrink: 3;',
    'flex-shrink: 4;',
    'float: left;',
    'float: right;',
    'float: none;',
    'float: inline-end;',
    'float: inline-start;',
    'font-weight: normal;',
    'font-weight: bold;',
    'font-weight: 100;',
    'font-weight: 200;',
    'font-weight: 300;',
    'font-weight: 400;',
    'font-weight: 500;',
    'font-weight: 600;',
    'font-weight: 700;',
    'font-weight: 800;',
    'font-style: italic;',
    'font-style: normal;',
    'font-style: oblique;',
    'font-size: 15px;',
    'font-size: 20px;',
    'font-size: 25px;',
    'font-size: 30px;',
    'font-size: 10px;',
    'font-size: 12px;',
    'font-size: 14px;',
    'font-size: 16px;',
    'font-size: 18px;',
    'font-size: 20px;',
    'font-size: 22px;',
    'font-size: 24px;',
    'font-size: 26px;',
    'font-size: 28px;',
    'font-size: 30px;',
    'font-size: 32px;',
    'font-size: 34px;',
    'font-size: 36px;',
    'font-size: 38px;',
    'font-size: 40px;',
    'font-size: 42px;',
    'font-size: 44px;',
    'font-size: 46px;',
    'font-size: 48px;',
    'font-size: 50px;',
    'font-size: 52px;',
    'font-size: 54px;',
    'font-size: 56px;',
    'font-size: 58px;',
    'font-size: 60px;',
    'font-size: 62px;',
    'font-size: 64px;',
    'font-size: 66px;',
    'font-size: 68px;',
    'font-size: 70px;',
    `grid-template-columns: auto; display: flex; flex-wrap: wrap;flex-direction: column;padding: 10px;box-sizing: border-box;`,
    `grid-template-columns: auto auto; display: flex; flex-wrap: wrap;flex-direction: column;box-sizing: border-box;`,
    `grid-template-columns: auto auto auto; display: flex; flex-wrap: wrap;flex-direction: column;box-sizing: border-box;`,
    `grid-template-columns: auto auto auto auto; display: flex; flex-wrap: wrap;flex-direction: column;box-sizing: border-box;`,
    `grid-gap: 5px`,
    `grid-gap: 10px`,
    `grid-gap: 15px`,
    `grid-gap: 20px`,
    `padding: 20px 0; 
     flex: 1; `,
    'justify-content: center',
    'justify-content: left',
    'justify-content: right;',
    'justify-content: safe;',
    'justify-content: unsafe;',
    'justify-content: start',
    'justify-content: end',
    'justify-content: flex-start;',
    'justify-content: flex-end;',
    'justify-content: space-between;',
    'justify-content: space-around',
    'justify-content: space-evenly',
    'justify-content: stretch;',
    'justify-content: last baseline;',
    'justify-items: auto',
    'justify-items: start',
    'justify-items: end;',
    'justify-items: center;',
    'justify-items: flex-end;',
    'justify-items: flex-start;',
    'justify-self: auto',
    'justify-self: start',
    'justify-self: end;',
    'justify-self: center;',
    'justify-self: stretch;',
    'letter-spacing: normal',
    'letter-spacing: 10px',
    'letter-spacing: 15px',
    'letter-spacing: 20px',
    'letter-spacing: 25px',
    'line-height: .75rem;',
    'line-height: 1rem;',
    'line-height: 1.25rem;',
    'line-height: 1.5rem;',
    'line-height: 1;',
    'line-height: 1.25;',
    'line-height: 1.375;',
    'line-height: 1.5;',
    'line-height: 1.625;',
    'line-height: 2;',
    'list-style-type: none',
    'list-style-type: square',
    'list-style-type: circle;',
    'list-style-type: desc;',
    'list-style-type: decimal;',
    'list-style-type: armenian',
    'list-style-type: georgian',
    'margin: auto;',
    'margin: 0px;',
    'margin: 5px;',
    'margin: 10px;',
    'margin: 15px;',
    'margin: 20px;',
    'margin: 25px;',
    'margin: 30px;',
    'margin: 35px;',
    'margin: 40px;',
    'margin: 45px;',
    'margin: 50px;',
    'margin: 55px;',
    'margin: 60px;',
    'margin: 65px;',
    'margin: 70px;',
    'margin: 75px;',
    'margin: 80px;',
    'margin: 85px;',
    'margin: 90px;',
    'margin: 95px;',
    'margin: 100px;',
    'margin: 200px;',
    'margin: 300px;',
    'margin: 400px;',
    'margin: 500px;',
    'margin: 600px;',
    'margin: 700px;',
    'margin: 800px;',
    'margin-top: auto;',
    'margin-top: 0px;',
    'margin-top: 5px;',
    'margin-top: 10px;',
    'margin-top: 15px;',
    'margin-top: 20px;',
    'margin-top: 25px;',
    'margin-top: 30px;',
    'margin-top: 35px;',
    'margin-top: 40px;',
    'margin-top: 45px;',
    'margin-top: 50px;',
    'margin-top: 55px;',
    'margin-top: 60px;',
    'margin-top: 65px;',
    'margin-top: 70px;',
    'margin-top: 75px;',
    'margin-top: 80px;',
    'margin-top: 85px;',
    'margin-top: 90px;',
    'margin-top: 95px;',
    'margin-top: 100px;',
    'margin-top: 200px;',
    'margin-top: 300px;',
    'margin-top: 400px;',
    'margin-top: 500px;',
    'margin-top: 600px;',
    'margin-top: 700px;',
    'margin-top: 800px;',
    'margin-left: auto;',
    'margin-left: 0px;',
    'margin-left: 5px;',
    'margin-left: 10px;',
    'margin-left: 15px;',
    'margin-left: 20px;',
    'margin-left: 25px;',
    'margin-left: 30px;',
    'margin-left: 35px;',
    'margin-left: 40px;',
    'margin-left: 45px;',
    'margin-left: 50px;',
    'margin-left: 55px;',
    'margin-left: 60px;',
    'margin-left: 65px;',
    'margin-left: 70px;',
    'margin-left: 75px;',
    'margin-left: 80px;',
    'margin-left: 85px;',
    'margin-left: 90px;',
    'margin-left: 95px;',
    'margin-left: 100px;',
    'margin-left: 200px;',
    'margin-left: 300px;',
    'margin-left: 400px;',
    'margin-left: 500px;',
    'margin-left: 600px;',
    'margin-left: 700px;',
    'margin-left: 800px;',
    'margin-right: auto;',
    'margin-right: 0px;',
    'margin-right: 5px;',
    'margin-right: 10px;',
    'margin-right: 15px;',
    'margin-right: 20px;',
    'margin-right: 25px;',
    'margin-right: 30px;',
    'margin-right: 35px;',
    'margin-right: 40px;',
    'margin-right: 45px;',
    'margin-right: 50px;',
    'margin-right: 55px;',
    'margin-right: 60px;',
    'margin-right: 65px;',
    'margin-right: 70px;',
    'margin-right: 75px;',
    'margin-right: 80px;',
    'margin-right: 85px;',
    'margin-right: 90px;',
    'margin-right: 95px;',
    'margin-right: 100px;',
    'margin-right: 200px;',
    'margin-right: 300px;',
    'margin-right: 400px;',
    'margin-right: 500px;',
    'margin-right: 600px;',
    'margin-right: 700px;',
    'margin-right: 800px;',
    'margin-bottom: auto;',
    'margin-bottom: 0px;',
    'margin-bottom: 5px;',
    'margin-bottom: 10px;',
    'margin-bottom: 15px;',
    'margin-bottom: 20px;',
    'margin-bottom: 25px;',
    'margin-bottom: 30px;',
    'margin-bottom: 35px;',
    'margin-bottom: 40px;',
    'margin-bottom: 45px;',
    'margin-bottom: 50px;',
    'margin-bottom: 55px;',
    'margin-bottom: 60px;',
    'margin-bottom: 65px;',
    'margin-bottom: 70px;',
    'margin-bottom: 75px;',
    'margin-bottom: 80px;',
    'margin-bottom: 85px;',
    'margin-bottom: 90px;',
    'margin-bottom: 95px;',
    'margin-bottom: 100px;',
    'margin-bottom: 200px;',
    'margin-bottom: 300px;',
    'margin-bottom: 400px;',
    'margin-bottom: 500px;',
    'margin-bottom: 600px;',
    'margin-bottom: 700px;',
    'margin-bottom: 800px;',
    'opacity: 0%',
    'opacity: 25%',
    'opacity: 50%;',
    'opacity: 75%;',
    'opacity: 100%;',
    'outline: dotted;',
    'outline: dashed;',
    'outline: double',
    'outline: groove;',
    'outline: solid',
    'outline: ridge;',
    'outline: none;',
    'outline: 1px;',
    'outline: 2px;',
    'outline: 3px;',
    'outline: 4px;',
    'outline-top: 1px;',
    'outline-top: 2px;',
    'outline-top: 3px;',
    'outline-top: 4px;',
    'outline-left: 1px;',
    'outline-left: 2px;',
    'outline-left: 3px;',
    'outline-left: 4px;',
    'outline-right: 1px;',
    'outline-right: 2px;',
    'outline-right: 3px;',
    'outline-right: 4px;',
    'outline-bottom: 1px;',
    'outline-bottom: 2px;',
    'outline-bottom: 3px;',
    'outline-bottom: 4px;',
    'outline-color: rgb(70, 70, 70);',
    'outline-color: rgb(238, 238, 238);',
    'outline-color: rgb(255, 76, 44);',
    'outline-color: rgb(2, 168, 245);',
    'outline-color: rgb(42, 131, 248);',
    'outline-color: rgb(255, 242, 242);',
    'outline-color: transparent;',
    'outline-color: rgb(141, 141, 141);',
    'outline-color: rgb(253, 207, 0);',
    'outline-color: rgb(11, 245, 101);',
    'overflow: hidden;',
    'overflow: scroll;',
    'overflow: auto;',
    'overflow: visible;',
    'overflow-x: hidden;',
    'overflow-x: scroll;',
    'overflow-x: auto;',
    'overflow-x: visible;',
    'overflow-y: hidden;',
    'overflow-y: scroll;',
    'overflow-y: auto;',
    'overflow-y: visible;',
    'overflow-wrap: break-word;',
    'overflow-wrap: normal;',
    'overflow: moz-hidden-unscrollable;',
    'padding: auto;',
    'padding: 0px;',
    'padding: 5px;',
    'padding: 10px;',
    'padding: 15px;',
    'padding: 20px;',
    'padding: 25px;',
    'padding: 30px;',
    'padding: 35px;',
    'padding: 40px;',
    'padding: 45px;',
    'padding: 50px;',
    'padding: 55px;',
    'padding: 60px;',
    'padding: 65px;',
    'padding: 70px;',
    'padding: 75px;',
    'padding: 80px;',
    'padding: 85px;',
    'padding: 90px;',
    'padding: 95px;',
    'padding: 100px;',
    'padding: 200px;',
    'padding: 300px;',
    'padding: 400px;',
    'padding: 500px;',
    'padding: 600px;',
    'padding: 700px;',
    'padding: 800px;',
    'padding-top: auto;',
    'padding-top: 0px;',
    'padding-top: 5px;',
    'padding-top: 10px;',
    'padding-top: 15px;',
    'padding-top: 20px;',
    'padding-top: 25px;',
    'padding-top: 30px;',
    'padding-top: 35px;',
    'padding-top: 40px;',
    'padding-top: 45px;',
    'padding-top: 50px;',
    'padding-top: 55px;',
    'padding-top: 60px;',
    'padding-top: 65px;',
    'padding-top: 70px;',
    'padding-top: 75px;',
    'padding-top: 80px;',
    'padding-top: 85px;',
    'padding-top: 90px;',
    'padding-top: 95px;',
    'padding-top: 100px;',
    'padding-top: 200px;',
    'padding-top: 300px;',
    'padding-top: 400px;',
    'padding-top: 500px;',
    'padding-top: 600px;',
    'padding-top: 700px;',
    'padding-top: 800px;',
    'padding-left: auto;',
    'padding-left: 0px;',
    'padding-left: 5px;',
    'padding-left: 10px;',
    'padding-left: 15px;',
    'padding-left: 20px;',
    'padding-left: 25px;',
    'padding-left: 30px;',
    'padding-left: 35px;',
    'padding-left: 40px;',
    'padding-left: 45px;',
    'padding-left: 50px;',
    'padding-left: 55px;',
    'padding-left: 60px;',
    'padding-left: 65px;',
    'padding-left: 70px;',
    'padding-left: 75px;',
    'padding-left: 80px;',
    'padding-left: 85px;',
    'padding-left: 90px;',
    'padding-left: 95px;',
    'padding-left: 100px;',
    'padding-left: 200px;',
    'padding-left: 300px;',
    'padding-left: 400px;',
    'padding-left: 500px;',
    'padding-left: 600px;',
    'padding-left: 700px;',
    'padding-left: 800px;',
    'padding-right: auto;',
    'padding-right: 0px;',
    'padding-right: 5px;',
    'padding-right: 10px;',
    'padding-right: 15px;',
    'padding-right: 20px;',
    'padding-right: 25px;',
    'padding-right: 30px;',
    'padding-right: 35px;',
    'padding-right: 40px;',
    'padding-right: 45px;',
    'padding-right: 50px;',
    'padding-right: 55px;',
    'padding-right: 60px;',
    'padding-right: 65px;',
    'padding-right: 70px;',
    'padding-right: 75px;',
    'padding-right: 80px;',
    'padding-right: 85px;',
    'padding-right: 90px;',
    'padding-right: 95px;',
    'padding-right: 100px;',
    'padding-right: 200px;',
    'padding-right: 300px;',
    'padding-right: 400px;',
    'padding-right: 500px;',
    'padding-right: 600px;',
    'padding-right: 700px;',
    'padding-right: 800px;',
    'padding-bottom: auto;',
    'padding-bottom: 0px;',
    'padding-bottom: 5px;',
    'padding-bottom: 10px;',
    'padding-bottom: 15px;',
    'padding-bottom: 20px;',
    'padding-bottom: 25px;',
    'padding-bottom: 30px;',
    'padding-bottom: 35px;',
    'padding-bottom: 40px;',
    'padding-bottom: 45px;',
    'padding-bottom: 50px;',
    'padding-bottom: 55px;',
    'padding-bottom: 60px;',
    'padding-bottom: 65px;',
    'padding-bottom: 70px;',
    'padding-bottom: 75px;',
    'padding-bottom: 80px;',
    'padding-bottom: 85px;',
    'padding-bottom: 90px;',
    'padding-bottom: 95px;',
    'padding-bottom: 100px;',
    'padding-bottom: 200px;',
    'padding-bottom: 300px;',
    'padding-bottom: 400px;',
    'padding-bottom: 500px;',
    'padding-bottom: 600px;',
    'padding-bottom: 700px;',
    'padding-bottom: 800px;',
    'perspective: -20px;',
    'perspective: -40px;',
    'perspective: -60px;',
    'perspective: -80px;',
    'perspective: none;',
    'perspective: 20px;',
    'perspective: 40px;',
    'perspective: 60px;',
    'perspective: 80px;',
    'perspective-origin: top;',
    'perspective-origin: bottom;',
    'perspective-origin: left;',
    'perspective-origin: right;',
    'perspective-origin: center;',
    'position: relative;',
    'position: absolute;',
    'position: fixed;',
    'position: sticky;',
    'position: static;',
    'text-align: center;',
    'text-align: left;',
    'text-align: right;',
    'text-align: justify;',
    'color: black;',
    'color: rgb(238, 238, 238);',
    'color: rgb(255, 76, 44);',
    'color: rgb(2, 168, 245);',
    'color: rgb(42, 131, 248);',
    'color: rgb(255, 242, 242);',
    'color: transparent;',
    'color: rgb(141, 141, 141);',
    'color: rgb(253, 207, 0);',
    'color: #0de982;',
    'color: #fff;',
    'text-shadow: 2px 2px 2px rgb(199, 199, 199);',
    'text-shadow: 3px 3px 3px rgb(197, 197, 197);',
    'text-shadow: 3.5px 3.5px 2px rgb(197, 197, 197);',
    'text-shadow: 4px 4px 2px rgb(173, 173, 173);',
    'text-transform: uppercase;',
    'text-transform: lowercase;',
    'text-transform: capitalize;',
    'text-transform: none;',
    'top: auto;',
    'top: 0px;',
    'top: 5px;',
    'top: 10px;',
    'top: 15px;',
    'top: 20px;',
    'top: 25px;',
    'top: 30px;',
    'top: 35px;',
    'top: 40px;',
    'top: 45px;',
    'top: 50px;',
    'top: 55px;',
    'top: 60px;',
    'top: 65px;',
    'top: 70px;',
    'top: 75px;',
    'top: 80px;',
    'top: 85px;',
    'top: 90px;',
    'top: 95px;',
    'top: 100px;',
    'top: 200px;',
    'top: 300px;',
    'top: 400px;',
    'top: 500px;',
    'top: 600px;',
    'top: 700px;',
    'top: 800px;',
    'left: auto;',
    'left: 0px;',
    'left: 5px;',
    'left: 10px;',
    'left: 15px;',
    'left: 20px;',
    'left: 25px;',
    'left: 30px;',
    'left: 35px;',
    'left: 40px;',
    'left: 45px;',
    'left: 50px;',
    'left: 55px;',
    'left: 60px;',
    'left: 65px;',
    'left: 70px;',
    'left: 75px;',
    'left: 80px;',
    'left: 85px;',
    'left: 90px;',
    'left: 95px;',
    'left: 100px;',
    'left: 200px;',
    'left: 300px;',
    'left: 400px;',
    'left: 500px;',
    'left: 600px;',
    'left: 700px;',
    'left: 800px;',
    'right: auto;',
    'right: 0px;',
    'right: 5px;',
    'right: 10px;',
    'right: 15px;',
    'right: 20px;',
    'right: 25px;',
    'right: 30px;',
    'right: 35px;',
    'right: 40px;',
    'right: 45px;',
    'right: 50px;',
    'right: 55px;',
    'right: 60px;',
    'right: 65px;',
    'right: 70px;',
    'right: 75px;',
    'right: 80px;',
    'right: 85px;',
    'right: 90px;',
    'right: 95px;',
    'right: 100px;',
    'right: 200px;',
    'right: 300px;',
    'right: 400px;',
    'right: 500px;',
    'right: 600px;',
    'right: 700px;',
    'right: 800px;',
    'bottom: auto;',
    'bottom: 0px;',
    'bottom: 5px;',
    'bottom: 10px;',
    'bottom: 15px;',
    'bottom: 20px;',
    'bottom: 25px;',
    'bottom: 30px;',
    'bottom: 35px;',
    'bottom: 40px;',
    'bottom: 45px;',
    'bottom: 50px;',
    'bottom: 55px;',
    'bottom: 60px;',
    'bottom: 65px;',
    'bottom: 70px;',
    'bottom: 75px;',
    'bottom: 80px;',
    'bottom: 85px;',
    'bottom: 90px;',
    'bottom: 95px;',
    'bottom: 100px;',
    'bottom: 200px;',
    'bottom: 300px;',
    'bottom: 400px;',
    'bottom: 500px;',
    'bottom: 600px;',
    'bottom: 700px;',
    'bottom: 800px;',
    'transform: rotate(0deg)',
    'transform: rotate(30deg)',
    'transform: rotate(45deg)',
    'transform: rotate(90deg)',
    'transform: rotate(120deg)',
    'transform: rotate(180deg)',
    'transform: rotate(360deg)',
    'transform: scale(0.1)',
    'transform: scale(0.2)',
    'transform: scale(0.3)',
    'transform: scale(0.4)',
    'transform: scale(0.5)',
    'transform: scale(0.6)',
    'transform: scale(0.7)',
    'transform: scale(0.8)',
    'transform: scale(0.9)',
    'transform: scale(1)',
    'transform: scale(2)',
    'transform: scale(3)',
    'transform: scale(4)',
    'transform: skew(5deg)',
    'transform: skew(10deg)',
    'transform: skew(15deg)',
    'transform: skew(20deg)',
    'transform: skew(-5deg)',
    'transform: skew(-10deg)',
    'transform: skew(-15deg)',
    'transform: skew(-20deg)',
    'transform: translate(10%)',
    'transform: translate(20%)',
    'transform: translate(30%)',
    'transform: translate(40%)',
    'transform: translate(50%)',
    'transform: translate(-10%)',
    'transform: translate(-20%)',
    'transform: translate(-30%)',
    'transform: translate(-40%)',
    'transform: translate(-50%)',
    'transform: translateX(10%)',
    'transform: translateX(20%)',
    'transform: translateX(30%)',
    'transform: translateX(40%)',
    'transform: translateX(50%)',
    'transform: translateX(-10%)',
    'transform: translateX(-20%)',
    'transform: translateX(-30%)',
    'transform: translateX(-40%)',
    'transform: translateX(-50%)',
    'transform: translateY(10%)',
    'transform: translateY(20%)',
    'transform: translateY(30%)',
    'transform: translateY(40%)',
    'transform: translateY(50%)',
    'transform: translateY(-10%)',
    'transform: translateY(-20%)',
    'transform: translateY(-30%)',
    'transform: translateY(-40%)',
    'transform: translateY(-50%)',
    'transform: translateZ(10%)',
    'transform: translateZ(20%)',
    'transform: translateZ(30%)',
    'transform: translateZ(40%)',
    'transform: translateZ(50%)',
    'transform: translateZ(-10%)',
    'transform: translateZ(-20%)',
    'transform: translateZ(-30%)',
    'transform: translateZ(-40%)',
    'transform: translateZ(-50%)',
    'transition: 0.1s;',
    'transition: 0.2s;',
    'transition: 0.3s;',
    'transition: 0.4s;',
    'transition: 0.5s;',
    'transition: 0.6s;',
    'transition: 0.7s',
    'transition: 0.8s;',
    'transition: 0.9s;',
    'transition: 1s;',
    'transition: 2s;',
    'transition: 3s;',
    'transition: 4s;',
    'visibility: collapse;',
    'visibility: hidden;',
    'visibility: visible;',
    'white-space: collapse;',
    'white-space: hidden;',
    'white-space: pre;',
    'white-space: pre-line;',
    'white-space: pre-wrap;',
    'width: 5%;',
    'width: 10%;',
    'width: 15%;',
    'width: 20%;',
    'width: 25%;',
    'width: 30%;',
    'width: 33%;',
    'width: 35%;',
    'width: 40%;',
    'width: 45%;',
    'width: 50%;',
    'width: 55%;',
    'width: 60%;',
    'width: 65%;',
    'width: 70%;',
    'width: 75%;',
    'width: 80%;',
    'width: 85%;',
    'width: 90%;',
    'width: 95%;',
    'width: 100%;',
    'width: 100vw;',
    'width: min-content;',
    'width: max-content;',
    'width: 50%;',
    'width: 5px;',
    'width: 10px;',
    'width: 15px;',
    'width: 20px;',
    'width: 25px;',
    'width: 30px;',
    'width: 35px;',
    'width: 40px;',
    'width: 45px;',
    'width: 50px;',
    'width: 55px;',
    'width: 60px;',
    'width: 65px;',
    'width: 70px;',
    'width: 75px;',
    'width: 80px;',
    'width: 85px;',
    'width: 90px;',
    'width: 95px;',
    'width: 100px;',
    'width: 200px;',
    'width: 300px;',
    'width: 400px;',
    'width: 500px;',
    'width: 600px;',
    'width: 700px;',
    'width: 800px;',
    'height: 5%;',
    'height: 10%;',
    'height: 15%;',
    'height: 20%;',
    'height: 25%;',
    'height: 30%;',
    'height: 35%;',
    'height: 40%;',
    'height: 45%;',
    'height: 50%;',
    'height: 55%;',
    'height: 60%;',
    'height: 65%;',
    'height: 70%;',
    'height: 75%;',
    'height: 80%;',
    'height: 85%;',
    'height: 90%;',
    'height: 95%;',
    'height: 100%;',
    'height: 100vh;',
    'height: min-content;',
    'height: max-content;',
    'height: 50%;',
    'height: 5px;',
    'height: 10px;',
    'height: 15px;',
    'height: 20px;',
    'height: 25px;',
    'height: 30px;',
    'height: 35px;',
    'height: 40px;',
    'height: 45px;',
    'height: 50px;',
    'height: 55px;',
    'height: 60px;',
    'height: 65px;',
    'height: 70px;',
    'height: 75px;',
    'height: 80px;',
    'height: 85px;',
    'height: 90px;',
    'height: 95px;',
    'height: 100px;',
    'height: 200px;',
    'height: 300px;',
    'height: 400px;',
    'height: 500px;',
    'height: 600px;',
    'height: 700px;',
    'height: 800px;',
    'word-spacing: normal',
    'word-spacing: 10px',
    'word-spacing: 20px',
    'word-spacing: 30px',
    'word-spacing: 40px',
    'word-wrap: normal',
    'word-wrap: break-word',
    'z-index: -1;',
    'z-index: -2;',
    'z-index: -3;',
    'z-index: -4;',
    'z-index: 0;',
    'z-index: 1;',
    'z-index: 2;',
    'z-index: 3;',
    'z-index: 4;',
    'display: flex',
    'display: block;',
    'display: flexbox;',
    'display: inline;',
    'display: table',
    'display: inline-flex;',
    'display: inline-block;',
    'display: inline-flexbox;',
    'display: inline-table;',
    'display: grid;',
    'display: table-row;',
    'display: table-cell;',
    'display: table-column;',
    'display: none;',
]

    for (var i = 0; i <= propertiesDisplay2.length; i++) {
            if (document.querySelector(`.${propertiesDisplay2[i]}`) && !document.querySelector('style').innerText.includes(propertiesDisplay2[i])) {
                let styles = ` 
                    @media screen and (min-width: 300px) and (max-width: 600px) {
                        .${propertiesDisplay2[i]} { 
                            ${valuesDisplay2[i]}
                        }
                    }`;
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }

let propertiesDisplay3 = [
    'tb-content-center',
    'tb-content-flex-end',
    'tb-content-flex-start',
    'tb-content-evenly',
    'tb-content-between',
    'tb-content-around',
    'tb-items-center',
    'tb-items-flex-end',
    'tb-items-flex-start',
    'tb-items-stretch',
    'tb-items-baseline',
    'tb-self-center',
    'tb-self-flex-end',
    'tb-self-flex-start',
    'tb-self-stretch',
    'tb-self-baseline',
    'tb-self-auto',
    'tb-attachment-fixed',
    'tb-attachment-local',
    'tb-attachment-scroll',
    'tb-bg-blend-color',
    'tb-bg-blend-multiply',
    'tb-bg-blend-screen',
    'tb-bg-blend-normal',
    'tb-bg-blend-darken',
    'tb-bg-blend-lighten',
    'tb-bg-clip-border',
    'tb-bg-clip-padding',
    'tb-bg-clip-content',
    'tb-bg-clip-text',
    'tb-bg-dark',
    'tb-bg-light',
    'tb-bg-danger',
    'tb-bg-info',
    'tb-bg-primary',
    'tb-bg-smooth',
    'tb-bg-transparent',
    'tb-bg-secondary',
    'tb-bg-warning',
    'tb-bg-green',
    'tb-bg-white',
    'tb-bg-content-box',
    'tb-bg-border-box',
    'tb-bg-padding-box',
    'tb-bg-post-center',
    'tb-bg-post-top',
    'tb-bg-post-left',
    'tb-bg-post-right',
    'tb-bg-post-bottom',
    'tb-bg-post--1',
    'tb-bg-post--2',
    'tb-bg-post--3',
    'tb-bg-post--4',
    'tb-bg-post--full',
    'tb-bg-post-0',
    'tb-bg-post-1',
    'tb-bg-post-2',
    'tb-bg-post-3',
    'tb-bg-post-4',
    'tb-bg-post-full',
    'tb-bg-rpt-repeat',
    'tb-bg-rpt-norepeat',
    'tb-bg-sz-auto',
    'tb-bg-sz-contain',
    'tb-bg-sz-cover',
    'tb-bg-sz--1',
    'tb-bg-sz--2',
    'tb-bg-sz--3',
    'tb-bg-sz--4',
    'tb-bg-sz--full',
    'tb-bg-sz-0',
    'tb-bg-sz-1',
    'tb-bg-sz-2',
    'tb-bg-sz-3',
    'tb-bg-sz-4',
    'tb-bg-sz-full',
    'tb-style-dotted',
    'tb-style-dashed',
    'tb-style-double',
    'tb-style-groove',
    'tb-style-solid',
    'tb-style-ridge',
    'tb-style-hidden',
    'tb-radius-sm',
    'tb-radius-md',
    'tb-radius-lg',
    'tb-radius-xl',
    'tb-radius-full',
    'tb-border-1',
    'tb-border-2',
    'tb-border-3',
    'tb-border-4',
    'tb-border-t-1',
    'tb-border-t-2',
    'tb-border-t-3',
    'tb-border-t-4',
    'tb-border-l-1',
    'tb-border-l-2',
    'tb-border-l-3',
    'tb-border-l-4',
    'tb-border-r-1',
    'tb-border-r-2',
    'tb-border-r-3',
    'tb-border-r-4',
    'tb-border-b-1',
    'tb-border-b-2',
    'tb-border-b-3',
    'tb-border-b-4',
    'tb-border-clr-dark',
    'tb-border-clr-light',
    'tb-border-clr-danger',
    'tb-border-clr-info',
    'tb-border-clr-primary',
    'tb-border-clr-smooth',
    'tb-border-clr-transparent',
    'tb-border-clr-secondary',
    'tb-border-clr-warning',
    'tb-border-clr-green',
    'tb-border-type-collapse',
    'tb-border-type-separate',
    'tb-box-shadow-sm',
    'tb-box-shadow-md',
    'tb-box-shadow-lg',
    'tb-box-shadow-xl',
    'tb-box-border',
    'tb-box-content',
    'tb-col-1',
    'tb-col-2',
    'tb-col-3',
    'tb-col-4',
    'tb-cursor-pointer',
    'tb-cursor-col-resize',
    'tb-cursor-context-menu ',
    'tb-cursor-all-scroll',
    'tb-cursor-cell',
    'tb-cursor-alias',
    'tb-cursor-default',
    'tb-cursor-none',
    'tb-cursor-progress',
    'tb-decoration-none',
    'tb-decoration-dashed',
    'tb-decoration-double',
    'tb-decoration-through',
    'tb-decoration-overline',
    'tb-decoration-solid',
    'tb-decoration-underline',
    'tb-cells-show',
    'tb-cells-hidden',
    'tb-blur-0',
    'tb-blur-1',
    'tb-blur-2',
    'tb-blur-3',
    'tb-blur-4',
    'tb-blur-full',
    'tb-gryscale-0',
    'tb-gryscale-1',
    'tb-gryscale-2',
    'tb-gryscale-3',
    'tb-gryscale-4',
    'tb-gryscale-full',
    'tb-saturate-0',
    'tb-saturate-1',
    'tb-saturate-2',
    'tb-saturate-3',
    'tb-saturate-4',
    'tb-saturate-full',
    'tb-brightness-0',
    'tb-brightness-1',
    'tb-brightness-2',
    'tb-brightness-3',
    'tb-brightness-4',
    'tb-brightness-full',
    'tb-contrast-0',
    'tb-contrast-1',
    'tb-contrast-2',
    'tb-contrast-3',
    'tb-contrast-4',
    'tb-contrast-full',
    'tb-flex--1',
    'tb-flex--2',
    'tb-flex--3',
    'tb-flex--4',
    'tb-flex-0',
    'tb-flex-1',
    'tb-flex-2',
    'tb-flex-3',
    'tb-flex-4',
    'tb-flex-auto',
    'tb-flex-content',
    'tb-flex-none',
    'tb-flex-basis-auto',
    'tb-flex-basis-content',
    'tb-wrap-wrap',
    'tb-wrap-nowrap',
    'tb-wrap-wrap-reverse',
    'tb-direction-column',
    'tb-direction-column-reverse',
    'tb-direction-row',
    'tb-direction-row-reverse',
    'tb-shrink-1',
    'tb-shrink-2',
    'tb-shrink-3',
    'tb-shrink-4',
    'tb-float-left',
    'tb-float-right',
    'tb-float-none',
    'tb-float-inline-end',
    'tb-float-inline-start',
    'tb-weight-normal',
    'tb-weight-bold',
    'tb-weight-100',
    'tb-weight-200',
    'tb-weight-300',
    'tb-weight-400',
    'tb-weight-500',
    'tb-weight-600',
    'tb-weight-700',
    'tb-weight-800',
    'tb-font-style-italic',
    'tb-font-style-normal',
    'tb-font-style-oblique',
    'tb-font-sz-sm',
    'tb-font-sz-md',
    'tb-font-sz-lg',
    'tb-font-sz-xl',
    'tb-font-sz-10px',
    'tb-font-sz-12px',
    'tb-font-sz-14px',
    'tb-font-sz-16px',
    'tb-font-sz-18px',
    'tb-font-sz-20px',
    'tb-font-sz-22px',
    'tb-font-sz-24px',
    'tb-font-sz-26px',
    'tb-font-sz-28px',
    'tb-font-sz-30px',
    'tb-font-sz-32px',
    'tb-font-sz-34px',
    'tb-font-sz-36px',
    'tb-font-sz-38px',
    'tb-font-sz-40px',
    'tb-font-sz-42px',
    'tb-font-sz-44px',
    'tb-font-sz-46px',
    'tb-font-sz-48px',
    'tb-font-sz-50px',
    'tb-font-sz-52px',
    'tb-font-sz-54px',
    'tb-font-sz-56px',
    'tb-font-sz-58px',
    'tb-font-sz-60px',
    'tb-font-sz-62px',
    'tb-font-sz-64px',
    'tb-font-sz-66px',
    'tb-font-sz-68px',
    'tb-font-sz-70px',
    'tb-row-1',
    'tb-row-2',
    'tb-row-3',
    'tb-row-4',
    'tb-grid-gap-1',
    'tb-grid-gap-2',
    'tb-grid-gap-3',
    'tb-grid-gap-4',
    'tb-col',
    'tb-justify-center',
    'tb-justify-left',
    'tb-justify-right',
    'tb-justify-safe',
    'tb-justify-unsafe',
    'tb-justify-start',
    'tb-justify-end',
    'tb-justify-flex-start',
    'tb-justify-flex-end',
    'tb-justify-between',
    'tb-justify-around',
    'tb-justify-evenly',
    'tb-justify-stretch',
    'tb-justify-last-baseline',
    'tb-just-items-auto',
    'tb-just-items-start',
    'tb-just-items-end',
    'tb-just-items-center',
    'tb-just-items-flex-end',
    'tb-just-items-flex-start',
    'tb-just-self-auto',
    'tb-just-self-start',
    'tb-just-self-end',
    'tb-just-self-center',
    'tb-just-self-stretch',
    'tb-let-spacing-normal',
    'tb-let-spacing-1',
    'tb-let-spacing-2',
    'tb-let-spacing-3',
    'tb-let-spacing-4',
    'tb-leading-1',
    'tb-leading-2',
    'tb-leading-3',
    'tb-leading-4',
    'tb-leading-none',
    'tb-leading-tight',
    'tb-leading-snug',
    'tb-leading-normal',
    'tb-leading-relaxed',
    'tb-leading-loose',
    'tb-list-none',
    'tb-list-square',
    'tb-list-circle',
    'tb-list-desc',
    'tb-list-decimal',
    'tb-list-armenian',
    'tb-list-georgian',
    'tb-m-auto',
    'tb-m-0px',
    'tb-m-5px',
    'tb-m-10px',
    'tb-m-15px',
    'tb-m-20px',
    'tb-m-25px',
    'tb-m-30px',
    'tb-m-35px',
    'tb-m-40px',
    'tb-m-45px',
    'tb-m-50px',
    'tb-m-55px',
    'tb-m-60px',
    'tb-m-65px',
    'tb-m-70px',
    'tb-m-75px',
    'tb-m-80px',
    'tb-m-85px',
    'tb-m-90px',
    'tb-m-95px',
    'tb-m-100px',
    'tb-m-200px',
    'tb-m-300px',
    'tb-m-400px',
    'tb-m-500px',
    'tb-m-600px',
    'tb-m-700px',
    'tb-m-800px',
    'tb-mt-auto',
    'tb-mt-0px',
    'tb-mt-5px',
    'tb-mt-10px',
    'tb-mt-15px',
    'tb-mt-20px',
    'tb-mt-25px',
    'tb-mt-30px',
    'tb-mt-35px',
    'tb-mt-40px',
    'tb-mt-45px',
    'tb-mt-50px',
    'tb-mt-55px',
    'tb-mt-60px',
    'tb-mt-65px',
    'tb-mt-70px',
    'tb-mt-75px',
    'tb-mt-80px',
    'tb-mt-85px',
    'tb-mt-90px',
    'tb-mt-95px',
    'tb-mt-100px',
    'tb-mt-200px',
    'tb-mt-300px',
    'tb-mt-400px',
    'tb-mt-500px',
    'tb-mt-600px',
    'tb-mt-700px',
    'tb-mt-800px',
    'tb-ml-auto',
    'tb-ml-0px',
    'tb-ml-5px',
    'tb-ml-10px',
    'tb-ml-15px',
    'tb-ml-20px',
    'tb-ml-25px',
    'tb-ml-30px',
    'tb-ml-35px',
    'tb-ml-40px',
    'tb-ml-45px',
    'tb-ml-50px',
    'tb-ml-55px',
    'tb-ml-60px',
    'tb-ml-65px',
    'tb-ml-70px',
    'tb-ml-75px',
    'tb-ml-80px',
    'tb-ml-85px',
    'tb-ml-90px',
    'tb-ml-95px',
    'tb-ml-100px',
    'tb-ml-200px',
    'tb-ml-300px',
    'tb-ml-400px',
    'tb-ml-500px',
    'tb-ml-600px',
    'tb-ml-700px',
    'tb-ml-800px',
    'tb-mr-auto',
    'tb-mr-0px',
    'tb-mr-5px',
    'tb-mr-10px',
    'tb-mr-15px',
    'tb-mr-20px',
    'tb-mr-25px',
    'tb-mr-30px',
    'tb-mr-35px',
    'tb-mr-40px',
    'tb-mr-45px',
    'tb-mr-50px',
    'tb-mr-55px',
    'tb-mr-60px',
    'tb-mr-65px',
    'tb-mr-70px',
    'tb-mr-75px',
    'tb-mr-80px',
    'tb-mr-85px',
    'tb-mr-90px',
    'tb-mr-95px',
    'tb-mr-100px',
    'tb-mr-200px',
    'tb-mr-300px',
    'tb-mr-400px',
    'tb-mr-500px',
    'tb-mr-600px',
    'tb-mr-700px',
    'tb-mr-800px',
    'tb-mb-auto',
    'tb-mb-0px',
    'tb-mb-5px',
    'tb-mb-10px',
    'tb-mb-15px',
    'tb-mb-20px',
    'tb-mb-25px',
    'tb-mb-30px',
    'tb-mb-35px',
    'tb-mb-40px',
    'tb-mb-45px',
    'tb-mb-50px',
    'tb-mb-55px',
    'tb-mb-60px',
    'tb-mb-65px',
    'tb-mb-70px',
    'tb-mb-75px',
    'tb-mb-80px',
    'tb-mb-85px',
    'tb-mb-90px',
    'tb-mb-95px',
    'tb-mb-100px',
    'tb-mb-200px',
    'tb-mb-300px',
    'tb-mb-400px',
    'tb-mb-500px',
    'tb-mb-600px',
    'tb-mb-700px',
    'tb-mb-800px',
    'tb-opacity-0',
    'tb-opacity-1',
    'tb-opacity-2',
    'tb-opacity-3',
    'tb-opacity-4',
    'tb-o-style-dotted',
    'tb-o-style-dashed',
    'tb-o-style-double',
    'tb-o-style-groove',
    'tb-o-style-solid',
    'tb-o-style-ridge',
    'tb-o-style-hidden',
    'tb-o-1',
    'tb-o-2',
    'tb-o-3',
    'tb-o-4',
    'tb-o-top-1',
    'tb-o-top-2',
    'tb-o-top-3',
    'tb-o-top-4',
    'tb-o-left-1',
    'tb-o-left-2',
    'tb-o-left-3',
    'tb-o-left-4',
    'tb-o-right-1',
    'tb-o-right-2',
    'tb-o-right-3',
    'tb-o-right-4',
    'tb-o-bottom-1',
    'tb-o-bottom-2',
    'tb-o-bottom-3',
    'tb-o-bottom-4',
    'tb-o-color-dark',
    'tb-o-color-light',
    'tb-o-color-danger',
    'tb-o-color-info',
    'tb-o-color-primary',
    'tb-o-color-smooth',
    'tb-o-color-transparent',
    'tb-o-color-secondary',
    'tb-o-color-warning',
    'tb-o-color-green',
    'tb-overflow-hidden',
    'tb-overflow-scroll',
    'tb-overflow-auto',
    'tb-overflow-visible',
    'tb-overflowX-hidden',
    'tb-overflowX-scroll',
    'tb-overflowX-auto',
    'tb-overflowX-visible',
    'tb-overflowY-hidden',
    'tb-overflowY-scroll',
    'tb-overflowY-auto',
    'tb-overflowY-visible',
    'tb-overflow-break-word',
    'tb-overflow-normal',
    'tb-overflow-moz-unscrollable',
    'tb-p-auto',
    'tb-p-0px',
    'tb-p-5px',
    'tb-p-10px',
    'tb-p-15px',
    'tb-p-20px',
    'tb-p-25px',
    'tb-p-30px',
    'tb-p-35px',
    'tb-p-40px',
    'tb-p-45px',
    'tb-p-50px',
    'tb-p-55px',
    'tb-p-60px',
    'tb-p-65px',
    'tb-p-70px',
    'tb-p-75px',
    'tb-p-80px',
    'tb-p-85px',
    'tb-p-90px',
    'tb-p-95px',
    'tb-p-100px',
    'tb-p-200px',
    'tb-p-300px',
    'tb-p-400px',
    'tb-p-500px',
    'tb-p-600px',
    'tb-p-700px',
    'tb-p-800px',
    'tb-pt-auto',
    'tb-pt-0px',
    'tb-pt-5px',
    'tb-pt-10px',
    'tb-pt-15px',
    'tb-pt-20px',
    'tb-pt-25px',
    'tb-pt-30px',
    'tb-pt-35px',
    'tb-pt-40px',
    'tb-pt-45px',
    'tb-pt-50px',
    'tb-pt-55px',
    'tb-pt-60px',
    'tb-pt-65px',
    'tb-pt-70px',
    'tb-pt-75px',
    'tb-pt-80px',
    'tb-pt-85px',
    'tb-pt-90px',
    'tb-pt-95px',
    'tb-pt-100px',
    'tb-pt-200px',
    'tb-pt-300px',
    'tb-pt-400px',
    'tb-pt-500px',
    'tb-pt-600px',
    'tb-pt-700px',
    'tb-pt-800px',
    'tb-pl-auto',
    'tb-pl-0px',
    'tb-pl-5px',
    'tb-pl-10px',
    'tb-pl-15px',
    'tb-pl-20px',
    'tb-pl-25px',
    'tb-pl-30px',
    'tb-pl-35px',
    'tb-pl-40px',
    'tb-pl-45px',
    'tb-pl-50px',
    'tb-pl-55px',
    'tb-pl-60px',
    'tb-pl-65px',
    'tb-pl-70px',
    'tb-pl-75px',
    'tb-pl-80px',
    'tb-pl-85px',
    'tb-pl-90px',
    'tb-pl-95px',
    'tb-pl-100px',
    'tb-pl-200px',
    'tb-pl-300px',
    'tb-pl-400px',
    'tb-pl-500px',
    'tb-pl-600px',
    'tb-pl-700px',
    'tb-pl-800px',
    'tb-pr-auto',
    'tb-pr-0px',
    'tb-pr-5px',
    'tb-pr-10px',
    'tb-pr-15px',
    'tb-pr-20px',
    'tb-pr-25px',
    'tb-pr-30px',
    'tb-pr-35px',
    'tb-pr-40px',
    'tb-pr-45px',
    'tb-pr-50px',
    'tb-pr-55px',
    'tb-pr-60px',
    'tb-pr-65px',
    'tb-pr-70px',
    'tb-pr-75px',
    'tb-pr-80px',
    'tb-pr-85px',
    'tb-pr-90px',
    'tb-pr-95px',
    'tb-pr-100px',
    'tb-pr-200px',
    'tb-pr-300px',
    'tb-pr-400px',
    'tb-pr-500px',
    'tb-pr-600px',
    'tb-pr-700px',
    'tb-pr-800px',
    'tb-pb-auto',
    'tb-pb-0px',
    'tb-pb-5px',
    'tb-pb-10px',
    'tb-pb-15px',
    'tb-pb-20px',
    'tb-pb-25px',
    'tb-pb-30px',
    'tb-pb-35px',
    'tb-pb-40px',
    'tb-pb-45px',
    'tb-pb-50px',
    'tb-pb-55px',
    'tb-pb-60px',
    'tb-pb-65px',
    'tb-pb-70px',
    'tb-pb-75px',
    'tb-pb-80px',
    'tb-pb-85px',
    'tb-pb-90px',
    'tb-pb-95px',
    'tb-pb-100px',
    'tb-pb-200px',
    'tb-pb-300px',
    'tb-pb-400px',
    'tb-pb-500px',
    'tb-pb-600px',
    'tb-pb-700px',
    'tb-pb-800px',
    'tb-perspective--1',
    'tb-perspective--2',
    'tb-perspective--3',
    'tb-perspective--4',
    'tb-perspective-none',
    'tb-perspective-1',
    'tb-perspective-2',
    'tb-perspective-3',
    'tb-perspective-4',
    'tb-perspective-top',
    'tb-perspective-bottom',
    'tb-perspective-left',
    'tb-perspective-right',
    'tb-perspective-center',
    'tb-pst-relative',
    'tb-pst-absolute',
    'tb-pst-fixed',
    'tb-pst-sticky',
    'tb-pst-static',
    'tb-text-center',
    'tb-text-left',
    'tb-text-right',
    'tb-text-justify',
    'tb-color-dark',
    'tb-color-light',
    'tb-color-danger',
    'tb-color-info',
    'tb-color-primary',
    'tb-color-smooth',
    'tb-color-transparent',
    'tb-color-secondary',
    'tb-color-warning',
    'tb-color-green',
    'tb-color-white',
    'tb-text-shadow-sm',
    'tb-text-shadow-md',
    'tb-text-shadow-lg',
    'tb-text-shadow-xl',
    'tb-text-transform-upper',
    'tb-text-transform-lower',
    'tb-text-transform-capital',
    'tb-text-transform-none',
    'tb-t-auto',
    'tb-t-0px',
    'tb-t-5px',
    'tb-t-10px',
    'tb-t-15px',
    'tb-t-20px',
    'tb-t-25px',
    'tb-t-30px',
    'tb-t-35px',
    'tb-t-40px',
    'tb-t-45px',
    'tb-t-50px',
    'tb-t-55px',
    'tb-t-60px',
    'tb-t-65px',
    'tb-t-70px',
    'tb-t-75px',
    'tb-t-80px',
    'tb-t-85px',
    'tb-t-90px',
    'tb-t-95px',
    'tb-t-100px',
    'tb-t-200px',
    'tb-t-300px',
    'tb-t-400px',
    'tb-t-500px',
    'tb-t-600px',
    'tb-t-700px',
    'tb-t-800px',
    'tb-l-auto',
    'tb-l-0px',
    'tb-l-5px',
    'tb-l-10px',
    'tb-l-15px',
    'tb-l-20px',
    'tb-l-25px',
    'tb-l-30px',
    'tb-l-35px',
    'tb-l-40px',
    'tb-l-45px',
    'tb-l-50px',
    'tb-l-55px',
    'tb-l-60px',
    'tb-l-65px',
    'tb-l-70px',
    'tb-l-75px',
    'tb-l-80px',
    'tb-l-85px',
    'tb-l-90px',
    'tb-l-95px',
    'tb-l-100px',
    'tb-l-200px',
    'tb-l-300px',
    'tb-l-400px',
    'tb-l-500px',
    'tb-l-600px',
    'tb-l-700px',
    'tb-l-800px',
    'tb-r-auto',
    'tb-r-0px',
    'tb-r-5px',
    'tb-r-10px',
    'tb-r-15px',
    'tb-r-20px',
    'tb-r-25px',
    'tb-r-30px',
    'tb-r-35px',
    'tb-r-40px',
    'tb-r-45px',
    'tb-r-50px',
    'tb-r-55px',
    'tb-r-60px',
    'tb-r-65px',
    'tb-r-70px',
    'tb-r-75px',
    'tb-r-80px',
    'tb-r-85px',
    'tb-r-90px',
    'tb-r-95px',
    'tb-r-100px',
    'tb-r-200px',
    'tb-r-300px',
    'tb-r-400px',
    'tb-r-500px',
    'tb-r-600px',
    'tb-r-700px',
    'tb-r-800px',
    'tb-b-auto',
    'tb-b-0px',
    'tb-b-5px',
    'tb-b-10px',
    'tb-b-15px',
    'tb-b-20px',
    'tb-b-25px',
    'tb-b-30px',
    'tb-b-35px',
    'tb-b-40px',
    'tb-b-45px',
    'tb-b-50px',
    'tb-b-55px',
    'tb-b-60px',
    'tb-b-65px',
    'tb-b-70px',
    'tb-b-75px',
    'tb-b-80px',
    'tb-b-85px',
    'tb-b-90px',
    'tb-b-95px',
    'tb-b-100px',
    'tb-b-200px',
    'tb-b-300px',
    'tb-b-400px',
    'tb-b-500px',
    'tb-b-600px',
    'tb-b-700px',
    'tb-b-800px',
    'tb-rotate-0',
    'tb-rotate-30',
    'tb-rotate-45',
    'tb-rotate-90',
    'tb-rotate-120',
    'tb-rotate-180',
    'tb-rotate-360',
    'tb-scale--1',
    'tb-scale--2',
    'tb-scale--3',
    'tb-scale--4',
    'tb-scale--5',
    'tb-scale--6',
    'tb-scale--7',
    'tb-scale--8',
    'tb-scale--9',
    'tb-scale-1',
    'tb-scale-2',
    'tb-scale-3',
    'tb-scale-4',
    'tb-skew-1',
    'tb-skew-2',
    'tb-skew-3',
    'tb-skew-4',
    '-tb-skew-1',
    '-tb-skew-2',
    '-tb-skew-3',
    '-tb-skew-4',
    'tb-translate-1',
    'tb-translate-2',
    'tb-translate-3',
    'tb-translate-4',
    'tb-translate-middle',
    '-tb-translate-1',
    '-tb-translate-2',
    '-tb-translate-3',
    '-tb-translate-4',
    '-tb-translate-middle',
    'tb-translateX-1',
    'tb-translateX-2',
    'tb-translateX-3',
    'tb-translateX-4',
    'tb-translateX-middle',
    '-tb-translateX-1',
    '-tb-translateX-2',
    '-tb-translateX-3',
    '-tb-translateX-4',
    '-tb-translateX-middle',
    'tb-translateY-1',
    'tb-translateY-2',
    'tb-translateY-3',
    'tb-translateY-4',
    'tb-translateY-middle',
    '-tb-translateY-1',
    '-tb-translateY-2',
    '-tb-translateY-3',
    '-tb-translateY-4',
    '-tb-translateY-middle',
    'tb-translateZ-1',
    'tb-translateZ-2',
    'tb-translateZ-3',
    'tb-translateZ-4',
    'tb-translateZ-middle',
    '-tb-translateZ-1',
    '-tb-translateZ-2',
    '-tb-translateZ-3',
    '-tb-translateZ-4',
    '-tb-translateZ-middle',
    'tb-transition--1',
    'tb-transition--2',
    'tb-transition--3',
    'tb-transition--4',
    'tb-transition--5',
    'tb-transition--6',
    'tb-transition--7',
    'tb-transition--8',
    'tb-transition--9',
    'tb-transition-1',
    'tb-transition-2',
    'tb-transition-3',
    'tb-transition-4',
    'tb-visibility-collapse',
    'tb-visibility-hidden',
    'tb-visibility-visible',
    'tb-space-wrap',
    'tb-space-nowrap',
    'tb-space-pre',
    'tb-space-pre-line',
    'tb-space-pre-wrap',
    'tb-w-5',
    'tb-w-10',
    'tb-w-15',
    'tb-w-20',
    'tb-w-25',
    'tb-w-30',
    'tb-w-33',
    'tb-w-35',
    'tb-w-40',
    'tb-w-45',
    'tb-w-50',
    'tb-w-55',
    'tb-w-60',
    'tb-w-65',
    'tb-w-70',
    'tb-w-75',
    'tb-w-80',
    'tb-w-85',
    'tb-w-90',
    'tb-w-95',
    'tb-w-full',
    'tb-w-screen',
    'tb-w-min',
    'tb-w-max',
    'tb-w-half',
    'tb-w-5px',
    'tb-w-10px',
    'tb-w-15px',
    'tb-w-20px',
    'tb-w-25px',
    'tb-w-30px',
    'tb-w-35px',
    'tb-w-40px',
    'tb-w-45px',
    'tb-w-50px',
    'tb-w-55px',
    'tb-w-60px',
    'tb-w-65px',
    'tb-w-70px',
    'tb-w-75px',
    'tb-w-80px',
    'tb-w-85px',
    'tb-w-90px',
    'tb-w-95px',
    'tb-w-100px',
    'tb-w-200px',
    'tb-w-300px',
    'tb-w-400px',
    'tb-w-500px',
    'tb-w-600px',
    'tb-w-700px',
    'tb-w-800px',  
    'tb-h-5',
    'tb-h-10',
    'tb-h-15',
    'tb-h-20',
    'tb-h-25',
    'tb-h-30',
    'tb-h-35',
    'tb-h-40',
    'tb-h-45',
    'tb-h-50',
    'tb-h-55',
    'tb-h-60',
    'tb-h-65',
    'tb-h-70',
    'tb-h-75',
    'tb-h-80',
    'tb-h-85',
    'tb-h-90',
    'tb-h-95',
    'tb-h-full',
    'tb-h-screen',
    'tb-h-min',
    'tb-h-max',
    'tb-h-half',
    'tb-h-5px',
    'tb-h-10px',
    'tb-h-15px',
    'tb-h-20px',
    'tb-h-25px',
    'tb-h-30px',
    'tb-h-35px',
    'tb-h-40px',
    'tb-h-45px',
    'tb-h-50px',
    'tb-h-55px',
    'tb-h-60px',
    'tb-h-65px',
    'tb-h-70px',
    'tb-h-75px',
    'tb-h-80px',
    'tb-h-85px',
    'tb-h-90px',
    'tb-h-95px',
    'tb-h-100px',
    'tb-h-200px',
    'tb-h-300px',
    'tb-h-400px',
    'tb-h-500px',
    'tb-h-600px',
    'tb-h-700px',
    'tb-h-800px',
    'tb-word-spacing-normal',
    'tb-word-spacing-1',
    'tb-word-spacing-2',
    'tb-word-spacing-3',
    'tb-word-spacing-4',
    'tb-word-wrap-normal',
    'tb-word-wrap-break-word',
    'tb-index--1',
    'tb-index--2',
    'tb-index--3',
    'tb-index--4',
    'tb-index-0',
    'tb-index-1',
    'tb-index-2',
    'tb-index-3',
    'tb-index-4',
    'tb-d-flex',
    'tb-d-block',
    'tb-d-flexbox',
    'tb-d-inline',
    'tb-d-table',
    'tb-d-inline-flex',
    'tb-d-inline-block',
    'tb-d-inline-flexbox',
    'tb-d-inline-table',
    'tb-d-grid',
    'tb-d-table-row',
    'tb-d-table-cell',
    'tb-d-table-column',
    'tb-d-none',
]
let valuesDisplay3 = [
    'align-content: center;',
    'align-content: flex-end;',
    'align-content: flex-start;',
    'align-content: space-evenly;',
    'align-content: space-between;',
    'align-content: space-around;',
    'align-items: center;',
    'align-items: flex-end;',
    'align-items: flex-start;',
    'align-items: stretch;',
    'align-items: baseline;',
    'align-self: center;',
    'align-self: flex-end;',
    'align-self: flex-start;',
    'align-self: stretch;',
    'align-self: baseline;',
    'align-self: auto;',
    'background-attachment: fixed',
    'background-attachment: local',
    'background-attachment: scroll',
    'background-blend-mode: color',
    'background-blend-mode: multiply',
    'background-blend-mode: screen',
    'background-blend-mode: normal',
    'background-blend-mode: darken',
    'background-blend-mode: lighten',
    'background-clip: border-box',
    'background-clip: padding-box',
    'background-clip: content-box',
    'background-clip: text',
    'background-color: rgb(70, 70, 70);',
    'background-color: rgb(238, 238, 238);',
    'background-color: rgb(255, 76, 44);',
    'background-color: rgb(2, 168, 245);',
    'background-color: rgb(42, 131, 248);',
    'background-color: rgb(255, 242, 242);',
    'background-color: transparent;',
    'background-color: rgb(141, 141, 141);',
    'background-color: rgb(253, 207, 0);',
    'background-color: #0de982;',
    'background-color: #fff;',
    'background-origin: content-box',
    'background-origin: border-box',
    'background-origin: padding-box',
    'background-position: center',
    'background-position: top',
    'background-position: left',
    'background-position: right',
    'background-position: bottom',
    'background-position: -20%',
    'background-position: -40%',
    'background-position: -60%',
    'background-position: -80%',
    'background-position: -100%',
    'background-position: 0%',
    'background-position: 20%',
    'background-position: 40%',
    'background-position: 60%',
    'background-position: 80%',
    'background-position: 100%',
    'background-repeat: repeat',
    'background-repeat: no-repeat',
    'background-size: auto',
    'background-size: contain',
    'background-size: cover',
    'background-size: -20%',
    'background-size: -40%',
    'background-size: -60%',
    'background-size: -80%',
    'background-size: -100%',
    'background-size: 0%',
    'background-size: 20%',
    'background-size: 40%',
    'background-size: 60%',
    'background-size: 80%',
    'background-size: 100%',
    'border: dotted;',
    'border: dashed;',
    'border: double',
    'border: groove;',
    'border: solid',
    'border: ridge;',
    'border: none;',
    'border-radius: 5px;',
    'border-radius: 10px;',
    'border-radius: 15px;',
    'border-radius: 20px;',
    'border-radius: 99999px;',
    'border: 1px solid black;',
    'border: 2px solid black;',
    'border: 3px solid black;',
    'border: 4px solid black;',
    'border-top: 1px solid black;',
    'border-top: 2px solid black;',
    'border-top: 3px solid black;',
    'border-top: 4px solid black;',
    'border-left: 1px solid black;',
    'border-left: 2px solid black;',
    'border-left: 3px solid black;',
    'border-left: 4px solid black;',
    'border-right: 1px solid black;',
    'border-right: 2px solid black;',
    'border-right: 3px solid black;',
    'border-right: 4px solid black;',
    'border-bottom: 1px solid black;',
    'border-bottom: 2px solid black;',
    'border-bottom: 3px solid black;',
    'border-bottom: 4px solid black;',
    'border-color: rgb(70, 70, 70);',
    'border-color: rgb(238, 238, 238);',
    'border-color: rgb(255, 76, 44);',
    'border-color: rgb(2, 168, 245);',
    'border-color: rgb(42, 131, 248);',
    'border-color: rgb(255, 242, 242);',
    'border-color: transparent;',
    'border-color: rgb(141, 141, 141);',
    'border-color: rgb(253, 207, 0);',
    'border-color: rgb(14, 253, 201);',
    'border-collapse: collapse;',
    'border-collapse: separate',
    'box-shadow: 2px 2px 2px rgb(199, 199, 199);',
    'box-shadow: 3px 3px 3px rgb(197, 197, 197);',
    'box-shadow: 3.5px 3.5px 2px rgb(197, 197, 197);',
    'box-shadow: 4px 4px 2px rgb(173, 173, 173);',
    'box-sizing: border-box;',
    'box-sizing: content-box;',
    'column-count: 1;padding: 10px;',
    'column-count: 2;padding: 10px;',
    'column-count: 3;padding: 10px;',
    'column-count: 4;padding: 10px;',
    'cursor: pointer;',
    'cursor: col-resize;',
    'cursor: context-menu;',
    'cursor: all-scroll;',
    'cursor: cell;',
    'cursor: alias;',
    'cursor: default;',
    'cursor: none;',
    'cursor: progress;',
    'text-decoration: none',
    'text-decoration: dashed;',
    'text-decoration: double;',
    'text-decoration: line-through;',
    'text-decoration: overline;',
    'text-decoration: solid;',
    'text-decoration: underline;',
    'empty-cells: show',
    'empty-cells: hidden;',
    'filter: blur(0px);',
    'filter: blur(2px);',
    'filter: blur(4px);',
    'filter: blur(6px);',
    'filter: blur(8px);',
    'filter: blur(10px);',
    'filter: gryscale(0%);',
    'filter: gryscale(20%);',
    'filter: gryscale(40%);',
    'filter: gryscale(60%);',
    'filter: gryscale(80%);',
    'filter: gryscale(100%);',
    'filter: saturate(0%);',
    'filter: saturate(20%);',
    'filter: saturate(40%);',
    'filter: saturate(60%);',
    'filter: saturate(80%);',
    'filter: saturate(100%);',
    'filter: brightness(0%);',
    'filter: brightness(20%);',
    'filter: brightness(40%);',
    'filter: brightness(60%);',
    'filter: brightness(80%);',
    'filter: brightness(100%);',
    'filter: contrast(0%);',
    'filter: contrast(20%);',
    'filter: contrast(40%);',
    'filter: contrast(60%);',
    'filter: contrast(80%);',
    'filter: contrast(100%);',
    'flex: 0.20;',
    'flex: 0.40;',
    'flex: 0.60;',
    'flex: 0.80;',
    'flex: 0;',
    'flex: 1;',
    'flex: 2;',
    'flex: 3;',
    'flex: 4;',
    'flex: auto;',
    'flex: content;',
    'flex: none;',
    'flex-basis: auto;',
    'flex-basis: content;',
    'flex-wrap: wrap;',
    'flex-wrap: nowrap;',
    'flex-wrap: wrap-reverse;',
    'flex-direction: column;',
    'flex-direction: column-reverse;',
    'flex-direction: row;',
    'flex-direction: row-reverse;',
    'flex-shrink: 1;',
    'flex-shrink: 2;',
    'flex-shrink: 3;',
    'flex-shrink: 4;',
    'float: left;',
    'float: right;',
    'float: none;',
    'float: inline-end;',
    'float: inline-start;',
    'font-weight: normal;',
    'font-weight: bold;',
    'font-weight: 100;',
    'font-weight: 200;',
    'font-weight: 300;',
    'font-weight: 400;',
    'font-weight: 500;',
    'font-weight: 600;',
    'font-weight: 700;',
    'font-weight: 800;',
    'font-style: italic;',
    'font-style: normal;',
    'font-style: oblique;',
    'font-size: 15px;',
    'font-size: 20px;',
    'font-size: 25px;',
    'font-size: 30px;',
    'font-size: 10px;',
    'font-size: 12px;',
    'font-size: 14px;',
    'font-size: 16px;',
    'font-size: 18px;',
    'font-size: 20px;',
    'font-size: 22px;',
    'font-size: 24px;',
    'font-size: 26px;',
    'font-size: 28px;',
    'font-size: 30px;',
    'font-size: 32px;',
    'font-size: 34px;',
    'font-size: 36px;',
    'font-size: 38px;',
    'font-size: 40px;',
    'font-size: 42px;',
    'font-size: 44px;',
    'font-size: 46px;',
    'font-size: 48px;',
    'font-size: 50px;',
    'font-size: 52px;',
    'font-size: 54px;',
    'font-size: 56px;',
    'font-size: 58px;',
    'font-size: 60px;',
    'font-size: 62px;',
    'font-size: 64px;',
    'font-size: 66px;',
    'font-size: 68px;',
    'font-size: 70px;',
    `grid-template-columns: auto; display: flex; flex-wrap: wrap;flex-direction: column;padding: 10px;box-sizing: border-box;`,
    `grid-template-columns: auto auto; display: flex; flex-wrap: wrap;flex-direction: column;box-sizing: border-box;`,
    `grid-template-columns: auto auto auto; display: flex; flex-wrap: wrap;flex-direction: column;box-sizing: border-box;`,
    `grid-template-columns: auto auto auto auto; display: flex; flex-wrap: wrap;flex-direction: column;box-sizing: border-box;`,
    `grid-gap: 5px`,
    `grid-gap: 10px`,
    `grid-gap: 15px`,
    `grid-gap: 20px`,
    `padding: 20px 0; 
     flex: 1; `,
    'justify-content: center',
    'justify-content: left',
    'justify-content: right;',
    'justify-content: safe;',
    'justify-content: unsafe;',
    'justify-content: start',
    'justify-content: end',
    'justify-content: flex-start;',
    'justify-content: flex-end;',
    'justify-content: space-between;',
    'justify-content: space-around',
    'justify-content: space-evenly',
    'justify-content: stretch;',
    'justify-content: last baseline;',
    'justify-items: auto',
    'justify-items: start',
    'justify-items: end;',
    'justify-items: center;',
    'justify-items: flex-end;',
    'justify-items: flex-start;',
    'justify-self: auto',
    'justify-self: start',
    'justify-self: end;',
    'justify-self: center;',
    'justify-self: stretch;',
    'letter-spacing: normal',
    'letter-spacing: 10px',
    'letter-spacing: 15px',
    'letter-spacing: 20px',
    'letter-spacing: 25px',
    'line-height: .75rem;',
    'line-height: 1rem;',
    'line-height: 1.25rem;',
    'line-height: 1.5rem;',
    'line-height: 1;',
    'line-height: 1.25;',
    'line-height: 1.375;',
    'line-height: 1.5;',
    'line-height: 1.625;',
    'line-height: 2;',
    'list-style-type: none',
    'list-style-type: square',
    'list-style-type: circle;',
    'list-style-type: desc;',
    'list-style-type: decimal;',
    'list-style-type: armenian',
    'list-style-type: georgian',
    'margin: auto;',
    'margin: 0px;',
    'margin: 5px;',
    'margin: 10px;',
    'margin: 15px;',
    'margin: 20px;',
    'margin: 25px;',
    'margin: 30px;',
    'margin: 35px;',
    'margin: 40px;',
    'margin: 45px;',
    'margin: 50px;',
    'margin: 55px;',
    'margin: 60px;',
    'margin: 65px;',
    'margin: 70px;',
    'margin: 75px;',
    'margin: 80px;',
    'margin: 85px;',
    'margin: 90px;',
    'margin: 95px;',
    'margin: 100px;',
    'margin: 200px;',
    'margin: 300px;',
    'margin: 400px;',
    'margin: 500px;',
    'margin: 600px;',
    'margin: 700px;',
    'margin: 800px;',
    'margin-top: auto;',
    'margin-top: 0px;',
    'margin-top: 5px;',
    'margin-top: 10px;',
    'margin-top: 15px;',
    'margin-top: 20px;',
    'margin-top: 25px;',
    'margin-top: 30px;',
    'margin-top: 35px;',
    'margin-top: 40px;',
    'margin-top: 45px;',
    'margin-top: 50px;',
    'margin-top: 55px;',
    'margin-top: 60px;',
    'margin-top: 65px;',
    'margin-top: 70px;',
    'margin-top: 75px;',
    'margin-top: 80px;',
    'margin-top: 85px;',
    'margin-top: 90px;',
    'margin-top: 95px;',
    'margin-top: 100px;',
    'margin-top: 200px;',
    'margin-top: 300px;',
    'margin-top: 400px;',
    'margin-top: 500px;',
    'margin-top: 600px;',
    'margin-top: 700px;',
    'margin-top: 800px;',
    'margin-left: auto;',
    'margin-left: 0px;',
    'margin-left: 5px;',
    'margin-left: 10px;',
    'margin-left: 15px;',
    'margin-left: 20px;',
    'margin-left: 25px;',
    'margin-left: 30px;',
    'margin-left: 35px;',
    'margin-left: 40px;',
    'margin-left: 45px;',
    'margin-left: 50px;',
    'margin-left: 55px;',
    'margin-left: 60px;',
    'margin-left: 65px;',
    'margin-left: 70px;',
    'margin-left: 75px;',
    'margin-left: 80px;',
    'margin-left: 85px;',
    'margin-left: 90px;',
    'margin-left: 95px;',
    'margin-left: 100px;',
    'margin-left: 200px;',
    'margin-left: 300px;',
    'margin-left: 400px;',
    'margin-left: 500px;',
    'margin-left: 600px;',
    'margin-left: 700px;',
    'margin-left: 800px;',
    'margin-right: auto;',
    'margin-right: 0px;',
    'margin-right: 5px;',
    'margin-right: 10px;',
    'margin-right: 15px;',
    'margin-right: 20px;',
    'margin-right: 25px;',
    'margin-right: 30px;',
    'margin-right: 35px;',
    'margin-right: 40px;',
    'margin-right: 45px;',
    'margin-right: 50px;',
    'margin-right: 55px;',
    'margin-right: 60px;',
    'margin-right: 65px;',
    'margin-right: 70px;',
    'margin-right: 75px;',
    'margin-right: 80px;',
    'margin-right: 85px;',
    'margin-right: 90px;',
    'margin-right: 95px;',
    'margin-right: 100px;',
    'margin-right: 200px;',
    'margin-right: 300px;',
    'margin-right: 400px;',
    'margin-right: 500px;',
    'margin-right: 600px;',
    'margin-right: 700px;',
    'margin-right: 800px;',
    'margin-bottom: auto;',
    'margin-bottom: 0px;',
    'margin-bottom: 5px;',
    'margin-bottom: 10px;',
    'margin-bottom: 15px;',
    'margin-bottom: 20px;',
    'margin-bottom: 25px;',
    'margin-bottom: 30px;',
    'margin-bottom: 35px;',
    'margin-bottom: 40px;',
    'margin-bottom: 45px;',
    'margin-bottom: 50px;',
    'margin-bottom: 55px;',
    'margin-bottom: 60px;',
    'margin-bottom: 65px;',
    'margin-bottom: 70px;',
    'margin-bottom: 75px;',
    'margin-bottom: 80px;',
    'margin-bottom: 85px;',
    'margin-bottom: 90px;',
    'margin-bottom: 95px;',
    'margin-bottom: 100px;',
    'margin-bottom: 200px;',
    'margin-bottom: 300px;',
    'margin-bottom: 400px;',
    'margin-bottom: 500px;',
    'margin-bottom: 600px;',
    'margin-bottom: 700px;',
    'margin-bottom: 800px;',
    'opacity: 0%',
    'opacity: 25%',
    'opacity: 50%;',
    'opacity: 75%;',
    'opacity: 100%;',
    'outline: dotted;',
    'outline: dashed;',
    'outline: double',
    'outline: groove;',
    'outline: solid',
    'outline: ridge;',
    'outline: none;',
    'outline: 1px;',
    'outline: 2px;',
    'outline: 3px;',
    'outline: 4px;',
    'outline-top: 1px;',
    'outline-top: 2px;',
    'outline-top: 3px;',
    'outline-top: 4px;',
    'outline-left: 1px;',
    'outline-left: 2px;',
    'outline-left: 3px;',
    'outline-left: 4px;',
    'outline-right: 1px;',
    'outline-right: 2px;',
    'outline-right: 3px;',
    'outline-right: 4px;',
    'outline-bottom: 1px;',
    'outline-bottom: 2px;',
    'outline-bottom: 3px;',
    'outline-bottom: 4px;',
    'outline-color: rgb(70, 70, 70);',
    'outline-color: rgb(238, 238, 238);',
    'outline-color: rgb(255, 76, 44);',
    'outline-color: rgb(2, 168, 245);',
    'outline-color: rgb(42, 131, 248);',
    'outline-color: rgb(255, 242, 242);',
    'outline-color: transparent;',
    'outline-color: rgb(141, 141, 141);',
    'outline-color: rgb(253, 207, 0);',
    'outline-color: rgb(11, 245, 101);',
    'overflow: hidden;',
    'overflow: scroll;',
    'overflow: auto;',
    'overflow: visible;',
    'overflow-x: hidden;',
    'overflow-x: scroll;',
    'overflow-x: auto;',
    'overflow-x: visible;',
    'overflow-y: hidden;',
    'overflow-y: scroll;',
    'overflow-y: auto;',
    'overflow-y: visible;',
    'overflow-wrap: break-word;',
    'overflow-wrap: normal;',
    'overflow: moz-hidden-unscrollable;',
    'padding: auto;',
    'padding: 0px;',
    'padding: 5px;',
    'padding: 10px;',
    'padding: 15px;',
    'padding: 20px;',
    'padding: 25px;',
    'padding: 30px;',
    'padding: 35px;',
    'padding: 40px;',
    'padding: 45px;',
    'padding: 50px;',
    'padding: 55px;',
    'padding: 60px;',
    'padding: 65px;',
    'padding: 70px;',
    'padding: 75px;',
    'padding: 80px;',
    'padding: 85px;',
    'padding: 90px;',
    'padding: 95px;',
    'padding: 100px;',
    'padding: 200px;',
    'padding: 300px;',
    'padding: 400px;',
    'padding: 500px;',
    'padding: 600px;',
    'padding: 700px;',
    'padding: 800px;',
    'padding-top: auto;',
    'padding-top: 0px;',
    'padding-top: 5px;',
    'padding-top: 10px;',
    'padding-top: 15px;',
    'padding-top: 20px;',
    'padding-top: 25px;',
    'padding-top: 30px;',
    'padding-top: 35px;',
    'padding-top: 40px;',
    'padding-top: 45px;',
    'padding-top: 50px;',
    'padding-top: 55px;',
    'padding-top: 60px;',
    'padding-top: 65px;',
    'padding-top: 70px;',
    'padding-top: 75px;',
    'padding-top: 80px;',
    'padding-top: 85px;',
    'padding-top: 90px;',
    'padding-top: 95px;',
    'padding-top: 100px;',
    'padding-top: 200px;',
    'padding-top: 300px;',
    'padding-top: 400px;',
    'padding-top: 500px;',
    'padding-top: 600px;',
    'padding-top: 700px;',
    'padding-top: 800px;',
    'padding-left: auto;',
    'padding-left: 0px;',
    'padding-left: 5px;',
    'padding-left: 10px;',
    'padding-left: 15px;',
    'padding-left: 20px;',
    'padding-left: 25px;',
    'padding-left: 30px;',
    'padding-left: 35px;',
    'padding-left: 40px;',
    'padding-left: 45px;',
    'padding-left: 50px;',
    'padding-left: 55px;',
    'padding-left: 60px;',
    'padding-left: 65px;',
    'padding-left: 70px;',
    'padding-left: 75px;',
    'padding-left: 80px;',
    'padding-left: 85px;',
    'padding-left: 90px;',
    'padding-left: 95px;',
    'padding-left: 100px;',
    'padding-left: 200px;',
    'padding-left: 300px;',
    'padding-left: 400px;',
    'padding-left: 500px;',
    'padding-left: 600px;',
    'padding-left: 700px;',
    'padding-left: 800px;',
    'padding-right: auto;',
    'padding-right: 0px;',
    'padding-right: 5px;',
    'padding-right: 10px;',
    'padding-right: 15px;',
    'padding-right: 20px;',
    'padding-right: 25px;',
    'padding-right: 30px;',
    'padding-right: 35px;',
    'padding-right: 40px;',
    'padding-right: 45px;',
    'padding-right: 50px;',
    'padding-right: 55px;',
    'padding-right: 60px;',
    'padding-right: 65px;',
    'padding-right: 70px;',
    'padding-right: 75px;',
    'padding-right: 80px;',
    'padding-right: 85px;',
    'padding-right: 90px;',
    'padding-right: 95px;',
    'padding-right: 100px;',
    'padding-right: 200px;',
    'padding-right: 300px;',
    'padding-right: 400px;',
    'padding-right: 500px;',
    'padding-right: 600px;',
    'padding-right: 700px;',
    'padding-right: 800px;',
    'padding-bottom: auto;',
    'padding-bottom: 0px;',
    'padding-bottom: 5px;',
    'padding-bottom: 10px;',
    'padding-bottom: 15px;',
    'padding-bottom: 20px;',
    'padding-bottom: 25px;',
    'padding-bottom: 30px;',
    'padding-bottom: 35px;',
    'padding-bottom: 40px;',
    'padding-bottom: 45px;',
    'padding-bottom: 50px;',
    'padding-bottom: 55px;',
    'padding-bottom: 60px;',
    'padding-bottom: 65px;',
    'padding-bottom: 70px;',
    'padding-bottom: 75px;',
    'padding-bottom: 80px;',
    'padding-bottom: 85px;',
    'padding-bottom: 90px;',
    'padding-bottom: 95px;',
    'padding-bottom: 100px;',
    'padding-bottom: 200px;',
    'padding-bottom: 300px;',
    'padding-bottom: 400px;',
    'padding-bottom: 500px;',
    'padding-bottom: 600px;',
    'padding-bottom: 700px;',
    'padding-bottom: 800px;',
    'perspective: -20px;',
    'perspective: -40px;',
    'perspective: -60px;',
    'perspective: -80px;',
    'perspective: none;',
    'perspective: 20px;',
    'perspective: 40px;',
    'perspective: 60px;',
    'perspective: 80px;',
    'perspective-origin: top;',
    'perspective-origin: bottom;',
    'perspective-origin: left;',
    'perspective-origin: right;',
    'perspective-origin: center;',
    'position: relative;',
    'position: absolute;',
    'position: fixed;',
    'position: sticky;',
    'position: static;',
    'text-align: center;',
    'text-align: left;',
    'text-align: right;',
    'text-align: justify;',
    'color: black;',
    'color: rgb(238, 238, 238);',
    'color: rgb(255, 76, 44);',
    'color: rgb(2, 168, 245);',
    'color: rgb(42, 131, 248);',
    'color: rgb(255, 242, 242);',
    'color: transparent;',
    'color: rgb(141, 141, 141);',
    'color: rgb(253, 207, 0);',
    'color: #0de982;',
    'color: #fff;',
    'text-shadow: 2px 2px 2px rgb(199, 199, 199);',
    'text-shadow: 3px 3px 3px rgb(197, 197, 197);',
    'text-shadow: 3.5px 3.5px 2px rgb(197, 197, 197);',
    'text-shadow: 4px 4px 2px rgb(173, 173, 173);',
    'text-transform: uppercase;',
    'text-transform: lowercase;',
    'text-transform: capitalize;',
    'text-transform: none;',
    'top: auto;',
    'top: 0px;',
    'top: 5px;',
    'top: 10px;',
    'top: 15px;',
    'top: 20px;',
    'top: 25px;',
    'top: 30px;',
    'top: 35px;',
    'top: 40px;',
    'top: 45px;',
    'top: 50px;',
    'top: 55px;',
    'top: 60px;',
    'top: 65px;',
    'top: 70px;',
    'top: 75px;',
    'top: 80px;',
    'top: 85px;',
    'top: 90px;',
    'top: 95px;',
    'top: 100px;',
    'top: 200px;',
    'top: 300px;',
    'top: 400px;',
    'top: 500px;',
    'top: 600px;',
    'top: 700px;',
    'top: 800px;',
    'left: auto;',
    'left: 0px;',
    'left: 5px;',
    'left: 10px;',
    'left: 15px;',
    'left: 20px;',
    'left: 25px;',
    'left: 30px;',
    'left: 35px;',
    'left: 40px;',
    'left: 45px;',
    'left: 50px;',
    'left: 55px;',
    'left: 60px;',
    'left: 65px;',
    'left: 70px;',
    'left: 75px;',
    'left: 80px;',
    'left: 85px;',
    'left: 90px;',
    'left: 95px;',
    'left: 100px;',
    'left: 200px;',
    'left: 300px;',
    'left: 400px;',
    'left: 500px;',
    'left: 600px;',
    'left: 700px;',
    'left: 800px;',
    'right: auto;',
    'right: 0px;',
    'right: 5px;',
    'right: 10px;',
    'right: 15px;',
    'right: 20px;',
    'right: 25px;',
    'right: 30px;',
    'right: 35px;',
    'right: 40px;',
    'right: 45px;',
    'right: 50px;',
    'right: 55px;',
    'right: 60px;',
    'right: 65px;',
    'right: 70px;',
    'right: 75px;',
    'right: 80px;',
    'right: 85px;',
    'right: 90px;',
    'right: 95px;',
    'right: 100px;',
    'right: 200px;',
    'right: 300px;',
    'right: 400px;',
    'right: 500px;',
    'right: 600px;',
    'right: 700px;',
    'right: 800px;',
    'bottom: auto;',
    'bottom: 0px;',
    'bottom: 5px;',
    'bottom: 10px;',
    'bottom: 15px;',
    'bottom: 20px;',
    'bottom: 25px;',
    'bottom: 30px;',
    'bottom: 35px;',
    'bottom: 40px;',
    'bottom: 45px;',
    'bottom: 50px;',
    'bottom: 55px;',
    'bottom: 60px;',
    'bottom: 65px;',
    'bottom: 70px;',
    'bottom: 75px;',
    'bottom: 80px;',
    'bottom: 85px;',
    'bottom: 90px;',
    'bottom: 95px;',
    'bottom: 100px;',
    'bottom: 200px;',
    'bottom: 300px;',
    'bottom: 400px;',
    'bottom: 500px;',
    'bottom: 600px;',
    'bottom: 700px;',
    'bottom: 800px;',
    'transform: rotate(0deg)',
    'transform: rotate(30deg)',
    'transform: rotate(45deg)',
    'transform: rotate(90deg)',
    'transform: rotate(120deg)',
    'transform: rotate(180deg)',
    'transform: rotate(360deg)',
    'transform: scale(0.1)',
    'transform: scale(0.2)',
    'transform: scale(0.3)',
    'transform: scale(0.4)',
    'transform: scale(0.5)',
    'transform: scale(0.6)',
    'transform: scale(0.7)',
    'transform: scale(0.8)',
    'transform: scale(0.9)',
    'transform: scale(1)',
    'transform: scale(2)',
    'transform: scale(3)',
    'transform: scale(4)',
    'transform: skew(5deg)',
    'transform: skew(10deg)',
    'transform: skew(15deg)',
    'transform: skew(20deg)',
    'transform: skew(-5deg)',
    'transform: skew(-10deg)',
    'transform: skew(-15deg)',
    'transform: skew(-20deg)',
    'transform: translate(10%)',
    'transform: translate(20%)',
    'transform: translate(30%)',
    'transform: translate(40%)',
    'transform: translate(50%)',
    'transform: translate(-10%)',
    'transform: translate(-20%)',
    'transform: translate(-30%)',
    'transform: translate(-40%)',
    'transform: translate(-50%)',
    'transform: translateX(10%)',
    'transform: translateX(20%)',
    'transform: translateX(30%)',
    'transform: translateX(40%)',
    'transform: translateX(50%)',
    'transform: translateX(-10%)',
    'transform: translateX(-20%)',
    'transform: translateX(-30%)',
    'transform: translateX(-40%)',
    'transform: translateX(-50%)',
    'transform: translateY(10%)',
    'transform: translateY(20%)',
    'transform: translateY(30%)',
    'transform: translateY(40%)',
    'transform: translateY(50%)',
    'transform: translateY(-10%)',
    'transform: translateY(-20%)',
    'transform: translateY(-30%)',
    'transform: translateY(-40%)',
    'transform: translateY(-50%)',
    'transform: translateZ(10%)',
    'transform: translateZ(20%)',
    'transform: translateZ(30%)',
    'transform: translateZ(40%)',
    'transform: translateZ(50%)',
    'transform: translateZ(-10%)',
    'transform: translateZ(-20%)',
    'transform: translateZ(-30%)',
    'transform: translateZ(-40%)',
    'transform: translateZ(-50%)',
    'transition: 0.1s;',
    'transition: 0.2s;',
    'transition: 0.3s;',
    'transition: 0.4s;',
    'transition: 0.5s;',
    'transition: 0.6s;',
    'transition: 0.7s',
    'transition: 0.8s;',
    'transition: 0.9s;',
    'transition: 1s;',
    'transition: 2s;',
    'transition: 3s;',
    'transition: 4s;',
    'visibility: collapse;',
    'visibility: hidden;',
    'visibility: visible;',
    'white-space: collapse;',
    'white-space: hidden;',
    'white-space: pre;',
    'white-space: pre-line;',
    'white-space: pre-wrap;',
    'width: 5%;',
    'width: 10%;',
    'width: 15%;',
    'width: 20%;',
    'width: 25%;',
    'width: 30%;',
    'width: 33%;',
    'width: 35%;',
    'width: 40%;',
    'width: 45%;',
    'width: 50%;',
    'width: 55%;',
    'width: 60%;',
    'width: 65%;',
    'width: 70%;',
    'width: 75%;',
    'width: 80%;',
    'width: 85%;',
    'width: 90%;',
    'width: 95%;',
    'width: 100%;',
    'width: 100vw;',
    'width: min-content;',
    'width: max-content;',
    'width: 50%;',
    'width: 5px;',
    'width: 10px;',
    'width: 15px;',
    'width: 20px;',
    'width: 25px;',
    'width: 30px;',
    'width: 35px;',
    'width: 40px;',
    'width: 45px;',
    'width: 50px;',
    'width: 55px;',
    'width: 60px;',
    'width: 65px;',
    'width: 70px;',
    'width: 75px;',
    'width: 80px;',
    'width: 85px;',
    'width: 90px;',
    'width: 95px;',
    'width: 100px;',
    'width: 200px;',
    'width: 300px;',
    'width: 400px;',
    'width: 500px;',
    'width: 600px;',
    'width: 700px;',
    'width: 800px;',
    'height: 5%;',
    'height: 10%;',
    'height: 15%;',
    'height: 20%;',
    'height: 25%;',
    'height: 30%;',
    'height: 35%;',
    'height: 40%;',
    'height: 45%;',
    'height: 50%;',
    'height: 55%;',
    'height: 60%;',
    'height: 65%;',
    'height: 70%;',
    'height: 75%;',
    'height: 80%;',
    'height: 85%;',
    'height: 90%;',
    'height: 95%;',
    'height: 100%;',
    'height: 100vh;',
    'height: min-content;',
    'height: max-content;',
    'height: 50%;',
    'height: 5px;',
    'height: 10px;',
    'height: 15px;',
    'height: 20px;',
    'height: 25px;',
    'height: 30px;',
    'height: 35px;',
    'height: 40px;',
    'height: 45px;',
    'height: 50px;',
    'height: 55px;',
    'height: 60px;',
    'height: 65px;',
    'height: 70px;',
    'height: 75px;',
    'height: 80px;',
    'height: 85px;',
    'height: 90px;',
    'height: 95px;',
    'height: 100px;',
    'height: 200px;',
    'height: 300px;',
    'height: 400px;',
    'height: 500px;',
    'height: 600px;',
    'height: 700px;',
    'height: 800px;',
    'word-spacing: normal',
    'word-spacing: 10px',
    'word-spacing: 20px',
    'word-spacing: 30px',
    'word-spacing: 40px',
    'word-wrap: normal',
    'word-wrap: break-word',
    'z-index: -1;',
    'z-index: -2;',
    'z-index: -3;',
    'z-index: -4;',
    'z-index: 0;',
    'z-index: 1;',
    'z-index: 2;',
    'z-index: 3;',
    'z-index: 4;',
    'display: flex',
    'display: block;',
    'display: flexbox;',
    'display: inline;',
    'display: table',
    'display: inline-flex;',
    'display: inline-block;',
    'display: inline-flexbox;',
    'display: inline-table;',
    'display: grid;',
    'display: table-row;',
    'display: table-cell;',
    'display: table-column;',
    'display: none;',
]

        for (var i = 0; i <= propertiesDisplay3.length; i++) {
            if (document.querySelector(`.${propertiesDisplay3[i]}`) && !document.querySelector('style').innerText.includes(propertiesDisplay3[i])) {
                let styles = ` 
                    @media screen and (min-width: 601px) and (max-width: 900px) {
                        .${propertiesDisplay3[i]} { 
                            ${valuesDisplay3[i]}
                        }
                    }`;
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }

let propertiesDisplay4 = [
    'pc-content-center',
    'pc-content-flex-end',
    'pc-content-flex-start',
    'pc-content-evenly',
    'pc-content-between',
    'pc-content-around',
    'pc-items-center',
    'pc-items-flex-end',
    'pc-items-flex-start',
    'pc-items-stretch',
    'pc-items-baseline',
    'pc-self-center',
    'pc-self-flex-end',
    'pc-self-flex-start',
    'pc-self-stretch',
    'pc-self-baseline',
    'pc-self-auto',
    'pc-attachment-fixed',
    'pc-attachment-local',
    'pc-attachment-scroll',
    'pc-bg-blend-color',
    'pc-bg-blend-multiply',
    'pc-bg-blend-screen',
    'pc-bg-blend-normal',
    'pc-bg-blend-darken',
    'pc-bg-blend-lighten',
    'pc-bg-clip-border',
    'pc-bg-clip-padding',
    'pc-bg-clip-content',
    'pc-bg-clip-text',
    'pc-bg-dark',
    'pc-bg-light',
    'pc-bg-danger',
    'pc-bg-info',
    'pc-bg-primary',
    'pc-bg-smooth',
    'pc-bg-transparent',
    'pc-bg-secondary',
    'pc-bg-warning',
    'pc-bg-green',
    'pc-bg-white',
    'pc-bg-content-box',
    'pc-bg-border-box',
    'pc-bg-padding-box',
    'pc-bg-post-center',
    'pc-bg-post-top',
    'pc-bg-post-left',
    'pc-bg-post-right',
    'pc-bg-post-bottom',
    'pc-bg-post--1',
    'pc-bg-post--2',
    'pc-bg-post--3',
    'pc-bg-post--4',
    'pc-bg-post--full',
    'pc-bg-post-0',
    'pc-bg-post-1',
    'pc-bg-post-2',
    'pc-bg-post-3',
    'pc-bg-post-4',
    'pc-bg-post-full',
    'pc-bg-rpt-repeat',
    'pc-bg-rpt-norepeat',
    'pc-bg-sz-auto',
    'pc-bg-sz-contain',
    'pc-bg-sz-cover',
    'pc-bg-sz--1',
    'pc-bg-sz--2',
    'pc-bg-sz--3',
    'pc-bg-sz--4',
    'pc-bg-sz--full',
    'pc-bg-sz-0',
    'pc-bg-sz-1',
    'pc-bg-sz-2',
    'pc-bg-sz-3',
    'pc-bg-sz-4',
    'pc-bg-sz-full',
    'pc-style-dotted',
    'pc-style-dashed',
    'pc-style-double',
    'pc-style-groove',
    'pc-style-solid',
    'pc-style-ridge',
    'pc-style-hidden',
    'pc-radius-sm',
    'pc-radius-md',
    'pc-radius-lg',
    'pc-radius-xl',
    'pc-radius-full',
    'pc-border-1',
    'pc-border-2',
    'pc-border-3',
    'pc-border-4',
    'pc-border-t-1',
    'pc-border-t-2',
    'pc-border-t-3',
    'pc-border-t-4',
    'pc-border-l-1',
    'pc-border-l-2',
    'pc-border-l-3',
    'pc-border-l-4',
    'pc-border-r-1',
    'pc-border-r-2',
    'pc-border-r-3',
    'pc-border-r-4',
    'pc-border-b-1',
    'pc-border-b-2',
    'pc-border-b-3',
    'pc-border-b-4',
    'pc-border-clr-dark',
    'pc-border-clr-light',
    'pc-border-clr-danger',
    'pc-border-clr-info',
    'pc-border-clr-primary',
    'pc-border-clr-smooth',
    'pc-border-clr-transparent',
    'pc-border-clr-secondary',
    'pc-border-clr-warning',
    'pc-border-clr-green',
    'pc-border-type-collapse',
    'pc-border-type-separate',
    'pc-box-shadow-sm',
    'pc-box-shadow-md',
    'pc-box-shadow-lg',
    'pc-box-shadow-xl',
    'pc-box-border',
    'pc-box-content',
    'pc-col-1',
    'pc-col-2',
    'pc-col-3',
    'pc-col-4',
    'pc-cursor-pointer',
    'pc-cursor-col-resize',
    'pc-cursor-context-menu ',
    'pc-cursor-all-scroll',
    'pc-cursor-cell',
    'pc-cursor-alias',
    'pc-cursor-default',
    'pc-cursor-none',
    'pc-cursor-progress',
    'pc-decoration-none',
    'pc-decoration-dashed',
    'pc-decoration-double',
    'pc-decoration-through',
    'pc-decoration-overline',
    'pc-decoration-solid',
    'pc-decoration-underline',
    'pc-cells-show',
    'pc-cells-hidden',
    'pc-blur-0',
    'pc-blur-1',
    'pc-blur-2',
    'pc-blur-3',
    'pc-blur-4',
    'pc-blur-full',
    'pc-gryscale-0',
    'pc-gryscale-1',
    'pc-gryscale-2',
    'pc-gryscale-3',
    'pc-gryscale-4',
    'pc-gryscale-full',
    'pc-saturate-0',
    'pc-saturate-1',
    'pc-saturate-2',
    'pc-saturate-3',
    'pc-saturate-4',
    'pc-saturate-full',
    'pc-brightness-0',
    'pc-brightness-1',
    'pc-brightness-2',
    'pc-brightness-3',
    'pc-brightness-4',
    'pc-brightness-full',
    'pc-contrast-0',
    'pc-contrast-1',
    'pc-contrast-2',
    'pc-contrast-3',
    'pc-contrast-4',
    'pc-contrast-full',
    'pc-flex--1',
    'pc-flex--2',
    'pc-flex--3',
    'pc-flex--4',
    'pc-flex-0',
    'pc-flex-1',
    'pc-flex-2',
    'pc-flex-3',
    'pc-flex-4',
    'pc-flex-auto',
    'pc-flex-content',
    'pc-flex-none',
    'pc-flex-basis-auto',
    'pc-flex-basis-content',
    'pc-wrap-wrap',
    'pc-wrap-nowrap',
    'pc-wrap-wrap-reverse',
    'pc-direction-column',
    'pc-direction-column-reverse',
    'pc-direction-row',
    'pc-direction-row-reverse',
    'pc-shrink-1',
    'pc-shrink-2',
    'pc-shrink-3',
    'pc-shrink-4',
    'pc-float-left',
    'pc-float-right',
    'pc-float-none',
    'pc-float-inline-end',
    'pc-float-inline-start',
    'pc-weight-normal',
    'pc-weight-bold',
    'pc-weight-100',
    'pc-weight-200',
    'pc-weight-300',
    'pc-weight-400',
    'pc-weight-500',
    'pc-weight-600',
    'pc-weight-700',
    'pc-weight-800',
    'pc-font-style-italic',
    'pc-font-style-normal',
    'pc-font-style-oblique',
    'pc-font-sz-sm',
    'pc-font-sz-md',
    'pc-font-sz-lg',
    'pc-font-sz-xl',
    'pc-font-sz-10px',
    'pc-font-sz-12px',
    'pc-font-sz-14px',
    'pc-font-sz-16px',
    'pc-font-sz-18px',
    'pc-font-sz-20px',
    'pc-font-sz-22px',
    'pc-font-sz-24px',
    'pc-font-sz-26px',
    'pc-font-sz-28px',
    'pc-font-sz-30px',
    'pc-font-sz-32px',
    'pc-font-sz-34px',
    'pc-font-sz-36px',
    'pc-font-sz-38px',
    'pc-font-sz-40px',
    'pc-font-sz-42px',
    'pc-font-sz-44px',
    'pc-font-sz-46px',
    'pc-font-sz-48px',
    'pc-font-sz-50px',
    'pc-font-sz-52px',
    'pc-font-sz-54px',
    'pc-font-sz-56px',
    'pc-font-sz-58px',
    'pc-font-sz-60px',
    'pc-font-sz-62px',
    'pc-font-sz-64px',
    'pc-font-sz-66px',
    'pc-font-sz-68px',
    'pc-font-sz-70px',
    'pc-row-1',
    'pc-row-2',
    'pc-row-3',
    'pc-row-4',
    'pc-grid-gap-1',
    'pc-grid-gap-2',
    'pc-grid-gap-3',
    'pc-grid-gap-4',
    'pc-col',
    'pc-justify-center',
    'pc-justify-left',
    'pc-justify-right',
    'pc-justify-safe',
    'pc-justify-unsafe',
    'pc-justify-start',
    'pc-justify-end',
    'pc-justify-flex-start',
    'pc-justify-flex-end',
    'pc-justify-between',
    'pc-justify-around',
    'pc-justify-evenly',
    'pc-justify-stretch',
    'pc-justify-last-baseline',
    'pc-just-items-auto',
    'pc-just-items-start',
    'pc-just-items-end',
    'pc-just-items-center',
    'pc-just-items-flex-end',
    'pc-just-items-flex-start',
    'pc-just-self-auto',
    'pc-just-self-start',
    'pc-just-self-end',
    'pc-just-self-center',
    'pc-just-self-stretch',
    'pc-let-spacing-normal',
    'pc-let-spacing-1',
    'pc-let-spacing-2',
    'pc-let-spacing-3',
    'pc-let-spacing-4',
    'pc-leading-1',
    'pc-leading-2',
    'pc-leading-3',
    'pc-leading-4',
    'pc-leading-none',
    'pc-leading-tight',
    'pc-leading-snug',
    'pc-leading-normal',
    'pc-leading-relaxed',
    'pc-leading-loose',
    'pc-list-none',
    'pc-list-square',
    'pc-list-circle',
    'pc-list-desc',
    'pc-list-decimal',
    'pc-list-armenian',
    'pc-list-georgian',
    'pc-m-auto',
    'pc-m-0px',
    'pc-m-5px',
    'pc-m-10px',
    'pc-m-15px',
    'pc-m-20px',
    'pc-m-25px',
    'pc-m-30px',
    'pc-m-35px',
    'pc-m-40px',
    'pc-m-45px',
    'pc-m-50px',
    'pc-m-55px',
    'pc-m-60px',
    'pc-m-65px',
    'pc-m-70px',
    'pc-m-75px',
    'pc-m-80px',
    'pc-m-85px',
    'pc-m-90px',
    'pc-m-95px',
    'pc-m-100px',
    'pc-m-200px',
    'pc-m-300px',
    'pc-m-400px',
    'pc-m-500px',
    'pc-m-600px',
    'pc-m-700px',
    'pc-m-800px',
    'pc-mt-auto',
    'pc-mt-0px',
    'pc-mt-5px',
    'pc-mt-10px',
    'pc-mt-15px',
    'pc-mt-20px',
    'pc-mt-25px',
    'pc-mt-30px',
    'pc-mt-35px',
    'pc-mt-40px',
    'pc-mt-45px',
    'pc-mt-50px',
    'pc-mt-55px',
    'pc-mt-60px',
    'pc-mt-65px',
    'pc-mt-70px',
    'pc-mt-75px',
    'pc-mt-80px',
    'pc-mt-85px',
    'pc-mt-90px',
    'pc-mt-95px',
    'pc-mt-100px',
    'pc-mt-200px',
    'pc-mt-300px',
    'pc-mt-400px',
    'pc-mt-500px',
    'pc-mt-600px',
    'pc-mt-700px',
    'pc-mt-800px',
    'pc-ml-auto',
    'pc-ml-0px',
    'pc-ml-5px',
    'pc-ml-10px',
    'pc-ml-15px',
    'pc-ml-20px',
    'pc-ml-25px',
    'pc-ml-30px',
    'pc-ml-35px',
    'pc-ml-40px',
    'pc-ml-45px',
    'pc-ml-50px',
    'pc-ml-55px',
    'pc-ml-60px',
    'pc-ml-65px',
    'pc-ml-70px',
    'pc-ml-75px',
    'pc-ml-80px',
    'pc-ml-85px',
    'pc-ml-90px',
    'pc-ml-95px',
    'pc-ml-100px',
    'pc-ml-200px',
    'pc-ml-300px',
    'pc-ml-400px',
    'pc-ml-500px',
    'pc-ml-600px',
    'pc-ml-700px',
    'pc-ml-800px',
    'pc-mr-auto',
    'pc-mr-0px',
    'pc-mr-5px',
    'pc-mr-10px',
    'pc-mr-15px',
    'pc-mr-20px',
    'pc-mr-25px',
    'pc-mr-30px',
    'pc-mr-35px',
    'pc-mr-40px',
    'pc-mr-45px',
    'pc-mr-50px',
    'pc-mr-55px',
    'pc-mr-60px',
    'pc-mr-65px',
    'pc-mr-70px',
    'pc-mr-75px',
    'pc-mr-80px',
    'pc-mr-85px',
    'pc-mr-90px',
    'pc-mr-95px',
    'pc-mr-100px',
    'pc-mr-200px',
    'pc-mr-300px',
    'pc-mr-400px',
    'pc-mr-500px',
    'pc-mr-600px',
    'pc-mr-700px',
    'pc-mr-800px',
    'pc-mb-auto',
    'pc-mb-0px',
    'pc-mb-5px',
    'pc-mb-10px',
    'pc-mb-15px',
    'pc-mb-20px',
    'pc-mb-25px',
    'pc-mb-30px',
    'pc-mb-35px',
    'pc-mb-40px',
    'pc-mb-45px',
    'pc-mb-50px',
    'pc-mb-55px',
    'pc-mb-60px',
    'pc-mb-65px',
    'pc-mb-70px',
    'pc-mb-75px',
    'pc-mb-80px',
    'pc-mb-85px',
    'pc-mb-90px',
    'pc-mb-95px',
    'pc-mb-100px',
    'pc-mb-200px',
    'pc-mb-300px',
    'pc-mb-400px',
    'pc-mb-500px',
    'pc-mb-600px',
    'pc-mb-700px',
    'pc-mb-800px',
    'pc-opacity-0',
    'pc-opacity-1',
    'pc-opacity-2',
    'pc-opacity-3',
    'pc-opacity-4',
    'pc-o-style-dotted',
    'pc-o-style-dashed',
    'pc-o-style-double',
    'pc-o-style-groove',
    'pc-o-style-solid',
    'pc-o-style-ridge',
    'pc-o-style-hidden',
    'pc-o-1',
    'pc-o-2',
    'pc-o-3',
    'pc-o-4',
    'pc-o-top-1',
    'pc-o-top-2',
    'pc-o-top-3',
    'pc-o-top-4',
    'pc-o-left-1',
    'pc-o-left-2',
    'pc-o-left-3',
    'pc-o-left-4',
    'pc-o-right-1',
    'pc-o-right-2',
    'pc-o-right-3',
    'pc-o-right-4',
    'pc-o-bottom-1',
    'pc-o-bottom-2',
    'pc-o-bottom-3',
    'pc-o-bottom-4',
    'pc-o-color-dark',
    'pc-o-color-light',
    'pc-o-color-danger',
    'pc-o-color-info',
    'pc-o-color-primary',
    'pc-o-color-smooth',
    'pc-o-color-transparent',
    'pc-o-color-secondary',
    'pc-o-color-warning',
    'pc-o-color-green',
    'pc-overflow-hidden',
    'pc-overflow-scroll',
    'pc-overflow-auto',
    'pc-overflow-visible',
    'pc-overflowX-hidden',
    'pc-overflowX-scroll',
    'pc-overflowX-auto',
    'pc-overflowX-visible',
    'pc-overflowY-hidden',
    'pc-overflowY-scroll',
    'pc-overflowY-auto',
    'pc-overflowY-visible',
    'pc-overflow-break-word',
    'pc-overflow-normal',
    'pc-overflow-moz-unscrollable',
    'pc-p-auto',
    'pc-p-0px',
    'pc-p-5px',
    'pc-p-10px',
    'pc-p-15px',
    'pc-p-20px',
    'pc-p-25px',
    'pc-p-30px',
    'pc-p-35px',
    'pc-p-40px',
    'pc-p-45px',
    'pc-p-50px',
    'pc-p-55px',
    'pc-p-60px',
    'pc-p-65px',
    'pc-p-70px',
    'pc-p-75px',
    'pc-p-80px',
    'pc-p-85px',
    'pc-p-90px',
    'pc-p-95px',
    'pc-p-100px',
    'pc-p-200px',
    'pc-p-300px',
    'pc-p-400px',
    'pc-p-500px',
    'pc-p-600px',
    'pc-p-700px',
    'pc-p-800px',
    'pc-pt-auto',
    'pc-pt-0px',
    'pc-pt-5px',
    'pc-pt-10px',
    'pc-pt-15px',
    'pc-pt-20px',
    'pc-pt-25px',
    'pc-pt-30px',
    'pc-pt-35px',
    'pc-pt-40px',
    'pc-pt-45px',
    'pc-pt-50px',
    'pc-pt-55px',
    'pc-pt-60px',
    'pc-pt-65px',
    'pc-pt-70px',
    'pc-pt-75px',
    'pc-pt-80px',
    'pc-pt-85px',
    'pc-pt-90px',
    'pc-pt-95px',
    'pc-pt-100px',
    'pc-pt-200px',
    'pc-pt-300px',
    'pc-pt-400px',
    'pc-pt-500px',
    'pc-pt-600px',
    'pc-pt-700px',
    'pc-pt-800px',
    'pc-pl-auto',
    'pc-pl-0px',
    'pc-pl-5px',
    'pc-pl-10px',
    'pc-pl-15px',
    'pc-pl-20px',
    'pc-pl-25px',
    'pc-pl-30px',
    'pc-pl-35px',
    'pc-pl-40px',
    'pc-pl-45px',
    'pc-pl-50px',
    'pc-pl-55px',
    'pc-pl-60px',
    'pc-pl-65px',
    'pc-pl-70px',
    'pc-pl-75px',
    'pc-pl-80px',
    'pc-pl-85px',
    'pc-pl-90px',
    'pc-pl-95px',
    'pc-pl-100px',
    'pc-pl-200px',
    'pc-pl-300px',
    'pc-pl-400px',
    'pc-pl-500px',
    'pc-pl-600px',
    'pc-pl-700px',
    'pc-pl-800px',
    'pc-pr-auto',
    'pc-pr-0px',
    'pc-pr-5px',
    'pc-pr-10px',
    'pc-pr-15px',
    'pc-pr-20px',
    'pc-pr-25px',
    'pc-pr-30px',
    'pc-pr-35px',
    'pc-pr-40px',
    'pc-pr-45px',
    'pc-pr-50px',
    'pc-pr-55px',
    'pc-pr-60px',
    'pc-pr-65px',
    'pc-pr-70px',
    'pc-pr-75px',
    'pc-pr-80px',
    'pc-pr-85px',
    'pc-pr-90px',
    'pc-pr-95px',
    'pc-pr-100px',
    'pc-pr-200px',
    'pc-pr-300px',
    'pc-pr-400px',
    'pc-pr-500px',
    'pc-pr-600px',
    'pc-pr-700px',
    'pc-pr-800px',
    'pc-pb-auto',
    'pc-pb-0px',
    'pc-pb-5px',
    'pc-pb-10px',
    'pc-pb-15px',
    'pc-pb-20px',
    'pc-pb-25px',
    'pc-pb-30px',
    'pc-pb-35px',
    'pc-pb-40px',
    'pc-pb-45px',
    'pc-pb-50px',
    'pc-pb-55px',
    'pc-pb-60px',
    'pc-pb-65px',
    'pc-pb-70px',
    'pc-pb-75px',
    'pc-pb-80px',
    'pc-pb-85px',
    'pc-pb-90px',
    'pc-pb-95px',
    'pc-pb-100px',
    'pc-pb-200px',
    'pc-pb-300px',
    'pc-pb-400px',
    'pc-pb-500px',
    'pc-pb-600px',
    'pc-pb-700px',
    'pc-pb-800px',
    'pc-perspective--1',
    'pc-perspective--2',
    'pc-perspective--3',
    'pc-perspective--4',
    'pc-perspective-none',
    'pc-perspective-1',
    'pc-perspective-2',
    'pc-perspective-3',
    'pc-perspective-4',
    'pc-perspective-top',
    'pc-perspective-bottom',
    'pc-perspective-left',
    'pc-perspective-right',
    'pc-perspective-center',
    'pc-pst-relative',
    'pc-pst-absolute',
    'pc-pst-fixed',
    'pc-pst-sticky',
    'pc-pst-static',
    'pc-text-center',
    'pc-text-left',
    'pc-text-right',
    'pc-text-justify',
    'pc-color-dark',
    'pc-color-light',
    'pc-color-danger',
    'pc-color-info',
    'pc-color-primary',
    'pc-color-smooth',
    'pc-color-transparent',
    'pc-color-secondary',
    'pc-color-warning',
    'pc-color-green',
    'pc-color-white',
    'pc-text-shadow-sm',
    'pc-text-shadow-md',
    'pc-text-shadow-lg',
    'pc-text-shadow-xl',
    'pc-text-transform-upper',
    'pc-text-transform-lower',
    'pc-text-transform-capital',
    'pc-text-transform-none',
    'pc-t-auto',
    'pc-t-0px',
    'pc-t-5px',
    'pc-t-10px',
    'pc-t-15px',
    'pc-t-20px',
    'pc-t-25px',
    'pc-t-30px',
    'pc-t-35px',
    'pc-t-40px',
    'pc-t-45px',
    'pc-t-50px',
    'pc-t-55px',
    'pc-t-60px',
    'pc-t-65px',
    'pc-t-70px',
    'pc-t-75px',
    'pc-t-80px',
    'pc-t-85px',
    'pc-t-90px',
    'pc-t-95px',
    'pc-t-100px',
    'pc-t-200px',
    'pc-t-300px',
    'pc-t-400px',
    'pc-t-500px',
    'pc-t-600px',
    'pc-t-700px',
    'pc-t-800px',
    'pc-l-auto',
    'pc-l-0px',
    'pc-l-5px',
    'pc-l-10px',
    'pc-l-15px',
    'pc-l-20px',
    'pc-l-25px',
    'pc-l-30px',
    'pc-l-35px',
    'pc-l-40px',
    'pc-l-45px',
    'pc-l-50px',
    'pc-l-55px',
    'pc-l-60px',
    'pc-l-65px',
    'pc-l-70px',
    'pc-l-75px',
    'pc-l-80px',
    'pc-l-85px',
    'pc-l-90px',
    'pc-l-95px',
    'pc-l-100px',
    'pc-l-200px',
    'pc-l-300px',
    'pc-l-400px',
    'pc-l-500px',
    'pc-l-600px',
    'pc-l-700px',
    'pc-l-800px',
    'pc-r-auto',
    'pc-r-0px',
    'pc-r-5px',
    'pc-r-10px',
    'pc-r-15px',
    'pc-r-20px',
    'pc-r-25px',
    'pc-r-30px',
    'pc-r-35px',
    'pc-r-40px',
    'pc-r-45px',
    'pc-r-50px',
    'pc-r-55px',
    'pc-r-60px',
    'pc-r-65px',
    'pc-r-70px',
    'pc-r-75px',
    'pc-r-80px',
    'pc-r-85px',
    'pc-r-90px',
    'pc-r-95px',
    'pc-r-100px',
    'pc-r-200px',
    'pc-r-300px',
    'pc-r-400px',
    'pc-r-500px',
    'pc-r-600px',
    'pc-r-700px',
    'pc-r-800px',
    'pc-b-auto',
    'pc-b-0px',
    'pc-b-5px',
    'pc-b-10px',
    'pc-b-15px',
    'pc-b-20px',
    'pc-b-25px',
    'pc-b-30px',
    'pc-b-35px',
    'pc-b-40px',
    'pc-b-45px',
    'pc-b-50px',
    'pc-b-55px',
    'pc-b-60px',
    'pc-b-65px',
    'pc-b-70px',
    'pc-b-75px',
    'pc-b-80px',
    'pc-b-85px',
    'pc-b-90px',
    'pc-b-95px',
    'pc-b-100px',
    'pc-b-200px',
    'pc-b-300px',
    'pc-b-400px',
    'pc-b-500px',
    'pc-b-600px',
    'pc-b-700px',
    'pc-b-800px',
    'pc-rotate-0',
    'pc-rotate-30',
    'pc-rotate-45',
    'pc-rotate-90',
    'pc-rotate-120',
    'pc-rotate-180',
    'pc-rotate-360',
    'pc-scale--1',
    'pc-scale--2',
    'pc-scale--3',
    'pc-scale--4',
    'pc-scale--5',
    'pc-scale--6',
    'pc-scale--7',
    'pc-scale--8',
    'pc-scale--9',
    'pc-scale-1',
    'pc-scale-2',
    'pc-scale-3',
    'pc-scale-4',
    'pc-skew-1',
    'pc-skew-2',
    'pc-skew-3',
    'pc-skew-4',
    '-pc-skew-1',
    '-pc-skew-2',
    '-pc-skew-3',
    '-pc-skew-4',
    'pc-translate-1',
    'pc-translate-2',
    'pc-translate-3',
    'pc-translate-4',
    'pc-translate-middle',
    '-pc-translate-1',
    '-pc-translate-2',
    '-pc-translate-3',
    '-pc-translate-4',
    '-pc-translate-middle',
    'pc-translateX-1',
    'pc-translateX-2',
    'pc-translateX-3',
    'pc-translateX-4',
    'pc-translateX-middle',
    '-pc-translateX-1',
    '-pc-translateX-2',
    '-pc-translateX-3',
    '-pc-translateX-4',
    '-pc-translateX-middle',
    'pc-translateY-1',
    'pc-translateY-2',
    'pc-translateY-3',
    'pc-translateY-4',
    'pc-translateY-middle',
    '-pc-translateY-1',
    '-pc-translateY-2',
    '-pc-translateY-3',
    '-pc-translateY-4',
    '-pc-translateY-middle',
    'pc-translateZ-1',
    'pc-translateZ-2',
    'pc-translateZ-3',
    'pc-translateZ-4',
    'pc-translateZ-middle',
    '-pc-translateZ-1',
    '-pc-translateZ-2',
    '-pc-translateZ-3',
    '-pc-translateZ-4',
    '-pc-translateZ-middle',
    'pc-transition--1',
    'pc-transition--2',
    'pc-transition--3',
    'pc-transition--4',
    'pc-transition--5',
    'pc-transition--6',
    'pc-transition--7',
    'pc-transition--8',
    'pc-transition--9',
    'pc-transition-1',
    'pc-transition-2',
    'pc-transition-3',
    'pc-transition-4',
    'pc-visibility-collapse',
    'pc-visibility-hidden',
    'pc-visibility-visible',
    'pc-space-wrap',
    'pc-space-nowrap',
    'pc-space-pre',
    'pc-space-pre-line',
    'pc-space-pre-wrap',
    'pc-w-5',
    'pc-w-10',
    'pc-w-15',
    'pc-w-20',
    'pc-w-25',
    'pc-w-30',
    'pc-w-33',
    'pc-w-35',
    'pc-w-40',
    'pc-w-45',
    'pc-w-50',
    'pc-w-55',
    'pc-w-60',
    'pc-w-65',
    'pc-w-70',
    'pc-w-75',
    'pc-w-80',
    'pc-w-85',
    'pc-w-90',
    'pc-w-95',
    'pc-w-full',
    'pc-w-screen',
    'pc-w-min',
    'pc-w-max',
    'pc-w-half',
    'pc-w-5px',
    'pc-w-10px',
    'pc-w-15px',
    'pc-w-20px',
    'pc-w-25px',
    'pc-w-30px',
    'pc-w-35px',
    'pc-w-40px',
    'pc-w-45px',
    'pc-w-50px',
    'pc-w-55px',
    'pc-w-60px',
    'pc-w-65px',
    'pc-w-70px',
    'pc-w-75px',
    'pc-w-80px',
    'pc-w-85px',
    'pc-w-90px',
    'pc-w-95px',
    'pc-w-100px',
    'pc-w-200px',
    'pc-w-300px',
    'pc-w-400px',
    'pc-w-500px',
    'pc-w-600px',
    'pc-w-700px',
    'pc-w-800px',  
    'pc-h-5',
    'pc-h-10',
    'pc-h-15',
    'pc-h-20',
    'pc-h-25',
    'pc-h-30',
    'pc-h-35',
    'pc-h-40',
    'pc-h-45',
    'pc-h-50',
    'pc-h-55',
    'pc-h-60',
    'pc-h-65',
    'pc-h-70',
    'pc-h-75',
    'pc-h-80',
    'pc-h-85',
    'pc-h-90',
    'pc-h-95',
    'pc-h-full',
    'pc-h-screen',
    'pc-h-min',
    'pc-h-max',
    'pc-h-half',
    'pc-h-5px',
    'pc-h-10px',
    'pc-h-15px',
    'pc-h-20px',
    'pc-h-25px',
    'pc-h-30px',
    'pc-h-35px',
    'pc-h-40px',
    'pc-h-45px',
    'pc-h-50px',
    'pc-h-55px',
    'pc-h-60px',
    'pc-h-65px',
    'pc-h-70px',
    'pc-h-75px',
    'pc-h-80px',
    'pc-h-85px',
    'pc-h-90px',
    'pc-h-95px',
    'pc-h-100px',
    'pc-h-200px',
    'pc-h-300px',
    'pc-h-400px',
    'pc-h-500px',
    'pc-h-600px',
    'pc-h-700px',
    'pc-h-800px',
    'pc-word-spacing-normal',
    'pc-word-spacing-1',
    'pc-word-spacing-2',
    'pc-word-spacing-3',
    'pc-word-spacing-4',
    'pc-word-wrap-normal',
    'pc-word-wrap-break-word',
    'pc-index--1',
    'pc-index--2',
    'pc-index--3',
    'pc-index--4',
    'pc-index-0',
    'pc-index-1',
    'pc-index-2',
    'pc-index-3',
    'pc-index-4',
    'pc-d-flex',
    'pc-d-block',
    'pc-d-flexbox',
    'pc-d-inline',
    'pc-d-table',
    'pc-d-inline-flex',
    'pc-d-inline-block',
    'pc-d-inline-flexbox',
    'pc-d-inline-table',
    'pc-d-grid',
    'pc-d-table-row',
    'pc-d-table-cell',
    'pc-d-table-column',
    'pc-d-none',
]
let valuesDisplay4 = [
    'align-content: center;',
    'align-content: flex-end;',
    'align-content: flex-start;',
    'align-content: space-evenly;',
    'align-content: space-between;',
    'align-content: space-around;',
    'align-items: center;',
    'align-items: flex-end;',
    'align-items: flex-start;',
    'align-items: stretch;',
    'align-items: baseline;',
    'align-self: center;',
    'align-self: flex-end;',
    'align-self: flex-start;',
    'align-self: stretch;',
    'align-self: baseline;',
    'align-self: auto;',
    'background-attachment: fixed',
    'background-attachment: local',
    'background-attachment: scroll',
    'background-blend-mode: color',
    'background-blend-mode: multiply',
    'background-blend-mode: screen',
    'background-blend-mode: normal',
    'background-blend-mode: darken',
    'background-blend-mode: lighten',
    'background-clip: border-box',
    'background-clip: padding-box',
    'background-clip: content-box',
    'background-clip: text',
    'background-color: rgb(70, 70, 70);',
    'background-color: rgb(238, 238, 238);',
    'background-color: rgb(255, 76, 44);',
    'background-color: rgb(2, 168, 245);',
    'background-color: rgb(42, 131, 248);',
    'background-color: rgb(255, 242, 242);',
    'background-color: transparent;',
    'background-color: rgb(141, 141, 141);',
    'background-color: rgb(253, 207, 0);',
    'background-color: #0de982;',
    'background-color: #fff;',
    'background-origin: content-box',
    'background-origin: border-box',
    'background-origin: padding-box',
    'background-position: center',
    'background-position: top',
    'background-position: left',
    'background-position: right',
    'background-position: bottom',
    'background-position: -20%',
    'background-position: -40%',
    'background-position: -60%',
    'background-position: -80%',
    'background-position: -100%',
    'background-position: 0%',
    'background-position: 20%',
    'background-position: 40%',
    'background-position: 60%',
    'background-position: 80%',
    'background-position: 100%',
    'background-repeat: repeat',
    'background-repeat: no-repeat',
    'background-size: auto',
    'background-size: contain',
    'background-size: cover',
    'background-size: -20%',
    'background-size: -40%',
    'background-size: -60%',
    'background-size: -80%',
    'background-size: -100%',
    'background-size: 0%',
    'background-size: 20%',
    'background-size: 40%',
    'background-size: 60%',
    'background-size: 80%',
    'background-size: 100%',
    'border: dotted;',
    'border: dashed;',
    'border: double',
    'border: groove;',
    'border: solid',
    'border: ridge;',
    'border: none;',
    'border-radius: 5px;',
    'border-radius: 10px;',
    'border-radius: 15px;',
    'border-radius: 20px;',
    'border-radius: 99999px;',
    'border: 1px solid black;',
    'border: 2px solid black;',
    'border: 3px solid black;',
    'border: 4px solid black;',
    'border-top: 1px solid black;',
    'border-top: 2px solid black;',
    'border-top: 3px solid black;',
    'border-top: 4px solid black;',
    'border-left: 1px solid black;',
    'border-left: 2px solid black;',
    'border-left: 3px solid black;',
    'border-left: 4px solid black;',
    'border-right: 1px solid black;',
    'border-right: 2px solid black;',
    'border-right: 3px solid black;',
    'border-right: 4px solid black;',
    'border-bottom: 1px solid black;',
    'border-bottom: 2px solid black;',
    'border-bottom: 3px solid black;',
    'border-bottom: 4px solid black;',
    'border-color: rgb(70, 70, 70);',
    'border-color: rgb(238, 238, 238);',
    'border-color: rgb(255, 76, 44);',
    'border-color: rgb(2, 168, 245);',
    'border-color: rgb(42, 131, 248);',
    'border-color: rgb(255, 242, 242);',
    'border-color: transparent;',
    'border-color: rgb(141, 141, 141);',
    'border-color: rgb(253, 207, 0);',
    'border-color: rgb(14, 253, 201);',
    'border-collapse: collapse;',
    'border-collapse: separate',
    'box-shadow: 2px 2px 2px rgb(199, 199, 199);',
    'box-shadow: 3px 3px 3px rgb(197, 197, 197);',
    'box-shadow: 3.5px 3.5px 2px rgb(197, 197, 197);',
    'box-shadow: 4px 4px 2px rgb(173, 173, 173);',
    'box-sizing: border-box;',
    'box-sizing: content-box;',
    'column-count: 1;padding: 10px;',
    'column-count: 2;padding: 10px;',
    'column-count: 3;padding: 10px;',
    'column-count: 4;padding: 10px;',
    'cursor: pointer;',
    'cursor: col-resize;',
    'cursor: context-menu;',
    'cursor: all-scroll;',
    'cursor: cell;',
    'cursor: alias;',
    'cursor: default;',
    'cursor: none;',
    'cursor: progress;',
    'text-decoration: none',
    'text-decoration: dashed;',
    'text-decoration: double;',
    'text-decoration: line-through;',
    'text-decoration: overline;',
    'text-decoration: solid;',
    'text-decoration: underline;',
    'empty-cells: show',
    'empty-cells: hidden;',
    'filter: blur(0px);',
    'filter: blur(2px);',
    'filter: blur(4px);',
    'filter: blur(6px);',
    'filter: blur(8px);',
    'filter: blur(10px);',
    'filter: gryscale(0%);',
    'filter: gryscale(20%);',
    'filter: gryscale(40%);',
    'filter: gryscale(60%);',
    'filter: gryscale(80%);',
    'filter: gryscale(100%);',
    'filter: saturate(0%);',
    'filter: saturate(20%);',
    'filter: saturate(40%);',
    'filter: saturate(60%);',
    'filter: saturate(80%);',
    'filter: saturate(100%);',
    'filter: brightness(0%);',
    'filter: brightness(20%);',
    'filter: brightness(40%);',
    'filter: brightness(60%);',
    'filter: brightness(80%);',
    'filter: brightness(100%);',
    'filter: contrast(0%);',
    'filter: contrast(20%);',
    'filter: contrast(40%);',
    'filter: contrast(60%);',
    'filter: contrast(80%);',
    'filter: contrast(100%);',
    'flex: 0.20;',
    'flex: 0.40;',
    'flex: 0.60;',
    'flex: 0.80;',
    'flex: 0;',
    'flex: 1;',
    'flex: 2;',
    'flex: 3;',
    'flex: 4;',
    'flex: auto;',
    'flex: content;',
    'flex: none;',
    'flex-basis: auto;',
    'flex-basis: content;',
    'flex-wrap: wrap;',
    'flex-wrap: nowrap;',
    'flex-wrap: wrap-reverse;',
    'flex-direction: column;',
    'flex-direction: column-reverse;',
    'flex-direction: row;',
    'flex-direction: row-reverse;',
    'flex-shrink: 1;',
    'flex-shrink: 2;',
    'flex-shrink: 3;',
    'flex-shrink: 4;',
    'float: left;',
    'float: right;',
    'float: none;',
    'float: inline-end;',
    'float: inline-start;',
    'font-weight: normal;',
    'font-weight: bold;',
    'font-weight: 100;',
    'font-weight: 200;',
    'font-weight: 300;',
    'font-weight: 400;',
    'font-weight: 500;',
    'font-weight: 600;',
    'font-weight: 700;',
    'font-weight: 800;',
    'font-style: italic;',
    'font-style: normal;',
    'font-style: oblique;',
    'font-size: 15px;',
    'font-size: 20px;',
    'font-size: 25px;',
    'font-size: 30px;',
    'font-size: 10px;',
    'font-size: 12px;',
    'font-size: 14px;',
    'font-size: 16px;',
    'font-size: 18px;',
    'font-size: 20px;',
    'font-size: 22px;',
    'font-size: 24px;',
    'font-size: 26px;',
    'font-size: 28px;',
    'font-size: 30px;',
    'font-size: 32px;',
    'font-size: 34px;',
    'font-size: 36px;',
    'font-size: 38px;',
    'font-size: 40px;',
    'font-size: 42px;',
    'font-size: 44px;',
    'font-size: 46px;',
    'font-size: 48px;',
    'font-size: 50px;',
    'font-size: 52px;',
    'font-size: 54px;',
    'font-size: 56px;',
    'font-size: 58px;',
    'font-size: 60px;',
    'font-size: 62px;',
    'font-size: 64px;',
    'font-size: 66px;',
    'font-size: 68px;',
    'font-size: 70px;',
    `grid-template-columns: auto; display: flex; flex-wrap: wrap;flex-direction: column;padding: 10px;box-sizing: border-box;`,
    `grid-template-columns: auto auto; display: flex; flex-wrap: wrap;flex-direction: column;box-sizing: border-box;`,
    `grid-template-columns: auto auto auto; display: flex; flex-wrap: wrap;flex-direction: column;box-sizing: border-box;`,
    `grid-template-columns: auto auto auto auto; display: flex; flex-wrap: wrap;flex-direction: column;box-sizing: border-box;`,
    `grid-gap: 5px`,
    `grid-gap: 10px`,
    `grid-gap: 15px`,
    `grid-gap: 20px`,
    `padding: 20px 0; 
     flex: 1; `,
    'justify-content: center',
    'justify-content: left',
    'justify-content: right;',
    'justify-content: safe;',
    'justify-content: unsafe;',
    'justify-content: start',
    'justify-content: end',
    'justify-content: flex-start;',
    'justify-content: flex-end;',
    'justify-content: space-between;',
    'justify-content: space-around',
    'justify-content: space-evenly',
    'justify-content: stretch;',
    'justify-content: last baseline;',
    'justify-items: auto',
    'justify-items: start',
    'justify-items: end;',
    'justify-items: center;',
    'justify-items: flex-end;',
    'justify-items: flex-start;',
    'justify-self: auto',
    'justify-self: start',
    'justify-self: end;',
    'justify-self: center;',
    'justify-self: stretch;',
    'letter-spacing: normal',
    'letter-spacing: 10px',
    'letter-spacing: 15px',
    'letter-spacing: 20px',
    'letter-spacing: 25px',
    'line-height: .75rem;',
    'line-height: 1rem;',
    'line-height: 1.25rem;',
    'line-height: 1.5rem;',
    'line-height: 1;',
    'line-height: 1.25;',
    'line-height: 1.375;',
    'line-height: 1.5;',
    'line-height: 1.625;',
    'line-height: 2;',
    'list-style-type: none',
    'list-style-type: square',
    'list-style-type: circle;',
    'list-style-type: desc;',
    'list-style-type: decimal;',
    'list-style-type: armenian',
    'list-style-type: georgian',
    'margin: auto;',
    'margin: 0px;',
    'margin: 5px;',
    'margin: 10px;',
    'margin: 15px;',
    'margin: 20px;',
    'margin: 25px;',
    'margin: 30px;',
    'margin: 35px;',
    'margin: 40px;',
    'margin: 45px;',
    'margin: 50px;',
    'margin: 55px;',
    'margin: 60px;',
    'margin: 65px;',
    'margin: 70px;',
    'margin: 75px;',
    'margin: 80px;',
    'margin: 85px;',
    'margin: 90px;',
    'margin: 95px;',
    'margin: 100px;',
    'margin: 200px;',
    'margin: 300px;',
    'margin: 400px;',
    'margin: 500px;',
    'margin: 600px;',
    'margin: 700px;',
    'margin: 800px;',
    'margin-top: auto;',
    'margin-top: 0px;',
    'margin-top: 5px;',
    'margin-top: 10px;',
    'margin-top: 15px;',
    'margin-top: 20px;',
    'margin-top: 25px;',
    'margin-top: 30px;',
    'margin-top: 35px;',
    'margin-top: 40px;',
    'margin-top: 45px;',
    'margin-top: 50px;',
    'margin-top: 55px;',
    'margin-top: 60px;',
    'margin-top: 65px;',
    'margin-top: 70px;',
    'margin-top: 75px;',
    'margin-top: 80px;',
    'margin-top: 85px;',
    'margin-top: 90px;',
    'margin-top: 95px;',
    'margin-top: 100px;',
    'margin-top: 200px;',
    'margin-top: 300px;',
    'margin-top: 400px;',
    'margin-top: 500px;',
    'margin-top: 600px;',
    'margin-top: 700px;',
    'margin-top: 800px;',
    'margin-left: auto;',
    'margin-left: 0px;',
    'margin-left: 5px;',
    'margin-left: 10px;',
    'margin-left: 15px;',
    'margin-left: 20px;',
    'margin-left: 25px;',
    'margin-left: 30px;',
    'margin-left: 35px;',
    'margin-left: 40px;',
    'margin-left: 45px;',
    'margin-left: 50px;',
    'margin-left: 55px;',
    'margin-left: 60px;',
    'margin-left: 65px;',
    'margin-left: 70px;',
    'margin-left: 75px;',
    'margin-left: 80px;',
    'margin-left: 85px;',
    'margin-left: 90px;',
    'margin-left: 95px;',
    'margin-left: 100px;',
    'margin-left: 200px;',
    'margin-left: 300px;',
    'margin-left: 400px;',
    'margin-left: 500px;',
    'margin-left: 600px;',
    'margin-left: 700px;',
    'margin-left: 800px;',
    'margin-right: auto;',
    'margin-right: 0px;',
    'margin-right: 5px;',
    'margin-right: 10px;',
    'margin-right: 15px;',
    'margin-right: 20px;',
    'margin-right: 25px;',
    'margin-right: 30px;',
    'margin-right: 35px;',
    'margin-right: 40px;',
    'margin-right: 45px;',
    'margin-right: 50px;',
    'margin-right: 55px;',
    'margin-right: 60px;',
    'margin-right: 65px;',
    'margin-right: 70px;',
    'margin-right: 75px;',
    'margin-right: 80px;',
    'margin-right: 85px;',
    'margin-right: 90px;',
    'margin-right: 95px;',
    'margin-right: 100px;',
    'margin-right: 200px;',
    'margin-right: 300px;',
    'margin-right: 400px;',
    'margin-right: 500px;',
    'margin-right: 600px;',
    'margin-right: 700px;',
    'margin-right: 800px;',
    'margin-bottom: auto;',
    'margin-bottom: 0px;',
    'margin-bottom: 5px;',
    'margin-bottom: 10px;',
    'margin-bottom: 15px;',
    'margin-bottom: 20px;',
    'margin-bottom: 25px;',
    'margin-bottom: 30px;',
    'margin-bottom: 35px;',
    'margin-bottom: 40px;',
    'margin-bottom: 45px;',
    'margin-bottom: 50px;',
    'margin-bottom: 55px;',
    'margin-bottom: 60px;',
    'margin-bottom: 65px;',
    'margin-bottom: 70px;',
    'margin-bottom: 75px;',
    'margin-bottom: 80px;',
    'margin-bottom: 85px;',
    'margin-bottom: 90px;',
    'margin-bottom: 95px;',
    'margin-bottom: 100px;',
    'margin-bottom: 200px;',
    'margin-bottom: 300px;',
    'margin-bottom: 400px;',
    'margin-bottom: 500px;',
    'margin-bottom: 600px;',
    'margin-bottom: 700px;',
    'margin-bottom: 800px;',
    'opacity: 0%',
    'opacity: 25%',
    'opacity: 50%;',
    'opacity: 75%;',
    'opacity: 100%;',
    'outline: dotted;',
    'outline: dashed;',
    'outline: double',
    'outline: groove;',
    'outline: solid',
    'outline: ridge;',
    'outline: none;',
    'outline: 1px;',
    'outline: 2px;',
    'outline: 3px;',
    'outline: 4px;',
    'outline-top: 1px;',
    'outline-top: 2px;',
    'outline-top: 3px;',
    'outline-top: 4px;',
    'outline-left: 1px;',
    'outline-left: 2px;',
    'outline-left: 3px;',
    'outline-left: 4px;',
    'outline-right: 1px;',
    'outline-right: 2px;',
    'outline-right: 3px;',
    'outline-right: 4px;',
    'outline-bottom: 1px;',
    'outline-bottom: 2px;',
    'outline-bottom: 3px;',
    'outline-bottom: 4px;',
    'outline-color: rgb(70, 70, 70);',
    'outline-color: rgb(238, 238, 238);',
    'outline-color: rgb(255, 76, 44);',
    'outline-color: rgb(2, 168, 245);',
    'outline-color: rgb(42, 131, 248);',
    'outline-color: rgb(255, 242, 242);',
    'outline-color: transparent;',
    'outline-color: rgb(141, 141, 141);',
    'outline-color: rgb(253, 207, 0);',
    'outline-color: rgb(11, 245, 101);',
    'overflow: hidden;',
    'overflow: scroll;',
    'overflow: auto;',
    'overflow: visible;',
    'overflow-x: hidden;',
    'overflow-x: scroll;',
    'overflow-x: auto;',
    'overflow-x: visible;',
    'overflow-y: hidden;',
    'overflow-y: scroll;',
    'overflow-y: auto;',
    'overflow-y: visible;',
    'overflow-wrap: break-word;',
    'overflow-wrap: normal;',
    'overflow: moz-hidden-unscrollable;',
    'padding: auto;',
    'padding: 0px;',
    'padding: 5px;',
    'padding: 10px;',
    'padding: 15px;',
    'padding: 20px;',
    'padding: 25px;',
    'padding: 30px;',
    'padding: 35px;',
    'padding: 40px;',
    'padding: 45px;',
    'padding: 50px;',
    'padding: 55px;',
    'padding: 60px;',
    'padding: 65px;',
    'padding: 70px;',
    'padding: 75px;',
    'padding: 80px;',
    'padding: 85px;',
    'padding: 90px;',
    'padding: 95px;',
    'padding: 100px;',
    'padding: 200px;',
    'padding: 300px;',
    'padding: 400px;',
    'padding: 500px;',
    'padding: 600px;',
    'padding: 700px;',
    'padding: 800px;',
    'padding-top: auto;',
    'padding-top: 0px;',
    'padding-top: 5px;',
    'padding-top: 10px;',
    'padding-top: 15px;',
    'padding-top: 20px;',
    'padding-top: 25px;',
    'padding-top: 30px;',
    'padding-top: 35px;',
    'padding-top: 40px;',
    'padding-top: 45px;',
    'padding-top: 50px;',
    'padding-top: 55px;',
    'padding-top: 60px;',
    'padding-top: 65px;',
    'padding-top: 70px;',
    'padding-top: 75px;',
    'padding-top: 80px;',
    'padding-top: 85px;',
    'padding-top: 90px;',
    'padding-top: 95px;',
    'padding-top: 100px;',
    'padding-top: 200px;',
    'padding-top: 300px;',
    'padding-top: 400px;',
    'padding-top: 500px;',
    'padding-top: 600px;',
    'padding-top: 700px;',
    'padding-top: 800px;',
    'padding-left: auto;',
    'padding-left: 0px;',
    'padding-left: 5px;',
    'padding-left: 10px;',
    'padding-left: 15px;',
    'padding-left: 20px;',
    'padding-left: 25px;',
    'padding-left: 30px;',
    'padding-left: 35px;',
    'padding-left: 40px;',
    'padding-left: 45px;',
    'padding-left: 50px;',
    'padding-left: 55px;',
    'padding-left: 60px;',
    'padding-left: 65px;',
    'padding-left: 70px;',
    'padding-left: 75px;',
    'padding-left: 80px;',
    'padding-left: 85px;',
    'padding-left: 90px;',
    'padding-left: 95px;',
    'padding-left: 100px;',
    'padding-left: 200px;',
    'padding-left: 300px;',
    'padding-left: 400px;',
    'padding-left: 500px;',
    'padding-left: 600px;',
    'padding-left: 700px;',
    'padding-left: 800px;',
    'padding-right: auto;',
    'padding-right: 0px;',
    'padding-right: 5px;',
    'padding-right: 10px;',
    'padding-right: 15px;',
    'padding-right: 20px;',
    'padding-right: 25px;',
    'padding-right: 30px;',
    'padding-right: 35px;',
    'padding-right: 40px;',
    'padding-right: 45px;',
    'padding-right: 50px;',
    'padding-right: 55px;',
    'padding-right: 60px;',
    'padding-right: 65px;',
    'padding-right: 70px;',
    'padding-right: 75px;',
    'padding-right: 80px;',
    'padding-right: 85px;',
    'padding-right: 90px;',
    'padding-right: 95px;',
    'padding-right: 100px;',
    'padding-right: 200px;',
    'padding-right: 300px;',
    'padding-right: 400px;',
    'padding-right: 500px;',
    'padding-right: 600px;',
    'padding-right: 700px;',
    'padding-right: 800px;',
    'padding-bottom: auto;',
    'padding-bottom: 0px;',
    'padding-bottom: 5px;',
    'padding-bottom: 10px;',
    'padding-bottom: 15px;',
    'padding-bottom: 20px;',
    'padding-bottom: 25px;',
    'padding-bottom: 30px;',
    'padding-bottom: 35px;',
    'padding-bottom: 40px;',
    'padding-bottom: 45px;',
    'padding-bottom: 50px;',
    'padding-bottom: 55px;',
    'padding-bottom: 60px;',
    'padding-bottom: 65px;',
    'padding-bottom: 70px;',
    'padding-bottom: 75px;',
    'padding-bottom: 80px;',
    'padding-bottom: 85px;',
    'padding-bottom: 90px;',
    'padding-bottom: 95px;',
    'padding-bottom: 100px;',
    'padding-bottom: 200px;',
    'padding-bottom: 300px;',
    'padding-bottom: 400px;',
    'padding-bottom: 500px;',
    'padding-bottom: 600px;',
    'padding-bottom: 700px;',
    'padding-bottom: 800px;',
    'perspective: -20px;',
    'perspective: -40px;',
    'perspective: -60px;',
    'perspective: -80px;',
    'perspective: none;',
    'perspective: 20px;',
    'perspective: 40px;',
    'perspective: 60px;',
    'perspective: 80px;',
    'perspective-origin: top;',
    'perspective-origin: bottom;',
    'perspective-origin: left;',
    'perspective-origin: right;',
    'perspective-origin: center;',
    'position: relative;',
    'position: absolute;',
    'position: fixed;',
    'position: sticky;',
    'position: static;',
    'text-align: center;',
    'text-align: left;',
    'text-align: right;',
    'text-align: justify;',
    'color: black;',
    'color: rgb(238, 238, 238);',
    'color: rgb(255, 76, 44);',
    'color: rgb(2, 168, 245);',
    'color: rgb(42, 131, 248);',
    'color: rgb(255, 242, 242);',
    'color: transparent;',
    'color: rgb(141, 141, 141);',
    'color: rgb(253, 207, 0);',
    'color: #0de982;',
    'color: #fff;',
    'text-shadow: 2px 2px 2px rgb(199, 199, 199);',
    'text-shadow: 3px 3px 3px rgb(197, 197, 197);',
    'text-shadow: 3.5px 3.5px 2px rgb(197, 197, 197);',
    'text-shadow: 4px 4px 2px rgb(173, 173, 173);',
    'text-transform: uppercase;',
    'text-transform: lowercase;',
    'text-transform: capitalize;',
    'text-transform: none;',
    'top: auto;',
    'top: 0px;',
    'top: 5px;',
    'top: 10px;',
    'top: 15px;',
    'top: 20px;',
    'top: 25px;',
    'top: 30px;',
    'top: 35px;',
    'top: 40px;',
    'top: 45px;',
    'top: 50px;',
    'top: 55px;',
    'top: 60px;',
    'top: 65px;',
    'top: 70px;',
    'top: 75px;',
    'top: 80px;',
    'top: 85px;',
    'top: 90px;',
    'top: 95px;',
    'top: 100px;',
    'top: 200px;',
    'top: 300px;',
    'top: 400px;',
    'top: 500px;',
    'top: 600px;',
    'top: 700px;',
    'top: 800px;',
    'left: auto;',
    'left: 0px;',
    'left: 5px;',
    'left: 10px;',
    'left: 15px;',
    'left: 20px;',
    'left: 25px;',
    'left: 30px;',
    'left: 35px;',
    'left: 40px;',
    'left: 45px;',
    'left: 50px;',
    'left: 55px;',
    'left: 60px;',
    'left: 65px;',
    'left: 70px;',
    'left: 75px;',
    'left: 80px;',
    'left: 85px;',
    'left: 90px;',
    'left: 95px;',
    'left: 100px;',
    'left: 200px;',
    'left: 300px;',
    'left: 400px;',
    'left: 500px;',
    'left: 600px;',
    'left: 700px;',
    'left: 800px;',
    'right: auto;',
    'right: 0px;',
    'right: 5px;',
    'right: 10px;',
    'right: 15px;',
    'right: 20px;',
    'right: 25px;',
    'right: 30px;',
    'right: 35px;',
    'right: 40px;',
    'right: 45px;',
    'right: 50px;',
    'right: 55px;',
    'right: 60px;',
    'right: 65px;',
    'right: 70px;',
    'right: 75px;',
    'right: 80px;',
    'right: 85px;',
    'right: 90px;',
    'right: 95px;',
    'right: 100px;',
    'right: 200px;',
    'right: 300px;',
    'right: 400px;',
    'right: 500px;',
    'right: 600px;',
    'right: 700px;',
    'right: 800px;',
    'bottom: auto;',
    'bottom: 0px;',
    'bottom: 5px;',
    'bottom: 10px;',
    'bottom: 15px;',
    'bottom: 20px;',
    'bottom: 25px;',
    'bottom: 30px;',
    'bottom: 35px;',
    'bottom: 40px;',
    'bottom: 45px;',
    'bottom: 50px;',
    'bottom: 55px;',
    'bottom: 60px;',
    'bottom: 65px;',
    'bottom: 70px;',
    'bottom: 75px;',
    'bottom: 80px;',
    'bottom: 85px;',
    'bottom: 90px;',
    'bottom: 95px;',
    'bottom: 100px;',
    'bottom: 200px;',
    'bottom: 300px;',
    'bottom: 400px;',
    'bottom: 500px;',
    'bottom: 600px;',
    'bottom: 700px;',
    'bottom: 800px;',
    'transform: rotate(0deg)',
    'transform: rotate(30deg)',
    'transform: rotate(45deg)',
    'transform: rotate(90deg)',
    'transform: rotate(120deg)',
    'transform: rotate(180deg)',
    'transform: rotate(360deg)',
    'transform: scale(0.1)',
    'transform: scale(0.2)',
    'transform: scale(0.3)',
    'transform: scale(0.4)',
    'transform: scale(0.5)',
    'transform: scale(0.6)',
    'transform: scale(0.7)',
    'transform: scale(0.8)',
    'transform: scale(0.9)',
    'transform: scale(1)',
    'transform: scale(2)',
    'transform: scale(3)',
    'transform: scale(4)',
    'transform: skew(5deg)',
    'transform: skew(10deg)',
    'transform: skew(15deg)',
    'transform: skew(20deg)',
    'transform: skew(-5deg)',
    'transform: skew(-10deg)',
    'transform: skew(-15deg)',
    'transform: skew(-20deg)',
    'transform: translate(10%)',
    'transform: translate(20%)',
    'transform: translate(30%)',
    'transform: translate(40%)',
    'transform: translate(50%)',
    'transform: translate(-10%)',
    'transform: translate(-20%)',
    'transform: translate(-30%)',
    'transform: translate(-40%)',
    'transform: translate(-50%)',
    'transform: translateX(10%)',
    'transform: translateX(20%)',
    'transform: translateX(30%)',
    'transform: translateX(40%)',
    'transform: translateX(50%)',
    'transform: translateX(-10%)',
    'transform: translateX(-20%)',
    'transform: translateX(-30%)',
    'transform: translateX(-40%)',
    'transform: translateX(-50%)',
    'transform: translateY(10%)',
    'transform: translateY(20%)',
    'transform: translateY(30%)',
    'transform: translateY(40%)',
    'transform: translateY(50%)',
    'transform: translateY(-10%)',
    'transform: translateY(-20%)',
    'transform: translateY(-30%)',
    'transform: translateY(-40%)',
    'transform: translateY(-50%)',
    'transform: translateZ(10%)',
    'transform: translateZ(20%)',
    'transform: translateZ(30%)',
    'transform: translateZ(40%)',
    'transform: translateZ(50%)',
    'transform: translateZ(-10%)',
    'transform: translateZ(-20%)',
    'transform: translateZ(-30%)',
    'transform: translateZ(-40%)',
    'transform: translateZ(-50%)',
    'transition: 0.1s;',
    'transition: 0.2s;',
    'transition: 0.3s;',
    'transition: 0.4s;',
    'transition: 0.5s;',
    'transition: 0.6s;',
    'transition: 0.7s',
    'transition: 0.8s;',
    'transition: 0.9s;',
    'transition: 1s;',
    'transition: 2s;',
    'transition: 3s;',
    'transition: 4s;',
    'visibility: collapse;',
    'visibility: hidden;',
    'visibility: visible;',
    'white-space: collapse;',
    'white-space: hidden;',
    'white-space: pre;',
    'white-space: pre-line;',
    'white-space: pre-wrap;',
    'width: 5%;',
    'width: 10%;',
    'width: 15%;',
    'width: 20%;',
    'width: 25%;',
    'width: 30%;',
    'width: 33%;',
    'width: 35%;',
    'width: 40%;',
    'width: 45%;',
    'width: 50%;',
    'width: 55%;',
    'width: 60%;',
    'width: 65%;',
    'width: 70%;',
    'width: 75%;',
    'width: 80%;',
    'width: 85%;',
    'width: 90%;',
    'width: 95%;',
    'width: 100%;',
    'width: 100vw;',
    'width: min-content;',
    'width: max-content;',
    'width: 50%;',
    'width: 5px;',
    'width: 10px;',
    'width: 15px;',
    'width: 20px;',
    'width: 25px;',
    'width: 30px;',
    'width: 35px;',
    'width: 40px;',
    'width: 45px;',
    'width: 50px;',
    'width: 55px;',
    'width: 60px;',
    'width: 65px;',
    'width: 70px;',
    'width: 75px;',
    'width: 80px;',
    'width: 85px;',
    'width: 90px;',
    'width: 95px;',
    'width: 100px;',
    'width: 200px;',
    'width: 300px;',
    'width: 400px;',
    'width: 500px;',
    'width: 600px;',
    'width: 700px;',
    'width: 800px;',
    'height: 5%;',
    'height: 10%;',
    'height: 15%;',
    'height: 20%;',
    'height: 25%;',
    'height: 30%;',
    'height: 35%;',
    'height: 40%;',
    'height: 45%;',
    'height: 50%;',
    'height: 55%;',
    'height: 60%;',
    'height: 65%;',
    'height: 70%;',
    'height: 75%;',
    'height: 80%;',
    'height: 85%;',
    'height: 90%;',
    'height: 95%;',
    'height: 100%;',
    'height: 100vh;',
    'height: min-content;',
    'height: max-content;',
    'height: 50%;',
    'height: 5px;',
    'height: 10px;',
    'height: 15px;',
    'height: 20px;',
    'height: 25px;',
    'height: 30px;',
    'height: 35px;',
    'height: 40px;',
    'height: 45px;',
    'height: 50px;',
    'height: 55px;',
    'height: 60px;',
    'height: 65px;',
    'height: 70px;',
    'height: 75px;',
    'height: 80px;',
    'height: 85px;',
    'height: 90px;',
    'height: 95px;',
    'height: 100px;',
    'height: 200px;',
    'height: 300px;',
    'height: 400px;',
    'height: 500px;',
    'height: 600px;',
    'height: 700px;',
    'height: 800px;',
    'word-spacing: normal',
    'word-spacing: 10px',
    'word-spacing: 20px',
    'word-spacing: 30px',
    'word-spacing: 40px',
    'word-wrap: normal',
    'word-wrap: break-word',
    'z-index: -1;',
    'z-index: -2;',
    'z-index: -3;',
    'z-index: -4;',
    'z-index: 0;',
    'z-index: 1;',
    'z-index: 2;',
    'z-index: 3;',
    'z-index: 4;',
    'display: flex',
    'display: block;',
    'display: flexbox;',
    'display: inline;',
    'display: table',
    'display: inline-flex;',
    'display: inline-block;',
    'display: inline-flexbox;',
    'display: inline-table;',
    'display: grid;',
    'display: table-row;',
    'display: table-cell;',
    'display: table-column;',
    'display: none;',
]

for (var i = 0; i <= propertiesDisplay4.length; i++) {
    if (document.querySelector(`.${propertiesDisplay4[i]}`) && !document.querySelector('style').innerText.includes(propertiesDisplay4[i])) {
        let styles = ` 
            @media screen and (min-width: 1920px) {
                .${propertiesDisplay4[i]} { 
                    ${valuesDisplay4[i]}
                }
            }`;
        document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
    }
}
Core(document.body);

let propertiesActive = [
    'v-active-scale',
    'v-active-up',
    'v-active-pulse'
]
let valuesActive = [
    `
        transition: 0.3s;
        transform: scale(1);
        `,
    `
        transition: 0.3s;
        `,
    `
        transition: 0.3s;
    `
]
let Active = [
    `
        .v-active-scale:active {
            transition: 0.3s;
            transform: scale(0.97);
        }`,
    `
        .v-active-up:active {
            transition: 0.3s;
            margin-top: -10px;
        }`,
    `
        .v-active-pulse:active {
            transition: 0.3s;
            opacity: 0.7;
        }`
]
for (var i = 0; i <= propertiesActive.length; i++) {
        if (document.querySelector(`.${propertiesActive[i]}`) && !document.querySelector('style').innerText.includes(propertiesActive[i])) {
            let styles = ` 
                    .${propertiesActive[i]} { 
                        ${valuesActive[i]}
                    }
                    ${Active[i]}`;
            document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
        }
    }

let propertiesHover = [
    'v-hover-scale',
    'v-hover-up',
    'v-hover-pulse'
]
let valuesHover = [
    `
    transition: 0.3s;
    transform: scale(1);
    `,
    `
    transition: 0.3s;
    margin-top: 0px;
    `,
    `
    transition: 0.3s;
    opacity: 1;
   `
]
let hover = [
    `
    .v-hover-scale:hover {
        transition: 0.3s;
        transform: scale(0.97);
    }`,
    `
    .v-hover-up:hover {
        transition: 0.3s;
        margin-top: -10px;
    }`,
    `
    .v-hover-pulse:hover {
        transition: 0.3s;
        opacity: 0.5;
    }`
]
for (var i = 0; i <= propertiesHover.length; i++) {
        if (document.querySelector(`.${propertiesHover[i]}`) && !document.querySelector('style').innerText.includes(propertiesHover[i])) {
            let styles = ` 
                .${propertiesHover[i]} { 
                    ${valuesHover[i]}
                }
                ${hover[i]}`;
            document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
        }
    }
let propertiesFocus = [
    'v-focus-scale',
    'v-focus-pulse',
    'v-focus-width',
    'v-focus-border'
]
let valuesFocus = [
    `
    v-focus-scale {
        transition: 0.3s;
        transform: scale(1);
    }`,
    `
    v-focus-pulse {
        transition: 0.3s;
        opacity: 1;
    }`,
    `
    v-focus-width {
        transition: 0.3s;
        width: 60%;
    }`
]
let focuss = [
    `
    .v-focus-scale:focus {
        transition: 0.3s;
        transform: scale(0.97);
    }`,
    `
    .v-focus-pulse:focus {
        transition: 0.3s;
        opacity: 0.6;
    }`,
    `
    .v-focus-width:focus {
        transition: 0.3s;
        width: 90%;
    }`,
    `
    .v-focus-border:focus {
        border-top: none;
        border-radius: 0px;
        transition: 0.5s;
        background-color: transparent;
        border-left: none;
        border-right: none;
        outline: none;
        border-bottom: 2px solid black;
    }`
]
for (var i = 0; i <= propertiesFocus.length; i++) {
        if (document.querySelector(`.${propertiesFocus[i]}`) && !document.querySelector('style').innerText.includes(propertiesFocus[i])) {
            let styles = ` 
                .${propertiesFocus[i]} { 
                    ${valuesFocus[i]}
                }
                ${focuss[i]}`;
            document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
        }
}

let propertiesTime = [
    'v-date',
    'v-day',
    'v-month',
    'v-year'
]
let days= [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday'
]
let month= [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
] 
let Time = [
    new Date().getDate(),
    days[new Date().getDay()],
    month[new Date().getMonth()],
    new Date().getUTCFullYear()
]
for (var i = 0; i <= propertiesTime.length; i++) {
        if (document.querySelector(`.${propertiesTime[i]}`)) {
            for(var z = 0; z < document.querySelectorAll(`.${propertiesTime[i]}`).length; z++) {
                document.querySelectorAll(`.${propertiesTime[i]}`)[z].innerHTML = Time[i]
        }
    }
}

if (document.querySelector('.v-template-light-mode')) {
    let stylesXs = ` 
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
     
     .v-light-mode-on {
        background-color: #fff;
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
    document.getElementsByTagName('style')[0].appendChild(document.createTextNode(stylesXs));
    s = 0;
    document.querySelector('.toggle-mode').addEventListener('click', () => {
        s += 1;
        if (s % 2 == 0) {
            for (var i = 0; i < document.querySelectorAll('.v-template-light-mode').length; i++) {
                document.querySelector('.toggle-mode').classList.remove('modeDarks');
                document.querySelector('.v-dark-mode').classList.remove('v-light-mode-on');
                document.querySelectorAll('.v-template-light-mode')[i].classList.remove('lightModes');
            }
        } else {
            for (var i = 0; i < document.querySelectorAll('.v-template-light-mode').length; i++) {
                document.querySelector('.toggle-mode').classList.add('modeDarks');
                document.querySelector('.v-dark-mode').classList.add('v-light-mode-on');
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

let propertiesLoad = [
    `v-overlay`,
    `v-overlay-2`,
    `v-wrapper-overlay`
]

let valuesLoad = [
    `
    .v-overlay {
        position: relative;
        width: 100%;
        height: 100px;
        // background-color:rgb(230, 230, 230);
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }
    
    .v-overlay .v-loading {
        position: absolute;
        width: 50px;
        height: 50px;
        border-top: 3px solid rgb(0, 123, 255);
        border-radius: 50%;
        animation: rotate 1s infinite linear;
    }
    
    .v-loading2 {
        position: absolute;
        z-index: 2;
        width: 50px;
        height: 50px;
        border: 3px solid white;
        border-radius: 50%;
        border-top: 3px solid red;
        animation: rotate2 1s infinite linear;
    }
    
    @keyframes rotate {
        to {
            transform: rotate(360deg);
        }
    }
    
    @keyframes rotate2 {
        to {
            transform: rotate(0deg);
        }
    }
    `,
    `
    .v-overlay2 {
        position: relative;
        width: 100%;
        height: 100px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    
    .v-overlay2 .v-loading {
        width: 40px;
        height: 40px;
        border-radius: 50%;
        margin: 0 10px;
        background-color: #fff;
    }
    
    .v-load1 {
        animation: pulse1 2s infinite linear;
    }
    .v-load2 {
        animation: pulse2 2.3s infinite linear;
    }
    .v-load3 {
        animation: pulse3 2.5s infinite linear;
    }
    
    @keyframes pulse1 {
     to {
         transform: scale(1.2);
         opacity: 0;
     }
    }
    
    @keyframes pulse2 {
     to {
         transform: scale(1.2);
         opacity: 0;
     }
    }
    
    @keyframes pulse3 {
     to {
         transform: scale(1.2);
         opacity: 0;
     }
    }
    `,
    `
    .v-wrapper {
       position: relative;
       z-index: 2;
       width: 100%;
       height: 100px;
       display: flex;
       justify-content: center;
       align-items: center;
    }
    
    .v-bouncing-arrow {
        position: relative;
        top: 15px;
        left: 0%;
        height: 64px;
        margin: 0 12px;
        border: 3px solid white;
        background-color: #fff;
        width: 64px;
    }
    
    .v-bc1 {
        animation: 2.3s ease 0s normal none infinite running bounce;
    }
    
    @keyframes bounce { 
        0%, 20%, 50%, 80%, 100% {
            border-radius: 50%;
            transform: translateY(0);
        } 
        40% {transform: translateY(-60px) scale(0.7);
            border-radius: 50%;
        } 
        60% {transform: translateY(-33px);
            border-radius: 50%;
        } 
    } 
    
    .bounce { 
        animation-name: bounce; 
    }
    `
];
for (var i = 0; i <= propertiesLoad.length; i++) {
        if (document.querySelector(`.${propertiesLoad[i]}`) && !document.querySelector('style').innerText.includes(propertiesLoad[i])) {
            let styles = ` 
                ${valuesLoad[i]}
                `
            document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
        }
    }

let propertiesIncrement = [
    'v-increment'
]
let valuesIncrement = [
    'counter-increment: my-sec-counter; content: counter(my-sec-counter)'
]
for (var i = 0; i <= propertiesIncrement.length; i++) {
        if (document.querySelector(`.${propertiesIncrement[i]}`) && !document.querySelector('style').innerText.includes(propertiesIncrement[i])) {
            let styles = ` 
                body {
                    margin: 0;
                    padding: 0;
                    counter-reset: my-sec-counter;
                }
        
                .v-increment::before { 
                    ${valuesIncrement[i]}
                }`;
            document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
        }
    }

    if (document.querySelector('.v-back')) {
        document.querySelector('.v-back').addEventListener('click', () => {
            let style = `
                html {
                    scroll-behavior: smooth
                }
            `
            document.getElementsByTagName('style')[0].appendChild(document.createTextNode(style))

            document.body.scrollTop = 0; // For Safari
            document.documentElement.scrollTop = 0  // For Chrome, Firefox, IE dan Opera
        })
}

    if (document.querySelector('.v-navbar')) {

        document.querySelector('.v-btn-toggle input').addEventListener('click', () => {
            document.querySelector('.v-navbar').classList.toggle('show')
        })
    }

    if (document.querySelector('.v-navbar-fixed')) {

        document.querySelector('.v-btn-toggle input').addEventListener('click', () => {
            document.querySelector('.v-navbar-fixed').classList.toggle('show')
        })
    }

let stylesa = ` 
.v-connectivity {
    position: absolute;
    top: 10px;
    right: 45px;
    z-index: 99999;
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
    z-index: 99999;
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
    if(document.querySelector('.v-connectivity') || document.querySelector('.v-connectivity-dark')) {
    document.getElementsByTagName('style')[0].appendChild(document.createTextNode(stylesa));
    }

    if (document.querySelector('.v-connectivity') || document.querySelector('.v-connectivity-dark')) {
    if (navigator.onLine) {
        document.querySelector('.v-status').innerHTML = '<i class="las la-wifi icon-connect"></i> Online';
    } else {
        document.querySelector('.v-status').innerHTML = '<i class="las la-globe-asia icon-connect"></i> Offline';
    }
    }
    if(document.querySelector('.v-connectivity') || document.querySelector('.v-connectivity-dark')) {

    setTimeout(() => {
        document.querySelector('.v-connectivity').style.display = 'none';
    }, 3600)
    setTimeout(() => {
        document.querySelector('.v-connectivity-dark').style.display = 'none';
    }, 3600)
    document.querySelector('.v-connectivity').addEventListener('click', () => {
    document.querySelector('.v-connectivity').style.display = 'none';
    })
    document.querySelector('.v-connectivity-dark').addEventListener('click', () => {
        document.querySelector('.v-connectivity-dark').style.display = 'none';
    })
}

let propertiesAnimations = [
    'v-animation-none',
    'v-animation-spin',
    'v-animation-ping',
    'v-animation-pulse',
    'v-animation-bounce',
    'v-animation-typing-text'
]
let valuesAnimations = [
    'animation: none;',
    `animation: spin 1s linear infinite;`,
    `animation: ping 1s cubic-bezier(0, 0, 0.2, 1) infinite; `,
    `animation: pulse 1.6s cubic-bezier(0.4, 0, 0.6, 1) infinite;`,
    `animation: bounce 2s infinite ease-in;`,
    `animation: typing 10s steps(70, end) infinite;`
]
let animations = [
    ``,
    `
    @keyframes spin {
        from {
            transform: rotate(0deg);
        }
        to {
            transform: rotate(360deg);
        }
    }
    `,
    `@keyframes ping {
        75%, 100% {
            transform: scale(2);
         opacity: 0;
        }
    }`,
    `@keyframes pulse {
        0%, 100% {
            opacity: 1;
        }
        50% {
            opacity: 0.5;
        }
    }`,
    `@keyframes bounce { 
        0%, 20%, 50%, 80%, 100% {
            transform: translateY(0);
        } 
        40% {
            transform: translateY(-30px);
        } 
        60% {
            transform: translateY(-15px);
        } 
    }`,
    `@keyframes typing {
        0% {
           width: 0%;
        }
        100% {
           width: 100%;
        }
    }`
]
for (var i = 0; i <= propertiesAnimations.length; i++) {
    if (document.querySelector(`.${propertiesAnimations[i]}`) && !document.querySelector('style').innerText.includes(propertiesAnimations[i])) {
        let styles = ` 
                .${propertiesAnimations[i]} { 
                    ${valuesAnimations[i]}
                }
                ${animations[i]}`;
        document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
    }
}

//============================//==============================//

// end of the conditions for calling the file property
// #developerValclass - Muhammad Khoirul Huda -> developervalclass@gmail.com