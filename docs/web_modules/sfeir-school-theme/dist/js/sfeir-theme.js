new class{constructor(){Reveal.addEventListener("ready",()=>setTimeout(this._pageload.bind(this),500)),this.path=""}_pageload(){this.path=this._extractPath(),this._manageFavIcon(),this._manageBackgrounds(),this._manageShowTypeContent(),this._manageSpecificsColumnsSlides(),this._manageListFragment(),this._manageSpeakersBorders(),Reveal&&Reveal.sync()}_extractPath(){const e=document.getElementsByTagName("script");for(let t=0;t<e.length;t++){const s=e.item(t);if(s.src&&s.src.match(/sfeir-theme\.js$/)){const e=s.src;return e.substring(0,e.indexOf("js/sfeir-theme"))}}return""}_manageFavIcon(){const e=["16x16","32x32","96x96"];for(let t of e){const e=document.createElement("link");e.type="image/x-icon",e.rel="shortcut icon",e.sizes=t,e.href=`${this.path}images/favicon-${t}.png`,document.getElementsByTagName("head")[0].appendChild(e)}const t=document.createElement("link");t.type="image/x-icon",t.rel="shortcut icon",t.href=`${this.path}images/favicon.ico`,document.getElementsByTagName("head")[0].appendChild(t)}_manageBackgrounds(){const e={"first-slide":`${this.path}images/bg-grey-axololt.png`,transition:`${this.path}images/bg-grey-axololt.png`,"school-presentation":`${this.path}images/bg-school.png`,"speaker-slide":`${this.path}images/bg-grey-axololt.png`,"sfeir-slide":`${this.path}images/bg-grey-axololt.png`,"bg-white":`${this.path}images/bg-grey-axololt.png`,"bg-pink":`${this.path}images/bg-grey-axololt.png`,"bg-blue":`${this.path}images/bg-grey-axololt.png`,"bg-green":`${this.path}images/bg-grey-axololt.png`,"sfeir-bg-axololt":`${this.path}images/bg-grey-axololt.png`,"transition-bg-grey-1":`${this.path}images/bg-grey-1.png`,"transition-bg-grey-2":`${this.path}images/bg-grey-2.png`,"transition-bg-grey-3":`${this.path}images/bg-grey-3.jpg`,"transition-bg-grey-4":`${this.path}images/bg-grey-4.jpg`,"transition-bg-grey-5":`${this.path}images/bg-grey-5.jpg`,"transition-bg-grey-6":`${this.path}images/bg-grey-6.jpg`,"transition-bg-grey-7":`${this.path}images/bg-grey-7.jpg`};for(let t in e){const s=document.querySelectorAll(".reveal .slides section:not([data-background])."+t);for(let a=0;a<s.length;a++){const i=s[a];i.classList.add("sfeir-specific-slide"),i.setAttribute("data-background",e[t])}}const t=[...document.querySelectorAll(".reveal .slides section:not([data-background]):not(.sfeir-specific-slide):not(.no-background):not(.with-code-dark):not([class*=transition])")];for(let e of t)e.classList.add("sfeir-basic-slide");this._manageFirstSlide()}_manageFirstSlide(){const e=[...document.querySelectorAll(".reveal .slides section.first-slide")];for(let t of e){const e=document.createElement("DIV");e.classList.add("sfeir-logo"),e.style["background-image"]=`url(${this.path}images/logo_empty.png)`;const s=t.hasAttribute("sfeir-level")?+t.getAttribute("sfeir-level"):1,a=t.hasAttribute("sfeir-techno")?t.getAttribute("sfeir-techno"):"";e.setAttribute("data-sfeir-level",s),e.setAttribute("data-sfeir-techno",a),t.insertAdjacentElement("afterbegin",e)}}_manageShowTypeContent(){const e=document.querySelector(".reveal .slides").getAttribute("data-type-show");if(e){const t=document.querySelectorAll(".reveal .slides section[data-type-show]");for(let s=0;s<t.length;s++){const a=t[s];a.getAttribute("data-type-show")!=e&&a.parentNode.removeChild(a)}}}_manageSpecificsColumnsSlides(){const e=[...document.querySelectorAll(".reveal .slides section.two-column-layout")];for(let t of e){const e=t.parentElement;if(e.classList.add("two-column-layout"),e.style.display="grid","SECTION"===e.nodeName){const t=[...e.querySelectorAll("section")];for(let e of t)e.classList.remove("two-column-layout"),e.style.display="block"}}Reveal&&Reveal.addEventListener("slidechanged",e=>{console.log(e);const t=e.currentSlide.parentElement;if("SECTION"===t.nodeName&&t.classList.contains("two-column-layout")){const e=Reveal.getState();e.indexv=2,Reveal.setState(e),t.style.display="grid",[...t.querySelectorAll("section")][0].style.display="block"}})}_manageListFragment(){const e=[...document.querySelectorAll(".reveal .slides section .list-fragment")];for(let t of e){let e=t.parentElement;if("LI"===e.nodeName&&(e=e.parentElement),"UL"===e.nodeName||"OL"===e.nodeName){const t=[...e.querySelectorAll("li")];for(let e of t)e.classList.add("fragment")}}}_manageSpeakersBorders(){const e=[...document.querySelectorAll(".reveal .slides section img[alt*=speaker]")];for(let t of e){let e=t.parentElement;const s=document.createElement("DIV");s.classList.add("speaker"),s.style["background-image"]=`url(${t.src})`,e.appendChild(s),e.removeChild(t)}}};
//# sourceMappingURL=sfeir-theme.js.map
