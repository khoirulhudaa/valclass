// =========================================
// 	valclass core adalah file yang berisi
// 	berbagai macam fungsi yang dapat
//	melakukan manipulasi style dengan membaca
// 	seluruh className milik semua element
// 	yang ada di dalam body
// =========================================

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
    fontStyle: [],
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
    MBfontStyle: [],
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
    TBfontStyle: [],
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
    PCfontStyle: [],
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
	"v-d": "display",
	"v-items": "alignItems",
    "v-box": "boxSizing",
    "v-float": "floats",
    "v-overflow": "overflow",
    "v-overflowX": "overflowX",
    "v-overflowY": "overflowY",
    "v-pst": "position",
    "v-t": "top",
    "v-l": "left",
    "v-r": "right",
    "v-b": "bottom",
    "v-index": "index",
    "v-visibility": "visibility",
    "v-flex": "flex",
    "v-direction": "direction",
    "v-wrap": "wrap",
    "v-shrink": "shrink",
    "v-basis": "basis",
    "v-justify": "justify",
    "v-just-items": "justItems", 
    "v-just-self": "justSelf", 
    "v-content": "alignContent", 
    "v-items": "alignItems", 
    "v-self": "alignSelf", 
    "v-p": "padding", 
    "v-pt": "paddingTop", 
    "v-pl": "paddingLeft", 
    "v-pr": "paddingRight", 
    "v-pb": "paddingBottom", 
    "v-m": "margin", 
    "v-mt": "marginTop", 
    "v-ml": "marginLeft", 
    "v-mr": "marginRight", 
    "v-mb": "marginBottom", 
    "v-w": "width", 
    "v-h": "height", 
    "v-font-sz": "fontSize", 
    "v-font-style": "fontStyle", 
    "v-weight": "fontWeight", 
    "v-let-spacing": "letterSpacing", 
    "v-leading": "lineHeight", 
    "v-text": "textAlign", 
    "v-color": "textColor", 
    "v-decoration": "decoration", 
    "v-text-transform": "textTransform", 
    "v-break": "wordBreak", 
    "v-attachment": "bgAttachment", 
    "v-bg-clip": "bgClip", 
    "v-bg": "bgColor", 
    "v-bg-post": "bgPosition", 
    "v-bg-rpt": "bgRepeat", 
    "v-bg-sz": "bgSize", 
    "v-border": "border", 
    "v-border-t": "borderTop", 
    "v-border-l": "borderLeft", 
    "v-border-r": "borderRight", 
    "v-border-b": "borderBottom", 
    "v-radius": "borderRadius", 
    "v-style": "borderStyle", 
    "v-border-clr": "borderColor", 
    "v-border-type": "borderType", 
    "v-rotate": "rotate", 
    "v-skew": "skew", 
    "v-scale": "scale", 
    "v-translate": "translate", 
    "v-translateX": "translateX", 
    "v-translateY": "translateY", 
    "v-translateZ": "translateZ", 
    "v-cursor": "cursor", 
    "v-transition": "transition", 
    "v-o": "outline", 
    "v-o-top": "oTop", 
    "v-o-left": "oLeft", 
    "v-o-right": "oRight", 
    "v-o-bottom": "oBottom", 
    "v-o-color": "oColor", 
    "v-o-style": "oStyle", 
    "v-opacity": "opacity", 
    "v-blur": "blur", 
    "v-grayscale": "grayscale", 
    "v-saturate": "saturate", 
    "v-brightness": "brightness", 
    "v-contrast": "contrast", 
	"mb_v-d": "display",
	"mb_v-items": "alignItems",
    "mb_v-box": "boxSizing",
    "mb_v-float": "floats",
    "mb_v-overflow": "overflow",
    "mb_v-overflowX": "overflowX",
    "mb_v-overflowY": "overflowY",
    "mb_v-pst": "position",
    "mb_v-t": "top",
    "mb_v-l": "left",
    "mb_v-r": "right",
    "mb_v-b": "bottom",
    "mb_v-index": "index",
    "mb_v-visibility": "visibility",
    "mb_v-flex": "flex",
    "mb_v-direction": "direction",
    "mb_v-wrap": "wrap",
    "mb_v-shrink": "shrink",
    "mb_v-basis": "basis",
    "mb_v-justify": "justify",
    "mb_v-just-items": "justItems", 
    "mb_v-just-self": "justSelf", 
    "mb_v-content": "alignContent", 
    "mb_v-items": "alignItems", 
    "mb_v-self": "alignSelf", 
    "mb_v-p": "padding", 
    "mb_v-pt": "paddingTop", 
    "mb_v-pl": "paddingLeft", 
    "mb_v-pr": "paddingRight", 
    "mb_v-pb": "paddingBottom", 
    "mb_v-m": "margin", 
    "mb_v-mt": "marginTop", 
    "mb_v-ml": "marginLeft", 
    "mb_v-mr": "marginRight", 
    "mb_v-mb": "marginBottom", 
    "mb_v-w": "width", 
    "mb_v-h": "height", 
    "mb_v-font-sz": "fontSize", 
    "mb_v-font-style": "fontStyle", 
    "mb_v-weight": "fontWeight", 
    "mb_v-let-spacing": "letterSpacing", 
    "mb_v-leading": "lineHeight", 
    "mb_v-text": "textAlign", 
    "mb_v-color": "textColor", 
    "mb_v-decoration": "decoration", 
    "mb_v-text-transform": "textTransform", 
    "mb_v-break": "wordBreak", 
    "mb_v-attachment": "bgAttachment", 
    "mb_v-bg-clip": "bgClip", 
    "mb_v-bg": "bgColor", 
    "mb_v-bg-post": "bgPosition", 
    "mb_v-bg-rpt": "bgRepeat", 
    "mb_v-bg-sz": "bgSize", 
    "mb_v-border": "border", 
    "mb_v-border-t": "borderTop", 
    "mb_v-border-l": "borderLeft", 
    "mb_v-border-r": "borderRight", 
    "mb_v-border-b": "borderBottom", 
    "mb_v-radius": "borderRadius", 
    "mb_v-style": "borderStyle", 
    "mb_v-border-clr": "borderColor", 
    "mb_v-border-type": "borderType", 
    "mb_v-rotate": "rotate", 
    "mb_v-skew": "skew", 
    "mb_v-scale": "scale", 
    "mb_v-translate": "translate", 
    "mb_v-translateX": "translateX", 
    "mb_v-translateY": "translateY", 
    "mb_v-translateZ": "translateZ", 
    "mb_v-cursor": "cursor", 
    "mb_v-transition": "transition", 
    "mb_v-o": "outline", 
    "mb_v-o-top": "oTop", 
    "mb_v-o-left": "oLeft", 
    "mb_v-o-right": "oRight", 
    "mb_v-o-bottom": "oBottom", 
    "mb_v-o-color": "oColor", 
    "mb_v-o-style": "oStyle", 
    "mb_v-opacity": "opacity", 
    "mb_v-blur": "blur", 
    "mb_v-grayscale": "grayscale", 
    "mb_v-saturate": "saturate", 
    "mb_v-brightness": "brightness", 
    "mb_v-contrast": "contrast", 
	"tb_v-d": "display",
	"tb_v-items": "alignItems",
    "tb_v-box": "boxSizing",
    "tb_v-float": "floats",
    "tb_v-overflow": "overflow",
    "tb_v-overflowX": "overflowX",
    "tb_v-overflowY": "overflowY",
    "tb_v-pst": "position",
    "tb_v-t": "top",
    "tb_v-l": "left",
    "tb_v-r": "right",
    "tb_v-b": "bottom",
    "tb_v-index": "index",
    "tb_v-visibility": "visibility",
    "tb_v-flex": "flex",
    "tb_v-direction": "direction",
    "tb_v-wrap": "wrap",
    "tb_v-shrink": "shrink",
    "tb_v-basis": "basis",
    "tb_v-justify": "justify",
    "tb_v-just-items": "justItems", 
    "tb_v-just-self": "justSelf", 
    "tb_v-content": "alignContent", 
    "tb_v-items": "alignItems", 
    "tb_v-self": "alignSelf", 
    "tb_v-p": "padding", 
    "tb_v-pt": "paddingTop", 
    "tb_v-pl": "paddingLeft", 
    "tb_v-pr": "paddingRight", 
    "tb_v-pb": "paddingBottom", 
    "tb_v-m": "margin", 
    "tb_v-mt": "marginTop", 
    "tb_v-ml": "marginLeft", 
    "tb_v-mr": "marginRight", 
    "tb_v-mb": "marginBottom", 
    "tb_v-w": "width", 
    "tb_v-h": "height", 
    "tb_v-font-sz": "fontSize", 
    "tb_v-font-style": "fontStyle", 
    "tb_v-weight": "fontWeight", 
    "tb_v-let-spacing": "letterSpacing", 
    "tb_v-leading": "lineHeight", 
    "tb_v-text": "textAlign", 
    "tb_v-color": "textColor", 
    "tb_v-decoration": "decoration", 
    "tb_v-text-transform": "textTransform", 
    "tb_v-break": "wordBreak", 
    "tb_v-attachment": "bgAttachment", 
    "tb_v-bg-clip": "bgClip", 
    "tb_v-bg": "bgColor", 
    "tb_v-bg-post": "bgPosition", 
    "tb_v-bg-rpt": "bgRepeat", 
    "tb_v-bg-sz": "bgSize", 
    "tb_v-border": "border", 
    "tb_v-border-t": "borderTop", 
    "tb_v-border-l": "borderLeft", 
    "tb_v-border-r": "borderRight", 
    "tb_v-border-b": "borderBottom", 
    "tb_v-radius": "borderRadius", 
    "tb_v-style": "borderStyle", 
    "tb_v-border-clr": "borderColor", 
    "tb_v-border-type": "borderType", 
    "tb_v-rotate": "rotate", 
    "tb_v-skew": "skew", 
    "tb_v-scale": "scale", 
    "tb_v-translate": "translate", 
    "tb_v-translateX": "translateX", 
    "tb_v-translateY": "translateY", 
    "tb_v-translateZ": "translateZ", 
    "tb_v-cursor": "cursor", 
    "tb_v-transition": "transition", 
    "tb_v-o": "outline", 
    "tb_v-o-top": "oTop", 
    "tb_v-o-left": "oLeft", 
    "tb_v-o-right": "oRight", 
    "tb_v-o-bottom": "oBottom", 
    "tb_v-o-color": "oColor", 
    "tb_v-o-style": "oStyle", 
    "tb_v-opacity": "opacity", 
    "tb_v-blur": "blur", 
    "tb_v-grayscale": "grayscale", 
    "tb_v-saturate": "saturate", 
    "tb_v-brightness": "brightness", 
    "tb_v-contrast": "contrast", 
	"pc_v-d": "display",
	"pc_v-items": "alignItems",
    "pc_v-box": "boxSizing",
    "pc_v-float": "floats",
    "pc_v-overflow": "overflow",
    "pc_v-overflowX": "overflowX",
    "pc_v-overflowY": "overflowY",
    "pc_v-pst": "position",
    "pc_v-t": "top",
    "pc_v-l": "left",
    "pc_v-r": "right",
    "pc_v-b": "bottom",
    "pc_v-index": "index",
    "pc_v-visibility": "visibility",
    "pc_v-flex": "flex",
    "pc_v-direction": "direction",
    "pc_v-wrap": "wrap",
    "pc_v-shrink": "shrink",
    "pc_v-basis": "basis",
    "pc_v-justify": "justify",
    "pc_v-just-items": "justItems", 
    "pc_v-just-self": "justSelf", 
    "pc_v-content": "alignContent", 
    "pc_v-items": "alignItems", 
    "pc_v-self": "alignSelf", 
    "pc_v-p": "padding", 
    "pc_v-pt": "paddingTop", 
    "pc_v-pl": "paddingLeft", 
    "pc_v-pr": "paddingRight", 
    "pc_v-pb": "paddingBottom", 
    "pc_v-m": "margin", 
    "pc_v-mt": "marginTop", 
    "pc_v-ml": "marginLeft", 
    "pc_v-mr": "marginRight", 
    "pc_v-mb": "marginBottom", 
    "pc_v-w": "width", 
    "pc_v-h": "height", 
    "pc_v-font-sz": "fontSize", 
    "pc_v-font-style": "fontStyle", 
    "pc_v-weight": "fontWeight", 
    "pc_v-let-spacing": "letterSpacing", 
    "pc_v-leading": "lineHeight", 
    "pc_v-text": "textAlign", 
    "pc_v-color": "textColor", 
    "pc_v-decoration": "decoration", 
    "pc_v-text-transform": "textTransform", 
    "pc_v-break": "wordBreak", 
    "pc_v-attachment": "bgAttachment", 
    "pc_v-bg-clip": "bgClip", 
    "pc_v-bg": "bgColor", 
    "pc_v-bg-post": "bgPosition", 
    "pc_v-bg-rpt": "bgRepeat", 
    "pc_v-bg-sz": "bgSize", 
    "pc_v-border": "border", 
    "pc_v-border-t": "borderTop", 
    "pc_v-border-l": "borderLeft", 
    "pc_v-border-r": "borderRight", 
    "pc_v-border-b": "borderBottom", 
    "pc_v-radius": "borderRadius", 
    "pc_v-style": "borderStyle", 
    "pc_v-border-clr": "borderColor", 
    "pc_v-border-type": "borderType", 
    "pc_v-rotate": "rotate", 
    "pc_v-skew": "skew", 
    "pc_v-scale": "scale", 
    "pc_v-translate": "translate", 
    "pc_v-translateX": "translateX", 
    "pc_v-translateY": "translateY", 
    "pc_v-translateZ": "translateZ", 
    "pc_v-cursor": "cursor", 
    "pc_v-transition": "transition", 
    "pc_v-o": "outline", 
    "pc_v-o-top": "oTop", 
    "pc_v-o-left": "oLeft", 
    "pc_v-o-right": "oRight", 
    "pc_v-o-bottom": "oBottom", 
    "pc_v-o-color": "oColor", 
    "pc_v-o-style": "oStyle", 
    "pc_v-opacity": "opacity", 
    "pc_v-blur": "blur", 
    "pc_v-grayscale": "grayscale", 
    "pc_v-saturate": "saturate", 
    "pc_v-brightness": "brightness", 
    "pc_v-contrast": "contrast", 
}

