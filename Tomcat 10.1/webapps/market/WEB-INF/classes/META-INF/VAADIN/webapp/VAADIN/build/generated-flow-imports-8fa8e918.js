import{i as g,r as y,T as R,a as Si,B as Ii,t as mt,b as Qo,c as ue,A as Y,d as pe,e as rt,f as fe,g as ts,h as es,j as is,_ as os}from"./indexhtml-e434339c.js";/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const ss=g`
  :host {
    --lumo-size-xs: 1.625rem;
    --lumo-size-s: 1.875rem;
    --lumo-size-m: 2.25rem;
    --lumo-size-l: 2.75rem;
    --lumo-size-xl: 3.5rem;

    /* Icons */
    --lumo-icon-size-s: 1.25em;
    --lumo-icon-size-m: 1.5em;
    --lumo-icon-size-l: 2.25em;
    /* For backwards compatibility */
    --lumo-icon-size: var(--lumo-icon-size-m);
  }
`,Mi=document.createElement("template");Mi.innerHTML=`<style>${ss.toString().replace(":host","html")}</style>`;document.head.appendChild(Mi.content);const ki=g`
  :host {
    /* Sizing */
    --lumo-button-size: var(--lumo-size-m);
    min-width: calc(var(--lumo-button-size) * 2);
    height: var(--lumo-button-size);
    padding: 0 calc(var(--lumo-button-size) / 3 + var(--lumo-border-radius-m) / 2);
    margin: var(--lumo-space-xs) 0;
    box-sizing: border-box;
    /* Style */
    font-family: var(--lumo-font-family);
    font-size: var(--lumo-font-size-m);
    font-weight: 500;
    color: var(--_lumo-button-color, var(--lumo-primary-text-color));
    background-color: var(--_lumo-button-background-color, var(--lumo-contrast-5pct));
    border-radius: var(--lumo-border-radius-m);
    cursor: var(--lumo-clickable-cursor);
    -webkit-tap-highlight-color: transparent;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    flex-shrink: 0;
  }

  /* Set only for the internal parts so we don't affect the host vertical alignment */
  [part='label'],
  [part='prefix'],
  [part='suffix'] {
    line-height: var(--lumo-line-height-xs);
  }

  [part='label'] {
    padding: calc(var(--lumo-button-size) / 6) 0;
  }

  :host([theme~='small']) {
    font-size: var(--lumo-font-size-s);
    --lumo-button-size: var(--lumo-size-s);
  }

  :host([theme~='large']) {
    font-size: var(--lumo-font-size-l);
    --lumo-button-size: var(--lumo-size-l);
  }

  /* For interaction states */
  :host::before,
  :host::after {
    content: '';
    /* We rely on the host always being relative */
    position: absolute;
    z-index: 1;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: currentColor;
    border-radius: inherit;
    opacity: 0;
    pointer-events: none;
  }

  /* Hover */

  @media (any-hover: hover) {
    :host(:hover)::before {
      opacity: 0.02;
    }
  }

  /* Active */

  :host::after {
    transition: opacity 1.4s, transform 0.1s;
    filter: blur(8px);
  }

  :host([active])::before {
    opacity: 0.05;
    transition-duration: 0s;
  }

  :host([active])::after {
    opacity: 0.1;
    transition-duration: 0s, 0s;
    transform: scale(0);
  }

  /* Keyboard focus */

  :host([focus-ring]) {
    box-shadow: 0 0 0 2px var(--lumo-primary-color-50pct);
  }

  :host([theme~='primary'][focus-ring]) {
    box-shadow: 0 0 0 1px var(--lumo-base-color), 0 0 0 3px var(--lumo-primary-color-50pct);
  }

  /* Types (primary, tertiary, tertiary-inline */

  :host([theme~='tertiary']),
  :host([theme~='tertiary-inline']) {
    background-color: transparent !important;
    min-width: 0;
  }

  :host([theme~='tertiary']) {
    padding: 0 calc(var(--lumo-button-size) / 6);
  }

  :host([theme~='tertiary-inline'])::before {
    display: none;
  }

  :host([theme~='tertiary-inline']) {
    margin: 0;
    height: auto;
    padding: 0;
    line-height: inherit;
    font-size: inherit;
  }

  :host([theme~='tertiary-inline']) [part='label'] {
    padding: 0;
    overflow: visible;
    line-height: inherit;
  }

  :host([theme~='primary']) {
    background-color: var(--_lumo-button-primary-background-color, var(--lumo-primary-color));
    color: var(--_lumo-button-primary-color, var(--lumo-primary-contrast-color));
    font-weight: 600;
    min-width: calc(var(--lumo-button-size) * 2.5);
  }

  :host([theme~='primary'])::before {
    background-color: black;
  }

  @media (any-hover: hover) {
    :host([theme~='primary']:hover)::before {
      opacity: 0.05;
    }
  }

  :host([theme~='primary'][active])::before {
    opacity: 0.1;
  }

  :host([theme~='primary'][active])::after {
    opacity: 0.2;
  }

  /* Colors (success, error, contrast) */

  :host([theme~='success']) {
    color: var(--lumo-success-text-color);
  }

  :host([theme~='success'][theme~='primary']) {
    background-color: var(--lumo-success-color);
    color: var(--lumo-success-contrast-color);
  }

  :host([theme~='error']) {
    color: var(--lumo-error-text-color);
  }

  :host([theme~='error'][theme~='primary']) {
    background-color: var(--lumo-error-color);
    color: var(--lumo-error-contrast-color);
  }

  :host([theme~='contrast']) {
    color: var(--lumo-contrast);
  }

  :host([theme~='contrast'][theme~='primary']) {
    background-color: var(--lumo-contrast);
    color: var(--lumo-base-color);
  }

  /* Disabled state. Keep selectors after other color variants. */

  :host([disabled]) {
    pointer-events: none;
    color: var(--lumo-disabled-text-color);
  }

  :host([theme~='primary'][disabled]) {
    background-color: var(--lumo-contrast-30pct);
    color: var(--lumo-base-color);
  }

  :host([theme~='primary'][disabled]) [part] {
    opacity: 0.7;
  }

  /* Icons */

  [part] ::slotted(vaadin-icon) {
    display: inline-block;
    width: var(--lumo-icon-size-m);
    height: var(--lumo-icon-size-m);
  }

  /* Vaadin icons are based on a 16x16 grid (unlike Lumo and Material icons with 24x24), so they look too big by default */
  [part] ::slotted(vaadin-icon[icon^='vaadin:']) {
    padding: 0.25em;
    box-sizing: border-box !important;
  }

  [part='prefix'] {
    margin-left: -0.25em;
    margin-right: 0.25em;
  }

  [part='suffix'] {
    margin-left: 0.25em;
    margin-right: -0.25em;
  }

  /* Icon-only */

  :host([theme~='icon']:not([theme~='tertiary-inline'])) {
    min-width: var(--lumo-button-size);
    padding-left: calc(var(--lumo-button-size) / 4);
    padding-right: calc(var(--lumo-button-size) / 4);
  }

  :host([theme~='icon']) [part='prefix'],
  :host([theme~='icon']) [part='suffix'] {
    margin-left: 0;
    margin-right: 0;
  }

  /* RTL specific styles */

  :host([dir='rtl']) [part='prefix'] {
    margin-left: 0.25em;
    margin-right: -0.25em;
  }

  :host([dir='rtl']) [part='suffix'] {
    margin-left: -0.25em;
    margin-right: 0.25em;
  }

  :host([dir='rtl'][theme~='icon']) [part='prefix'],
  :host([dir='rtl'][theme~='icon']) [part='suffix'] {
    margin-left: 0;
    margin-right: 0;
  }
`;y("vaadin-button",ki,{moduleId:"lumo-button"});/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/window.JSCompiler_renameProperty=function(i,t){return i};/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/let ns=/(url\()([^)]*)(\))/g,rs=/(^\/[^\/])|(^#)|(^[\w-\d]*:)/,gt,A;function st(i,t){if(i&&rs.test(i)||i==="//")return i;if(gt===void 0){gt=!1;try{const e=new URL("b","http://a");e.pathname="c%20d",gt=e.href==="http://a/c%20d"}catch{}}if(t||(t=document.baseURI||window.location.href),gt)try{return new URL(i,t).href}catch{return i}return A||(A=document.implementation.createHTMLDocument("temp"),A.base=A.createElement("base"),A.head.appendChild(A.base),A.anchor=A.createElement("a"),A.body.appendChild(A.anchor)),A.base.href=t,A.anchor.href=i,A.anchor.href||i}function _e(i,t){return i.replace(ns,function(e,s,o,n){return s+"'"+st(o.replace(/["']/g,""),t)+"'"+n})}function me(i){return i.substring(0,i.lastIndexOf("/")+1)}/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const zi=!window.ShadyDOM||!window.ShadyDOM.inUse;Boolean(!window.ShadyCSS||window.ShadyCSS.nativeCss);const as=zi&&"adoptedStyleSheets"in Document.prototype&&"replaceSync"in CSSStyleSheet.prototype&&(()=>{try{const i=new CSSStyleSheet;i.replaceSync("");const t=document.createElement("div");return t.attachShadow({mode:"open"}),t.shadowRoot.adoptedStyleSheets=[i],t.shadowRoot.adoptedStyleSheets[0]===i}catch{return!1}})();let ls=window.Polymer&&window.Polymer.rootPath||me(document.baseURI||window.location.href),wt=window.Polymer&&window.Polymer.sanitizeDOMValue||void 0;window.Polymer&&window.Polymer.setPassiveTouchGestures;let at=window.Polymer&&window.Polymer.strictTemplatePolicy||!1,ds=window.Polymer&&window.Polymer.allowTemplateFromDomModule||!1,Li=window.Polymer&&window.Polymer.legacyOptimizations||!1,Di=window.Polymer&&window.Polymer.legacyWarnings||!1,cs=window.Polymer&&window.Polymer.syncInitialRender||!1,Yt=window.Polymer&&window.Polymer.legacyUndefined||!1,hs=window.Polymer&&window.Polymer.orderedComputed||!1,De=window.Polymer&&window.Polymer.removeNestedTemplates||!1,Hi=window.Polymer&&window.Polymer.fastDomIf||!1,us=window.Polymer&&window.Polymer.suppressTemplateNotifications||!1;window.Polymer&&window.Polymer.legacyNoObservedAttributes;let ps=window.Polymer&&window.Polymer.useAdoptedStyleSheetsWithBuiltCSS||!1;/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/let fs=0;const v=function(i){let t=i.__mixinApplications;t||(t=new WeakMap,i.__mixinApplications=t);let e=fs++;function s(o){let n=o.__mixinSet;if(n&&n[e])return o;let r=t,a=r.get(o);if(!a){a=i(o),r.set(o,a);let l=Object.create(a.__mixinSet||n||null);l[e]=!0,a.__mixinSet=l}return a}return s};/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/let ge={},Ri={};function He(i,t){ge[i]=Ri[i.toLowerCase()]=t}function Re(i){return ge[i]||Ri[i.toLowerCase()]}function _s(i){i.querySelector("style")&&console.warn("dom-module %s has style outside template",i.id)}class G extends HTMLElement{static get observedAttributes(){return["id"]}static import(t,e){if(t){let s=Re(t);return s&&e?s.querySelector(e):s}return null}attributeChangedCallback(t,e,s,o){e!==s&&this.register()}get assetpath(){if(!this.__assetpath){const t=window.HTMLImports&&HTMLImports.importForElement?HTMLImports.importForElement(this)||document:this.ownerDocument,e=st(this.getAttribute("assetpath")||"",t.baseURI);this.__assetpath=me(e)}return this.__assetpath}register(t){if(t=t||this.id,t){if(at&&Re(t)!==void 0)throw He(t,null),new Error(`strictTemplatePolicy: dom-module ${t} re-registered`);this.id=t,He(t,this),_s(this)}}}G.prototype.modules=ge;customElements.define("dom-module",G);/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const ms="link[rel=import][type~=css]",gs="include",Fe="shady-unscoped";function Fi(i){return G.import(i)}function Be(i){let t=i.body?i.body:i;const e=_e(t.textContent,i.baseURI),s=document.createElement("style");return s.textContent=e,s}function vs(i){const t=i.trim().split(/\s+/),e=[];for(let s=0;s<t.length;s++)e.push(...ys(t[s]));return e}function ys(i){const t=Fi(i);if(!t)return console.warn("Could not find style data in module named",i),[];if(t._styles===void 0){const e=[];e.push(...Bi(t));const s=t.querySelector("template");s&&e.push(...ve(s,t.assetpath)),t._styles=e}return t._styles}function ve(i,t){if(!i._styles){const e=[],s=i.content.querySelectorAll("style");for(let o=0;o<s.length;o++){let n=s[o],r=n.getAttribute(gs);r&&e.push(...vs(r).filter(function(a,l,d){return d.indexOf(a)===l})),t&&(n.textContent=_e(n.textContent,t)),e.push(n)}i._styles=e}return i._styles}function bs(i){let t=Fi(i);return t?Bi(t):[]}function Bi(i){const t=[],e=i.querySelectorAll(ms);for(let s=0;s<e.length;s++){let o=e[s];if(o.import){const n=o.import,r=o.hasAttribute(Fe);if(r&&!n._unscopedStyle){const a=Be(n);a.setAttribute(Fe,""),n._unscopedStyle=a}else n._style||(n._style=Be(n));t.push(r?n._unscopedStyle:n._style)}}return t}/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const _=window.ShadyDOM&&window.ShadyDOM.noPatch&&window.ShadyDOM.wrap?window.ShadyDOM.wrap:window.ShadyDOM?i=>ShadyDOM.patch(i):i=>i;/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/function Gt(i){return i.indexOf(".")>=0}function M(i){let t=i.indexOf(".");return t===-1?i:i.slice(0,t)}function Vi(i,t){return i.indexOf(t+".")===0}function lt(i,t){return t.indexOf(i+".")===0}function At(i,t,e){return t+e.slice(i.length)}function Qa(i,t){return i===t||Vi(i,t)||lt(i,t)}function it(i){if(Array.isArray(i)){let t=[];for(let e=0;e<i.length;e++){let s=i[e].toString().split(".");for(let o=0;o<s.length;o++)t.push(s[o])}return t.join(".")}else return i}function $i(i){return Array.isArray(i)?it(i).split("."):i.toString().split(".")}function b(i,t,e){let s=i,o=$i(t);for(let n=0;n<o.length;n++){if(!s)return;let r=o[n];s=s[r]}return e&&(e.path=o.join(".")),s}function Ve(i,t,e){let s=i,o=$i(t),n=o[o.length-1];if(o.length>1){for(let r=0;r<o.length-1;r++){let a=o[r];if(s=s[a],!s)return}s[n]=e}else s[t]=e;return o.join(".")}/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const xt={},Cs=/-[a-z]/g,ws=/([A-Z])/g;function Ui(i){return xt[i]||(xt[i]=i.indexOf("-")<0?i:i.replace(Cs,t=>t[1].toUpperCase()))}function St(i){return xt[i]||(xt[i]=i.replace(ws,"-$1").toLowerCase())}/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/let As=0,qi=0,$=[],xs=0,Wt=!1,ji=document.createTextNode("");new window.MutationObserver(Es).observe(ji,{characterData:!0});function Es(){Wt=!1;const i=$.length;for(let t=0;t<i;t++){let e=$[t];if(e)try{e()}catch(s){setTimeout(()=>{throw s})}}$.splice(0,i),qi+=i}const tl={after(i){return{run(t){return window.setTimeout(t,i)},cancel(t){window.clearTimeout(t)}}},run(i,t){return window.setTimeout(i,t)},cancel(i){window.clearTimeout(i)}},el={run(i){return window.requestAnimationFrame(i)},cancel(i){window.cancelAnimationFrame(i)}},Ps={run(i){return window.requestIdleCallback?window.requestIdleCallback(i):window.setTimeout(i,16)},cancel(i){window.cancelIdleCallback?window.cancelIdleCallback(i):window.clearTimeout(i)}},ye={run(i){return Wt||(Wt=!0,ji.textContent=xs++),$.push(i),As++},cancel(i){const t=i-qi;if(t>=0){if(!$[t])throw new Error("invalid async handle: "+i);$[t]=null}}};/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const Ts=ye,Yi=v(i=>{class t extends i{static createProperties(s){const o=this.prototype;for(let n in s)n in o||o._createPropertyAccessor(n)}static attributeNameForProperty(s){return s.toLowerCase()}static typeForProperty(s){}_createPropertyAccessor(s,o){this._addPropertyToAttributeMap(s),this.hasOwnProperty(JSCompiler_renameProperty("__dataHasAccessor",this))||(this.__dataHasAccessor=Object.assign({},this.__dataHasAccessor)),this.__dataHasAccessor[s]||(this.__dataHasAccessor[s]=!0,this._definePropertyAccessor(s,o))}_addPropertyToAttributeMap(s){this.hasOwnProperty(JSCompiler_renameProperty("__dataAttributes",this))||(this.__dataAttributes=Object.assign({},this.__dataAttributes));let o=this.__dataAttributes[s];return o||(o=this.constructor.attributeNameForProperty(s),this.__dataAttributes[o]=s),o}_definePropertyAccessor(s,o){Object.defineProperty(this,s,{get(){return this.__data[s]},set:o?function(){}:function(n){this._setPendingProperty(s,n,!0)&&this._invalidateProperties()}})}constructor(){super(),this.__dataEnabled=!1,this.__dataReady=!1,this.__dataInvalid=!1,this.__data={},this.__dataPending=null,this.__dataOld=null,this.__dataInstanceProps=null,this.__dataCounter=0,this.__serializing=!1,this._initializeProperties()}ready(){this.__dataReady=!0,this._flushProperties()}_initializeProperties(){for(let s in this.__dataHasAccessor)this.hasOwnProperty(s)&&(this.__dataInstanceProps=this.__dataInstanceProps||{},this.__dataInstanceProps[s]=this[s],delete this[s])}_initializeInstanceProperties(s){Object.assign(this,s)}_setProperty(s,o){this._setPendingProperty(s,o)&&this._invalidateProperties()}_getProperty(s){return this.__data[s]}_setPendingProperty(s,o,n){let r=this.__data[s],a=this._shouldPropertyChange(s,o,r);return a&&(this.__dataPending||(this.__dataPending={},this.__dataOld={}),this.__dataOld&&!(s in this.__dataOld)&&(this.__dataOld[s]=r),this.__data[s]=o,this.__dataPending[s]=o),a}_isPropertyPending(s){return!!(this.__dataPending&&this.__dataPending.hasOwnProperty(s))}_invalidateProperties(){!this.__dataInvalid&&this.__dataReady&&(this.__dataInvalid=!0,Ts.run(()=>{this.__dataInvalid&&(this.__dataInvalid=!1,this._flushProperties())}))}_enableProperties(){this.__dataEnabled||(this.__dataEnabled=!0,this.__dataInstanceProps&&(this._initializeInstanceProperties(this.__dataInstanceProps),this.__dataInstanceProps=null),this.ready())}_flushProperties(){this.__dataCounter++;const s=this.__data,o=this.__dataPending,n=this.__dataOld;this._shouldPropertiesChange(s,o,n)&&(this.__dataPending=null,this.__dataOld=null,this._propertiesChanged(s,o,n)),this.__dataCounter--}_shouldPropertiesChange(s,o,n){return Boolean(o)}_propertiesChanged(s,o,n){}_shouldPropertyChange(s,o,n){return n!==o&&(n===n||o===o)}attributeChangedCallback(s,o,n,r){o!==n&&this._attributeToProperty(s,n),super.attributeChangedCallback&&super.attributeChangedCallback(s,o,n,r)}_attributeToProperty(s,o,n){if(!this.__serializing){const r=this.__dataAttributes,a=r&&r[s]||s;this[a]=this._deserializeValue(o,n||this.constructor.typeForProperty(a))}}_propertyToAttribute(s,o,n){this.__serializing=!0,n=arguments.length<3?this[s]:n,this._valueToNodeAttribute(this,n,o||this.constructor.attributeNameForProperty(s)),this.__serializing=!1}_valueToNodeAttribute(s,o,n){const r=this._serializeValue(o);(n==="class"||n==="name"||n==="slot")&&(s=_(s)),r===void 0?s.removeAttribute(n):s.setAttribute(n,r===""&&window.trustedTypes?window.trustedTypes.emptyScript:r)}_serializeValue(s){switch(typeof s){case"boolean":return s?"":void 0;default:return s!=null?s.toString():void 0}}_deserializeValue(s,o){switch(o){case Boolean:return s!==null;case Number:return Number(s);default:return s}}}return t});/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const Gi={};let vt=HTMLElement.prototype;for(;vt;){let i=Object.getOwnPropertyNames(vt);for(let t=0;t<i.length;t++)Gi[i[t]]=!0;vt=Object.getPrototypeOf(vt)}const Ns=(()=>window.trustedTypes?i=>trustedTypes.isHTML(i)||trustedTypes.isScript(i)||trustedTypes.isScriptURL(i):()=>!1)();function Os(i,t){if(!Gi[t]){let e=i[t];e!==void 0&&(i.__data?i._setPendingProperty(t,e):(i.__dataProto?i.hasOwnProperty(JSCompiler_renameProperty("__dataProto",i))||(i.__dataProto=Object.create(i.__dataProto)):i.__dataProto={},i.__dataProto[t]=e))}}const Ss=v(i=>{const t=Yi(i);class e extends t{static createPropertiesForAttributes(){let o=this.observedAttributes;for(let n=0;n<o.length;n++)this.prototype._createPropertyAccessor(Ui(o[n]))}static attributeNameForProperty(o){return St(o)}_initializeProperties(){this.__dataProto&&(this._initializeProtoProperties(this.__dataProto),this.__dataProto=null),super._initializeProperties()}_initializeProtoProperties(o){for(let n in o)this._setProperty(n,o[n])}_ensureAttribute(o,n){const r=this;r.hasAttribute(o)||this._valueToNodeAttribute(r,n,o)}_serializeValue(o){switch(typeof o){case"object":if(o instanceof Date)return o.toString();if(o){if(Ns(o))return o;try{return JSON.stringify(o)}catch{return""}}default:return super._serializeValue(o)}}_deserializeValue(o,n){let r;switch(n){case Object:try{r=JSON.parse(o)}catch{r=o}break;case Array:try{r=JSON.parse(o)}catch{r=null,console.warn(`Polymer::Attributes: couldn't decode Array as JSON: ${o}`)}break;case Date:r=isNaN(o)?String(o):Number(o),r=new Date(r);break;default:r=super._deserializeValue(o,n);break}return r}_definePropertyAccessor(o,n){Os(this,o),super._definePropertyAccessor(o,n)}_hasAccessor(o){return this.__dataHasAccessor&&this.__dataHasAccessor[o]}_isPropertyPending(o){return Boolean(this.__dataPending&&o in this.__dataPending)}}return e});/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const Is={"dom-if":!0,"dom-repeat":!0};let $e=!1,Ue=!1;function Ms(){if(!$e){$e=!0;const i=document.createElement("textarea");i.placeholder="a",Ue=i.placeholder===i.textContent}return Ue}function ks(i){Ms()&&i.localName==="textarea"&&i.placeholder&&i.placeholder===i.textContent&&(i.textContent=null)}const zs=(()=>{const i=window.trustedTypes&&window.trustedTypes.createPolicy("polymer-template-event-attribute-policy",{createScript:t=>t});return(t,e,s)=>{const o=e.getAttribute(s);if(i&&s.startsWith("on-")){t.setAttribute(s,i.createScript(o,s));return}t.setAttribute(s,o)}})();function Ls(i){let t=i.getAttribute("is");if(t&&Is[t]){let e=i;for(e.removeAttribute("is"),i=e.ownerDocument.createElement(t),e.parentNode.replaceChild(i,e),i.appendChild(e);e.attributes.length;){const{name:s}=e.attributes[0];zs(i,e,s),e.removeAttribute(s)}}return i}function Wi(i,t){let e=t.parentInfo&&Wi(i,t.parentInfo);if(e){for(let s=e.firstChild,o=0;s;s=s.nextSibling)if(t.parentIndex===o++)return s}else return i}function Ds(i,t,e,s){s.id&&(t[s.id]=e)}function Hs(i,t,e){if(e.events&&e.events.length)for(let s=0,o=e.events,n;s<o.length&&(n=o[s]);s++)i._addMethodEventListenerToNode(t,n.name,n.value,i)}function Rs(i,t,e,s){e.templateInfo&&(t._templateInfo=e.templateInfo,t._parentTemplateInfo=s)}function Fs(i,t,e){return i=i._methodHost||i,function(o){i[e]?i[e](o,o.detail):console.warn("listener method `"+e+"` not defined")}}const Bs=v(i=>{class t extends i{static _parseTemplate(s,o){if(!s._templateInfo){let n=s._templateInfo={};n.nodeInfoList=[],n.nestedTemplate=Boolean(o),n.stripWhiteSpace=o&&o.stripWhiteSpace||s.hasAttribute&&s.hasAttribute("strip-whitespace"),this._parseTemplateContent(s,n,{parent:null})}return s._templateInfo}static _parseTemplateContent(s,o,n){return this._parseTemplateNode(s.content,o,n)}static _parseTemplateNode(s,o,n){let r=!1,a=s;return a.localName=="template"&&!a.hasAttribute("preserve-content")?r=this._parseTemplateNestedTemplate(a,o,n)||r:a.localName==="slot"&&(o.hasInsertionPoint=!0),ks(a),a.firstChild&&this._parseTemplateChildNodes(a,o,n),a.hasAttributes&&a.hasAttributes()&&(r=this._parseTemplateNodeAttributes(a,o,n)||r),r||n.noted}static _parseTemplateChildNodes(s,o,n){if(!(s.localName==="script"||s.localName==="style"))for(let r=s.firstChild,a=0,l;r;r=l){if(r.localName=="template"&&(r=Ls(r)),l=r.nextSibling,r.nodeType===Node.TEXT_NODE){let c=l;for(;c&&c.nodeType===Node.TEXT_NODE;)r.textContent+=c.textContent,l=c.nextSibling,s.removeChild(c),c=l;if(o.stripWhiteSpace&&!r.textContent.trim()){s.removeChild(r);continue}}let d={parentIndex:a,parentInfo:n};this._parseTemplateNode(r,o,d)&&(d.infoIndex=o.nodeInfoList.push(d)-1),r.parentNode&&a++}}static _parseTemplateNestedTemplate(s,o,n){let r=s,a=this._parseTemplate(r,o);return(a.content=r.content.ownerDocument.createDocumentFragment()).appendChild(r.content),n.templateInfo=a,!0}static _parseTemplateNodeAttributes(s,o,n){let r=!1,a=Array.from(s.attributes);for(let l=a.length-1,d;d=a[l];l--)r=this._parseTemplateNodeAttribute(s,o,n,d.name,d.value)||r;return r}static _parseTemplateNodeAttribute(s,o,n,r,a){return r.slice(0,3)==="on-"?(s.removeAttribute(r),n.events=n.events||[],n.events.push({name:r.slice(3),value:a}),!0):r==="id"?(n.id=a,!0):!1}static _contentForTemplate(s){let o=s._templateInfo;return o&&o.content||s.content}_stampTemplate(s,o){s&&!s.content&&window.HTMLTemplateElement&&HTMLTemplateElement.decorate&&HTMLTemplateElement.decorate(s),o=o||this.constructor._parseTemplate(s);let n=o.nodeInfoList,r=o.content||s.content,a=document.importNode(r,!0);a.__noInsertionPoint=!o.hasInsertionPoint;let l=a.nodeList=new Array(n.length);a.$={};for(let d=0,c=n.length,h;d<c&&(h=n[d]);d++){let u=l[d]=Wi(a,h);Ds(this,a.$,u,h),Rs(this,u,h,o),Hs(this,u,h)}return a=a,a}_addMethodEventListenerToNode(s,o,n,r){r=r||s;let a=Fs(r,o,n);return this._addEventListenerToNode(s,o,a),a}_addEventListenerToNode(s,o,n){s.addEventListener(o,n)}_removeEventListenerFromNode(s,o,n){s.removeEventListener(o,n)}}return t});/**
 * @fileoverview
 * @suppress {checkPrototypalTypes}
 * @license Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt The complete set of authors may be found
 * at http://polymer.github.io/AUTHORS.txt The complete set of contributors may
 * be found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by
 * Google as part of the polymer project is also subject to an additional IP
 * rights grant found at http://polymer.github.io/PATENTS.txt
 */let dt=0;const ct=[],f={COMPUTE:"__computeEffects",REFLECT:"__reflectEffects",NOTIFY:"__notifyEffects",PROPAGATE:"__propagateEffects",OBSERVE:"__observeEffects",READ_ONLY:"__readOnly"},Ki="__computeInfo",Vs=/[A-Z]/;function Dt(i,t,e){let s=i[t];if(!s)s=i[t]={};else if(!i.hasOwnProperty(t)&&(s=i[t]=Object.create(i[t]),e))for(let o in s){let n=s[o],r=s[o]=Array(n.length);for(let a=0;a<n.length;a++)r[a]=n[a]}return s}function ot(i,t,e,s,o,n){if(t){let r=!1;const a=dt++;for(let l in e){let d=o?M(l):l,c=t[d];if(c)for(let h=0,u=c.length,p;h<u&&(p=c[h]);h++)(!p.info||p.info.lastRun!==a)&&(!o||be(l,p.trigger))&&(p.info&&(p.info.lastRun=a),p.fn(i,l,e,s,p.info,o,n),r=!0)}return r}return!1}function $s(i,t,e,s,o,n,r,a){let l=!1,d=r?M(s):s,c=t[d];if(c)for(let h=0,u=c.length,p;h<u&&(p=c[h]);h++)(!p.info||p.info.lastRun!==e)&&(!r||be(s,p.trigger))&&(p.info&&(p.info.lastRun=e),p.fn(i,s,o,n,p.info,r,a),l=!0);return l}function be(i,t){if(t){let e=t.name;return e==i||!!(t.structured&&Vi(e,i))||!!(t.wildcard&&lt(e,i))}else return!0}function qe(i,t,e,s,o){let n=typeof o.method=="string"?i[o.method]:o.method,r=o.property;n?n.call(i,i.__data[r],s[r]):o.dynamicFn||console.warn("observer method `"+o.method+"` not defined")}function Us(i,t,e,s,o){let n=i[f.NOTIFY],r,a=dt++;for(let d in t)t[d]&&(n&&$s(i,n,a,d,e,s,o)||o&&qs(i,d,e))&&(r=!0);let l;r&&(l=i.__dataHost)&&l._invalidateProperties&&l._invalidateProperties()}function qs(i,t,e){let s=M(t);if(s!==t){let o=St(s)+"-changed";return Ji(i,o,e[t],t),!0}return!1}function Ji(i,t,e,s){let o={value:e,queueProperty:!0};s&&(o.path=s),_(i).dispatchEvent(new CustomEvent(t,{detail:o}))}function js(i,t,e,s,o,n){let a=(n?M(t):t)!=t?t:null,l=a?b(i,a):i.__data[t];a&&l===void 0&&(l=e[t]),Ji(i,o.eventName,l,a)}function Ys(i,t,e,s,o){let n,r=i.detail,a=r&&r.path;a?(s=At(e,s,a),n=r&&r.value):n=i.currentTarget[e],n=o?!n:n,(!t[f.READ_ONLY]||!t[f.READ_ONLY][s])&&t._setPendingPropertyOrPath(s,n,!0,Boolean(a))&&(!r||!r.queueProperty)&&t._invalidateProperties()}function Gs(i,t,e,s,o){let n=i.__data[t];wt&&(n=wt(n,o.attrName,"attribute",i)),i._propertyToAttribute(t,o.attrName,n)}function Ws(i,t,e,s){let o=i[f.COMPUTE];if(o)if(hs){dt++;const n=Js(i),r=[];for(let l in t)je(l,o,r,n,s);let a;for(;a=r.shift();)Zi(i,"",t,e,a)&&je(a.methodInfo,o,r,n,s);Object.assign(e,i.__dataOld),Object.assign(t,i.__dataPending),i.__dataPending=null}else{let n=t;for(;ot(i,o,n,e,s);)Object.assign(e,i.__dataOld),Object.assign(t,i.__dataPending),n=i.__dataPending,i.__dataPending=null}}const Ks=(i,t,e)=>{let s=0,o=t.length-1,n=-1;for(;s<=o;){const r=s+o>>1,a=e.get(t[r].methodInfo)-e.get(i.methodInfo);if(a<0)s=r+1;else if(a>0)o=r-1;else{n=r;break}}n<0&&(n=o+1),t.splice(n,0,i)},je=(i,t,e,s,o)=>{const n=o?M(i):i,r=t[n];if(r)for(let a=0;a<r.length;a++){const l=r[a];l.info.lastRun!==dt&&(!o||be(i,l.trigger))&&(l.info.lastRun=dt,Ks(l.info,e,s))}};function Js(i){let t=i.constructor.__orderedComputedDeps;if(!t){t=new Map;const e=i[f.COMPUTE];let{counts:s,ready:o,total:n}=Zs(i),r;for(;r=o.shift();){t.set(r,t.size);const a=e[r];a&&a.forEach(l=>{const d=l.info.methodInfo;--n,--s[d]===0&&o.push(d)})}n!==0&&console.warn(`Computed graph for ${i.localName} incomplete; circular?`),i.constructor.__orderedComputedDeps=t}return t}function Zs(i){const t=i[Ki],e={},s=i[f.COMPUTE],o=[];let n=0;for(let r in t){const a=t[r];n+=e[r]=a.args.filter(l=>!l.literal).length+(a.dynamicFn?1:0)}for(let r in s)t[r]||o.push(r);return{counts:e,ready:o,total:n}}function Zi(i,t,e,s,o){let n=Kt(i,t,e,s,o);if(n===ct)return!1;let r=o.methodInfo;return i.__dataHasAccessor&&i.__dataHasAccessor[r]?i._setPendingProperty(r,n,!0):(i[r]=n,!1)}function Xs(i,t,e){let s=i.__dataLinkedPaths;if(s){let o;for(let n in s){let r=s[n];lt(n,t)?(o=At(n,r,t),i._setPendingPropertyOrPath(o,e,!0,!0)):lt(r,t)&&(o=At(r,n,t),i._setPendingPropertyOrPath(o,e,!0,!0))}}}function Ht(i,t,e,s,o,n,r){e.bindings=e.bindings||[];let a={kind:s,target:o,parts:n,literal:r,isCompound:n.length!==1};if(e.bindings.push(a),sn(a)){let{event:d,negate:c}=a.parts[0];a.listenerEvent=d||St(o)+"-changed",a.listenerNegate=c}let l=t.nodeInfoList.length;for(let d=0;d<a.parts.length;d++){let c=a.parts[d];c.compoundIndex=d,Qs(i,t,a,c,l)}}function Qs(i,t,e,s,o){if(!s.literal)if(e.kind==="attribute"&&e.target[0]==="-")console.warn("Cannot set attribute "+e.target+' because "-" is not a valid attribute starting character');else{let n=s.dependencies,r={index:o,binding:e,part:s,evaluator:i};for(let a=0;a<n.length;a++){let l=n[a];typeof l=="string"&&(l=Qi(l),l.wildcard=!0),i._addTemplatePropertyEffect(t,l.rootProperty,{fn:tn,info:r,trigger:l})}}}function tn(i,t,e,s,o,n,r){let a=r[o.index],l=o.binding,d=o.part;if(n&&d.source&&t.length>d.source.length&&l.kind=="property"&&!l.isCompound&&a.__isPropertyEffectsClient&&a.__dataHasAccessor&&a.__dataHasAccessor[l.target]){let c=e[t];t=At(d.source,l.target,t),a._setPendingPropertyOrPath(t,c,!1,!0)&&i._enqueueClient(a)}else{let c=o.evaluator._evaluateBinding(i,d,t,e,s,n);c!==ct&&en(i,a,l,d,c)}}function en(i,t,e,s,o){if(o=on(t,o,e,s),wt&&(o=wt(o,e.target,e.kind,t)),e.kind=="attribute")i._valueToNodeAttribute(t,o,e.target);else{let n=e.target;t.__isPropertyEffectsClient&&t.__dataHasAccessor&&t.__dataHasAccessor[n]?(!t[f.READ_ONLY]||!t[f.READ_ONLY][n])&&t._setPendingProperty(n,o)&&i._enqueueClient(t):i._setUnmanagedPropertyToNode(t,n,o)}}function on(i,t,e,s){if(e.isCompound){let o=i.__dataCompoundStorage[e.target];o[s.compoundIndex]=t,t=o.join("")}return e.kind!=="attribute"&&(e.target==="textContent"||e.target==="value"&&(i.localName==="input"||i.localName==="textarea"))&&(t=t??""),t}function sn(i){return Boolean(i.target)&&i.kind!="attribute"&&i.kind!="text"&&!i.isCompound&&i.parts[0].mode==="{"}function nn(i,t){let{nodeList:e,nodeInfoList:s}=t;if(s.length)for(let o=0;o<s.length;o++){let n=s[o],r=e[o],a=n.bindings;if(a)for(let l=0;l<a.length;l++){let d=a[l];rn(r,d),an(r,i,d)}r.__dataHost=i}}function rn(i,t){if(t.isCompound){let e=i.__dataCompoundStorage||(i.__dataCompoundStorage={}),s=t.parts,o=new Array(s.length);for(let r=0;r<s.length;r++)o[r]=s[r].literal;let n=t.target;e[n]=o,t.literal&&t.kind=="property"&&(n==="className"&&(i=_(i)),i[n]=t.literal)}}function an(i,t,e){if(e.listenerEvent){let s=e.parts[0];i.addEventListener(e.listenerEvent,function(o){Ys(o,t,e.target,s.source,s.negate)})}}function Ye(i,t,e,s,o,n){n=t.static||n&&(typeof n!="object"||n[t.methodName]);let r={methodName:t.methodName,args:t.args,methodInfo:o,dynamicFn:n};for(let a=0,l;a<t.args.length&&(l=t.args[a]);a++)l.literal||i._addPropertyEffect(l.rootProperty,e,{fn:s,info:r,trigger:l});return n&&i._addPropertyEffect(t.methodName,e,{fn:s,info:r}),r}function Kt(i,t,e,s,o){let n=i._methodHost||i,r=n[o.methodName];if(r){let a=i._marshalArgs(o.args,t,e);return a===ct?ct:r.apply(n,a)}else o.dynamicFn||console.warn("method `"+o.methodName+"` not defined")}const ln=[],Xi="(?:[a-zA-Z_$][\\w.:$\\-*]*)",dn="(?:[-+]?[0-9]*\\.?[0-9]+(?:[eE][-+]?[0-9]+)?)",cn="(?:'(?:[^'\\\\]|\\\\.)*')",hn='(?:"(?:[^"\\\\]|\\\\.)*")',un="(?:"+cn+"|"+hn+")",Ge="(?:("+Xi+"|"+dn+"|"+un+")\\s*)",pn="(?:"+Ge+"(?:,\\s*"+Ge+")*)",fn="(?:\\(\\s*(?:"+pn+"?)\\)\\s*)",_n="("+Xi+"\\s*"+fn+"?)",mn="(\\[\\[|{{)\\s*",gn="(?:]]|}})",vn="(?:(!)\\s*)?",yn=mn+vn+_n+gn,We=new RegExp(yn,"g");function Ke(i){let t="";for(let e=0;e<i.length;e++){let s=i[e].literal;t+=s||""}return t}function Rt(i){let t=i.match(/([^\s]+?)\(([\s\S]*)\)/);if(t){let s={methodName:t[1],static:!0,args:ln};if(t[2].trim()){let o=t[2].replace(/\\,/g,"&comma;").split(",");return bn(o,s)}else return s}return null}function bn(i,t){return t.args=i.map(function(e){let s=Qi(e);return s.literal||(t.static=!1),s},this),t}function Qi(i){let t=i.trim().replace(/&comma;/g,",").replace(/\\(.)/g,"$1"),e={name:t,value:"",literal:!1},s=t[0];switch(s==="-"&&(s=t[1]),s>="0"&&s<="9"&&(s="#"),s){case"'":case'"':e.value=t.slice(1,-1),e.literal=!0;break;case"#":e.value=Number(t),e.literal=!0;break}return e.literal||(e.rootProperty=M(t),e.structured=Gt(t),e.structured&&(e.wildcard=t.slice(-2)==".*",e.wildcard&&(e.name=t.slice(0,-2)))),e}function Je(i,t,e){let s=b(i,e);return s===void 0&&(s=t[e]),s}function to(i,t,e,s){const o={indexSplices:s};Yt&&!i._overrideLegacyUndefined&&(t.splices=o),i.notifyPath(e+".splices",o),i.notifyPath(e+".length",t.length),Yt&&!i._overrideLegacyUndefined&&(o.indexSplices=[])}function W(i,t,e,s,o,n){to(i,t,e,[{index:s,addedCount:o,removed:n,object:t,type:"splice"}])}function Cn(i){return i[0].toUpperCase()+i.substring(1)}const Ce=v(i=>{const t=Bs(Ss(i));class e extends t{constructor(){super(),this.__isPropertyEffectsClient=!0,this.__dataClientsReady,this.__dataPendingClients,this.__dataToNotify,this.__dataLinkedPaths,this.__dataHasPaths,this.__dataCompoundStorage,this.__dataHost,this.__dataTemp,this.__dataClientsInitialized,this.__data,this.__dataPending,this.__dataOld,this.__computeEffects,this.__computeInfo,this.__reflectEffects,this.__notifyEffects,this.__propagateEffects,this.__observeEffects,this.__readOnly,this.__templateInfo,this._overrideLegacyUndefined}get PROPERTY_EFFECT_TYPES(){return f}_initializeProperties(){super._initializeProperties(),this._registerHost(),this.__dataClientsReady=!1,this.__dataPendingClients=null,this.__dataToNotify=null,this.__dataLinkedPaths=null,this.__dataHasPaths=!1,this.__dataCompoundStorage=this.__dataCompoundStorage||null,this.__dataHost=this.__dataHost||null,this.__dataTemp={},this.__dataClientsInitialized=!1}_registerHost(){if(K.length){let o=K[K.length-1];o._enqueueClient(this),this.__dataHost=o}}_initializeProtoProperties(o){this.__data=Object.create(o),this.__dataPending=Object.create(o),this.__dataOld={}}_initializeInstanceProperties(o){let n=this[f.READ_ONLY];for(let r in o)(!n||!n[r])&&(this.__dataPending=this.__dataPending||{},this.__dataOld=this.__dataOld||{},this.__data[r]=this.__dataPending[r]=o[r])}_addPropertyEffect(o,n,r){this._createPropertyAccessor(o,n==f.READ_ONLY);let a=Dt(this,n,!0)[o];a||(a=this[n][o]=[]),a.push(r)}_removePropertyEffect(o,n,r){let a=Dt(this,n,!0)[o],l=a.indexOf(r);l>=0&&a.splice(l,1)}_hasPropertyEffect(o,n){let r=this[n];return Boolean(r&&r[o])}_hasReadOnlyEffect(o){return this._hasPropertyEffect(o,f.READ_ONLY)}_hasNotifyEffect(o){return this._hasPropertyEffect(o,f.NOTIFY)}_hasReflectEffect(o){return this._hasPropertyEffect(o,f.REFLECT)}_hasComputedEffect(o){return this._hasPropertyEffect(o,f.COMPUTE)}_setPendingPropertyOrPath(o,n,r,a){if(a||M(Array.isArray(o)?o[0]:o)!==o){if(!a){let l=b(this,o);if(o=Ve(this,o,n),!o||!super._shouldPropertyChange(o,n,l))return!1}if(this.__dataHasPaths=!0,this._setPendingProperty(o,n,r))return Xs(this,o,n),!0}else{if(this.__dataHasAccessor&&this.__dataHasAccessor[o])return this._setPendingProperty(o,n,r);this[o]=n}return!1}_setUnmanagedPropertyToNode(o,n,r){(r!==o[n]||typeof r=="object")&&(n==="className"&&(o=_(o)),o[n]=r)}_setPendingProperty(o,n,r){let a=this.__dataHasPaths&&Gt(o),l=a?this.__dataTemp:this.__data;return this._shouldPropertyChange(o,n,l[o])?(this.__dataPending||(this.__dataPending={},this.__dataOld={}),o in this.__dataOld||(this.__dataOld[o]=this.__data[o]),a?this.__dataTemp[o]=n:this.__data[o]=n,this.__dataPending[o]=n,(a||this[f.NOTIFY]&&this[f.NOTIFY][o])&&(this.__dataToNotify=this.__dataToNotify||{},this.__dataToNotify[o]=r),!0):!1}_setProperty(o,n){this._setPendingProperty(o,n,!0)&&this._invalidateProperties()}_invalidateProperties(){this.__dataReady&&this._flushProperties()}_enqueueClient(o){this.__dataPendingClients=this.__dataPendingClients||[],o!==this&&this.__dataPendingClients.push(o)}_flushClients(){this.__dataClientsReady?this.__enableOrFlushClients():(this.__dataClientsReady=!0,this._readyClients(),this.__dataReady=!0)}__enableOrFlushClients(){let o=this.__dataPendingClients;if(o){this.__dataPendingClients=null;for(let n=0;n<o.length;n++){let r=o[n];r.__dataEnabled?r.__dataPending&&r._flushProperties():r._enableProperties()}}}_readyClients(){this.__enableOrFlushClients()}setProperties(o,n){for(let r in o)(n||!this[f.READ_ONLY]||!this[f.READ_ONLY][r])&&this._setPendingPropertyOrPath(r,o[r],!0);this._invalidateProperties()}ready(){this._flushProperties(),this.__dataClientsReady||this._flushClients(),this.__dataPending&&this._flushProperties()}_propertiesChanged(o,n,r){let a=this.__dataHasPaths;this.__dataHasPaths=!1;let l;Ws(this,n,r,a),l=this.__dataToNotify,this.__dataToNotify=null,this._propagatePropertyChanges(n,r,a),this._flushClients(),ot(this,this[f.REFLECT],n,r,a),ot(this,this[f.OBSERVE],n,r,a),l&&Us(this,l,n,r,a),this.__dataCounter==1&&(this.__dataTemp={})}_propagatePropertyChanges(o,n,r){this[f.PROPAGATE]&&ot(this,this[f.PROPAGATE],o,n,r),this.__templateInfo&&this._runEffectsForTemplate(this.__templateInfo,o,n,r)}_runEffectsForTemplate(o,n,r,a){const l=(d,c)=>{ot(this,o.propertyEffects,d,r,c,o.nodeList);for(let h=o.firstChild;h;h=h.nextSibling)this._runEffectsForTemplate(h,d,r,c)};o.runEffects?o.runEffects(l,n,a):l(n,a)}linkPaths(o,n){o=it(o),n=it(n),this.__dataLinkedPaths=this.__dataLinkedPaths||{},this.__dataLinkedPaths[o]=n}unlinkPaths(o){o=it(o),this.__dataLinkedPaths&&delete this.__dataLinkedPaths[o]}notifySplices(o,n){let r={path:""},a=b(this,o,r);to(this,a,r.path,n)}get(o,n){return b(n||this,o)}set(o,n,r){r?Ve(r,o,n):(!this[f.READ_ONLY]||!this[f.READ_ONLY][o])&&this._setPendingPropertyOrPath(o,n,!0)&&this._invalidateProperties()}push(o,...n){let r={path:""},a=b(this,o,r),l=a.length,d=a.push(...n);return n.length&&W(this,a,r.path,l,n.length,[]),d}pop(o){let n={path:""},r=b(this,o,n),a=Boolean(r.length),l=r.pop();return a&&W(this,r,n.path,r.length,0,[l]),l}splice(o,n,r,...a){let l={path:""},d=b(this,o,l);n<0?n=d.length-Math.floor(-n):n&&(n=Math.floor(n));let c;return arguments.length===2?c=d.splice(n):c=d.splice(n,r,...a),(a.length||c.length)&&W(this,d,l.path,n,a.length,c),c}shift(o){let n={path:""},r=b(this,o,n),a=Boolean(r.length),l=r.shift();return a&&W(this,r,n.path,0,0,[l]),l}unshift(o,...n){let r={path:""},a=b(this,o,r),l=a.unshift(...n);return n.length&&W(this,a,r.path,0,n.length,[]),l}notifyPath(o,n){let r;if(arguments.length==1){let a={path:""};n=b(this,o,a),r=a.path}else Array.isArray(o)?r=it(o):r=o;this._setPendingPropertyOrPath(r,n,!0,!0)&&this._invalidateProperties()}_createReadOnlyProperty(o,n){this._addPropertyEffect(o,f.READ_ONLY),n&&(this["_set"+Cn(o)]=function(r){this._setProperty(o,r)})}_createPropertyObserver(o,n,r){let a={property:o,method:n,dynamicFn:Boolean(r)};this._addPropertyEffect(o,f.OBSERVE,{fn:qe,info:a,trigger:{name:o}}),r&&this._addPropertyEffect(n,f.OBSERVE,{fn:qe,info:a,trigger:{name:n}})}_createMethodObserver(o,n){let r=Rt(o);if(!r)throw new Error("Malformed observer expression '"+o+"'");Ye(this,r,f.OBSERVE,Kt,null,n)}_createNotifyingProperty(o){this._addPropertyEffect(o,f.NOTIFY,{fn:js,info:{eventName:St(o)+"-changed",property:o}})}_createReflectedProperty(o){let n=this.constructor.attributeNameForProperty(o);n[0]==="-"?console.warn("Property "+o+" cannot be reflected to attribute "+n+' because "-" is not a valid starting attribute name. Use a lowercase first letter for the property instead.'):this._addPropertyEffect(o,f.REFLECT,{fn:Gs,info:{attrName:n}})}_createComputedProperty(o,n,r){let a=Rt(n);if(!a)throw new Error("Malformed computed expression '"+n+"'");const l=Ye(this,a,f.COMPUTE,Zi,o,r);Dt(this,Ki)[o]=l}_marshalArgs(o,n,r){const a=this.__data,l=[];for(let d=0,c=o.length;d<c;d++){let{name:h,structured:u,wildcard:p,value:m,literal:P}=o[d];if(!P)if(p){const T=lt(h,n),C=Je(a,r,T?n:h);m={path:T?n:h,value:C,base:T?b(a,h):C}}else m=u?Je(a,r,h):a[h];if(Yt&&!this._overrideLegacyUndefined&&m===void 0&&o.length>1)return ct;l[d]=m}return l}static addPropertyEffect(o,n,r){this.prototype._addPropertyEffect(o,n,r)}static createPropertyObserver(o,n,r){this.prototype._createPropertyObserver(o,n,r)}static createMethodObserver(o,n){this.prototype._createMethodObserver(o,n)}static createNotifyingProperty(o){this.prototype._createNotifyingProperty(o)}static createReadOnlyProperty(o,n){this.prototype._createReadOnlyProperty(o,n)}static createReflectedProperty(o){this.prototype._createReflectedProperty(o)}static createComputedProperty(o,n,r){this.prototype._createComputedProperty(o,n,r)}static bindTemplate(o){return this.prototype._bindTemplate(o)}_bindTemplate(o,n){let r=this.constructor._parseTemplate(o),a=this.__preBoundTemplateInfo==r;if(!a)for(let l in r.propertyEffects)this._createPropertyAccessor(l);if(n)if(r=Object.create(r),r.wasPreBound=a,!this.__templateInfo)this.__templateInfo=r;else{const l=o._parentTemplateInfo||this.__templateInfo,d=l.lastChild;r.parent=l,l.lastChild=r,r.previousSibling=d,d?d.nextSibling=r:l.firstChild=r}else this.__preBoundTemplateInfo=r;return r}static _addTemplatePropertyEffect(o,n,r){let a=o.hostProps=o.hostProps||{};a[n]=!0;let l=o.propertyEffects=o.propertyEffects||{};(l[n]=l[n]||[]).push(r)}_stampTemplate(o,n){n=n||this._bindTemplate(o,!0),K.push(this);let r=super._stampTemplate(o,n);if(K.pop(),n.nodeList=r.nodeList,!n.wasPreBound){let a=n.childNodes=[];for(let l=r.firstChild;l;l=l.nextSibling)a.push(l)}return r.templateInfo=n,nn(this,n),this.__dataClientsReady&&(this._runEffectsForTemplate(n,this.__data,null,!1),this._flushClients()),r}_removeBoundDom(o){const n=o.templateInfo,{previousSibling:r,nextSibling:a,parent:l}=n;r?r.nextSibling=a:l&&(l.firstChild=a),a?a.previousSibling=r:l&&(l.lastChild=r),n.nextSibling=n.previousSibling=null;let d=n.childNodes;for(let c=0;c<d.length;c++){let h=d[c];_(_(h).parentNode).removeChild(h)}}static _parseTemplateNode(o,n,r){let a=t._parseTemplateNode.call(this,o,n,r);if(o.nodeType===Node.TEXT_NODE){let l=this._parseBindings(o.textContent,n);l&&(o.textContent=Ke(l)||" ",Ht(this,n,r,"text","textContent",l),a=!0)}return a}static _parseTemplateNodeAttribute(o,n,r,a,l){let d=this._parseBindings(l,n);if(d){let c=a,h="property";Vs.test(a)?h="attribute":a[a.length-1]=="$"&&(a=a.slice(0,-1),h="attribute");let u=Ke(d);return u&&h=="attribute"&&(a=="class"&&o.hasAttribute("class")&&(u+=" "+o.getAttribute(a)),o.setAttribute(a,u)),h=="attribute"&&c=="disable-upgrade$"&&o.setAttribute(a,""),o.localName==="input"&&c==="value"&&o.setAttribute(c,""),o.removeAttribute(c),h==="property"&&(a=Ui(a)),Ht(this,n,r,h,a,d,u),!0}else return t._parseTemplateNodeAttribute.call(this,o,n,r,a,l)}static _parseTemplateNestedTemplate(o,n,r){let a=t._parseTemplateNestedTemplate.call(this,o,n,r);const l=o.parentNode,d=r.templateInfo,c=l.localName==="dom-if",h=l.localName==="dom-repeat";De&&(c||h)&&(l.removeChild(o),r=r.parentInfo,r.templateInfo=d,r.noted=!0,a=!1);let u=d.hostProps;if(Hi&&c)u&&(n.hostProps=Object.assign(n.hostProps||{},u),De||(r.parentInfo.noted=!0));else{let p="{";for(let m in u){let P=[{mode:p,source:m,dependencies:[m],hostProp:!0}];Ht(this,n,r,"property","_host_"+m,P)}}return a}static _parseBindings(o,n){let r=[],a=0,l;for(;(l=We.exec(o))!==null;){l.index>a&&r.push({literal:o.slice(a,l.index)});let d=l[1][0],c=Boolean(l[2]),h=l[3].trim(),u=!1,p="",m=-1;d=="{"&&(m=h.indexOf("::"))>0&&(p=h.substring(m+2),h=h.substring(0,m),u=!0);let P=Rt(h),T=[];if(P){let{args:C,methodName:w}=P;for(let Lt=0;Lt<C.length;Lt++){let Le=C[Lt];Le.literal||T.push(Le)}let B=n.dynamicFns;(B&&B[w]||P.static)&&(T.push(w),P.dynamicFn=!0)}else T.push(h);r.push({source:h,mode:d,negate:c,customEvent:u,signature:P,dependencies:T,event:p}),a=We.lastIndex}if(a&&a<o.length){let d=o.substring(a);d&&r.push({literal:d})}return r.length?r:null}static _evaluateBinding(o,n,r,a,l,d){let c;return n.signature?c=Kt(o,r,a,l,n.signature):r!=n.source?c=b(o,n.source):d&&Gt(r)?c=b(o,r):c=o.__data[r],n.negate&&(c=!c),c}}return e}),K=[];/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*//**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/function wn(i){const t={};for(let e in i){const s=i[e];t[e]=typeof s=="function"?{type:s}:s}return t}const An=v(i=>{const t=Yi(i);function e(n){const r=Object.getPrototypeOf(n);return r.prototype instanceof o?r:null}function s(n){if(!n.hasOwnProperty(JSCompiler_renameProperty("__ownProperties",n))){let r=null;if(n.hasOwnProperty(JSCompiler_renameProperty("properties",n))){const a=n.properties;a&&(r=wn(a))}n.__ownProperties=r}return n.__ownProperties}class o extends t{static get observedAttributes(){if(!this.hasOwnProperty(JSCompiler_renameProperty("__observedAttributes",this))){this.prototype;const r=this._properties;this.__observedAttributes=r?Object.keys(r).map(a=>this.prototype._addPropertyToAttributeMap(a)):[]}return this.__observedAttributes}static finalize(){if(!this.hasOwnProperty(JSCompiler_renameProperty("__finalized",this))){const r=e(this);r&&r.finalize(),this.__finalized=!0,this._finalizeClass()}}static _finalizeClass(){const r=s(this);r&&this.createProperties(r)}static get _properties(){if(!this.hasOwnProperty(JSCompiler_renameProperty("__properties",this))){const r=e(this);this.__properties=Object.assign({},r&&r._properties,s(this))}return this.__properties}static typeForProperty(r){const a=this._properties[r];return a&&a.type}_initializeProperties(){this.constructor.finalize(),super._initializeProperties()}connectedCallback(){super.connectedCallback&&super.connectedCallback(),this._enableProperties()}disconnectedCallback(){super.disconnectedCallback&&super.disconnectedCallback()}}return o});/**
 * @fileoverview
 * @suppress {checkPrototypalTypes}
 * @license Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt The complete set of authors may be found
 * at http://polymer.github.io/AUTHORS.txt The complete set of contributors may
 * be found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by
 * Google as part of the polymer project is also subject to an additional IP
 * rights grant found at http://polymer.github.io/PATENTS.txt
 */const xn="3.5.1",Ze=window.ShadyCSS&&window.ShadyCSS.cssBuild,En=v(i=>{const t=An(Ce(i));function e(l){if(!l.hasOwnProperty(JSCompiler_renameProperty("__propertyDefaults",l))){l.__propertyDefaults=null;let d=l._properties;for(let c in d){let h=d[c];"value"in h&&(l.__propertyDefaults=l.__propertyDefaults||{},l.__propertyDefaults[c]=h)}}return l.__propertyDefaults}function s(l){return l.hasOwnProperty(JSCompiler_renameProperty("__ownObservers",l))||(l.__ownObservers=l.hasOwnProperty(JSCompiler_renameProperty("observers",l))?l.observers:null),l.__ownObservers}function o(l,d,c,h){c.computed&&(c.readOnly=!0),c.computed&&(l._hasReadOnlyEffect(d)?console.warn(`Cannot redefine computed property '${d}'.`):l._createComputedProperty(d,c.computed,h)),c.readOnly&&!l._hasReadOnlyEffect(d)?l._createReadOnlyProperty(d,!c.computed):c.readOnly===!1&&l._hasReadOnlyEffect(d)&&console.warn(`Cannot make readOnly property '${d}' non-readOnly.`),c.reflectToAttribute&&!l._hasReflectEffect(d)?l._createReflectedProperty(d):c.reflectToAttribute===!1&&l._hasReflectEffect(d)&&console.warn(`Cannot make reflected property '${d}' non-reflected.`),c.notify&&!l._hasNotifyEffect(d)?l._createNotifyingProperty(d):c.notify===!1&&l._hasNotifyEffect(d)&&console.warn(`Cannot make notify property '${d}' non-notify.`),c.observer&&l._createPropertyObserver(d,c.observer,h[c.observer]),l._addPropertyToAttributeMap(d)}function n(l,d,c,h){if(!Ze){const u=d.content.querySelectorAll("style"),p=ve(d),m=bs(c),P=d.content.firstElementChild;for(let C=0;C<m.length;C++){let w=m[C];w.textContent=l._processStyleText(w.textContent,h),d.content.insertBefore(w,P)}let T=0;for(let C=0;C<p.length;C++){let w=p[C],B=u[T];B!==w?(w=w.cloneNode(!0),B.parentNode.insertBefore(w,B)):T++,w.textContent=l._processStyleText(w.textContent,h)}}if(window.ShadyCSS&&window.ShadyCSS.prepareTemplate(d,c),ps&&Ze&&as){const u=d.content.querySelectorAll("style");if(u){let p="";Array.from(u).forEach(m=>{p+=m.textContent,m.parentNode.removeChild(m)}),l._styleSheet=new CSSStyleSheet,l._styleSheet.replaceSync(p)}}}function r(l){let d=null;if(l&&(!at||ds)&&(d=G.import(l,"template"),at&&!d))throw new Error(`strictTemplatePolicy: expecting dom-module or null template for ${l}`);return d}class a extends t{static get polymerElementVersion(){return xn}static _finalizeClass(){t._finalizeClass.call(this);const d=s(this);d&&this.createObservers(d,this._properties),this._prepareTemplate()}static _prepareTemplate(){let d=this.template;d&&(typeof d=="string"?(console.error("template getter must return HTMLTemplateElement"),d=null):Li||(d=d.cloneNode(!0))),this.prototype._template=d}static createProperties(d){for(let c in d)o(this.prototype,c,d[c],d)}static createObservers(d,c){const h=this.prototype;for(let u=0;u<d.length;u++)h._createMethodObserver(d[u],c)}static get template(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_template",this))){let d=this.prototype.hasOwnProperty(JSCompiler_renameProperty("_template",this.prototype))?this.prototype._template:void 0;typeof d=="function"&&(d=d()),this._template=d!==void 0?d:this.hasOwnProperty(JSCompiler_renameProperty("is",this))&&r(this.is)||Object.getPrototypeOf(this.prototype).constructor.template}return this._template}static set template(d){this._template=d}static get importPath(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_importPath",this))){const d=this.importMeta;if(d)this._importPath=me(d.url);else{const c=G.import(this.is);this._importPath=c&&c.assetpath||Object.getPrototypeOf(this.prototype).constructor.importPath}}return this._importPath}constructor(){super(),this._template,this._importPath,this.rootPath,this.importPath,this.root,this.$}_initializeProperties(){this.constructor.finalize(),this.constructor._finalizeTemplate(this.localName),super._initializeProperties(),this.rootPath=ls,this.importPath=this.constructor.importPath;let d=e(this.constructor);if(d)for(let c in d){let h=d[c];if(this._canApplyPropertyDefault(c)){let u=typeof h.value=="function"?h.value.call(this):h.value;this._hasAccessor(c)?this._setPendingProperty(c,u,!0):this[c]=u}}}_canApplyPropertyDefault(d){return!this.hasOwnProperty(d)}static _processStyleText(d,c){return _e(d,c)}static _finalizeTemplate(d){const c=this.prototype._template;if(c&&!c.__polymerFinalized){c.__polymerFinalized=!0;const h=this.importPath,u=h?st(h):"";n(this,c,d,u),this.prototype._bindTemplate(c)}}connectedCallback(){window.ShadyCSS&&this._template&&window.ShadyCSS.styleElement(this),super.connectedCallback()}ready(){this._template&&(this.root=this._stampTemplate(this._template),this.$=this.root.$),super.ready()}_readyClients(){this._template&&(this.root=this._attachDom(this.root)),super._readyClients()}_attachDom(d){const c=_(this);if(c.attachShadow)return d?(c.shadowRoot||(c.attachShadow({mode:"open",shadyUpgradeFragment:d}),c.shadowRoot.appendChild(d),this.constructor._styleSheet&&(c.shadowRoot.adoptedStyleSheets=[this.constructor._styleSheet])),cs&&window.ShadyDOM&&window.ShadyDOM.flushInitial(c.shadowRoot),c.shadowRoot):null;throw new Error("ShadowDOM not available. PolymerElement can create dom as children instead of in ShadowDOM by setting `this.root = this;` before `ready`.")}updateStyles(d){window.ShadyCSS&&window.ShadyCSS.styleSubtree(this,d)}resolveUrl(d,c){return!c&&this.importPath&&(c=st(this.importPath)),st(d,c)}static _parseTemplateContent(d,c,h){return c.dynamicFns=c.dynamicFns||this._properties,t._parseTemplateContent.call(this,d,c,h)}static _addTemplatePropertyEffect(d,c,h){return Di&&!(c in this._properties)&&!(h.info.part.signature&&h.info.part.signature.static)&&!h.info.part.hostProp&&!d.nestedTemplate&&console.warn(`Property '${c}' used in template but not declared in 'properties'; attribute will not be observed.`),t._addTemplatePropertyEffect.call(this,d,c,h)}}return a});/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const Xe=window.trustedTypes&&trustedTypes.createPolicy("polymer-html-literal",{createHTML:i=>i});class eo{constructor(t,e){oo(t,e);const s=e.reduce((o,n,r)=>o+io(n)+t[r+1],t[0]);this.value=s.toString()}toString(){return this.value}}function io(i){if(i instanceof eo)return i.value;throw new Error(`non-literal value passed to Polymer's htmlLiteral function: ${i}`)}function Pn(i){if(i instanceof HTMLTemplateElement)return i.innerHTML;if(i instanceof eo)return io(i);throw new Error(`non-template value passed to Polymer's html function: ${i}`)}const x=function(t,...e){oo(t,e);const s=document.createElement("template");let o=e.reduce((n,r,a)=>n+Pn(r)+t[a+1],t[0]);return Xe&&(o=Xe.createHTML(o)),s.innerHTML=o,s},oo=(i,t)=>{if(!Array.isArray(i)||!Array.isArray(i.raw)||t.length!==i.length-1)throw new TypeError("Invalid call to the html template tag")};/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const E=En(HTMLElement);/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const It=v(i=>class extends i{constructor(){super(),this.__controllers=new Set}connectedCallback(){super.connectedCallback(),this.__controllers.forEach(e=>{e.hostConnected&&e.hostConnected()})}disconnectedCallback(){super.disconnectedCallback(),this.__controllers.forEach(e=>{e.hostDisconnected&&e.hostDisconnected()})}addController(e){this.__controllers.add(e),this.$!==void 0&&this.isConnected&&e.hostConnected&&e.hostConnected()}removeController(e){this.__controllers.delete(e)}}),Tn=/\/\*[\*!]\s+vaadin-dev-mode:start([\s\S]*)vaadin-dev-mode:end\s+\*\*\//i,Ct=window.Vaadin&&window.Vaadin.Flow&&window.Vaadin.Flow.clients;function Nn(){function i(){return!0}return so(i)}function On(){try{return Sn()?!0:In()?Ct?!Mn():!Nn():!1}catch{return!1}}function Sn(){return localStorage.getItem("vaadin.developmentmode.force")}function In(){return["localhost","127.0.0.1"].indexOf(window.location.hostname)>=0}function Mn(){return!!(Ct&&Object.keys(Ct).map(t=>Ct[t]).filter(t=>t.productionMode).length>0)}function so(i,t){if(typeof i!="function")return;const e=Tn.exec(i.toString());if(e)try{i=new Function(e[1])}catch(s){console.log("vaadin-development-mode-detector: uncommentAndRun() failed",s)}return i(t)}window.Vaadin=window.Vaadin||{};const Qe=function(i,t){if(window.Vaadin.developmentMode)return so(i,t)};window.Vaadin.developmentMode===void 0&&(window.Vaadin.developmentMode=On());function kn(){}const zn=function(){if(typeof Qe=="function")return Qe(kn)};/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
 */let ti=0,no=0;const U=[];let ei=0,Jt=!1;const ro=document.createTextNode("");function Ln(){Jt=!1;const i=U.length;for(let t=0;t<i;t++){const e=U[t];if(e)try{e()}catch(s){setTimeout(()=>{throw s})}}U.splice(0,i),no+=i}new window.MutationObserver(Ln).observe(ro,{characterData:!0});const Dn={after(i){return{run(t){return window.setTimeout(t,i)},cancel(t){window.clearTimeout(t)}}},run(i,t){return window.setTimeout(i,t)},cancel(i){window.clearTimeout(i)}},ol={run(i){return window.requestAnimationFrame(i)},cancel(i){window.cancelAnimationFrame(i)}},Hn={run(i){return window.requestIdleCallback?window.requestIdleCallback(i):window.setTimeout(i,16)},cancel(i){window.cancelIdleCallback?window.cancelIdleCallback(i):window.clearTimeout(i)}},ao={run(i){Jt||(Jt=!0,ro.textContent=ei,ei+=1),U.push(i);const t=ti;return ti+=1,t},cancel(i){const t=i-no;if(t>=0){if(!U[t])throw new Error(`invalid async handle: ${i}`);U[t]=null}}};/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const ht=new Set;let we=class Zt{static debounce(t,e,s){return t instanceof Zt?t._cancelAsync():t=new Zt,t.setConfig(e,s),t}constructor(){this._asyncModule=null,this._callback=null,this._timer=null}setConfig(t,e){this._asyncModule=t,this._callback=e,this._timer=this._asyncModule.run(()=>{this._timer=null,ht.delete(this),this._callback()})}cancel(){this.isActive()&&(this._cancelAsync(),ht.delete(this))}_cancelAsync(){this.isActive()&&(this._asyncModule.cancel(this._timer),this._timer=null)}flush(){this.isActive()&&(this.cancel(),this._callback())}isActive(){return this._timer!=null}};function Rn(i){ht.add(i)}function Fn(){const i=Boolean(ht.size);return ht.forEach(t=>{try{t.flush()}catch(e){setTimeout(()=>{throw e})}}),i}const sl=()=>{let i;do i=Fn();while(i)};/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const O=[];function Xt(i,t,e=i.getAttribute("dir")){t?i.setAttribute("dir",t):e!=null&&i.removeAttribute("dir")}function Qt(){return document.documentElement.getAttribute("dir")}function Bn(){const i=Qt();O.forEach(t=>{Xt(t,i)})}const Vn=new MutationObserver(Bn);Vn.observe(document.documentElement,{attributes:!0,attributeFilter:["dir"]});const Ae=i=>class extends i{static get properties(){return{dir:{type:String,value:"",reflectToAttribute:!0,converter:{fromAttribute:e=>e||"",toAttribute:e=>e===""?null:e}}}}get __isRTL(){return this.getAttribute("dir")==="rtl"}connectedCallback(){super.connectedCallback(),(!this.hasAttribute("dir")||this.__restoreSubscription)&&(this.__subscribe(),Xt(this,Qt(),null))}attributeChangedCallback(e,s,o){if(super.attributeChangedCallback(e,s,o),e!=="dir")return;const n=Qt(),r=o===n&&O.indexOf(this)===-1,a=!o&&s&&O.indexOf(this)===-1;r||a?(this.__subscribe(),Xt(this,n,o)):o!==n&&s===n&&this.__unsubscribe()}disconnectedCallback(){super.disconnectedCallback(),this.__restoreSubscription=O.includes(this),this.__unsubscribe()}_valueToNodeAttribute(e,s,o){o==="dir"&&s===""&&!e.hasAttribute("dir")||super._valueToNodeAttribute(e,s,o)}_attributeToProperty(e,s,o){e==="dir"&&!s?this.dir="":super._attributeToProperty(e,s,o)}__subscribe(){O.includes(this)||O.push(this)}__unsubscribe(){O.includes(this)&&O.splice(O.indexOf(this),1)}};/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */window.Vaadin||(window.Vaadin={});window.Vaadin.registrations||(window.Vaadin.registrations=[]);window.Vaadin.developmentModeCallback||(window.Vaadin.developmentModeCallback={});window.Vaadin.developmentModeCallback["vaadin-usage-statistics"]=function(){zn()};let Ft;const ii=new Set,F=i=>class extends Ae(i){static get version(){return"24.0.2"}static finalize(){super.finalize();const{is:e}=this;e&&!ii.has(e)&&(window.Vaadin.registrations.push(this),ii.add(e),window.Vaadin.developmentModeCallback&&(Ft=we.debounce(Ft,Hn,()=>{window.Vaadin.developmentModeCallback["vaadin-usage-statistics"]()}),Rn(Ft)))}constructor(){super(),document.doctype===null&&console.warn('Vaadin components require the "standards mode" declaration. Please add <!DOCTYPE html> to the HTML document.')}};/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/function J(i,t,e){return{index:i,removed:t,addedCount:e}}const lo=0,co=1,te=2,ee=3;function $n(i,t,e,s,o,n){let r=n-o+1,a=e-t+1,l=new Array(r);for(let d=0;d<r;d++)l[d]=new Array(a),l[d][0]=d;for(let d=0;d<a;d++)l[0][d]=d;for(let d=1;d<r;d++)for(let c=1;c<a;c++)if(xe(i[t+c-1],s[o+d-1]))l[d][c]=l[d-1][c-1];else{let h=l[d-1][c]+1,u=l[d][c-1]+1;l[d][c]=h<u?h:u}return l}function Un(i){let t=i.length-1,e=i[0].length-1,s=i[t][e],o=[];for(;t>0||e>0;){if(t==0){o.push(te),e--;continue}if(e==0){o.push(ee),t--;continue}let n=i[t-1][e-1],r=i[t-1][e],a=i[t][e-1],l;r<a?l=r<n?r:n:l=a<n?a:n,l==n?(n==s?o.push(lo):(o.push(co),s=n),t--,e--):l==r?(o.push(ee),t--,s=r):(o.push(te),e--,s=a)}return o.reverse(),o}function qn(i,t,e,s,o,n){let r=0,a=0,l,d=Math.min(e-t,n-o);if(t==0&&o==0&&(r=jn(i,s,d)),e==i.length&&n==s.length&&(a=Yn(i,s,d-r)),t+=r,o+=r,e-=a,n-=a,e-t==0&&n-o==0)return[];if(t==e){for(l=J(t,[],0);o<n;)l.removed.push(s[o++]);return[l]}else if(o==n)return[J(t,[],e-t)];let c=Un($n(i,t,e,s,o,n));l=void 0;let h=[],u=t,p=o;for(let m=0;m<c.length;m++)switch(c[m]){case lo:l&&(h.push(l),l=void 0),u++,p++;break;case co:l||(l=J(u,[],0)),l.addedCount++,u++,l.removed.push(s[p]),p++;break;case te:l||(l=J(u,[],0)),l.addedCount++,u++;break;case ee:l||(l=J(u,[],0)),l.removed.push(s[p]),p++;break}return l&&h.push(l),h}function jn(i,t,e){for(let s=0;s<e;s++)if(!xe(i[s],t[s]))return s;return e}function Yn(i,t,e){let s=i.length,o=t.length,n=0;for(;n<e&&xe(i[--s],t[--o]);)n++;return n}function Gn(i,t){return qn(i,0,i.length,t,0,t.length)}function xe(i,t){return i===t}/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/function V(i){return i.localName==="slot"}let Wn=class{static getFlattenedNodes(i){const t=_(i);return V(i)?(i=i,t.assignedNodes({flatten:!0})):Array.from(t.childNodes).map(e=>V(e)?(e=e,_(e).assignedNodes({flatten:!0})):[e]).reduce((e,s)=>e.concat(s),[])}constructor(i,t){this._shadyChildrenObserver=null,this._nativeChildrenObserver=null,this._connected=!1,this._target=i,this.callback=t,this._effectiveNodes=[],this._observer=null,this._scheduled=!1,this._boundSchedule=()=>{this._schedule()},this.connect(),this._schedule()}connect(){V(this._target)?this._listenSlots([this._target]):_(this._target).children&&(this._listenSlots(_(this._target).children),window.ShadyDOM?this._shadyChildrenObserver=window.ShadyDOM.observeChildren(this._target,i=>{this._processMutations(i)}):(this._nativeChildrenObserver=new MutationObserver(i=>{this._processMutations(i)}),this._nativeChildrenObserver.observe(this._target,{childList:!0}))),this._connected=!0}disconnect(){V(this._target)?this._unlistenSlots([this._target]):_(this._target).children&&(this._unlistenSlots(_(this._target).children),window.ShadyDOM&&this._shadyChildrenObserver?(window.ShadyDOM.unobserveChildren(this._shadyChildrenObserver),this._shadyChildrenObserver=null):this._nativeChildrenObserver&&(this._nativeChildrenObserver.disconnect(),this._nativeChildrenObserver=null)),this._connected=!1}_schedule(){this._scheduled||(this._scheduled=!0,ye.run(()=>this.flush()))}_processMutations(i){this._processSlotMutations(i),this.flush()}_processSlotMutations(i){if(i)for(let t=0;t<i.length;t++){let e=i[t];e.addedNodes&&this._listenSlots(e.addedNodes),e.removedNodes&&this._unlistenSlots(e.removedNodes)}}flush(){if(!this._connected)return!1;window.ShadyDOM&&ShadyDOM.flush(),this._nativeChildrenObserver?this._processSlotMutations(this._nativeChildrenObserver.takeRecords()):this._shadyChildrenObserver&&this._processSlotMutations(this._shadyChildrenObserver.takeRecords()),this._scheduled=!1;let i={target:this._target,addedNodes:[],removedNodes:[]},t=this.constructor.getFlattenedNodes(this._target),e=Gn(t,this._effectiveNodes);for(let o=0,n;o<e.length&&(n=e[o]);o++)for(let r=0,a;r<n.removed.length&&(a=n.removed[r]);r++)i.removedNodes.push(a);for(let o=0,n;o<e.length&&(n=e[o]);o++)for(let r=n.index;r<n.index+n.addedCount;r++)i.addedNodes.push(t[r]);this._effectiveNodes=t;let s=!1;return(i.addedNodes.length||i.removedNodes.length)&&(s=!0,this.callback.call(this._target,i)),s}_listenSlots(i){for(let t=0;t<i.length;t++){let e=i[t];V(e)&&e.addEventListener("slotchange",this._boundSchedule)}}_unlistenSlots(i){for(let t=0;t<i.length;t++){let e=i[t];V(e)&&e.removeEventListener("slotchange",this._boundSchedule)}}};/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */function Kn(i){const t=[];for(;i;){if(i.nodeType===Node.DOCUMENT_NODE){t.push(i);break}if(i.nodeType===Node.DOCUMENT_FRAGMENT_NODE){t.push(i),i=i.host;continue}if(i.assignedSlot){i=i.assignedSlot;continue}i=i.parentNode}return t}function ho(i){return i?new Set(i.split(" ")):new Set}function uo(i){return[...i].join(" ")}function po(i,t,e){const s=ho(i.getAttribute(t));s.add(e),i.setAttribute(t,uo(s))}function fo(i,t,e){const s=ho(i.getAttribute(t));if(s.delete(e),s.size===0){i.removeAttribute(t);return}i.setAttribute(t,uo(s))}function Jn(i){return i.nodeType===Node.TEXT_NODE&&i.textContent.trim()===""}/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */let Zn=0;function _o(){return Zn++}/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class Mt extends EventTarget{static generateId(t,e){return`${e||"default"}-${t.localName}-${_o()}`}constructor(t,e,s,o={}){super();const{initializer:n,multiple:r,observe:a,useUniqueId:l}=o;this.host=t,this.slotName=e,this.tagName=s,this.observe=typeof a=="boolean"?a:!0,this.multiple=typeof r=="boolean"?r:!1,this.slotInitializer=n,r&&(this.nodes=[]),l&&(this.defaultId=this.constructor.generateId(t,e))}hostConnected(){this.initialized||(this.multiple?this.initMultiple():this.initSingle(),this.observe&&this.observeSlot(),this.initialized=!0)}initSingle(){let t=this.getSlotChild();t?(this.node=t,this.initAddedNode(t)):(t=this.attachDefaultNode(),this.initNode(t))}initMultiple(){const t=this.getSlotChildren();if(t.length===0){const e=this.attachDefaultNode();this.nodes=[e],this.initNode(e)}else this.nodes=t,t.forEach(e=>{this.initAddedNode(e)})}attachDefaultNode(){const{host:t,slotName:e,tagName:s}=this;let o=this.defaultNode;return!o&&s&&(o=document.createElement(s),o instanceof Element&&(e!==""&&o.setAttribute("slot",e),this.node=o,this.defaultNode=o)),o&&t.appendChild(o),o}getSlotChildren(){const{slotName:t}=this;return Array.from(this.host.childNodes).filter(e=>e.nodeType===Node.ELEMENT_NODE&&e.slot===t||e.nodeType===Node.TEXT_NODE&&e.textContent.trim()&&t==="")}getSlotChild(){return this.getSlotChildren()[0]}initNode(t){const{slotInitializer:e}=this;e&&e(t,this.host)}initCustomNode(t){}teardownNode(t){}initAddedNode(t){t!==this.defaultNode&&(this.initCustomNode(t),this.initNode(t))}observeSlot(){const{slotName:t}=this,e=t===""?"slot:not([name])":`slot[name=${t}]`,s=this.host.shadowRoot.querySelector(e);this.__slotObserver=new Wn(s,o=>{const n=this.multiple?this.nodes:[this.node],r=o.addedNodes.filter(a=>!Jn(a)&&!n.includes(a));o.removedNodes.length&&o.removedNodes.forEach(a=>{this.teardownNode(a)}),r&&r.length>0&&(n.forEach(a=>{a&&a.isConnected&&a.parentNode.removeChild(a)}),this.multiple?(this.nodes=r,r.forEach(a=>{this.initAddedNode(a)})):(this.node=r[0],this.initAddedNode(this.node)))})}}/**
 * @license
 * Copyright (c) 2022 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class mo extends Mt{constructor(t){super(t,"tooltip"),this.setTarget(t)}initCustomNode(t){t.target=this.target,this.context!==void 0&&(t.context=this.context),this.manual!==void 0&&(t.manual=this.manual),this.opened!==void 0&&(t.opened=this.opened),this.position!==void 0&&(t._position=this.position),this.shouldShow!==void 0&&(t.shouldShow=this.shouldShow)}setContext(t){this.context=t;const e=this.node;e&&(e.context=t)}setManual(t){this.manual=t;const e=this.node;e&&(e.manual=t)}setOpened(t){this.opened=t;const e=this.node;e&&(e.opened=t)}setPosition(t){this.position=t;const e=this.node;e&&(e._position=t)}setShouldShow(t){this.shouldShow=t;const e=this.node;e&&(e.shouldShow=t)}setTarget(t){this.target=t;const e=this.node;e&&(e.target=t)}}/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Xn=g`
  :host {
    display: inline-block;
    position: relative;
    outline: none;
    white-space: nowrap;
    -webkit-user-select: none;
    -moz-user-select: none;
    user-select: none;
  }

  :host([hidden]) {
    display: none !important;
  }

  /* Aligns the button with form fields when placed on the same line.
  Note, to make it work, the form fields should have the same "::before" pseudo-element. */
  .vaadin-button-container::before {
    content: '\\2003';
    display: inline-block;
    width: 0;
    max-height: 100%;
  }

  .vaadin-button-container {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    width: 100%;
    height: 100%;
    min-height: inherit;
    text-shadow: inherit;
  }

  [part='prefix'],
  [part='suffix'] {
    flex: none;
  }

  [part='label'] {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`,Qn=i=>i`
  <div class="vaadin-button-container">
    <span part="prefix" aria-hidden="true">
      <slot name="prefix"></slot>
    </span>
    <span part="label">
      <slot></slot>
    </span>
    <span part="suffix" aria-hidden="true">
      <slot name="suffix"></slot>
    </span>
  </div>
  <slot name="tooltip"></slot>
`;/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const go=v(i=>class extends i{static get properties(){return{disabled:{type:Boolean,value:!1,observer:"_disabledChanged",reflectToAttribute:!0}}}_disabledChanged(e){this._setAriaDisabled(e)}_setAriaDisabled(e){e?this.setAttribute("aria-disabled","true"):this.removeAttribute("aria-disabled")}click(){this.disabled||super.click()}});/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const tr=!1,er=i=>i,Ee=typeof document.head.style.touchAction=="string",Et="__polymerGestures",Bt="__polymerGesturesHandled",ie="__polymerGesturesTouchAction",oi=25,si=5,ir=2,or=["mousedown","mousemove","mouseup","click"],sr=[0,1,4,2],nr=function(){try{return new MouseEvent("test",{buttons:1}).buttons===1}catch{return!1}}();function Pe(i){return or.indexOf(i)>-1}let vo=!1;(function(){try{const i=Object.defineProperty({},"passive",{get(){vo=!0}});window.addEventListener("test",null,i),window.removeEventListener("test",null,i)}catch{}})();function yo(i){if(!(Pe(i)||i==="touchend")&&Ee&&vo&&tr)return{passive:!0}}const rr=navigator.userAgent.match(/iP(?:[oa]d|hone)|Android/u),ar={button:!0,command:!0,fieldset:!0,input:!0,keygen:!0,optgroup:!0,option:!0,select:!0,textarea:!0};function H(i){const t=i.type;if(!Pe(t))return!1;if(t==="mousemove"){let s=i.buttons===void 0?1:i.buttons;return i instanceof window.MouseEvent&&!nr&&(s=sr[i.which]||0),Boolean(s&1)}return(i.button===void 0?0:i.button)===0}function lr(i){if(i.type==="click"){if(i.detail===0)return!0;const t=k(i);if(!t.nodeType||t.nodeType!==Node.ELEMENT_NODE)return!0;const e=t.getBoundingClientRect(),s=i.pageX,o=i.pageY;return!(s>=e.left&&s<=e.right&&o>=e.top&&o<=e.bottom)}return!1}const S={mouse:{target:null,mouseIgnoreJob:null},touch:{x:0,y:0,id:-1,scrollDecided:!1}};function dr(i){let t="auto";const e=Co(i);for(let s=0,o;s<e.length;s++)if(o=e[s],o[ie]){t=o[ie];break}return t}function bo(i,t,e){i.movefn=t,i.upfn=e,document.addEventListener("mousemove",t),document.addEventListener("mouseup",e)}function q(i){document.removeEventListener("mousemove",i.movefn),document.removeEventListener("mouseup",i.upfn),i.movefn=null,i.upfn=null}const Co=window.ShadyDOM&&window.ShadyDOM.noPatch?window.ShadyDOM.composedPath:i=>i.composedPath&&i.composedPath()||[],ft={},D=[];function cr(i,t){let e=document.elementFromPoint(i,t),s=e;for(;s&&s.shadowRoot&&!window.ShadyDOM;){const o=s;if(s=s.shadowRoot.elementFromPoint(i,t),o===s)break;s&&(e=s)}return e}function k(i){const t=Co(i);return t.length>0?t[0]:i.target}function wo(i){const t=i.type,s=i.currentTarget[Et];if(!s)return;const o=s[t];if(!o)return;if(!i[Bt]&&(i[Bt]={},t.startsWith("touch"))){const r=i.changedTouches[0];if(t==="touchstart"&&i.touches.length===1&&(S.touch.id=r.identifier),S.touch.id!==r.identifier)return;Ee||(t==="touchstart"||t==="touchmove")&&hr(i)}const n=i[Bt];if(!n.skip){for(let r=0,a;r<D.length;r++)a=D[r],o[a.name]&&!n[a.name]&&a.flow&&a.flow.start.indexOf(i.type)>-1&&a.reset&&a.reset();for(let r=0,a;r<D.length;r++)a=D[r],o[a.name]&&!n[a.name]&&(n[a.name]=!0,a[t](i))}}function hr(i){const t=i.changedTouches[0],e=i.type;if(e==="touchstart")S.touch.x=t.clientX,S.touch.y=t.clientY,S.touch.scrollDecided=!1;else if(e==="touchmove"){if(S.touch.scrollDecided)return;S.touch.scrollDecided=!0;const s=dr(i);let o=!1;const n=Math.abs(S.touch.x-t.clientX),r=Math.abs(S.touch.y-t.clientY);i.cancelable&&(s==="none"?o=!0:s==="pan-x"?o=r>n:s==="pan-y"&&(o=n>r)),o?i.preventDefault():Pt("track")}}function ni(i,t,e){return ft[t]?(ur(i,t,e),!0):!1}function ll(i,t,e){return ft[t]?(pr(i,t,e),!0):!1}function ur(i,t,e){const s=ft[t],o=s.deps,n=s.name;let r=i[Et];r||(i[Et]=r={});for(let a=0,l,d;a<o.length;a++)l=o[a],!(rr&&Pe(l)&&l!=="click")&&(d=r[l],d||(r[l]=d={_count:0}),d._count===0&&i.addEventListener(l,wo,yo(l)),d[n]=(d[n]||0)+1,d._count=(d._count||0)+1);i.addEventListener(t,e),s.touchAction&&_r(i,s.touchAction)}function pr(i,t,e){const s=ft[t],o=s.deps,n=s.name,r=i[Et];if(r)for(let a=0,l,d;a<o.length;a++)l=o[a],d=r[l],d&&d[n]&&(d[n]=(d[n]||1)-1,d._count=(d._count||1)-1,d._count===0&&i.removeEventListener(l,wo,yo(l)));i.removeEventListener(t,e)}function Te(i){D.push(i),i.emits.forEach(t=>{ft[t]=i})}function fr(i){for(let t=0,e;t<D.length;t++){e=D[t];for(let s=0,o;s<e.emits.length;s++)if(o=e.emits[s],o===i)return e}return null}function _r(i,t){Ee&&i instanceof HTMLElement&&ao.run(()=>{i.style.touchAction=t}),i[ie]=t}function Ne(i,t,e){const s=new Event(t,{bubbles:!0,cancelable:!0,composed:!0});if(s.detail=e,er(i).dispatchEvent(s),s.defaultPrevented){const o=e.preventer||e.sourceEvent;o&&o.preventDefault&&o.preventDefault()}}function Pt(i){const t=fr(i);t.info&&(t.info.prevent=!0)}Te({name:"downup",deps:["mousedown","touchstart","touchend"],flow:{start:["mousedown","touchstart"],end:["mouseup","touchend"]},emits:["down","up"],info:{movefn:null,upfn:null},reset(){q(this.info)},mousedown(i){if(!H(i))return;const t=k(i),e=this,s=n=>{H(n)||(Z("up",t,n),q(e.info))},o=n=>{H(n)&&Z("up",t,n),q(e.info)};bo(this.info,s,o),Z("down",t,i)},touchstart(i){Z("down",k(i),i.changedTouches[0],i)},touchend(i){Z("up",k(i),i.changedTouches[0],i)}});function Z(i,t,e,s){t&&Ne(t,i,{x:e.clientX,y:e.clientY,sourceEvent:e,preventer:s,prevent(o){return Pt(o)}})}Te({name:"track",touchAction:"none",deps:["mousedown","touchstart","touchmove","touchend"],flow:{start:["mousedown","touchstart"],end:["mouseup","touchend"]},emits:["track"],info:{x:0,y:0,state:"start",started:!1,moves:[],addMove(i){this.moves.length>ir&&this.moves.shift(),this.moves.push(i)},movefn:null,upfn:null,prevent:!1},reset(){this.info.state="start",this.info.started=!1,this.info.moves=[],this.info.x=0,this.info.y=0,this.info.prevent=!1,q(this.info)},mousedown(i){if(!H(i))return;const t=k(i),e=this,s=n=>{const r=n.clientX,a=n.clientY;ri(e.info,r,a)&&(e.info.state=e.info.started?n.type==="mouseup"?"end":"track":"start",e.info.state==="start"&&Pt("tap"),e.info.addMove({x:r,y:a}),H(n)||(e.info.state="end",q(e.info)),t&&Vt(e.info,t,n),e.info.started=!0)},o=n=>{e.info.started&&s(n),q(e.info)};bo(this.info,s,o),this.info.x=i.clientX,this.info.y=i.clientY},touchstart(i){const t=i.changedTouches[0];this.info.x=t.clientX,this.info.y=t.clientY},touchmove(i){const t=k(i),e=i.changedTouches[0],s=e.clientX,o=e.clientY;ri(this.info,s,o)&&(this.info.state==="start"&&Pt("tap"),this.info.addMove({x:s,y:o}),Vt(this.info,t,e),this.info.state="track",this.info.started=!0)},touchend(i){const t=k(i),e=i.changedTouches[0];this.info.started&&(this.info.state="end",this.info.addMove({x:e.clientX,y:e.clientY}),Vt(this.info,t,e))}});function ri(i,t,e){if(i.prevent)return!1;if(i.started)return!0;const s=Math.abs(i.x-t),o=Math.abs(i.y-e);return s>=si||o>=si}function Vt(i,t,e){if(!t)return;const s=i.moves[i.moves.length-2],o=i.moves[i.moves.length-1],n=o.x-i.x,r=o.y-i.y;let a,l=0;s&&(a=o.x-s.x,l=o.y-s.y),Ne(t,"track",{state:i.state,x:e.clientX,y:e.clientY,dx:n,dy:r,ddx:a,ddy:l,sourceEvent:e,hover(){return cr(e.clientX,e.clientY)}})}Te({name:"tap",deps:["mousedown","click","touchstart","touchend"],flow:{start:["mousedown","touchstart"],end:["click","touchend"]},emits:["tap"],info:{x:NaN,y:NaN,prevent:!1},reset(){this.info.x=NaN,this.info.y=NaN,this.info.prevent=!1},mousedown(i){H(i)&&(this.info.x=i.clientX,this.info.y=i.clientY)},click(i){H(i)&&ai(this.info,i)},touchstart(i){const t=i.changedTouches[0];this.info.x=t.clientX,this.info.y=t.clientY},touchend(i){ai(this.info,i.changedTouches[0],i)}});function ai(i,t,e){const s=Math.abs(t.clientX-i.x),o=Math.abs(t.clientY-i.y),n=k(e||t);!n||ar[n.localName]&&n.hasAttribute("disabled")||(isNaN(s)||isNaN(o)||s<=oi&&o<=oi||lr(t))&&(i.prevent||Ne(n,"tap",{x:t.clientX,y:t.clientY,sourceEvent:t,preventer:e}))}/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Oe=v(i=>class extends i{ready(){super.ready(),this.addEventListener("keydown",e=>{this._onKeyDown(e)}),this.addEventListener("keyup",e=>{this._onKeyUp(e)})}_onKeyDown(e){switch(e.key){case"Enter":this._onEnter(e);break;case"Escape":this._onEscape(e);break}}_onKeyUp(e){}_onEnter(e){}_onEscape(e){}});/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const mr=i=>class extends go(Oe(i)){get _activeKeys(){return[" "]}ready(){super.ready(),ni(this,"down",e=>{this._shouldSetActive(e)&&this._setActive(!0)}),ni(this,"up",()=>{this._setActive(!1)})}disconnectedCallback(){super.disconnectedCallback(),this._setActive(!1)}_shouldSetActive(e){return!this.disabled}_onKeyDown(e){super._onKeyDown(e),this._shouldSetActive(e)&&this._activeKeys.includes(e.key)&&(this._setActive(!0),document.addEventListener("keyup",s=>{this._activeKeys.includes(s.key)&&this._setActive(!1)},{once:!0}))}_setActive(e){this.toggleAttribute("active",e)}};/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */let Se=!1;window.addEventListener("keydown",()=>{Se=!0},{capture:!0});window.addEventListener("mousedown",()=>{Se=!1},{capture:!0});function Ao(){return Se}function xo(i){const t=i.style;if(t.visibility==="hidden"||t.display==="none")return!0;const e=window.getComputedStyle(i);return e.visibility==="hidden"||e.display==="none"}function gr(i,t){const e=Math.max(i.tabIndex,0),s=Math.max(t.tabIndex,0);return e===0||s===0?s>e:e>s}function vr(i,t){const e=[];for(;i.length>0&&t.length>0;)gr(i[0],t[0])?e.push(t.shift()):e.push(i.shift());return e.concat(i,t)}function oe(i){const t=i.length;if(t<2)return i;const e=Math.ceil(t/2),s=oe(i.slice(0,e)),o=oe(i.slice(e));return vr(s,o)}function hl(i){return i.offsetParent===null?!0:xo(i)}function yr(i){return i.matches('[tabindex="-1"]')?!1:i.matches("input, select, textarea, button, object")?i.matches(":not([disabled])"):i.matches("a[href], area[href], iframe, [tabindex], [contentEditable]")}function br(i){return i.getRootNode().activeElement===i}function Cr(i){if(!yr(i))return-1;const t=i.getAttribute("tabindex")||0;return Number(t)}function Eo(i,t){if(i.nodeType!==Node.ELEMENT_NODE||xo(i))return!1;const e=i,s=Cr(e);let o=s>0;s>=0&&t.push(e);let n=[];return e.localName==="slot"?n=e.assignedNodes({flatten:!0}):n=(e.shadowRoot||e).children,[...n].forEach(r=>{o=Eo(r,t)||o}),o}function wr(i){const t=[];return Eo(i,t)?oe(t):t}/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Po=v(i=>class extends i{get _keyboardActive(){return Ao()}ready(){this.addEventListener("focusin",e=>{this._shouldSetFocus(e)&&this._setFocused(!0)}),this.addEventListener("focusout",e=>{this._shouldRemoveFocus(e)&&this._setFocused(!1)}),super.ready()}disconnectedCallback(){super.disconnectedCallback(),this.hasAttribute("focused")&&this._setFocused(!1)}_setFocused(e){this.toggleAttribute("focused",e),this.toggleAttribute("focus-ring",e&&this._keyboardActive)}_shouldSetFocus(e){return!0}_shouldRemoveFocus(e){return!0}});/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const To=i=>class extends go(i){static get properties(){return{tabindex:{type:Number,reflectToAttribute:!0,observer:"_tabindexChanged"},_lastTabIndex:{type:Number}}}_disabledChanged(e,s){super._disabledChanged(e,s),e?(this.tabindex!==void 0&&(this._lastTabIndex=this.tabindex),this.tabindex=-1):s&&(this.tabindex=this._lastTabIndex)}_tabindexChanged(e){this.disabled&&e!==-1&&(this._lastTabIndex=e,this.tabindex=-1)}};/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Ar=i=>class extends mr(To(Po(i))){static get properties(){return{tabindex:{type:Number,value:0,reflectToAttribute:!0}}}get _activeKeys(){return["Enter"," "]}ready(){super.ready(),this.hasAttribute("role")||this.setAttribute("role","button")}_onKeyDown(e){super._onKeyDown(e),this._activeKeys.includes(e.key)&&(e.preventDefault(),this.click())}};/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */y("vaadin-button",Xn,{moduleId:"vaadin-button-styles"});class se extends Ar(F(R(It(E)))){static get is(){return"vaadin-button"}static get template(){return Qn(x)}ready(){super.ready(),this._tooltipController=new mo(this),this.addController(this._tooltipController)}}customElements.define(se.is,se);y("vaadin-input-container",g`
    :host {
      background-color: var(--lumo-contrast-10pct);
      padding: 0 calc(0.375em + var(--_input-container-radius) / 4 - 1px);
      font-weight: 500;
      line-height: 1;
      position: relative;
      cursor: text;
      box-sizing: border-box;
      border-radius:
        /* See https://developer.mozilla.org/en-US/docs/Web/CSS/border-radius#syntax */
        var(--vaadin-input-field-top-start-radius, var(--_input-container-radius))
        var(--vaadin-input-field-top-end-radius, var(--_input-container-radius))
        var(--vaadin-input-field-bottom-end-radius, var(--_input-container-radius))
        var(--vaadin-input-field-bottom-start-radius, var(--_input-container-radius));
      /* Fallback */
      --_input-container-radius: var(--vaadin-input-field-border-radius, var(--lumo-border-radius-m));
    }

    :host([dir='rtl']) {
      border-radius:
        /* Don't use logical props, see https://github.com/vaadin/vaadin-time-picker/issues/145 */
        var(--vaadin-input-field-top-end-radius, var(--_input-container-radius))
        var(--vaadin-input-field-top-start-radius, var(--_input-container-radius))
        var(--vaadin-input-field-bottom-start-radius, var(--_input-container-radius))
        var(--vaadin-input-field-bottom-end-radius, var(--_input-container-radius));
    }

    /* Used for hover and activation effects */
    :host::after {
      content: '';
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      border-radius: inherit;
      pointer-events: none;
      background-color: var(--lumo-contrast-50pct);
      opacity: 0;
      transition: transform 0.15s, opacity 0.2s;
      transform-origin: 100% 0;
    }

    ::slotted(:not([slot$='fix'])) {
      cursor: inherit;
      min-height: var(--lumo-text-field-size, var(--lumo-size-m));
      padding: 0 0.25em;
      --_lumo-text-field-overflow-mask-image: linear-gradient(to left, transparent, #000 1.25em);
      -webkit-mask-image: var(--_lumo-text-field-overflow-mask-image);
      mask-image: var(--_lumo-text-field-overflow-mask-image);
    }

    /* Read-only */
    :host([readonly]) {
      color: var(--lumo-secondary-text-color);
      background-color: transparent;
      cursor: default;
    }

    :host([readonly])::after {
      background-color: transparent;
      opacity: 1;
      border: 1px dashed var(--lumo-contrast-30pct);
    }

    /* Disabled */
    :host([disabled]) {
      background-color: var(--lumo-contrast-5pct);
    }

    :host([disabled]) ::slotted(*) {
      color: var(--lumo-disabled-text-color);
      -webkit-text-fill-color: var(--lumo-disabled-text-color);
    }

    /* Invalid */
    :host([invalid]) {
      background-color: var(--lumo-error-color-10pct);
    }

    :host([invalid])::after {
      background-color: var(--lumo-error-color-50pct);
    }

    /* Slotted icons */
    ::slotted(vaadin-icon) {
      color: var(--lumo-contrast-60pct);
      width: var(--lumo-icon-size-m);
      height: var(--lumo-icon-size-m);
    }

    /* Vaadin icons are based on a 16x16 grid (unlike Lumo and Material icons with 24x24), so they look too big by default */
    ::slotted(vaadin-icon[icon^='vaadin:']) {
      padding: 0.25em;
      box-sizing: border-box !important;
    }

    /* Text align */
    :host([dir='rtl']) ::slotted(:not([slot$='fix'])) {
      --_lumo-text-field-overflow-mask-image: linear-gradient(to right, transparent, #000 1.25em);
    }

    @-moz-document url-prefix() {
      :host([dir='rtl']) ::slotted(:not([slot$='fix'])) {
        mask-image: var(--_lumo-text-field-overflow-mask-image);
      }
    }

    :host([theme~='align-left']) ::slotted(:not([slot$='fix'])) {
      text-align: start;
      --_lumo-text-field-overflow-mask-image: none;
    }

    :host([theme~='align-center']) ::slotted(:not([slot$='fix'])) {
      text-align: center;
      --_lumo-text-field-overflow-mask-image: none;
    }

    :host([theme~='align-right']) ::slotted(:not([slot$='fix'])) {
      text-align: end;
      --_lumo-text-field-overflow-mask-image: none;
    }

    @-moz-document url-prefix() {
      /* Firefox is smart enough to align overflowing text to right */
      :host([theme~='align-right']) ::slotted(:not([slot$='fix'])) {
        --_lumo-text-field-overflow-mask-image: linear-gradient(to right, transparent 0.25em, #000 1.5em);
      }
    }

    @-moz-document url-prefix() {
      /* Firefox is smart enough to align overflowing text to right */
      :host([theme~='align-left']) ::slotted(:not([slot$='fix'])) {
        --_lumo-text-field-overflow-mask-image: linear-gradient(to left, transparent 0.25em, #000 1.5em);
      }
    }

    /* RTL specific styles */
    :host([dir='rtl'])::after {
      transform-origin: 0% 0;
    }

    :host([theme~='align-left'][dir='rtl']) ::slotted(:not([slot$='fix'])) {
      --_lumo-text-field-overflow-mask-image: none;
    }

    :host([theme~='align-center'][dir='rtl']) ::slotted(:not([slot$='fix'])) {
      --_lumo-text-field-overflow-mask-image: none;
    }

    :host([theme~='align-right'][dir='rtl']) ::slotted(:not([slot$='fix'])) {
      --_lumo-text-field-overflow-mask-image: none;
    }

    @-moz-document url-prefix() {
      /* Firefox is smart enough to align overflowing text to right */
      :host([theme~='align-right'][dir='rtl']) ::slotted(:not([slot$='fix'])) {
        --_lumo-text-field-overflow-mask-image: linear-gradient(to right, transparent 0.25em, #000 1.5em);
      }
    }

    @-moz-document url-prefix() {
      /* Firefox is smart enough to align overflowing text to right */
      :host([theme~='align-left'][dir='rtl']) ::slotted(:not([slot$='fix'])) {
        --_lumo-text-field-overflow-mask-image: linear-gradient(to left, transparent 0.25em, #000 1.5em);
      }
    }
  `,{moduleId:"lumo-input-container"});/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class li extends R(Ae(E)){static get is(){return"vaadin-input-container"}static get template(){return x`
      <style>
        :host {
          display: flex;
          align-items: center;
          flex: 0 1 auto;
          border-radius:
            /* See https://developer.mozilla.org/en-US/docs/Web/CSS/border-radius */
            var(--vaadin-input-field-top-start-radius, var(--__border-radius))
            var(--vaadin-input-field-top-end-radius, var(--__border-radius))
            var(--vaadin-input-field-bottom-end-radius, var(--__border-radius))
            var(--vaadin-input-field-bottom-start-radius, var(--__border-radius));
          --_border-radius: var(--vaadin-input-field-border-radius, 0px);
        }

        :host([dir='rtl']) {
          border-radius:
            /* Don't use logical props, see https://github.com/vaadin/vaadin-time-picker/issues/145 */
            var(--vaadin-input-field-top-end-radius, var(--_border-radius))
            var(--vaadin-input-field-top-start-radius, var(--_border-radius))
            var(--vaadin-input-field-bottom-start-radius, var(--_border-radius))
            var(--vaadin-input-field-bottom-end-radius, var(--_border-radius));
        }

        :host([hidden]) {
          display: none !important;
        }

        /* Reset the native input styles */
        ::slotted(input) {
          -webkit-appearance: none;
          -moz-appearance: none;
          flex: auto;
          white-space: nowrap;
          overflow: hidden;
          width: 100%;
          height: 100%;
          outline: none;
          margin: 0;
          padding: 0;
          border: 0;
          border-radius: 0;
          min-width: 0;
          font: inherit;
          line-height: normal;
          color: inherit;
          background-color: transparent;
          /* Disable default invalid style in Firefox */
          box-shadow: none;
        }

        ::slotted(*) {
          flex: none;
        }

        ::slotted(:is(input, textarea))::placeholder {
          /* Use ::slotted(input:placeholder-shown) in themes to style the placeholder. */
          /* because ::slotted(...)::placeholder does not work in Safari. */
          font: inherit;
          color: inherit;
          /* Override default opacity in Firefox */
          opacity: 1;
        }
      </style>
      <slot name="prefix"></slot>
      <slot></slot>
      <slot name="suffix"></slot>
    `}static get properties(){return{disabled:{type:Boolean,reflectToAttribute:!0},readonly:{type:Boolean,reflectToAttribute:!0},invalid:{type:Boolean,reflectToAttribute:!0}}}ready(){super.ready(),this.addEventListener("pointerdown",t=>{t.target===this&&t.preventDefault()}),this.addEventListener("click",t=>{t.target===this&&this.shadowRoot.querySelector("slot:not([name])").assignedNodes({flatten:!0}).forEach(e=>e.focus&&e.focus())})}}customElements.define(li.is,li);/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const No=document.createElement("template");No.innerHTML=`
  <style>
    @font-face {
      font-family: 'lumo-icons';
      src: url(data:application/font-woff;charset=utf-8;base64,d09GRgABAAAAABEgAAsAAAAAIjQAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABHU1VCAAABCAAAADsAAABUIIslek9TLzIAAAFEAAAAQwAAAFZAIUuKY21hcAAAAYgAAAD4AAADrsCU8d5nbHlmAAACgAAAC2cAABeAWri7U2hlYWQAAA3oAAAAMAAAADZa/6SsaGhlYQAADhgAAAAdAAAAJAbpA35obXR4AAAOOAAAABAAAACspBAAAGxvY2EAAA5IAAAAWAAAAFh57oA4bWF4cAAADqAAAAAfAAAAIAFKAXBuYW1lAAAOwAAAATEAAAIuUUJZCHBvc3QAAA/0AAABKwAAAelm8SzVeJxjYGRgYOBiMGCwY2BycfMJYeDLSSzJY5BiYGGAAJA8MpsxJzM9kYEDxgPKsYBpDiBmg4gCACY7BUgAeJxjYGS+yDiBgZWBgamKaQ8DA0MPhGZ8wGDIyAQUZWBlZsAKAtJcUxgcXjG+0mIO+p/FEMUcxDANKMwIkgMABn8MLQB4nO3SWW6DMABF0UtwCEnIPM/zhLK8LqhfXRybSP14XUYtHV9hGYQwQBNIo3cUIPkhQeM7rib1ekqnXg981XuC1qvy84lzojleh3puxL0hPjGjRU473teloEefAUNGjJkwZcacBUtWrNmwZceeA0dOnLlw5cadB09elPGhGf+j0NTI/65KfXerT6JhqKnpRKtgOpuqaTrtKjPUlqHmhto21I7pL6i6hlqY3q7qGWrfUAeGOjTUkaGODXViqFNDnRnq3FAXhro01JWhrg11Y6hbQ90Z6t5QD4Z6NNSToZ4N9WKoV0O9GerdUB+G+jTUl6GWRvkL24BkEXictVh9bFvVFb/nxvbz+7Rf/N6zHcd2bCfP+Wic1Z9N0jpNHCD9SNqqoVBgbQoMjY+pjA4hNnWa2pV1rHSIif0DGkyT2k10Kmu1Cag6huj4ZpqYBHSqJsTEJgZCG3TaVBFv595nO3ZIv4RIrPPuvefe884599zzO/cRF8G/tgn6CFFImNgkR0ggX8wlspbhSSWSdrC5ozd30s2dw5afzvgtyz9/zG9t1hV4RtF1pXolowvtzc2z6L2aYUQM45jKH9WDTvd1LRDoDASYWhfTzTyvboXz6uZX4ARX5wrF39y+HM2+CJ8d0pkyqBIqoze3D12ez4DrFoYzxI8dWwMrDlZ2DMqQAR9AROsJU+2smlTPaTTco52BVxXa2a2+I8vvqd2dVHm1LoPeTn/AZPRYGthDYOeZjBjKoFsVGulR3lGU95SeCK44oHU7MhWUGUKZDT3oSUcG2GWuh+EDDfUYA/jhIhl0TOsJNYSEu7mQmi3UzfXwZKA4BsVsHLXQYGgJW95qEtpJ1VcW9HiTriZBlFEqxsDjA09yCNUoQxxwd7KWSTt2y3GTKifkqHRCoWZc3m11Wa/dKdFgXD4kSYfkeJBKd8KMz7J8dZn/cGRCcLGDnA2Ge3bKzcvlnTDNthFWLH7Xt80ua5FMjA4WKelWv5Xo16vHuYzpRbJhhdVlftuRK0VlR27D9lu5TF0DPBi60OrHNO0AfP/uRWvhn/U3LXICE+nh+3IHPUJ8JE6GyBjZQLbjGchlrSgYngF8zyrIF4NJD3atUcgWsWunGN/UHX5B5/yg7uF87Nqp4Gf52F3gH73DjEZNRoqCKAr9giQJp5rGJABpiVE2htNhW9R8nw0jqYjCYcY4LIjwYNScf4WN06IZnZCEqsI4cFaQbo4Z1TsZBx40YhXkHOecaYE5oY37IIQ+iJJ+UsDYSun5MuRSBRZRUUhlY2DqOGajOR6zrSU/5My6l2DnusH1GQgnw5BZP7iuYM/ahcfQ7Z8y51ddfutvuwNqWQ0cBYr8fj0U0vsHpwerVaB2sWhXT2NExi2r1KUE2tUuVMnkepVQrxTmpQrZTG4iu8he8iPyM3KcPE/+RP5KPoE2CEAKclCBzXATxkYOtUY/o961PWRqsj0chRrHFBbtrjP9/P0ven5pcbRdpL94vfsy33e5+izuwz3nFLFPVNayPZx/jdG1fOChflFRvYzsW6L18efgLrSWIgvcqnGJYi4skO4xREURjbDuxKke5v0T3Mrzkt2fi31uyZlLLrqIpEuXXsMlgw442Jb0GAxjS1DM20kBoCzHLXm/jEm0IltdcvU0fEW24jgiwwRjVd9u4NJHcIyoHJcwvyVqgqj5hqBJ1ZWSJryh9p56UWhX1XbhRbW2ZopuZWsQd5y8mEQ8M+C6xjRYxZbDKWf5AgY+Qq/l6wSPk16zDFjowYuu+wjx13mfkxbyDDxadYT/LijZyI0THB+6yfLaWsRcO82zo9mWTNtpO18qlorZoIVMwSN40tky5DOQ1MCIAe24mvlsuwIIxPb10+uXDQ4uWz/9m3rj+ql7p6bufZARuPVq5tXtsn6KwfP8Jy0TeWOyNhUJN6mhX5rkUTtUppQWEMNTqEdaCGKFYKJaQrCE4JtDLYOlNEKmO5kBTPGY2A0N2sY3+dVlo1N9ycBsIGtOjQ2p/tlZvzo0ur4v6cOh8NTospB7U/X40KahoU3bGIH97dnwmtHlYffVG3R1YOwKM2vNhrPhCT5zk64sG53oS4b31aYjqe/B7+kQiXBN+b6h21hNUPMq29B8CU4elINdygMPKF1B+WBTG7Z9ZshpN/xwEuuDQZR+nuoo4CDaAiiwXmLpmukMQyPf/JMclqgL1ixZQ/nnP2VbdUODFGt2fgBvL123rlLYu/6A9ckb7F3K0/CyBMEu6aQoPscroCcacVehvyQyCZAsizsWWBkoLC+WAiWnOksLKaeuQDzGuqSk42aiYTiJ4zf9afl17SrqaTO1f+XlZAfIuYcq7/IqYMaMrksOJ6vHkOCPDq943xcCnHqVD9pHFRpMqSPXrIua1WNs+tOz1U+ciTCDpPk+c4QYJIHnYhxP/kVPAq+ahFpVhPcHp8qyarhiF+HsBU9Hrl+UZa876fbKipL0KqB6OdUveErgtOI97fZ63ae9SvWU6k2w1JfwqnUbHsYcFCJFrC/W12zIMMirWYEHxMPs6LGYSdkSZ5TsNP9PCpwnWC3HKZ1lydNjWHC2Mn3l6vL0dHn1ldP3LTSrX+vKrBqv7KmMr8p0SR6P1NqF63or6XRlIyO90f7+kf7+myOhvt4tq7f09oUiTc2/dycGgqFQcCDRLYmi1NL7fk0CknVMxEg/cdfs/TnpJMNkgqwj17B8beVazSrVbU4lG67IZYOCnWrYy3yBR9cyWcChywos3LJBEdhhFoAdYjiw0rLGm0xU5OzoGm5/ZfmHjVZpNNg6SznzGKDdwv2cCtVn6Eaxo12cfxLprpVtTcZ6hVx6dow7Yq7e8LXO8PY9Jgjoze9yCtU5FNbegcKkQMdCbt9au/te4Ebe0jkc0ukUL32eYnTpNs20h0KpUOhZPYwVcfhZnfdqeCvDfXiuCbAoYWcXERPc/mDQD3/hdF+wK4i/xv3kYfprIpAuMkk2kW3kdtS0kBIKpZwp8KxmsCyfM1MFzAss9LBkDxRyThiaqTLwKYKJVTwmWTudMyz+yks09346MDh4m72yOxCKrt1XMlQ1qPVlTEVVQ1ofdK/sCWjtZu9qGwZ8YZ9PPWlo1IV3eW3+U0aXblP39zrt+JPf6UhEQ1rUjNBULN+utyuaDNW34kpAVuSOeMTyWbSNWnooFu+QFNWQ4d/Ox4IPWx41fP/fB/Rjeoz08ezPA9TysMtmnOXfGN7Ui3xIYLDALrlDLOP09qtJuY2OeL0+QZXdRnR1nxRVBF/SOyKKPpcrn9mWzH4rH9IidE+PTNU2182+hOgSItrE1slByS24vaLvJpxOqe4Pduf3HJkZ+jLqUz9rRzB7p8gKcgWZwV1L8JtUS5Z2JxZSOCuBoMTQihMzLbCPA0KqGMAljRQjONklW/wjnXKy8vxT/Elvm3/KiMUMOoV0/vnDYlhec0SMKtt3/kKMyOt33tj2bqxQLsTjSGLl+EAsNhCnTyRGktW55EgCn/A4PlnWn+Mg8bgZrWqHxTbPwMuyy1u5YeZF2SUM7JRhddwRgiRuxpmgJmxn9ZW7XpcF3ViX/ar6ptRpGJ0S9Adg4qhb9sI3vbL7qNJV/y4i07t5TZBiho1imFoMz3gED+CtjYUxvP4SOxov4bFoNPg5aR1e+G4UgDPoedJTpogyCJ7oYvRqoVS0MQAy+CoNEdTDUjok5ZHZL/WtjV7rFj3PKQE3iKp7ou+rIxN3b9LB1dGjeT4cvKo3FrnWpYpuaFd/h3dtV8UeKN1Y9hpR3dt4p0H/zKuPQq0kZQUIIpuDfoiETsnIk+gCWMJZUXHtE8V9LkUc2TE8vOMbO4ax/MACabzyaGXc7u3FBr11ThBdB8SIeMAlCntG2KThHSPsaj2Dc9KNyY2a0KZ7ODaTHoRiFkeYz+shZBpCS4X6471KKKnuHd84edfk5F37d1XO5bbkcltu2ZLNbvnPXiUVAnVvprJrP+NObryjxrllS65md6Tm6wzFHRR4dY3QUUjb7MgxaIixU8hspi98fl/Xc+IB4iU66eCVL9YfAfahiSUt4TONS8x0D8W7u8vd3fGWx6OXlM/U1IoU/s61PGhpyXRFa3eReq2qG56lvmYtXavCC1iN7lbiBpWxXHU+cSlztVLVz0tVN600fVsLxaVDknhYioeoXP3t4lqV1r79MAw0GCI1FTL1YIGzPL1MMlJ9ZsN9P7lvA2yr9ZFUzwzPrVgxN/x/SS+chwB4nGNgZGBgAOLPrYdY4vltvjJwM78AijDUqG5oRND/XzNPZboF5HIwMIFEAU/lC+J4nGNgZGBgDvqfBSRfMAAB81QGRgZUoA0AVvYDbwAAAHicY2BgYGB+MTQwAM8EJo8AAAAAAE4AmgDoAQoBLAFOAXABmgHEAe4CGgKcAugEmgS8BNYE8gUOBSoFegXQBf4GRAZmBrYHGAeQCBgIUghqCP4JRgm+CdoKBAo+CoQKugr0C1QLmgvAeJxjYGRgYNBmTGEQZQABJiDmAkIGhv9gPgMAGJQBvAB4nG2RPU7DMBiG3/QP0UoIBGJh8QILavozdmRo9w7d09RpUzlx5LgVvQMn4BAcgoEzcAgOwVvzSZVQbcnf48fvFysJgGt8IcJxROiG9TgauODuj5ukG+EW+UG4jR4ehTv0Q+EunjER7uEWmk+IWpc0d3gVbuAKb8JN+nfhFvlDuI17fAp36L+Fu1jgR7iHp+jF7Arbz1Nb1nO93pnEncSJFtrVuS3VKB6e5EyX2iVer9TyoOr9eux9pjJnCzW1pdfGWFU5u9WpjzfeV5PBIBMfp7aAwQ4FLPrIkbKWqDHn+67pDRK4s4lzbsEux5qHvcIIMb/nueSMyTKkE3jWFdNLHLjW2PPmMa1Hxn3GjGW/wjT0HtOG09JU4WxLk9LH2ISuiv9twJn9y8fh9uIXI+BknAAAAHicbY7ZboMwEEW5CVBCSLrv+76kfJRjTwHFsdGAG+Xvy5JUfehIHp0rnxmNN/D6ir3/a4YBhvARIMQOIowQY4wEE0yxiz3s4wCHOMIxTnCKM5zjApe4wjVucIs73OMBj3jCM17wije84wMzfHqJ0EVmUkmmJo77oOmrHvfIRZbXsTCZplTZldlgb3TYGVHProwFs11t1A57tcON2rErR3PBqcwF1/6ctI6k0GSU4JHMSS6WghdJQ99sTbfuN7QLJ9vQ37dNrgyktnIxlDYLJNuqitpRbYWKFNuyDT6pog6oOYKHtKakeakqKjHXpPwlGRcsC+OqxLIiJpXqoqqDMreG2l5bv9Ri3TRX+c23DZna9WFFgmXuO6Ps1Jm/w6ErW8N3FbHn/QC444j0AA==) format('woff');
      font-weight: normal;
      font-style: normal;
    }

    html {
      --lumo-icons-align-center: "\\ea01";
      --lumo-icons-align-left: "\\ea02";
      --lumo-icons-align-right: "\\ea03";
      --lumo-icons-angle-down: "\\ea04";
      --lumo-icons-angle-left: "\\ea05";
      --lumo-icons-angle-right: "\\ea06";
      --lumo-icons-angle-up: "\\ea07";
      --lumo-icons-arrow-down: "\\ea08";
      --lumo-icons-arrow-left: "\\ea09";
      --lumo-icons-arrow-right: "\\ea0a";
      --lumo-icons-arrow-up: "\\ea0b";
      --lumo-icons-bar-chart: "\\ea0c";
      --lumo-icons-bell: "\\ea0d";
      --lumo-icons-calendar: "\\ea0e";
      --lumo-icons-checkmark: "\\ea0f";
      --lumo-icons-chevron-down: "\\ea10";
      --lumo-icons-chevron-left: "\\ea11";
      --lumo-icons-chevron-right: "\\ea12";
      --lumo-icons-chevron-up: "\\ea13";
      --lumo-icons-clock: "\\ea14";
      --lumo-icons-cog: "\\ea15";
      --lumo-icons-cross: "\\ea16";
      --lumo-icons-download: "\\ea17";
      --lumo-icons-dropdown: "\\ea18";
      --lumo-icons-edit: "\\ea19";
      --lumo-icons-error: "\\ea1a";
      --lumo-icons-eye: "\\ea1b";
      --lumo-icons-eye-disabled: "\\ea1c";
      --lumo-icons-menu: "\\ea1d";
      --lumo-icons-minus: "\\ea1e";
      --lumo-icons-ordered-list: "\\ea1f";
      --lumo-icons-phone: "\\ea20";
      --lumo-icons-photo: "\\ea21";
      --lumo-icons-play: "\\ea22";
      --lumo-icons-plus: "\\ea23";
      --lumo-icons-redo: "\\ea24";
      --lumo-icons-reload: "\\ea25";
      --lumo-icons-search: "\\ea26";
      --lumo-icons-undo: "\\ea27";
      --lumo-icons-unordered-list: "\\ea28";
      --lumo-icons-upload: "\\ea29";
      --lumo-icons-user: "\\ea2a";
    }
  </style>
`;document.head.appendChild(No.content);/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Oo=g`
  [part$='button'] {
    flex: none;
    width: 1em;
    height: 1em;
    line-height: 1;
    font-size: var(--lumo-icon-size-m);
    text-align: center;
    color: var(--lumo-contrast-60pct);
    transition: 0.2s color;
    cursor: var(--lumo-clickable-cursor);
  }

  [part$='button']:hover {
    color: var(--lumo-contrast-90pct);
  }

  :host([disabled]) [part$='button'],
  :host([readonly]) [part$='button'] {
    color: var(--lumo-contrast-20pct);
    cursor: default;
  }

  [part$='button']::before {
    font-family: 'lumo-icons';
    display: block;
  }
`;y("",Oo,{moduleId:"lumo-field-button"});/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const xr=g`
  :host([has-helper]) [part='helper-text']::before {
    content: '';
    display: block;
    height: 0.4em;
  }

  [part='helper-text'] {
    display: block;
    color: var(--lumo-secondary-text-color);
    font-size: var(--lumo-font-size-xs);
    line-height: var(--lumo-line-height-xs);
    margin-left: calc(var(--lumo-border-radius-m) / 4);
    transition: color 0.2s;
  }

  :host(:hover:not([readonly])) [part='helper-text'] {
    color: var(--lumo-body-text-color);
  }

  :host([disabled]) [part='helper-text'] {
    color: var(--lumo-disabled-text-color);
    -webkit-text-fill-color: var(--lumo-disabled-text-color);
  }

  :host([has-helper][theme~='helper-above-field']) [part='helper-text']::before {
    display: none;
  }

  :host([has-helper][theme~='helper-above-field']) [part='helper-text']::after {
    content: '';
    display: block;
    height: 0.4em;
  }

  :host([has-helper][theme~='helper-above-field']) [part='label'] {
    order: 0;
    padding-bottom: 0.4em;
  }

  :host([has-helper][theme~='helper-above-field']) [part='helper-text'] {
    order: 1;
  }

  :host([has-helper][theme~='helper-above-field']) [part='label'] + * {
    order: 2;
  }

  :host([has-helper][theme~='helper-above-field']) [part='error-message'] {
    order: 3;
  }
`;/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const So=g`
  [part='label'] {
    align-self: flex-start;
    color: var(--lumo-secondary-text-color);
    font-weight: 500;
    font-size: var(--lumo-font-size-s);
    margin-left: calc(var(--lumo-border-radius-m) / 4);
    transition: color 0.2s;
    line-height: 1;
    padding-right: 1em;
    padding-bottom: 0.5em;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    position: relative;
    max-width: 100%;
    box-sizing: border-box;
  }

  :host([has-label])::before {
    margin-top: calc(var(--lumo-font-size-s) * 1.5);
  }

  :host([has-label][theme~='small'])::before {
    margin-top: calc(var(--lumo-font-size-xs) * 1.5);
  }

  :host([has-label]) {
    padding-top: var(--lumo-space-m);
  }

  :host([has-label]) ::slotted([slot='tooltip']) {
    --vaadin-tooltip-offset-bottom: calc((var(--lumo-space-m) - var(--lumo-space-xs)) * -1);
  }

  :host([required]) [part='required-indicator']::after {
    content: var(--lumo-required-field-indicator, '\\2022');
    transition: opacity 0.2s;
    color: var(--lumo-required-field-indicator-color, var(--lumo-primary-text-color));
    position: absolute;
    right: 0;
    width: 1em;
    text-align: center;
  }

  :host([invalid]) [part='required-indicator']::after {
    color: var(--lumo-required-field-indicator-color, var(--lumo-error-text-color));
  }

  [part='error-message'] {
    margin-left: calc(var(--lumo-border-radius-m) / 4);
    font-size: var(--lumo-font-size-xs);
    line-height: var(--lumo-line-height-xs);
    color: var(--lumo-error-text-color);
    will-change: max-height;
    transition: 0.4s max-height;
    max-height: 5em;
  }

  :host([has-error-message]) [part='error-message']::before,
  :host([has-error-message]) [part='error-message']::after {
    content: '';
    display: block;
    height: 0.4em;
  }

  :host(:not([invalid])) [part='error-message'] {
    max-height: 0;
    overflow: hidden;
  }

  /* RTL specific styles */

  :host([dir='rtl']) [part='label'] {
    margin-left: 0;
    margin-right: calc(var(--lumo-border-radius-m) / 4);
  }

  :host([dir='rtl']) [part='label'] {
    padding-left: 1em;
    padding-right: 0;
  }

  :host([dir='rtl']) [part='required-indicator']::after {
    right: auto;
    left: 0;
  }

  :host([dir='rtl']) [part='error-message'] {
    margin-left: 0;
    margin-right: calc(var(--lumo-border-radius-m) / 4);
  }
`;y("",So,{moduleId:"lumo-required-field"});/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Er=g`
  :host {
    --lumo-text-field-size: var(--lumo-size-m);
    color: var(--lumo-body-text-color);
    font-size: var(--lumo-font-size-m);
    font-family: var(--lumo-font-family);
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-tap-highlight-color: transparent;
    padding: var(--lumo-space-xs) 0;
  }

  :host::before {
    height: var(--lumo-text-field-size);
    box-sizing: border-box;
    display: inline-flex;
    align-items: center;
  }

  :host([focused]:not([readonly])) [part='label'] {
    color: var(--lumo-primary-text-color);
  }

  :host([focused]) [part='input-field'] ::slotted(:is(input, textarea)) {
    -webkit-mask-image: none;
    mask-image: none;
  }

  ::slotted(:is(input, textarea):placeholder-shown) {
    color: var(--lumo-secondary-text-color);
  }

  /* Hover */
  :host(:hover:not([readonly]):not([focused])) [part='label'] {
    color: var(--lumo-body-text-color);
  }

  :host(:hover:not([readonly]):not([focused])) [part='input-field']::after {
    opacity: 0.1;
  }

  /* Touch device adjustment */
  @media (pointer: coarse) {
    :host(:hover:not([readonly]):not([focused])) [part='label'] {
      color: var(--lumo-secondary-text-color);
    }

    :host(:hover:not([readonly]):not([focused])) [part='input-field']::after {
      opacity: 0;
    }

    :host(:active:not([readonly]):not([focused])) [part='input-field']::after {
      opacity: 0.2;
    }
  }

  /* Trigger when not focusing using the keyboard */
  :host([focused]:not([focus-ring]):not([readonly])) [part='input-field']::after {
    transform: scaleX(0);
    transition-duration: 0.15s, 1s;
  }

  /* Focus-ring */
  :host([focus-ring]) [part='input-field'] {
    box-shadow: 0 0 0 2px var(--lumo-primary-color-50pct);
  }

  /* Read-only and disabled */
  :host(:is([readonly], [disabled])) ::slotted(:is(input, textarea):placeholder-shown) {
    opacity: 0;
  }

  /* Disabled style */
  :host([disabled]) {
    pointer-events: none;
  }

  :host([disabled]) [part='label'],
  :host([disabled]) [part='input-field'] ::slotted(*) {
    color: var(--lumo-disabled-text-color);
    -webkit-text-fill-color: var(--lumo-disabled-text-color);
  }

  /* Invalid style */
  :host([invalid][focus-ring]) [part='input-field'] {
    box-shadow: 0 0 0 2px var(--lumo-error-color-50pct);
  }

  :host([input-prevented]) [part='input-field'] {
    animation: shake 0.15s infinite;
  }

  @keyframes shake {
    25% {
      transform: translateX(4px);
    }
    75% {
      transform: translateX(-4px);
    }
  }

  /* Small theme */
  :host([theme~='small']) {
    font-size: var(--lumo-font-size-s);
    --lumo-text-field-size: var(--lumo-size-s);
  }

  :host([theme~='small']) [part='label'] {
    font-size: var(--lumo-font-size-xs);
  }

  :host([theme~='small']) [part='error-message'] {
    font-size: var(--lumo-font-size-xxs);
  }

  /* Slotted content */
  [part='input-field'] ::slotted(:not(vaadin-icon):not(input):not(textarea)) {
    color: var(--lumo-secondary-text-color);
    font-weight: 400;
  }

  [part='clear-button']::before {
    content: var(--lumo-icons-cross);
  }
`,kt=[So,Oo,xr,Er];y("",kt,{moduleId:"lumo-input-field-shared-styles"});/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */y("vaadin-text-field",kt,{moduleId:"lumo-text-field-styles"});/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd..
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Pr=g`
  [part='clear-button'] {
    display: none;
    cursor: default;
  }

  [part='clear-button']::before {
    content: '\\2715';
  }

  :host([clear-button-visible][has-value]:not([disabled]):not([readonly])) [part='clear-button'] {
    display: block;
  }
`;/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd..
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Tr=g`
  :host {
    display: inline-flex;
    outline: none;
  }

  :host::before {
    content: '\\2003';
    width: 0;
    display: inline-block;
    /* Size and position this element on the same vertical position as the input-field element
          to make vertical align for the host element work as expected */
  }

  :host([hidden]) {
    display: none !important;
  }

  :host(:not([has-label])) [part='label'] {
    display: none;
  }
`;/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd..
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Nr=g`
  [class$='container'] {
    display: flex;
    flex-direction: column;
    min-width: 100%;
    max-width: 100%;
    width: var(--vaadin-field-default-width, 12em);
  }
`;/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd..
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Or=[Tr,Nr,Pr];/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class Sr extends Mt{constructor(t,e){super(t,"input","input",{initializer:(s,o)=>{o.value&&s.setAttribute("value",o.value),o.type&&s.setAttribute("type",o.type),s.id=this.defaultId,typeof e=="function"&&e(s)},useUniqueId:!0})}}/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Ir=v(i=>class extends Po(To(i)){static get properties(){return{autofocus:{type:Boolean},focusElement:{type:Object,readOnly:!0,observer:"_focusElementChanged"},_lastTabIndex:{value:0}}}constructor(){super(),this._boundOnBlur=this._onBlur.bind(this),this._boundOnFocus=this._onFocus.bind(this)}ready(){super.ready(),this.autofocus&&!this.disabled&&requestAnimationFrame(()=>{this.focus(),this.setAttribute("focus-ring","")})}focus(){!this.focusElement||this.disabled||(this.focusElement.focus(),this._setFocused(!0))}blur(){this.focusElement&&(this.focusElement.blur(),this._setFocused(!1))}click(){this.focusElement&&!this.disabled&&this.focusElement.click()}_focusElementChanged(e,s){e?(e.disabled=this.disabled,this._addFocusListeners(e),this.__forwardTabIndex(this.tabindex)):s&&this._removeFocusListeners(s)}_addFocusListeners(e){e.addEventListener("blur",this._boundOnBlur),e.addEventListener("focus",this._boundOnFocus)}_removeFocusListeners(e){e.removeEventListener("blur",this._boundOnBlur),e.removeEventListener("focus",this._boundOnFocus)}_onFocus(e){e.stopPropagation(),this.dispatchEvent(new Event("focus"))}_onBlur(e){e.stopPropagation(),this.dispatchEvent(new Event("blur"))}_shouldSetFocus(e){return e.target===this.focusElement}_disabledChanged(e,s){super._disabledChanged(e,s),this.focusElement&&(this.focusElement.disabled=e),e&&this.blur()}_tabindexChanged(e){this.__forwardTabIndex(e)}__forwardTabIndex(e){e!==void 0&&this.focusElement&&(this.focusElement.tabIndex=e,e!==-1&&(this.tabindex=void 0)),this.disabled&&e&&(e!==-1&&(this._lastTabIndex=e),this.tabindex=void 0)}});/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Io=v(i=>class extends i{static get properties(){return{inputElement:{type:Object,readOnly:!0,observer:"_inputElementChanged"},type:{type:String,readOnly:!0},value:{type:String,value:"",observer:"_valueChanged",notify:!0},_hasInputValue:{type:Boolean,value:!1,observer:"_hasInputValueChanged"}}}constructor(){super(),this._boundOnInput=this.__onInput.bind(this),this._boundOnChange=this._onChange.bind(this)}get _hasValue(){return this.value!=null&&this.value!==""}get _inputElementValueProperty(){return"value"}get _inputElementValue(){return this.inputElement?this.inputElement[this._inputElementValueProperty]:void 0}set _inputElementValue(e){this.inputElement&&(this.inputElement[this._inputElementValueProperty]=e)}clear(){this._hasInputValue=!1,this.value="",this._inputElementValue=""}_addInputListeners(e){e.addEventListener("input",this._boundOnInput),e.addEventListener("change",this._boundOnChange)}_removeInputListeners(e){e.removeEventListener("input",this._boundOnInput),e.removeEventListener("change",this._boundOnChange)}_forwardInputValue(e){this.inputElement&&(this._inputElementValue=e??"")}_inputElementChanged(e,s){e?this._addInputListeners(e):s&&this._removeInputListeners(s)}_hasInputValueChanged(e,s){(e||s)&&this.dispatchEvent(new CustomEvent("has-input-value-changed"))}__onInput(e){this._setHasInputValue(e),this._onInput(e)}_onInput(e){const s=e.composedPath()[0];this.__userInput=e.isTrusted,this.value=s.value,this.__userInput=!1}_onChange(e){}_toggleHasValue(e){this.toggleAttribute("has-value",e)}_valueChanged(e,s){this._toggleHasValue(this._hasValue),!(e===""&&s===void 0)&&(this.__userInput||this._forwardInputValue(e))}_setHasInputValue(e){const s=e.composedPath()[0];this._hasInputValue=s.value.length>0}});/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Mr=i=>class extends Io(Oe(i)){static get properties(){return{clearButtonVisible:{type:Boolean,reflectToAttribute:!0,value:!1}}}get clearElement(){return console.warn(`Please implement the 'clearElement' property in <${this.localName}>`),null}ready(){super.ready(),this.clearElement&&this.clearElement.addEventListener("click",e=>this._onClearButtonClick(e))}_onClearButtonClick(e){e.preventDefault(),this.inputElement.focus(),this._onClearAction()}_onEscape(e){super._onEscape(e),this.clearButtonVisible&&this.value&&(e.stopPropagation(),this._onClearAction())}_onClearAction(){this.clear(),this.inputElement.dispatchEvent(new Event("input",{bubbles:!0,composed:!0})),this.inputElement.dispatchEvent(new Event("change",{bubbles:!0}))}};/**
 * @license
 * Copyright (c) 2022 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class Ie extends Mt{constructor(t,e,s,o={}){super(t,e,s,{...o,useUniqueId:!0})}initCustomNode(t){this.__updateNodeId(t),this.__notifyChange(t)}teardownNode(t){const e=this.getSlotChild();e&&e!==this.defaultNode?this.__notifyChange(e):(this.restoreDefaultNode(),this.updateDefaultNode(this.node))}attachDefaultNode(){const t=super.attachDefaultNode();return t&&this.__updateNodeId(t),t}restoreDefaultNode(){}updateDefaultNode(t){this.__notifyChange(t)}observeNode(t){this.__nodeObserver&&this.__nodeObserver.disconnect(),this.__nodeObserver=new MutationObserver(e=>{e.forEach(s=>{const o=s.target,n=o===this.node;s.type==="attributes"?n&&this.__updateNodeId(o):(n||o.parentElement===this.node)&&this.__notifyChange(this.node)})}),this.__nodeObserver.observe(t,{attributes:!0,attributeFilter:["id"],childList:!0,subtree:!0,characterData:!0})}__hasContent(t){return t?t.nodeType===Node.ELEMENT_NODE&&(customElements.get(t.localName)||t.children.length>0)||t.textContent&&t.textContent.trim()!=="":!1}__notifyChange(t){this.dispatchEvent(new CustomEvent("slot-content-changed",{detail:{hasContent:this.__hasContent(t),node:t}}))}__updateNodeId(t){const e=!this.nodes||t===this.nodes[0];t.nodeType===Node.ELEMENT_NODE&&e&&!t.id&&(t.id=this.defaultId)}}/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class kr extends Ie{constructor(t){super(t,"error-message","div")}setErrorMessage(t){this.errorMessage=t,this.updateDefaultNode(this.node)}setInvalid(t){this.invalid=t,this.updateDefaultNode(this.node)}initAddedNode(t){t!==this.defaultNode&&this.initCustomNode(t)}initNode(t){this.updateDefaultNode(t)}initCustomNode(t){t.textContent&&!this.errorMessage&&(this.errorMessage=t.textContent.trim()),super.initCustomNode(t)}restoreDefaultNode(){this.attachDefaultNode()}updateDefaultNode(t){const{errorMessage:e,invalid:s}=this,o=Boolean(s&&e&&e.trim()!=="");t&&(t.textContent=o?e:"",t.hidden=!o,o?t.setAttribute("role","alert"):t.removeAttribute("role")),super.updateDefaultNode(t)}}/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class zr{constructor(t){this.host=t,this.__required=!1}get __isGroupField(){return this.__target===this.host}setTarget(t){this.__target=t,this.__setAriaRequiredAttribute(this.__required),this.__setLabelIdToAriaAttribute(this.__labelId),this.__setErrorIdToAriaAttribute(this.__errorId),this.__setHelperIdToAriaAttribute(this.__helperId)}setRequired(t){this.__setAriaRequiredAttribute(t),this.__required=t}setLabelId(t){this.__setLabelIdToAriaAttribute(t,this.__labelId),this.__labelId=t}setErrorId(t){this.__setErrorIdToAriaAttribute(t,this.__errorId),this.__errorId=t}setHelperId(t){this.__setHelperIdToAriaAttribute(t,this.__helperId),this.__helperId=t}__setLabelIdToAriaAttribute(t,e){this.__setAriaAttributeId("aria-labelledby",t,e)}__setErrorIdToAriaAttribute(t,e){this.__isGroupField?this.__setAriaAttributeId("aria-labelledby",t,e):this.__setAriaAttributeId("aria-describedby",t,e)}__setHelperIdToAriaAttribute(t,e){this.__isGroupField?this.__setAriaAttributeId("aria-labelledby",t,e):this.__setAriaAttributeId("aria-describedby",t,e)}__setAriaRequiredAttribute(t){this.__target&&(["input","textarea"].includes(this.__target.localName)||(t?this.__target.setAttribute("aria-required","true"):this.__target.removeAttribute("aria-required")))}__setAriaAttributeId(t,e,s){this.__target&&(s&&fo(this.__target,t,s),e&&po(this.__target,t,e))}}/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class Lr extends Ie{constructor(t){super(t,"helper",null)}setHelperText(t){this.helperText=t,this.getSlotChild()||this.restoreDefaultNode(),this.node===this.defaultNode&&this.updateDefaultNode(this.node)}restoreDefaultNode(){const{helperText:t}=this;if(t&&t.trim()!==""){this.tagName="div";const e=this.attachDefaultNode();this.observeNode(e)}}updateDefaultNode(t){t&&(t.textContent=this.helperText),super.updateDefaultNode(t)}initCustomNode(t){super.initCustomNode(t),this.observeNode(t)}}/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class Dr extends Ie{constructor(t){super(t,"label","label")}setLabel(t){this.label=t,this.getSlotChild()||this.restoreDefaultNode(),this.node===this.defaultNode&&this.updateDefaultNode(this.node)}restoreDefaultNode(){const{label:t}=this;if(t&&t.trim()!==""){const e=this.attachDefaultNode();this.observeNode(e)}}updateDefaultNode(t){t&&(t.textContent=this.label),super.updateDefaultNode(t)}initCustomNode(t){super.initCustomNode(t),this.observeNode(t)}}/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Hr=v(i=>class extends It(i){static get properties(){return{label:{type:String,observer:"_labelChanged"}}}constructor(){super(),this._labelController=new Dr(this),this._labelController.addEventListener("slot-content-changed",e=>{this.toggleAttribute("has-label",e.detail.hasContent)})}get _labelId(){const e=this._labelNode;return e&&e.id}get _labelNode(){return this._labelController.node}ready(){super.ready(),this.addController(this._labelController)}_labelChanged(e){this._labelController.setLabel(e)}});/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Mo=v(i=>class extends i{static get properties(){return{invalid:{type:Boolean,reflectToAttribute:!0,notify:!0,value:!1},required:{type:Boolean,reflectToAttribute:!0}}}validate(){const e=this.checkValidity();return this._setInvalid(!e),this.dispatchEvent(new CustomEvent("validated",{detail:{valid:e}})),e}checkValidity(){return!this.required||!!this.value}_setInvalid(e){this._shouldSetInvalid(e)&&(this.invalid=e)}_shouldSetInvalid(e){return!0}});/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Rr=i=>class extends Mo(Hr(It(i))){static get properties(){return{ariaTarget:{type:Object,observer:"_ariaTargetChanged"},errorMessage:{type:String,observer:"_errorMessageChanged"},helperText:{type:String,observer:"_helperTextChanged"}}}static get observers(){return["_invalidChanged(invalid)","_requiredChanged(required)"]}constructor(){super(),this._fieldAriaController=new zr(this),this._helperController=new Lr(this),this._errorController=new kr(this),this._errorController.addEventListener("slot-content-changed",e=>{this.toggleAttribute("has-error-message",e.detail.hasContent)}),this._labelController.addEventListener("slot-content-changed",e=>{const{hasContent:s,node:o}=e.detail;this.__labelChanged(s,o)}),this._helperController.addEventListener("slot-content-changed",e=>{const{hasContent:s,node:o}=e.detail;this.toggleAttribute("has-helper",s),this.__helperChanged(s,o)})}get _errorNode(){return this._errorController.node}get _helperNode(){return this._helperController.node}ready(){super.ready(),this.addController(this._fieldAriaController),this.addController(this._helperController),this.addController(this._errorController)}__helperChanged(e,s){e?this._fieldAriaController.setHelperId(s.id):this._fieldAriaController.setHelperId(null)}__labelChanged(e,s){e?this._fieldAriaController.setLabelId(s.id):this._fieldAriaController.setLabelId(null)}_errorMessageChanged(e){this._errorController.setErrorMessage(e)}_helperTextChanged(e){this._helperController.setHelperText(e)}_ariaTargetChanged(e){e&&this._fieldAriaController.setTarget(e)}_requiredChanged(e){this._fieldAriaController.setRequired(e)}_invalidChanged(e){this._errorController.setInvalid(e),setTimeout(()=>{if(e){const s=this._errorNode;this._fieldAriaController.setErrorId(s&&s.id)}else this._fieldAriaController.setErrorId(null)})}};/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Fr=v(i=>class extends i{static get properties(){return{stateTarget:{type:Object,observer:"_stateTargetChanged"}}}static get delegateAttrs(){return[]}static get delegateProps(){return[]}ready(){super.ready(),this._createDelegateAttrsObserver(),this._createDelegatePropsObserver()}_stateTargetChanged(e){e&&(this._ensureAttrsDelegated(),this._ensurePropsDelegated())}_createDelegateAttrsObserver(){this._createMethodObserver(`_delegateAttrsChanged(${this.constructor.delegateAttrs.join(", ")})`)}_createDelegatePropsObserver(){this._createMethodObserver(`_delegatePropsChanged(${this.constructor.delegateProps.join(", ")})`)}_ensureAttrsDelegated(){this.constructor.delegateAttrs.forEach(e=>{this._delegateAttribute(e,this[e])})}_ensurePropsDelegated(){this.constructor.delegateProps.forEach(e=>{this._delegateProperty(e,this[e])})}_delegateAttrsChanged(...e){this.constructor.delegateAttrs.forEach((s,o)=>{this._delegateAttribute(s,e[o])})}_delegatePropsChanged(...e){this.constructor.delegateProps.forEach((s,o)=>{this._delegateProperty(s,e[o])})}_delegateAttribute(e,s){this.stateTarget&&(e==="invalid"&&this._delegateAttribute("aria-invalid",s?"true":!1),typeof s=="boolean"?this.stateTarget.toggleAttribute(e,s):s?this.stateTarget.setAttribute(e,s):this.stateTarget.removeAttribute(e))}_delegateProperty(e,s){this.stateTarget&&(this.stateTarget[e]=s)}});/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Br=v(i=>class extends Fr(Mo(Io(i))){static get constraints(){return["required"]}static get delegateAttrs(){return[...super.delegateAttrs,"required"]}ready(){super.ready(),this._createConstraintsObserver()}checkValidity(){return this.inputElement&&this._hasValidConstraints(this.constructor.constraints.map(e=>this[e]))?this.inputElement.checkValidity():!this.invalid}_hasValidConstraints(e){return e.some(s=>this.__isValidConstraint(s))}_createConstraintsObserver(){this._createMethodObserver(`_constraintsChanged(stateTarget, ${this.constructor.constraints.join(", ")})`)}_constraintsChanged(e,...s){if(!e)return;const o=this._hasValidConstraints(s),n=this.__previousHasConstraints&&!o;(this._hasValue||this.invalid)&&o?this.validate():n&&this._setInvalid(!1),this.__previousHasConstraints=o}_onChange(e){e.stopPropagation(),this.validate(),this.dispatchEvent(new CustomEvent("change",{detail:{sourceEvent:e},bubbles:e.bubbles,cancelable:e.cancelable}))}__isValidConstraint(e){return Boolean(e)||e===0}});/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const $t=new WeakMap;function Vr(i){return $t.has(i)||$t.set(i,new Set),$t.get(i)}function $r(i,t){const e=document.createElement("style");e.textContent=i,t===document?document.head.appendChild(e):t.insertBefore(e,t.firstChild)}const Ur=v(i=>class extends i{get slotStyles(){return{}}connectedCallback(){super.connectedCallback(),this.__applySlotStyles()}__applySlotStyles(){const e=this.getRootNode(),s=Vr(e);this.slotStyles.forEach(o=>{s.has(o)||($r(o,e),s.add(o))})}});/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const qr=i=>class extends Ur(Ir(Br(Rr(Mr(Oe(i)))))){static get properties(){return{allowedCharPattern:{type:String,observer:"_allowedCharPatternChanged"},autoselect:{type:Boolean,value:!1},name:{type:String,reflectToAttribute:!0},placeholder:{type:String,reflectToAttribute:!0},readonly:{type:Boolean,value:!1,reflectToAttribute:!0},title:{type:String,reflectToAttribute:!0}}}static get delegateAttrs(){return[...super.delegateAttrs,"name","type","placeholder","readonly","invalid","title"]}constructor(){super(),this._boundOnPaste=this._onPaste.bind(this),this._boundOnDrop=this._onDrop.bind(this),this._boundOnBeforeInput=this._onBeforeInput.bind(this)}get slotStyles(){return[`
          :is(input[slot='input'], textarea[slot='textarea'])::placeholder {
            font: inherit;
            color: inherit;
          }
        `]}_onFocus(e){super._onFocus(e),this.autoselect&&this.inputElement&&this.inputElement.select()}_onChange(e){e.stopPropagation(),this.validate(),this.dispatchEvent(new CustomEvent("change",{detail:{sourceEvent:e},bubbles:e.bubbles,cancelable:e.cancelable}))}_addInputListeners(e){super._addInputListeners(e),e.addEventListener("paste",this._boundOnPaste),e.addEventListener("drop",this._boundOnDrop),e.addEventListener("beforeinput",this._boundOnBeforeInput)}_removeInputListeners(e){super._removeInputListeners(e),e.removeEventListener("paste",this._boundOnPaste),e.removeEventListener("drop",this._boundOnDrop),e.removeEventListener("beforeinput",this._boundOnBeforeInput)}_onKeyDown(e){super._onKeyDown(e),this.allowedCharPattern&&!this.__shouldAcceptKey(e)&&(e.preventDefault(),this._markInputPrevented())}_markInputPrevented(){this.setAttribute("input-prevented",""),this._preventInputDebouncer=we.debounce(this._preventInputDebouncer,Dn.after(200),()=>{this.removeAttribute("input-prevented")})}__shouldAcceptKey(e){return e.metaKey||e.ctrlKey||!e.key||e.key.length!==1||this.__allowedCharRegExp.test(e.key)}_onPaste(e){if(this.allowedCharPattern){const s=e.clipboardData.getData("text");this.__allowedTextRegExp.test(s)||(e.preventDefault(),this._markInputPrevented())}}_onDrop(e){if(this.allowedCharPattern){const s=e.dataTransfer.getData("text");this.__allowedTextRegExp.test(s)||(e.preventDefault(),this._markInputPrevented())}}_onBeforeInput(e){this.allowedCharPattern&&e.data&&!this.__allowedTextRegExp.test(e.data)&&(e.preventDefault(),this._markInputPrevented())}_allowedCharPatternChanged(e){if(e)try{this.__allowedCharRegExp=new RegExp(`^${e}$`,"u"),this.__allowedTextRegExp=new RegExp(`^${e}*$`,"u")}catch(s){console.error(s)}}};/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const jr=i=>class extends qr(i){static get properties(){return{autocomplete:{type:String},autocorrect:{type:String},autocapitalize:{type:String,reflectToAttribute:!0}}}static get delegateAttrs(){return[...super.delegateAttrs,"autocapitalize","autocomplete","autocorrect"]}get __data(){return this.__dataValue||{}}set __data(e){this.__dataValue=e}_inputElementChanged(e){super._inputElementChanged(e),e&&(e.value&&e.value!==this.value&&(console.warn(`Please define value on the <${this.localName}> component!`),e.value=""),this.value&&(e.value=this.value))}_setFocused(e){super._setFocused(e),e||this.validate()}_onInput(e){super._onInput(e),this.invalid&&this.validate()}_valueChanged(e,s){super._valueChanged(e,s),s!==void 0&&this.invalid&&this.validate()}};/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class Yr{constructor(t,e){this.input=t,this.__preventDuplicateLabelClick=this.__preventDuplicateLabelClick.bind(this),e.addEventListener("slot-content-changed",s=>{this.__initLabel(s.detail.node)}),this.__initLabel(e.node)}__initLabel(t){t&&(t.addEventListener("click",this.__preventDuplicateLabelClick),this.input&&t.setAttribute("for",this.input.id))}__preventDuplicateLabelClick(){const t=e=>{e.stopImmediatePropagation(),this.input.removeEventListener("click",t)};this.input.addEventListener("click",t)}}/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Gr=i=>class extends jr(i){static get properties(){return{maxlength:{type:Number},minlength:{type:Number},pattern:{type:String}}}static get delegateAttrs(){return[...super.delegateAttrs,"maxlength","minlength","pattern"]}static get constraints(){return[...super.constraints,"maxlength","minlength","pattern"]}constructor(){super(),this._setType("text")}get clearElement(){return this.$.clearButton}ready(){super.ready(),this.addController(new Sr(this,e=>{this._setInputElement(e),this._setFocusElement(e),this.stateTarget=e,this.ariaTarget=e})),this.addController(new Yr(this.inputElement,this._labelController))}};/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */y("vaadin-text-field",Or,{moduleId:"vaadin-text-field-styles"});class Tt extends Gr(R(F(E))){static get is(){return"vaadin-text-field"}static get template(){return x`
      <style>
        [part='input-field'] {
          flex-grow: 0;
        }
      </style>

      <div class="vaadin-field-container">
        <div part="label">
          <slot name="label"></slot>
          <span part="required-indicator" aria-hidden="true" on-click="focus"></span>
        </div>

        <vaadin-input-container
          part="input-field"
          readonly="[[readonly]]"
          disabled="[[disabled]]"
          invalid="[[invalid]]"
          theme$="[[_theme]]"
        >
          <slot name="prefix" slot="prefix"></slot>
          <slot name="input"></slot>
          <slot name="suffix" slot="suffix"></slot>
          <div id="clearButton" part="clear-button" slot="suffix" aria-hidden="true"></div>
        </vaadin-input-container>

        <div part="helper-text">
          <slot name="helper"></slot>
        </div>

        <div part="error-message">
          <slot name="error-message"></slot>
        </div>
      </div>
      <slot name="tooltip"></slot>
    `}static get properties(){return{maxlength:{type:Number},minlength:{type:Number}}}ready(){super.ready(),this._tooltipController=new mo(this),this._tooltipController.setPosition("top"),this.addController(this._tooltipController)}}customElements.define(Tt.is,Tt);/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Wr=g`
  :host([dir='rtl']) [part='input-field'] ::slotted(input) {
    --_lumo-text-field-overflow-mask-image: linear-gradient(to left, transparent, #000 1.25em);
  }

  :host([dir='rtl']) [part='input-field'] ::slotted(input:placeholder-shown) {
    --_lumo-text-field-overflow-mask-image: none;
  }
`;y("vaadin-email-field",[kt,Wr],{moduleId:"lumo-email-field"});/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Kr=g`
  :host([dir='rtl']) [part='input-field'] {
    direction: ltr;
  }

  :host([dir='rtl']) [part='input-field'] ::slotted(input)::placeholder {
    direction: rtl;
    text-align: left;
  }
`;/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */y("vaadin-email-field",Kr,{moduleId:"vaadin-email-field-styles"});class Jr extends Tt{static get is(){return"vaadin-email-field"}constructor(){super(),this._setType("email"),this.pattern="^([a-zA-Z0-9_\\.\\-+])+@[a-zA-Z0-9-.]+\\.[a-zA-Z0-9-]{2,}$"}ready(){super.ready(),this.inputElement&&(this.inputElement.autocapitalize="off")}}customElements.define("vaadin-email-field",Jr);y("vaadin-notification-card",g`
    :host {
      position: relative;
      margin: var(--lumo-space-s);
    }

    [part='overlay'] {
      background: var(--lumo-base-color) linear-gradient(var(--lumo-contrast-5pct), var(--lumo-contrast-5pct));
      border-radius: var(--lumo-border-radius-l);
      box-shadow: 0 0 0 1px var(--lumo-contrast-10pct), var(--lumo-box-shadow-l);
      font-family: var(--lumo-font-family);
      font-size: var(--lumo-font-size-m);
      font-weight: 400;
      line-height: var(--lumo-line-height-s);
      letter-spacing: 0;
      text-transform: none;
      -webkit-text-size-adjust: 100%;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    }

    [part='content'] {
      padding: var(--lumo-space-wide-l);
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    [part='content'] ::slotted(vaadin-button) {
      flex: none;
      margin: 0 calc(var(--lumo-space-s) * -1) 0 var(--lumo-space-m);
    }

    :host([slot^='middle']) {
      max-width: 80vw;
      margin: var(--lumo-space-s) auto;
    }

    :host([slot\$='stretch']) {
      margin: 0;
    }

    :host([slot\$='stretch']) [part='overlay'] {
      border-radius: 0;
    }

    @media (min-width: 421px) {
      :host(:not([slot\$='stretch'])) {
        display: flex;
      }

      :host([slot\$='end']) {
        justify-content: flex-end;
      }

      :host([slot^='middle']),
      :host([slot\$='center']) {
        display: flex;
        justify-content: center;
      }
    }

    @keyframes lumo-notification-exit-fade-out {
      100% {
        opacity: 0;
      }
    }

    @keyframes lumo-notification-enter-fade-in {
      0% {
        opacity: 0;
      }
    }

    @keyframes lumo-notification-enter-slide-down {
      0% {
        transform: translateY(-200%);
        opacity: 0;
      }
    }

    @keyframes lumo-notification-exit-slide-up {
      100% {
        transform: translateY(-200%);
        opacity: 0;
      }
    }

    @keyframes lumo-notification-enter-slide-up {
      0% {
        transform: translateY(200%);
        opacity: 0;
      }
    }

    @keyframes lumo-notification-exit-slide-down {
      100% {
        transform: translateY(200%);
        opacity: 0;
      }
    }

    :host([slot='middle'][opening]) {
      animation: lumo-notification-enter-fade-in 300ms;
    }

    :host([slot='middle'][closing]) {
      animation: lumo-notification-exit-fade-out 300ms;
    }

    :host([slot^='top'][opening]) {
      animation: lumo-notification-enter-slide-down 300ms;
    }

    :host([slot^='top'][closing]) {
      animation: lumo-notification-exit-slide-up 300ms;
    }

    :host([slot^='bottom'][opening]) {
      animation: lumo-notification-enter-slide-up 300ms;
    }

    :host([slot^='bottom'][closing]) {
      animation: lumo-notification-exit-slide-down 300ms;
    }

    :host([theme~='primary']) [part='overlay'] {
      background: var(--lumo-primary-color);
      color: var(--lumo-primary-contrast-color);
      box-shadow: var(--lumo-box-shadow-l);
    }

    :host([theme~='primary']) {
      --_lumo-button-background-color: var(--lumo-shade-20pct);
      --_lumo-button-color: var(--lumo-primary-contrast-color);
      --_lumo-button-primary-background-color: var(--lumo-primary-contrast-color);
      --_lumo-button-primary-color: var(--lumo-primary-text-color);
    }

    :host([theme~='contrast']) [part='overlay'] {
      background: var(--lumo-contrast);
      color: var(--lumo-base-color);
      box-shadow: var(--lumo-box-shadow-l);
    }

    :host([theme~='contrast']) {
      --_lumo-button-background-color: var(--lumo-contrast-20pct);
      --_lumo-button-color: var(--lumo-base-color);
      --_lumo-button-primary-background-color: var(--lumo-base-color);
      --_lumo-button-primary-color: var(--lumo-contrast);
    }

    :host([theme~='success']) [part='overlay'] {
      background: var(--lumo-success-color);
      color: var(--lumo-success-contrast-color);
      box-shadow: var(--lumo-box-shadow-l);
    }

    :host([theme~='success']) {
      --_lumo-button-background-color: var(--lumo-shade-20pct);
      --_lumo-button-color: var(--lumo-success-contrast-color);
      --_lumo-button-primary-background-color: var(--lumo-success-contrast-color);
      --_lumo-button-primary-color: var(--lumo-success-text-color);
    }

    :host([theme~='error']) [part='overlay'] {
      background: var(--lumo-error-color);
      color: var(--lumo-error-contrast-color);
      box-shadow: var(--lumo-box-shadow-l);
    }

    :host([theme~='error']) {
      --_lumo-button-background-color: var(--lumo-shade-20pct);
      --_lumo-button-color: var(--lumo-error-contrast-color);
      --_lumo-button-primary-background-color: var(--lumo-error-contrast-color);
      --_lumo-button-primary-color: var(--lumo-error-text-color);
    }
  `,{moduleId:"lumo-notification-card"});/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Zr=i=>i===null||typeof i!="object"&&typeof i!="function",Xr={HTML:1,SVG:2},ko=(i,t)=>t===void 0?(i==null?void 0:i._$litType$)!==void 0:(i==null?void 0:i._$litType$)===t,Qr=i=>i.strings===void 0;/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const zt=i=>i.test(navigator.userAgent),ne=i=>i.test(navigator.platform),ta=i=>i.test(navigator.vendor),Tl=zt(/Android/u),Nl=zt(/Chrome/u)&&ta(/Google Inc/u),Ol=zt(/Firefox/u),ea=ne(/^iPad/u)||ne(/^Mac/u)&&navigator.maxTouchPoints>1,ia=ne(/^iPhone/u),zo=ia||ea,Sl=zt(/^((?!chrome|android).)*safari/iu),Il=(()=>{try{return document.createEvent("TouchEvent"),!0}catch{return!1}})();/**
 * @license
 * Copyright (c) 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Lo=i=>class extends i{static get properties(){return{overlayClass:{type:String},_overlayElement:{type:Object}}}static get observers(){return["__updateOverlayClassNames(overlayClass, _overlayElement)"]}__updateOverlayClassNames(e,s){if(!s||e===void 0)return;const{classList:o}=s;if(this.__initialClasses||(this.__initialClasses=new Set(o)),Array.isArray(this.__previousClasses)){const r=this.__previousClasses.filter(a=>!this.__initialClasses.has(a));r.length>0&&o.remove(...r)}const n=typeof e=="string"?e.split(" "):[];n.length>0&&o.add(...n),this.__previousClasses=n}};/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */function Do(i){if(window.Vaadin&&window.Vaadin.templateRendererCallback){window.Vaadin.templateRendererCallback(i);return}i.querySelector("template")&&console.warn(`WARNING: <template> inside <${i.localName}> is no longer supported. Import @vaadin/polymer-legacy-adapter/template-renderer.js to enable compatibility.`)}/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class di extends R(F(E)){static get template(){return x`
      <style>
        :host {
          position: fixed;
          z-index: 1000;
          top: 0;
          left: 0;
          bottom: 0;
          right: 0;
          box-sizing: border-box;

          display: flex;
          flex-direction: column;
          align-items: stretch;
          pointer-events: none;
        }

        [region-group] {
          flex: 1 1 0%;
          display: flex;
        }

        [region-group='top'] {
          align-items: flex-start;
        }

        [region-group='bottom'] {
          align-items: flex-end;
        }

        [region-group] > [region] {
          flex: 1 1 0%;
        }

        @media (max-width: 420px) {
          [region-group] {
            flex-direction: column;
            align-items: stretch;
          }

          [region-group='top'] {
            justify-content: flex-start;
          }

          [region-group='bottom'] {
            justify-content: flex-end;
          }

          [region-group] > [region] {
            flex: initial;
          }
        }
      </style>

      <div region="top-stretch"><slot name="top-stretch"></slot></div>
      <div region-group="top">
        <div region="top-start"><slot name="top-start"></slot></div>
        <div region="top-center"><slot name="top-center"></slot></div>
        <div region="top-end"><slot name="top-end"></slot></div>
      </div>
      <div region="middle"><slot name="middle"></slot></div>
      <div region-group="bottom">
        <div region="bottom-start"><slot name="bottom-start"></slot></div>
        <div region="bottom-center"><slot name="bottom-center"></slot></div>
        <div region="bottom-end"><slot name="bottom-end"></slot></div>
      </div>
      <div region="bottom-stretch"><slot name="bottom-stretch"></slot></div>
    `}static get is(){return"vaadin-notification-container"}static get properties(){return{opened:{type:Boolean,value:!1,observer:"_openedChanged"}}}constructor(){super(),this._boundVaadinOverlayClose=this._onVaadinOverlayClose.bind(this),zo&&(this._boundIosResizeListener=()=>this._detectIosNavbar())}_openedChanged(t){t?(document.body.appendChild(this),document.addEventListener("vaadin-overlay-close",this._boundVaadinOverlayClose),this._boundIosResizeListener&&(this._detectIosNavbar(),window.addEventListener("resize",this._boundIosResizeListener))):(document.body.removeChild(this),document.removeEventListener("vaadin-overlay-close",this._boundVaadinOverlayClose),this._boundIosResizeListener&&window.removeEventListener("resize",this._boundIosResizeListener))}_detectIosNavbar(){const t=window.innerHeight,s=window.innerWidth>t,o=document.documentElement.clientHeight;s&&o>t?this.style.bottom=`${o-t}px`:this.style.bottom="0"}_onVaadinOverlayClose(t){const e=t.detail.sourceEvent;e&&e.composedPath().indexOf(this)>=0&&t.preventDefault()}}class ci extends R(E){static get template(){return x`
      <style>
        :host {
          display: block;
        }

        [part='overlay'] {
          pointer-events: auto;
        }
      </style>

      <div part="overlay">
        <div part="content">
          <slot></slot>
        </div>
      </div>
    `}static get is(){return"vaadin-notification-card"}ready(){super.ready(),this.setAttribute("role","alert"),this.setAttribute("aria-live","polite")}}class N extends Lo(Si(F(E))){static get template(){return x`
      <style>
        :host {
          display: none !important;
        }
      </style>
      <vaadin-notification-card theme$="[[_theme]]"> </vaadin-notification-card>
    `}static get is(){return"vaadin-notification"}static get properties(){return{duration:{type:Number,value:5e3},opened:{type:Boolean,value:!1,notify:!0,observer:"_openedChanged"},position:{type:String,value:"bottom-start",observer:"_positionChanged"},renderer:Function}}static get observers(){return["_durationChanged(duration, opened)","_rendererChanged(renderer, opened, _overlayElement)"]}static show(t,e){return ko(t)?N._createAndShowNotification(s=>{Ii(t,s)},e):N._createAndShowNotification(s=>{s.innerText=t},e)}static _createAndShowNotification(t,e){const s=document.createElement(N.is);return e&&Number.isFinite(e.duration)&&(s.duration=e.duration),e&&e.position&&(s.position=e.position),e&&e.theme&&s.setAttribute("theme",e.theme),s.renderer=t,document.body.appendChild(s),s.opened=!0,s.addEventListener("opened-changed",o=>{o.detail.value||s.remove()}),s}get _container(){return N._container||(N._container=document.createElement("vaadin-notification-container"),document.body.appendChild(N._container)),N._container}get _card(){return this._overlayElement}ready(){super.ready(),this._overlayElement=this.shadowRoot.querySelector("vaadin-notification-card"),Do(this)}disconnectedCallback(){super.disconnectedCallback(),queueMicrotask(()=>{this.isConnected||(this.opened=!1)})}requestContentUpdate(){this.renderer&&this.renderer(this._card,this)}_rendererChanged(t,e,s){if(!s)return;const o=this._oldRenderer!==t;this._oldRenderer=t,o&&(s.innerHTML="",delete s._$litPart$),e&&(this._didAnimateNotificationAppend||this._animatedAppendNotificationCard(),this.requestContentUpdate())}open(){this.opened=!0}close(){this.opened=!1}_openedChanged(t){t?(this._container.opened=!0,this._animatedAppendNotificationCard()):this._card&&this._closeNotificationCard()}_animatedAppendNotificationCard(){if(this._card){this._card.setAttribute("opening",""),this._appendNotificationCard();const t=()=>{this._card.removeEventListener("animationend",t),this._card.removeAttribute("opening")};this._card.addEventListener("animationend",t),this._didAnimateNotificationAppend=!0}else this._didAnimateNotificationAppend=!1}_appendNotificationCard(){if(this._card){if(!this._container.shadowRoot.querySelector(`slot[name="${this.position}"]`)){console.warn(`Invalid alignment parameter provided: position=${this.position}`);return}this._card.slot=this.position,this._container.firstElementChild&&/top/u.test(this.position)?this._container.insertBefore(this._card,this._container.firstElementChild):this._container.appendChild(this._card)}}_removeNotificationCard(){this._card.parentNode&&this._card.parentNode.removeChild(this._card),this._card.removeAttribute("closing"),this._container.opened=Boolean(this._container.firstElementChild)}_closeNotificationCard(){this._durationTimeoutId&&clearTimeout(this._durationTimeoutId),this._animatedRemoveNotificationCard()}_animatedRemoveNotificationCard(){this._card.setAttribute("closing","");const t=getComputedStyle(this._card).getPropertyValue("animation-name");if(t&&t!=="none"){const e=()=>{this._removeNotificationCard(),this._card.removeEventListener("animationend",e)};this._card.addEventListener("animationend",e)}else this._removeNotificationCard()}_positionChanged(){this.opened&&this._animatedAppendNotificationCard()}_durationChanged(t,e){e&&(clearTimeout(this._durationTimeoutId),t>0&&(this._durationTimeoutId=setTimeout(()=>this.close(),t)))}}customElements.define(di.is,di);customElements.define(ci.is,ci);customElements.define(N.is,N);/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const oa=g`
  :host {
    position: absolute;
    right: 0;
    top: 0;
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
    min-width: auto;
    background: transparent;
    outline: none;
  }
`;y("vaadin-password-field-button",[ki,oa],{moduleId:"lumo-password-field-button"});/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const sa=g`
  [part='reveal-button']::before {
    content: var(--lumo-icons-eye);
  }

  :host([password-visible]) [part='reveal-button']::before {
    content: var(--lumo-icons-eye-disabled);
  }

  /* Make it easy to hide the button across the whole app */
  [part='reveal-button'] {
    position: relative;
    display: var(--lumo-password-field-reveal-button-display, block);
  }

  [part='reveal-button'][hidden] {
    display: none !important;
  }
`;y("vaadin-password-field",[kt,sa],{moduleId:"lumo-password-field"});/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class hi extends se{static get is(){return"vaadin-password-field-button"}static get template(){return x`
      <style>
        :host {
          display: block;
        }

        :host([hidden]) {
          display: none !important;
        }
      </style>
      <slot name="tooltip"></slot>
    `}}customElements.define(hi.is,hi);/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const na=x`
  <div part="reveal-button" slot="suffix">
    <slot name="reveal"></slot>
  </div>
`;let yt;class ui extends Tt{static get is(){return"vaadin-password-field"}static get template(){if(!yt){yt=super.template.cloneNode(!0);const t=na.content.querySelector('[part="reveal-button"]');yt.content.querySelector('[part="input-field"]').appendChild(t)}return yt}static get properties(){return{revealButtonHidden:{type:Boolean,observer:"_revealButtonHiddenChanged",value:!1},passwordVisible:{type:Boolean,value:!1,reflectToAttribute:!0,observer:"_passwordVisibleChanged",readOnly:!0},i18n:{type:Object,value:()=>({reveal:"Show password"})}}}static get observers(){return["__i18nChanged(i18n.*)"]}constructor(){super(),this._setType("password"),this.__boundRevealButtonClick=this._onRevealButtonClick.bind(this),this.__boundRevealButtonTouchend=this._onRevealButtonTouchend.bind(this)}get slotStyles(){const t=this.localName;return[...super.slotStyles,`
        ${t} [slot="input"]::-ms-reveal {
          display: none;
        }
      `]}get _revealNode(){return this._revealButtonController&&this._revealButtonController.node}ready(){super.ready(),this._revealPart=this.shadowRoot.querySelector('[part="reveal-button"]'),this._revealButtonController=new Mt(this,"reveal","vaadin-password-field-button",{initializer:t=>{t.disabled=this.disabled,t.addEventListener("click",this.__boundRevealButtonClick),t.addEventListener("touchend",this.__boundRevealButtonTouchend)}}),this.addController(this._revealButtonController),this.__updateAriaLabel(this.i18n),this._updateToggleState(!1),this._toggleRevealHidden(this.revealButtonHidden),this.inputElement&&(this.inputElement.autocapitalize="off")}_shouldSetFocus(t){return t.target===this.inputElement||t.target===this._revealNode}_shouldRemoveFocus(t){return!(t.relatedTarget===this._revealNode||t.relatedTarget===this.inputElement&&t.target===this._revealNode)}_setFocused(t){if(super._setFocused(t),!t)this._setPasswordVisible(!1);else{const e=this.getRootNode().activeElement===this._revealNode;this.toggleAttribute("focus-ring",this._keyboardActive&&!e)}}__updateAriaLabel(t){t.reveal&&this._revealNode&&this._revealNode.setAttribute("aria-label",t.reveal)}__i18nChanged(t){this.__updateAriaLabel(t.base)}_revealButtonHiddenChanged(t){this._toggleRevealHidden(t)}_togglePasswordVisibility(){this._setPasswordVisible(!this.passwordVisible)}_onRevealButtonClick(){this._togglePasswordVisibility()}_onRevealButtonTouchend(t){t.preventDefault(),this._togglePasswordVisibility(),this.inputElement.focus()}_toggleRevealHidden(t){this._revealNode&&(t?(this._revealPart.setAttribute("hidden",""),this._revealNode.setAttribute("tabindex","-1"),this._revealNode.setAttribute("aria-hidden","true")):(this._revealPart.removeAttribute("hidden"),this._revealNode.setAttribute("tabindex","0"),this._revealNode.removeAttribute("aria-hidden")))}_updateToggleState(t){this._revealNode&&this._revealNode.setAttribute("aria-pressed",t?"true":"false")}_passwordVisibleChanged(t){this._setType(t?"text":"password"),this._updateToggleState(t)}_disabledChanged(t,e){super._disabledChanged(t,e),this._revealNode&&(this._revealNode.disabled=t)}}customElements.define(ui.is,ui);/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */let pi=0;function Ho(i,t=[],e={}){const s=e.moduleId||`custom-style-module-${pi}`;pi+=1;const o=document.createElement("dom-module");i&&o.setAttribute("theme-for",i);const n=!!(t.length&&e.moduleId),r=[].concat(e.include||[]);r.length===0?o.__allStyles=t:n||(o.__partialStyles=t),o.innerHTML=`
    <template>
      ${r.map(a=>`<style include=${a}></style>`)}
      ${n?`<style>${t.map(a=>a.cssText).join(`
`)}</style>`:""}
    </template>
  `,o.register(s)}function ra(i){return ve(i.querySelector("template")).map(t=>Qo(t.textContent))}function aa(){const t=G.prototype.modules;return Object.keys(t).map(e=>{const s=t[e],o=s.getAttribute("theme-for");return s.__allStyles||(s.__allStyles=ra(s).concat(s.__partialStyles||[])),{themeFor:o,moduleId:e,styles:s.__allStyles}})}window.Vaadin||(window.Vaadin={});window.Vaadin.styleModules={getAllThemes:aa,registerStyles:Ho};mt&&mt.length>0&&(mt.forEach(i=>{Ho(i.themeFor,i.styles,{moduleId:i.moduleId,include:i.include})}),mt.length=0);/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Me=g`
  :host {
    top: var(--lumo-space-m);
    right: var(--lumo-space-m);
    bottom: var(--lumo-space-m);
    left: var(--lumo-space-m);
    /* Workaround for Edge issue (only on Surface), where an overflowing vaadin-list-box inside vaadin-select-overlay makes the overlay transparent */
    /* stylelint-disable-next-line */
    outline: 0px solid transparent;
  }

  [part='overlay'] {
    background-color: var(--lumo-base-color);
    background-image: linear-gradient(var(--lumo-tint-5pct), var(--lumo-tint-5pct));
    border-radius: var(--lumo-border-radius-m);
    box-shadow: 0 0 0 1px var(--lumo-shade-5pct), var(--lumo-box-shadow-m);
    color: var(--lumo-body-text-color);
    font-family: var(--lumo-font-family);
    font-size: var(--lumo-font-size-m);
    font-weight: 400;
    line-height: var(--lumo-line-height-m);
    letter-spacing: 0;
    text-transform: none;
    -webkit-text-size-adjust: 100%;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  [part='content'] {
    padding: var(--lumo-space-xs);
  }

  [part='backdrop'] {
    background-color: var(--lumo-shade-20pct);
    animation: 0.2s lumo-overlay-backdrop-enter both;
    will-change: opacity;
  }

  @keyframes lumo-overlay-backdrop-enter {
    0% {
      opacity: 0;
    }
  }

  :host([closing]) [part='backdrop'] {
    animation: 0.2s lumo-overlay-backdrop-exit both;
  }

  @keyframes lumo-overlay-backdrop-exit {
    100% {
      opacity: 0;
    }
  }

  @keyframes lumo-overlay-dummy-animation {
    0% {
      opacity: 1;
    }

    100% {
      opacity: 1;
    }
  }
`;y("",Me,{moduleId:"lumo-overlay"});y("vaadin-overlay",Me,{moduleId:"lumo-vaadin-overlay"});/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/let Nt=!1,Ro=[],Fo=[];function Bo(){Nt=!0,requestAnimationFrame(function(){Nt=!1,la(Ro),setTimeout(function(){da(Fo)})})}function la(i){for(;i.length;)Vo(i.shift())}function da(i){for(let t=0,e=i.length;t<e;t++)Vo(i.shift())}function Vo(i){const t=i[0],e=i[1],s=i[2];try{e.apply(t,s)}catch(o){setTimeout(()=>{throw o})}}function kl(i,t,e){Nt||Bo(),Ro.push([i,t,e])}function ca(i,t,e){Nt||Bo(),Fo.push([i,t,e])}/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Ut=[];class ha{constructor(t){this.host=t,this.__trapNode=null,this.__onKeyDown=this.__onKeyDown.bind(this)}get __focusableElements(){return wr(this.__trapNode)}get __focusedElementIndex(){const t=this.__focusableElements;return t.indexOf(t.filter(br).pop())}hostConnected(){document.addEventListener("keydown",this.__onKeyDown)}hostDisconnected(){document.removeEventListener("keydown",this.__onKeyDown)}trapFocus(t){if(this.__trapNode=t,this.__focusableElements.length===0)throw this.__trapNode=null,new Error("The trap node should have at least one focusable descendant or be focusable itself.");Ut.push(this),this.__focusedElementIndex===-1&&this.__focusableElements[0].focus()}releaseFocus(){this.__trapNode=null,Ut.pop()}__onKeyDown(t){if(this.__trapNode&&this===Array.from(Ut).pop()&&t.key==="Tab"){t.preventDefault();const e=t.shiftKey;this.__focusNextElement(e)}}__focusNextElement(t=!1){const e=this.__focusableElements,s=t?-1:1,o=this.__focusedElementIndex,n=(e.length+o+s)%e.length,r=e[n];r.focus(),r.localName==="input"&&r.select()}}/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class I extends R(Ae(It(E))){static get template(){return x`
      <style>
        :host {
          z-index: 200;
          position: fixed;

          /* Despite of what the names say, <vaadin-overlay> is just a container
          for position/sizing/alignment. The actual overlay is the overlay part. */

          /* Default position constraints: the entire viewport. Note: themes can
          override this to introduce gaps between the overlay and the viewport. */
          top: 0;
          right: 0;
          bottom: var(--vaadin-overlay-viewport-bottom);
          left: 0;

          /* Use flexbox alignment for the overlay part. */
          display: flex;
          flex-direction: column; /* makes dropdowns sizing easier */
          /* Align to center by default. */
          align-items: center;
          justify-content: center;

          /* Allow centering when max-width/max-height applies. */
          margin: auto;

          /* The host is not clickable, only the overlay part is. */
          pointer-events: none;

          /* Remove tap highlight on touch devices. */
          -webkit-tap-highlight-color: transparent;

          /* CSS API for host */
          --vaadin-overlay-viewport-bottom: 0;
        }

        :host([hidden]),
        :host(:not([opened]):not([closing])) {
          display: none !important;
        }

        [part='overlay'] {
          -webkit-overflow-scrolling: touch;
          overflow: auto;
          pointer-events: auto;

          /* Prevent overflowing the host in MSIE 11 */
          max-width: 100%;
          box-sizing: border-box;

          -webkit-tap-highlight-color: initial; /* reenable tap highlight inside */
        }

        [part='backdrop'] {
          z-index: -1;
          content: '';
          background: rgba(0, 0, 0, 0.5);
          position: fixed;
          top: 0;
          left: 0;
          bottom: 0;
          right: 0;
          pointer-events: auto;
        }
      </style>

      <div id="backdrop" part="backdrop" hidden$="[[!withBackdrop]]"></div>
      <div part="overlay" id="overlay" tabindex="0">
        <div part="content" id="content">
          <slot></slot>
        </div>
      </div>
    `}static get is(){return"vaadin-overlay"}static get properties(){return{opened:{type:Boolean,notify:!0,observer:"_openedChanged",reflectToAttribute:!0},owner:Element,renderer:Function,withBackdrop:{type:Boolean,value:!1,reflectToAttribute:!0},model:Object,modeless:{type:Boolean,value:!1,reflectToAttribute:!0,observer:"_modelessChanged"},hidden:{type:Boolean,reflectToAttribute:!0,observer:"_hiddenChanged"},focusTrap:{type:Boolean,value:!1},restoreFocusOnClose:{type:Boolean,value:!1},restoreFocusNode:{type:HTMLElement},_mouseDownInside:{type:Boolean},_mouseUpInside:{type:Boolean},_oldOwner:Element,_oldModel:Object,_oldRenderer:Object,_oldOpened:Boolean}}static get observers(){return["_rendererOrDataChanged(renderer, owner, model, opened)"]}static get __attachedInstances(){return Array.from(document.body.children).filter(t=>t instanceof I&&!t.hasAttribute("closing")).sort((t,e)=>t.__zIndex-e.__zIndex||0)}constructor(){super(),this._boundMouseDownListener=this._mouseDownListener.bind(this),this._boundMouseUpListener=this._mouseUpListener.bind(this),this._boundOutsideClickListener=this._outsideClickListener.bind(this),this._boundKeydownListener=this._keydownListener.bind(this),zo&&(this._boundIosResizeListener=()=>this._detectIosNavbar()),this.__focusTrapController=new ha(this)}get _last(){return this===I.__attachedInstances.pop()}ready(){super.ready(),this.addEventListener("click",()=>{}),this.$.backdrop.addEventListener("click",()=>{}),this.addController(this.__focusTrapController),Do(this)}_detectIosNavbar(){if(!this.opened)return;const t=window.innerHeight,s=window.innerWidth>t,o=document.documentElement.clientHeight;s&&o>t?this.style.setProperty("--vaadin-overlay-viewport-bottom",`${o-t}px`):this.style.setProperty("--vaadin-overlay-viewport-bottom","0")}close(t){const e=new CustomEvent("vaadin-overlay-close",{bubbles:!0,cancelable:!0,detail:{sourceEvent:t}});this.dispatchEvent(e),e.defaultPrevented||(this.opened=!1)}connectedCallback(){super.connectedCallback(),this._boundIosResizeListener&&(this._detectIosNavbar(),window.addEventListener("resize",this._boundIosResizeListener))}disconnectedCallback(){super.disconnectedCallback(),this._boundIosResizeListener&&window.removeEventListener("resize",this._boundIosResizeListener)}requestContentUpdate(){this.renderer&&this.renderer.call(this.owner,this,this.owner,this.model)}_mouseDownListener(t){this._mouseDownInside=t.composedPath().indexOf(this.$.overlay)>=0}_mouseUpListener(t){this._mouseUpInside=t.composedPath().indexOf(this.$.overlay)>=0}_shouldCloseOnOutsideClick(t){return this._last}_outsideClickListener(t){if(t.composedPath().includes(this.$.overlay)||this._mouseDownInside||this._mouseUpInside){this._mouseDownInside=!1,this._mouseUpInside=!1;return}if(!this._shouldCloseOnOutsideClick(t))return;const e=new CustomEvent("vaadin-overlay-outside-click",{bubbles:!0,cancelable:!0,detail:{sourceEvent:t}});this.dispatchEvent(e),this.opened&&!e.defaultPrevented&&this.close(t)}_keydownListener(t){if(this._last&&!(this.modeless&&!t.composedPath().includes(this.$.overlay))&&t.key==="Escape"){const e=new CustomEvent("vaadin-overlay-escape-press",{bubbles:!0,cancelable:!0,detail:{sourceEvent:t}});this.dispatchEvent(e),this.opened&&!e.defaultPrevented&&this.close(t)}}_openedChanged(t,e){t?(this.__restoreFocusNode=this._getActiveElement(),this._animatedOpening(),ca(this,()=>{this.focusTrap&&this.__focusTrapController.trapFocus(this.$.overlay);const s=new CustomEvent("vaadin-overlay-open",{bubbles:!0});this.dispatchEvent(s)}),document.addEventListener("keydown",this._boundKeydownListener),this.modeless||this._addGlobalListeners()):e&&(this.focusTrap&&this.__focusTrapController.releaseFocus(),this._animatedClosing(),document.removeEventListener("keydown",this._boundKeydownListener),this.modeless||this._removeGlobalListeners())}_hiddenChanged(t){t&&this.hasAttribute("closing")&&this._flushAnimation("closing")}_shouldAnimate(){const t=getComputedStyle(this),e=t.getPropertyValue("animation-name");return!(t.getPropertyValue("display")==="none")&&e&&e!=="none"}_enqueueAnimation(t,e){const s=`__${t}Handler`,o=n=>{n&&n.target!==this||(e(),this.removeEventListener("animationend",o),delete this[s])};this[s]=o,this.addEventListener("animationend",o)}_flushAnimation(t){const e=`__${t}Handler`;typeof this[e]=="function"&&this[e]()}_animatedOpening(){this.parentNode===document.body&&this.hasAttribute("closing")&&this._flushAnimation("closing"),this._attachOverlay(),this.modeless||this._enterModalState(),this.setAttribute("opening",""),this._shouldAnimate()?this._enqueueAnimation("opening",()=>{this._finishOpening()}):this._finishOpening()}_attachOverlay(){this._placeholder=document.createComment("vaadin-overlay-placeholder"),this.parentNode.insertBefore(this._placeholder,this),document.body.appendChild(this),this.bringToFront()}_finishOpening(){this.removeAttribute("opening")}_finishClosing(){this._detachOverlay(),this.$.overlay.style.removeProperty("pointer-events"),this.removeAttribute("closing"),this.dispatchEvent(new CustomEvent("vaadin-overlay-closed"))}_animatedClosing(){if(this.hasAttribute("opening")&&this._flushAnimation("opening"),this._placeholder){this._exitModalState();const t=this.restoreFocusNode||this.__restoreFocusNode;if(this.restoreFocusOnClose&&t){const e=this._getActiveElement();(e===document.body||this._deepContains(e))&&setTimeout(()=>t.focus()),this.__restoreFocusNode=null}this.setAttribute("closing",""),this.dispatchEvent(new CustomEvent("vaadin-overlay-closing")),this._shouldAnimate()?this._enqueueAnimation("closing",()=>{this._finishClosing()}):this._finishClosing()}}_detachOverlay(){this._placeholder.parentNode.insertBefore(this,this._placeholder),this._placeholder.parentNode.removeChild(this._placeholder)}_modelessChanged(t){t?(this._removeGlobalListeners(),this._exitModalState()):this.opened&&(this._addGlobalListeners(),this._enterModalState())}_addGlobalListeners(){document.addEventListener("mousedown",this._boundMouseDownListener),document.addEventListener("mouseup",this._boundMouseUpListener),document.documentElement.addEventListener("click",this._boundOutsideClickListener,!0)}_enterModalState(){document.body.style.pointerEvents!=="none"&&(this._previousDocumentPointerEvents=document.body.style.pointerEvents,document.body.style.pointerEvents="none"),I.__attachedInstances.forEach(t=>{t!==this&&(t.shadowRoot.querySelector('[part="overlay"]').style.pointerEvents="none")})}_removeGlobalListeners(){document.removeEventListener("mousedown",this._boundMouseDownListener),document.removeEventListener("mouseup",this._boundMouseUpListener),document.documentElement.removeEventListener("click",this._boundOutsideClickListener,!0)}_exitModalState(){this._previousDocumentPointerEvents!==void 0&&(document.body.style.pointerEvents=this._previousDocumentPointerEvents,delete this._previousDocumentPointerEvents);const t=I.__attachedInstances;let e;for(;(e=t.pop())&&!(e!==this&&(e.shadowRoot.querySelector('[part="overlay"]').style.removeProperty("pointer-events"),!e.modeless)););}_rendererOrDataChanged(t,e,s,o){const n=this._oldOwner!==e||this._oldModel!==s;this._oldModel=s,this._oldOwner=e;const r=this._oldRenderer!==t;this._oldRenderer=t;const a=this._oldOpened!==o;this._oldOpened=o,r&&(this.innerHTML="",delete this._$litPart$),o&&t&&(r||a||n)&&this.requestContentUpdate()}_getActiveElement(){let t=document.activeElement||document.body;for(;t.shadowRoot&&t.shadowRoot.activeElement;)t=t.shadowRoot.activeElement;return t}_deepContains(t){if(this.contains(t))return!0;let e=t;const s=t.ownerDocument;for(;e&&e!==s&&e!==this;)e=e.parentNode||e.host;return e===this}bringToFront(){let t="";const e=I.__attachedInstances.filter(s=>s!==this).pop();e&&(t=e.__zIndex+1),this.style.zIndex=t,this.__zIndex=t||parseFloat(getComputedStyle(this).zIndex)}}customElements.define(I.is,I);const ua=g`
  :host {
    --vaadin-tooltip-offset-top: var(--lumo-space-xs);
    --vaadin-tooltip-offset-bottom: var(--lumo-space-xs);
    --vaadin-tooltip-offset-start: var(--lumo-space-xs);
    --vaadin-tooltip-offset-end: var(--lumo-space-xs);
  }

  [part='overlay'] {
    background: var(--lumo-base-color) linear-gradient(var(--lumo-contrast-5pct), var(--lumo-contrast-5pct));
    color: var(--lumo-body-text-color);
    font-size: var(--lumo-font-size-xs);
    line-height: var(--lumo-line-height-s);
  }

  [part='content'] {
    padding: var(--lumo-space-xs) var(--lumo-space-s);
  }
`;y("vaadin-tooltip-overlay",[Me,ua],{moduleId:"lumo-tooltip-overlay"});/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const qt={start:"top",end:"bottom"},jt={start:"left",end:"right"},fi=new ResizeObserver(i=>{setTimeout(()=>{i.forEach(t=>{t.target.__overlay&&t.target.__overlay._updatePosition()})})}),pa=i=>class extends i{static get properties(){return{positionTarget:{type:Object,value:null},horizontalAlign:{type:String,value:"start"},verticalAlign:{type:String,value:"top"},noHorizontalOverlap:{type:Boolean,value:!1},noVerticalOverlap:{type:Boolean,value:!1},requiredVerticalSpace:{type:Number,value:0}}}static get observers(){return["__positionSettingsChanged(horizontalAlign, verticalAlign, noHorizontalOverlap, noVerticalOverlap, requiredVerticalSpace)","__overlayOpenedChanged(opened, positionTarget)"]}constructor(){super(),this.__onScroll=this.__onScroll.bind(this),this._updatePosition=this._updatePosition.bind(this)}connectedCallback(){super.connectedCallback(),this.opened&&this.__addUpdatePositionEventListeners()}disconnectedCallback(){super.disconnectedCallback(),this.__removeUpdatePositionEventListeners()}__addUpdatePositionEventListeners(){window.addEventListener("resize",this._updatePosition),this.__positionTargetAncestorRootNodes=Kn(this.positionTarget),this.__positionTargetAncestorRootNodes.forEach(e=>{e.addEventListener("scroll",this.__onScroll,!0)})}__removeUpdatePositionEventListeners(){window.removeEventListener("resize",this._updatePosition),this.__positionTargetAncestorRootNodes&&(this.__positionTargetAncestorRootNodes.forEach(e=>{e.removeEventListener("scroll",this.__onScroll,!0)}),this.__positionTargetAncestorRootNodes=null)}__overlayOpenedChanged(e,s){if(this.__removeUpdatePositionEventListeners(),s&&(s.__overlay=null,fi.unobserve(s),e&&(this.__addUpdatePositionEventListeners(),s.__overlay=this,fi.observe(s))),e){const o=getComputedStyle(this);this.__margins||(this.__margins={},["top","bottom","left","right"].forEach(n=>{this.__margins[n]=parseInt(o[n],10)})),this.setAttribute("dir",o.direction),this._updatePosition(),requestAnimationFrame(()=>this._updatePosition())}}__positionSettingsChanged(){this._updatePosition()}__onScroll(e){this.contains(e.target)||this._updatePosition()}_updatePosition(){if(!this.positionTarget||!this.opened)return;const e=this.positionTarget.getBoundingClientRect(),s=this.__shouldAlignStartVertically(e);this.style.justifyContent=s?"flex-start":"flex-end";const o=this.__isRTL,n=this.__shouldAlignStartHorizontally(e,o),r=!o&&n||o&&!n;this.style.alignItems=r?"flex-start":"flex-end";const a=this.getBoundingClientRect(),l=this.__calculatePositionInOneDimension(e,a,this.noVerticalOverlap,qt,this,s),d=this.__calculatePositionInOneDimension(e,a,this.noHorizontalOverlap,jt,this,n);Object.assign(this.style,l,d),this.toggleAttribute("bottom-aligned",!s),this.toggleAttribute("top-aligned",s),this.toggleAttribute("end-aligned",!r),this.toggleAttribute("start-aligned",r)}__shouldAlignStartHorizontally(e,s){const o=Math.max(this.__oldContentWidth||0,this.$.overlay.offsetWidth);this.__oldContentWidth=this.$.overlay.offsetWidth;const n=Math.min(window.innerWidth,document.documentElement.clientWidth),r=!s&&this.horizontalAlign==="start"||s&&this.horizontalAlign==="end";return this.__shouldAlignStart(e,o,n,this.__margins,r,this.noHorizontalOverlap,jt)}__shouldAlignStartVertically(e){const s=this.requiredVerticalSpace||Math.max(this.__oldContentHeight||0,this.$.overlay.offsetHeight);this.__oldContentHeight=this.$.overlay.offsetHeight;const o=Math.min(window.innerHeight,document.documentElement.clientHeight),n=this.verticalAlign==="top";return this.__shouldAlignStart(e,s,o,this.__margins,n,this.noVerticalOverlap,qt)}__shouldAlignStart(e,s,o,n,r,a,l){const d=o-e[a?l.end:l.start]-n[l.end],c=e[a?l.start:l.end]-n[l.start],h=r?d:c,p=h>(r?c:d)||h>s;return r===p}__adjustBottomProperty(e,s,o){let n;if(e===s.end){if(s.end===qt.end){const r=Math.min(window.innerHeight,document.documentElement.clientHeight);if(o>r&&this.__oldViewportHeight){const a=this.__oldViewportHeight-r;n=o-a}this.__oldViewportHeight=r}if(s.end===jt.end){const r=Math.min(window.innerWidth,document.documentElement.clientWidth);if(o>r&&this.__oldViewportWidth){const a=this.__oldViewportWidth-r;n=o-a}this.__oldViewportWidth=r}}return n}__calculatePositionInOneDimension(e,s,o,n,r,a){const l=a?n.start:n.end,d=a?n.end:n.start,c=parseFloat(r.style[l]||getComputedStyle(r)[l]),h=this.__adjustBottomProperty(l,n,c),u=s[a?n.start:n.end]-e[o===a?n.end:n.start],p=h?`${h}px`:`${c+u*(a?-1:1)}px`;return{[l]:p,[d]:""}}};/**
 * @license
 * Copyright (c) 2022 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */y("vaadin-tooltip-overlay",g`
    [part='overlay'] {
      max-width: 40ch;
    }

    :host([position^='top'][top-aligned]) [part='overlay'],
    :host([position^='bottom'][top-aligned]) [part='overlay'] {
      margin-top: var(--vaadin-tooltip-offset-top, 0);
    }

    :host([position^='top'][bottom-aligned]) [part='overlay'],
    :host([position^='bottom'][bottom-aligned]) [part='overlay'] {
      margin-bottom: var(--vaadin-tooltip-offset-bottom, 0);
    }

    :host([position^='start'][start-aligned]) [part='overlay'],
    :host([position^='end'][start-aligned]) [part='overlay'] {
      margin-inline-start: var(--vaadin-tooltip-offset-start, 0);
    }

    :host([position^='start'][end-aligned]) [part='overlay'],
    :host([position^='end'][end-aligned]) [part='overlay'] {
      margin-inline-end: var(--vaadin-tooltip-offset-end, 0);
    }
  `,{moduleId:"vaadin-tooltip-overlay-styles"});let X;class _i extends pa(I){static get is(){return"vaadin-tooltip-overlay"}static get template(){return X||(X=super.template.cloneNode(!0),X.content.querySelector('[part~="overlay"]').removeAttribute("tabindex"),X.content.querySelector('[part~="content"]').innerHTML="<slot></slot>"),X}static get properties(){return{position:{type:String,reflectToAttribute:!0}}}ready(){super.ready(),this.owner=this.__dataHost,this.owner._overlayElement=this}requestContentUpdate(){if(super.requestContentUpdate(),this.toggleAttribute("hidden",this.textContent.trim()===""),this.positionTarget&&this.owner){const t=getComputedStyle(this.owner);["top","bottom","start","end"].forEach(e=>{this.style.setProperty(`--vaadin-tooltip-offset-${e}`,t.getPropertyValue(`--vaadin-tooltip-offset-${e}`))})}}_updatePosition(){if(super._updatePosition(),!!this.positionTarget){if(this.position==="bottom"||this.position==="top"){const t=this.positionTarget.getBoundingClientRect(),e=this.$.overlay.getBoundingClientRect(),s=t.width/2-e.width/2;if(this.style.left){const o=e.left+s;o>0&&(this.style.left=`${o}px`)}if(this.style.right){const o=parseFloat(this.style.right)+s;o>0&&(this.style.right=`${o}px`)}}if(this.position==="start"||this.position==="end"){const t=this.positionTarget.getBoundingClientRect(),e=this.$.overlay.getBoundingClientRect(),s=t.height/2-e.height/2;this.style.top=`${e.top+s}px`}}}}customElements.define(_i.is,_i);/**
 * @license
 * Copyright (c) 2022 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const j=500;let $o=j,Uo=j,qo=j;const bt=new Set;let Q=!1,tt=null,et=null;class fa{constructor(t){this.host=t}get openedProp(){return this.host.manual?"opened":"_autoOpened"}get focusDelay(){const t=this.host;return t.focusDelay!=null&&t.focusDelay>0?t.focusDelay:$o}get hoverDelay(){const t=this.host;return t.hoverDelay!=null&&t.hoverDelay>0?t.hoverDelay:Uo}get hideDelay(){const t=this.host;return t.hideDelay!=null&&t.hideDelay>0?t.hideDelay:qo}open(t={immediate:!1}){const{immediate:e,hover:s,focus:o}=t,n=s&&this.hoverDelay>0,r=o&&this.focusDelay>0;!e&&(n||r)&&!this.__closeTimeout?this.__warmupTooltip(r):this.__showTooltip()}close(t){!t&&this.hideDelay>0?this.__scheduleClose():(this.__abortClose(),this._setOpened(!1)),this.__abortWarmUp(),Q&&(this.__abortCooldown(),this.__scheduleCooldown())}_isOpened(){return this.host[this.openedProp]}_setOpened(t){this.host[this.openedProp]=t}__flushClosingTooltips(){bt.forEach(t=>{t._stateController.close(!0),bt.delete(t)})}__showTooltip(){this.__abortClose(),this.__flushClosingTooltips(),this._setOpened(!0),Q=!0,this.__abortWarmUp(),this.__abortCooldown()}__warmupTooltip(t){this._isOpened()||(Q?this.__showTooltip():this.__scheduleWarmUp(t))}__abortClose(){this.__closeTimeout&&(clearTimeout(this.__closeTimeout),this.__closeTimeout=null)}__abortCooldown(){et&&(clearTimeout(et),et=null)}__abortWarmUp(){tt&&(clearTimeout(tt),tt=null)}__scheduleClose(){this._isOpened()&&(bt.add(this.host),this.__closeTimeout=setTimeout(()=>{bt.delete(this.host),this.__closeTimeout=null,this._setOpened(!1)},this.hideDelay))}__scheduleCooldown(){et=setTimeout(()=>{et=null,Q=!1},this.hideDelay)}__scheduleWarmUp(t){const e=t?this.focusDelay:this.hoverDelay;tt=setTimeout(()=>{tt=null,Q=!0,this.__showTooltip()},e)}}class mi extends Lo(Si(F(E))){static get is(){return"vaadin-tooltip"}static get template(){return x`
      <style>
        :host {
          display: none;
        }
      </style>
      <vaadin-tooltip-overlay
        id="[[_uniqueId]]"
        role="tooltip"
        renderer="[[_renderer]]"
        theme$="[[_theme]]"
        opened="[[__computeOpened(manual, opened, _autoOpened, _isConnected)]]"
        position-target="[[target]]"
        position="[[__effectivePosition]]"
        no-horizontal-overlap$="[[__computeNoHorizontalOverlap(__effectivePosition)]]"
        no-vertical-overlap$="[[__computeNoVerticalOverlap(__effectivePosition)]]"
        horizontal-align="[[__computeHorizontalAlign(__effectivePosition)]]"
        vertical-align="[[__computeVerticalAlign(__effectivePosition)]]"
        on-mouseleave="__onOverlayMouseLeave"
        modeless
      ></vaadin-tooltip-overlay>
    `}static get properties(){return{context:{type:Object,value:()=>({})},focusDelay:{type:Number},for:{type:String,observer:"__forChanged"},hideDelay:{type:Number},hoverDelay:{type:Number},manual:{type:Boolean,value:!1},opened:{type:Boolean,value:!1},position:{type:String},shouldShow:{type:Object,value:()=>(t,e)=>!0},target:{type:Object,observer:"__targetChanged"},text:{type:String,observer:"__textChanged"},generator:{type:Object},_autoOpened:{type:Boolean,observer:"__autoOpenedChanged"},_position:{type:String,value:"bottom"},__effectivePosition:{type:String,computed:"__computePosition(position, _position)"},__isTargetHidden:{type:Boolean,value:!1},_isConnected:{type:Boolean}}}static get observers(){return["__generatorChanged(_overlayElement, generator, context)"]}static setDefaultFocusDelay(t){$o=t!=null&&t>=0?t:j}static setDefaultHideDelay(t){qo=t!=null&&t>=0?t:j}static setDefaultHoverDelay(t){Uo=t!=null&&t>=0?t:j}constructor(){super(),this._uniqueId=`vaadin-tooltip-${_o()}`,this._renderer=this.__tooltipRenderer.bind(this),this.__onFocusin=this.__onFocusin.bind(this),this.__onFocusout=this.__onFocusout.bind(this),this.__onMouseDown=this.__onMouseDown.bind(this),this.__onMouseEnter=this.__onMouseEnter.bind(this),this.__onMouseLeave=this.__onMouseLeave.bind(this),this.__onKeyDown=this.__onKeyDown.bind(this),this.__onOverlayOpen=this.__onOverlayOpen.bind(this),this.__targetVisibilityObserver=new IntersectionObserver(t=>{t.forEach(e=>this.__onTargetVisibilityChange(e.isIntersecting))},{threshold:1}),this._stateController=new fa(this)}connectedCallback(){super.connectedCallback(),this._isConnected=!0,document.body.addEventListener("vaadin-overlay-open",this.__onOverlayOpen)}disconnectedCallback(){super.disconnectedCallback(),this._autoOpened&&this._stateController.close(!0),this._isConnected=!1,document.body.removeEventListener("vaadin-overlay-open",this.__onOverlayOpen)}__computeHorizontalAlign(t){return["top-end","bottom-end","start-top","start","start-bottom"].includes(t)?"end":"start"}__computeNoHorizontalOverlap(t){return["start-top","start","start-bottom","end-top","end","end-bottom"].includes(t)}__computeNoVerticalOverlap(t){return["top-start","top-end","top","bottom-start","bottom","bottom-end"].includes(t)}__computeVerticalAlign(t){return["top-start","top-end","top","start-bottom","end-bottom"].includes(t)?"bottom":"top"}__computeOpened(t,e,s,o){return o&&(t?e:s)}__computePosition(t,e){return t||e}__tooltipRenderer(t){t.textContent=typeof this.generator=="function"?this.generator(this.context):this.text}__autoOpenedChanged(t,e){t?document.addEventListener("keydown",this.__onKeyDown,!0):e&&document.removeEventListener("keydown",this.__onKeyDown,!0)}__forChanged(t){t&&(this.__setTargetByIdDebouncer=we.debounce(this.__setTargetByIdDebouncer,ao,()=>this.__setTargetById(t)))}__setTargetById(t){if(!this.isConnected)return;const e=this.getRootNode().getElementById(t);e?this.target=e:console.warn(`No element with id="${t}" found to show tooltip.`)}__targetChanged(t,e){e&&(e.removeEventListener("mouseenter",this.__onMouseEnter),e.removeEventListener("mouseleave",this.__onMouseLeave),e.removeEventListener("focusin",this.__onFocusin),e.removeEventListener("focusout",this.__onFocusout),e.removeEventListener("mousedown",this.__onMouseDown),this.__targetVisibilityObserver.unobserve(e),fo(e,"aria-describedby",this._uniqueId)),t&&(t.addEventListener("mouseenter",this.__onMouseEnter),t.addEventListener("mouseleave",this.__onMouseLeave),t.addEventListener("focusin",this.__onFocusin),t.addEventListener("focusout",this.__onFocusout),t.addEventListener("mousedown",this.__onMouseDown),requestAnimationFrame(()=>{this.__targetVisibilityObserver.observe(t)}),po(t,"aria-describedby",this._uniqueId))}__onFocusin(t){this.manual||Ao()&&(this.target.contains(t.relatedTarget)||this.__isShouldShow()&&(this.__focusInside=!0,!this.__isTargetHidden&&(!this.__hoverInside||!this._autoOpened)&&this._stateController.open({focus:!0})))}__onFocusout(t){this.manual||this.target.contains(t.relatedTarget)||(this.__focusInside=!1,this.__hoverInside||this._stateController.close(!0))}__onKeyDown(t){t.key==="Escape"&&(t.stopPropagation(),this._stateController.close(!0))}__onMouseDown(){this._stateController.close(!0)}__onMouseEnter(){this.manual||this.__isShouldShow()&&(this.__hoverInside||(this.__hoverInside=!0,!this.__isTargetHidden&&(!this.__focusInside||!this._autoOpened)&&this._stateController.open({hover:!0})))}__onMouseLeave(t){t.relatedTarget!==this._overlayElement&&this.__handleMouseLeave()}__onOverlayMouseLeave(t){t.relatedTarget!==this.target&&this.__handleMouseLeave()}__handleMouseLeave(){this.manual||(this.__hoverInside=!1,this.__focusInside||this._stateController.close())}__onOverlayOpen(){this.manual||this._overlayElement.opened&&!this._overlayElement._last&&this._stateController.close(!0)}__onTargetVisibilityChange(t){const e=this.__isTargetHidden;if(this.__isTargetHidden=!t,e&&t&&(this.__focusInside||this.__hoverInside)){this._stateController.open({immediate:!0});return}!t&&this._autoOpened&&this._stateController.close(!0)}__isShouldShow(){return!(typeof this.shouldShow=="function"&&this.shouldShow(this.target,this.context)!==!0)}__textChanged(t,e){this._overlayElement&&(t||e)&&this._overlayElement.requestContentUpdate()}__generatorChanged(t,e,s){t&&((e!==this.__oldTextGenerator||s!==this.__oldContext)&&t.requestContentUpdate(),this.__oldTextGenerator=e,this.__oldContext=s)}}customElements.define(mi.is,mi);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class re extends ue{constructor(t){if(super(t),this.et=Y,t.type!==pe.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(t){if(t===Y||t==null)return this.ft=void 0,this.et=t;if(t===rt)return t;if(typeof t!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(t===this.et)return this.ft;this.et=t;const e=[t];return e.raw=e,this.ft={_$litType$:this.constructor.resultType,strings:e,values:[]}}}re.directiveName="unsafeHTML",re.resultType=1;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class ae extends re{}ae.directiveName="unsafeSVG",ae.resultType=2;const _a=fe(ae);/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */function gi(i){let t=Y;if(i){const e=i.cloneNode(!0);e.removeAttribute("id"),t=ts`${_a(e.outerHTML)}`}return t}function ma(i){return ko(i,Xr.SVG)||i===Y}function ga(i){let t=i==null||i===""?Y:i;return ma(t)||(console.error("[vaadin-icon] Invalid svg passed, please use Lit svg literal."),t=Y),t}function Ll(i,t){const e=ga(i);Ii(e,t)}/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const L={},vi=new Set;function jo(i,t){return(i||"").replace(`${t}:`,"")}function yi(i){return i?i.split(":")[0]||"vaadin":void 0}function bi(i,t){i._icons=[...i.querySelectorAll("[id]")].reduce((e,s)=>{const o=jo(s.id,t);return e[o]=s,e},{})}class le extends F(E){static get template(){return null}static get is(){return"vaadin-iconset"}static get properties(){return{name:{type:String,observer:"__nameChanged"},size:{type:Number,value:24}}}static get attachedIcons(){return vi}static getIconset(t){return L[t]}static getIconSvg(t,e){const s=e||yi(t),o=this.getIconset(s);if(!t||!o)return{svg:gi(null)};const n=jo(t,s),r=o._icons[n];return{svg:gi(r),size:o.size,viewBox:r?r.getAttribute("viewBox"):null}}static register(t,e,s){if(!L[t]){const o=document.createElement("vaadin-iconset");o.appendChild(s.content.cloneNode(!0)),L[t]=o,bi(o,t),o.size=e,o.name=t,o.__nameChanged(t)}}connectedCallback(){super.connectedCallback(),this.style.display="none";const{name:t}=this;L[t]=this,bi(this,t),this.__updateIcons(t)}__updateIcons(t){vi.forEach(e=>{t===yi(e.icon)&&e._applyIcon()})}__nameChanged(t,e){e&&(L[t]=L[e],delete L[e]),t&&this.__updateIcons(t)}}customElements.define(le.is,le);/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Yo=document.createElement("template");Yo.innerHTML=`<svg xmlns="http://www.w3.org/2000/svg"><defs>
<g id="lumo:align-center"><path d="M167 217c0-18 17-33 38-34H795c21 0 38 15 38 34 0 18-17 33-38 33H205C184 250 167 235 167 217z m83 191c0-18 13-33 29-33H721c16 0 29 15 29 33 0 18-13 33-29 34H279C263 442 250 427 250 408zM250 792c0-18 13-33 29-34H721c16 0 29 15 29 34s-13 33-29 33H279C263 825 250 810 250 792z m-83-192c0-18 17-33 38-33H795c21 0 38 15 38 33s-17 33-38 33H205C184 633 167 618 167 600z" fill-rule="evenodd" clip-rule="evenodd"></path></g>
<g id="lumo:align-left"><path d="M167 217c0-18 17-33 38-34H795c21 0 38 15 38 34 0 18-17 33-38 33H205C184 250 167 235 167 217z m0 191c0-18 13-33 28-33H638c16 0 29 15 29 33 0 18-13 33-29 34H195C179 442 167 427 167 408zM167 792c0-18 13-33 28-34H638c16 0 29 15 29 34s-13 33-29 33H195C179 825 167 810 167 792z m0-192c0-18 17-33 38-33H795c21 0 38 15 38 33s-17 33-38 33H205C184 633 167 618 167 600z" fill-rule="evenodd" clip-rule="evenodd"></path></g>
<g id="lumo:align-right"><path d="M167 217c0-18 17-33 38-34H795c21 0 38 15 38 34 0 18-17 33-38 33H205C184 250 167 235 167 217z m166 191c0-18 13-33 29-33H805c16 0 29 15 28 33 0 18-13 33-28 34H362C346 442 333 427 333 408zM333 792c0-18 13-33 29-34H805c16 0 29 15 28 34s-13 33-28 33H362C346 825 333 810 333 792z m-166-192c0-18 17-33 38-33H795c21 0 38 15 38 33s-17 33-38 33H205C184 633 167 618 167 600z" fill-rule="evenodd" clip-rule="evenodd"></path></g>
<g id="lumo:angle-down"><path d="M283 391c-18-16-46-15-63 4-16 18-15 46 3 63l244 224c17 15 43 15 60 0l250-229c18-16 20-45 3-63-16-18-45-20-63-4l-220 203-214-198z"></path></g>
<g id="lumo:angle-left"><path d="M601 710c16 18 15 46-3 63-18 16-46 15-63-4l-224-244c-15-17-15-43 0-59l229-250c16-18 45-20 63-4 18 16 20 45 3 63l-203 220 198 215z"></path></g>
<g id="lumo:angle-right"><path d="M399 275c-16-18-15-46 3-63 18-16 46-15 63 4l224 244c15 17 15 43 0 59l-229 250c-16 18-45 20-63 4-18-16-20-45-3-63l203-220-198-215z"></path></g>
<g id="lumo:angle-up"><path d="M283 635c-18 16-46 15-63-3-16-18-15-46 3-63l244-224c17-15 43-15 60 0l250 229c18 16 20 45 3 63-16 18-45 20-63 3l-220-202L283 635z"></path></g>
<g id="lumo:arrow-down"><path d="M538 646l125-112c15-14 39-12 53 4 14 15 12 39-4 53l-187 166c0 0 0 0 0 0-14 13-36 12-50 0l-187-166c-15-14-17-37-4-53 14-15 37-17 53-4L462 646V312c0-21 17-38 38-37s38 17 37 37v334z"></path></g>
<g id="lumo:arrow-left"><path d="M375 538l111 125c14 15 12 39-3 53-15 14-39 12-53-4l-166-187c0 0 0 0 0 0-13-14-12-36 0-50l166-187c14-15 37-17 53-4 15 14 17 37 3 53L375 463h333c21 0 38 17 38 37 0 21-17 38-38 38h-333z"></path></g>
<g id="lumo:arrow-right"><path d="M625 538h-333c-21 0-38-17-38-38 0-21 17-38 38-37h333l-111-126c-14-15-12-39 3-53 15-14 39-12 53 4l166 187c13 14 13 36 0 50 0 0 0 0 0 0l-166 187c-14 15-37 17-53 4-15-14-17-37-3-53l111-125z"></path></g>
<g id="lumo:arrow-up"><path d="M538 354V688c0 21-17 38-38 37s-38-17-38-38V354l-125 112c-15 14-39 12-53-4-14-15-12-39 4-53l187-166c14-13 36-13 50 0 0 0 0 0 0 0l187 166c15 14 17 37 4 53-14 15-37 17-53 4L538 354z"></path></g>
<g id="lumo:bar-chart"><path d="M175 500h108c28 0 50 22 50 50v233c0 28-22 50-50 50H175c-28 0-50-22-50-50v-233c0-28 22-50 50-50z m33 67c-9 0-17 7-16 16v167c0 9 7 17 16 17h42c9 0 17-7 17-17v-167c0-9-7-17-17-16H208zM446 167h108c28 0 50 22 50 50v566c0 28-22 50-50 50h-108c-28 0-50-22-50-50V217c0-28 22-50 50-50z m33 66c-9 0-17 7-17 17v500c0 9 7 17 17 17h42c9 0 17-7 16-17V250c0-9-7-17-16-17h-42zM717 333h108c28 0 50 22 50 50v400c0 28-22 50-50 50h-108c-28 0-50-22-50-50V383c0-28 22-50 50-50z m33 67c-9 0-17 7-17 17v333c0 9 7 17 17 17h42c9 0 17-7 16-17v-333c0-9-7-17-16-17h-42z"></path></g>
<g id="lumo:bell"><path d="M367 675H292v-258C292 325 366 250 459 250H458V208c0-23 18-42 42-41 23 0 42 18 42 41v42h-1C634 250 708 325 708 417V675h-75v-258c0-51-41-92-91-92h-84C408 325 367 366 367 417V675z m-159 37c0-21 17-38 38-37h508c21 0 37 17 38 37 0 21-17 38-38 38H246C225 750 208 733 208 713z m230 71h125v32c0 17-14 31-32 31h-62c-17 0-32-14-31-31v-32z"></path></g>
<g id="lumo:calendar"><path d="M375 208h250v-20C625 176 634 167 646 167h41C699 167 708 176 708 188V208h74c23 0 41 19 41 42v42C823 315 804 333 782 333H218C196 333 177 315 177 292V250C177 227 196 208 218 208H292v-20C292 176 301 167 313 167h41C366 167 375 176 375 188V208zM229 375h42C283 375 292 384 292 396v41C292 449 282 458 271 458h-42C217 458 208 449 208 437v-41C208 384 218 375 229 375z m125 0h42C408 375 417 384 417 396v41C417 449 407 458 396 458h-42C342 458 333 449 333 437v-41C333 384 343 375 354 375z m125 0h42C533 375 542 384 542 396v41C542 449 532 458 521 458h-42C467 458 458 449 458 437v-41C458 384 468 375 479 375z m-250 125h42C283 500 292 509 292 521v41C292 574 282 583 271 583h-42C217 583 208 574 208 562v-41C208 509 218 500 229 500z m125 0h42C408 500 417 509 417 521v41C417 574 407 583 396 583h-42C342 583 333 574 333 562v-41C333 509 343 500 354 500z m125 0h42c12 0 21 9 21 21v41C542 574 532 583 521 583h-42C467 583 458 574 458 562v-41C458 509 468 500 479 500z m-250 125h42C283 625 292 634 292 646v41C292 699 282 708 271 708h-42C217 708 208 699 208 687v-41C208 634 218 625 229 625z m125 0h42C408 625 417 634 417 646v41C417 699 407 708 396 708h-42C342 708 333 699 333 687v-41C333 634 343 625 354 625z m125 0h42c12 0 21 9 21 21v41C542 699 532 708 521 708h-42C467 708 458 699 458 687v-41C458 634 468 625 479 625z m125-250h42C658 375 667 384 667 396v41C667 449 657 458 646 458h-42C592 458 583 449 583 437v-41C583 384 593 375 604 375z m0 125h42c12 0 21 9 21 21v41C667 574 657 583 646 583h-42C592 583 583 574 583 562v-41C583 509 593 500 604 500z m0 125h42c12 0 21 9 21 21v41C667 699 657 708 646 708h-42C592 708 583 699 583 687v-41C583 634 593 625 604 625z m125 0h42c12 0 21 9 21 21v41C792 699 782 708 771 708h-42C717 708 708 699 708 687v-41C708 634 718 625 729 625z m-500 125h42C283 750 292 759 292 771v41C292 824 282 833 271 833h-42C217 833 208 824 208 812v-41C208 759 218 750 229 750z m125 0h42C408 750 417 759 417 771v41C417 824 407 833 396 833h-42C342 833 333 824 333 812v-41C333 759 343 750 354 750z m125 0h42c12 0 21 9 21 21v41C542 824 532 833 521 833h-42C467 833 458 824 458 812v-41C458 759 468 750 479 750z m125 0h42c12 0 21 9 21 21v41C667 824 657 833 646 833h-42C592 833 583 824 583 812v-41C583 759 593 750 604 750z m125 0h42c12 0 21 9 21 21v41C792 824 782 833 771 833h-42C717 833 708 824 708 812v-41C708 759 718 750 729 750z m0-250h42c12 0 21 9 21 21v41C792 574 782 583 771 583h-42C717 583 708 574 708 562v-41C708 509 718 500 729 500z m0-125h42C783 375 792 384 792 396v41C792 449 782 458 771 458h-42C717 458 708 449 708 437v-41C708 384 718 375 729 375z"></path></g>
<g id="lumo:checkmark"><path d="M318 493c-15-15-38-15-53 0-15 15-15 38 0 53l136 136c15 15 38 15 53 0l323-322c15-15 15-38 0-53-15-15-38-15-54 0l-295 296-110-110z"></path></g>
<g id="lumo:chevron-down"><path d="M533 654l210-199c9-9 9-23 0-32C739 419 733 417 726 417H274C261 417 250 427 250 439c0 6 2 12 7 16l210 199c18 17 48 17 66 0z"></path></g>
<g id="lumo:chevron-left"><path d="M346 533l199 210c9 9 23 9 32 0 4-4 7-10 6-17V274C583 261 573 250 561 250c-6 0-12 2-16 7l-199 210c-17 18-17 48 0 66z"></path></g>
<g id="lumo:chevron-right"><path d="M654 533L455 743c-9 9-23 9-32 0C419 739 417 733 417 726V274C417 261 427 250 439 250c6 0 12 2 16 7l199 210c17 18 17 48 0 66z"></path></g>
<g id="lumo:chevron-up"><path d="M533 346l210 199c9 9 9 23 0 32-4 4-10 7-17 6H274C261 583 250 573 250 561c0-6 2-12 7-16l210-199c18-17 48-17 66 0z"></path></g>
<g id="lumo:clock"><path d="M538 489l85 85c15 15 15 38 0 53-15 15-38 15-53 0l-93-93a38 38 0 0 1-2-2C467 525 462 515 462 504V308c0-21 17-38 38-37 21 0 38 17 37 37v181zM500 833c-184 0-333-149-333-333s149-333 333-333 333 149 333 333-149 333-333 333z m0-68c146 0 265-118 265-265 0-146-118-265-265-265-146 0-265 118-265 265 0 146 118 265 265 265z"></path></g>
<g id="lumo:cog"><path d="M833 458l-81-18c-8-25-17-50-29-75L767 292 708 233l-72 49c-21-12-46-25-75-30L542 167h-84l-19 79c-25 8-50 17-71 30L296 233 233 296l47 69c-12 21-21 46-29 71L167 458v84l84 25c8 25 17 50 29 75L233 708 292 767l76-44c21 12 46 25 75 29L458 833h84l19-81c25-8 50-17 75-29L708 767l59-59-44-66c12-21 25-46 29-75L833 542v-84z m-333 217c-96 0-175-79-175-175 0-96 79-175 175-175 96 0 175 79 175 175 0 96-79 175-175 175z"></path></g>
<g id="lumo:cross"><path d="M445 500l-142-141c-15-15-15-40 0-56 15-15 40-15 56 0L500 445l141-142c15-15 40-15 56 0 15 15 15 40 0 56L555 500l142 141c15 15 15 40 0 56-15 15-40 15-56 0L500 555l-141 142c-15 15-40 15-56 0-15-15-15-40 0-56L445 500z"></path></g>
<g id="lumo:download"><path d="M538 521l125-112c15-14 39-12 53 4 14 15 12 39-4 53l-187 166a38 38 0 0 1 0 0c-14 13-36 12-50 0l-187-166c-15-14-17-37-4-53 14-15 37-17 53-4L462 521V188c0-21 17-38 38-38s38 17 37 38v333zM758 704c0-21 17-38 38-37 21 0 38 17 37 37v92c0 21-17 38-37 37H204c-21 0-38-17-37-37v-92c0-21 17-38 37-37s38 17 38 37v54h516v-54z"></path></g>
<g id="lumo:dropdown"><path d="M317 393c-15-14-39-13-53 3-14 15-13 39 3 53l206 189c14 13 36 13 50 0l210-193c15-14 17-38 3-53-14-15-38-17-53-3l-185 171L317 393z"></path></g>
<g id="lumo:edit"><path d="M673 281l62 56-205 233c-9 10-38 24-85 39a8 8 0 0 1-5 0c-4-1-7-6-6-10l0 0c14-47 25-76 35-86l204-232z m37-42l52-59c15-17 41-18 58-2 17 16 18 42 3 59L772 295l-62-56zM626 208l-67 75h-226C305 283 283 306 283 333v334C283 695 306 717 333 717h334c28 0 50-22 50-50v-185L792 398v269C792 736 736 792 667 792H333C264 792 208 736 208 667V333C208 264 264 208 333 208h293z"></path></g>
<g id="lumo:error"><path d="M500 833c-184 0-333-149-333-333s149-333 333-333 333 149 333 333-149 333-333 333z m0-68c146 0 265-118 265-265 0-146-118-265-265-265-146 0-265 118-265 265 0 146 118 265 265 265zM479 292h42c12 0 21 9 20 20l-11 217c0 8-6 13-13 13h-34c-7 0-13-6-13-13l-11-217C459 301 468 292 479 292zM483 608h34c12 0 21 9 20 21v33c0 12-9 21-20 21h-34c-12 0-21-9-21-21v-33c0-12 9-21 21-21z"></path></g>
<g id="lumo:eye"><path d="M500 750c-187 0-417-163-417-250s230-250 417-250 417 163 417 250-230 250-417 250z m-336-231c20 22 47 46 78 69C322 644 411 678 500 678s178-34 258-90c31-22 59-46 78-69 6-7 12-14 16-19-4-6-9-12-16-19-20-22-47-46-78-69C678 356 589 322 500 322s-178 34-258 90c-31 22-59 46-78 69-6 7-12 14-16 19 4 6 9 12 16 19zM500 646c-81 0-146-65-146-146s65-146 146-146 146 65 146 146-65 146-146 146z m0-75c39 0 71-32 71-71 0-39-32-71-71-71-39 0-71 32-71 71 0 39 32 71 71 71z"></path></g>
<g id="lumo:eye-disabled"><path d="M396 735l60-60c15 2 30 3 44 3 89 0 178-34 258-90 31-22 59-46 78-69 6-7 12-14 16-19-4-6-9-12-16-19-20-22-47-46-78-69-8-5-15-11-23-15l50-51C862 397 917 458 917 500c0 87-230 250-417 250-34 0-69-5-104-15zM215 654C138 603 83 542 83 500c0-87 230-250 417-250 34 0 69 5 104 15l-59 60c-15-2-30-3-45-3-89 0-178 34-258 90-31 22-59 46-78 69-6 7-12 14-16 19 4 6 9 12 16 19 20 22 47 46 78 69 8 5 16 11 24 16L215 654z m271-9l159-159c0 5 1 9 1 14 0 81-65 146-146 146-5 0-9 0-14-1z m-131-131C354 510 354 505 354 500c0-81 65-146 146-146 5 0 10 0 14 1l-159 159z m-167 257L780 179c12-12 32-12 44 0 12 12 12 32 0 44L232 815c-12 12-32 12-44 0s-12-32 0-44z"></path></g>
<g id="lumo:menu"><path d="M167 292c0-23 19-42 41-42h584C815 250 833 268 833 292c0 23-19 42-41 41H208C185 333 167 315 167 292z m0 208c0-23 19-42 41-42h584C815 458 833 477 833 500c0 23-19 42-41 42H208C185 542 167 523 167 500z m0 208c0-23 19-42 41-41h584C815 667 833 685 833 708c0 23-19 42-41 42H208C185 750 167 732 167 708z"></path></g>
<g id="lumo:minus"><path d="M261 461c-22 0-39 18-39 39 0 22 18 39 39 39h478c22 0 39-18 39-39 0-22-18-39-39-39H261z"></path></g>
<g id="lumo:ordered-list"><path d="M138 333V198H136l-43 28v-38l45-31h45V333H138z m-61 128c0-35 27-59 68-59 39 0 66 21 66 53 0 20-11 37-43 64l-29 27v2h74V583H80v-30l55-52c26-24 32-33 33-43 0-13-10-22-24-22-15 0-26 10-26 25v1h-41v-1zM123 759v-31h21c15 0 25-8 25-21 0-13-10-21-25-21-15 0-26 9-26 23h-41c1-34 27-56 68-57 39 0 66 20 66 49 0 20-14 36-33 39v3c24 3 40 19 39 41 0 32-30 54-73 54-41 0-69-22-70-57h43c1 13 11 22 28 22 16 0 27-9 27-22 0-14-10-22-28-22h-21zM333 258c0-18 15-33 34-33h516c18 0 33 15 34 33 0 18-15 33-34 34H367c-18 0-33-15-34-34z m0 250c0-18 15-33 34-33h516c18 0 33 15 34 33s-15 33-34 34H367c-18 0-33-15-34-34z m0 250c0-18 15-33 34-33h516c18 0 33 15 34 33s-15 33-34 34H367c-18 0-33-15-34-34z"></path></g>
<g id="lumo:phone"><path d="M296 208l42-37c17-15 44-13 58 4a42 42 0 0 1 5 7L459 282c12 20 5 45-15 57l-7 4c-17 10-25 30-19 48l20 66a420 420 0 0 0 93 157l41 45c13 14 35 17 51 8l7-5c20-12 45-5 57 16L745 777c12 20 5 45-15 57a42 42 0 0 1-8 4l-52 17c-61 21-129 4-174-43l-50-52c-81-85-141-189-175-302l-24-78c-19-62 0-129 49-172z"></path></g>
<g id="lumo:photo"><path d="M208 167h584c69 0 125 56 125 125v416c0 69-56 125-125 125H208c-69 0-125-56-125-125V292c0-69 56-125 125-125z m584 75H208c-28 0-50 22-50 50v416c0 28 22 50 50 50h584c28 0 50-22 50-50V292c0-28-22-50-50-50zM239 740l167-167c12-12 31-14 45-6l73 43 172-201c13-15 34-18 50-7l95 67v92l-111-78-169 199c-12 14-32 17-47 8l-76-43-111 111H229c2-7 5-13 10-18zM458 427C458 490 407 542 344 542S229 490 229 427c0-63 51-115 115-115S458 364 458 427z m-62 0C396 398 373 375 344 375S292 398 292 427c0 29 23 52 52 52s52-23 52-52z"></path></g>
<g id="lumo:play"><path d="M689 528l-298 175c-13 8-34 8-48 0-6-4-10-9-10-14V311C333 300 348 292 367 292c9 0 17 2 24 5l298 175c26 15 26 40 0 56z"></path></g>
<g id="lumo:plus"><path d="M461 461H261c-22 0-39 18-39 39 0 22 18 39 39 39h200v200c0 22 18 39 39 39 22 0 39-18 39-39v-200h200c22 0 39-18 39-39 0-22-18-39-39-39h-200V261c0-22-18-39-39-39-22 0-39 18-39 39v200z"></path></g>
<g id="lumo:redo"><path d="M290 614C312 523 393 458 491 458c55 0 106 22 144 57l-88 88c-3 3-5 7-5 11 0 8 6 15 15 15l193-5c17 0 31-15 31-32l5-192c0-4-1-8-4-11-6-6-16-6-22 0l-66 67C641 406 570 375 491 375c-136 0-248 90-281 215-1 2-1 5-1 8-8 44 45 68 73 32 4-5 7-11 8-16z"></path></g>
<g id="lumo:reload"><path d="M500 233V137c0-9 7-16 15-16 4 0 8 2 10 4l133 140c12 12 12 32 0 45l-133 140c-6 6-15 6-21 0C502 447 500 443 500 438V308c-117 0-212 95-212 213 0 117 95 212 212 212 117 0 212-95 212-212 0-21 17-38 38-38s38 17 37 38c0 159-129 288-287 287-159 0-288-129-288-287 0-159 129-288 288-288z"></path></g>
<g id="lumo:search"><path d="M662 603l131 131c16 16 16 42 0 59-16 16-43 16-59 0l-131-131C562 691 512 708 458 708c-138 0-250-112-250-250 0-138 112-250 250-250 138 0 250 112 250 250 0 54-17 104-46 145zM458 646c104 0 188-84 188-188S562 271 458 271 271 355 271 458s84 188 187 188z"></path></g>
<g id="lumo:undo"><path d="M710 614C688 523 607 458 509 458c-55 0-106 22-144 57l88 88c3 3 5 7 5 11 0 8-6 15-15 15l-193-5c-17 0-31-15-31-32L214 400c0-4 1-8 4-11 6-6 16-6 22 0l66 67C359 406 430 375 509 375c136 0 248 90 281 215 1 2 1 5 1 8 8 44-45 68-73 32-4-5-7-11-8-16z"></path></g>
<g id="lumo:unordered-list"><path d="M146 325c-42 0-67-26-67-63 0-37 25-63 67-63 42 0 67 26 67 63 0 37-25 63-67 63z m0 250c-42 0-67-26-67-63 0-37 25-63 67-63 42 0 67 26 67 63 0 37-25 63-67 63z m0 250c-42 0-67-26-67-63 0-37 25-63 67-63 42 0 67 26 67 63 0 37-25 63-67 63zM333 258c0-18 15-33 34-33h516c18 0 33 15 34 33 0 18-15 33-34 34H367c-18 0-33-15-34-34z m0 250c0-18 15-33 34-33h516c18 0 33 15 34 33s-15 33-34 34H367c-18 0-33-15-34-34z m0 250c0-18 15-33 34-33h516c18 0 33 15 34 33s-15 33-34 34H367c-18 0-33-15-34-34z"></path></g>
<g id="lumo:upload"><path d="M454 271V604c0 21-17 38-37 38s-38-17-38-38V271L254 382c-15 14-39 12-53-3-14-15-12-39 3-53L391 160c14-13 36-13 51-1 0 0 0 0 0 1l187 166c15 14 17 37 3 53-14 15-37 17-53 3L454 271zM675 704c0-21 17-38 37-37 21 0 38 17 38 37v92c0 21-17 38-38 37H121c-21 0-38-17-38-37v-92c0-21 17-38 38-37s38 17 37 37v54h517v-54z"></path></g>
<g id="lumo:user"><path d="M500 500c-69 0-125-56-125-125s56-125 125-125 125 56 125 125-56 125-125 125z m-292 292c0-115 131-208 292-209s292 93 292 209H208z"></path></g>
</defs></svg>`;le.register("lumo",1e3,Yo);const va=g`
  :host([theme~='margin']) {
    margin: var(--lumo-space-m);
  }

  :host([theme~='padding']) {
    padding: var(--lumo-space-m);
  }

  :host([theme~='spacing-xs']) {
    gap: var(--lumo-space-xs);
  }

  :host([theme~='spacing-s']) {
    gap: var(--lumo-space-s);
  }

  :host([theme~='spacing']) {
    gap: var(--lumo-space-m);
  }

  :host([theme~='spacing-l']) {
    gap: var(--lumo-space-l);
  }

  :host([theme~='spacing-xl']) {
    gap: var(--lumo-space-xl);
  }
`;y("vaadin-vertical-layout",va,{moduleId:"lumo-vertical-layout"});/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class Ci extends F(R(E)){static get template(){return x`
      <style>
        :host {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          box-sizing: border-box;
        }

        :host([hidden]) {
          display: none !important;
        }

        /* Theme variations */
        :host([theme~='margin']) {
          margin: 1em;
        }

        :host([theme~='padding']) {
          padding: 1em;
        }

        :host([theme~='spacing']) {
          gap: 1em;
        }
      </style>

      <slot></slot>
    `}static get is(){return"vaadin-vertical-layout"}}customElements.define(Ci.is,Ci);/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/class ut{constructor(){this._asyncModule=null,this._callback=null,this._timer=null}setConfig(t,e){this._asyncModule=t,this._callback=e,this._timer=this._asyncModule.run(()=>{this._timer=null,pt.delete(this),this._callback()})}cancel(){this.isActive()&&(this._cancelAsync(),pt.delete(this))}_cancelAsync(){this.isActive()&&(this._asyncModule.cancel(this._timer),this._timer=null)}flush(){this.isActive()&&(this.cancel(),this._callback())}isActive(){return this._timer!=null}static debounce(t,e,s){return t instanceof ut?t._cancelAsync():t=new ut,t.setConfig(e,s),t}}let pt=new Set;const ya=function(i){pt.add(i)},ba=function(){const i=Boolean(pt.size);return pt.forEach(t=>{try{t.flush()}catch(e){setTimeout(()=>{throw e})}}),i};/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const Ca=function(){let i,t;do i=window.ShadyDOM&&ShadyDOM.flush(),window.ShadyCSS&&window.ShadyCSS.ScopingShim&&window.ShadyCSS.ScopingShim.flush(),t=ba();while(i||t)};/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/let wi=!1;function wa(){if(Li&&!zi){if(!wi){wi=!0;const i=document.createElement("style");i.textContent="dom-bind,dom-if,dom-repeat{display:none;}",document.head.appendChild(i)}return!0}return!1}/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/function ke(i,t,e,s,o){let n;o&&(n=typeof e=="object"&&e!==null,n&&(s=i.__dataTemp[t]));let r=s!==e&&(s===s||e===e);return n&&r&&(i.__dataTemp[t]=e),r}const ze=v(i=>{class t extends i{_shouldPropertyChange(s,o,n){return ke(this,s,o,n,!0)}}return t}),Dl=v(i=>{class t extends i{static get properties(){return{mutableData:Boolean}}_shouldPropertyChange(s,o,n){return ke(this,s,o,n,this.mutableData)}}return t});ze._mutablePropertyChange=ke;/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/let de=null;function ce(){return de}ce.prototype=Object.create(HTMLTemplateElement.prototype,{constructor:{value:ce,writable:!0}});const Go=Ce(ce),Aa=ze(Go);function xa(i,t){de=i,Object.setPrototypeOf(i,t.prototype),new t,de=null}const Ea=Ce(class{});function Wo(i,t){for(let e=0;e<t.length;e++){let s=t[e];if(Boolean(i)!=Boolean(s.__hideTemplateChildren__))if(s.nodeType===Node.TEXT_NODE)i?(s.__polymerTextContent__=s.textContent,s.textContent=""):s.textContent=s.__polymerTextContent__;else if(s.localName==="slot")if(i)s.__polymerReplaced__=document.createComment("hidden-slot"),_(_(s).parentNode).replaceChild(s.__polymerReplaced__,s);else{const o=s.__polymerReplaced__;o&&_(_(o).parentNode).replaceChild(s,o)}else s.style&&(i?(s.__polymerDisplay__=s.style.display,s.style.display="none"):s.style.display=s.__polymerDisplay__);s.__hideTemplateChildren__=i,s._showHideChildren&&s._showHideChildren(i)}}class z extends Ea{constructor(t){super(),this._configureProperties(t),this.root=this._stampTemplate(this.__dataHost);let e=[];this.children=e;for(let o=this.root.firstChild;o;o=o.nextSibling)e.push(o),o.__templatizeInstance=this;this.__templatizeOwner&&this.__templatizeOwner.__hideTemplateChildren__&&this._showHideChildren(!0);let s=this.__templatizeOptions;(t&&s.instanceProps||!s.instanceProps)&&this._enableProperties()}_configureProperties(t){if(this.__templatizeOptions.forwardHostProp)for(let s in this.__hostProps)this._setPendingProperty(s,this.__dataHost["_host_"+s]);for(let s in t)this._setPendingProperty(s,t[s])}forwardHostProp(t,e){this._setPendingPropertyOrPath(t,e,!1,!0)&&this.__dataHost._enqueueClient(this)}_addEventListenerToNode(t,e,s){if(this._methodHost&&this.__templatizeOptions.parentModel)this._methodHost._addEventListenerToNode(t,e,o=>{o.model=this,s(o)});else{let o=this.__dataHost.__dataHost;o&&o._addEventListenerToNode(t,e,s)}}_showHideChildren(t){Wo(t,this.children)}_setUnmanagedPropertyToNode(t,e,s){t.__hideTemplateChildren__&&t.nodeType==Node.TEXT_NODE&&e=="textContent"?t.__polymerTextContent__=s:super._setUnmanagedPropertyToNode(t,e,s)}get parentModel(){let t=this.__parentModel;if(!t){let e;t=this;do t=t.__dataHost.__dataHost;while((e=t.__templatizeOptions)&&!e.parentModel);this.__parentModel=t}return t}dispatchEvent(t){return!0}}z.prototype.__dataHost;z.prototype.__templatizeOptions;z.prototype._methodHost;z.prototype.__templatizeOwner;z.prototype.__hostProps;const Pa=ze(z);function Ai(i){let t=i.__dataHost;return t&&t._methodHost||t}function Ta(i,t,e){let s=e.mutableData?Pa:z;he.mixin&&(s=he.mixin(s));let o=class extends s{};return o.prototype.__templatizeOptions=e,o.prototype._bindTemplate(i),Sa(o,i,t,e),o}function Na(i,t,e,s){let o=e.forwardHostProp;if(o&&t.hasHostProps){const n=i.localName=="template";let r=t.templatizeTemplateClass;if(!r){if(n){let l=e.mutableData?Aa:Go;class d extends l{}r=t.templatizeTemplateClass=d}else{const l=i.constructor;class d extends l{}r=t.templatizeTemplateClass=d}let a=t.hostProps;for(let l in a)r.prototype._addPropertyEffect("_host_"+l,r.prototype.PROPERTY_EFFECT_TYPES.PROPAGATE,{fn:Oa(l,o)}),r.prototype._createNotifyingProperty("_host_"+l);Di&&s&&ka(t,e,s)}if(i.__dataProto&&Object.assign(i.__data,i.__dataProto),n)xa(i,r),i.__dataTemp={},i.__dataPending=null,i.__dataOld=null,i._enableProperties();else{Object.setPrototypeOf(i,r.prototype);const a=t.hostProps;for(let l in a)if(l="_host_"+l,l in i){const d=i[l];delete i[l],i.__data[l]=d}}}}function Oa(i,t){return function(s,o,n){t.call(s.__templatizeOwner,o.substring(6),n[o])}}function Sa(i,t,e,s){let o=e.hostProps||{};for(let n in s.instanceProps){delete o[n];let r=s.notifyInstanceProp;r&&i.prototype._addPropertyEffect(n,i.prototype.PROPERTY_EFFECT_TYPES.NOTIFY,{fn:Ia(n,r)})}if(s.forwardHostProp&&t.__dataHost)for(let n in o)e.hasHostProps||(e.hasHostProps=!0),i.prototype._addPropertyEffect(n,i.prototype.PROPERTY_EFFECT_TYPES.NOTIFY,{fn:Ma()})}function Ia(i,t){return function(s,o,n){t.call(s.__templatizeOwner,s,o,n[o])}}function Ma(){return function(t,e,s){t.__dataHost._setPendingPropertyOrPath("_host_"+e,s[e],!0,!0)}}function he(i,t,e){if(at&&!Ai(i))throw new Error("strictTemplatePolicy: template owner not trusted");if(e=e||{},i.__templatizeOwner)throw new Error("A <template> can only be templatized once");i.__templatizeOwner=t;let o=(t?t.constructor:z)._parseTemplate(i),n=o.templatizeInstanceClass;n||(n=Ta(i,o,e),o.templatizeInstanceClass=n);const r=Ai(i);Na(i,o,e,r);let a=class extends n{};return a.prototype._methodHost=r,a.prototype.__dataHost=i,a.prototype.__templatizeOwner=t,a.prototype.__hostProps=o.hostProps,a=a,a}function ka(i,t,e){const s=e.constructor._properties,{propertyEffects:o}=i,{instanceProps:n}=t;for(let r in o)if(!s[r]&&!(n&&n[r])){const a=o[r];for(let l=0;l<a.length;l++){const{part:d}=a[l].info;if(!(d.signature&&d.signature.static)){console.warn(`Property '${r}' used in template but not declared in 'properties'; attribute will not be observed.`);break}}}}function Rl(i,t){let e;for(;t;)if(e=t.__dataHost?t:t.__templatizeInstance)if(e.__dataHost!=i)t=e.__dataHost;else return e;else t=_(t).parentNode;return null}/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/class Ko extends E{static get is(){return"dom-if"}static get template(){return null}static get properties(){return{if:{type:Boolean,observer:"__debounceRender"},restamp:{type:Boolean,observer:"__debounceRender"},notifyDomChange:{type:Boolean}}}constructor(){super(),this.__renderDebouncer=null,this._lastIf=!1,this.__hideTemplateChildren__=!1,this.__template,this._templateInfo}__debounceRender(){this.__renderDebouncer=ut.debounce(this.__renderDebouncer,ye,()=>this.__render()),ya(this.__renderDebouncer)}disconnectedCallback(){super.disconnectedCallback();const t=_(this).parentNode;(!t||t.nodeType==Node.DOCUMENT_FRAGMENT_NODE&&!_(t).host)&&this.__teardownInstance()}connectedCallback(){super.connectedCallback(),wa()||(this.style.display="none"),this.if&&this.__debounceRender()}__ensureTemplate(){if(!this.__template){const t=this;let e=t._templateInfo?t:_(t).querySelector("template");if(!e){let s=new MutationObserver(()=>{if(_(this).querySelector("template"))s.disconnect(),this.__render();else throw new Error("dom-if requires a <template> child")});return s.observe(this,{childList:!0}),!1}this.__template=e}return!0}__ensureInstance(){let t=_(this).parentNode;if(this.__hasInstance()){let e=this.__getInstanceNodes();if(e&&e.length&&_(this).previousSibling!==e[e.length-1])for(let o=0,n;o<e.length&&(n=e[o]);o++)_(t).insertBefore(n,this)}else{if(!t||!this.__ensureTemplate())return!1;this.__createAndInsertInstance(t)}return!0}render(){Ca()}__render(){if(this.if){if(!this.__ensureInstance())return}else this.restamp&&this.__teardownInstance();this._showHideChildren(),(!us||this.notifyDomChange)&&this.if!=this._lastIf&&(this.dispatchEvent(new CustomEvent("dom-change",{bubbles:!0,composed:!0})),this._lastIf=this.if)}__hasInstance(){}__getInstanceNodes(){}__createAndInsertInstance(t){}__teardownInstance(){}_showHideChildren(){}}class za extends Ko{constructor(){super(),this.__instance=null,this.__syncInfo=null}__hasInstance(){return Boolean(this.__instance)}__getInstanceNodes(){return this.__instance.templateInfo.childNodes}__createAndInsertInstance(t){const e=this.__dataHost||this;if(at&&!this.__dataHost)throw new Error("strictTemplatePolicy: template owner not trusted");const s=e._bindTemplate(this.__template,!0);s.runEffects=(o,n,r)=>{let a=this.__syncInfo;if(this.if)a&&(this.__syncInfo=null,this._showHideChildren(),n=Object.assign(a.changedProps,n)),o(n,r);else if(this.__instance)if(a||(a=this.__syncInfo={runEffects:o,changedProps:{}}),r)for(const l in n){const d=M(l);a.changedProps[d]=this.__dataHost[d]}else Object.assign(a.changedProps,n)},this.__instance=e._stampTemplate(this.__template,s),_(t).insertBefore(this.__instance,this)}__syncHostProperties(){const t=this.__syncInfo;t&&(this.__syncInfo=null,t.runEffects(t.changedProps,!1))}__teardownInstance(){const t=this.__dataHost||this;this.__instance&&(t._removeBoundDom(this.__instance),this.__instance=null,this.__syncInfo=null)}_showHideChildren(){const t=this.__hideTemplateChildren__||!this.if;this.__instance&&Boolean(this.__instance.__hidden)!==t&&(this.__instance.__hidden=t,Wo(t,this.__instance.templateInfo.childNodes)),t||this.__syncHostProperties()}}class La extends Ko{constructor(){super(),this.__ctor=null,this.__instance=null,this.__invalidProps=null}__hasInstance(){return Boolean(this.__instance)}__getInstanceNodes(){return this.__instance.children}__createAndInsertInstance(t){this.__ctor||(this.__ctor=he(this.__template,this,{mutableData:!0,forwardHostProp:function(e,s){this.__instance&&(this.if?this.__instance.forwardHostProp(e,s):(this.__invalidProps=this.__invalidProps||Object.create(null),this.__invalidProps[M(e)]=!0))}})),this.__instance=new this.__ctor,_(t).insertBefore(this.__instance.root,this)}__teardownInstance(){if(this.__instance){let t=this.__instance.children;if(t&&t.length){let e=_(t[0]).parentNode;if(e){e=_(e);for(let s=0,o;s<t.length&&(o=t[s]);s++)e.removeChild(o)}}this.__invalidProps=null,this.__instance=null}}__syncHostProperties(){let t=this.__invalidProps;if(t){this.__invalidProps=null;for(let e in t)this.__instance._setPendingProperty(e,this.__dataHost[e]);this.__instance._flushProperties()}}_showHideChildren(){const t=this.__hideTemplateChildren__||!this.if;this.__instance&&Boolean(this.__instance.__hidden)!==t&&(this.__instance.__hidden=t,this.__instance._showHideChildren(t)),t||this.__syncHostProperties()}}const xi=Hi?za:La;customElements.define(xi.is,xi);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const nt=(i,t)=>{var e,s;const o=i._$AN;if(o===void 0)return!1;for(const n of o)(s=(e=n)._$AO)===null||s===void 0||s.call(e,t,!1),nt(n,t);return!0},Ot=i=>{let t,e;do{if((t=i._$AM)===void 0)break;e=t._$AN,e.delete(i),i=t}while((e==null?void 0:e.size)===0)},Jo=i=>{for(let t;t=i._$AM;i=t){let e=t._$AN;if(e===void 0)t._$AN=e=new Set;else if(e.has(i))break;e.add(i),Ra(t)}};function Da(i){this._$AN!==void 0?(Ot(this),this._$AM=i,Jo(this)):this._$AM=i}function Ha(i,t=!1,e=0){const s=this._$AH,o=this._$AN;if(o!==void 0&&o.size!==0)if(t)if(Array.isArray(s))for(let n=e;n<s.length;n++)nt(s[n],!1),Ot(s[n]);else s!=null&&(nt(s,!1),Ot(s));else nt(this,i)}const Ra=i=>{var t,e,s,o;i.type==pe.CHILD&&((t=(s=i)._$AP)!==null&&t!==void 0||(s._$AP=Ha),(e=(o=i)._$AQ)!==null&&e!==void 0||(o._$AQ=Da))};let Fa=class extends ue{constructor(){super(...arguments),this._$AN=void 0}_$AT(t,e,s){super._$AT(t,e,s),Jo(this),this.isConnected=t._$AU}_$AO(t,e=!0){var s,o;t!==this.isConnected&&(this.isConnected=t,t?(s=this.reconnected)===null||s===void 0||s.call(this):(o=this.disconnected)===null||o===void 0||o.call(this)),e&&(nt(this,t),Ot(this))}setValue(t){if(Qr(this._$Ct))this._$Ct._$AI(t,this);else{const e=[...this._$Ct._$AH];e[this._$Ci]=t,this._$Ct._$AI(e,this,0)}}disconnected(){}reconnected(){}};/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class Ba{constructor(t){this.G=t}disconnect(){this.G=void 0}reconnect(t){this.G=t}deref(){return this.G}}class Va{constructor(){this.Y=void 0,this.Z=void 0}get(){return this.Y}pause(){var t;(t=this.Y)!==null&&t!==void 0||(this.Y=new Promise(e=>this.Z=e))}resume(){var t;(t=this.Z)===null||t===void 0||t.call(this),this.Y=this.Z=void 0}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ei=i=>!Zr(i)&&typeof i.then=="function",Pi=1073741823;class $a extends Fa{constructor(){super(...arguments),this._$C_t=Pi,this._$Cwt=[],this._$Cq=new Ba(this),this._$CK=new Va}render(...t){var e;return(e=t.find(s=>!Ei(s)))!==null&&e!==void 0?e:rt}update(t,e){const s=this._$Cwt;let o=s.length;this._$Cwt=e;const n=this._$Cq,r=this._$CK;this.isConnected||this.disconnected();for(let a=0;a<e.length&&!(a>this._$C_t);a++){const l=e[a];if(!Ei(l))return this._$C_t=a,l;a<o&&l===s[a]||(this._$C_t=Pi,o=0,Promise.resolve(l).then(async d=>{for(;r.get();)await r.get();const c=n.deref();if(c!==void 0){const h=c._$Cwt.indexOf(l);h>-1&&h<c._$C_t&&(c._$C_t=h,c.setValue(d))}}))}return rt}disconnected(){this._$Cq.disconnect(),this._$CK.pause()}reconnected(){this._$Cq.reconnect(this),this._$CK.resume()}}const Ua=fe($a);class qa extends ue{constructor(t){if(super(t),t.type!==pe.CHILD)throw new Error(`${this.constructor.directiveName}() can only be used in child bindings`)}update(t,[e,s]){const{parentNode:o,startNode:n}=t,r=this.getNewNode(e,s),a=this.getOldNode(t);return a===r?rt:(a&&r?o.replaceChild(r,a):a?o.removeChild(a):r&&n.after(r),rt)}getNewNode(t,e){return window.Vaadin.Flow.clients[t].getByNodeId(e)}getOldNode(t){const{startNode:e,endNode:s}=t;if(e.nextSibling!==s)return e.nextSibling}}const ja=fe(qa),Ya=(i,t)=>Ua(new Promise(e=>{e(ja(i,t))}));function Ga(i,t){return window.Vaadin.Flow.clients[i].getByNodeId(t)}function Wa(i,t){return Ya(i,t)}function Ka(i,t,e){e.textContent="",e.append(...t.map(s=>Ga(i,s)))}function Ja(i){const t=i.insertBefore;i.insertBefore=function(e,s){return s&&s.parentNode===this?t.call(this,e,s):t.call(this,e,null)}}window.Vaadin||(window.Vaadin={});var Oi;(Oi=window.Vaadin).FlowComponentHost||(Oi.FlowComponentHost={patchVirtualContainer:Ja,getNode:Wa,setChildNodes:Ka});class Ti extends E{static get template(){return x`
      <style>
        :host {
          animation: 1ms flow-component-renderer-appear;
        }

        @keyframes flow-component-renderer-appear {
          to {
            opacity: 1;
          }
        }
      </style>
      <slot></slot>
    `}static get is(){return"flow-component-renderer"}static get properties(){return{nodeid:Number,appid:String}}static get observers(){return["_attachRenderedComponentIfAble(appid, nodeid)"]}ready(){super.ready(),this.addEventListener("click",function(t){this.firstChild&&typeof this.firstChild.click=="function"&&t.target===this&&(t.stopPropagation(),this.firstChild.click())}),this.addEventListener("animationend",this._onAnimationEnd)}_asyncAttachRenderedComponentIfAble(){this._debouncer=ut.debounce(this._debouncer,Ps,()=>this._attachRenderedComponentIfAble())}_attachRenderedComponentIfAble(){if(!this.nodeid||!this.appid)return;const t=this._getRenderedComponent();this.firstChild?t?this.firstChild!==t?(this.replaceChild(t,this.firstChild),this._defineFocusTarget(),this.onComponentRendered()):(this._defineFocusTarget(),this.onComponentRendered()):this._asyncAttachRenderedComponentIfAble():t?(this.appendChild(t),this._defineFocusTarget(),this.onComponentRendered()):this._asyncAttachRenderedComponentIfAble()}_getRenderedComponent(){try{return window.Vaadin.Flow.clients[this.appid].getByNodeId(this.nodeid)}catch(t){console.error("Could not get node %s from app %s",this.nodeid,this.appid),console.error(t)}return null}onComponentRendered(){}_defineFocusTarget(){var t=this._getFirstFocusableDescendant(this.firstChild);t!==null&&t.setAttribute("focus-target","true")}_getFirstFocusableDescendant(t){if(this._isFocusable(t))return t;if(t.hasAttribute&&(t.hasAttribute("disabled")||t.hasAttribute("hidden"))||!t.children)return null;for(var e=0;e<t.children.length;e++){var s=this._getFirstFocusableDescendant(t.children[e]);if(s!==null)return s}return null}_isFocusable(t){return t.hasAttribute&&typeof t.hasAttribute=="function"&&(t.hasAttribute("disabled")||t.hasAttribute("hidden"))?!1:t.tabIndex===0}_onAnimationEnd(t){t.animationName.indexOf("flow-component-renderer-appear")===0&&this._attachRenderedComponentIfAble()}}window.customElements.define(Ti.is,Ti);const Zo=document.createElement("template");Zo.innerHTML=`<style>
  ${es.cssText}
  ${is.cssText}
</style>`;document.head.appendChild(Zo.content);const Za=function(i,t=!1){const e=document.createElement("template");e.innerHTML=i,document.head[t?"insertBefore":"appendChild"](e.content,document.head.firstChild)};let _t;const Ni=document.getElementsByTagName("script");for(let i=0;i<Ni.length;i++){const t=Ni[i];if(t.getAttribute("type")=="module"&&t.getAttribute("data-app-id")&&!t["vaadin-bundle"]){_t=t;break}}if(!_t)throw new Error("Could not find the bundle script to identify the application id");_t["vaadin-bundle"]=!0;window.Vaadin.Flow.fallbacks||(window.Vaadin.Flow.fallbacks={});const Xo=window.Vaadin.Flow.fallbacks;Xo[_t.getAttribute("data-app-id")]={};Xo[_t.getAttribute("data-app-id")].loadFallback=function(){return os(()=>import("./generated-flow-imports-fallback-41d70f2a.js"),["./generated-flow-imports-fallback-41d70f2a.js","./indexhtml-e434339c.js"],import.meta.url)};const Bl=Object.freeze(Object.defineProperty({__proto__:null,addCssBlock:Za},Symbol.toStringTag,{value:"Module"}));export{xr as $,mr as A,kl as B,It as C,Fr as D,F as E,Wn as F,Nl as G,hl as H,Io as I,ha as J,Oe as K,Hr as L,ca as M,ki as N,se as O,E as P,Jn as Q,Po as R,Ie as S,mo as T,Me as U,pa as V,I as W,Lo as X,Mt as Y,Gn as Z,So as _,go as a,Rr as a0,kt as a1,_o as a2,Br as a3,qr as a4,Or as a5,Te as a6,Pt as a7,ft as a8,ll as a9,Dl as aa,us as ab,wa as ac,_ as ad,he as ae,Qa as af,At as ag,ut as ah,tl as ai,ye as aj,ya as ak,Ca as al,Rl as am,_r as an,Ar as ao,le as ap,ga as aq,Ll as ar,Oo as as,jr as at,li as au,Tr as av,Nr as aw,el as ax,mi as ay,Bl as az,Ir as b,Sr as c,v as d,Yr as e,po as f,we as g,x as h,br as i,ol as j,Ae as k,Hn as l,ao as m,sl as n,Rn as o,Do as p,Sl as q,fo as r,ni as s,Dn as t,Il as u,Ao as v,To as w,zo as x,Ol as y,Tl as z};