// fungsi Core adalah fungsi yang berperan sebagai
// fungsi untuk menambahkan setiap class utility yang ada
// di dalam className dari semua element
// yang ada di dalam body
function Core(element){

	let allClass = element?.className?.split(" ") || [];

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

	if(element.children.length > 0){

		for(let x of element.children) Core(x);

	}

}

// melakukan pengisian dari semua element yang ada di dalam body
// dan dari body itu sendiri
Core(document.body);

// custom style sheet template (CUSTOM)
// jika tidak di perlukan cukup biarkan menjadi string kosong (``)
let style_sheet = `
	
	html,body{
		margin: 0px;
		padding: 0px;
		width: 100%;
		height: 100%;
	}
`;

function valclass_initalization(){

	// melakukan looping untuk menambahkan valclass
	// ke dalam element style 
	for(let className in vallclass){

		for(let _class of vallclass[className]){

			if(className === "display"){
				style_sheet +=`
				@media screen and (min-width: 900px) and (max-width: 1920px) {
				.v-d-${_class}{
				    display: ${_class};
				}
				}
				`;				
			}
			if(className === "alignItems"){
				style_sheet +=`
				@media screen and (min-width: 900px) and (max-width: 1920px) {
				.v-items-${_class}{
				    align-items: ${_class};
				}
				}
				`;				
			}
			if(className === "boxSizing"){
				style_sheet +=`
				@media screen and (min-width: 900px) and (max-width: 1920px) {
				.v-box-${_class}{
					box-sizing: ${_class};
				}
				}
				`;	
			}
			if(className === "floats"){
				style_sheet +=`
				@media screen and (min-width: 900px) and (max-width: 1920px) {
				.v-float-${_class}{
					float: ${_class};
				}
				}
				`;	
			}
			if(className === "overflow"){
				style_sheet +=`
				@media screen and (min-width: 900px) and (max-width: 1920px) {
				.v-overflow-${_class}{
					overflow: ${_class};
				}
				}
				`;	
			}
			if(className === "overflowX"){
				style_sheet +=`
				@media screen and (min-width: 900px) and (max-width: 1920px) {
				.v-overflowX-${_class}{
					overflow-x: ${_class};
				}
				}
				`;	
			}
			if(className === "overflowY"){
				style_sheet +=`
				@media screen and (min-width: 900px) and (max-width: 1920px) {
				.v-overflowY-${_class}{
					overflow-y: ${_class};
				}
				}
				`;	
			}
			if(className === "position"){
				style_sheet +=`
				@media screen and (min-width: 900px) and (max-width: 1920px) {
				.v-pst-${_class}{
					position: ${_class};
				}
				}
				`;	
			}
			if(className === "top"){
				style_sheet +=`
				@media screen and (min-width: 900px) and (max-width: 1920px) {
				.v-t-${_class}{
					top: ${_class};
				}
				}
				`;	
			}
			if(className === "left"){
				style_sheet +=`
				@media screen and (min-width: 900px) and (max-width: 1920px) {
				.v-l-${_class}{
					left: ${_class};
				}
				}
				`;	
			}
			if(className === "right"){
				style_sheet +=`
				@media screen and (min-width: 900px) and (max-width: 1920px) {
				.v-r-${_class}{
					right: ${_class};
				}
				}
				`;	
			}
			if(className === "bottom"){
				style_sheet +=`
				@media screen and (min-width: 900px) and (max-width: 1920px) {
				.v-b-${_class}{
					bottom: ${_class};
				}
				}
				`;	
			}
			if(className === "index"){
				style_sheet +=`
				@media screen and (min-width: 900px) and (max-width: 1920px) {
				.v-index-${_class}{
					z-index: ${_class};
				}
				}
				`;	
			}
			if(className === "visibility"){
				style_sheet +=`
				@media screen and (min-width: 900px) and (max-width: 1920px) {
				.v-visibility-${_class}{
					visibility: ${_class};
				}
				}
				`;	
			}
            if(className === "flex"){
                style_sheet +=`
				@media screen and (min-width: 900px) and (max-width: 1920px) {
                .v-flex-${_class}{
                    flex: ${_class};
                }
				}
                `;	
            }
			if(className === "direction"){
				style_sheet +=`
				@media screen and (min-width: 900px) and (max-width: 1920px) {
				.v-direction-${_class}{
					flex-direction: ${_class};
				}
				}
				`;	
			}
			if(className === "wrap"){
				style_sheet +=`
				@media screen and (min-width: 900px) and (max-width: 1920px) {
				.v-wrap-${_class}{
					flex-wrap: ${_class};
				}
				}
				`;	
			}
			if(className === "shrink"){
				style_sheet +=`
				@media screen and (min-width: 900px) and (max-width: 1920px) {
				.v-shrink-${_class}{
					flex-shrink: ${_class};
				}
				}
				`;	
			}
			if(className === "basis"){
				style_sheet +=`
				@media screen and (min-width: 900px) and (max-width: 1920px) {
				.v-basis-${_class}{
					flex-basis: ${_class};
				}
				}
				`;	
			}
			if(className === "justify"){
				style_sheet +=`
				@media screen and (min-width: 900px) and (max-width: 1920px) {
				.v-justify-${_class}{
					justify-content: ${_class};
				}
				}
				`;	
			}
			if(className === "justItems"){
				style_sheet +=`
				@media screen and (min-width: 900px) and (max-width: 1920px) {
				.v-just-items-${_class}{
					justify-items: ${_class};
				}
				}
				`;	
			}
			if(className === "justSelf"){
				style_sheet +=`
				@media screen and (min-width: 900px) and (max-width: 1920px) {
				.v-just-self-${_class}{
					justify-self: ${_class};
				}
				}
				`;	
			}
			if(className === "alignContent"){
				style_sheet +=`
				@media screen and (min-width: 900px) and (max-width: 1920px) {
				.v-content-${_class}{
					align-content: ${_class};
				}
				}
				`;	
			}
			if(className === "alignItems"){
				style_sheet +=`
				@media screen and (min-width: 900px) and (max-width: 1920px) {
				.v-items-${_class}{
					align-items: ${_class};
				}
				}
				`;	
			}
			if(className === "alignSelf"){
				style_sheet +=`
				@media screen and (min-width: 900px) and (max-width: 1920px) {
				.v-self-${_class}{
					align-self: ${_class};
				}
				}
				`;	
			}
			if(className === "padding"){
				style_sheet +=`
				@media screen and (min-width: 900px) and (max-width: 1920px) {
				.v-p-${_class}{
					padding: ${_class};
				}
				}
				`;	
			}
			if(className === "paddingTop"){
				style_sheet +=`
				@media screen and (min-width: 900px) and (max-width: 1920px) {
				.v-pt-${_class}{
					padding-top: ${_class};
				}
				}
				`;	
			}
			if(className === "paddingLeft"){
				style_sheet +=`
				@media screen and (min-width: 900px) and (max-width: 1920px) {
				.v-pl-${_class}{
					padding-left: ${_class};
				}
				}
				`;	
			}
			if(className === "paddingRight"){
				style_sheet +=`
				@media screen and (min-width: 900px) and (max-width: 1920px) {
				.v-pr-${_class}{
					padding-right: ${_class};
				}
				}
				`;	
			}
			if(className === "paddingBottom"){
				style_sheet +=`
				@media screen and (min-width: 900px) and (max-width: 1920px) {
				.v-pb-${_class}{
					padding-bottom: ${_class};
				}
				}
				`;	
			}
			if(className === "margin"){
				style_sheet +=`
				@media screen and (min-width: 900px) and (max-width: 1920px) {
				.v-m-${_class}{
					margin: ${_class};
				}
				}
				`;	
			}
			if(className === "marginTop"){
				style_sheet +=`
				@media screen and (min-width: 900px) and (max-width: 1920px) {
				.v-mt-${_class}{
					margin-top: ${_class};
				}
				}
				`;	
			}
			if(className === "marginLeft"){
				style_sheet +=`
				@media screen and (min-width: 900px) and (max-width: 1920px) {
				.v-ml-${_class}{
					margin-left: ${_class};
				}
				}
				`;	
			}
			if(className === "marginRight"){
				style_sheet +=`
				@media screen and (min-width: 900px) and (max-width: 1920px) {
				.v-mr-${_class}{
					margin-right: ${_class};
				}
				}
				`;	
			}
			if(className === "marginBottom"){
				style_sheet +=`
				@media screen and (min-width: 900px) and (max-width: 1920px) {
				.v-mb-${_class}{
					margin-bottom: ${_class};
				}
				}
				`;	
			}
			if(className === "width"){
				style_sheet +=`
				@media screen and (min-width: 900px) and (max-width: 1920px) {
				.v-w-${_class}{
					width: ${_class};
				}
				}
				`;	
			}
			if(className === "height"){
				style_sheet +=`
				@media screen and (min-width: 900px) and (max-width: 1920px) {
				.v-h-${_class}{
					height: ${_class};
				}
				}
				`;	
			}
			if(className === "fontSize"){
				style_sheet +=`
				@media screen and (min-width: 900px) and (max-width: 1920px) {
				.v-font-sz-${_class}{
					font-size: ${_class};
				}
				}
				`;	
			}
			if(className === "fontStyle"){
				style_sheet +=`
				@media screen and (min-width: 900px) and (max-width: 1920px) {
				.v-font-style-${_class}{
					font-style: ${_class};
				}
				}
				`;	
			}
			if(className === "fontWeight"){
				style_sheet +=`
				@media screen and (min-width: 900px) and (max-width: 1920px) {
				.v-weight-${_class}{
					font-weight: ${_class};
				}
				}
				`;	
			}
			if(className === "letterSpacing"){
				style_sheet +=`
				@media screen and (min-width: 900px) and (max-width: 1920px) {
				.v-let-spacing-${_class}{
					letter-spacing: ${_class};
				}
				}
				`;	
			}
			if(className === "lineHeight"){
				style_sheet +=`
				@media screen and (min-width: 900px) and (max-width: 1920px) {
				.v-leading-${_class}{
					line-height: ${_class};
				}
				}
				`;	
			}
			if(className === "textAlign"){
				style_sheet +=`
				@media screen and (min-width: 900px) and (max-width: 1920px) {
				.v-text-${_class}{
					text-align: ${_class};
				}
				}
				`;	
			}
			if(className === "textColor"){
				style_sheet +=`
				@media screen and (min-width: 900px) and (max-width: 1920px) {
				.v-color-${_class}{
					color: ${_class};
				}
				}
				`;	
			}
			if(className === "decoration"){
				style_sheet +=`
				@media screen and (min-width: 900px) and (max-width: 1920px) {
				.v-decoration-${_class}{
					text-decoration: ${_class};
				}
				}
				`;	
			}
			if(className === "textTransform"){
				style_sheet +=`
				@media screen and (min-width: 900px) and (max-width: 1920px) {
				.v-text-transform-${_class}{
					text-transform: ${_class};
				}
				}
				`;	
			}
			if(className === "wordBreak"){
				style_sheet +=`
				@media screen and (min-width: 900px) and (max-width: 1920px) {
				.v-break-${_class}{
					word-break: ${_class};
					overflow-wrap: break-word;
				}
				}
				`;	
			}
			if(className === "bgAttachment"){
				style_sheet +=`
				@media screen and (min-width: 900px) and (max-width: 1920px) {
				.v-attachment-${_class}{
					background-attachment: ${_class};
				}
				}
				`;	
			}
			if(className === "bgClip"){
				style_sheet +=`
				@media screen and (min-width: 900px) and (max-width: 1920px) {
				.v-bg-clip-${_class}{
					background-clip: ${_class};
				}
				}
				`;	
			}
			if(className === "bgColor"){
				style_sheet +=`
				@media screen and (min-width: 900px) and (max-width: 1920px) {
				.v-bg-${_class}{
					background-color: ${_class};
				}
				}
				`;	
			}
			if(className === "bgPosition"){
				style_sheet +=`
				@media screen and (min-width: 900px) and (max-width: 1920px) {
				.v-bg-post-${_class}{
					background-position: ${_class};
				}
				}
				`;	
			}
			if(className === "bgRepeat"){
				style_sheet +=`
				@media screen and (min-width: 900px) and (max-width: 1920px) {
				.v-bg-rpt-${_class}{
					background-repeat: ${_class};
				}
				}
				`;	
			}
			if(className === "bgSize"){
				style_sheet +=`
				@media screen and (min-width: 900px) and (max-width: 1920px) {
				.v-bg-sz-${_class}{
					background-size: ${_class};
				}
				}
				`;	
			}
			if(className === "border"){
				style_sheet +=`
				@media screen and (min-width: 900px) and (max-width: 1920px) {
				.v-border-${_class}{
					border: ${_class};
				}
				}
				`;	
			}
			if(className === "borderTop"){
				style_sheet +=`
				@media screen and (min-width: 900px) and (max-width: 1920px) {
				.v-border-top-${_class}{
					border-top: ${_class};
				}
				}
				`;	
			}
			if(className === "borderLeft"){
				style_sheet +=`
				@media screen and (min-width: 900px) and (max-width: 1920px) {
				.v-border-l-${_class}{
					border-left: ${_class};
				}
				}
				`;	
			}
			if(className === "borderRight"){
				style_sheet +=`
				@media screen and (min-width: 900px) and (max-width: 1920px) {
				.v-border-r-${_class}{
					border-right: ${_class};
				}
				}
				`;	
			}
			if(className === "borderBottom"){
				style_sheet +=`
				@media screen and (min-width: 900px) and (max-width: 1920px) {
				.v-border-b-${_class}{
					border-bottom: ${_class};
				}
				}
				`;	
			}
			if(className === "borderRadius"){
				style_sheet +=`
				@media screen and (min-width: 900px) and (max-width: 1920px) {
				.v-radius-${_class}{
					border-radius: ${_class};
				}
				}
				`;	
			}
			if(className === "borderStyle"){
				style_sheet +=`
				@media screen and (min-width: 900px) and (max-width: 1920px) {
				.v-style-${_class}{
					border-style: ${_class};
				}
				}
				`;	
			}
			if(className === "borderColor"){
				style_sheet +=`
				@media screen and (min-width: 900px) and (max-width: 1920px) {
				.v-border-clr-${_class}{
					border-color: ${_class};
				}
				}
				`;	
			}
			if(className === "borderType"){
				style_sheet +=`
				@media screen and (min-width: 900px) and (max-width: 1920px) {
				.v-border-type-${_class}{
					border-collapse: ${_class};
				}
				}
				`;	
			}
			if(className === "rotate"){
				style_sheet +=`
				@media screen and (min-width: 900px) and (max-width: 1920px) {
				.v-rotate-${_class}{
					transform: rotate(${_class});
				}
				}
				`;	
			}
			if(className === "skew"){
				style_sheet +=`
				@media screen and (min-width: 900px) and (max-width: 1920px) {
				.v-skew-${_class}{
					transform: skew(${_class});
				}
				}
				`;	
			}
			if(className === "scale"){
				style_sheet +=`
				@media screen and (min-width: 900px) and (max-width: 1920px) {
				.v-scale-${_class}{
					transform: scale(${_class});
				}
				}
				`;	
			}
			if(className === "translate"){
				style_sheet +=`
				@media screen and (min-width: 900px) and (max-width: 1920px) {
				.v-translate-${_class}{
					transform: translate(${_class});
				}
				}
				`;	
			}
			if(className === "translateX"){
				style_sheet +=`
				@media screen and (min-width: 900px) and (max-width: 1920px) {
				.v-translateX-${_class}{
					transform: translateX(${_class});
				}
				}
				`;	
			}
			if(className === "translateY"){
				style_sheet +=`
				@media screen and (min-width: 900px) and (max-width: 1920px) {
				.v-translateY-${_class}{
					transform: translateY(${_class});
				}
				}
				`;	
			}
			if(className === "translateZ"){
				style_sheet +=`
				@media screen and (min-width: 900px) and (max-width: 1920px) {
				.v-translateZ-${_class}{
					transform: translateZ(${_class});
				}
				}
				`;	
			}
			if(className === "cursor"){
				style_sheet +=`
				@media screen and (min-width: 900px) and (max-width: 1920px) {
				.v-cursor-${_class}{
					cursor: ${_class};
				}
				}
				`;	
			}
			if(className === "transition"){
				style_sheet +=`
				@media screen and (min-width: 900px) and (max-width: 1920px) {
				.v-transition-${_class}{
					transition: ${_class};
				}
				}
				`;	
			}
			if(className === "outline"){
				style_sheet +=`
				@media screen and (min-width: 900px) and (max-width: 1920px) {
				.v-o-${_class}{
					outline: ${_class};
				}
				}
				`;	
			}
			if(className === "oTop"){
				style_sheet +=`
				@media screen and (min-width: 900px) and (max-width: 1920px) {
				.v-o-top-${_class}{
					outline-top: ${_class};
				}
				}
				`;	
			}
			if(className === "oLeft"){
				style_sheet +=`
				@media screen and (min-width: 900px) and (max-width: 1920px) {
				.v-o-left-${_class}{
					outline-left: ${_class};
				}
				}
				`;	
			}
			if(className === "oRight"){
				style_sheet +=`
				@media screen and (min-width: 900px) and (max-width: 1920px) {
				.v-o-right-${_class}{
					outline-right: ${_class};
				}
				}
				`;	
			}
			if(className === "oBottom"){
				style_sheet +=`
				@media screen and (min-width: 900px) and (max-width: 1920px) {
				.v-o-bottom-${_class}{
					outline-bottom: ${_class};
				}
				}
				`;	
			}
			if(className === "oColor"){
				style_sheet +=`
				@media screen and (min-width: 900px) and (max-width: 1920px) {
				.v-o-color-${_class}{
					outline-color: ${_class};
				}
				}
				`;	
			}
			if(className === "oStyle"){
				style_sheet +=`
				@media screen and (min-width: 900px) and (max-width: 1920px) {
				.v-o-style-${_class}{
					outline-style: ${_class};
				}
				}
				`;	
			}
			if(className === "opacity"){
				style_sheet +=`
				@media screen and (min-width: 900px) and (max-width: 1920px) {
				.v-opacity-${_class}{
					opacity: ${_class};
				}
				}
				`;	
			}
			if(className === "blur"){
				style_sheet +=`
				@media screen and (min-width: 900px) and (max-width: 1920px) {
				.v-blur-${_class}{
					filter: blur(${_class});
				}
				}
				`;	
			}
			if(className === "grayscale"){
				style_sheet +=`
				@media screen and (min-width: 900px) and (max-width: 1920px) {
				.v-grayscale-${_class}{
					filter: grayscale(${_class});
				}
				}
				`;	
			}
			if(className === "saturate"){
				style_sheet +=`
				@media screen and (min-width: 900px) and (max-width: 1920px) {
				.v-saturate-${_class}{
					filter: saturate(${_class});
				}
				}
				`;	
			}
			if(className === "brightness"){
				style_sheet +=`
				@media screen and (min-width: 900px) and (max-width: 1920px) {
				.v-brightness-${_class}{
					filter: brightness(${_class});
				}
				}
				`;	
			}
			if(className === "contrast"){
				style_sheet +=`
				@media screen and (min-width: 900px) and (max-width: 1920px) {
				.v-contrast-${_class}{
					filter: contrast(${_class});
				}
				}
				`;	
			}
			if(className === "MBdisplay"){
				style_sheet +=`
				@media screen and (min-width: 320px) and (max-width: 600px){
				.mb_v-d-${_class}{
				    display: ${_class};
				}
				}
				`;				
			}
			if(className === "MBalignItems"){
				style_sheet +=`
				@media screen and (min-width: 320px) and (max-width: 600px){
				.mb_v-items-${_class}{
				    align-items: ${_class};
				}
				}
				`;				
			}
			if(className === "MBboxSizing"){
				style_sheet +=`
				@media screen and (min-width: 320px) and (max-width: 600px){
				.mb_v-box-${_class}{
					box-sizing: ${_class};
				}
				}
				`;	
			}
			if(className === "MBfloats"){
				style_sheet +=`
				@media screen and (min-width: 320px) and (max-width: 600px){
				.mb_v-float-${_class}{
					float: ${_class};
				}
				}
				`;	
			}
			if(className === "MBoverflow"){
				style_sheet +=`
				@media screen and (min-width: 320px) and (max-width: 600px){
				.mb_v-overflow-${_class}{
					overflow: ${_class};
				}
				}
				`;	
			}
			if(className === "MBoverflowX"){
				style_sheet +=`
				@media screen and (min-width: 320px) and (max-width: 600px){
				.mb_v-overflowX-${_class}{
					overflow-x: ${_class};
				}
				}
				`;	
			}
			if(className === "MBoverflowY"){
				style_sheet +=`
				@media screen and (min-width: 320px) and (max-width: 600px){
				.mb_v-overflowY-${_class}{
					overflow-y: ${_class};
				}
				}
				`;	
			}
			if(className === "MBposition"){
				style_sheet +=`
				@media screen and (min-width: 320px) and (max-width: 600px){
				.mb_v-pst-${_class}{
					position: ${_class};
				}
				}
				`;	
			}
			if(className === "MBtop"){
				style_sheet +=`
				@media screen and (min-width: 320px) and (max-width: 600px){
				.mb_v-t-${_class}{
					top: ${_class};
				}
				}
				`;	
			}
			if(className === "MBleft"){
				style_sheet +=`
				@media screen and (min-width: 320px) and (max-width: 600px){
				.mb_v-l-${_class}{
					left: ${_class};
				}
				}
				`;	
			}
			if(className === "MBright"){
				style_sheet +=`
				@media screen and (min-width: 320px) and (max-width: 600px){
				.mb_v-r-${_class}{
					right: ${_class};
				}
				}
				`;	
			}
			if(className === "MBbottom"){
				style_sheet +=`
				@media screen and (min-width: 320px) and (max-width: 600px){
				.mb_v-b-${_class}{
					bottom: ${_class};
				}
				}
				`;	
			}
			if(className === "MBindex"){
				style_sheet +=`
				@media screen and (min-width: 320px) and (max-width: 600px){
				.mb_v-index-${_class}{
					z-index: ${_class};
				}
				}
				`;	
			}
			if(className === "MBvisibility"){
				style_sheet +=`
				@media screen and (min-width: 320px) and (max-width: 600px){
				.mb_v-visibility-${_class}{
					visibility: ${_class};
				}
				}
				`;	
			}
            if(className === "MBflex"){
                style_sheet +=`
				@media screen and (min-width: 320px) and (max-width: 600px){
                .mb_v-flex-${_class}{
                    flex: ${_class};
                }
				}
                `;	
            }
			if(className === "MBdirection"){
				style_sheet +=`
				@media screen and (min-width: 320px) and (max-width: 600px){
				.mb_v-direction-${_class}{
					flex-direction: ${_class};
				}
				}
				`;	
			}
			if(className === "MBwrap"){
				style_sheet +=`
				@media screen and (min-width: 320px) and (max-width: 600px){
				.mb_v-wrap-${_class}{
					flex-wrap: ${_class};
				}
				}
				`;	
			}
			if(className === "MBshrink"){
				style_sheet +=`
				@media screen and (min-width: 320px) and (max-width: 600px){
				.mb_v-shrink-${_class}{
					flex-shrink: ${_class};
				}
				}
				`;	
			}
			if(className === "MBbasis"){
				style_sheet +=`
				@media screen and (min-width: 320px) and (max-width: 600px){
				.mb_v-basis-${_class}{
					flex-basis: ${_class};
				}
				}
				`;	
			}
			if(className === "MBjustify"){
				style_sheet +=`
				@media screen and (min-width: 320px) and (max-width: 600px){
				.mb_v-justify-${_class}{
					justify-content: ${_class};
				}
				}
				`;	
			}
			if(className === "MBjustItems"){
				style_sheet +=`
				@media screen and (min-width: 320px) and (max-width: 600px){
				.mb_v-just-items-${_class}{
					justify-items: ${_class};
				}
				}
				`;	
			}
			if(className === "MBjustSelf"){
				style_sheet +=`
				@media screen and (min-width: 320px) and (max-width: 600px){
				.mb_v-just-self-${_class}{
					justify-self: ${_class};
				}
				}
				`;	
			}
			if(className === "MBalignContent"){
				style_sheet +=`
				@media screen and (min-width: 320px) and (max-width: 600px){
				.mb_v-content-${_class}{
					align-content: ${_class};
				}
				}
				`;	
			}
			if(className === "MBalignItems"){
				style_sheet +=`
				@media screen and (min-width: 320px) and (max-width: 600px){
				.mb_v-items-${_class}{
					align-items: ${_class};
				}
				}
				`;	
			}
			if(className === "MBalignSelf"){
				style_sheet +=`
				@media screen and (min-width: 320px) and (max-width: 600px){
				.mb_v-self-${_class}{
					align-self: ${_class};
				}
				}
				`;	
			}
			if(className === "MBpadding"){
				style_sheet +=`
				@media screen and (min-width: 320px) and (max-width: 600px){
				.mb_v-p-${_class}{
					padding: ${_class};
				}
				}
				`;	
			}
			if(className === "MBpaddingTop"){
				style_sheet +=`
				@media screen and (min-width: 320px) and (max-width: 600px){
				.mb_v-pt-${_class}{
					padding-top: ${_class};
				}
				}
				`;	
			}
			if(className === "MBpaddingLeft"){
				style_sheet +=`
				@media screen and (min-width: 320px) and (max-width: 600px){
				.mb_v-pl-${_class}{
					padding-left: ${_class};
				}
				}
				`;	
			}
			if(className === "MBpaddingRight"){
				style_sheet +=`
				@media screen and (min-width: 320px) and (max-width: 600px){
				.mb_v-pr-${_class}{
					padding-right: ${_class};
				}
				}
				`;	
			}
			if(className === "MBpaddingBottom"){
				style_sheet +=`
				@media screen and (min-width: 320px) and (max-width: 600px){
				.mb_v-pb-${_class}{
					padding-bottom: ${_class};
				}
				}
				`;	
			}
			if(className === "MBmargin"){
				style_sheet +=`
				@media screen and (min-width: 320px) and (max-width: 600px){
				.mb_v-m-${_class}{
					margin: ${_class};
				}
				}
				`;	
			}
			if(className === "MBmarginTop"){
				style_sheet +=`
				@media screen and (min-width: 320px) and (max-width: 600px){
				.mb_v-mt-${_class}{
					margin-top: ${_class};
				}
				}
				`;	
			}
			if(className === "MBmarginLeft"){
				style_sheet +=`
				@media screen and (min-width: 320px) and (max-width: 600px){
				.mb_v-ml-${_class}{
					margin-left: ${_class};
				}
				}
				`;	
			}
			if(className === "MBmarginRight"){
				style_sheet +=`
				@media screen and (min-width: 320px) and (max-width: 600px){
				.mb_v-mr-${_class}{
					margin-right: ${_class};
				}
				}
				`;	
			}
			if(className === "MBmarginBottom"){
				style_sheet +=`
				@media screen and (min-width: 320px) and (max-width: 600px){
				.mb_v-mb-${_class}{
					margin-bottom: ${_class};
				}
				}
				`;	
			}
			if(className === "MBwidth"){
				style_sheet +=`
				@media screen and (min-width: 320px) and (max-width: 600px){
				.mb_v-w-${_class}{
					width: ${_class};
				}
				}
				`;	
			}
			if(className === "MBheight"){
				style_sheet +=`
				@media screen and (min-width: 320px) and (max-width: 600px){
				.mb_v-h-${_class}{
					height: ${_class};
				}
				}
				`;	
			}
			if(className === "MBfontSize"){
				style_sheet +=`
				@media screen and (min-width: 320px) and (max-width: 600px){
				.mb_v-font-sz-${_class}{
					font-size: ${_class};
				}
				}
				`;	
			}
			if(className === "MBfontStyle"){
				style_sheet +=`
				@media screen and (min-width: 320px) and (max-width: 600px){
				.mb_v-font-style-${_class}{
					font-style: ${_class};
				}
				}
				`;	
			}
			if(className === "MBfontWeight"){
				style_sheet +=`
				@media screen and (min-width: 320px) and (max-width: 600px){
				.mb_v-weight-${_class}{
					font-weight: ${_class};
				}
				}
				`;	
			}
			if(className === "MBletterSpacing"){
				style_sheet +=`
				@media screen and (min-width: 320px) and (max-width: 600px){
				.mb_v-let-spacing-${_class}{
					letter-spacing: ${_class};
				}
				}
				`;	
			}
			if(className === "MBlineHeight"){
				style_sheet +=`
				@media screen and (min-width: 320px) and (max-width: 600px){
				.mb_v-leading-${_class}{
					line-height: ${_class};
				}
				}
				`;	
			}
			if(className === "MBtextAlign"){
				style_sheet +=`
				@media screen and (min-width: 320px) and (max-width: 600px){
				.mb_v-text-${_class}{
					text-align: ${_class};
				}
				}
				`;	
			}
			if(className === "MBtextColor"){
				style_sheet +=`
				@media screen and (min-width: 320px) and (max-width: 600px){
				.mb_v-color-${_class}{
					color: ${_class};
				}
				}
				`;	
			}
			if(className === "MBdecoration"){
				style_sheet +=`
				@media screen and (min-width: 320px) and (max-width: 600px){
				.mb_v-decoration-${_class}{
					text-decoration: ${_class};
				}
				}
				`;	
			}
			if(className === "MBtextTransform"){
				style_sheet +=`
				@media screen and (min-width: 320px) and (max-width: 600px){
				.mb_v-text-transform-${_class}{
					text-transform: ${_class};
				}
				}
				`;	
			}
			if(className === "MBwordBreak"){
				style_sheet +=`
				@media screen and (min-width: 320px) and (max-width: 600px){
				.mb_v-break-${_class}{
					word-break: ${_class};
					overflow-wrap: break-word;
				}
				}
				`;	
			}
			if(className === "MBbgAttachment"){
				style_sheet +=`
				@media screen and (min-width: 320px) and (max-width: 600px){
				.mb_v-attachment-${_class}{
					background-attachment: ${_class};
				}
				}
				`;	
			}
			if(className === "MBbgClip"){
				style_sheet +=`
				@media screen and (min-width: 320px) and (max-width: 600px){
				.mb_v-bg-clip-${_class}{
					background-clip: ${_class};
				}
				}
				`;	
			}
			if(className === "MBbgColor"){
				style_sheet +=`
				@media screen and (min-width: 320px) and (max-width: 600px){
				.mb_v-bg-${_class}{
					background-color: ${_class};
				}
				}
				`;	
			}
			if(className === "MBbgPosition"){
				style_sheet +=`
				@media screen and (min-width: 320px) and (max-width: 600px){
				.mb_v-bg-post-${_class}{
					background-position: ${_class};
				}
				}
				`;	
			}
			if(className === "MBbgRepeat"){
				style_sheet +=`
				@media screen and (min-width: 320px) and (max-width: 600px){
				.mb_v-bg-rpt-${_class}{
					background-repeat: ${_class};
				}
				}
				`;	
			}
			if(className === "MBbgSize"){
				style_sheet +=`
				@media screen and (min-width: 320px) and (max-width: 600px){
				.mb_v-bg-sz-${_class}{
					background-size: ${_class};
				}
				}
				`;	
			}
			if(className === "MBborder"){
				style_sheet +=`
				@media screen and (min-width: 320px) and (max-width: 600px){
				.mb_v-border-${_class}{
					border: ${_class};
				}
				}
				`;	
			}
			if(className === "MBborderTop"){
				style_sheet +=`
				@media screen and (min-width: 320px) and (max-width: 600px){
				.mb_v-border-top-${_class}{
					border-top: ${_class};
				}
				}
				`;	
			}
			if(className === "MBborderLeft"){
				style_sheet +=`
				@media screen and (min-width: 320px) and (max-width: 600px){
				.mb_v-border-l-${_class}{
					border-left: ${_class};
				}
				}
				`;	
			}
			if(className === "MBborderRight"){
				style_sheet +=`
				@media screen and (min-width: 320px) and (max-width: 600px){
				.mb_v-border-r-${_class}{
					border-right: ${_class};
				}
				}
				`;	
			}
			if(className === "MBborderBottom"){
				style_sheet +=`
				@media screen and (min-width: 320px) and (max-width: 600px){
				.mb_v-border-b-${_class}{
					border-bottom: ${_class};
				}
				}
				`;	
			}
			if(className === "MBborderRadius"){
				style_sheet +=`
				@media screen and (min-width: 320px) and (max-width: 600px){
				.mb_v-radius-${_class}{
					border-radius: ${_class};
				}
				}
				`;	
			}
			if(className === "MBborderStyle"){
				style_sheet +=`
				@media screen and (min-width: 320px) and (max-width: 600px){
				.mb_v-style-${_class}{
					border-style: ${_class};
				}
				}
				`;	
			}
			if(className === "MBborderColor"){
				style_sheet +=`
				@media screen and (min-width: 320px) and (max-width: 600px){
				.mb_v-border-clr-${_class}{
					border-color: ${_class};
				}
				}
				`;	
			}
			if(className === "MBborderType"){
				style_sheet +=`
				@media screen and (min-width: 320px) and (max-width: 600px){
				.mb_v-border-type-${_class}{
					border-collapse: ${_class};
				}
				}
				`;	
			}
			if(className === "MBrotate"){
				style_sheet +=`
				@media screen and (min-width: 320px) and (max-width: 600px){
				.mb_v-rotate-${_class}{
					transform: rotate(${_class});
				}
				}
				`;	
			}
			if(className === "MBskew"){
				style_sheet +=`
				@media screen and (min-width: 320px) and (max-width: 600px){
				.mb_v-skew-${_class}{
					transform: skew(${_class});
				}
				}
				`;	
			}
			if(className === "MBscale"){
				style_sheet +=`
				@media screen and (min-width: 320px) and (max-width: 600px){
				.mb_v-scale-${_class}{
					transform: scale(${_class});
				}
				}
				`;	
			}
			if(className === "MBtranslate"){
				style_sheet +=`
				@media screen and (min-width: 320px) and (max-width: 600px){
				.mb_v-translate-${_class}{
					transform: translate(${_class});
				}
				}
				`;	
			}
			if(className === "MBtranslateX"){
				style_sheet +=`
				@media screen and (min-width: 320px) and (max-width: 600px){
				.mb_v-translateX-${_class}{
					transform: translateX(${_class});
				}
				}
				`;	
			}
			if(className === "MBtranslateY"){
				style_sheet +=`
				@media screen and (min-width: 320px) and (max-width: 600px){
				.mb_v-translateY-${_class}{
					transform: translateY(${_class});
				}
				}
				`;	
			}
			if(className === "MBtranslateZ"){
				style_sheet +=`
				@media screen and (min-width: 320px) and (max-width: 600px){
				.mb_v-translateZ-${_class}{
					transform: translateZ(${_class});
				}
				}
				`;	
			}
			if(className === "MBcursor"){
				style_sheet +=`
				@media screen and (min-width: 320px) and (max-width: 600px){
				.mb_v-cursor-${_class}{
					cursor: ${_class};
				}
				}
				`;	
			}
			if(className === "MBtransition"){
				style_sheet +=`
				@media screen and (min-width: 320px) and (max-width: 600px){
				.mb_v-transition-${_class}{
					transition: ${_class};
				}
				}
				`;	
			}
			if(className === "MBoutline"){
				style_sheet +=`
				@media screen and (min-width: 320px) and (max-width: 600px){
				.mb_v-o-${_class}{
					outline: ${_class};
				}
				}
				`;	
			}
			if(className === "MBoTop"){
				style_sheet +=`
				@media screen and (min-width: 320px) and (max-width: 600px){
				.mb_v-o-top-${_class}{
					outline-top: ${_class};
				}
				}
				`;	
			}
			if(className === "MBoLeft"){
				style_sheet +=`
				@media screen and (min-width: 320px) and (max-width: 600px){
				.mb_v-o-left-${_class}{
					outline-left: ${_class};
				}
				}
				`;	
			}
			if(className === "MBoRight"){
				style_sheet +=`
				@media screen and (min-width: 320px) and (max-width: 600px){
				.mb_v-o-right-${_class}{
					outline-right: ${_class};
				}
				}
				`;	
			}
			if(className === "MBoBottom"){
				style_sheet +=`
				@media screen and (min-width: 320px) and (max-width: 600px){
				.mb_v-o-bottom-${_class}{
					outline-bottom: ${_class};
				}
				}
				`;	
			}
			if(className === "MBoColor"){
				style_sheet +=`
				@media screen and (min-width: 320px) and (max-width: 600px){
				.mb_v-o-color-${_class}{
					outline-color: ${_class};
				}
				}
				`;	
			}
			if(className === "MBoStyle"){
				style_sheet +=`
				@media screen and (min-width: 320px) and (max-width: 600px){
				.mb_v-o-style-${_class}{
					outline-style: ${_class};
				}
				}
				`;	
			}
			if(className === "MBopacity"){
				style_sheet +=`
				@media screen and (min-width: 320px) and (max-width: 600px){
				.mb_v-opacity-${_class}{
					opacity: ${_class};
				}
				}
				`;	
			}
			if(className === "MBblur"){
				style_sheet +=`
				@media screen and (min-width: 320px) and (max-width: 600px){
				.mb_v-blur-${_class}{
					filter: blur(${_class});
				}
				}
				`;	
			}
			if(className === "MBgrayscale"){
				style_sheet +=`
				@media screen and (min-width: 320px) and (max-width: 600px){
				.mb_v-grayscale-${_class}{
					filter: grayscale(${_class});
				}
				}
				`;	
			}
			if(className === "MBsaturate"){
				style_sheet +=`
				@media screen and (min-width: 320px) and (max-width: 600px){
				.mb_v-saturate-${_class}{
					filter: saturate(${_class});
				}
				}
				`;	
			}
			if(className === "MBbrightness"){
				style_sheet +=`
				@media screen and (min-width: 320px) and (max-width: 600px){
				.mb_v-brightness-${_class}{
					filter: brightness(${_class});
				}
				}
				`;	
			}
			if(className === "MBcontrast"){
				style_sheet +=`
				@media screen and (min-width: 320px) and (max-width: 600px){
				.mb_v-contrast-${_class}{
					filter: contrast(${_class});
				}
				}
				`;	
			}
			if(className === "TBdisplay"){
				style_sheet +=`
				@media screen and (min-width: 600px) and (max-width: 900px){
				.tb_v-d-${_class}{
				    display: ${_class};
				}
				}
				`;				
			}
			if(className === "TBalignItems"){
				style_sheet +=`
				@media screen and (min-width: 600px) and (max-width: 900px){
				.tb_v-items-${_class}{
				    align-items: ${_class};
				}
				}
				`;				
			}
			if(className === "TBboxSizing"){
				style_sheet +=`
				@media screen and (min-width: 600px) and (max-width: 900px){
				.tb_v-box-${_class}{
					box-sizing: ${_class};
				}
				}
				`;	
			}
			if(className === "TBfloats"){
				style_sheet +=`
				@media screen and (min-width: 600px) and (max-width: 900px){
				.tb_v-float-${_class}{
					float: ${_class};
				}
				}
				`;	
			}
			if(className === "TBoverflow"){
				style_sheet +=`
				@media screen and (min-width: 600px) and (max-width: 900px){
				.tb_v-overflow-${_class}{
					overflow: ${_class};
				}
				}
				`;	
			}
			if(className === "TBoverflowX"){
				style_sheet +=`
				@media screen and (min-width: 600px) and (max-width: 900px){
				.tb_v-overflowX-${_class}{
					overflow-x: ${_class};
				}
				}
				`;	
			}
			if(className === "TBoverflowY"){
				style_sheet +=`
				@media screen and (min-width: 600px) and (max-width: 900px){
				.tb_v-overflowY-${_class}{
					overflow-y: ${_class};
				}
				}
				`;	
			}
			if(className === "TBposition"){
				style_sheet +=`
				@media screen and (min-width: 600px) and (max-width: 900px){
				.tb_v-pst-${_class}{
					position: ${_class};
				}
				}
				`;	
			}
			if(className === "TBtop"){
				style_sheet +=`
				@media screen and (min-width: 600px) and (max-width: 900px){
				.tb_v-t-${_class}{
					top: ${_class};
				}
				}
				`;	
			}
			if(className === "TBleft"){
				style_sheet +=`
				@media screen and (min-width: 600px) and (max-width: 900px){
				.tb_v-l-${_class}{
					left: ${_class};
				}
				}
				`;	
			}
			if(className === "TBright"){
				style_sheet +=`
				@media screen and (min-width: 600px) and (max-width: 900px){
				.tb_v-r-${_class}{
					right: ${_class};
				}
				}
				`;	
			}
			if(className === "TBbottom"){
				style_sheet +=`
				@media screen and (min-width: 600px) and (max-width: 900px){
				.tb_v-b-${_class}{
					bottom: ${_class};
				}
				}
				`;	
			}
			if(className === "TBindex"){
				style_sheet +=`
				@media screen and (min-width: 600px) and (max-width: 900px){
				.tb_v-index-${_class}{
					z-index: ${_class};
				}
				}
				`;	
			}
			if(className === "TBvisibility"){
				style_sheet +=`
				@media screen and (min-width: 600px) and (max-width: 900px){
				.tb_v-visibility-${_class}{
					visibility: ${_class};
				}
				}
				`;	
			}
            if(className === "TBflex"){
                style_sheet +=`
				@media screen and (min-width: 600px) and (max-width: 900px){
                .tb_v-flex-${_class}{
                    flex: ${_class};
                }
				}
                `;	
            }
			if(className === "TBdirection"){
				style_sheet +=`
				@media screen and (min-width: 600px) and (max-width: 900px){
				.tb_v-direction-${_class}{
					flex-direction: ${_class};
				}
				}
				`;	
			}
			if(className === "TBwrap"){
				style_sheet +=`
				@media screen and (min-width: 600px) and (max-width: 900px){
				.tb_v-wrap-${_class}{
					flex-wrap: ${_class};
				}
				}
				`;	
			}
			if(className === "TBshrink"){
				style_sheet +=`
				@media screen and (min-width: 600px) and (max-width: 900px){
				.tb_v-shrink-${_class}{
					flex-shrink: ${_class};
				}
				}
				`;	
			}
			if(className === "TBbasis"){
				style_sheet +=`
				@media screen and (min-width: 600px) and (max-width: 900px){
				.tb_v-basis-${_class}{
					flex-basis: ${_class};
				}
				}
				`;	
			}
			if(className === "TBjustify"){
				style_sheet +=`
				@media screen and (min-width: 600px) and (max-width: 900px){
				.tb_v-justify-${_class}{
					justify-content: ${_class};
				}
				}
				`;	
			}
			if(className === "TBjustItems"){
				style_sheet +=`
				@media screen and (min-width: 600px) and (max-width: 900px){
				.tb_v-just-items-${_class}{
					justify-items: ${_class};
				}
				}
				`;	
			}
			if(className === "TBjustSelf"){
				style_sheet +=`
				@media screen and (min-width: 600px) and (max-width: 900px){
				.tb_v-just-self-${_class}{
					justify-self: ${_class};
				}
				}
				`;	
			}
			if(className === "TBalignContent"){
				style_sheet +=`
				@media screen and (min-width: 600px) and (max-width: 900px){
				.tb_v-content-${_class}{
					align-content: ${_class};
				}
				}
				`;	
			}
			if(className === "TBalignItems"){
				style_sheet +=`
				@media screen and (min-width: 600px) and (max-width: 900px){
				.tb_v-items-${_class}{
					align-items: ${_class};
				}
				}
				`;	
			}
			if(className === "TBalignSelf"){
				style_sheet +=`
				@media screen and (min-width: 600px) and (max-width: 900px){
				.tb_v-self-${_class}{
					align-self: ${_class};
				}
				}
				`;	
			}
			if(className === "TBpadding"){
				style_sheet +=`
				@media screen and (min-width: 600px) and (max-width: 900px){
				.tb_v-p-${_class}{
					padding: ${_class};
				}
				}
				`;	
			}
			if(className === "TBpaddingTop"){
				style_sheet +=`
				@media screen and (min-width: 600px) and (max-width: 900px){
				.tb_v-pt-${_class}{
					padding-top: ${_class};
				}
				}
				`;	
			}
			if(className === "TBpaddingLeft"){
				style_sheet +=`
				@media screen and (min-width: 600px) and (max-width: 900px){
				.tb_v-pl-${_class}{
					padding-left: ${_class};
				}
				}
				`;	
			}
			if(className === "TBpaddingRight"){
				style_sheet +=`
				@media screen and (min-width: 600px) and (max-width: 900px){
				.tb_v-pr-${_class}{
					padding-right: ${_class};
				}
				}
				`;	
			}
			if(className === "TBpaddingBottom"){
				style_sheet +=`
				@media screen and (min-width: 600px) and (max-width: 900px){
				.tb_v-pb-${_class}{
					padding-bottom: ${_class};
				}
				}
				`;	
			}
			if(className === "TBmargin"){
				style_sheet +=`
				@media screen and (min-width: 600px) and (max-width: 900px){
				.tb_v-m-${_class}{
					margin: ${_class};
				}
				}
				`;	
			}
			if(className === "TBmarginTop"){
				style_sheet +=`
				@media screen and (min-width: 600px) and (max-width: 900px){
				.tb_v-mt-${_class}{
					margin-top: ${_class};
				}
				}
				`;	
			}
			if(className === "TBmarginLeft"){
				style_sheet +=`
				@media screen and (min-width: 600px) and (max-width: 900px){
				.tb_v-ml-${_class}{
					margin-left: ${_class};
				}
				}
				`;	
			}
			if(className === "TBmarginRight"){
				style_sheet +=`
				@media screen and (min-width: 600px) and (max-width: 900px){
				.tb_v-mr-${_class}{
					margin-right: ${_class};
				}
				}
				`;	
			}
			if(className === "TBmarginBottom"){
				style_sheet +=`
				@media screen and (min-width: 600px) and (max-width: 900px){
				.tb_v-mb-${_class}{
					margin-bottom: ${_class};
				}
				}
				`;	
			}
			if(className === "TBwidth"){
				style_sheet +=`
				@media screen and (min-width: 600px) and (max-width: 900px){
				.tb_v-w-${_class}{
					width: ${_class};
				}
				}
				`;	
			}
			if(className === "TBheight"){
				style_sheet +=`
				@media screen and (min-width: 600px) and (max-width: 900px){
				.tb_v-h-${_class}{
					height: ${_class};
				}
				}
				`;	
			}
			if(className === "TBfontSize"){
				style_sheet +=`
				@media screen and (min-width: 600px) and (max-width: 900px){
				.tb_v-font-sz-${_class}{
					font-size: ${_class};
				}
				}
				`;	
			}
			if(className === "TBfontStyle"){
				style_sheet +=`
				@media screen and (min-width: 600px) and (max-width: 900px){
				.tb_v-font-style-${_class}{
					font-style: ${_class};
				}
				}
				`;	
			}
			if(className === "TBfontWeight"){
				style_sheet +=`
				@media screen and (min-width: 600px) and (max-width: 900px){
				.tb_v-weight-${_class}{
					font-weight: ${_class};
				}
				}
				`;	
			}
			if(className === "TBletterSpacing"){
				style_sheet +=`
				@media screen and (min-width: 600px) and (max-width: 900px){
				.tb_v-let-spacing-${_class}{
					letter-spacing: ${_class};
				}
				}
				`;	
			}
			if(className === "TBlineHeight"){
				style_sheet +=`
				@media screen and (min-width: 600px) and (max-width: 900px){
				.tb_v-leading-${_class}{
					line-height: ${_class};
				}
				}
				`;	
			}
			if(className === "TBtextAlign"){
				style_sheet +=`
				@media screen and (min-width: 600px) and (max-width: 900px){
				.tb_v-text-${_class}{
					text-align: ${_class};
				}
				}
				`;	
			}
			if(className === "TBtextColor"){
				style_sheet +=`
				@media screen and (min-width: 600px) and (max-width: 900px){
				.tb_v-color-${_class}{
					color: ${_class};
				}
				}
				`;	
			}
			if(className === "TBdecoration"){
				style_sheet +=`
				@media screen and (min-width: 600px) and (max-width: 900px){
				.tb_v-decoration-${_class}{
					text-decoration: ${_class};
				}
				}
				`;	
			}
			if(className === "TBtextTransform"){
				style_sheet +=`
				@media screen and (min-width: 600px) and (max-width: 900px){
				.tb_v-text-transform-${_class}{
					text-transform: ${_class};
				}
				}
				`;	
			}
			if(className === "TBwordBreak"){
				style_sheet +=`
				@media screen and (min-width: 600px) and (max-width: 900px){
				.tb_v-break-${_class}{
					word-break: ${_class};
					overflow-wrap: break-word;
				}
				}
				`;	
			}
			if(className === "TBbgAttachment"){
				style_sheet +=`
				@media screen and (min-width: 600px) and (max-width: 900px){
				.tb_v-attachment-${_class}{
					background-attachment: ${_class};
				}
				}
				`;	
			}
			if(className === "TBbgClip"){
				style_sheet +=`
				@media screen and (min-width: 600px) and (max-width: 900px){
				.tb_v-bg-clip-${_class}{
					background-clip: ${_class};
				}
				}
				`;	
			}
			if(className === "TBbgColor"){
				style_sheet +=`
				@media screen and (min-width: 600px) and (max-width: 900px){
				.tb_v-bg-${_class}{
					background-color: ${_class};
				}
				}
				`;	
			}
			if(className === "TBbgPosition"){
				style_sheet +=`
				@media screen and (min-width: 600px) and (max-width: 900px){
				.tb_v-bg-post-${_class}{
					background-position: ${_class};
				}
				}
				`;	
			}
			if(className === "TBbgRepeat"){
				style_sheet +=`
				@media screen and (min-width: 600px) and (max-width: 900px){
				.tb_v-bg-rpt-${_class}{
					background-repeat: ${_class};
				}
				}
				`;	
			}
			if(className === "TBbgSize"){
				style_sheet +=`
				@media screen and (min-width: 600px) and (max-width: 900px){
				.tb_v-bg-sz-${_class}{
					background-size: ${_class};
				}
				}
				`;	
			}
			if(className === "TBborder"){
				style_sheet +=`
				@media screen and (min-width: 600px) and (max-width: 900px){
				.tb_v-border-${_class}{
					border: ${_class};
				}
				}
				`;	
			}
			if(className === "TBborderTop"){
				style_sheet +=`
				@media screen and (min-width: 600px) and (max-width: 900px){
				.tb_v-border-top-${_class}{
					border-top: ${_class};
				}
				}
				`;	
			}
			if(className === "TBborderLeft"){
				style_sheet +=`
				@media screen and (min-width: 600px) and (max-width: 900px){
				.tb_v-border-l-${_class}{
					border-left: ${_class};
				}
				}
				`;	
			}
			if(className === "TBborderRight"){
				style_sheet +=`
				@media screen and (min-width: 600px) and (max-width: 900px){
				.tb_v-border-r-${_class}{
					border-right: ${_class};
				}
				}
				`;	
			}
			if(className === "TBborderBottom"){
				style_sheet +=`
				@media screen and (min-width: 600px) and (max-width: 900px){
				.tb_v-border-b-${_class}{
					border-bottom: ${_class};
				}
				}
				`;	
			}
			if(className === "TBborderRadius"){
				style_sheet +=`
				@media screen and (min-width: 600px) and (max-width: 900px){
				.tb_v-radius-${_class}{
					border-radius: ${_class};
				}
				}
				`;	
			}
			if(className === "TBborderStyle"){
				style_sheet +=`
				@media screen and (min-width: 600px) and (max-width: 900px){
				.tb_v-style-${_class}{
					border-style: ${_class};
				}
				}
				`;	
			}
			if(className === "TBborderColor"){
				style_sheet +=`
				@media screen and (min-width: 600px) and (max-width: 900px){
				.tb_v-border-clr-${_class}{
					border-color: ${_class};
				}
				}
				`;	
			}
			if(className === "TBborderType"){
				style_sheet +=`
				@media screen and (min-width: 600px) and (max-width: 900px){
				.tb_v-border-type-${_class}{
					border-collapse: ${_class};
				}
				}
				`;	
			}
			if(className === "TBrotate"){
				style_sheet +=`
				@media screen and (min-width: 600px) and (max-width: 900px){
				.tb_v-rotate-${_class}{
					transform: rotate(${_class});
				}
				}
				`;	
			}
			if(className === "TBskew"){
				style_sheet +=`
				@media screen and (min-width: 600px) and (max-width: 900px){
				.tb_v-skew-${_class}{
					transform: skew(${_class});
				}
				}
				`;	
			}
			if(className === "TBscale"){
				style_sheet +=`
				@media screen and (min-width: 600px) and (max-width: 900px){
				.tb_v-scale-${_class}{
					transform: scale(${_class});
				}
				}
				`;	
			}
			if(className === "TBtranslate"){
				style_sheet +=`
				@media screen and (min-width: 600px) and (max-width: 900px){
				.tb_v-translate-${_class}{
					transform: translate(${_class});
				}
				}
				`;	
			}
			if(className === "TBtranslateX"){
				style_sheet +=`
				@media screen and (min-width: 600px) and (max-width: 900px){
				.tb_v-translateX-${_class}{
					transform: translateX(${_class});
				}
				}
				`;	
			}
			if(className === "TBtranslateY"){
				style_sheet +=`
				@media screen and (min-width: 600px) and (max-width: 900px){
				.tb_v-translateY-${_class}{
					transform: translateY(${_class});
				}
				}
				`;	
			}
			if(className === "TBtranslateZ"){
				style_sheet +=`
				@media screen and (min-width: 600px) and (max-width: 900px){
				.tb_v-translateZ-${_class}{
					transform: translateZ(${_class});
				}
				}
				`;	
			}
			if(className === "TBcursor"){
				style_sheet +=`
				@media screen and (min-width: 600px) and (max-width: 900px){
				.tb_v-cursor-${_class}{
					cursor: ${_class};
				}
				}
				`;	
			}
			if(className === "TBtransition"){
				style_sheet +=`
				@media screen and (min-width: 600px) and (max-width: 900px){
				.tb_v-transition-${_class}{
					transition: ${_class};
				}
				}
				`;	
			}
			if(className === "TBoutline"){
				style_sheet +=`
				@media screen and (min-width: 600px) and (max-width: 900px){
				.tb_v-o-${_class}{
					outline: ${_class};
				}
				}
				`;	
			}
			if(className === "TBoTop"){
				style_sheet +=`
				@media screen and (min-width: 600px) and (max-width: 900px){
				.tb_v-o-top-${_class}{
					outline-top: ${_class};
				}
				}
				`;	
			}
			if(className === "TBoLeft"){
				style_sheet +=`
				@media screen and (min-width: 600px) and (max-width: 900px){
				.tb_v-o-left-${_class}{
					outline-left: ${_class};
				}
				}
				`;	
			}
			if(className === "TBoRight"){
				style_sheet +=`
				@media screen and (min-width: 600px) and (max-width: 900px){
				.tb_v-o-right-${_class}{
					outline-right: ${_class};
				}
				}
				`;	
			}
			if(className === "TBoBottom"){
				style_sheet +=`
				@media screen and (min-width: 600px) and (max-width: 900px){
				.tb_v-o-bottom-${_class}{
					outline-bottom: ${_class};
				}
				}
				`;	
			}
			if(className === "TBoColor"){
				style_sheet +=`
				@media screen and (min-width: 600px) and (max-width: 900px){
				.tb_v-o-color-${_class}{
					outline-color: ${_class};
				}
				}
				`;	
			}
			if(className === "TBoStyle"){
				style_sheet +=`
				@media screen and (min-width: 600px) and (max-width: 900px){
				.tb_v-o-style-${_class}{
					outline-style: ${_class};
				}
				}
				`;	
			}
			if(className === "TBopacity"){
				style_sheet +=`
				@media screen and (min-width: 600px) and (max-width: 900px){
				.tb_v-opacity-${_class}{
					opacity: ${_class};
				}
				}
				`;	
			}
			if(className === "TBblur"){
				style_sheet +=`
				@media screen and (min-width: 600px) and (max-width: 900px){
				.tb_v-blur-${_class}{
					filter: blur(${_class});
				}
				}
				`;	
			}
			if(className === "TBgrayscale"){
				style_sheet +=`
				@media screen and (min-width: 600px) and (max-width: 900px){
				.tb_v-grayscale-${_class}{
					filter: grayscale(${_class});
				}
				}
				`;	
			}
			if(className === "TBsaturate"){
				style_sheet +=`
				@media screen and (min-width: 600px) and (max-width: 900px){
				.tb_v-saturate-${_class}{
					filter: saturate(${_class});
				}
				}
				`;	
			}
			if(className === "TBbrightness"){
				style_sheet +=`
				@media screen and (min-width: 600px) and (max-width: 900px){
				.tb_v-brightness-${_class}{
					filter: brightness(${_class});
				}
				}
				`;	
			}
			if(className === "TBcontrast"){
				style_sheet +=`
				@media screen and (min-width: 600px) and (max-width: 900px){
				.tb_v-contrast-${_class}{
					filter: contrast(${_class});
				}
				}
				`;	
			}
			if(className === "PCdisplay"){
				style_sheet +=`
				@media screen and (min-width: 1920px){
				.pc_v-d-${_class}{
				    display: ${_class};
				}
				}
				`;				
			}
			if(className === "PCalignItems"){
				style_sheet +=`
				@media screen and (min-width: 1920px){
				.pc_v-items-${_class}{
				    align-items: ${_class};
				}
				}
				`;				
			}
			if(className === "PCboxSizing"){
				style_sheet +=`
				@media screen and (min-width: 1920px){
				.pc_v-box-${_class}{
					box-sizing: ${_class};
				}
				}
				`;	
			}
			if(className === "PCfloats"){
				style_sheet +=`
				@media screen and (min-width: 1920px){
				.pc_v-float-${_class}{
					float: ${_class};
				}
				}
				`;	
			}
			if(className === "PCoverflow"){
				style_sheet +=`
				@media screen and (min-width: 1920px){
				.pc_v-overflow-${_class}{
					overflow: ${_class};
				}
				}
				`;	
			}
			if(className === "PCoverflowX"){
				style_sheet +=`
				@media screen and (min-width: 1920px){
				.pc_v-overflowX-${_class}{
					overflow-x: ${_class};
				}
				}
				`;	
			}
			if(className === "PCoverflowY"){
				style_sheet +=`
				@media screen and (min-width: 1920px){
				.pc_v-overflowY-${_class}{
					overflow-y: ${_class};
				}
				}
				`;	
			}
			if(className === "PCposition"){
				style_sheet +=`
				@media screen and (min-width: 1920px){
				.pc_v-pst-${_class}{
					position: ${_class};
				}
				}
				`;	
			}
			if(className === "PCtop"){
				style_sheet +=`
				@media screen and (min-width: 1920px){
				.pc_v-t-${_class}{
					top: ${_class};
				}
				}
				`;	
			}
			if(className === "PCleft"){
				style_sheet +=`
				@media screen and (min-width: 1920px){
				.pc_v-l-${_class}{
					left: ${_class};
				}
				}
				`;	
			}
			if(className === "PCright"){
				style_sheet +=`
				@media screen and (min-width: 1920px){
				.pc_v-r-${_class}{
					right: ${_class};
				}
				}
				`;	
			}
			if(className === "PCbottom"){
				style_sheet +=`
				@media screen and (min-width: 1920px){
				.pc_v-b-${_class}{
					bottom: ${_class};
				}
				}
				`;	
			}
			if(className === "PCindex"){
				style_sheet +=`
				@media screen and (min-width: 1920px){
				.pc_v-index-${_class}{
					z-index: ${_class};
				}
				}
				`;	
			}
			if(className === "PCvisibility"){
				style_sheet +=`
				@media screen and (min-width: 1920px){
				.pc_v-visibility-${_class}{
					visibility: ${_class};
				}
				}
				`;	
			}
            if(className === "PCflex"){
                style_sheet +=`
				@media screen and (min-width: 1920px){
                .pc_v-flex-${_class}{
                    flex: ${_class};
                }
				}
                `;	
            }
			if(className === "PCdirection"){
				style_sheet +=`
				@media screen and (min-width: 1920px){
				.pc_v-direction-${_class}{
					flex-direction: ${_class};
				}
				}
				`;	
			}
			if(className === "PCwrap"){
				style_sheet +=`
				@media screen and (min-width: 1920px){
				.pc_v-wrap-${_class}{
					flex-wrap: ${_class};
				}
				}
				`;	
			}
			if(className === "PCshrink"){
				style_sheet +=`
				@media screen and (min-width: 1920px){
				.pc_v-shrink-${_class}{
					flex-shrink: ${_class};
				}
				}
				`;	
			}
			if(className === "PCbasis"){
				style_sheet +=`
				@media screen and (min-width: 1920px){
				.pc_v-basis-${_class}{
					flex-basis: ${_class};
				}
				}
				`;	
			}
			if(className === "PCjustify"){
				style_sheet +=`
				@media screen and (min-width: 1920px){
				.pc_v-justify-${_class}{
					justify-content: ${_class};
				}
				}
				`;	
			}
			if(className === "PCjustItems"){
				style_sheet +=`
				@media screen and (min-width: 1920px){
				.pc_v-just-items-${_class}{
					justify-items: ${_class};
				}
				}
				`;	
			}
			if(className === "PCjustSelf"){
				style_sheet +=`
				@media screen and (min-width: 1920px){
				.pc_v-just-self-${_class}{
					justify-self: ${_class};
				}
				}
				`;	
			}
			if(className === "PCalignContent"){
				style_sheet +=`
				@media screen and (min-width: 1920px){
				.pc_v-content-${_class}{
					align-content: ${_class};
				}
				}
				`;	
			}
			if(className === "PCalignItems"){
				style_sheet +=`
				@media screen and (min-width: 1920px){
				.pc_v-items-${_class}{
					align-items: ${_class};
				}
				}
				`;	
			}
			if(className === "PCalignSelf"){
				style_sheet +=`
				@media screen and (min-width: 1920px){
				.pc_v-self-${_class}{
					align-self: ${_class};
				}
				}
				`;	
			}
			if(className === "PCpadding"){
				style_sheet +=`
				@media screen and (min-width: 1920px){
				.pc_v-p-${_class}{
					padding: ${_class};
				}
				}
				`;	
			}
			if(className === "PCpaddingTop"){
				style_sheet +=`
				@media screen and (min-width: 1920px){
				.pc_v-pt-${_class}{
					padding-top: ${_class};
				}
				}
				`;	
			}
			if(className === "PCpaddingLeft"){
				style_sheet +=`
				@media screen and (min-width: 1920px){
				.pc_v-pl-${_class}{
					padding-left: ${_class};
				}
				}
				`;	
			}
			if(className === "PCpaddingRight"){
				style_sheet +=`
				@media screen and (min-width: 1920px){
				.pc_v-pr-${_class}{
					padding-right: ${_class};
				}
				}
				`;	
			}
			if(className === "PCpaddingBottom"){
				style_sheet +=`
				@media screen and (min-width: 1920px){
				.pc_v-pb-${_class}{
					padding-bottom: ${_class};
				}
				}
				`;	
			}
			if(className === "PCmargin"){
				style_sheet +=`
				@media screen and (min-width: 1920px){
				.pc_v-m-${_class}{
					margin: ${_class};
				}
				}
				`;	
			}
			if(className === "PCmarginTop"){
				style_sheet +=`
				@media screen and (min-width: 1920px){
				.pc_v-mt-${_class}{
					margin-top: ${_class};
				}
				}
				`;	
			}
			if(className === "PCmarginLeft"){
				style_sheet +=`
				@media screen and (min-width: 1920px){
				.pc_v-ml-${_class}{
					margin-left: ${_class};
				}
				}
				`;	
			}
			if(className === "PCmarginRight"){
				style_sheet +=`
				@media screen and (min-width: 1920px){
				.pc_v-mr-${_class}{
					margin-right: ${_class};
				}
				}
				`;	
			}
			if(className === "PCmarginBottom"){
				style_sheet +=`
				@media screen and (min-width: 1920px){
				.pc_v-mb-${_class}{
					margin-bottom: ${_class};
				}
				}
				`;	
			}
			if(className === "PCwidth"){
				style_sheet +=`
				@media screen and (min-width: 1920px){
				.pc_v-w-${_class}{
					width: ${_class};
				}
				}
				`;	
			}
			if(className === "PCheight"){
				style_sheet +=`
				@media screen and (min-width: 1920px){
				.pc_v-h-${_class}{
					height: ${_class};
				}
				}
				`;	
			}
			if(className === "PCfontSize"){
				style_sheet +=`
				@media screen and (min-width: 1920px){
				.pc_v-font-sz-${_class}{
					font-size: ${_class};
				}
				}
				`;	
			}
			if(className === "PCfontStyle"){
				style_sheet +=`
				@media screen and (min-width: 1920px){
				.pc_v-font-style-${_class}{
					font-style: ${_class};
				}
				}
				`;	
			}
			if(className === "PCfontWeight"){
				style_sheet +=`
				@media screen and (min-width: 1920px){
				.pc_v-weight-${_class}{
					font-weight: ${_class};
				}
				}
				`;	
			}
			if(className === "PCletterSpacing"){
				style_sheet +=`
				@media screen and (min-width: 1920px){
				.pc_v-let-spacing-${_class}{
					letter-spacing: ${_class};
				}
				}
				`;	
			}
			if(className === "PClineHeight"){
				style_sheet +=`
				@media screen and (min-width: 1920px){
				.pc_v-leading-${_class}{
					line-height: ${_class};
				}
				}
				`;	
			}
			if(className === "PCtextAlign"){
				style_sheet +=`
				@media screen and (min-width: 1920px){
				.pc_v-text-${_class}{
					text-align: ${_class};
				}
				}
				`;	
			}
			if(className === "PCtextColor"){
				style_sheet +=`
				@media screen and (min-width: 1920px){
				.pc_v-color-${_class}{
					color: ${_class};
				}
				}
				`;	
			}
			if(className === "PCdecoration"){
				style_sheet +=`
				@media screen and (min-width: 1920px){
				.pc_v-decoration-${_class}{
					text-decoration: ${_class};
				}
				}
				`;	
			}
			if(className === "PCtextTransform"){
				style_sheet +=`
				@media screen and (min-width: 1920px){
				.pc_v-text-transform-${_class}{
					text-transform: ${_class};
				}
				}
				`;	
			}
			if(className === "PCwordBreak"){
				style_sheet +=`
				@media screen and (min-width: 1920px){
				.pc_v-break-${_class}{
					word-break: ${_class};
					overflow-wrap: break-word;
				}
				}
				`;	
			}
			if(className === "PCbgAttachment"){
				style_sheet +=`
				@media screen and (min-width: 1920px){
				.pc_v-attachment-${_class}{
					background-attachment: ${_class};
				}
				}
				`;	
			}
			if(className === "PCbgClip"){
				style_sheet +=`
				@media screen and (min-width: 1920px){
				.pc_v-bg-clip-${_class}{
					background-clip: ${_class};
				}
				}
				`;	
			}
			if(className === "PCbgColor"){
				style_sheet +=`
				@media screen and (min-width: 1920px){
				.pc_v-bg-${_class}{
					background-color: ${_class};
				}
				}
				`;	
			}
			if(className === "PCbgPosition"){
				style_sheet +=`
				@media screen and (min-width: 1920px){
				.pc_v-bg-post-${_class}{
					background-position: ${_class};
				}
				}
				`;	
			}
			if(className === "PCbgRepeat"){
				style_sheet +=`
				@media screen and (min-width: 1920px){
				.pc_v-bg-rpt-${_class}{
					background-repeat: ${_class};
				}
				}
				`;	
			}
			if(className === "PCbgSize"){
				style_sheet +=`
				@media screen and (min-width: 1920px){
				.pc_v-bg-sz-${_class}{
					background-size: ${_class};
				}
				}
				`;	
			}
			if(className === "PCborder"){
				style_sheet +=`
				@media screen and (min-width: 1920px){
				.pc_v-border-${_class}{
					border: ${_class};
				}
				}
				`;	
			}
			if(className === "PCborderTop"){
				style_sheet +=`
				@media screen and (min-width: 1920px){
				.pc_v-border-top-${_class}{
					border-top: ${_class};
				}
				}
				`;	
			}
			if(className === "PCborderLeft"){
				style_sheet +=`
				@media screen and (min-width: 1920px){
				.pc_v-border-l-${_class}{
					border-left: ${_class};
				}
				}
				`;	
			}
			if(className === "PCborderRight"){
				style_sheet +=`
				@media screen and (min-width: 1920px){
				.pc_v-border-r-${_class}{
					border-right: ${_class};
				}
				}
				`;	
			}
			if(className === "PCborderBottom"){
				style_sheet +=`
				@media screen and (min-width: 1920px){
				.pc_v-border-b-${_class}{
					border-bottom: ${_class};
				}
				}
				`;	
			}
			if(className === "PCborderRadius"){
				style_sheet +=`
				@media screen and (min-width: 1920px){
				.pc_v-radius-${_class}{
					border-radius: ${_class};
				}
				}
				`;	
			}
			if(className === "PCborderStyle"){
				style_sheet +=`
				@media screen and (min-width: 1920px){
				.pc_v-style-${_class}{
					border-style: ${_class};
				}
				}
				`;	
			}
			if(className === "PCborderColor"){
				style_sheet +=`
				@media screen and (min-width: 1920px){
				.pc_v-border-clr-${_class}{
					border-color: ${_class};
				}
				}
				`;	
			}
			if(className === "PCborderType"){
				style_sheet +=`
				@media screen and (min-width: 1920px){
				.pc_v-border-type-${_class}{
					border-collapse: ${_class};
				}
				}
				`;	
			}
			if(className === "PCrotate"){
				style_sheet +=`
				@media screen and (min-width: 1920px){
				.pc_v-rotate-${_class}{
					transform: rotate(${_class});
				}
				}
				`;	
			}
			if(className === "PCskew"){
				style_sheet +=`
				@media screen and (min-width: 1920px){
				.pc_v-skew-${_class}{
					transform: skew(${_class});
				}
				}
				`;	
			}
			if(className === "PCscale"){
				style_sheet +=`
				@media screen and (min-width: 1920px){
				.pc_v-scale-${_class}{
					transform: scale(${_class});
				}
				}
				`;	
			}
			if(className === "PCtranslate"){
				style_sheet +=`
				@media screen and (min-width: 1920px){
				.pc_v-translate-${_class}{
					transform: translate(${_class});
				}
				}
				`;	
			}
			if(className === "PCtranslateX"){
				style_sheet +=`
				@media screen and (min-width: 1920px){
				.pc_v-translateX-${_class}{
					transform: translateX(${_class});
				}
				}
				`;	
			}
			if(className === "PCtranslateY"){
				style_sheet +=`
				@media screen and (min-width: 1920px){
				.pc_v-translateY-${_class}{
					transform: translateY(${_class});
				}
				}
				`;	
			}
			if(className === "PCtranslateZ"){
				style_sheet +=`
				@media screen and (min-width: 1920px){
				.pc_v-translateZ-${_class}{
					transform: translateZ(${_class});
				}
				}
				`;	
			}
			if(className === "PCcursor"){
				style_sheet +=`
				@media screen and (min-width: 1920px){
				.pc_v-cursor-${_class}{
					cursor: ${_class};
				}
				}
				`;	
			}
			if(className === "PCtransition"){
				style_sheet +=`
				@media screen and (min-width: 1920px){
				.pc_v-transition-${_class}{
					transition: ${_class};
				}
				}
				`;	
			}
			if(className === "PCoutline"){
				style_sheet +=`
				@media screen and (min-width: 1920px){
				.pc_v-o-${_class}{
					outline: ${_class};
				}
				}
				`;	
			}
			if(className === "PCoTop"){
				style_sheet +=`
				@media screen and (min-width: 1920px){
				.pc_v-o-top-${_class}{
					outline-top: ${_class};
				}
				}
				`;	
			}
			if(className === "PCoLeft"){
				style_sheet +=`
				@media screen and (min-width: 1920px){
				.pc_v-o-left-${_class}{
					outline-left: ${_class};
				}
				}
				`;	
			}
			if(className === "PCoRight"){
				style_sheet +=`
				@media screen and (min-width: 1920px){
				.pc_v-o-right-${_class}{
					outline-right: ${_class};
				}
				}
				`;	
			}
			if(className === "PCoBottom"){
				style_sheet +=`
				@media screen and (min-width: 1920px){
				.pc_v-o-bottom-${_class}{
					outline-bottom: ${_class};
				}
				}
				`;	
			}
			if(className === "PCoColor"){
				style_sheet +=`
				@media screen and (min-width: 1920px){
				.pc_v-o-color-${_class}{
					outline-color: ${_class};
				}
				}
				`;	
			}
			if(className === "PCoStyle"){
				style_sheet +=`
				@media screen and (min-width: 1920px){
				.pc_v-o-style-${_class}{
					outline-style: ${_class};
				}
				}
				`;	
			}
			if(className === "PCopacity"){
				style_sheet +=`
				@media screen and (min-width: 1920px){
				.pc_v-opacity-${_class}{
					opacity: ${_class};
				}
				}
				`;	
			}
			if(className === "PCblur"){
				style_sheet +=`
				@media screen and (min-width: 1920px){
				.pc_v-blur-${_class}{
					filter: blur(${_class});
				}
				}
				`;	
			}
			if(className === "PCgrayscale"){
				style_sheet +=`
				@media screen and (min-width: 1920px){
				.pc_v-grayscale-${_class}{
					filter: grayscale(${_class});
				}
				}
				`;	
			}
			if(className === "PCsaturate"){
				style_sheet +=`
				@media screen and (min-width: 1920px){
				.pc_v-saturate-${_class}{
					filter: saturate(${_class});
				}
				}
				`;	
			}
			if(className === "PCbrightness"){
				style_sheet +=`
				@media screen and (min-width: 1920px){
				.pc_v-brightness-${_class}{
					filter: brightness(${_class});
				}
				}
				`;	
			}
			if(className === "PCcontrast"){
				style_sheet +=`
				@media screen and (min-width: 1920px){
				.pc_v-contrast-${_class}{
					filter: contrast(${_class});
				}
				}
				`;	
			}

		}

	}

}	

// ketika halaman web sudah siap
// maka lakukan inisalisasi
// dan masukan valclass ke dalam nya
window.onload= ()=>{

	valclass_initalization();

	let style_ = document.head.querySelector("style");

	if(style_ instanceof HTMLStyleElement){

		style_.textContent = style_.textContent.replace(/\@style_sheet/igm,style_sheet);

	}else{

		let style = document.createElement("style");
		style.textContent = style_sheet;

		document.head.appendChild(style);

	}

}


// SOURCE CODE BY ARI SUSANTO (Developer framework seleku)
// 2021
// V-utils-custom