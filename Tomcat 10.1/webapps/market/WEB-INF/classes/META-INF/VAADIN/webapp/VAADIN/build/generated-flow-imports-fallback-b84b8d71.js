import{r as O,i as Xf,E as st,T as G,C as Et,P as z,h as L,F as zm,b as Gm,a as xe,c as an,d as Zf,B as Qf,e as Ym,f as Oe,g as Ht,j as on,o as ru,m as iu,l as nu,L as sn,D as Jt,I as ln,k as $o,O as ur,n as Ae,p as Kf,R as un,q as No,S as pt,s as Jf,t as Bo,u as zo,v as hn,w as Go,x as Um,y as jm,z as Wm,A as Vm,K as Yo,G as au,H as cn,J as qm,M as rh,N as Hm,Q as Ti,U as Xm,V as Zm,W as Qm,X as tp,Y as ep,Z as Km,_ as Jm,$ as rp,a0 as t_,a1 as ce,a2 as e_,a3 as ir,a4 as Uo,a5 as ou,a6 as r_,a7 as su,a8 as i_,a9 as n_,aa as lu,ab as jo,ac as dn,ad as fn,ae as ip,af as np,ag as ap,ah as op,ai as sp,aj as lp,ak as a_,al as o_,am as s_,an as uu,ao as hu,ap as l_,aq as u_,ar as h_,as as c_,at as d_,au as f_,av as up,aw as p_,ax as v_,ay as m_,az as hp,aA as cp,aB as __,aC as g_,aD as dp,aE as y_,aF as cu,aG as b_,aH as w_,aI as x_,aJ as A_,aK as fp,aL as E_,aM as C_,aN as T_,aO as M_,aP as O_,aQ as S_,aR as I_,aS as ls}from"./generated-flow-imports-bf369a14.js";import{i as P,B as du,x as ri,A as R_}from"./indexhtml-764cd8f8.js";O("vaadin-app-layout",P`
    [part='navbar'],
    [part='drawer'] {
      background-color: var(--lumo-base-color);
      background-clip: padding-box;
    }

    [part='navbar'] {
      min-height: var(--lumo-size-xl);
      border-bottom: 1px solid var(--lumo-contrast-10pct);
    }

    [part='navbar'][bottom] {
      border-bottom: none;
      border-top: 1px solid var(--lumo-contrast-10pct);
    }

    [part='drawer'] {
      border-inline-end: 1px solid var(--lumo-contrast-10pct);
    }

    :host([overlay]) [part='drawer'] {
      border-inline-end: none;
      box-shadow: var(--lumo-box-shadow-s);
    }

    :host([primary-section='navbar']) [part='navbar'] {
      border: none;
      background-image: linear-gradient(var(--lumo-contrast-5pct), var(--lumo-contrast-5pct));
    }

    :host([primary-section='drawer']:not([overlay])) [part='drawer'] {
      background-image: linear-gradient(var(--lumo-shade-5pct), var(--lumo-shade-5pct));
    }

    [part='backdrop'] {
      background-color: var(--lumo-shade-20pct);
      opacity: 1;
    }

    [part] ::slotted(h2),
    [part] ::slotted(h3),
    [part] ::slotted(h4) {
      margin-top: var(--lumo-space-xs) !important;
      margin-bottom: var(--lumo-space-xs) !important;
    }
  `,{moduleId:"lumo-app-layout"});const pp=document.createElement("template");pp.innerHTML=`
  <style>
    /* Use units so that the values can be used in calc() */
    html {
      --safe-area-inset-top: env(safe-area-inset-top, 0px);
      --safe-area-inset-right: env(safe-area-inset-right, 0px);
      --safe-area-inset-bottom: env(safe-area-inset-bottom, 0px);
      --safe-area-inset-left: env(safe-area-inset-left, 0px);
    }
  </style>
`;document.head.appendChild(pp.content);/**
 * @license
 * Copyright (c) 2018 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */function vp(){if(Xf){const r=window.innerHeight,e=window.innerWidth>r,i=document.documentElement.clientHeight;e&&i>r?document.documentElement.style.setProperty("--vaadin-viewport-offset-bottom",`${i-r}px`):document.documentElement.style.setProperty("--vaadin-viewport-offset-bottom","")}}vp();window.addEventListener("resize",vp);/**
 * @license
 * Copyright (c) 2018 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class ih extends st(G(Et(z))){static get template(){return L`
      <style>
        :host {
          display: block;
          box-sizing: border-box;
          height: 100%;
          --vaadin-app-layout-transition: 200ms;
          transition: padding var(--vaadin-app-layout-transition);
          --vaadin-app-layout-touch-optimized: false;
          --vaadin-app-layout-navbar-offset-top: var(--_vaadin-app-layout-navbar-offset-size);
          --vaadin-app-layout-navbar-offset-bottom: var(--_vaadin-app-layout-navbar-offset-size-bottom);
          padding-top: var(--vaadin-app-layout-navbar-offset-top);
          padding-bottom: var(--vaadin-app-layout-navbar-offset-bottom);
          padding-left: var(--vaadin-app-layout-navbar-offset-left);
        }

        :host([dir='rtl']) {
          padding-left: 0;
          padding-right: var(--vaadin-app-layout-navbar-offset-left);
        }

        :host([hidden]),
        [hidden] {
          display: none !important;
        }

        :host([no-anim]) {
          --vaadin-app-layout-transition: none !important;
        }

        :host([drawer-opened]) {
          --vaadin-app-layout-drawer-offset-left: var(--_vaadin-app-layout-drawer-offset-size);
        }

        :host([overlay]) {
          --vaadin-app-layout-drawer-offset-left: 0;
          --vaadin-app-layout-navbar-offset-left: 0;
        }

        :host(:not([no-scroll])) [content] {
          overflow: auto;
        }

        [content] {
          height: 100%;
        }

        @media (pointer: coarse) and (max-width: 800px) and (min-height: 500px) {
          :host {
            --vaadin-app-layout-touch-optimized: true;
          }
        }

        [part='navbar'] {
          position: fixed;
          display: flex;
          align-items: center;
          top: 0;
          right: 0;
          left: 0;
          transition: left var(--vaadin-app-layout-transition);
          padding-top: var(--safe-area-inset-top);
          padding-left: var(--safe-area-inset-left);
          padding-right: var(--safe-area-inset-right);
          z-index: 1;
        }

        :host(:not([dir='rtl'])[primary-section='drawer'][drawer-opened]:not([overlay])) [part='navbar'] {
          left: var(--vaadin-app-layout-drawer-offset-left, 0);
        }

        :host([dir='rtl'][primary-section='drawer'][drawer-opened]:not([overlay])) [part='navbar'] {
          right: var(--vaadin-app-layout-drawer-offset-left, 0);
        }

        :host([primary-section='drawer']) [part='drawer'] {
          top: 0;
        }

        [part='navbar'][bottom] {
          top: auto;
          bottom: 0;
          padding-bottom: var(--safe-area-inset-bottom);
        }

        [part='drawer'] {
          overflow: auto;
          position: fixed;
          top: var(--vaadin-app-layout-navbar-offset-top, 0);
          right: auto;
          bottom: var(--vaadin-app-layout-navbar-offset-bottom, var(--vaadin-viewport-offset-bottom, 0));
          left: var(--vaadin-app-layout-navbar-offset-left, 0);
          transition: transform var(--vaadin-app-layout-transition), visibility var(--vaadin-app-layout-transition);
          transform: translateX(-100%);
          max-width: 90%;
          width: 16em;
          box-sizing: border-box;
          padding: var(--safe-area-inset-top) 0 var(--safe-area-inset-bottom) var(--safe-area-inset-left);
          outline: none;
          /* The drawer should be inaccessible by the tabbing navigation when it is closed. */
          visibility: hidden;
          display: flex;
          flex-direction: column;
        }

        :host([drawer-opened]) [part='drawer'] {
          /* The drawer should be accessible by the tabbing navigation when it is opened. */
          visibility: visible;
          transform: translateX(0%);
          touch-action: manipulation;
        }

        [part='backdrop'] {
          background-color: #000;
          opacity: 0.3;
        }

        :host(:not([drawer-opened])) [part='backdrop'] {
          opacity: 0;
        }

        :host([overlay]) [part='backdrop'] {
          position: fixed;
          top: 0;
          right: 0;
          bottom: 0;
          left: 0;
          pointer-events: none;
          transition: opacity var(--vaadin-app-layout-transition);
          -webkit-tap-highlight-color: transparent;
        }

        :host([overlay]) [part='drawer'] {
          top: 0;
          bottom: 0;
        }

        :host([overlay]) [part='drawer'],
        :host([overlay]) [part='backdrop'] {
          z-index: 2;
        }

        :host([drawer-opened][overlay]) [part='backdrop'] {
          pointer-events: auto;
          touch-action: manipulation;
        }

        :host([dir='rtl']) [part='drawer'] {
          left: auto;
          right: var(--vaadin-app-layout-navbar-offset-start, 0);
          transform: translateX(100%);
        }

        :host([dir='rtl']) [part='navbar'] {
          transition: right var(--vaadin-app-layout-transition);
        }

        :host([dir='rtl'][drawer-opened]) [part='drawer'] {
          transform: translateX(0%);
        }

        :host(:not([dir='rtl'])[drawer-opened]:not([overlay])) {
          padding-left: var(--vaadin-app-layout-drawer-offset-left);
        }

        :host([dir='rtl'][drawer-opened]:not([overlay])) {
          padding-right: var(--vaadin-app-layout-drawer-offset-left);
        }

        @media (max-width: 800px), (max-height: 600px) {
          :host {
            --vaadin-app-layout-drawer-overlay: true;
          }

          [part='drawer'] {
            width: 20em;
          }
        }

        /* If a vaadin-scroller is used in the drawer, allow it to take all remaining space and contain scrolling */
        [part='drawer'] ::slotted(vaadin-scroller) {
          flex: 1;
          overscroll-behavior: contain;
        }
      </style>
      <div part="navbar" id="navbarTop">
        <slot name="navbar"></slot>
      </div>
      <div part="backdrop" on-click="_onBackdropClick" on-touchend="_onBackdropTouchend"></div>
      <div part="drawer" id="drawer" on-keydown="__onDrawerKeyDown">
        <slot name="drawer" id="drawerSlot"></slot>
      </div>
      <div content>
        <slot></slot>
      </div>
      <div part="navbar" id="navbarBottom" bottom hidden>
        <slot name="navbar-bottom"></slot>
      </div>
      <div hidden><slot id="touchSlot" name="navbar touch-optimized"></slot></div>
    `}static get is(){return"vaadin-app-layout"}static get properties(){return{i18n:{type:Object,observer:"__i18nChanged",value:()=>({drawer:"Drawer"})},primarySection:{type:String,value:"navbar",notify:!0,reflectToAttribute:!0,observer:"__primarySectionChanged"},drawerOpened:{type:Boolean,notify:!0,value:!0,reflectToAttribute:!0,observer:"__drawerOpenedChanged"},overlay:{type:Boolean,notify:!0,readOnly:!0,value:!1,reflectToAttribute:!0},closeDrawerOn:{type:String,value:"vaadin-router-location-changed",observer:"_closeDrawerOnChanged"}}}static dispatchCloseOverlayDrawerEvent(){window.dispatchEvent(new CustomEvent("close-overlay-drawer"))}constructor(){super(),this.__boundResizeListener=this._resize.bind(this),this.__drawerToggleClickListener=this._drawerToggleClick.bind(this),this.__closeOverlayDrawerListener=this.__closeOverlayDrawer.bind(this),this.__trapFocusInDrawer=this.__trapFocusInDrawer.bind(this),this.__releaseFocusFromDrawer=this.__releaseFocusFromDrawer.bind(this),this.__focusTrapController=new zm(this)}connectedCallback(){super.connectedCallback(),this._blockAnimationUntilAfterNextRender(),window.addEventListener("resize",this.__boundResizeListener),this.addEventListener("drawer-toggle-click",this.__drawerToggleClickListener),Gm(this,this._afterFirstRender),this._updateTouchOptimizedMode();const t=this.$.navbarTop.firstElementChild;this._navbarChildObserver=new xe(t,()=>{this._updateTouchOptimizedMode()}),this._touchChildObserver=new xe(this.$.touchSlot,()=>{this._updateTouchOptimizedMode()}),this._drawerChildObserver=new xe(this.$.drawerSlot,()=>{this._updateDrawerSize()}),this._updateDrawerSize(),this._updateOverlayMode(),this._navbarSizeObserver=new ResizeObserver(()=>{requestAnimationFrame(()=>{this._blockAnimationUntilAfterNextRender(),this._updateOffsetSize()})}),this._navbarSizeObserver.observe(this.$.navbarTop),this._navbarSizeObserver.observe(this.$.navbarBottom),window.addEventListener("close-overlay-drawer",this.__closeOverlayDrawerListener)}ready(){super.ready(),this.addController(this.__focusTrapController),this.__setAriaExpanded()}disconnectedCallback(){super.disconnectedCallback(),this._navbarChildObserver&&this._navbarChildObserver.disconnect(),this._drawerChildObserver&&this._drawerChildObserver.disconnect(),this._touchChildObserver&&this._touchChildObserver.disconnect(),window.removeEventListener("resize",this.__boundResizeListener),this.removeEventListener("drawer-toggle-click",this.__drawerToggleClickListener),window.removeEventListener("close-overlay-drawer",this.__drawerToggleClickListener)}__primarySectionChanged(t){["navbar","drawer"].includes(t)||this.set("primarySection","navbar")}__drawerOpenedChanged(t,e){this.overlay&&(t?this.__trapFocusInDrawer():e&&this.__releaseFocusFromDrawer()),this.__setAriaExpanded()}__i18nChanged(){this.__updateDrawerAriaAttributes()}_afterFirstRender(){this._blockAnimationUntilAfterNextRender(),this._updateOffsetSize()}_drawerToggleClick(t){t.stopPropagation(),this.drawerOpened=!this.drawerOpened}__closeOverlayDrawer(){this.overlay&&(this.drawerOpened=!1)}__setAriaExpanded(){const t=this.querySelector("vaadin-drawer-toggle");t&&t.setAttribute("aria-expanded",this.drawerOpened)}_updateDrawerSize(){const t=this.querySelectorAll("[slot=drawer]").length,e=this.$.drawer;t===0?e.setAttribute("hidden",""):e.removeAttribute("hidden"),this._updateOffsetSize()}_resize(){this._blockAnimationUntilAfterNextRender(),this._updateTouchOptimizedMode(),this._updateOverlayMode()}_updateOffsetSize(){const e=this.$.navbarTop.getBoundingClientRect(),n=this.$.navbarBottom.getBoundingClientRect();this.style.setProperty("--_vaadin-app-layout-navbar-offset-size",`${e.height}px`),this.style.setProperty("--_vaadin-app-layout-navbar-offset-size-bottom",`${n.height}px`);const o=this.$.drawer.getBoundingClientRect();this.style.setProperty("--_vaadin-app-layout-drawer-offset-size",`${o.width}px`)}_updateOverlayMode(){const t=this._getCustomPropertyValue("--vaadin-app-layout-drawer-overlay")==="true";!this.overlay&&t&&(this._drawerStateSaved=this.drawerOpened,this.drawerOpened=!1),this._setOverlay(t),!this.overlay&&this._drawerStateSaved&&(this.drawerOpened=this._drawerStateSaved,this._drawerStateSaved=null),this.__updateDrawerAriaAttributes()}__updateDrawerAriaAttributes(){const t=this.$.drawer;this.overlay?(t.setAttribute("role","dialog"),t.setAttribute("aria-modal","true"),t.setAttribute("aria-label",this.i18n.drawer)):(t.removeAttribute("role"),t.removeAttribute("aria-modal"),t.removeAttribute("aria-label"))}__drawerTransitionComplete(){return new Promise(t=>{if(this._getCustomPropertyValue("--vaadin-app-layout-transition")==="none"){t();return}this.$.drawer.addEventListener("transitionend",t,{once:!0})})}async __trapFocusInDrawer(){await this.__drawerTransitionComplete(),this.drawerOpened&&(this.$.drawer.setAttribute("tabindex","0"),this.__focusTrapController.trapFocus(this.$.drawer))}async __releaseFocusFromDrawer(){if(await this.__drawerTransitionComplete(),this.drawerOpened)return;this.__focusTrapController.releaseFocus(),this.$.drawer.removeAttribute("tabindex");const t=this.querySelector("vaadin-drawer-toggle");t&&(t.focus(),t.setAttribute("focus-ring","focus"))}__onDrawerKeyDown(t){t.key==="Escape"&&this.overlay&&(this.drawerOpened=!1)}_closeDrawerOnChanged(t,e){e&&window.removeEventListener(e,this.__closeOverlayDrawerListener),t&&window.addEventListener(t,this.__closeOverlayDrawerListener)}_onBackdropClick(){this._close()}_onBackdropTouchend(t){t.preventDefault(),this._close()}_close(){this.drawerOpened=!1}_getCustomPropertyValue(t){return(getComputedStyle(this).getPropertyValue(t)||"").trim().toLowerCase()}_updateTouchOptimizedMode(){const t=this._getCustomPropertyValue("--vaadin-app-layout-touch-optimized")==="true",e=this.querySelectorAll('[slot*="navbar"]');e.length>0&&Array.from(e).forEach(i=>{i.getAttribute("slot").indexOf("touch-optimized")>-1&&(i.__touchOptimized=!0),t&&i.__touchOptimized?i.setAttribute("slot","navbar-bottom"):i.setAttribute("slot","navbar")}),this.$.navbarTop.querySelector("[name=navbar]").assignedNodes().length===0?this.$.navbarTop.setAttribute("hidden",""):this.$.navbarTop.removeAttribute("hidden"),t?this.$.navbarBottom.removeAttribute("hidden"):this.$.navbarBottom.setAttribute("hidden",""),this._updateOffsetSize()}_blockAnimationUntilAfterNextRender(){this.setAttribute("no-anim",""),an(this,()=>{this.removeAttribute("no-anim")})}}customElements.define(ih.is,ih);const P_=P`
  :host {
    width: var(--lumo-size-l);
    height: var(--lumo-size-l);
    min-width: auto;
    margin: 0 var(--lumo-space-s);
    padding: 0;
    background: transparent;
  }

  [part='icon'],
  [part='icon']::after,
  [part='icon']::before {
    position: inherit;
    height: auto;
    width: auto;
    background: transparent;
    top: auto;
  }

  [part='icon']::before {
    font-family: lumo-icons;
    font-size: var(--lumo-icon-size-m);
    content: var(--lumo-icons-menu);
  }

  :host([slot~='navbar']) {
    color: var(--lumo-secondary-text-color);
  }
`;O("vaadin-drawer-toggle",[Zf,P_],{moduleId:"lumo-drawer-toggle"});/**
 * @license
 * Copyright (c) 2018 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */O("vaadin-drawer-toggle",P`
    :host {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      cursor: default;
      position: relative;
      outline: none;
      height: 24px;
      width: 24px;
      padding: 4px;
    }

    [part='icon'],
    [part='icon']::after,
    [part='icon']::before {
      position: absolute;
      top: 8px;
      height: 3px;
      width: 24px;
      background-color: #000;
    }

    [part='icon']::after,
    [part='icon']::before {
      content: '';
    }

    [part='icon']::after {
      top: 6px;
    }

    [part='icon']::before {
      top: 12px;
    }
  `,{moduleId:"vaadin-drawer-toggle-styles"});class nh extends Qf{static get template(){return L`
      <slot id="slot">
        <div part="icon"></div>
      </slot>
      <div part="icon" hidden$="[[!_showFallbackIcon]]"></div>
      <slot name="tooltip"></slot>
    `}static get is(){return"vaadin-drawer-toggle"}static get properties(){return{ariaLabel:{type:String,value:"Toggle navigation panel",reflectToAttribute:!0},_showFallbackIcon:{type:Boolean,value:!1}}}constructor(){super(),this.addEventListener("click",()=>{this.dispatchEvent(new CustomEvent("drawer-toggle-click",{bubbles:!0,composed:!0}))})}ready(){super.ready(),this._observer=new xe(this,()=>{this._toggleFallbackIcon()})}_toggleFallbackIcon(){const t=this.$.slot.assignedNodes();this._showFallbackIcon=t.length>0&&t.every(e=>Ym(e))}}customElements.define(nh.is,nh);/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const D_=P`
  :host {
    --vaadin-user-color-0: #df0b92;
    --vaadin-user-color-1: #650acc;
    --vaadin-user-color-2: #097faa;
    --vaadin-user-color-3: #ad6200;
    --vaadin-user-color-4: #bf16f3;
    --vaadin-user-color-5: #084391;
    --vaadin-user-color-6: #078836;
  }

  [theme~='dark'] {
    --vaadin-user-color-0: #ff66c7;
    --vaadin-user-color-1: #9d8aff;
    --vaadin-user-color-2: #8aff66;
    --vaadin-user-color-3: #ffbd66;
    --vaadin-user-color-4: #dc6bff;
    --vaadin-user-color-5: #66fffa;
    --vaadin-user-color-6: #e6ff66;
  }
`,mp=document.createElement("template");mp.innerHTML=`<style>${D_.toString().replace(":host","html")}</style>`;document.head.appendChild(mp.content);const _p=document.createElement("style");_p.textContent="html { --vaadin-avatar-size: var(--lumo-size-m); }";document.head.appendChild(_p);O("vaadin-avatar",P`
    :host {
      color: var(--lumo-secondary-text-color);
      background-color: var(--lumo-contrast-10pct);
      border-radius: 50%;
      outline: none;
      cursor: default;
      user-select: none;
      -webkit-tap-highlight-color: transparent;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    }

    :host([has-color-index]) {
      color: var(--lumo-base-color);
    }

    :host([focus-ring]) {
      border-color: var(--lumo-primary-color-50pct);
    }

    [part='icon'],
    [part='abbr'] {
      fill: currentColor;
    }

    [part='abbr'] {
      font-family: var(--lumo-font-family);
      font-size: 2.4375em;
      font-weight: 500;
    }

    :host([theme~='xlarge']) [part='abbr'] {
      font-size: 2.5em;
    }

    :host([theme~='large']) [part='abbr'] {
      font-size: 2.375em;
    }

    :host([theme~='small']) [part='abbr'] {
      font-size: 2.75em;
    }

    :host([theme~='xsmall']) [part='abbr'] {
      font-size: 3em;
    }

    :host([theme~='xlarge']) {
      --vaadin-avatar-size: var(--lumo-size-xl);
    }

    :host([theme~='large']) {
      --vaadin-avatar-size: var(--lumo-size-l);
    }

    :host([theme~='small']) {
      --vaadin-avatar-size: var(--lumo-size-s);
    }

    :host([theme~='xsmall']) {
      --vaadin-avatar-size: var(--lumo-size-xs);
    }
  `,{moduleId:"lumo-avatar"});/**
 * @license
 * Copyright (c) 2020 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const gp=document.createElement("template");gp.innerHTML=`
  <style>
    @font-face {
      font-family: 'vaadin-avatar-icons';
      src: url(data:application/font-woff;charset=utf-8;base64,d09GRgABAAAAAAQAAAsAAAAABnwAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABHU1VCAAABCAAAADsAAABUIIslek9TLzIAAAFEAAAAQwAAAFZAIUmEY21hcAAAAYgAAABLAAABcOspwa1nbHlmAAAB1AAAAEUAAABMYO4o1WhlYWQAAAIcAAAALgAAADYYaAmGaGhlYQAAAkwAAAAdAAAAJAZsA1VobXR4AAACbAAAAAgAAAAIA+gAAGxvY2EAAAJ0AAAABgAAAAYAJgAAbWF4cAAAAnwAAAAeAAAAIAEOACFuYW1lAAACnAAAAUIAAAKavFDYrHBvc3QAAAPgAAAAHQAAAC52hGZ4eJxjYGRgYOBiMGCwY2BycfMJYeDLSSzJY5BiYGGAAJA8MpsxJzM9kYEDxgPKsYBpDiBmg4gCACY7BUgAeJxjYGT8wjiBgZWBgamKaQ8DA0MPhGZ8wGDIyAQUZWBlZsAKAtJcUxgcXjG+YmQO+p/FEMUcxDANKMwIkgMADiUMJQB4nGNgYGBlYGBgBmIdIGZhYGAMYWBkAAE/oCgjWJyZgQsszsKgBFbDAhJ/xfj/P4wE8lnAJAMjG8Mo4AGTMlAeOKwgmIERADU0CX0AeJxjYGIAAmYJpkgGHgYRBgZGJT1GEztGIzlGET5GKEuU8YuSpZKSpQuI+LfLv21emz9jHJQPJP7dsUywsEiwBACG8g9CAAAAeJxjYGRgYADicIOnh+P5bb4ycDO/AIow3JZ4rIJMM0swRQIpDgYmEA8AKwgJOwAAeJxjYGRgYA76nwUkXzAAAbMEAyMDKmACAE2GAskAAAAAAAAAA+gAAAAAAAAAJgAAeJxjYGRgYGBiEAViBjCLgYELCBkY/oP5DAAKuwEwAAB4nI2Qu07DMBSG//SGaCWEhMSAGDx1QU0vYyemdmDrUDEhuamTpkriyHEj9RF4B56Bh2Bg5mmY+8d4Qh3qo9jf+c45thQAt/hGgGYFuHN7s1q4YvbHbdKD5w555LmLAZ499+hfPPfxhDfPA/p33hB0rmmG+PDcwg2+PLfpfzx3yL+eu7gPHj33MAxmnvtYB6+eB/SftZTbtBjJWlppRmmki2qlkkMmzZnKGbVWpkp1Iabh5Ex1qQplpFVbsTmKqk5m1sYiNjoXC11YlWValEbvVWTDnbXlfDyOvQ8jnaOGZGyRouCfky63/AyzFBE0fYUVFBIckLnKZTOXda15s+GZulxgihCTC2eXnC3cfFNV7BfY4Mi9eT3BjNYiZh6zRyMnLdxs050xNE3panuaiD7Ezk2VmGPMiP/1h+71/ATcWYAhAAB4nGNgYoAALgbsgImRiZGZgaW0OLWIgQEACl4B2QAAAA==) format('woff');
      font-weight: normal;
      font-style: normal;
    }
  </style>
`;document.head.appendChild(gp.content);/**
 * @license
 * Copyright (c) 2020 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class ah extends Oe(st(G(Et(z)))){static get template(){return L`
      <style>
        :host {
          display: inline-block;
          flex: none;
          border-radius: 50%;
          overflow: hidden;
          height: var(--vaadin-avatar-size, 64px);
          width: var(--vaadin-avatar-size, 64px);
          border: var(--vaadin-avatar-outline-width) solid transparent;
          margin: calc(var(--vaadin-avatar-outline-width) * -1);
          background-clip: content-box;
          --vaadin-avatar-outline-width: 2px;
        }

        img {
          height: 100%;
          width: 100%;
          object-fit: cover;
        }

        [part='icon'] {
          font-size: 5.6em;
        }

        [part='abbr'] {
          font-size: 2.2em;
        }

        [part='icon'] > text {
          font-family: 'vaadin-avatar-icons';
        }

        :host([hidden]) {
          display: none !important;
        }

        svg[hidden] {
          display: none !important;
        }

        :host([has-color-index]) {
          position: relative;
          background-color: var(--vaadin-avatar-user-color);
        }

        :host([has-color-index])::before {
          position: absolute;
          content: '';
          top: 0;
          left: 0;
          bottom: 0;
          right: 0;
          border-radius: inherit;
          box-shadow: inset 0 0 0 2px var(--vaadin-avatar-user-color);
        }
      </style>
      <img hidden$="[[!__imgVisible]]" src$="[[img]]" aria-hidden="true" on-error="__onImageLoadError" />
      <svg
        part="icon"
        hidden$="[[!__iconVisible]]"
        id="avatar-icon"
        viewBox="-50 -50 100 100"
        preserveAspectRatio="xMidYMid meet"
        aria-hidden="true"
      >
        <text dy=".35em" text-anchor="middle">&#xea01;</text>
      </svg>
      <svg
        part="abbr"
        hidden$="[[!__abbrVisible]]"
        id="avatar-abbr"
        viewBox="-50 -50 100 100"
        preserveAspectRatio="xMidYMid meet"
        aria-hidden="true"
      >
        <text dy=".35em" text-anchor="middle">[[abbr]]</text>
      </svg>

      <slot name="tooltip"></slot>
    `}static get is(){return"vaadin-avatar"}static get properties(){return{img:{type:String,reflectToAttribute:!0,observer:"__imgChanged"},abbr:{type:String,reflectToAttribute:!0},name:{type:String,reflectToAttribute:!0},colorIndex:{type:Number,observer:"__colorIndexChanged"},i18n:{type:Object,value:()=>({anonymous:"anonymous"})},withTooltip:{type:Boolean,value:!1,observer:"__withTooltipChanged"},__imgVisible:Boolean,__iconVisible:Boolean,__abbrVisible:Boolean,__tooltipNode:Object}}static get observers(){return["__imgOrAbbrOrNameChanged(img, abbr, name)","__i18nChanged(i18n.*)","__tooltipChanged(__tooltipNode, name, abbr)"]}ready(){super.ready(),this.__updateVisibility(),this.hasAttribute("role")||this.setAttribute("role","button"),this.hasAttribute("tabindex")||this.setAttribute("tabindex","0"),this._tooltipController=new Ht(this),this.addController(this._tooltipController),!this.name&&!this.abbr&&this.__setTooltip()}__colorIndexChanged(t){if(t!=null){const e=`--vaadin-user-color-${t}`;Boolean(getComputedStyle(document.documentElement).getPropertyValue(e))?(this.setAttribute("has-color-index",""),this.style.setProperty("--vaadin-avatar-user-color",`var(${e})`)):(this.removeAttribute("has-color-index"),console.warn(`The CSS property --vaadin-user-color-${t} is not defined`))}else this.removeAttribute("has-color-index")}__imgChanged(){this.__imgFailedToLoad=!1}__imgOrAbbrOrNameChanged(t,e,i){this.__updateVisibility(),!(e&&e!==this.__generatedAbbr)&&(i?this.abbr=this.__generatedAbbr=i.split(" ").map(n=>n.charAt(0)).join(""):this.abbr=void 0)}__tooltipChanged(t,e,i){t&&(i&&i!==this.__generatedAbbr?this.__setTooltip(e?`${e} (${i})`:i):this.__setTooltip(e))}__withTooltipChanged(t,e){if(t){const i=document.createElement("vaadin-tooltip");i.setAttribute("slot","tooltip"),this.appendChild(i),this.__tooltipNode=i}else e&&(this.__tooltipNode.target=null,this.__tooltipNode.remove(),this.__tooltipNode=null)}__i18nChanged(t){t.base&&t.base.anonymous&&(this.__oldAnonymous&&this.__tooltipNode&&this.__tooltipNode.text===this.__oldAnonymous&&this.__setTooltip(),this.__oldAnonymous=t.base.anonymous)}__updateVisibility(){this.__imgVisible=!!this.img&&!this.__imgFailedToLoad,this.__abbrVisible=!this.__imgVisible&&!!this.abbr,this.__iconVisible=!this.__imgVisible&&!this.abbr}__setTooltip(t){const e=this.__tooltipNode;e&&(e.text=t||this.i18n.anonymous)}__onImageLoadError(){this.img&&(console.warn(`<vaadin-avatar> The specified image could not be loaded: ${this.img}`),this.__imgFailedToLoad=!0,this.__updateVisibility())}}customElements.define(ah.is,ah);O("vaadin-avatar-group",P`
    :host {
      --vaadin-avatar-size: var(--lumo-size-m);
    }

    :host([theme~='xlarge']) {
      --vaadin-avatar-group-overlap: 12px;
      --vaadin-avatar-group-overlap-border: 3px;
      --vaadin-avatar-size: var(--lumo-size-xl);
    }

    :host([theme~='large']) {
      --vaadin-avatar-group-overlap: 10px;
      --vaadin-avatar-group-overlap-border: 3px;
      --vaadin-avatar-size: var(--lumo-size-l);
    }

    :host([theme~='small']) {
      --vaadin-avatar-group-overlap: 6px;
      --vaadin-avatar-group-overlap-border: 2px;
      --vaadin-avatar-size: var(--lumo-size-s);
    }

    :host([theme~='xsmall']) {
      --vaadin-avatar-group-overlap: 4px;
      --vaadin-avatar-group-overlap-border: 2px;
      --vaadin-avatar-size: var(--lumo-size-xs);
    }
  `,{moduleId:"lumo-avatar-group"});const k_=P`
  :host {
    --_lumo-list-box-item-selected-icon-display: none;
    --_lumo-list-box-item-padding-left: calc(var(--lumo-space-m) + var(--lumo-border-radius-m) / 4);
  }

  [part='overlay'] {
    outline: none;
  }
`;O("vaadin-avatar-group-overlay",[ru,iu,k_],{moduleId:"lumo-avatar-group-overlay"});O("vaadin-avatar-group-menu",nu,{moduleId:"lumo-avatar-group-menu"});O("vaadin-avatar-group-menu-item",[on,P`
      :host {
        padding: var(--lumo-space-xs);
        padding-inline-end: var(--lumo-space-m);
      }

      [part='content'] {
        display: flex;
        align-items: center;
      }

      [part='content'] ::slotted(vaadin-avatar) {
        width: var(--lumo-size-xs);
        height: var(--lumo-size-xs);
        margin-inline-end: var(--lumo-space-s);
      }
    `],{moduleId:"lumo-avatar-group-menu-item"});/**
 * @license
 * Copyright (c) 2020 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class oh extends sn(G(Jt(Et(z)))){static get is(){return"vaadin-avatar-group-menu"}static get template(){return L`
      <style>
        :host {
          display: flex;
        }

        :host([hidden]) {
          display: none !important;
        }

        [part='items'] {
          height: 100%;
          width: 100%;
          overflow-y: auto;
          -webkit-overflow-scrolling: touch;
        }
      </style>
      <div part="items">
        <slot></slot>
      </div>
    `}static get properties(){return{orientation:{readOnly:!0}}}get _scrollerElement(){return this.shadowRoot.querySelector('[part="items"]')}ready(){super.ready(),this.setAttribute("role","menu")}}customElements.define(oh.is,oh);/**
 * @license
 * Copyright (c) 2020 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class sh extends ln(G(Jt(z))){static get is(){return"vaadin-avatar-group-menu-item"}static get template(){return L`
      <style>
        :host {
          display: inline-block;
        }

        :host([hidden]) {
          display: none !important;
        }
      </style>
      <span part="checkmark" aria-hidden="true"></span>
      <div part="content">
        <slot></slot>
      </div>
    `}ready(){super.ready(),this.setAttribute("role","menuitem")}}customElements.define(sh.is,sh);/**
 * @license
 * Copyright (c) 2020 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class lh extends $o(ur){static get is(){return"vaadin-avatar-group-overlay"}}customElements.define(lh.is,lh);/**
 * @license
 * Copyright (c) 2022 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const de=document.createElement("div");de.style.position="fixed";de.style.clip="rect(0px, 0px, 0px, 0px)";de.setAttribute("aria-live","polite");document.body.appendChild(de);let Rn;function ke(r,t={}){const e=t.mode||"polite",i=t.timeout===void 0?150:t.timeout;e==="alert"?(de.removeAttribute("aria-live"),de.removeAttribute("role"),Rn=Ae.debounce(Rn,Kf,()=>{de.setAttribute("role","alert")})):(Rn&&Rn.cancel(),de.removeAttribute("role"),de.setAttribute("aria-live",e)),de.textContent="",setTimeout(()=>{de.textContent=r},i)}/**
 * @license
 * Copyright (c) 2020 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const us=2;class uh extends un(No(st(G(Et(z))))){static get template(){return L`
      <style>
        :host {
          display: block;
          width: 100%; /* prevent collapsing inside non-stretching column flex */
          --vaadin-avatar-group-overlap: 8px;
          --vaadin-avatar-group-overlap-border: 2px;
        }

        :host([hidden]) {
          display: none !important;
        }

        [part='container'] {
          display: flex;
          position: relative;
          width: 100%;
          flex-wrap: nowrap;
        }

        ::slotted(vaadin-avatar:not(:first-child)) {
          -webkit-mask-image: url('data:image/svg+xml;utf8,<svg viewBox=%220 0 300 300%22 fill=%22none%22 xmlns=%22http://www.w3.org/2000/svg%22><path fill-rule=%22evenodd%22 clip-rule=%22evenodd%22 d=%22M300 0H0V300H300V0ZM150 200C177.614 200 200 177.614 200 150C200 122.386 177.614 100 150 100C122.386 100 100 122.386 100 150C100 177.614 122.386 200 150 200Z%22 fill=%22black%22/></svg>');
          mask-image: url('data:image/svg+xml;utf8,<svg viewBox=%220 0 300 300%22 fill=%22none%22 xmlns=%22http://www.w3.org/2000/svg%22><path fill-rule=%22evenodd%22 clip-rule=%22evenodd%22 d=%22M300 0H0V300H300V0ZM150 200C177.614 200 200 177.614 200 150C200 122.386 177.614 100 150 100C122.386 100 100 122.386 100 150C100 177.614 122.386 200 150 200Z%22 fill=%22black%22/></svg>');
          -webkit-mask-size: calc(
            300% + var(--vaadin-avatar-group-overlap-border) * 6 - var(--vaadin-avatar-outline-width) * 6
          );
          mask-size: calc(
            300% + var(--vaadin-avatar-group-overlap-border) * 6 - var(--vaadin-avatar-outline-width) * 6
          );
        }

        ::slotted(vaadin-avatar:not([dir='rtl']):not(:first-child)) {
          margin-left: calc(var(--vaadin-avatar-group-overlap) * -1 - var(--vaadin-avatar-outline-width));
          -webkit-mask-position: calc(50% - var(--vaadin-avatar-size) + var(--vaadin-avatar-group-overlap));
          mask-position: calc(50% - var(--vaadin-avatar-size) + var(--vaadin-avatar-group-overlap));
        }

        ::slotted(vaadin-avatar[dir='rtl']:not(:first-child)) {
          margin-right: calc(var(--vaadin-avatar-group-overlap) * -1);
          -webkit-mask-position: calc(
            50% + var(--vaadin-avatar-size) - var(--vaadin-avatar-group-overlap) + var(--vaadin-avatar-outline-width)
          );
          mask-position: calc(
            50% + var(--vaadin-avatar-size) - var(--vaadin-avatar-group-overlap) + var(--vaadin-avatar-outline-width)
          );
        }
      </style>
      <div id="container" part="container">
        <slot></slot>
        <slot name="overflow"></slot>
      </div>
      <vaadin-avatar-group-overlay
        id="overlay"
        opened="{{_opened}}"
        position-target="[[_overflow]]"
        no-vertical-overlap
        on-vaadin-overlay-close="_onVaadinOverlayClose"
      ></vaadin-avatar-group-overlay>
    `}static get is(){return"vaadin-avatar-group"}static get properties(){return{items:{type:Array},maxItemsVisible:{type:Number},i18n:{type:Object,value:()=>({anonymous:"anonymous",activeUsers:{one:"Currently one active user",many:"Currently {count} active users"},joined:"{user} joined",left:"{user} left"})},_avatars:{type:Array,value:()=>[]},__maxReached:{type:Boolean,computed:"__computeMaxReached(items.length, maxItemsVisible)"},__items:{type:Array},__itemsInView:{type:Number,value:null},_overflow:{type:Object},_overflowItems:{type:Array,observer:"__overflowItemsChanged",computed:"__computeOverflowItems(items.*, __itemsInView, maxItemsVisible)"},_overflowTooltip:{type:Object},_opened:{type:Boolean,observer:"__openedChanged"}}}static get observers(){return["__itemsChanged(items.splices, items.*)","__i18nItemsChanged(i18n.*, items.length)","__updateAvatarsTheme(_overflow, _avatars, _theme)","__updateAvatars(items.*, __itemsInView, maxItemsVisible, _overflow, i18n)","__updateOverflowAbbr(_overflow, items.length, __itemsInView, maxItemsVisible)","__updateOverflowHidden(_overflow, items.length, __itemsInView, __maxReached)","__updateOverflowTooltip(_overflowTooltip, items.length, __itemsInView, maxItemsVisible)"]}ready(){super.ready(),this._overflowController=new pt(this,"overflow","vaadin-avatar",{initializer:e=>{e.setAttribute("aria-haspopup","menu"),e.setAttribute("aria-expanded","false"),e.addEventListener("click",n=>this._onOverflowClick(n)),e.addEventListener("keydown",n=>this._onOverflowKeyDown(n));const i=document.createElement("vaadin-tooltip");i.setAttribute("slot","tooltip"),e.appendChild(i),this._overflow=e,this._overflowTooltip=i}}),this.addController(this._overflowController);const t=this.$.overlay;t.renderer=this.__overlayRenderer.bind(this),this._overlayElement=t,an(this,()=>{this.__setItemsInView()})}disconnectedCallback(){super.disconnectedCallback(),this._opened=!1}__getMessage(t,e){return e.replace("{user}",t.name||t.abbr||this.i18n.anonymous)}__overlayRenderer(t){let e=t.firstElementChild;e||(e=document.createElement("vaadin-avatar-group-menu"),e.addEventListener("keydown",i=>this._onListKeyDown(i)),t.appendChild(e)),e.textContent="",this._overflowItems&&this._overflowItems.forEach(i=>{e.appendChild(this.__createItemElement(i))})}__createItemElement(t){const e=document.createElement("vaadin-avatar-group-menu-item"),i=document.createElement("vaadin-avatar");if(e.appendChild(i),i.setAttribute("aria-hidden","true"),i.setAttribute("tabindex","-1"),i.i18n=this.i18n,this._theme&&i.setAttribute("theme",this._theme),i.name=t.name,i.abbr=t.abbr,i.img=t.img,i.colorIndex=t.colorIndex,t.name){const n=document.createTextNode(t.name);e.appendChild(n)}return e}_onOverflowClick(t){t.stopPropagation(),this._opened?this.$.overlay.close():t.defaultPrevented||(this._opened=!0)}_onOverflowKeyDown(t){this._opened||/^(Enter|SpaceBar|\s)$/u.test(t.key)&&(t.preventDefault(),this._opened=!0)}_onListKeyDown(t){(t.key==="Escape"||t.key==="Tab")&&(this._opened=!1)}_onResize(){this.__setItemsInView()}_onVaadinOverlayClose(t){t.detail.sourceEvent&&t.detail.sourceEvent.composedPath().includes(this)&&t.preventDefault()}__renderAvatars(t){du(ri`
        ${t.map(e=>ri`
              <vaadin-avatar
                .name="${e.name}"
                .abbr="${e.abbr}"
                .img="${e.img}"
                .colorIndex="${e.colorIndex}"
                .i18n="${this.i18n}"
                with-tooltip
              ></vaadin-avatar>
            `)}
      `,this,{renderBefore:this._overflow})}__updateAvatars(t,e,i,n){if(!n)return;const a=t.base||[],o=this.__getLimit(a.length,e,i);this.__renderAvatars(o?a.slice(0,o):a),this._avatars=[...this.querySelectorAll("vaadin-avatar")]}__computeOverflowItems(t,e,i){const n=t.base||[],a=this.__getLimit(n.length,e,i);return a?n.slice(a):[]}__computeMaxReached(t,e){return e!=null&&t>this.__getMax(e)}__updateOverflowAbbr(t,e,i,n){t&&(t.abbr=`+${e-this.__getLimit(e,i,n)}`)}__updateOverflowHidden(t,e,i,n){t&&t.toggleAttribute("hidden",!n&&!(i&&i<e))}__updateAvatarsTheme(t,e,i){t&&[t,...e].forEach(n=>{i?n.setAttribute("theme",i):n.removeAttribute("theme")})}__updateOverflowTooltip(t,e,i,n){if(!t)return;const a=this.__getLimit(e,i,n);if(a==null)return;const o=[];for(let s=a;s<e;s++){const l=this.items[s];l&&o.push(l.name||l.abbr||"anonymous")}t.text=o.join(`
`)}__getLimit(t,e,i){let n=null;const a=this.__getMax(i);return i!=null&&a<t?n=a-1:e&&e<t&&(n=e),Math.min(n,this.__calculateAvatarsFitWidth())}__getMax(t){return Math.max(t,us)}__itemsChanged(t,e){const i=e.base;this.__setItemsInView(),t&&Array.isArray(t.indexSplices)?t.indexSplices.forEach(n=>{this.__announceItemsChange(i,n)}):Array.isArray(i)&&Array.isArray(this.__oldItems)&&Jf(i,this.__oldItems).forEach(a=>{this.__announceItemsChange(i,a)}),this.__oldItems=i}__announceItemsChange(t,e){const{addedCount:i,index:n,removed:a}=e;let o=[],s=[];i&&(o=t.slice(n,n+i).map(u=>this.__getMessage(u,this.i18n.joined||"{user} joined"))),a&&(s=a.map(u=>this.__getMessage(u,this.i18n.left||"{user} left")));const l=s.concat(o);l.length>0&&ke(l.join(", "))}__i18nItemsChanged(t,e){const{base:i}=t;if(i&&i.activeUsers){const n=e===1?"one":"many";i.activeUsers[n]&&this.setAttribute("aria-label",i.activeUsers[n].replace("{count}",e||0)),this._avatars.forEach(a=>{a.i18n=i})}}__openedChanged(t,e){t?(this._menuElement||(this._menuElement=this.$.overlay.querySelector("vaadin-avatar-group-menu")),this._openedWithFocusRing=this._overflow.hasAttribute("focus-ring"),this._menuElement.focus()):e&&(this._overflow.focus(),this._openedWithFocusRing&&this._overflow.setAttribute("focus-ring","")),this._overflow.setAttribute("aria-expanded",t===!0)}__overflowItemsChanged(t,e){(t||e)&&this.$.overlay.requestContentUpdate()}__setItemsInView(){const t=this._avatars,e=this.items;if(!e||!t||t.length<3)return;let i=this.__calculateAvatarsFitWidth();i===e.length-1&&(i=e.length),i>=e.length&&this._opened&&(this.$.overlay.close(),this.$.overlay._flushAnimation("closing")),this.__itemsInView=i}__calculateAvatarsFitWidth(){if(!this.shadowRoot||this._avatars.length<us)return us;const t=this._avatars,e=t[0].clientWidth,{marginLeft:i,marginRight:n}=getComputedStyle(t[1]),a=this.__isRTL?parseInt(n,0)-parseInt(i,0):parseInt(i,0)-parseInt(n,0);return Math.floor((this.$.container.offsetWidth-e)/(e+a))}}customElements.define(uh.is,uh);const L_=P`
  :host {
    color: var(--lumo-body-text-color);
    font-size: var(--lumo-font-size-m);
    font-family: var(--lumo-font-family);
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-tap-highlight-color: transparent;
    padding: var(--lumo-space-xs) 0;
  }

  :host::before {
    /* Effective height of vaadin-checkbox */
    height: var(--lumo-size-s);
    box-sizing: border-box;
    display: inline-flex;
    align-items: center;
  }

  :host([theme~='vertical']) [part='group-field'] {
    display: flex;
    flex-direction: column;
  }

  :host([disabled]) [part='label'] {
    color: var(--lumo-disabled-text-color);
    -webkit-text-fill-color: var(--lumo-disabled-text-color);
  }

  :host([focused]:not([disabled])) [part='label'] {
    color: var(--lumo-primary-text-color);
  }

  :host(:hover:not([disabled]):not([focused])) [part='label'],
  :host(:hover:not([disabled]):not([focused])) [part='helper-text'] {
    color: var(--lumo-body-text-color);
  }

  /* Touch device adjustment */
  @media (pointer: coarse) {
    :host(:hover:not([disabled]):not([focused])) [part='label'] {
      color: var(--lumo-secondary-text-color);
    }
  }
`;O("vaadin-checkbox-group",[Bo,zo,L_],{moduleId:"lumo-checkbox-group"});/**
 * @license
 * Copyright (c) 2018 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class hh extends hn(Oe(Go(st(G(z))))){static get is(){return"vaadin-checkbox-group"}static get template(){return L`
      <style>
        :host {
          display: inline-flex;
        }

        :host::before {
          content: '\\2003';
          width: 0;
          display: inline-block;
        }

        :host([hidden]) {
          display: none !important;
        }

        .vaadin-group-field-container {
          display: flex;
          flex-direction: column;
          width: 100%;
        }

        :host(:not([has-label])) [part='label'] {
          display: none;
        }
      </style>

      <div class="vaadin-group-field-container">
        <div part="label">
          <slot name="label"></slot>
          <span part="required-indicator" aria-hidden="true"></span>
        </div>

        <div part="group-field">
          <slot></slot>
        </div>

        <div part="helper-text">
          <slot name="helper"></slot>
        </div>

        <div part="error-message">
          <slot name="error-message"></slot>
        </div>
      </div>

      <slot name="tooltip"></slot>
    `}static get properties(){return{value:{type:Array,value:()=>[],notify:!0,observer:"__valueChanged"}}}constructor(){super(),this.__registerCheckbox=this.__registerCheckbox.bind(this),this.__unregisterCheckbox=this.__unregisterCheckbox.bind(this),this.__onCheckboxCheckedChanged=this.__onCheckboxCheckedChanged.bind(this)}get __checkboxes(){return this.__filterCheckboxes([...this.children])}ready(){super.ready(),this.ariaTarget=this,this.setAttribute("role","group"),this._observer=new xe(this,({addedNodes:t,removedNodes:e})=>{const i=this.__filterCheckboxes(t),n=this.__filterCheckboxes(e);i.forEach(this.__registerCheckbox),n.forEach(this.__unregisterCheckbox),this.__warnOfCheckboxesWithoutValue(i)}),this._tooltipController=new Ht(this),this.addController(this._tooltipController)}checkValidity(){return!this.required||this.value.length>0}__filterCheckboxes(t){return t.filter(e=>e instanceof Um)}__warnOfCheckboxesWithoutValue(t){t.some(i=>{const{value:n}=i;return!i.hasAttribute("value")&&(!n||n==="on")})&&console.warn("Please provide the value attribute to all the checkboxes inside the checkbox group.")}__registerCheckbox(t){t.addEventListener("checked-changed",this.__onCheckboxCheckedChanged),this.disabled&&(t.disabled=!0),t.checked?this.__addCheckboxToValue(t.value):this.value.includes(t.value)&&(t.checked=!0)}__unregisterCheckbox(t){t.removeEventListener("checked-changed",this.__onCheckboxCheckedChanged),t.checked&&this.__removeCheckboxFromValue(t.value)}_disabledChanged(t,e){super._disabledChanged(t,e),!(!t&&e===void 0)&&e!==t&&this.__checkboxes.forEach(i=>{i.disabled=t})}__addCheckboxToValue(t){this.value.includes(t)||(this.value=[...this.value,t])}__removeCheckboxFromValue(t){this.value.includes(t)&&(this.value=this.value.filter(e=>e!==t))}__onCheckboxCheckedChanged(t){const e=t.target;e.checked?this.__addCheckboxToValue(e.value):this.__removeCheckboxFromValue(e.value)}__valueChanged(t,e){t.length===0&&e===void 0||(this.toggleAttribute("has-value",t.length>0),this.__checkboxes.forEach(i=>{i.checked=t.includes(i.value)}),e!==void 0&&this.validate())}_shouldRemoveFocus(t){return!this.contains(t.relatedTarget)}_setFocused(t){super._setFocused(t),t||this.validate()}}customElements.define(hh.is,hh);O("vaadin-confirm-dialog-overlay",P`
    [part='header'] ::slotted(h3) {
      margin-top: 0 !important;
      margin-bottom: 0 !important;
      margin-inline-start: calc(var(--lumo-space-l) - var(--lumo-space-m)) !important;
    }

    [part='message'] {
      width: 25em;
      min-width: 100%;
      max-width: 100%;
    }

    ::slotted([slot$='button'][theme~='tertiary']) {
      padding-left: var(--lumo-space-s);
      padding-right: var(--lumo-space-s);
    }

    [part='cancel-button'] {
      flex-grow: 1;
    }

    @media (max-width: 360px) {
      [part='footer'] {
        flex-direction: column-reverse;
        align-items: stretch;
        padding: var(--lumo-space-s) var(--lumo-space-l);
        gap: var(--lumo-space-s);
      }

      ::slotted([slot$='button']) {
        width: 100%;
        margin: 0;
      }
    }
  `,{moduleId:"lumo-confirm-dialog-overlay"});/**
 * @license
 * Copyright (c) 2018 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */O("vaadin-confirm-dialog-overlay",P`
    :host {
      --_vaadin-confirm-dialog-content-width: auto;
      --_vaadin-confirm-dialog-content-height: auto;
    }

    [part='overlay'] {
      width: var(--_vaadin-confirm-dialog-content-width);
      height: var(--_vaadin-confirm-dialog-content-height);
    }

    /* Make buttons clickable */
    [part='footer'] > * {
      pointer-events: all;
    }
  `,{moduleId:"vaadin-confirm-dialog-overlay-styles"});let kr;const F_=L`
  <div part="cancel-button">
    <slot name="cancel-button"></slot>
  </div>
  <div part="reject-button">
    <slot name="reject-button"></slot>
  </div>
  <div part="confirm-button">
    <slot name="confirm-button"></slot>
  </div>
`;class ch extends jm{static get is(){return"vaadin-confirm-dialog-overlay"}static get template(){if(!kr){kr=super.template.cloneNode(!0);const t=kr.content.querySelector('[part="header"]');t.innerHTML="";const e=document.createElement("slot");e.setAttribute("name","header"),t.appendChild(e);const i=kr.content.querySelector('[part="content"]'),n=i.querySelector("slot:not([name])"),a=document.createElement("div");a.setAttribute("part","message"),i.appendChild(a),a.appendChild(n);const o=kr.content.querySelector('[part="footer"]');o.setAttribute("role","toolbar");const s=o.querySelector("slot");o.removeChild(s),o.appendChild(F_.content.cloneNode(!0))}return kr}_headerFooterRendererChange(t,e,i){super._headerFooterRendererChange(t,e,i),this.setAttribute("has-header",""),this.setAttribute("has-footer","")}}customElements.define(ch.is,ch);class dh extends Wm{static get is(){return"vaadin-confirm-dialog-dialog"}static get template(){return L`
      <style>
        :host {
          display: none;
        }
      </style>

      <vaadin-confirm-dialog-overlay
        id="overlay"
        on-opened-changed="_onOverlayOpened"
        on-mousedown="_bringOverlayToFront"
        on-touchstart="_bringOverlayToFront"
        theme$="[[_theme]]"
        modeless="[[modeless]]"
        with-backdrop="[[!modeless]]"
        resizable$="[[resizable]]"
        focus-trap
      ></vaadin-confirm-dialog-overlay>
    `}static get properties(){return{contentHeight:{type:String},contentWidth:{type:String},_overlayElement:{type:Object}}}static get observers(){return["__updateContentHeight(contentHeight, _overlayElement)","__updateContentWidth(contentWidth, _overlayElement)"]}ready(){super.ready(),this._overlayElement=this.$.overlay}__updateDimension(t,e,i){const n=`--_vaadin-confirm-dialog-content-${e}`;i?t.style.setProperty(n,i):t.style.removeProperty(n)}__updateContentHeight(t,e){e&&this.__updateDimension(e,"height",t)}__updateContentWidth(t,e){e&&this.__updateDimension(e,"width",t)}}customElements.define(dh.is,dh);/**
 * @license
 * Copyright (c) 2018 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class fh extends st(Vm(Et(z))){static get template(){return L`
      <style>
        :host,
        [hidden] {
          display: none !important;
        }
      </style>

      <vaadin-confirm-dialog-dialog
        id="dialog"
        opened="{{opened}}"
        overlay-class="[[overlayClass]]"
        aria-label="[[_getAriaLabel(header)]]"
        theme$="[[_theme]]"
        no-close-on-outside-click
        no-close-on-esc="[[noCloseOnEsc]]"
        content-height="[[_contentHeight]]"
        content-width="[[_contentWidth]]"
      ></vaadin-confirm-dialog-dialog>

      <div hidden>
        <slot name="header"></slot>
        <slot></slot>
        <slot name="cancel-button"></slot>
        <slot name="reject-button"></slot>
        <slot name="confirm-button"></slot>
      </div>
    `}static get is(){return"vaadin-confirm-dialog"}static get properties(){return{opened:{type:Boolean,value:!1,notify:!0},header:{type:String,value:""},message:{type:String,value:""},confirmText:{type:String,value:"Confirm"},confirmTheme:{type:String,value:"primary"},noCloseOnEsc:{type:Boolean,value:!1},rejectButtonVisible:{type:Boolean,reflectToAttribute:!0,value:!1},rejectText:{type:String,value:"Reject"},rejectTheme:{type:String,value:"error tertiary"},cancelButtonVisible:{type:Boolean,reflectToAttribute:!0,value:!1},cancelText:{type:String,value:"Cancel"},cancelTheme:{type:String,value:"tertiary"},overlayClass:{type:String},_cancelButton:{type:Object},_confirmButton:{type:Object},_headerNode:{type:Object},_messageNodes:{type:Array,value:()=>[]},_rejectButton:{type:Object},_contentHeight:{type:String},_contentWidth:{type:String}}}static get observers(){return["__updateConfirmButton(_confirmButton, confirmText, confirmTheme)","__updateCancelButton(_cancelButton, cancelText, cancelTheme, cancelButtonVisible)","__updateHeaderNode(_headerNode, header)","__updateMessageNodes(_messageNodes, message)","__updateRejectButton(_rejectButton, rejectText, rejectTheme, rejectButtonVisible)"]}constructor(){super(),this.__cancel=this.__cancel.bind(this),this.__confirm=this.__confirm.bind(this),this.__reject=this.__reject.bind(this)}get __slottedNodes(){return[this._headerNode,...this._messageNodes,this._cancelButton,this._confirmButton,this._rejectButton]}ready(){super.ready(),this._overlayElement=this.$.dialog.$.overlay,this._overlayElement.addEventListener("vaadin-overlay-escape-press",this._escPressed.bind(this)),this._overlayElement.addEventListener("vaadin-overlay-open",()=>this.__onDialogOpened()),this._overlayElement.addEventListener("vaadin-overlay-closed",()=>this.__onDialogClosed()),this._headerController=new pt(this,"header","h3",{initializer:t=>{this._headerNode=t}}),this.addController(this._headerController),this._messageController=new pt(this,"","div",{multiple:!0,observe:!1,initializer:t=>{this._messageNodes=[...this._messageNodes,t]}}),this.addController(this._messageController),this._cancelController=new pt(this,"cancel-button","vaadin-button",{initializer:t=>{this.__setupSlottedButton("cancel",t)}}),this.addController(this._cancelController),this._rejectController=new pt(this,"reject-button","vaadin-button",{initializer:t=>{this.__setupSlottedButton("reject",t)}}),this.addController(this._rejectController),this._confirmController=new pt(this,"confirm-button","vaadin-button",{initializer:t=>{this.__setupSlottedButton("confirm",t)}}),this.addController(this._confirmController)}__onDialogOpened(){const t=this._overlayElement;this.__slottedNodes.forEach(i=>{t.appendChild(i)});const e=t.querySelector('[slot="confirm-button"]');e&&e.focus()}__onDialogClosed(){this.__slottedNodes.forEach(t=>{this.appendChild(t)})}__setupSlottedButton(t,e){const i=`_${t}Button`,n=`__${t}`;this[i]&&this[i]!==e&&this[i].remove(),e.addEventListener("click",this[n]),this[i]=e}__updateCancelButton(t,e,i,n){t&&(t===this._cancelController.defaultNode&&(t.textContent=e,t.setAttribute("theme",i)),t.toggleAttribute("hidden",!n))}__updateConfirmButton(t,e,i){t&&t===this._confirmController.defaultNode&&(t.textContent=e,t.setAttribute("theme",i))}__updateHeaderNode(t,e){t&&t===this._headerController.defaultNode&&(t.textContent=e)}__updateMessageNodes(t,e){if(t&&t.length>0){const i=t.find(n=>n===this._messageController.defaultNode);i&&(i.textContent=e)}}__updateRejectButton(t,e,i,n){t&&(t===this._rejectController.defaultNode&&(t.textContent=e,t.setAttribute("theme",i)),t.toggleAttribute("hidden",!n))}_escPressed(t){t.defaultPrevented||this.__cancel()}__confirm(){this.dispatchEvent(new CustomEvent("confirm")),this.opened=!1}__cancel(){this.dispatchEvent(new CustomEvent("cancel")),this.opened=!1}__reject(){this.dispatchEvent(new CustomEvent("reject")),this.opened=!1}_getAriaLabel(t){return t||"confirmation"}}customElements.define(fh.is,fh);/**
 * @license
 * Copyright (c) 2019 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const yp=P`
  :host {
    --lumo-text-field-size: var(--lumo-size-m);
    color: var(--lumo-body-text-color);
    font-size: var(--lumo-font-size-m);
    /* align with text-field height + vertical paddings */
    line-height: calc(var(--lumo-text-field-size) + 2 * var(--lumo-space-xs));
    font-family: var(--lumo-font-family);
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-tap-highlight-color: transparent;
    padding: 0;
  }

  :host::before {
    margin-top: var(--lumo-space-xs);
    height: var(--lumo-text-field-size);
    box-sizing: border-box;
    display: inline-flex;
    align-items: center;
  }

  /* align with text-field label */
  :host([has-label]) [part='label'] {
    padding-bottom: calc(0.5em - var(--lumo-space-xs));
  }

  :host(:not([has-label])) [part='label'],
  :host(:not([has-label]))::before {
    display: none;
  }

  /* align with text-field error message */
  :host([has-error-message]) [part='error-message']::before {
    height: calc(0.4em - var(--lumo-space-xs));
  }

  :host([focused]:not([readonly]):not([disabled])) [part='label'] {
    color: var(--lumo-primary-text-color);
  }

  :host(:hover:not([readonly]):not([disabled]):not([focused])) [part='label'],
  :host(:hover:not([readonly]):not([disabled]):not([focused])) [part='helper-text'] {
    color: var(--lumo-body-text-color);
  }

  /* Touch device adjustment */
  @media (pointer: coarse) {
    :host(:hover:not([readonly]):not([disabled]):not([focused])) [part='label'] {
      color: var(--lumo-secondary-text-color);
    }
  }

  /* Disabled */
  :host([disabled]) [part='label'] {
    color: var(--lumo-disabled-text-color);
    -webkit-text-fill-color: var(--lumo-disabled-text-color);
  }

  /* Small theme */
  :host([theme~='small']) {
    font-size: var(--lumo-font-size-s);
    --lumo-text-field-size: var(--lumo-size-s);
  }

  :host([theme~='small'][has-label]) [part='label'] {
    font-size: var(--lumo-font-size-xs);
  }

  :host([theme~='small'][has-label]) [part='error-message'] {
    font-size: var(--lumo-font-size-xxs);
  }

  /* When custom-field is used with components without outer margin */
  :host([theme~='whitespace'][has-label]) [part='label'] {
    padding-bottom: 0.5em;
  }
`;O("vaadin-custom-field",[Bo,zo,yp],{moduleId:"lumo-custom-field"});/**
 * @license
 * Copyright (c) 2019 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const $_=r=>r.split("	"),N_=r=>r.join("	");class ph extends hn(Oe(Yo(G(st(z))))){static get is(){return"vaadin-custom-field"}static get template(){return L`
      <style>
        :host {
          display: inline-flex;
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

        .vaadin-custom-field-container {
          width: 100%;
          display: flex;
          flex-direction: column;
        }

        .inputs-wrapper {
          flex: none;
        }
      </style>

      <div class="vaadin-custom-field-container">
        <div part="label" on-click="focus">
          <slot name="label"></slot>
          <span part="required-indicator" aria-hidden="true"></span>
        </div>

        <div class="inputs-wrapper" on-change="__onInputChange">
          <slot id="slot"></slot>
        </div>

        <div part="helper-text">
          <slot name="helper"></slot>
        </div>

        <div part="error-message">
          <slot name="error-message"></slot>
        </div>
      </div>

      <slot name="tooltip"></slot>
    `}static get properties(){return{name:String,value:{type:String,observer:"__valueChanged",notify:!0},inputs:{type:Array,readOnly:!0},formatValue:{type:Function},parseValue:{type:Function}}}connectedCallback(){super.connectedCallback(),this.__observer&&this.__observer.connect()}disconnectedCallback(){super.disconnectedCallback(),this.__observer&&this.__observer.disconnect()}ready(){super.ready(),this.setAttribute("role","group"),this.ariaTarget=this,this.__setInputsFromSlot(),this.__observer=new xe(this.$.slot,()=>{this.__setInputsFromSlot()}),this._tooltipController=new Ht(this),this.addController(this._tooltipController),this._tooltipController.setShouldShow(t=>!(t.inputs||[]).some(i=>i.opened))}focus(){this.inputs&&this.inputs[0]&&this.inputs[0].focus()}_setFocused(t){super._setFocused(t),t||this.validate()}_shouldRemoveFocus(t){const{relatedTarget:e}=t;return!this.inputs.some(i=>e===(i.focusElement||i))}checkValidity(){return!(this.inputs.filter(e=>!(e.validate||e.checkValidity).call(e)).length||this.required&&!this.value.trim())}_onKeyDown(t){t.key==="Tab"&&(this.inputs.indexOf(t.target)<this.inputs.length-1&&!t.shiftKey||this.inputs.indexOf(t.target)>0&&t.shiftKey?this.dispatchEvent(new CustomEvent("internal-tab")):this.__setValue())}__onInputChange(t){t.stopPropagation(),this.__setValue(),this.validate(),this.dispatchEvent(new CustomEvent("change",{bubbles:!0,cancelable:!1,detail:{value:this.value}}))}__setValue(){this.__settingValue=!0;const t=this.formatValue||N_;this.value=t.apply(this,[this.inputs.map(e=>e.value)]),this.__settingValue=!1}__queryAllAssignedElements(t){const e=[];let i;return t.tagName==="SLOT"?i=t.assignedElements({flatten:!0}):(e.push(t),i=Array.from(t.children)),i.forEach(n=>e.push(...this.__queryAllAssignedElements(n))),e}__isInput(t){return!(t.getAttribute("slot")==="input"||t.getAttribute("slot")==="textarea")&&(t.validate||t.checkValidity)}__getInputsFromSlot(){return this.__queryAllAssignedElements(this.$.slot).filter(t=>this.__isInput(t))}__setInputsFromSlot(){this._setInputs(this.__getInputsFromSlot()),this.__setValue()}__toggleHasValue(t){this.toggleAttribute("has-value",t!==null&&t.trim()!=="")}__valueChanged(t,e){if(this.__settingValue||!this.inputs)return;this.__toggleHasValue(t);const n=(this.parseValue||$_).apply(this,[t]);if(!n||n.length===0){console.warn("Value parser has not provided values array");return}this.inputs.forEach((a,o)=>{a.value=n[o]}),e!==void 0&&this.validate()}}customElements.define(ph.is,ph);const B_=P`
  [part='overlay'] {
    /*
  Width:
      date cell widths
    + month calendar side padding
    + year scroller width
  */
    /* prettier-ignore */
    width:
    calc(
        var(--lumo-size-m) * 7
      + var(--lumo-space-xs) * 2
      + 57px
    );
    height: 100%;
    max-height: calc(var(--lumo-size-m) * 14);
    overflow: hidden;
    -webkit-tap-highlight-color: transparent;
  }

  [part='overlay'] {
    flex-direction: column;
  }

  [part='content'] {
    padding: 0;
    height: 100%;
    overflow: hidden;
    -webkit-mask-image: none;
    mask-image: none;
  }

  :host([top-aligned]) [part~='overlay'] {
    margin-top: var(--lumo-space-xs);
  }

  :host([bottom-aligned]) [part~='overlay'] {
    margin-bottom: var(--lumo-space-xs);
  }

  @media (max-width: 420px), (max-height: 420px) {
    [part='overlay'] {
      width: 100vw;
      height: 70vh;
      max-height: 70vh;
    }
  }
`;O("vaadin-date-picker-overlay",[au,B_],{moduleId:"lumo-date-picker-overlay"});O("vaadin-date-picker-year",P`
    :host([current]) [part='year-number'] {
      color: var(--lumo-primary-text-color);
    }

    :host(:not([current])) [part='year-number'],
    [part='year-separator'] {
      opacity: var(--_lumo-date-picker-year-opacity, 0.7);
      transition: 0.2s opacity;
    }

    [part='year-number'],
    [part='year-separator'] {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 50%;
      transform: translateY(-50%);
    }

    [part='year-separator']::after {
      color: var(--lumo-disabled-text-color);
      content: '\\2022';
    }
  `,{moduleId:"lumo-date-picker-year"});O("vaadin-date-picker-overlay-content",P`
    :host {
      position: relative;
      /* Background for the year scroller, placed here as we are using a mask image on the actual years part */
      background-image: linear-gradient(var(--lumo-shade-5pct), var(--lumo-shade-5pct));
      background-size: 57px 100%;
      background-position: top right;
      background-repeat: no-repeat;
      cursor: default;
    }

    ::slotted([slot='months']) {
      /* Month calendar height:
              header height + margin-bottom
            + weekdays height + margin-bottom
            + date cell heights
            + small margin between month calendars
        */
      /* prettier-ignore */
      --vaadin-infinite-scroller-item-height:
          calc(
              var(--lumo-font-size-l) + var(--lumo-space-m)
            + var(--lumo-font-size-xs) + var(--lumo-space-s)
            + var(--lumo-size-m) * 6
            + var(--lumo-space-s)
          );
      --vaadin-infinite-scroller-buffer-offset: 10%;
      -webkit-mask-image: linear-gradient(transparent, #000 10%, #000 85%, transparent);
      mask-image: linear-gradient(transparent, #000 10%, #000 85%, transparent);
      position: relative;
      margin-right: 57px;
    }

    ::slotted([slot='years']) {
      /* TODO get rid of fixed magic number */
      --vaadin-infinite-scroller-buffer-width: 97px;
      width: 57px;
      height: auto;
      top: 0;
      bottom: 0;
      font-size: var(--lumo-font-size-s);
      box-shadow: inset 2px 0 4px 0 var(--lumo-shade-5pct);
      -webkit-mask-image: linear-gradient(transparent, #000 35%, #000 65%, transparent);
      mask-image: linear-gradient(transparent, #000 35%, #000 65%, transparent);
      cursor: var(--lumo-clickable-cursor);
    }

    ::slotted([slot='years']:hover) {
      --_lumo-date-picker-year-opacity: 1;
    }

    /* TODO unsupported selector */
    #scrollers {
      position: static;
      display: block;
    }

    /* TODO fix this in vaadin-date-picker that it adapts to the width of the year scroller */
    :host([desktop]) ::slotted([slot='months']) {
      right: auto;
    }

    /* Year scroller position indicator */
    ::slotted([slot='years'])::before {
      border: none;
      width: 1em;
      height: 1em;
      background-color: var(--lumo-base-color);
      background-image: linear-gradient(var(--lumo-tint-5pct), var(--lumo-tint-5pct));
      transform: translate(-75%, -50%) rotate(45deg);
      border-top-right-radius: var(--lumo-border-radius-s);
      box-shadow: 2px -2px 6px 0 var(--lumo-shade-5pct);
      z-index: 1;
    }

    [part='toolbar'] {
      padding: var(--lumo-space-s);
      border-bottom-left-radius: var(--lumo-border-radius-l);
      margin-right: 57px;
    }

    [part='toolbar'] ::slotted(vaadin-button) {
      margin: 0;
    }

    /* Narrow viewport mode (fullscreen) */

    :host([fullscreen]) [part='toolbar'] {
      order: -1;
      background-color: var(--lumo-base-color);
    }

    :host([fullscreen]) [part='overlay-header'] {
      order: -2;
      height: var(--lumo-size-m);
      padding: var(--lumo-space-s);
      position: absolute;
      left: 0;
      right: 0;
      justify-content: center;
    }

    :host([fullscreen]) [part='toggle-button'],
    :host([fullscreen]) [part='clear-button'],
    [part='overlay-header'] [part='label'] {
      display: none;
    }

    /* Very narrow screen (year scroller initially hidden) */

    [part='years-toggle-button'] {
      display: flex;
      align-items: center;
      height: var(--lumo-size-s);
      padding: 0 0.5em;
      border-radius: var(--lumo-border-radius-m);
      z-index: 3;
      color: var(--lumo-primary-text-color);
      font-weight: 500;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    }

    :host([years-visible]) [part='years-toggle-button'] {
      background-color: var(--lumo-primary-color);
      color: var(--lumo-primary-contrast-color);
    }

    /* TODO magic number (same as used for media-query in vaadin-date-picker-overlay-content) */
    @media screen and (max-width: 374px) {
      :host {
        background-image: none;
      }

      [part='toolbar'],
      ::slotted([slot='months']) {
        margin-right: 0;
      }

      /* TODO make date-picker adapt to the width of the years part */
      ::slotted([slot='years']) {
        --vaadin-infinite-scroller-buffer-width: 90px;
        width: 50px;
        background-color: var(--lumo-shade-5pct);
      }

      :host([years-visible]) ::slotted([slot='months']) {
        padding-left: 50px;
      }
    }
  `,{moduleId:"lumo-date-picker-overlay-content"});O("vaadin-month-calendar",P`
    :host {
      -moz-user-select: none;
      -webkit-user-select: none;
      -webkit-tap-highlight-color: transparent;
      user-select: none;
      font-size: var(--lumo-font-size-m);
      color: var(--lumo-body-text-color);
      text-align: center;
      padding: 0 var(--lumo-space-xs);
    }

    /* Month header */

    [part='month-header'] {
      color: var(--lumo-header-text-color);
      font-size: var(--lumo-font-size-l);
      line-height: 1;
      font-weight: 500;
      margin-bottom: var(--lumo-space-m);
    }

    /* Week days and numbers */

    [part='weekdays'],
    [part='weekday'],
    [part='week-number'] {
      font-size: var(--lumo-font-size-xxs);
      line-height: 1;
      color: var(--lumo-secondary-text-color);
    }

    [part='weekdays'] {
      margin-bottom: var(--lumo-space-s);
    }

    [part='weekday']:empty,
    [part='week-number'] {
      width: var(--lumo-size-xs);
    }

    /* Date and week number cells */

    [part~='date'],
    [part='week-number'] {
      box-sizing: border-box;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      height: var(--lumo-size-m);
      position: relative;
    }

    [part~='date'] {
      transition: color 0.1s;
    }

    [part~='date']:not(:empty) {
      cursor: var(--lumo-clickable-cursor);
    }

    :host([week-numbers]) [part='weekday']:not(:empty),
    :host([week-numbers]) [part~='date'] {
      width: calc((100% - var(--lumo-size-xs)) / 7);
    }

    /* Today date */

    [part~='date'][part~='today'] {
      color: var(--lumo-primary-text-color);
    }

    /* Focused date */

    [part~='date']::before {
      content: '';
      position: absolute;
      z-index: -1;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      min-width: 2em;
      min-height: 2em;
      width: 80%;
      height: 80%;
      max-height: 100%;
      max-width: 100%;
      border-radius: var(--lumo-border-radius-m);
    }

    [part~='date'][part~='focused']::before {
      box-shadow: 0 0 0 1px var(--lumo-base-color), 0 0 0 3px var(--lumo-primary-color-50pct);
    }

    :host(:not([focused])) [part~='date'][part~='focused']::before {
      animation: vaadin-date-picker-month-calendar-focus-date 1.4s infinite;
    }

    @keyframes vaadin-date-picker-month-calendar-focus-date {
      50% {
        box-shadow: 0 0 0 1px var(--lumo-base-color), 0 0 0 3px transparent;
      }
    }

    [part~='date']:not(:empty):not([part~='disabled']):not([part~='selected']):hover::before {
      background-color: var(--lumo-primary-color-10pct);
    }

    [part~='date'][part~='selected'] {
      color: var(--lumo-primary-contrast-color);
    }

    [part~='date'][part~='selected']::before {
      background-color: var(--lumo-primary-color);
    }

    [part~='date'][part~='disabled'] {
      color: var(--lumo-disabled-text-color);
    }

    @media (pointer: coarse) {
      [part~='date']:hover:not([part~='selected'])::before,
      [part~='focused']:not([part~='selected'])::before {
        display: none;
      }

      [part~='date']:not(:empty):not([part~='disabled']):active::before {
        display: block;
      }

      [part~='date'][part~='selected']::before {
        box-shadow: none;
      }
    }

    /* Disabled */

    :host([disabled]) * {
      color: var(--lumo-disabled-text-color) !important;
    }
  `,{moduleId:"lumo-month-calendar"});const bp=document.createElement("template");bp.innerHTML=`
  <style>
    @keyframes vaadin-date-picker-month-calendar-focus-date {
      50% {
        box-shadow: 0 0 0 2px transparent;
      }
    }
  </style>
`;document.head.appendChild(bp.content);const z_=P`
  :host {
    outline: none;
  }

  [part='toggle-button']::before {
    content: var(--lumo-icons-calendar);
  }

  [part='clear-button']::before {
    content: var(--lumo-icons-cross);
  }

  @media (max-width: 420px), (max-height: 420px) {
    [part='overlay-content'] {
      height: 70vh;
    }
  }

  :host([dir='rtl']) [part='input-field'] ::slotted(input) {
    --_lumo-text-field-overflow-mask-image: linear-gradient(to left, transparent, #000 1.25em);
  }

  :host([dir='rtl']) [part='input-field'] ::slotted(input:placeholder-shown) {
    --_lumo-text-field-overflow-mask-image: none;
  }
`;O("vaadin-date-picker",[cn,z_],{moduleId:"lumo-date-picker"});/**
 * @license
 * Copyright (c) 2016 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */O("vaadin-date-picker-overlay",P`
    [part='overlay'] {
      display: flex;
      flex: auto;
    }

    [part~='content'] {
      flex: auto;
    }
  `,{moduleId:"vaadin-date-picker-overlay-styles"});let Pn;class vh extends $o(ur){static get is(){return"vaadin-date-picker-overlay"}static get template(){return Pn||(Pn=super.template.cloneNode(!0),Pn.content.querySelector('[part~="overlay"]').removeAttribute("tabindex")),Pn}}customElements.define(vh.is,vh);/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const G_=qm(z);class mh extends G_{static get is(){return"dom-repeat"}static get template(){return null}static get properties(){return{items:{type:Array},as:{type:String,value:"item"},indexAs:{type:String,value:"index"},itemsIndexAs:{type:String,value:"itemsIndex"},sort:{type:Function,observer:"__sortChanged"},filter:{type:Function,observer:"__filterChanged"},observe:{type:String,observer:"__observeChanged"},delay:Number,renderedItemCount:{type:Number,notify:!rh,readOnly:!0},initialCount:{type:Number},targetFramerate:{type:Number,value:20},_targetFrameTime:{type:Number,computed:"__computeFrameTime(targetFramerate)"},notifyDomChange:{type:Boolean},reuseChunkedInstances:{type:Boolean}}}static get observers(){return["__itemsChanged(items.*)"]}constructor(){super(),this.__instances=[],this.__renderDebouncer=null,this.__itemsIdxToInstIdx={},this.__chunkCount=null,this.__renderStartTime=null,this.__itemsArrayChanged=!1,this.__shouldMeasureChunk=!1,this.__shouldContinueChunking=!1,this.__chunkingId=0,this.__sortFn=null,this.__filterFn=null,this.__observePaths=null,this.__ctor=null,this.__isDetached=!0,this.template=null,this._templateInfo}disconnectedCallback(){super.disconnectedCallback(),this.__isDetached=!0;for(let t=0;t<this.__instances.length;t++)this.__detachInstance(t);this.__chunkingId&&cancelAnimationFrame(this.__chunkingId)}connectedCallback(){if(super.connectedCallback(),Hm()||(this.style.display="none"),this.__isDetached){this.__isDetached=!1;let t=Ti(Ti(this).parentNode);for(let e=0;e<this.__instances.length;e++)this.__attachInstance(e,t);this.__chunkingId&&this.__render()}}__ensureTemplatized(){if(!this.__ctor){const t=this;let e=this.template=t._templateInfo?t:this.querySelector("template");if(!e){let n=new MutationObserver(()=>{if(this.querySelector("template"))n.disconnect(),this.__render();else throw new Error("dom-repeat requires a <template> child")});return n.observe(this,{childList:!0}),!1}let i={};i[this.as]=!0,i[this.indexAs]=!0,i[this.itemsIndexAs]=!0,this.__ctor=Xm(e,this,{mutableData:this.mutableData,parentModel:!0,instanceProps:i,forwardHostProp:function(n,a){let o=this.__instances;for(let s=0,l;s<o.length&&(l=o[s]);s++)l.forwardHostProp(n,a)},notifyInstanceProp:function(n,a,o){if(Zm(this.as,a)){let s=n[this.itemsIndexAs];a==this.as&&(this.items[s]=o);let l=Qm(this.as,`${JSCompiler_renameProperty("items",this)}.${s}`,a);this.notifyPath(l,o)}}})}return!0}__getMethodHost(){return this.__dataHost._methodHost||this.__dataHost}__functionFromPropertyValue(t){if(typeof t=="string"){let e=t,i=this.__getMethodHost();return function(){return i[e].apply(i,arguments)}}return t}__sortChanged(t){this.__sortFn=this.__functionFromPropertyValue(t),this.items&&this.__debounceRender(this.__render)}__filterChanged(t){this.__filterFn=this.__functionFromPropertyValue(t),this.items&&this.__debounceRender(this.__render)}__computeFrameTime(t){return Math.ceil(1e3/t)}__observeChanged(){this.__observePaths=this.observe&&this.observe.replace(".*",".").split(" ")}__handleObservedPaths(t){if(this.__sortFn||this.__filterFn){if(!t)this.__debounceRender(this.__render,this.delay);else if(this.__observePaths){let e=this.__observePaths;for(let i=0;i<e.length;i++)t.indexOf(e[i])===0&&this.__debounceRender(this.__render,this.delay)}}}__itemsChanged(t){this.items&&!Array.isArray(this.items)&&console.warn("dom-repeat expected array for `items`, found",this.items),this.__handleItemPath(t.path,t.value)||(t.path==="items"&&(this.__itemsArrayChanged=!0),this.__debounceRender(this.__render))}__debounceRender(t,e=0){this.__renderDebouncer=tp.debounce(this.__renderDebouncer,e>0?ep.after(e):Km,t.bind(this)),Jm(this.__renderDebouncer)}render(){this.__debounceRender(this.__render),rp()}__render(){if(!this.__ensureTemplatized())return;let t=this.items||[];const e=this.__sortAndFilterItems(t),i=this.__calculateLimit(e.length);this.__updateInstances(t,i,e),this.initialCount&&(this.__shouldMeasureChunk||this.__shouldContinueChunking)&&(cancelAnimationFrame(this.__chunkingId),this.__chunkingId=requestAnimationFrame(()=>{this.__chunkingId=null,this.__continueChunking()})),this._setRenderedItemCount(this.__instances.length),(!rh||this.notifyDomChange)&&this.dispatchEvent(new CustomEvent("dom-change",{bubbles:!0,composed:!0}))}__sortAndFilterItems(t){let e=new Array(t.length);for(let i=0;i<t.length;i++)e[i]=i;return this.__filterFn&&(e=e.filter((i,n,a)=>this.__filterFn(t[i],n,a))),this.__sortFn&&e.sort((i,n)=>this.__sortFn(t[i],t[n])),e}__calculateLimit(t){let e=t;const i=this.__instances.length;if(this.initialCount){let n;!this.__chunkCount||this.__itemsArrayChanged&&!this.reuseChunkedInstances?(e=Math.min(t,this.initialCount),n=Math.max(e-i,0),this.__chunkCount=n||1):(n=Math.min(Math.max(t-i,0),this.__chunkCount),e=Math.min(i+n,t)),this.__shouldMeasureChunk=n===this.__chunkCount,this.__shouldContinueChunking=e<t,this.__renderStartTime=performance.now()}return this.__itemsArrayChanged=!1,e}__continueChunking(){if(this.__shouldMeasureChunk){const t=performance.now()-this.__renderStartTime,e=this._targetFrameTime/t;this.__chunkCount=Math.round(this.__chunkCount*e)||1}this.__shouldContinueChunking&&this.__debounceRender(this.__render)}__updateInstances(t,e,i){const n=this.__itemsIdxToInstIdx={};let a;for(a=0;a<e;a++){let o=this.__instances[a],s=i[a],l=t[s];n[s]=a,o?(o._setPendingProperty(this.as,l),o._setPendingProperty(this.indexAs,a),o._setPendingProperty(this.itemsIndexAs,s),o._flushProperties()):this.__insertInstance(l,a,s)}for(let o=this.__instances.length-1;o>=a;o--)this.__detachAndRemoveInstance(o)}__detachInstance(t){let e=this.__instances[t];const i=Ti(e.root);for(let n=0;n<e.children.length;n++){let a=e.children[n];i.appendChild(a)}return e}__attachInstance(t,e){let i=this.__instances[t];e.insertBefore(i.root,this)}__detachAndRemoveInstance(t){this.__detachInstance(t),this.__instances.splice(t,1)}__stampInstance(t,e,i){let n={};return n[this.as]=t,n[this.indexAs]=e,n[this.itemsIndexAs]=i,new this.__ctor(n)}__insertInstance(t,e,i){const n=this.__stampInstance(t,e,i);let a=this.__instances[e+1],o=a?a.children[0]:this;return Ti(Ti(this).parentNode).insertBefore(n.root,o),this.__instances[e]=n,n}_showHideChildren(t){for(let e=0;e<this.__instances.length;e++)this.__instances[e]._showHideChildren(t)}__handleItemPath(t,e){let i=t.slice(6),n=i.indexOf("."),a=n<0?i:i.substring(0,n);if(a==parseInt(a,10)){let o=n<0?"":i.substring(n+1);this.__handleObservedPaths(o);let s=this.__itemsIdxToInstIdx[a],l=this.__instances[s];if(l){let u=this.as+(o?"."+o:"");l._setPendingPropertyOrPath(u,e,!1,!0),l._flushProperties()}return!0}}itemForElement(t){let e=this.modelForElement(t);return e&&e[this.as]}indexForElement(t){let e=this.modelForElement(t);return e&&e[this.indexAs]}modelForElement(t){return t_(this.template,t)}}customElements.define(mh.is,mh);/**
 * @license
 * Copyright (c) 2016 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */function Y_(r){let t=r.getDay();t===0&&(t=7);const e=4-t,i=new Date(r.getTime()+e*24*3600*1e3),n=new Date(0,0);n.setFullYear(i.getFullYear());const a=i.getTime()-n.getTime(),o=Math.round(a/(24*3600*1e3));return Math.floor(o/7+1)}function Zt(r,t){return r instanceof Date&&t instanceof Date&&r.getFullYear()===t.getFullYear()&&r.getMonth()===t.getMonth()&&r.getDate()===t.getDate()}function zi(r,t,e){return(!t||r>=t)&&(!e||r<=e)}function wp(r,t){return t.filter(e=>e!==void 0).reduce((e,i)=>{if(!i)return e;if(!e)return i;const n=Math.abs(r.getTime()-i.getTime()),a=Math.abs(e.getTime()-r.getTime());return n<a?i:e})}function fu(r){return{day:r.getDate(),month:r.getMonth(),year:r.getFullYear()}}function xp(r){const t=new Date,e=new Date(t);return e.setDate(1),e.setMonth(parseInt(r)+t.getMonth()),e}function U_(r,t,e=0,i=1){if(t>99)throw new Error("The provided year cannot have more than 2 digits.");if(t<0)throw new Error("The provided year cannot be negative.");let n=t+Math.floor(r.getFullYear()/100)*100;return r<new Date(n-50,e,i)?n-=100:r>new Date(n+50,e,i)&&(n+=100),n}function yr(r){const t=/^([-+]\d{1}|\d{2,4}|[-+]\d{6})-(\d{1,2})-(\d{1,2})$/u.exec(r);if(!t)return;const e=new Date(0,0);return e.setFullYear(parseInt(t[1],10)),e.setMonth(parseInt(t[2],10)-1),e.setDate(parseInt(t[3],10)),e}/**
 * @license
 * Copyright (c) 2016 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class _h extends Oe(G(z)){static get template(){return L`
      <style>
        :host {
          display: block;
        }

        #monthGrid {
          width: 100%;
          border-collapse: collapse;
        }

        #days-container tr,
        #weekdays-container tr {
          display: flex;
        }

        [part~='date'] {
          outline: none;
        }

        [part~='disabled'] {
          pointer-events: none;
        }

        [part='week-number'][hidden],
        [part='weekday'][hidden] {
          display: none;
        }

        [part='weekday'],
        [part~='date'] {
          width: calc(100% / 7);
          padding: 0;
          font-weight: normal;
        }

        [part='weekday']:empty,
        [part='week-number'] {
          width: 12.5%;
          flex-shrink: 0;
          padding: 0;
        }

        :host([week-numbers]) [part='weekday']:not(:empty),
        :host([week-numbers]) [part~='date'] {
          width: 12.5%;
        }
      </style>

      <div part="month-header" id="month-header" aria-hidden="true">[[_getTitle(month, i18n.monthNames)]]</div>
      <table
        id="monthGrid"
        role="grid"
        aria-labelledby="month-header"
        on-touchend="_preventDefault"
        on-touchstart="_onMonthGridTouchStart"
      >
        <thead id="weekdays-container">
          <tr role="row" part="weekdays">
            <th
              part="weekday"
              aria-hidden="true"
              hidden$="[[!_showWeekSeparator(showWeekNumbers, i18n.firstDayOfWeek)]]"
            ></th>
            <template
              is="dom-repeat"
              items="[[_getWeekDayNames(i18n.weekdays, i18n.weekdaysShort, showWeekNumbers, i18n.firstDayOfWeek)]]"
            >
              <th role="columnheader" part="weekday" scope="col" abbr$="[[item.weekDay]]" aria-hidden="true">
                [[item.weekDayShort]]
              </th>
            </template>
          </tr>
        </thead>
        <tbody id="days-container">
          <template is="dom-repeat" items="[[_weeks]]" as="week">
            <tr role="row">
              <td
                part="week-number"
                aria-hidden="true"
                hidden$="[[!_showWeekSeparator(showWeekNumbers, i18n.firstDayOfWeek)]]"
              >
                [[__getWeekNumber(week)]]
              </td>
              <template is="dom-repeat" items="[[week]]">
                <td
                  role="gridcell"
                  part$="[[__getDatePart(item, focusedDate, selectedDate, minDate, maxDate)]]"
                  date="[[item]]"
                  tabindex$="[[__getDayTabindex(item, focusedDate)]]"
                  disabled$="[[__isDayDisabled(item, minDate, maxDate)]]"
                  aria-selected$="[[__getDayAriaSelected(item, selectedDate)]]"
                  aria-disabled$="[[__getDayAriaDisabled(item, minDate, maxDate)]]"
                  aria-label$="[[__getDayAriaLabel(item)]]"
                  >[[_getDate(item)]]</td
                >
              </template>
            </tr>
          </template>
        </tbody>
      </table>
    `}static get is(){return"vaadin-month-calendar"}static get properties(){return{month:{type:Date,value:new Date},selectedDate:{type:Date,notify:!0},focusedDate:Date,showWeekNumbers:{type:Boolean,value:!1},i18n:{type:Object},ignoreTaps:Boolean,_notTapping:Boolean,minDate:{type:Date,value:null},maxDate:{type:Date,value:null},_days:{type:Array,computed:"_getDays(month, i18n.firstDayOfWeek, minDate, maxDate)"},_weeks:{type:Array,computed:"_getWeeks(_days)"},disabled:{type:Boolean,reflectToAttribute:!0,computed:"_isDisabled(month, minDate, maxDate)"}}}static get observers(){return["_showWeekNumbersChanged(showWeekNumbers, i18n.firstDayOfWeek)","__focusedDateChanged(focusedDate, _days)"]}get focusableDateElement(){return[...this.shadowRoot.querySelectorAll("[part~=date]")].find(t=>Zt(t.date,this.focusedDate))}ready(){super.ready(),ce(this.$.monthGrid,"tap",this._handleTap.bind(this))}_isDisabled(t,e,i){const n=new Date(0,0);n.setFullYear(t.getFullYear()),n.setMonth(t.getMonth()),n.setDate(1);const a=new Date(0,0);return a.setFullYear(t.getFullYear()),a.setMonth(t.getMonth()+1),a.setDate(0),e&&i&&e.getMonth()===i.getMonth()&&e.getMonth()===t.getMonth()&&i.getDate()-e.getDate()>=0?!1:!zi(n,e,i)&&!zi(a,e,i)}_getTitle(t,e){if(!(t===void 0||e===void 0))return this.i18n.formatTitle(e[t.getMonth()],t.getFullYear())}_onMonthGridTouchStart(){this._notTapping=!1,setTimeout(()=>{this._notTapping=!0},300)}_dateAdd(t,e){t.setDate(t.getDate()+e)}_applyFirstDayOfWeek(t,e){if(!(t===void 0||e===void 0))return t.slice(e).concat(t.slice(0,e))}_getWeekDayNames(t,e,i,n){if(!(t===void 0||e===void 0||i===void 0||n===void 0))return t=this._applyFirstDayOfWeek(t,n),e=this._applyFirstDayOfWeek(e,n),t=t.map((a,o)=>({weekDay:a,weekDayShort:e[o]})),t}__focusedDateChanged(t,e){e.some(i=>Zt(i,t))?this.removeAttribute("aria-hidden"):this.setAttribute("aria-hidden","true")}_getDate(t){return t?t.getDate():""}_showWeekNumbersChanged(t,e){t&&e===1?this.setAttribute("week-numbers",""):this.removeAttribute("week-numbers")}_showWeekSeparator(t,e){return t&&e===1}_isToday(t){return Zt(new Date,t)}_getDays(t,e){if(t===void 0||e===void 0)return;const i=new Date(0,0);for(i.setFullYear(t.getFullYear()),i.setMonth(t.getMonth()),i.setDate(1);i.getDay()!==e;)this._dateAdd(i,-1);const n=[],a=i.getMonth(),o=t.getMonth();for(;i.getMonth()===o||i.getMonth()===a;)n.push(i.getMonth()===o?new Date(i.getTime()):null),this._dateAdd(i,1);return n}_getWeeks(t){return t.reduce((e,i,n)=>(n%7===0&&e.push([]),e[e.length-1].push(i),e),[])}_handleTap(t){!this.ignoreTaps&&!this._notTapping&&t.target.date&&!t.target.hasAttribute("disabled")&&(this.selectedDate=t.target.date,this.dispatchEvent(new CustomEvent("date-tap",{detail:{date:t.target.date},bubbles:!0,composed:!0})))}_preventDefault(t){t.preventDefault()}__getDatePart(t,e,i,n,a){const o=["date"];return this.__isDayDisabled(t,n,a)&&o.push("disabled"),this.__isDayFocused(t,e)&&o.push("focused"),this.__isDaySelected(t,i)&&o.push("selected"),this._isToday(t)&&o.push("today"),o.join(" ")}__getWeekNumber(t){const e=t.reduce((i,n)=>!i&&n?n:i);return Y_(e)}__isDayFocused(t,e){return Zt(t,e)}__isDaySelected(t,e){return Zt(t,e)}__getDayAriaSelected(t,e){if(this.__isDaySelected(t,e))return"true"}__isDayDisabled(t,e,i){return!zi(t,e,i)}__getDayAriaDisabled(t,e,i){if(!(t===void 0||e===void 0||i===void 0)&&this.__isDayDisabled(t,e,i))return"true"}__getDayAriaLabel(t){if(!t)return"";let e=`${this._getDate(t)} ${this.i18n.monthNames[t.getMonth()]} ${t.getFullYear()}, ${this.i18n.weekdays[t.getDay()]}`;return this._isToday(t)&&(e+=`, ${this.i18n.today}`),e}__getDayTabindex(t,e){return this.__isDayFocused(t,e)?"0":"-1"}}customElements.define(_h.is,_h);/**
 * @license
 * Copyright (c) 2016 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class Ap extends z{static get template(){return L`
      <style>
        :host {
          display: block;
          overflow: hidden;
          height: 500px;
        }

        #scroller {
          position: relative;
          height: 100%;
          overflow: auto;
          outline: none;
          margin-right: -40px;
          -webkit-overflow-scrolling: touch;
          overflow-x: hidden;
        }

        #scroller.notouchscroll {
          -webkit-overflow-scrolling: auto;
        }

        #scroller::-webkit-scrollbar {
          display: none;
        }

        .buffer {
          position: absolute;
          width: var(--vaadin-infinite-scroller-buffer-width, 100%);
          box-sizing: border-box;
          padding-right: 40px;
          top: var(--vaadin-infinite-scroller-buffer-offset, 0);
          animation: fadein 0.2s;
        }

        @keyframes fadein {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
      </style>

      <div id="scroller" on-scroll="_scroll">
        <div class="buffer"></div>
        <div class="buffer"></div>
        <div id="fullHeight"></div>
      </div>
    `}static get properties(){return{bufferSize:{type:Number,value:20},_initialScroll:{value:5e5},_initialIndex:{value:0},_buffers:Array,_preventScrollEvent:Boolean,_mayHaveMomentum:Boolean,_initialized:Boolean,active:{type:Boolean,observer:"_activated"}}}get bufferOffset(){return this._buffers[0].offsetTop}get itemHeight(){if(!this._itemHeightVal){const t=getComputedStyle(this).getPropertyValue("--vaadin-infinite-scroller-item-height"),e="background-position";this.$.fullHeight.style.setProperty(e,t);const i=getComputedStyle(this.$.fullHeight).getPropertyValue(e);this.$.fullHeight.style.removeProperty(e),this._itemHeightVal=parseFloat(i)}return this._itemHeightVal}get _bufferHeight(){return this.itemHeight*this.bufferSize}get position(){return(this.$.scroller.scrollTop-this._buffers[0].translateY)/this.itemHeight+this._firstIndex}set position(t){this._preventScrollEvent=!0,t>this._firstIndex&&t<this._firstIndex+this.bufferSize*2?this.$.scroller.scrollTop=this.itemHeight*(t-this._firstIndex)+this._buffers[0].translateY:(this._initialIndex=~~t,this._reset(),this._scrollDisabled=!0,this.$.scroller.scrollTop+=t%1*this.itemHeight,this._scrollDisabled=!1),this._mayHaveMomentum&&(this.$.scroller.classList.add("notouchscroll"),this._mayHaveMomentum=!1,setTimeout(()=>{this.$.scroller.classList.remove("notouchscroll")},10))}ready(){super.ready(),this._buffers=[...this.shadowRoot.querySelectorAll(".buffer")],this.$.fullHeight.style.height=`${this._initialScroll*2}px`,e_&&(this.$.scroller.tabIndex=-1)}forceUpdate(){this._debouncerUpdateClones&&(this._buffers[0].updated=this._buffers[1].updated=!1,this._updateClones(),this._debouncerUpdateClones.cancel())}_createElement(){}_updateElement(t,e){}_activated(t){t&&!this._initialized&&(this._createPool(),this._initialized=!0)}_finishInit(){this._initDone||(this._buffers.forEach(t=>{[...t.children].forEach(e=>{this._ensureStampedInstance(e._itemWrapper)})}),this._buffers[0].translateY||this._reset(),this._initDone=!0,this.dispatchEvent(new CustomEvent("init-done")))}_translateBuffer(t){const e=t?1:0;this._buffers[e].translateY=this._buffers[e?0:1].translateY+this._bufferHeight*(e?-1:1),this._buffers[e].style.transform=`translate3d(0, ${this._buffers[e].translateY}px, 0)`,this._buffers[e].updated=!1,this._buffers.reverse()}_scroll(){if(this._scrollDisabled)return;const t=this.$.scroller.scrollTop;(t<this._bufferHeight||t>this._initialScroll*2-this._bufferHeight)&&(this._initialIndex=~~this.position,this._reset());const e=this.itemHeight+this.bufferOffset,i=t>this._buffers[1].translateY+e,n=t<this._buffers[0].translateY+e;(i||n)&&(this._translateBuffer(n),this._updateClones()),this._preventScrollEvent||(this.dispatchEvent(new CustomEvent("custom-scroll",{bubbles:!1,composed:!0})),this._mayHaveMomentum=!0),this._preventScrollEvent=!1,this._debouncerScrollFinish=Ae.debounce(this._debouncerScrollFinish,ir.after(200),()=>{const a=this.$.scroller.getBoundingClientRect();!this._isVisible(this._buffers[0],a)&&!this._isVisible(this._buffers[1],a)&&(this.position=this.position)})}_reset(){this._scrollDisabled=!0,this.$.scroller.scrollTop=this._initialScroll,this._buffers[0].translateY=this._initialScroll-this._bufferHeight,this._buffers[1].translateY=this._initialScroll,this._buffers.forEach(t=>{t.style.transform=`translate3d(0, ${t.translateY}px, 0)`}),this._buffers[0].updated=this._buffers[1].updated=!1,this._updateClones(!0),this._debouncerUpdateClones=Ae.debounce(this._debouncerUpdateClones,ir.after(200),()=>{this._buffers[0].updated=this._buffers[1].updated=!1,this._updateClones()}),this._scrollDisabled=!1}_createPool(){const t=this.getBoundingClientRect();this._buffers.forEach(e=>{for(let i=0;i<this.bufferSize;i++){const n=document.createElement("div");n.style.height=`${this.itemHeight}px`,n.instance={};const a=`vaadin-infinite-scroller-item-content-${Uo()}`,o=document.createElement("slot");o.setAttribute("name",a),o._itemWrapper=n,e.appendChild(o),n.setAttribute("slot",a),this.appendChild(n),this._isVisible(n,t)&&this._ensureStampedInstance(n)}}),an(this,()=>{this._finishInit()})}_ensureStampedInstance(t){if(t.firstElementChild)return;const e=t.instance;t.instance=this._createElement(),t.appendChild(t.instance),Object.keys(e).forEach(i=>{t.instance.set(i,e[i])})}_updateClones(t){this._firstIndex=~~((this._buffers[0].translateY-this._initialScroll)/this.itemHeight)+this._initialIndex;const e=t?this.$.scroller.getBoundingClientRect():void 0;this._buffers.forEach((i,n)=>{if(!i.updated){const a=this._firstIndex+this.bufferSize*n;[...i.children].forEach((o,s)=>{const l=o._itemWrapper;(!t||this._isVisible(l,e))&&this._updateElement(l.instance,a+s)}),i.updated=!0}})}_isVisible(t,e){const i=t.getBoundingClientRect();return i.bottom>e.top&&i.top<e.bottom}}/**
 * @license
 * Copyright (c) 2016 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const j_=L`
  <style>
    :host {
      --vaadin-infinite-scroller-item-height: 270px;
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      height: 100%;
    }
  </style>
`;let Dn;class gh extends Ap{static get is(){return"vaadin-date-picker-month-scroller"}static get template(){return Dn||(Dn=super.template.cloneNode(!0),Dn.content.appendChild(j_.content.cloneNode(!0))),Dn}static get properties(){return{bufferSize:{type:Number,value:3}}}_createElement(){return document.createElement("vaadin-month-calendar")}_updateElement(t,e){t.month=xp(e)}}customElements.define(gh.is,gh);/**
 * @license
 * Copyright (c) 2016 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const W_=L`
  <style>
    :host {
      --vaadin-infinite-scroller-item-height: 80px;
      width: 50px;
      display: block;
      height: 100%;
      position: absolute;
      right: 0;
      transform: translateX(100%);
      -webkit-tap-highlight-color: transparent;
      -webkit-user-select: none;
      -moz-user-select: none;
      user-select: none;
      /* Center the year scroller position. */
      --vaadin-infinite-scroller-buffer-offset: 50%;
    }

    :host::before {
      content: '';
      display: block;
      background: transparent;
      width: 0;
      height: 0;
      position: absolute;
      left: 0;
      top: 50%;
      transform: translateY(-50%);
      border-width: 6px;
      border-style: solid;
      border-color: transparent;
      border-left-color: #000;
    }
  </style>
`;let kn;class yh extends Ap{static get is(){return"vaadin-date-picker-year-scroller"}static get template(){return kn||(kn=super.template.cloneNode(!0),kn.content.appendChild(W_.content.cloneNode(!0))),kn}static get properties(){return{bufferSize:{type:Number,value:12}}}_createElement(){return document.createElement("vaadin-date-picker-year")}_updateElement(t,e){t.year=this._yearAfterXYears(e)}_yearAfterXYears(t){const e=new Date,i=new Date(e);return i.setFullYear(parseInt(t)+e.getFullYear()),i.getFullYear()}}customElements.define(yh.is,yh);/**
 * @license
 * Copyright (c) 2016 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class bh extends G(z){static get is(){return"vaadin-date-picker-year"}static get template(){return L`
      <style>
        :host {
          display: block;
          height: 100%;
        }
      </style>
      <div part="year-number">[[year]]</div>
      <div part="year-separator" aria-hidden="true"></div>
    `}static get properties(){return{year:{type:String},selectedDate:{type:Object}}}static get observers(){return["__updateSelected(year, selectedDate)"]}__updateSelected(t,e){this.toggleAttribute("selected",e&&e.getFullYear()===t),this.toggleAttribute("current",t===new Date().getFullYear())}}customElements.define(bh.is,bh);/**
 * @license
 * Copyright (c) 2016 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class wh extends Et(G(Jt(z))){static get template(){return L`
      <style>
        :host {
          display: flex;
          flex-direction: column;
          height: 100%;
          width: 100%;
          outline: none;
        }

        [part='overlay-header'] {
          display: flex;
          flex-shrink: 0;
          flex-wrap: nowrap;
          align-items: center;
        }

        :host(:not([fullscreen])) [part='overlay-header'] {
          display: none;
        }

        [part='label'] {
          flex-grow: 1;
        }

        [hidden] {
          display: none !important;
        }

        [part='years-toggle-button'] {
          display: flex;
        }

        #scrollers {
          display: flex;
          height: 100%;
          width: 100%;
          position: relative;
          overflow: hidden;
        }

        :host([desktop]) ::slotted([slot='months']) {
          right: 50px;
          transform: none !important;
        }

        :host([desktop]) ::slotted([slot='years']) {
          transform: none !important;
        }

        :host(.animate) ::slotted([slot='months']),
        :host(.animate) ::slotted([slot='years']) {
          transition: all 200ms;
        }

        [part='toolbar'] {
          display: flex;
          justify-content: space-between;
          z-index: 2;
          flex-shrink: 0;
        }
      </style>

      <div part="overlay-header" on-touchend="_preventDefault" aria-hidden="true">
        <div part="label">[[_formatDisplayed(selectedDate, i18n.formatDate, label)]]</div>
        <div part="clear-button" hidden$="[[!selectedDate]]"></div>
        <div part="toggle-button"></div>

        <div part="years-toggle-button" hidden$="[[_desktopMode]]" aria-hidden="true">
          [[_yearAfterXMonths(_visibleMonthIndex)]]
        </div>
      </div>

      <div id="scrollers">
        <slot name="months"></slot>
        <slot name="years"></slot>
      </div>

      <div on-touchend="_preventDefault" role="toolbar" part="toolbar">
        <slot name="today-button"></slot>
        <slot name="cancel-button"></slot>
      </div>
    `}static get is(){return"vaadin-date-picker-overlay-content"}static get properties(){return{scrollDuration:{type:Number,value:300},selectedDate:{type:Date,value:null},focusedDate:{type:Date,notify:!0,observer:"_focusedDateChanged"},_focusedMonthDate:Number,initialPosition:{type:Date,observer:"_initialPositionChanged"},_originDate:{value:new Date},_visibleMonthIndex:Number,_desktopMode:{type:Boolean,observer:"_desktopModeChanged"},_desktopMediaQuery:{type:String,value:"(min-width: 375px)"},_translateX:{observer:"_translateXChanged"},_yearScrollerWidth:{value:50},i18n:{type:Object},showWeekNumbers:{type:Boolean,value:!1},_ignoreTaps:Boolean,_notTapping:Boolean,minDate:Date,maxDate:Date,label:String,_cancelButton:{type:Object},_todayButton:{type:Object},calendars:{type:Array,value:()=>[]},years:{type:Array,value:()=>[]}}}static get observers(){return["__updateCalendars(calendars, i18n, minDate, maxDate, selectedDate, focusedDate, showWeekNumbers, _ignoreTaps, _theme)","__updateCancelButton(_cancelButton, i18n)","__updateTodayButton(_todayButton, i18n, minDate, maxDate)","__updateYears(years, selectedDate, _theme)"]}get __useSubMonthScrolling(){return this._monthScroller.clientHeight<this._monthScroller.itemHeight+this._monthScroller.bufferOffset}get focusableDateElement(){return this.calendars.map(t=>t.focusableDateElement).find(Boolean)}ready(){super.ready(),this.setAttribute("role","dialog"),ce(this.$.scrollers,"track",this._track.bind(this)),ce(this.shadowRoot.querySelector('[part="clear-button"]'),"tap",this._clear.bind(this)),ce(this.shadowRoot.querySelector('[part="toggle-button"]'),"tap",this._cancel.bind(this)),ce(this.shadowRoot.querySelector('[part="years-toggle-button"]'),"tap",this._toggleYearScroller.bind(this)),this.addController(new ou(this._desktopMediaQuery,t=>{this._desktopMode=t})),this.addController(new pt(this,"today-button","vaadin-button",{observe:!1,initializer:t=>{t.setAttribute("theme","tertiary"),t.addEventListener("keydown",e=>this.__onTodayButtonKeyDown(e)),ce(t,"tap",this._onTodayTap.bind(this)),this._todayButton=t}})),this.addController(new pt(this,"cancel-button","vaadin-button",{observe:!1,initializer:t=>{t.setAttribute("theme","tertiary"),t.addEventListener("keydown",e=>this.__onCancelButtonKeyDown(e)),ce(t,"tap",this._cancel.bind(this)),this._cancelButton=t}})),this.__initMonthScroller(),this.__initYearScroller()}connectedCallback(){super.connectedCallback(),this._closeYearScroller(),this._toggleAnimateClass(!0),r_(this.$.scrollers,"pan-y")}focusCancel(){this._cancelButton.focus()}scrollToDate(t,e){const i=this.__useSubMonthScrolling?this._calculateWeekScrollOffset(t):0;this._scrollToPosition(this._differenceInMonths(t,this._originDate)+i,e),this._monthScroller.forceUpdate()}__initMonthScroller(){this.addController(new pt(this,"months","vaadin-date-picker-month-scroller",{observe:!1,initializer:t=>{t.addEventListener("custom-scroll",()=>{this._onMonthScroll()}),t.addEventListener("touchstart",()=>{this._onMonthScrollTouchStart()}),t.addEventListener("keydown",e=>{this.__onMonthCalendarKeyDown(e)}),t.addEventListener("init-done",()=>{const e=[...this.querySelectorAll("vaadin-month-calendar")];e.forEach(i=>{i.addEventListener("selected-date-changed",n=>{this.selectedDate=n.detail.value})}),this.calendars=e}),this._monthScroller=t}}))}__initYearScroller(){this.addController(new pt(this,"years","vaadin-date-picker-year-scroller",{observe:!1,initializer:t=>{t.setAttribute("aria-hidden","true"),ce(t,"tap",e=>{this._onYearTap(e)}),t.addEventListener("custom-scroll",()=>{this._onYearScroll()}),t.addEventListener("touchstart",()=>{this._onYearScrollTouchStart()}),t.addEventListener("init-done",()=>{this.years=[...this.querySelectorAll("vaadin-date-picker-year")]}),this._yearScroller=t}}))}__updateCancelButton(t,e){t&&(t.textContent=e&&e.cancel)}__updateTodayButton(t,e,i,n){t&&(t.textContent=e&&e.today,t.disabled=!this._isTodayAllowed(i,n))}__updateCalendars(t,e,i,n,a,o,s,l,u){t&&t.length&&t.forEach(h=>{h.setProperties({i18n:e,minDate:i,maxDate:n,focusedDate:o,selectedDate:a,showWeekNumbers:s,ignoreTaps:l}),u?h.setAttribute("theme",u):h.removeAttribute("theme")})}__updateYears(t,e,i){t&&t.length&&t.forEach(n=>{n.selectedDate=e,i?n.setAttribute("theme",i):n.removeAttribute("theme")})}_selectDate(t){this.selectedDate=t,this.dispatchEvent(new CustomEvent("date-selected",{detail:{date:t},bubbles:!0,composed:!0}))}_desktopModeChanged(t){this.toggleAttribute("desktop",t)}_focusedDateChanged(t){this.revealDate(t)}revealDate(t,e=!0){if(!t)return;const i=this._differenceInMonths(t,this._originDate);if(this.__useSubMonthScrolling){const l=this._calculateWeekScrollOffset(t);this._scrollToPosition(i+l,e);return}const n=this._monthScroller.position>i,o=Math.max(this._monthScroller.itemHeight,this._monthScroller.clientHeight-this._monthScroller.bufferOffset*2)/this._monthScroller.itemHeight,s=this._monthScroller.position+o-1<i;n?this._scrollToPosition(i,e):s&&this._scrollToPosition(i-o+1,e)}_calculateWeekScrollOffset(t){const e=new Date(0,0);e.setFullYear(t.getFullYear()),e.setMonth(t.getMonth()),e.setDate(1);let i=0;for(;e.getDate()<t.getDate();)e.setDate(e.getDate()+1),e.getDay()===this.i18n.firstDayOfWeek&&(i+=1);return i/6}_initialPositionChanged(t){this._monthScroller&&this._yearScroller&&(this._monthScroller.active=!0,this._yearScroller.active=!0),this.scrollToDate(t)}_repositionYearScroller(){const t=this._monthScroller.position;this._visibleMonthIndex=Math.floor(t),this._yearScroller.position=(t+this._originDate.getMonth())/12}_repositionMonthScroller(){this._monthScroller.position=this._yearScroller.position*12-this._originDate.getMonth(),this._visibleMonthIndex=Math.floor(this._monthScroller.position)}_onMonthScroll(){this._repositionYearScroller(),this._doIgnoreTaps()}_onYearScroll(){this._repositionMonthScroller(),this._doIgnoreTaps()}_onYearScrollTouchStart(){this._notTapping=!1,setTimeout(()=>{this._notTapping=!0},300),this._repositionMonthScroller()}_onMonthScrollTouchStart(){this._repositionYearScroller()}_doIgnoreTaps(){this._ignoreTaps=!0,this._debouncer=Ae.debounce(this._debouncer,ir.after(300),()=>{this._ignoreTaps=!1})}_formatDisplayed(t,e,i){return t?e(fu(t)):i}_onTodayTap(){const t=new Date;Math.abs(this._monthScroller.position-this._differenceInMonths(t,this._originDate))<.001?(this._selectDate(t),this._close()):this._scrollToCurrentMonth()}_scrollToCurrentMonth(){this.focusedDate&&(this.focusedDate=new Date),this.scrollToDate(new Date,!0)}_onYearTap(t){if(!this._ignoreTaps&&!this._notTapping){const i=(t.detail.y-(this._yearScroller.getBoundingClientRect().top+this._yearScroller.clientHeight/2))/this._yearScroller.itemHeight;this._scrollToPosition(this._monthScroller.position+i*12,!0)}}_scrollToPosition(t,e){if(this._targetPosition!==void 0){this._targetPosition=t;return}if(!e){this._monthScroller.position=t,this._targetPosition=void 0,this._repositionYearScroller(),this.__tryFocusDate();return}this._targetPosition=t;let i;this._revealPromise=new Promise(l=>{i=l});const n=(l,u,h,c)=>(l/=c/2,l<1?h/2*l*l+u:(l-=1,-h/2*(l*(l-2)-1)+u));let a=0;const o=this._monthScroller.position,s=l=>{a||(a=l);const u=l-a;if(u<this.scrollDuration){const h=n(u,o,this._targetPosition-o,this.scrollDuration);this._monthScroller.position=h,window.requestAnimationFrame(s)}else this.dispatchEvent(new CustomEvent("scroll-animation-finished",{bubbles:!0,composed:!0,detail:{position:this._targetPosition,oldPosition:o}})),this._monthScroller.position=this._targetPosition,this._targetPosition=void 0,i(),this._revealPromise=void 0;setTimeout(this._repositionYearScroller.bind(this),1)};window.requestAnimationFrame(s)}_limit(t,e){return Math.min(e.max,Math.max(e.min,t))}_handleTrack(t){if(Math.abs(t.detail.dx)<10||Math.abs(t.detail.ddy)>10)return;Math.abs(t.detail.ddx)>this._yearScrollerWidth/3&&this._toggleAnimateClass(!0);const e=this._translateX+t.detail.ddx;this._translateX=this._limit(e,{min:0,max:this._yearScrollerWidth})}_track(t){if(!this._desktopMode)switch(t.detail.state){case"start":this._toggleAnimateClass(!1);break;case"track":this._handleTrack(t);break;case"end":this._toggleAnimateClass(!0),this._translateX>=this._yearScrollerWidth/2?this._closeYearScroller():this._openYearScroller();break}}_toggleAnimateClass(t){t?this.classList.add("animate"):this.classList.remove("animate")}_toggleYearScroller(){this._isYearScrollerVisible()?this._closeYearScroller():this._openYearScroller()}_openYearScroller(){this._translateX=0,this.setAttribute("years-visible","")}_closeYearScroller(){this.removeAttribute("years-visible"),this._translateX=this._yearScrollerWidth}_isYearScrollerVisible(){return this._translateX<this._yearScrollerWidth/2}_translateXChanged(t){this._desktopMode||(this._monthScroller.style.transform=`translateX(${t-this._yearScrollerWidth}px)`,this._yearScroller.style.transform=`translateX(${t}px)`)}_yearAfterXMonths(t){return xp(t).getFullYear()}_differenceInMonths(t,e){return(t.getFullYear()-e.getFullYear())*12-e.getMonth()+t.getMonth()}_clear(){this._selectDate("")}_close(){this.dispatchEvent(new CustomEvent("close",{bubbles:!0,composed:!0}))}_cancel(){this.focusedDate=this.selectedDate,this._close()}_preventDefault(t){t.preventDefault()}__toggleDate(t){Zt(t,this.selectedDate)?(this._clear(),this.focusedDate=t):this._selectDate(t)}__onMonthCalendarKeyDown(t){let e=!1;switch(t.key){case"ArrowDown":this._moveFocusByDays(7),e=!0;break;case"ArrowUp":this._moveFocusByDays(-7),e=!0;break;case"ArrowRight":this._moveFocusByDays(this.__isRTL?-1:1),e=!0;break;case"ArrowLeft":this._moveFocusByDays(this.__isRTL?1:-1),e=!0;break;case"Enter":this._selectDate(this.focusedDate),this._close(),e=!0;break;case" ":this.__toggleDate(this.focusedDate),e=!0;break;case"Home":this._moveFocusInsideMonth(this.focusedDate,"minDate"),e=!0;break;case"End":this._moveFocusInsideMonth(this.focusedDate,"maxDate"),e=!0;break;case"PageDown":this._moveFocusByMonths(t.shiftKey?12:1),e=!0;break;case"PageUp":this._moveFocusByMonths(t.shiftKey?-12:-1),e=!0;break;case"Tab":this._onTabKeyDown(t,"calendar");break}e&&(t.preventDefault(),t.stopPropagation())}_onTabKeyDown(t,e){switch(t.stopPropagation(),e){case"calendar":t.shiftKey&&(t.preventDefault(),this.hasAttribute("fullscreen")?this.focusCancel():this.__focusInput());break;case"today":t.shiftKey&&(t.preventDefault(),this.focusDateElement());break;case"cancel":t.shiftKey||(t.preventDefault(),this.hasAttribute("fullscreen")?this.focusDateElement():this.__focusInput());break}}__onTodayButtonKeyDown(t){t.key==="Tab"&&this._onTabKeyDown(t,"today")}__onCancelButtonKeyDown(t){t.key==="Tab"&&this._onTabKeyDown(t,"cancel")}__focusInput(){this.dispatchEvent(new CustomEvent("focus-input",{bubbles:!0,composed:!0}))}__tryFocusDate(){if(this.__pendingDateFocus){const e=this.focusableDateElement;e&&Zt(e.date,this.__pendingDateFocus)&&(delete this.__pendingDateFocus,e.focus())}}async focusDate(t,e){const i=t||this.selectedDate||this.initialPosition||new Date;this.focusedDate=i,e||(this._focusedMonthDate=i.getDate()),await this.focusDateElement(!1)}async focusDateElement(t=!0){this.__pendingDateFocus=this.focusedDate,this.calendars.length||await new Promise(e=>{an(this,()=>{rp(),e()})}),t&&this.revealDate(this.focusedDate),this._revealPromise&&await this._revealPromise,this.__tryFocusDate()}_focusClosestDate(t){this.focusDate(wp(t,[this.minDate,this.maxDate]))}_focusAllowedDate(t,e,i){this._dateAllowed(t)?this.focusDate(t,i):this._dateAllowed(this.focusedDate)?e>0?this.focusDate(this.maxDate):this.focusDate(this.minDate):this._focusClosestDate(this.focusedDate)}_getDateDiff(t,e){const i=new Date(0,0);return i.setFullYear(this.focusedDate.getFullYear()),i.setMonth(this.focusedDate.getMonth()+t),e&&i.setDate(this.focusedDate.getDate()+e),i}_moveFocusByDays(t){const e=this._getDateDiff(0,t);this._focusAllowedDate(e,t,!1)}_moveFocusByMonths(t){const e=this._getDateDiff(t),i=e.getMonth();this._focusedMonthDate||(this._focusedMonthDate=this.focusedDate.getDate()),e.setDate(this._focusedMonthDate),e.getMonth()!==i&&e.setDate(0),this._focusAllowedDate(e,t,!0)}_moveFocusInsideMonth(t,e){const i=new Date(0,0);i.setFullYear(t.getFullYear()),e==="minDate"?(i.setMonth(t.getMonth()),i.setDate(1)):(i.setMonth(t.getMonth()+1),i.setDate(0)),this._dateAllowed(i)?this.focusDate(i):this._dateAllowed(t)?this.focusDate(this[e]):this._focusClosestDate(t)}_dateAllowed(t,e=this.minDate,i=this.maxDate){return(!e||t>=e)&&(!i||t<=i)}_isTodayAllowed(t,e){const i=new Date,n=new Date(0,0);return n.setFullYear(i.getFullYear()),n.setMonth(i.getMonth()),n.setDate(i.getDate()),this._dateAllowed(n,t,e)}}customElements.define(wh.is,wh);/**
 * @license
 * Copyright (c) 2016 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const V_=r=>class extends No(Et(su(i_(Yo(r))))){static get properties(){return{_selectedDate:{type:Date},_focusedDate:Date,value:{type:String,notify:!0,value:""},initialPosition:String,opened:{type:Boolean,reflectToAttribute:!0,notify:!0,observer:"_openedChanged"},autoOpenDisabled:Boolean,showWeekNumbers:{type:Boolean,value:!1},_fullscreen:{type:Boolean,value:!1},_fullscreenMediaQuery:{value:"(max-width: 420px), (max-height: 420px)"},i18n:{type:Object,value:()=>({monthNames:["January","February","March","April","May","June","July","August","September","October","November","December"],weekdays:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],weekdaysShort:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],firstDayOfWeek:0,today:"Today",cancel:"Cancel",referenceDate:"",formatDate(e){const i=String(e.year).replace(/\d+/u,n=>"0000".substr(n.length)+n);return[e.month+1,e.day,i].join("/")},parseDate(e){const i=e.split("/"),n=new Date;let a,o=n.getMonth(),s=n.getFullYear();if(i.length===3){if(o=parseInt(i[0])-1,a=parseInt(i[1]),s=parseInt(i[2]),i[2].length<3&&s>=0){const l=this.referenceDate?yr(this.referenceDate):new Date;s=U_(l,s,o,a)}}else i.length===2?(o=parseInt(i[0])-1,a=parseInt(i[1])):i.length===1&&(a=parseInt(i[0]));if(a!==void 0)return{day:a,month:o,year:s}},formatTitle:(e,i)=>`${e} ${i}`})},min:{type:String},max:{type:String},_minDate:{type:Date,computed:"__computeMinOrMaxDate(min)"},_maxDate:{type:Date,computed:"__computeMinOrMaxDate(max)"},_noInput:{type:Boolean,computed:"_isNoInput(inputElement, _fullscreen, _ios, i18n, opened, autoOpenDisabled)"},_ios:{type:Boolean,value:Xf},_focusOverlayOnOpen:Boolean,_overlayContent:Object,_hasInputValue:{type:Boolean}}}static get observers(){return["_selectedDateChanged(_selectedDate, i18n.formatDate)","_focusedDateChanged(_focusedDate, i18n.formatDate)","__updateOverlayContent(_overlayContent, i18n, label, _minDate, _maxDate, _focusedDate, _selectedDate, showWeekNumbers)","__updateOverlayContentTheme(_overlayContent, _theme)","__updateOverlayContentFullScreen(_overlayContent, _fullscreen)"]}static get constraints(){return[...super.constraints,"min","max"]}constructor(){super(),this._boundOnClick=this._onClick.bind(this),this._boundOnScroll=this._onScroll.bind(this),this._boundOverlayRenderer=this._overlayRenderer.bind(this)}get _inputElementValue(){return super._inputElementValue}set _inputElementValue(e){super._inputElementValue=e,this._hasInputValue=!1}get clearElement(){return null}get _nativeInput(){return this.inputElement?this.inputElement.focusElement||this.inputElement:null}_onFocus(e){super._onFocus(e),this._noInput&&e.target.blur()}_onBlur(e){super._onBlur(e),this.opened||(this.autoOpenDisabled&&this._selectParsedOrFocusedDate(),this.validate(),this._inputElementValue===""&&this.value!==""&&(this.value=""))}ready(){super.ready(),this.addEventListener("click",this._boundOnClick),this.addController(new ou(this._fullscreenMediaQuery,i=>{this._fullscreen=i})),this.addController(new n_(this));const e=this.$.overlay;this._overlayElement=e,e.renderer=this._boundOverlayRenderer,this.addEventListener("mousedown",()=>this.__bringToFront()),this.addEventListener("touchstart",()=>this.__bringToFront())}disconnectedCallback(){super.disconnectedCallback(),this.opened=!1}_propertiesChanged(e,i,n){super._propertiesChanged(e,i,n),"value"in i&&this.__dispatchChange&&(this.dispatchEvent(new CustomEvent("change",{bubbles:!0})),this.__dispatchChange=!1)}open(){!this.disabled&&!this.readonly&&(this.opened=!0)}close(){this.$.overlay.close()}_overlayRenderer(e){if(e.firstChild)return;const i=document.createElement("vaadin-date-picker-overlay-content");e.appendChild(i),this._overlayContent=i,i.addEventListener("close",()=>{this._close()}),i.addEventListener("focus-input",this._focusAndSelect.bind(this)),i.addEventListener("date-tap",n=>{this.__userConfirmedDate=!0,this._selectDate(n.detail.date),this._close()}),i.addEventListener("date-selected",n=>{this.__userConfirmedDate=!!n.detail.date,this._selectDate(n.detail.date)}),i.addEventListener("focusin",()=>{this._keyboardActive&&this._setFocused(!0)}),i.addEventListener("focused-date-changed",n=>{this._focusedDate=n.detail.value})}checkValidity(){const e=this._inputElementValue,i=!e||!!this._selectedDate&&e===this._getFormattedDate(this.i18n.formatDate,this._selectedDate),n=!this._selectedDate||zi(this._selectedDate,this._minDate,this._maxDate);let a=!0;return this.inputElement&&(this.inputElement.checkValidity?a=this.inputElement.checkValidity():this.inputElement.validate&&(a=this.inputElement.validate())),i&&n&&a}_shouldSetFocus(e){return!this._shouldKeepFocusRing}_shouldRemoveFocus(e){return!this.opened}_setFocused(e){super._setFocused(e),this._shouldKeepFocusRing=e&&this._keyboardActive}_selectDate(e){const i=this._formatISO(e);this.value!==i&&(this.__dispatchChange=!0),this._selectedDate=e}_close(){this._focus(),this.close()}__bringToFront(){requestAnimationFrame(()=>{this.$.overlay.bringToFront()})}_isNoInput(e,i,n,a,o,s){return!e||i&&(!s||o)||n&&o||!a.parseDate}_formatISO(e){if(!(e instanceof Date))return"";const i=(h,c="00")=>(c+h).substr((c+h).length-c.length);let n="",a="0000",o=e.getFullYear();o<0?(o=-o,n="-",a="000000"):e.getFullYear()>=1e4&&(n="+",a="000000");const s=n+i(o,a),l=i(e.getMonth()+1),u=i(e.getDate());return[s,l,u].join("-")}_inputElementChanged(e){super._inputElementChanged(e),e&&(e.autocomplete="off",e.setAttribute("role","combobox"),e.setAttribute("aria-haspopup","dialog"),e.setAttribute("aria-expanded",!!this.opened),this._applyInputValue(this._selectedDate))}_openedChanged(e){this.inputElement&&this.inputElement.setAttribute("aria-expanded",e)}_selectedDateChanged(e,i){if(e===void 0||i===void 0)return;const n=this._formatISO(e);this.__keepInputValue||this._applyInputValue(e),n!==this.value&&(this.validate(),this.value=n),this._ignoreFocusedDateChange=!0,this._focusedDate=e,this._ignoreFocusedDateChange=!1}_focusedDateChanged(e,i){e===void 0||i===void 0||!this._ignoreFocusedDateChange&&!this._noInput&&this._applyInputValue(e)}_valueChanged(e,i){const n=yr(e);if(e&&!n){this.value=i;return}e?Zt(this._selectedDate,n)||(this._selectedDate=n,i!==void 0&&this.validate()):this._selectedDate=null,this._toggleHasValue(this._hasValue)}__updateOverlayContent(e,i,n,a,o,s,l,u){e&&e.setProperties({i18n:i,label:n,minDate:a,maxDate:o,focusedDate:s,selectedDate:l,showWeekNumbers:u})}__updateOverlayContentTheme(e,i){e&&(i?e.setAttribute("theme",i):e.removeAttribute("theme"))}__updateOverlayContentFullScreen(e,i){e&&e.toggleAttribute("fullscreen",i)}_onOverlayEscapePress(){this._focusedDate=this._selectedDate,this._close()}_onOverlayOpened(){const e=this._getInitialPosition();this._overlayContent.initialPosition=e;const i=this._overlayContent.focusedDate||e;this._overlayContent.scrollToDate(i),this._ignoreFocusedDateChange=!0,this._overlayContent.focusedDate=i,this._ignoreFocusedDateChange=!1,window.addEventListener("scroll",this._boundOnScroll,!0),this._focusOverlayOnOpen?(this._overlayContent.focusDateElement(),this._focusOverlayOnOpen=!1):this._focus(),this._noInput&&this.focusElement&&(this.focusElement.blur(),this._overlayContent.focusDateElement())}_getInitialPosition(){const e=yr(this.initialPosition),i=this._selectedDate||this._overlayContent.initialPosition||e||new Date;return e||zi(i,this._minDate,this._maxDate)?i:wp(i,[this._minDate,this._maxDate])}_selectParsedOrFocusedDate(){if(this._ignoreFocusedDateChange=!0,this.i18n.parseDate){const e=this._inputElementValue||"",i=this._getParsedDate(e);this._isValidDate(i)?this._selectDate(i):(this.__keepInputValue=!0,this._selectDate(null),this._selectedDate=null,this.__keepInputValue=!1)}else this._focusedDate&&this._selectDate(this._focusedDate);this._ignoreFocusedDateChange=!1}_onOverlayClosed(){window.removeEventListener("scroll",this._boundOnScroll,!0),this.__userConfirmedDate?this.__userConfirmedDate=!1:this._selectParsedOrFocusedDate(),this._nativeInput&&this._nativeInput.selectionStart&&(this._nativeInput.selectionStart=this._nativeInput.selectionEnd),this.value||this.validate()}_onScroll(e){(e.target===window||!this._overlayContent.contains(e.target))&&this._overlayContent._repositionYearScroller()}_focus(){this._noInput||this.inputElement.focus()}_focusAndSelect(){this._focus(),this._setSelectionRange(0,this._inputElementValue.length)}_applyInputValue(e){this._inputElementValue=e?this._getFormattedDate(this.i18n.formatDate,e):""}_getFormattedDate(e,i){return e(fu(i))}_setSelectionRange(e,i){this._nativeInput&&this._nativeInput.setSelectionRange&&this._nativeInput.setSelectionRange(e,i)}_isValidDate(e){return e&&!isNaN(e.getTime())}_onChange(e){this._inputElementValue===""&&(this.__dispatchChange=!0),e.stopPropagation()}_onClick(e){this._isClearButton(e)||this._onHostClick(e)}_onHostClick(e){(!this.autoOpenDisabled||this._noInput)&&(e.preventDefault(),this.open())}_onClearButtonClick(e){e.preventDefault(),this._inputElementValue="",this.value="",this.validate(),this.dispatchEvent(new CustomEvent("change",{bubbles:!0}))}_onKeyDown(e){switch(super._onKeyDown(e),this._noInput&&[9].indexOf(e.keyCode)===-1&&e.preventDefault(),e.key){case"ArrowDown":case"ArrowUp":e.preventDefault(),this.opened?this._overlayContent.focusDateElement():(this._focusOverlayOnOpen=!0,this.open());break;case"Tab":this.opened&&(e.preventDefault(),e.stopPropagation(),this._setSelectionRange(0,0),e.shiftKey?this._overlayContent.focusCancel():this._overlayContent.focusDateElement());break}}_onEnter(e){const i=this.value;this.opened?this.close():this._selectParsedOrFocusedDate(),i===this.value&&this.validate()}_onEscape(e){if(!this.opened){if(this.clearButtonVisible&&this.value){e.stopPropagation(),this._onClearButtonClick(e);return}this.autoOpenDisabled?(this.inputElement.value===""&&this._selectDate(null),this._applyInputValue(this._selectedDate)):(this._focusedDate=this._selectedDate,this._selectParsedOrFocusedDate())}}_getParsedDate(e=this._inputElementValue){const i=this.i18n.parseDate&&this.i18n.parseDate(e);return i&&yr(`${i.year}-${i.month+1}-${i.day}`)}_isClearButton(e){return e.composedPath()[0]===this.clearElement}_onInput(){!this.opened&&this.inputElement.value&&!this.autoOpenDisabled&&this.open(),this._userInputValueChanged()}_userInputValueChanged(){if(this._inputElementValue){const e=this._getParsedDate();this._isValidDate(e)&&(this._ignoreFocusedDateChange=!0,Zt(e,this._focusedDate)||(this._focusedDate=e),this._ignoreFocusedDateChange=!1)}}__computeMinOrMaxDate(e){return yr(e)}};/**
 * @license
 * Copyright (c) 2016 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */O("vaadin-date-picker",fn,{moduleId:"vaadin-date-picker-styles"});class $a extends V_(lu(G(st(z)))){static get is(){return"vaadin-date-picker"}static get template(){return L`
      <style>
        :host([opened]) {
          pointer-events: auto;
        }

        :host([dir='rtl']) [part='input-field'] {
          direction: ltr;
        }

        :host([dir='rtl']) [part='input-field'] ::slotted(input)::placeholder {
          direction: rtl;
          text-align: left;
        }
      </style>

      <div class="vaadin-date-picker-container">
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
          <div id="clearButton" part="clear-button" slot="suffix" aria-hidden="true"></div>
          <div part="toggle-button" slot="suffix" aria-hidden="true" on-click="_toggle"></div>
        </vaadin-input-container>

        <div part="helper-text">
          <slot name="helper"></slot>
        </div>

        <div part="error-message">
          <slot name="error-message"></slot>
        </div>
      </div>

      <vaadin-date-picker-overlay
        id="overlay"
        fullscreen$="[[_fullscreen]]"
        theme$="[[_theme]]"
        opened="{{opened}}"
        on-vaadin-overlay-escape-press="_onOverlayEscapePress"
        on-vaadin-overlay-open="_onOverlayOpened"
        on-vaadin-overlay-closing="_onOverlayClosed"
        restore-focus-on-close
        restore-focus-node="[[inputElement]]"
      ></vaadin-date-picker-overlay>

      <slot name="tooltip"></slot>
    `}get clearElement(){return this.$.clearButton}ready(){super.ready(),this.addController(new jo(this,e=>{this._setInputElement(e),this._setFocusElement(e),this.stateTarget=e,this.ariaTarget=e})),this.addController(new dn(this.inputElement,this._labelController)),this._tooltipController=new Ht(this),this.addController(this._tooltipController),this._tooltipController.setPosition("top"),this._tooltipController.setShouldShow(e=>!e.opened),this.shadowRoot.querySelector('[part="toggle-button"]').addEventListener("mousedown",e=>e.preventDefault()),this.$.overlay.addEventListener("vaadin-overlay-close",this._onVaadinOverlayClose.bind(this))}_onVaadinOverlayClose(t){t.detail.sourceEvent&&t.detail.sourceEvent.composedPath().includes(this)&&t.preventDefault()}_toggle(t){t.stopPropagation(),this.$.overlay.opened?this.close():this.open()}_openedChanged(t){super._openedChanged(t),this.$.overlay.positionTarget=this.shadowRoot.querySelector('[part="input-field"]'),this.$.overlay.noVerticalOverlap=!0}}customElements.define($a.is,$a);/**
 * @license
 * Copyright (c) 2018 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */O("vaadin-time-picker-item",[on,np],{moduleId:"lumo-time-picker-item"});O("vaadin-time-picker-overlay",[ru,iu,ip,P`
      :host {
        --_vaadin-time-picker-items-container-border-width: var(--lumo-space-xs);
        --_vaadin-time-picker-items-container-border-style: solid;
      }
    `],{moduleId:"lumo-time-picker-overlay"});const q_=P`
  [part~='toggle-button']::before {
    content: var(--lumo-icons-clock);
  }

  :host([dir='rtl']) [part='input-field'] ::slotted(input:placeholder-shown) {
    --_lumo-text-field-overflow-mask-image: none;
  }

  :host([dir='rtl']) [part='input-field'] ::slotted(input) {
    --_lumo-text-field-overflow-mask-image: linear-gradient(to left, transparent, #000 1.25em);
  }
`;O("vaadin-time-picker",[cn,q_],{moduleId:"lumo-time-picker"});/**
 * @license
 * Copyright (c) 2018 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class xh extends ap(G(Jt(z))){static get is(){return"vaadin-time-picker-item"}static get template(){return L`
      <style>
        :host {
          display: block;
        }

        :host([hidden]) {
          display: none !important;
        }
      </style>
      <span part="checkmark" aria-hidden="true"></span>
      <div part="content">
        <slot></slot>
      </div>
    `}}customElements.define(xh.is,xh);/**
 * @license
 * Copyright (c) 2018 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class Ah extends op(z){static get is(){return"vaadin-time-picker-scroller"}static get template(){return L`
      <style>
        :host {
          display: block;
          min-height: 1px;
          overflow: auto;

          /* Fixes item background from getting on top of scrollbars on Safari */
          transform: translate3d(0, 0, 0);

          /* Enable momentum scrolling on iOS */
          -webkit-overflow-scrolling: touch;

          /* Fixes scrollbar disappearing when 'Show scroll bars: Always' enabled in Safari */
          box-shadow: 0 0 0 white;
        }

        #selector {
          border-width: var(--_vaadin-time-picker-items-container-border-width);
          border-style: var(--_vaadin-time-picker-items-container-border-style);
          border-color: var(--_vaadin-time-picker-items-container-border-color, transparent);
        }
      </style>
      <div id="selector">
        <slot></slot>
      </div>
    `}}customElements.define(Ah.is,Ah);/**
 * @license
 * Copyright (c) 2018 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */O("vaadin-time-picker-overlay",P`
    #overlay {
      width: var(--vaadin-time-picker-overlay-width, var(--_vaadin-time-picker-overlay-default-width, auto));
    }

    [part='content'] {
      display: flex;
      flex-direction: column;
      height: 100%;
    }
  `,{moduleId:"vaadin-time-picker-overlay-styles"});let Ln;class Eh extends sp(ur){static get is(){return"vaadin-time-picker-overlay"}static get template(){return Ln||(Ln=super.template.cloneNode(!0),Ln.content.querySelector('[part~="overlay"]').removeAttribute("tabindex")),Ln}}customElements.define(Eh.is,Eh);/**
 * @license
 * Copyright (c) 2018 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class Ch extends lp(G(z)){static get is(){return"vaadin-time-picker-combo-box"}static get template(){return L`
      <style>
        :host([opened]) {
          pointer-events: auto;
        }
      </style>

      <slot></slot>

      <vaadin-time-picker-overlay
        id="overlay"
        opened="[[_overlayOpened]]"
        loading$="[[loading]]"
        theme$="[[_theme]]"
        position-target="[[positionTarget]]"
        no-vertical-overlap
        restore-focus-node="[[inputElement]]"
      ></vaadin-time-picker-overlay>
    `}static get properties(){return{positionTarget:{type:Object}}}get _tagNamePrefix(){return"vaadin-time-picker"}get clearElement(){return this.querySelector('[part="clear-button"]')}get _inputElementValue(){return super._inputElementValue}set _inputElementValue(t){super._inputElementValue=t,this._hasInputValue=t.length>0}ready(){super.ready(),this.allowCustomValue=!0,this._toggleElement=this.querySelector(".toggle-button"),this.setAttribute("dir","ltr")}}customElements.define(Ch.is,Ch);/**
 * @license
 * Copyright (c) 2018 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Th="00:00:00.000",Mh="23:59:59.999";O("vaadin-time-picker",fn,{moduleId:"vaadin-time-picker-styles"});class ii extends a_(lu(G(st(z)))){static get is(){return"vaadin-time-picker"}static get template(){return L`
      <style>
        /* See https://github.com/vaadin/vaadin-time-picker/issues/145 */
        :host([dir='rtl']) [part='input-field'] {
          direction: ltr;
        }

        :host([dir='rtl']) [part='input-field'] ::slotted(input)::placeholder {
          direction: rtl;
          text-align: left;
        }

        [part~='toggle-button'] {
          cursor: pointer;
        }
      </style>

      <div class="vaadin-time-picker-container">
        <div part="label">
          <slot name="label"></slot>
          <span part="required-indicator" aria-hidden="true" on-click="focus"></span>
        </div>

        <vaadin-time-picker-combo-box
          id="comboBox"
          filtered-items="[[__dropdownItems]]"
          value="{{_comboBoxValue}}"
          opened="{{opened}}"
          disabled="[[disabled]]"
          readonly="[[readonly]]"
          clear-button-visible="[[clearButtonVisible]]"
          auto-open-disabled="[[autoOpenDisabled]]"
          overlay-class="[[overlayClass]]"
          position-target="[[_inputContainer]]"
          theme$="[[_theme]]"
          on-change="__onComboBoxChange"
          on-has-input-value-changed="__onComboBoxHasInputValueChanged"
        >
          <vaadin-input-container
            part="input-field"
            readonly="[[readonly]]"
            disabled="[[disabled]]"
            invalid="[[invalid]]"
            theme$="[[_theme]]"
          >
            <slot name="prefix" slot="prefix"></slot>
            <slot name="input"></slot>
            <div id="clearButton" part="clear-button" slot="suffix" aria-hidden="true"></div>
            <div id="toggleButton" class="toggle-button" part="toggle-button" slot="suffix" aria-hidden="true"></div>
          </vaadin-input-container>
        </vaadin-time-picker-combo-box>

        <div part="helper-text">
          <slot name="helper"></slot>
        </div>

        <div part="error-message">
          <slot name="error-message"></slot>
        </div>
      </div>
      <slot name="tooltip"></slot>
    `}static get properties(){return{value:{type:String,notify:!0,value:""},opened:{type:Boolean,notify:!0,value:!1,reflectToAttribute:!0},min:{type:String,value:""},max:{type:String,value:""},step:{type:Number},autoOpenDisabled:Boolean,overlayClass:{type:String},__dropdownItems:{type:Array},i18n:{type:Object,value:()=>({formatTime:t=>{if(!t)return;const e=(n=0,a="00")=>(a+n).substr((a+n).length-a.length);let i=`${e(t.hours)}:${e(t.minutes)}`;return t.seconds!==void 0&&(i+=`:${e(t.seconds)}`),t.milliseconds!==void 0&&(i+=`.${e(t.milliseconds,"000")}`),i},parseTime:t=>{const e="(\\d|[0-1]\\d|2[0-3])",i="(\\d|[0-5]\\d)",n=i,a="(\\d{1,3})",s=new RegExp(`^${e}(?::${i}(?::${n}(?:\\.${a})?)?)?$`,"u").exec(t);if(s){if(s[4])for(;s[4].length<3;)s[4]+="0";return{hours:s[1],minutes:s[2],seconds:s[3],milliseconds:s[4]}}}})},_comboBoxValue:{type:String,observer:"__comboBoxValueChanged"},_inputContainer:Object}}static get observers(){return["__updateDropdownItems(i18n.*, min, max, step)"]}static get constraints(){return[...super.constraints,"min","max"]}get clearElement(){return this.$.clearButton}ready(){super.ready(),this.addController(new jo(this,t=>{this._setInputElement(t),this._setFocusElement(t),this.stateTarget=t,this.ariaTarget=t})),this.addController(new dn(this.inputElement,this._labelController)),this._inputContainer=this.shadowRoot.querySelector('[part~="input-field"]'),this._tooltipController=new Ht(this),this._tooltipController.setShouldShow(t=>!t.opened),this._tooltipController.setPosition("top"),this.addController(this._tooltipController)}_inputElementChanged(t){super._inputElementChanged(t),t&&this.$.comboBox._setInputElement(t)}open(){!this.disabled&&!this.readonly&&(this.opened=!0)}close(){this.opened=!1}checkValidity(){return!!(this.inputElement.checkValidity()&&(!this.value||this._timeAllowed(this.i18n.parseTime(this.value)))&&(!this._comboBoxValue||this.i18n.parseTime(this._comboBoxValue)))}_setFocused(t){super._setFocused(t),t||this.validate()}__validDayDivisor(t){return!t||24*3600%t===0||t<1&&t%1*1e3%1===0}_onKeyDown(t){if(super._onKeyDown(t),this.readonly||this.disabled||this.__dropdownItems.length)return;const e=this.__validDayDivisor(this.step)&&this.step||60;t.keyCode===40?this.__onArrowPressWithStep(-e):t.keyCode===38&&this.__onArrowPressWithStep(e)}_onEscape(){}__onArrowPressWithStep(t){const e=this.__addStep(this.__getMsec(this.__memoValue),t,!0);this.__memoValue=e,this.inputElement.value=this.i18n.formatTime(this.__validateTime(e)),this.__dispatchChange()}__dispatchChange(){this.dispatchEvent(new CustomEvent("change",{bubbles:!0}))}__getMsec(t){let e=(t&&t.hours||0)*60*60*1e3;return e+=(t&&t.minutes||0)*60*1e3,e+=(t&&t.seconds||0)*1e3,e+=t&&parseInt(t.milliseconds)||0,e}__getSec(t){let e=(t&&t.hours||0)*60*60;return e+=(t&&t.minutes||0)*60,e+=t&&t.seconds||0,e+=t&&t.milliseconds/1e3||0,e}__addStep(t,e,i){t===0&&e<0&&(t=24*60*60*1e3);const n=e*1e3,a=t%n;n<0&&a&&i?t-=a:n>0&&a&&i?t-=a-n:t+=n;const o=Math.floor(t/1e3/60/60);t-=o*1e3*60*60;const s=Math.floor(t/1e3/60);t-=s*1e3*60;const l=Math.floor(t/1e3);return t-=l*1e3,{hours:o<24?o:0,minutes:s,seconds:l,milliseconds:t}}__updateDropdownItems(t,e,i,n){const a=this.__validateTime(this.__parseISO(e||Th)),o=this.__getSec(a),s=this.__validateTime(this.__parseISO(i||Mh)),l=this.__getSec(s);if(this.__dropdownItems=this.__generateDropdownList(o,l,n),n!==this.__oldStep){this.__oldStep=n;const u=this.__validateTime(this.__parseISO(this.value));this.__updateValue(u)}this.value&&(this._comboBoxValue=this.i18n.formatTime(this.i18n.parseTime(this.value)))}__generateDropdownList(t,e,i){if(i<15*60||!this.__validDayDivisor(i))return[];const n=[];i||(i=3600);let a=-i+t;for(;a+i>=t&&a+i<=e;){const o=this.__validateTime(this.__addStep(a*1e3,i));a+=i;const s=this.i18n.formatTime(o);n.push({label:s,value:s})}return n}_valueChanged(t,e){const i=this.__memoValue=this.__parseISO(t),n=this.__formatISO(i)||"";t!==""&&t!==null&&!i?this.value=e===void 0?"":e:t!==n?this.value=n:this.__keepInvalidInput?delete this.__keepInvalidInput:this.__updateInputValue(i),this._toggleHasValue(this._hasValue)}__comboBoxValueChanged(t,e){if(t===""&&e===void 0)return;const i=this.i18n.parseTime(t),n=this.i18n.formatTime(i)||"";i?t!==n?this._comboBoxValue=n:this.__updateValue(i):(this.value!==""&&t!==""&&(this.__keepInvalidInput=!0),this.value="")}__onComboBoxChange(t){t.stopPropagation(),this.validate(),this.__dispatchChange()}__onComboBoxHasInputValueChanged(){this._hasInputValue=this.$.comboBox._hasInputValue}__updateValue(t){const e=this.__formatISO(this.__validateTime(t))||"";this.value=e}__updateInputValue(t){const e=this.i18n.formatTime(this.__validateTime(t))||"";this._comboBoxValue=e}__validateTime(t){if(t){const e=this.__getStepSegment();t.hours=parseInt(t.hours),t.minutes=parseInt(t.minutes||0),t.seconds=e<3?void 0:parseInt(t.seconds||0),t.milliseconds=e<4?void 0:parseInt(t.milliseconds||0)}return t}__getStepSegment(){if(this.step%3600===0)return 1;if(this.step%60===0||!this.step)return 2;if(this.step%1===0)return 3;if(this.step<1)return 4}__formatISO(t){return ii.properties.i18n.value().formatTime(t)}__parseISO(t){return ii.properties.i18n.value().parseTime(t)}_timeAllowed(t){const e=this.i18n.parseTime(this.min||Th),i=this.i18n.parseTime(this.max||Mh);return(!this.__getMsec(e)||this.__getMsec(t)>=this.__getMsec(e))&&(!this.__getMsec(i)||this.__getMsec(t)<=this.__getMsec(i))}_onClearButtonClick(){}_onChange(){}_onInput(){}}customElements.define(ii.is,ii);const H_=P`
  ::slotted([slot='date-picker']) {
    margin-inline-end: 2px;
    --vaadin-input-field-top-end-radius: 0;
    --vaadin-input-field-bottom-end-radius: 0;
  }

  ::slotted([slot='time-picker']) {
    --vaadin-input-field-top-start-radius: 0;
    --vaadin-input-field-bottom-start-radius: 0;
  }
`;O("vaadin-date-time-picker",[H_,Bo,zo,yp],{moduleId:"lumo-date-time-picker"});/**
 * @license
 * Copyright (c) 2019 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */O("vaadin-date-time-picker",fn,{moduleId:"vaadin-date-time-picker"});function Ep(r,t){for(;r;){if(r.properties&&r.properties[t])return r.properties[t];r=Object.getPrototypeOf(r)}}const Cp=Ep($a,"i18n").value(),Hn=Ep(ii,"i18n").value(),Oh=Object.keys(Cp),Sh=Object.keys(Hn);class Ih extends pt{constructor(t,e){super(t,`${e}-picker`,`vaadin-${e}-picker`,{initializer:(i,n)=>{const a=`__${e}Picker`;n[a]=i}})}}class Rh extends hn(Go(Oe(G(st(z))))){static get template(){return L`
      <style>
        .vaadin-date-time-picker-container {
          --vaadin-field-default-width: auto;
        }

        .slots {
          display: flex;
          --vaadin-field-default-width: 12em;
        }

        .slots ::slotted([slot='date-picker']) {
          min-width: 0;
          flex: 1 1 auto;
        }

        .slots ::slotted([slot='time-picker']) {
          min-width: 0;
          flex: 1 1.65 auto;
        }
      </style>

      <div class="vaadin-date-time-picker-container">
        <div part="label" on-click="focus">
          <slot name="label"></slot>
          <span part="required-indicator" aria-hidden="true"></span>
        </div>

        <div class="slots">
          <slot name="date-picker" id="dateSlot"></slot>
          <slot name="time-picker" id="timeSlot"></slot>
        </div>

        <div part="helper-text">
          <slot name="helper"></slot>
        </div>

        <div part="error-message">
          <slot name="error-message"></slot>
        </div>
      </div>

      <slot name="tooltip"></slot>
    `}static get is(){return"vaadin-date-time-picker"}static get properties(){return{name:{type:String},value:{type:String,notify:!0,value:"",observer:"__valueChanged"},min:{type:String,observer:"__minChanged"},max:{type:String,observer:"__maxChanged"},__minDateTime:{type:Date,value:""},__maxDateTime:{type:Date,value:""},datePlaceholder:{type:String},timePlaceholder:{type:String},step:{type:Number},initialPosition:String,showWeekNumbers:{type:Boolean},autoOpenDisabled:Boolean,readonly:{type:Boolean,value:!1,reflectToAttribute:!0},autofocus:{type:Boolean},__selectedDateTime:{type:Date},i18n:{type:Object,value:()=>({...Cp,...Hn})},overlayClass:{type:String},__datePicker:{type:HTMLElement,observer:"__datePickerChanged"},__timePicker:{type:HTMLElement,observer:"__timePickerChanged"}}}static get observers(){return["__selectedDateTimeChanged(__selectedDateTime)","__datePlaceholderChanged(datePlaceholder, __datePicker)","__timePlaceholderChanged(timePlaceholder, __timePicker)","__stepChanged(step, __timePicker)","__initialPositionChanged(initialPosition, __datePicker)","__showWeekNumbersChanged(showWeekNumbers, __datePicker)","__requiredChanged(required, __datePicker, __timePicker)","__invalidChanged(invalid, __datePicker, __timePicker)","__disabledChanged(disabled, __datePicker, __timePicker)","__readonlyChanged(readonly, __datePicker, __timePicker)","__i18nChanged(i18n, __datePicker, __timePicker)","__autoOpenDisabledChanged(autoOpenDisabled, __datePicker, __timePicker)","__themeChanged(_theme, __datePicker, __timePicker)","__overlayClassChanged(overlayClass, __datePicker, __timePicker)","__pickersChanged(__datePicker, __timePicker)"]}constructor(){super(),this.__defaultDateMinMaxValue=void 0,this.__defaultTimeMinValue="00:00:00.000",this.__defaultTimeMaxValue="23:59:59.999",this.__changeEventHandler=this.__changeEventHandler.bind(this),this.__valueChangedEventHandler=this.__valueChangedEventHandler.bind(this)}get __inputs(){return[this.__datePicker,this.__timePicker]}get __formattedValue(){const[t,e]=this.__inputs.map(i=>i.value);return t&&e?[t,e].join("T"):""}ready(){super.ready(),this._datePickerController=new Ih(this,"date"),this.addController(this._datePickerController),this._timePickerController=new Ih(this,"time"),this.addController(this._timePickerController),this.autofocus&&!this.disabled&&window.requestAnimationFrame(()=>this.focus()),this.setAttribute("role","group"),this._tooltipController=new Ht(this),this.addController(this._tooltipController),this._tooltipController.setPosition("top"),this._tooltipController.setShouldShow(t=>t.__datePicker&&!t.__datePicker.opened&&t.__timePicker&&!t.__timePicker.opened),this.ariaTarget=this}focus(){this.__datePicker.focus()}_setFocused(t){super._setFocused(t),t||this.validate()}_shouldRemoveFocus(t){const e=t.relatedTarget,i=this.__datePicker._overlayContent;return!(this.__datePicker.contains(e)||this.__timePicker.contains(e)||i&&i.contains(e))}__syncI18n(t,e,i=Object.keys(e.i18n)){i.forEach(n=>{e.i18n&&e.i18n.hasOwnProperty(n)&&t.set(`i18n.${n}`,e.i18n[n])})}__changeEventHandler(t){t.stopPropagation(),this.__dispatchChangeForValue===this.value&&(this.__dispatchChange(),this.validate()),this.__dispatchChangeForValue=void 0}__addInputListeners(t){t.addEventListener("change",this.__changeEventHandler),t.addEventListener("value-changed",this.__valueChangedEventHandler)}__removeInputListeners(t){t.removeEventListener("change",this.__changeEventHandler),t.removeEventListener("value-changed",this.__valueChangedEventHandler)}__isDefaultPicker(t,e){const i=this[`_${e}PickerController`];return i&&t===i.defaultNode}__datePickerChanged(t,e){t&&(e&&(this.__removeInputListeners(e),e.remove()),this.__addInputListeners(t),this.__isDefaultPicker(t,"date")?(t.placeholder=this.datePlaceholder,t.invalid=this.invalid,t.initialPosition=this.initialPosition,t.showWeekNumbers=this.showWeekNumbers,this.__syncI18n(t,this,Oh)):(this.datePlaceholder=t.placeholder,this.initialPosition=t.initialPosition,this.showWeekNumbers=t.showWeekNumbers,this.__syncI18n(this,t,Oh)),t.min=this.__formatDateISO(this.__minDateTime,this.__defaultDateMinMaxValue),t.max=this.__formatDateISO(this.__maxDateTime,this.__defaultDateMinMaxValue),t.validate=()=>{},t._validateInput=()=>{})}__timePickerChanged(t,e){t&&(e&&(this.__removeInputListeners(e),e.remove()),this.__addInputListeners(t),this.__isDefaultPicker(t,"time")?(t.placeholder=this.timePlaceholder,t.step=this.step,t.invalid=this.invalid,this.__syncI18n(t,this,Sh)):(this.timePlaceholder=t.placeholder,this.step=t.step,this.__syncI18n(this,t,Sh)),this.__updateTimePickerMinMax(),t.validate=()=>{})}__updateTimePickerMinMax(){if(this.__timePicker&&this.__datePicker){const t=this.__parseDate(this.__datePicker.value),e=Zt(this.__minDateTime,this.__maxDateTime),i=this.__timePicker.value;this.__minDateTime&&Zt(t,this.__minDateTime)||e?this.__timePicker.min=this.__dateToIsoTimeString(this.__minDateTime):this.__timePicker.min=this.__defaultTimeMinValue,this.__maxDateTime&&Zt(t,this.__maxDateTime)||e?this.__timePicker.max=this.__dateToIsoTimeString(this.__maxDateTime):this.__timePicker.max=this.__defaultTimeMaxValue,this.__timePicker.value!==i&&(this.__timePicker.value=i)}}__i18nChanged(t,e,i){e&&(e.i18n={...e.i18n,...t}),i&&(i.i18n={...i.i18n,...t})}__datePlaceholderChanged(t,e){e&&(e.placeholder=t)}__timePlaceholderChanged(t,e){e&&(e.placeholder=t)}__stepChanged(t,e){e&&e.step!==t&&(e.step=t)}__initialPositionChanged(t,e){e&&(e.initialPosition=t)}__showWeekNumbersChanged(t,e){e&&(e.showWeekNumbers=t)}__invalidChanged(t,e,i){e&&(e.invalid=t),i&&(i.invalid=t)}__requiredChanged(t,e,i){e&&(e.required=t),i&&(i.required=t)}__disabledChanged(t,e,i){e&&(e.disabled=t),i&&(i.disabled=t)}__readonlyChanged(t,e,i){e&&(e.readonly=t),i&&(i.readonly=t)}__parseDate(t){return yr(t)}__formatDateISO(t,e){return t?$a.prototype._formatISO(t):e}__formatTimeISO(t){return Hn.formatTime(t)}__parseTimeISO(t){return Hn.parseTime(t)}__parseDateTime(t){const[e,i]=t.split("T");if(!(e&&i))return;const n=this.__parseDate(e);if(!n)return;const a=this.__parseTimeISO(i);if(a)return n.setHours(parseInt(a.hours)),n.setMinutes(parseInt(a.minutes||0)),n.setSeconds(parseInt(a.seconds||0)),n.setMilliseconds(parseInt(a.milliseconds||0)),n}__formatDateTime(t){if(!t)return"";const e=this.__formatDateISO(t,""),i=this.__dateToIsoTimeString(t);return`${e}T${i}`}__dateToIsoTimeString(t){return this.__formatTimeISO(this.__validateTime({hours:t.getHours(),minutes:t.getMinutes(),seconds:t.getSeconds(),milliseconds:t.getMilliseconds()}))}__validateTime(t){if(t){const e=this.__getStepSegment();t.seconds=e<3?void 0:t.seconds,t.milliseconds=e<4?void 0:t.milliseconds}return t}checkValidity(){const t=this.__inputs.some(i=>!i.checkValidity()),e=this.required&&this.__inputs.some(i=>!i.value);return!(t||e)}__getStepSegment(){const t=this.step==null?60:parseFloat(this.step);if(t%3600===0)return 1;if(t%60===0||!t)return 2;if(t%1===0)return 3;if(t<1)return 4}__dateTimeEquals(t,e){return Zt(t,e)?t.getHours()===e.getHours()&&t.getMinutes()===e.getMinutes()&&t.getSeconds()===e.getSeconds()&&t.getMilliseconds()===e.getMilliseconds():!1}__handleDateTimeChange(t,e,i,n){if(!i){this[t]="",this[e]="";return}const a=this.__parseDateTime(i);if(!a){this[t]=n;return}this.__dateTimeEquals(this[e],a)||(this[e]=a)}__valueChanged(t,e){this.__handleDateTimeChange("value","__selectedDateTime",t,e),e!==void 0&&(this.__dispatchChangeForValue=t),this.toggleAttribute("has-value",!!t),this.__updateTimePickerMinMax()}__dispatchChange(){this.dispatchEvent(new CustomEvent("change",{bubbles:!0}))}__minChanged(t,e){this.__handleDateTimeChange("min","__minDateTime",t,e),this.__datePicker&&(this.__datePicker.min=this.__formatDateISO(this.__minDateTime,this.__defaultDateMinMaxValue)),this.__updateTimePickerMinMax(),this.__datePicker&&this.__timePicker&&this.value&&this.validate()}__maxChanged(t,e){this.__handleDateTimeChange("max","__maxDateTime",t,e),this.__datePicker&&(this.__datePicker.max=this.__formatDateISO(this.__maxDateTime,this.__defaultDateMinMaxValue)),this.__updateTimePickerMinMax(),this.__datePicker&&this.__timePicker&&this.value&&this.validate()}__selectedDateTimeChanged(t){const e=this.__formatDateTime(t);if(this.value!==e&&(this.value=e),Boolean(this.__datePicker&&this.__datePicker.$)&&!this.__ignoreInputValueChange){this.__ignoreInputValueChange=!0;const[n,a]=this.value.split("T");this.__datePicker.value=n||"",this.__timePicker.value=a||"",this.__ignoreInputValueChange=!1}}__valueChangedEventHandler(){if(this.__ignoreInputValueChange)return;const t=this.__formattedValue,[e,i]=t.split("T");this.__ignoreInputValueChange=!0,this.__updateTimePickerMinMax(),e&&i?t!==this.value&&(this.value=t):this.value="",this.__ignoreInputValueChange=!1}__autoOpenDisabledChanged(t,e,i){e&&(e.autoOpenDisabled=t),i&&(i.autoOpenDisabled=t)}__themeChanged(t,e,i){!e||!i||[e,i].forEach(n=>{t?n.setAttribute("theme",t):n.removeAttribute("theme")})}__overlayClassChanged(t,e,i){!e||!i||(e.overlayClass=t,i.overlayClass=t)}__pickersChanged(t,e){!t||!e||this.__isDefaultPicker(t,"date")===this.__isDefaultPicker(e,"time")&&(t.value?this.__valueChangedEventHandler():this.value&&(this.__selectedDateTimeChanged(this.__selectedDateTime),(this.min||this.max)&&this.validate()))}}customElements.define(Rh.is,Rh);/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */O("vaadin-field-outline",P`
    :host {
      transition: opacity 0.3s;
      -webkit-mask-image: none !important;
      mask-image: none !important;
    }

    :host::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      box-shadow: 0 0 0 2px var(--_active-user-color);
      border-radius: var(--lumo-border-radius-s);
      transition: box-shadow 0.3s;
    }

    :host([context$='checkbox'])::before {
      box-shadow: 0 0 0 2px var(--lumo-base-color), 0 0 0 4px var(--_active-user-color);
    }

    :host([context$='radio-button'])::before {
      border-radius: 50%;
      box-shadow: 0 0 0 3px var(--lumo-base-color), 0 0 0 5px var(--_active-user-color);
    }

    :host([context$='item'])::before {
      box-shadow: inset 0 0 0 2px var(--_active-user-color);
    }
  `,{moduleId:"lumo-field-outline"});/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */O("vaadin-user-tags-overlay",P`
    [part='overlay'] {
      will-change: opacity, transform;
    }

    :host([opening]) [part='overlay'] {
      animation: 0.1s lumo-user-tags-enter ease-out both;
    }

    @keyframes lumo-user-tags-enter {
      0% {
        opacity: 0;
      }
    }

    :host([closing]) [part='overlay'] {
      animation: 0.1s lumo-user-tags-exit both;
    }

    @keyframes lumo-user-tags-exit {
      100% {
        opacity: 0;
      }
    }
  `,{moduleId:"lumo-user-tags-overlay"});O("vaadin-user-tag",P`
    :host {
      font-family: var(--lumo-font-family);
      font-size: var(--lumo-font-size-xxs);
      border-radius: var(--lumo-border-radius-s);
      box-shadow: var(--lumo-box-shadow-xs);
      --vaadin-user-tag-offset: var(--lumo-space-xs);
    }

    [part='name'] {
      color: var(--lumo-primary-contrast-color);
      padding: 0.3em calc(0.3em + var(--lumo-border-radius-s) / 4);
      line-height: 1;
      font-weight: 500;
      min-width: calc(var(--lumo-line-height-xs) * 1em + 0.45em);
    }
  `,{moduleId:"lumo-user-tag"});/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class Ph extends G(Jt(z)){static get is(){return"vaadin-user-tag"}static get template(){return L`
      <style>
        :host {
          display: block;
          box-sizing: border-box;
          margin: 0 0 var(--vaadin-user-tag-offset);
          opacity: 0;
          height: 1.3rem;
          transition: opacity 0.2s ease-in-out;
          background-color: var(--vaadin-user-tag-color);
          color: #fff;
          cursor: default;
          -webkit-user-select: none;
          user-select: none;
          --vaadin-user-tag-offset: 4px;
        }

        :host(.show) {
          opacity: 1;
        }

        :host(:last-of-type) {
          margin-bottom: 0;
        }

        [part='name'] {
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
          box-sizing: border-box;
          padding: 2px 4px;
          height: 1.3rem;
          font-size: 13px;
        }
      </style>
      <div part="name">[[name]]</div>
    `}static get properties(){return{name:{type:String},uid:{type:String},colorIndex:{type:Number,observer:"_colorIndexChanged"}}}ready(){super.ready(),this.addEventListener("mousedown",this._onClick.bind(this),!0)}_colorIndexChanged(t){t!=null&&this.style.setProperty("--vaadin-user-tag-color",`var(--vaadin-user-color-${t})`)}_onClick(t){t.preventDefault(),this.dispatchEvent(new CustomEvent("user-tag-click",{bubbles:!0,composed:!0,detail:{name:this.name}}))}}customElements.define(Ph.is,Ph);/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */O("vaadin-user-tags-overlay",P`
    :host {
      background: transparent;
      box-shadow: none;
    }

    [part='overlay'] {
      box-shadow: none;
      background: transparent;
      position: relative;
      left: -4px;
      padding: 4px;
      outline: none;
      overflow: visible;
    }

    ::slotted([part='tags']) {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
    }

    :host([dir='rtl']) [part='overlay'] {
      left: auto;
      right: -4px;
    }

    [part='content'] {
      padding: 0;
    }

    :host([opening]),
    :host([closing]) {
      animation: 0.14s user-tags-overlay-dummy-animation;
    }

    @keyframes user-tags-overlay-dummy-animation {
      0% {
        opacity: 1;
      }

      100% {
        opacity: 1;
      }
    }
  `);class Dh extends $o(ur){static get is(){return"vaadin-user-tags-overlay"}ready(){super.ready(),this.$.overlay.setAttribute("tabindex","-1")}}customElements.define(Dh.is,Dh);/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const kh=(r,t)=>new Promise(e=>{const i=()=>{r.removeEventListener(t,i),e()};r.addEventListener(t,i)});class Lh extends z{static get is(){return"vaadin-user-tags"}static get template(){return L`
      <style>
        :host {
          position: absolute;
        }
      </style>
      <vaadin-user-tags-overlay
        id="overlay"
        modeless
        opened="[[opened]]"
        no-vertical-overlap
        on-vaadin-overlay-open="_onOverlayOpen"
      ></vaadin-user-tags-overlay>
    `}static get properties(){return{hasFocus:{type:Boolean,value:!1,observer:"_hasFocusChanged"},opened:{type:Boolean,value:!1},flashing:{type:Boolean,value:!1},target:{type:Object,observer:"__targetChanged"},users:{type:Array,value:()=>[]},duration:{type:Number,value:200},delay:{type:Number,value:2e3},__flashQueue:{type:Array,value:()=>[]},__isTargetVisible:{type:Boolean,value:!1}}}constructor(){super(),this.__targetVisibilityObserver=new IntersectionObserver(([t])=>{this.__onTargetVisibilityChange(t.isIntersecting)},{threshold:1})}get wrapper(){return this.$.overlay.querySelector('[part="tags"]')}connectedCallback(){super.connectedCallback(),this.target&&this.__targetVisibilityObserver.observe(this.target)}disconnectedCallback(){super.disconnectedCallback(),this.opened=!1,this.target&&this.__targetVisibilityObserver.unobserve(this.target)}ready(){super.ready(),this.$.overlay.renderer=t=>{if(!t.firstChild){const e=document.createElement("div");e.setAttribute("part","tags"),t.appendChild(e)}},this.$.overlay.requestContentUpdate()}__onTargetVisibilityChange(t){if(this.__isTargetVisible=t,t&&this.__flashQueue.length>0&&!this.flashing){this.flashTags(this.__flashQueue.shift());return}if(t&&this.hasFocus){this.opened=!0;return}!t&&this.opened&&(this.opened=!1)}__targetChanged(t,e){this.$.overlay.positionTarget=t,e&&this.__targetVisibilityObserver.unobserve(e),t&&this.__targetVisibilityObserver.observe(t)}_hasFocusChanged(t){t&&this.flashing&&this.stopFlash()}createUserTag(t){const e=document.createElement("vaadin-user-tag");return e.name=t.name,e.uid=t.id,e.colorIndex=t.colorIndex,e}getTagForUser(t){return Array.from(this.wrapper.children).find(e=>e.uid===t.id)}getChangedTags(t,e){const i=e.map(a=>this.getTagForUser(a));return{added:t.map(a=>this.getTagForUser(a)||this.createUserTag(a)),removed:i}}getChangedUsers(t,e){const i=[],n=[];e.forEach(s=>{s.removed.forEach(l=>{n.push(l)});for(let l=s.addedCount-1;l>=0;l--)i.push(t[s.index+l])});const a=i.filter(s=>!n.some(l=>s.id===l.id)),o=n.filter(s=>!i.some(l=>s.id===l.id));return{addedUsers:a,removedUsers:o}}applyTagsStart({added:t,removed:e}){const i=this.wrapper;e.forEach(n=>{n&&(n.classList.add("removing"),n.classList.remove("show"))}),t.forEach(n=>i.insertBefore(n,i.firstChild))}applyTagsEnd({added:t,removed:e}){const i=this.wrapper;e.forEach(n=>{n&&n.parentNode===i&&i.removeChild(n)}),t.forEach(n=>n&&n.classList.add("show"))}setUsers(t){this.requestContentUpdate();const e=Jf(t,this.users);if(e.length===0)return;const{addedUsers:i,removedUsers:n}=this.getChangedUsers(t,e);if(i.length===0&&n.length===0)return;const a=this.getChangedTags(i,n);if(this.__flashQueue.length>0&&n.forEach((o,s)=>{a.removed[s]!==null&&this.__flashQueue.forEach(l=>{l.some(u=>u.uid===o.id)&&this.splice("__flashQueue",s,1)})}),this.opened&&this.hasFocus)this.updateTags(t,a);else if(i.length>0&&document.visibilityState!=="hidden"){const o=a.added,s=a.removed;this.updateTagsSync(t,{added:[],removed:s}),this.flashing||!this.__isTargetVisible?this.push("__flashQueue",o):this.flashTags(o)}else this.updateTagsSync(t,a)}_onOverlayOpen(){Array.from(this.wrapper.children).forEach(t=>{t.classList.contains("removing")||t.classList.add("show")})}flashTags(t){this.flashing=!0;const e=this.wrapper,i=Array.from(e.children);i.forEach(n=>{n.style.display="none"}),t.forEach(n=>{e.insertBefore(n,e.firstChild)}),this.flashPromise=new Promise(n=>{kh(this.$.overlay,"vaadin-overlay-open").then(()=>{this._debounceFlashStart=Ae.debounce(this._debounceFlashStart,ir.after(this.duration+this.delay),()=>{this.hasFocus||t.forEach(a=>a.classList.remove("show")),this._debounceFlashEnd=Ae.debounce(this._debounceFlashEnd,ir.after(this.duration),()=>{const a=()=>{i.forEach(o=>{o.style.display="block"}),this.flashing=!1,n()};this.hasFocus?a():(kh(this.$.overlay,"animationend").then(()=>{a()}),this.opened=!1)})})})}).then(()=>{if(this.__flashQueue.length>0){const n=this.__flashQueue[0];this.splice("__flashQueue",0,1),this.flashTags(n)}}),this.opened=!0}stopFlash(){this._debounceFlashStart&&this._debounceFlashStart.flush(),this._debounceFlashEnd&&this._debounceFlashEnd.flush(),this.$.overlay._flushAnimation("closing")}updateTags(t,e){this.applyTagsStart(e),this._debounceRender=Ae.debounce(this._debounceRender,ir.after(this.duration),()=>{this.set("users",t),this.applyTagsEnd(e),t.length===0&&this.opened&&(this.opened=!1)})}updateTagsSync(t,e){this.applyTagsStart(e),this.set("users",t),this.applyTagsEnd(e)}show(){this.hasFocus=!0,this.__isTargetVisible&&(this.opened=!0)}hide(){this.hasFocus=!1,this.opened=!1}requestContentUpdate(){this._debounceRender&&this._debounceRender.isActive()&&this._debounceRender.flush()}}customElements.define(Lh.is,Lh);/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class Fh extends G(Jt(z)){static get is(){return"vaadin-field-outline"}static get template(){return L`
      <style>
        :host {
          display: block;
          box-sizing: border-box;
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          user-select: none;
          opacity: 0;
          --_active-user-color: transparent;
        }

        :host([has-active-user]) {
          opacity: 1;
        }
      </style>
    `}static get properties(){return{user:{type:Object,value:null,observer:"_userChanged"}}}ready(){super.ready(),this.setAttribute("part","outline"),this._field=this.getRootNode().host}_userChanged(t){this.toggleAttribute("has-active-user",Boolean(t));const e=t?`var(--vaadin-user-color-${t.colorIndex})`:"transparent",i="--_active-user-color";this.style.setProperty(i,e),this._field&&this._field.style.setProperty(i,e)}}customElements.define(Fh.is,Fh);/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const X_=(r,t)=>{switch(t){case"vaadin-big-decimal-field":case"vaadin-combo-box":case"vaadin-date-picker":case"vaadin-email-field":case"vaadin-integer-field":case"vaadin-number-field":case"vaadin-password-field":case"vaadin-select":case"vaadin-text-area":case"vaadin-text-field":case"vaadin-time-picker":return r.shadowRoot.querySelector('[part="input-field"]');case"vaadin-checkbox":return r.shadowRoot.querySelector('[part="checkbox"]');case"vaadin-radio-button":return r.shadowRoot.querySelector('[part="radio"]');default:return r}},hs=new WeakMap,Z_=r=>{if(!hs.has(r)){const t=r.tagName.toLowerCase(),e=X_(r,t);e.style.position="relative",t.endsWith("text-area")&&(e.style.overflow="visible");const i=document.createElement("style");i.textContent=`
      :host([active]) [part="outline"],
      :host([focus-ring]) [part="outline"] {
        display: none;
      }
    `,r.shadowRoot.appendChild(i);const n=document.createElement("vaadin-field-outline");(e===r?r.shadowRoot:e).appendChild(n),n.setAttribute("context",t),hs.set(r,{root:r,target:e,outline:n})}return hs.get(r)};/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class pu{constructor(t){this.component=t,this.initTags(t)}getFields(){return[this.component]}getFieldIndex(t){return this.getFields().indexOf(t)}getFocusTarget(t){return this.component}initTags(t){const e=document.createElement("vaadin-user-tags");t.shadowRoot.appendChild(e),e.target=t,this._tags=e,t.addEventListener("mouseenter",i=>{i.relatedTarget!==this._tags.$.overlay&&(this._mouse=!0,this._mouseDebouncer=Ae.debounce(this._mouseDebouncer,ir.after(200),()=>{this._mouse&&this._tags.show()}))}),t.addEventListener("mouseleave",i=>{i.relatedTarget!==this._tags.$.overlay&&(this._mouse=!1,this._hasFocus||this._tags.hide())}),t.addEventListener("vaadin-highlight-show",i=>{this._hasFocus=!0,this._debouncer&&this._debouncer.isActive()?this._debouncer.cancel():this._tags.show()}),t.addEventListener("vaadin-highlight-hide",i=>{this._hasFocus=!1,this._mouse||(this._debouncer=Ae.debounce(this._debouncer,ir.after(1),()=>{this._tags.hide()}))}),this._tags.$.overlay.addEventListener("mouseleave",i=>{i.relatedTarget!==t&&(this._mouse=!1,t.hasAttribute("focused")||this._tags.hide())})}setOutlines(t){const e=this.getFields();e.forEach((i,n)=>{const{outline:a}=Z_(i),o=e.length===1?0:t.map(s=>s.fieldIndex).indexOf(n);a.user=t[o]})}showOutline(t){this.fire("show",t)}hideOutline(t){this.fire("hide",t)}fire(t,e){this.component.dispatchEvent(new CustomEvent(`vaadin-highlight-${t}`,{bubbles:!0,composed:!0,detail:{fieldIndex:this.getFieldIndex(e)}}))}redraw(t){this._tags.setUsers(t),this.setOutlines(t)}}/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class ci extends pu{constructor(t){super(t),this.addListeners(t)}addListeners(t){t.addEventListener("focusin",e=>this.onFocusIn(e)),t.addEventListener("focusout",e=>this.onFocusOut(e))}onFocusIn(t){const e=this.getFocusTarget(t);this.showOutline(e)}onFocusOut(t){const e=this.getFocusTarget(t);this.hideOutline(e)}}/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class Q_ extends ci{getFields(){return this.component.__checkboxes}getFocusTarget(t){const e=this.getFields();return Array.from(t.composedPath()).find(i=>e.includes(i))}}/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class Tp extends pu{constructor(t){super(t),this.datePicker=t,this.fullscreenFocus=!1,this.blurWhileOpened=!1,this.addListeners(t)}addListeners(t){this.overlay=t.$.overlay,t.addEventListener("blur",e=>this.onBlur(e),!0),t.addEventListener("opened-changed",e=>this.onOpenedChanged(e)),this.overlay.addEventListener("focusout",e=>this.onOverlayFocusOut(e)),t.addEventListener("focusin",e=>this.onFocusIn(e)),t.addEventListener("focusout",e=>this.onFocusOut(e))}isEventInOverlay(t){return this.datePicker._overlayContent&&this.datePicker._overlayContent.contains(t)}onBlur(t){this.datePicker._fullscreen&&!this.isEventInOverlay(t.relatedTarget)&&(this.fullscreenFocus=!0)}onFocusIn(t){if(!this.isEventInOverlay(t.relatedTarget)){if(this.blurWhileOpened){this.blurWhileOpened=!1;return}this.showOutline(this.datePicker)}}onFocusOut(t){this.fullscreenFocus||this.isEventInOverlay(t.relatedTarget)||(this.datePicker.opened?this.blurWhileOpened=!0:this.hideOutline(this.datePicker))}onOverlayFocusOut(t){this.datePicker.contains(t.relatedTarget)||(this.blurWhileOpened=!0)}onOpenedChanged(t){t.detail.value===!0&&this.fullscreenFocus&&(this.fullscreenFocus=!1,this.showOutline(this.datePicker)),t.detail.value===!1&&this.blurWhileOpened&&(this.blurWhileOpened=!1,this.hideOutline(this.datePicker))}}/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class K_ extends Tp{constructor(t,e){super(t),this.component=e}getFieldIndex(){return 0}}class J_ extends ci{constructor(t,e){super(t),this.component=e,this.timePicker=t}getFocusTarget(t){return this.timePicker}getFieldIndex(){return 1}}class tg extends pu{constructor(t){super(t);const[e,i]=this.getFields();this.dateObserver=new K_(e,t),this.timeObserver=new J_(i,t)}getFields(){return this.component.__inputs}}/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class eg extends ci{getFields(){return this.component.items||[]}getFocusTarget(t){const e=this.getFields();return Array.from(t.composedPath()).find(i=>e.includes(i))}}/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class rg extends ci{getFields(){return this.component.__radioButtons}getFocusTarget(t){const e=this.getFields();return Array.from(t.composedPath()).find(i=>e.includes(i))}}/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class ig extends ci{constructor(t){super(t),this.blurWhileOpened=!1,this.overlay=t._overlayElement}addListeners(t){super.addListeners(t),t.addEventListener("opened-changed",e=>{t._phone&&e.detail.value===!1&&this.hideOutline(t)})}onFocusIn(t){this.overlay.contains(t.relatedTarget)||!this.component._phone&&this.overlay.hasAttribute("closing")||super.onFocusIn(t)}onFocusOut(t){this.overlay.contains(t.relatedTarget)||super.onFocusOut(t)}}/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const ng=r=>{let t;switch(r.tagName.toLowerCase()){case"vaadin-date-picker":t=new Tp(r);break;case"vaadin-date-time-picker":t=new tg(r);break;case"vaadin-select":t=new ig(r);break;case"vaadin-checkbox-group":t=new Q_(r);break;case"vaadin-radio-group":t=new rg(r);break;case"vaadin-list-box":t=new eg(r);break;default:t=new ci(r)}return t};class ag{constructor(t){this.host=t,this.user=null,this.users=[]}get user(){return this._user}set user(t){if(this._user=t,t){const e=`${t.name} started editing`,{label:i}=this.host;ke(i?`${e} ${i}`:e)}}hostConnected(){this.redraw()}addUser(t){t&&(this.users.push(t),this.redraw(),this.user=t)}setUsers(t){Array.isArray(t)&&(this.users=t,this.redraw(),this.user=t[t.length-1]||null)}removeUser(t){if(t&&t.id!==void 0){let e;for(let i=0;i<this.users.length;i++)if(this.users[i].id===t.id){e=i;break}e!==void 0&&(this.users.splice(e,1),this.redraw(),this.users.length>0?this.user=this.users[this.users.length-1]:this.user=null)}}redraw(){this.observer.redraw([...this.users].reverse())}}class og extends HTMLElement{static init(t){if(!t._highlighterController){const e=new ag(t);t.setAttribute("has-highlighter",""),e.observer=ng(t),t.addController(e),t._highlighterController=e}return t._highlighterController}static addUser(t,e){this.init(t).addUser(e)}static removeUser(t,e){this.init(t).removeUser(e)}static setUsers(t,e){this.init(t).setUsers(e)}}customElements.define("vaadin-field-highlighter",og);O("vaadin-grid-tree-toggle",P`
    :host {
      --vaadin-grid-tree-toggle-level-offset: 2em;
      align-items: center;
      vertical-align: middle;
      transform: translateX(calc(var(--lumo-space-s) * -1));
      -webkit-tap-highlight-color: transparent;
    }

    :host(:not([leaf])) {
      cursor: default;
    }

    [part='toggle'] {
      display: inline-block;
      font-size: 1.5em;
      line-height: 1;
      width: 1em;
      height: 1em;
      text-align: center;
      color: var(--lumo-contrast-50pct);
      cursor: var(--lumo-clickable-cursor);
      /* Increase touch target area */
      padding: calc(1em / 3);
      margin: calc(1em / -3);
    }

    :host(:not([dir='rtl'])) [part='toggle'] {
      margin-right: 0;
    }

    @media (hover: hover) {
      :host(:hover) [part='toggle'] {
        color: var(--lumo-contrast-80pct);
      }
    }

    [part='toggle']::before {
      font-family: 'lumo-icons';
      display: inline-block;
      height: 100%;
    }

    :host(:not([expanded])) [part='toggle']::before {
      content: var(--lumo-icons-angle-right);
    }

    :host([expanded]) [part='toggle']::before {
      content: var(--lumo-icons-angle-right);
      transform: rotate(90deg);
    }

    /* Experimental support for hierarchy connectors, using an unsupported selector */
    :host([theme~='connectors']) #level-spacer {
      position: relative;
      z-index: -1;
      font-size: 1em;
      height: 1.5em;
    }

    :host([theme~='connectors']) #level-spacer::before {
      display: block;
      content: '';
      margin-top: calc(var(--lumo-space-m) * -1);
      height: calc(var(--lumo-space-m) + 3em);
      background-image: linear-gradient(
        to right,
        transparent calc(var(--vaadin-grid-tree-toggle-level-offset) - 1px),
        var(--lumo-contrast-10pct) calc(var(--vaadin-grid-tree-toggle-level-offset) - 1px)
      );
      background-size: var(--vaadin-grid-tree-toggle-level-offset) var(--vaadin-grid-tree-toggle-level-offset);
      background-position: calc(var(--vaadin-grid-tree-toggle-level-offset) / 2 - 2px) 0;
    }

    /* RTL specific styles */

    :host([dir='rtl']) {
      margin-left: 0;
      margin-right: calc(var(--lumo-space-s) * -1);
    }

    :host([dir='rtl']) [part='toggle'] {
      margin-left: 0;
    }

    :host([dir='rtl'][expanded]) [part='toggle']::before {
      transform: rotate(-90deg);
    }

    :host([dir='rtl'][theme~='connectors']) #level-spacer::before {
      background-image: linear-gradient(
        to left,
        transparent calc(var(--vaadin-grid-tree-toggle-level-offset) - 1px),
        var(--lumo-contrast-10pct) calc(var(--vaadin-grid-tree-toggle-level-offset) - 1px)
      );
      background-position: calc(100% - (var(--vaadin-grid-tree-toggle-level-offset) / 2 - 2px)) 0;
    }

    :host([dir='rtl']:not([expanded])) [part='toggle']::before,
    :host([dir='rtl'][expanded]) [part='toggle']::before {
      content: var(--lumo-icons-angle-left);
    }
  `,{moduleId:"lumo-grid-tree-toggle"});/**
 * @license
 * Copyright (c) 2016 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Mp=document.createElement("template");Mp.innerHTML=`
  <style>
    @font-face {
      font-family: "vaadin-grid-tree-icons";
      src: url(data:application/font-woff;charset=utf-8;base64,d09GRgABAAAAAAQkAA0AAAAABrwAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABGRlRNAAAECAAAABoAAAAcgHwa6EdERUYAAAPsAAAAHAAAAB4AJwAOT1MvMgAAAZQAAAA/AAAAYA8TBIJjbWFwAAAB8AAAAFUAAAFeGJvXWmdhc3AAAAPkAAAACAAAAAgAAAAQZ2x5ZgAAAlwAAABLAAAAhIrPOhFoZWFkAAABMAAAACsAAAA2DsJI02hoZWEAAAFcAAAAHQAAACQHAgPHaG10eAAAAdQAAAAZAAAAHAxVAgBsb2NhAAACSAAAABIAAAASAIAAVG1heHAAAAF8AAAAGAAAACAACgAFbmFtZQAAAqgAAAECAAACTwflzbdwb3N0AAADrAAAADYAAABZQ7Ajh3icY2BkYGAA4twv3Vfi+W2+MnCzMIDANSOmbGSa2YEZRHEwMIEoAAoiB6sAeJxjYGRgYD7w/wADAwsDCDA7MDAyoAI2AFEEAtIAAAB4nGNgZGBg4GBgZgDRDAxMDGgAAAGbABB4nGNgZp7JOIGBlYGBaSbTGQYGhn4IzfiawZiRkwEVMAqgCTA4MDA+38d84P8BBgdmIAapQZJVYGAEAGc/C54AeJxjYYAAxlAIzQTELAwMBxgZGB0ACy0BYwAAAHicY2BgYGaAYBkGRgYQiADyGMF8FgYbIM3FwMHABISMDArP9/3/+/8/WJXC8z0Q9v8nEp5gHVwMMMAIMo+RDYiZoQJMQIKJARUA7WBhGN4AACFKDtoAAAAAAAAAAAgACAAQABgAJgA0AEIAAHichYvBEYBADAKBVHBjBT4swl9KS2k05o0XHd/yW1hAfBFwCv9sIlJu3nZaNS3PXAaXXHI8Lge7DlzF7C1RgXc7xkK6+gvcD2URmQB4nK2RQWoCMRiFX3RUqtCli65yADModOMBLLgQSqHddRFnQghIAnEUvEA3vUUP0LP0Fj1G+yb8R5iEhO9/ef/7FwFwj28o9EthiVp4hBlehcfUP4Ur8o/wBAv8CU+xVFvhOR7UB7tUdUdlVRJ6HnHWTnhM/V24In8JT5j/KzzFSi2E53hUz7jCcrcIiDDwyKSW1JEct2HdIPH1DFytbUM0PofWdNk5E5oUqb/Q6HHBiVGZpfOXkyUMEj5IyBuNmYZQjBobfsuassvnkKLe1OuBBj0VQ8cRni2xjLWsHaM0jrjx3peYA0/vrdmUYqe9iy7bzrX6eNP7Jh1SijX+AaUVbB8AAHicY2BiwA84GBgYmRiYGJkZmBlZGFkZ2djScyoLMgzZS/MyDQwMwLSruZMzlHaB0q4A76kLlwAAAAEAAf//AA94nGNgZGBg4AFiMSBmYmAEQnYgZgHzGAAD6wA2eJxjYGBgZACCKxJigiD6mhFTNowGACmcA/8AAA==) format('woff');
      font-weight: normal;
      font-style: normal;
    }
  </style>
`;document.head.appendChild(Mp.content);class $h extends G(Jt(z)){static get template(){return L`
      <style>
        :host {
          display: inline-flex;
          align-items: baseline;
          max-width: 100%;

          /* CSS API for :host */
          --vaadin-grid-tree-toggle-level-offset: 1em;
          --_collapsed-icon: '\\e7be\\00a0';
        }

        :host([dir='rtl']) {
          --_collapsed-icon: '\\e7bd\\00a0';
        }

        :host([hidden]) {
          display: none !important;
        }

        :host(:not([leaf])) {
          cursor: pointer;
        }

        #level-spacer,
        [part='toggle'] {
          flex: none;
        }

        #level-spacer {
          display: inline-block;
          width: calc(var(---level, '0') * var(--vaadin-grid-tree-toggle-level-offset));
        }

        [part='toggle']::before {
          font-family: 'vaadin-grid-tree-icons';
          line-height: 1em; /* make icon font metrics not affect baseline */
        }

        :host(:not([expanded])) [part='toggle']::before {
          content: var(--_collapsed-icon);
        }

        :host([expanded]) [part='toggle']::before {
          content: '\\e7bc\\00a0'; /* icon glyph + single non-breaking space */
        }

        :host([leaf]) [part='toggle'] {
          visibility: hidden;
        }

        slot {
          display: block;
          overflow: hidden;
          text-overflow: ellipsis;
        }
      </style>

      <span id="level-spacer"></span>
      <span part="toggle"></span>
      <slot></slot>
    `}static get is(){return"vaadin-grid-tree-toggle"}static get properties(){return{level:{type:Number,value:0,observer:"_levelChanged"},leaf:{type:Boolean,value:!1,reflectToAttribute:!0},expanded:{type:Boolean,value:!1,reflectToAttribute:!0,notify:!0}}}ready(){super.ready(),this.addEventListener("click",t=>this._onClick(t))}_onClick(t){this.leaf||o_(t.target)||t.target instanceof HTMLLabelElement||(t.preventDefault(),this.expanded=!this.expanded)}_levelChanged(t){const e=Number(t).toString();this.style.setProperty("---level",e)}}customElements.define($h.is,$h);/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class Nh extends s_{static get is(){return"vaadin-integer-field"}constructor(){super(),this.allowedCharPattern="[-+\\d]"}_valueChanged(t,e){if(t!==""&&!this.__isInteger(t)){console.warn(`Trying to set non-integer value "${t}" to <vaadin-integer-field>. Clearing the value.`),this.value="";return}super._valueChanged(t,e)}_stepChanged(t,e){if(t!=null&&!this.__hasOnlyDigits(t)){console.warn(`<vaadin-integer-field> The \`step\` property must be a positive integer but \`${t}\` was provided, so the property was reset to \`null\`.`),this.step=null;return}super._stepChanged(t,e)}__isInteger(t){return/^(-\d)?\d*$/u.test(String(t))}__hasOnlyDigits(t){return/^\d+$/u.test(String(t))}}customElements.define(Nh.is,Nh);/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class Bh extends ln(G(Jt(z))){static get template(){return L`
      <style>
        :host {
          display: inline-block;
        }

        :host([hidden]) {
          display: none !important;
        }
      </style>
      <span part="checkmark" aria-hidden="true"></span>
      <div part="content">
        <slot></slot>
      </div>
    `}static get is(){return"vaadin-item"}constructor(){super(),this.value}ready(){super.ready(),this.setAttribute("role","option")}}customElements.define(Bh.is,Bh);/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const sg=r=>class extends sn(r){static get properties(){return{multiple:{type:Boolean,value:!1,reflectToAttribute:!0,observer:"_multipleChanged"},selectedValues:{type:Array,notify:!0,value:()=>[]}}}static get observers(){return["_enhanceMultipleItems(items, multiple, selected, selectedValues, selectedValues.*)"]}ready(){this.addEventListener("click",e=>this._onMultipleClick(e)),super.ready()}_enhanceMultipleItems(e,i,n,a){if(!(!e||!i)){if(a){const o=a.map(s=>e[s]);e.forEach(s=>{s.selected=o.includes(s)})}this._scrollToLastSelectedItem()}}_scrollToLastSelectedItem(){const e=this.selectedValues.slice(-1)[0];e&&!e.disabled&&this._scrollToItem(e)}_onMultipleClick(e){const i=this._filterItems(e.composedPath())[0],n=i&&!i.disabled?this.items.indexOf(i):-1;n<0||!this.multiple||(e.preventDefault(),this.selectedValues.includes(n)?this.selectedValues=this.selectedValues.filter(a=>a!==n):this.selectedValues=this.selectedValues.concat(n))}_multipleChanged(e,i){!e&&i&&(this.selectedValues=[],this.items.forEach(n=>{n.selected=!1}),this.removeAttribute("aria-multiselectable")),e&&!i&&(this.setAttribute("aria-multiselectable","true"),this.selected!==void 0&&(this.selectedValues=[...this.selectedValues,this.selected],this.selected=void 0))}};/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class zh extends st(sg(G(Et(z)))){static get template(){return L`
      <style>
        :host {
          display: flex;
        }

        :host([hidden]) {
          display: none !important;
        }

        [part='items'] {
          height: 100%;
          width: 100%;
          overflow-y: auto;
          -webkit-overflow-scrolling: touch;
        }
      </style>
      <div part="items">
        <slot></slot>
      </div>

      <slot name="tooltip"></slot>
    `}static get is(){return"vaadin-list-box"}static get properties(){return{orientation:{readOnly:!0}}}constructor(){super(),this.focused}get _scrollerElement(){return this.shadowRoot.querySelector('[part="items"]')}ready(){super.ready(),this.setAttribute("role","listbox"),setTimeout(this._checkImport.bind(this),2e3),this._tooltipController=new Ht(this),this.addController(this._tooltipController)}_checkImport(){const t=this.querySelector("vaadin-item");t&&!(t instanceof z)&&console.warn("Make sure you have imported the vaadin-item element.")}}customElements.define(zh.is,zh);const lg=P`
  :host {
    max-width: calc(var(--lumo-size-m) * 10);
    background: var(--lumo-base-color) linear-gradient(var(--lumo-tint-5pct), var(--lumo-tint-5pct));
  }

  [part='form'] {
    padding: var(--lumo-space-l);
  }

  [part='form-title'] {
    margin-top: calc(var(--lumo-font-size-xxxl) - var(--lumo-font-size-xxl));
  }

  ::slotted([slot='forgot-password']) {
    margin: var(--lumo-space-s) auto;
  }

  [part='error-message'] {
    background-color: var(--lumo-error-color-10pct);
    padding: var(--lumo-space-m);
    border-radius: var(--lumo-border-radius-m);
    margin-top: var(--lumo-space-m);
    margin-bottom: var(--lumo-space-s);
    color: var(--lumo-error-text-color);
  }

  :host(:not([dir='rtl'])) [part='error-message'] {
    padding-left: var(--lumo-size-m);
  }

  :host([dir='rtl']) [part='error-message'] {
    padding-right: var(--lumo-size-m);
  }

  [part='error-message']::before {
    content: var(--lumo-icons-error);
    font-family: lumo-icons;
    font-size: var(--lumo-icon-size-m);
    position: absolute;
    width: var(--lumo-size-m);
    height: 1em;
    line-height: 1;
    text-align: center;
  }

  :host(:not([dir='rtl'])) [part='error-message']::before {
    /* Visual centering */
    margin-left: calc(var(--lumo-size-m) * -0.95);
  }

  :host([dir='rtl']) [part='error-message']::before {
    /* Visual centering */
    margin-right: calc(var(--lumo-size-m) * -0.95);
  }

  [part='error-message-title'] {
    margin: 0 0 0.25em;
    color: inherit;
  }

  [part='error-message-description'] {
    font-size: var(--lumo-font-size-s);
    line-height: var(--lumo-line-height-s);
    margin: 0;
    opacity: 0.9;
  }

  [part='footer'] {
    font-size: var(--lumo-font-size-xs);
    line-height: var(--lumo-line-height-s);
    color: var(--lumo-secondary-text-color);
  }
`;O("vaadin-login-form-wrapper",[uu,hu,lg],{moduleId:"lumo-login-form-wrapper"});O("vaadin-login-form",P`
    form > vaadin-button[theme~='submit'] {
      margin-top: var(--lumo-space-l);
      margin-bottom: var(--lumo-space-s);
    }
  `,{moduleId:"lumo-login-form"});/**
 * @license
 * Copyright (c) 2018 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class Gh extends G(z){static get template(){return L`
      <style>
        :host {
          overflow: hidden;
          display: inline-block;
        }

        :host([hidden]) {
          display: none !important;
        }

        [part='form'] {
          flex: 1;
          display: flex;
          flex-direction: column;
          box-sizing: border-box;
        }

        [part='form-title'] {
          margin: 0;
        }

        [part='error-message'] {
          position: relative;
        }
      </style>
      <section part="form">
        <h2 part="form-title">[[i18n.form.title]]</h2>
        <div part="error-message" hidden$="[[!error]]">
          <h5 part="error-message-title">[[i18n.errorMessage.title]]</h5>
          <p part="error-message-description">[[i18n.errorMessage.message]]</p>
        </div>

        <slot name="form"></slot>

        <slot name="forgot-password"></slot>

        <div part="footer">
          <p>[[i18n.additionalInformation]]</p>
        </div>
      </section>
    `}static get is(){return"vaadin-login-form-wrapper"}static get properties(){return{error:{type:Boolean,value:!1,reflectToAttribute:!0},i18n:{type:Object}}}}customElements.define(Gh.is,Gh);/**
 * @license
 * Copyright (c) 2018 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Op=r=>class extends r{static get properties(){return{action:{type:String,value:null},disabled:{type:Boolean,value:!1,notify:!0},error:{type:Boolean,value:!1,reflectToAttribute:!0,notify:!0},noForgotPassword:{type:Boolean,value:!1},noAutofocus:{type:Boolean,value:!1},i18n:{type:Object,value(){return{form:{title:"Log in",username:"Username",password:"Password",submit:"Log in",forgotPassword:"Forgot password"},errorMessage:{title:"Incorrect username or password",message:"Check that you have entered the correct username and password and try again."}}}},_preventAutoEnable:{type:Boolean,value:!1}}}};/**
 * @license
 * Copyright (c) 2018 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class Yh extends Op(st(G(z))){static get template(){return L`
      <style>
        vaadin-login-form-wrapper > form > * {
          width: 100%;
        }
      </style>
      <vaadin-login-form-wrapper theme$="[[_theme]]" error="[[error]]" i18n="[[i18n]]">
        <form method="POST" action$="[[action]]" slot="form">
          <input id="csrf" type="hidden" />
          <vaadin-text-field
            name="username"
            label="[[i18n.form.username]]"
            id="vaadinLoginUsername"
            required
            on-keydown="_handleInputKeydown"
            autocapitalize="none"
            autocorrect="off"
            spellcheck="false"
            autocomplete="username"
          >
            <input type="text" slot="input" on-keyup="_handleInputKeyup" />
          </vaadin-text-field>

          <vaadin-password-field
            name="password"
            label="[[i18n.form.password]]"
            id="vaadinLoginPassword"
            required
            on-keydown="_handleInputKeydown"
            spellcheck="false"
            autocomplete="current-password"
          >
            <input type="password" slot="input" on-keyup="_handleInputKeyup" />
          </vaadin-password-field>

          <vaadin-button theme="primary contained submit" on-click="submit" disabled$="[[disabled]]">
            [[i18n.form.submit]]
          </vaadin-button>
        </form>

        <vaadin-button
          slot="forgot-password"
          theme="tertiary small"
          on-click="_onForgotPasswordClick"
          hidden$="[[noForgotPassword]]"
        >
          [[i18n.form.forgotPassword]]
        </vaadin-button>
      </vaadin-login-form-wrapper>
    `}static get is(){return"vaadin-login-form"}static get observers(){return["_errorChanged(error)"]}connectedCallback(){super.connectedCallback(),this.noAutofocus||this.$.vaadinLoginUsername.focus()}_attachDom(t){this.appendChild(t)}_errorChanged(){this.error&&!this._preventAutoEnable&&(this.disabled=!1)}submit(){const t=this.$.vaadinLoginUsername,e=this.$.vaadinLoginPassword;if(this.disabled||!(t.validate()&&e.validate()))return;this.error=!1,this.disabled=!0;const i={bubbles:!0,cancelable:!0,detail:{username:t.value,password:e.value}},n=this.dispatchEvent(new CustomEvent("login",i));if(this.action&&n){const a=document.querySelector("meta[name=_csrf_parameter]"),o=document.querySelector("meta[name=_csrf]");a&&o&&(this.$.csrf.name=a.content,this.$.csrf.value=o.content),this.querySelector("form").submit()}}_handleInputKeydown(t){if(t.key==="Enter"){const{currentTarget:e}=t,i=e.id==="vaadinLoginUsername"?this.$.vaadinLoginPassword:this.$.vaadinLoginUsername;e.validate()&&(i.validate()?this.submit():i.focus())}}_handleInputKeyup(t){const e=t.currentTarget;t.key==="Tab"&&e instanceof HTMLInputElement&&e.select()}_onForgotPasswordClick(){this.dispatchEvent(new CustomEvent("forgot-password"))}}customElements.define(Yh.is,Yh);const ug=P`
  :host {
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }

  [part='backdrop'] {
    background: var(--lumo-base-color) linear-gradient(var(--lumo-shade-5pct), var(--lumo-shade-5pct));
  }

  [part='content'] {
    padding: 0;
  }

  [part='overlay'] {
    background: none;
    border-radius: 0;
    box-shadow: none;
    width: 100%;
    height: 100%;
  }

  [part='card'] {
    width: calc(var(--lumo-size-m) * 10);
    background: var(--lumo-base-color) linear-gradient(var(--lumo-tint-5pct), var(--lumo-tint-5pct));
  }

  [part='brand'] {
    padding: var(--lumo-space-l) var(--lumo-space-xl) var(--lumo-space-l) var(--lumo-space-l);
    background-color: var(--lumo-primary-color);
    color: var(--lumo-primary-contrast-color);
    min-height: calc(var(--lumo-size-m) * 5);
  }

  [part='description'] {
    line-height: var(--lumo-line-height-s);
    color: var(--lumo-tint-70pct);
    margin-bottom: 0;
  }

  [part='content'] {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  [part='card'] {
    border-radius: var(--lumo-border-radius-l);
    box-shadow: var(--lumo-box-shadow-s);
    margin: var(--lumo-space-s);
    height: auto;
  }

  /* Small screen */
  @media only screen and (max-width: 500px) {
    [part='overlay'],
    [part='content'] {
      height: 100%;
    }

    [part='content'] {
      min-height: 100%;
      background: var(--lumo-base-color);
      align-items: flex-start;
    }

    [part='card'],
    [part='overlay'] {
      width: 100%;
      border-radius: 0;
      box-shadow: none;
      margin: 0;
    }

    /* RTL styles */
    :host([dir='rtl']) [part='brand'] {
      padding: var(--lumo-space-l) var(--lumo-space-l) var(--lumo-space-l) var(--lumo-space-xl);
    }
  }

  /* Landscape small screen */
  @media only screen and (max-height: 600px) and (min-width: 600px) and (orientation: landscape) {
    [part='card'] {
      flex-direction: row;
      align-items: stretch;
      max-width: calc(var(--lumo-size-m) * 16);
      width: 100%;
    }

    [part='brand'],
    [part='form'] {
      flex: auto;
      flex-basis: 0;
      box-sizing: border-box;
    }

    [part='brand'] {
      justify-content: flex-start;
    }

    [part='form'] {
      padding: var(--lumo-space-l);
      overflow: auto;
    }
  }

  /* Landscape really small screen */
  @media only screen and (max-height: 500px) and (min-width: 600px) and (orientation: landscape),
    only screen and (max-width: 600px) and (min-width: 600px) and (orientation: landscape) {
    [part='content'] {
      height: 100vh;
    }

    [part='card'] {
      margin: 0;
      width: 100%;
      max-width: none;
      height: 100%;
      flex: auto;
      border-radius: 0;
      box-shadow: none;
    }

    [part='form'] {
      height: 100%;
      overflow: auto;
      -webkit-overflow-scrolling: touch;
    }
  }

  /* Handle iPhone X notch */
  @media only screen and (device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3) {
    [part='card'] {
      padding-right: constant(safe-area-inset-right);
      padding-right: env(safe-area-inset-right);

      padding-left: constant(safe-area-inset-left);
      padding-left: env(safe-area-inset-left);
    }

    [part='brand'] {
      margin-left: calc(constant(safe-area-inset-left) * -1);
      margin-left: calc(env(safe-area-inset-left) * -1);

      padding-left: calc(var(--lumo-space-l) + constant(safe-area-inset-left));
      padding-left: calc(var(--lumo-space-l) + env(safe-area-inset-left));
    }

    /* RTL styles */
    :host([dir='rtl']) [part='card'] {
      padding-left: constant(safe-area-inset-right);
      padding-left: env(safe-area-inset-right);
      padding-right: constant(safe-area-inset-left);
      padding-right: env(safe-area-inset-left);
    }

    :host([dir='rtl']) [part='brand'] {
      margin-right: calc(constant(safe-area-inset-left) * -1);
      margin-right: calc(env(safe-area-inset-left) * -1);
      padding-right: calc(var(--lumo-space-l) + constant(safe-area-inset-left));
      padding-right: calc(var(--lumo-space-l) + env(safe-area-inset-left));
    }
  }
`;O("vaadin-login-overlay-wrapper",[uu,hu,ug],{moduleId:"vaadin-login-overlay-wrapper-lumo-styles"});const hg=P`
  :host([theme~='with-overlay']) {
    min-height: 100%;
    display: flex;
    justify-content: center;
    max-width: 100%;
  }

  /* Landscape small screen */
  @media only screen and (max-height: 600px) and (min-width: 600px) and (orientation: landscape) {
    :host([theme~='with-overlay']) [part='form'] {
      height: 100%;
      -webkit-overflow-scrolling: touch;
      flex: 1;
      padding: 2px;
    }
  }
`;O("vaadin-login-form-wrapper",[uu,hu,hg],{moduleId:"lumo-login-overlay"});/**
 * @license
 * Copyright (c) 2018 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */O("vaadin-login-overlay-wrapper",P`
    [part='overlay'] {
      outline: none;
    }

    [part='card'] {
      max-width: 100%;
      box-sizing: border-box;
      overflow: hidden;
      display: flex;
      flex-direction: column;
    }

    [part='brand'] {
      box-sizing: border-box;
      overflow: hidden;
      flex-grow: 1;
      flex-shrink: 0;
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
    }

    [part='brand'] h1 {
      color: inherit;
      margin: 0;
    }
  `,{moduleId:"vaadin-login-overlay-wrapper-styles"});const cg=L`
  <section part="card">
    <div part="brand">
      <slot name="title">
        <h1 part="title">[[title]]</h1>
      </slot>
      <p part="description">[[description]]</p>
    </div>
    <div part="form">
      <slot></slot>
    </div>
  </section>
`;let Fn;class Uh extends ur{static get is(){return"vaadin-login-overlay-wrapper"}static get properties(){return{title:{type:String},description:{type:String}}}static get template(){if(!Fn){Fn=super.template.cloneNode(!0);const t=cg.content.querySelector("[part=card]"),e=Fn.content.querySelector("#content");e.replaceChild(t,e.children[0])}return Fn}}customElements.define(Uh.is,Uh);/**
 * @license
 * Copyright (c) 2018 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class jh extends Op(No(st(G(z)))){static get template(){return L`
      <vaadin-login-overlay-wrapper
        id="vaadinLoginOverlayWrapper"
        opened="{{opened}}"
        focus-trap
        with-backdrop
        title="[[title]]"
        description="[[description]]"
        theme$="[[_theme]]"
        on-vaadin-overlay-escape-press="_preventClosingLogin"
        on-vaadin-overlay-outside-click="_preventClosingLogin"
      >
        <vaadin-login-form
          theme="with-overlay"
          id="vaadinLoginForm"
          action="[[action]]"
          disabled="{{disabled}}"
          error="{{error}}"
          no-autofocus="[[noAutofocus]]"
          no-forgot-password="[[noForgotPassword]]"
          i18n="{{i18n}}"
          on-login="_retargetEvent"
          on-forgot-password="_retargetEvent"
        ></vaadin-login-form>
      </vaadin-login-overlay-wrapper>
    `}static get is(){return"vaadin-login-overlay"}static get properties(){return{description:{type:String,value:"Application description",notify:!0},opened:{type:Boolean,value:!1,observer:"_onOpenedChange"},title:{type:String,value:"App name"}}}static get observers(){return["__i18nChanged(i18n.header.*)"]}ready(){super.ready(),this._overlayElement=this.$.vaadinLoginOverlayWrapper}connectedCallback(){super.connectedCallback(),this.__restoreOpened&&(this.opened=!0)}disconnectedCallback(){super.disconnectedCallback(),this.__restoreOpened=this.opened,this.opened=!1}__i18nChanged(t){const e=t.base;e&&(this.title=e.title,this.description=e.description)}_preventClosingLogin(t){t.preventDefault()}_retargetEvent(t){t.stopPropagation();const{detail:e,composed:i,cancelable:n,bubbles:a}=t;this.dispatchEvent(new CustomEvent(t.type,{bubbles:a,cancelable:n,composed:i,detail:e}))||t.preventDefault()}_onOpenedChange(){this.opened?(this._undoTeleport=this._teleport(this._getElementsToTeleport()),document.body.style.pointerEvents=this.$.vaadinLoginOverlayWrapper._previousDocumentPointerEvents):(this.$.vaadinLoginForm.$.vaadinLoginUsername.value="",this.$.vaadinLoginForm.$.vaadinLoginPassword.value="",this.disabled=!1,this._undoTeleport&&this._undoTeleport())}_teleport(t){const e=Array.from(t).map(i=>this.$.vaadinLoginOverlayWrapper.appendChild(i));return()=>{for(;e.length>0;)this.appendChild(e.shift())}}_getElementsToTeleport(){return this.querySelectorAll("[slot=title]")}}customElements.define(jh.is,jh);const dg=P`
  :host {
    margin: calc(var(--lumo-space-xs) / 2);
    margin-left: 0;
    border-radius: 0;
  }

  [part='label'] {
    width: 100%;
  }

  /* NOTE(web-padawan): avoid using shorthand padding property for IE11 */
  [part='label'] ::slotted(vaadin-menu-bar-item) {
    justify-content: center;
    background-color: transparent;
    height: var(--lumo-button-size);
    margin: 0 calc((var(--lumo-size-m) / 3 + var(--lumo-border-radius-m) / 2) * -1);
    padding-left: calc(var(--lumo-size-m) / 3 + var(--lumo-border-radius-m) / 2);
    padding-right: calc(var(--lumo-size-m) / 3 + var(--lumo-border-radius-m) / 2);
  }

  :host([theme~='small']) [part='label'] ::slotted(vaadin-menu-bar-item) {
    min-height: var(--lumo-size-s);
    margin: 0 calc((var(--lumo-size-s) / 3 + var(--lumo-border-radius-m) / 2) * -1);
    padding-left: calc(var(--lumo-size-s) / 3 + var(--lumo-border-radius-m) / 2);
    padding-right: calc(var(--lumo-size-s) / 3 + var(--lumo-border-radius-m) / 2);
  }

  :host([theme~='tertiary']) [part='label'] ::slotted(vaadin-menu-bar-item) {
    margin: 0 calc((var(--lumo-button-size) / 6) * -1);
    padding-left: calc(var(--lumo-button-size) / 6);
    padding-right: calc(var(--lumo-button-size) / 6);
  }

  :host([theme~='tertiary-inline']) {
    margin-top: calc(var(--lumo-space-xs) / 2);
    margin-bottom: calc(var(--lumo-space-xs) / 2);
    margin-right: calc(var(--lumo-space-xs) / 2);
  }

  :host([theme~='tertiary-inline']) [part='label'] ::slotted(vaadin-menu-bar-item) {
    margin: 0;
    padding: 0;
  }

  :host(:first-of-type) {
    border-radius: var(--lumo-border-radius-m) 0 0 var(--lumo-border-radius-m);

    /* Needed to retain the focus-ring with border-radius */
    margin-left: calc(var(--lumo-space-xs) / 2);
  }

  :host(:nth-last-of-type(2)),
  :host([slot='overflow']) {
    border-radius: 0 var(--lumo-border-radius-m) var(--lumo-border-radius-m) 0;
  }

  :host([theme~='tertiary']),
  :host([theme~='tertiary-inline']) {
    border-radius: var(--lumo-border-radius-m);
  }

  :host([slot='overflow']) {
    min-width: var(--lumo-button-size);
    padding-left: calc(var(--lumo-button-size) / 4);
    padding-right: calc(var(--lumo-button-size) / 4);
  }

  :host([slot='overflow']) ::slotted(*) {
    font-size: var(--lumo-font-size-xl);
  }

  :host([slot='overflow']) [part='prefix'],
  :host([slot='overflow']) [part='suffix'] {
    margin-left: 0;
    margin-right: 0;
  }

  /* RTL styles */
  :host([dir='rtl']) {
    margin-left: calc(var(--lumo-space-xs) / 2);
    margin-right: 0;
    border-radius: 0;
  }

  :host([dir='rtl']:first-of-type) {
    border-radius: 0 var(--lumo-border-radius-m) var(--lumo-border-radius-m) 0;
    margin-right: calc(var(--lumo-space-xs) / 2);
  }

  :host([dir='rtl']:nth-last-of-type(2)),
  :host([dir='rtl'][slot='overflow']) {
    border-radius: var(--lumo-border-radius-m) 0 0 var(--lumo-border-radius-m);
  }
`;O("vaadin-menu-bar-button",[Zf,dg],{moduleId:"lumo-menu-bar-button"});/**
 * @license
 * Copyright (c) 2019 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */O("vaadin-menu-bar-button",P`
    :host {
      flex-shrink: 0;
    }

    :host([slot='overflow']) {
      margin-inline-end: 0;
    }

    [part='label'] ::slotted(vaadin-menu-bar-item) {
      position: relative;
      z-index: 1;
    }
  `,{moduleId:"vaadin-menu-bar-button-styles"});class Wh extends Qf{static get is(){return"vaadin-menu-bar-button"}}customElements.define(Wh.is,Wh);const fg=P`
  [part='content'] {
    display: flex;
    /* tweak to inherit centering from menu bar button */
    align-items: inherit;
    justify-content: inherit;
  }

  [part='content'] ::slotted(vaadin-icon) {
    display: inline-block;
    width: var(--lumo-icon-size-m);
    height: var(--lumo-icon-size-m);
  }

  [part='content'] ::slotted(vaadin-icon[icon^='vaadin:']) {
    padding: var(--lumo-space-xs);
    box-sizing: border-box !important;
  }
`;O("vaadin-menu-bar-item",[on,l_,fg],{moduleId:"lumo-menu-bar-item"});O("vaadin-menu-bar-list-box",[nu,u_],{moduleId:"lumo-menu-bar-list-box"});const pg=P`
  :host(:first-of-type) {
    padding-top: var(--lumo-space-xs);
  }
`;O("vaadin-menu-bar-overlay",[au,h_,pg],{moduleId:"lumo-menu-bar-overlay"});O("vaadin-menu-bar",P`
    :host([has-single-button]) ::slotted(vaadin-menu-bar-button) {
      border-radius: var(--lumo-border-radius-m);
    }

    :host([theme~='end-aligned']) ::slotted(vaadin-menu-bar-button:first-of-type),
    :host([theme~='end-aligned'][has-single-button]) ::slotted(vaadin-menu-bar-button) {
      margin-inline-start: auto;
    }
  `,{moduleId:"lumo-menu-bar"});/**
 * @license
 * Copyright (c) 2019 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class Vh extends ln(G(Jt(z))){static get is(){return"vaadin-menu-bar-item"}static get template(){return L`
      <style>
        :host {
          display: inline-block;
        }

        :host([hidden]) {
          display: none !important;
        }
      </style>
      <span part="checkmark" aria-hidden="true"></span>
      <div part="content">
        <slot></slot>
      </div>
    `}connectedCallback(){super.connectedCallback(),this.setAttribute("role","menuitem")}}customElements.define(Vh.is,Vh);/**
 * @license
 * Copyright (c) 2019 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class qh extends sn(G(Jt(Et(z)))){static get is(){return"vaadin-menu-bar-list-box"}static get template(){return L`
      <style>
        :host {
          display: flex;
        }

        :host([hidden]) {
          display: none !important;
        }

        [part='items'] {
          height: 100%;
          width: 100%;
          overflow-y: auto;
          -webkit-overflow-scrolling: touch;
        }
      </style>
      <div part="items">
        <slot></slot>
      </div>
    `}static get properties(){return{orientation:{readOnly:!0}}}get _scrollerElement(){return this.shadowRoot.querySelector('[part="items"]')}ready(){super.ready(),this.setAttribute("role","menu")}}customElements.define(qh.is,qh);/**
 * @license
 * Copyright (c) 2019 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */O("vaadin-menu-bar-overlay",c_,{moduleId:"vaadin-menu-bar-overlay-styles"});class Hh extends d_(ur){static get is(){return"vaadin-menu-bar-overlay"}}customElements.define(Hh.is,Hh);/**
 * @license
 * Copyright (c) 2019 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class Xh extends f_{static get is(){return"vaadin-menu-bar-submenu"}static get template(){return L`
      <style>
        :host {
          display: block;
        }

        :host([hidden]) {
          display: none !important;
        }
      </style>

      <slot id="slot"></slot>

      <vaadin-menu-bar-overlay
        id="overlay"
        on-opened-changed="_onOverlayOpened"
        on-vaadin-overlay-open="_onVaadinOverlayOpen"
        modeless="[[_modeless]]"
        with-backdrop="[[_phone]]"
        phone$="[[_phone]]"
        model="[[_context]]"
        theme$="[[_theme]]"
      ></vaadin-menu-bar-overlay>
    `}constructor(){super(),this.openOn="opensubmenu"}get _tagNamePrefix(){return"vaadin-menu-bar"}_openedChanged(t){this.$.overlay.opened=t}close(){super.close(),this.hasAttribute("is-root")&&this.getRootNode().host._close()}}customElements.define(Xh.is,Xh);/**
 * @license
 * Copyright (c) 2019 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const vg=r=>class extends up(un(Oe(Et(r)))){static get properties(){return{openOnHover:{type:Boolean},_hasOverflow:{type:Boolean,value:!1},_overflow:{type:Object},_container:{type:Object}}}static get observers(){return["_itemsChanged(items, items.splices)","__hasOverflowChanged(_hasOverflow, _overflow)","__i18nChanged(i18n, _overflow)","_menuItemsChanged(items, _overflow, _container, items.splices)"]}constructor(){super(),this.__boundOnContextMenuKeydown=this.__onContextMenuKeydown.bind(this)}get focused(){return(this._getItems()||[]).find(p_)||this._expandedButton}get _vertical(){return!1}get _observeParent(){return!0}get _buttons(){return Array.from(this.querySelectorAll("vaadin-menu-bar-button"))}get _subMenu(){return this.shadowRoot.querySelector("vaadin-menu-bar-submenu")}ready(){super.ready(),this.setAttribute("role","menubar"),this._overflowController=new pt(this,"overflow","vaadin-menu-bar-button",{initializer:n=>{n.setAttribute("hidden","");const a=document.createElement("div");a.setAttribute("aria-hidden","true"),a.innerHTML="&centerdot;".repeat(3),n.appendChild(a),this._overflow=n,this._initButtonAttrs(n)}}),this.addController(this._overflowController),this.addEventListener("mousedown",()=>this._hideTooltip()),this.addEventListener("mouseleave",()=>this._hideTooltip()),this._subMenu.addEventListener("item-selected",this.__onItemSelected.bind(this)),this._subMenu.addEventListener("close-all-menus",this.__onEscapeClose.bind(this)),this._subMenu.$.overlay.addEventListener("keydown",this.__boundOnContextMenuKeydown);const i=this.shadowRoot.querySelector('[part="container"]');i.addEventListener("click",this.__onButtonClick.bind(this)),i.addEventListener("mouseover",n=>this._onMouseOver(n)),this._container=i}_getItems(){return this._buttons}disconnectedCallback(){super.disconnectedCallback(),this._hideTooltip(!0)}_onResize(){this.__detectOverflow()}__hasOverflowChanged(e,i){i&&i.toggleAttribute("hidden",!e)}_menuItemsChanged(e,i,n){!i||!n||e!==this._oldItems&&(this._oldItems=e,this.__renderButtons(e))}__i18nChanged(e,i){i&&e&&e.moreOptions!==void 0&&(e.moreOptions?i.setAttribute("aria-label",e.moreOptions):i.removeAttribute("aria-label"))}__getOverflowCount(e){return e.item&&e.item.children&&e.item.children.length||0}__restoreButtons(e){e.forEach(i=>{i.disabled=i.item&&i.item.disabled||this.disabled,i.style.visibility="",i.style.position="";const n=i.item&&i.item.component;n instanceof HTMLElement&&n.getAttribute("role")==="menuitem"&&this.__restoreItem(i,n)}),this.__updateOverflow([])}__restoreItem(e,i){e.appendChild(i),i.removeAttribute("role"),i.removeAttribute("aria-expanded"),i.removeAttribute("aria-haspopup"),i.removeAttribute("tabindex")}__updateOverflow(e){this._overflow.item={children:e},this._hasOverflow=e.length>0}__setOverflowItems(e,i){const n=this._container;if(n.offsetWidth<n.scrollWidth){this._hasOverflow=!0;const a=this.__isRTL;let o;for(o=e.length;o>0;o--){const l=e[o-1],u=getComputedStyle(l);if(!a&&l.offsetLeft+l.offsetWidth<n.offsetWidth-i.offsetWidth||a&&l.offsetLeft>=i.offsetWidth)break;l.disabled=!0,l.style.visibility="hidden",l.style.position="absolute",l.style.width=u.width}const s=e.filter((l,u)=>u>=o).map(l=>l.item);this.__updateOverflow(s)}}__detectOverflow(){const e=this._overflow,i=this._buttons.filter(s=>s!==e),n=this.__getOverflowCount(e);this.__restoreButtons(i),this.__setOverflowItems(i,e);const a=this.__getOverflowCount(e);n!==a&&this._subMenu.opened&&this._subMenu.close();const o=a===i.length||a===0&&i.length===1;this.toggleAttribute("has-single-button",o)}_removeButtons(){this._buttons.forEach(e=>{e!==this._overflow&&this.removeChild(e)})}_initButton(e){const i=document.createElement("vaadin-menu-bar-button"),n={...e};if(i.item=n,e.component){const a=this.__getComponent(n);n.component=a,a.item=n,i.appendChild(a)}else e.text&&(i.textContent=e.text);return i}_initButtonAttrs(e){e.setAttribute("role","menuitem"),(e===this._overflow||e.item&&e.item.children)&&(e.setAttribute("aria-haspopup","true"),e.setAttribute("aria-expanded","false"))}_setButtonDisabled(e,i){e.disabled=i,e.setAttribute("tabindex",i?"-1":"0")}_setButtonTheme(e,i){let n=i;const a=e.item&&e.item.theme;a!=null&&(n=Array.isArray(a)?a.join(" "):a),n?e.setAttribute("theme",n):e.removeAttribute("theme")}__getComponent(e){const i=e.component;let n;const a=i instanceof HTMLElement;if(a&&i.localName==="vaadin-menu-bar-item"?n=i:(n=document.createElement("vaadin-menu-bar-item"),n.appendChild(a?i:document.createElement(i))),e.text){const o=n.firstChild||n;o.textContent=e.text}return n}__renderButtons(e=[]){this._removeButtons(),e.length!==0&&(e.forEach(i=>{const n=this._initButton(i);this.insertBefore(n,this._overflow),this._setButtonDisabled(n,i.disabled),this._initButtonAttrs(n),this._setButtonTheme(n,this._theme)}),this.__detectOverflow())}_showTooltip(e,i){const n=this._tooltipController.node;n&&n.isConnected&&(n.generator===void 0&&(n.generator=({item:a})=>a&&a.tooltip),this._subMenu.opened||(this._tooltipController.setTarget(e),this._tooltipController.setContext({item:e.item}),n._stateController.open({hover:i,focus:!i})))}_hideTooltip(e){const i=this._tooltipController&&this._tooltipController.node;i&&i._stateController.close(e)}_setExpanded(e,i){e.toggleAttribute("expanded",i),e.toggleAttribute("active",i),e.setAttribute("aria-expanded",i?"true":"false")}_setTabindex(e,i){e.setAttribute("tabindex",i?"0":"-1")}_focusItem(e,i){const n=i&&this.focused===this._expandedButton;n&&this._close(),super._focusItem(e,i),this._buttons.forEach(a=>{this._setTabindex(a,a===e)}),n&&e.item&&e.item.children?this.__openSubMenu(e,!0,{keepFocus:!0}):e===this._overflow?this._hideTooltip():this._showTooltip(e)}_getButtonFromEvent(e){return Array.from(e.composedPath()).find(i=>i.localName==="vaadin-menu-bar-button")}_setFocused(e){if(e){const i=this.querySelector('[tabindex="0"]');i&&this._buttons.forEach(n=>{this._setTabindex(n,n===i),n===i&&n!==this._overflow&&v_()&&this._showTooltip(n)})}else this._hideTooltip()}_onArrowDown(e){e.preventDefault();const i=this._getButtonFromEvent(e);i===this._expandedButton?this._focusFirstItem():this.__openSubMenu(i,!0)}_onArrowUp(e){e.preventDefault();const i=this._getButtonFromEvent(e);i===this._expandedButton?this._focusLastItem():this.__openSubMenu(i,!0,{focusLast:!0})}_onEscape(e){e.composedPath().includes(this._expandedButton)&&this._close(!0),this._hideTooltip(!0)}_onKeyDown(e){switch(e.key){case"ArrowDown":this._onArrowDown(e);break;case"ArrowUp":this._onArrowUp(e);break;default:super._onKeyDown(e);break}}_itemsChanged(){const e=this._subMenu;e&&e.opened&&e.close()}_onMouseOver(e){const i=this._getButtonFromEvent(e);if(!i)this._hideTooltip();else if(i!==this._expandedButton){const n=this._subMenu.opened;i.item.children&&(this.openOnHover||n)?this.__openSubMenu(i,!1):n&&this._close(),i===this._overflow||this.openOnHover&&i.item.children?this._hideTooltip():this._showTooltip(i,!0)}}__onContextMenuKeydown(e){const i=Array.from(e.composedPath()).find(n=>n._item);if(i){const n=i.parentNode;e.keyCode===38&&i===n.items[0]&&this._close(!0),(e.keyCode===37||e.keyCode===39&&!i._item.children)&&(e.stopImmediatePropagation(),this._onKeyDown(e))}}__fireItemSelected(e){this.dispatchEvent(new CustomEvent("item-selected",{detail:{value:e}}))}__onButtonClick(e){e.stopPropagation();const i=this._getButtonFromEvent(e);i&&this.__openSubMenu(i,!1)}__openSubMenu(e,i,n={}){const a=this._subMenu,o=e.item;if(a.opened&&(this._close(),a.listenOn===e))return;const s=o&&o.children;if(!s||s.length===0){this.__fireItemSelected(o);return}a.items=s,a.listenOn=e;const l=a.$.overlay;l.positionTarget=e,l.noVerticalOverlap=!0,this._expandedButton=e,requestAnimationFrame(()=>{e.dispatchEvent(new CustomEvent("opensubmenu",{detail:{children:s}})),this._hideTooltip(!0),this._setExpanded(e,!0)}),this.style.pointerEvents="auto",l.addEventListener("vaadin-overlay-open",()=>{n.focusLast&&this._focusLastItem(),n.keepFocus&&this._focusItem(this._expandedButton,!1),i||l.$.overlay.focus(),l._updatePosition()},{once:!0})}_focusFirstItem(){this._subMenu.$.overlay.firstElementChild.focus()}_focusLastItem(){const e=this._subMenu.$.overlay.firstElementChild,i=e.items[e.items.length-1];i&&i.focus()}__onItemSelected(e){e.stopPropagation(),this._close(),this.__fireItemSelected(e.detail.value)}__onEscapeClose(){this.__deactivateButton(!0)}__deactivateButton(e){const i=this._expandedButton;i&&i.hasAttribute("expanded")&&(this._setExpanded(i,!1),e&&this._focusItem(i,!1),this._expandedButton=null)}_close(e){this.style.pointerEvents="",this.__deactivateButton(e),this._subMenu.opened&&this._subMenu.close()}};/**
 * @license
 * Copyright (c) 2019 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class Zh extends vg(Go(st(G(z)))){static get template(){return L`
      <style>
        :host {
          display: block;
        }

        :host([hidden]) {
          display: none !important;
        }

        [part='container'] {
          position: relative;
          display: flex;
          width: 100%;
          flex-wrap: nowrap;
          overflow: hidden;
        }
      </style>

      <div part="container">
        <slot></slot>
        <slot name="overflow"></slot>
      </div>
      <vaadin-menu-bar-submenu is-root overlay-class="[[overlayClass]]"></vaadin-menu-bar-submenu>

      <slot name="tooltip"></slot>
    `}static get is(){return"vaadin-menu-bar"}static get properties(){return{items:{type:Array,value:()=>[]},i18n:{type:Object,value:()=>({moreOptions:"More options"})},overlayClass:{type:String}}}static get observers(){return["_themeChanged(_theme, _overflow, _container)"]}ready(){super.ready(),this._tooltipController=new Ht(this),this._tooltipController.setManual(!0),this.addController(this._tooltipController)}_disabledChanged(t,e){super._disabledChanged(t,e),e!==t&&this.__updateButtonsDisabled(t)}_themeChanged(t,e,i){e&&i&&(this._buttons.forEach(n=>this._setButtonTheme(n,t)),this.__detectOverflow()),t?this._subMenu.setAttribute("theme",t):this._subMenu.removeAttribute("theme")}__updateButtonsDisabled(t){this._buttons.forEach(e=>{e.disabled=t||e.item&&e.item.disabled})}}customElements.define(Zh.is,Zh);/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const mg=P`
  [part='input-field'],
  [part='input-field'] ::slotted(textarea) {
    height: auto;
    box-sizing: border-box;
  }

  [part='input-field'] {
    /* Equal to the implicit padding in vaadin-text-field */
    padding-top: calc((var(--lumo-text-field-size) - 1em * var(--lumo-line-height-s)) / 2);
    padding-bottom: calc((var(--lumo-text-field-size) - 1em * var(--lumo-line-height-s)) / 2);
    transition: background-color 0.1s;
    line-height: var(--lumo-line-height-s);
  }

  :host(:not([readonly])) [part='input-field']::after {
    display: none;
  }

  :host([readonly]) [part='input-field'] {
    border: 1px dashed var(--lumo-contrast-30pct);
  }

  :host([readonly]) [part='input-field']::after {
    border: none;
  }

  :host(:hover:not([readonly]):not([focused]):not([invalid])) [part='input-field'] {
    background-color: var(--lumo-contrast-20pct);
  }

  @media (pointer: coarse) {
    :host(:hover:not([readonly]):not([focused]):not([invalid])) [part='input-field'] {
      background-color: var(--lumo-contrast-10pct);
    }

    :host(:active:not([readonly]):not([focused])) [part='input-field'] {
      background-color: var(--lumo-contrast-20pct);
    }
  }

  [part='input-field'] ::slotted(textarea) {
    line-height: inherit;
    --_lumo-text-field-overflow-mask-image: none;
  }

  /* Vertically align icon prefix/suffix with the first line of text */
  [part='input-field'] ::slotted(vaadin-icon) {
    margin-top: calc((var(--lumo-icon-size-m) - 1em * var(--lumo-line-height-s)) / -2);
  }
`;O("vaadin-text-area",[cn,mg],{moduleId:"lumo-text-area"});/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class _g extends pt{constructor(t,e){super(t,"textarea","textarea",{initializer:(i,n)=>{const a=n.getAttribute("value");a&&(i.value=a);const o=n.getAttribute("name");o&&i.setAttribute("name",o),i.id=this.defaultId,typeof e=="function"&&e(i)},useUniqueId:!0})}}/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const gg=r=>class extends un(m_(r)){static get properties(){return{maxlength:{type:Number},minlength:{type:Number},pattern:{type:String}}}static get delegateAttrs(){return[...super.delegateAttrs,"maxlength","minlength","pattern"]}static get constraints(){return[...super.constraints,"maxlength","minlength","pattern"]}get clearElement(){return this.$.clearButton}_onResize(){this.__scrollPositionUpdated()}_onScroll(){this.__scrollPositionUpdated()}ready(){super.ready(),this.addController(new _g(this,e=>{this._setInputElement(e),this._setFocusElement(e),this.stateTarget=e,this.ariaTarget=e})),this.addController(new dn(this.inputElement,this._labelController)),this.addEventListener("animationend",this._onAnimationEnd),this._inputField=this.shadowRoot.querySelector("[part=input-field]"),this._inputField.addEventListener("wheel",e=>{const i=this._inputField.scrollTop;this._inputField.scrollTop+=e.deltaY,i!==this._inputField.scrollTop&&(e.preventDefault(),this.__scrollPositionUpdated())}),this._updateHeight(),this.__scrollPositionUpdated()}__scrollPositionUpdated(){this._inputField.style.setProperty("--_text-area-vertical-scroll-position","0px"),this._inputField.style.setProperty("--_text-area-vertical-scroll-position",`${this._inputField.scrollTop}px`)}_onAnimationEnd(e){e.animationName.indexOf("vaadin-text-area-appear")===0&&this._updateHeight()}_valueChanged(e,i){super._valueChanged(e,i),this._updateHeight()}_updateHeight(){const e=this.inputElement,i=this._inputField;if(!e||!i)return;const n=i.scrollTop,a=this.value?this.value.length:0;if(this._oldValueLength>=a){const s=getComputedStyle(i).height,l=getComputedStyle(e).width;i.style.display="block",i.style.height=s,e.style.maxWidth=l,e.style.height="auto"}this._oldValueLength=a;const o=e.scrollHeight;o>e.clientHeight&&(e.style.height=`${o}px`),e.style.removeProperty("max-width"),i.style.removeProperty("display"),i.style.removeProperty("height"),i.scrollTop=n}checkValidity(){if(!super.checkValidity())return!1;if(!this.pattern||!this.inputElement.value)return!0;try{const e=this.inputElement.value.match(this.pattern);return e?e[0]===e.input:!1}catch{return!0}}};/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const yg=P`
  :host {
    animation: 1ms vaadin-text-area-appear;
  }

  .vaadin-text-area-container {
    flex: auto;
  }

  /* The label, helper text and the error message should neither grow nor shrink. */
  [part='label'],
  [part='helper-text'],
  [part='error-message'] {
    flex: none;
  }

  [part='input-field'] {
    flex: auto;
    overflow: auto;
    -webkit-overflow-scrolling: touch;
  }

  ::slotted(textarea) {
    -webkit-appearance: none;
    -moz-appearance: none;
    flex: auto;
    overflow: hidden;
    width: 100%;
    height: 100%;
    outline: none;
    resize: none;
    margin: 0;
    padding: 0 0.25em;
    border: 0;
    border-radius: 0;
    min-width: 0;
    font: inherit;
    font-size: 1em;
    line-height: normal;
    color: inherit;
    background-color: transparent;
    /* Disable default invalid style in Firefox */
    box-shadow: none;
  }

  /* Override styles from <vaadin-input-container> */
  [part='input-field'] ::slotted(textarea) {
    align-self: stretch;
    white-space: pre-wrap;
  }

  [part='input-field'] ::slotted(:not(textarea)) {
    align-self: flex-start;
  }

  /* Workaround https://bugzilla.mozilla.org/show_bug.cgi?id=1739079 */
  :host([disabled]) ::slotted(textarea) {
    user-select: none;
  }

  @keyframes vaadin-text-area-appear {
    to {
      opacity: 1;
    }
  }
`;/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */O("vaadin-text-area",[fn,yg],{moduleId:"vaadin-text-area-styles"});class Qh extends gg(G(st(z))){static get is(){return"vaadin-text-area"}static get template(){return L`
      <div class="vaadin-text-area-container">
        <div part="label">
          <slot name="label"></slot>
          <span part="required-indicator" aria-hidden="true"></span>
        </div>

        <vaadin-input-container
          part="input-field"
          readonly="[[readonly]]"
          disabled="[[disabled]]"
          invalid="[[invalid]]"
          theme$="[[_theme]]"
          on-scroll="_onScroll"
        >
          <slot name="prefix" slot="prefix"></slot>
          <slot name="textarea"></slot>
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
    `}ready(){super.ready(),this._tooltipController=new Ht(this),this._tooltipController.setPosition("top"),this.addController(this._tooltipController)}}customElements.define(Qh.is,Qh);O("vaadin-message-input",P`
    :host {
      padding: var(--lumo-space-s) var(--lumo-space-m);
    }

    ::slotted([slot='textarea']) {
      margin-inline-end: var(--lumo-space-s);
    }
  `,{moduleId:"lumo-message-input"});/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class Kh extends st(G(Et(z))){static get properties(){return{value:{type:String,value:""},i18n:{type:Object,value:()=>({send:"Send",message:"Message"})},disabled:{type:Boolean,value:!1,reflectToAttribute:!0},_button:{type:Object},_textArea:{type:Object}}}static get template(){return L`
      <style>
        :host {
          align-items: flex-start;
          box-sizing: border-box;
          display: flex;
          max-height: 50vh;
          overflow: hidden;
          flex-shrink: 0;
        }

        :host([hidden]) {
          display: none !important;
        }

        ::slotted([slot='button']) {
          flex-shrink: 0;
        }

        ::slotted([slot='textarea']) {
          align-self: stretch;
          flex-grow: 1;
        }
      </style>
      <slot name="textarea"></slot>

      <slot name="button"></slot>

      <slot name="tooltip"></slot>
    `}static get is(){return"vaadin-message-input"}static get observers(){return["__buttonPropsChanged(_button, disabled, i18n)","__textAreaPropsChanged(_textArea, disabled, i18n, value)"]}ready(){super.ready(),this._buttonController=new pt(this,"button","vaadin-button",{initializer:t=>{t.setAttribute("theme","primary contained"),t.addEventListener("click",()=>{this.__submit()}),this._button=t}}),this.addController(this._buttonController),this._textAreaController=new pt(this,"textarea","vaadin-text-area",{initializer:t=>{t.addEventListener("value-changed",i=>{this.value=i.detail.value}),t.addEventListener("keydown",i=>{i.key==="Enter"&&!i.shiftKey&&(i.preventDefault(),i.stopImmediatePropagation(),this.__submit())});const e=t.inputElement;e.removeAttribute("aria-labelledby"),e.setAttribute("rows",1),e.style.minHeight="0",this._textArea=t}}),this.addController(this._textAreaController),this._tooltipController=new Ht(this),this.addController(this._tooltipController)}__buttonPropsChanged(t,e,i){t&&(t.disabled=e,t.textContent=i.send)}__textAreaPropsChanged(t,e,i,n){if(t){t.disabled=e,t.value=n;const a=i.message;t.placeholder=a,a?t.inputElement.setAttribute("aria-label",a):t.inputElement.removeAttribute("aria-label")}}__submit(){this.value!==""&&(this.dispatchEvent(new CustomEvent("submit",{detail:{value:this.value}})),this.value=""),this._textArea.focus()}}customElements.define(Kh.is,Kh);O("vaadin-message",P`
    :host {
      color: var(--lumo-body-text-color);
      font-family: var(--lumo-font-family);
      font-size: var(--lumo-font-size-m);
      line-height: var(--lumo-line-height-m);
      padding: var(--lumo-space-s) var(--lumo-space-m);
      -moz-osx-font-smoothing: grayscale;
      -webkit-font-smoothing: antialiased;
      -webkit-text-size-adjust: 100%;
    }

    :host([focus-ring]) {
      box-shadow: inset 0 0 0 2px var(--lumo-primary-color-50pct);
    }

    [part='header'] {
      min-height: calc(var(--lumo-font-size-m) * var(--lumo-line-height-m));
    }

    [part='name'] {
      margin-right: var(--lumo-space-s);
    }

    [part='name']:empty {
      margin-right: 0;
    }

    :host([dir='rtl']) [part='name'] {
      margin-left: var(--lumo-space-s);
      margin-right: 0;
    }

    :host([dir='rtl']) [part='name']:empty {
      margin-left: 0;
    }

    [part='time'] {
      color: var(--lumo-secondary-text-color);
      font-size: var(--lumo-font-size-s);
    }

    ::slotted([slot='avatar']) {
      --vaadin-avatar-size: var(--lumo-size-m);
      margin-top: calc(var(--lumo-space-s));
      margin-inline-end: calc(var(--lumo-space-m));
    }
  `,{moduleId:"lumo-message"});O("vaadin-message-list",P``,{moduleId:"lumo-message-list"});/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const bg=r=>r??R_;/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class Os extends Oe(st(G(Et(z)))){static get properties(){return{time:{type:String},userName:{type:String},userAbbr:{type:String},userImg:{type:String},userColorIndex:{type:Number},_avatar:{ttype:Object}}}static get template(){return L`
      <style>
        :host {
          display: flex;
          flex-direction: row;
          outline: none;
        }

        :host([hidden]) {
          display: none !important;
        }

        [part='content'] {
          display: flex;
          flex-direction: column;
          flex-grow: 1;
        }

        [part='header'] {
          align-items: baseline;
          display: flex;
          flex-direction: row;
          flex-wrap: wrap;
        }

        [part='name'] {
          font-weight: 500;
        }

        [part='message'] {
          white-space: pre-wrap;
        }

        ::slotted([slot='avatar']) {
          --vaadin-avatar-outline-width: 0px;
          flex-shrink: 0;
        }
      </style>
      <slot name="avatar"></slot>
      <div part="content">
        <div part="header">
          <span part="name">[[userName]]</span>
          <span part="time">[[time]]</span>
        </div>
        <div part="message"><slot></slot></div>
      </div>
    `}static get is(){return"vaadin-message"}static get observers(){return["__avatarChanged(_avatar, userName, userAbbr, userImg, userColorIndex)"]}ready(){super.ready(),this._avatarController=new pt(this,"avatar","vaadin-avatar",{initializer:t=>{t.setAttribute("tabindex","-1"),t.setAttribute("aria-hidden","true"),this._avatar=t}}),this.addController(this._avatarController)}__avatarChanged(t,e,i,n,a){t&&t.setProperties({name:e,abbr:i,img:n,colorIndex:a})}}customElements.define(Os.is,Os);/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class Jh extends up(st(G(z))){static get is(){return"vaadin-message-list"}static get properties(){return{items:{type:Array,value:()=>[],observer:"_itemsChanged"}}}static get template(){return L`
      <style>
        :host {
          display: block;
          overflow: auto;
        }

        :host([hidden]) {
          display: none !important;
        }
      </style>
      <div part="list" role="list">
        <slot></slot>
      </div>
    `}get _messages(){return[...this.querySelectorAll("vaadin-message")]}ready(){super.ready(),this.setAttribute("aria-relevant","additions"),this.setAttribute("role","log")}_getItems(){return this._messages}_itemsChanged(t,e){const i=t||[],n=e||[];if(i.length||n.length){const a=this._getIndexOfFocusableElement(),o=this.scrollHeight<this.clientHeight+this.scrollTop+50;this._renderMessages(i),this._setTabIndexesByIndex(a),requestAnimationFrame(()=>{i.length>n.length&&o&&this._scrollToLastMessage()})}}_renderMessages(t){du(ri`
        ${t.map(e=>ri`
              <vaadin-message
                role="listitem"
                .time="${e.time}"
                .userAbbr="${e.userAbbr}"
                .userName="${e.userName}"
                .userImg="${e.userImg}"
                .userColorIndex="${e.userColorIndex}"
                theme="${bg(e.theme)}"
                @focusin="${this._onMessageFocusIn}"
                >${e.text}</vaadin-message
              >
            `)}
      `,this,{host:this})}_scrollToLastMessage(){this.items.length>0&&(this.scrollTop=this.scrollHeight-this.clientHeight)}_onMessageFocusIn(t){const e=t.composedPath().find(i=>i instanceof Os);this._setTabIndexesByMessage(e)}_setTabIndexesByIndex(t){const e=this._messages[t]||this._messages[0];this._setTabIndexesByMessage(e)}_setTabIndexesByMessage(t){this._messages.forEach(e=>{e.tabIndex=e===t?0:-1})}_getIndexOfFocusableElement(){const t=this._messages.findIndex(e=>e.tabIndex===0);return t!==-1?t:0}}customElements.define(Jh.is,Jh);/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const wg=P`
  :host {
    font-size: var(--lumo-font-size-xxs);
    line-height: 1;
    color: var(--lumo-body-text-color);
    border-radius: var(--lumo-border-radius-s);
    background-color: var(--lumo-contrast-20pct);
    cursor: var(--lumo-clickable-cursor);
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  :host([focused]) [part='remove-button'] {
    color: inherit;
  }

  :host([slot='overflow']) {
    position: relative;
    min-width: var(--lumo-size-xxs);
    margin-inline-start: var(--lumo-space-s);
  }

  :host([slot='overflow'])::before,
  :host([slot='overflow'])::after {
    position: absolute;
    content: '';
    width: 100%;
    height: 100%;
    border-left: calc(var(--lumo-space-s) / 4) solid;
    border-radius: var(--lumo-border-radius-s);
    border-color: var(--lumo-contrast-30pct);
  }

  :host([slot='overflow'])::before {
    left: calc(-1 * var(--lumo-space-s) / 2);
  }

  :host([slot='overflow'])::after {
    left: calc(-1 * var(--lumo-space-s));
  }

  :host([count='2']) {
    margin-inline-start: calc(var(--lumo-space-s) / 2);
  }

  :host([count='2'])::after {
    display: none;
  }

  :host([count='1']) {
    margin-inline-start: 0;
  }

  :host([count='1'])::before,
  :host([count='1'])::after {
    display: none;
  }

  [part='label'] {
    font-weight: 500;
    line-height: 1.25;
  }

  [part='remove-button'] {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: -0.3125em;
    margin-bottom: -0.3125em;
    margin-inline-start: auto;
    width: 1.25em;
    height: 1.25em;
    font-size: 1.5em;
    transition: none;
  }

  [part='remove-button']::before {
    content: var(--lumo-icons-cross);
  }

  :host([disabled]) [part='label'] {
    color: var(--lumo-disabled-text-color);
    -webkit-text-fill-color: var(--lumo-disabled-text-color);
    pointer-events: none;
  }
`;O("vaadin-multi-select-combo-box-chip",[hp,wg],{moduleId:"lumo-multi-select-combo-box-chip"});/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const xg=P`
  @media (any-hover: hover) {
    :host(:hover[readonly]) {
      background-color: transparent;
      cursor: default;
    }
  }
`;O("vaadin-multi-select-combo-box-item",[on,np,xg],{moduleId:"lumo-multi-select-combo-box-item"});O("vaadin-multi-select-combo-box-overlay",[ru,iu,ip,cp,__,P`
      :host {
        --_vaadin-multi-select-combo-box-items-container-border-width: var(--lumo-space-xs);
        --_vaadin-multi-select-combo-box-items-container-border-style: solid;
      }
    `],{moduleId:"lumo-multi-select-combo-box-overlay"});const Ag=P`
  :host([has-value]) {
    padding-inline-start: 0;
  }

  :host([has-value]) ::slotted(input:placeholder-shown) {
    caret-color: var(--lumo-body-text-color) !important;
  }

  /* Override input-container styles */
  ::slotted([slot='chip']),
  ::slotted([slot='overflow']) {
    min-height: auto;
    padding: 0.3125em calc(0.5em + var(--lumo-border-radius-s) / 4);
    color: var(--lumo-body-text-color);
    -webkit-mask-image: none;
    mask-image: none;
  }

  ::slotted([slot='chip']:not([readonly]):not([disabled])) {
    padding-inline-end: 0;
  }

  ::slotted([slot='chip']:not(:last-of-type)),
  ::slotted([slot='overflow']:not(:last-of-type)) {
    margin-inline-end: var(--lumo-space-xs);
  }

  ::slotted([slot='chip'][focused]) {
    background-color: var(--lumo-primary-color);
    color: var(--lumo-primary-contrast-color);
  }

  [part='toggle-button']::before {
    content: var(--lumo-icons-dropdown);
  }

  :host([readonly][has-value]) [part='toggle-button'] {
    color: var(--lumo-contrast-60pct);
    cursor: var(--lumo-clickable-cursor);
  }
`;O("vaadin-multi-select-combo-box",[cn,Ag],{moduleId:"lumo-multi-select-combo-box"});/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class tc extends G(z){static get is(){return"vaadin-multi-select-combo-box-chip"}static get properties(){return{disabled:{type:Boolean,reflectToAttribute:!0},readonly:{type:Boolean,reflectToAttribute:!0},label:{type:String},item:{type:Object}}}static get template(){return L`
      <style>
        :host {
          display: inline-flex;
          align-items: center;
          align-self: center;
          white-space: nowrap;
          box-sizing: border-box;
        }

        [part='label'] {
          overflow: hidden;
          text-overflow: ellipsis;
        }

        :host([hidden]),
        :host(:is([readonly], [disabled], [slot='overflow'])) [part='remove-button'] {
          display: none !important;
        }
      </style>
      <div part="label">[[label]]</div>
      <div part="remove-button" role="button" on-click="_onRemoveClick"></div>
    `}_onRemoveClick(t){t.stopPropagation(),this.dispatchEvent(new CustomEvent("item-removed",{detail:{item:this.item},bubbles:!0,composed:!0}))}}customElements.define(tc.is,tc);/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */O("vaadin-multi-select-combo-box-container",P`
    #wrapper {
      display: flex;
      width: 100%;
    }
  `,{moduleId:"vaadin-multi-select-combo-box-container-styles"});let $n;class ec extends g_{static get is(){return"vaadin-multi-select-combo-box-container"}static get template(){if(!$n){$n=super.template.cloneNode(!0);const t=$n.content,e=t.querySelectorAll("slot"),i=document.createElement("div");i.setAttribute("id","wrapper"),t.insertBefore(i,e[2]),i.appendChild(e[0]),i.appendChild(e[1])}return $n}}customElements.define(ec.is,ec);/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class rc extends ap(G(Jt(z))){static get is(){return"vaadin-multi-select-combo-box-item"}static get template(){return L`
      <style>
        :host {
          display: block;
        }

        :host([hidden]) {
          display: none !important;
        }
      </style>
      <span part="checkmark" aria-hidden="true"></span>
      <div part="content">
        <slot></slot>
      </div>
    `}}customElements.define(rc.is,rc);/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */O("vaadin-multi-select-combo-box-overlay",P`
    #overlay {
      width: var(
        --vaadin-multi-select-combo-box-overlay-width,
        var(--_vaadin-multi-select-combo-box-overlay-default-width, auto)
      );
    }

    [part='content'] {
      display: flex;
      flex-direction: column;
      height: 100%;
    }
  `,{moduleId:"vaadin-multi-select-combo-box-overlay-styles"});let Nn;class ic extends sp(ur){static get is(){return"vaadin-multi-select-combo-box-overlay"}static get template(){if(!Nn){Nn=super.template.cloneNode(!0);const t=Nn.content.querySelector('[part~="overlay"]');t.removeAttribute("tabindex");const e=document.createElement("div");e.setAttribute("part","loader"),t.insertBefore(e,t.firstElementChild)}return Nn}}customElements.define(ic.is,ic);/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class nc extends op(z){static get is(){return"vaadin-multi-select-combo-box-scroller"}static get template(){return L`
      <style>
        :host {
          display: block;
          min-height: 1px;
          overflow: auto;

          /* Fixes item background from getting on top of scrollbars on Safari */
          transform: translate3d(0, 0, 0);

          /* Enable momentum scrolling on iOS */
          -webkit-overflow-scrolling: touch;

          /* Fixes scrollbar disappearing when 'Show scroll bars: Always' enabled in Safari */
          box-shadow: 0 0 0 white;
        }

        #selector {
          border-width: var(--_vaadin-multi-select-combo-box-items-container-border-width);
          border-style: var(--_vaadin-multi-select-combo-box-items-container-border-style);
          border-color: var(--_vaadin-multi-select-combo-box-items-container-border-color, transparent);
        }
      </style>
      <div id="selector">
        <slot></slot>
      </div>
    `}ready(){super.ready(),this.setAttribute("aria-multiselectable","true")}_isItemSelected(t,e,i){return t instanceof dp||this.owner.readonly?!1:this.owner._findIndex(t,this.owner.selectedItems,i)>-1}_updateElement(t,e){super._updateElement(t,e),t.toggleAttribute("readonly",this.owner.readonly)}}customElements.define(nc.is,nc);/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class ac extends y_(lp(G(z))){static get is(){return"vaadin-multi-select-combo-box-internal"}static get template(){return L`
      <style>
        :host([opened]) {
          pointer-events: auto;
        }
      </style>

      <slot></slot>

      <vaadin-multi-select-combo-box-overlay
        id="overlay"
        opened="[[_overlayOpened]]"
        loading$="[[loading]]"
        theme$="[[_theme]]"
        position-target="[[_target]]"
        no-vertical-overlap
        restore-focus-node="[[inputElement]]"
      ></vaadin-multi-select-combo-box-overlay>
    `}static get properties(){return{filteredItems:{type:Array,notify:!0},loading:{type:Boolean,notify:!0},size:{type:Number,notify:!0},selectedItems:{type:Array,value:()=>[]},lastFilter:{type:String,notify:!0},_target:{type:Object}}}get clearElement(){return this.querySelector('[part="clear-button"]')}get _tagNamePrefix(){return"vaadin-multi-select-combo-box"}open(){!this.disabled&&!(this.readonly&&this.selectedItems.length===0)&&(this.opened=!0)}ready(){super.ready(),this._target=this,this._toggleElement=this.querySelector(".toggle-button")}_initScroller(){const t=this.getRootNode().host;super._initScroller(t)}_onEnter(t){this.__enterPressed=!0,super._onEnter(t)}_closeOrCommit(){if(this.readonly){this.close();return}if(this.__enterPressed){this.__enterPressed=null;const t=this.filteredItems[this._focusedIndex];this._commitValue(),this._focusedIndex=this.filteredItems.indexOf(t);return}super._closeOrCommit()}_commitValue(){this.lastFilter=this.filter,super._commitValue()}_onArrowDown(){this.readonly?this.opened||this.open():super._onArrowDown()}_onArrowUp(){this.readonly?this.opened||this.open():super._onArrowUp()}_onFocusout(t){this._ignoreCommitValue=!0,super._onFocusout(t),this.readonly&&!this._closeOnBlurIsPrevented&&this.close()}_detectAndDispatchChange(){if(this._ignoreCommitValue){this._ignoreCommitValue=!1,this.selectedItem=null,this._inputElementValue="";return}super._detectAndDispatchChange()}_overlaySelectedItemChanged(t){t.stopPropagation(),!this.readonly&&(t.detail.item instanceof dp||this.opened&&this.dispatchEvent(new CustomEvent("combo-box-item-selected",{detail:{item:t.detail.item}})))}_shouldLoadPage(t){return this.readonly?!1:super._shouldLoadPage(t)}clearCache(){this.readonly||super.clearCache()}}customElements.define(ac.is,ac);/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Eg=P`
  :host {
    --input-min-width: var(--vaadin-multi-select-combo-box-input-min-width, 4em);
  }

  #chips {
    display: flex;
    align-items: center;
  }

  ::slotted(input) {
    box-sizing: border-box;
    flex: 1 0 var(--input-min-width);
  }

  ::slotted([slot='chip']),
  ::slotted([slot='overflow']) {
    flex: 0 1 auto;
  }

  :host(:is([readonly], [disabled])) ::slotted(input) {
    flex-grow: 0;
    flex-basis: 0;
    padding: 0;
  }
`;O("vaadin-multi-select-combo-box",[fn,Eg],{moduleId:"vaadin-multi-select-combo-box-styles"});class oc extends un(lu(G(st(z)))){static get is(){return"vaadin-multi-select-combo-box"}static get template(){return L`
      <div class="vaadin-multi-select-combo-box-container">
        <div part="label">
          <slot name="label"></slot>
          <span part="required-indicator" aria-hidden="true" on-click="focus"></span>
        </div>

        <vaadin-multi-select-combo-box-internal
          id="comboBox"
          items="[[__effectiveItems]]"
          item-id-path="[[itemIdPath]]"
          item-label-path="[[itemLabelPath]]"
          item-value-path="[[itemValuePath]]"
          disabled="[[disabled]]"
          readonly="[[readonly]]"
          auto-open-disabled="[[autoOpenDisabled]]"
          allow-custom-value="[[allowCustomValue]]"
          overlay-class="[[overlayClass]]"
          data-provider="[[dataProvider]]"
          filter="{{filter}}"
          last-filter="{{_lastFilter}}"
          loading="{{loading}}"
          size="{{size}}"
          filtered-items="[[__effectiveFilteredItems]]"
          selected-items="[[selectedItems]]"
          opened="{{opened}}"
          renderer="[[renderer]]"
          theme$="[[_theme]]"
          on-combo-box-item-selected="_onComboBoxItemSelected"
          on-change="_onComboBoxChange"
          on-custom-value-set="_onCustomValueSet"
          on-filtered-items-changed="_onFilteredItemsChanged"
        >
          <vaadin-multi-select-combo-box-container
            part="input-field"
            readonly="[[readonly]]"
            disabled="[[disabled]]"
            invalid="[[invalid]]"
            theme$="[[_theme]]"
          >
            <slot name="overflow" slot="prefix"></slot>
            <div id="chips" part="chips" slot="prefix">
              <slot name="chip"></slot>
            </div>
            <slot name="input"></slot>
            <div
              id="clearButton"
              part="clear-button"
              slot="suffix"
              on-touchend="_onClearButtonTouchend"
              aria-hidden="true"
            ></div>
            <div id="toggleButton" class="toggle-button" part="toggle-button" slot="suffix" aria-hidden="true"></div>
          </vaadin-multi-select-combo-box-container>
        </vaadin-multi-select-combo-box-internal>

        <div part="helper-text">
          <slot name="helper"></slot>
        </div>

        <div part="error-message">
          <slot name="error-message"></slot>
        </div>
      </div>

      <slot name="tooltip"></slot>
    `}static get properties(){return{autoOpenDisabled:Boolean,clearButtonVisible:{type:Boolean,reflectToAttribute:!0,observer:"_clearButtonVisibleChanged",value:!1},items:{type:Array},itemLabelPath:{type:String,value:"label"},itemValuePath:{type:String,value:"value"},itemIdPath:{type:String},i18n:{type:Object,value:()=>({cleared:"Selection cleared",focused:"focused. Press Backspace to remove",selected:"added to selection",deselected:"removed from selection",total:"{count} items selected"})},loading:{type:Boolean,value:!1,reflectToAttribute:!0},overlayClass:{type:String},readonly:{type:Boolean,value:!1,observer:"_readonlyChanged",reflectToAttribute:!0},selectedItems:{type:Array,value:()=>[],notify:!0},opened:{type:Boolean,notify:!0,value:!1,reflectToAttribute:!0},size:{type:Number},pageSize:{type:Number,value:50,observer:"_pageSizeChanged"},dataProvider:{type:Object},allowCustomValue:{type:Boolean,value:!1},placeholder:{type:String,value:"",observer:"_placeholderChanged"},renderer:Function,filter:{type:String,value:"",notify:!0},filteredItems:Array,value:{type:String},__effectiveItems:{type:Array,computed:"__computeEffectiveItems(items, selectedItems, readonly)"},__effectiveFilteredItems:{type:Array,computed:"__computeEffectiveFilteredItems(items, filteredItems, selectedItems, readonly)"},_overflowItems:{type:Array,value:()=>[]},_focusedChipIndex:{type:Number,value:-1,observer:"_focusedChipIndexChanged"},_lastFilter:{type:String}}}static get observers(){return["_selectedItemsChanged(selectedItems, selectedItems.*)","__updateOverflowChip(_overflow, _overflowItems, disabled, readonly)"]}get slotStyles(){const t=this.localName;return[...super.slotStyles,`
        ${t}[has-value] input::placeholder {
          color: transparent !important;
        }
      `]}get clearElement(){return this.$.clearButton}get _chips(){return[...this.querySelectorAll('[slot="chip"]')]}get _hasValue(){return this.selectedItems&&this.selectedItems.length>0}ready(){super.ready(),this.addController(new jo(this,t=>{this._setInputElement(t),this._setFocusElement(t),this.stateTarget=t,this.ariaTarget=t})),this.addController(new dn(this.inputElement,this._labelController)),this._tooltipController=new Ht(this),this.addController(this._tooltipController),this._tooltipController.setPosition("top"),this._tooltipController.setShouldShow(t=>!t.opened),this._inputField=this.shadowRoot.querySelector('[part="input-field"]'),this._overflowController=new pt(this,"overflow","vaadin-multi-select-combo-box-chip",{initializer:t=>{t.addEventListener("mousedown",e=>this._preventBlur(e)),this._overflow=t}}),this.addController(this._overflowController),this.__updateChips(),cu(this)}checkValidity(){return this.required&&!this.readonly?this._hasValue:!0}clear(){this.__updateSelection([]),ke(this.i18n.cleared)}clearCache(){this.$&&this.$.comboBox&&this.$.comboBox.clearCache()}requestContentUpdate(){this.$&&this.$.comboBox&&this.$.comboBox.requestContentUpdate()}_disabledChanged(t,e){super._disabledChanged(t,e),(t||e)&&this.__updateChips()}_inputElementChanged(t){super._inputElementChanged(t),t&&this.$.comboBox._setInputElement(t)}_setFocused(t){super._setFocused(t),t||(this._focusedChipIndex=-1,this.validate())}_onResize(){this.__updateChips()}_delegateAttribute(t,e){if(this.stateTarget){if(t==="required"){this._delegateAttribute("aria-required",e?"true":!1);return}super._delegateAttribute(t,e)}}_clearButtonVisibleChanged(t,e){(t||e)&&this.__updateChips()}_onFilteredItemsChanged(t){const{value:e}=t.detail;(Array.isArray(e)||e==null)&&(this.filteredItems=e)}_readonlyChanged(t,e){(t||e)&&this.__updateChips(),this.dataProvider&&this.clearCache()}_pageSizeChanged(t,e){(Math.floor(t)!==t||t<=0)&&(this.pageSize=e,console.error('"pageSize" value must be an integer > 0')),this.$.comboBox.pageSize=this.pageSize}_placeholderChanged(t){const e=this.__tmpA11yPlaceholder;e!==t&&(this.__savedPlaceholder=t,e&&(this.placeholder=e))}_selectedItemsChanged(t){if(this._toggleHasValue(this._hasValue),this._hasValue){const e=this._mergeItemLabels(t);this.__tmpA11yPlaceholder=e,this.placeholder=e}else delete this.__tmpA11yPlaceholder,this.placeholder=this.__savedPlaceholder;this.__updateChips(),this.requestContentUpdate()}_getItemLabel(t){return this.$.comboBox._getItemLabel(t)}_mergeItemLabels(t){return t.map(e=>this._getItemLabel(e)).join(", ")}_findIndex(t,e,i){if(i&&t){for(let n=0;n<e.length;n++)if(e[n]&&e[n][i]===t[i])return n;return-1}return e.indexOf(t)}__clearFilter(){this.filter="",this.$.comboBox.clear()}__announceItem(t,e,i){const n=e?"selected":"deselected",a=this.i18n.total.replace("{count}",i||0);ke(`${t} ${this.i18n[n]} ${a}`)}__removeItem(t){const e=[...this.selectedItems];e.splice(e.indexOf(t),1),this.__updateSelection(e);const i=this._getItemLabel(t);this.__announceItem(i,!1,e.length)}__selectItem(t){const e=[...this.selectedItems],i=this._findIndex(t,e,this.itemIdPath),n=this._getItemLabel(t);let a=!1;if(i!==-1){const o=this._lastFilter;if(o&&o.toLowerCase()===n.toLowerCase()){this.__clearFilter();return}e.splice(i,1)}else e.push(t),a=!0;this.__updateSelection(e),this.__clearFilter(),this.__announceItem(n,a,e.length)}__updateSelection(t){this.selectedItems=t,this.validate(),this.dispatchEvent(new CustomEvent("change",{bubbles:!0}))}__createChip(t){const e=document.createElement("vaadin-multi-select-combo-box-chip");e.setAttribute("slot","chip"),e.item=t,e.disabled=this.disabled,e.readonly=this.readonly;const i=this._getItemLabel(t);return e.label=i,e.setAttribute("title",i),e.addEventListener("item-removed",n=>this._onItemRemoved(n)),e.addEventListener("mousedown",n=>this._preventBlur(n)),e}__getOverflowWidth(){const t=this._overflow;t.style.visibility="hidden",t.removeAttribute("hidden");const e=t.getAttribute("count");t.setAttribute("count","99");const i=getComputedStyle(t),n=t.clientWidth+parseInt(i.marginInlineStart);return t.setAttribute("count",e),t.setAttribute("hidden",""),t.style.visibility="",n}__updateChips(){if(!this._inputField||!this.inputElement)return;this._chips.forEach(a=>{a.remove()});const t=[...this.selectedItems],e=this._inputField.$.wrapper.clientWidth,i=parseInt(getComputedStyle(this.inputElement).flexBasis);let n=e-i;t.length>1&&(n-=this.__getOverflowWidth());for(let a=t.length-1,o=null;a>=0;a--){const s=this.__createChip(t[a]);if(this.insertBefore(s,o),this.$.chips.clientWidth>n){s.remove();break}t.pop(),o=s}this._overflowItems=t}__updateOverflowChip(t,e,i,n){if(t){const a=e.length;t.label=`${a}`,t.setAttribute("count",`${a}`),t.setAttribute("title",this._mergeItemLabels(e)),t.toggleAttribute("hidden",a===0),t.disabled=i,t.readonly=n}}_onClearButtonTouchend(t){t.preventDefault(),this.clear()}_onClearButtonClick(t){t.stopPropagation(),this.clear()}_onChange(t){t.stopPropagation()}_onEscape(t){this.clearButtonVisible&&this.selectedItems&&this.selectedItems.length&&(t.stopPropagation(),this.selectedItems=[])}_onKeyDown(t){super._onKeyDown(t);const e=this._chips;if(!this.readonly&&e.length>0)switch(t.key){case"Backspace":this._onBackSpace(e);break;case"ArrowLeft":this._onArrowLeft(e,t);break;case"ArrowRight":this._onArrowRight(e,t);break;default:this._focusedChipIndex=-1;break}}_onArrowLeft(t,e){if(this.inputElement.selectionStart!==0)return;const i=this._focusedChipIndex;i!==-1&&e.preventDefault();let n;this.__isRTL?i===t.length-1?n=-1:i>-1&&(n=i+1):i===-1?n=t.length-1:i>0&&(n=i-1),n!==void 0&&(this._focusedChipIndex=n)}_onArrowRight(t,e){if(this.inputElement.selectionStart!==0)return;const i=this._focusedChipIndex;i!==-1&&e.preventDefault();let n;this.__isRTL?i===-1?n=t.length-1:i>0&&(n=i-1):i===t.length-1?n=-1:i>-1&&(n=i+1),n!==void 0&&(this._focusedChipIndex=n)}_onBackSpace(t){if(this.inputElement.selectionStart!==0)return;const e=this._focusedChipIndex;e===-1?this._focusedChipIndex=t.length-1:(this.__removeItem(t[e].item),this._focusedChipIndex=-1)}_focusedChipIndexChanged(t,e){if(t>-1||e>-1){const i=this._chips;if(i.forEach((n,a)=>{n.toggleAttribute("focused",a===t)}),t>-1){const n=i[t].item,a=this._getItemLabel(n);ke(`${a} ${this.i18n.focused}`)}}}_onComboBoxChange(){const t=this.$.comboBox.selectedItem;t&&this.__selectItem(t)}_onComboBoxItemSelected(t){this.__selectItem(t.detail.item)}_onCustomValueSet(t){t.preventDefault(),t.stopPropagation(),this.__clearFilter(),this.dispatchEvent(new CustomEvent("custom-value-set",{detail:t.detail,composed:!0,bubbles:!0}))}_onItemRemoved(t){this.__removeItem(t.detail.item)}_preventBlur(t){t.preventDefault()}__computeEffectiveItems(t,e,i){return t&&i?e:t}__computeEffectiveFilteredItems(t,e,i,n){return!t&&n?i:e}}customElements.define(oc.is,oc);O("vaadin-progress-bar",P`
    :host {
      height: calc(var(--lumo-size-l) / 10);
      margin: var(--lumo-space-s) 0;
    }

    [part='bar'] {
      border-radius: var(--lumo-border-radius-m);
      background-color: var(--lumo-contrast-10pct);
    }

    [part='value'] {
      border-radius: var(--lumo-border-radius-m);
      background-color: var(--lumo-primary-color);
      /* Use width instead of transform to preserve border radius */
      transform: none;
      width: calc(var(--vaadin-progress-value) * 100%);
      will-change: width;
      transition: 0.1s width linear;
    }

    /* Indeterminate mode */
    :host([indeterminate]) [part='value'] {
      --lumo-progress-indeterminate-progress-bar-background: linear-gradient(
        to right,
        var(--lumo-primary-color-10pct) 10%,
        var(--lumo-primary-color)
      );
      --lumo-progress-indeterminate-progress-bar-background-reverse: linear-gradient(
        to left,
        var(--lumo-primary-color-10pct) 10%,
        var(--lumo-primary-color)
      );
      width: 100%;
      background-color: transparent !important;
      background-image: var(--lumo-progress-indeterminate-progress-bar-background);
      opacity: 0.75;
      will-change: transform;
      animation: vaadin-progress-indeterminate 1.6s infinite cubic-bezier(0.645, 0.045, 0.355, 1);
    }

    @keyframes vaadin-progress-indeterminate {
      0% {
        transform: scaleX(0.015);
        transform-origin: 0% 0%;
      }

      25% {
        transform: scaleX(0.4);
      }

      50% {
        transform: scaleX(0.015);
        transform-origin: 100% 0%;
        background-image: var(--lumo-progress-indeterminate-progress-bar-background);
      }

      50.1% {
        transform: scaleX(0.015);
        transform-origin: 100% 0%;
        background-image: var(--lumo-progress-indeterminate-progress-bar-background-reverse);
      }

      75% {
        transform: scaleX(0.4);
      }

      100% {
        transform: scaleX(0.015);
        transform-origin: 0% 0%;
        background-image: var(--lumo-progress-indeterminate-progress-bar-background-reverse);
      }
    }

    :host(:not([aria-valuenow])) [part='value']::before,
    :host([indeterminate]) [part='value']::before {
      content: '';
      display: block;
      width: 100%;
      height: 100%;
      border-radius: inherit;
      background-color: var(--lumo-primary-color);
      will-change: opacity;
      animation: vaadin-progress-pulse3 1.6s infinite cubic-bezier(0.645, 0.045, 0.355, 1);
    }

    @keyframes vaadin-progress-pulse3 {
      0% {
        opacity: 1;
      }

      10% {
        opacity: 0;
      }

      40% {
        opacity: 0;
      }

      50% {
        opacity: 1;
      }

      50.1% {
        opacity: 1;
      }

      60% {
        opacity: 0;
      }

      90% {
        opacity: 0;
      }

      100% {
        opacity: 1;
      }
    }

    /* Contrast color */
    :host([theme~='contrast']) [part='value'],
    :host([theme~='contrast']) [part='value']::before {
      background-color: var(--lumo-contrast-80pct);
      --lumo-progress-indeterminate-progress-bar-background: linear-gradient(
        to right,
        var(--lumo-contrast-5pct) 10%,
        var(--lumo-contrast-80pct)
      );
      --lumo-progress-indeterminate-progress-bar-background-reverse: linear-gradient(
        to left,
        var(--lumo-contrast-5pct) 10%,
        var(--lumo-contrast-60pct)
      );
    }

    /* Error color */
    :host([theme~='error']) [part='value'],
    :host([theme~='error']) [part='value']::before {
      background-color: var(--lumo-error-color);
      --lumo-progress-indeterminate-progress-bar-background: linear-gradient(
        to right,
        var(--lumo-error-color-10pct) 10%,
        var(--lumo-error-color)
      );
      --lumo-progress-indeterminate-progress-bar-background-reverse: linear-gradient(
        to left,
        var(--lumo-error-color-10pct) 10%,
        var(--lumo-error-color)
      );
    }

    /* Primary color */
    :host([theme~='success']) [part='value'],
    :host([theme~='success']) [part='value']::before {
      background-color: var(--lumo-success-color);
      --lumo-progress-indeterminate-progress-bar-background: linear-gradient(
        to right,
        var(--lumo-success-color-10pct) 10%,
        var(--lumo-success-color)
      );
      --lumo-progress-indeterminate-progress-bar-background-reverse: linear-gradient(
        to left,
        var(--lumo-success-color-10pct) 10%,
        var(--lumo-success-color)
      );
    }

    /* RTL specific styles */
    :host([indeterminate][dir='rtl']) [part='value'] {
      --lumo-progress-indeterminate-progress-bar-background: linear-gradient(
        to left,
        var(--lumo-primary-color-10pct) 10%,
        var(--lumo-primary-color)
      );
      --lumo-progress-indeterminate-progress-bar-background-reverse: linear-gradient(
        to right,
        var(--lumo-primary-color-10pct) 10%,
        var(--lumo-primary-color)
      );
      animation: vaadin-progress-indeterminate-rtl 1.6s infinite cubic-bezier(0.355, 0.045, 0.645, 1);
    }

    :host(:not([aria-valuenow])[dir='rtl']) [part='value']::before,
    :host([indeterminate][dir='rtl']) [part='value']::before {
      animation: vaadin-progress-pulse3 1.6s infinite cubic-bezier(0.355, 0.045, 0.645, 1);
    }

    @keyframes vaadin-progress-indeterminate-rtl {
      0% {
        transform: scaleX(0.015);
        transform-origin: 100% 0%;
      }

      25% {
        transform: scaleX(0.4);
      }

      50% {
        transform: scaleX(0.015);
        transform-origin: 0% 0%;
        background-image: var(--lumo-progress-indeterminate-progress-bar-background);
      }

      50.1% {
        transform: scaleX(0.015);
        transform-origin: 0% 0%;
        background-image: var(--lumo-progress-indeterminate-progress-bar-background-reverse);
      }

      75% {
        transform: scaleX(0.4);
      }

      100% {
        transform: scaleX(0.015);
        transform-origin: 100% 0%;
        background-image: var(--lumo-progress-indeterminate-progress-bar-background-reverse);
      }
    }

    /* Contrast color */
    :host([theme~='contrast'][dir='rtl']) [part='value'],
    :host([theme~='contrast'][dir='rtl']) [part='value']::before {
      --lumo-progress-indeterminate-progress-bar-background: linear-gradient(
        to left,
        var(--lumo-contrast-5pct) 10%,
        var(--lumo-contrast-80pct)
      );
      --lumo-progress-indeterminate-progress-bar-background-reverse: linear-gradient(
        to right,
        var(--lumo-contrast-5pct) 10%,
        var(--lumo-contrast-60pct)
      );
    }

    /* Error color */
    :host([theme~='error'][dir='rtl']) [part='value'],
    :host([theme~='error'][dir='rtl']) [part='value']::before {
      --lumo-progress-indeterminate-progress-bar-background: linear-gradient(
        to left,
        var(--lumo-error-color-10pct) 10%,
        var(--lumo-error-color)
      );
      --lumo-progress-indeterminate-progress-bar-background-reverse: linear-gradient(
        to right,
        var(--lumo-error-color-10pct) 10%,
        var(--lumo-error-color)
      );
    }

    /* Primary color */
    :host([theme~='success'][dir='rtl']) [part='value'],
    :host([theme~='success'][dir='rtl']) [part='value']::before {
      --lumo-progress-indeterminate-progress-bar-background: linear-gradient(
        to left,
        var(--lumo-success-color-10pct) 10%,
        var(--lumo-success-color)
      );
      --lumo-progress-indeterminate-progress-bar-background-reverse: linear-gradient(
        to right,
        var(--lumo-success-color-10pct) 10%,
        var(--lumo-success-color)
      );
    }
  `,{moduleId:"lumo-progress-bar"});const Sp=document.createElement("template");Sp.innerHTML=`
  <style>
    @keyframes vaadin-progress-pulse3 {
      0% { opacity: 1; }
      10% { opacity: 0; }
      40% { opacity: 0; }
      50% { opacity: 1; }
      50.1% { opacity: 1; }
      60% { opacity: 0; }
      90% { opacity: 0; }
      100% { opacity: 1; }
    }
  </style>
`;document.head.appendChild(Sp.content);/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Cg=P`
  :host {
    display: block;
    width: 100%; /* prevent collapsing inside non-stretching column flex */
    height: 8px;
  }

  :host([hidden]) {
    display: none !important;
  }

  [part='bar'] {
    height: 100%;
  }

  [part='value'] {
    height: 100%;
    transform-origin: 0 50%;
    transform: scaleX(var(--vaadin-progress-value));
  }

  :host([dir='rtl']) [part='value'] {
    transform-origin: 100% 50%;
  }
`;/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Tg=r=>class extends r{static get properties(){return{value:{type:Number,observer:"_valueChanged"},min:{type:Number,value:0,observer:"_minChanged"},max:{type:Number,value:1,observer:"_maxChanged"},indeterminate:{type:Boolean,value:!1,reflectToAttribute:!0}}}static get observers(){return["_normalizedValueChanged(value, min, max)"]}ready(){super.ready(),this.setAttribute("role","progressbar")}_normalizedValueChanged(e,i,n){const a=this._normalizeValue(e,i,n);this.style.setProperty("--vaadin-progress-value",a)}_valueChanged(e){this.setAttribute("aria-valuenow",e)}_minChanged(e){this.setAttribute("aria-valuemin",e)}_maxChanged(e){this.setAttribute("aria-valuemax",e)}_normalizeValue(e,i,n){let a;return!e&&e!==0?a=0:i>=n?a=1:(a=(e-i)/(n-i),a=Math.min(Math.max(a,0),1)),a}};/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */O("vaadin-progress-bar",Cg,{moduleId:"vaadin-progress-bar-styles"});class sc extends st(G(Tg(z))){static get is(){return"vaadin-progress-bar"}static get template(){return L`
      <div part="bar">
        <div part="value"></div>
      </div>
    `}}customElements.define(sc.is,sc);O("vaadin-radio-button",P`
    :host {
      color: var(--lumo-body-text-color);
      font-size: var(--lumo-font-size-m);
      font-family: var(--lumo-font-family);
      line-height: var(--lumo-line-height-s);
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      -webkit-tap-highlight-color: transparent;
      -webkit-user-select: none;
      -moz-user-select: none;
      user-select: none;
      cursor: default;
      outline: none;
      --_radio-button-size: var(--vaadin-radio-button-size, calc(var(--lumo-size-m) / 2));
    }

    :host([has-label]) ::slotted(label) {
      padding-block: var(--lumo-space-xs);
      padding-inline: var(--lumo-space-xs) var(--lumo-space-s);
    }

    [part='radio'] {
      width: var(--_radio-button-size);
      height: var(--_radio-button-size);
      margin: var(--lumo-space-xs);
      position: relative;
      border-radius: 50%;
      background-color: var(--lumo-contrast-20pct);
      transition: transform 0.2s cubic-bezier(0.12, 0.32, 0.54, 2), background-color 0.15s;
      will-change: transform;
      cursor: var(--lumo-clickable-cursor);
    }

    /* Used for activation "halo" */
    [part='radio']::before {
      pointer-events: none;
      color: transparent;
      width: 100%;
      height: 100%;
      line-height: var(--_radio-button-size);
      border-radius: inherit;
      background-color: inherit;
      transform: scale(1.4);
      opacity: 0;
      transition: transform 0.1s, opacity 0.8s;
      will-change: transform, opacity;
    }

    /* Used for the dot */
    [part='radio']::after {
      content: '';
      pointer-events: none;
      width: 0;
      height: 0;
      border: 3px solid var(--lumo-primary-contrast-color);
      border-radius: 50%;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%) scale(0);
      transition: 0.25s transform;
      will-change: transform;
      background-clip: content-box;
    }

    :host([checked]) [part='radio'] {
      background-color: var(--lumo-primary-color);
    }

    :host([checked]) [part='radio']::after {
      transform: translate(-50%, -50%) scale(1);
    }

    :host(:not([checked]):not([disabled]):hover) [part='radio'] {
      background-color: var(--lumo-contrast-30pct);
    }

    :host([active]) [part='radio'] {
      transform: scale(0.9);
      transition-duration: 0.05s;
    }

    :host([active][checked]) [part='radio'] {
      transform: scale(1.1);
    }

    :host([active]:not([checked])) [part='radio']::before {
      transition-duration: 0.01s, 0.01s;
      transform: scale(0);
      opacity: 0.4;
    }

    :host([focus-ring]) [part='radio'] {
      box-shadow: 0 0 0 1px var(--lumo-base-color), 0 0 0 3px var(--lumo-primary-color-50pct);
    }

    :host([disabled]) {
      pointer-events: none;
      color: var(--lumo-disabled-text-color);
    }

    :host([disabled]) ::slotted(label) {
      color: inherit;
    }

    :host([disabled]) [part='radio'] {
      background-color: var(--lumo-contrast-10pct);
    }

    :host([disabled]) [part='radio']::after {
      border-color: var(--lumo-contrast-30pct);
    }

    /* RTL specific styles */
    :host([dir='rtl'][has-label]) ::slotted(label) {
      padding: var(--lumo-space-xs) var(--lumo-space-xs) var(--lumo-space-xs) var(--lumo-space-s);
    }
  `,{moduleId:"lumo-radio-button"});/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class Na extends b_(w_(su(x_(st(G(Et(z))))))){static get is(){return"vaadin-radio-button"}static get template(){return L`
      <style>
        :host {
          display: inline-block;
        }

        :host([hidden]) {
          display: none !important;
        }

        :host([disabled]) {
          -webkit-tap-highlight-color: transparent;
        }

        .vaadin-radio-button-container {
          display: grid;
          grid-template-columns: auto 1fr;
          align-items: baseline;
        }

        [part='radio'],
        ::slotted(input),
        ::slotted(label) {
          grid-row: 1;
        }

        [part='radio'],
        ::slotted(input) {
          grid-column: 1;
        }

        [part='radio'] {
          width: var(--vaadin-radio-button-size, 1em);
          height: var(--vaadin-radio-button-size, 1em);
        }

        [part='radio']::before {
          display: block;
          content: '\\202F';
          line-height: var(--vaadin-radio-button-size, 1em);
          contain: paint;
        }

        /* visually hidden */
        ::slotted(input) {
          opacity: 0;
          cursor: inherit;
          margin: 0;
          align-self: stretch;
          -webkit-appearance: none;
        }
      </style>
      <div class="vaadin-radio-button-container">
        <div part="radio" aria-hidden="true"></div>
        <slot name="input"></slot>
        <slot name="label"></slot>
      </div>
    `}static get properties(){return{name:{type:String,value:""}}}static get delegateAttrs(){return[...super.delegateAttrs,"name"]}constructor(){super(),this._setType("radio"),this.value="on"}ready(){super.ready(),this.addController(new jo(this,t=>{this._setInputElement(t),this._setFocusElement(t),this.stateTarget=t,this.ariaTarget=t})),this.addController(new dn(this.inputElement,this._labelController))}}customElements.define(Na.is,Na);const Mg=P`
  :host {
    color: var(--lumo-body-text-color);
    font-size: var(--lumo-font-size-m);
    font-family: var(--lumo-font-family);
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-tap-highlight-color: transparent;
    padding: var(--lumo-space-xs) 0;
  }

  :host::before {
    /* Effective height of vaadin-radio-button */
    height: var(--lumo-size-s);
    box-sizing: border-box;
    display: inline-flex;
    align-items: center;
  }

  :host([theme~='vertical']) [part='group-field'] {
    display: flex;
    flex-direction: column;
  }

  :host([focused]:not([readonly])) [part='label'] {
    color: var(--lumo-primary-text-color);
  }

  :host(:hover:not([readonly]):not([focused])) [part='label'],
  :host(:hover:not([readonly])) [part='helper-text'] {
    color: var(--lumo-body-text-color);
  }

  /* Touch device adjustment */
  @media (pointer: coarse) {
    :host(:hover:not([readonly]):not([focused])) [part='label'] {
      color: var(--lumo-secondary-text-color);
    }
  }
`;O("vaadin-radio-group",[Bo,zo,Mg],{moduleId:"lumo-radio-group"});/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class lc extends hn(Oe(Go(Yo(st(G(z)))))){static get is(){return"vaadin-radio-group"}static get template(){return L`
      <style>
        :host {
          display: inline-flex;
        }

        :host::before {
          content: '\\2003';
          width: 0;
          display: inline-block;
        }

        :host([hidden]) {
          display: none !important;
        }

        .vaadin-group-field-container {
          display: flex;
          flex-direction: column;
          width: 100%;
        }

        :host(:not([has-label])) [part='label'] {
          display: none;
        }
      </style>
      <div class="vaadin-group-field-container">
        <div part="label">
          <slot name="label"></slot>
          <span part="required-indicator" aria-hidden="true"></span>
        </div>

        <div part="group-field">
          <slot></slot>
        </div>

        <div part="helper-text">
          <slot name="helper"></slot>
        </div>

        <div part="error-message">
          <slot name="error-message"></slot>
        </div>
      </div>

      <slot name="tooltip"></slot>
    `}static get properties(){return{value:{type:String,notify:!0,value:"",observer:"__valueChanged"},readonly:{type:Boolean,value:!1,reflectToAttribute:!0,observer:"__readonlyChanged"},_fieldName:{type:String}}}constructor(){super(),this.__registerRadioButton=this.__registerRadioButton.bind(this),this.__unregisterRadioButton=this.__unregisterRadioButton.bind(this),this.__onRadioButtonCheckedChange=this.__onRadioButtonCheckedChange.bind(this)}get __radioButtons(){return this.__filterRadioButtons([...this.children])}get __selectedRadioButton(){return this.__radioButtons.find(t=>t.checked)}get isHorizontalRTL(){return this.__isRTL&&this._theme!=="vertical"}ready(){super.ready(),this.ariaTarget=this,this.setAttribute("role","radiogroup"),this._fieldName=`${this.localName}-${Uo()}`,this._observer=new xe(this,({addedNodes:t,removedNodes:e})=>{this.__filterRadioButtons(t).reverse().forEach(this.__registerRadioButton),this.__filterRadioButtons(e).forEach(this.__unregisterRadioButton)}),this._tooltipController=new Ht(this),this.addController(this._tooltipController)}__filterRadioButtons(t){return t.filter(e=>e instanceof Na)}_onKeyDown(t){super._onKeyDown(t);const e=t.composedPath().find(i=>i instanceof Na);["ArrowLeft","ArrowUp"].includes(t.key)&&(t.preventDefault(),this.__selectNextRadioButton(e)),["ArrowRight","ArrowDown"].includes(t.key)&&(t.preventDefault(),this.__selectPrevRadioButton(e))}_invalidChanged(t){super._invalidChanged(t),t?this.setAttribute("aria-invalid","true"):this.removeAttribute("aria-invalid")}__selectNextRadioButton(t){const e=this.__radioButtons.indexOf(t);this.__selectIncRadioButton(e,this.isHorizontalRTL?1:-1)}__selectPrevRadioButton(t){const e=this.__radioButtons.indexOf(t);this.__selectIncRadioButton(e,this.isHorizontalRTL?-1:1)}__selectIncRadioButton(t,e){const i=(this.__radioButtons.length+t+e)%this.__radioButtons.length,n=this.__radioButtons[i];n.disabled?this.__selectIncRadioButton(i,e):(n.focusElement.focus(),n.focusElement.click())}__registerRadioButton(t){t.name=this._fieldName,t.addEventListener("checked-changed",this.__onRadioButtonCheckedChange),(this.disabled||this.readonly)&&(t.disabled=!0),t.checked&&this.__selectRadioButton(t)}__unregisterRadioButton(t){t.removeEventListener("checked-changed",this.__onRadioButtonCheckedChange),t.value===this.value&&this.__selectRadioButton(null)}__onRadioButtonCheckedChange(t){t.target.checked&&this.__selectRadioButton(t.target)}__valueChanged(t,e){if(!(e===void 0&&t==="")){if(t){const i=this.__radioButtons.find(n=>n.value===t);i?(this.__selectRadioButton(i),this.toggleAttribute("has-value",!0)):console.warn(`The radio button with the value "${t}" was not found.`)}else this.__selectRadioButton(null),this.removeAttribute("has-value");e!==void 0&&this.validate()}}__readonlyChanged(t,e){!t&&e===void 0||e!==t&&this.__updateRadioButtonsDisabledProperty()}_disabledChanged(t,e){super._disabledChanged(t,e),!(!t&&e===void 0)&&e!==t&&this.__updateRadioButtonsDisabledProperty()}_shouldRemoveFocus(t){return!this.contains(t.relatedTarget)}_setFocused(t){super._setFocused(t),t||this.validate()}__selectRadioButton(t){t?this.value=t.value:this.value="",this.__radioButtons.forEach(e=>{e.checked=e===t}),this.readonly&&this.__updateRadioButtonsDisabledProperty()}__updateRadioButtonsDisabledProperty(){this.__radioButtons.forEach(t=>{this.readonly?t.disabled=t!==this.__selectedRadioButton:t.disabled=this.disabled})}}customElements.define(lc.is,lc);const Og=P`
  :host {
    outline: none;
  }

  :host([focus-ring]) {
    box-shadow: 0 0 0 2px var(--lumo-primary-color-50pct);
  }

  /* Show dividers when content overflows */

  :host([theme~='overflow-indicators'])::before,
  :host([theme~='overflow-indicators'])::after {
    content: '';
    display: none;
    position: sticky;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 9999;
    height: 1px;
    margin-bottom: -1px;
    background: var(--lumo-contrast-10pct);
  }

  :host([theme~='overflow-indicators'])::after {
    margin-bottom: 0;
    margin-top: -1px;
  }

  :host([theme~='overflow-indicators'][overflow~='top'])::before,
  :host([theme~='overflow-indicators'][overflow~='bottom'])::after {
    display: block;
  }
`;O("vaadin-scroller",Og,{moduleId:"lumo-scroller"});/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class vu{constructor(t,e){this.host=t,this.scrollTarget=e||t,this.__boundOnScroll=this.__onScroll.bind(this)}hostConnected(){this.initialized||(this.initialized=!0,this.observe())}observe(){this.__resizeObserver=new ResizeObserver(()=>{this.__debounceOverflow=Ae.debounce(this.__debounceOverflow,Kf,()=>{this.__updateOverflow()})}),this.__resizeObserver.observe(this.host),this.__childObserver=new xe(this.host,t=>{t.addedNodes.forEach(e=>{e.nodeType===Node.ELEMENT_NODE&&this.__resizeObserver.observe(e)}),t.removedNodes.forEach(e=>{e.nodeType===Node.ELEMENT_NODE&&this.__resizeObserver.unobserve(e)}),this.__updateOverflow()}),this.scrollTarget.addEventListener("scroll",this.__boundOnScroll),this.__updateOverflow()}__onScroll(){this.__updateOverflow()}__updateOverflow(){const t=this.scrollTarget;let e="";t.scrollTop>0&&(e+=" top"),Math.ceil(t.scrollTop)<Math.ceil(t.scrollHeight-t.clientHeight)&&(e+=" bottom");const i=Math.abs(t.scrollLeft);i>0&&(e+=" start"),Math.ceil(i)<Math.ceil(t.scrollWidth-t.clientWidth)&&(e+=" end"),e=e.trim(),e.length>0&&this.host.getAttribute("overflow")!==e?this.host.setAttribute("overflow",e):e.length===0&&this.host.hasAttribute("overflow")&&this.host.removeAttribute("overflow")}}/**
 * @license
 * Copyright (c) 2020 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class Ss extends Oe(st(Et(G(z)))){static get template(){return L`
      <style>
        :host([hidden]) {
          display: none !important;
        }

        :host {
          display: block;
          overflow: auto;
        }

        :host([scroll-direction='vertical']) {
          overflow-x: hidden;
        }

        :host([scroll-direction='horizontal']) {
          overflow-y: hidden;
        }

        :host([scroll-direction='none']) {
          overflow: hidden;
        }
      </style>

      <slot></slot>
    `}static get is(){return"vaadin-scroller"}static get properties(){return{scrollDirection:{type:String,reflectToAttribute:!0},tabindex:{type:Number,value:0,reflectToAttribute:!0}}}ready(){super.ready(),this.__overflowController=new vu(this),this.addController(this.__overflowController)}_shouldSetFocus(t){return t.target===this}}customElements.define(Ss.is,Ss);/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */O("vaadin-select-item",on,{moduleId:"lumo-select-item"});O("vaadin-select-list-box",nu,{moduleId:"lumo-select-list-box"});const Sg=P`
  :host(:not([theme*='align'])) ::slotted([slot='value']) {
    text-align: start;
  }

  [part='input-field'] {
    cursor: var(--lumo-clickable-cursor);
  }

  [part='input-field'] ::slotted([slot='value']) {
    font-weight: 500;
  }

  [part='input-field'] ::slotted([slot='value']:not([placeholder])) {
    color: var(--lumo-body-text-color);
  }

  :host([readonly]) [part='input-field'] ::slotted([slot='value']:not([placeholder])) {
    color: var(--lumo-secondary-text-color);
  }

  /* placeholder styles */
  [part='input-field'] ::slotted([slot='value'][placeholder]) {
    color: var(--lumo-secondary-text-color);
  }

  :host(:is([readonly], [disabled])) ::slotted([slot='value'][placeholder]) {
    opacity: 0;
  }

  [part='toggle-button']::before {
    content: var(--lumo-icons-dropdown);
  }

  /* Highlight the toggle button when hovering over the entire component */
  :host(:hover:not([readonly]):not([disabled])) [part='toggle-button'] {
    color: var(--lumo-contrast-80pct);
  }

  :host([theme~='small']) [part='input-field'] ::slotted([slot='value']) {
    --_lumo-selected-item-height: var(--lumo-size-s);
    --_lumo-selected-item-padding: 0;
  }
`;O("vaadin-select",[cn,Sg],{moduleId:"lumo-select"});O("vaadin-select-value-button",P`
    :host {
      font-family: var(--lumo-font-family);
      font-size: var(--lumo-font-size-m);
      padding: 0 0.25em;
      --_lumo-selected-item-height: var(--lumo-size-m);
      --_lumo-selected-item-padding: 0.5em;
    }

    ::slotted(*) {
      min-height: var(--_lumo-selected-item-height);
      padding-top: var(--_lumo-selected-item-padding);
      padding-bottom: var(--_lumo-selected-item-padding);
    }

    ::slotted(*:hover) {
      background-color: transparent;
    }
  `,{moduleId:"lumo-select-value-button"});const Ig=P`
  :host {
    --_lumo-item-selected-icon-display: block;
  }

  [part~='overlay'] {
    min-width: var(--vaadin-select-text-field-width);
  }

  /* Small viewport adjustment */
  :host([phone]) {
    top: 0 !important;
    right: 0 !important;
    bottom: var(--vaadin-overlay-viewport-bottom, 0) !important;
    left: 0 !important;
    align-items: stretch;
    justify-content: flex-end;
  }

  :host([theme~='align-left']) {
    text-align: left;
  }

  :host([theme~='align-right']) {
    text-align: right;
  }

  :host([theme~='align-center']) {
    text-align: center;
  }
`;O("vaadin-select-overlay",[au,Ig],{moduleId:"lumo-select-overlay"});/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class uc extends ln(G(Jt(z))){static get is(){return"vaadin-select-item"}static get template(){return L`
      <style>
        :host {
          display: inline-block;
        }

        :host([hidden]) {
          display: none !important;
        }
      </style>
      <span part="checkmark" aria-hidden="true"></span>
      <div part="content">
        <slot></slot>
      </div>
    `}ready(){super.ready(),this.setAttribute("role","option")}}customElements.define(uc.is,uc);/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class hc extends sn(G(Jt(Et(z)))){static get is(){return"vaadin-select-list-box"}static get template(){return L`
      <style>
        :host {
          display: flex;
        }

        :host([hidden]) {
          display: none !important;
        }

        [part='items'] {
          height: 100%;
          width: 100%;
          overflow-y: auto;
          -webkit-overflow-scrolling: touch;
        }
      </style>
      <div part="items">
        <slot></slot>
      </div>
    `}static get properties(){return{orientation:{readOnly:!0}}}get _scrollerElement(){return this.shadowRoot.querySelector('[part="items"]')}ready(){super.ready(),this.setAttribute("role","listbox")}}customElements.define(hc.is,hc);/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */O("vaadin-select-overlay",P`
    :host {
      align-items: flex-start;
      justify-content: flex-start;
    }
  `,{moduleId:"vaadin-select-overlay-styles"});class cc extends $o(ur){static get is(){return"vaadin-select-overlay"}requestContentUpdate(){if(super.requestContentUpdate(),this.owner){const t=this._getMenuElement();this.owner._assignMenuElement(t)}}_getMenuElement(){return Array.from(this.children).find(t=>t.localName!=="style")}}customElements.define(cc.is,cc);/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class dc extends A_(G(z)){static get is(){return"vaadin-select-value-button"}static get template(){return L`
      <style>
        :host {
          display: inline-block;
          position: relative;
          outline: none;
          white-space: nowrap;
          -webkit-user-select: none;
          -moz-user-select: none;
          user-select: none;
          min-width: 0;
          width: 0;
        }

        ::slotted(*) {
          padding-left: 0;
          padding-right: 0;
          flex: auto;
        }

        /* placeholder styles */
        ::slotted(*:not([selected])) {
          line-height: 1;
        }

        .vaadin-button-container {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          text-align: inherit;
          width: 100%;
          height: 100%;
          min-height: inherit;
          text-shadow: inherit;
        }

        [part='label'] {
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          width: 100%;
          line-height: inherit;
        }
      </style>
      <div class="vaadin-button-container">
        <span part="label">
          <slot></slot>
        </span>
      </div>
    `}}customElements.define(dc.is,dc);/**
 * @license
 * Copyright (c) 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class Rg extends pt{constructor(t){super(t,"value","vaadin-select-value-button",{initializer:(e,i)=>{i._setFocusElement(e),i.ariaTarget=e,i.stateTarget=e,e.setAttribute("aria-haspopup","listbox")}})}}/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */O("vaadin-select",[T_,M_],{moduleId:"vaadin-select-styles"});class fc extends No(su(fp(Yo(hn(st(G(z))))))){static get is(){return"vaadin-select"}static get template(){return L`
      <style>
        ::slotted([slot='value']) {
          flex-grow: 1;
        }
      </style>

      <div class="vaadin-select-container">
        <div part="label" on-click="_onClick">
          <slot name="label"></slot>
          <span part="required-indicator" aria-hidden="true" on-click="focus"></span>
        </div>

        <vaadin-input-container
          part="input-field"
          readonly="[[readonly]]"
          disabled="[[disabled]]"
          invalid="[[invalid]]"
          theme$="[[_theme]]"
          on-click="_onClick"
        >
          <slot name="prefix" slot="prefix"></slot>
          <slot name="value"></slot>
          <div part="toggle-button" slot="suffix" aria-hidden="true" on-mousedown="_onToggleMouseDown"></div>
        </vaadin-input-container>

        <div part="helper-text">
          <slot name="helper"></slot>
        </div>

        <div part="error-message">
          <slot name="error-message"></slot>
        </div>
      </div>

      <vaadin-select-overlay
        position-target="[[_inputContainer]]"
        opened="{{opened}}"
        with-backdrop="[[_phone]]"
        phone$="[[_phone]]"
        theme$="[[_theme]]"
      ></vaadin-select-overlay>

      <slot name="tooltip"></slot>
    `}static get properties(){return{items:{type:Array,observer:"__itemsChanged"},opened:{type:Boolean,value:!1,notify:!0,reflectToAttribute:!0,observer:"_openedChanged"},renderer:Function,value:{type:String,value:"",notify:!0,observer:"_valueChanged"},name:{type:String},placeholder:{type:String},readonly:{type:Boolean,value:!1,reflectToAttribute:!0},_phone:Boolean,_phoneMediaQuery:{value:"(max-width: 420px), (max-height: 420px)"},_inputContainer:Object,_items:Object}}static get delegateAttrs(){return[...super.delegateAttrs,"invalid"]}static get observers(){return["_updateAriaExpanded(opened, focusElement)","_updateSelectedItem(value, _items, placeholder)","_rendererChanged(renderer, _overlayElement)"]}constructor(){super(),this._itemId=`value-${this.localName}-${Uo()}`}disconnectedCallback(){super.disconnectedCallback(),this.opened=!1}ready(){super.ready(),this._overlayElement=this.shadowRoot.querySelector("vaadin-select-overlay"),this._inputContainer=this.shadowRoot.querySelector('[part~="input-field"]'),this._valueButtonController=new Rg(this),this.addController(this._valueButtonController),this.addController(new ou(this._phoneMediaQuery,t=>{this._phone=t})),cu(this),this._tooltipController=new Ht(this),this._tooltipController.setPosition("top"),this.addController(this._tooltipController)}requestContentUpdate(){this._overlayElement&&(this._overlayElement.requestContentUpdate(),this._menuElement&&this._menuElement.items&&this._updateSelectedItem(this.value,this._menuElement.items))}_requiredChanged(t){super._requiredChanged(t),t===!1&&this.validate()}_rendererChanged(t,e){e&&(e.setProperties({owner:this,renderer:t||this.__defaultRenderer}),this.requestContentUpdate())}__itemsChanged(t,e){(t||e)&&this.requestContentUpdate()}_assignMenuElement(t){t&&t!==this.__lastMenuElement&&(this._menuElement=t,this.__initMenuItems(t),t.addEventListener("items-changed",()=>{this.__initMenuItems(t)}),t.addEventListener("selected-changed",()=>this.__updateValueButton()),t.addEventListener("keydown",e=>this._onKeyDownInside(e),!0),t.addEventListener("click",()=>{this.__userInteraction=!0,this.opened=!1},!0),this.__lastMenuElement=t)}__initMenuItems(t){t.items&&(this._items=t.items)}_valueChanged(t,e){this.toggleAttribute("has-value",Boolean(t)),e!==void 0&&this.validate()}_onClick(t){t.preventDefault(),this.opened=!this.readonly}_onToggleMouseDown(t){t.preventDefault()}_onKeyDown(t){if(t.target===this.focusElement&&!this.readonly&&!this.opened){if(/^(Enter|SpaceBar|\s|ArrowDown|Down|ArrowUp|Up)$/u.test(t.key))t.preventDefault(),this.opened=!0;else if(/[\p{L}\p{Nd}]/u.test(t.key)&&t.key.length===1){const e=this._menuElement.selected,i=e!==void 0?e:-1,n=this._menuElement._searchKey(i,t.key);n>=0&&(this.__userInteraction=!0,this._updateAriaLive(!0),this._menuElement.selected=n)}}}_onKeyDownInside(t){/^(Tab)$/u.test(t.key)&&(this.opened=!1)}_openedChanged(t,e){if(t){if(this._updateAriaLive(!1),!this._overlayElement||!this._menuElement||!this.focusElement||this.disabled||this.readonly){this.opened=!1;return}this._overlayElement.style.setProperty("--vaadin-select-text-field-width",`${this._inputContainer.offsetWidth}px`);const i=this.hasAttribute("focus-ring");this._openedWithFocusRing=i,i&&this.removeAttribute("focus-ring"),this._menuElement.focus()}else e&&(this.focus(),this._openedWithFocusRing&&this.setAttribute("focus-ring",""),this.validate())}_updateAriaExpanded(t,e){e&&e.setAttribute("aria-expanded",t?"true":"false")}_updateAriaLive(t){this.focusElement&&(t?this.focusElement.setAttribute("aria-live","polite"):this.focusElement.removeAttribute("aria-live"))}__attachSelectedItem(t){let e;const i=t.getAttribute("label");i?e=this.__createItemElement({label:i}):e=t.cloneNode(!0),e._sourceItem=t,this.__appendValueItemElement(e,this.focusElement),e.selected=!0}__createItemElement(t){const e=document.createElement(t.component||"vaadin-select-item");return t.label&&(e.textContent=t.label),t.value&&(e.value=t.value),t.disabled&&(e.disabled=t.disabled),e}__appendValueItemElement(t,e){e.appendChild(t),t.removeAttribute("tabindex"),t.removeAttribute("aria-selected"),t.removeAttribute("role"),t.setAttribute("id",this._itemId)}__updateValueButton(){const t=this.focusElement;if(!t)return;t.innerHTML="";const e=this._items[this._menuElement.selected];if(t.removeAttribute("placeholder"),e)this.__attachSelectedItem(e),this._valueChanging||(this._selectedChanging=!0,this.value=e.value||"",this.__userInteraction&&(this.opened=!1,this.dispatchEvent(new CustomEvent("change",{bubbles:!0})),this.__userInteraction=!1),delete this._selectedChanging);else if(this.placeholder){const i=this.__createItemElement({label:this.placeholder});this.__appendValueItemElement(i,t),t.setAttribute("placeholder","")}e||this.placeholder?E_(t,"aria-labelledby",this._itemId):C_(t,"aria-labelledby",this._itemId)}_updateSelectedItem(t,e){if(e){const i=t==null?t:t.toString();this._menuElement.selected=e.reduce((n,a,o)=>n===void 0&&a.value===i?o:n,void 0),this._selectedChanging||(this._valueChanging=!0,this.__updateValueButton(),delete this._valueChanging)}}_shouldRemoveFocus(){return!this.opened}_setFocused(t){super._setFocused(t),t||this.validate()}checkValidity(){return!this.required||this.readonly||!!this.value}__defaultRenderer(t,e){if(!this.items||this.items.length===0){t.textContent="";return}let i=t.firstElementChild;i||(i=document.createElement("vaadin-select-list-box"),t.appendChild(i)),i.textContent="",this.items.forEach(n=>{i.appendChild(this.__createItemElement(n))})}}customElements.define(fc.is,fc);O("vaadin-split-layout",P`
    [part='splitter'] {
      min-width: var(--lumo-space-s);
      min-height: var(--lumo-space-s);
      background-color: var(--lumo-contrast-5pct);
      transition: 0.1s background-color;
    }

    [part='handle'] {
      display: flex;
      align-items: center;
      justify-content: center;
      width: var(--lumo-size-m);
      height: var(--lumo-size-m);
    }

    [part='handle']::after {
      content: '';
      display: block;
      width: 4px;
      height: 100%;
      max-width: 100%;
      max-height: 100%;
      border-radius: var(--lumo-border-radius-s);
      background-color: var(--lumo-contrast-30pct);
      transition: 0.1s opacity, 0.1s background-color;
    }

    :host([orientation='vertical']) [part='handle']::after {
      width: 100%;
      height: 4px;
    }

    /* Hover style */
    [part='splitter']:hover [part='handle']::after {
      background-color: var(--lumo-contrast-40pct);
    }

    /* Disable hover for touch devices */
    @media (pointer: coarse) {
      [part='splitter']:hover [part='handle']::after {
        background-color: var(--lumo-contrast-30pct);
      }
    }

    /* Active style */
    [part='splitter']:active [part='handle']::after {
      background-color: var(--lumo-contrast-50pct);
    }

    /* Small/minimal */
    :host([theme~='small']) > [part='splitter'] {
      border-left: 1px solid var(--lumo-contrast-10pct);
      border-top: 1px solid var(--lumo-contrast-10pct);
    }

    :host([theme~='small']) > [part='splitter'],
    :host([theme~='minimal']) > [part='splitter'] {
      min-width: 0;
      min-height: 0;
      background-color: transparent;
    }

    :host([theme~='small']) > [part='splitter']::after,
    :host([theme~='minimal']) > [part='splitter']::after {
      content: '';
      position: absolute;
      top: -4px;
      right: -4px;
      bottom: -4px;
      left: -4px;
    }

    :host([theme~='small']) > [part='splitter'] > [part='handle']::after,
    :host([theme~='minimal']) > [part='splitter'] > [part='handle']::after {
      opacity: 0;
    }

    :host([theme~='small']) > [part='splitter']:hover > [part='handle']::after,
    :host([theme~='small']) > [part='splitter']:active > [part='handle']::after,
    :host([theme~='minimal']) > [part='splitter']:hover > [part='handle']::after,
    :host([theme~='minimal']) > [part='splitter']:active > [part='handle']::after {
      opacity: 1;
    }

    /* RTL specific styles */
    :host([theme~='small'][dir='rtl']) > [part='splitter'] {
      border-left: auto;
      border-right: 1px solid var(--lumo-contrast-10pct);
    }
  `,{moduleId:"lumo-split-layout"});/**
 * @license
 * Copyright (c) 2016 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class Ba extends st(G(z)){static get template(){return L`
      <style>
        :host {
          display: flex;
          overflow: hidden !important;
          transform: translateZ(0);
        }

        :host([hidden]) {
          display: none !important;
        }

        :host([orientation='vertical']) {
          flex-direction: column;
        }

        :host ::slotted(*) {
          flex: 1 1 auto;
          overflow: auto;
          -webkit-overflow-scrolling: touch;
        }

        [part='splitter'] {
          flex: none;
          position: relative;
          z-index: 1;
          overflow: visible;
          min-width: 8px;
          min-height: 8px;
        }

        :host(:not([orientation='vertical'])) > [part='splitter'] {
          cursor: ew-resize;
        }

        :host([orientation='vertical']) > [part='splitter'] {
          cursor: ns-resize;
        }

        [part='handle'] {
          width: 40px;
          height: 40px;
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate3d(-50%, -50%, 0);
        }
      </style>
      <slot id="primary" name="primary"></slot>
      <div part="splitter" id="splitter">
        <div part="handle"></div>
      </div>
      <slot id="secondary" name="secondary"></slot>
    `}static get is(){return"vaadin-split-layout"}static get properties(){return{orientation:{type:String,reflectToAttribute:!0,value:"horizontal"},_previousPrimaryPointerEvents:String,_previousSecondaryPointerEvents:String}}ready(){super.ready(),this.__observer=new xe(this,e=>{this._cleanupNodes(e.removedNodes),this._processChildren()});const t=this.$.splitter;ce(t,"track",this._onHandleTrack.bind(this)),ce(t,"down",this._setPointerEventsNone.bind(this)),ce(t,"up",this._restorePointerEvents.bind(this))}_cleanupNodes(t){t.forEach(e=>{e.parentElement instanceof Ba||e.removeAttribute("slot")})}_processChildren(){[...this.children].forEach((t,e)=>{e===0?(this._primaryChild=t,t.setAttribute("slot","primary")):e===1?(this._secondaryChild=t,t.setAttribute("slot","secondary")):t.removeAttribute("slot")})}_setFlexBasis(t,e,i){e=Math.max(0,Math.min(e,i)),e===0&&(e=1e-6),t.style.flex=`1 1 ${e}px`}_setPointerEventsNone(t){!this._primaryChild||!this._secondaryChild||(this._previousPrimaryPointerEvents=this._primaryChild.style.pointerEvents,this._previousSecondaryPointerEvents=this._secondaryChild.style.pointerEvents,this._primaryChild.style.pointerEvents="none",this._secondaryChild.style.pointerEvents="none",t.preventDefault())}_restorePointerEvents(){!this._primaryChild||!this._secondaryChild||(this._primaryChild.style.pointerEvents=this._previousPrimaryPointerEvents,this._secondaryChild.style.pointerEvents=this._previousSecondaryPointerEvents)}_onHandleTrack(t){if(!this._primaryChild||!this._secondaryChild)return;const e=this.orientation==="vertical"?"height":"width";if(t.detail.state==="start"){this._startSize={container:this.getBoundingClientRect()[e]-this.$.splitter.getBoundingClientRect()[e],primary:this._primaryChild.getBoundingClientRect()[e],secondary:this._secondaryChild.getBoundingClientRect()[e]};return}const i=this.orientation==="vertical"?t.detail.dy:t.detail.dx,a=this.orientation!=="vertical"&&this.__isRTL?-i:i;this._setFlexBasis(this._primaryChild,this._startSize.primary+a,this._startSize.container),this._setFlexBasis(this._secondaryChild,this._startSize.secondary-a,this._startSize.container),t.detail.state==="end"&&(this.dispatchEvent(new CustomEvent("splitter-dragend")),delete this._startSize)}}customElements.define(Ba.is,Ba);O("vaadin-tab",P`
    :host {
      box-sizing: border-box;
      padding: 0.5rem 0.75rem;
      font-family: var(--lumo-font-family);
      font-size: var(--lumo-font-size-m);
      line-height: var(--lumo-line-height-xs);
      font-weight: 500;
      opacity: 1;
      color: var(--lumo-secondary-text-color);
      transition: 0.15s color, 0.2s transform;
      flex-shrink: 0;
      display: flex;
      align-items: center;
      position: relative;
      cursor: var(--lumo-clickable-cursor);
      transform-origin: 50% 100%;
      outline: none;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      overflow: hidden;
      min-width: var(--lumo-size-m);
      -webkit-user-select: none;
      -moz-user-select: none;
      user-select: none;
    }

    :host(:not([orientation='vertical'])) {
      text-align: center;
    }

    :host([orientation='vertical']) {
      transform-origin: 0% 50%;
      padding: 0.25rem 1rem;
      min-height: var(--lumo-size-m);
      min-width: 0;
    }

    :host(:hover),
    :host([focus-ring]) {
      color: var(--lumo-body-text-color);
    }

    :host([selected]) {
      color: var(--lumo-primary-text-color);
      transition: 0.6s color;
    }

    :host([active]:not([selected])) {
      color: var(--lumo-primary-text-color);
      transition-duration: 0.1s;
    }

    :host::before,
    :host::after {
      content: '';
      position: absolute;
      display: var(--_lumo-tab-marker-display, block);
      bottom: 0;
      left: 50%;
      width: var(--lumo-size-s);
      height: 2px;
      background-color: var(--lumo-contrast-60pct);
      border-radius: var(--lumo-border-radius-s) var(--lumo-border-radius-s) 0 0;
      transform: translateX(-50%) scale(0);
      transform-origin: 50% 100%;
      transition: 0.14s transform cubic-bezier(0.12, 0.32, 0.54, 1);
      will-change: transform;
    }

    :host([selected])::before,
    :host([selected])::after {
      background-color: var(--lumo-primary-color);
    }

    :host([orientation='vertical'])::before,
    :host([orientation='vertical'])::after {
      left: 0;
      bottom: 50%;
      transform: translateY(50%) scale(0);
      width: 2px;
      height: var(--lumo-size-xs);
      border-radius: 0 var(--lumo-border-radius-s) var(--lumo-border-radius-s) 0;
      transform-origin: 100% 50%;
    }

    :host::after {
      box-shadow: 0 0 0 4px var(--lumo-primary-color);
      opacity: 0.15;
      transition: 0.15s 0.02s transform, 0.8s 0.17s opacity;
    }

    :host([selected])::before,
    :host([selected])::after {
      transform: translateX(-50%) scale(1);
      transition-timing-function: cubic-bezier(0.12, 0.32, 0.54, 1.5);
    }

    :host([orientation='vertical'][selected])::before,
    :host([orientation='vertical'][selected])::after {
      transform: translateY(50%) scale(1);
    }

    :host([selected]:not([active]))::after {
      opacity: 0;
    }

    :host(:not([orientation='vertical'])) ::slotted(a[href]) {
      justify-content: center;
    }

    :host ::slotted(a) {
      display: flex;
      width: 100%;
      align-items: center;
      height: 100%;
      margin: -0.5rem -0.75rem;
      padding: 0.5rem 0.75rem;
      outline: none;

      /*
          Override the CSS inherited from \`lumo-color\` and \`lumo-typography\`.
          Note: \`!important\` is needed because of the \`:slotted\` specificity.
        */
      text-decoration: none !important;
      color: inherit !important;
    }

    :host ::slotted(vaadin-icon) {
      margin: 0 4px;
      width: var(--lumo-icon-size-m);
      height: var(--lumo-icon-size-m);
    }

    /* Vaadin icons are based on a 16x16 grid (unlike Lumo and Material icons with 24x24), so they look too big by default */
    :host ::slotted(vaadin-icon[icon^='vaadin:']) {
      padding: 0.25rem;
      box-sizing: border-box !important;
    }

    :host(:not([dir='rtl'])) ::slotted(vaadin-icon:first-child) {
      margin-left: 0;
    }

    :host(:not([dir='rtl'])) ::slotted(vaadin-icon:last-child) {
      margin-right: 0;
    }

    :host([theme~='icon-on-top']) {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-around;
      text-align: center;
      padding-bottom: 0.5rem;
      padding-top: 0.25rem;
    }

    :host([theme~='icon-on-top']) ::slotted(a) {
      flex-direction: column;
      align-items: center;
      margin-top: -0.25rem;
      padding-top: 0.25rem;
    }

    :host([theme~='icon-on-top']) ::slotted(vaadin-icon) {
      margin: 0;
    }

    /* Disabled */

    :host([disabled]) {
      pointer-events: none;
      opacity: 1;
      color: var(--lumo-disabled-text-color);
    }

    /* Focus-ring */

    :host([focus-ring]) {
      box-shadow: inset 0 0 0 2px var(--lumo-primary-color-50pct);
      border-radius: var(--lumo-border-radius-m);
    }

    /* RTL specific styles */

    :host([dir='rtl'])::before,
    :host([dir='rtl'])::after {
      left: auto;
      right: 50%;
      transform: translateX(50%) scale(0);
    }

    :host([dir='rtl'][selected]:not([orientation='vertical']))::before,
    :host([dir='rtl'][selected]:not([orientation='vertical']))::after {
      transform: translateX(50%) scale(1);
    }

    :host([dir='rtl']) ::slotted(vaadin-icon:first-child) {
      margin-right: 0;
    }

    :host([dir='rtl']) ::slotted(vaadin-icon:last-child) {
      margin-left: 0;
    }

    :host([orientation='vertical'][dir='rtl']) {
      transform-origin: 100% 50%;
    }

    :host([dir='rtl'][orientation='vertical'])::before,
    :host([dir='rtl'][orientation='vertical'])::after {
      left: auto;
      right: 0;
      border-radius: var(--lumo-border-radius-s) 0 0 var(--lumo-border-radius-s);
      transform-origin: 0% 50%;
    }
  `,{moduleId:"lumo-tab"});/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class pc extends st(G(ln(Et(z)))){static get template(){return L`
      <style>
        :host {
          display: block;
        }

        :host([hidden]) {
          display: none !important;
        }
      </style>
      <slot></slot>
      <slot name="tooltip"></slot>
    `}static get is(){return"vaadin-tab"}ready(){super.ready(),this.setAttribute("role","tab"),this._tooltipController=new Ht(this),this.addController(this._tooltipController)}_onKeyUp(t){const e=this.hasAttribute("active");if(super._onKeyUp(t),e){const i=this.querySelector("a");i&&i.click()}}}customElements.define(pc.is,pc);O("vaadin-tabs",P`
    :host {
      -webkit-tap-highlight-color: transparent;
    }

    :host(:not([orientation='vertical'])) {
      box-shadow: inset 0 -1px 0 0 var(--lumo-contrast-10pct);
      position: relative;
      min-height: var(--lumo-size-l);
    }

    :host([orientation='horizontal']) [part='tabs'] ::slotted(vaadin-tab:not([theme~='icon-on-top'])) {
      justify-content: center;
    }

    :host([orientation='vertical']) {
      box-shadow: -1px 0 0 0 var(--lumo-contrast-10pct);
    }

    :host([orientation='horizontal']) [part='tabs'] {
      margin: 0 0.75rem;
    }

    :host([orientation='vertical']) [part='tabs'] {
      width: 100%;
      margin: 0.5rem 0;
    }

    [part='forward-button'],
    [part='back-button'] {
      position: absolute;
      z-index: 1;
      font-family: lumo-icons;
      color: var(--lumo-tertiary-text-color);
      font-size: var(--lumo-icon-size-m);
      display: flex;
      align-items: center;
      justify-content: center;
      width: 1.5em;
      height: 100%;
      transition: 0.2s opacity;
      top: 0;
    }

    [part='forward-button']:hover,
    [part='back-button']:hover {
      color: inherit;
    }

    :host(:not([dir='rtl'])) [part='forward-button'] {
      right: 0;
    }

    [part='forward-button']::after {
      content: var(--lumo-icons-angle-right);
    }

    [part='back-button']::after {
      content: var(--lumo-icons-angle-left);
    }

    /* Tabs overflow */

    [part='tabs'] {
      --_lumo-tabs-overflow-mask-image: none;
      -webkit-mask-image: var(--_lumo-tabs-overflow-mask-image);
      mask-image: var(--_lumo-tabs-overflow-mask-image);
    }

    /* Horizontal tabs overflow */

    /* Both ends overflowing */
    :host([overflow~='start'][overflow~='end']:not([orientation='vertical'])) [part='tabs'] {
      --_lumo-tabs-overflow-mask-image: linear-gradient(
        90deg,
        transparent 2em,
        #000 4em,
        #000 calc(100% - 4em),
        transparent calc(100% - 2em)
      );
    }

    /* End overflowing */
    :host([overflow~='end']:not([orientation='vertical'])) [part='tabs'] {
      --_lumo-tabs-overflow-mask-image: linear-gradient(90deg, #000 calc(100% - 4em), transparent calc(100% - 2em));
    }

    /* Start overflowing */
    :host([overflow~='start']:not([orientation='vertical'])) [part='tabs'] {
      --_lumo-tabs-overflow-mask-image: linear-gradient(90deg, transparent 2em, #000 4em);
    }

    /* Vertical tabs overflow */

    /* Both ends overflowing */
    :host([overflow~='start'][overflow~='end'][orientation='vertical']) [part='tabs'] {
      --_lumo-tabs-overflow-mask-image: linear-gradient(transparent, #000 2em, #000 calc(100% - 2em), transparent);
    }

    /* End overflowing */
    :host([overflow~='end'][orientation='vertical']) [part='tabs'] {
      --_lumo-tabs-overflow-mask-image: linear-gradient(#000 calc(100% - 2em), transparent);
    }

    /* Start overflowing */
    :host([overflow~='start'][orientation='vertical']) [part='tabs'] {
      --_lumo-tabs-overflow-mask-image: linear-gradient(transparent, #000 2em);
    }

    :host [part='tabs'] ::slotted(:not(vaadin-tab)) {
      margin-left: var(--lumo-space-m);
    }

    /* Centered */

    :host([theme~='centered'][orientation='horizontal']) ::slotted(vaadin-tab:first-of-type) {
      margin-inline-start: auto;
    }

    :host([theme~='centered'][orientation='horizontal']) ::slotted(vaadin-tab:last-of-type) {
      margin-inline-end: auto;
    }

    /* Small */

    :host([theme~='small']),
    :host([theme~='small']) [part='tabs'] {
      min-height: var(--lumo-size-m);
    }

    :host([theme~='small']) [part='tabs'] ::slotted(vaadin-tab) {
      font-size: var(--lumo-font-size-s);
    }

    /* Minimal */

    :host([theme~='minimal']) {
      box-shadow: none;
      --_lumo-tab-marker-display: none;
    }

    /* Hide-scroll-buttons */

    :host([theme~='hide-scroll-buttons']) [part='back-button'],
    :host([theme~='hide-scroll-buttons']) [part='forward-button'] {
      display: none;
    }

    /* prettier-ignore */
    :host([theme~='hide-scroll-buttons'][overflow~='start'][overflow~='end']:not([orientation='vertical'])) [part='tabs'] {
      --_lumo-tabs-overflow-mask-image: linear-gradient(
        90deg,
        transparent,
        #000 2em,
        #000 calc(100% - 2em),
        transparent 100%
      );
    }

    :host([theme~='hide-scroll-buttons'][overflow~='end']:not([orientation='vertical'])) [part='tabs'] {
      --_lumo-tabs-overflow-mask-image: linear-gradient(90deg, #000 calc(100% - 2em), transparent 100%);
    }

    :host([theme~='hide-scroll-buttons'][overflow~='start']:not([orientation='vertical'])) [part='tabs'] {
      --_lumo-tabs-overflow-mask-image: linear-gradient(90deg, transparent, #000 2em);
    }

    /* Equal-width tabs */
    :host([theme~='equal-width-tabs']) {
      flex: auto;
    }

    :host([theme~='equal-width-tabs']) [part='tabs'] ::slotted(vaadin-tab) {
      flex: 1 0 0%;
    }

    /* RTL specific styles */

    :host([dir='rtl']) [part='forward-button']::after {
      content: var(--lumo-icons-angle-left);
    }

    :host([dir='rtl']) [part='back-button']::after {
      content: var(--lumo-icons-angle-right);
    }

    :host([orientation='vertical'][dir='rtl']) {
      box-shadow: 1px 0 0 0 var(--lumo-contrast-10pct);
    }

    :host([dir='rtl']) [part='forward-button'] {
      left: 0;
    }

    :host([dir='rtl']) [part='tabs'] ::slotted(:not(vaadin-tab)) {
      margin-left: 0;
      margin-right: var(--lumo-space-m);
    }

    /* Both ends overflowing */
    :host([dir='rtl'][overflow~='start'][overflow~='end']:not([orientation='vertical'])) [part='tabs'] {
      --_lumo-tabs-overflow-mask-image: linear-gradient(
        -90deg,
        transparent 2em,
        #000 4em,
        #000 calc(100% - 4em),
        transparent calc(100% - 2em)
      );
    }

    /* End overflowing */
    :host([dir='rtl'][overflow~='end']:not([orientation='vertical'])) [part='tabs'] {
      --_lumo-tabs-overflow-mask-image: linear-gradient(-90deg, #000 calc(100% - 4em), transparent calc(100% - 2em));
    }

    /* Start overflowing */
    :host([dir='rtl'][overflow~='start']:not([orientation='vertical'])) [part='tabs'] {
      --_lumo-tabs-overflow-mask-image: linear-gradient(-90deg, transparent 2em, #000 4em);
    }

    :host([dir='rtl'][theme~='hide-scroll-buttons'][overflow~='start'][overflow~='end']:not([orientation='vertical']))
      [part='tabs'] {
      --_lumo-tabs-overflow-mask-image: linear-gradient(
        -90deg,
        transparent,
        #000 2em,
        #000 calc(100% - 2em),
        transparent 100%
      );
    }

    :host([dir='rtl'][theme~='hide-scroll-buttons'][overflow~='end']:not([orientation='vertical'])) [part='tabs'] {
      --_lumo-tabs-overflow-mask-image: linear-gradient(-90deg, #000 calc(100% - 2em), transparent 100%);
    }

    :host([dir='rtl'][theme~='hide-scroll-buttons'][overflow~='start']:not([orientation='vertical'])) [part='tabs'] {
      --_lumo-tabs-overflow-mask-image: linear-gradient(-90deg, transparent, #000 2em);
    }
  `,{moduleId:"lumo-tabs"});/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class Is extends un(st(sn(G(z)))){static get template(){return L`
      <style>
        :host {
          display: flex;
          align-items: center;
        }

        :host([hidden]) {
          display: none !important;
        }

        :host([orientation='vertical']) {
          display: block;
        }

        :host([orientation='horizontal']) [part='tabs'] {
          flex-grow: 1;
          display: flex;
          align-self: stretch;
          overflow-x: auto;
          -webkit-overflow-scrolling: touch;
        }

        /* This seems more future-proof than \`overflow: -moz-scrollbars-none\` which is marked obsolete
         and is no longer guaranteed to work:
         https://developer.mozilla.org/en-US/docs/Web/CSS/overflow#Mozilla_Extensions */
        @-moz-document url-prefix() {
          :host([orientation='horizontal']) [part='tabs'] {
            overflow: hidden;
          }
        }

        :host([orientation='horizontal']) [part='tabs']::-webkit-scrollbar {
          display: none;
        }

        :host([orientation='vertical']) [part='tabs'] {
          height: 100%;
          overflow-y: auto;
          -webkit-overflow-scrolling: touch;
        }

        [part='back-button'],
        [part='forward-button'] {
          pointer-events: none;
          opacity: 0;
          cursor: default;
        }

        :host([overflow~='start']) [part='back-button'],
        :host([overflow~='end']) [part='forward-button'] {
          pointer-events: auto;
          opacity: 1;
        }

        [part='back-button']::after {
          content: '\\25C0';
        }

        [part='forward-button']::after {
          content: '\\25B6';
        }

        :host([orientation='vertical']) [part='back-button'],
        :host([orientation='vertical']) [part='forward-button'] {
          display: none;
        }

        /* RTL specific styles */

        :host([dir='rtl']) [part='back-button']::after {
          content: '\\25B6';
        }

        :host([dir='rtl']) [part='forward-button']::after {
          content: '\\25C0';
        }
      </style>
      <div on-click="_scrollBack" part="back-button" aria-hidden="true"></div>

      <div id="scroll" part="tabs">
        <slot></slot>
      </div>

      <div on-click="_scrollForward" part="forward-button" aria-hidden="true"></div>
    `}static get is(){return"vaadin-tabs"}static get properties(){return{orientation:{value:"horizontal",type:String},selected:{value:0,type:Number}}}static get observers(){return["__tabsItemsChanged(items, items.*)"]}constructor(){super(),this.__itemsResizeObserver=new ResizeObserver(()=>{setTimeout(()=>this._updateOverflow())})}get _scrollOffset(){return this._vertical?this._scrollerElement.offsetHeight:this._scrollerElement.offsetWidth}get _scrollerElement(){return this.$.scroll}get __direction(){return!this._vertical&&this.__isRTL?1:-1}ready(){super.ready(),this._scrollerElement.addEventListener("scroll",()=>this._updateOverflow()),this.setAttribute("role","tablist"),an(this,()=>{this._updateOverflow()})}_onResize(){this._updateOverflow()}__tabsItemsChanged(t){this.__itemsResizeObserver.disconnect(),(t||[]).forEach(e=>{this.__itemsResizeObserver.observe(e)}),this._updateOverflow()}_scrollForward(){this._scroll(-this.__direction*this._scrollOffset)}_scrollBack(){this._scroll(this.__direction*this._scrollOffset)}_updateOverflow(){const t=this._vertical?this._scrollerElement.scrollTop:O_(this._scrollerElement,this.getAttribute("dir")),e=this._vertical?this._scrollerElement.scrollHeight:this._scrollerElement.scrollWidth;let i=t>0?"start":"";i+=t+this._scrollOffset<e?" end":"",this.__direction===1&&(i=i.replace(/start|end/giu,n=>n==="start"?"end":"start")),i?this.setAttribute("overflow",i.trim()):this.removeAttribute("overflow")}}customElements.define(Is.is,Is);const Pg=P`
  :host {
    font-size: var(--lumo-font-size-m);
    line-height: var(--lumo-line-height-m);
    font-family: var(--lumo-font-family);
  }

  :host([theme~='bordered']) {
    border: 1px solid var(--lumo-contrast-20pct);
    border-radius: var(--lumo-border-radius-l);
  }

  [part='tabs-container'] {
    box-shadow: inset 0 -1px 0 0 var(--lumo-contrast-10pct);
    padding: var(--lumo-space-xs) var(--lumo-space-s);
    gap: var(--lumo-space-s);
  }

  ::slotted([slot='tabs']) {
    box-shadow: initial;
    margin: calc(var(--lumo-space-xs) * -1) calc(var(--lumo-space-s) * -1);
  }

  [part='content'] {
    padding: var(--lumo-space-s) var(--lumo-space-m);
    border-bottom-left-radius: inherit;
    border-bottom-right-radius: inherit;
  }

  :host([loading]) [part='content'] {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;O("vaadin-tabsheet",[Pg,cp],{moduleId:"lumo-tabsheet"});/**
 * @license
 * Copyright (c) 2022 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class vc extends Ss{static get is(){return"vaadin-tabsheet-scroller"}}customElements.define(vc.is,vc);/**
 * @license
 * Copyright (c) 2022 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class Dg extends pt{constructor(t){super(t,"tabs"),this.__tabsItemsChangedListener=this.__tabsItemsChangedListener.bind(this),this.__tabsSelectedChangedListener=this.__tabsSelectedChangedListener.bind(this)}__tabsItemsChangedListener(){this.host._setItems(this.tabs.items)}__tabsSelectedChangedListener(){this.host.selected=this.tabs.selected}initCustomNode(t){if(!(t instanceof Is))throw Error('The "tabs" slot of a <vaadin-tabsheet> must only contain a <vaadin-tabs> element!');this.tabs=t,t.addEventListener("items-changed",this.__tabsItemsChangedListener),t.addEventListener("selected-changed",this.__tabsSelectedChangedListener),this.host.__tabs=t,this.host.stateTarget=t,this.__tabsItemsChangedListener()}teardownNode(t){this.tabs=null,t.removeEventListener("items-changed",this.__tabsItemsChangedListener),t.removeEventListener("selected-changed",this.__tabsSelectedChangedListener),this.host.__tabs=null,this.host._setItems([]),this.host.stateTarget=void 0}}class mc extends Et(fp(st(G(z)))){static get template(){return L`
      <style>
        :host([hidden]) {
          display: none !important;
        }

        :host {
          display: flex;
          flex-direction: column;
        }

        [part='tabs-container'] {
          position: relative;
          display: flex;
          align-items: center;
        }

        ::slotted([slot='tabs']) {
          flex: 1;
          align-self: stretch;
          min-width: 8em;
        }

        [part='content'] {
          position: relative;
          flex: 1;
          box-sizing: border-box;
        }
      </style>

      <div part="tabs-container">
        <slot name="prefix"></slot>
        <slot name="tabs"></slot>
        <slot name="suffix"></slot>
      </div>

      <vaadin-tabsheet-scroller part="content">
        <div part="loader"></div>
        <slot id="panel-slot"></slot>
      </vaadin-tabsheet-scroller>
    `}static get is(){return"vaadin-tabsheet"}static get properties(){return{items:{type:Array,readOnly:!0,notify:!0},selected:{value:0,type:Number,notify:!0},__tabs:{type:Object},__panels:{type:Array}}}static get observers(){return["__itemsOrPanelsChanged(items, __panels)","__selectedTabItemChanged(selected, items, __panels)"]}static get delegateProps(){return["selected"]}static get delegateAttrs(){return["theme"]}ready(){super.ready(),this.__overflowController=new vu(this,this.shadowRoot.querySelector('[part="content"]')),this.addController(this.__overflowController),this._tabsSlotController=new Dg(this),this.addController(this._tabsSlotController);const t=this.shadowRoot.querySelector("#panel-slot");this.__panelsObserver=new xe(t,()=>{this.__panels=Array.from(t.assignedNodes({flatten:!0})).filter(e=>e.nodeType===Node.ELEMENT_NODE)})}__itemsOrPanelsChanged(t,e){!t||!e||t.forEach(i=>{const n=e.find(a=>a.getAttribute("tab")===i.id);n&&(n.role="tabpanel",n.id||(n.id=`tabsheet-panel-${Uo()}`),n.setAttribute("aria-labelledby",i.id),i.setAttribute("aria-controls",n.id))})}__selectedTabItemChanged(t,e,i){if(!e||!i||t===void 0)return;const n=this.shadowRoot.querySelector('[part="content"]'),a=e[t],o=a?a.id:"",s=i.find(u=>u.getAttribute("tab")===o);this.toggleAttribute("loading",!s);const l=i.filter(u=>!u.hidden).length===1;s?n.style.minHeight="":l&&(n.style.minHeight=`${n.offsetHeight}px`),i.forEach(u=>{u.hidden=u!==s})}}customElements.define(mc.is,mc);O("vaadin-upload",P`
    :host {
      line-height: var(--lumo-line-height-m);
    }

    :host(:not([nodrop])) {
      overflow: hidden;
      border: 1px dashed var(--lumo-contrast-20pct);
      border-radius: var(--lumo-border-radius-l);
      padding: var(--lumo-space-m);
      transition: background-color 0.6s, border-color 0.6s;
    }

    [part='drop-label'] {
      display: inline-block;
      white-space: normal;
      padding: 0 var(--lumo-space-s);
      color: var(--lumo-secondary-text-color);
      font-family: var(--lumo-font-family);
    }

    :host([dragover-valid]) {
      border-color: var(--lumo-primary-color-50pct);
      background: var(--lumo-primary-color-10pct);
      transition: background-color 0.1s, border-color 0.1s;
    }

    :host([dragover-valid]) [part='drop-label'] {
      color: var(--lumo-primary-text-color);
    }

    :host([max-files-reached]) [part='drop-label'] {
      color: var(--lumo-disabled-text-color);
    }
  `,{moduleId:"lumo-upload"});O("vaadin-upload-icon",P`
    :host::before {
      content: var(--lumo-icons-upload);
      font-family: lumo-icons;
      font-size: var(--lumo-icon-size-m);
      line-height: 1;
      vertical-align: -0.25em;
    }
  `,{moduleId:"lumo-upload-icon"});O("vaadin-upload-file-list",P`
    ::slotted(li:not(:first-of-type)) {
      border-top: 1px solid var(--lumo-contrast-10pct);
    }
  `,{moduleId:"lumo-upload-file-list"});const kg=P`
  :host {
    padding: var(--lumo-space-s) 0;
    outline: none;
  }

  :host([focus-ring]) [part='row'] {
    border-radius: var(--lumo-border-radius-s);
    box-shadow: 0 0 0 2px var(--lumo-primary-color-50pct);
  }

  [part='row'] {
    display: flex;
    align-items: baseline;
    justify-content: space-between;
  }

  [part='status'],
  [part='error'] {
    color: var(--lumo-secondary-text-color);
    font-size: var(--lumo-font-size-s);
  }

  [part='info'] {
    display: flex;
    align-items: baseline;
    flex: auto;
  }

  [part='meta'] {
    width: 0.001px;
    flex: 1 1 auto;
  }

  [part='name'] {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  [part='commands'] {
    display: flex;
    align-items: baseline;
    flex: none;
  }

  [part$='icon'] {
    margin-right: var(--lumo-space-xs);
    font-size: var(--lumo-icon-size-m);
    font-family: 'lumo-icons';
    line-height: 1;
  }

  /* When both icons are hidden, let us keep space for one */
  [part='done-icon'][hidden] + [part='warning-icon'][hidden] {
    display: block !important;
    visibility: hidden;
  }

  [part$='button'] {
    flex: none;
    margin-left: var(--lumo-space-xs);
    cursor: var(--lumo-clickable-cursor);
  }

  [part$='button']:focus {
    outline: none;
    border-radius: var(--lumo-border-radius-s);
    box-shadow: 0 0 0 2px var(--lumo-primary-color-50pct);
  }

  [part$='icon']::before,
  [part$='button']::before {
    vertical-align: -0.25em;
  }

  [part='done-icon']::before {
    content: var(--lumo-icons-checkmark);
    color: var(--lumo-primary-text-color);
  }

  [part='warning-icon']::before {
    content: var(--lumo-icons-error);
    color: var(--lumo-error-text-color);
  }

  [part='start-button']::before {
    content: var(--lumo-icons-play);
  }

  [part='retry-button']::before {
    content: var(--lumo-icons-reload);
  }

  [part='remove-button']::before {
    content: var(--lumo-icons-cross);
  }

  [part='error'] {
    color: var(--lumo-error-text-color);
  }

  ::slotted([slot='progress']) {
    width: auto;
    margin-left: calc(var(--lumo-icon-size-m) + var(--lumo-space-xs));
    margin-right: calc(var(--lumo-icon-size-m) + var(--lumo-space-xs));
  }
`;O("vaadin-upload-file",[hp,kg],{moduleId:"lumo-upload-file"});/**
 * @license
 * Copyright (c) 2016 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class _c extends G(z){static get is(){return"vaadin-upload-icon"}static get template(){return L`
      <style>
        :host {
          display: inline-block;
        }

        :host([hidden]) {
          display: none !important;
        }
      </style>
    `}}customElements.define(_c.is,_c);/**
 * @license
 * Copyright (c) 2016 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Ip=document.createElement("template");Ip.innerHTML=`
  <style>
    @font-face {
      font-family: 'vaadin-upload-icons';
      src: url(data:application/font-woff;charset=utf-8;base64,d09GRgABAAAAAAasAAsAAAAABmAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABPUy8yAAABCAAAAGAAAABgDxIF5mNtYXAAAAFoAAAAVAAAAFQXVtKMZ2FzcAAAAbwAAAAIAAAACAAAABBnbHlmAAABxAAAAfQAAAH0bBJxYWhlYWQAAAO4AAAANgAAADYPD267aGhlYQAAA/AAAAAkAAAAJAfCA8tobXR4AAAEFAAAACgAAAAoHgAAx2xvY2EAAAQ8AAAAFgAAABYCSgHsbWF4cAAABFQAAAAgAAAAIAAOADVuYW1lAAAEdAAAAhYAAAIWmmcHf3Bvc3QAAAaMAAAAIAAAACAAAwAAAAMDtwGQAAUAAAKZAswAAACPApkCzAAAAesAMwEJAAAAAAAAAAAAAAAAAAAAARAAAAAAAAAAAAAAAAAAAAAAQAAA6QUDwP/AAEADwABAAAAAAQAAAAAAAAAAAAAAIAAAAAAAAwAAAAMAAAAcAAEAAwAAABwAAwABAAAAHAAEADgAAAAKAAgAAgACAAEAIOkF//3//wAAAAAAIOkA//3//wAB/+MXBAADAAEAAAAAAAAAAAAAAAEAAf//AA8AAQAAAAAAAAAAAAIAADc5AQAAAAABAAAAAAAAAAAAAgAANzkBAAAAAAEAAAAAAAAAAAACAAA3OQEAAAAAAgAA/8AEAAPAABkAMgAAEz4DMzIeAhczLgMjIg4CBycRIScFIRcOAyMiLgInIx4DMzI+AjcXphZGWmo6SH9kQwyADFiGrmJIhXJbIEYBAFoDWv76YBZGXGw8Rn5lRQyADFmIrWBIhHReIkYCWjJVPSIyVnVDXqN5RiVEYTxG/wBa2loyVT0iMlZ1Q16jeUYnRWE5RgAAAAABAIAAAAOAA4AAAgAAExEBgAMAA4D8gAHAAAAAAwAAAAAEAAOAAAIADgASAAAJASElIiY1NDYzMhYVFAYnETMRAgD+AAQA/gAdIyMdHSMjXYADgPyAgCMdHSMjHR0jwAEA/wAAAQANADMD5gNaAAUAACUBNwUBFwHT/jptATMBppMzAU2a4AIgdAAAAAEAOv/6A8YDhgALAAABJwkBBwkBFwkBNwEDxoz+xv7GjAFA/sCMAToBOoz+wAL6jP7AAUCM/sb+xowBQP7AjAE6AAAAAwAA/8AEAAPAAAcACwASAAABFSE1IREhEQEjNTMJAjMRIRECwP6A/sAEAP0AgIACQP7A/sDAAQABQICA/oABgP8AgAHAAUD+wP6AAYAAAAABAAAAAQAAdhiEdV8PPPUACwQAAAAAANX4FR8AAAAA1fgVHwAA/8AEAAPAAAAACAACAAAAAAAAAAEAAAPA/8AAAAQAAAAAAAQAAAEAAAAAAAAAAAAAAAAAAAAKBAAAAAAAAAAAAAAAAgAAAAQAAAAEAACABAAAAAQAAA0EAAA6BAAAAAAAAAAACgAUAB4AagB4AJwAsADSAPoAAAABAAAACgAzAAMAAAAAAAIAAAAAAAAAAAAAAAAAAAAAAAAADgCuAAEAAAAAAAEAEwAAAAEAAAAAAAIABwDMAAEAAAAAAAMAEwBaAAEAAAAAAAQAEwDhAAEAAAAAAAUACwA5AAEAAAAAAAYAEwCTAAEAAAAAAAoAGgEaAAMAAQQJAAEAJgATAAMAAQQJAAIADgDTAAMAAQQJAAMAJgBtAAMAAQQJAAQAJgD0AAMAAQQJAAUAFgBEAAMAAQQJAAYAJgCmAAMAAQQJAAoANAE0dmFhZGluLXVwbG9hZC1pY29ucwB2AGEAYQBkAGkAbgAtAHUAcABsAG8AYQBkAC0AaQBjAG8AbgBzVmVyc2lvbiAxLjAAVgBlAHIAcwBpAG8AbgAgADEALgAwdmFhZGluLXVwbG9hZC1pY29ucwB2AGEAYQBkAGkAbgAtAHUAcABsAG8AYQBkAC0AaQBjAG8AbgBzdmFhZGluLXVwbG9hZC1pY29ucwB2AGEAYQBkAGkAbgAtAHUAcABsAG8AYQBkAC0AaQBjAG8AbgBzUmVndWxhcgBSAGUAZwB1AGwAYQBydmFhZGluLXVwbG9hZC1pY29ucwB2AGEAYQBkAGkAbgAtAHUAcABsAG8AYQBkAC0AaQBjAG8AbgBzRm9udCBnZW5lcmF0ZWQgYnkgSWNvTW9vbi4ARgBvAG4AdAAgAGcAZQBuAGUAcgBhAHQAZQBkACAAYgB5ACAASQBjAG8ATQBvAG8AbgAuAAAAAwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA==) format('woff');
      font-weight: normal;
      font-style: normal;
    }
  </style>
`;document.head.appendChild(Ip.content);/**
 * @license
 * Copyright (c) 2016 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class gc extends Oe(G(Et(z))){static get template(){return L`
      <style>
        :host {
          display: block;
        }

        [hidden] {
          display: none;
        }

        [part='row'] {
          list-style-type: none;
        }

        button {
          background: transparent;
          padding: 0;
          border: none;
          box-shadow: none;
        }

        :host([complete]) ::slotted([slot='progress']),
        :host([error]) ::slotted([slot='progress']) {
          display: none !important;
        }
      </style>

      <div part="row">
        <div part="info">
          <div part="done-icon" hidden$="[[!complete]]" aria-hidden="true"></div>
          <div part="warning-icon" hidden$="[[!errorMessage]]" aria-hidden="true"></div>

          <div part="meta">
            <div part="name" id="name">[[fileName]]</div>
            <div part="status" hidden$="[[!status]]" id="status">[[status]]</div>
            <div part="error" id="error" hidden$="[[!errorMessage]]">[[errorMessage]]</div>
          </div>
        </div>
        <div part="commands">
          <button
            type="button"
            part="start-button"
            file-event="file-start"
            on-click="_fireFileEvent"
            hidden$="[[!held]]"
            aria-label$="[[i18n.file.start]]"
            aria-describedby="name"
          ></button>
          <button
            type="button"
            part="retry-button"
            file-event="file-retry"
            on-click="_fireFileEvent"
            hidden$="[[!errorMessage]]"
            aria-label$="[[i18n.file.retry]]"
            aria-describedby="name"
          ></button>
          <button
            type="button"
            part="remove-button"
            file-event="file-abort"
            on-click="_fireFileEvent"
            aria-label$="[[i18n.file.remove]]"
            aria-describedby="name"
          ></button>
        </div>
      </div>

      <slot name="progress"></slot>
    `}static get is(){return"vaadin-upload-file"}static get properties(){return{complete:{type:Boolean,value:!1,reflectToAttribute:!0},errorMessage:{type:String,value:"",observer:"_errorMessageChanged"},file:{type:Object},fileName:{type:String},held:{type:Boolean,value:!1},indeterminate:{type:Boolean,value:!1,reflectToAttribute:!0},i18n:{type:Object},progress:{type:Number},status:{type:String},tabindex:{type:Number,value:0,reflectToAttribute:!0},uploading:{type:Boolean,value:!1,reflectToAttribute:!0},_progress:{type:Object}}}static get observers(){return["__updateProgress(_progress, progress, indeterminate)"]}ready(){super.ready(),this.addController(new pt(this,"progress","vaadin-progress-bar",{initializer:t=>{this._progress=t}})),this.shadowRoot.addEventListener("focusin",t=>{t.composedPath()[0].getAttribute("part").endsWith("button")&&this._setFocused(!1)}),this.shadowRoot.addEventListener("focusout",t=>{t.relatedTarget===this&&this._setFocused(!0)})}_shouldSetFocus(t){return t.composedPath()[0]===this}_errorMessageChanged(t){this.toggleAttribute("error",Boolean(t))}__updateProgress(t,e,i){t&&(t.value=isNaN(e)?0:e/100,t.indeterminate=i)}_fireFileEvent(t){return t.preventDefault(),this.dispatchEvent(new CustomEvent(t.target.getAttribute("file-event"),{detail:{file:this.file},bubbles:!0,composed:!0}))}}customElements.define(gc.is,gc);/**
 * @license
 * Copyright (c) 2016 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class yc extends G(z){static get is(){return"vaadin-upload-file-list"}static get template(){return L`
      <style>
        :host {
          display: block;
        }

        :host([hidden]) {
          display: none !important;
        }

        [part='list'] {
          padding: 0;
          margin: 0;
          list-style-type: none;
        }
      </style>
      <ul part="list">
        <slot></slot>
      </ul>
    `}static get properties(){return{items:{type:Array},i18n:{type:Object}}}static get observers(){return["__updateItems(items, i18n)"]}__updateItems(t,e){t&&e&&this.requestContentUpdate()}requestContentUpdate(){const{items:t,i18n:e}=this;du(ri`
        ${t.map(i=>ri`
            <li>
              <vaadin-upload-file
                .file="${i}"
                .complete="${i.complete}"
                .errorMessage="${i.error}"
                .fileName="${i.name}"
                .held="${i.held}"
                .indeterminate="${i.indeterminate}"
                .progress="${i.progress}"
                .status="${i.status}"
                .uploading="${i.uploading}"
                .i18n="${e}"
              ></vaadin-upload-file>
            </li>
          `)}
      `,this)}}customElements.define(yc.is,yc);/**
 * @license
 * Copyright (c) 2016 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class Lg extends pt{constructor(t){super(t,"add-button","vaadin-button")}initNode(t){t._isDefault&&(this.defaultNode=t),t.addEventListener("touchend",e=>{this.host._onAddFilesTouchEnd(e)}),t.addEventListener("click",e=>{this.host._onAddFilesClick(e)}),this.host._addButton=t}}class Fg extends pt{constructor(t){super(t,"drop-label","span")}initNode(t){t._isDefault&&(this.defaultNode=t),this.host._dropLabel=t}}class bc extends st(G(Et(z))){static get template(){return L`
      <style>
        :host {
          display: block;
          position: relative;
          box-sizing: border-box;
        }

        :host([hidden]) {
          display: none !important;
        }

        [hidden] {
          display: none !important;
        }
      </style>

      <div part="primary-buttons">
        <slot name="add-button"></slot>
        <div part="drop-label" hidden$="[[nodrop]]" id="dropLabelContainer" aria-hidden="true">
          <slot name="drop-label-icon"></slot>
          <slot name="drop-label"></slot>
        </div>
      </div>
      <slot name="file-list"></slot>
      <slot></slot>
      <input
        type="file"
        id="fileInput"
        hidden
        on-change="_onFileInputChange"
        accept$="{{accept}}"
        multiple$="[[_isMultiple(maxFiles)]]"
        capture$="[[capture]]"
      />
    `}static get is(){return"vaadin-upload"}static get properties(){return{nodrop:{type:Boolean,reflectToAttribute:!0,value:S_},target:{type:String,value:""},method:{type:String,value:"POST"},headers:{type:Object,value:{}},timeout:{type:Number,value:0},_dragover:{type:Boolean,value:!1,observer:"_dragoverChanged"},files:{type:Array,notify:!0,value:()=>[]},maxFiles:{type:Number,value:1/0},maxFilesReached:{type:Boolean,value:!1,notify:!0,readOnly:!0,reflectToAttribute:!0,computed:"_maxFilesAdded(maxFiles, files.length)"},accept:{type:String,value:""},maxFileSize:{type:Number,value:1/0},_dragoverValid:{type:Boolean,value:!1,observer:"_dragoverValidChanged"},formDataName:{type:String,value:"file"},noAuto:{type:Boolean,value:!1},withCredentials:{type:Boolean,value:!1},capture:String,i18n:{type:Object,value(){return{dropFiles:{one:"Drop file here",many:"Drop files here"},addFiles:{one:"Upload File...",many:"Upload Files..."},error:{tooManyFiles:"Too Many Files.",fileIsTooBig:"File is Too Big.",incorrectFileType:"Incorrect File Type."},uploading:{status:{connecting:"Connecting...",stalled:"Stalled",processing:"Processing File...",held:"Queued"},remainingTime:{prefix:"remaining time: ",unknown:"unknown remaining time"},error:{serverUnavailable:"Upload failed, please try again later",unexpectedServerError:"Upload failed due to server error",forbidden:"Upload forbidden"}},file:{retry:"Retry",start:"Start",remove:"Remove"},units:{size:["B","kB","MB","GB","TB","PB","EB","ZB","YB"]}}}},_addButton:{type:Object},_dropLabel:{type:Object},_fileList:{type:Object},_files:{type:Array}}}static get observers(){return["__updateAddButton(_addButton, maxFiles, i18n, maxFilesReached)","__updateDropLabel(_dropLabel, maxFiles, i18n)","__updateFileList(_fileList, files, i18n)"]}get __acceptRegexp(){if(!this.accept)return null;const t=this.accept.split(",").map(e=>{let i=e.trim();return i=i.replace(/[+.]/gu,"\\$&"),i.startsWith("\\.")&&(i=`.*${i}$`),i.replace(/\/\*/gu,"/.*")});return new RegExp(`^(${t.join("|")})$`,"iu")}ready(){super.ready(),this.addEventListener("dragover",this._onDragover.bind(this)),this.addEventListener("dragleave",this._onDragleave.bind(this)),this.addEventListener("drop",this._onDrop.bind(this)),this.addEventListener("file-retry",this._onFileRetry.bind(this)),this.addEventListener("file-abort",this._onFileAbort.bind(this)),this.addEventListener("file-start",this._onFileStart.bind(this)),this.addEventListener("file-reject",this._onFileReject.bind(this)),this.addEventListener("upload-start",this._onUploadStart.bind(this)),this.addEventListener("upload-success",this._onUploadSuccess.bind(this)),this.addEventListener("upload-error",this._onUploadError.bind(this)),this._addButtonController=new Lg(this),this.addController(this._addButtonController),this._dropLabelController=new Fg(this),this.addController(this._dropLabelController),this.addController(new pt(this,"file-list","vaadin-upload-file-list",{initializer:t=>{this._fileList=t}})),this.addController(new pt(this,"drop-label-icon","vaadin-upload-icon"))}_formatSize(t){if(typeof this.i18n.formatSize=="function")return this.i18n.formatSize(t);const e=this.i18n.units.sizeBase||1e3,i=~~(Math.log(t)/Math.log(e)),n=Math.max(0,Math.min(3,i-1));return`${parseFloat((t/e**i).toFixed(n))} ${this.i18n.units.size[i]}`}_splitTimeByUnits(t){const e=[60,60,24,1/0],i=[0];for(let n=0;n<e.length&&t>0;n++)i[n]=t%e[n],t=Math.floor(t/e[n]);return i}_formatTime(t,e){if(typeof this.i18n.formatTime=="function")return this.i18n.formatTime(t,e);for(;e.length<3;)e.push(0);return e.reverse().map(i=>(i<10?"0":"")+i).join(":")}_formatFileProgress(t){const e=t.loaded>0?this.i18n.uploading.remainingTime.prefix+t.remainingStr:this.i18n.uploading.remainingTime.unknown;return`${t.totalStr}: ${t.progress}% (${e})`}_maxFilesAdded(t,e){return t>=0&&e>=t}__updateAddButton(t,e,i,n){t&&(t.disabled=n,t===this._addButtonController.defaultNode&&(t.textContent=this._i18nPlural(e,i.addFiles)))}__updateDropLabel(t,e,i){t&&t===this._dropLabelController.defaultNode&&(t.textContent=this._i18nPlural(e,i.dropFiles))}__updateFileList(t,e,i){t&&(t.items=[...e],t.i18n=i)}_onDragover(t){t.preventDefault(),!this.nodrop&&!this._dragover&&(this._dragoverValid=!this.maxFilesReached,this._dragover=!0),t.dataTransfer.dropEffect=!this._dragoverValid||this.nodrop?"none":"copy"}_onDragleave(t){t.preventDefault(),this._dragover&&!this.nodrop&&(this._dragover=this._dragoverValid=!1)}_onDrop(t){this.nodrop||(t.preventDefault(),this._dragover=this._dragoverValid=!1,this._addFiles(t.dataTransfer.files))}_createXhr(){return new XMLHttpRequest}_configureXhr(t){if(typeof this.headers=="string")try{this.headers=JSON.parse(this.headers)}catch{this.headers=void 0}Object.entries(this.headers).forEach(([e,i])=>{t.setRequestHeader(e,i)}),this.timeout&&(t.timeout=this.timeout),t.withCredentials=this.withCredentials}_setStatus(t,e,i,n){t.elapsed=n,t.elapsedStr=this._formatTime(t.elapsed,this._splitTimeByUnits(t.elapsed)),t.remaining=Math.ceil(n*(e/i-1)),t.remainingStr=this._formatTime(t.remaining,this._splitTimeByUnits(t.remaining)),t.speed=~~(e/n/1024),t.totalStr=this._formatSize(e),t.loadedStr=this._formatSize(i),t.status=this._formatFileProgress(t)}uploadFiles(t=this.files){t&&!Array.isArray(t)&&(t=[t]),t=t.filter(e=>!e.complete),Array.prototype.forEach.call(t,this._uploadFile.bind(this))}_uploadFile(t){if(t.uploading)return;const e=Date.now(),i=t.xhr=this._createXhr();let n,a;i.upload.onprogress=u=>{clearTimeout(n),a=Date.now();const h=(a-e)/1e3,c=u.loaded,d=u.total,f=~~(c/d*100);t.loaded=c,t.progress=f,t.indeterminate=c<=0||c>=d,t.error?t.indeterminate=t.status=void 0:t.abort||(f<100?(this._setStatus(t,d,c,h),n=setTimeout(()=>{t.status=this.i18n.uploading.status.stalled,this._renderFileList()},2e3)):(t.loadedStr=t.totalStr,t.status=this.i18n.uploading.status.processing)),this._renderFileList(),this.dispatchEvent(new CustomEvent("upload-progress",{detail:{file:t,xhr:i}}))},i.onreadystatechange=()=>{if(i.readyState===4){if(clearTimeout(n),t.indeterminate=t.uploading=!1,t.abort||(t.status="",!this.dispatchEvent(new CustomEvent("upload-response",{detail:{file:t,xhr:i},cancelable:!0}))))return;i.status===0?t.error=this.i18n.uploading.error.serverUnavailable:i.status>=500?t.error=this.i18n.uploading.error.unexpectedServerError:i.status>=400&&(t.error=this.i18n.uploading.error.forbidden),t.complete=!t.error,this.dispatchEvent(new CustomEvent(`upload-${t.error?"error":"success"}`,{detail:{file:t,xhr:i}})),this._renderFileList()}};const o=new FormData;if(t.uploadTarget=t.uploadTarget||this.target||"",t.formDataName=this.formDataName,!this.dispatchEvent(new CustomEvent("upload-before",{detail:{file:t,xhr:i},cancelable:!0})))return;o.append(t.formDataName,t,t.name),i.open(this.method,t.uploadTarget,!0),this._configureXhr(i),t.status=this.i18n.uploading.status.connecting,t.uploading=t.indeterminate=!0,t.complete=t.abort=t.error=t.held=!1,i.upload.onloadstart=()=>{this.dispatchEvent(new CustomEvent("upload-start",{detail:{file:t,xhr:i}})),this._renderFileList()},this.dispatchEvent(new CustomEvent("upload-request",{detail:{file:t,xhr:i,formData:o},cancelable:!0}))&&i.send(o)}_retryFileUpload(t){this.dispatchEvent(new CustomEvent("upload-retry",{detail:{file:t,xhr:t.xhr},cancelable:!0}))&&this._uploadFile(t)}_abortFileUpload(t){this.dispatchEvent(new CustomEvent("upload-abort",{detail:{file:t,xhr:t.xhr},cancelable:!0}))&&(t.abort=!0,t.xhr&&t.xhr.abort(),this._removeFile(t))}_renderFileList(){this._fileList&&this._fileList.requestContentUpdate()}_addFiles(t){Array.prototype.forEach.call(t,this._addFile.bind(this))}_addFile(t){if(this.maxFilesReached){this.dispatchEvent(new CustomEvent("file-reject",{detail:{file:t,error:this.i18n.error.tooManyFiles}}));return}if(this.maxFileSize>=0&&t.size>this.maxFileSize){this.dispatchEvent(new CustomEvent("file-reject",{detail:{file:t,error:this.i18n.error.fileIsTooBig}}));return}const e=this.__acceptRegexp;if(e&&!(e.test(t.type)||e.test(t.name))){this.dispatchEvent(new CustomEvent("file-reject",{detail:{file:t,error:this.i18n.error.incorrectFileType}}));return}t.loaded=0,t.held=!0,t.status=this.i18n.uploading.status.held,this.files=[t,...this.files],this.noAuto||this._uploadFile(t)}_removeFile(t){this.files.indexOf(t)>-1&&(this.files=this.files.filter(e=>e!==t),this.dispatchEvent(new CustomEvent("file-remove",{detail:{file:t},bubbles:!0,composed:!0})))}_onAddFilesTouchEnd(t){t.preventDefault(),this._onAddFilesClick(t)}_onAddFilesClick(t){this.maxFilesReached||(t.stopPropagation(),this.$.fileInput.value="",this.$.fileInput.click())}_onFileInputChange(t){this._addFiles(t.target.files)}_onFileStart(t){this._uploadFile(t.detail.file)}_onFileRetry(t){this._retryFileUpload(t.detail.file)}_onFileAbort(t){this._abortFileUpload(t.detail.file)}_onFileReject(t){ke(`${t.detail.file.name}: ${t.detail.file.error}`,{mode:"alert"})}_onUploadStart(t){ke(`${t.detail.file.name}: 0%`,{mode:"alert"})}_onUploadSuccess(t){ke(`${t.detail.file.name}: 100%`,{mode:"alert"})}_onUploadError(t){ke(`${t.detail.file.name}: ${t.detail.file.error}`,{mode:"alert"})}_dragoverChanged(t){t?this.setAttribute("dragover",t):this.removeAttribute("dragover")}_dragoverValidChanged(t){t?this.setAttribute("dragover-valid",t):this.removeAttribute("dragover-valid")}_i18nPlural(t,e){return t===1?e.one:e.many}_isMultiple(t){return t!==1}}customElements.define(bc.is,bc);/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class wc extends st(Et(G(z))){static get template(){return L`
      <style>
        :host {
          display: block;
          height: 400px;
          overflow: auto;
          flex: auto;
          align-self: stretch;
        }

        :host([hidden]) {
          display: none !important;
        }

        :host(:not([grid])) #items > ::slotted(*) {
          width: 100%;
        }
      </style>

      <div id="items">
        <slot></slot>
      </div>
    `}static get is(){return"vaadin-virtual-list"}static get properties(){return{items:{type:Array},renderer:Function,__virtualizer:Object}}static get observers(){return["__itemsOrRendererChanged(items, renderer, __virtualizer)"]}get firstVisibleIndex(){return this.__virtualizer.firstVisibleIndex}get lastVisibleIndex(){return this.__virtualizer.lastVisibleIndex}ready(){super.ready(),this.__virtualizer=new I_({createElements:this.__createElements,updateElement:this.__updateElement.bind(this),elementsContainer:this,scrollTarget:this,scrollContainer:this.shadowRoot.querySelector("#items")}),this.__overflowController=new vu(this),this.addController(this.__overflowController),cu(this)}scrollToIndex(t){this.__virtualizer.scrollToIndex(t)}__createElements(t){return[...Array(t)].map(()=>document.createElement("div"))}__updateElement(t,e){t.__renderer!==this.renderer&&(t.__renderer=this.renderer,this.__clearRenderTargetContent(t)),this.renderer&&this.renderer(t,this,{item:this.items[e],index:e})}__clearRenderTargetContent(t){t.innerHTML="",delete t._$litPart$}__itemsOrRendererChanged(t,e,i){const n=this.childElementCount>0;(e||n)&&i&&(i.size=(t||[]).length,i.update())}requestContentUpdate(){this.__virtualizer&&this.__virtualizer.update()}}customElements.define(wc.is,wc);/**
 * @license
 * Copyright 2000-2023 Vaadin Ltd.
 *
 * This program is available under Vaadin Commercial License and Service Terms.
 *
 * See <https://vaadin.com/commercial-license-and-service-terms> for the full
 * license.
 */(function(){function r(e){const i=e._getPopup();i&&(i.className=e.className)}const t=new MutationObserver(e=>{e.forEach(i=>{i.type==="attributes"&&i.attributeName==="class"&&r(i.target)})});window.Vaadin.Flow.cookieConsentConnector={initLazy:function(e){e.$connector||(e.$connector={},t.observe(e,{attributes:!0,attributeFilter:["class"]}),r(e))}}})();function Ct(r,t){if(t.length<r)throw new TypeError(r+" argument"+(r>1?"s":"")+" required, but only "+t.length+" present")}function Xn(r){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?Xn=function(e){return typeof e}:Xn=function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Xn(r)}function $g(r){return Ct(1,arguments),r instanceof Date||Xn(r)==="object"&&Object.prototype.toString.call(r)==="[object Date]"}function Zn(r){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?Zn=function(e){return typeof e}:Zn=function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Zn(r)}function $t(r){Ct(1,arguments);var t=Object.prototype.toString.call(r);return r instanceof Date||Zn(r)==="object"&&t==="[object Date]"?new Date(r.getTime()):typeof r=="number"||t==="[object Number]"?new Date(r):((typeof r=="string"||t==="[object String]")&&typeof console<"u"&&(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"),console.warn(new Error().stack)),new Date(NaN))}function Rs(r){if(Ct(1,arguments),!$g(r)&&typeof r!="number")return!1;var t=$t(r);return!isNaN(Number(t))}function Vt(r){if(r===null||r===!0||r===!1)return NaN;var t=Number(r);return isNaN(t)?t:t<0?Math.ceil(t):Math.floor(t)}function Ng(r,t){Ct(2,arguments);var e=$t(r).getTime(),i=Vt(t);return new Date(e+i)}function Rp(r,t){Ct(2,arguments);var e=Vt(t);return Ng(r,-e)}var Bg=864e5;function zg(r){Ct(1,arguments);var t=$t(r),e=t.getTime();t.setUTCMonth(0,1),t.setUTCHours(0,0,0,0);var i=t.getTime(),n=e-i;return Math.floor(n/Bg)+1}function ni(r){Ct(1,arguments);var t=1,e=$t(r),i=e.getUTCDay(),n=(i<t?7:0)+i-t;return e.setUTCDate(e.getUTCDate()-n),e.setUTCHours(0,0,0,0),e}function Pp(r){Ct(1,arguments);var t=$t(r),e=t.getUTCFullYear(),i=new Date(0);i.setUTCFullYear(e+1,0,4),i.setUTCHours(0,0,0,0);var n=ni(i),a=new Date(0);a.setUTCFullYear(e,0,4),a.setUTCHours(0,0,0,0);var o=ni(a);return t.getTime()>=n.getTime()?e+1:t.getTime()>=o.getTime()?e:e-1}function Gg(r){Ct(1,arguments);var t=Pp(r),e=new Date(0);e.setUTCFullYear(t,0,4),e.setUTCHours(0,0,0,0);var i=ni(e);return i}var Yg=6048e5;function Dp(r){Ct(1,arguments);var t=$t(r),e=ni(t).getTime()-Gg(t).getTime();return Math.round(e/Yg)+1}var Ug={};function di(){return Ug}function Cr(r,t){var e,i,n,a,o,s,l,u;Ct(1,arguments);var h=di(),c=Vt((e=(i=(n=(a=t==null?void 0:t.weekStartsOn)!==null&&a!==void 0?a:t==null||(o=t.locale)===null||o===void 0||(s=o.options)===null||s===void 0?void 0:s.weekStartsOn)!==null&&n!==void 0?n:h.weekStartsOn)!==null&&i!==void 0?i:(l=h.locale)===null||l===void 0||(u=l.options)===null||u===void 0?void 0:u.weekStartsOn)!==null&&e!==void 0?e:0);if(!(c>=0&&c<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");var d=$t(r),f=d.getUTCDay(),p=(f<c?7:0)+f-c;return d.setUTCDate(d.getUTCDate()-p),d.setUTCHours(0,0,0,0),d}function mu(r,t){var e,i,n,a,o,s,l,u;Ct(1,arguments);var h=$t(r),c=h.getUTCFullYear(),d=di(),f=Vt((e=(i=(n=(a=t==null?void 0:t.firstWeekContainsDate)!==null&&a!==void 0?a:t==null||(o=t.locale)===null||o===void 0||(s=o.options)===null||s===void 0?void 0:s.firstWeekContainsDate)!==null&&n!==void 0?n:d.firstWeekContainsDate)!==null&&i!==void 0?i:(l=d.locale)===null||l===void 0||(u=l.options)===null||u===void 0?void 0:u.firstWeekContainsDate)!==null&&e!==void 0?e:1);if(!(f>=1&&f<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var p=new Date(0);p.setUTCFullYear(c+1,0,f),p.setUTCHours(0,0,0,0);var v=Cr(p,t),m=new Date(0);m.setUTCFullYear(c,0,f),m.setUTCHours(0,0,0,0);var _=Cr(m,t);return h.getTime()>=v.getTime()?c+1:h.getTime()>=_.getTime()?c:c-1}function jg(r,t){var e,i,n,a,o,s,l,u;Ct(1,arguments);var h=di(),c=Vt((e=(i=(n=(a=t==null?void 0:t.firstWeekContainsDate)!==null&&a!==void 0?a:t==null||(o=t.locale)===null||o===void 0||(s=o.options)===null||s===void 0?void 0:s.firstWeekContainsDate)!==null&&n!==void 0?n:h.firstWeekContainsDate)!==null&&i!==void 0?i:(l=h.locale)===null||l===void 0||(u=l.options)===null||u===void 0?void 0:u.firstWeekContainsDate)!==null&&e!==void 0?e:1),d=mu(r,t),f=new Date(0);f.setUTCFullYear(d,0,c),f.setUTCHours(0,0,0,0);var p=Cr(f,t);return p}var Wg=6048e5;function kp(r,t){Ct(1,arguments);var e=$t(r),i=Cr(e,t).getTime()-jg(e,t).getTime();return Math.round(i/Wg)+1}function ot(r,t){for(var e=r<0?"-":"",i=Math.abs(r).toString();i.length<t;)i="0"+i;return e+i}var Vg={y:function(t,e){var i=t.getUTCFullYear(),n=i>0?i:1-i;return ot(e==="yy"?n%100:n,e.length)},M:function(t,e){var i=t.getUTCMonth();return e==="M"?String(i+1):ot(i+1,2)},d:function(t,e){return ot(t.getUTCDate(),e.length)},a:function(t,e){var i=t.getUTCHours()/12>=1?"pm":"am";switch(e){case"a":case"aa":return i.toUpperCase();case"aaa":return i;case"aaaaa":return i[0];case"aaaa":default:return i==="am"?"a.m.":"p.m."}},h:function(t,e){return ot(t.getUTCHours()%12||12,e.length)},H:function(t,e){return ot(t.getUTCHours(),e.length)},m:function(t,e){return ot(t.getUTCMinutes(),e.length)},s:function(t,e){return ot(t.getUTCSeconds(),e.length)},S:function(t,e){var i=e.length,n=t.getUTCMilliseconds(),a=Math.floor(n*Math.pow(10,i-3));return ot(a,e.length)}};const Ye=Vg;var Lr={am:"am",pm:"pm",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},qg={G:function(t,e,i){var n=t.getUTCFullYear()>0?1:0;switch(e){case"G":case"GG":case"GGG":return i.era(n,{width:"abbreviated"});case"GGGGG":return i.era(n,{width:"narrow"});case"GGGG":default:return i.era(n,{width:"wide"})}},y:function(t,e,i){if(e==="yo"){var n=t.getUTCFullYear(),a=n>0?n:1-n;return i.ordinalNumber(a,{unit:"year"})}return Ye.y(t,e)},Y:function(t,e,i,n){var a=mu(t,n),o=a>0?a:1-a;if(e==="YY"){var s=o%100;return ot(s,2)}return e==="Yo"?i.ordinalNumber(o,{unit:"year"}):ot(o,e.length)},R:function(t,e){var i=Pp(t);return ot(i,e.length)},u:function(t,e){var i=t.getUTCFullYear();return ot(i,e.length)},Q:function(t,e,i){var n=Math.ceil((t.getUTCMonth()+1)/3);switch(e){case"Q":return String(n);case"QQ":return ot(n,2);case"Qo":return i.ordinalNumber(n,{unit:"quarter"});case"QQQ":return i.quarter(n,{width:"abbreviated",context:"formatting"});case"QQQQQ":return i.quarter(n,{width:"narrow",context:"formatting"});case"QQQQ":default:return i.quarter(n,{width:"wide",context:"formatting"})}},q:function(t,e,i){var n=Math.ceil((t.getUTCMonth()+1)/3);switch(e){case"q":return String(n);case"qq":return ot(n,2);case"qo":return i.ordinalNumber(n,{unit:"quarter"});case"qqq":return i.quarter(n,{width:"abbreviated",context:"standalone"});case"qqqqq":return i.quarter(n,{width:"narrow",context:"standalone"});case"qqqq":default:return i.quarter(n,{width:"wide",context:"standalone"})}},M:function(t,e,i){var n=t.getUTCMonth();switch(e){case"M":case"MM":return Ye.M(t,e);case"Mo":return i.ordinalNumber(n+1,{unit:"month"});case"MMM":return i.month(n,{width:"abbreviated",context:"formatting"});case"MMMMM":return i.month(n,{width:"narrow",context:"formatting"});case"MMMM":default:return i.month(n,{width:"wide",context:"formatting"})}},L:function(t,e,i){var n=t.getUTCMonth();switch(e){case"L":return String(n+1);case"LL":return ot(n+1,2);case"Lo":return i.ordinalNumber(n+1,{unit:"month"});case"LLL":return i.month(n,{width:"abbreviated",context:"standalone"});case"LLLLL":return i.month(n,{width:"narrow",context:"standalone"});case"LLLL":default:return i.month(n,{width:"wide",context:"standalone"})}},w:function(t,e,i,n){var a=kp(t,n);return e==="wo"?i.ordinalNumber(a,{unit:"week"}):ot(a,e.length)},I:function(t,e,i){var n=Dp(t);return e==="Io"?i.ordinalNumber(n,{unit:"week"}):ot(n,e.length)},d:function(t,e,i){return e==="do"?i.ordinalNumber(t.getUTCDate(),{unit:"date"}):Ye.d(t,e)},D:function(t,e,i){var n=zg(t);return e==="Do"?i.ordinalNumber(n,{unit:"dayOfYear"}):ot(n,e.length)},E:function(t,e,i){var n=t.getUTCDay();switch(e){case"E":case"EE":case"EEE":return i.day(n,{width:"abbreviated",context:"formatting"});case"EEEEE":return i.day(n,{width:"narrow",context:"formatting"});case"EEEEEE":return i.day(n,{width:"short",context:"formatting"});case"EEEE":default:return i.day(n,{width:"wide",context:"formatting"})}},e:function(t,e,i,n){var a=t.getUTCDay(),o=(a-n.weekStartsOn+8)%7||7;switch(e){case"e":return String(o);case"ee":return ot(o,2);case"eo":return i.ordinalNumber(o,{unit:"day"});case"eee":return i.day(a,{width:"abbreviated",context:"formatting"});case"eeeee":return i.day(a,{width:"narrow",context:"formatting"});case"eeeeee":return i.day(a,{width:"short",context:"formatting"});case"eeee":default:return i.day(a,{width:"wide",context:"formatting"})}},c:function(t,e,i,n){var a=t.getUTCDay(),o=(a-n.weekStartsOn+8)%7||7;switch(e){case"c":return String(o);case"cc":return ot(o,e.length);case"co":return i.ordinalNumber(o,{unit:"day"});case"ccc":return i.day(a,{width:"abbreviated",context:"standalone"});case"ccccc":return i.day(a,{width:"narrow",context:"standalone"});case"cccccc":return i.day(a,{width:"short",context:"standalone"});case"cccc":default:return i.day(a,{width:"wide",context:"standalone"})}},i:function(t,e,i){var n=t.getUTCDay(),a=n===0?7:n;switch(e){case"i":return String(a);case"ii":return ot(a,e.length);case"io":return i.ordinalNumber(a,{unit:"day"});case"iii":return i.day(n,{width:"abbreviated",context:"formatting"});case"iiiii":return i.day(n,{width:"narrow",context:"formatting"});case"iiiiii":return i.day(n,{width:"short",context:"formatting"});case"iiii":default:return i.day(n,{width:"wide",context:"formatting"})}},a:function(t,e,i){var n=t.getUTCHours(),a=n/12>=1?"pm":"am";switch(e){case"a":case"aa":return i.dayPeriod(a,{width:"abbreviated",context:"formatting"});case"aaa":return i.dayPeriod(a,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return i.dayPeriod(a,{width:"narrow",context:"formatting"});case"aaaa":default:return i.dayPeriod(a,{width:"wide",context:"formatting"})}},b:function(t,e,i){var n=t.getUTCHours(),a;switch(n===12?a=Lr.noon:n===0?a=Lr.midnight:a=n/12>=1?"pm":"am",e){case"b":case"bb":return i.dayPeriod(a,{width:"abbreviated",context:"formatting"});case"bbb":return i.dayPeriod(a,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return i.dayPeriod(a,{width:"narrow",context:"formatting"});case"bbbb":default:return i.dayPeriod(a,{width:"wide",context:"formatting"})}},B:function(t,e,i){var n=t.getUTCHours(),a;switch(n>=17?a=Lr.evening:n>=12?a=Lr.afternoon:n>=4?a=Lr.morning:a=Lr.night,e){case"B":case"BB":case"BBB":return i.dayPeriod(a,{width:"abbreviated",context:"formatting"});case"BBBBB":return i.dayPeriod(a,{width:"narrow",context:"formatting"});case"BBBB":default:return i.dayPeriod(a,{width:"wide",context:"formatting"})}},h:function(t,e,i){if(e==="ho"){var n=t.getUTCHours()%12;return n===0&&(n=12),i.ordinalNumber(n,{unit:"hour"})}return Ye.h(t,e)},H:function(t,e,i){return e==="Ho"?i.ordinalNumber(t.getUTCHours(),{unit:"hour"}):Ye.H(t,e)},K:function(t,e,i){var n=t.getUTCHours()%12;return e==="Ko"?i.ordinalNumber(n,{unit:"hour"}):ot(n,e.length)},k:function(t,e,i){var n=t.getUTCHours();return n===0&&(n=24),e==="ko"?i.ordinalNumber(n,{unit:"hour"}):ot(n,e.length)},m:function(t,e,i){return e==="mo"?i.ordinalNumber(t.getUTCMinutes(),{unit:"minute"}):Ye.m(t,e)},s:function(t,e,i){return e==="so"?i.ordinalNumber(t.getUTCSeconds(),{unit:"second"}):Ye.s(t,e)},S:function(t,e){return Ye.S(t,e)},X:function(t,e,i,n){var a=n._originalDate||t,o=a.getTimezoneOffset();if(o===0)return"Z";switch(e){case"X":return Ac(o);case"XXXX":case"XX":return mr(o);case"XXXXX":case"XXX":default:return mr(o,":")}},x:function(t,e,i,n){var a=n._originalDate||t,o=a.getTimezoneOffset();switch(e){case"x":return Ac(o);case"xxxx":case"xx":return mr(o);case"xxxxx":case"xxx":default:return mr(o,":")}},O:function(t,e,i,n){var a=n._originalDate||t,o=a.getTimezoneOffset();switch(e){case"O":case"OO":case"OOO":return"GMT"+xc(o,":");case"OOOO":default:return"GMT"+mr(o,":")}},z:function(t,e,i,n){var a=n._originalDate||t,o=a.getTimezoneOffset();switch(e){case"z":case"zz":case"zzz":return"GMT"+xc(o,":");case"zzzz":default:return"GMT"+mr(o,":")}},t:function(t,e,i,n){var a=n._originalDate||t,o=Math.floor(a.getTime()/1e3);return ot(o,e.length)},T:function(t,e,i,n){var a=n._originalDate||t,o=a.getTime();return ot(o,e.length)}};function xc(r,t){var e=r>0?"-":"+",i=Math.abs(r),n=Math.floor(i/60),a=i%60;if(a===0)return e+String(n);var o=t||"";return e+String(n)+o+ot(a,2)}function Ac(r,t){if(r%60===0){var e=r>0?"-":"+";return e+ot(Math.abs(r)/60,2)}return mr(r,t)}function mr(r,t){var e=t||"",i=r>0?"-":"+",n=Math.abs(r),a=ot(Math.floor(n/60),2),o=ot(n%60,2);return i+a+e+o}const Hg=qg;var Ec=function(t,e){switch(t){case"P":return e.date({width:"short"});case"PP":return e.date({width:"medium"});case"PPP":return e.date({width:"long"});case"PPPP":default:return e.date({width:"full"})}},Lp=function(t,e){switch(t){case"p":return e.time({width:"short"});case"pp":return e.time({width:"medium"});case"ppp":return e.time({width:"long"});case"pppp":default:return e.time({width:"full"})}},Xg=function(t,e){var i=t.match(/(P+)(p+)?/)||[],n=i[1],a=i[2];if(!a)return Ec(t,e);var o;switch(n){case"P":o=e.dateTime({width:"short"});break;case"PP":o=e.dateTime({width:"medium"});break;case"PPP":o=e.dateTime({width:"long"});break;case"PPPP":default:o=e.dateTime({width:"full"});break}return o.replace("{{date}}",Ec(n,e)).replace("{{time}}",Lp(a,e))},Zg={p:Lp,P:Xg};const Ps=Zg;function Fp(r){var t=new Date(Date.UTC(r.getFullYear(),r.getMonth(),r.getDate(),r.getHours(),r.getMinutes(),r.getSeconds(),r.getMilliseconds()));return t.setUTCFullYear(r.getFullYear()),r.getTime()-t.getTime()}var Qg=["D","DD"],Kg=["YY","YYYY"];function $p(r){return Qg.indexOf(r)!==-1}function Np(r){return Kg.indexOf(r)!==-1}function za(r,t,e){if(r==="YYYY")throw new RangeError("Use `yyyy` instead of `YYYY` (in `".concat(t,"`) for formatting years to the input `").concat(e,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if(r==="YY")throw new RangeError("Use `yy` instead of `YY` (in `".concat(t,"`) for formatting years to the input `").concat(e,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if(r==="D")throw new RangeError("Use `d` instead of `D` (in `".concat(t,"`) for formatting days of the month to the input `").concat(e,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if(r==="DD")throw new RangeError("Use `dd` instead of `DD` (in `".concat(t,"`) for formatting days of the month to the input `").concat(e,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"))}var Jg={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}},ty=function(t,e,i){var n,a=Jg[t];return typeof a=="string"?n=a:e===1?n=a.one:n=a.other.replace("{{count}}",e.toString()),i!=null&&i.addSuffix?i.comparison&&i.comparison>0?"in "+n:n+" ago":n};const ey=ty;function cs(r){return function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},e=t.width?String(t.width):r.defaultWidth,i=r.formats[e]||r.formats[r.defaultWidth];return i}}var ry={full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},iy={full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},ny={full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},ay={date:cs({formats:ry,defaultWidth:"full"}),time:cs({formats:iy,defaultWidth:"full"}),dateTime:cs({formats:ny,defaultWidth:"full"})};const oy=ay;var sy={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"},ly=function(t,e,i,n){return sy[t]};const uy=ly;function Mi(r){return function(t,e){var i=e!=null&&e.context?String(e.context):"standalone",n;if(i==="formatting"&&r.formattingValues){var a=r.defaultFormattingWidth||r.defaultWidth,o=e!=null&&e.width?String(e.width):a;n=r.formattingValues[o]||r.formattingValues[a]}else{var s=r.defaultWidth,l=e!=null&&e.width?String(e.width):r.defaultWidth;n=r.values[l]||r.values[s]}var u=r.argumentCallback?r.argumentCallback(t):t;return n[u]}}var hy={narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},cy={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},dy={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},fy={narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},py={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},vy={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},my=function(t,e){var i=Number(t),n=i%100;if(n>20||n<10)switch(n%10){case 1:return i+"st";case 2:return i+"nd";case 3:return i+"rd"}return i+"th"},_y={ordinalNumber:my,era:Mi({values:hy,defaultWidth:"wide"}),quarter:Mi({values:cy,defaultWidth:"wide",argumentCallback:function(t){return t-1}}),month:Mi({values:dy,defaultWidth:"wide"}),day:Mi({values:fy,defaultWidth:"wide"}),dayPeriod:Mi({values:py,defaultWidth:"wide",formattingValues:vy,defaultFormattingWidth:"wide"})};const gy=_y;function Oi(r){return function(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=e.width,n=i&&r.matchPatterns[i]||r.matchPatterns[r.defaultMatchWidth],a=t.match(n);if(!a)return null;var o=a[0],s=i&&r.parsePatterns[i]||r.parsePatterns[r.defaultParseWidth],l=Array.isArray(s)?by(s,function(c){return c.test(o)}):yy(s,function(c){return c.test(o)}),u;u=r.valueCallback?r.valueCallback(l):l,u=e.valueCallback?e.valueCallback(u):u;var h=t.slice(o.length);return{value:u,rest:h}}}function yy(r,t){for(var e in r)if(r.hasOwnProperty(e)&&t(r[e]))return e}function by(r,t){for(var e=0;e<r.length;e++)if(t(r[e]))return e}function wy(r){return function(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=t.match(r.matchPattern);if(!i)return null;var n=i[0],a=t.match(r.parsePattern);if(!a)return null;var o=r.valueCallback?r.valueCallback(a[0]):a[0];o=e.valueCallback?e.valueCallback(o):o;var s=t.slice(n.length);return{value:o,rest:s}}}var xy=/^(\d+)(th|st|nd|rd)?/i,Ay=/\d+/i,Ey={narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},Cy={any:[/^b/i,/^(a|c)/i]},Ty={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},My={any:[/1/i,/2/i,/3/i,/4/i]},Oy={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},Sy={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},Iy={narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},Ry={narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},Py={narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},Dy={any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},ky={ordinalNumber:wy({matchPattern:xy,parsePattern:Ay,valueCallback:function(t){return parseInt(t,10)}}),era:Oi({matchPatterns:Ey,defaultMatchWidth:"wide",parsePatterns:Cy,defaultParseWidth:"any"}),quarter:Oi({matchPatterns:Ty,defaultMatchWidth:"wide",parsePatterns:My,defaultParseWidth:"any",valueCallback:function(t){return t+1}}),month:Oi({matchPatterns:Oy,defaultMatchWidth:"wide",parsePatterns:Sy,defaultParseWidth:"any"}),day:Oi({matchPatterns:Iy,defaultMatchWidth:"wide",parsePatterns:Ry,defaultParseWidth:"any"}),dayPeriod:Oi({matchPatterns:Py,defaultMatchWidth:"any",parsePatterns:Dy,defaultParseWidth:"any"})};const Ly=ky;var Fy={code:"en-US",formatDistance:ey,formatLong:oy,formatRelative:uy,localize:gy,match:Ly,options:{weekStartsOn:0,firstWeekContainsDate:1}};const Bp=Fy;var $y=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,Ny=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,By=/^'([^]*?)'?$/,zy=/''/g,Gy=/[a-zA-Z]/;function Yy(r,t,e){var i,n,a,o,s,l,u,h,c,d,f,p,v,m,_,g,y,b;Ct(2,arguments);var w=String(t),x=di(),E=(i=(n=e==null?void 0:e.locale)!==null&&n!==void 0?n:x.locale)!==null&&i!==void 0?i:Bp,A=Vt((a=(o=(s=(l=e==null?void 0:e.firstWeekContainsDate)!==null&&l!==void 0?l:e==null||(u=e.locale)===null||u===void 0||(h=u.options)===null||h===void 0?void 0:h.firstWeekContainsDate)!==null&&s!==void 0?s:x.firstWeekContainsDate)!==null&&o!==void 0?o:(c=x.locale)===null||c===void 0||(d=c.options)===null||d===void 0?void 0:d.firstWeekContainsDate)!==null&&a!==void 0?a:1);if(!(A>=1&&A<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var M=Vt((f=(p=(v=(m=e==null?void 0:e.weekStartsOn)!==null&&m!==void 0?m:e==null||(_=e.locale)===null||_===void 0||(g=_.options)===null||g===void 0?void 0:g.weekStartsOn)!==null&&v!==void 0?v:x.weekStartsOn)!==null&&p!==void 0?p:(y=x.locale)===null||y===void 0||(b=y.options)===null||b===void 0?void 0:b.weekStartsOn)!==null&&f!==void 0?f:0);if(!(M>=0&&M<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");if(!E.localize)throw new RangeError("locale must contain localize property");if(!E.formatLong)throw new RangeError("locale must contain formatLong property");var I=$t(r);if(!Rs(I))throw new RangeError("Invalid time value");var k=Fp(I),N=Rp(I,k),F={firstWeekContainsDate:A,weekStartsOn:M,locale:E,_originalDate:I},j=w.match(Ny).map(function(D){var B=D[0];if(B==="p"||B==="P"){var $=Ps[B];return $(D,E.formatLong)}return D}).join("").match($y).map(function(D){if(D==="''")return"'";var B=D[0];if(B==="'")return Uy(D);var $=Hg[B];if($)return!(e!=null&&e.useAdditionalWeekYearTokens)&&Np(D)&&za(D,t,String(r)),!(e!=null&&e.useAdditionalDayOfYearTokens)&&$p(D)&&za(D,t,String(r)),$(N,D,E.localize,F);if(B.match(Gy))throw new RangeError("Format string contains an unescaped latin alphabet character `"+B+"`");return D}).join("");return j}function Uy(r){var t=r.match(By);return t?t[1].replace(zy,"'"):r}function jy(r,t){if(r==null)throw new TypeError("assign requires that input parameter not be null or undefined");for(var e in t)Object.prototype.hasOwnProperty.call(t,e)&&(r[e]=t[e]);return r}function Qn(r){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?Qn=function(e){return typeof e}:Qn=function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Qn(r)}function zp(r,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");r.prototype=Object.create(t&&t.prototype,{constructor:{value:r,writable:!0,configurable:!0}}),t&&Ds(r,t)}function Ds(r,t){return Ds=Object.setPrototypeOf||function(i,n){return i.__proto__=n,i},Ds(r,t)}function Gp(r){var t=Vy();return function(){var i=Ga(r),n;if(t){var a=Ga(this).constructor;n=Reflect.construct(i,arguments,a)}else n=i.apply(this,arguments);return Wy(this,n)}}function Wy(r,t){return t&&(Qn(t)==="object"||typeof t=="function")?t:ks(r)}function ks(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function Vy(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function Ga(r){return Ga=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},Ga(r)}function _u(r,t){if(!(r instanceof t))throw new TypeError("Cannot call a class as a function")}function Cc(r,t){for(var e=0;e<t.length;e++){var i=t[e];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(r,i.key,i)}}function gu(r,t,e){return t&&Cc(r.prototype,t),e&&Cc(r,e),r}function Ls(r,t,e){return t in r?Object.defineProperty(r,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):r[t]=e,r}var qy=10,Yp=function(){function r(){_u(this,r),Ls(this,"subPriority",0)}return gu(r,[{key:"validate",value:function(e,i){return!0}}]),r}(),Hy=function(r){zp(e,r);var t=Gp(e);function e(i,n,a,o,s){var l;return _u(this,e),l=t.call(this),l.value=i,l.validateValue=n,l.setValue=a,l.priority=o,s&&(l.subPriority=s),l}return gu(e,[{key:"validate",value:function(n,a){return this.validateValue(n,this.value,a)}},{key:"set",value:function(n,a,o){return this.setValue(n,a,this.value,o)}}]),e}(Yp),Xy=function(r){zp(e,r);var t=Gp(e);function e(){var i;_u(this,e);for(var n=arguments.length,a=new Array(n),o=0;o<n;o++)a[o]=arguments[o];return i=t.call.apply(t,[this].concat(a)),Ls(ks(i),"priority",qy),Ls(ks(i),"subPriority",-1),i}return gu(e,[{key:"set",value:function(n,a){if(a.timestampIsSet)return n;var o=new Date(0);return o.setFullYear(n.getUTCFullYear(),n.getUTCMonth(),n.getUTCDate()),o.setHours(n.getUTCHours(),n.getUTCMinutes(),n.getUTCSeconds(),n.getUTCMilliseconds()),o}}]),e}(Yp);function Zy(r,t){if(!(r instanceof t))throw new TypeError("Cannot call a class as a function")}function Tc(r,t){for(var e=0;e<t.length;e++){var i=t[e];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(r,i.key,i)}}function Qy(r,t,e){return t&&Tc(r.prototype,t),e&&Tc(r,e),r}var rt=function(){function r(){Zy(this,r)}return Qy(r,[{key:"run",value:function(e,i,n,a){var o=this.parse(e,i,n,a);return o?{setter:new Hy(o.value,this.validate,this.set,this.priority,this.subPriority),rest:o.rest}:null}},{key:"validate",value:function(e,i,n){return!0}}]),r}();function Kn(r){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?Kn=function(e){return typeof e}:Kn=function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Kn(r)}function Ky(r,t){if(!(r instanceof t))throw new TypeError("Cannot call a class as a function")}function Mc(r,t){for(var e=0;e<t.length;e++){var i=t[e];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(r,i.key,i)}}function Jy(r,t,e){return t&&Mc(r.prototype,t),e&&Mc(r,e),r}function t0(r,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");r.prototype=Object.create(t&&t.prototype,{constructor:{value:r,writable:!0,configurable:!0}}),t&&Fs(r,t)}function Fs(r,t){return Fs=Object.setPrototypeOf||function(i,n){return i.__proto__=n,i},Fs(r,t)}function e0(r){var t=i0();return function(){var i=Ya(r),n;if(t){var a=Ya(this).constructor;n=Reflect.construct(i,arguments,a)}else n=i.apply(this,arguments);return r0(this,n)}}function r0(r,t){return t&&(Kn(t)==="object"||typeof t=="function")?t:$s(r)}function $s(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function i0(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function Ya(r){return Ya=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},Ya(r)}function Oc(r,t,e){return t in r?Object.defineProperty(r,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):r[t]=e,r}var n0=function(r){t0(e,r);var t=e0(e);function e(){var i;Ky(this,e);for(var n=arguments.length,a=new Array(n),o=0;o<n;o++)a[o]=arguments[o];return i=t.call.apply(t,[this].concat(a)),Oc($s(i),"priority",140),Oc($s(i),"incompatibleTokens",["R","u","t","T"]),i}return Jy(e,[{key:"parse",value:function(n,a,o){switch(a){case"G":case"GG":case"GGG":return o.era(n,{width:"abbreviated"})||o.era(n,{width:"narrow"});case"GGGGG":return o.era(n,{width:"narrow"});case"GGGG":default:return o.era(n,{width:"wide"})||o.era(n,{width:"abbreviated"})||o.era(n,{width:"narrow"})}}},{key:"set",value:function(n,a,o){return a.era=o,n.setUTCFullYear(o,0,1),n.setUTCHours(0,0,0,0),n}}]),e}(rt),a0=6e4,o0=36e5,s0=1e3,bt={month:/^(1[0-2]|0?\d)/,date:/^(3[0-1]|[0-2]?\d)/,dayOfYear:/^(36[0-6]|3[0-5]\d|[0-2]?\d?\d)/,week:/^(5[0-3]|[0-4]?\d)/,hour23h:/^(2[0-3]|[0-1]?\d)/,hour24h:/^(2[0-4]|[0-1]?\d)/,hour11h:/^(1[0-1]|0?\d)/,hour12h:/^(1[0-2]|0?\d)/,minute:/^[0-5]?\d/,second:/^[0-5]?\d/,singleDigit:/^\d/,twoDigits:/^\d{1,2}/,threeDigits:/^\d{1,3}/,fourDigits:/^\d{1,4}/,anyDigitsSigned:/^-?\d+/,singleDigitSigned:/^-?\d/,twoDigitsSigned:/^-?\d{1,2}/,threeDigitsSigned:/^-?\d{1,3}/,fourDigitsSigned:/^-?\d{1,4}/},_e={basicOptionalMinutes:/^([+-])(\d{2})(\d{2})?|Z/,basic:/^([+-])(\d{2})(\d{2})|Z/,basicOptionalSeconds:/^([+-])(\d{2})(\d{2})((\d{2}))?|Z/,extended:/^([+-])(\d{2}):(\d{2})|Z/,extendedOptionalSeconds:/^([+-])(\d{2}):(\d{2})(:(\d{2}))?|Z/};function wt(r,t){return r&&{value:t(r.value),rest:r.rest}}function _t(r,t){var e=t.match(r);return e?{value:parseInt(e[0],10),rest:t.slice(e[0].length)}:null}function ge(r,t){var e=t.match(r);if(!e)return null;if(e[0]==="Z")return{value:0,rest:t.slice(1)};var i=e[1]==="+"?1:-1,n=e[2]?parseInt(e[2],10):0,a=e[3]?parseInt(e[3],10):0,o=e[5]?parseInt(e[5],10):0;return{value:i*(n*o0+a*a0+o*s0),rest:t.slice(e[0].length)}}function Up(r){return _t(bt.anyDigitsSigned,r)}function gt(r,t){switch(r){case 1:return _t(bt.singleDigit,t);case 2:return _t(bt.twoDigits,t);case 3:return _t(bt.threeDigits,t);case 4:return _t(bt.fourDigits,t);default:return _t(new RegExp("^\\d{1,"+r+"}"),t)}}function Ua(r,t){switch(r){case 1:return _t(bt.singleDigitSigned,t);case 2:return _t(bt.twoDigitsSigned,t);case 3:return _t(bt.threeDigitsSigned,t);case 4:return _t(bt.fourDigitsSigned,t);default:return _t(new RegExp("^-?\\d{1,"+r+"}"),t)}}function yu(r){switch(r){case"morning":return 4;case"evening":return 17;case"pm":case"noon":case"afternoon":return 12;case"am":case"midnight":case"night":default:return 0}}function jp(r,t){var e=t>0,i=e?t:1-t,n;if(i<=50)n=r||100;else{var a=i+50,o=Math.floor(a/100)*100,s=r>=a%100;n=r+o-(s?100:0)}return e?n:1-n}function Wp(r){return r%400===0||r%4===0&&r%100!==0}function Jn(r){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?Jn=function(e){return typeof e}:Jn=function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Jn(r)}function l0(r,t){if(!(r instanceof t))throw new TypeError("Cannot call a class as a function")}function Sc(r,t){for(var e=0;e<t.length;e++){var i=t[e];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(r,i.key,i)}}function u0(r,t,e){return t&&Sc(r.prototype,t),e&&Sc(r,e),r}function h0(r,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");r.prototype=Object.create(t&&t.prototype,{constructor:{value:r,writable:!0,configurable:!0}}),t&&Ns(r,t)}function Ns(r,t){return Ns=Object.setPrototypeOf||function(i,n){return i.__proto__=n,i},Ns(r,t)}function c0(r){var t=f0();return function(){var i=ja(r),n;if(t){var a=ja(this).constructor;n=Reflect.construct(i,arguments,a)}else n=i.apply(this,arguments);return d0(this,n)}}function d0(r,t){return t&&(Jn(t)==="object"||typeof t=="function")?t:Bs(r)}function Bs(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function f0(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function ja(r){return ja=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},ja(r)}function Ic(r,t,e){return t in r?Object.defineProperty(r,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):r[t]=e,r}var p0=function(r){h0(e,r);var t=c0(e);function e(){var i;l0(this,e);for(var n=arguments.length,a=new Array(n),o=0;o<n;o++)a[o]=arguments[o];return i=t.call.apply(t,[this].concat(a)),Ic(Bs(i),"priority",130),Ic(Bs(i),"incompatibleTokens",["Y","R","u","w","I","i","e","c","t","T"]),i}return u0(e,[{key:"parse",value:function(n,a,o){var s=function(u){return{year:u,isTwoDigitYear:a==="yy"}};switch(a){case"y":return wt(gt(4,n),s);case"yo":return wt(o.ordinalNumber(n,{unit:"year"}),s);default:return wt(gt(a.length,n),s)}}},{key:"validate",value:function(n,a){return a.isTwoDigitYear||a.year>0}},{key:"set",value:function(n,a,o){var s=n.getUTCFullYear();if(o.isTwoDigitYear){var l=jp(o.year,s);return n.setUTCFullYear(l,0,1),n.setUTCHours(0,0,0,0),n}var u=!("era"in a)||a.era===1?o.year:1-o.year;return n.setUTCFullYear(u,0,1),n.setUTCHours(0,0,0,0),n}}]),e}(rt);function ta(r){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?ta=function(e){return typeof e}:ta=function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},ta(r)}function v0(r,t){if(!(r instanceof t))throw new TypeError("Cannot call a class as a function")}function Rc(r,t){for(var e=0;e<t.length;e++){var i=t[e];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(r,i.key,i)}}function m0(r,t,e){return t&&Rc(r.prototype,t),e&&Rc(r,e),r}function _0(r,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");r.prototype=Object.create(t&&t.prototype,{constructor:{value:r,writable:!0,configurable:!0}}),t&&zs(r,t)}function zs(r,t){return zs=Object.setPrototypeOf||function(i,n){return i.__proto__=n,i},zs(r,t)}function g0(r){var t=b0();return function(){var i=Wa(r),n;if(t){var a=Wa(this).constructor;n=Reflect.construct(i,arguments,a)}else n=i.apply(this,arguments);return y0(this,n)}}function y0(r,t){return t&&(ta(t)==="object"||typeof t=="function")?t:Gs(r)}function Gs(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function b0(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function Wa(r){return Wa=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},Wa(r)}function Pc(r,t,e){return t in r?Object.defineProperty(r,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):r[t]=e,r}var w0=function(r){_0(e,r);var t=g0(e);function e(){var i;v0(this,e);for(var n=arguments.length,a=new Array(n),o=0;o<n;o++)a[o]=arguments[o];return i=t.call.apply(t,[this].concat(a)),Pc(Gs(i),"priority",130),Pc(Gs(i),"incompatibleTokens",["y","R","u","Q","q","M","L","I","d","D","i","t","T"]),i}return m0(e,[{key:"parse",value:function(n,a,o){var s=function(u){return{year:u,isTwoDigitYear:a==="YY"}};switch(a){case"Y":return wt(gt(4,n),s);case"Yo":return wt(o.ordinalNumber(n,{unit:"year"}),s);default:return wt(gt(a.length,n),s)}}},{key:"validate",value:function(n,a){return a.isTwoDigitYear||a.year>0}},{key:"set",value:function(n,a,o,s){var l=mu(n,s);if(o.isTwoDigitYear){var u=jp(o.year,l);return n.setUTCFullYear(u,0,s.firstWeekContainsDate),n.setUTCHours(0,0,0,0),Cr(n,s)}var h=!("era"in a)||a.era===1?o.year:1-o.year;return n.setUTCFullYear(h,0,s.firstWeekContainsDate),n.setUTCHours(0,0,0,0),Cr(n,s)}}]),e}(rt);function ea(r){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?ea=function(e){return typeof e}:ea=function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},ea(r)}function x0(r,t){if(!(r instanceof t))throw new TypeError("Cannot call a class as a function")}function Dc(r,t){for(var e=0;e<t.length;e++){var i=t[e];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(r,i.key,i)}}function A0(r,t,e){return t&&Dc(r.prototype,t),e&&Dc(r,e),r}function E0(r,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");r.prototype=Object.create(t&&t.prototype,{constructor:{value:r,writable:!0,configurable:!0}}),t&&Ys(r,t)}function Ys(r,t){return Ys=Object.setPrototypeOf||function(i,n){return i.__proto__=n,i},Ys(r,t)}function C0(r){var t=M0();return function(){var i=Va(r),n;if(t){var a=Va(this).constructor;n=Reflect.construct(i,arguments,a)}else n=i.apply(this,arguments);return T0(this,n)}}function T0(r,t){return t&&(ea(t)==="object"||typeof t=="function")?t:Us(r)}function Us(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function M0(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function Va(r){return Va=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},Va(r)}function kc(r,t,e){return t in r?Object.defineProperty(r,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):r[t]=e,r}var O0=function(r){E0(e,r);var t=C0(e);function e(){var i;x0(this,e);for(var n=arguments.length,a=new Array(n),o=0;o<n;o++)a[o]=arguments[o];return i=t.call.apply(t,[this].concat(a)),kc(Us(i),"priority",130),kc(Us(i),"incompatibleTokens",["G","y","Y","u","Q","q","M","L","w","d","D","e","c","t","T"]),i}return A0(e,[{key:"parse",value:function(n,a){return Ua(a==="R"?4:a.length,n)}},{key:"set",value:function(n,a,o){var s=new Date(0);return s.setUTCFullYear(o,0,4),s.setUTCHours(0,0,0,0),ni(s)}}]),e}(rt);function ra(r){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?ra=function(e){return typeof e}:ra=function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},ra(r)}function S0(r,t){if(!(r instanceof t))throw new TypeError("Cannot call a class as a function")}function Lc(r,t){for(var e=0;e<t.length;e++){var i=t[e];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(r,i.key,i)}}function I0(r,t,e){return t&&Lc(r.prototype,t),e&&Lc(r,e),r}function R0(r,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");r.prototype=Object.create(t&&t.prototype,{constructor:{value:r,writable:!0,configurable:!0}}),t&&js(r,t)}function js(r,t){return js=Object.setPrototypeOf||function(i,n){return i.__proto__=n,i},js(r,t)}function P0(r){var t=k0();return function(){var i=qa(r),n;if(t){var a=qa(this).constructor;n=Reflect.construct(i,arguments,a)}else n=i.apply(this,arguments);return D0(this,n)}}function D0(r,t){return t&&(ra(t)==="object"||typeof t=="function")?t:Ws(r)}function Ws(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function k0(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function qa(r){return qa=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},qa(r)}function Fc(r,t,e){return t in r?Object.defineProperty(r,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):r[t]=e,r}var L0=function(r){R0(e,r);var t=P0(e);function e(){var i;S0(this,e);for(var n=arguments.length,a=new Array(n),o=0;o<n;o++)a[o]=arguments[o];return i=t.call.apply(t,[this].concat(a)),Fc(Ws(i),"priority",130),Fc(Ws(i),"incompatibleTokens",["G","y","Y","R","w","I","i","e","c","t","T"]),i}return I0(e,[{key:"parse",value:function(n,a){return Ua(a==="u"?4:a.length,n)}},{key:"set",value:function(n,a,o){return n.setUTCFullYear(o,0,1),n.setUTCHours(0,0,0,0),n}}]),e}(rt);function ia(r){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?ia=function(e){return typeof e}:ia=function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},ia(r)}function F0(r,t){if(!(r instanceof t))throw new TypeError("Cannot call a class as a function")}function $c(r,t){for(var e=0;e<t.length;e++){var i=t[e];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(r,i.key,i)}}function $0(r,t,e){return t&&$c(r.prototype,t),e&&$c(r,e),r}function N0(r,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");r.prototype=Object.create(t&&t.prototype,{constructor:{value:r,writable:!0,configurable:!0}}),t&&Vs(r,t)}function Vs(r,t){return Vs=Object.setPrototypeOf||function(i,n){return i.__proto__=n,i},Vs(r,t)}function B0(r){var t=G0();return function(){var i=Ha(r),n;if(t){var a=Ha(this).constructor;n=Reflect.construct(i,arguments,a)}else n=i.apply(this,arguments);return z0(this,n)}}function z0(r,t){return t&&(ia(t)==="object"||typeof t=="function")?t:qs(r)}function qs(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function G0(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function Ha(r){return Ha=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},Ha(r)}function Nc(r,t,e){return t in r?Object.defineProperty(r,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):r[t]=e,r}var Y0=function(r){N0(e,r);var t=B0(e);function e(){var i;F0(this,e);for(var n=arguments.length,a=new Array(n),o=0;o<n;o++)a[o]=arguments[o];return i=t.call.apply(t,[this].concat(a)),Nc(qs(i),"priority",120),Nc(qs(i),"incompatibleTokens",["Y","R","q","M","L","w","I","d","D","i","e","c","t","T"]),i}return $0(e,[{key:"parse",value:function(n,a,o){switch(a){case"Q":case"QQ":return gt(a.length,n);case"Qo":return o.ordinalNumber(n,{unit:"quarter"});case"QQQ":return o.quarter(n,{width:"abbreviated",context:"formatting"})||o.quarter(n,{width:"narrow",context:"formatting"});case"QQQQQ":return o.quarter(n,{width:"narrow",context:"formatting"});case"QQQQ":default:return o.quarter(n,{width:"wide",context:"formatting"})||o.quarter(n,{width:"abbreviated",context:"formatting"})||o.quarter(n,{width:"narrow",context:"formatting"})}}},{key:"validate",value:function(n,a){return a>=1&&a<=4}},{key:"set",value:function(n,a,o){return n.setUTCMonth((o-1)*3,1),n.setUTCHours(0,0,0,0),n}}]),e}(rt);function na(r){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?na=function(e){return typeof e}:na=function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},na(r)}function U0(r,t){if(!(r instanceof t))throw new TypeError("Cannot call a class as a function")}function Bc(r,t){for(var e=0;e<t.length;e++){var i=t[e];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(r,i.key,i)}}function j0(r,t,e){return t&&Bc(r.prototype,t),e&&Bc(r,e),r}function W0(r,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");r.prototype=Object.create(t&&t.prototype,{constructor:{value:r,writable:!0,configurable:!0}}),t&&Hs(r,t)}function Hs(r,t){return Hs=Object.setPrototypeOf||function(i,n){return i.__proto__=n,i},Hs(r,t)}function V0(r){var t=H0();return function(){var i=Xa(r),n;if(t){var a=Xa(this).constructor;n=Reflect.construct(i,arguments,a)}else n=i.apply(this,arguments);return q0(this,n)}}function q0(r,t){return t&&(na(t)==="object"||typeof t=="function")?t:Xs(r)}function Xs(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function H0(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function Xa(r){return Xa=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},Xa(r)}function zc(r,t,e){return t in r?Object.defineProperty(r,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):r[t]=e,r}var X0=function(r){W0(e,r);var t=V0(e);function e(){var i;U0(this,e);for(var n=arguments.length,a=new Array(n),o=0;o<n;o++)a[o]=arguments[o];return i=t.call.apply(t,[this].concat(a)),zc(Xs(i),"priority",120),zc(Xs(i),"incompatibleTokens",["Y","R","Q","M","L","w","I","d","D","i","e","c","t","T"]),i}return j0(e,[{key:"parse",value:function(n,a,o){switch(a){case"q":case"qq":return gt(a.length,n);case"qo":return o.ordinalNumber(n,{unit:"quarter"});case"qqq":return o.quarter(n,{width:"abbreviated",context:"standalone"})||o.quarter(n,{width:"narrow",context:"standalone"});case"qqqqq":return o.quarter(n,{width:"narrow",context:"standalone"});case"qqqq":default:return o.quarter(n,{width:"wide",context:"standalone"})||o.quarter(n,{width:"abbreviated",context:"standalone"})||o.quarter(n,{width:"narrow",context:"standalone"})}}},{key:"validate",value:function(n,a){return a>=1&&a<=4}},{key:"set",value:function(n,a,o){return n.setUTCMonth((o-1)*3,1),n.setUTCHours(0,0,0,0),n}}]),e}(rt);function aa(r){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?aa=function(e){return typeof e}:aa=function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},aa(r)}function Z0(r,t){if(!(r instanceof t))throw new TypeError("Cannot call a class as a function")}function Gc(r,t){for(var e=0;e<t.length;e++){var i=t[e];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(r,i.key,i)}}function Q0(r,t,e){return t&&Gc(r.prototype,t),e&&Gc(r,e),r}function K0(r,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");r.prototype=Object.create(t&&t.prototype,{constructor:{value:r,writable:!0,configurable:!0}}),t&&Zs(r,t)}function Zs(r,t){return Zs=Object.setPrototypeOf||function(i,n){return i.__proto__=n,i},Zs(r,t)}function J0(r){var t=eb();return function(){var i=Za(r),n;if(t){var a=Za(this).constructor;n=Reflect.construct(i,arguments,a)}else n=i.apply(this,arguments);return tb(this,n)}}function tb(r,t){return t&&(aa(t)==="object"||typeof t=="function")?t:Qs(r)}function Qs(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function eb(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function Za(r){return Za=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},Za(r)}function Yc(r,t,e){return t in r?Object.defineProperty(r,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):r[t]=e,r}var rb=function(r){K0(e,r);var t=J0(e);function e(){var i;Z0(this,e);for(var n=arguments.length,a=new Array(n),o=0;o<n;o++)a[o]=arguments[o];return i=t.call.apply(t,[this].concat(a)),Yc(Qs(i),"incompatibleTokens",["Y","R","q","Q","L","w","I","D","i","e","c","t","T"]),Yc(Qs(i),"priority",110),i}return Q0(e,[{key:"parse",value:function(n,a,o){var s=function(u){return u-1};switch(a){case"M":return wt(_t(bt.month,n),s);case"MM":return wt(gt(2,n),s);case"Mo":return wt(o.ordinalNumber(n,{unit:"month"}),s);case"MMM":return o.month(n,{width:"abbreviated",context:"formatting"})||o.month(n,{width:"narrow",context:"formatting"});case"MMMMM":return o.month(n,{width:"narrow",context:"formatting"});case"MMMM":default:return o.month(n,{width:"wide",context:"formatting"})||o.month(n,{width:"abbreviated",context:"formatting"})||o.month(n,{width:"narrow",context:"formatting"})}}},{key:"validate",value:function(n,a){return a>=0&&a<=11}},{key:"set",value:function(n,a,o){return n.setUTCMonth(o,1),n.setUTCHours(0,0,0,0),n}}]),e}(rt);function oa(r){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?oa=function(e){return typeof e}:oa=function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},oa(r)}function ib(r,t){if(!(r instanceof t))throw new TypeError("Cannot call a class as a function")}function Uc(r,t){for(var e=0;e<t.length;e++){var i=t[e];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(r,i.key,i)}}function nb(r,t,e){return t&&Uc(r.prototype,t),e&&Uc(r,e),r}function ab(r,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");r.prototype=Object.create(t&&t.prototype,{constructor:{value:r,writable:!0,configurable:!0}}),t&&Ks(r,t)}function Ks(r,t){return Ks=Object.setPrototypeOf||function(i,n){return i.__proto__=n,i},Ks(r,t)}function ob(r){var t=lb();return function(){var i=Qa(r),n;if(t){var a=Qa(this).constructor;n=Reflect.construct(i,arguments,a)}else n=i.apply(this,arguments);return sb(this,n)}}function sb(r,t){return t&&(oa(t)==="object"||typeof t=="function")?t:Js(r)}function Js(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function lb(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function Qa(r){return Qa=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},Qa(r)}function jc(r,t,e){return t in r?Object.defineProperty(r,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):r[t]=e,r}var ub=function(r){ab(e,r);var t=ob(e);function e(){var i;ib(this,e);for(var n=arguments.length,a=new Array(n),o=0;o<n;o++)a[o]=arguments[o];return i=t.call.apply(t,[this].concat(a)),jc(Js(i),"priority",110),jc(Js(i),"incompatibleTokens",["Y","R","q","Q","M","w","I","D","i","e","c","t","T"]),i}return nb(e,[{key:"parse",value:function(n,a,o){var s=function(u){return u-1};switch(a){case"L":return wt(_t(bt.month,n),s);case"LL":return wt(gt(2,n),s);case"Lo":return wt(o.ordinalNumber(n,{unit:"month"}),s);case"LLL":return o.month(n,{width:"abbreviated",context:"standalone"})||o.month(n,{width:"narrow",context:"standalone"});case"LLLLL":return o.month(n,{width:"narrow",context:"standalone"});case"LLLL":default:return o.month(n,{width:"wide",context:"standalone"})||o.month(n,{width:"abbreviated",context:"standalone"})||o.month(n,{width:"narrow",context:"standalone"})}}},{key:"validate",value:function(n,a){return a>=0&&a<=11}},{key:"set",value:function(n,a,o){return n.setUTCMonth(o,1),n.setUTCHours(0,0,0,0),n}}]),e}(rt);function hb(r,t,e){Ct(2,arguments);var i=$t(r),n=Vt(t),a=kp(i,e)-n;return i.setUTCDate(i.getUTCDate()-a*7),i}function sa(r){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?sa=function(e){return typeof e}:sa=function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},sa(r)}function cb(r,t){if(!(r instanceof t))throw new TypeError("Cannot call a class as a function")}function Wc(r,t){for(var e=0;e<t.length;e++){var i=t[e];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(r,i.key,i)}}function db(r,t,e){return t&&Wc(r.prototype,t),e&&Wc(r,e),r}function fb(r,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");r.prototype=Object.create(t&&t.prototype,{constructor:{value:r,writable:!0,configurable:!0}}),t&&tl(r,t)}function tl(r,t){return tl=Object.setPrototypeOf||function(i,n){return i.__proto__=n,i},tl(r,t)}function pb(r){var t=mb();return function(){var i=Ka(r),n;if(t){var a=Ka(this).constructor;n=Reflect.construct(i,arguments,a)}else n=i.apply(this,arguments);return vb(this,n)}}function vb(r,t){return t&&(sa(t)==="object"||typeof t=="function")?t:el(r)}function el(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function mb(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function Ka(r){return Ka=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},Ka(r)}function Vc(r,t,e){return t in r?Object.defineProperty(r,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):r[t]=e,r}var _b=function(r){fb(e,r);var t=pb(e);function e(){var i;cb(this,e);for(var n=arguments.length,a=new Array(n),o=0;o<n;o++)a[o]=arguments[o];return i=t.call.apply(t,[this].concat(a)),Vc(el(i),"priority",100),Vc(el(i),"incompatibleTokens",["y","R","u","q","Q","M","L","I","d","D","i","t","T"]),i}return db(e,[{key:"parse",value:function(n,a,o){switch(a){case"w":return _t(bt.week,n);case"wo":return o.ordinalNumber(n,{unit:"week"});default:return gt(a.length,n)}}},{key:"validate",value:function(n,a){return a>=1&&a<=53}},{key:"set",value:function(n,a,o,s){return Cr(hb(n,o,s),s)}}]),e}(rt);function gb(r,t){Ct(2,arguments);var e=$t(r),i=Vt(t),n=Dp(e)-i;return e.setUTCDate(e.getUTCDate()-n*7),e}function la(r){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?la=function(e){return typeof e}:la=function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},la(r)}function yb(r,t){if(!(r instanceof t))throw new TypeError("Cannot call a class as a function")}function qc(r,t){for(var e=0;e<t.length;e++){var i=t[e];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(r,i.key,i)}}function bb(r,t,e){return t&&qc(r.prototype,t),e&&qc(r,e),r}function wb(r,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");r.prototype=Object.create(t&&t.prototype,{constructor:{value:r,writable:!0,configurable:!0}}),t&&rl(r,t)}function rl(r,t){return rl=Object.setPrototypeOf||function(i,n){return i.__proto__=n,i},rl(r,t)}function xb(r){var t=Eb();return function(){var i=Ja(r),n;if(t){var a=Ja(this).constructor;n=Reflect.construct(i,arguments,a)}else n=i.apply(this,arguments);return Ab(this,n)}}function Ab(r,t){return t&&(la(t)==="object"||typeof t=="function")?t:il(r)}function il(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function Eb(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function Ja(r){return Ja=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},Ja(r)}function Hc(r,t,e){return t in r?Object.defineProperty(r,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):r[t]=e,r}var Cb=function(r){wb(e,r);var t=xb(e);function e(){var i;yb(this,e);for(var n=arguments.length,a=new Array(n),o=0;o<n;o++)a[o]=arguments[o];return i=t.call.apply(t,[this].concat(a)),Hc(il(i),"priority",100),Hc(il(i),"incompatibleTokens",["y","Y","u","q","Q","M","L","w","d","D","e","c","t","T"]),i}return bb(e,[{key:"parse",value:function(n,a,o){switch(a){case"I":return _t(bt.week,n);case"Io":return o.ordinalNumber(n,{unit:"week"});default:return gt(a.length,n)}}},{key:"validate",value:function(n,a){return a>=1&&a<=53}},{key:"set",value:function(n,a,o){return ni(gb(n,o))}}]),e}(rt);function ua(r){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?ua=function(e){return typeof e}:ua=function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},ua(r)}function Tb(r,t){if(!(r instanceof t))throw new TypeError("Cannot call a class as a function")}function Xc(r,t){for(var e=0;e<t.length;e++){var i=t[e];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(r,i.key,i)}}function Mb(r,t,e){return t&&Xc(r.prototype,t),e&&Xc(r,e),r}function Ob(r,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");r.prototype=Object.create(t&&t.prototype,{constructor:{value:r,writable:!0,configurable:!0}}),t&&nl(r,t)}function nl(r,t){return nl=Object.setPrototypeOf||function(i,n){return i.__proto__=n,i},nl(r,t)}function Sb(r){var t=Rb();return function(){var i=to(r),n;if(t){var a=to(this).constructor;n=Reflect.construct(i,arguments,a)}else n=i.apply(this,arguments);return Ib(this,n)}}function Ib(r,t){return t&&(ua(t)==="object"||typeof t=="function")?t:ha(r)}function ha(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function Rb(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function to(r){return to=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},to(r)}function ds(r,t,e){return t in r?Object.defineProperty(r,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):r[t]=e,r}var Pb=[31,28,31,30,31,30,31,31,30,31,30,31],Db=[31,29,31,30,31,30,31,31,30,31,30,31],kb=function(r){Ob(e,r);var t=Sb(e);function e(){var i;Tb(this,e);for(var n=arguments.length,a=new Array(n),o=0;o<n;o++)a[o]=arguments[o];return i=t.call.apply(t,[this].concat(a)),ds(ha(i),"priority",90),ds(ha(i),"subPriority",1),ds(ha(i),"incompatibleTokens",["Y","R","q","Q","w","I","D","i","e","c","t","T"]),i}return Mb(e,[{key:"parse",value:function(n,a,o){switch(a){case"d":return _t(bt.date,n);case"do":return o.ordinalNumber(n,{unit:"date"});default:return gt(a.length,n)}}},{key:"validate",value:function(n,a){var o=n.getUTCFullYear(),s=Wp(o),l=n.getUTCMonth();return s?a>=1&&a<=Db[l]:a>=1&&a<=Pb[l]}},{key:"set",value:function(n,a,o){return n.setUTCDate(o),n.setUTCHours(0,0,0,0),n}}]),e}(rt);function ca(r){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?ca=function(e){return typeof e}:ca=function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},ca(r)}function Lb(r,t){if(!(r instanceof t))throw new TypeError("Cannot call a class as a function")}function Zc(r,t){for(var e=0;e<t.length;e++){var i=t[e];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(r,i.key,i)}}function Fb(r,t,e){return t&&Zc(r.prototype,t),e&&Zc(r,e),r}function $b(r,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");r.prototype=Object.create(t&&t.prototype,{constructor:{value:r,writable:!0,configurable:!0}}),t&&al(r,t)}function al(r,t){return al=Object.setPrototypeOf||function(i,n){return i.__proto__=n,i},al(r,t)}function Nb(r){var t=zb();return function(){var i=eo(r),n;if(t){var a=eo(this).constructor;n=Reflect.construct(i,arguments,a)}else n=i.apply(this,arguments);return Bb(this,n)}}function Bb(r,t){return t&&(ca(t)==="object"||typeof t=="function")?t:da(r)}function da(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function zb(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function eo(r){return eo=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},eo(r)}function fs(r,t,e){return t in r?Object.defineProperty(r,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):r[t]=e,r}var Gb=function(r){$b(e,r);var t=Nb(e);function e(){var i;Lb(this,e);for(var n=arguments.length,a=new Array(n),o=0;o<n;o++)a[o]=arguments[o];return i=t.call.apply(t,[this].concat(a)),fs(da(i),"priority",90),fs(da(i),"subpriority",1),fs(da(i),"incompatibleTokens",["Y","R","q","Q","M","L","w","I","d","E","i","e","c","t","T"]),i}return Fb(e,[{key:"parse",value:function(n,a,o){switch(a){case"D":case"DD":return _t(bt.dayOfYear,n);case"Do":return o.ordinalNumber(n,{unit:"date"});default:return gt(a.length,n)}}},{key:"validate",value:function(n,a){var o=n.getUTCFullYear(),s=Wp(o);return s?a>=1&&a<=366:a>=1&&a<=365}},{key:"set",value:function(n,a,o){return n.setUTCMonth(0,o),n.setUTCHours(0,0,0,0),n}}]),e}(rt);function bu(r,t,e){var i,n,a,o,s,l,u,h;Ct(2,arguments);var c=di(),d=Vt((i=(n=(a=(o=e==null?void 0:e.weekStartsOn)!==null&&o!==void 0?o:e==null||(s=e.locale)===null||s===void 0||(l=s.options)===null||l===void 0?void 0:l.weekStartsOn)!==null&&a!==void 0?a:c.weekStartsOn)!==null&&n!==void 0?n:(u=c.locale)===null||u===void 0||(h=u.options)===null||h===void 0?void 0:h.weekStartsOn)!==null&&i!==void 0?i:0);if(!(d>=0&&d<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");var f=$t(r),p=Vt(t),v=f.getUTCDay(),m=p%7,_=(m+7)%7,g=(_<d?7:0)+p-v;return f.setUTCDate(f.getUTCDate()+g),f}function fa(r){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?fa=function(e){return typeof e}:fa=function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},fa(r)}function Yb(r,t){if(!(r instanceof t))throw new TypeError("Cannot call a class as a function")}function Qc(r,t){for(var e=0;e<t.length;e++){var i=t[e];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(r,i.key,i)}}function Ub(r,t,e){return t&&Qc(r.prototype,t),e&&Qc(r,e),r}function jb(r,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");r.prototype=Object.create(t&&t.prototype,{constructor:{value:r,writable:!0,configurable:!0}}),t&&ol(r,t)}function ol(r,t){return ol=Object.setPrototypeOf||function(i,n){return i.__proto__=n,i},ol(r,t)}function Wb(r){var t=qb();return function(){var i=ro(r),n;if(t){var a=ro(this).constructor;n=Reflect.construct(i,arguments,a)}else n=i.apply(this,arguments);return Vb(this,n)}}function Vb(r,t){return t&&(fa(t)==="object"||typeof t=="function")?t:sl(r)}function sl(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function qb(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function ro(r){return ro=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},ro(r)}function Kc(r,t,e){return t in r?Object.defineProperty(r,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):r[t]=e,r}var Hb=function(r){jb(e,r);var t=Wb(e);function e(){var i;Yb(this,e);for(var n=arguments.length,a=new Array(n),o=0;o<n;o++)a[o]=arguments[o];return i=t.call.apply(t,[this].concat(a)),Kc(sl(i),"priority",90),Kc(sl(i),"incompatibleTokens",["D","i","e","c","t","T"]),i}return Ub(e,[{key:"parse",value:function(n,a,o){switch(a){case"E":case"EE":case"EEE":return o.day(n,{width:"abbreviated",context:"formatting"})||o.day(n,{width:"short",context:"formatting"})||o.day(n,{width:"narrow",context:"formatting"});case"EEEEE":return o.day(n,{width:"narrow",context:"formatting"});case"EEEEEE":return o.day(n,{width:"short",context:"formatting"})||o.day(n,{width:"narrow",context:"formatting"});case"EEEE":default:return o.day(n,{width:"wide",context:"formatting"})||o.day(n,{width:"abbreviated",context:"formatting"})||o.day(n,{width:"short",context:"formatting"})||o.day(n,{width:"narrow",context:"formatting"})}}},{key:"validate",value:function(n,a){return a>=0&&a<=6}},{key:"set",value:function(n,a,o,s){return n=bu(n,o,s),n.setUTCHours(0,0,0,0),n}}]),e}(rt);function pa(r){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?pa=function(e){return typeof e}:pa=function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},pa(r)}function Xb(r,t){if(!(r instanceof t))throw new TypeError("Cannot call a class as a function")}function Jc(r,t){for(var e=0;e<t.length;e++){var i=t[e];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(r,i.key,i)}}function Zb(r,t,e){return t&&Jc(r.prototype,t),e&&Jc(r,e),r}function Qb(r,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");r.prototype=Object.create(t&&t.prototype,{constructor:{value:r,writable:!0,configurable:!0}}),t&&ll(r,t)}function ll(r,t){return ll=Object.setPrototypeOf||function(i,n){return i.__proto__=n,i},ll(r,t)}function Kb(r){var t=tw();return function(){var i=io(r),n;if(t){var a=io(this).constructor;n=Reflect.construct(i,arguments,a)}else n=i.apply(this,arguments);return Jb(this,n)}}function Jb(r,t){return t&&(pa(t)==="object"||typeof t=="function")?t:ul(r)}function ul(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function tw(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function io(r){return io=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},io(r)}function td(r,t,e){return t in r?Object.defineProperty(r,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):r[t]=e,r}var ew=function(r){Qb(e,r);var t=Kb(e);function e(){var i;Xb(this,e);for(var n=arguments.length,a=new Array(n),o=0;o<n;o++)a[o]=arguments[o];return i=t.call.apply(t,[this].concat(a)),td(ul(i),"priority",90),td(ul(i),"incompatibleTokens",["y","R","u","q","Q","M","L","I","d","D","E","i","c","t","T"]),i}return Zb(e,[{key:"parse",value:function(n,a,o,s){var l=function(h){var c=Math.floor((h-1)/7)*7;return(h+s.weekStartsOn+6)%7+c};switch(a){case"e":case"ee":return wt(gt(a.length,n),l);case"eo":return wt(o.ordinalNumber(n,{unit:"day"}),l);case"eee":return o.day(n,{width:"abbreviated",context:"formatting"})||o.day(n,{width:"short",context:"formatting"})||o.day(n,{width:"narrow",context:"formatting"});case"eeeee":return o.day(n,{width:"narrow",context:"formatting"});case"eeeeee":return o.day(n,{width:"short",context:"formatting"})||o.day(n,{width:"narrow",context:"formatting"});case"eeee":default:return o.day(n,{width:"wide",context:"formatting"})||o.day(n,{width:"abbreviated",context:"formatting"})||o.day(n,{width:"short",context:"formatting"})||o.day(n,{width:"narrow",context:"formatting"})}}},{key:"validate",value:function(n,a){return a>=0&&a<=6}},{key:"set",value:function(n,a,o,s){return n=bu(n,o,s),n.setUTCHours(0,0,0,0),n}}]),e}(rt);function va(r){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?va=function(e){return typeof e}:va=function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},va(r)}function rw(r,t){if(!(r instanceof t))throw new TypeError("Cannot call a class as a function")}function ed(r,t){for(var e=0;e<t.length;e++){var i=t[e];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(r,i.key,i)}}function iw(r,t,e){return t&&ed(r.prototype,t),e&&ed(r,e),r}function nw(r,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");r.prototype=Object.create(t&&t.prototype,{constructor:{value:r,writable:!0,configurable:!0}}),t&&hl(r,t)}function hl(r,t){return hl=Object.setPrototypeOf||function(i,n){return i.__proto__=n,i},hl(r,t)}function aw(r){var t=sw();return function(){var i=no(r),n;if(t){var a=no(this).constructor;n=Reflect.construct(i,arguments,a)}else n=i.apply(this,arguments);return ow(this,n)}}function ow(r,t){return t&&(va(t)==="object"||typeof t=="function")?t:cl(r)}function cl(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function sw(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function no(r){return no=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},no(r)}function rd(r,t,e){return t in r?Object.defineProperty(r,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):r[t]=e,r}var lw=function(r){nw(e,r);var t=aw(e);function e(){var i;rw(this,e);for(var n=arguments.length,a=new Array(n),o=0;o<n;o++)a[o]=arguments[o];return i=t.call.apply(t,[this].concat(a)),rd(cl(i),"priority",90),rd(cl(i),"incompatibleTokens",["y","R","u","q","Q","M","L","I","d","D","E","i","e","t","T"]),i}return iw(e,[{key:"parse",value:function(n,a,o,s){var l=function(h){var c=Math.floor((h-1)/7)*7;return(h+s.weekStartsOn+6)%7+c};switch(a){case"c":case"cc":return wt(gt(a.length,n),l);case"co":return wt(o.ordinalNumber(n,{unit:"day"}),l);case"ccc":return o.day(n,{width:"abbreviated",context:"standalone"})||o.day(n,{width:"short",context:"standalone"})||o.day(n,{width:"narrow",context:"standalone"});case"ccccc":return o.day(n,{width:"narrow",context:"standalone"});case"cccccc":return o.day(n,{width:"short",context:"standalone"})||o.day(n,{width:"narrow",context:"standalone"});case"cccc":default:return o.day(n,{width:"wide",context:"standalone"})||o.day(n,{width:"abbreviated",context:"standalone"})||o.day(n,{width:"short",context:"standalone"})||o.day(n,{width:"narrow",context:"standalone"})}}},{key:"validate",value:function(n,a){return a>=0&&a<=6}},{key:"set",value:function(n,a,o,s){return n=bu(n,o,s),n.setUTCHours(0,0,0,0),n}}]),e}(rt);function uw(r,t){Ct(2,arguments);var e=Vt(t);e%7===0&&(e=e-7);var i=1,n=$t(r),a=n.getUTCDay(),o=e%7,s=(o+7)%7,l=(s<i?7:0)+e-a;return n.setUTCDate(n.getUTCDate()+l),n}function ma(r){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?ma=function(e){return typeof e}:ma=function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},ma(r)}function hw(r,t){if(!(r instanceof t))throw new TypeError("Cannot call a class as a function")}function id(r,t){for(var e=0;e<t.length;e++){var i=t[e];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(r,i.key,i)}}function cw(r,t,e){return t&&id(r.prototype,t),e&&id(r,e),r}function dw(r,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");r.prototype=Object.create(t&&t.prototype,{constructor:{value:r,writable:!0,configurable:!0}}),t&&dl(r,t)}function dl(r,t){return dl=Object.setPrototypeOf||function(i,n){return i.__proto__=n,i},dl(r,t)}function fw(r){var t=vw();return function(){var i=ao(r),n;if(t){var a=ao(this).constructor;n=Reflect.construct(i,arguments,a)}else n=i.apply(this,arguments);return pw(this,n)}}function pw(r,t){return t&&(ma(t)==="object"||typeof t=="function")?t:fl(r)}function fl(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function vw(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function ao(r){return ao=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},ao(r)}function nd(r,t,e){return t in r?Object.defineProperty(r,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):r[t]=e,r}var mw=function(r){dw(e,r);var t=fw(e);function e(){var i;hw(this,e);for(var n=arguments.length,a=new Array(n),o=0;o<n;o++)a[o]=arguments[o];return i=t.call.apply(t,[this].concat(a)),nd(fl(i),"priority",90),nd(fl(i),"incompatibleTokens",["y","Y","u","q","Q","M","L","w","d","D","E","e","c","t","T"]),i}return cw(e,[{key:"parse",value:function(n,a,o){var s=function(u){return u===0?7:u};switch(a){case"i":case"ii":return gt(a.length,n);case"io":return o.ordinalNumber(n,{unit:"day"});case"iii":return wt(o.day(n,{width:"abbreviated",context:"formatting"})||o.day(n,{width:"short",context:"formatting"})||o.day(n,{width:"narrow",context:"formatting"}),s);case"iiiii":return wt(o.day(n,{width:"narrow",context:"formatting"}),s);case"iiiiii":return wt(o.day(n,{width:"short",context:"formatting"})||o.day(n,{width:"narrow",context:"formatting"}),s);case"iiii":default:return wt(o.day(n,{width:"wide",context:"formatting"})||o.day(n,{width:"abbreviated",context:"formatting"})||o.day(n,{width:"short",context:"formatting"})||o.day(n,{width:"narrow",context:"formatting"}),s)}}},{key:"validate",value:function(n,a){return a>=1&&a<=7}},{key:"set",value:function(n,a,o){return n=uw(n,o),n.setUTCHours(0,0,0,0),n}}]),e}(rt);function _a(r){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?_a=function(e){return typeof e}:_a=function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},_a(r)}function _w(r,t){if(!(r instanceof t))throw new TypeError("Cannot call a class as a function")}function ad(r,t){for(var e=0;e<t.length;e++){var i=t[e];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(r,i.key,i)}}function gw(r,t,e){return t&&ad(r.prototype,t),e&&ad(r,e),r}function yw(r,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");r.prototype=Object.create(t&&t.prototype,{constructor:{value:r,writable:!0,configurable:!0}}),t&&pl(r,t)}function pl(r,t){return pl=Object.setPrototypeOf||function(i,n){return i.__proto__=n,i},pl(r,t)}function bw(r){var t=xw();return function(){var i=oo(r),n;if(t){var a=oo(this).constructor;n=Reflect.construct(i,arguments,a)}else n=i.apply(this,arguments);return ww(this,n)}}function ww(r,t){return t&&(_a(t)==="object"||typeof t=="function")?t:vl(r)}function vl(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function xw(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function oo(r){return oo=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},oo(r)}function od(r,t,e){return t in r?Object.defineProperty(r,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):r[t]=e,r}var Aw=function(r){yw(e,r);var t=bw(e);function e(){var i;_w(this,e);for(var n=arguments.length,a=new Array(n),o=0;o<n;o++)a[o]=arguments[o];return i=t.call.apply(t,[this].concat(a)),od(vl(i),"priority",80),od(vl(i),"incompatibleTokens",["b","B","H","k","t","T"]),i}return gw(e,[{key:"parse",value:function(n,a,o){switch(a){case"a":case"aa":case"aaa":return o.dayPeriod(n,{width:"abbreviated",context:"formatting"})||o.dayPeriod(n,{width:"narrow",context:"formatting"});case"aaaaa":return o.dayPeriod(n,{width:"narrow",context:"formatting"});case"aaaa":default:return o.dayPeriod(n,{width:"wide",context:"formatting"})||o.dayPeriod(n,{width:"abbreviated",context:"formatting"})||o.dayPeriod(n,{width:"narrow",context:"formatting"})}}},{key:"set",value:function(n,a,o){return n.setUTCHours(yu(o),0,0,0),n}}]),e}(rt);function ga(r){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?ga=function(e){return typeof e}:ga=function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},ga(r)}function Ew(r,t){if(!(r instanceof t))throw new TypeError("Cannot call a class as a function")}function sd(r,t){for(var e=0;e<t.length;e++){var i=t[e];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(r,i.key,i)}}function Cw(r,t,e){return t&&sd(r.prototype,t),e&&sd(r,e),r}function Tw(r,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");r.prototype=Object.create(t&&t.prototype,{constructor:{value:r,writable:!0,configurable:!0}}),t&&ml(r,t)}function ml(r,t){return ml=Object.setPrototypeOf||function(i,n){return i.__proto__=n,i},ml(r,t)}function Mw(r){var t=Sw();return function(){var i=so(r),n;if(t){var a=so(this).constructor;n=Reflect.construct(i,arguments,a)}else n=i.apply(this,arguments);return Ow(this,n)}}function Ow(r,t){return t&&(ga(t)==="object"||typeof t=="function")?t:_l(r)}function _l(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function Sw(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function so(r){return so=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},so(r)}function ld(r,t,e){return t in r?Object.defineProperty(r,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):r[t]=e,r}var Iw=function(r){Tw(e,r);var t=Mw(e);function e(){var i;Ew(this,e);for(var n=arguments.length,a=new Array(n),o=0;o<n;o++)a[o]=arguments[o];return i=t.call.apply(t,[this].concat(a)),ld(_l(i),"priority",80),ld(_l(i),"incompatibleTokens",["a","B","H","k","t","T"]),i}return Cw(e,[{key:"parse",value:function(n,a,o){switch(a){case"b":case"bb":case"bbb":return o.dayPeriod(n,{width:"abbreviated",context:"formatting"})||o.dayPeriod(n,{width:"narrow",context:"formatting"});case"bbbbb":return o.dayPeriod(n,{width:"narrow",context:"formatting"});case"bbbb":default:return o.dayPeriod(n,{width:"wide",context:"formatting"})||o.dayPeriod(n,{width:"abbreviated",context:"formatting"})||o.dayPeriod(n,{width:"narrow",context:"formatting"})}}},{key:"set",value:function(n,a,o){return n.setUTCHours(yu(o),0,0,0),n}}]),e}(rt);function ya(r){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?ya=function(e){return typeof e}:ya=function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},ya(r)}function Rw(r,t){if(!(r instanceof t))throw new TypeError("Cannot call a class as a function")}function ud(r,t){for(var e=0;e<t.length;e++){var i=t[e];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(r,i.key,i)}}function Pw(r,t,e){return t&&ud(r.prototype,t),e&&ud(r,e),r}function Dw(r,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");r.prototype=Object.create(t&&t.prototype,{constructor:{value:r,writable:!0,configurable:!0}}),t&&gl(r,t)}function gl(r,t){return gl=Object.setPrototypeOf||function(i,n){return i.__proto__=n,i},gl(r,t)}function kw(r){var t=Fw();return function(){var i=lo(r),n;if(t){var a=lo(this).constructor;n=Reflect.construct(i,arguments,a)}else n=i.apply(this,arguments);return Lw(this,n)}}function Lw(r,t){return t&&(ya(t)==="object"||typeof t=="function")?t:yl(r)}function yl(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function Fw(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function lo(r){return lo=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},lo(r)}function hd(r,t,e){return t in r?Object.defineProperty(r,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):r[t]=e,r}var $w=function(r){Dw(e,r);var t=kw(e);function e(){var i;Rw(this,e);for(var n=arguments.length,a=new Array(n),o=0;o<n;o++)a[o]=arguments[o];return i=t.call.apply(t,[this].concat(a)),hd(yl(i),"priority",80),hd(yl(i),"incompatibleTokens",["a","b","t","T"]),i}return Pw(e,[{key:"parse",value:function(n,a,o){switch(a){case"B":case"BB":case"BBB":return o.dayPeriod(n,{width:"abbreviated",context:"formatting"})||o.dayPeriod(n,{width:"narrow",context:"formatting"});case"BBBBB":return o.dayPeriod(n,{width:"narrow",context:"formatting"});case"BBBB":default:return o.dayPeriod(n,{width:"wide",context:"formatting"})||o.dayPeriod(n,{width:"abbreviated",context:"formatting"})||o.dayPeriod(n,{width:"narrow",context:"formatting"})}}},{key:"set",value:function(n,a,o){return n.setUTCHours(yu(o),0,0,0),n}}]),e}(rt);function ba(r){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?ba=function(e){return typeof e}:ba=function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},ba(r)}function Nw(r,t){if(!(r instanceof t))throw new TypeError("Cannot call a class as a function")}function cd(r,t){for(var e=0;e<t.length;e++){var i=t[e];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(r,i.key,i)}}function Bw(r,t,e){return t&&cd(r.prototype,t),e&&cd(r,e),r}function zw(r,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");r.prototype=Object.create(t&&t.prototype,{constructor:{value:r,writable:!0,configurable:!0}}),t&&bl(r,t)}function bl(r,t){return bl=Object.setPrototypeOf||function(i,n){return i.__proto__=n,i},bl(r,t)}function Gw(r){var t=Uw();return function(){var i=uo(r),n;if(t){var a=uo(this).constructor;n=Reflect.construct(i,arguments,a)}else n=i.apply(this,arguments);return Yw(this,n)}}function Yw(r,t){return t&&(ba(t)==="object"||typeof t=="function")?t:wl(r)}function wl(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function Uw(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function uo(r){return uo=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},uo(r)}function dd(r,t,e){return t in r?Object.defineProperty(r,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):r[t]=e,r}var jw=function(r){zw(e,r);var t=Gw(e);function e(){var i;Nw(this,e);for(var n=arguments.length,a=new Array(n),o=0;o<n;o++)a[o]=arguments[o];return i=t.call.apply(t,[this].concat(a)),dd(wl(i),"priority",70),dd(wl(i),"incompatibleTokens",["H","K","k","t","T"]),i}return Bw(e,[{key:"parse",value:function(n,a,o){switch(a){case"h":return _t(bt.hour12h,n);case"ho":return o.ordinalNumber(n,{unit:"hour"});default:return gt(a.length,n)}}},{key:"validate",value:function(n,a){return a>=1&&a<=12}},{key:"set",value:function(n,a,o){var s=n.getUTCHours()>=12;return s&&o<12?n.setUTCHours(o+12,0,0,0):!s&&o===12?n.setUTCHours(0,0,0,0):n.setUTCHours(o,0,0,0),n}}]),e}(rt);function wa(r){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?wa=function(e){return typeof e}:wa=function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},wa(r)}function Ww(r,t){if(!(r instanceof t))throw new TypeError("Cannot call a class as a function")}function fd(r,t){for(var e=0;e<t.length;e++){var i=t[e];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(r,i.key,i)}}function Vw(r,t,e){return t&&fd(r.prototype,t),e&&fd(r,e),r}function qw(r,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");r.prototype=Object.create(t&&t.prototype,{constructor:{value:r,writable:!0,configurable:!0}}),t&&xl(r,t)}function xl(r,t){return xl=Object.setPrototypeOf||function(i,n){return i.__proto__=n,i},xl(r,t)}function Hw(r){var t=Zw();return function(){var i=ho(r),n;if(t){var a=ho(this).constructor;n=Reflect.construct(i,arguments,a)}else n=i.apply(this,arguments);return Xw(this,n)}}function Xw(r,t){return t&&(wa(t)==="object"||typeof t=="function")?t:Al(r)}function Al(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function Zw(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function ho(r){return ho=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},ho(r)}function pd(r,t,e){return t in r?Object.defineProperty(r,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):r[t]=e,r}var Qw=function(r){qw(e,r);var t=Hw(e);function e(){var i;Ww(this,e);for(var n=arguments.length,a=new Array(n),o=0;o<n;o++)a[o]=arguments[o];return i=t.call.apply(t,[this].concat(a)),pd(Al(i),"priority",70),pd(Al(i),"incompatibleTokens",["a","b","h","K","k","t","T"]),i}return Vw(e,[{key:"parse",value:function(n,a,o){switch(a){case"H":return _t(bt.hour23h,n);case"Ho":return o.ordinalNumber(n,{unit:"hour"});default:return gt(a.length,n)}}},{key:"validate",value:function(n,a){return a>=0&&a<=23}},{key:"set",value:function(n,a,o){return n.setUTCHours(o,0,0,0),n}}]),e}(rt);function xa(r){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?xa=function(e){return typeof e}:xa=function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},xa(r)}function Kw(r,t){if(!(r instanceof t))throw new TypeError("Cannot call a class as a function")}function vd(r,t){for(var e=0;e<t.length;e++){var i=t[e];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(r,i.key,i)}}function Jw(r,t,e){return t&&vd(r.prototype,t),e&&vd(r,e),r}function t1(r,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");r.prototype=Object.create(t&&t.prototype,{constructor:{value:r,writable:!0,configurable:!0}}),t&&El(r,t)}function El(r,t){return El=Object.setPrototypeOf||function(i,n){return i.__proto__=n,i},El(r,t)}function e1(r){var t=i1();return function(){var i=co(r),n;if(t){var a=co(this).constructor;n=Reflect.construct(i,arguments,a)}else n=i.apply(this,arguments);return r1(this,n)}}function r1(r,t){return t&&(xa(t)==="object"||typeof t=="function")?t:Cl(r)}function Cl(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function i1(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function co(r){return co=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},co(r)}function md(r,t,e){return t in r?Object.defineProperty(r,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):r[t]=e,r}var n1=function(r){t1(e,r);var t=e1(e);function e(){var i;Kw(this,e);for(var n=arguments.length,a=new Array(n),o=0;o<n;o++)a[o]=arguments[o];return i=t.call.apply(t,[this].concat(a)),md(Cl(i),"priority",70),md(Cl(i),"incompatibleTokens",["h","H","k","t","T"]),i}return Jw(e,[{key:"parse",value:function(n,a,o){switch(a){case"K":return _t(bt.hour11h,n);case"Ko":return o.ordinalNumber(n,{unit:"hour"});default:return gt(a.length,n)}}},{key:"validate",value:function(n,a){return a>=0&&a<=11}},{key:"set",value:function(n,a,o){var s=n.getUTCHours()>=12;return s&&o<12?n.setUTCHours(o+12,0,0,0):n.setUTCHours(o,0,0,0),n}}]),e}(rt);function Aa(r){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?Aa=function(e){return typeof e}:Aa=function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Aa(r)}function a1(r,t){if(!(r instanceof t))throw new TypeError("Cannot call a class as a function")}function _d(r,t){for(var e=0;e<t.length;e++){var i=t[e];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(r,i.key,i)}}function o1(r,t,e){return t&&_d(r.prototype,t),e&&_d(r,e),r}function s1(r,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");r.prototype=Object.create(t&&t.prototype,{constructor:{value:r,writable:!0,configurable:!0}}),t&&Tl(r,t)}function Tl(r,t){return Tl=Object.setPrototypeOf||function(i,n){return i.__proto__=n,i},Tl(r,t)}function l1(r){var t=h1();return function(){var i=fo(r),n;if(t){var a=fo(this).constructor;n=Reflect.construct(i,arguments,a)}else n=i.apply(this,arguments);return u1(this,n)}}function u1(r,t){return t&&(Aa(t)==="object"||typeof t=="function")?t:Ml(r)}function Ml(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function h1(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function fo(r){return fo=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},fo(r)}function gd(r,t,e){return t in r?Object.defineProperty(r,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):r[t]=e,r}var c1=function(r){s1(e,r);var t=l1(e);function e(){var i;a1(this,e);for(var n=arguments.length,a=new Array(n),o=0;o<n;o++)a[o]=arguments[o];return i=t.call.apply(t,[this].concat(a)),gd(Ml(i),"priority",70),gd(Ml(i),"incompatibleTokens",["a","b","h","H","K","t","T"]),i}return o1(e,[{key:"parse",value:function(n,a,o){switch(a){case"k":return _t(bt.hour24h,n);case"ko":return o.ordinalNumber(n,{unit:"hour"});default:return gt(a.length,n)}}},{key:"validate",value:function(n,a){return a>=1&&a<=24}},{key:"set",value:function(n,a,o){var s=o<=24?o%24:o;return n.setUTCHours(s,0,0,0),n}}]),e}(rt);function Ea(r){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?Ea=function(e){return typeof e}:Ea=function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Ea(r)}function d1(r,t){if(!(r instanceof t))throw new TypeError("Cannot call a class as a function")}function yd(r,t){for(var e=0;e<t.length;e++){var i=t[e];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(r,i.key,i)}}function f1(r,t,e){return t&&yd(r.prototype,t),e&&yd(r,e),r}function p1(r,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");r.prototype=Object.create(t&&t.prototype,{constructor:{value:r,writable:!0,configurable:!0}}),t&&Ol(r,t)}function Ol(r,t){return Ol=Object.setPrototypeOf||function(i,n){return i.__proto__=n,i},Ol(r,t)}function v1(r){var t=_1();return function(){var i=po(r),n;if(t){var a=po(this).constructor;n=Reflect.construct(i,arguments,a)}else n=i.apply(this,arguments);return m1(this,n)}}function m1(r,t){return t&&(Ea(t)==="object"||typeof t=="function")?t:Sl(r)}function Sl(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function _1(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function po(r){return po=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},po(r)}function bd(r,t,e){return t in r?Object.defineProperty(r,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):r[t]=e,r}var g1=function(r){p1(e,r);var t=v1(e);function e(){var i;d1(this,e);for(var n=arguments.length,a=new Array(n),o=0;o<n;o++)a[o]=arguments[o];return i=t.call.apply(t,[this].concat(a)),bd(Sl(i),"priority",60),bd(Sl(i),"incompatibleTokens",["t","T"]),i}return f1(e,[{key:"parse",value:function(n,a,o){switch(a){case"m":return _t(bt.minute,n);case"mo":return o.ordinalNumber(n,{unit:"minute"});default:return gt(a.length,n)}}},{key:"validate",value:function(n,a){return a>=0&&a<=59}},{key:"set",value:function(n,a,o){return n.setUTCMinutes(o,0,0),n}}]),e}(rt);function Ca(r){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?Ca=function(e){return typeof e}:Ca=function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Ca(r)}function y1(r,t){if(!(r instanceof t))throw new TypeError("Cannot call a class as a function")}function wd(r,t){for(var e=0;e<t.length;e++){var i=t[e];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(r,i.key,i)}}function b1(r,t,e){return t&&wd(r.prototype,t),e&&wd(r,e),r}function w1(r,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");r.prototype=Object.create(t&&t.prototype,{constructor:{value:r,writable:!0,configurable:!0}}),t&&Il(r,t)}function Il(r,t){return Il=Object.setPrototypeOf||function(i,n){return i.__proto__=n,i},Il(r,t)}function x1(r){var t=E1();return function(){var i=vo(r),n;if(t){var a=vo(this).constructor;n=Reflect.construct(i,arguments,a)}else n=i.apply(this,arguments);return A1(this,n)}}function A1(r,t){return t&&(Ca(t)==="object"||typeof t=="function")?t:Rl(r)}function Rl(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function E1(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function vo(r){return vo=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},vo(r)}function xd(r,t,e){return t in r?Object.defineProperty(r,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):r[t]=e,r}var C1=function(r){w1(e,r);var t=x1(e);function e(){var i;y1(this,e);for(var n=arguments.length,a=new Array(n),o=0;o<n;o++)a[o]=arguments[o];return i=t.call.apply(t,[this].concat(a)),xd(Rl(i),"priority",50),xd(Rl(i),"incompatibleTokens",["t","T"]),i}return b1(e,[{key:"parse",value:function(n,a,o){switch(a){case"s":return _t(bt.second,n);case"so":return o.ordinalNumber(n,{unit:"second"});default:return gt(a.length,n)}}},{key:"validate",value:function(n,a){return a>=0&&a<=59}},{key:"set",value:function(n,a,o){return n.setUTCSeconds(o,0),n}}]),e}(rt);function Ta(r){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?Ta=function(e){return typeof e}:Ta=function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Ta(r)}function T1(r,t){if(!(r instanceof t))throw new TypeError("Cannot call a class as a function")}function Ad(r,t){for(var e=0;e<t.length;e++){var i=t[e];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(r,i.key,i)}}function M1(r,t,e){return t&&Ad(r.prototype,t),e&&Ad(r,e),r}function O1(r,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");r.prototype=Object.create(t&&t.prototype,{constructor:{value:r,writable:!0,configurable:!0}}),t&&Pl(r,t)}function Pl(r,t){return Pl=Object.setPrototypeOf||function(i,n){return i.__proto__=n,i},Pl(r,t)}function S1(r){var t=R1();return function(){var i=mo(r),n;if(t){var a=mo(this).constructor;n=Reflect.construct(i,arguments,a)}else n=i.apply(this,arguments);return I1(this,n)}}function I1(r,t){return t&&(Ta(t)==="object"||typeof t=="function")?t:Dl(r)}function Dl(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function R1(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function mo(r){return mo=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},mo(r)}function Ed(r,t,e){return t in r?Object.defineProperty(r,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):r[t]=e,r}var P1=function(r){O1(e,r);var t=S1(e);function e(){var i;T1(this,e);for(var n=arguments.length,a=new Array(n),o=0;o<n;o++)a[o]=arguments[o];return i=t.call.apply(t,[this].concat(a)),Ed(Dl(i),"priority",30),Ed(Dl(i),"incompatibleTokens",["t","T"]),i}return M1(e,[{key:"parse",value:function(n,a){var o=function(l){return Math.floor(l*Math.pow(10,-a.length+3))};return wt(gt(a.length,n),o)}},{key:"set",value:function(n,a,o){return n.setUTCMilliseconds(o),n}}]),e}(rt);function Ma(r){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?Ma=function(e){return typeof e}:Ma=function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Ma(r)}function D1(r,t){if(!(r instanceof t))throw new TypeError("Cannot call a class as a function")}function Cd(r,t){for(var e=0;e<t.length;e++){var i=t[e];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(r,i.key,i)}}function k1(r,t,e){return t&&Cd(r.prototype,t),e&&Cd(r,e),r}function L1(r,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");r.prototype=Object.create(t&&t.prototype,{constructor:{value:r,writable:!0,configurable:!0}}),t&&kl(r,t)}function kl(r,t){return kl=Object.setPrototypeOf||function(i,n){return i.__proto__=n,i},kl(r,t)}function F1(r){var t=N1();return function(){var i=_o(r),n;if(t){var a=_o(this).constructor;n=Reflect.construct(i,arguments,a)}else n=i.apply(this,arguments);return $1(this,n)}}function $1(r,t){return t&&(Ma(t)==="object"||typeof t=="function")?t:Ll(r)}function Ll(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function N1(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function _o(r){return _o=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},_o(r)}function Td(r,t,e){return t in r?Object.defineProperty(r,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):r[t]=e,r}var B1=function(r){L1(e,r);var t=F1(e);function e(){var i;D1(this,e);for(var n=arguments.length,a=new Array(n),o=0;o<n;o++)a[o]=arguments[o];return i=t.call.apply(t,[this].concat(a)),Td(Ll(i),"priority",10),Td(Ll(i),"incompatibleTokens",["t","T","x"]),i}return k1(e,[{key:"parse",value:function(n,a){switch(a){case"X":return ge(_e.basicOptionalMinutes,n);case"XX":return ge(_e.basic,n);case"XXXX":return ge(_e.basicOptionalSeconds,n);case"XXXXX":return ge(_e.extendedOptionalSeconds,n);case"XXX":default:return ge(_e.extended,n)}}},{key:"set",value:function(n,a,o){return a.timestampIsSet?n:new Date(n.getTime()-o)}}]),e}(rt);function Oa(r){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?Oa=function(e){return typeof e}:Oa=function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Oa(r)}function z1(r,t){if(!(r instanceof t))throw new TypeError("Cannot call a class as a function")}function Md(r,t){for(var e=0;e<t.length;e++){var i=t[e];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(r,i.key,i)}}function G1(r,t,e){return t&&Md(r.prototype,t),e&&Md(r,e),r}function Y1(r,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");r.prototype=Object.create(t&&t.prototype,{constructor:{value:r,writable:!0,configurable:!0}}),t&&Fl(r,t)}function Fl(r,t){return Fl=Object.setPrototypeOf||function(i,n){return i.__proto__=n,i},Fl(r,t)}function U1(r){var t=W1();return function(){var i=go(r),n;if(t){var a=go(this).constructor;n=Reflect.construct(i,arguments,a)}else n=i.apply(this,arguments);return j1(this,n)}}function j1(r,t){return t&&(Oa(t)==="object"||typeof t=="function")?t:$l(r)}function $l(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function W1(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function go(r){return go=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},go(r)}function Od(r,t,e){return t in r?Object.defineProperty(r,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):r[t]=e,r}var V1=function(r){Y1(e,r);var t=U1(e);function e(){var i;z1(this,e);for(var n=arguments.length,a=new Array(n),o=0;o<n;o++)a[o]=arguments[o];return i=t.call.apply(t,[this].concat(a)),Od($l(i),"priority",10),Od($l(i),"incompatibleTokens",["t","T","X"]),i}return G1(e,[{key:"parse",value:function(n,a){switch(a){case"x":return ge(_e.basicOptionalMinutes,n);case"xx":return ge(_e.basic,n);case"xxxx":return ge(_e.basicOptionalSeconds,n);case"xxxxx":return ge(_e.extendedOptionalSeconds,n);case"xxx":default:return ge(_e.extended,n)}}},{key:"set",value:function(n,a,o){return a.timestampIsSet?n:new Date(n.getTime()-o)}}]),e}(rt);function Sa(r){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?Sa=function(e){return typeof e}:Sa=function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Sa(r)}function q1(r,t){if(!(r instanceof t))throw new TypeError("Cannot call a class as a function")}function Sd(r,t){for(var e=0;e<t.length;e++){var i=t[e];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(r,i.key,i)}}function H1(r,t,e){return t&&Sd(r.prototype,t),e&&Sd(r,e),r}function X1(r,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");r.prototype=Object.create(t&&t.prototype,{constructor:{value:r,writable:!0,configurable:!0}}),t&&Nl(r,t)}function Nl(r,t){return Nl=Object.setPrototypeOf||function(i,n){return i.__proto__=n,i},Nl(r,t)}function Z1(r){var t=K1();return function(){var i=yo(r),n;if(t){var a=yo(this).constructor;n=Reflect.construct(i,arguments,a)}else n=i.apply(this,arguments);return Q1(this,n)}}function Q1(r,t){return t&&(Sa(t)==="object"||typeof t=="function")?t:Bl(r)}function Bl(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function K1(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function yo(r){return yo=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},yo(r)}function Id(r,t,e){return t in r?Object.defineProperty(r,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):r[t]=e,r}var J1=function(r){X1(e,r);var t=Z1(e);function e(){var i;q1(this,e);for(var n=arguments.length,a=new Array(n),o=0;o<n;o++)a[o]=arguments[o];return i=t.call.apply(t,[this].concat(a)),Id(Bl(i),"priority",40),Id(Bl(i),"incompatibleTokens","*"),i}return H1(e,[{key:"parse",value:function(n){return Up(n)}},{key:"set",value:function(n,a,o){return[new Date(o*1e3),{timestampIsSet:!0}]}}]),e}(rt);function Ia(r){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?Ia=function(e){return typeof e}:Ia=function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Ia(r)}function tx(r,t){if(!(r instanceof t))throw new TypeError("Cannot call a class as a function")}function Rd(r,t){for(var e=0;e<t.length;e++){var i=t[e];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(r,i.key,i)}}function ex(r,t,e){return t&&Rd(r.prototype,t),e&&Rd(r,e),r}function rx(r,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");r.prototype=Object.create(t&&t.prototype,{constructor:{value:r,writable:!0,configurable:!0}}),t&&zl(r,t)}function zl(r,t){return zl=Object.setPrototypeOf||function(i,n){return i.__proto__=n,i},zl(r,t)}function ix(r){var t=ax();return function(){var i=bo(r),n;if(t){var a=bo(this).constructor;n=Reflect.construct(i,arguments,a)}else n=i.apply(this,arguments);return nx(this,n)}}function nx(r,t){return t&&(Ia(t)==="object"||typeof t=="function")?t:Gl(r)}function Gl(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function ax(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function bo(r){return bo=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},bo(r)}function Pd(r,t,e){return t in r?Object.defineProperty(r,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):r[t]=e,r}var ox=function(r){rx(e,r);var t=ix(e);function e(){var i;tx(this,e);for(var n=arguments.length,a=new Array(n),o=0;o<n;o++)a[o]=arguments[o];return i=t.call.apply(t,[this].concat(a)),Pd(Gl(i),"priority",20),Pd(Gl(i),"incompatibleTokens","*"),i}return ex(e,[{key:"parse",value:function(n){return Up(n)}},{key:"set",value:function(n,a,o){return[new Date(o),{timestampIsSet:!0}]}}]),e}(rt),sx={G:new n0,y:new p0,Y:new w0,R:new O0,u:new L0,Q:new Y0,q:new X0,M:new rb,L:new ub,w:new _b,I:new Cb,d:new kb,D:new Gb,E:new Hb,e:new ew,c:new lw,i:new mw,a:new Aw,b:new Iw,B:new $w,h:new jw,H:new Qw,K:new n1,k:new c1,m:new g1,s:new C1,S:new P1,X:new B1,x:new V1,t:new J1,T:new ox};function Ra(r){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?Ra=function(e){return typeof e}:Ra=function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Ra(r)}function Dd(r,t){var e;if(typeof Symbol>"u"||r[Symbol.iterator]==null){if(Array.isArray(r)||(e=lx(r))||t&&r&&typeof r.length=="number"){e&&(r=e);var i=0,n=function(){};return{s:n,n:function(){return i>=r.length?{done:!0}:{done:!1,value:r[i++]}},e:function(u){throw u},f:n}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var a=!0,o=!1,s;return{s:function(){e=r[Symbol.iterator]()},n:function(){var u=e.next();return a=u.done,u},e:function(u){o=!0,s=u},f:function(){try{!a&&e.return!=null&&e.return()}finally{if(o)throw s}}}}function lx(r,t){if(r){if(typeof r=="string")return kd(r,t);var e=Object.prototype.toString.call(r).slice(8,-1);if(e==="Object"&&r.constructor&&(e=r.constructor.name),e==="Map"||e==="Set")return Array.from(r);if(e==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return kd(r,t)}}function kd(r,t){(t==null||t>r.length)&&(t=r.length);for(var e=0,i=new Array(t);e<t;e++)i[e]=r[e];return i}var ux=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,hx=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,cx=/^'([^]*?)'?$/,dx=/''/g,fx=/\S/,px=/[a-zA-Z]/;function Ld(r,t,e,i){var n,a,o,s,l,u,h,c,d,f,p,v,m,_,g,y,b,w;Ct(3,arguments);var x=String(r),E=String(t),A=di(),M=(n=(a=i==null?void 0:i.locale)!==null&&a!==void 0?a:A.locale)!==null&&n!==void 0?n:Bp;if(!M.match)throw new RangeError("locale must contain match property");var I=Vt((o=(s=(l=(u=i==null?void 0:i.firstWeekContainsDate)!==null&&u!==void 0?u:i==null||(h=i.locale)===null||h===void 0||(c=h.options)===null||c===void 0?void 0:c.firstWeekContainsDate)!==null&&l!==void 0?l:A.firstWeekContainsDate)!==null&&s!==void 0?s:(d=A.locale)===null||d===void 0||(f=d.options)===null||f===void 0?void 0:f.firstWeekContainsDate)!==null&&o!==void 0?o:1);if(!(I>=1&&I<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var k=Vt((p=(v=(m=(_=i==null?void 0:i.weekStartsOn)!==null&&_!==void 0?_:i==null||(g=i.locale)===null||g===void 0||(y=g.options)===null||y===void 0?void 0:y.weekStartsOn)!==null&&m!==void 0?m:A.weekStartsOn)!==null&&v!==void 0?v:(b=A.locale)===null||b===void 0||(w=b.options)===null||w===void 0?void 0:w.weekStartsOn)!==null&&p!==void 0?p:0);if(!(k>=0&&k<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");if(E==="")return x===""?$t(e):new Date(NaN);var N={firstWeekContainsDate:I,weekStartsOn:k,locale:M},F=[new Xy],j=E.match(hx).map(function(tt){var H=tt[0];if(H in Ps){var Tt=Ps[H];return Tt(tt,M.formatLong)}return tt}).join("").match(ux),D=[],B=Dd(j),$;try{var K=function(){var H=$.value;!(i!=null&&i.useAdditionalWeekYearTokens)&&Np(H)&&za(H,E,r),!(i!=null&&i.useAdditionalDayOfYearTokens)&&$p(H)&&za(H,E,r);var Tt=H[0],Nt=sx[Tt];if(Nt){var hr=Nt.incompatibleTokens;if(Array.isArray(hr)){var cr=D.find(function(Se){return hr.includes(Se.token)||Se.token===Tt});if(cr)throw new RangeError("The format string mustn't contain `".concat(cr.fullToken,"` and `").concat(H,"` at the same time"))}else if(Nt.incompatibleTokens==="*"&&D.length>0)throw new RangeError("The format string mustn't contain `".concat(H,"` and any other token at the same time"));D.push({token:Tt,fullToken:H});var te=Nt.run(x,H,M.match,N);if(!te)return{v:new Date(NaN)};F.push(te.setter),x=te.rest}else{if(Tt.match(px))throw new RangeError("Format string contains an unescaped latin alphabet character `"+Tt+"`");if(H==="''"?H="'":Tt==="'"&&(H=vx(H)),x.indexOf(H)===0)x=x.slice(H.length);else return{v:new Date(NaN)}}};for(B.s();!($=B.n()).done;){var q=K();if(Ra(q)==="object")return q.v}}catch(tt){B.e(tt)}finally{B.f()}if(x.length>0&&fx.test(x))return new Date(NaN);var Q=F.map(function(tt){return tt.priority}).sort(function(tt,H){return H-tt}).filter(function(tt,H,Tt){return Tt.indexOf(tt)===H}).map(function(tt){return F.filter(function(H){return H.priority===tt}).sort(function(H,Tt){return Tt.subPriority-H.subPriority})}).map(function(tt){return tt[0]}),lt=$t(e);if(isNaN(lt.getTime()))return new Date(NaN);var C=Rp(lt,Fp(lt)),dt={},Y=Dd(Q),ft;try{for(Y.s();!(ft=Y.n()).done;){var Ot=ft.value;if(!Ot.validate(C,N))return new Date(NaN);var St=Ot.set(C,dt,N);Array.isArray(St)?(C=St[0],jy(dt,St[1])):C=St}}catch(tt){Y.e(tt)}finally{Y.f()}return C}function vx(r){return r.match(cx)[1].replace(dx,"'")}(function(){const r=function(t){return window.Vaadin.Flow.tryCatchWrapper(t,"Vaadin Date Picker")};window.Vaadin.Flow.datepickerConnector={initLazy:t=>r(function(e){if(e.$connector)return;e.$connector={};const i=function(o){try{new Date().toLocaleDateString(o)}catch{return console.warn("The locale is not supported, using default format setting (ISO 8601)."),"yyyy-MM-dd"}let l=new Date(Date.UTC(1234,4,6)).toLocaleDateString(o,{timeZone:"UTC"});return l=l.replace(/([a-zA-Z]+)/g,"'$1'").replace("06","dd").replace("6","d").replace("05","MM").replace("5","M").replace("1234","yyyy"),l.includes("d")&&l.includes("M")&&l.includes("y")?l:(console.warn("The locale is not supported, using default format setting (ISO 8601)."),"yyyy-MM-dd")},n=r(function(o){if(!o||o.length===0)throw new Error("Array of custom date formats is null or empty");function s(c){if(c.includes("yyyy")&&!c.includes("yyyyy"))return c.replace("yyyy","yy");if(c.includes("YYYY")&&!c.includes("YYYYY"))return c.replace("YYYY","YY")}function l(c){return c.includes("y")?!c.includes("yyy"):c.includes("Y")?!c.includes("YYY"):!1}function u(c){const d=o[0],f=yr(`${c.year}-${c.month+1}-${c.day}`);return Yy(f,d)}function h(c){const d=a();for(let f of o){const p=s(f);if(p){const m=Ld(c,p,d);if(Rs(m)){let _=m.getFullYear();return e.$connector._lastParsedYear&&_===e.$connector._lastParsedYear%100&&(_=e.$connector._lastParsedYear),{day:m.getDate(),month:m.getMonth(),year:_}}}const v=Ld(c,f,d);if(Rs(v)){let m=v.getFullYear();return e.$connector._lastParsedYear&&m%100===e.$connector._lastParsedYear%100&&l(f)?m=e.$connector._lastParsedYear:e.$connector._lastParsedYear=m,{day:v.getDate(),month:v.getMonth(),year:m}}}return e.$connector._lastParsedYear=void 0,!1}return{formatDate:u,parseDate:h}});function a(){const{referenceDate:o}=e.i18n;return o?new Date(o.year,o.month,o.day):new Date}e.$connector.updateI18n=r(function(o,s){const l=s&&s.dateFormats&&s.dateFormats.length>0;s&&s.referenceDate&&(s.referenceDate=fu(new Date(s.referenceDate)));const u=l?s.dateFormats:[i(o)],h=n(u);e.i18n=Object.assign({},e.i18n,s,h)})})(t)}})();/**
 * @license
 * Copyright 2000-2023 Vaadin Ltd.
 *
 * This program is available under Vaadin Commercial License and Service Terms.
 *
 * See <https://vaadin.com/commercial-license-and-service-terms> for the full
 * license.
 */(function(){const r=function(e){return window.Vaadin.Flow.tryCatchWrapper(e,"Vaadin Grid Pro")};function t(e,i){return e.__edited&&e.__edited.model.item.key===i.item.key}window.Vaadin.Flow.gridProConnector={selectAll:e=>{e instanceof HTMLInputElement?e.select():e.focusElement&&e.focusElement instanceof HTMLInputElement&&e.focusElement.select()},setEditModeRenderer:(e,i)=>r(function(n,a){n.editModeRenderer=r(function(s,l,u){if(!t(this._grid,u)){this._grid._stopEdit();return}a.parentNode!==s&&(s.appendChild(a),this._grid._cancelStopEdit(),a.focus())}),n._setEditorValue=function(o,s){},n._getEditorValue=function(o){}})(e,i),patchEditModeRenderer:e=>r(function(i){i.__editModeRenderer=r(function(a,o,s){const l=a.assignedSlot.parentNode,u=o._grid;if(!t(u,s)){u._stopEdit();return}const h=o._getEditorTagName(l);(!a.firstElementChild||a.firstElementChild.localName.toLowerCase()!==h)&&(a.innerHTML=`<${h}></${h}>`)})})(e)}})();(function(){const r=function(e){return window.Vaadin.Flow.tryCatchWrapper(e,"Vaadin Menu Bar")};function t(e,i){if(e.$connector)return;const n=new MutationObserver(a=>{a.some(s=>{const l=s.oldValue,u=s.target.getAttribute(s.attributeName);return l!==u})&&e.$connector.generateItems()});e.$connector={generateItems:r(a=>{if(!e.shadowRoot){setTimeout(()=>e.$connector.generateItems(a));return}a&&(e.__generatedItems=window.Vaadin.Flow.contextMenuConnector.generateItemsTree(i,a));let o=e.__generatedItems||[];o.forEach(s=>s.disabled=s.component.disabled),o=o.filter(s=>!s.component.hidden),o.forEach(s=>{n.observe(s.component,{attributeFilter:["hidden","disabled"],attributeOldValue:!0})}),e.items=o,e._buttons.forEach(s=>{s.item&&s.item.component&&s.addEventListener("click",l=>{l.composedPath().indexOf(s.item.component)===-1&&(s.item.component.click(),l.stopPropagation())})})})}}window.Vaadin.Flow.menubarConnector={initLazy(...e){return r(t)(...e)}}})();(function(){const r=function(t){return window.Vaadin.Flow.tryCatchWrapper(t,"Vaadin Message List")};window.Vaadin.Flow.messageListConnector={setItems:(t,e,i)=>r(function(n,a,o){const s=new Intl.DateTimeFormat(o,{year:"numeric",month:"short",day:"numeric",hour:"numeric",minute:"numeric"});n.items=a.map(l=>l.time?Object.assign(l,{time:s.format(new Date(l.time))}):l)})(t,e,i)}})();(function(){const r=function(t){return window.Vaadin.Flow.tryCatchWrapper(t,"Vaadin Select")};window.Vaadin.Flow.selectConnector={initLazy:t=>r(function(e){const i=r(function(){for(let n=0;n<e.childElementCount;n++){const a=e.children[n];if(a.tagName.toUpperCase()==="VAADIN-SELECT-LIST-BOX")return a}});e.$connector||(e.$connector={},e.renderer=r(function(n){const a=i();a&&(n.firstChild&&n.removeChild(n.firstChild),n.appendChild(a))}))})(t)}})();const Ui=window;Ui.Vaadin=Ui.Vaadin||{};Ui.Vaadin.Flow=Ui.Vaadin.Flow||{};Ui.Vaadin.Flow.tooltip={setDefaultHideDelay:r=>ls.setDefaultHideDelay(r),setDefaultFocusDelay:r=>ls.setDefaultFocusDelay(r),setDefaultHoverDelay:r=>ls.setDefaultHoverDelay(r)};(function(){let r;customElements.whenDefined("vaadin-text-field").then(()=>{class t extends customElements.get("vaadin-text-field"){static get template(){return r||(r=super.template.cloneNode(!0),r.innerHTML+=`<style>
                  :host {
                    width: 8em;
                  }

                  :host([dir="rtl"]) [part="input-field"] {
                    direction: ltr;
                  }

                  :host([dir="rtl"]) [part="input-field"] ::slotted(input) {
                    --_lumo-text-field-overflow-mask-image: linear-gradient(to left, transparent, #000 1.25em) !important;
                  }
            </style>`),r}static get is(){return"vaadin-big-decimal-field"}static get properties(){return{_decimalSeparator:{type:String,value:".",observer:"__decimalSeparatorChanged"}}}ready(){super.ready(),this.inputElement.setAttribute("inputmode","decimal")}__decimalSeparatorChanged(i,n){this.allowedCharPattern="[-+\\d"+i+"]",this.value&&n&&(this.value=this.value.split(n).join(i))}}customElements.define(t.is,t)})})();var fi={RADIANS:"radians",DEGREES:"degrees",FEET:"ft",METERS:"m",PIXELS:"pixels",TILE_PIXELS:"tile-pixels",USFEET:"us-ft"},ae={};ae[fi.RADIANS]=6370997/(2*Math.PI);ae[fi.DEGREES]=2*Math.PI*6370997/360;ae[fi.FEET]=.3048;ae[fi.METERS]=1;ae[fi.USFEET]=1200/3937;const Fe=fi;var mx=function(){function r(t){this.code_=t.code,this.units_=t.units,this.extent_=t.extent!==void 0?t.extent:null,this.worldExtent_=t.worldExtent!==void 0?t.worldExtent:null,this.axisOrientation_=t.axisOrientation!==void 0?t.axisOrientation:"enu",this.global_=t.global!==void 0?t.global:!1,this.canWrapX_=!!(this.global_&&this.extent_),this.getPointResolutionFunc_=t.getPointResolution,this.defaultTileGrid_=null,this.metersPerUnit_=t.metersPerUnit}return r.prototype.canWrapX=function(){return this.canWrapX_},r.prototype.getCode=function(){return this.code_},r.prototype.getExtent=function(){return this.extent_},r.prototype.getUnits=function(){return this.units_},r.prototype.getMetersPerUnit=function(){return this.metersPerUnit_||ae[this.units_]},r.prototype.getWorldExtent=function(){return this.worldExtent_},r.prototype.getAxisOrientation=function(){return this.axisOrientation_},r.prototype.isGlobal=function(){return this.global_},r.prototype.setGlobal=function(t){this.global_=t,this.canWrapX_=!!(t&&this.extent_)},r.prototype.getDefaultTileGrid=function(){return this.defaultTileGrid_},r.prototype.setDefaultTileGrid=function(t){this.defaultTileGrid_=t},r.prototype.setExtent=function(t){this.extent_=t,this.canWrapX_=!!(this.global_&&t)},r.prototype.setWorldExtent=function(t){this.worldExtent_=t},r.prototype.setGetPointResolution=function(t){this.getPointResolutionFunc_=t},r.prototype.getPointResolutionFunc=function(){return this.getPointResolutionFunc_},r}();const wu=mx;function xt(r,t,e){return Math.min(Math.max(r,t),e)}var _x=function(){var r;return"cosh"in Math?r=Math.cosh:r=function(t){var e=Math.exp(t);return(e+1/e)/2},r}(),gx=function(){var r;return"log2"in Math?r=Math.log2:r=function(t){return Math.log(t)*Math.LOG2E},r}();function yx(r,t,e,i,n,a){var o=n-e,s=a-i;if(o!==0||s!==0){var l=((r-e)*o+(t-i)*s)/(o*o+s*s);l>1?(e=n,i=a):l>0&&(e+=o*l,i+=s*l)}return Qr(r,t,e,i)}function Qr(r,t,e,i){var n=e-r,a=i-t;return n*n+a*a}function bx(r){for(var t=r.length,e=0;e<t;e++){for(var i=e,n=Math.abs(r[e][e]),a=e+1;a<t;a++){var o=Math.abs(r[a][e]);o>n&&(n=o,i=a)}if(n===0)return null;var s=r[i];r[i]=r[e],r[e]=s;for(var l=e+1;l<t;l++)for(var u=-r[l][e]/r[e][e],h=e;h<t+1;h++)e==h?r[l][h]=0:r[l][h]+=u*r[e][h]}for(var c=new Array(t),d=t-1;d>=0;d--){c[d]=r[d][t]/r[d][d];for(var f=d-1;f>=0;f--)r[f][t]-=r[f][d]*c[d]}return c}function Pa(r){return r*Math.PI/180}function Ar(r,t){var e=r%t;return e*t<0?e+t:e}function _r(r,t,e){return r+e*(t-r)}function xu(r,t){var e=Math.pow(10,t);return Math.round(r*e)/e}function Fd(r,t){return Math.round(xu(r,t))}function Ur(r,t){return Math.floor(xu(r,t))}function Ke(r,t){return Math.ceil(xu(r,t))}var wx=globalThis&&globalThis.__extends||function(){var r=function(t,e){return r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(i,n){i.__proto__=n}||function(i,n){for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(i[a]=n[a])},r(t,e)};return function(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");r(t,e);function i(){this.constructor=t}t.prototype=e===null?Object.create(e):(i.prototype=e.prototype,new i)}}(),pn=6378137,jr=Math.PI*pn,xx=[-jr,-jr,jr,jr],Ax=[-180,-85,180,85],Bn=pn*Math.log(Math.tan(Math.PI/2)),Fr=function(r){wx(t,r);function t(e){return r.call(this,{code:e,units:Fe.METERS,extent:xx,global:!0,worldExtent:Ax,getPointResolution:function(i,n){return i/_x(n[1]/pn)}})||this}return t}(wu),$d=[new Fr("EPSG:3857"),new Fr("EPSG:102100"),new Fr("EPSG:102113"),new Fr("EPSG:900913"),new Fr("http://www.opengis.net/def/crs/EPSG/0/3857"),new Fr("http://www.opengis.net/gml/srs/epsg.xml#3857")];function Ex(r,t,e){var i=r.length,n=e>1?e:2,a=t;a===void 0&&(n>2?a=r.slice():a=new Array(i));for(var o=0;o<i;o+=n){a[o]=jr*r[o]/180;var s=pn*Math.log(Math.tan(Math.PI*(+r[o+1]+90)/360));s>Bn?s=Bn:s<-Bn&&(s=-Bn),a[o+1]=s}return a}function Cx(r,t,e){var i=r.length,n=e>1?e:2,a=t;a===void 0&&(n>2?a=r.slice():a=new Array(i));for(var o=0;o<i;o+=n)a[o]=180*r[o]/jr,a[o+1]=360*Math.atan(Math.exp(r[o+1]/pn))/Math.PI-90;return a}var Tx=globalThis&&globalThis.__extends||function(){var r=function(t,e){return r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(i,n){i.__proto__=n}||function(i,n){for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(i[a]=n[a])},r(t,e)};return function(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");r(t,e);function i(){this.constructor=t}t.prototype=e===null?Object.create(e):(i.prototype=e.prototype,new i)}}(),Mx=6378137,Nd=[-180,-90,180,90],Ox=Math.PI*Mx/180,vr=function(r){Tx(t,r);function t(e,i){return r.call(this,{code:e,units:Fe.DEGREES,extent:Nd,axisOrientation:i,global:!0,metersPerUnit:Ox,worldExtent:Nd})||this}return t}(wu),Bd=[new vr("CRS:84"),new vr("EPSG:4326","neu"),new vr("urn:ogc:def:crs:OGC:1.3:CRS84"),new vr("urn:ogc:def:crs:OGC:2:84"),new vr("http://www.opengis.net/def/crs/OGC/1.3/CRS84"),new vr("http://www.opengis.net/gml/srs/epsg.xml#4326","neu"),new vr("http://www.opengis.net/def/crs/EPSG/0/4326","neu")],Yl={};function Sx(r){return Yl[r]||Yl[r.replace(/urn:(x-)?ogc:def:crs:EPSG:(.*:)?(\w+)$/,"EPSG:$3")]||null}function Ix(r,t){Yl[r]=t}var ct=typeof Object.assign=="function"?Object.assign:function(r,t){if(r==null)throw new TypeError("Cannot convert undefined or null to object");for(var e=Object(r),i=1,n=arguments.length;i<n;++i){var a=arguments[i];if(a!=null)for(var o in a)a.hasOwnProperty(o)&&(e[o]=a[o])}return e};function Au(r){for(var t in r)delete r[t]}var Rx=typeof Object.values=="function"?Object.values:function(r){var t=[];for(var e in r)t.push(r[e]);return t};function ji(r){var t;for(t in r)return!1;return!t}var Kr={};function ai(r,t,e){var i=r.getCode(),n=t.getCode();i in Kr||(Kr[i]={}),Kr[i][n]=e}function Vp(r,t){var e;return r in Kr&&t in Kr[r]&&(e=Kr[r][t]),e}const Di={BOTTOM_LEFT:"bottom-left",BOTTOM_RIGHT:"bottom-right",TOP_LEFT:"top-left",TOP_RIGHT:"top-right"},It={UNKNOWN:0,INTERSECTING:1,ABOVE:2,RIGHT:4,BELOW:8,LEFT:16};function J(){return function(){throw new Error("Unimplemented abstract method.")}()}var Px=0;function ut(r){return r.ol_uid||(r.ol_uid=String(++Px))}var Dx="6.13.0",kx=globalThis&&globalThis.__extends||function(){var r=function(t,e){return r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(i,n){i.__proto__=n}||function(i,n){for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(i[a]=n[a])},r(t,e)};return function(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");r(t,e);function i(){this.constructor=t}t.prototype=e===null?Object.create(e):(i.prototype=e.prototype,new i)}}(),Lx=function(r){kx(t,r);function t(e){var i=this,n="v"+Dx.split("-")[0],a="Assertion failed. See https://openlayers.org/en/"+n+"/doc/errors/#"+e+" for details.";return i=r.call(this,a)||this,i.code=e,i.name="AssertionError",i.message=a,i}return t}(Error);const qp=Lx;function et(r,t){if(!r)throw new qp(t)}function zd(r){for(var t=oe(),e=0,i=r.length;e<i;++e)Gi(t,r[e]);return t}function Fx(r,t,e){var i=Math.min.apply(null,r),n=Math.min.apply(null,t),a=Math.max.apply(null,r),o=Math.max.apply(null,t);return Ce(i,n,a,o,e)}function Wi(r,t,e){return e?(e[0]=r[0]-t,e[1]=r[1]-t,e[2]=r[2]+t,e[3]=r[3]+t,e):[r[0]-t,r[1]-t,r[2]+t,r[3]+t]}function $x(r,t){return t?(t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t):r.slice()}function Hp(r,t,e){var i,n;return t<r[0]?i=r[0]-t:r[2]<t?i=t-r[2]:i=0,e<r[1]?n=r[1]-e:r[3]<e?n=e-r[3]:n=0,i*i+n*n}function pi(r,t){return Xp(r,t[0],t[1])}function Je(r,t){return r[0]<=t[0]&&t[2]<=r[2]&&r[1]<=t[1]&&t[3]<=r[3]}function Xp(r,t,e){return r[0]<=t&&t<=r[2]&&r[1]<=e&&e<=r[3]}function Ul(r,t){var e=r[0],i=r[1],n=r[2],a=r[3],o=t[0],s=t[1],l=It.UNKNOWN;return o<e?l=l|It.LEFT:o>n&&(l=l|It.RIGHT),s<i?l=l|It.BELOW:s>a&&(l=l|It.ABOVE),l===It.UNKNOWN&&(l=It.INTERSECTING),l}function oe(){return[1/0,1/0,-1/0,-1/0]}function Ce(r,t,e,i,n){return n?(n[0]=r,n[1]=t,n[2]=e,n[3]=i,n):[r,t,e,i]}function Eu(r){return Ce(1/0,1/0,-1/0,-1/0,r)}function Nx(r,t){var e=r[0],i=r[1];return Ce(e,i,e,i,t)}function Bx(r,t,e,i,n){var a=Eu(n);return Zp(a,r,t,e,i)}function Wo(r,t){return r[0]==t[0]&&r[2]==t[2]&&r[1]==t[1]&&r[3]==t[3]}function zx(r,t){return t[0]<r[0]&&(r[0]=t[0]),t[2]>r[2]&&(r[2]=t[2]),t[1]<r[1]&&(r[1]=t[1]),t[3]>r[3]&&(r[3]=t[3]),r}function Gi(r,t){t[0]<r[0]&&(r[0]=t[0]),t[0]>r[2]&&(r[2]=t[0]),t[1]<r[1]&&(r[1]=t[1]),t[1]>r[3]&&(r[3]=t[1])}function Zp(r,t,e,i,n){for(;e<i;e+=n)Gx(r,t[e],t[e+1]);return r}function Gx(r,t,e){r[0]=Math.min(r[0],t),r[1]=Math.min(r[1],e),r[2]=Math.max(r[2],t),r[3]=Math.max(r[3],e)}function Qp(r,t){var e;return e=t(Vo(r)),e||(e=t(qo(r)),e)||(e=t(Ho(r)),e)||(e=t(Or(r)),e)?e:!1}function jl(r){var t=0;return Cu(r)||(t=ht(r)*Ft(r)),t}function Vo(r){return[r[0],r[1]]}function qo(r){return[r[2],r[1]]}function or(r){return[(r[0]+r[2])/2,(r[1]+r[3])/2]}function Yx(r,t){var e;return t===Di.BOTTOM_LEFT?e=Vo(r):t===Di.BOTTOM_RIGHT?e=qo(r):t===Di.TOP_LEFT?e=Or(r):t===Di.TOP_RIGHT?e=Ho(r):et(!1,13),e}function Da(r,t,e,i,n){var a=t*i[0]/2,o=t*i[1]/2,s=Math.cos(e),l=Math.sin(e),u=a*s,h=a*l,c=o*s,d=o*l,f=r[0],p=r[1],v=f-u+d,m=f-u-d,_=f+u-d,g=f+u+d,y=p-h-c,b=p-h+c,w=p+h+c,x=p+h-c;return Ce(Math.min(v,m,_,g),Math.min(y,b,w,x),Math.max(v,m,_,g),Math.max(y,b,w,x),n)}function Ft(r){return r[3]-r[1]}function Jr(r,t,e){var i=e||oe();return zt(r,t)?(r[0]>t[0]?i[0]=r[0]:i[0]=t[0],r[1]>t[1]?i[1]=r[1]:i[1]=t[1],r[2]<t[2]?i[2]=r[2]:i[2]=t[2],r[3]<t[3]?i[3]=r[3]:i[3]=t[3]):Eu(i),i}function Or(r){return[r[0],r[3]]}function Ho(r){return[r[2],r[3]]}function ht(r){return r[2]-r[0]}function zt(r,t){return r[0]<=t[2]&&r[2]>=t[0]&&r[1]<=t[3]&&r[3]>=t[1]}function Cu(r){return r[2]<r[0]||r[3]<r[1]}function Ux(r,t){return t?(t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t):r}function jx(r,t,e){var i=!1,n=Ul(r,t),a=Ul(r,e);if(n===It.INTERSECTING||a===It.INTERSECTING)i=!0;else{var o=r[0],s=r[1],l=r[2],u=r[3],h=t[0],c=t[1],d=e[0],f=e[1],p=(f-c)/(d-h),v=void 0,m=void 0;a&It.ABOVE&&!(n&It.ABOVE)&&(v=d-(f-u)/p,i=v>=o&&v<=l),!i&&a&It.RIGHT&&!(n&It.RIGHT)&&(m=f-(d-l)*p,i=m>=s&&m<=u),!i&&a&It.BELOW&&!(n&It.BELOW)&&(v=d-(f-s)/p,i=v>=o&&v<=l),!i&&a&It.LEFT&&!(n&It.LEFT)&&(m=f-(d-o)*p,i=m>=s&&m<=u)}return i}function Wx(r,t,e,i){var n=[];if(i>1)for(var a=r[2]-r[0],o=r[3]-r[1],s=0;s<i;++s)n.push(r[0]+a*s/i,r[1],r[2],r[1]+o*s/i,r[2]-a*s/i,r[3],r[0],r[3]-o*s/i);else n=[r[0],r[1],r[2],r[1],r[2],r[3],r[0],r[3]];t(n,n,2);for(var l=[],u=[],s=0,h=n.length;s<h;s+=2)l.push(n[s]),u.push(n[s+1]);return Fx(l,u,e)}function Vx(r,t){var e=t.getExtent(),i=or(r);if(t.canWrapX()&&(i[0]<e[0]||i[0]>=e[2])){var n=ht(e),a=Math.floor((i[0]-e[0])/n),o=a*n;r[0]-=o,r[2]-=o}return r}function Kp(r,t){for(var e=(""+r).split("."),i=(""+t).split("."),n=0;n<Math.max(e.length,i.length);n++){var a=parseInt(e[n]||"0",10),o=parseInt(i[n]||"0",10);if(a>o)return 1;if(o>a)return-1}return 0}function qx(r,t){return r[0]+=+t[0],r[1]+=+t[1],r}function wo(r,t){for(var e=!0,i=r.length-1;i>=0;--i)if(r[i]!=t[i]){e=!1;break}return e}function Hx(r,t){var e=Math.cos(t),i=Math.sin(t),n=r[0]*e-r[1]*i,a=r[1]*e+r[0]*i;return r[0]=n,r[1]=a,r}function Xx(r,t){if(t.canWrapX()){var e=ht(t.getExtent()),i=Jp(r,t,e);i&&(r[0]-=i*e)}return r}function Jp(r,t,e){var i=t.getExtent(),n=0;if(t.canWrapX()&&(r[0]<i[0]||r[0]>i[2])){var a=e||ht(i);n=Math.floor((r[0]-i[0])/a)}return n}const X={POINT:"Point",LINE_STRING:"LineString",LINEAR_RING:"LinearRing",POLYGON:"Polygon",MULTI_POINT:"MultiPoint",MULTI_LINE_STRING:"MultiLineString",MULTI_POLYGON:"MultiPolygon",GEOMETRY_COLLECTION:"GeometryCollection",CIRCLE:"Circle"};var Zx=63710088e-1;function Gd(r,t,e){var i=e||Zx,n=Pa(r[1]),a=Pa(t[1]),o=(a-n)/2,s=Pa(t[0]-r[0])/2,l=Math.sin(o)*Math.sin(o)+Math.sin(s)*Math.sin(s)*Math.cos(n)*Math.cos(a);return 2*i*Math.atan2(Math.sqrt(l),Math.sqrt(1-l))}var Wl=!0;function Qx(r){var t=r===void 0?!0:r;Wl=!t}function Tu(r,t,e){var i;if(t!==void 0){for(var n=0,a=r.length;n<a;++n)t[n]=r[n];i=t}else i=r.slice();return i}function tv(r,t,e){if(t!==void 0&&r!==t){for(var i=0,n=r.length;i<n;++i)t[i]=r[i];r=t}return r}function ev(r){Ix(r.getCode(),r),ai(r,r,Tu)}function Kx(r){r.forEach(ev)}function At(r){return typeof r=="string"?Sx(r):r||null}function Yd(r,t,e,i){r=At(r);var n,a=r.getPointResolutionFunc();if(a){if(n=a(t,e),i&&i!==r.getUnits()){var o=r.getMetersPerUnit();o&&(n=n*o/ae[i])}}else{var s=r.getUnits();if(s==Fe.DEGREES&&!i||i==Fe.DEGREES)n=t;else{var l=Xo(r,At("EPSG:4326"));if(l===tv&&s!==Fe.DEGREES)n=t*r.getMetersPerUnit();else{var u=[e[0]-t/2,e[1],e[0]+t/2,e[1],e[0],e[1]-t/2,e[0],e[1]+t/2];u=l(u,u,2);var h=Gd(u.slice(0,2),u.slice(2,4)),c=Gd(u.slice(4,6),u.slice(6,8));n=(h+c)/2}var o=i?ae[i]:r.getMetersPerUnit();o!==void 0&&(n/=o)}}return n}function Vl(r){Kx(r),r.forEach(function(t){r.forEach(function(e){t!==e&&ai(t,e,Tu)})})}function Jx(r,t,e,i){r.forEach(function(n){t.forEach(function(a){ai(n,a,e),ai(a,n,i)})})}function Mu(r,t){return r?typeof r=="string"?At(r):r:At(t)}function Ud(r){return function(t,e,i){for(var n=t.length,a=i!==void 0?i:2,o=e!==void 0?e:new Array(n),s=0;s<n;s+=a){var l=r([t[s],t[s+1]]);o[s]=l[0],o[s+1]=l[1];for(var u=a-1;u>=2;--u)o[s+u]=t[s+u]}return o}}function tA(r,t,e,i){var n=At(r),a=At(t);ai(n,a,Ud(e)),ai(a,n,Ud(i))}function Qe(r,t){if(r===t)return!0;var e=r.getUnits()===t.getUnits();if(r.getCode()===t.getCode())return e;var i=Xo(r,t);return i===Tu&&e}function Xo(r,t){var e=r.getCode(),i=t.getCode(),n=Vp(e,i);return n||(n=tv),n}function Vi(r,t){var e=At(r),i=At(t);return Xo(e,i)}function vn(r,t,e){var i=Vi(t,e);return i(r,void 0,r.length)}function Ou(r,t,e,i){var n=Vi(t,e);return Wx(r,n,void 0,i)}var se=null;function rv(r){se=At(r)}function iv(){return se}function jd(r,t){return se?vn(r,t,se):r}function Ue(r,t){return se?vn(r,se,t):(Wl&&!wo(r,[0,0])&&r[0]>=-180&&r[0]<=180&&r[1]>=-90&&r[1]<=90&&(Wl=!1,console.warn("Call useGeographic() ol/proj once to work with [longitude, latitude] coordinates.")),r)}function ql(r,t){return se?Ou(r,t,se):r}function Le(r,t){return se?Ou(r,se,t):r}function eA(r,t){if(!se)return r;var e=At(t).getUnits(),i=se.getUnits();return e&&i?r*ae[e]/ae[i]:r}function Wd(r,t,e){return function(i){var n=i[0],a=i[1],o,s;if(r.canWrapX()){var l=r.getExtent(),u=ht(l);s=Jp(i,r,u),s&&(n=n-s*u),n=xt(n,l[0],l[2]),a=xt(a,l[1],l[3]),o=e([n,a])}else o=e(i);return s&&t.canWrapX()&&(o[0]+=s*ht(t.getExtent())),o}}function rA(){Vl($d),Vl(Bd),Jx(Bd,$d,Ex,Cx)}rA();function iA(r){var t=Object.keys(r.defs),e=t.length,i,n;for(i=0;i<e;++i){var a=t[i];if(!At(a)){var o=r.defs(a),s=o.units;!s&&o.projName==="longlat"&&(s=Fe.DEGREES),ev(new wu({code:a,axisOrientation:o.axis,metersPerUnit:o.to_meter,units:s}))}}for(i=0;i<e;++i){var l=t[i],u=At(l);for(n=0;n<e;++n){var h=t[n],c=At(h);if(!Vp(l,h))if(r.defs[l]===r.defs[h])Vl([u,c]);else{var d=r(l,h);tA(u,c,Wd(u,c,d.forward),Wd(c,u,d.inverse))}}}}function nA(r){r("EPSG:4326","+title=WGS 84 (long/lat) +proj=longlat +ellps=WGS84 +datum=WGS84 +units=degrees"),r("EPSG:4269","+title=NAD83 (long/lat) +proj=longlat +a=6378137.0 +b=6356752.31414036 +ellps=GRS80 +datum=NAD83 +units=degrees"),r("EPSG:3857","+title=WGS 84 / Pseudo-Mercator +proj=merc +a=6378137 +b=6378137 +lat_ts=0.0 +lon_0=0.0 +x_0=0.0 +y_0=0 +k=1.0 +units=m +nadgrids=@null +no_defs"),r.WGS84=r["EPSG:4326"],r["EPSG:3785"]=r["EPSG:3857"],r.GOOGLE=r["EPSG:3857"],r["EPSG:900913"]=r["EPSG:3857"],r["EPSG:102113"]=r["EPSG:3857"]}var Tr=1,Mr=2,ti=3,aA=4,Hl=5,Vd=6378137,oA=6356752314e-3,qd=.0066943799901413165,Yi=484813681109536e-20,T=Math.PI/2,sA=.16666666666666666,lA=.04722222222222222,uA=.022156084656084655,S=1e-10,Dt=.017453292519943295,be=57.29577951308232,it=Math.PI/4,qi=Math.PI*2,yt=3.14159265359,Xt={};Xt.greenwich=0;Xt.lisbon=-9.131906111111;Xt.paris=2.337229166667;Xt.bogota=-74.080916666667;Xt.madrid=-3.687938888889;Xt.rome=12.452333333333;Xt.bern=7.439583333333;Xt.jakarta=106.807719444444;Xt.ferro=-17.666666666667;Xt.brussels=4.367975;Xt.stockholm=18.058277777778;Xt.athens=23.7163375;Xt.oslo=10.722916666667;const hA={ft:{to_meter:.3048},"us-ft":{to_meter:1200/3937}};var Hd=/[\s_\-\/\(\)]/g;function sr(r,t){if(r[t])return r[t];for(var e=Object.keys(r),i=t.toLowerCase().replace(Hd,""),n=-1,a,o;++n<e.length;)if(a=e[n],o=a.toLowerCase().replace(Hd,""),o===i)return r[a]}function Xl(r){var t={},e=r.split("+").map(function(s){return s.trim()}).filter(function(s){return s}).reduce(function(s,l){var u=l.split("=");return u.push(!0),s[u[0].toLowerCase()]=u[1],s},{}),i,n,a,o={proj:"projName",datum:"datumCode",rf:function(s){t.rf=parseFloat(s)},lat_0:function(s){t.lat0=s*Dt},lat_1:function(s){t.lat1=s*Dt},lat_2:function(s){t.lat2=s*Dt},lat_ts:function(s){t.lat_ts=s*Dt},lon_0:function(s){t.long0=s*Dt},lon_1:function(s){t.long1=s*Dt},lon_2:function(s){t.long2=s*Dt},alpha:function(s){t.alpha=parseFloat(s)*Dt},gamma:function(s){t.rectified_grid_angle=parseFloat(s)},lonc:function(s){t.longc=s*Dt},x_0:function(s){t.x0=parseFloat(s)},y_0:function(s){t.y0=parseFloat(s)},k_0:function(s){t.k0=parseFloat(s)},k:function(s){t.k0=parseFloat(s)},a:function(s){t.a=parseFloat(s)},b:function(s){t.b=parseFloat(s)},r_a:function(){t.R_A=!0},zone:function(s){t.zone=parseInt(s,10)},south:function(){t.utmSouth=!0},towgs84:function(s){t.datum_params=s.split(",").map(function(l){return parseFloat(l)})},to_meter:function(s){t.to_meter=parseFloat(s)},units:function(s){t.units=s;var l=sr(hA,s);l&&(t.to_meter=l.to_meter)},from_greenwich:function(s){t.from_greenwich=s*Dt},pm:function(s){var l=sr(Xt,s);t.from_greenwich=(l||parseFloat(s))*Dt},nadgrids:function(s){s==="@null"?t.datumCode="none":t.nadgrids=s},axis:function(s){var l="ewnsud";s.length===3&&l.indexOf(s.substr(0,1))!==-1&&l.indexOf(s.substr(1,1))!==-1&&l.indexOf(s.substr(2,1))!==-1&&(t.axis=s)},approx:function(){t.approx=!0}};for(i in e)n=e[i],i in o?(a=o[i],typeof a=="function"?a(n):t[a]=n):t[i]=n;return typeof t.datumCode=="string"&&t.datumCode!=="WGS84"&&(t.datumCode=t.datumCode.toLowerCase()),t}var Hi=1,nv=2,av=3,xo=4,ov=5,Su=-1,cA=/\s/,dA=/[A-Za-z]/,fA=/[A-Za-z84_]/,Zo=/[,\]]/,sv=/[\d\.E\-\+]/;function Ne(r){if(typeof r!="string")throw new Error("not a string");this.text=r.trim(),this.level=0,this.place=0,this.root=null,this.stack=[],this.currentObject=null,this.state=Hi}Ne.prototype.readCharicter=function(){var r=this.text[this.place++];if(this.state!==xo)for(;cA.test(r);){if(this.place>=this.text.length)return;r=this.text[this.place++]}switch(this.state){case Hi:return this.neutral(r);case nv:return this.keyword(r);case xo:return this.quoted(r);case ov:return this.afterquote(r);case av:return this.number(r);case Su:return}};Ne.prototype.afterquote=function(r){if(r==='"'){this.word+='"',this.state=xo;return}if(Zo.test(r)){this.word=this.word.trim(),this.afterItem(r);return}throw new Error(`havn't handled "`+r+'" in afterquote yet, index '+this.place)};Ne.prototype.afterItem=function(r){if(r===","){this.word!==null&&this.currentObject.push(this.word),this.word=null,this.state=Hi;return}if(r==="]"){this.level--,this.word!==null&&(this.currentObject.push(this.word),this.word=null),this.state=Hi,this.currentObject=this.stack.pop(),this.currentObject||(this.state=Su);return}};Ne.prototype.number=function(r){if(sv.test(r)){this.word+=r;return}if(Zo.test(r)){this.word=parseFloat(this.word),this.afterItem(r);return}throw new Error(`havn't handled "`+r+'" in number yet, index '+this.place)};Ne.prototype.quoted=function(r){if(r==='"'){this.state=ov;return}this.word+=r};Ne.prototype.keyword=function(r){if(fA.test(r)){this.word+=r;return}if(r==="["){var t=[];t.push(this.word),this.level++,this.root===null?this.root=t:this.currentObject.push(t),this.stack.push(this.currentObject),this.currentObject=t,this.state=Hi;return}if(Zo.test(r)){this.afterItem(r);return}throw new Error(`havn't handled "`+r+'" in keyword yet, index '+this.place)};Ne.prototype.neutral=function(r){if(dA.test(r)){this.word=r,this.state=nv;return}if(r==='"'){this.word="",this.state=xo;return}if(sv.test(r)){this.word=r,this.state=av;return}if(Zo.test(r)){this.afterItem(r);return}throw new Error(`havn't handled "`+r+'" in neutral yet, index '+this.place)};Ne.prototype.output=function(){for(;this.place<this.text.length;)this.readCharicter();if(this.state===Su)return this.root;throw new Error('unable to parse string "'+this.text+'". State is '+this.state)};function pA(r){var t=new Ne(r);return t.output()}function Xd(r,t,e){Array.isArray(t)&&(e.unshift(t),t=null);var i=t?{}:r,n=e.reduce(function(a,o){return Wr(o,a),a},i);t&&(r[t]=n)}function Wr(r,t){if(!Array.isArray(r)){t[r]=!0;return}var e=r.shift();if(e==="PARAMETER"&&(e=r.shift()),r.length===1){if(Array.isArray(r[0])){t[e]={},Wr(r[0],t[e]);return}t[e]=r[0];return}if(!r.length){t[e]=!0;return}if(e==="TOWGS84"){t[e]=r;return}if(e==="AXIS"){e in t||(t[e]=[]),t[e].push(r);return}Array.isArray(e)||(t[e]={});var i;switch(e){case"UNIT":case"PRIMEM":case"VERT_DATUM":t[e]={name:r[0].toLowerCase(),convert:r[1]},r.length===3&&Wr(r[2],t[e]);return;case"SPHEROID":case"ELLIPSOID":t[e]={name:r[0],a:r[1],rf:r[2]},r.length===4&&Wr(r[3],t[e]);return;case"PROJECTEDCRS":case"PROJCRS":case"GEOGCS":case"GEOCCS":case"PROJCS":case"LOCAL_CS":case"GEODCRS":case"GEODETICCRS":case"GEODETICDATUM":case"EDATUM":case"ENGINEERINGDATUM":case"VERT_CS":case"VERTCRS":case"VERTICALCRS":case"COMPD_CS":case"COMPOUNDCRS":case"ENGINEERINGCRS":case"ENGCRS":case"FITTED_CS":case"LOCAL_DATUM":case"DATUM":r[0]=["name",r[0]],Xd(t,e,r);return;default:for(i=-1;++i<r.length;)if(!Array.isArray(r[i]))return Wr(r,t[e]);return Xd(t,e,r)}}var vA=.017453292519943295;function mA(r,t){var e=t[0],i=t[1];!(e in r)&&i in r&&(r[e]=r[i],t.length===3&&(r[e]=t[2](r[e])))}function Re(r){return r*vA}function _A(r){if(r.type==="GEOGCS"?r.projName="longlat":r.type==="LOCAL_CS"?(r.projName="identity",r.local=!0):typeof r.PROJECTION=="object"?r.projName=Object.keys(r.PROJECTION)[0]:r.projName=r.PROJECTION,r.AXIS){for(var t="",e=0,i=r.AXIS.length;e<i;++e){var n=[r.AXIS[e][0].toLowerCase(),r.AXIS[e][1].toLowerCase()];n[0].indexOf("north")!==-1||(n[0]==="y"||n[0]==="lat")&&n[1]==="north"?t+="n":n[0].indexOf("south")!==-1||(n[0]==="y"||n[0]==="lat")&&n[1]==="south"?t+="s":n[0].indexOf("east")!==-1||(n[0]==="x"||n[0]==="lon")&&n[1]==="east"?t+="e":(n[0].indexOf("west")!==-1||(n[0]==="x"||n[0]==="lon")&&n[1]==="west")&&(t+="w")}t.length===2&&(t+="u"),t.length===3&&(r.axis=t)}r.UNIT&&(r.units=r.UNIT.name.toLowerCase(),r.units==="metre"&&(r.units="meter"),r.UNIT.convert&&(r.type==="GEOGCS"?r.DATUM&&r.DATUM.SPHEROID&&(r.to_meter=r.UNIT.convert*r.DATUM.SPHEROID.a):r.to_meter=r.UNIT.convert));var a=r.GEOGCS;r.type==="GEOGCS"&&(a=r),a&&(a.DATUM?r.datumCode=a.DATUM.name.toLowerCase():r.datumCode=a.name.toLowerCase(),r.datumCode.slice(0,2)==="d_"&&(r.datumCode=r.datumCode.slice(2)),(r.datumCode==="new_zealand_geodetic_datum_1949"||r.datumCode==="new_zealand_1949")&&(r.datumCode="nzgd49"),(r.datumCode==="wgs_1984"||r.datumCode==="world_geodetic_system_1984")&&(r.PROJECTION==="Mercator_Auxiliary_Sphere"&&(r.sphere=!0),r.datumCode="wgs84"),r.datumCode.slice(-6)==="_ferro"&&(r.datumCode=r.datumCode.slice(0,-6)),r.datumCode.slice(-8)==="_jakarta"&&(r.datumCode=r.datumCode.slice(0,-8)),~r.datumCode.indexOf("belge")&&(r.datumCode="rnb72"),a.DATUM&&a.DATUM.SPHEROID&&(r.ellps=a.DATUM.SPHEROID.name.replace("_19","").replace(/[Cc]larke\_18/,"clrk"),r.ellps.toLowerCase().slice(0,13)==="international"&&(r.ellps="intl"),r.a=a.DATUM.SPHEROID.a,r.rf=parseFloat(a.DATUM.SPHEROID.rf,10)),a.DATUM&&a.DATUM.TOWGS84&&(r.datum_params=a.DATUM.TOWGS84),~r.datumCode.indexOf("osgb_1936")&&(r.datumCode="osgb36"),~r.datumCode.indexOf("osni_1952")&&(r.datumCode="osni52"),(~r.datumCode.indexOf("tm65")||~r.datumCode.indexOf("geodetic_datum_of_1965"))&&(r.datumCode="ire65"),r.datumCode==="ch1903+"&&(r.datumCode="ch1903"),~r.datumCode.indexOf("israel")&&(r.datumCode="isr93")),r.b&&!isFinite(r.b)&&(r.b=r.a);function o(u){var h=r.to_meter||1;return u*h}var s=function(u){return mA(r,u)},l=[["standard_parallel_1","Standard_Parallel_1"],["standard_parallel_1","Latitude of 1st standard parallel"],["standard_parallel_2","Standard_Parallel_2"],["standard_parallel_2","Latitude of 2nd standard parallel"],["false_easting","False_Easting"],["false_easting","False easting"],["false-easting","Easting at false origin"],["false_northing","False_Northing"],["false_northing","False northing"],["false_northing","Northing at false origin"],["central_meridian","Central_Meridian"],["central_meridian","Longitude of natural origin"],["central_meridian","Longitude of false origin"],["latitude_of_origin","Latitude_Of_Origin"],["latitude_of_origin","Central_Parallel"],["latitude_of_origin","Latitude of natural origin"],["latitude_of_origin","Latitude of false origin"],["scale_factor","Scale_Factor"],["k0","scale_factor"],["latitude_of_center","Latitude_Of_Center"],["latitude_of_center","Latitude_of_center"],["lat0","latitude_of_center",Re],["longitude_of_center","Longitude_Of_Center"],["longitude_of_center","Longitude_of_center"],["longc","longitude_of_center",Re],["x0","false_easting",o],["y0","false_northing",o],["long0","central_meridian",Re],["lat0","latitude_of_origin",Re],["lat0","standard_parallel_1",Re],["lat1","standard_parallel_1",Re],["lat2","standard_parallel_2",Re],["azimuth","Azimuth"],["alpha","azimuth",Re],["srsCode","name"]];l.forEach(s),!r.long0&&r.longc&&(r.projName==="Albers_Conic_Equal_Area"||r.projName==="Lambert_Azimuthal_Equal_Area")&&(r.long0=r.longc),!r.lat_ts&&r.lat1&&(r.projName==="Stereographic_South_Pole"||r.projName==="Polar Stereographic (variant B)")&&(r.lat0=Re(r.lat1>0?90:-90),r.lat_ts=r.lat1)}function lv(r){var t=pA(r),e=t.shift(),i=t.shift();t.unshift(["name",i]),t.unshift(["type",e]);var n={};return Wr(t,n),_A(n),n}function Bt(r){var t=this;if(arguments.length===2){var e=arguments[1];typeof e=="string"?e.charAt(0)==="+"?Bt[r]=Xl(arguments[1]):Bt[r]=lv(arguments[1]):Bt[r]=e}else if(arguments.length===1){if(Array.isArray(r))return r.map(function(i){Array.isArray(i)?Bt.apply(t,i):Bt(i)});if(typeof r=="string"){if(r in Bt)return Bt[r]}else"EPSG"in r?Bt["EPSG:"+r.EPSG]=r:"ESRI"in r?Bt["ESRI:"+r.ESRI]=r:"IAU2000"in r?Bt["IAU2000:"+r.IAU2000]=r:console.log(r);return}}nA(Bt);function gA(r){return typeof r=="string"}function yA(r){return r in Bt}var bA=["PROJECTEDCRS","PROJCRS","GEOGCS","GEOCCS","PROJCS","LOCAL_CS","GEODCRS","GEODETICCRS","GEODETICDATUM","ENGCRS","ENGINEERINGCRS"];function wA(r){return bA.some(function(t){return r.indexOf(t)>-1})}var xA=["3857","900913","3785","102113"];function AA(r){var t=sr(r,"authority");if(t){var e=sr(t,"epsg");return e&&xA.indexOf(e)>-1}}function EA(r){var t=sr(r,"extension");if(t)return sr(t,"proj4")}function CA(r){return r[0]==="+"}function TA(r){if(gA(r)){if(yA(r))return Bt[r];if(wA(r)){var t=lv(r);if(AA(t))return Bt["EPSG:3857"];var e=EA(t);return e?Xl(e):t}if(CA(r))return Xl(r)}else return r}function Zd(r,t){r=r||{};var e,i;if(!t)return r;for(i in t)e=t[i],e!==void 0&&(r[i]=e);return r}function Te(r,t,e){var i=r*t;return e/Math.sqrt(1-i*i)}function mn(r){return r<0?-1:1}function R(r){return Math.abs(r)<=yt?r:r-mn(r)*qi}function pe(r,t,e){var i=r*e,n=.5*r;return i=Math.pow((1-i)/(1+i),n),Math.tan(.5*(T-t))/i}function Xi(r,t){for(var e=.5*r,i,n,a=T-2*Math.atan(t),o=0;o<=15;o++)if(i=r*Math.sin(a),n=T-2*Math.atan(t*Math.pow((1-i)/(1+i),e))-a,a+=n,Math.abs(n)<=1e-10)return a;return-9999}function MA(){var r=this.b/this.a;this.es=1-r*r,"x0"in this||(this.x0=0),"y0"in this||(this.y0=0),this.e=Math.sqrt(this.es),this.lat_ts?this.sphere?this.k0=Math.cos(this.lat_ts):this.k0=Te(this.e,Math.sin(this.lat_ts),Math.cos(this.lat_ts)):this.k0||(this.k?this.k0=this.k:this.k0=1)}function OA(r){var t=r.x,e=r.y;if(e*be>90&&e*be<-90&&t*be>180&&t*be<-180)return null;var i,n;if(Math.abs(Math.abs(e)-T)<=S)return null;if(this.sphere)i=this.x0+this.a*this.k0*R(t-this.long0),n=this.y0+this.a*this.k0*Math.log(Math.tan(it+.5*e));else{var a=Math.sin(e),o=pe(this.e,e,a);i=this.x0+this.a*this.k0*R(t-this.long0),n=this.y0-this.a*this.k0*Math.log(o)}return r.x=i,r.y=n,r}function SA(r){var t=r.x-this.x0,e=r.y-this.y0,i,n;if(this.sphere)n=T-2*Math.atan(Math.exp(-e/(this.a*this.k0)));else{var a=Math.exp(-e/(this.a*this.k0));if(n=Xi(this.e,a),n===-9999)return null}return i=R(this.long0+t/(this.a*this.k0)),r.x=i,r.y=n,r}var IA=["Mercator","Popular Visualisation Pseudo Mercator","Mercator_1SP","Mercator_Auxiliary_Sphere","merc"];const RA={init:MA,forward:OA,inverse:SA,names:IA};function PA(){}function Qd(r){return r}var DA=["longlat","identity"];const kA={init:PA,forward:Qd,inverse:Qd,names:DA};var LA=[RA,kA],ka={},Ao=[];function uv(r,t){var e=Ao.length;return r.names?(Ao[e]=r,r.names.forEach(function(i){ka[i.toLowerCase()]=e}),this):(console.log(t),!0)}function FA(r){if(!r)return!1;var t=r.toLowerCase();if(typeof ka[t]<"u"&&Ao[ka[t]])return Ao[ka[t]]}function $A(){LA.forEach(uv)}const NA={start:$A,add:uv,get:FA};var V={};V.MERIT={a:6378137,rf:298.257,ellipseName:"MERIT 1983"};V.SGS85={a:6378136,rf:298.257,ellipseName:"Soviet Geodetic System 85"};V.GRS80={a:6378137,rf:298.257222101,ellipseName:"GRS 1980(IUGG, 1980)"};V.IAU76={a:6378140,rf:298.257,ellipseName:"IAU 1976"};V.airy={a:6377563396e-3,b:635625691e-2,ellipseName:"Airy 1830"};V.APL4={a:6378137,rf:298.25,ellipseName:"Appl. Physics. 1965"};V.NWL9D={a:6378145,rf:298.25,ellipseName:"Naval Weapons Lab., 1965"};V.mod_airy={a:6377340189e-3,b:6356034446e-3,ellipseName:"Modified Airy"};V.andrae={a:637710443e-2,rf:300,ellipseName:"Andrae 1876 (Den., Iclnd.)"};V.aust_SA={a:6378160,rf:298.25,ellipseName:"Australian Natl & S. Amer. 1969"};V.GRS67={a:6378160,rf:298.247167427,ellipseName:"GRS 67(IUGG 1967)"};V.bessel={a:6377397155e-3,rf:299.1528128,ellipseName:"Bessel 1841"};V.bess_nam={a:6377483865e-3,rf:299.1528128,ellipseName:"Bessel 1841 (Namibia)"};V.clrk66={a:63782064e-1,b:63565838e-1,ellipseName:"Clarke 1866"};V.clrk80={a:6378249145e-3,rf:293.4663,ellipseName:"Clarke 1880 mod."};V.clrk58={a:6378293645208759e-9,rf:294.2606763692654,ellipseName:"Clarke 1858"};V.CPM={a:63757387e-1,rf:334.29,ellipseName:"Comm. des Poids et Mesures 1799"};V.delmbr={a:6376428,rf:311.5,ellipseName:"Delambre 1810 (Belgium)"};V.engelis={a:637813605e-2,rf:298.2566,ellipseName:"Engelis 1985"};V.evrst30={a:6377276345e-3,rf:300.8017,ellipseName:"Everest 1830"};V.evrst48={a:6377304063e-3,rf:300.8017,ellipseName:"Everest 1948"};V.evrst56={a:6377301243e-3,rf:300.8017,ellipseName:"Everest 1956"};V.evrst69={a:6377295664e-3,rf:300.8017,ellipseName:"Everest 1969"};V.evrstSS={a:6377298556e-3,rf:300.8017,ellipseName:"Everest (Sabah & Sarawak)"};V.fschr60={a:6378166,rf:298.3,ellipseName:"Fischer (Mercury Datum) 1960"};V.fschr60m={a:6378155,rf:298.3,ellipseName:"Fischer 1960"};V.fschr68={a:6378150,rf:298.3,ellipseName:"Fischer 1968"};V.helmert={a:6378200,rf:298.3,ellipseName:"Helmert 1906"};V.hough={a:6378270,rf:297,ellipseName:"Hough"};V.intl={a:6378388,rf:297,ellipseName:"International 1909 (Hayford)"};V.kaula={a:6378163,rf:298.24,ellipseName:"Kaula 1961"};V.lerch={a:6378139,rf:298.257,ellipseName:"Lerch 1979"};V.mprts={a:6397300,rf:191,ellipseName:"Maupertius 1738"};V.new_intl={a:63781575e-1,b:63567722e-1,ellipseName:"New International 1967"};V.plessis={a:6376523,rf:6355863,ellipseName:"Plessis 1817 (France)"};V.krass={a:6378245,rf:298.3,ellipseName:"Krassovsky, 1942"};V.SEasia={a:6378155,b:63567733205e-4,ellipseName:"Southeast Asia"};V.walbeck={a:6376896,b:63558348467e-4,ellipseName:"Walbeck"};V.WGS60={a:6378165,rf:298.3,ellipseName:"WGS 60"};V.WGS66={a:6378145,rf:298.25,ellipseName:"WGS 66"};V.WGS7={a:6378135,rf:298.26,ellipseName:"WGS 72"};var BA=V.WGS84={a:6378137,rf:298.257223563,ellipseName:"WGS 84"};V.sphere={a:6370997,b:6370997,ellipseName:"Normal Sphere (r=6370997)"};function zA(r,t,e,i){var n=r*r,a=t*t,o=(n-a)/n,s=0;i?(r*=1-o*(sA+o*(lA+o*uA)),n=r*r,o=0):s=Math.sqrt(o);var l=(n-a)/a;return{es:o,e:s,ep2:l}}function GA(r,t,e,i,n){if(!r){var a=sr(V,i);a||(a=BA),r=a.a,t=a.b,e=a.rf}return e&&!t&&(t=(1-1/e)*r),(e===0||Math.abs(r-t)<S)&&(n=!0,t=r),{a:r,b:t,rf:e,sphere:n}}var Rt={};Rt.wgs84={towgs84:"0,0,0",ellipse:"WGS84",datumName:"WGS84"};Rt.ch1903={towgs84:"674.374,15.056,405.346",ellipse:"bessel",datumName:"swiss"};Rt.ggrs87={towgs84:"-199.87,74.79,246.62",ellipse:"GRS80",datumName:"Greek_Geodetic_Reference_System_1987"};Rt.nad83={towgs84:"0,0,0",ellipse:"GRS80",datumName:"North_American_Datum_1983"};Rt.nad27={nadgrids:"@conus,@alaska,@ntv2_0.gsb,@ntv1_can.dat",ellipse:"clrk66",datumName:"North_American_Datum_1927"};Rt.potsdam={towgs84:"598.1,73.7,418.2,0.202,0.045,-2.455,6.7",ellipse:"bessel",datumName:"Potsdam Rauenberg 1950 DHDN"};Rt.carthage={towgs84:"-263.0,6.0,431.0",ellipse:"clark80",datumName:"Carthage 1934 Tunisia"};Rt.hermannskogel={towgs84:"577.326,90.129,463.919,5.137,1.474,5.297,2.4232",ellipse:"bessel",datumName:"Hermannskogel"};Rt.osni52={towgs84:"482.530,-130.596,564.557,-1.042,-0.214,-0.631,8.15",ellipse:"airy",datumName:"Irish National"};Rt.ire65={towgs84:"482.530,-130.596,564.557,-1.042,-0.214,-0.631,8.15",ellipse:"mod_airy",datumName:"Ireland 1965"};Rt.rassadiran={towgs84:"-133.63,-157.5,-158.62",ellipse:"intl",datumName:"Rassadiran"};Rt.nzgd49={towgs84:"59.47,-5.04,187.44,0.47,-0.1,1.024,-4.5993",ellipse:"intl",datumName:"New Zealand Geodetic Datum 1949"};Rt.osgb36={towgs84:"446.448,-125.157,542.060,0.1502,0.2470,0.8421,-20.4894",ellipse:"airy",datumName:"Airy 1830"};Rt.s_jtsk={towgs84:"589,76,480",ellipse:"bessel",datumName:"S-JTSK (Ferro)"};Rt.beduaram={towgs84:"-106,-87,188",ellipse:"clrk80",datumName:"Beduaram"};Rt.gunung_segara={towgs84:"-403,684,41",ellipse:"bessel",datumName:"Gunung Segara Jakarta"};Rt.rnb72={towgs84:"106.869,-52.2978,103.724,-0.33657,0.456955,-1.84218,1",ellipse:"intl",datumName:"Reseau National Belge 1972"};function YA(r,t,e,i,n,a,o){var s={};return r===void 0||r==="none"?s.datum_type=Hl:s.datum_type=aA,t&&(s.datum_params=t.map(parseFloat),(s.datum_params[0]!==0||s.datum_params[1]!==0||s.datum_params[2]!==0)&&(s.datum_type=Tr),s.datum_params.length>3&&(s.datum_params[3]!==0||s.datum_params[4]!==0||s.datum_params[5]!==0||s.datum_params[6]!==0)&&(s.datum_type=Mr,s.datum_params[3]*=Yi,s.datum_params[4]*=Yi,s.datum_params[5]*=Yi,s.datum_params[6]=s.datum_params[6]/1e6+1)),o&&(s.datum_type=ti,s.grids=o),s.a=e,s.b=i,s.es=n,s.ep2=a,s}var hv={};function UA(r,t){var e=new DataView(t),i=VA(e),n=qA(e,i);n.nSubgrids>1&&console.log("Only single NTv2 subgrids are currently supported, subsequent sub grids are ignored");var a=HA(e,n,i),o={header:n,subgrids:a};return hv[r]=o,o}function jA(r){if(r===void 0)return null;var t=r.split(",");return t.map(WA)}function WA(r){if(r.length===0)return null;var t=r[0]==="@";return t&&(r=r.slice(1)),r==="null"?{name:"null",mandatory:!t,grid:null,isNull:!0}:{name:r,mandatory:!t,grid:hv[r]||null,isNull:!1}}function Vr(r){return r/3600*Math.PI/180}function VA(r){var t=r.getInt32(8,!1);return t===11?!1:(t=r.getInt32(8,!0),t!==11&&console.warn("Failed to detect nadgrid endian-ness, defaulting to little-endian"),!0)}function qA(r,t){return{nFields:r.getInt32(8,t),nSubgridFields:r.getInt32(24,t),nSubgrids:r.getInt32(40,t),shiftType:Zl(r,56,56+8).trim(),fromSemiMajorAxis:r.getFloat64(120,t),fromSemiMinorAxis:r.getFloat64(136,t),toSemiMajorAxis:r.getFloat64(152,t),toSemiMinorAxis:r.getFloat64(168,t)}}function Zl(r,t,e){return String.fromCharCode.apply(null,new Uint8Array(r.buffer.slice(t,e)))}function HA(r,t,e){for(var i=176,n=[],a=0;a<t.nSubgrids;a++){var o=ZA(r,i,e),s=QA(r,i,o,e),l=Math.round(1+(o.upperLongitude-o.lowerLongitude)/o.longitudeInterval),u=Math.round(1+(o.upperLatitude-o.lowerLatitude)/o.latitudeInterval);n.push({ll:[Vr(o.lowerLongitude),Vr(o.lowerLatitude)],del:[Vr(o.longitudeInterval),Vr(o.latitudeInterval)],lim:[l,u],count:o.gridNodeCount,cvs:XA(s)})}return n}function XA(r){return r.map(function(t){return[Vr(t.longitudeShift),Vr(t.latitudeShift)]})}function ZA(r,t,e){return{name:Zl(r,t+8,t+16).trim(),parent:Zl(r,t+24,t+24+8).trim(),lowerLatitude:r.getFloat64(t+72,e),upperLatitude:r.getFloat64(t+88,e),lowerLongitude:r.getFloat64(t+104,e),upperLongitude:r.getFloat64(t+120,e),latitudeInterval:r.getFloat64(t+136,e),longitudeInterval:r.getFloat64(t+152,e),gridNodeCount:r.getInt32(t+168,e)}}function QA(r,t,e,i){for(var n=t+176,a=16,o=[],s=0;s<e.gridNodeCount;s++){var l={latitudeShift:r.getFloat32(n+s*a,i),longitudeShift:r.getFloat32(n+s*a+4,i),latitudeAccuracy:r.getFloat32(n+s*a+8,i),longitudeAccuracy:r.getFloat32(n+s*a+12,i)};o.push(l)}return o}function Ee(r,t){if(!(this instanceof Ee))return new Ee(r);t=t||function(u){if(u)throw u};var e=TA(r);if(typeof e!="object"){t(r);return}var i=Ee.projections.get(e.projName);if(!i){t(r);return}if(e.datumCode&&e.datumCode!=="none"){var n=sr(Rt,e.datumCode);n&&(e.datum_params=e.datum_params||(n.towgs84?n.towgs84.split(","):null),e.ellps=n.ellipse,e.datumName=n.datumName?n.datumName:e.datumCode)}e.k0=e.k0||1,e.axis=e.axis||"enu",e.ellps=e.ellps||"wgs84",e.lat1=e.lat1||e.lat0;var a=GA(e.a,e.b,e.rf,e.ellps,e.sphere),o=zA(a.a,a.b,a.rf,e.R_A),s=jA(e.nadgrids),l=e.datum||YA(e.datumCode,e.datum_params,a.a,a.b,o.es,o.ep2,s);Zd(this,e),Zd(this,i),this.a=a.a,this.b=a.b,this.rf=a.rf,this.sphere=a.sphere,this.es=o.es,this.e=o.e,this.ep2=o.ep2,this.datum=l,this.init(),t(null,this)}Ee.projections=NA;Ee.projections.start();function KA(r,t){return r.datum_type!==t.datum_type||r.a!==t.a||Math.abs(r.es-t.es)>5e-11?!1:r.datum_type===Tr?r.datum_params[0]===t.datum_params[0]&&r.datum_params[1]===t.datum_params[1]&&r.datum_params[2]===t.datum_params[2]:r.datum_type===Mr?r.datum_params[0]===t.datum_params[0]&&r.datum_params[1]===t.datum_params[1]&&r.datum_params[2]===t.datum_params[2]&&r.datum_params[3]===t.datum_params[3]&&r.datum_params[4]===t.datum_params[4]&&r.datum_params[5]===t.datum_params[5]&&r.datum_params[6]===t.datum_params[6]:!0}function cv(r,t,e){var i=r.x,n=r.y,a=r.z?r.z:0,o,s,l,u;if(n<-T&&n>-1.001*T)n=-T;else if(n>T&&n<1.001*T)n=T;else{if(n<-T)return{x:-1/0,y:-1/0,z:r.z};if(n>T)return{x:1/0,y:1/0,z:r.z}}return i>Math.PI&&(i-=2*Math.PI),s=Math.sin(n),u=Math.cos(n),l=s*s,o=e/Math.sqrt(1-t*l),{x:(o+a)*u*Math.cos(i),y:(o+a)*u*Math.sin(i),z:(o*(1-t)+a)*s}}function dv(r,t,e,i){var n=1e-12,a=n*n,o=30,s,l,u,h,c,d,f,p,v,m,_,g,y,b=r.x,w=r.y,x=r.z?r.z:0,E,A,M;if(s=Math.sqrt(b*b+w*w),l=Math.sqrt(b*b+w*w+x*x),s/e<n){if(E=0,l/e<n)return A=T,M=-i,{x:r.x,y:r.y,z:r.z}}else E=Math.atan2(w,b);u=x/l,h=s/l,c=1/Math.sqrt(1-t*(2-t)*h*h),p=h*(1-t)*c,v=u*c,y=0;do y++,f=e/Math.sqrt(1-t*v*v),M=s*p+x*v-f*(1-t*v*v),d=t*f/(f+M),c=1/Math.sqrt(1-d*(2-d)*h*h),m=h*(1-d)*c,_=u*c,g=_*p-m*v,p=m,v=_;while(g*g>a&&y<o);return A=Math.atan(_/Math.abs(m)),{x:E,y:A,z:M}}function JA(r,t,e){if(t===Tr)return{x:r.x+e[0],y:r.y+e[1],z:r.z+e[2]};if(t===Mr){var i=e[0],n=e[1],a=e[2],o=e[3],s=e[4],l=e[5],u=e[6];return{x:u*(r.x-l*r.y+s*r.z)+i,y:u*(l*r.x+r.y-o*r.z)+n,z:u*(-s*r.x+o*r.y+r.z)+a}}}function tE(r,t,e){if(t===Tr)return{x:r.x-e[0],y:r.y-e[1],z:r.z-e[2]};if(t===Mr){var i=e[0],n=e[1],a=e[2],o=e[3],s=e[4],l=e[5],u=e[6],h=(r.x-i)/u,c=(r.y-n)/u,d=(r.z-a)/u;return{x:h+l*c-s*d,y:-l*h+c+o*d,z:s*h-o*c+d}}}function zn(r){return r===Tr||r===Mr}function eE(r,t,e){if(KA(r,t)||r.datum_type===Hl||t.datum_type===Hl)return e;var i=r.a,n=r.es;if(r.datum_type===ti){var a=Kd(r,!1,e);if(a!==0)return;i=Vd,n=qd}var o=t.a,s=t.b,l=t.es;if(t.datum_type===ti&&(o=Vd,s=oA,l=qd),n===l&&i===o&&!zn(r.datum_type)&&!zn(t.datum_type))return e;if(e=cv(e,n,i),zn(r.datum_type)&&(e=JA(e,r.datum_type,r.datum_params)),zn(t.datum_type)&&(e=tE(e,t.datum_type,t.datum_params)),e=dv(e,l,o,s),t.datum_type===ti){var u=Kd(t,!0,e);if(u!==0)return}return e}function Kd(r,t,e){if(r.grids===null||r.grids.length===0)return console.log("Grid shift grids not found"),-1;for(var i={x:-e.x,y:e.y},n={x:Number.NaN,y:Number.NaN},a=[],o=0;o<r.grids.length;o++){var s=r.grids[o];if(a.push(s.name),s.isNull){n=i;break}if(s.mandatory,s.grid===null){if(s.mandatory)return console.log("Unable to find mandatory grid '"+s.name+"'"),-1;continue}var l=s.grid.subgrids[0],u=(Math.abs(l.del[1])+Math.abs(l.del[0]))/1e4,h=l.ll[0]-u,c=l.ll[1]-u,d=l.ll[0]+(l.lim[0]-1)*l.del[0]+u,f=l.ll[1]+(l.lim[1]-1)*l.del[1]+u;if(!(c>i.y||h>i.x||f<i.y||d<i.x)&&(n=rE(i,t,l),!isNaN(n.x)))break}return isNaN(n.x)?(console.log("Failed to find a grid shift table for location '"+-i.x*be+" "+i.y*be+" tried: '"+a+"'"),-1):(e.x=-n.x,e.y=n.y,0)}function rE(r,t,e){var i={x:Number.NaN,y:Number.NaN};if(isNaN(r.x))return i;var n={x:r.x,y:r.y};n.x-=e.ll[0],n.y-=e.ll[1],n.x=R(n.x-Math.PI)+Math.PI;var a=Jd(n,e);if(t){if(isNaN(a.x))return i;a.x=n.x-a.x,a.y=n.y-a.y;var o=9,s=1e-12,l,u;do{if(u=Jd(a,e),isNaN(u.x)){console.log("Inverse grid shift iteration failed, presumably at grid edge.  Using first approximation.");break}l={x:n.x-(u.x+a.x),y:n.y-(u.y+a.y)},a.x+=l.x,a.y+=l.y}while(o--&&Math.abs(l.x)>s&&Math.abs(l.y)>s);if(o<0)return console.log("Inverse grid shift iterator failed to converge."),i;i.x=R(a.x+e.ll[0]),i.y=a.y+e.ll[1]}else isNaN(a.x)||(i.x=r.x+a.x,i.y=r.y+a.y);return i}function Jd(r,t){var e={x:r.x/t.del[0],y:r.y/t.del[1]},i={x:Math.floor(e.x),y:Math.floor(e.y)},n={x:e.x-1*i.x,y:e.y-1*i.y},a={x:Number.NaN,y:Number.NaN},o;if(i.x<0||i.x>=t.lim[0]||i.y<0||i.y>=t.lim[1])return a;o=i.y*t.lim[0]+i.x;var s={x:t.cvs[o][0],y:t.cvs[o][1]};o++;var l={x:t.cvs[o][0],y:t.cvs[o][1]};o+=t.lim[0];var u={x:t.cvs[o][0],y:t.cvs[o][1]};o--;var h={x:t.cvs[o][0],y:t.cvs[o][1]},c=n.x*n.y,d=n.x*(1-n.y),f=(1-n.x)*(1-n.y),p=(1-n.x)*n.y;return a.x=f*s.x+d*l.x+p*h.x+c*u.x,a.y=f*s.y+d*l.y+p*h.y+c*u.y,a}function tf(r,t,e){var i=e.x,n=e.y,a=e.z||0,o,s,l,u={};for(l=0;l<3;l++)if(!(t&&l===2&&e.z===void 0))switch(l===0?(o=i,"ew".indexOf(r.axis[l])!==-1?s="x":s="y"):l===1?(o=n,"ns".indexOf(r.axis[l])!==-1?s="y":s="x"):(o=a,s="z"),r.axis[l]){case"e":u[s]=o;break;case"w":u[s]=-o;break;case"n":u[s]=o;break;case"s":u[s]=-o;break;case"u":e[s]!==void 0&&(u.z=o);break;case"d":e[s]!==void 0&&(u.z=-o);break;default:return null}return u}function fv(r){var t={x:r[0],y:r[1]};return r.length>2&&(t.z=r[2]),r.length>3&&(t.m=r[3]),t}function iE(r){ef(r.x),ef(r.y)}function ef(r){if(typeof Number.isFinite=="function"){if(Number.isFinite(r))return;throw new TypeError("coordinates must be finite numbers")}if(typeof r!="number"||r!==r||!isFinite(r))throw new TypeError("coordinates must be finite numbers")}function nE(r,t){return(r.datum.datum_type===Tr||r.datum.datum_type===Mr||r.datum.datum_type===ti)&&t.datumCode!=="WGS84"||(t.datum.datum_type===Tr||t.datum.datum_type===Mr||t.datum.datum_type===ti)&&r.datumCode!=="WGS84"}function Eo(r,t,e,i){var n;Array.isArray(e)?e=fv(e):e={x:e.x,y:e.y,z:e.z,m:e.m};var a=e.z!==void 0;if(iE(e),r.datum&&t.datum&&nE(r,t)&&(n=new Ee("WGS84"),e=Eo(r,n,e,i),r=n),i&&r.axis!=="enu"&&(e=tf(r,!1,e)),r.projName==="longlat")e={x:e.x*Dt,y:e.y*Dt,z:e.z||0};else if(r.to_meter&&(e={x:e.x*r.to_meter,y:e.y*r.to_meter,z:e.z||0}),e=r.inverse(e),!e)return;if(r.from_greenwich&&(e.x+=r.from_greenwich),e=eE(r.datum,t.datum,e),!!e)return t.from_greenwich&&(e={x:e.x-t.from_greenwich,y:e.y,z:e.z||0}),t.projName==="longlat"?e={x:e.x*be,y:e.y*be,z:e.z||0}:(e=t.forward(e),t.to_meter&&(e={x:e.x/t.to_meter,y:e.y/t.to_meter,z:e.z||0})),i&&t.axis!=="enu"?tf(t,!0,e):(a||delete e.z,e)}var rf=Ee("WGS84");function ps(r,t,e,i){var n,a,o;return Array.isArray(e)?(n=Eo(r,t,e,i)||{x:NaN,y:NaN},e.length>2?typeof r.name<"u"&&r.name==="geocent"||typeof t.name<"u"&&t.name==="geocent"?typeof n.z=="number"?[n.x,n.y,n.z].concat(e.splice(3)):[n.x,n.y,e[2]].concat(e.splice(3)):[n.x,n.y].concat(e.splice(2)):[n.x,n.y]):(a=Eo(r,t,e,i),o=Object.keys(e),o.length===2||o.forEach(function(s){if(typeof r.name<"u"&&r.name==="geocent"||typeof t.name<"u"&&t.name==="geocent"){if(s==="x"||s==="y"||s==="z")return}else if(s==="x"||s==="y")return;a[s]=e[s]}),a)}function nf(r){return r instanceof Ee?r:r.oProj?r.oProj:Ee(r)}function qt(r,t,e){r=nf(r);var i=!1,n;return typeof t>"u"?(t=r,r=rf,i=!0):(typeof t.x<"u"||Array.isArray(t))&&(e=t,t=r,r=rf,i=!0),t=nf(t),e?ps(r,t,e):(n={forward:function(a,o){return ps(r,t,a,o)},inverse:function(a,o){return ps(t,r,a,o)}},i&&(n.oProj=t),n)}var af=6,pv="AJSAJS",vv="AFAFAF",qr=65,jt=73,ie=79,ki=86,Li=90;const aE={forward:mv,inverse:oE,toPoint:_v};function mv(r,t){return t=t||5,uE(sE({lat:r[1],lon:r[0]}),t)}function oE(r){var t=Iu(yv(r.toUpperCase()));return t.lat&&t.lon?[t.lon,t.lat,t.lon,t.lat]:[t.left,t.bottom,t.right,t.top]}function _v(r){var t=Iu(yv(r.toUpperCase()));return t.lat&&t.lon?[t.lon,t.lat]:[(t.left+t.right)/2,(t.top+t.bottom)/2]}function vs(r){return r*(Math.PI/180)}function of(r){return 180*(r/Math.PI)}function sE(r){var t=r.lat,e=r.lon,i=6378137,n=.00669438,a=.9996,o,s,l,u,h,c,d,f=vs(t),p=vs(e),v,m;m=Math.floor((e+180)/6)+1,e===180&&(m=60),t>=56&&t<64&&e>=3&&e<12&&(m=32),t>=72&&t<84&&(e>=0&&e<9?m=31:e>=9&&e<21?m=33:e>=21&&e<33?m=35:e>=33&&e<42&&(m=37)),o=(m-1)*6-180+3,v=vs(o),s=n/(1-n),l=i/Math.sqrt(1-n*Math.sin(f)*Math.sin(f)),u=Math.tan(f)*Math.tan(f),h=s*Math.cos(f)*Math.cos(f),c=Math.cos(f)*(p-v),d=i*((1-n/4-3*n*n/64-5*n*n*n/256)*f-(3*n/8+3*n*n/32+45*n*n*n/1024)*Math.sin(2*f)+(15*n*n/256+45*n*n*n/1024)*Math.sin(4*f)-35*n*n*n/3072*Math.sin(6*f));var _=a*l*(c+(1-u+h)*c*c*c/6+(5-18*u+u*u+72*h-58*s)*c*c*c*c*c/120)+5e5,g=a*(d+l*Math.tan(f)*(c*c/2+(5-u+9*h+4*h*h)*c*c*c*c/24+(61-58*u+u*u+600*h-330*s)*c*c*c*c*c*c/720));return t<0&&(g+=1e7),{northing:Math.round(g),easting:Math.round(_),zoneNumber:m,zoneLetter:lE(t)}}function Iu(r){var t=r.northing,e=r.easting,i=r.zoneLetter,n=r.zoneNumber;if(n<0||n>60)return null;var a=.9996,o=6378137,s=.00669438,l,u=(1-Math.sqrt(1-s))/(1+Math.sqrt(1-s)),h,c,d,f,p,v,m,_,g,y=e-5e5,b=t;i<"N"&&(b-=1e7),m=(n-1)*6-180+3,l=s/(1-s),v=b/a,_=v/(o*(1-s/4-3*s*s/64-5*s*s*s/256)),g=_+(3*u/2-27*u*u*u/32)*Math.sin(2*_)+(21*u*u/16-55*u*u*u*u/32)*Math.sin(4*_)+151*u*u*u/96*Math.sin(6*_),h=o/Math.sqrt(1-s*Math.sin(g)*Math.sin(g)),c=Math.tan(g)*Math.tan(g),d=l*Math.cos(g)*Math.cos(g),f=o*(1-s)/Math.pow(1-s*Math.sin(g)*Math.sin(g),1.5),p=y/(h*a);var w=g-h*Math.tan(g)/f*(p*p/2-(5+3*c+10*d-4*d*d-9*l)*p*p*p*p/24+(61+90*c+298*d+45*c*c-252*l-3*d*d)*p*p*p*p*p*p/720);w=of(w);var x=(p-(1+2*c+d)*p*p*p/6+(5-2*d+28*c-3*d*d+8*l+24*c*c)*p*p*p*p*p/120)/Math.cos(g);x=m+of(x);var E;if(r.accuracy){var A=Iu({northing:r.northing+r.accuracy,easting:r.easting+r.accuracy,zoneLetter:r.zoneLetter,zoneNumber:r.zoneNumber});E={top:A.lat,right:A.lon,bottom:w,left:x}}else E={lat:w,lon:x};return E}function lE(r){var t="Z";return 84>=r&&r>=72?t="X":72>r&&r>=64?t="W":64>r&&r>=56?t="V":56>r&&r>=48?t="U":48>r&&r>=40?t="T":40>r&&r>=32?t="S":32>r&&r>=24?t="R":24>r&&r>=16?t="Q":16>r&&r>=8?t="P":8>r&&r>=0?t="N":0>r&&r>=-8?t="M":-8>r&&r>=-16?t="L":-16>r&&r>=-24?t="K":-24>r&&r>=-32?t="J":-32>r&&r>=-40?t="H":-40>r&&r>=-48?t="G":-48>r&&r>=-56?t="F":-56>r&&r>=-64?t="E":-64>r&&r>=-72?t="D":-72>r&&r>=-80&&(t="C"),t}function uE(r,t){var e="00000"+r.easting,i="00000"+r.northing;return r.zoneNumber+r.zoneLetter+hE(r.easting,r.northing,r.zoneNumber)+e.substr(e.length-5,t)+i.substr(i.length-5,t)}function hE(r,t,e){var i=gv(e),n=Math.floor(r/1e5),a=Math.floor(t/1e5)%20;return cE(n,a,i)}function gv(r){var t=r%af;return t===0&&(t=af),t}function cE(r,t,e){var i=e-1,n=pv.charCodeAt(i),a=vv.charCodeAt(i),o=n+r-1,s=a+t,l=!1;o>Li&&(o=o-Li+qr-1,l=!0),(o===jt||n<jt&&o>jt||(o>jt||n<jt)&&l)&&o++,(o===ie||n<ie&&o>ie||(o>ie||n<ie)&&l)&&(o++,o===jt&&o++),o>Li&&(o=o-Li+qr-1),s>ki?(s=s-ki+qr-1,l=!0):l=!1,(s===jt||a<jt&&s>jt||(s>jt||a<jt)&&l)&&s++,(s===ie||a<ie&&s>ie||(s>ie||a<ie)&&l)&&(s++,s===jt&&s++),s>ki&&(s=s-ki+qr-1);var u=String.fromCharCode(o)+String.fromCharCode(s);return u}function yv(r){if(r&&r.length===0)throw"MGRSPoint coverting from nothing";for(var t=r.length,e=null,i="",n,a=0;!/[A-Z]/.test(n=r.charAt(a));){if(a>=2)throw"MGRSPoint bad conversion from: "+r;i+=n,a++}var o=parseInt(i,10);if(a===0||a+3>t)throw"MGRSPoint bad conversion from: "+r;var s=r.charAt(a++);if(s<="A"||s==="B"||s==="Y"||s>="Z"||s==="I"||s==="O")throw"MGRSPoint zone letter "+s+" not handled: "+r;e=r.substring(a,a+=2);for(var l=gv(o),u=dE(e.charAt(0),l),h=fE(e.charAt(1),l);h<pE(s);)h+=2e6;var c=t-a;if(c%2!==0)throw`MGRSPoint has to have an even number 
of digits after the zone letter and two 100km letters - front 
half for easting meters, second half for 
northing meters`+r;var d=c/2,f=0,p=0,v,m,_,g,y;return d>0&&(v=1e5/Math.pow(10,d),m=r.substring(a,a+d),f=parseFloat(m)*v,_=r.substring(a+d),p=parseFloat(_)*v),g=f+u,y=p+h,{easting:g,northing:y,zoneLetter:s,zoneNumber:o,accuracy:v}}function dE(r,t){for(var e=pv.charCodeAt(t-1),i=1e5,n=!1;e!==r.charCodeAt(0);){if(e++,e===jt&&e++,e===ie&&e++,e>Li){if(n)throw"Bad character: "+r;e=qr,n=!0}i+=1e5}return i}function fE(r,t){if(r>"V")throw"MGRSPoint given invalid Northing "+r;for(var e=vv.charCodeAt(t-1),i=0,n=!1;e!==r.charCodeAt(0);){if(e++,e===jt&&e++,e===ie&&e++,e>ki){if(n)throw"Bad character: "+r;e=qr,n=!0}i+=1e5}return i}function pE(r){var t;switch(r){case"C":t=11e5;break;case"D":t=2e6;break;case"E":t=28e5;break;case"F":t=37e5;break;case"G":t=46e5;break;case"H":t=55e5;break;case"J":t=64e5;break;case"K":t=73e5;break;case"L":t=82e5;break;case"M":t=91e5;break;case"N":t=0;break;case"P":t=8e5;break;case"Q":t=17e5;break;case"R":t=26e5;break;case"S":t=35e5;break;case"T":t=44e5;break;case"U":t=53e5;break;case"V":t=62e5;break;case"W":t=7e6;break;case"X":t=79e5;break;default:t=-1}if(t>=0)return t;throw"Invalid zone letter: "+r}function oi(r,t,e){if(!(this instanceof oi))return new oi(r,t,e);if(Array.isArray(r))this.x=r[0],this.y=r[1],this.z=r[2]||0;else if(typeof r=="object")this.x=r.x,this.y=r.y,this.z=r.z||0;else if(typeof r=="string"&&typeof t>"u"){var i=r.split(",");this.x=parseFloat(i[0],10),this.y=parseFloat(i[1],10),this.z=parseFloat(i[2],10)||0}else this.x=r,this.y=t,this.z=e||0;console.warn("proj4.Point will be removed in version 3, use proj4.toPoint")}oi.fromMGRS=function(r){return new oi(_v(r))};oi.prototype.toMGRS=function(r){return mv([this.x,this.y],r)};var vE=1,mE=.25,sf=.046875,lf=.01953125,uf=.01068115234375,_E=.75,gE=.46875,yE=.013020833333333334,bE=.007120768229166667,wE=.3645833333333333,xE=.005696614583333333,AE=.3076171875;function bv(r){var t=[];t[0]=vE-r*(mE+r*(sf+r*(lf+r*uf))),t[1]=r*(_E-r*(sf+r*(lf+r*uf)));var e=r*r;return t[2]=e*(gE-r*(yE+r*bE)),e*=r,t[3]=e*(wE-r*xE),t[4]=e*r*AE,t}function Qo(r,t,e,i){return e*=t,t*=t,i[0]*r-e*(i[1]+t*(i[2]+t*(i[3]+t*i[4])))}var EE=20;function wv(r,t,e){for(var i=1/(1-t),n=r,a=EE;a;--a){var o=Math.sin(n),s=1-t*o*o;if(s=(Qo(n,o,Math.cos(n),e)-r)*(s*Math.sqrt(s))*i,n-=s,Math.abs(s)<S)return n}return n}function CE(){this.x0=this.x0!==void 0?this.x0:0,this.y0=this.y0!==void 0?this.y0:0,this.long0=this.long0!==void 0?this.long0:0,this.lat0=this.lat0!==void 0?this.lat0:0,this.es&&(this.en=bv(this.es),this.ml0=Qo(this.lat0,Math.sin(this.lat0),Math.cos(this.lat0),this.en))}function TE(r){var t=r.x,e=r.y,i=R(t-this.long0),n,a,o,s=Math.sin(e),l=Math.cos(e);if(this.es){var h=l*i,c=Math.pow(h,2),d=this.ep2*Math.pow(l,2),f=Math.pow(d,2),p=Math.abs(l)>S?Math.tan(e):0,v=Math.pow(p,2),m=Math.pow(v,2);n=1-this.es*Math.pow(s,2),h=h/Math.sqrt(n);var _=Qo(e,s,l,this.en);a=this.a*(this.k0*h*(1+c/6*(1-v+d+c/20*(5-18*v+m+14*d-58*v*d+c/42*(61+179*m-m*v-479*v)))))+this.x0,o=this.a*(this.k0*(_-this.ml0+s*i*h/2*(1+c/12*(5-v+9*d+4*f+c/30*(61+m-58*v+270*d-330*v*d+c/56*(1385+543*m-m*v-3111*v))))))+this.y0}else{var u=l*Math.sin(i);if(Math.abs(Math.abs(u)-1)<S)return 93;if(a=.5*this.a*this.k0*Math.log((1+u)/(1-u))+this.x0,o=l*Math.cos(i)/Math.sqrt(1-Math.pow(u,2)),u=Math.abs(o),u>=1){if(u-1>S)return 93;o=0}else o=Math.acos(o);e<0&&(o=-o),o=this.a*this.k0*(o-this.lat0)+this.y0}return r.x=a,r.y=o,r}function ME(r){var t,e,i,n,a=(r.x-this.x0)*(1/this.a),o=(r.y-this.y0)*(1/this.a);if(this.es)if(t=this.ml0+o/this.k0,e=wv(t,this.es,this.en),Math.abs(e)<T){var c=Math.sin(e),d=Math.cos(e),f=Math.abs(d)>S?Math.tan(e):0,p=this.ep2*Math.pow(d,2),v=Math.pow(p,2),m=Math.pow(f,2),_=Math.pow(m,2);t=1-this.es*Math.pow(c,2);var g=a*Math.sqrt(t)/this.k0,y=Math.pow(g,2);t=t*f,i=e-t*y/(1-this.es)*.5*(1-y/12*(5+3*m-9*p*m+p-4*v-y/30*(61+90*m-252*p*m+45*_+46*p-y/56*(1385+3633*m+4095*_+1574*_*m)))),n=R(this.long0+g*(1-y/6*(1+2*m+p-y/20*(5+28*m+24*_+8*p*m+6*p-y/42*(61+662*m+1320*_+720*_*m))))/d)}else i=T*mn(o),n=0;else{var s=Math.exp(a/this.k0),l=.5*(s-1/s),u=this.lat0+o/this.k0,h=Math.cos(u);t=Math.sqrt((1-Math.pow(h,2))/(1+Math.pow(l,2))),i=Math.asin(t),o<0&&(i=-i),l===0&&h===0?n=0:n=R(Math.atan2(l,h)+this.long0)}return r.x=n,r.y=i,r}var OE=["Fast_Transverse_Mercator","Fast Transverse Mercator"];const La={init:CE,forward:TE,inverse:ME,names:OE};function xv(r){var t=Math.exp(r);return t=(t-1/t)/2,t}function fe(r,t){r=Math.abs(r),t=Math.abs(t);var e=Math.max(r,t),i=Math.min(r,t)/(e||1);return e*Math.sqrt(1+Math.pow(i,2))}function SE(r){var t=1+r,e=t-1;return e===0?r:r*Math.log(t)/e}function IE(r){var t=Math.abs(r);return t=SE(t*(1+t/(fe(1,t)+1))),r<0?-t:t}function Ru(r,t){for(var e=2*Math.cos(2*t),i=r.length-1,n=r[i],a=0,o;--i>=0;)o=-a+e*n+r[i],a=n,n=o;return t+o*Math.sin(2*t)}function RE(r,t){for(var e=2*Math.cos(t),i=r.length-1,n=r[i],a=0,o;--i>=0;)o=-a+e*n+r[i],a=n,n=o;return Math.sin(t)*o}function PE(r){var t=Math.exp(r);return t=(t+1/t)/2,t}function Av(r,t,e){for(var i=Math.sin(t),n=Math.cos(t),a=xv(e),o=PE(e),s=2*n*o,l=-2*i*a,u=r.length-1,h=r[u],c=0,d=0,f=0,p,v;--u>=0;)p=d,v=c,d=h,c=f,h=-p+s*d-l*c+r[u],f=-v+l*d+s*c;return s=i*o,l=n*a,[s*h-l*f,s*f+l*h]}function DE(){if(!this.approx&&(isNaN(this.es)||this.es<=0))throw new Error('Incorrect elliptical usage. Try using the +approx option in the proj string, or PROJECTION["Fast_Transverse_Mercator"] in the WKT.');this.approx&&(La.init.apply(this),this.forward=La.forward,this.inverse=La.inverse),this.x0=this.x0!==void 0?this.x0:0,this.y0=this.y0!==void 0?this.y0:0,this.long0=this.long0!==void 0?this.long0:0,this.lat0=this.lat0!==void 0?this.lat0:0,this.cgb=[],this.cbg=[],this.utg=[],this.gtu=[];var r=this.es/(1+Math.sqrt(1-this.es)),t=r/(2-r),e=t;this.cgb[0]=t*(2+t*(-2/3+t*(-2+t*(116/45+t*(26/45+t*(-2854/675)))))),this.cbg[0]=t*(-2+t*(2/3+t*(4/3+t*(-82/45+t*(32/45+t*(4642/4725)))))),e=e*t,this.cgb[1]=e*(7/3+t*(-8/5+t*(-227/45+t*(2704/315+t*(2323/945))))),this.cbg[1]=e*(5/3+t*(-16/15+t*(-13/9+t*(904/315+t*(-1522/945))))),e=e*t,this.cgb[2]=e*(56/15+t*(-136/35+t*(-1262/105+t*(73814/2835)))),this.cbg[2]=e*(-26/15+t*(34/21+t*(8/5+t*(-12686/2835)))),e=e*t,this.cgb[3]=e*(4279/630+t*(-332/35+t*(-399572/14175))),this.cbg[3]=e*(1237/630+t*(-12/5+t*(-24832/14175))),e=e*t,this.cgb[4]=e*(4174/315+t*(-144838/6237)),this.cbg[4]=e*(-734/315+t*(109598/31185)),e=e*t,this.cgb[5]=e*(601676/22275),this.cbg[5]=e*(444337/155925),e=Math.pow(t,2),this.Qn=this.k0/(1+t)*(1+e*(1/4+e*(1/64+e/256))),this.utg[0]=t*(-.5+t*(2/3+t*(-37/96+t*(1/360+t*(81/512+t*(-96199/604800)))))),this.gtu[0]=t*(.5+t*(-2/3+t*(5/16+t*(41/180+t*(-127/288+t*(7891/37800)))))),this.utg[1]=e*(-1/48+t*(-1/15+t*(437/1440+t*(-46/105+t*(1118711/3870720))))),this.gtu[1]=e*(13/48+t*(-3/5+t*(557/1440+t*(281/630+t*(-1983433/1935360))))),e=e*t,this.utg[2]=e*(-17/480+t*(37/840+t*(209/4480+t*(-5569/90720)))),this.gtu[2]=e*(61/240+t*(-103/140+t*(15061/26880+t*(167603/181440)))),e=e*t,this.utg[3]=e*(-4397/161280+t*(11/504+t*(830251/7257600))),this.gtu[3]=e*(49561/161280+t*(-179/168+t*(6601661/7257600))),e=e*t,this.utg[4]=e*(-4583/161280+t*(108847/3991680)),this.gtu[4]=e*(34729/80640+t*(-3418889/1995840)),e=e*t,this.utg[5]=e*(-20648693/638668800),this.gtu[5]=e*(212378941/319334400);var i=Ru(this.cbg,this.lat0);this.Zb=-this.Qn*(i+RE(this.gtu,2*i))}function kE(r){var t=R(r.x-this.long0),e=r.y;e=Ru(this.cbg,e);var i=Math.sin(e),n=Math.cos(e),a=Math.sin(t),o=Math.cos(t);e=Math.atan2(i,o*n),t=Math.atan2(a*n,fe(i,n*o)),t=IE(Math.tan(t));var s=Av(this.gtu,2*e,2*t);e=e+s[0],t=t+s[1];var l,u;return Math.abs(t)<=2.623395162778?(l=this.a*(this.Qn*t)+this.x0,u=this.a*(this.Qn*e+this.Zb)+this.y0):(l=1/0,u=1/0),r.x=l,r.y=u,r}function LE(r){var t=(r.x-this.x0)*(1/this.a),e=(r.y-this.y0)*(1/this.a);e=(e-this.Zb)/this.Qn,t=t/this.Qn;var i,n;if(Math.abs(t)<=2.623395162778){var a=Av(this.utg,2*e,2*t);e=e+a[0],t=t+a[1],t=Math.atan(xv(t));var o=Math.sin(e),s=Math.cos(e),l=Math.sin(t),u=Math.cos(t);e=Math.atan2(o*u,fe(l,u*s)),t=Math.atan2(l,u*s),i=R(t+this.long0),n=Ru(this.cgb,e)}else i=1/0,n=1/0;return r.x=i,r.y=n,r}var FE=["Extended_Transverse_Mercator","Extended Transverse Mercator","etmerc","Transverse_Mercator","Transverse Mercator","tmerc"];const Fa={init:DE,forward:kE,inverse:LE,names:FE};function $E(r,t){if(r===void 0){if(r=Math.floor((R(t)+Math.PI)*30/Math.PI)+1,r<0)return 0;if(r>60)return 60}return r}var NE="etmerc";function BE(){var r=$E(this.zone,this.long0);if(r===void 0)throw new Error("unknown utm zone");this.lat0=0,this.long0=(6*Math.abs(r)-183)*Dt,this.x0=5e5,this.y0=this.utmSouth?1e7:0,this.k0=.9996,Fa.init.apply(this),this.forward=Fa.forward,this.inverse=Fa.inverse}var zE=["Universal Transverse Mercator System","utm"];const GE={init:BE,names:zE,dependsOn:NE};function Pu(r,t){return Math.pow((1-r)/(1+r),t)}var YE=20;function UE(){var r=Math.sin(this.lat0),t=Math.cos(this.lat0);t*=t,this.rc=Math.sqrt(1-this.es)/(1-this.es*r*r),this.C=Math.sqrt(1+this.es*t*t/(1-this.es)),this.phic0=Math.asin(r/this.C),this.ratexp=.5*this.C*this.e,this.K=Math.tan(.5*this.phic0+it)/(Math.pow(Math.tan(.5*this.lat0+it),this.C)*Pu(this.e*r,this.ratexp))}function jE(r){var t=r.x,e=r.y;return r.y=2*Math.atan(this.K*Math.pow(Math.tan(.5*e+it),this.C)*Pu(this.e*Math.sin(e),this.ratexp))-T,r.x=this.C*t,r}function WE(r){for(var t=1e-14,e=r.x/this.C,i=r.y,n=Math.pow(Math.tan(.5*i+it)/this.K,1/this.C),a=YE;a>0&&(i=2*Math.atan(n*Pu(this.e*Math.sin(r.y),-.5*this.e))-T,!(Math.abs(i-r.y)<t));--a)r.y=i;return a?(r.x=e,r.y=i,r):null}var VE=["gauss"];const Du={init:UE,forward:jE,inverse:WE,names:VE};function qE(){Du.init.apply(this),this.rc&&(this.sinc0=Math.sin(this.phic0),this.cosc0=Math.cos(this.phic0),this.R2=2*this.rc,this.title||(this.title="Oblique Stereographic Alternative"))}function HE(r){var t,e,i,n;return r.x=R(r.x-this.long0),Du.forward.apply(this,[r]),t=Math.sin(r.y),e=Math.cos(r.y),i=Math.cos(r.x),n=this.k0*this.R2/(1+this.sinc0*t+this.cosc0*e*i),r.x=n*e*Math.sin(r.x),r.y=n*(this.cosc0*t-this.sinc0*e*i),r.x=this.a*r.x+this.x0,r.y=this.a*r.y+this.y0,r}function XE(r){var t,e,i,n,a;if(r.x=(r.x-this.x0)/this.a,r.y=(r.y-this.y0)/this.a,r.x/=this.k0,r.y/=this.k0,a=Math.sqrt(r.x*r.x+r.y*r.y)){var o=2*Math.atan2(a,this.R2);t=Math.sin(o),e=Math.cos(o),n=Math.asin(e*this.sinc0+r.y*t*this.cosc0/a),i=Math.atan2(r.x*t,a*this.cosc0*e-r.y*this.sinc0*t)}else n=this.phic0,i=0;return r.x=i,r.y=n,Du.inverse.apply(this,[r]),r.x=R(r.x+this.long0),r}var ZE=["Stereographic_North_Pole","Oblique_Stereographic","Polar_Stereographic","sterea","Oblique Stereographic Alternative","Double_Stereographic"];const QE={init:qE,forward:HE,inverse:XE,names:ZE};function KE(r,t,e){return t*=e,Math.tan(.5*(T+r))*Math.pow((1-t)/(1+t),.5*e)}function JE(){this.coslat0=Math.cos(this.lat0),this.sinlat0=Math.sin(this.lat0),this.sphere?this.k0===1&&!isNaN(this.lat_ts)&&Math.abs(this.coslat0)<=S&&(this.k0=.5*(1+mn(this.lat0)*Math.sin(this.lat_ts))):(Math.abs(this.coslat0)<=S&&(this.lat0>0?this.con=1:this.con=-1),this.cons=Math.sqrt(Math.pow(1+this.e,1+this.e)*Math.pow(1-this.e,1-this.e)),this.k0===1&&!isNaN(this.lat_ts)&&Math.abs(this.coslat0)<=S&&(this.k0=.5*this.cons*Te(this.e,Math.sin(this.lat_ts),Math.cos(this.lat_ts))/pe(this.e,this.con*this.lat_ts,this.con*Math.sin(this.lat_ts))),this.ms1=Te(this.e,this.sinlat0,this.coslat0),this.X0=2*Math.atan(this.ssfn_(this.lat0,this.sinlat0,this.e))-T,this.cosX0=Math.cos(this.X0),this.sinX0=Math.sin(this.X0))}function tC(r){var t=r.x,e=r.y,i=Math.sin(e),n=Math.cos(e),a,o,s,l,u,h,c=R(t-this.long0);return Math.abs(Math.abs(t-this.long0)-Math.PI)<=S&&Math.abs(e+this.lat0)<=S?(r.x=NaN,r.y=NaN,r):this.sphere?(a=2*this.k0/(1+this.sinlat0*i+this.coslat0*n*Math.cos(c)),r.x=this.a*a*n*Math.sin(c)+this.x0,r.y=this.a*a*(this.coslat0*i-this.sinlat0*n*Math.cos(c))+this.y0,r):(o=2*Math.atan(this.ssfn_(e,i,this.e))-T,l=Math.cos(o),s=Math.sin(o),Math.abs(this.coslat0)<=S?(u=pe(this.e,e*this.con,this.con*i),h=2*this.a*this.k0*u/this.cons,r.x=this.x0+h*Math.sin(t-this.long0),r.y=this.y0-this.con*h*Math.cos(t-this.long0),r):(Math.abs(this.sinlat0)<S?(a=2*this.a*this.k0/(1+l*Math.cos(c)),r.y=a*s):(a=2*this.a*this.k0*this.ms1/(this.cosX0*(1+this.sinX0*s+this.cosX0*l*Math.cos(c))),r.y=a*(this.cosX0*s-this.sinX0*l*Math.cos(c))+this.y0),r.x=a*l*Math.sin(c)+this.x0,r))}function eC(r){r.x-=this.x0,r.y-=this.y0;var t,e,i,n,a,o=Math.sqrt(r.x*r.x+r.y*r.y);if(this.sphere){var s=2*Math.atan(o/(2*this.a*this.k0));return t=this.long0,e=this.lat0,o<=S?(r.x=t,r.y=e,r):(e=Math.asin(Math.cos(s)*this.sinlat0+r.y*Math.sin(s)*this.coslat0/o),Math.abs(this.coslat0)<S?this.lat0>0?t=R(this.long0+Math.atan2(r.x,-1*r.y)):t=R(this.long0+Math.atan2(r.x,r.y)):t=R(this.long0+Math.atan2(r.x*Math.sin(s),o*this.coslat0*Math.cos(s)-r.y*this.sinlat0*Math.sin(s))),r.x=t,r.y=e,r)}else if(Math.abs(this.coslat0)<=S){if(o<=S)return e=this.lat0,t=this.long0,r.x=t,r.y=e,r;r.x*=this.con,r.y*=this.con,i=o*this.cons/(2*this.a*this.k0),e=this.con*Xi(this.e,i),t=this.con*R(this.con*this.long0+Math.atan2(r.x,-1*r.y))}else n=2*Math.atan(o*this.cosX0/(2*this.a*this.k0*this.ms1)),t=this.long0,o<=S?a=this.X0:(a=Math.asin(Math.cos(n)*this.sinX0+r.y*Math.sin(n)*this.cosX0/o),t=R(this.long0+Math.atan2(r.x*Math.sin(n),o*this.cosX0*Math.cos(n)-r.y*this.sinX0*Math.sin(n)))),e=-1*Xi(this.e,Math.tan(.5*(T+a)));return r.x=t,r.y=e,r}var rC=["stere","Stereographic_South_Pole","Polar Stereographic (variant B)"];const iC={init:JE,forward:tC,inverse:eC,names:rC,ssfn_:KE};function nC(){var r=this.lat0;this.lambda0=this.long0;var t=Math.sin(r),e=this.a,i=this.rf,n=1/i,a=2*n-Math.pow(n,2),o=this.e=Math.sqrt(a);this.R=this.k0*e*Math.sqrt(1-a)/(1-a*Math.pow(t,2)),this.alpha=Math.sqrt(1+a/(1-a)*Math.pow(Math.cos(r),4)),this.b0=Math.asin(t/this.alpha);var s=Math.log(Math.tan(Math.PI/4+this.b0/2)),l=Math.log(Math.tan(Math.PI/4+r/2)),u=Math.log((1+o*t)/(1-o*t));this.K=s-this.alpha*l+this.alpha*o/2*u}function aC(r){var t=Math.log(Math.tan(Math.PI/4-r.y/2)),e=this.e/2*Math.log((1+this.e*Math.sin(r.y))/(1-this.e*Math.sin(r.y))),i=-this.alpha*(t+e)+this.K,n=2*(Math.atan(Math.exp(i))-Math.PI/4),a=this.alpha*(r.x-this.lambda0),o=Math.atan(Math.sin(a)/(Math.sin(this.b0)*Math.tan(n)+Math.cos(this.b0)*Math.cos(a))),s=Math.asin(Math.cos(this.b0)*Math.sin(n)-Math.sin(this.b0)*Math.cos(n)*Math.cos(a));return r.y=this.R/2*Math.log((1+Math.sin(s))/(1-Math.sin(s)))+this.y0,r.x=this.R*o+this.x0,r}function oC(r){for(var t=r.x-this.x0,e=r.y-this.y0,i=t/this.R,n=2*(Math.atan(Math.exp(e/this.R))-Math.PI/4),a=Math.asin(Math.cos(this.b0)*Math.sin(n)+Math.sin(this.b0)*Math.cos(n)*Math.cos(i)),o=Math.atan(Math.sin(i)/(Math.cos(this.b0)*Math.cos(i)-Math.sin(this.b0)*Math.tan(n))),s=this.lambda0+o/this.alpha,l=0,u=a,h=-1e3,c=0;Math.abs(u-h)>1e-7;){if(++c>20)return;l=1/this.alpha*(Math.log(Math.tan(Math.PI/4+a/2))-this.K)+this.e*Math.log(Math.tan(Math.PI/4+Math.asin(this.e*Math.sin(u))/2)),h=u,u=2*Math.atan(Math.exp(l))-Math.PI/2}return r.x=s,r.y=u,r}var sC=["somerc"];const lC={init:nC,forward:aC,inverse:oC,names:sC};var zr=1e-7;function uC(r){var t=["Hotine_Oblique_Mercator","Hotine_Oblique_Mercator_Azimuth_Natural_Origin"],e=typeof r.PROJECTION=="object"?Object.keys(r.PROJECTION)[0]:r.PROJECTION;return"no_uoff"in r||"no_off"in r||t.indexOf(e)!==-1}function hC(){var r,t,e,i,n,a,o,s,l,u,h=0,c,d=0,f=0,p=0,v=0,m=0,_=0;this.no_off=uC(this),this.no_rot="no_rot"in this;var g=!1;"alpha"in this&&(g=!0);var y=!1;if("rectified_grid_angle"in this&&(y=!0),g&&(_=this.alpha),y&&(h=this.rectified_grid_angle*Dt),g||y)d=this.longc;else if(f=this.long1,v=this.lat1,p=this.long2,m=this.lat2,Math.abs(v-m)<=zr||(r=Math.abs(v))<=zr||Math.abs(r-T)<=zr||Math.abs(Math.abs(this.lat0)-T)<=zr||Math.abs(Math.abs(m)-T)<=zr)throw new Error;var b=1-this.es;t=Math.sqrt(b),Math.abs(this.lat0)>S?(s=Math.sin(this.lat0),e=Math.cos(this.lat0),r=1-this.es*s*s,this.B=e*e,this.B=Math.sqrt(1+this.es*this.B*this.B/b),this.A=this.B*this.k0*t/r,i=this.B*t/(e*Math.sqrt(r)),n=i*i-1,n<=0?n=0:(n=Math.sqrt(n),this.lat0<0&&(n=-n)),this.E=n+=i,this.E*=Math.pow(pe(this.e,this.lat0,s),this.B)):(this.B=1/t,this.A=this.k0,this.E=i=n=1),g||y?(g?(c=Math.asin(Math.sin(_)/i),y||(h=_)):(c=h,_=Math.asin(i*Math.sin(c))),this.lam0=d-Math.asin(.5*(n-1/n)*Math.tan(c))/this.B):(a=Math.pow(pe(this.e,v,Math.sin(v)),this.B),o=Math.pow(pe(this.e,m,Math.sin(m)),this.B),n=this.E/a,l=(o-a)/(o+a),u=this.E*this.E,u=(u-o*a)/(u+o*a),r=f-p,r<-Math.pi?p-=qi:r>Math.pi&&(p+=qi),this.lam0=R(.5*(f+p)-Math.atan(u*Math.tan(.5*this.B*(f-p))/l)/this.B),c=Math.atan(2*Math.sin(this.B*R(f-this.lam0))/(n-1/n)),h=_=Math.asin(i*Math.sin(c))),this.singam=Math.sin(c),this.cosgam=Math.cos(c),this.sinrot=Math.sin(h),this.cosrot=Math.cos(h),this.rB=1/this.B,this.ArB=this.A*this.rB,this.BrA=1/this.ArB,this.A*this.B,this.no_off?this.u_0=0:(this.u_0=Math.abs(this.ArB*Math.atan(Math.sqrt(i*i-1)/Math.cos(_))),this.lat0<0&&(this.u_0=-this.u_0)),n=.5*c,this.v_pole_n=this.ArB*Math.log(Math.tan(it-n)),this.v_pole_s=this.ArB*Math.log(Math.tan(it+n))}function cC(r){var t={},e,i,n,a,o,s,l,u;if(r.x=r.x-this.lam0,Math.abs(Math.abs(r.y)-T)>S){if(o=this.E/Math.pow(pe(this.e,r.y,Math.sin(r.y)),this.B),s=1/o,e=.5*(o-s),i=.5*(o+s),a=Math.sin(this.B*r.x),n=(e*this.singam-a*this.cosgam)/i,Math.abs(Math.abs(n)-1)<S)throw new Error;u=.5*this.ArB*Math.log((1-n)/(1+n)),s=Math.cos(this.B*r.x),Math.abs(s)<zr?l=this.A*r.x:l=this.ArB*Math.atan2(e*this.cosgam+a*this.singam,s)}else u=r.y>0?this.v_pole_n:this.v_pole_s,l=this.ArB*r.y;return this.no_rot?(t.x=l,t.y=u):(l-=this.u_0,t.x=u*this.cosrot+l*this.sinrot,t.y=l*this.cosrot-u*this.sinrot),t.x=this.a*t.x+this.x0,t.y=this.a*t.y+this.y0,t}function dC(r){var t,e,i,n,a,o,s,l={};if(r.x=(r.x-this.x0)*(1/this.a),r.y=(r.y-this.y0)*(1/this.a),this.no_rot?(e=r.y,t=r.x):(e=r.x*this.cosrot-r.y*this.sinrot,t=r.y*this.cosrot+r.x*this.sinrot+this.u_0),i=Math.exp(-this.BrA*e),n=.5*(i-1/i),a=.5*(i+1/i),o=Math.sin(this.BrA*t),s=(o*this.cosgam+n*this.singam)/a,Math.abs(Math.abs(s)-1)<S)l.x=0,l.y=s<0?-T:T;else{if(l.y=this.E/Math.sqrt((1+s)/(1-s)),l.y=Xi(this.e,Math.pow(l.y,1/this.B)),l.y===1/0)throw new Error;l.x=-this.rB*Math.atan2(n*this.cosgam-o*this.singam,Math.cos(this.BrA*t))}return l.x+=this.lam0,l}var fC=["Hotine_Oblique_Mercator","Hotine Oblique Mercator","Hotine_Oblique_Mercator_Azimuth_Natural_Origin","Hotine_Oblique_Mercator_Two_Point_Natural_Origin","Hotine_Oblique_Mercator_Azimuth_Center","Oblique_Mercator","omerc"];const pC={init:hC,forward:cC,inverse:dC,names:fC};function vC(){if(this.lat2||(this.lat2=this.lat1),this.k0||(this.k0=1),this.x0=this.x0||0,this.y0=this.y0||0,!(Math.abs(this.lat1+this.lat2)<S)){var r=this.b/this.a;this.e=Math.sqrt(1-r*r);var t=Math.sin(this.lat1),e=Math.cos(this.lat1),i=Te(this.e,t,e),n=pe(this.e,this.lat1,t),a=Math.sin(this.lat2),o=Math.cos(this.lat2),s=Te(this.e,a,o),l=pe(this.e,this.lat2,a),u=pe(this.e,this.lat0,Math.sin(this.lat0));Math.abs(this.lat1-this.lat2)>S?this.ns=Math.log(i/s)/Math.log(n/l):this.ns=t,isNaN(this.ns)&&(this.ns=t),this.f0=i/(this.ns*Math.pow(n,this.ns)),this.rh=this.a*this.f0*Math.pow(u,this.ns),this.title||(this.title="Lambert Conformal Conic")}}function mC(r){var t=r.x,e=r.y;Math.abs(2*Math.abs(e)-Math.PI)<=S&&(e=mn(e)*(T-2*S));var i=Math.abs(Math.abs(e)-T),n,a;if(i>S)n=pe(this.e,e,Math.sin(e)),a=this.a*this.f0*Math.pow(n,this.ns);else{if(i=e*this.ns,i<=0)return null;a=0}var o=this.ns*R(t-this.long0);return r.x=this.k0*(a*Math.sin(o))+this.x0,r.y=this.k0*(this.rh-a*Math.cos(o))+this.y0,r}function _C(r){var t,e,i,n,a,o=(r.x-this.x0)/this.k0,s=this.rh-(r.y-this.y0)/this.k0;this.ns>0?(t=Math.sqrt(o*o+s*s),e=1):(t=-Math.sqrt(o*o+s*s),e=-1);var l=0;if(t!==0&&(l=Math.atan2(e*o,e*s)),t!==0||this.ns>0){if(e=1/this.ns,i=Math.pow(t/(this.a*this.f0),e),n=Xi(this.e,i),n===-9999)return null}else n=-T;return a=R(l/this.ns+this.long0),r.x=a,r.y=n,r}var gC=["Lambert Tangential Conformal Conic Projection","Lambert_Conformal_Conic","Lambert_Conformal_Conic_1SP","Lambert_Conformal_Conic_2SP","lcc","Lambert Conic Conformal (1SP)","Lambert Conic Conformal (2SP)"];const yC={init:vC,forward:mC,inverse:_C,names:gC};function bC(){this.a=6377397155e-3,this.es=.006674372230614,this.e=Math.sqrt(this.es),this.lat0||(this.lat0=.863937979737193),this.long0||(this.long0=.7417649320975901-.308341501185665),this.k0||(this.k0=.9999),this.s45=.785398163397448,this.s90=2*this.s45,this.fi0=this.lat0,this.e2=this.es,this.e=Math.sqrt(this.e2),this.alfa=Math.sqrt(1+this.e2*Math.pow(Math.cos(this.fi0),4)/(1-this.e2)),this.uq=1.04216856380474,this.u0=Math.asin(Math.sin(this.fi0)/this.alfa),this.g=Math.pow((1+this.e*Math.sin(this.fi0))/(1-this.e*Math.sin(this.fi0)),this.alfa*this.e/2),this.k=Math.tan(this.u0/2+this.s45)/Math.pow(Math.tan(this.fi0/2+this.s45),this.alfa)*this.g,this.k1=this.k0,this.n0=this.a*Math.sqrt(1-this.e2)/(1-this.e2*Math.pow(Math.sin(this.fi0),2)),this.s0=1.37008346281555,this.n=Math.sin(this.s0),this.ro0=this.k1*this.n0/Math.tan(this.s0),this.ad=this.s90-this.uq}function wC(r){var t,e,i,n,a,o,s,l=r.x,u=r.y,h=R(l-this.long0);return t=Math.pow((1+this.e*Math.sin(u))/(1-this.e*Math.sin(u)),this.alfa*this.e/2),e=2*(Math.atan(this.k*Math.pow(Math.tan(u/2+this.s45),this.alfa)/t)-this.s45),i=-h*this.alfa,n=Math.asin(Math.cos(this.ad)*Math.sin(e)+Math.sin(this.ad)*Math.cos(e)*Math.cos(i)),a=Math.asin(Math.cos(e)*Math.sin(i)/Math.cos(n)),o=this.n*a,s=this.ro0*Math.pow(Math.tan(this.s0/2+this.s45),this.n)/Math.pow(Math.tan(n/2+this.s45),this.n),r.y=s*Math.cos(o)/1,r.x=s*Math.sin(o)/1,this.czech||(r.y*=-1,r.x*=-1),r}function xC(r){var t,e,i,n,a,o,s,l,u=r.x;r.x=r.y,r.y=u,this.czech||(r.y*=-1,r.x*=-1),o=Math.sqrt(r.x*r.x+r.y*r.y),a=Math.atan2(r.y,r.x),n=a/Math.sin(this.s0),i=2*(Math.atan(Math.pow(this.ro0/o,1/this.n)*Math.tan(this.s0/2+this.s45))-this.s45),t=Math.asin(Math.cos(this.ad)*Math.sin(i)-Math.sin(this.ad)*Math.cos(i)*Math.cos(n)),e=Math.asin(Math.cos(i)*Math.sin(n)/Math.cos(t)),r.x=this.long0-e/this.alfa,s=t,l=0;var h=0;do r.y=2*(Math.atan(Math.pow(this.k,-1/this.alfa)*Math.pow(Math.tan(t/2+this.s45),1/this.alfa)*Math.pow((1+this.e*Math.sin(s))/(1-this.e*Math.sin(s)),this.e/2))-this.s45),Math.abs(s-r.y)<1e-10&&(l=1),s=r.y,h+=1;while(l===0&&h<15);return h>=15?null:r}var AC=["Krovak","krovak"];const EC={init:bC,forward:wC,inverse:xC,names:AC};function Gt(r,t,e,i,n){return r*n-t*Math.sin(2*n)+e*Math.sin(4*n)-i*Math.sin(6*n)}function _n(r){return 1-.25*r*(1+r/16*(3+1.25*r))}function gn(r){return .375*r*(1+.25*r*(1+.46875*r))}function yn(r){return .05859375*r*r*(1+.75*r)}function bn(r){return r*r*r*(35/3072)}function si(r,t,e){var i=t*e;return r/Math.sqrt(1-i*i)}function vi(r){return Math.abs(r)<T?r:r-mn(r)*Math.PI}function Co(r,t,e,i,n){var a,o;a=r/t;for(var s=0;s<15;s++)if(o=(r-(t*a-e*Math.sin(2*a)+i*Math.sin(4*a)-n*Math.sin(6*a)))/(t-2*e*Math.cos(2*a)+4*i*Math.cos(4*a)-6*n*Math.cos(6*a)),a+=o,Math.abs(o)<=1e-10)return a;return NaN}function CC(){this.sphere||(this.e0=_n(this.es),this.e1=gn(this.es),this.e2=yn(this.es),this.e3=bn(this.es),this.ml0=this.a*Gt(this.e0,this.e1,this.e2,this.e3,this.lat0))}function TC(r){var t,e,i=r.x,n=r.y;if(i=R(i-this.long0),this.sphere)t=this.a*Math.asin(Math.cos(n)*Math.sin(i)),e=this.a*(Math.atan2(Math.tan(n),Math.cos(i))-this.lat0);else{var a=Math.sin(n),o=Math.cos(n),s=si(this.a,this.e,a),l=Math.tan(n)*Math.tan(n),u=i*Math.cos(n),h=u*u,c=this.es*o*o/(1-this.es),d=this.a*Gt(this.e0,this.e1,this.e2,this.e3,n);t=s*u*(1-h*l*(1/6-(8-l+8*c)*h/120)),e=d-this.ml0+s*a/o*h*(.5+(5-l+6*c)*h/24)}return r.x=t+this.x0,r.y=e+this.y0,r}function MC(r){r.x-=this.x0,r.y-=this.y0;var t=r.x/this.a,e=r.y/this.a,i,n;if(this.sphere){var a=e+this.lat0;i=Math.asin(Math.sin(a)*Math.cos(t)),n=Math.atan2(Math.tan(t),Math.cos(a))}else{var o=this.ml0/this.a+e,s=Co(o,this.e0,this.e1,this.e2,this.e3);if(Math.abs(Math.abs(s)-T)<=S)return r.x=this.long0,r.y=T,e<0&&(r.y*=-1),r;var l=si(this.a,this.e,Math.sin(s)),u=l*l*l/this.a/this.a*(1-this.es),h=Math.pow(Math.tan(s),2),c=t*this.a/l,d=c*c;i=s-l*Math.tan(s)/u*c*c*(.5-(1+3*h)*c*c/24),n=c*(1-d*(h/3+(1+3*h)*h*d/15))/Math.cos(s)}return r.x=R(n+this.long0),r.y=vi(i),r}var OC=["Cassini","Cassini_Soldner","cass"];const SC={init:CC,forward:TC,inverse:MC,names:OC};function nr(r,t){var e;return r>1e-7?(e=r*t,(1-r*r)*(t/(1-e*e)-.5/r*Math.log((1-e)/(1+e)))):2*t}var IC=1,RC=2,PC=3,DC=4;function kC(){var r=Math.abs(this.lat0);if(Math.abs(r-T)<S?this.mode=this.lat0<0?this.S_POLE:this.N_POLE:Math.abs(r)<S?this.mode=this.EQUIT:this.mode=this.OBLIQ,this.es>0){var t;switch(this.qp=nr(this.e,1),this.mmf=.5/(1-this.es),this.apa=UC(this.es),this.mode){case this.N_POLE:this.dd=1;break;case this.S_POLE:this.dd=1;break;case this.EQUIT:this.rq=Math.sqrt(.5*this.qp),this.dd=1/this.rq,this.xmf=1,this.ymf=.5*this.qp;break;case this.OBLIQ:this.rq=Math.sqrt(.5*this.qp),t=Math.sin(this.lat0),this.sinb1=nr(this.e,t)/this.qp,this.cosb1=Math.sqrt(1-this.sinb1*this.sinb1),this.dd=Math.cos(this.lat0)/(Math.sqrt(1-this.es*t*t)*this.rq*this.cosb1),this.ymf=(this.xmf=this.rq)/this.dd,this.xmf*=this.dd;break}}else this.mode===this.OBLIQ&&(this.sinph0=Math.sin(this.lat0),this.cosph0=Math.cos(this.lat0))}function LC(r){var t,e,i,n,a,o,s,l,u,h,c=r.x,d=r.y;if(c=R(c-this.long0),this.sphere){if(a=Math.sin(d),h=Math.cos(d),i=Math.cos(c),this.mode===this.OBLIQ||this.mode===this.EQUIT){if(e=this.mode===this.EQUIT?1+h*i:1+this.sinph0*a+this.cosph0*h*i,e<=S)return null;e=Math.sqrt(2/e),t=e*h*Math.sin(c),e*=this.mode===this.EQUIT?a:this.cosph0*a-this.sinph0*h*i}else if(this.mode===this.N_POLE||this.mode===this.S_POLE){if(this.mode===this.N_POLE&&(i=-i),Math.abs(d+this.lat0)<S)return null;e=it-d*.5,e=2*(this.mode===this.S_POLE?Math.cos(e):Math.sin(e)),t=e*Math.sin(c),e*=i}}else{switch(s=0,l=0,u=0,i=Math.cos(c),n=Math.sin(c),a=Math.sin(d),o=nr(this.e,a),(this.mode===this.OBLIQ||this.mode===this.EQUIT)&&(s=o/this.qp,l=Math.sqrt(1-s*s)),this.mode){case this.OBLIQ:u=1+this.sinb1*s+this.cosb1*l*i;break;case this.EQUIT:u=1+l*i;break;case this.N_POLE:u=T+d,o=this.qp-o;break;case this.S_POLE:u=d-T,o=this.qp+o;break}if(Math.abs(u)<S)return null;switch(this.mode){case this.OBLIQ:case this.EQUIT:u=Math.sqrt(2/u),this.mode===this.OBLIQ?e=this.ymf*u*(this.cosb1*s-this.sinb1*l*i):e=(u=Math.sqrt(2/(1+l*i)))*s*this.ymf,t=this.xmf*u*l*n;break;case this.N_POLE:case this.S_POLE:o>=0?(t=(u=Math.sqrt(o))*n,e=i*(this.mode===this.S_POLE?u:-u)):t=e=0;break}}return r.x=this.a*t+this.x0,r.y=this.a*e+this.y0,r}function FC(r){r.x-=this.x0,r.y-=this.y0;var t=r.x/this.a,e=r.y/this.a,i,n,a,o,s,l,u;if(this.sphere){var h=0,c,d=0;if(c=Math.sqrt(t*t+e*e),n=c*.5,n>1)return null;switch(n=2*Math.asin(n),(this.mode===this.OBLIQ||this.mode===this.EQUIT)&&(d=Math.sin(n),h=Math.cos(n)),this.mode){case this.EQUIT:n=Math.abs(c)<=S?0:Math.asin(e*d/c),t*=d,e=h*c;break;case this.OBLIQ:n=Math.abs(c)<=S?this.lat0:Math.asin(h*this.sinph0+e*d*this.cosph0/c),t*=d*this.cosph0,e=(h-Math.sin(n)*this.sinph0)*c;break;case this.N_POLE:e=-e,n=T-n;break;case this.S_POLE:n-=T;break}i=e===0&&(this.mode===this.EQUIT||this.mode===this.OBLIQ)?0:Math.atan2(t,e)}else{if(u=0,this.mode===this.OBLIQ||this.mode===this.EQUIT){if(t/=this.dd,e*=this.dd,l=Math.sqrt(t*t+e*e),l<S)return r.x=this.long0,r.y=this.lat0,r;o=2*Math.asin(.5*l/this.rq),a=Math.cos(o),t*=o=Math.sin(o),this.mode===this.OBLIQ?(u=a*this.sinb1+e*o*this.cosb1/l,s=this.qp*u,e=l*this.cosb1*a-e*this.sinb1*o):(u=e*o/l,s=this.qp*u,e=l*a)}else if(this.mode===this.N_POLE||this.mode===this.S_POLE){if(this.mode===this.N_POLE&&(e=-e),s=t*t+e*e,!s)return r.x=this.long0,r.y=this.lat0,r;u=1-s/this.qp,this.mode===this.S_POLE&&(u=-u)}i=Math.atan2(t,e),n=jC(Math.asin(u),this.apa)}return r.x=R(this.long0+i),r.y=n,r}var $C=.3333333333333333,NC=.17222222222222222,BC=.10257936507936508,zC=.06388888888888888,GC=.0664021164021164,YC=.016415012942191543;function UC(r){var t,e=[];return e[0]=r*$C,t=r*r,e[0]+=t*NC,e[1]=t*zC,t*=r,e[0]+=t*BC,e[1]+=t*GC,e[2]=t*YC,e}function jC(r,t){var e=r+r;return r+t[0]*Math.sin(e)+t[1]*Math.sin(e+e)+t[2]*Math.sin(e+e+e)}var WC=["Lambert Azimuthal Equal Area","Lambert_Azimuthal_Equal_Area","laea"];const VC={init:kC,forward:LC,inverse:FC,names:WC,S_POLE:IC,N_POLE:RC,EQUIT:PC,OBLIQ:DC};function lr(r){return Math.abs(r)>1&&(r=r>1?1:-1),Math.asin(r)}function qC(){Math.abs(this.lat1+this.lat2)<S||(this.temp=this.b/this.a,this.es=1-Math.pow(this.temp,2),this.e3=Math.sqrt(this.es),this.sin_po=Math.sin(this.lat1),this.cos_po=Math.cos(this.lat1),this.t1=this.sin_po,this.con=this.sin_po,this.ms1=Te(this.e3,this.sin_po,this.cos_po),this.qs1=nr(this.e3,this.sin_po),this.sin_po=Math.sin(this.lat2),this.cos_po=Math.cos(this.lat2),this.t2=this.sin_po,this.ms2=Te(this.e3,this.sin_po,this.cos_po),this.qs2=nr(this.e3,this.sin_po),this.sin_po=Math.sin(this.lat0),this.cos_po=Math.cos(this.lat0),this.t3=this.sin_po,this.qs0=nr(this.e3,this.sin_po),Math.abs(this.lat1-this.lat2)>S?this.ns0=(this.ms1*this.ms1-this.ms2*this.ms2)/(this.qs2-this.qs1):this.ns0=this.con,this.c=this.ms1*this.ms1+this.ns0*this.qs1,this.rh=this.a*Math.sqrt(this.c-this.ns0*this.qs0)/this.ns0)}function HC(r){var t=r.x,e=r.y;this.sin_phi=Math.sin(e),this.cos_phi=Math.cos(e);var i=nr(this.e3,this.sin_phi),n=this.a*Math.sqrt(this.c-this.ns0*i)/this.ns0,a=this.ns0*R(t-this.long0),o=n*Math.sin(a)+this.x0,s=this.rh-n*Math.cos(a)+this.y0;return r.x=o,r.y=s,r}function XC(r){var t,e,i,n,a,o;return r.x-=this.x0,r.y=this.rh-r.y+this.y0,this.ns0>=0?(t=Math.sqrt(r.x*r.x+r.y*r.y),i=1):(t=-Math.sqrt(r.x*r.x+r.y*r.y),i=-1),n=0,t!==0&&(n=Math.atan2(i*r.x,i*r.y)),i=t*this.ns0/this.a,this.sphere?o=Math.asin((this.c-i*i)/(2*this.ns0)):(e=(this.c-i*i)/this.ns0,o=this.phi1z(this.e3,e)),a=R(n/this.ns0+this.long0),r.x=a,r.y=o,r}function ZC(r,t){var e,i,n,a,o,s=lr(.5*t);if(r<S)return s;for(var l=r*r,u=1;u<=25;u++)if(e=Math.sin(s),i=Math.cos(s),n=r*e,a=1-n*n,o=.5*a*a/i*(t/(1-l)-e/a+.5/r*Math.log((1-n)/(1+n))),s=s+o,Math.abs(o)<=1e-7)return s;return null}var QC=["Albers_Conic_Equal_Area","Albers","aea"];const KC={init:qC,forward:HC,inverse:XC,names:QC,phi1z:ZC};function JC(){this.sin_p14=Math.sin(this.lat0),this.cos_p14=Math.cos(this.lat0),this.infinity_dist=1e3*this.a,this.rc=1}function tT(r){var t,e,i,n,a,o,s,l,u=r.x,h=r.y;return i=R(u-this.long0),t=Math.sin(h),e=Math.cos(h),n=Math.cos(i),o=this.sin_p14*t+this.cos_p14*e*n,a=1,o>0||Math.abs(o)<=S?(s=this.x0+this.a*a*e*Math.sin(i)/o,l=this.y0+this.a*a*(this.cos_p14*t-this.sin_p14*e*n)/o):(s=this.x0+this.infinity_dist*e*Math.sin(i),l=this.y0+this.infinity_dist*(this.cos_p14*t-this.sin_p14*e*n)),r.x=s,r.y=l,r}function eT(r){var t,e,i,n,a,o;return r.x=(r.x-this.x0)/this.a,r.y=(r.y-this.y0)/this.a,r.x/=this.k0,r.y/=this.k0,(t=Math.sqrt(r.x*r.x+r.y*r.y))?(n=Math.atan2(t,this.rc),e=Math.sin(n),i=Math.cos(n),o=lr(i*this.sin_p14+r.y*e*this.cos_p14/t),a=Math.atan2(r.x*e,t*this.cos_p14*i-r.y*this.sin_p14*e),a=R(this.long0+a)):(o=this.phic0,a=0),r.x=a,r.y=o,r}var rT=["gnom"];const iT={init:JC,forward:tT,inverse:eT,names:rT};function nT(r,t){var e=1-(1-r*r)/(2*r)*Math.log((1-r)/(1+r));if(Math.abs(Math.abs(t)-e)<1e-6)return t<0?-1*T:T;for(var i=Math.asin(.5*t),n,a,o,s,l=0;l<30;l++)if(a=Math.sin(i),o=Math.cos(i),s=r*a,n=Math.pow(1-s*s,2)/(2*o)*(t/(1-r*r)-a/(1-s*s)+.5/r*Math.log((1-s)/(1+s))),i+=n,Math.abs(n)<=1e-10)return i;return NaN}function aT(){this.sphere||(this.k0=Te(this.e,Math.sin(this.lat_ts),Math.cos(this.lat_ts)))}function oT(r){var t=r.x,e=r.y,i,n,a=R(t-this.long0);if(this.sphere)i=this.x0+this.a*a*Math.cos(this.lat_ts),n=this.y0+this.a*Math.sin(e)/Math.cos(this.lat_ts);else{var o=nr(this.e,Math.sin(e));i=this.x0+this.a*this.k0*a,n=this.y0+this.a*o*.5/this.k0}return r.x=i,r.y=n,r}function sT(r){r.x-=this.x0,r.y-=this.y0;var t,e;return this.sphere?(t=R(this.long0+r.x/this.a/Math.cos(this.lat_ts)),e=Math.asin(r.y/this.a*Math.cos(this.lat_ts))):(e=nT(this.e,2*r.y*this.k0/this.a),t=R(this.long0+r.x/(this.a*this.k0))),r.x=t,r.y=e,r}var lT=["cea"];const uT={init:aT,forward:oT,inverse:sT,names:lT};function hT(){this.x0=this.x0||0,this.y0=this.y0||0,this.lat0=this.lat0||0,this.long0=this.long0||0,this.lat_ts=this.lat_ts||0,this.title=this.title||"Equidistant Cylindrical (Plate Carre)",this.rc=Math.cos(this.lat_ts)}function cT(r){var t=r.x,e=r.y,i=R(t-this.long0),n=vi(e-this.lat0);return r.x=this.x0+this.a*i*this.rc,r.y=this.y0+this.a*n,r}function dT(r){var t=r.x,e=r.y;return r.x=R(this.long0+(t-this.x0)/(this.a*this.rc)),r.y=vi(this.lat0+(e-this.y0)/this.a),r}var fT=["Equirectangular","Equidistant_Cylindrical","eqc"];const pT={init:hT,forward:cT,inverse:dT,names:fT};var hf=20;function vT(){this.temp=this.b/this.a,this.es=1-Math.pow(this.temp,2),this.e=Math.sqrt(this.es),this.e0=_n(this.es),this.e1=gn(this.es),this.e2=yn(this.es),this.e3=bn(this.es),this.ml0=this.a*Gt(this.e0,this.e1,this.e2,this.e3,this.lat0)}function mT(r){var t=r.x,e=r.y,i,n,a,o=R(t-this.long0);if(a=o*Math.sin(e),this.sphere)Math.abs(e)<=S?(i=this.a*o,n=-1*this.a*this.lat0):(i=this.a*Math.sin(a)/Math.tan(e),n=this.a*(vi(e-this.lat0)+(1-Math.cos(a))/Math.tan(e)));else if(Math.abs(e)<=S)i=this.a*o,n=-1*this.ml0;else{var s=si(this.a,this.e,Math.sin(e))/Math.tan(e);i=s*Math.sin(a),n=this.a*Gt(this.e0,this.e1,this.e2,this.e3,e)-this.ml0+s*(1-Math.cos(a))}return r.x=i+this.x0,r.y=n+this.y0,r}function _T(r){var t,e,i,n,a,o,s,l,u;if(i=r.x-this.x0,n=r.y-this.y0,this.sphere)if(Math.abs(n+this.a*this.lat0)<=S)t=R(i/this.a+this.long0),e=0;else{o=this.lat0+n/this.a,s=i*i/this.a/this.a+o*o,l=o;var h;for(a=hf;a;--a)if(h=Math.tan(l),u=-1*(o*(l*h+1)-l-.5*(l*l+s)*h)/((l-o)/h-1),l+=u,Math.abs(u)<=S){e=l;break}t=R(this.long0+Math.asin(i*Math.tan(l)/this.a)/Math.sin(e))}else if(Math.abs(n+this.ml0)<=S)e=0,t=R(this.long0+i/this.a);else{o=(this.ml0+n)/this.a,s=i*i/this.a/this.a+o*o,l=o;var c,d,f,p,v;for(a=hf;a;--a)if(v=this.e*Math.sin(l),c=Math.sqrt(1-v*v)*Math.tan(l),d=this.a*Gt(this.e0,this.e1,this.e2,this.e3,l),f=this.e0-2*this.e1*Math.cos(2*l)+4*this.e2*Math.cos(4*l)-6*this.e3*Math.cos(6*l),p=d/this.a,u=(o*(c*p+1)-p-.5*c*(p*p+s))/(this.es*Math.sin(2*l)*(p*p+s-2*o*p)/(4*c)+(o-p)*(c*f-2/Math.sin(2*l))-f),l-=u,Math.abs(u)<=S){e=l;break}c=Math.sqrt(1-this.es*Math.pow(Math.sin(e),2))*Math.tan(e),t=R(this.long0+Math.asin(i*c/this.a)/Math.sin(e))}return r.x=t,r.y=e,r}var gT=["Polyconic","poly"];const yT={init:vT,forward:mT,inverse:_T,names:gT};function bT(){this.A=[],this.A[1]=.6399175073,this.A[2]=-.1358797613,this.A[3]=.063294409,this.A[4]=-.02526853,this.A[5]=.0117879,this.A[6]=-.0055161,this.A[7]=.0026906,this.A[8]=-.001333,this.A[9]=67e-5,this.A[10]=-34e-5,this.B_re=[],this.B_im=[],this.B_re[1]=.7557853228,this.B_im[1]=0,this.B_re[2]=.249204646,this.B_im[2]=.003371507,this.B_re[3]=-.001541739,this.B_im[3]=.04105856,this.B_re[4]=-.10162907,this.B_im[4]=.01727609,this.B_re[5]=-.26623489,this.B_im[5]=-.36249218,this.B_re[6]=-.6870983,this.B_im[6]=-1.1651967,this.C_re=[],this.C_im=[],this.C_re[1]=1.3231270439,this.C_im[1]=0,this.C_re[2]=-.577245789,this.C_im[2]=-.007809598,this.C_re[3]=.508307513,this.C_im[3]=-.112208952,this.C_re[4]=-.15094762,this.C_im[4]=.18200602,this.C_re[5]=1.01418179,this.C_im[5]=1.64497696,this.C_re[6]=1.9660549,this.C_im[6]=2.5127645,this.D=[],this.D[1]=1.5627014243,this.D[2]=.5185406398,this.D[3]=-.03333098,this.D[4]=-.1052906,this.D[5]=-.0368594,this.D[6]=.007317,this.D[7]=.0122,this.D[8]=.00394,this.D[9]=-.0013}function wT(r){var t,e=r.x,i=r.y,n=i-this.lat0,a=e-this.long0,o=n/Yi*1e-5,s=a,l=1,u=0;for(t=1;t<=10;t++)l=l*o,u=u+this.A[t]*l;var h=u,c=s,d=1,f=0,p,v,m=0,_=0;for(t=1;t<=6;t++)p=d*h-f*c,v=f*h+d*c,d=p,f=v,m=m+this.B_re[t]*d-this.B_im[t]*f,_=_+this.B_im[t]*d+this.B_re[t]*f;return r.x=_*this.a+this.x0,r.y=m*this.a+this.y0,r}function xT(r){var t,e=r.x,i=r.y,n=e-this.x0,a=i-this.y0,o=a/this.a,s=n/this.a,l=1,u=0,h,c,d=0,f=0;for(t=1;t<=6;t++)h=l*o-u*s,c=u*o+l*s,l=h,u=c,d=d+this.C_re[t]*l-this.C_im[t]*u,f=f+this.C_im[t]*l+this.C_re[t]*u;for(var p=0;p<this.iterations;p++){var v=d,m=f,_,g,y=o,b=s;for(t=2;t<=6;t++)_=v*d-m*f,g=m*d+v*f,v=_,m=g,y=y+(t-1)*(this.B_re[t]*v-this.B_im[t]*m),b=b+(t-1)*(this.B_im[t]*v+this.B_re[t]*m);v=1,m=0;var w=this.B_re[1],x=this.B_im[1];for(t=2;t<=6;t++)_=v*d-m*f,g=m*d+v*f,v=_,m=g,w=w+t*(this.B_re[t]*v-this.B_im[t]*m),x=x+t*(this.B_im[t]*v+this.B_re[t]*m);var E=w*w+x*x;d=(y*w+b*x)/E,f=(b*w-y*x)/E}var A=d,M=f,I=1,k=0;for(t=1;t<=9;t++)I=I*A,k=k+this.D[t]*I;var N=this.lat0+k*Yi*1e5,F=this.long0+M;return r.x=F,r.y=N,r}var AT=["New_Zealand_Map_Grid","nzmg"];const ET={init:bT,forward:wT,inverse:xT,names:AT};function CT(){}function TT(r){var t=r.x,e=r.y,i=R(t-this.long0),n=this.x0+this.a*i,a=this.y0+this.a*Math.log(Math.tan(Math.PI/4+e/2.5))*1.25;return r.x=n,r.y=a,r}function MT(r){r.x-=this.x0,r.y-=this.y0;var t=R(this.long0+r.x/this.a),e=2.5*(Math.atan(Math.exp(.8*r.y/this.a))-Math.PI/4);return r.x=t,r.y=e,r}var OT=["Miller_Cylindrical","mill"];const ST={init:CT,forward:TT,inverse:MT,names:OT};var IT=20;function RT(){this.sphere?(this.n=1,this.m=0,this.es=0,this.C_y=Math.sqrt((this.m+1)/this.n),this.C_x=this.C_y/(this.m+1)):this.en=bv(this.es)}function PT(r){var t,e,i=r.x,n=r.y;if(i=R(i-this.long0),this.sphere){if(!this.m)n=this.n!==1?Math.asin(this.n*Math.sin(n)):n;else for(var a=this.n*Math.sin(n),o=IT;o;--o){var s=(this.m*n+Math.sin(n)-a)/(this.m+Math.cos(n));if(n-=s,Math.abs(s)<S)break}t=this.a*this.C_x*i*(this.m+Math.cos(n)),e=this.a*this.C_y*n}else{var l=Math.sin(n),u=Math.cos(n);e=this.a*Qo(n,l,u,this.en),t=this.a*i*u/Math.sqrt(1-this.es*l*l)}return r.x=t,r.y=e,r}function DT(r){var t,e,i,n;return r.x-=this.x0,i=r.x/this.a,r.y-=this.y0,t=r.y/this.a,this.sphere?(t/=this.C_y,i=i/(this.C_x*(this.m+Math.cos(t))),this.m?t=lr((this.m*t+Math.sin(t))/this.n):this.n!==1&&(t=lr(Math.sin(t)/this.n)),i=R(i+this.long0),t=vi(t)):(t=wv(r.y/this.a,this.es,this.en),n=Math.abs(t),n<T?(n=Math.sin(t),e=this.long0+r.x*Math.sqrt(1-this.es*n*n)/(this.a*Math.cos(t)),i=R(e)):n-S<T&&(i=this.long0)),r.x=i,r.y=t,r}var kT=["Sinusoidal","sinu"];const LT={init:RT,forward:PT,inverse:DT,names:kT};function FT(){}function $T(r){for(var t=r.x,e=r.y,i=R(t-this.long0),n=e,a=Math.PI*Math.sin(e);;){var o=-(n+Math.sin(n)-a)/(1+Math.cos(n));if(n+=o,Math.abs(o)<S)break}n/=2,Math.PI/2-Math.abs(e)<S&&(i=0);var s=.900316316158*this.a*i*Math.cos(n)+this.x0,l=1.4142135623731*this.a*Math.sin(n)+this.y0;return r.x=s,r.y=l,r}function NT(r){var t,e;r.x-=this.x0,r.y-=this.y0,e=r.y/(1.4142135623731*this.a),Math.abs(e)>.999999999999&&(e=.999999999999),t=Math.asin(e);var i=R(this.long0+r.x/(.900316316158*this.a*Math.cos(t)));i<-Math.PI&&(i=-Math.PI),i>Math.PI&&(i=Math.PI),e=(2*t+Math.sin(2*t))/Math.PI,Math.abs(e)>1&&(e=1);var n=Math.asin(e);return r.x=i,r.y=n,r}var BT=["Mollweide","moll"];const zT={init:FT,forward:$T,inverse:NT,names:BT};function GT(){Math.abs(this.lat1+this.lat2)<S||(this.lat2=this.lat2||this.lat1,this.temp=this.b/this.a,this.es=1-Math.pow(this.temp,2),this.e=Math.sqrt(this.es),this.e0=_n(this.es),this.e1=gn(this.es),this.e2=yn(this.es),this.e3=bn(this.es),this.sinphi=Math.sin(this.lat1),this.cosphi=Math.cos(this.lat1),this.ms1=Te(this.e,this.sinphi,this.cosphi),this.ml1=Gt(this.e0,this.e1,this.e2,this.e3,this.lat1),Math.abs(this.lat1-this.lat2)<S?this.ns=this.sinphi:(this.sinphi=Math.sin(this.lat2),this.cosphi=Math.cos(this.lat2),this.ms2=Te(this.e,this.sinphi,this.cosphi),this.ml2=Gt(this.e0,this.e1,this.e2,this.e3,this.lat2),this.ns=(this.ms1-this.ms2)/(this.ml2-this.ml1)),this.g=this.ml1+this.ms1/this.ns,this.ml0=Gt(this.e0,this.e1,this.e2,this.e3,this.lat0),this.rh=this.a*(this.g-this.ml0))}function YT(r){var t=r.x,e=r.y,i;if(this.sphere)i=this.a*(this.g-e);else{var n=Gt(this.e0,this.e1,this.e2,this.e3,e);i=this.a*(this.g-n)}var a=this.ns*R(t-this.long0),o=this.x0+i*Math.sin(a),s=this.y0+this.rh-i*Math.cos(a);return r.x=o,r.y=s,r}function UT(r){r.x-=this.x0,r.y=this.rh-r.y+this.y0;var t,e,i,n;this.ns>=0?(e=Math.sqrt(r.x*r.x+r.y*r.y),t=1):(e=-Math.sqrt(r.x*r.x+r.y*r.y),t=-1);var a=0;if(e!==0&&(a=Math.atan2(t*r.x,t*r.y)),this.sphere)return n=R(this.long0+a/this.ns),i=vi(this.g-e/this.a),r.x=n,r.y=i,r;var o=this.g-e/this.a;return i=Co(o,this.e0,this.e1,this.e2,this.e3),n=R(this.long0+a/this.ns),r.x=n,r.y=i,r}var jT=["Equidistant_Conic","eqdc"];const WT={init:GT,forward:YT,inverse:UT,names:jT};function VT(){this.R=this.a}function qT(r){var t=r.x,e=r.y,i=R(t-this.long0),n,a;Math.abs(e)<=S&&(n=this.x0+this.R*i,a=this.y0);var o=lr(2*Math.abs(e/Math.PI));(Math.abs(i)<=S||Math.abs(Math.abs(e)-T)<=S)&&(n=this.x0,e>=0?a=this.y0+Math.PI*this.R*Math.tan(.5*o):a=this.y0+Math.PI*this.R*-Math.tan(.5*o));var s=.5*Math.abs(Math.PI/i-i/Math.PI),l=s*s,u=Math.sin(o),h=Math.cos(o),c=h/(u+h-1),d=c*c,f=c*(2/u-1),p=f*f,v=Math.PI*this.R*(s*(c-p)+Math.sqrt(l*(c-p)*(c-p)-(p+l)*(d-p)))/(p+l);i<0&&(v=-v),n=this.x0+v;var m=l+c;return v=Math.PI*this.R*(f*m-s*Math.sqrt((p+l)*(l+1)-m*m))/(p+l),e>=0?a=this.y0+v:a=this.y0-v,r.x=n,r.y=a,r}function HT(r){var t,e,i,n,a,o,s,l,u,h,c,d,f;return r.x-=this.x0,r.y-=this.y0,c=Math.PI*this.R,i=r.x/c,n=r.y/c,a=i*i+n*n,o=-Math.abs(n)*(1+a),s=o-2*n*n+i*i,l=-2*o+1+2*n*n+a*a,f=n*n/l+(2*s*s*s/l/l/l-9*o*s/l/l)/27,u=(o-s*s/3/l)/l,h=2*Math.sqrt(-u/3),c=3*f/u/h,Math.abs(c)>1&&(c>=0?c=1:c=-1),d=Math.acos(c)/3,r.y>=0?e=(-h*Math.cos(d+Math.PI/3)-s/3/l)*Math.PI:e=-(-h*Math.cos(d+Math.PI/3)-s/3/l)*Math.PI,Math.abs(i)<S?t=this.long0:t=R(this.long0+Math.PI*(a-1+Math.sqrt(1+2*(i*i-n*n)+a*a))/2/i),r.x=t,r.y=e,r}var XT=["Van_der_Grinten_I","VanDerGrinten","vandg"];const ZT={init:VT,forward:qT,inverse:HT,names:XT};function QT(){this.sin_p12=Math.sin(this.lat0),this.cos_p12=Math.cos(this.lat0)}function KT(r){var t=r.x,e=r.y,i=Math.sin(r.y),n=Math.cos(r.y),a=R(t-this.long0),o,s,l,u,h,c,d,f,p,v,m,_,g,y,b,w,x,E,A,M,I,k,N;return this.sphere?Math.abs(this.sin_p12-1)<=S?(r.x=this.x0+this.a*(T-e)*Math.sin(a),r.y=this.y0-this.a*(T-e)*Math.cos(a),r):Math.abs(this.sin_p12+1)<=S?(r.x=this.x0+this.a*(T+e)*Math.sin(a),r.y=this.y0+this.a*(T+e)*Math.cos(a),r):(E=this.sin_p12*i+this.cos_p12*n*Math.cos(a),w=Math.acos(E),x=w?w/Math.sin(w):1,r.x=this.x0+this.a*x*n*Math.sin(a),r.y=this.y0+this.a*x*(this.cos_p12*i-this.sin_p12*n*Math.cos(a)),r):(o=_n(this.es),s=gn(this.es),l=yn(this.es),u=bn(this.es),Math.abs(this.sin_p12-1)<=S?(h=this.a*Gt(o,s,l,u,T),c=this.a*Gt(o,s,l,u,e),r.x=this.x0+(h-c)*Math.sin(a),r.y=this.y0-(h-c)*Math.cos(a),r):Math.abs(this.sin_p12+1)<=S?(h=this.a*Gt(o,s,l,u,T),c=this.a*Gt(o,s,l,u,e),r.x=this.x0+(h+c)*Math.sin(a),r.y=this.y0+(h+c)*Math.cos(a),r):(d=i/n,f=si(this.a,this.e,this.sin_p12),p=si(this.a,this.e,i),v=Math.atan((1-this.es)*d+this.es*f*this.sin_p12/(p*n)),m=Math.atan2(Math.sin(a),this.cos_p12*Math.tan(v)-this.sin_p12*Math.cos(a)),m===0?A=Math.asin(this.cos_p12*Math.sin(v)-this.sin_p12*Math.cos(v)):Math.abs(Math.abs(m)-Math.PI)<=S?A=-Math.asin(this.cos_p12*Math.sin(v)-this.sin_p12*Math.cos(v)):A=Math.asin(Math.sin(a)*Math.cos(v)/Math.sin(m)),_=this.e*this.sin_p12/Math.sqrt(1-this.es),g=this.e*this.cos_p12*Math.cos(m)/Math.sqrt(1-this.es),y=_*g,b=g*g,M=A*A,I=M*A,k=I*A,N=k*A,w=f*A*(1-M*b*(1-b)/6+I/8*y*(1-2*b)+k/120*(b*(4-7*b)-3*_*_*(1-7*b))-N/48*y),r.x=this.x0+w*Math.sin(m),r.y=this.y0+w*Math.cos(m),r))}function JT(r){r.x-=this.x0,r.y-=this.y0;var t,e,i,n,a,o,s,l,u,h,c,d,f,p,v,m,_,g,y,b,w,x,E,A;return this.sphere?(t=Math.sqrt(r.x*r.x+r.y*r.y),t>2*T*this.a?void 0:(e=t/this.a,i=Math.sin(e),n=Math.cos(e),a=this.long0,Math.abs(t)<=S?o=this.lat0:(o=lr(n*this.sin_p12+r.y*i*this.cos_p12/t),s=Math.abs(this.lat0)-T,Math.abs(s)<=S?this.lat0>=0?a=R(this.long0+Math.atan2(r.x,-r.y)):a=R(this.long0-Math.atan2(-r.x,r.y)):a=R(this.long0+Math.atan2(r.x*i,t*this.cos_p12*n-r.y*this.sin_p12*i))),r.x=a,r.y=o,r)):(l=_n(this.es),u=gn(this.es),h=yn(this.es),c=bn(this.es),Math.abs(this.sin_p12-1)<=S?(d=this.a*Gt(l,u,h,c,T),t=Math.sqrt(r.x*r.x+r.y*r.y),f=d-t,o=Co(f/this.a,l,u,h,c),a=R(this.long0+Math.atan2(r.x,-1*r.y)),r.x=a,r.y=o,r):Math.abs(this.sin_p12+1)<=S?(d=this.a*Gt(l,u,h,c,T),t=Math.sqrt(r.x*r.x+r.y*r.y),f=t-d,o=Co(f/this.a,l,u,h,c),a=R(this.long0+Math.atan2(r.x,r.y)),r.x=a,r.y=o,r):(t=Math.sqrt(r.x*r.x+r.y*r.y),m=Math.atan2(r.x,r.y),p=si(this.a,this.e,this.sin_p12),_=Math.cos(m),g=this.e*this.cos_p12*_,y=-g*g/(1-this.es),b=3*this.es*(1-y)*this.sin_p12*this.cos_p12*_/(1-this.es),w=t/p,x=w-y*(1+y)*Math.pow(w,3)/6-b*(1+3*y)*Math.pow(w,4)/24,E=1-y*x*x/2-w*x*x*x/6,v=Math.asin(this.sin_p12*Math.cos(x)+this.cos_p12*Math.sin(x)*_),a=R(this.long0+Math.asin(Math.sin(m)*Math.sin(x)/Math.cos(v))),A=Math.sin(v),o=Math.atan2((A-this.es*E*this.sin_p12)*Math.tan(v),A*(1-this.es)),r.x=a,r.y=o,r))}var tM=["Azimuthal_Equidistant","aeqd"];const eM={init:QT,forward:KT,inverse:JT,names:tM};function rM(){this.sin_p14=Math.sin(this.lat0),this.cos_p14=Math.cos(this.lat0)}function iM(r){var t,e,i,n,a,o,s,l,u=r.x,h=r.y;return i=R(u-this.long0),t=Math.sin(h),e=Math.cos(h),n=Math.cos(i),o=this.sin_p14*t+this.cos_p14*e*n,a=1,(o>0||Math.abs(o)<=S)&&(s=this.a*a*e*Math.sin(i),l=this.y0+this.a*a*(this.cos_p14*t-this.sin_p14*e*n)),r.x=s,r.y=l,r}function nM(r){var t,e,i,n,a,o,s;return r.x-=this.x0,r.y-=this.y0,t=Math.sqrt(r.x*r.x+r.y*r.y),e=lr(t/this.a),i=Math.sin(e),n=Math.cos(e),o=this.long0,Math.abs(t)<=S?(s=this.lat0,r.x=o,r.y=s,r):(s=lr(n*this.sin_p14+r.y*i*this.cos_p14/t),a=Math.abs(this.lat0)-T,Math.abs(a)<=S?(this.lat0>=0?o=R(this.long0+Math.atan2(r.x,-r.y)):o=R(this.long0-Math.atan2(-r.x,r.y)),r.x=o,r.y=s,r):(o=R(this.long0+Math.atan2(r.x*i,t*this.cos_p14*n-r.y*this.sin_p14*i)),r.x=o,r.y=s,r))}var aM=["ortho"];const oM={init:rM,forward:iM,inverse:nM,names:aM};var vt={FRONT:1,RIGHT:2,BACK:3,LEFT:4,TOP:5,BOTTOM:6},nt={AREA_0:1,AREA_1:2,AREA_2:3,AREA_3:4};function sM(){this.x0=this.x0||0,this.y0=this.y0||0,this.lat0=this.lat0||0,this.long0=this.long0||0,this.lat_ts=this.lat_ts||0,this.title=this.title||"Quadrilateralized Spherical Cube",this.lat0>=T-it/2?this.face=vt.TOP:this.lat0<=-(T-it/2)?this.face=vt.BOTTOM:Math.abs(this.long0)<=it?this.face=vt.FRONT:Math.abs(this.long0)<=T+it?this.face=this.long0>0?vt.RIGHT:vt.LEFT:this.face=vt.BACK,this.es!==0&&(this.one_minus_f=1-(this.a-this.b)/this.a,this.one_minus_f_squared=this.one_minus_f*this.one_minus_f)}function lM(r){var t={x:0,y:0},e,i,n,a,o,s,l={value:0};if(r.x-=this.long0,this.es!==0?e=Math.atan(this.one_minus_f_squared*Math.tan(r.y)):e=r.y,i=r.x,this.face===vt.TOP)a=T-e,i>=it&&i<=T+it?(l.value=nt.AREA_0,n=i-T):i>T+it||i<=-(T+it)?(l.value=nt.AREA_1,n=i>0?i-yt:i+yt):i>-(T+it)&&i<=-it?(l.value=nt.AREA_2,n=i+T):(l.value=nt.AREA_3,n=i);else if(this.face===vt.BOTTOM)a=T+e,i>=it&&i<=T+it?(l.value=nt.AREA_0,n=-i+T):i<it&&i>=-it?(l.value=nt.AREA_1,n=-i):i<-it&&i>=-(T+it)?(l.value=nt.AREA_2,n=-i-T):(l.value=nt.AREA_3,n=i>0?-i+yt:-i-yt);else{var u,h,c,d,f,p,v;this.face===vt.RIGHT?i=ei(i,+T):this.face===vt.BACK?i=ei(i,+yt):this.face===vt.LEFT&&(i=ei(i,-T)),d=Math.sin(e),f=Math.cos(e),p=Math.sin(i),v=Math.cos(i),u=f*v,h=f*p,c=d,this.face===vt.FRONT?(a=Math.acos(u),n=Gn(a,c,h,l)):this.face===vt.RIGHT?(a=Math.acos(h),n=Gn(a,c,-u,l)):this.face===vt.BACK?(a=Math.acos(-u),n=Gn(a,c,-h,l)):this.face===vt.LEFT?(a=Math.acos(-h),n=Gn(a,c,u,l)):(a=n=0,l.value=nt.AREA_0)}return s=Math.atan(12/yt*(n+Math.acos(Math.sin(n)*Math.cos(it))-T)),o=Math.sqrt((1-Math.cos(a))/(Math.cos(s)*Math.cos(s))/(1-Math.cos(Math.atan(1/Math.cos(n))))),l.value===nt.AREA_1?s+=T:l.value===nt.AREA_2?s+=yt:l.value===nt.AREA_3&&(s+=1.5*yt),t.x=o*Math.cos(s),t.y=o*Math.sin(s),t.x=t.x*this.a+this.x0,t.y=t.y*this.a+this.y0,r.x=t.x,r.y=t.y,r}function uM(r){var t={lam:0,phi:0},e,i,n,a,o,s,l,u,h,c={value:0};if(r.x=(r.x-this.x0)/this.a,r.y=(r.y-this.y0)/this.a,i=Math.atan(Math.sqrt(r.x*r.x+r.y*r.y)),e=Math.atan2(r.y,r.x),r.x>=0&&r.x>=Math.abs(r.y)?c.value=nt.AREA_0:r.y>=0&&r.y>=Math.abs(r.x)?(c.value=nt.AREA_1,e-=T):r.x<0&&-r.x>=Math.abs(r.y)?(c.value=nt.AREA_2,e=e<0?e+yt:e-yt):(c.value=nt.AREA_3,e+=T),h=yt/12*Math.tan(e),o=Math.sin(h)/(Math.cos(h)-1/Math.sqrt(2)),s=Math.atan(o),n=Math.cos(e),a=Math.tan(i),l=1-n*n*a*a*(1-Math.cos(Math.atan(1/Math.cos(s)))),l<-1?l=-1:l>1&&(l=1),this.face===vt.TOP)u=Math.acos(l),t.phi=T-u,c.value===nt.AREA_0?t.lam=s+T:c.value===nt.AREA_1?t.lam=s<0?s+yt:s-yt:c.value===nt.AREA_2?t.lam=s-T:t.lam=s;else if(this.face===vt.BOTTOM)u=Math.acos(l),t.phi=u-T,c.value===nt.AREA_0?t.lam=-s+T:c.value===nt.AREA_1?t.lam=-s:c.value===nt.AREA_2?t.lam=-s-T:t.lam=s<0?-s-yt:-s+yt;else{var d,f,p;d=l,h=d*d,h>=1?p=0:p=Math.sqrt(1-h)*Math.sin(s),h+=p*p,h>=1?f=0:f=Math.sqrt(1-h),c.value===nt.AREA_1?(h=f,f=-p,p=h):c.value===nt.AREA_2?(f=-f,p=-p):c.value===nt.AREA_3&&(h=f,f=p,p=-h),this.face===vt.RIGHT?(h=d,d=-f,f=h):this.face===vt.BACK?(d=-d,f=-f):this.face===vt.LEFT&&(h=d,d=f,f=-h),t.phi=Math.acos(-p)-T,t.lam=Math.atan2(f,d),this.face===vt.RIGHT?t.lam=ei(t.lam,-T):this.face===vt.BACK?t.lam=ei(t.lam,-yt):this.face===vt.LEFT&&(t.lam=ei(t.lam,+T))}if(this.es!==0){var v,m,_;v=t.phi<0?1:0,m=Math.tan(t.phi),_=this.b/Math.sqrt(m*m+this.one_minus_f_squared),t.phi=Math.atan(Math.sqrt(this.a*this.a-_*_)/(this.one_minus_f*_)),v&&(t.phi=-t.phi)}return t.lam+=this.long0,r.x=t.lam,r.y=t.phi,r}function Gn(r,t,e,i){var n;return r<S?(i.value=nt.AREA_0,n=0):(n=Math.atan2(t,e),Math.abs(n)<=it?i.value=nt.AREA_0:n>it&&n<=T+it?(i.value=nt.AREA_1,n-=T):n>T+it||n<=-(T+it)?(i.value=nt.AREA_2,n=n>=0?n-yt:n+yt):(i.value=nt.AREA_3,n+=T)),n}function ei(r,t){var e=r+t;return e<-yt?e+=qi:e>+yt&&(e-=qi),e}var hM=["Quadrilateralized Spherical Cube","Quadrilateralized_Spherical_Cube","qsc"];const cM={init:sM,forward:lM,inverse:uM,names:hM};var Ql=[[1,22199e-21,-715515e-10,31103e-10],[.9986,-482243e-9,-24897e-9,-13309e-10],[.9954,-83103e-8,-448605e-10,-986701e-12],[.99,-.00135364,-59661e-9,36777e-10],[.9822,-.00167442,-449547e-11,-572411e-11],[.973,-.00214868,-903571e-10,18736e-12],[.96,-.00305085,-900761e-10,164917e-11],[.9427,-.00382792,-653386e-10,-26154e-10],[.9216,-.00467746,-10457e-8,481243e-11],[.8962,-.00536223,-323831e-10,-543432e-11],[.8679,-.00609363,-113898e-9,332484e-11],[.835,-.00698325,-640253e-10,934959e-12],[.7986,-.00755338,-500009e-10,935324e-12],[.7597,-.00798324,-35971e-9,-227626e-11],[.7186,-.00851367,-701149e-10,-86303e-10],[.6732,-.00986209,-199569e-9,191974e-10],[.6213,-.010418,883923e-10,624051e-11],[.5722,-.00906601,182e-6,624051e-11],[.5322,-.00677797,275608e-9,624051e-11]],Fi=[[-520417e-23,.0124,121431e-23,-845284e-16],[.062,.0124,-126793e-14,422642e-15],[.124,.0124,507171e-14,-160604e-14],[.186,.0123999,-190189e-13,600152e-14],[.248,.0124002,710039e-13,-224e-10],[.31,.0123992,-264997e-12,835986e-13],[.372,.0124029,988983e-12,-311994e-12],[.434,.0123893,-369093e-11,-435621e-12],[.4958,.0123198,-102252e-10,-345523e-12],[.5571,.0121916,-154081e-10,-582288e-12],[.6176,.0119938,-241424e-10,-525327e-12],[.6769,.011713,-320223e-10,-516405e-12],[.7346,.0113541,-397684e-10,-609052e-12],[.7903,.0109107,-489042e-10,-104739e-11],[.8435,.0103431,-64615e-9,-140374e-14],[.8936,.00969686,-64636e-9,-8547e-9],[.9394,.00840947,-192841e-9,-42106e-10],[.9761,.00616527,-256e-6,-42106e-10],[1,.00328947,-319159e-9,-42106e-10]],Ev=.8487,Cv=1.3523,Tv=be/5,dM=1/Tv,Hr=18,To=function(r,t){return r[0]+t*(r[1]+t*(r[2]+t*r[3]))},fM=function(r,t){return r[1]+t*(2*r[2]+t*3*r[3])};function pM(r,t,e,i){for(var n=t;i;--i){var a=r(n);if(n-=a,Math.abs(a)<e)break}return n}function vM(){this.x0=this.x0||0,this.y0=this.y0||0,this.long0=this.long0||0,this.es=0,this.title=this.title||"Robinson"}function mM(r){var t=R(r.x-this.long0),e=Math.abs(r.y),i=Math.floor(e*Tv);i<0?i=0:i>=Hr&&(i=Hr-1),e=be*(e-dM*i);var n={x:To(Ql[i],e)*t,y:To(Fi[i],e)};return r.y<0&&(n.y=-n.y),n.x=n.x*this.a*Ev+this.x0,n.y=n.y*this.a*Cv+this.y0,n}function _M(r){var t={x:(r.x-this.x0)/(this.a*Ev),y:Math.abs(r.y-this.y0)/(this.a*Cv)};if(t.y>=1)t.x/=Ql[Hr][0],t.y=r.y<0?-T:T;else{var e=Math.floor(t.y*Hr);for(e<0?e=0:e>=Hr&&(e=Hr-1);;)if(Fi[e][0]>t.y)--e;else if(Fi[e+1][0]<=t.y)++e;else break;var i=Fi[e],n=5*(t.y-i[0])/(Fi[e+1][0]-i[0]);n=pM(function(a){return(To(i,a)-t.y)/fM(i,a)},n,S,100),t.x/=To(Ql[e],n),t.y=(5*e+n)*Dt,r.y<0&&(t.y=-t.y)}return t.x=R(t.x+this.long0),t}var gM=["Robinson","robin"];const yM={init:vM,forward:mM,inverse:_M,names:gM};function bM(){this.name="geocent"}function wM(r){var t=cv(r,this.es,this.a);return t}function xM(r){var t=dv(r,this.es,this.a,this.b);return t}var AM=["Geocentric","geocentric","geocent","Geocent"];const EM={init:bM,forward:wM,inverse:xM,names:AM};var Lt={N_POLE:0,S_POLE:1,EQUIT:2,OBLIQ:3},Si={h:{def:1e5,num:!0},azi:{def:0,num:!0,degrees:!0},tilt:{def:0,num:!0,degrees:!0},long0:{def:0,num:!0},lat0:{def:0,num:!0}};function CM(){if(Object.keys(Si).forEach(function(e){if(typeof this[e]>"u")this[e]=Si[e].def;else{if(Si[e].num&&isNaN(this[e]))throw new Error("Invalid parameter value, must be numeric "+e+" = "+this[e]);Si[e].num&&(this[e]=parseFloat(this[e]))}Si[e].degrees&&(this[e]=this[e]*Dt)}.bind(this)),Math.abs(Math.abs(this.lat0)-T)<S?this.mode=this.lat0<0?Lt.S_POLE:Lt.N_POLE:Math.abs(this.lat0)<S?this.mode=Lt.EQUIT:(this.mode=Lt.OBLIQ,this.sinph0=Math.sin(this.lat0),this.cosph0=Math.cos(this.lat0)),this.pn1=this.h/this.a,this.pn1<=0||this.pn1>1e10)throw new Error("Invalid height");this.p=1+this.pn1,this.rp=1/this.p,this.h1=1/this.pn1,this.pfact=(this.p+1)*this.h1,this.es=0;var r=this.tilt,t=this.azi;this.cg=Math.cos(t),this.sg=Math.sin(t),this.cw=Math.cos(r),this.sw=Math.sin(r)}function TM(r){r.x-=this.long0;var t=Math.sin(r.y),e=Math.cos(r.y),i=Math.cos(r.x),n,a;switch(this.mode){case Lt.OBLIQ:a=this.sinph0*t+this.cosph0*e*i;break;case Lt.EQUIT:a=e*i;break;case Lt.S_POLE:a=-t;break;case Lt.N_POLE:a=t;break}switch(a=this.pn1/(this.p-a),n=a*e*Math.sin(r.x),this.mode){case Lt.OBLIQ:a*=this.cosph0*t-this.sinph0*e*i;break;case Lt.EQUIT:a*=t;break;case Lt.N_POLE:a*=-(e*i);break;case Lt.S_POLE:a*=e*i;break}var o,s;return o=a*this.cg+n*this.sg,s=1/(o*this.sw*this.h1+this.cw),n=(n*this.cg-a*this.sg)*this.cw*s,a=o*s,r.x=n*this.a,r.y=a*this.a,r}function MM(r){r.x/=this.a,r.y/=this.a;var t={x:r.x,y:r.y},e,i,n;n=1/(this.pn1-r.y*this.sw),e=this.pn1*r.x*n,i=this.pn1*r.y*this.cw*n,r.x=e*this.cg+i*this.sg,r.y=i*this.cg-e*this.sg;var a=fe(r.x,r.y);if(Math.abs(a)<S)t.x=0,t.y=r.y;else{var o,s;switch(s=1-a*a*this.pfact,s=(this.p-Math.sqrt(s))/(this.pn1/a+a/this.pn1),o=Math.sqrt(1-s*s),this.mode){case Lt.OBLIQ:t.y=Math.asin(o*this.sinph0+r.y*s*this.cosph0/a),r.y=(o-this.sinph0*Math.sin(t.y))*a,r.x*=s*this.cosph0;break;case Lt.EQUIT:t.y=Math.asin(r.y*s/a),r.y=o*a,r.x*=s;break;case Lt.N_POLE:t.y=Math.asin(o),r.y=-r.y;break;case Lt.S_POLE:t.y=-Math.asin(o);break}t.x=Math.atan2(r.x,r.y)}return r.x=t.x+this.long0,r.y=t.y,r}var OM=["Tilted_Perspective","tpers"];const SM={init:CM,forward:TM,inverse:MM,names:OM};function IM(){if(this.flip_axis=this.sweep==="x"?1:0,this.h=Number(this.h),this.radius_g_1=this.h/this.a,this.radius_g_1<=0||this.radius_g_1>1e10)throw new Error;if(this.radius_g=1+this.radius_g_1,this.C=this.radius_g*this.radius_g-1,this.es!==0){var r=1-this.es,t=1/r;this.radius_p=Math.sqrt(r),this.radius_p2=r,this.radius_p_inv2=t,this.shape="ellipse"}else this.radius_p=1,this.radius_p2=1,this.radius_p_inv2=1,this.shape="sphere";this.title||(this.title="Geostationary Satellite View")}function RM(r){var t=r.x,e=r.y,i,n,a,o;if(t=t-this.long0,this.shape==="ellipse"){e=Math.atan(this.radius_p2*Math.tan(e));var s=this.radius_p/fe(this.radius_p*Math.cos(e),Math.sin(e));if(n=s*Math.cos(t)*Math.cos(e),a=s*Math.sin(t)*Math.cos(e),o=s*Math.sin(e),(this.radius_g-n)*n-a*a-o*o*this.radius_p_inv2<0)return r.x=Number.NaN,r.y=Number.NaN,r;i=this.radius_g-n,this.flip_axis?(r.x=this.radius_g_1*Math.atan(a/fe(o,i)),r.y=this.radius_g_1*Math.atan(o/i)):(r.x=this.radius_g_1*Math.atan(a/i),r.y=this.radius_g_1*Math.atan(o/fe(a,i)))}else this.shape==="sphere"&&(i=Math.cos(e),n=Math.cos(t)*i,a=Math.sin(t)*i,o=Math.sin(e),i=this.radius_g-n,this.flip_axis?(r.x=this.radius_g_1*Math.atan(a/fe(o,i)),r.y=this.radius_g_1*Math.atan(o/i)):(r.x=this.radius_g_1*Math.atan(a/i),r.y=this.radius_g_1*Math.atan(o/fe(a,i))));return r.x=r.x*this.a,r.y=r.y*this.a,r}function PM(r){var t=-1,e=0,i=0,n,a,o,s;if(r.x=r.x/this.a,r.y=r.y/this.a,this.shape==="ellipse"){this.flip_axis?(i=Math.tan(r.y/this.radius_g_1),e=Math.tan(r.x/this.radius_g_1)*fe(1,i)):(e=Math.tan(r.x/this.radius_g_1),i=Math.tan(r.y/this.radius_g_1)*fe(1,e));var l=i/this.radius_p;if(n=e*e+l*l+t*t,a=2*this.radius_g*t,o=a*a-4*n*this.C,o<0)return r.x=Number.NaN,r.y=Number.NaN,r;s=(-a-Math.sqrt(o))/(2*n),t=this.radius_g+s*t,e*=s,i*=s,r.x=Math.atan2(e,t),r.y=Math.atan(i*Math.cos(r.x)/t),r.y=Math.atan(this.radius_p_inv2*Math.tan(r.y))}else if(this.shape==="sphere"){if(this.flip_axis?(i=Math.tan(r.y/this.radius_g_1),e=Math.tan(r.x/this.radius_g_1)*Math.sqrt(1+i*i)):(e=Math.tan(r.x/this.radius_g_1),i=Math.tan(r.y/this.radius_g_1)*Math.sqrt(1+e*e)),n=e*e+i*i+t*t,a=2*this.radius_g*t,o=a*a-4*n*this.C,o<0)return r.x=Number.NaN,r.y=Number.NaN,r;s=(-a-Math.sqrt(o))/(2*n),t=this.radius_g+s*t,e*=s,i*=s,r.x=Math.atan2(e,t),r.y=Math.atan(i*Math.cos(r.x)/t)}return r.x=r.x+this.long0,r}var DM=["Geostationary Satellite View","Geostationary_Satellite","geos"];const kM={init:IM,forward:RM,inverse:PM,names:DM};function LM(r){r.Proj.projections.add(La),r.Proj.projections.add(Fa),r.Proj.projections.add(GE),r.Proj.projections.add(QE),r.Proj.projections.add(iC),r.Proj.projections.add(lC),r.Proj.projections.add(pC),r.Proj.projections.add(yC),r.Proj.projections.add(EC),r.Proj.projections.add(SC),r.Proj.projections.add(VC),r.Proj.projections.add(KC),r.Proj.projections.add(iT),r.Proj.projections.add(uT),r.Proj.projections.add(pT),r.Proj.projections.add(yT),r.Proj.projections.add(ET),r.Proj.projections.add(ST),r.Proj.projections.add(LT),r.Proj.projections.add(zT),r.Proj.projections.add(WT),r.Proj.projections.add(ZT),r.Proj.projections.add(eM),r.Proj.projections.add(oM),r.Proj.projections.add(cM),r.Proj.projections.add(yM),r.Proj.projections.add(EM),r.Proj.projections.add(SM),r.Proj.projections.add(kM)}qt.defaultDatum="WGS84";qt.Proj=Ee;qt.WGS84=new qt.Proj("WGS84");qt.Point=oi;qt.toPoint=fv;qt.defs=Bt;qt.nadgrid=UA;qt.transform=Eo;qt.mgrs=aE;qt.version="__VERSION__";LM(qt);var FM=function(){function r(t){this.propagationStopped,this.defaultPrevented,this.type=t,this.target=null}return r.prototype.preventDefault=function(){this.defaultPrevented=!0},r.prototype.stopPropagation=function(){this.propagationStopped=!0},r}();const Sr=FM,Mv={PROPERTYCHANGE:"propertychange"};var $M=function(){function r(){this.disposed=!1}return r.prototype.dispose=function(){this.disposed||(this.disposed=!0,this.disposeInternal())},r.prototype.disposeInternal=function(){},r}();const NM=$M;function li(r,t){return r>t?1:r<t?-1:0}function Ko(r,t,e){var i=r.length;if(r[0]<=t)return 0;if(t<=r[i-1])return i-1;var n=void 0;if(e>0){for(n=1;n<i;++n)if(r[n]<t)return n-1}else if(e<0){for(n=1;n<i;++n)if(r[n]<=t)return n}else for(n=1;n<i;++n){if(r[n]==t)return n;if(r[n]<t)return typeof e=="function"?e(t,r[n-1],r[n])>0?n-1:n:r[n-1]-t<t-r[n]?n-1:n}return i-1}function BM(r,t,e){for(;t<e;){var i=r[t];r[t]=r[e],r[e]=i,++t,--e}}function Ov(r,t){for(var e=Array.isArray(t)?t:[t],i=e.length,n=0;n<i;n++)r[r.length]=e[n]}function mi(r,t){var e=r.length;if(e!==t.length)return!1;for(var i=0;i<e;i++)if(r[i]!==t[i])return!1;return!0}function zM(r,t,e){var i=t||li;return r.every(function(n,a){if(a===0)return!0;var o=i(r[a-1],n);return!(o>0||e&&o===0)})}function GM(){return!0}function Zi(){}function YM(r){var t=!1,e,i,n;return function(){var a=Array.prototype.slice.call(arguments);return(!t||this!==n||!mi(a,i))&&(t=!0,n=this,i=a,e=r.apply(this,arguments)),e}}var UM=globalThis&&globalThis.__extends||function(){var r=function(t,e){return r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(i,n){i.__proto__=n}||function(i,n){for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(i[a]=n[a])},r(t,e)};return function(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");r(t,e);function i(){this.constructor=t}t.prototype=e===null?Object.create(e):(i.prototype=e.prototype,new i)}}(),jM=function(r){UM(t,r);function t(e){var i=r.call(this)||this;return i.eventTarget_=e,i.pendingRemovals_=null,i.dispatching_=null,i.listeners_=null,i}return t.prototype.addEventListener=function(e,i){if(!(!e||!i)){var n=this.listeners_||(this.listeners_={}),a=n[e]||(n[e]=[]);a.indexOf(i)===-1&&a.push(i)}},t.prototype.dispatchEvent=function(e){var i=typeof e=="string",n=i?e:e.type,a=this.listeners_&&this.listeners_[n];if(a){var o=i?new Sr(e):e;o.target||(o.target=this.eventTarget_||this);var s=this.dispatching_||(this.dispatching_={}),l=this.pendingRemovals_||(this.pendingRemovals_={});n in s||(s[n]=0,l[n]=0),++s[n];for(var u,h=0,c=a.length;h<c;++h)if("handleEvent"in a[h]?u=a[h].handleEvent(o):u=a[h].call(this,o),u===!1||o.propagationStopped){u=!1;break}if(--s[n]===0){var d=l[n];for(delete l[n];d--;)this.removeEventListener(n,Zi);delete s[n]}return u}},t.prototype.disposeInternal=function(){this.listeners_&&Au(this.listeners_)},t.prototype.getListeners=function(e){return this.listeners_&&this.listeners_[e]||void 0},t.prototype.hasListener=function(e){return this.listeners_?e?e in this.listeners_:Object.keys(this.listeners_).length>0:!1},t.prototype.removeEventListener=function(e,i){var n=this.listeners_&&this.listeners_[e];if(n){var a=n.indexOf(i);a!==-1&&(this.pendingRemovals_&&e in this.pendingRemovals_?(n[a]=Zi,++this.pendingRemovals_[e]):(n.splice(a,1),n.length===0&&delete this.listeners_[e]))}},t}(NM);const wn=jM,kt={CHANGE:"change",ERROR:"error",BLUR:"blur",CLEAR:"clear",CONTEXTMENU:"contextmenu",CLICK:"click",DBLCLICK:"dblclick",DRAGENTER:"dragenter",DRAGOVER:"dragover",DROP:"drop",FOCUS:"focus",KEYDOWN:"keydown",KEYPRESS:"keypress",LOAD:"load",RESIZE:"resize",TOUCHMOVE:"touchmove",WHEEL:"wheel"};function ve(r,t,e,i,n){if(i&&i!==r&&(e=e.bind(i)),n){var a=e;e=function(){r.removeEventListener(t,e),a.apply(this,arguments)}}var o={target:r,type:t,listener:e};return r.addEventListener(t,e),o}function Mo(r,t,e,i){return ve(r,t,e,i,!0)}function ne(r){r&&r.target&&(r.target.removeEventListener(r.type,r.listener),Au(r))}var WM=globalThis&&globalThis.__extends||function(){var r=function(t,e){return r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(i,n){i.__proto__=n}||function(i,n){for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(i[a]=n[a])},r(t,e)};return function(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");r(t,e);function i(){this.constructor=t}t.prototype=e===null?Object.create(e):(i.prototype=e.prototype,new i)}}(),Jo=function(r){WM(t,r);function t(){var e=r.call(this)||this;return e.on=e.onInternal,e.once=e.onceInternal,e.un=e.unInternal,e.revision_=0,e}return t.prototype.changed=function(){++this.revision_,this.dispatchEvent(kt.CHANGE)},t.prototype.getRevision=function(){return this.revision_},t.prototype.onInternal=function(e,i){if(Array.isArray(e)){for(var n=e.length,a=new Array(n),o=0;o<n;++o)a[o]=ve(this,e[o],i);return a}else return ve(this,e,i)},t.prototype.onceInternal=function(e,i){var n;if(Array.isArray(e)){var a=e.length;n=new Array(a);for(var o=0;o<a;++o)n[o]=Mo(this,e[o],i)}else n=Mo(this,e,i);return i.ol_key=n,n},t.prototype.unInternal=function(e,i){var n=i.ol_key;if(n)VM(n);else if(Array.isArray(e))for(var a=0,o=e.length;a<o;++a)this.removeEventListener(e[a],i);else this.removeEventListener(e,i)},t}(wn);Jo.prototype.on;Jo.prototype.once;Jo.prototype.un;function VM(r){if(Array.isArray(r))for(var t=0,e=r.length;t<e;++t)ne(r[t]);else ne(r)}const Sv=Jo;var Iv=globalThis&&globalThis.__extends||function(){var r=function(t,e){return r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(i,n){i.__proto__=n}||function(i,n){for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(i[a]=n[a])},r(t,e)};return function(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");r(t,e);function i(){this.constructor=t}t.prototype=e===null?Object.create(e):(i.prototype=e.prototype,new i)}}(),cf=function(r){Iv(t,r);function t(e,i,n){var a=r.call(this,e)||this;return a.key=i,a.oldValue=n,a}return t}(Sr),qM=function(r){Iv(t,r);function t(e){var i=r.call(this)||this;return i.on,i.once,i.un,ut(i),i.values_=null,e!==void 0&&i.setProperties(e),i}return t.prototype.get=function(e){var i;return this.values_&&this.values_.hasOwnProperty(e)&&(i=this.values_[e]),i},t.prototype.getKeys=function(){return this.values_&&Object.keys(this.values_)||[]},t.prototype.getProperties=function(){return this.values_&&ct({},this.values_)||{}},t.prototype.hasProperties=function(){return!!this.values_},t.prototype.notify=function(e,i){var n;n="change:".concat(e),this.hasListener(n)&&this.dispatchEvent(new cf(n,e,i)),n=Mv.PROPERTYCHANGE,this.hasListener(n)&&this.dispatchEvent(new cf(n,e,i))},t.prototype.addChangeListener=function(e,i){this.addEventListener("change:".concat(e),i)},t.prototype.removeChangeListener=function(e,i){this.removeEventListener("change:".concat(e),i)},t.prototype.set=function(e,i,n){var a=this.values_||(this.values_={});if(n)a[e]=i;else{var o=a[e];a[e]=i,o!==i&&this.notify(e,o)}},t.prototype.setProperties=function(e,i){for(var n in e)this.set(n,e[n],i)},t.prototype.applyProperties=function(e){e.values_&&ct(this.values_||(this.values_={}),e.values_)},t.prototype.unset=function(e,i){if(this.values_&&e in this.values_){var n=this.values_[e];delete this.values_[e],ji(this.values_)&&(this.values_=null),i||this.notify(e,n)}},t}(Sv);const Ir=qM;var HM=globalThis&&globalThis.__extends||function(){var r=function(t,e){return r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(i,n){i.__proto__=n}||function(i,n){for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(i[a]=n[a])},r(t,e)};return function(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");r(t,e);function i(){this.constructor=t}t.prototype=e===null?Object.create(e):(i.prototype=e.prototype,new i)}}(),XM=function(r){HM(t,r);function t(e){var i=r.call(this)||this;if(i.on,i.once,i.un,i.id_=void 0,i.geometryName_="geometry",i.style_=null,i.styleFunction_=void 0,i.geometryChangeKey_=null,i.addChangeListener(i.geometryName_,i.handleGeometryChanged_),e)if(typeof e.getSimplifiedGeometry=="function"){var n=e;i.setGeometry(n)}else{var a=e;i.setProperties(a)}return i}return t.prototype.clone=function(){var e=new t(this.hasProperties()?this.getProperties():null);e.setGeometryName(this.getGeometryName());var i=this.getGeometry();i&&e.setGeometry(i.clone());var n=this.getStyle();return n&&e.setStyle(n),e},t.prototype.getGeometry=function(){return this.get(this.geometryName_)},t.prototype.getId=function(){return this.id_},t.prototype.getGeometryName=function(){return this.geometryName_},t.prototype.getStyle=function(){return this.style_},t.prototype.getStyleFunction=function(){return this.styleFunction_},t.prototype.handleGeometryChange_=function(){this.changed()},t.prototype.handleGeometryChanged_=function(){this.geometryChangeKey_&&(ne(this.geometryChangeKey_),this.geometryChangeKey_=null);var e=this.getGeometry();e&&(this.geometryChangeKey_=ve(e,kt.CHANGE,this.handleGeometryChange_,this)),this.changed()},t.prototype.setGeometry=function(e){this.set(this.geometryName_,e)},t.prototype.setStyle=function(e){this.style_=e,this.styleFunction_=e?ZM(e):void 0,this.changed()},t.prototype.setId=function(e){this.id_=e,this.changed()},t.prototype.setGeometryName=function(e){this.removeChangeListener(this.geometryName_,this.handleGeometryChanged_),this.geometryName_=e,this.addChangeListener(this.geometryName_,this.handleGeometryChanged_),this.handleGeometryChanged_()},t}(Ir);function ZM(r){if(typeof r=="function")return r;var t;if(Array.isArray(r))t=r;else{et(typeof r.getZIndex=="function",41);var e=r;t=[e]}return function(){return t}}const QM=XM;var ui=typeof navigator<"u"&&typeof navigator.userAgent<"u"?navigator.userAgent.toLowerCase():"";ui.indexOf("firefox");ui.indexOf("safari")!==-1&&ui.indexOf("chrom")==-1;ui.indexOf("webkit")!==-1&&ui.indexOf("edge")==-1;ui.indexOf("macintosh");var ts=typeof WorkerGlobalScope<"u"&&typeof OffscreenCanvas<"u"&&self instanceof WorkerGlobalScope,KM=typeof Image<"u"&&Image.prototype.decode;(function(){var r=!1;try{var t=Object.defineProperty({},"passive",{get:function(){r=!0}});window.addEventListener("_",null,t),window.removeEventListener("_",null,t)}catch{}return r})();new Array(6);function ar(){return[1,0,0,1,0,0]}function JM(r,t,e,i,n,a,o){return r[0]=t,r[1]=e,r[2]=i,r[3]=n,r[4]=a,r[5]=o,r}function tO(r,t){return r[0]=t[0],r[1]=t[1],r[2]=t[2],r[3]=t[3],r[4]=t[4],r[5]=t[5],r}function Mt(r,t){var e=t[0],i=t[1];return t[0]=r[0]*e+r[2]*i+r[4],t[1]=r[1]*e+r[3]*i+r[5],t}function eO(r,t,e){return JM(r,t,0,0,e,0,0)}function Me(r,t,e,i,n,a,o,s){var l=Math.sin(a),u=Math.cos(a);return r[0]=i*u,r[1]=n*l,r[2]=-i*l,r[3]=n*u,r[4]=o*i*u-s*i*l+t,r[5]=o*n*l+s*n*u+e,r}function ku(r,t){var e=rO(t);et(e!==0,32);var i=t[0],n=t[1],a=t[2],o=t[3],s=t[4],l=t[5];return r[0]=o/e,r[1]=-n/e,r[2]=-a/e,r[3]=i/e,r[4]=(a*l-o*s)/e,r[5]=-(i*l-n*s)/e,r}function rO(r){return r[0]*r[3]-r[1]*r[2]}var df;function Lu(r){var t="matrix("+r.join(", ")+")";if(ts)return t;var e=df||(df=document.createElement("div"));return e.style.transform=t,e.style.transform}function Er(r,t,e,i,n,a){for(var o=a||[],s=0,l=t;l<e;l+=i){var u=r[l],h=r[l+1];o[s++]=n[0]*u+n[2]*h+n[4],o[s++]=n[1]*u+n[3]*h+n[5]}return a&&o.length!=s&&(o.length=s),o}function Rv(r,t,e,i,n,a,o){for(var s=o||[],l=Math.cos(n),u=Math.sin(n),h=a[0],c=a[1],d=0,f=t;f<e;f+=i){var p=r[f]-h,v=r[f+1]-c;s[d++]=h+p*l-v*u,s[d++]=c+p*u+v*l;for(var m=f+2;m<f+i;++m)s[d++]=r[m]}return o&&s.length!=d&&(s.length=d),s}function iO(r,t,e,i,n,a,o,s){for(var l=s||[],u=o[0],h=o[1],c=0,d=t;d<e;d+=i){var f=r[d]-u,p=r[d+1]-h;l[c++]=u+n*f,l[c++]=h+a*p;for(var v=d+2;v<d+i;++v)l[c++]=r[v]}return s&&l.length!=c&&(l.length=c),l}function nO(r,t,e,i,n,a,o){for(var s=o||[],l=0,u=t;u<e;u+=i){s[l++]=r[u]+n,s[l++]=r[u+1]+a;for(var h=u+2;h<u+i;++h)s[l++]=r[h]}return o&&s.length!=l&&(s.length=l),s}var aO=globalThis&&globalThis.__extends||function(){var r=function(t,e){return r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(i,n){i.__proto__=n}||function(i,n){for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(i[a]=n[a])},r(t,e)};return function(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");r(t,e);function i(){this.constructor=t}t.prototype=e===null?Object.create(e):(i.prototype=e.prototype,new i)}}(),ff=ar(),oO=function(r){aO(t,r);function t(){var e=r.call(this)||this;return e.extent_=oe(),e.extentRevision_=-1,e.simplifiedGeometryMaxMinSquaredTolerance=0,e.simplifiedGeometryRevision=0,e.simplifyTransformedInternal=YM(function(i,n,a){if(!a)return this.getSimplifiedGeometry(n);var o=this.clone();return o.applyTransform(a),o.getSimplifiedGeometry(n)}),e}return t.prototype.simplifyTransformed=function(e,i){return this.simplifyTransformedInternal(this.getRevision(),e,i)},t.prototype.clone=function(){return J()},t.prototype.closestPointXY=function(e,i,n,a){return J()},t.prototype.containsXY=function(e,i){var n=this.getClosestPoint([e,i]);return n[0]===e&&n[1]===i},t.prototype.getClosestPoint=function(e,i){var n=i||[NaN,NaN];return this.closestPointXY(e[0],e[1],n,1/0),n},t.prototype.intersectsCoordinate=function(e){return this.containsXY(e[0],e[1])},t.prototype.computeExtent=function(e){return J()},t.prototype.getExtent=function(e){if(this.extentRevision_!=this.getRevision()){var i=this.computeExtent(this.extent_);(isNaN(i[0])||isNaN(i[1]))&&Eu(i),this.extentRevision_=this.getRevision()}return Ux(this.extent_,e)},t.prototype.rotate=function(e,i){J()},t.prototype.scale=function(e,i,n){J()},t.prototype.simplify=function(e){return this.getSimplifiedGeometry(e*e)},t.prototype.getSimplifiedGeometry=function(e){return J()},t.prototype.getType=function(){return J()},t.prototype.applyTransform=function(e){J()},t.prototype.intersectsExtent=function(e){return J()},t.prototype.translate=function(e,i){J()},t.prototype.transform=function(e,i){var n=At(e),a=n.getUnits()==Fe.TILE_PIXELS?function(o,s,l){var u=n.getExtent(),h=n.getWorldExtent(),c=Ft(h)/Ft(u);return Me(ff,h[0],h[3],c,-c,0,0,0),Er(o,0,o.length,l,ff,s),Vi(n,i)(o,s,l)}:Vi(n,i);return this.applyTransform(a),this},t}(Ir);const sO=oO,Kt={XY:"XY",XYZ:"XYZ",XYM:"XYM",XYZM:"XYZM"};var lO=globalThis&&globalThis.__extends||function(){var r=function(t,e){return r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(i,n){i.__proto__=n}||function(i,n){for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(i[a]=n[a])},r(t,e)};return function(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");r(t,e);function i(){this.constructor=t}t.prototype=e===null?Object.create(e):(i.prototype=e.prototype,new i)}}(),uO=function(r){lO(t,r);function t(){var e=r.call(this)||this;return e.layout=Kt.XY,e.stride=2,e.flatCoordinates=null,e}return t.prototype.computeExtent=function(e){return Bx(this.flatCoordinates,0,this.flatCoordinates.length,this.stride,e)},t.prototype.getCoordinates=function(){return J()},t.prototype.getFirstCoordinate=function(){return this.flatCoordinates.slice(0,this.stride)},t.prototype.getFlatCoordinates=function(){return this.flatCoordinates},t.prototype.getLastCoordinate=function(){return this.flatCoordinates.slice(this.flatCoordinates.length-this.stride)},t.prototype.getLayout=function(){return this.layout},t.prototype.getSimplifiedGeometry=function(e){if(this.simplifiedGeometryRevision!==this.getRevision()&&(this.simplifiedGeometryMaxMinSquaredTolerance=0,this.simplifiedGeometryRevision=this.getRevision()),e<0||this.simplifiedGeometryMaxMinSquaredTolerance!==0&&e<=this.simplifiedGeometryMaxMinSquaredTolerance)return this;var i=this.getSimplifiedGeometryInternal(e),n=i.getFlatCoordinates();return n.length<this.flatCoordinates.length?i:(this.simplifiedGeometryMaxMinSquaredTolerance=e,this)},t.prototype.getSimplifiedGeometryInternal=function(e){return this},t.prototype.getStride=function(){return this.stride},t.prototype.setFlatCoordinates=function(e,i){this.stride=pf(e),this.layout=e,this.flatCoordinates=i},t.prototype.setCoordinates=function(e,i){J()},t.prototype.setLayout=function(e,i,n){var a;if(e)a=pf(e);else{for(var o=0;o<n;++o)if(i.length===0){this.layout=Kt.XY,this.stride=2;return}else i=i[0];a=i.length,e=hO(a)}this.layout=e,this.stride=a},t.prototype.applyTransform=function(e){this.flatCoordinates&&(e(this.flatCoordinates,this.flatCoordinates,this.stride),this.changed())},t.prototype.rotate=function(e,i){var n=this.getFlatCoordinates();if(n){var a=this.getStride();Rv(n,0,n.length,a,e,i,n),this.changed()}},t.prototype.scale=function(e,i,n){var a=i;a===void 0&&(a=e);var o=n;o||(o=or(this.getExtent()));var s=this.getFlatCoordinates();if(s){var l=this.getStride();iO(s,0,s.length,l,e,a,o,s),this.changed()}},t.prototype.translate=function(e,i){var n=this.getFlatCoordinates();if(n){var a=this.getStride();nO(n,0,n.length,a,e,i,n),this.changed()}},t}(sO);function hO(r){var t;return r==2?t=Kt.XY:r==3?t=Kt.XYZ:r==4&&(t=Kt.XYZM),t}function pf(r){var t;return r==Kt.XY?t=2:r==Kt.XYZ||r==Kt.XYM?t=3:r==Kt.XYZM&&(t=4),t}function cO(r,t,e){var i=r.getFlatCoordinates();if(i){var n=r.getStride();return Er(i,0,i.length,n,t,e)}else return null}const Fu=uO;function dO(r,t,e,i){for(var n=0,a=e.length;n<a;++n)r[t++]=e[n];return t}function Pv(r,t,e,i){for(var n=0,a=e.length;n<a;++n)for(var o=e[n],s=0;s<i;++s)r[t++]=o[s];return t}function fO(r,t,e,i,n){for(var a=n||[],o=0,s=0,l=e.length;s<l;++s){var u=Pv(r,t,e[s],i);a[o++]=u,t=u}return a.length=o,a}var pO=globalThis&&globalThis.__extends||function(){var r=function(t,e){return r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(i,n){i.__proto__=n}||function(i,n){for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(i[a]=n[a])},r(t,e)};return function(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");r(t,e);function i(){this.constructor=t}t.prototype=e===null?Object.create(e):(i.prototype=e.prototype,new i)}}(),vO=function(r){pO(t,r);function t(e,i){var n=r.call(this)||this;return n.setCoordinates(e,i),n}return t.prototype.clone=function(){var e=new t(this.flatCoordinates.slice(),this.layout);return e.applyProperties(this),e},t.prototype.closestPointXY=function(e,i,n,a){var o=this.flatCoordinates,s=Qr(e,i,o[0],o[1]);if(s<a){for(var l=this.stride,u=0;u<l;++u)n[u]=o[u];return n.length=l,s}else return a},t.prototype.getCoordinates=function(){return this.flatCoordinates?this.flatCoordinates.slice():[]},t.prototype.computeExtent=function(e){return Nx(this.flatCoordinates,e)},t.prototype.getType=function(){return X.POINT},t.prototype.intersectsExtent=function(e){return Xp(e,this.flatCoordinates[0],this.flatCoordinates[1])},t.prototype.setCoordinates=function(e,i){this.setLayout(i,e,0),this.flatCoordinates||(this.flatCoordinates=[]),this.flatCoordinates.length=dO(this.flatCoordinates,0,e,this.stride),this.changed()},t}(Fu);const Dv=vO,Wt={ANIMATING:0,INTERACTING:1},ue={CENTER:"center",RESOLUTION:"resolution",ROTATION:"rotation"};var mO=42,$u=256;function vf(r,t,e){return function(i,n,a,o,s){if(i){if(!n&&!t)return i;var l=t?0:a[0]*n,u=t?0:a[1]*n,h=s?s[0]:0,c=s?s[1]:0,d=r[0]+l/2+h,f=r[2]-l/2+h,p=r[1]+u/2+c,v=r[3]-u/2+c;d>f&&(d=(f+d)/2,f=d),p>v&&(p=(v+p)/2,v=p);var m=xt(i[0],d,f),_=xt(i[1],p,v);if(o&&e&&n){var g=30*n;m+=-g*Math.log(1+Math.max(0,d-i[0])/g)+g*Math.log(1+Math.max(0,i[0]-f)/g),_+=-g*Math.log(1+Math.max(0,p-i[1])/g)+g*Math.log(1+Math.max(0,i[1]-v)/g)}return[m,_]}}}function _O(r){return r}function Nu(r,t,e,i){var n=ht(t)/e[0],a=Ft(t)/e[1];return i?Math.min(r,Math.max(n,a)):Math.min(r,Math.min(n,a))}function Bu(r,t,e){var i=Math.min(r,t),n=50;return i*=Math.log(1+n*Math.max(0,r/t-1))/n+1,e&&(i=Math.max(i,e),i/=Math.log(1+n*Math.max(0,e/r-1))/n+1),xt(i,e/2,t*2)}function gO(r,t,e,i){return function(n,a,o,s){if(n!==void 0){var l=r[0],u=r[r.length-1],h=e?Nu(l,e,o,i):l;if(s){var c=t!==void 0?t:!0;return c?Bu(n,h,u):xt(n,u,h)}var d=Math.min(h,n),f=Math.floor(Ko(r,d,a));return r[f]>h&&f<r.length-1?r[f+1]:r[f]}else return}}function yO(r,t,e,i,n,a){return function(o,s,l,u){if(o!==void 0){var h=n?Nu(t,n,l,a):t,c=e!==void 0?e:0;if(u){var d=i!==void 0?i:!0;return d?Bu(o,h,c):xt(o,c,h)}var f=1e-9,p=Math.ceil(Math.log(t/h)/Math.log(r)-f),v=-s*(.5-f)+.5,m=Math.min(h,o),_=Math.floor(Math.log(t/m)/Math.log(r)+v),g=Math.max(p,_),y=t/Math.pow(r,g);return xt(y,c,h)}else return}}function mf(r,t,e,i,n){return function(a,o,s,l){if(a!==void 0){var u=i?Nu(r,i,s,n):r,h=e!==void 0?e:!0;return!h||!l?xt(a,t,u):Bu(a,u,t)}else return}}function bO(r){if(r!==void 0)return 0}function _f(r){if(r!==void 0)return r}function wO(r){var t=2*Math.PI/r;return function(e,i){if(i)return e;if(e!==void 0)return e=Math.floor(e/t+.5)*t,e}}function xO(r){var t=r||Pa(5);return function(e,i){if(i)return e;if(e!==void 0)return Math.abs(e)<=t?0:e}}function kv(r){return Math.pow(r,3)}function AO(r){return 1-kv(1-r)}function EO(r){return 3*r*r-2*r*r*r}function gf(r,t,e,i,n,a,o){var s=r[t],l=r[t+1],u=r[e]-s,h=r[e+1]-l,c;if(u===0&&h===0)c=t;else{var d=((n-s)*u+(a-l)*h)/(u*u+h*h);if(d>1)c=e;else if(d>0){for(var f=0;f<i;++f)o[f]=_r(r[t+f],r[e+f],d);o.length=i;return}else c=t}for(var f=0;f<i;++f)o[f]=r[c+f];o.length=i}function Lv(r,t,e,i,n){var a=r[t],o=r[t+1];for(t+=i;t<e;t+=i){var s=r[t],l=r[t+1],u=Qr(a,o,s,l);u>n&&(n=u),a=s,o=l}return n}function CO(r,t,e,i,n){for(var a=0,o=e.length;a<o;++a){var s=e[a];n=Lv(r,t,s,i,n),t=s}return n}function Fv(r,t,e,i,n,a,o,s,l,u,h){if(t==e)return u;var c,d;if(n===0)if(d=Qr(o,s,r[t],r[t+1]),d<u){for(c=0;c<i;++c)l[c]=r[t+c];return l.length=i,d}else return u;for(var f=h||[NaN,NaN],p=t+i;p<e;)if(gf(r,p-i,p,i,o,s,f),d=Qr(o,s,f[0],f[1]),d<u){for(u=d,c=0;c<i;++c)l[c]=f[c];l.length=i,p+=i}else p+=i*Math.max((Math.sqrt(d)-Math.sqrt(u))/n|0,1);if(a&&(gf(r,e-i,t,i,o,s,f),d=Qr(o,s,f[0],f[1]),d<u)){for(u=d,c=0;c<i;++c)l[c]=f[c];l.length=i}return u}function TO(r,t,e,i,n,a,o,s,l,u,h){for(var c=h||[NaN,NaN],d=0,f=e.length;d<f;++d){var p=e[d];u=Fv(r,t,p,i,n,a,o,s,l,u,c),t=p}return u}function MO(r,t,e,i,n,a,o){var s=(e-t)/i;if(s<3){for(;t<e;t+=i)a[o++]=r[t],a[o++]=r[t+1];return o}var l=new Array(s);l[0]=1,l[s-1]=1;for(var u=[t,e-i],h=0;u.length>0;){for(var c=u.pop(),d=u.pop(),f=0,p=r[d],v=r[d+1],m=r[c],_=r[c+1],g=d+i;g<c;g+=i){var y=r[g],b=r[g+1],w=yx(y,b,p,v,m,_);w>f&&(h=g,f=w)}f>n&&(l[(h-t)/i]=1,d+i<h&&u.push(d,h),h+i<c&&u.push(h,c))}for(var g=0;g<s;++g)l[g]&&(a[o++]=r[t+g*i],a[o++]=r[t+g*i+1]);return o}function gr(r,t){return t*Math.round(r/t)}function OO(r,t,e,i,n,a,o){if(t==e)return o;var s=gr(r[t],n),l=gr(r[t+1],n);t+=i,a[o++]=s,a[o++]=l;var u,h;do if(u=gr(r[t],n),h=gr(r[t+1],n),t+=i,t==e)return a[o++]=u,a[o++]=h,o;while(u==s&&h==l);for(;t<e;){var c=gr(r[t],n),d=gr(r[t+1],n);if(t+=i,!(c==u&&d==h)){var f=u-s,p=h-l,v=c-s,m=d-l;if(f*m==p*v&&(f<0&&v<f||f==v||f>0&&v>f)&&(p<0&&m<p||p==m||p>0&&m>p)){u=c,h=d;continue}a[o++]=u,a[o++]=h,s=u,l=h,u=c,h=d}}return a[o++]=u,a[o++]=h,o}function SO(r,t,e,i,n,a,o,s){for(var l=0,u=e.length;l<u;++l){var h=e[l];o=OO(r,t,h,i,n,a,o),s.push(o),t=h}return o}function Xr(r,t,e,i,n){for(var a=n!==void 0?n:[],o=0,s=t;s<e;s+=i)a[o++]=r.slice(s,s+i);return a.length=o,a}function Oo(r,t,e,i,n){for(var a=n!==void 0?n:[],o=0,s=0,l=e.length;s<l;++s){var u=e[s];a[o++]=Xr(r,t,u,i,a[o]),t=u}return a.length=o,a}function yf(r,t,e,i,n){for(var a=n!==void 0?n:[],o=0,s=0,l=e.length;s<l;++s){var u=e[s];a[o++]=Oo(r,t,u,i,a[o]),t=u[u.length-1]}return a.length=o,a}function $v(r,t,e,i){for(var n=0,a=r[e-i],o=r[e-i+1];t<e;t+=i){var s=r[t],l=r[t+1];n+=o*s-a*l,a=s,o=l}return n/2}function IO(r,t,e,i){for(var n=0,a=0,o=e.length;a<o;++a){var s=e[a];n+=$v(r,t,s,i),t=s}return n}var RO=globalThis&&globalThis.__extends||function(){var r=function(t,e){return r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(i,n){i.__proto__=n}||function(i,n){for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(i[a]=n[a])},r(t,e)};return function(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");r(t,e);function i(){this.constructor=t}t.prototype=e===null?Object.create(e):(i.prototype=e.prototype,new i)}}(),PO=function(r){RO(t,r);function t(e,i){var n=r.call(this)||this;return n.maxDelta_=-1,n.maxDeltaRevision_=-1,i!==void 0&&!Array.isArray(e[0])?n.setFlatCoordinates(i,e):n.setCoordinates(e,i),n}return t.prototype.clone=function(){return new t(this.flatCoordinates.slice(),this.layout)},t.prototype.closestPointXY=function(e,i,n,a){return a<Hp(this.getExtent(),e,i)?a:(this.maxDeltaRevision_!=this.getRevision()&&(this.maxDelta_=Math.sqrt(Lv(this.flatCoordinates,0,this.flatCoordinates.length,this.stride,0)),this.maxDeltaRevision_=this.getRevision()),Fv(this.flatCoordinates,0,this.flatCoordinates.length,this.stride,this.maxDelta_,!0,e,i,n,a))},t.prototype.getArea=function(){return $v(this.flatCoordinates,0,this.flatCoordinates.length,this.stride)},t.prototype.getCoordinates=function(){return Xr(this.flatCoordinates,0,this.flatCoordinates.length,this.stride)},t.prototype.getSimplifiedGeometryInternal=function(e){var i=[];return i.length=MO(this.flatCoordinates,0,this.flatCoordinates.length,this.stride,e,i,0),new t(i,Kt.XY)},t.prototype.getType=function(){return X.LINEAR_RING},t.prototype.intersectsExtent=function(e){return!1},t.prototype.setCoordinates=function(e,i){this.setLayout(i,e,1),this.flatCoordinates||(this.flatCoordinates=[]),this.flatCoordinates.length=Pv(this.flatCoordinates,0,e,this.stride),this.changed()},t}(Fu);const bf=PO;function DO(r,t,e,i,n){var a=Qp(n,function(o){return!br(r,t,e,i,o[0],o[1])});return!a}function br(r,t,e,i,n,a){for(var o=0,s=r[e-i],l=r[e-i+1];t<e;t+=i){var u=r[t],h=r[t+1];l<=a?h>a&&(u-s)*(a-l)-(n-s)*(h-l)>0&&o++:h<=a&&(u-s)*(a-l)-(n-s)*(h-l)<0&&o--,s=u,l=h}return o!==0}function Nv(r,t,e,i,n,a){if(e.length===0||!br(r,t,e[0],i,n,a))return!1;for(var o=1,s=e.length;o<s;++o)if(br(r,e[o-1],e[o],i,n,a))return!1;return!0}function kO(r,t,e,i,n,a,o){for(var s,l,u,h,c,d,f,p=n[a+1],v=[],m=0,_=e.length;m<_;++m){var g=e[m];for(h=r[g-i],d=r[g-i+1],s=t;s<g;s+=i)c=r[s],f=r[s+1],(p<=d&&f<=p||d<=p&&p<=f)&&(u=(p-d)/(f-d)*(c-h)+h,v.push(u)),h=c,d=f}var y=NaN,b=-1/0;for(v.sort(li),h=v[0],s=1,l=v.length;s<l;++s){c=v[s];var w=Math.abs(c-h);w>b&&(u=(h+c)/2,Nv(r,t,e,i,u,p)&&(y=u,b=w)),h=c}return isNaN(y)&&(y=n[a]),o?(o.push(y,p,b),o):[y,p,b]}function LO(r,t,e,i,n){var a;for(t+=i;t<e;t+=i)if(a=n(r.slice(t-i,t),r.slice(t,t+i)),a)return a;return!1}function Bv(r,t,e,i,n){var a=Zp(oe(),r,t,e,i);return zt(n,a)?Je(n,a)||a[0]>=n[0]&&a[2]<=n[2]||a[1]>=n[1]&&a[3]<=n[3]?!0:LO(r,t,e,i,function(o,s){return jx(n,o,s)}):!1}function FO(r,t,e,i,n){return!!(Bv(r,t,e,i,n)||br(r,t,e,i,n[0],n[1])||br(r,t,e,i,n[0],n[3])||br(r,t,e,i,n[2],n[1])||br(r,t,e,i,n[2],n[3]))}function $O(r,t,e,i,n){if(!FO(r,t,e[0],i,n))return!1;if(e.length===1)return!0;for(var a=1,o=e.length;a<o;++a)if(DO(r,e[a-1],e[a],i,n)&&!Bv(r,e[a-1],e[a],i,n))return!1;return!0}function NO(r,t,e,i){for(;t<e-i;){for(var n=0;n<i;++n){var a=r[t+n];r[t+n]=r[e-i+n],r[e-i+n]=a}t+=i,e-=i}}function zv(r,t,e,i){for(var n=0,a=r[e-i],o=r[e-i+1];t<e;t+=i){var s=r[t],l=r[t+1];n+=(s-a)*(l+o),a=s,o=l}return n===0?void 0:n>0}function BO(r,t,e,i,n){for(var a=n!==void 0?n:!1,o=0,s=e.length;o<s;++o){var l=e[o],u=zv(r,t,l,i);if(o===0){if(a&&u||!a&&!u)return!1}else if(a&&!u||!a&&u)return!1;t=l}return!0}function wf(r,t,e,i,n){for(var a=n!==void 0?n:!1,o=0,s=e.length;o<s;++o){var l=e[o],u=zv(r,t,l,i),h=o===0?a&&u||!a&&!u:a&&!u||!a&&u;h&&NO(r,t,l,i),t=l}return t}var zO=globalThis&&globalThis.__extends||function(){var r=function(t,e){return r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(i,n){i.__proto__=n}||function(i,n){for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(i[a]=n[a])},r(t,e)};return function(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");r(t,e);function i(){this.constructor=t}t.prototype=e===null?Object.create(e):(i.prototype=e.prototype,new i)}}(),GO=function(r){zO(t,r);function t(e,i,n){var a=r.call(this)||this;return a.ends_=[],a.flatInteriorPointRevision_=-1,a.flatInteriorPoint_=null,a.maxDelta_=-1,a.maxDeltaRevision_=-1,a.orientedRevision_=-1,a.orientedFlatCoordinates_=null,i!==void 0&&n?(a.setFlatCoordinates(i,e),a.ends_=n):a.setCoordinates(e,i),a}return t.prototype.appendLinearRing=function(e){this.flatCoordinates?Ov(this.flatCoordinates,e.getFlatCoordinates()):this.flatCoordinates=e.getFlatCoordinates().slice(),this.ends_.push(this.flatCoordinates.length),this.changed()},t.prototype.clone=function(){var e=new t(this.flatCoordinates.slice(),this.layout,this.ends_.slice());return e.applyProperties(this),e},t.prototype.closestPointXY=function(e,i,n,a){return a<Hp(this.getExtent(),e,i)?a:(this.maxDeltaRevision_!=this.getRevision()&&(this.maxDelta_=Math.sqrt(CO(this.flatCoordinates,0,this.ends_,this.stride,0)),this.maxDeltaRevision_=this.getRevision()),TO(this.flatCoordinates,0,this.ends_,this.stride,this.maxDelta_,!0,e,i,n,a))},t.prototype.containsXY=function(e,i){return Nv(this.getOrientedFlatCoordinates(),0,this.ends_,this.stride,e,i)},t.prototype.getArea=function(){return IO(this.getOrientedFlatCoordinates(),0,this.ends_,this.stride)},t.prototype.getCoordinates=function(e){var i;return e!==void 0?(i=this.getOrientedFlatCoordinates().slice(),wf(i,0,this.ends_,this.stride,e)):i=this.flatCoordinates,Oo(i,0,this.ends_,this.stride)},t.prototype.getEnds=function(){return this.ends_},t.prototype.getFlatInteriorPoint=function(){if(this.flatInteriorPointRevision_!=this.getRevision()){var e=or(this.getExtent());this.flatInteriorPoint_=kO(this.getOrientedFlatCoordinates(),0,this.ends_,this.stride,e,0),this.flatInteriorPointRevision_=this.getRevision()}return this.flatInteriorPoint_},t.prototype.getInteriorPoint=function(){return new Dv(this.getFlatInteriorPoint(),Kt.XYM)},t.prototype.getLinearRingCount=function(){return this.ends_.length},t.prototype.getLinearRing=function(e){return e<0||this.ends_.length<=e?null:new bf(this.flatCoordinates.slice(e===0?0:this.ends_[e-1],this.ends_[e]),this.layout)},t.prototype.getLinearRings=function(){for(var e=this.layout,i=this.flatCoordinates,n=this.ends_,a=[],o=0,s=0,l=n.length;s<l;++s){var u=n[s],h=new bf(i.slice(o,u),e);a.push(h),o=u}return a},t.prototype.getOrientedFlatCoordinates=function(){if(this.orientedRevision_!=this.getRevision()){var e=this.flatCoordinates;BO(e,0,this.ends_,this.stride)?this.orientedFlatCoordinates_=e:(this.orientedFlatCoordinates_=e.slice(),this.orientedFlatCoordinates_.length=wf(this.orientedFlatCoordinates_,0,this.ends_,this.stride)),this.orientedRevision_=this.getRevision()}return this.orientedFlatCoordinates_},t.prototype.getSimplifiedGeometryInternal=function(e){var i=[],n=[];return i.length=SO(this.flatCoordinates,0,this.ends_,this.stride,Math.sqrt(e),i,0,n),new t(i,Kt.XY,n)},t.prototype.getType=function(){return X.POLYGON},t.prototype.intersectsExtent=function(e){return $O(this.getOrientedFlatCoordinates(),0,this.ends_,this.stride,e)},t.prototype.setCoordinates=function(e,i){this.setLayout(i,e,2),this.flatCoordinates||(this.flatCoordinates=[]);var n=fO(this.flatCoordinates,0,e,this.stride,this.ends_);this.flatCoordinates.length=n.length===0?0:n[n.length-1],this.changed()},t}(Fu);function xf(r){var t=r[0],e=r[1],i=r[2],n=r[3],a=[t,e,t,n,i,n,i,e,t,e];return new GO(a,Kt.XY,[a.length])}var YO=globalThis&&globalThis.__extends||function(){var r=function(t,e){return r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(i,n){i.__proto__=n}||function(i,n){for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(i[a]=n[a])},r(t,e)};return function(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");r(t,e);function i(){this.constructor=t}t.prototype=e===null?Object.create(e):(i.prototype=e.prototype,new i)}}(),ms=0,UO=function(r){YO(t,r);function t(e){var i=r.call(this)||this;i.on,i.once,i.un;var n=ct({},e);return i.hints_=[0,0],i.animations_=[],i.updateAnimationKey_,i.projection_=Mu(n.projection,"EPSG:3857"),i.viewportSize_=[100,100],i.targetCenter_=null,i.targetResolution_,i.targetRotation_,i.nextCenter_=null,i.nextResolution_,i.nextRotation_,i.cancelAnchor_=void 0,n.center&&(n.center=Ue(n.center,i.projection_)),n.extent&&(n.extent=Le(n.extent,i.projection_)),n.projection&&Qx(),i.applyOptions_(n),i}return t.prototype.applyOptions_=function(e){var i=ct({},e);for(var n in ue)delete i[n];this.setProperties(i,!0);var a=WO(e);this.maxResolution_=a.maxResolution,this.minResolution_=a.minResolution,this.zoomFactor_=a.zoomFactor,this.resolutions_=e.resolutions,this.padding_=e.padding,this.minZoom_=a.minZoom;var o=jO(e),s=a.constraint,l=VO(e);this.constraints_={center:o,resolution:s,rotation:l},this.setRotation(e.rotation!==void 0?e.rotation:0),this.setCenterInternal(e.center!==void 0?e.center:null),e.resolution!==void 0?this.setResolution(e.resolution):e.zoom!==void 0&&this.setZoom(e.zoom)},Object.defineProperty(t.prototype,"padding",{get:function(){return this.padding_},set:function(e){var i=this.padding_;this.padding_=e;var n=this.getCenter();if(n){var a=e||[0,0,0,0];i=i||[0,0,0,0];var o=this.getResolution(),s=o/2*(a[3]-i[3]+i[1]-a[1]),l=o/2*(a[0]-i[0]+i[2]-a[2]);this.setCenterInternal([n[0]+s,n[1]-l])}},enumerable:!1,configurable:!0}),t.prototype.getUpdatedOptions_=function(e){var i=this.getProperties();return i.resolution!==void 0?i.resolution=this.getResolution():i.zoom=this.getZoom(),i.center=this.getCenterInternal(),i.rotation=this.getRotation(),ct({},i,e)},t.prototype.animate=function(e){this.isDef()&&!this.getAnimating()&&this.resolveConstraints(0);for(var i=new Array(arguments.length),n=0;n<i.length;++n){var a=arguments[n];a.center&&(a=ct({},a),a.center=Ue(a.center,this.getProjection())),a.anchor&&(a=ct({},a),a.anchor=Ue(a.anchor,this.getProjection())),i[n]=a}this.animateInternal.apply(this,i)},t.prototype.animateInternal=function(e){var i=arguments.length,n;i>1&&typeof arguments[i-1]=="function"&&(n=arguments[i-1],--i);for(var a=0;a<i&&!this.isDef();++a){var o=arguments[a];o.center&&this.setCenterInternal(o.center),o.zoom!==void 0?this.setZoom(o.zoom):o.resolution&&this.setResolution(o.resolution),o.rotation!==void 0&&this.setRotation(o.rotation)}if(a===i){n&&Yn(n,!0);return}for(var s=Date.now(),l=this.targetCenter_.slice(),u=this.targetResolution_,h=this.targetRotation_,c=[];a<i;++a){var d=arguments[a],f={start:s,complete:!1,anchor:d.anchor,duration:d.duration!==void 0?d.duration:1e3,easing:d.easing||EO,callback:n};if(d.center&&(f.sourceCenter=l,f.targetCenter=d.center.slice(),l=f.targetCenter),d.zoom!==void 0?(f.sourceResolution=u,f.targetResolution=this.getResolutionForZoom(d.zoom),u=f.targetResolution):d.resolution&&(f.sourceResolution=u,f.targetResolution=d.resolution,u=f.targetResolution),d.rotation!==void 0){f.sourceRotation=h;var p=Ar(d.rotation-h+Math.PI,2*Math.PI)-Math.PI;f.targetRotation=h+p,h=f.targetRotation}qO(f)?f.complete=!0:s+=f.duration,c.push(f)}this.animations_.push(c),this.setHint(Wt.ANIMATING,1),this.updateAnimations_()},t.prototype.getAnimating=function(){return this.hints_[Wt.ANIMATING]>0},t.prototype.getInteracting=function(){return this.hints_[Wt.INTERACTING]>0},t.prototype.cancelAnimations=function(){this.setHint(Wt.ANIMATING,-this.hints_[Wt.ANIMATING]);for(var e,i=0,n=this.animations_.length;i<n;++i){var a=this.animations_[i];if(a[0].callback&&Yn(a[0].callback,!1),!e)for(var o=0,s=a.length;o<s;++o){var l=a[o];if(!l.complete){e=l.anchor;break}}}this.animations_.length=0,this.cancelAnchor_=e,this.nextCenter_=null,this.nextResolution_=NaN,this.nextRotation_=NaN},t.prototype.updateAnimations_=function(){if(this.updateAnimationKey_!==void 0&&(cancelAnimationFrame(this.updateAnimationKey_),this.updateAnimationKey_=void 0),!!this.getAnimating()){for(var e=Date.now(),i=!1,n=this.animations_.length-1;n>=0;--n){for(var a=this.animations_[n],o=!0,s=0,l=a.length;s<l;++s){var u=a[s];if(!u.complete){var h=e-u.start,c=u.duration>0?h/u.duration:1;c>=1?(u.complete=!0,c=1):o=!1;var d=u.easing(c);if(u.sourceCenter){var f=u.sourceCenter[0],p=u.sourceCenter[1],v=u.targetCenter[0],m=u.targetCenter[1];this.nextCenter_=u.targetCenter;var _=f+d*(v-f),g=p+d*(m-p);this.targetCenter_=[_,g]}if(u.sourceResolution&&u.targetResolution){var y=d===1?u.targetResolution:u.sourceResolution+d*(u.targetResolution-u.sourceResolution);if(u.anchor){var b=this.getViewportSize_(this.getRotation()),w=this.constraints_.resolution(y,0,b,!0);this.targetCenter_=this.calculateCenterZoom(w,u.anchor)}this.nextResolution_=u.targetResolution,this.targetResolution_=y,this.applyTargetState_(!0)}if(u.sourceRotation!==void 0&&u.targetRotation!==void 0){var x=d===1?Ar(u.targetRotation+Math.PI,2*Math.PI)-Math.PI:u.sourceRotation+d*(u.targetRotation-u.sourceRotation);if(u.anchor){var E=this.constraints_.rotation(x,!0);this.targetCenter_=this.calculateCenterRotate(E,u.anchor)}this.nextRotation_=u.targetRotation,this.targetRotation_=x}if(this.applyTargetState_(!0),i=!0,!u.complete)break}}if(o){this.animations_[n]=null,this.setHint(Wt.ANIMATING,-1),this.nextCenter_=null,this.nextResolution_=NaN,this.nextRotation_=NaN;var A=a[0].callback;A&&Yn(A,!0)}}this.animations_=this.animations_.filter(Boolean),i&&this.updateAnimationKey_===void 0&&(this.updateAnimationKey_=requestAnimationFrame(this.updateAnimations_.bind(this)))}},t.prototype.calculateCenterRotate=function(e,i){var n,a=this.getCenterInternal();return a!==void 0&&(n=[a[0]-i[0],a[1]-i[1]],Hx(n,e-this.getRotation()),qx(n,i)),n},t.prototype.calculateCenterZoom=function(e,i){var n,a=this.getCenterInternal(),o=this.getResolution();if(a!==void 0&&o!==void 0){var s=i[0]-e*(i[0]-a[0])/o,l=i[1]-e*(i[1]-a[1])/o;n=[s,l]}return n},t.prototype.getViewportSize_=function(e){var i=this.viewportSize_;if(e){var n=i[0],a=i[1];return[Math.abs(n*Math.cos(e))+Math.abs(a*Math.sin(e)),Math.abs(n*Math.sin(e))+Math.abs(a*Math.cos(e))]}else return i},t.prototype.setViewportSize=function(e){this.viewportSize_=Array.isArray(e)?e.slice():[100,100],this.getAnimating()||this.resolveConstraints(0)},t.prototype.getCenter=function(){var e=this.getCenterInternal();return e&&jd(e,this.getProjection())},t.prototype.getCenterInternal=function(){return this.get(ue.CENTER)},t.prototype.getConstraints=function(){return this.constraints_},t.prototype.getConstrainResolution=function(){return this.get("constrainResolution")},t.prototype.getHints=function(e){return e!==void 0?(e[0]=this.hints_[0],e[1]=this.hints_[1],e):this.hints_.slice()},t.prototype.calculateExtent=function(e){var i=this.calculateExtentInternal(e);return ql(i,this.getProjection())},t.prototype.calculateExtentInternal=function(e){var i=e||this.getViewportSizeMinusPadding_(),n=this.getCenterInternal();et(n,1);var a=this.getResolution();et(a!==void 0,2);var o=this.getRotation();return et(o!==void 0,3),Da(n,a,o,i)},t.prototype.getMaxResolution=function(){return this.maxResolution_},t.prototype.getMinResolution=function(){return this.minResolution_},t.prototype.getMaxZoom=function(){return this.getZoomForResolution(this.minResolution_)},t.prototype.setMaxZoom=function(e){this.applyOptions_(this.getUpdatedOptions_({maxZoom:e}))},t.prototype.getMinZoom=function(){return this.getZoomForResolution(this.maxResolution_)},t.prototype.setMinZoom=function(e){this.applyOptions_(this.getUpdatedOptions_({minZoom:e}))},t.prototype.setConstrainResolution=function(e){this.applyOptions_(this.getUpdatedOptions_({constrainResolution:e}))},t.prototype.getProjection=function(){return this.projection_},t.prototype.getResolution=function(){return this.get(ue.RESOLUTION)},t.prototype.getResolutions=function(){return this.resolutions_},t.prototype.getResolutionForExtent=function(e,i){return this.getResolutionForExtentInternal(Le(e,this.getProjection()),i)},t.prototype.getResolutionForExtentInternal=function(e,i){var n=i||this.getViewportSizeMinusPadding_(),a=ht(e)/n[0],o=Ft(e)/n[1];return Math.max(a,o)},t.prototype.getResolutionForValueFunction=function(e){var i=e||2,n=this.getConstrainedResolution(this.maxResolution_),a=this.minResolution_,o=Math.log(n/a)/Math.log(i);return function(s){var l=n/Math.pow(i,s*o);return l}},t.prototype.getRotation=function(){return this.get(ue.ROTATION)},t.prototype.getValueForResolutionFunction=function(e){var i=Math.log(e||2),n=this.getConstrainedResolution(this.maxResolution_),a=this.minResolution_,o=Math.log(n/a)/i;return function(s){var l=Math.log(n/s)/i/o;return l}},t.prototype.getViewportSizeMinusPadding_=function(e){var i=this.getViewportSize_(e),n=this.padding_;return n&&(i=[i[0]-n[1]-n[3],i[1]-n[0]-n[2]]),i},t.prototype.getState=function(){var e=this.getProjection(),i=this.getResolution(),n=this.getRotation(),a=this.getCenterInternal(),o=this.padding_;if(o){var s=this.getViewportSizeMinusPadding_();a=_s(a,this.getViewportSize_(),[s[0]/2+o[3],s[1]/2+o[0]],i,n)}return{center:a.slice(0),projection:e!==void 0?e:null,resolution:i,nextCenter:this.nextCenter_,nextResolution:this.nextResolution_,nextRotation:this.nextRotation_,rotation:n,zoom:this.getZoom()}},t.prototype.getZoom=function(){var e,i=this.getResolution();return i!==void 0&&(e=this.getZoomForResolution(i)),e},t.prototype.getZoomForResolution=function(e){var i=this.minZoom_||0,n,a;if(this.resolutions_){var o=Ko(this.resolutions_,e,1);i=o,n=this.resolutions_[o],o==this.resolutions_.length-1?a=2:a=n/this.resolutions_[o+1]}else n=this.maxResolution_,a=this.zoomFactor_;return i+Math.log(n/e)/Math.log(a)},t.prototype.getResolutionForZoom=function(e){if(this.resolutions_){if(this.resolutions_.length<=1)return 0;var i=xt(Math.floor(e),0,this.resolutions_.length-2),n=this.resolutions_[i]/this.resolutions_[i+1];return this.resolutions_[i]/Math.pow(n,xt(e-i,0,1))}else return this.maxResolution_/Math.pow(this.zoomFactor_,e-this.minZoom_)},t.prototype.fit=function(e,i){var n;if(et(Array.isArray(e)||typeof e.getSimplifiedGeometry=="function",24),Array.isArray(e)){et(!Cu(e),25);var a=Le(e,this.getProjection());n=xf(a)}else if(e.getType()===X.CIRCLE){var a=Le(e.getExtent(),this.getProjection());n=xf(a),n.rotate(this.getRotation(),or(a))}else{var o=iv();o?n=e.clone().transform(o,this.getProjection()):n=e}this.fitInternal(n,i)},t.prototype.rotatedExtentForGeometry=function(e){for(var i=this.getRotation(),n=Math.cos(i),a=Math.sin(-i),o=e.getFlatCoordinates(),s=e.getStride(),l=1/0,u=1/0,h=-1/0,c=-1/0,d=0,f=o.length;d<f;d+=s){var p=o[d]*n-o[d+1]*a,v=o[d]*a+o[d+1]*n;l=Math.min(l,p),u=Math.min(u,v),h=Math.max(h,p),c=Math.max(c,v)}return[l,u,h,c]},t.prototype.fitInternal=function(e,i){var n=i||{},a=n.size;a||(a=this.getViewportSizeMinusPadding_());var o=n.padding!==void 0?n.padding:[0,0,0,0],s=n.nearest!==void 0?n.nearest:!1,l;n.minResolution!==void 0?l=n.minResolution:n.maxZoom!==void 0?l=this.getResolutionForZoom(n.maxZoom):l=0;var u=this.rotatedExtentForGeometry(e),h=this.getResolutionForExtentInternal(u,[a[0]-o[1]-o[3],a[1]-o[0]-o[2]]);h=isNaN(h)?l:Math.max(h,l),h=this.getConstrainedResolution(h,s?0:1);var c=this.getRotation(),d=Math.sin(c),f=Math.cos(c),p=or(u);p[0]+=(o[1]-o[3])/2*h,p[1]+=(o[0]-o[2])/2*h;var v=p[0]*f-p[1]*d,m=p[1]*f+p[0]*d,_=this.getConstrainedCenter([v,m],h),g=n.callback?n.callback:Zi;n.duration!==void 0?this.animateInternal({resolution:h,center:_,duration:n.duration,easing:n.easing},g):(this.targetResolution_=h,this.targetCenter_=_,this.applyTargetState_(!1,!0),Yn(g,!0))},t.prototype.centerOn=function(e,i,n){this.centerOnInternal(Ue(e,this.getProjection()),i,n)},t.prototype.centerOnInternal=function(e,i,n){this.setCenterInternal(_s(e,i,n,this.getResolution(),this.getRotation()))},t.prototype.calculateCenterShift=function(e,i,n,a){var o,s=this.padding_;if(s&&e){var l=this.getViewportSizeMinusPadding_(-n),u=_s(e,a,[l[0]/2+s[3],l[1]/2+s[0]],i,n);o=[e[0]-u[0],e[1]-u[1]]}return o},t.prototype.isDef=function(){return!!this.getCenterInternal()&&this.getResolution()!==void 0},t.prototype.adjustCenter=function(e){var i=jd(this.targetCenter_,this.getProjection());this.setCenter([i[0]+e[0],i[1]+e[1]])},t.prototype.adjustCenterInternal=function(e){var i=this.targetCenter_;this.setCenterInternal([i[0]+e[0],i[1]+e[1]])},t.prototype.adjustResolution=function(e,i){var n=i&&Ue(i,this.getProjection());this.adjustResolutionInternal(e,n)},t.prototype.adjustResolutionInternal=function(e,i){var n=this.getAnimating()||this.getInteracting(),a=this.getViewportSize_(this.getRotation()),o=this.constraints_.resolution(this.targetResolution_*e,0,a,n);i&&(this.targetCenter_=this.calculateCenterZoom(o,i)),this.targetResolution_*=e,this.applyTargetState_()},t.prototype.adjustZoom=function(e,i){this.adjustResolution(Math.pow(this.zoomFactor_,-e),i)},t.prototype.adjustRotation=function(e,i){i&&(i=Ue(i,this.getProjection())),this.adjustRotationInternal(e,i)},t.prototype.adjustRotationInternal=function(e,i){var n=this.getAnimating()||this.getInteracting(),a=this.constraints_.rotation(this.targetRotation_+e,n);i&&(this.targetCenter_=this.calculateCenterRotate(a,i)),this.targetRotation_+=e,this.applyTargetState_()},t.prototype.setCenter=function(e){this.setCenterInternal(e&&Ue(e,this.getProjection()))},t.prototype.setCenterInternal=function(e){this.targetCenter_=e,this.applyTargetState_()},t.prototype.setHint=function(e,i){return this.hints_[e]+=i,this.changed(),this.hints_[e]},t.prototype.setResolution=function(e){this.targetResolution_=e,this.applyTargetState_()},t.prototype.setRotation=function(e){this.targetRotation_=e,this.applyTargetState_()},t.prototype.setZoom=function(e){this.setResolution(this.getResolutionForZoom(e))},t.prototype.applyTargetState_=function(e,i){var n=this.getAnimating()||this.getInteracting()||i,a=this.constraints_.rotation(this.targetRotation_,n),o=this.getViewportSize_(a),s=this.constraints_.resolution(this.targetResolution_,0,o,n),l=this.constraints_.center(this.targetCenter_,s,o,n,this.calculateCenterShift(this.targetCenter_,s,a,o));this.get(ue.ROTATION)!==a&&this.set(ue.ROTATION,a),this.get(ue.RESOLUTION)!==s&&(this.set(ue.RESOLUTION,s),this.set("zoom",this.getZoom(),!0)),(!l||!this.get(ue.CENTER)||!wo(this.get(ue.CENTER),l))&&this.set(ue.CENTER,l),this.getAnimating()&&!e&&this.cancelAnimations(),this.cancelAnchor_=void 0},t.prototype.resolveConstraints=function(e,i,n){var a=e!==void 0?e:200,o=i||0,s=this.constraints_.rotation(this.targetRotation_),l=this.getViewportSize_(s),u=this.constraints_.resolution(this.targetResolution_,o,l),h=this.constraints_.center(this.targetCenter_,u,l,!1,this.calculateCenterShift(this.targetCenter_,u,s,l));if(a===0&&!this.cancelAnchor_){this.targetResolution_=u,this.targetRotation_=s,this.targetCenter_=h,this.applyTargetState_();return}var c=n||(a===0?this.cancelAnchor_:void 0);this.cancelAnchor_=void 0,(this.getResolution()!==u||this.getRotation()!==s||!this.getCenterInternal()||!wo(this.getCenterInternal(),h))&&(this.getAnimating()&&this.cancelAnimations(),this.animateInternal({rotation:s,center:h,resolution:u,duration:a,easing:AO,anchor:c}))},t.prototype.beginInteraction=function(){this.resolveConstraints(0),this.setHint(Wt.INTERACTING,1)},t.prototype.endInteraction=function(e,i,n){var a=n&&Ue(n,this.getProjection());this.endInteractionInternal(e,i,a)},t.prototype.endInteractionInternal=function(e,i,n){this.setHint(Wt.INTERACTING,-1),this.resolveConstraints(e,i,n)},t.prototype.getConstrainedCenter=function(e,i){var n=this.getViewportSize_(this.getRotation());return this.constraints_.center(e,i||this.getResolution(),n)},t.prototype.getConstrainedZoom=function(e,i){var n=this.getResolutionForZoom(e);return this.getZoomForResolution(this.getConstrainedResolution(n,i))},t.prototype.getConstrainedResolution=function(e,i){var n=i||0,a=this.getViewportSize_(this.getRotation());return this.constraints_.resolution(e,n,a)},t}(Ir);function Yn(r,t){setTimeout(function(){r(t)},0)}function jO(r){if(r.extent!==void 0){var t=r.smoothExtentConstraint!==void 0?r.smoothExtentConstraint:!0;return vf(r.extent,r.constrainOnlyCenter,t)}var e=Mu(r.projection,"EPSG:3857");if(r.multiWorld!==!0&&e.isGlobal()){var i=e.getExtent().slice();return i[0]=-1/0,i[2]=1/0,vf(i,!1,!1)}return _O}function WO(r){var t,e,i,n=28,a=2,o=r.minZoom!==void 0?r.minZoom:ms,s=r.maxZoom!==void 0?r.maxZoom:n,l=r.zoomFactor!==void 0?r.zoomFactor:a,u=r.multiWorld!==void 0?r.multiWorld:!1,h=r.smoothResolutionConstraint!==void 0?r.smoothResolutionConstraint:!0,c=r.showFullExtent!==void 0?r.showFullExtent:!1,d=Mu(r.projection,"EPSG:3857"),f=d.getExtent(),p=r.constrainOnlyCenter,v=r.extent;if(!u&&!v&&d.isGlobal()&&(p=!1,v=f),r.resolutions!==void 0){var m=r.resolutions;e=m[o],i=m[s]!==void 0?m[s]:m[m.length-1],r.constrainResolution?t=gO(m,h,!p&&v,c):t=mf(e,i,h,!p&&v,c)}else{var _=f?Math.max(ht(f),Ft(f)):360*ae[Fe.DEGREES]/d.getMetersPerUnit(),g=_/$u/Math.pow(a,ms),y=g/Math.pow(a,n-ms);e=r.maxResolution,e!==void 0?o=0:e=g/Math.pow(l,o),i=r.minResolution,i===void 0&&(r.maxZoom!==void 0?r.maxResolution!==void 0?i=e/Math.pow(l,s):i=g/Math.pow(l,s):i=y),s=o+Math.floor(Math.log(e/i)/Math.log(l)),i=e/Math.pow(l,s-o),r.constrainResolution?t=yO(l,e,i,h,!p&&v,c):t=mf(e,i,h,!p&&v,c)}return{constraint:t,maxResolution:e,minResolution:i,minZoom:o,zoomFactor:l}}function VO(r){var t=r.enableRotation!==void 0?r.enableRotation:!0;if(t){var e=r.constrainRotation;return e===void 0||e===!0?xO():e===!1?_f:typeof e=="number"?wO(e):_f}else return bO}function qO(r){return!(r.sourceCenter&&r.targetCenter&&!wo(r.sourceCenter,r.targetCenter)||r.sourceResolution!==r.targetResolution||r.sourceRotation!==r.targetRotation)}function _s(r,t,e,i,n){var a=Math.cos(-n),o=Math.sin(-n),s=r[0]*a-r[1]*o,l=r[1]*a+r[0]*o;s+=(t[0]/2-e[0])*i,l+=(e[1]-t[1]/2)*i,o=-o;var u=s*a-l*o,h=l*a+s*o;return[u,h]}const HO=UO,at={OPACITY:"opacity",VISIBLE:"visible",EXTENT:"extent",Z_INDEX:"zIndex",MAX_RESOLUTION:"maxResolution",MIN_RESOLUTION:"minResolution",MAX_ZOOM:"maxZoom",MIN_ZOOM:"minZoom",SOURCE:"source",MAP:"map"};var XO=globalThis&&globalThis.__extends||function(){var r=function(t,e){return r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(i,n){i.__proto__=n}||function(i,n){for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(i[a]=n[a])},r(t,e)};return function(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");r(t,e);function i(){this.constructor=t}t.prototype=e===null?Object.create(e):(i.prototype=e.prototype,new i)}}(),ZO=function(r){XO(t,r);function t(e){var i=r.call(this)||this;i.on,i.once,i.un,i.background_=e.background;var n=ct({},e);return typeof e.properties=="object"&&(delete n.properties,ct(n,e.properties)),n[at.OPACITY]=e.opacity!==void 0?e.opacity:1,et(typeof n[at.OPACITY]=="number",64),n[at.VISIBLE]=e.visible!==void 0?e.visible:!0,n[at.Z_INDEX]=e.zIndex,n[at.MAX_RESOLUTION]=e.maxResolution!==void 0?e.maxResolution:1/0,n[at.MIN_RESOLUTION]=e.minResolution!==void 0?e.minResolution:0,n[at.MIN_ZOOM]=e.minZoom!==void 0?e.minZoom:-1/0,n[at.MAX_ZOOM]=e.maxZoom!==void 0?e.maxZoom:1/0,i.className_=n.className!==void 0?n.className:"ol-layer",delete n.className,i.setProperties(n),i.state_=null,i}return t.prototype.getBackground=function(){return this.background_},t.prototype.getClassName=function(){return this.className_},t.prototype.getLayerState=function(e){var i=this.state_||{layer:this,managed:e===void 0?!0:e},n=this.getZIndex();return i.opacity=xt(Math.round(this.getOpacity()*100)/100,0,1),i.visible=this.getVisible(),i.extent=this.getExtent(),i.zIndex=n===void 0&&!i.managed?1/0:n,i.maxResolution=this.getMaxResolution(),i.minResolution=Math.max(this.getMinResolution(),0),i.minZoom=this.getMinZoom(),i.maxZoom=this.getMaxZoom(),this.state_=i,i},t.prototype.getLayersArray=function(e){return J()},t.prototype.getLayerStatesArray=function(e){return J()},t.prototype.getExtent=function(){return this.get(at.EXTENT)},t.prototype.getMaxResolution=function(){return this.get(at.MAX_RESOLUTION)},t.prototype.getMinResolution=function(){return this.get(at.MIN_RESOLUTION)},t.prototype.getMinZoom=function(){return this.get(at.MIN_ZOOM)},t.prototype.getMaxZoom=function(){return this.get(at.MAX_ZOOM)},t.prototype.getOpacity=function(){return this.get(at.OPACITY)},t.prototype.getSourceState=function(){return J()},t.prototype.getVisible=function(){return this.get(at.VISIBLE)},t.prototype.getZIndex=function(){return this.get(at.Z_INDEX)},t.prototype.setBackground=function(e){this.background_=e,this.changed()},t.prototype.setExtent=function(e){this.set(at.EXTENT,e)},t.prototype.setMaxResolution=function(e){this.set(at.MAX_RESOLUTION,e)},t.prototype.setMinResolution=function(e){this.set(at.MIN_RESOLUTION,e)},t.prototype.setMaxZoom=function(e){this.set(at.MAX_ZOOM,e)},t.prototype.setMinZoom=function(e){this.set(at.MIN_ZOOM,e)},t.prototype.setOpacity=function(e){et(typeof e=="number",64),this.set(at.OPACITY,e)},t.prototype.setVisible=function(e){this.set(at.VISIBLE,e)},t.prototype.setZIndex=function(e){this.set(at.Z_INDEX,e)},t.prototype.disposeInternal=function(){this.state_&&(this.state_.layer=null,this.state_=null),r.prototype.disposeInternal.call(this)},t}(Ir);const QO=ZO,Kl={PRERENDER:"prerender",POSTRENDER:"postrender",PRECOMPOSE:"precompose",POSTCOMPOSE:"postcompose",RENDERCOMPLETE:"rendercomplete"},es={UNDEFINED:"undefined",LOADING:"loading",READY:"ready",ERROR:"error"};var KO=globalThis&&globalThis.__extends||function(){var r=function(t,e){return r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(i,n){i.__proto__=n}||function(i,n){for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(i[a]=n[a])},r(t,e)};return function(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");r(t,e);function i(){this.constructor=t}t.prototype=e===null?Object.create(e):(i.prototype=e.prototype,new i)}}(),JO=function(r){KO(t,r);function t(e){var i=this,n=ct({},e);delete n.source,i=r.call(this,n)||this,i.on,i.once,i.un,i.mapPrecomposeKey_=null,i.mapRenderKey_=null,i.sourceChangeKey_=null,i.renderer_=null,i.rendered=!1,e.render&&(i.render=e.render),e.map&&i.setMap(e.map),i.addChangeListener(at.SOURCE,i.handleSourcePropertyChange_);var a=e.source?e.source:null;return i.setSource(a),i}return t.prototype.getLayersArray=function(e){var i=e||[];return i.push(this),i},t.prototype.getLayerStatesArray=function(e){var i=e||[];return i.push(this.getLayerState()),i},t.prototype.getSource=function(){return this.get(at.SOURCE)||null},t.prototype.getRenderSource=function(){return this.getSource()},t.prototype.getSourceState=function(){var e=this.getSource();return e?e.getState():es.UNDEFINED},t.prototype.handleSourceChange_=function(){this.changed()},t.prototype.handleSourcePropertyChange_=function(){this.sourceChangeKey_&&(ne(this.sourceChangeKey_),this.sourceChangeKey_=null);var e=this.getSource();e&&(this.sourceChangeKey_=ve(e,kt.CHANGE,this.handleSourceChange_,this)),this.changed()},t.prototype.getFeatures=function(e){return this.renderer_?this.renderer_.getFeatures(e):new Promise(function(i){return i([])})},t.prototype.getData=function(e){return!this.renderer_||!this.rendered?null:this.renderer_.getData(e)},t.prototype.render=function(e,i){var n=this.getRenderer();if(n.prepareFrame(e))return this.rendered=!0,n.renderFrame(e,i)},t.prototype.unrender=function(){this.rendered=!1},t.prototype.setMapInternal=function(e){e||this.unrender(),this.set(at.MAP,e)},t.prototype.getMapInternal=function(){return this.get(at.MAP)},t.prototype.setMap=function(e){this.mapPrecomposeKey_&&(ne(this.mapPrecomposeKey_),this.mapPrecomposeKey_=null),e||this.changed(),this.mapRenderKey_&&(ne(this.mapRenderKey_),this.mapRenderKey_=null),e&&(this.mapPrecomposeKey_=ve(e,Kl.PRECOMPOSE,function(i){var n=i,a=n.frameState.layerStatesArray,o=this.getLayerState(!1);et(!a.some(function(s){return s.layer===o.layer}),67),a.push(o)},this),this.mapRenderKey_=ve(this,kt.CHANGE,e.render,e),this.changed())},t.prototype.setSource=function(e){this.set(at.SOURCE,e)},t.prototype.getRenderer=function(){return this.renderer_||(this.renderer_=this.createRenderer()),this.renderer_},t.prototype.hasRenderer=function(){return!!this.renderer_},t.prototype.createRenderer=function(){return null},t.prototype.disposeInternal=function(){this.renderer_&&(this.renderer_.dispose(),delete this.renderer_),this.setSource(null),r.prototype.disposeInternal.call(this)},t}(QO);const zu=JO;var tS=globalThis&&globalThis.__extends||function(){var r=function(t,e){return r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(i,n){i.__proto__=n}||function(i,n){for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(i[a]=n[a])},r(t,e)};return function(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");r(t,e);function i(){this.constructor=t}t.prototype=e===null?Object.create(e):(i.prototype=e.prototype,new i)}}(),eS=function(r){tS(t,r);function t(e){var i=e||{};return r.call(this,i)||this}return t}(zu);const rS=eS,Z={IDLE:0,LOADING:1,LOADED:2,ERROR:3,EMPTY:4};var iS=globalThis&&globalThis.__extends||function(){var r=function(t,e){return r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(i,n){i.__proto__=n}||function(i,n){for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(i[a]=n[a])},r(t,e)};return function(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");r(t,e);function i(){this.constructor=t}t.prototype=e===null?Object.create(e):(i.prototype=e.prototype,new i)}}(),nS=function(r){iS(t,r);function t(e){var i=r.call(this)||this;return i.ready=!0,i.boundHandleImageChange_=i.handleImageChange_.bind(i),i.layer_=e,i.declutterExecutorGroup=null,i}return t.prototype.getFeatures=function(e){return J()},t.prototype.getData=function(e){return null},t.prototype.prepareFrame=function(e){return J()},t.prototype.renderFrame=function(e,i){return J()},t.prototype.loadedTileCallback=function(e,i,n){e[i]||(e[i]={}),e[i][n.tileCoord.toString()]=n},t.prototype.createLoadedTileFinder=function(e,i,n){return function(a,o){var s=this.loadedTileCallback.bind(this,n,a);return e.forEachLoadedTile(i,a,o,s)}.bind(this)},t.prototype.forEachFeatureAtCoordinate=function(e,i,n,a,o){},t.prototype.getDataAtPixel=function(e,i,n){return null},t.prototype.getLayer=function(){return this.layer_},t.prototype.handleFontsChanged=function(){},t.prototype.handleImageChange_=function(e){var i=e.target;i.getState()===Z.LOADED&&this.renderIfReadyAndVisible()},t.prototype.loadImage=function(e){var i=e.getState();return i!=Z.LOADED&&i!=Z.ERROR&&e.addEventListener(kt.CHANGE,this.boundHandleImageChange_),i==Z.IDLE&&(e.load(),i=e.getState()),i==Z.LOADED},t.prototype.renderIfReadyAndVisible=function(){var e=this.getLayer();e.getVisible()&&e.getSourceState()==es.READY&&e.changed()},t.prototype.disposeInternal=function(){delete this.layer_,r.prototype.disposeInternal.call(this)},t}(Sv);const aS=nS;var oS=globalThis&&globalThis.__extends||function(){var r=function(t,e){return r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(i,n){i.__proto__=n}||function(i,n){for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(i[a]=n[a])},r(t,e)};return function(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");r(t,e);function i(){this.constructor=t}t.prototype=e===null?Object.create(e):(i.prototype=e.prototype,new i)}}(),sS=function(r){oS(t,r);function t(e,i,n,a){var o=r.call(this,e)||this;return o.inversePixelTransform=i,o.frameState=n,o.context=a,o}return t}(Sr);const lS=sS;var uS=/^#([a-f0-9]{3}|[a-f0-9]{4}(?:[a-f0-9]{2}){0,2})$/i,hS=/^([a-z]*)$|^hsla?\(.*\)$/i;function Gv(r){return typeof r=="string"?r:Yv(r)}function cS(r){var t=document.createElement("div");if(t.style.color=r,t.style.color!==""){document.body.appendChild(t);var e=getComputedStyle(t).color;return document.body.removeChild(t),e}else return""}var dS=function(){var r=1024,t={},e=0;return function(i){var n;if(t.hasOwnProperty(i))n=t[i];else{if(e>=r){var a=0;for(var o in t)a++&3||(delete t[o],--e)}n=fS(i),t[i]=n,++e}return n}}();function So(r){return Array.isArray(r)?r:dS(r)}function fS(r){var t,e,i,n,a;if(hS.exec(r)&&(r=cS(r)),uS.exec(r)){var o=r.length-1,s=void 0;o<=4?s=1:s=2;var l=o===4||o===8;t=parseInt(r.substr(1+0*s,s),16),e=parseInt(r.substr(1+1*s,s),16),i=parseInt(r.substr(1+2*s,s),16),l?n=parseInt(r.substr(1+3*s,s),16):n=255,s==1&&(t=(t<<4)+t,e=(e<<4)+e,i=(i<<4)+i,l&&(n=(n<<4)+n)),a=[t,e,i,n/255]}else r.indexOf("rgba(")==0?(a=r.slice(5,-1).split(",").map(Number),Af(a)):r.indexOf("rgb(")==0?(a=r.slice(4,-1).split(",").map(Number),a.push(1),Af(a)):et(!1,14);return a}function Af(r){return r[0]=xt(r[0]+.5|0,0,255),r[1]=xt(r[1]+.5|0,0,255),r[2]=xt(r[2]+.5|0,0,255),r[3]=xt(r[3],0,1),r}function Yv(r){var t=r[0];t!=(t|0)&&(t=t+.5|0);var e=r[1];e!=(e|0)&&(e=e+.5|0);var i=r[2];i!=(i|0)&&(i=i+.5|0);var n=r[3]===void 0?1:Math.round(r[3]*100)/100;return"rgba("+t+","+e+","+i+","+n+")"}function le(r,t,e,i){var n;return e&&e.length?n=e.shift():ts?n=new OffscreenCanvas(r||300,t||300):n=document.createElement("canvas"),r&&(n.width=r),t&&(n.height=t),n.getContext("2d",i)}var pS=globalThis&&globalThis.__extends||function(){var r=function(t,e){return r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(i,n){i.__proto__=n}||function(i,n){for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(i[a]=n[a])},r(t,e)};return function(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");r(t,e);function i(){this.constructor=t}t.prototype=e===null?Object.create(e):(i.prototype=e.prototype,new i)}}(),$i=null;function vS(){var r=document.createElement("canvas");r.width=1,r.height=1,$i=r.getContext("2d")}var mS=function(r){pS(t,r);function t(e){var i=r.call(this,e)||this;return i.container=null,i.renderedResolution,i.tempTransform=ar(),i.pixelTransform=ar(),i.inversePixelTransform=ar(),i.context=null,i.containerReused=!1,i.pixelContext_=null,i.frameState=null,i}return t.prototype.getImageData=function(e,i,n){$i||vS(),$i.clearRect(0,0,1,1);var a;try{$i.drawImage(e,i,n,1,1,0,0,1,1),a=$i.getImageData(0,0,1,1).data}catch{return null}return a},t.prototype.getBackground=function(e){var i=this.getLayer(),n=i.getBackground();return typeof n=="function"&&(n=n(e.viewState.resolution)),n||void 0},t.prototype.useContainer=function(e,i,n,a){var o=this.getLayer().getClassName(),s,l;if(e&&e.className===o&&e.style.opacity===""&&n===1&&(!a||e.style.backgroundColor&&mi(So(e.style.backgroundColor),So(a)))){var u=e.firstElementChild;u instanceof HTMLCanvasElement&&(l=u.getContext("2d"))}if(l&&l.canvas.style.transform===i?(this.container=e,this.context=l,this.containerReused=!0):this.containerReused&&(this.container=null,this.context=null,this.containerReused=!1),!this.container){s=document.createElement("div"),s.className=o;var h=s.style;h.position="absolute",h.width="100%",h.height="100%",a&&(h.backgroundColor=a),l=le();var u=l.canvas;s.appendChild(u),h=u.style,h.position="absolute",h.left="0",h.transformOrigin="top left",this.container=s,this.context=l}},t.prototype.clipUnrotated=function(e,i,n){var a=Or(n),o=Ho(n),s=qo(n),l=Vo(n);Mt(i.coordinateToPixelTransform,a),Mt(i.coordinateToPixelTransform,o),Mt(i.coordinateToPixelTransform,s),Mt(i.coordinateToPixelTransform,l);var u=this.inversePixelTransform;Mt(u,a),Mt(u,o),Mt(u,s),Mt(u,l),e.save(),e.beginPath(),e.moveTo(Math.round(a[0]),Math.round(a[1])),e.lineTo(Math.round(o[0]),Math.round(o[1])),e.lineTo(Math.round(s[0]),Math.round(s[1])),e.lineTo(Math.round(l[0]),Math.round(l[1])),e.clip()},t.prototype.dispatchRenderEvent_=function(e,i,n){var a=this.getLayer();if(a.hasListener(e)){var o=new lS(e,this.inversePixelTransform,n,i);a.dispatchEvent(o)}},t.prototype.preRender=function(e,i){this.frameState=i,this.dispatchRenderEvent_(Kl.PRERENDER,e,i)},t.prototype.postRender=function(e,i){this.dispatchRenderEvent_(Kl.POSTRENDER,e,i)},t.prototype.getRenderTransform=function(e,i,n,a,o,s,l){var u=o/2,h=s/2,c=a/i,d=-c,f=-e[0]+l,p=-e[1];return Me(this.tempTransform,u,h,c,d,-n,f,p)},t.prototype.getDataAtPixel=function(e,i,n){var a=Mt(this.inversePixelTransform,e.slice()),o=this.context,s=this.getLayer(),l=s.getExtent();if(l){var u=Mt(i.pixelToCoordinateTransform,e.slice());if(!pi(l,u))return null}var h=Math.round(a[0]),c=Math.round(a[1]),d=this.pixelContext_;if(!d){var f=document.createElement("canvas");f.width=1,f.height=1,d=f.getContext("2d"),this.pixelContext_=d}d.clearRect(0,0,1,1);var p;try{d.drawImage(o.canvas,h,c,1,1,0,0,1,1),p=d.getImageData(0,0,1,1).data}catch(v){return v.name==="SecurityError"?(this.pixelContext_=null,new Uint8Array):p}return p[3]===0?null:p},t.prototype.disposeInternal=function(){delete this.frameState,r.prototype.disposeInternal.call(this)},t}(aS);const Gu=mS;var Uv=.5,Io={imageSmoothingEnabled:!1,msImageSmoothingEnabled:!1},jv={imageSmoothingEnabled:!0,msImageSmoothingEnabled:!0},_S=globalThis&&globalThis.__extends||function(){var r=function(t,e){return r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(i,n){i.__proto__=n}||function(i,n){for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(i[a]=n[a])},r(t,e)};return function(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");r(t,e);function i(){this.constructor=t}t.prototype=e===null?Object.create(e):(i.prototype=e.prototype,new i)}}(),gS=function(r){_S(t,r);function t(e){var i=r.call(this,e)||this;return i.image_=null,i}return t.prototype.getImage=function(){return this.image_?this.image_.getImage():null},t.prototype.prepareFrame=function(e){var i=e.layerStatesArray[e.layerIndex],n=e.pixelRatio,a=e.viewState,o=a.resolution,s=this.getLayer().getSource(),l=e.viewHints,u=e.extent;if(i.extent!==void 0&&(u=Jr(u,Le(i.extent,a.projection))),!l[Wt.ANIMATING]&&!l[Wt.INTERACTING]&&!Cu(u))if(s){var h=a.projection,c=s.getImage(u,o,n,h);c&&this.loadImage(c)?this.image_=c:this.image_=null}else this.image_=null;return!!this.image_},t.prototype.getData=function(e){var i=this.frameState;if(!i)return null;var n=this.getLayer(),a=Mt(i.pixelToCoordinateTransform,e.slice()),o=n.getExtent();if(o&&!pi(o,a))return null;var s=this.image_.getExtent(),l=this.image_.getImage(),u=ht(s),h=Math.floor(l.width*((a[0]-s[0])/u));if(h<0||h>=l.width)return null;var c=Ft(s),d=Math.floor(l.height*((s[3]-a[1])/c));return d<0||d>=l.height?null:this.getImageData(l,h,d)},t.prototype.renderFrame=function(e,i){var n=this.image_,a=n.getExtent(),o=n.getResolution(),s=n.getPixelRatio(),l=e.layerStatesArray[e.layerIndex],u=e.pixelRatio,h=e.viewState,c=h.center,d=h.resolution,f=e.size,p=u*o/(d*s),v=Math.round(f[0]*u),m=Math.round(f[1]*u),_=h.rotation;if(_){var g=Math.round(Math.sqrt(v*v+m*m));v=g,m=g}Me(this.pixelTransform,e.size[0]/2,e.size[1]/2,1/u,1/u,_,-v/2,-m/2),ku(this.inversePixelTransform,this.pixelTransform);var y=Lu(this.pixelTransform);this.useContainer(i,y,l.opacity,this.getBackground(e));var b=this.context,w=b.canvas;w.width!=v||w.height!=m?(w.width=v,w.height=m):this.containerReused||b.clearRect(0,0,v,m);var x=!1,E=!0;if(l.extent){var A=Le(l.extent,h.projection);E=zt(A,e.extent),x=E&&!Je(A,e.extent),x&&this.clipUnrotated(b,e,A)}var M=n.getImage(),I=Me(this.tempTransform,v/2,m/2,p,p,0,s*(a[0]-c[0])/o,s*(c[1]-a[3])/o);this.renderedResolution=o*u/s;var k=M.width*I[0],N=M.height*I[3];if(this.getLayer().getSource().getInterpolate()||ct(b,Io),this.preRender(b,e),E&&k>=.5&&N>=.5){var F=I[4],j=I[5],D=l.opacity,B=void 0;D!==1&&(B=b.globalAlpha,b.globalAlpha=D),b.drawImage(M,0,0,+M.width,+M.height,Math.round(F),Math.round(j),Math.round(k),Math.round(N)),D!==1&&(b.globalAlpha=B)}return this.postRender(b,e),x&&b.restore(),ct(b,jv),y!==w.style.transform&&(w.style.transform=y),this.container},t}(Gu);const yS=gS;var bS=globalThis&&globalThis.__extends||function(){var r=function(t,e){return r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(i,n){i.__proto__=n}||function(i,n){for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(i[a]=n[a])},r(t,e)};return function(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");r(t,e);function i(){this.constructor=t}t.prototype=e===null?Object.create(e):(i.prototype=e.prototype,new i)}}(),wS=function(r){bS(t,r);function t(e){return r.call(this,e)||this}return t.prototype.createRenderer=function(){return new yS(this)},t.prototype.getData=function(e){return r.prototype.getData.call(this,e)},t}(rS);const xS=wS,Un={PRELOAD:"preload",USE_INTERIM_TILES_ON_ERROR:"useInterimTilesOnError"};var AS=globalThis&&globalThis.__extends||function(){var r=function(t,e){return r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(i,n){i.__proto__=n}||function(i,n){for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(i[a]=n[a])},r(t,e)};return function(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");r(t,e);function i(){this.constructor=t}t.prototype=e===null?Object.create(e):(i.prototype=e.prototype,new i)}}(),ES=function(r){AS(t,r);function t(e){var i=this,n=e||{},a=ct({},n);return delete a.preload,delete a.useInterimTilesOnError,i=r.call(this,a)||this,i.on,i.once,i.un,i.setPreload(n.preload!==void 0?n.preload:0),i.setUseInterimTilesOnError(n.useInterimTilesOnError!==void 0?n.useInterimTilesOnError:!0),i}return t.prototype.getPreload=function(){return this.get(Un.PRELOAD)},t.prototype.setPreload=function(e){this.set(Un.PRELOAD,e)},t.prototype.getUseInterimTilesOnError=function(){return this.get(Un.USE_INTERIM_TILES_ON_ERROR)},t.prototype.setUseInterimTilesOnError=function(e){this.set(Un.USE_INTERIM_TILES_ON_ERROR,e)},t.prototype.getData=function(e){return r.prototype.getData.call(this,e)},t}(zu);const CS=ES,W={IDLE:0,LOADING:1,LOADED:2,ERROR:3,EMPTY:4};var TS=globalThis&&globalThis.__extends||function(){var r=function(t,e){return r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(i,n){i.__proto__=n}||function(i,n){for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(i[a]=n[a])},r(t,e)};return function(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");r(t,e);function i(){this.constructor=t}t.prototype=e===null?Object.create(e):(i.prototype=e.prototype,new i)}}(),MS=function(r){TS(t,r);function t(e,i,n){var a=r.call(this)||this,o=n||{};return a.tileCoord=e,a.state=i,a.interimTile=null,a.key="",a.transition_=o.transition===void 0?250:o.transition,a.transitionStarts_={},a.interpolate=!!o.interpolate,a}return t.prototype.changed=function(){this.dispatchEvent(kt.CHANGE)},t.prototype.release=function(){},t.prototype.getKey=function(){return this.key+"/"+this.tileCoord},t.prototype.getInterimTile=function(){if(!this.interimTile)return this;var e=this.interimTile;do{if(e.getState()==W.LOADED)return this.transition_=0,e;e=e.interimTile}while(e);return this},t.prototype.refreshInterimChain=function(){if(this.interimTile){var e=this.interimTile,i=this;do{if(e.getState()==W.LOADED){e.interimTile=null;break}else e.getState()==W.LOADING?i=e:e.getState()==W.IDLE?i.interimTile=e.interimTile:i=e;e=i.interimTile}while(e)}},t.prototype.getTileCoord=function(){return this.tileCoord},t.prototype.getState=function(){return this.state},t.prototype.setState=function(e){if(this.state!==W.ERROR&&this.state>e)throw new Error("Tile load sequence violation");this.state=e,this.changed()},t.prototype.load=function(){J()},t.prototype.getAlpha=function(e,i){if(!this.transition_)return 1;var n=this.transitionStarts_[e];if(!n)n=i,this.transitionStarts_[e]=n;else if(n===-1)return 1;var a=i-n+1e3/60;return a>=this.transition_?1:kv(a/this.transition_)},t.prototype.inTransition=function(e){return this.transition_?this.transitionStarts_[e]!==-1:!1},t.prototype.endTransition=function(e){this.transition_&&(this.transitionStarts_[e]=-1)},t}(wn);const Wv=MS;var OS=globalThis&&globalThis.__extends||function(){var r=function(t,e){return r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(i,n){i.__proto__=n}||function(i,n){for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(i[a]=n[a])},r(t,e)};return function(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");r(t,e);function i(){this.constructor=t}t.prototype=e===null?Object.create(e):(i.prototype=e.prototype,new i)}}(),SS=function(r){OS(t,r);function t(e,i,n,a){var o=r.call(this)||this;return o.extent=e,o.pixelRatio_=n,o.resolution=i,o.state=a,o}return t.prototype.changed=function(){this.dispatchEvent(kt.CHANGE)},t.prototype.getExtent=function(){return this.extent},t.prototype.getImage=function(){return J()},t.prototype.getPixelRatio=function(){return this.pixelRatio_},t.prototype.getResolution=function(){return this.resolution},t.prototype.getState=function(){return this.state},t.prototype.load=function(){J()},t}(wn);const Vv=SS;var IS=globalThis&&globalThis.__extends||function(){var r=function(t,e){return r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(i,n){i.__proto__=n}||function(i,n){for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(i[a]=n[a])},r(t,e)};return function(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");r(t,e);function i(){this.constructor=t}t.prototype=e===null?Object.create(e):(i.prototype=e.prototype,new i)}}(),RS=function(r){IS(t,r);function t(e,i,n,a,o,s){var l=r.call(this,e,i,n,Z.IDLE)||this;return l.src_=a,l.image_=new Image,o!==null&&(l.image_.crossOrigin=o),l.unlisten_=null,l.state=Z.IDLE,l.imageLoadFunction_=s,l}return t.prototype.getImage=function(){return this.image_},t.prototype.handleImageError_=function(){this.state=Z.ERROR,this.unlistenImage_(),this.changed()},t.prototype.handleImageLoad_=function(){this.resolution===void 0&&(this.resolution=Ft(this.extent)/this.image_.height),this.state=Z.LOADED,this.unlistenImage_(),this.changed()},t.prototype.load=function(){(this.state==Z.IDLE||this.state==Z.ERROR)&&(this.state=Z.LOADING,this.changed(),this.imageLoadFunction_(this,this.src_),this.unlisten_=Yu(this.image_,this.handleImageLoad_.bind(this),this.handleImageError_.bind(this)))},t.prototype.setImage=function(e){this.image_=e,this.resolution=Ft(this.extent)/this.image_.height},t.prototype.unlistenImage_=function(){this.unlisten_&&(this.unlisten_(),this.unlisten_=null)},t}(Vv);function Yu(r,t,e){var i=r,n=!0,a=!1,o=!1,s=[Mo(i,kt.LOAD,function(){o=!0,a||t()})];return i.src&&KM?(a=!0,i.decode().then(function(){n&&t()}).catch(function(l){n&&(o?t():e())})):s.push(Mo(i,kt.ERROR,e)),function(){n=!1,s.forEach(ne)}}const PS=RS;var DS=globalThis&&globalThis.__extends||function(){var r=function(t,e){return r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(i,n){i.__proto__=n}||function(i,n){for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(i[a]=n[a])},r(t,e)};return function(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");r(t,e);function i(){this.constructor=t}t.prototype=e===null?Object.create(e):(i.prototype=e.prototype,new i)}}(),kS=function(r){DS(t,r);function t(e,i,n,a,o,s){var l=r.call(this,e,i,s)||this;return l.crossOrigin_=a,l.src_=n,l.key=n,l.image_=new Image,a!==null&&(l.image_.crossOrigin=a),l.unlisten_=null,l.tileLoadFunction_=o,l}return t.prototype.getImage=function(){return this.image_},t.prototype.setImage=function(e){this.image_=e,this.state=W.LOADED,this.unlistenImage_(),this.changed()},t.prototype.handleImageError_=function(){this.state=W.ERROR,this.unlistenImage_(),this.image_=LS(),this.changed()},t.prototype.handleImageLoad_=function(){var e=this.image_;e.naturalWidth&&e.naturalHeight?this.state=W.LOADED:this.state=W.EMPTY,this.unlistenImage_(),this.changed()},t.prototype.load=function(){this.state==W.ERROR&&(this.state=W.IDLE,this.image_=new Image,this.crossOrigin_!==null&&(this.image_.crossOrigin=this.crossOrigin_)),this.state==W.IDLE&&(this.state=W.LOADING,this.changed(),this.tileLoadFunction_(this,this.src_),this.unlisten_=Yu(this.image_,this.handleImageLoad_.bind(this),this.handleImageError_.bind(this)))},t.prototype.unlistenImage_=function(){this.unlisten_&&(this.unlisten_(),this.unlisten_=null)},t}(Wv);function LS(){var r=le(1,1);return r.fillStyle="rgba(0,0,0,0)",r.fillRect(0,0,1,1),r.canvas}const qv=kS;var FS=10,Ef=.25,$S=function(){function r(t,e,i,n,a,o){this.sourceProj_=t,this.targetProj_=e;var s={},l=Vi(this.targetProj_,this.sourceProj_);this.transformInv_=function(y){var b=y[0]+"/"+y[1];return s[b]||(s[b]=l(y)),s[b]},this.maxSourceExtent_=n,this.errorThresholdSquared_=a*a,this.triangles_=[],this.wrapsXInSource_=!1,this.canWrapXInSource_=this.sourceProj_.canWrapX()&&!!n&&!!this.sourceProj_.getExtent()&&ht(n)==ht(this.sourceProj_.getExtent()),this.sourceWorldWidth_=this.sourceProj_.getExtent()?ht(this.sourceProj_.getExtent()):null,this.targetWorldWidth_=this.targetProj_.getExtent()?ht(this.targetProj_.getExtent()):null;var u=Or(i),h=Ho(i),c=qo(i),d=Vo(i),f=this.transformInv_(u),p=this.transformInv_(h),v=this.transformInv_(c),m=this.transformInv_(d),_=FS+(o?Math.max(0,Math.ceil(gx(jl(i)/(o*o*256*256)))):0);if(this.addQuad_(u,h,c,d,f,p,v,m,_),this.wrapsXInSource_){var g=1/0;this.triangles_.forEach(function(y,b,w){g=Math.min(g,y.source[0][0],y.source[1][0],y.source[2][0])}),this.triangles_.forEach(function(y){if(Math.max(y.source[0][0],y.source[1][0],y.source[2][0])-g>this.sourceWorldWidth_/2){var b=[[y.source[0][0],y.source[0][1]],[y.source[1][0],y.source[1][1]],[y.source[2][0],y.source[2][1]]];b[0][0]-g>this.sourceWorldWidth_/2&&(b[0][0]-=this.sourceWorldWidth_),b[1][0]-g>this.sourceWorldWidth_/2&&(b[1][0]-=this.sourceWorldWidth_),b[2][0]-g>this.sourceWorldWidth_/2&&(b[2][0]-=this.sourceWorldWidth_);var w=Math.min(b[0][0],b[1][0],b[2][0]),x=Math.max(b[0][0],b[1][0],b[2][0]);x-w<this.sourceWorldWidth_/2&&(y.source=b)}}.bind(this))}s={}}return r.prototype.addTriangle_=function(t,e,i,n,a,o){this.triangles_.push({source:[n,a,o],target:[t,e,i]})},r.prototype.addQuad_=function(t,e,i,n,a,o,s,l,u){var h=zd([a,o,s,l]),c=this.sourceWorldWidth_?ht(h)/this.sourceWorldWidth_:null,d=this.sourceWorldWidth_,f=this.sourceProj_.canWrapX()&&c>.5&&c<1,p=!1;if(u>0){if(this.targetProj_.isGlobal()&&this.targetWorldWidth_){var v=zd([t,e,i,n]),m=ht(v)/this.targetWorldWidth_;p=m>Ef||p}!f&&this.sourceProj_.isGlobal()&&c&&(p=c>Ef||p)}if(!(!p&&this.maxSourceExtent_&&isFinite(h[0])&&isFinite(h[1])&&isFinite(h[2])&&isFinite(h[3])&&!zt(h,this.maxSourceExtent_))){var _=0;if(!p&&(!isFinite(a[0])||!isFinite(a[1])||!isFinite(o[0])||!isFinite(o[1])||!isFinite(s[0])||!isFinite(s[1])||!isFinite(l[0])||!isFinite(l[1]))){if(u>0)p=!0;else if(_=(!isFinite(a[0])||!isFinite(a[1])?8:0)+(!isFinite(o[0])||!isFinite(o[1])?4:0)+(!isFinite(s[0])||!isFinite(s[1])?2:0)+(!isFinite(l[0])||!isFinite(l[1])?1:0),_!=1&&_!=2&&_!=4&&_!=8)return}if(u>0){if(!p){var g=[(t[0]+i[0])/2,(t[1]+i[1])/2],y=this.transformInv_(g),b=void 0;if(f){var w=(Ar(a[0],d)+Ar(s[0],d))/2;b=w-Ar(y[0],d)}else b=(a[0]+s[0])/2-y[0];var x=(a[1]+s[1])/2-y[1],E=b*b+x*x;p=E>this.errorThresholdSquared_}if(p){if(Math.abs(t[0]-i[0])<=Math.abs(t[1]-i[1])){var A=[(e[0]+i[0])/2,(e[1]+i[1])/2],M=this.transformInv_(A),I=[(n[0]+t[0])/2,(n[1]+t[1])/2],k=this.transformInv_(I);this.addQuad_(t,e,A,I,a,o,M,k,u-1),this.addQuad_(I,A,i,n,k,M,s,l,u-1)}else{var N=[(t[0]+e[0])/2,(t[1]+e[1])/2],F=this.transformInv_(N),j=[(i[0]+n[0])/2,(i[1]+n[1])/2],D=this.transformInv_(j);this.addQuad_(t,N,j,n,a,F,D,l,u-1),this.addQuad_(N,e,i,j,F,o,s,D,u-1)}return}}if(f){if(!this.canWrapXInSource_)return;this.wrapsXInSource_=!0}_&11||this.addTriangle_(t,i,n,a,s,l),_&14||this.addTriangle_(t,i,e,a,s,o),_&&(_&13||this.addTriangle_(e,n,t,o,l,a),_&7||this.addTriangle_(e,n,i,o,l,s))}},r.prototype.calculateSourceExtent=function(){var t=oe();return this.triangles_.forEach(function(e,i,n){var a=e.source;Gi(t,a[0]),Gi(t,a[1]),Gi(t,a[2])}),t},r.prototype.getTriangles=function(){return this.triangles_},r}();const Hv=$S;var gs;function Cf(r,t,e,i,n){r.beginPath(),r.moveTo(0,0),r.lineTo(t,e),r.lineTo(i,n),r.closePath(),r.save(),r.clip(),r.fillRect(0,0,Math.max(t,i)+1,Math.max(e,n)),r.restore()}function ys(r,t){return Math.abs(r[t*4]-210)>2||Math.abs(r[t*4+3]-.75*255)>2}function NS(){if(gs===void 0){var r=document.createElement("canvas").getContext("2d");r.globalCompositeOperation="lighter",r.fillStyle="rgba(210, 0, 0, 0.75)",Cf(r,4,5,4,0),Cf(r,4,5,0,5);var t=r.getImageData(0,0,3,3).data;gs=ys(t,0)||ys(t,4)||ys(t,8)}return gs}function Qi(r,t,e,i){var n=vn(e,t,r),a=Yd(t,i,e),o=t.getMetersPerUnit();o!==void 0&&(a*=o);var s=r.getMetersPerUnit();s!==void 0&&(a/=s);var l=r.getExtent();if(!l||pi(l,n)){var u=Yd(r,a,n)/a;isFinite(u)&&u>0&&(a/=u)}return a}function BS(r,t,e,i){var n=or(e),a=Qi(r,t,n,i);return(!isFinite(a)||a<=0)&&Qp(e,function(o){return a=Qi(r,t,o,i),isFinite(a)&&a>0}),a}function Xv(r,t,e,i,n,a,o,s,l,u,h,c){var d=le(Math.round(e*r),Math.round(e*t));if(c||ct(d,Io),l.length===0)return d.canvas;d.scale(e,e);function f(b){return Math.round(b*e)/e}d.globalCompositeOperation="lighter";var p=oe();l.forEach(function(b,w,x){zx(p,b.extent)});var v=ht(p),m=Ft(p),_=le(Math.round(e*v/i),Math.round(e*m/i));c||ct(_,Io);var g=e/i;l.forEach(function(b,w,x){var E=b.extent[0]-p[0],A=-(b.extent[3]-p[3]),M=ht(b.extent),I=Ft(b.extent);b.image.width>0&&b.image.height>0&&_.drawImage(b.image,u,u,b.image.width-2*u,b.image.height-2*u,E*g,A*g,M*g,I*g)});var y=Or(o);return s.getTriangles().forEach(function(b,w,x){var E=b.source,A=b.target,M=E[0][0],I=E[0][1],k=E[1][0],N=E[1][1],F=E[2][0],j=E[2][1],D=f((A[0][0]-y[0])/a),B=f(-(A[0][1]-y[1])/a),$=f((A[1][0]-y[0])/a),K=f(-(A[1][1]-y[1])/a),q=f((A[2][0]-y[0])/a),Q=f(-(A[2][1]-y[1])/a),lt=M,C=I;M=0,I=0,k-=lt,N-=C,F-=lt,j-=C;var dt=[[k,N,0,0,$-D],[F,j,0,0,q-D],[0,0,k,N,K-B],[0,0,F,j,Q-B]],Y=bx(dt);if(Y){if(d.save(),d.beginPath(),NS()||!c){d.moveTo($,K);for(var ft=4,Ot=D-$,St=B-K,tt=0;tt<ft;tt++)d.lineTo($+f((tt+1)*Ot/ft),K+f(tt*St/(ft-1))),tt!=ft-1&&d.lineTo($+f((tt+1)*Ot/ft),K+f((tt+1)*St/(ft-1)));d.lineTo(q,Q)}else d.moveTo($,K),d.lineTo(D,B),d.lineTo(q,Q);d.clip(),d.transform(Y[0],Y[2],Y[1],Y[3],D,B),d.translate(p[0]-lt,p[3]-C),d.scale(i/e,-i/e),d.drawImage(_.canvas,0,0),d.restore()}}),h&&(d.save(),d.globalCompositeOperation="source-over",d.strokeStyle="black",d.lineWidth=1,s.getTriangles().forEach(function(b,w,x){var E=b.target,A=(E[0][0]-y[0])/a,M=-(E[0][1]-y[1])/a,I=(E[1][0]-y[0])/a,k=-(E[1][1]-y[1])/a,N=(E[2][0]-y[0])/a,F=-(E[2][1]-y[1])/a;d.beginPath(),d.moveTo(I,k),d.lineTo(A,M),d.lineTo(N,F),d.closePath(),d.stroke()}),d.restore()),d.canvas}var zS=globalThis&&globalThis.__extends||function(){var r=function(t,e){return r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(i,n){i.__proto__=n}||function(i,n){for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(i[a]=n[a])},r(t,e)};return function(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");r(t,e);function i(){this.constructor=t}t.prototype=e===null?Object.create(e):(i.prototype=e.prototype,new i)}}(),GS=function(r){zS(t,r);function t(e,i,n,a,o,s,l,u,h,c,d,f){var p=r.call(this,o,W.IDLE,{interpolate:!!f})||this;p.renderEdges_=d!==void 0?d:!1,p.pixelRatio_=l,p.gutter_=u,p.canvas_=null,p.sourceTileGrid_=i,p.targetTileGrid_=a,p.wrappedTileCoord_=s||o,p.sourceTiles_=[],p.sourcesListenerKeys_=null,p.sourceZ_=0;var v=a.getTileCoordExtent(p.wrappedTileCoord_),m=p.targetTileGrid_.getExtent(),_=p.sourceTileGrid_.getExtent(),g=m?Jr(v,m):v;if(jl(g)===0)return p.state=W.EMPTY,p;var y=e.getExtent();y&&(_?_=Jr(_,y):_=y);var b=a.getResolution(p.wrappedTileCoord_[0]),w=BS(e,n,g,b);if(!isFinite(w)||w<=0)return p.state=W.EMPTY,p;var x=c!==void 0?c:Uv;if(p.triangulation_=new Hv(e,n,g,_,w*x,b),p.triangulation_.getTriangles().length===0)return p.state=W.EMPTY,p;p.sourceZ_=i.getZForResolution(w);var E=p.triangulation_.calculateSourceExtent();if(_&&(e.canWrapX()?(E[1]=xt(E[1],_[1],_[3]),E[3]=xt(E[3],_[1],_[3])):E=Jr(E,_)),!jl(E))p.state=W.EMPTY;else{for(var A=i.getTileRangeForExtentAndZ(E,p.sourceZ_),M=A.minX;M<=A.maxX;M++)for(var I=A.minY;I<=A.maxY;I++){var k=h(p.sourceZ_,M,I,l);k&&p.sourceTiles_.push(k)}p.sourceTiles_.length===0&&(p.state=W.EMPTY)}return p}return t.prototype.getImage=function(){return this.canvas_},t.prototype.reproject_=function(){var e=[];if(this.sourceTiles_.forEach(function(h,c,d){h&&h.getState()==W.LOADED&&e.push({extent:this.sourceTileGrid_.getTileCoordExtent(h.tileCoord),image:h.getImage()})}.bind(this)),this.sourceTiles_.length=0,e.length===0)this.state=W.ERROR;else{var i=this.wrappedTileCoord_[0],n=this.targetTileGrid_.getTileSize(i),a=typeof n=="number"?n:n[0],o=typeof n=="number"?n:n[1],s=this.targetTileGrid_.getResolution(i),l=this.sourceTileGrid_.getResolution(this.sourceZ_),u=this.targetTileGrid_.getTileCoordExtent(this.wrappedTileCoord_);this.canvas_=Xv(a,o,this.pixelRatio_,l,this.sourceTileGrid_.getExtent(),s,u,this.triangulation_,e,this.gutter_,this.renderEdges_,this.interpolate),this.state=W.LOADED}this.changed()},t.prototype.load=function(){if(this.state==W.IDLE){this.state=W.LOADING,this.changed();var e=0;this.sourcesListenerKeys_=[],this.sourceTiles_.forEach(function(i,n,a){var o=i.getState();if(o==W.IDLE||o==W.LOADING){e++;var s=ve(i,kt.CHANGE,function(l){var u=i.getState();(u==W.LOADED||u==W.ERROR||u==W.EMPTY)&&(ne(s),e--,e===0&&(this.unlistenSources_(),this.reproject_()))},this);this.sourcesListenerKeys_.push(s)}}.bind(this)),e===0?setTimeout(this.reproject_.bind(this),0):this.sourceTiles_.forEach(function(i,n,a){var o=i.getState();o==W.IDLE&&i.load()})}},t.prototype.unlistenSources_=function(){this.sourcesListenerKeys_.forEach(ne),this.sourcesListenerKeys_=null},t}(Wv);const Zv=GS;var Qv=function(){function r(t,e,i,n){this.minX=t,this.maxX=e,this.minY=i,this.maxY=n}return r.prototype.contains=function(t){return this.containsXY(t[1],t[2])},r.prototype.containsTileRange=function(t){return this.minX<=t.minX&&t.maxX<=this.maxX&&this.minY<=t.minY&&t.maxY<=this.maxY},r.prototype.containsXY=function(t,e){return this.minX<=t&&t<=this.maxX&&this.minY<=e&&e<=this.maxY},r.prototype.equals=function(t){return this.minX==t.minX&&this.minY==t.minY&&this.maxX==t.maxX&&this.maxY==t.maxY},r.prototype.extend=function(t){t.minX<this.minX&&(this.minX=t.minX),t.maxX>this.maxX&&(this.maxX=t.maxX),t.minY<this.minY&&(this.minY=t.minY),t.maxY>this.maxY&&(this.maxY=t.maxY)},r.prototype.getHeight=function(){return this.maxY-this.minY+1},r.prototype.getSize=function(){return[this.getWidth(),this.getHeight()]},r.prototype.getWidth=function(){return this.maxX-this.minX+1},r.prototype.intersects=function(t){return this.minX<=t.maxX&&this.maxX>=t.minX&&this.minY<=t.maxY&&this.maxY>=t.minY},r}();function $r(r,t,e,i,n){return n!==void 0?(n.minX=r,n.maxX=t,n.minY=e,n.maxY=i,n):new Qv(r,t,e,i)}const Kv=Qv;var YS=new RegExp(["^\\s*(?=(?:(?:[-a-z]+\\s*){0,2}(italic|oblique))?)","(?=(?:(?:[-a-z]+\\s*){0,2}(small-caps))?)","(?=(?:(?:[-a-z]+\\s*){0,2}(bold(?:er)?|lighter|[1-9]00 ))?)","(?:(?:normal|\\1|\\2|\\3)\\s*){0,3}((?:xx?-)?","(?:small|large)|medium|smaller|larger|[\\.\\d]+(?:\\%|in|[cem]m|ex|p[ctx]))","(?:\\s*\\/\\s*(normal|[\\.\\d]+(?:\\%|in|[cem]m|ex|p[ctx])?))",`?\\s*([-,\\"\\'\\sa-z]+?)\\s*$`].join(""),"i"),Tf=["style","variant","weight","size","lineHeight","family"],Jv=function(r){var t=r.match(YS);if(!t)return null;for(var e={lineHeight:"normal",size:"1.2em",style:"normal",weight:"normal",variant:"normal"},i=0,n=Tf.length;i<n;++i){var a=t[i+1];a!==void 0&&(e[Tf[i]]=a)}return e.families=e.family.split(/,\s?/),e};function tm(r){return r===1?"":String(Math.round(r*100)/100)}function Mf(r,t,e){return e===void 0&&(e=[0,0]),e[0]=r[0]+2*t,e[1]=r[1]+2*t,e}function em(r,t,e){return e===void 0&&(e=[0,0]),e[0]=r[0]*t+.5|0,e[1]=r[1]*t+.5|0,e}function Qt(r,t){return Array.isArray(r)?r:(t===void 0?t=[r,r]:(t[0]=r,t[1]=r),t)}var US=globalThis&&globalThis.__extends||function(){var r=function(t,e){return r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(i,n){i.__proto__=n}||function(i,n){for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(i[a]=n[a])},r(t,e)};return function(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");r(t,e);function i(){this.constructor=t}t.prototype=e===null?Object.create(e):(i.prototype=e.prototype,new i)}}(),jS=function(r){US(t,r);function t(e){var i=r.call(this,e)||this;return i.extentChanged=!0,i.renderedExtent_=null,i.renderedPixelRatio,i.renderedProjection=null,i.renderedRevision,i.renderedTiles=[],i.newTiles_=!1,i.tmpExtent=oe(),i.tmpTileRange_=new Kv(0,0,0,0),i}return t.prototype.isDrawableTile=function(e){var i=this.getLayer(),n=e.getState(),a=i.getUseInterimTilesOnError();return n==W.LOADED||n==W.EMPTY||n==W.ERROR&&!a},t.prototype.getTile=function(e,i,n,a){var o=a.pixelRatio,s=a.viewState.projection,l=this.getLayer(),u=l.getSource(),h=u.getTile(e,i,n,o,s);return h.getState()==W.ERROR&&(l.getUseInterimTilesOnError()?l.getPreload()>0&&(this.newTiles_=!0):h.setState(W.LOADED)),this.isDrawableTile(h)||(h=h.getInterimTile()),h},t.prototype.getData=function(e){var i=this.frameState;if(!i)return null;var n=this.getLayer(),a=Mt(i.pixelToCoordinateTransform,e.slice()),o=n.getExtent();if(o&&!pi(o,a))return null;for(var s=i.pixelRatio,l=i.viewState.projection,u=i.viewState,h=n.getRenderSource(),c=h.getTileGridForProjection(u.projection),d=h.getTilePixelRatio(i.pixelRatio),f=c.getZForResolution(u.resolution);f>=c.getMinZoom();--f){var p=c.getTileCoordForCoordAndZ(a,f),v=h.getTile(f,p[1],p[2],s,l);if(!(v instanceof qv||v instanceof Zv))return null;if(v.getState()===W.LOADED){var m=c.getOrigin(f),_=Qt(c.getTileSize(f)),g=c.getResolution(f),y=Math.floor(d*((a[0]-m[0])/g-p[1]*_[0])),b=Math.floor(d*((m[1]-a[1])/g-p[2]*_[1]));return this.getImageData(v.getImage(),y,b)}}return null},t.prototype.loadedTileCallback=function(e,i,n){return this.isDrawableTile(n)?r.prototype.loadedTileCallback.call(this,e,i,n):!1},t.prototype.prepareFrame=function(e){return!!this.getLayer().getSource()},t.prototype.renderFrame=function(e,i){var n=e.layerStatesArray[e.layerIndex],a=e.viewState,o=a.projection,s=a.resolution,l=a.center,u=a.rotation,h=e.pixelRatio,c=this.getLayer(),d=c.getSource(),f=d.getRevision(),p=d.getTileGridForProjection(o),v=p.getZForResolution(s,d.zDirection),m=p.getResolution(v),_=e.extent,g=n.extent&&Le(n.extent,o);g&&(_=Jr(_,Le(n.extent,o)));var y=d.getTilePixelRatio(h),b=Math.round(e.size[0]*y),w=Math.round(e.size[1]*y);if(u){var x=Math.round(Math.sqrt(b*b+w*w));b=x,w=x}var E=m*b/2/y,A=m*w/2/y,M=[l[0]-E,l[1]-A,l[0]+E,l[1]+A],I=p.getTileRangeForExtentAndZ(_,v),k={};k[v]={};var N=this.createLoadedTileFinder(d,o,k),F=this.tmpExtent,j=this.tmpTileRange_;this.newTiles_=!1;for(var D=I.minX;D<=I.maxX;++D)for(var B=I.minY;B<=I.maxY;++B){var $=this.getTile(v,D,B,e);if(this.isDrawableTile($)){var K=ut(this);if($.getState()==W.LOADED){k[v][$.tileCoord.toString()]=$;var q=$.inTransition(K);!this.newTiles_&&(q||this.renderedTiles.indexOf($)===-1)&&(this.newTiles_=!0)}if($.getAlpha(K,e.time)===1)continue}var Q=p.getTileCoordChildTileRange($.tileCoord,j,F),lt=!1;Q&&(lt=N(v+1,Q)),lt||p.forEachTileCoordParentTileRange($.tileCoord,N,j,F)}var C=m/s;Me(this.pixelTransform,e.size[0]/2,e.size[1]/2,1/y,1/y,u,-b/2,-w/2);var dt=Lu(this.pixelTransform);this.useContainer(i,dt,n.opacity,this.getBackground(e));var Y=this.context,ft=Y.canvas;ku(this.inversePixelTransform,this.pixelTransform),Me(this.tempTransform,b/2,w/2,C,C,0,-b/2,-w/2),ft.width!=b||ft.height!=w?(ft.width=b,ft.height=w):this.containerReused||Y.clearRect(0,0,b,w),g&&this.clipUnrotated(Y,e,g),d.getInterpolate()||ct(Y,Io),this.preRender(Y,e),this.renderedTiles.length=0;var Ot=Object.keys(k).map(Number);Ot.sort(li);var St,tt,H;n.opacity===1&&(!this.containerReused||d.getOpaque(e.viewState.projection))?Ot=Ot.reverse():(St=[],tt=[]);for(var Tt=Ot.length-1;Tt>=0;--Tt){var Nt=Ot[Tt],hr=d.getTilePixelSize(Nt,h,o),cr=p.getResolution(Nt),te=cr/m,Se=hr[0]*te*C,En=hr[1]*te*C,_i=p.getTileCoordForCoordAndZ(Or(M),Nt),Cn=p.getTileCoordExtent(_i),dr=Mt(this.tempTransform,[y*(Cn[0]-M[0])/m,y*(M[3]-Cn[3])/m]),gi=y*d.getGutterForProjection(o),Tn=k[Nt];for(var Rr in Tn){var $=Tn[Rr],ze=$.tileCoord,Pr=_i[1]-ze[1],is=Math.round(dr[0]-(Pr-1)*Se),Mn=_i[2]-ze[2],yi=Math.round(dr[1]-(Mn-1)*En),D=Math.round(dr[0]-Pr*Se),B=Math.round(dr[1]-Mn*En),Ie=is-D,me=yi-B,fr=v===Nt,q=fr&&$.getAlpha(ut(this),e.time)!==1,bi=!1;if(!q)if(St){H=[D,B,D+Ie,B,D+Ie,B+me,D,B+me];for(var Yt=0,On=St.length;Yt<On;++Yt)if(v!==Nt&&Nt<tt[Yt]){var Pt=St[Yt];zt([D,B,D+Ie,B+me],[Pt[0],Pt[3],Pt[4],Pt[7]])&&(bi||(Y.save(),bi=!0),Y.beginPath(),Y.moveTo(H[0],H[1]),Y.lineTo(H[2],H[3]),Y.lineTo(H[4],H[5]),Y.lineTo(H[6],H[7]),Y.moveTo(Pt[6],Pt[7]),Y.lineTo(Pt[4],Pt[5]),Y.lineTo(Pt[2],Pt[3]),Y.lineTo(Pt[0],Pt[1]),Y.clip())}St.push(H),tt.push(Nt)}else Y.clearRect(D,B,Ie,me);this.drawTileImage($,e,D,B,Ie,me,gi,fr),St&&!q?(bi&&Y.restore(),this.renderedTiles.unshift($)):this.renderedTiles.push($),this.updateUsedTiles(e.usedTiles,d,$)}}this.renderedRevision=f,this.renderedResolution=m,this.extentChanged=!this.renderedExtent_||!Wo(this.renderedExtent_,M),this.renderedExtent_=M,this.renderedPixelRatio=h,this.renderedProjection=o,this.manageTilePyramid(e,d,p,h,o,_,v,c.getPreload()),this.scheduleExpireCache(e,d),this.postRender(Y,e),n.extent&&Y.restore(),ct(Y,jv),dt!==ft.style.transform&&(ft.style.transform=dt);var Dr=tm(n.opacity),pr=this.container;return Dr!==pr.style.opacity&&(pr.style.opacity=Dr),this.container},t.prototype.drawTileImage=function(e,i,n,a,o,s,l,u){var h=this.getTileImage(e);if(h){var c=ut(this),d=u?e.getAlpha(c,i.time):1,f=d!==this.context.globalAlpha;f&&(this.context.save(),this.context.globalAlpha=d),this.context.drawImage(h,l,l,h.width-2*l,h.height-2*l,n,a,o,s),f&&this.context.restore(),d!==1?i.animate=!0:u&&e.endTransition(c)}},t.prototype.getImage=function(){var e=this.context;return e?e.canvas:null},t.prototype.getTileImage=function(e){return e.getImage()},t.prototype.scheduleExpireCache=function(e,i){if(i.canExpireCache()){var n=function(a,o,s){var l=ut(a);l in s.usedTiles&&a.expireCache(s.viewState.projection,s.usedTiles[l])}.bind(null,i);e.postRenderFunctions.push(n)}},t.prototype.updateUsedTiles=function(e,i,n){var a=ut(i);a in e||(e[a]={}),e[a][n.getKey()]=!0},t.prototype.manageTilePyramid=function(e,i,n,a,o,s,l,u,h){var c=ut(i);c in e.wantedTiles||(e.wantedTiles[c]={});var d=e.wantedTiles[c],f=e.tileQueue,p=n.getMinZoom(),v=0,m,_,g,y,b,w;for(w=p;w<=l;++w)for(_=n.getTileRangeForExtentAndZ(s,w,_),g=n.getResolution(w),y=_.minX;y<=_.maxX;++y)for(b=_.minY;b<=_.maxY;++b)l-w<=u?(++v,m=i.getTile(w,y,b,a,o),m.getState()==W.IDLE&&(d[m.getKey()]=!0,f.isKeyQueued(m.getKey())||f.enqueue([m,c,n.getTileCoordCenter(m.tileCoord),g])),h!==void 0&&h(m)):i.useTile(w,y,b,o);i.updateCacheSize(v,o)},t}(Gu);const WS=jS;var VS=globalThis&&globalThis.__extends||function(){var r=function(t,e){return r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(i,n){i.__proto__=n}||function(i,n){for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(i[a]=n[a])},r(t,e)};return function(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");r(t,e);function i(){this.constructor=t}t.prototype=e===null?Object.create(e):(i.prototype=e.prototype,new i)}}(),qS=function(r){VS(t,r);function t(e){return r.call(this,e)||this}return t.prototype.createRenderer=function(){return new WS(this)},t}(CS);const HS=qS;function XS(r,t,e,i,n){rm(r,t,e||0,i||r.length-1,n||ZS)}function rm(r,t,e,i,n){for(;i>e;){if(i-e>600){var a=i-e+1,o=t-e+1,s=Math.log(a),l=.5*Math.exp(2*s/3),u=.5*Math.sqrt(s*l*(a-l)/a)*(o-a/2<0?-1:1),h=Math.max(e,Math.floor(t-o*l/a+u)),c=Math.min(i,Math.floor(t+(a-o)*l/a+u));rm(r,t,h,c,n)}var d=r[t],f=e,p=i;for(Ii(r,e,t),n(r[i],d)>0&&Ii(r,e,i);f<p;){for(Ii(r,f,p),f++,p--;n(r[f],d)<0;)f++;for(;n(r[p],d)>0;)p--}n(r[e],d)===0?Ii(r,e,p):(p++,Ii(r,p,i)),p<=t&&(e=p+1),t<=p&&(i=p-1)}}function Ii(r,t,e){var i=r[t];r[t]=r[e],r[e]=i}function ZS(r,t){return r<t?-1:r>t?1:0}let im=class{constructor(t=9){this._maxEntries=Math.max(4,t),this._minEntries=Math.max(2,Math.ceil(this._maxEntries*.4)),this.clear()}all(){return this._all(this.data,[])}search(t){let e=this.data;const i=[];if(!Wn(t,e))return i;const n=this.toBBox,a=[];for(;e;){for(let o=0;o<e.children.length;o++){const s=e.children[o],l=e.leaf?n(s):s;Wn(t,l)&&(e.leaf?i.push(s):ws(t,l)?this._all(s,i):a.push(s))}e=a.pop()}return i}collides(t){let e=this.data;if(!Wn(t,e))return!1;const i=[];for(;e;){for(let n=0;n<e.children.length;n++){const a=e.children[n],o=e.leaf?this.toBBox(a):a;if(Wn(t,o)){if(e.leaf||ws(t,o))return!0;i.push(a)}}e=i.pop()}return!1}load(t){if(!(t&&t.length))return this;if(t.length<this._minEntries){for(let i=0;i<t.length;i++)this.insert(t[i]);return this}let e=this._build(t.slice(),0,t.length-1,0);if(!this.data.children.length)this.data=e;else if(this.data.height===e.height)this._splitRoot(this.data,e);else{if(this.data.height<e.height){const i=this.data;this.data=e,e=i}this._insert(e,this.data.height-e.height-1,!0)}return this}insert(t){return t&&this._insert(t,this.data.height-1),this}clear(){return this.data=Gr([]),this}remove(t,e){if(!t)return this;let i=this.data;const n=this.toBBox(t),a=[],o=[];let s,l,u;for(;i||a.length;){if(i||(i=a.pop(),l=a[a.length-1],s=o.pop(),u=!0),i.leaf){const h=QS(t,i.children,e);if(h!==-1)return i.children.splice(h,1),a.push(i),this._condense(a),this}!u&&!i.leaf&&ws(i,n)?(a.push(i),o.push(s),s=0,l=i,i=i.children[0]):l?(s++,i=l.children[s],u=!1):i=null}return this}toBBox(t){return t}compareMinX(t,e){return t.minX-e.minX}compareMinY(t,e){return t.minY-e.minY}toJSON(){return this.data}fromJSON(t){return this.data=t,this}_all(t,e){const i=[];for(;t;)t.leaf?e.push(...t.children):i.push(...t.children),t=i.pop();return e}_build(t,e,i,n){const a=i-e+1;let o=this._maxEntries,s;if(a<=o)return s=Gr(t.slice(e,i+1)),Nr(s,this.toBBox),s;n||(n=Math.ceil(Math.log(a)/Math.log(o)),o=Math.ceil(a/Math.pow(o,n-1))),s=Gr([]),s.leaf=!1,s.height=n;const l=Math.ceil(a/o),u=l*Math.ceil(Math.sqrt(o));Of(t,e,i,u,this.compareMinX);for(let h=e;h<=i;h+=u){const c=Math.min(h+u-1,i);Of(t,h,c,l,this.compareMinY);for(let d=h;d<=c;d+=l){const f=Math.min(d+l-1,c);s.children.push(this._build(t,d,f,n-1))}}return Nr(s,this.toBBox),s}_chooseSubtree(t,e,i,n){for(;n.push(e),!(e.leaf||n.length-1===i);){let a=1/0,o=1/0,s;for(let l=0;l<e.children.length;l++){const u=e.children[l],h=bs(u),c=tI(t,u)-h;c<o?(o=c,a=h<a?h:a,s=u):c===o&&h<a&&(a=h,s=u)}e=s||e.children[0]}return e}_insert(t,e,i){const n=i?t:this.toBBox(t),a=[],o=this._chooseSubtree(n,this.data,e,a);for(o.children.push(t),Bi(o,n);e>=0&&a[e].children.length>this._maxEntries;)this._split(a,e),e--;this._adjustParentBBoxes(n,a,e)}_split(t,e){const i=t[e],n=i.children.length,a=this._minEntries;this._chooseSplitAxis(i,a,n);const o=this._chooseSplitIndex(i,a,n),s=Gr(i.children.splice(o,i.children.length-o));s.height=i.height,s.leaf=i.leaf,Nr(i,this.toBBox),Nr(s,this.toBBox),e?t[e-1].children.push(s):this._splitRoot(i,s)}_splitRoot(t,e){this.data=Gr([t,e]),this.data.height=t.height+1,this.data.leaf=!1,Nr(this.data,this.toBBox)}_chooseSplitIndex(t,e,i){let n,a=1/0,o=1/0;for(let s=e;s<=i-e;s++){const l=Ni(t,0,s,this.toBBox),u=Ni(t,s,i,this.toBBox),h=eI(l,u),c=bs(l)+bs(u);h<a?(a=h,n=s,o=c<o?c:o):h===a&&c<o&&(o=c,n=s)}return n||i-e}_chooseSplitAxis(t,e,i){const n=t.leaf?this.compareMinX:KS,a=t.leaf?this.compareMinY:JS,o=this._allDistMargin(t,e,i,n),s=this._allDistMargin(t,e,i,a);o<s&&t.children.sort(n)}_allDistMargin(t,e,i,n){t.children.sort(n);const a=this.toBBox,o=Ni(t,0,e,a),s=Ni(t,i-e,i,a);let l=jn(o)+jn(s);for(let u=e;u<i-e;u++){const h=t.children[u];Bi(o,t.leaf?a(h):h),l+=jn(o)}for(let u=i-e-1;u>=e;u--){const h=t.children[u];Bi(s,t.leaf?a(h):h),l+=jn(s)}return l}_adjustParentBBoxes(t,e,i){for(let n=i;n>=0;n--)Bi(e[n],t)}_condense(t){for(let e=t.length-1,i;e>=0;e--)t[e].children.length===0?e>0?(i=t[e-1].children,i.splice(i.indexOf(t[e]),1)):this.clear():Nr(t[e],this.toBBox)}};function QS(r,t,e){if(!e)return t.indexOf(r);for(let i=0;i<t.length;i++)if(e(r,t[i]))return i;return-1}function Nr(r,t){Ni(r,0,r.children.length,t,r)}function Ni(r,t,e,i,n){n||(n=Gr(null)),n.minX=1/0,n.minY=1/0,n.maxX=-1/0,n.maxY=-1/0;for(let a=t;a<e;a++){const o=r.children[a];Bi(n,r.leaf?i(o):o)}return n}function Bi(r,t){return r.minX=Math.min(r.minX,t.minX),r.minY=Math.min(r.minY,t.minY),r.maxX=Math.max(r.maxX,t.maxX),r.maxY=Math.max(r.maxY,t.maxY),r}function KS(r,t){return r.minX-t.minX}function JS(r,t){return r.minY-t.minY}function bs(r){return(r.maxX-r.minX)*(r.maxY-r.minY)}function jn(r){return r.maxX-r.minX+(r.maxY-r.minY)}function tI(r,t){return(Math.max(t.maxX,r.maxX)-Math.min(t.minX,r.minX))*(Math.max(t.maxY,r.maxY)-Math.min(t.minY,r.minY))}function eI(r,t){const e=Math.max(r.minX,t.minX),i=Math.max(r.minY,t.minY),n=Math.min(r.maxX,t.maxX),a=Math.min(r.maxY,t.maxY);return Math.max(0,n-e)*Math.max(0,a-i)}function ws(r,t){return r.minX<=t.minX&&r.minY<=t.minY&&t.maxX<=r.maxX&&t.maxY<=r.maxY}function Wn(r,t){return t.minX<=r.maxX&&t.minY<=r.maxY&&t.maxX>=r.minX&&t.maxY>=r.minY}function Gr(r){return{children:r,height:1,leaf:!0,minX:1/0,minY:1/0,maxX:-1/0,maxY:-1/0}}function Of(r,t,e,i,n){const a=[t,e];for(;a.length;){if(e=a.pop(),t=a.pop(),e-t<=i)continue;const o=t+Math.ceil((e-t)/i/2)*i;XS(r,o,t,e,n),a.push(t,o,o,e)}}var rI=function(){function r(t){this.opacity_=t.opacity,this.rotateWithView_=t.rotateWithView,this.rotation_=t.rotation,this.scale_=t.scale,this.scaleArray_=Qt(t.scale),this.displacement_=t.displacement}return r.prototype.clone=function(){var t=this.getScale();return new r({opacity:this.getOpacity(),scale:Array.isArray(t)?t.slice():t,rotation:this.getRotation(),rotateWithView:this.getRotateWithView(),displacement:this.getDisplacement().slice()})},r.prototype.getOpacity=function(){return this.opacity_},r.prototype.getRotateWithView=function(){return this.rotateWithView_},r.prototype.getRotation=function(){return this.rotation_},r.prototype.getScale=function(){return this.scale_},r.prototype.getScaleArray=function(){return this.scaleArray_},r.prototype.getDisplacement=function(){return this.displacement_},r.prototype.getAnchor=function(){return J()},r.prototype.getImage=function(t){return J()},r.prototype.getHitDetectionImage=function(){return J()},r.prototype.getPixelRatio=function(t){return 1},r.prototype.getImageState=function(){return J()},r.prototype.getImageSize=function(){return J()},r.prototype.getOrigin=function(){return J()},r.prototype.getSize=function(){return J()},r.prototype.setDisplacement=function(t){this.displacement_=t},r.prototype.setOpacity=function(t){this.opacity_=t},r.prototype.setRotateWithView=function(t){this.rotateWithView_=t},r.prototype.setRotation=function(t){this.rotation_=t},r.prototype.setScale=function(t){this.scale_=t,this.scaleArray_=Qt(t)},r.prototype.listenImageChange=function(t){J()},r.prototype.load=function(){J()},r.prototype.unlistenImageChange=function(t){J()},r}();const nm=rI;function we(r){return Array.isArray(r)?Yv(r):r}var am="10px sans-serif",$e="#000",Ro="round",Ki=[],Ji=0,hi="round",tn=10,en="#000",rn="center",Po="middle",wr=[0,0,0,0],nn=1,je=new Ir,iI=new wn;iI.setSize=function(){console.warn("labelCache is deprecated.")};var Yr=null,Jl,tu={},nI=function(){var r=100,t="32px ",e=["monospace","serif"],i=e.length,n="wmytzilWMYTZIL@#/&?$%10",a,o;function s(u,h,c){for(var d=!0,f=0;f<i;++f){var p=e[f];if(o=Do(u+" "+h+" "+t+p,n),c!=p){var v=Do(u+" "+h+" "+t+c+","+p,n);d=d&&v!=o}}return!!d}function l(){for(var u=!0,h=je.getKeys(),c=0,d=h.length;c<d;++c){var f=h[c];je.get(f)<r&&(s.apply(this,f.split(`
`))?(Au(tu),Yr=null,Jl=void 0,je.set(f,r)):(je.set(f,je.get(f)+1,!0),u=!1))}u&&(clearInterval(a),a=void 0)}return function(u){var h=Jv(u);if(h)for(var c=h.families,d=0,f=c.length;d<f;++d){var p=c[d],v=h.style+`
`+h.weight+`
`+p;je.get(v)===void 0&&(je.set(v,r,!0),s(h.style,h.weight,p)||(je.set(v,0,!0),a===void 0&&(a=setInterval(l,32))))}}}(),aI=function(){var r;return function(t){var e=tu[t];if(e==null){if(ts){var i=Jv(t),n=om(t,"Žg"),a=isNaN(Number(i.lineHeight))?1.2:Number(i.lineHeight);e=a*(n.actualBoundingBoxAscent+n.actualBoundingBoxDescent)}else r||(r=document.createElement("div"),r.innerHTML="M",r.style.minHeight="0",r.style.maxHeight="none",r.style.height="auto",r.style.padding="0",r.style.border="none",r.style.position="absolute",r.style.display="block",r.style.left="-99999px"),r.style.font=t,document.body.appendChild(r),e=r.offsetHeight,document.body.removeChild(r);tu[t]=e}return e}}();function om(r,t){return Yr||(Yr=le(1,1)),r!=Jl&&(Yr.font=r,Jl=Yr.font),Yr.measureText(t)}function Do(r,t){return om(r,t).width}function Sf(r,t,e){if(t in e)return e[t];var i=Do(r,t);return e[t]=i,i}function oI(r,t){for(var e=[],i=[],n=[],a=0,o=0,s=0,l=0,u=0,h=t.length;u<=h;u+=2){var c=t[u];if(c===`
`||u===h){a=Math.max(a,o),n.push(o),o=0,s+=l;continue}var d=t[u+1]||r.font,f=Do(d,c);e.push(f),o+=f;var p=aI(d);i.push(p),l=Math.max(l,p)}return{width:a,height:s,widths:e,heights:i,lineWidths:n}}function sI(r,t,e,i,n,a,o,s,l,u,h){r.save(),e!==1&&(r.globalAlpha*=e),t&&r.setTransform.apply(r,t),i.contextInstructions?(r.translate(l,u),r.scale(h[0],h[1]),lI(i,r)):h[0]<0||h[1]<0?(r.translate(l,u),r.scale(h[0],h[1]),r.drawImage(i,n,a,o,s,0,0,o,s)):r.drawImage(i,n,a,o,s,l,u,o*h[0],s*h[1]),r.restore()}function lI(r,t){for(var e=r.contextInstructions,i=0,n=e.length;i<n;i+=2)Array.isArray(e[i+1])?t[e[i]].apply(t,e[i+1]):t[e[i]]=e[i+1]}var uI=globalThis&&globalThis.__extends||function(){var r=function(t,e){return r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(i,n){i.__proto__=n}||function(i,n){for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(i[a]=n[a])},r(t,e)};return function(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");r(t,e);function i(){this.constructor=t}t.prototype=e===null?Object.create(e):(i.prototype=e.prototype,new i)}}(),hI=function(r){uI(t,r);function t(e){var i=this,n=e.rotateWithView!==void 0?e.rotateWithView:!1;return i=r.call(this,{opacity:1,rotateWithView:n,rotation:e.rotation!==void 0?e.rotation:0,scale:e.scale!==void 0?e.scale:1,displacement:e.displacement!==void 0?e.displacement:[0,0]})||this,i.canvas_=void 0,i.hitDetectionCanvas_=null,i.fill_=e.fill!==void 0?e.fill:null,i.origin_=[0,0],i.points_=e.points,i.radius_=e.radius!==void 0?e.radius:e.radius1,i.radius2_=e.radius2,i.angle_=e.angle!==void 0?e.angle:0,i.stroke_=e.stroke!==void 0?e.stroke:null,i.size_=null,i.renderOptions_=null,i.render(),i}return t.prototype.clone=function(){var e=this.getScale(),i=new t({fill:this.getFill()?this.getFill().clone():void 0,points:this.getPoints(),radius:this.getRadius(),radius2:this.getRadius2(),angle:this.getAngle(),stroke:this.getStroke()?this.getStroke().clone():void 0,rotation:this.getRotation(),rotateWithView:this.getRotateWithView(),scale:Array.isArray(e)?e.slice():e,displacement:this.getDisplacement().slice()});return i.setOpacity(this.getOpacity()),i},t.prototype.getAnchor=function(){var e=this.size_;if(!e)return null;var i=this.getDisplacement();return[e[0]/2-i[0],e[1]/2+i[1]]},t.prototype.getAngle=function(){return this.angle_},t.prototype.getFill=function(){return this.fill_},t.prototype.getHitDetectionImage=function(){return this.hitDetectionCanvas_||this.createHitDetectionCanvas_(this.renderOptions_),this.hitDetectionCanvas_},t.prototype.getImage=function(e){var i=this.canvas_[e];if(!i){var n=this.renderOptions_,a=le(n.size*e,n.size*e);this.draw_(n,a,e),i=a.canvas,this.canvas_[e]=i}return i},t.prototype.getPixelRatio=function(e){return e},t.prototype.getImageSize=function(){return this.size_},t.prototype.getImageState=function(){return Z.LOADED},t.prototype.getOrigin=function(){return this.origin_},t.prototype.getPoints=function(){return this.points_},t.prototype.getRadius=function(){return this.radius_},t.prototype.getRadius2=function(){return this.radius2_},t.prototype.getSize=function(){return this.size_},t.prototype.getStroke=function(){return this.stroke_},t.prototype.listenImageChange=function(e){},t.prototype.load=function(){},t.prototype.unlistenImageChange=function(e){},t.prototype.calculateLineJoinSize_=function(e,i,n){if(i===0||this.points_===1/0||e!=="bevel"&&e!=="miter")return i;var a=this.radius_,o=this.radius2_===void 0?a:this.radius2_;if(a<o){var s=a;a=o,o=s}var l=this.radius2_===void 0?this.points_:this.points_*2,u=2*Math.PI/l,h=o*Math.sin(u),c=Math.sqrt(o*o-h*h),d=a-c,f=Math.sqrt(h*h+d*d),p=f/h;if(e==="miter"&&p<=n)return p*i;var v=i/2/p,m=i/2*(d/f),_=Math.sqrt((a+v)*(a+v)+m*m),g=_-a;if(this.radius2_===void 0||e==="bevel")return g*2;var y=a*Math.sin(u),b=Math.sqrt(a*a-y*y),w=o-b,x=Math.sqrt(y*y+w*w),E=x/y;if(E<=n){var A=E*i/2-o-a;return 2*Math.max(g,A)}return g*2},t.prototype.createRenderOptions=function(){var e=hi,i=0,n=null,a=0,o,s=0;this.stroke_&&(o=this.stroke_.getColor(),o===null&&(o=en),o=we(o),s=this.stroke_.getWidth(),s===void 0&&(s=nn),n=this.stroke_.getLineDash(),a=this.stroke_.getLineDashOffset(),e=this.stroke_.getLineJoin(),e===void 0&&(e=hi),i=this.stroke_.getMiterLimit(),i===void 0&&(i=tn));var l=this.calculateLineJoinSize_(e,s,i),u=Math.max(this.radius_,this.radius2_||0),h=Math.ceil(2*u+l);return{strokeStyle:o,strokeWidth:s,size:h,lineDash:n,lineDashOffset:a,lineJoin:e,miterLimit:i}},t.prototype.render=function(){this.renderOptions_=this.createRenderOptions();var e=this.renderOptions_.size;this.canvas_={},this.size_=[e,e]},t.prototype.draw_=function(e,i,n){if(i.scale(n,n),i.translate(e.size/2,e.size/2),this.createPath_(i),this.fill_){var a=this.fill_.getColor();a===null&&(a=$e),i.fillStyle=we(a),i.fill()}this.stroke_&&(i.strokeStyle=e.strokeStyle,i.lineWidth=e.strokeWidth,i.setLineDash&&e.lineDash&&(i.setLineDash(e.lineDash),i.lineDashOffset=e.lineDashOffset),i.lineJoin=e.lineJoin,i.miterLimit=e.miterLimit,i.stroke())},t.prototype.createHitDetectionCanvas_=function(e){if(this.fill_){var i=this.fill_.getColor(),n=0;if(typeof i=="string"&&(i=So(i)),i===null?n=1:Array.isArray(i)&&(n=i.length===4?i[3]:1),n===0){var a=le(e.size,e.size);this.hitDetectionCanvas_=a.canvas,this.drawHitDetectionCanvas_(e,a)}}this.hitDetectionCanvas_||(this.hitDetectionCanvas_=this.getImage(1))},t.prototype.createPath_=function(e){var i=this.points_,n=this.radius_;if(i===1/0)e.arc(0,0,n,0,2*Math.PI);else{var a=this.radius2_===void 0?n:this.radius2_;this.radius2_!==void 0&&(i*=2);for(var o=this.angle_-Math.PI/2,s=2*Math.PI/i,l=0;l<i;l++){var u=o+l*s,h=l%2===0?n:a;e.lineTo(h*Math.cos(u),h*Math.sin(u))}e.closePath()}},t.prototype.drawHitDetectionCanvas_=function(e,i){i.translate(e.size/2,e.size/2),this.createPath_(i),i.fillStyle=$e,i.fill(),this.stroke_&&(i.strokeStyle=e.strokeStyle,i.lineWidth=e.strokeWidth,e.lineDash&&(i.setLineDash(e.lineDash),i.lineDashOffset=e.lineDashOffset),i.lineJoin=e.lineJoin,i.miterLimit=e.miterLimit,i.stroke())},t}(nm);const cI=hI;var dI=globalThis&&globalThis.__extends||function(){var r=function(t,e){return r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(i,n){i.__proto__=n}||function(i,n){for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(i[a]=n[a])},r(t,e)};return function(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");r(t,e);function i(){this.constructor=t}t.prototype=e===null?Object.create(e):(i.prototype=e.prototype,new i)}}(),fI=function(r){dI(t,r);function t(e){var i=e||{};return r.call(this,{points:1/0,fill:i.fill,radius:i.radius,stroke:i.stroke,scale:i.scale!==void 0?i.scale:1,rotation:i.rotation!==void 0?i.rotation:0,rotateWithView:i.rotateWithView!==void 0?i.rotateWithView:!1,displacement:i.displacement!==void 0?i.displacement:[0,0]})||this}return t.prototype.clone=function(){var e=this.getScale(),i=new t({fill:this.getFill()?this.getFill().clone():void 0,stroke:this.getStroke()?this.getStroke().clone():void 0,radius:this.getRadius(),scale:Array.isArray(e)?e.slice():e,rotation:this.getRotation(),rotateWithView:this.getRotateWithView(),displacement:this.getDisplacement().slice()});return i.setOpacity(this.getOpacity()),i},t.prototype.setRadius=function(e){this.radius_=e,this.render()},t}(cI);const pI=fI;var vI=function(){function r(t){var e=t||{};this.color_=e.color!==void 0?e.color:null}return r.prototype.clone=function(){var t=this.getColor();return new r({color:Array.isArray(t)?t.slice():t||void 0})},r.prototype.getColor=function(){return this.color_},r.prototype.setColor=function(t){this.color_=t},r}();const sm=vI;var mI=function(){function r(t){var e=t||{};this.color_=e.color!==void 0?e.color:null,this.lineCap_=e.lineCap,this.lineDash_=e.lineDash!==void 0?e.lineDash:null,this.lineDashOffset_=e.lineDashOffset,this.lineJoin_=e.lineJoin,this.miterLimit_=e.miterLimit,this.width_=e.width}return r.prototype.clone=function(){var t=this.getColor();return new r({color:Array.isArray(t)?t.slice():t||void 0,lineCap:this.getLineCap(),lineDash:this.getLineDash()?this.getLineDash().slice():void 0,lineDashOffset:this.getLineDashOffset(),lineJoin:this.getLineJoin(),miterLimit:this.getMiterLimit(),width:this.getWidth()})},r.prototype.getColor=function(){return this.color_},r.prototype.getLineCap=function(){return this.lineCap_},r.prototype.getLineDash=function(){return this.lineDash_},r.prototype.getLineDashOffset=function(){return this.lineDashOffset_},r.prototype.getLineJoin=function(){return this.lineJoin_},r.prototype.getMiterLimit=function(){return this.miterLimit_},r.prototype.getWidth=function(){return this.width_},r.prototype.setColor=function(t){this.color_=t},r.prototype.setLineCap=function(t){this.lineCap_=t},r.prototype.setLineDash=function(t){this.lineDash_=t},r.prototype.setLineDashOffset=function(t){this.lineDashOffset_=t},r.prototype.setLineJoin=function(t){this.lineJoin_=t},r.prototype.setMiterLimit=function(t){this.miterLimit_=t},r.prototype.setWidth=function(t){this.width_=t},r}();const lm=mI;var um=function(){function r(t){var e=t||{};this.geometry_=null,this.geometryFunction_=If,e.geometry!==void 0&&this.setGeometry(e.geometry),this.fill_=e.fill!==void 0?e.fill:null,this.image_=e.image!==void 0?e.image:null,this.renderer_=e.renderer!==void 0?e.renderer:null,this.hitDetectionRenderer_=e.hitDetectionRenderer!==void 0?e.hitDetectionRenderer:null,this.stroke_=e.stroke!==void 0?e.stroke:null,this.text_=e.text!==void 0?e.text:null,this.zIndex_=e.zIndex}return r.prototype.clone=function(){var t=this.getGeometry();return t&&typeof t=="object"&&(t=t.clone()),new r({geometry:t,fill:this.getFill()?this.getFill().clone():void 0,image:this.getImage()?this.getImage().clone():void 0,renderer:this.getRenderer(),stroke:this.getStroke()?this.getStroke().clone():void 0,text:this.getText()?this.getText().clone():void 0,zIndex:this.getZIndex()})},r.prototype.getRenderer=function(){return this.renderer_},r.prototype.setRenderer=function(t){this.renderer_=t},r.prototype.setHitDetectionRenderer=function(t){this.hitDetectionRenderer_=t},r.prototype.getHitDetectionRenderer=function(){return this.hitDetectionRenderer_},r.prototype.getGeometry=function(){return this.geometry_},r.prototype.getGeometryFunction=function(){return this.geometryFunction_},r.prototype.getFill=function(){return this.fill_},r.prototype.setFill=function(t){this.fill_=t},r.prototype.getImage=function(){return this.image_},r.prototype.setImage=function(t){this.image_=t},r.prototype.getStroke=function(){return this.stroke_},r.prototype.setStroke=function(t){this.stroke_=t},r.prototype.getText=function(){return this.text_},r.prototype.setText=function(t){this.text_=t},r.prototype.getZIndex=function(){return this.zIndex_},r.prototype.setGeometry=function(t){typeof t=="function"?this.geometryFunction_=t:typeof t=="string"?this.geometryFunction_=function(e){return e.get(t)}:t?t!==void 0&&(this.geometryFunction_=function(){return t}):this.geometryFunction_=If,this.geometry_=t},r.prototype.setZIndex=function(t){this.zIndex_=t},r}();function _I(r){var t;if(typeof r=="function")t=r;else{var e;if(Array.isArray(r))e=r;else{et(typeof r.getZIndex=="function",41);var i=r;e=[i]}t=function(){return e}}return t}var xs=null;function gI(r,t){if(!xs){var e=new sm({color:"rgba(255,255,255,0.4)"}),i=new lm({color:"#3399CC",width:1.25});xs=[new um({image:new pI({fill:e,stroke:i,radius:5}),fill:e,stroke:i})]}return xs}function If(r){return r.getGeometry()}const yI=um;var bI=globalThis&&globalThis.__extends||function(){var r=function(t,e){return r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(i,n){i.__proto__=n}||function(i,n){for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(i[a]=n[a])},r(t,e)};return function(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");r(t,e);function i(){this.constructor=t}t.prototype=e===null?Object.create(e):(i.prototype=e.prototype,new i)}}(),Rf={RENDER_ORDER:"renderOrder"},wI=function(r){bI(t,r);function t(e){var i=this,n=e||{},a=ct({},n);return delete a.style,delete a.renderBuffer,delete a.updateWhileAnimating,delete a.updateWhileInteracting,i=r.call(this,a)||this,i.declutter_=n.declutter!==void 0?n.declutter:!1,i.renderBuffer_=n.renderBuffer!==void 0?n.renderBuffer:100,i.style_=null,i.styleFunction_=void 0,i.setStyle(n.style),i.updateWhileAnimating_=n.updateWhileAnimating!==void 0?n.updateWhileAnimating:!1,i.updateWhileInteracting_=n.updateWhileInteracting!==void 0?n.updateWhileInteracting:!1,i}return t.prototype.getDeclutter=function(){return this.declutter_},t.prototype.getFeatures=function(e){return r.prototype.getFeatures.call(this,e)},t.prototype.getRenderBuffer=function(){return this.renderBuffer_},t.prototype.getRenderOrder=function(){return this.get(Rf.RENDER_ORDER)},t.prototype.getStyle=function(){return this.style_},t.prototype.getStyleFunction=function(){return this.styleFunction_},t.prototype.getUpdateWhileAnimating=function(){return this.updateWhileAnimating_},t.prototype.getUpdateWhileInteracting=function(){return this.updateWhileInteracting_},t.prototype.renderDeclutter=function(e){e.declutterTree||(e.declutterTree=new im(9)),this.getRenderer().renderDeclutter(e)},t.prototype.setRenderOrder=function(e){this.set(Rf.RENDER_ORDER,e)},t.prototype.setStyle=function(e){this.style_=e!==void 0?e:gI,this.styleFunction_=e===null?void 0:_I(this.style_),this.changed()},t}(zu);const xI=wI;var xn={BEGIN_GEOMETRY:0,BEGIN_PATH:1,CIRCLE:2,CLOSE_PATH:3,CUSTOM:4,DRAW_CHARS:5,DRAW_IMAGE:6,END_GEOMETRY:7,FILL:8,MOVE_TO_LINE_TO:9,SET_FILL_STYLE:10,SET_STROKE_STYLE:11,STROKE:12},Vn=[xn.FILL],tr=[xn.STROKE],xr=[xn.BEGIN_PATH],Pf=[xn.CLOSE_PATH];const U=xn;var AI=function(){function r(){}return r.prototype.drawCustom=function(t,e,i,n){},r.prototype.drawGeometry=function(t){},r.prototype.setStyle=function(t){},r.prototype.drawCircle=function(t,e){},r.prototype.drawFeature=function(t,e){},r.prototype.drawGeometryCollection=function(t,e){},r.prototype.drawLineString=function(t,e){},r.prototype.drawMultiLineString=function(t,e){},r.prototype.drawMultiPoint=function(t,e){},r.prototype.drawMultiPolygon=function(t,e){},r.prototype.drawPoint=function(t,e){},r.prototype.drawPolygon=function(t,e){},r.prototype.drawText=function(t,e){},r.prototype.setFillStrokeStyle=function(t,e){},r.prototype.setImageStyle=function(t,e){},r.prototype.setTextStyle=function(t,e){},r}();const hm=AI;var EI=globalThis&&globalThis.__extends||function(){var r=function(t,e){return r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(i,n){i.__proto__=n}||function(i,n){for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(i[a]=n[a])},r(t,e)};return function(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");r(t,e);function i(){this.constructor=t}t.prototype=e===null?Object.create(e):(i.prototype=e.prototype,new i)}}(),CI=function(r){EI(t,r);function t(e,i,n,a){var o=r.call(this)||this;return o.tolerance=e,o.maxExtent=i,o.pixelRatio=a,o.maxLineWidth=0,o.resolution=n,o.beginGeometryInstruction1_=null,o.beginGeometryInstruction2_=null,o.bufferedMaxExtent_=null,o.instructions=[],o.coordinates=[],o.tmpCoordinate_=[],o.hitDetectionInstructions=[],o.state={},o}return t.prototype.applyPixelRatio=function(e){var i=this.pixelRatio;return i==1?e:e.map(function(n){return n*i})},t.prototype.appendFlatPointCoordinates=function(e,i){for(var n=this.getBufferedMaxExtent(),a=this.tmpCoordinate_,o=this.coordinates,s=o.length,l=0,u=e.length;l<u;l+=i)a[0]=e[l],a[1]=e[l+1],pi(n,a)&&(o[s++]=a[0],o[s++]=a[1]);return s},t.prototype.appendFlatLineCoordinates=function(e,i,n,a,o,s){var l=this.coordinates,u=l.length,h=this.getBufferedMaxExtent();s&&(i+=a);var c=e[i],d=e[i+1],f=this.tmpCoordinate_,p=!0,v,m,_;for(v=i+a;v<n;v+=a)f[0]=e[v],f[1]=e[v+1],_=Ul(h,f),_!==m?(p&&(l[u++]=c,l[u++]=d,p=!1),l[u++]=f[0],l[u++]=f[1]):_===It.INTERSECTING?(l[u++]=f[0],l[u++]=f[1],p=!1):p=!0,c=f[0],d=f[1],m=_;return(o&&p||v===i+a)&&(l[u++]=c,l[u++]=d),u},t.prototype.drawCustomCoordinates_=function(e,i,n,a,o){for(var s=0,l=n.length;s<l;++s){var u=n[s],h=this.appendFlatLineCoordinates(e,i,u,a,!1,!1);o.push(h),i=u}return i},t.prototype.drawCustom=function(e,i,n,a){this.beginGeometry(e,i);var o=e.getType(),s=e.getStride(),l=this.coordinates.length,u,h,c,d,f;switch(o){case X.MULTI_POLYGON:u=e.getOrientedFlatCoordinates(),d=[];var p=e.getEndss();f=0;for(var v=0,m=p.length;v<m;++v){var _=[];f=this.drawCustomCoordinates_(u,f,p[v],s,_),d.push(_)}this.instructions.push([U.CUSTOM,l,d,e,n,yf]),this.hitDetectionInstructions.push([U.CUSTOM,l,d,e,a||n,yf]);break;case X.POLYGON:case X.MULTI_LINE_STRING:c=[],u=o==X.POLYGON?e.getOrientedFlatCoordinates():e.getFlatCoordinates(),f=this.drawCustomCoordinates_(u,0,e.getEnds(),s,c),this.instructions.push([U.CUSTOM,l,c,e,n,Oo]),this.hitDetectionInstructions.push([U.CUSTOM,l,c,e,a||n,Oo]);break;case X.LINE_STRING:case X.CIRCLE:u=e.getFlatCoordinates(),h=this.appendFlatLineCoordinates(u,0,u.length,s,!1,!1),this.instructions.push([U.CUSTOM,l,h,e,n,Xr]),this.hitDetectionInstructions.push([U.CUSTOM,l,h,e,a||n,Xr]);break;case X.MULTI_POINT:u=e.getFlatCoordinates(),h=this.appendFlatPointCoordinates(u,s),h>l&&(this.instructions.push([U.CUSTOM,l,h,e,n,Xr]),this.hitDetectionInstructions.push([U.CUSTOM,l,h,e,a||n,Xr]));break;case X.POINT:u=e.getFlatCoordinates(),this.coordinates.push(u[0],u[1]),h=this.coordinates.length,this.instructions.push([U.CUSTOM,l,h,e,n]),this.hitDetectionInstructions.push([U.CUSTOM,l,h,e,a||n]);break}this.endGeometry(i)},t.prototype.beginGeometry=function(e,i){this.beginGeometryInstruction1_=[U.BEGIN_GEOMETRY,i,0,e],this.instructions.push(this.beginGeometryInstruction1_),this.beginGeometryInstruction2_=[U.BEGIN_GEOMETRY,i,0,e],this.hitDetectionInstructions.push(this.beginGeometryInstruction2_)},t.prototype.finish=function(){return{instructions:this.instructions,hitDetectionInstructions:this.hitDetectionInstructions,coordinates:this.coordinates}},t.prototype.reverseHitDetectionInstructions=function(){var e=this.hitDetectionInstructions;e.reverse();var i,n=e.length,a,o,s=-1;for(i=0;i<n;++i)a=e[i],o=a[0],o==U.END_GEOMETRY?s=i:o==U.BEGIN_GEOMETRY&&(a[2]=i,BM(this.hitDetectionInstructions,s,i),s=-1)},t.prototype.setFillStrokeStyle=function(e,i){var n=this.state;if(e){var a=e.getColor();n.fillStyle=we(a||$e)}else n.fillStyle=void 0;if(i){var o=i.getColor();n.strokeStyle=we(o||en);var s=i.getLineCap();n.lineCap=s!==void 0?s:Ro;var l=i.getLineDash();n.lineDash=l?l.slice():Ki;var u=i.getLineDashOffset();n.lineDashOffset=u||Ji;var h=i.getLineJoin();n.lineJoin=h!==void 0?h:hi;var c=i.getWidth();n.lineWidth=c!==void 0?c:nn;var d=i.getMiterLimit();n.miterLimit=d!==void 0?d:tn,n.lineWidth>this.maxLineWidth&&(this.maxLineWidth=n.lineWidth,this.bufferedMaxExtent_=null)}else n.strokeStyle=void 0,n.lineCap=void 0,n.lineDash=null,n.lineDashOffset=void 0,n.lineJoin=void 0,n.lineWidth=void 0,n.miterLimit=void 0},t.prototype.createFill=function(e){var i=e.fillStyle,n=[U.SET_FILL_STYLE,i];return typeof i!="string"&&n.push(!0),n},t.prototype.applyStroke=function(e){this.instructions.push(this.createStroke(e))},t.prototype.createStroke=function(e){return[U.SET_STROKE_STYLE,e.strokeStyle,e.lineWidth*this.pixelRatio,e.lineCap,e.lineJoin,e.miterLimit,this.applyPixelRatio(e.lineDash),e.lineDashOffset*this.pixelRatio]},t.prototype.updateFillStyle=function(e,i){var n=e.fillStyle;(typeof n!="string"||e.currentFillStyle!=n)&&(n!==void 0&&this.instructions.push(i.call(this,e)),e.currentFillStyle=n)},t.prototype.updateStrokeStyle=function(e,i){var n=e.strokeStyle,a=e.lineCap,o=e.lineDash,s=e.lineDashOffset,l=e.lineJoin,u=e.lineWidth,h=e.miterLimit;(e.currentStrokeStyle!=n||e.currentLineCap!=a||o!=e.currentLineDash&&!mi(e.currentLineDash,o)||e.currentLineDashOffset!=s||e.currentLineJoin!=l||e.currentLineWidth!=u||e.currentMiterLimit!=h)&&(n!==void 0&&i.call(this,e),e.currentStrokeStyle=n,e.currentLineCap=a,e.currentLineDash=o,e.currentLineDashOffset=s,e.currentLineJoin=l,e.currentLineWidth=u,e.currentMiterLimit=h)},t.prototype.endGeometry=function(e){this.beginGeometryInstruction1_[2]=this.instructions.length,this.beginGeometryInstruction1_=null,this.beginGeometryInstruction2_[2]=this.hitDetectionInstructions.length,this.beginGeometryInstruction2_=null;var i=[U.END_GEOMETRY,e];this.instructions.push(i),this.hitDetectionInstructions.push(i)},t.prototype.getBufferedMaxExtent=function(){if(!this.bufferedMaxExtent_&&(this.bufferedMaxExtent_=$x(this.maxExtent),this.maxLineWidth>0)){var e=this.resolution*(this.maxLineWidth+1)/2;Wi(this.bufferedMaxExtent_,e,this.bufferedMaxExtent_)}return this.bufferedMaxExtent_},t}(hm);const An=CI;var TI=globalThis&&globalThis.__extends||function(){var r=function(t,e){return r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(i,n){i.__proto__=n}||function(i,n){for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(i[a]=n[a])},r(t,e)};return function(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");r(t,e);function i(){this.constructor=t}t.prototype=e===null?Object.create(e):(i.prototype=e.prototype,new i)}}(),MI=function(r){TI(t,r);function t(e,i,n,a){var o=r.call(this,e,i,n,a)||this;return o.hitDetectionImage_=null,o.image_=null,o.imagePixelRatio_=void 0,o.anchorX_=void 0,o.anchorY_=void 0,o.height_=void 0,o.opacity_=void 0,o.originX_=void 0,o.originY_=void 0,o.rotateWithView_=void 0,o.rotation_=void 0,o.scale_=void 0,o.width_=void 0,o.declutterImageWithText_=void 0,o}return t.prototype.drawPoint=function(e,i){if(this.image_){this.beginGeometry(e,i);var n=e.getFlatCoordinates(),a=e.getStride(),o=this.coordinates.length,s=this.appendFlatPointCoordinates(n,a);this.instructions.push([U.DRAW_IMAGE,o,s,this.image_,this.anchorX_*this.imagePixelRatio_,this.anchorY_*this.imagePixelRatio_,Math.ceil(this.height_*this.imagePixelRatio_),this.opacity_,this.originX_,this.originY_,this.rotateWithView_,this.rotation_,[this.scale_[0]*this.pixelRatio/this.imagePixelRatio_,this.scale_[1]*this.pixelRatio/this.imagePixelRatio_],Math.ceil(this.width_*this.imagePixelRatio_),this.declutterImageWithText_]),this.hitDetectionInstructions.push([U.DRAW_IMAGE,o,s,this.hitDetectionImage_,this.anchorX_,this.anchorY_,this.height_,this.opacity_,this.originX_,this.originY_,this.rotateWithView_,this.rotation_,this.scale_,this.width_,this.declutterImageWithText_]),this.endGeometry(i)}},t.prototype.drawMultiPoint=function(e,i){if(this.image_){this.beginGeometry(e,i);var n=e.getFlatCoordinates(),a=e.getStride(),o=this.coordinates.length,s=this.appendFlatPointCoordinates(n,a);this.instructions.push([U.DRAW_IMAGE,o,s,this.image_,this.anchorX_*this.imagePixelRatio_,this.anchorY_*this.imagePixelRatio_,Math.ceil(this.height_*this.imagePixelRatio_),this.opacity_,this.originX_,this.originY_,this.rotateWithView_,this.rotation_,[this.scale_[0]*this.pixelRatio/this.imagePixelRatio_,this.scale_[1]*this.pixelRatio/this.imagePixelRatio_],Math.ceil(this.width_*this.imagePixelRatio_),this.declutterImageWithText_]),this.hitDetectionInstructions.push([U.DRAW_IMAGE,o,s,this.hitDetectionImage_,this.anchorX_,this.anchorY_,this.height_,this.opacity_,this.originX_,this.originY_,this.rotateWithView_,this.rotation_,this.scale_,this.width_,this.declutterImageWithText_]),this.endGeometry(i)}},t.prototype.finish=function(){return this.reverseHitDetectionInstructions(),this.anchorX_=void 0,this.anchorY_=void 0,this.hitDetectionImage_=null,this.image_=null,this.imagePixelRatio_=void 0,this.height_=void 0,this.scale_=void 0,this.opacity_=void 0,this.originX_=void 0,this.originY_=void 0,this.rotateWithView_=void 0,this.rotation_=void 0,this.width_=void 0,r.prototype.finish.call(this)},t.prototype.setImageStyle=function(e,i){var n=e.getAnchor(),a=e.getSize(),o=e.getHitDetectionImage(),s=e.getImage(this.pixelRatio),l=e.getOrigin();this.imagePixelRatio_=e.getPixelRatio(this.pixelRatio),this.anchorX_=n[0],this.anchorY_=n[1],this.hitDetectionImage_=o,this.image_=s,this.height_=a[1],this.opacity_=e.getOpacity(),this.originX_=l[0]*this.imagePixelRatio_,this.originY_=l[1]*this.imagePixelRatio_,this.rotateWithView_=e.getRotateWithView(),this.rotation_=e.getRotation(),this.scale_=e.getScaleArray(),this.width_=a[0],this.declutterImageWithText_=i},t}(An);const OI=MI;var SI=globalThis&&globalThis.__extends||function(){var r=function(t,e){return r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(i,n){i.__proto__=n}||function(i,n){for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(i[a]=n[a])},r(t,e)};return function(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");r(t,e);function i(){this.constructor=t}t.prototype=e===null?Object.create(e):(i.prototype=e.prototype,new i)}}(),II=function(r){SI(t,r);function t(e,i,n,a){return r.call(this,e,i,n,a)||this}return t.prototype.drawFlatCoordinates_=function(e,i,n,a){var o=this.coordinates.length,s=this.appendFlatLineCoordinates(e,i,n,a,!1,!1),l=[U.MOVE_TO_LINE_TO,o,s];return this.instructions.push(l),this.hitDetectionInstructions.push(l),n},t.prototype.drawLineString=function(e,i){var n=this.state,a=n.strokeStyle,o=n.lineWidth;if(!(a===void 0||o===void 0)){this.updateStrokeStyle(n,this.applyStroke),this.beginGeometry(e,i),this.hitDetectionInstructions.push([U.SET_STROKE_STYLE,n.strokeStyle,n.lineWidth,n.lineCap,n.lineJoin,n.miterLimit,Ki,Ji],xr);var s=e.getFlatCoordinates(),l=e.getStride();this.drawFlatCoordinates_(s,0,s.length,l),this.hitDetectionInstructions.push(tr),this.endGeometry(i)}},t.prototype.drawMultiLineString=function(e,i){var n=this.state,a=n.strokeStyle,o=n.lineWidth;if(!(a===void 0||o===void 0)){this.updateStrokeStyle(n,this.applyStroke),this.beginGeometry(e,i),this.hitDetectionInstructions.push([U.SET_STROKE_STYLE,n.strokeStyle,n.lineWidth,n.lineCap,n.lineJoin,n.miterLimit,n.lineDash,n.lineDashOffset],xr);for(var s=e.getEnds(),l=e.getFlatCoordinates(),u=e.getStride(),h=0,c=0,d=s.length;c<d;++c)h=this.drawFlatCoordinates_(l,h,s[c],u);this.hitDetectionInstructions.push(tr),this.endGeometry(i)}},t.prototype.finish=function(){var e=this.state;return e.lastStroke!=null&&e.lastStroke!=this.coordinates.length&&this.instructions.push(tr),this.reverseHitDetectionInstructions(),this.state=null,r.prototype.finish.call(this)},t.prototype.applyStroke=function(e){e.lastStroke!=null&&e.lastStroke!=this.coordinates.length&&(this.instructions.push(tr),e.lastStroke=this.coordinates.length),e.lastStroke=0,r.prototype.applyStroke.call(this,e),this.instructions.push(xr)},t}(An);const RI=II;var PI=globalThis&&globalThis.__extends||function(){var r=function(t,e){return r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(i,n){i.__proto__=n}||function(i,n){for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(i[a]=n[a])},r(t,e)};return function(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");r(t,e);function i(){this.constructor=t}t.prototype=e===null?Object.create(e):(i.prototype=e.prototype,new i)}}(),DI=function(r){PI(t,r);function t(e,i,n,a){return r.call(this,e,i,n,a)||this}return t.prototype.drawFlatCoordinatess_=function(e,i,n,a){var o=this.state,s=o.fillStyle!==void 0,l=o.strokeStyle!==void 0,u=n.length;this.instructions.push(xr),this.hitDetectionInstructions.push(xr);for(var h=0;h<u;++h){var c=n[h],d=this.coordinates.length,f=this.appendFlatLineCoordinates(e,i,c,a,!0,!l),p=[U.MOVE_TO_LINE_TO,d,f];this.instructions.push(p),this.hitDetectionInstructions.push(p),l&&(this.instructions.push(Pf),this.hitDetectionInstructions.push(Pf)),i=c}return s&&(this.instructions.push(Vn),this.hitDetectionInstructions.push(Vn)),l&&(this.instructions.push(tr),this.hitDetectionInstructions.push(tr)),i},t.prototype.drawCircle=function(e,i){var n=this.state,a=n.fillStyle,o=n.strokeStyle;if(!(a===void 0&&o===void 0)){this.setFillStrokeStyles_(),this.beginGeometry(e,i),n.fillStyle!==void 0&&this.hitDetectionInstructions.push([U.SET_FILL_STYLE,$e]),n.strokeStyle!==void 0&&this.hitDetectionInstructions.push([U.SET_STROKE_STYLE,n.strokeStyle,n.lineWidth,n.lineCap,n.lineJoin,n.miterLimit,n.lineDash,n.lineDashOffset]);var s=e.getFlatCoordinates(),l=e.getStride(),u=this.coordinates.length;this.appendFlatLineCoordinates(s,0,s.length,l,!1,!1);var h=[U.CIRCLE,u];this.instructions.push(xr,h),this.hitDetectionInstructions.push(xr,h),n.fillStyle!==void 0&&(this.instructions.push(Vn),this.hitDetectionInstructions.push(Vn)),n.strokeStyle!==void 0&&(this.instructions.push(tr),this.hitDetectionInstructions.push(tr)),this.endGeometry(i)}},t.prototype.drawPolygon=function(e,i){var n=this.state,a=n.fillStyle,o=n.strokeStyle;if(!(a===void 0&&o===void 0)){this.setFillStrokeStyles_(),this.beginGeometry(e,i),n.fillStyle!==void 0&&this.hitDetectionInstructions.push([U.SET_FILL_STYLE,$e]),n.strokeStyle!==void 0&&this.hitDetectionInstructions.push([U.SET_STROKE_STYLE,n.strokeStyle,n.lineWidth,n.lineCap,n.lineJoin,n.miterLimit,n.lineDash,n.lineDashOffset]);var s=e.getEnds(),l=e.getOrientedFlatCoordinates(),u=e.getStride();this.drawFlatCoordinatess_(l,0,s,u),this.endGeometry(i)}},t.prototype.drawMultiPolygon=function(e,i){var n=this.state,a=n.fillStyle,o=n.strokeStyle;if(!(a===void 0&&o===void 0)){this.setFillStrokeStyles_(),this.beginGeometry(e,i),n.fillStyle!==void 0&&this.hitDetectionInstructions.push([U.SET_FILL_STYLE,$e]),n.strokeStyle!==void 0&&this.hitDetectionInstructions.push([U.SET_STROKE_STYLE,n.strokeStyle,n.lineWidth,n.lineCap,n.lineJoin,n.miterLimit,n.lineDash,n.lineDashOffset]);for(var s=e.getEndss(),l=e.getOrientedFlatCoordinates(),u=e.getStride(),h=0,c=0,d=s.length;c<d;++c)h=this.drawFlatCoordinatess_(l,h,s[c],u);this.endGeometry(i)}},t.prototype.finish=function(){this.reverseHitDetectionInstructions(),this.state=null;var e=this.tolerance;if(e!==0)for(var i=this.coordinates,n=0,a=i.length;n<a;++n)i[n]=gr(i[n],e);return r.prototype.finish.call(this)},t.prototype.setFillStrokeStyles_=function(){var e=this.state,i=e.fillStyle;i!==void 0&&this.updateFillStyle(e,this.createFill),e.strokeStyle!==void 0&&this.updateStrokeStyle(e,this.applyStroke)},t}(An);const Df=DI,kI={POINT:"point",LINE:"line"};function LI(r,t,e,i,n){var a=e,o=e,s=0,l=0,u=e,h,c,d,f,p,v,m,_,g,y;for(c=e;c<i;c+=n){var b=t[c],w=t[c+1];p!==void 0&&(g=b-p,y=w-v,f=Math.sqrt(g*g+y*y),m!==void 0&&(l+=d,h=Math.acos((m*g+_*y)/(d*f)),h>r&&(l>s&&(s=l,a=u,o=c),l=0,u=c-n)),d=f,m=g,_=y),p=b,v=w}return l+=f,l>s?[u,c]:[a,o]}var FI=globalThis&&globalThis.__extends||function(){var r=function(t,e){return r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(i,n){i.__proto__=n}||function(i,n){for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(i[a]=n[a])},r(t,e)};return function(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");r(t,e);function i(){this.constructor=t}t.prototype=e===null?Object.create(e):(i.prototype=e.prototype,new i)}}(),ko={left:0,end:0,center:.5,right:1,start:1,top:0,middle:.5,hanging:.2,alphabetic:.8,ideographic:.8,bottom:1},$I=function(r){FI(t,r);function t(e,i,n,a){var o=r.call(this,e,i,n,a)||this;return o.labels_=null,o.text_="",o.textOffsetX_=0,o.textOffsetY_=0,o.textRotateWithView_=void 0,o.textRotation_=0,o.textFillState_=null,o.fillStates={},o.textStrokeState_=null,o.strokeStates={},o.textState_={},o.textStates={},o.textKey_="",o.fillKey_="",o.strokeKey_="",o.declutterImageWithText_=void 0,o}return t.prototype.finish=function(){var e=r.prototype.finish.call(this);return e.textStates=this.textStates,e.fillStates=this.fillStates,e.strokeStates=this.strokeStates,e},t.prototype.drawText=function(e,i){var n=this.textFillState_,a=this.textStrokeState_,o=this.textState_;if(!(this.text_===""||!o||!n&&!a)){var s=this.coordinates,l=s.length,u=e.getType(),h=null,c=e.getStride();if(o.placement===kI.LINE&&(u==X.LINE_STRING||u==X.MULTI_LINE_STRING||u==X.POLYGON||u==X.MULTI_POLYGON)){if(!zt(this.getBufferedMaxExtent(),e.getExtent()))return;var d=void 0;if(h=e.getFlatCoordinates(),u==X.LINE_STRING)d=[h.length];else if(u==X.MULTI_LINE_STRING)d=e.getEnds();else if(u==X.POLYGON)d=e.getEnds().slice(0,1);else if(u==X.MULTI_POLYGON){var f=e.getEndss();d=[];for(var p=0,v=f.length;p<v;++p)d.push(f[p][0])}this.beginGeometry(e,i);for(var m=o.textAlign,_=0,g=void 0,y=0,b=d.length;y<b;++y){if(m==null){var w=LI(o.maxAngle,h,_,d[y],c);_=w[0],g=w[1]}else g=d[y];for(var p=_;p<g;p+=c)s.push(h[p],h[p+1]);var x=s.length;_=d[y],this.drawChars_(l,x),l=x}this.endGeometry(i)}else{var E=o.overflow?null:[];switch(u){case X.POINT:case X.MULTI_POINT:h=e.getFlatCoordinates();break;case X.LINE_STRING:h=e.getFlatMidpoint();break;case X.CIRCLE:h=e.getCenter();break;case X.MULTI_LINE_STRING:h=e.getFlatMidpoints(),c=2;break;case X.POLYGON:h=e.getFlatInteriorPoint(),o.overflow||E.push(h[2]/this.resolution),c=3;break;case X.MULTI_POLYGON:var A=e.getFlatInteriorPoints();h=[];for(var p=0,v=A.length;p<v;p+=3)o.overflow||E.push(A[p+2]/this.resolution),h.push(A[p],A[p+1]);if(h.length===0)return;c=2;break}var x=this.appendFlatPointCoordinates(h,c);if(x===l)return;if(E&&(x-l)/2!==h.length/c){var M=l/2;E=E.filter(function(K,q){var Q=s[(M+q)*2]===h[q*c]&&s[(M+q)*2+1]===h[q*c+1];return Q||--M,Q})}this.saveTextStates_(),(o.backgroundFill||o.backgroundStroke)&&(this.setFillStrokeStyle(o.backgroundFill,o.backgroundStroke),o.backgroundFill&&(this.updateFillStyle(this.state,this.createFill),this.hitDetectionInstructions.push(this.createFill(this.state))),o.backgroundStroke&&(this.updateStrokeStyle(this.state,this.applyStroke),this.hitDetectionInstructions.push(this.createStroke(this.state)))),this.beginGeometry(e,i);var I=o.padding;if(I!=wr&&(o.scale[0]<0||o.scale[1]<0)){var k=o.padding[0],N=o.padding[1],F=o.padding[2],j=o.padding[3];o.scale[0]<0&&(N=-N,j=-j),o.scale[1]<0&&(k=-k,F=-F),I=[k,N,F,j]}var D=this.pixelRatio;this.instructions.push([U.DRAW_IMAGE,l,x,null,NaN,NaN,NaN,1,0,0,this.textRotateWithView_,this.textRotation_,[1,1],NaN,this.declutterImageWithText_,I==wr?wr:I.map(function(K){return K*D}),!!o.backgroundFill,!!o.backgroundStroke,this.text_,this.textKey_,this.strokeKey_,this.fillKey_,this.textOffsetX_,this.textOffsetY_,E]);var B=1/D;this.hitDetectionInstructions.push([U.DRAW_IMAGE,l,x,null,NaN,NaN,NaN,1,0,0,this.textRotateWithView_,this.textRotation_,[B,B],NaN,this.declutterImageWithText_,I,!!o.backgroundFill,!!o.backgroundStroke,this.text_,this.textKey_,this.strokeKey_,this.fillKey_,this.textOffsetX_,this.textOffsetY_,E]),this.endGeometry(i)}}},t.prototype.saveTextStates_=function(){var e=this.textStrokeState_,i=this.textState_,n=this.textFillState_,a=this.strokeKey_;e&&(a in this.strokeStates||(this.strokeStates[a]={strokeStyle:e.strokeStyle,lineCap:e.lineCap,lineDashOffset:e.lineDashOffset,lineWidth:e.lineWidth,lineJoin:e.lineJoin,miterLimit:e.miterLimit,lineDash:e.lineDash}));var o=this.textKey_;o in this.textStates||(this.textStates[o]={font:i.font,textAlign:i.textAlign||rn,textBaseline:i.textBaseline||Po,scale:i.scale});var s=this.fillKey_;n&&(s in this.fillStates||(this.fillStates[s]={fillStyle:n.fillStyle}))},t.prototype.drawChars_=function(e,i){var n=this.textStrokeState_,a=this.textState_,o=this.strokeKey_,s=this.textKey_,l=this.fillKey_;this.saveTextStates_();var u=this.pixelRatio,h=ko[a.textBaseline],c=this.textOffsetY_*u,d=this.text_,f=n?n.lineWidth*Math.abs(a.scale[0])/2:0;this.instructions.push([U.DRAW_CHARS,e,i,h,a.overflow,l,a.maxAngle,u,c,o,f*u,d,s,1]),this.hitDetectionInstructions.push([U.DRAW_CHARS,e,i,h,a.overflow,l,a.maxAngle,1,c,o,f,d,s,1/u])},t.prototype.setTextStyle=function(e,i){var n,a,o;if(!e)this.text_="";else{var s=e.getFill();s?(a=this.textFillState_,a||(a={},this.textFillState_=a),a.fillStyle=we(s.getColor()||$e)):(a=null,this.textFillState_=a);var l=e.getStroke();if(!l)o=null,this.textStrokeState_=o;else{o=this.textStrokeState_,o||(o={},this.textStrokeState_=o);var u=l.getLineDash(),h=l.getLineDashOffset(),c=l.getWidth(),d=l.getMiterLimit();o.lineCap=l.getLineCap()||Ro,o.lineDash=u?u.slice():Ki,o.lineDashOffset=h===void 0?Ji:h,o.lineJoin=l.getLineJoin()||hi,o.lineWidth=c===void 0?nn:c,o.miterLimit=d===void 0?tn:d,o.strokeStyle=we(l.getColor()||en)}n=this.textState_;var f=e.getFont()||am;nI(f);var p=e.getScaleArray();n.overflow=e.getOverflow(),n.font=f,n.maxAngle=e.getMaxAngle(),n.placement=e.getPlacement(),n.textAlign=e.getTextAlign(),n.textBaseline=e.getTextBaseline()||Po,n.backgroundFill=e.getBackgroundFill(),n.backgroundStroke=e.getBackgroundStroke(),n.padding=e.getPadding()||wr,n.scale=p===void 0?[1,1]:p;var v=e.getOffsetX(),m=e.getOffsetY(),_=e.getRotateWithView(),g=e.getRotation();this.text_=e.getText()||"",this.textOffsetX_=v===void 0?0:v,this.textOffsetY_=m===void 0?0:m,this.textRotateWithView_=_===void 0?!1:_,this.textRotation_=g===void 0?0:g,this.strokeKey_=o?(typeof o.strokeStyle=="string"?o.strokeStyle:ut(o.strokeStyle))+o.lineCap+o.lineDashOffset+"|"+o.lineWidth+o.lineJoin+o.miterLimit+"["+o.lineDash.join()+"]":"",this.textKey_=n.font+n.scale+(n.textAlign||"?")+(n.textBaseline||"?"),this.fillKey_=a?typeof a.fillStyle=="string"?a.fillStyle:"|"+ut(a.fillStyle):""}this.declutterImageWithText_=i},t}(An);const NI=$I;var BI={Circle:Df,Default:An,Image:OI,LineString:RI,Polygon:Df,Text:NI},zI=function(){function r(t,e,i,n){this.tolerance_=t,this.maxExtent_=e,this.pixelRatio_=n,this.resolution_=i,this.buildersByZIndex_={}}return r.prototype.finish=function(){var t={};for(var e in this.buildersByZIndex_){t[e]=t[e]||{};var i=this.buildersByZIndex_[e];for(var n in i){var a=i[n].finish();t[e][n]=a}}return t},r.prototype.getBuilder=function(t,e){var i=t!==void 0?t.toString():"0",n=this.buildersByZIndex_[i];n===void 0&&(n={},this.buildersByZIndex_[i]=n);var a=n[e];if(a===void 0){var o=BI[e];a=new o(this.tolerance_,this.maxExtent_,this.resolution_,this.pixelRatio_),n[e]=a}return a},r}();const kf=zI,mt={CIRCLE:"Circle",DEFAULT:"Default",IMAGE:"Image",LINE_STRING:"LineString",POLYGON:"Polygon",TEXT:"Text"};function GI(r,t,e,i,n,a,o,s,l,u,h,c){var d=r[t],f=r[t+1],p=0,v=0,m=0,_=0;function g(){p=d,v=f,t+=i,d=r[t],f=r[t+1],_+=m,m=Math.sqrt((d-p)*(d-p)+(f-v)*(f-v))}do g();while(t<e-i&&_+m<a);for(var y=m===0?0:(a-_)/m,b=_r(p,d,y),w=_r(v,f,y),x=t-i,E=_,A=a+s*l(u,n,h);t<e-i&&_+m<A;)g();y=m===0?0:(A-_)/m;var M=_r(p,d,y),I=_r(v,f,y),k;if(c){var N=[b,w,M,I];Rv(N,0,4,2,c,N,N),k=N[0]>N[2]}else k=b>M;var F=Math.PI,j=[],D=x+i===t;t=x,m=0,_=E,d=r[t],f=r[t+1];var B;if(D){g(),B=Math.atan2(f-v,d-p),k&&(B+=B>0?-F:F);var $=(M+b)/2,K=(I+w)/2;return j[0]=[$,K,(A-a)/2,B,n],j}for(var q=0,Q=n.length;q<Q;){g();var lt=Math.atan2(f-v,d-p);if(k&&(lt+=lt>0?-F:F),B!==void 0){var C=lt-B;if(C+=C>F?-2*F:C<-F?2*F:0,Math.abs(C)>o)return null}B=lt;for(var dt=q,Y=0;q<Q;++q){var ft=k?Q-q-1:q,Ot=s*l(u,n[ft],h);if(t+i<e&&_+m<a+Y+Ot/2)break;Y+=Ot}if(q!==dt){var St=k?n.substring(Q-dt,Q-q):n.substring(dt,q);y=m===0?0:(a+Y/2-_)/m;var $=_r(p,d,y),K=_r(v,f,y);j.push([$,K,Y/2,lt,St]),a+=Y}}return j}function YI(r,t,e,i){for(var n=r[t],a=r[t+1],o=0,s=t+i;s<e;s+=i){var l=r[s],u=r[s+1];o+=Math.sqrt((l-n)*(l-n)+(u-a)*(u-a)),n=l,a=u}return o}var Br=oe(),We=[],Pe=[],De=[],Ve=[];function Lf(r){return r[3].declutterBox}var UI=new RegExp("["+String.fromCharCode(1425)+"-"+String.fromCharCode(2303)+String.fromCharCode(64285)+"-"+String.fromCharCode(65023)+String.fromCharCode(65136)+"-"+String.fromCharCode(65276)+String.fromCharCode(67584)+"-"+String.fromCharCode(69631)+String.fromCharCode(124928)+"-"+String.fromCharCode(126975)+"]");function Ff(r,t){return(t==="start"||t==="end")&&!UI.test(r)&&(t=t==="start"?"left":"right"),ko[t]}function jI(r,t,e){return e>0&&r.push(`
`,""),r.push(t,""),r}var WI=function(){function r(t,e,i,n){this.overlaps=i,this.pixelRatio=e,this.resolution=t,this.alignFill_,this.instructions=n.instructions,this.coordinates=n.coordinates,this.coordinateCache_={},this.renderedTransform_=ar(),this.hitDetectionInstructions=n.hitDetectionInstructions,this.pixelCoordinates_=null,this.viewRotation_=0,this.fillStates=n.fillStates||{},this.strokeStates=n.strokeStates||{},this.textStates=n.textStates||{},this.widths_={},this.labels_={}}return r.prototype.createLabel=function(t,e,i,n){var a=t+e+i+n;if(this.labels_[a])return this.labels_[a];var o=n?this.strokeStates[n]:null,s=i?this.fillStates[i]:null,l=this.textStates[e],u=this.pixelRatio,h=[l.scale[0]*u,l.scale[1]*u],c=Array.isArray(t),d=Ff(c?t[0]:t,l.textAlign||rn),f=n&&o.lineWidth?o.lineWidth:0,p=c?t:t.split(`
`).reduce(jI,[]),v=oI(l,p),m=v.width,_=v.height,g=v.widths,y=v.heights,b=v.lineWidths,w=m+f,x=[],E=(w+2)*h[0],A=(_+f)*h[1],M={width:E<0?Math.floor(E):Math.ceil(E),height:A<0?Math.floor(A):Math.ceil(A),contextInstructions:x};if((h[0]!=1||h[1]!=1)&&x.push("scale",h),n){x.push("strokeStyle",o.strokeStyle),x.push("lineWidth",f),x.push("lineCap",o.lineCap),x.push("lineJoin",o.lineJoin),x.push("miterLimit",o.miterLimit);var I=ts?OffscreenCanvasRenderingContext2D:CanvasRenderingContext2D;I.prototype.setLineDash&&(x.push("setLineDash",[o.lineDash]),x.push("lineDashOffset",o.lineDashOffset))}i&&x.push("fillStyle",s.fillStyle),x.push("textBaseline","middle"),x.push("textAlign","center");for(var k=.5-d,N=d*w+k*f,F=[],j=[],D=0,B=0,$=0,K=0,q,Q=0,lt=p.length;Q<lt;Q+=2){var C=p[Q];if(C===`
`){B+=D,D=0,N=d*w+k*f,++K;continue}var dt=p[Q+1]||l.font;dt!==q&&(n&&F.push("font",dt),i&&j.push("font",dt),q=dt),D=Math.max(D,y[$]);var Y=[C,N+k*g[$]+d*(g[$]-b[K]),.5*(f+D)+B];N+=g[$],n&&F.push("strokeText",Y),i&&j.push("fillText",Y),++$}return Array.prototype.push.apply(x,F),Array.prototype.push.apply(x,j),this.labels_[a]=M,M},r.prototype.replayTextBackground_=function(t,e,i,n,a,o,s){t.beginPath(),t.moveTo.apply(t,e),t.lineTo.apply(t,i),t.lineTo.apply(t,n),t.lineTo.apply(t,a),t.lineTo.apply(t,e),o&&(this.alignFill_=o[2],this.fill_(t)),s&&(this.setStrokeStyle_(t,s),t.stroke())},r.prototype.calculateImageOrLabelDimensions_=function(t,e,i,n,a,o,s,l,u,h,c,d,f,p,v,m){s*=d[0],l*=d[1];var _=i-s,g=n-l,y=a+u>t?t-u:a,b=o+h>e?e-h:o,w=p[3]+y*d[0]+p[1],x=p[0]+b*d[1]+p[2],E=_-p[3],A=g-p[0];(v||c!==0)&&(We[0]=E,Ve[0]=E,We[1]=A,Pe[1]=A,Pe[0]=E+w,De[0]=Pe[0],De[1]=A+x,Ve[1]=De[1]);var M;return c!==0?(M=Me(ar(),i,n,1,1,c,-i,-n),Mt(M,We),Mt(M,Pe),Mt(M,De),Mt(M,Ve),Ce(Math.min(We[0],Pe[0],De[0],Ve[0]),Math.min(We[1],Pe[1],De[1],Ve[1]),Math.max(We[0],Pe[0],De[0],Ve[0]),Math.max(We[1],Pe[1],De[1],Ve[1]),Br)):Ce(Math.min(E,E+w),Math.min(A,A+x),Math.max(E,E+w),Math.max(A,A+x),Br),f&&(_=Math.round(_),g=Math.round(g)),{drawImageX:_,drawImageY:g,drawImageW:y,drawImageH:b,originX:u,originY:h,declutterBox:{minX:Br[0],minY:Br[1],maxX:Br[2],maxY:Br[3],value:m},canvasTransform:M,scale:d}},r.prototype.replayImageOrLabel_=function(t,e,i,n,a,o,s){var l=!!(o||s),u=n.declutterBox,h=t.canvas,c=s?s[2]*n.scale[0]/2:0,d=u.minX-c<=h.width/e&&u.maxX+c>=0&&u.minY-c<=h.height/e&&u.maxY+c>=0;return d&&(l&&this.replayTextBackground_(t,We,Pe,De,Ve,o,s),sI(t,n.canvasTransform,a,i,n.originX,n.originY,n.drawImageW,n.drawImageH,n.drawImageX,n.drawImageY,n.scale)),!0},r.prototype.fill_=function(t){if(this.alignFill_){var e=Mt(this.renderedTransform_,[0,0]),i=512*this.pixelRatio;t.save(),t.translate(e[0]%i,e[1]%i),t.rotate(this.viewRotation_)}t.fill(),this.alignFill_&&t.restore()},r.prototype.setStrokeStyle_=function(t,e){t.strokeStyle=e[1],t.lineWidth=e[2],t.lineCap=e[3],t.lineJoin=e[4],t.miterLimit=e[5],t.setLineDash&&(t.lineDashOffset=e[7],t.setLineDash(e[6]))},r.prototype.drawLabelWithPointPlacement_=function(t,e,i,n){var a=this.textStates[e],o=this.createLabel(t,e,n,i),s=this.strokeStates[i],l=this.pixelRatio,u=Ff(Array.isArray(t)?t[0]:t,a.textAlign||rn),h=ko[a.textBaseline||Po],c=s&&s.lineWidth?s.lineWidth:0,d=o.width/l-2*a.scale[0],f=u*d+2*(.5-u)*c,p=h*o.height/l+2*(.5-h)*c;return{label:o,anchorX:f,anchorY:p}},r.prototype.execute_=function(t,e,i,n,a,o,s,l){var u;this.pixelCoordinates_&&mi(i,this.renderedTransform_)?u=this.pixelCoordinates_:(this.pixelCoordinates_||(this.pixelCoordinates_=[]),u=Er(this.coordinates,0,this.coordinates.length,2,i,this.pixelCoordinates_),tO(this.renderedTransform_,i));for(var h=0,c=n.length,d=0,f,p,v,m,_,g,y,b,w,x,E,A,M=0,I=0,k=null,N=null,F=this.coordinateCache_,j=this.viewRotation_,D=Math.round(Math.atan2(-i[1],i[0])*1e12)/1e12,B={context:t,pixelRatio:this.pixelRatio,resolution:this.resolution,rotation:j},$=this.instructions!=n||this.overlaps?0:200,K,q,Q,lt;h<c;){var C=n[h],dt=C[0];switch(dt){case U.BEGIN_GEOMETRY:K=C[1],lt=C[3],K.getGeometry()?s!==void 0&&!zt(s,lt.getExtent())?h=C[2]+1:++h:h=C[2];break;case U.BEGIN_PATH:M>$&&(this.fill_(t),M=0),I>$&&(t.stroke(),I=0),!M&&!I&&(t.beginPath(),m=NaN,_=NaN),++h;break;case U.CIRCLE:d=C[1];var Y=u[d],ft=u[d+1],Ot=u[d+2],St=u[d+3],tt=Ot-Y,H=St-ft,Tt=Math.sqrt(tt*tt+H*H);t.moveTo(Y+Tt,ft),t.arc(Y,ft,Tt,0,2*Math.PI,!0),++h;break;case U.CLOSE_PATH:t.closePath(),++h;break;case U.CUSTOM:d=C[1],f=C[2];var Nt=C[3],hr=C[4],cr=C.length==6?C[5]:void 0;B.geometry=Nt,B.feature=K,h in F||(F[h]=[]);var te=F[h];cr?cr(u,d,f,2,te):(te[0]=u[d],te[1]=u[d+1],te.length=2),hr(te,B),++h;break;case U.DRAW_IMAGE:d=C[1],f=C[2],b=C[3],p=C[4],v=C[5];var Se=C[6],En=C[7],_i=C[8],Cn=C[9],dr=C[10],gi=C[11],Tn=C[12],Rr=C[13],ze=C[14];if(!b&&C.length>=19){w=C[18],x=C[19],E=C[20],A=C[21];var Pr=this.drawLabelWithPointPlacement_(w,x,E,A);b=Pr.label,C[3]=b;var is=C[22];p=(Pr.anchorX-is)*this.pixelRatio,C[4]=p;var Mn=C[23];v=(Pr.anchorY-Mn)*this.pixelRatio,C[5]=v,Se=b.height,C[6]=Se,Rr=b.width,C[13]=Rr}var yi=void 0;C.length>24&&(yi=C[24]);var Ie=void 0,me=void 0,fr=void 0;C.length>16?(Ie=C[15],me=C[16],fr=C[17]):(Ie=wr,me=!1,fr=!1),dr&&D?gi+=j:!dr&&!D&&(gi-=j);for(var bi=0;d<f;d+=2)if(!(yi&&yi[bi++]<Rr/this.pixelRatio)){var Yt=this.calculateImageOrLabelDimensions_(b.width,b.height,u[d],u[d+1],Rr,Se,p,v,_i,Cn,gi,Tn,a,Ie,me||fr,K),On=[t,e,b,Yt,En,me?k:null,fr?N:null],Pt=void 0,Dr=void 0;if(l&&ze){var pr=f-d;if(!ze[pr]){ze[pr]=On;continue}if(Pt=ze[pr],delete ze[pr],Dr=Lf(Pt),l.collides(Dr))continue}l&&l.collides(Yt.declutterBox)||(Pt&&(l&&l.insert(Dr),this.replayImageOrLabel_.apply(this,Pt)),l&&l.insert(Yt.declutterBox),this.replayImageOrLabel_.apply(this,On))}++h;break;case U.DRAW_CHARS:var Hu=C[1],Xu=C[2],ns=C[3],Lm=C[4];A=C[5];var Fm=C[6],Zu=C[7],Qu=C[8];E=C[9];var as=C[10];w=C[11],x=C[12];var Ku=[C[13],C[13]],os=this.textStates[x],wi=os.font,xi=[os.scale[0]*Zu,os.scale[1]*Zu],Ai=void 0;wi in this.widths_?Ai=this.widths_[wi]:(Ai={},this.widths_[wi]=Ai);var Ju=YI(u,Hu,Xu,2),th=Math.abs(xi[0])*Sf(wi,w,Ai);if(Lm||th<=Ju){var $m=this.textStates[x].textAlign,Nm=(Ju-th)*ko[$m],Ei=GI(u,Hu,Xu,2,w,Nm,Fm,Math.abs(xi[0]),Sf,wi,Ai,D?0:this.viewRotation_);t:if(Ei){var Ci=[],Ge=void 0,Sn=void 0,In=void 0,Ut=void 0,ee=void 0;if(E)for(Ge=0,Sn=Ei.length;Ge<Sn;++Ge){ee=Ei[Ge],In=ee[4],Ut=this.createLabel(In,x,"",E),p=ee[2]+(xi[0]<0?-as:as),v=ns*Ut.height+(.5-ns)*2*as*xi[1]/xi[0]-Qu;var Yt=this.calculateImageOrLabelDimensions_(Ut.width,Ut.height,ee[0],ee[1],Ut.width,Ut.height,p,v,0,0,ee[3],Ku,!1,wr,!1,K);if(l&&l.collides(Yt.declutterBox))break t;Ci.push([t,e,Ut,Yt,1,null,null])}if(A)for(Ge=0,Sn=Ei.length;Ge<Sn;++Ge){ee=Ei[Ge],In=ee[4],Ut=this.createLabel(In,x,A,""),p=ee[2],v=ns*Ut.height-Qu;var Yt=this.calculateImageOrLabelDimensions_(Ut.width,Ut.height,ee[0],ee[1],Ut.width,Ut.height,p,v,0,0,ee[3],Ku,!1,wr,!1,K);if(l&&l.collides(Yt.declutterBox))break t;Ci.push([t,e,Ut,Yt,1,null,null])}l&&l.load(Ci.map(Lf));for(var ss=0,Bm=Ci.length;ss<Bm;++ss)this.replayImageOrLabel_.apply(this,Ci[ss])}}++h;break;case U.END_GEOMETRY:if(o!==void 0){K=C[1];var eh=o(K,lt);if(eh)return eh}++h;break;case U.FILL:$?M++:this.fill_(t),++h;break;case U.MOVE_TO_LINE_TO:for(d=C[1],f=C[2],q=u[d],Q=u[d+1],g=q+.5|0,y=Q+.5|0,(g!==m||y!==_)&&(t.moveTo(q,Q),m=g,_=y),d+=2;d<f;d+=2)q=u[d],Q=u[d+1],g=q+.5|0,y=Q+.5|0,(d==f-2||g!==m||y!==_)&&(t.lineTo(q,Q),m=g,_=y);++h;break;case U.SET_FILL_STYLE:k=C,this.alignFill_=C[2],M&&(this.fill_(t),M=0,I&&(t.stroke(),I=0)),t.fillStyle=C[1],++h;break;case U.SET_STROKE_STYLE:N=C,I&&(t.stroke(),I=0),this.setStrokeStyle_(t,C),++h;break;case U.STROKE:$?I++:t.stroke(),++h;break;default:++h;break}}M&&this.fill_(t),I&&t.stroke()},r.prototype.execute=function(t,e,i,n,a,o){this.viewRotation_=n,this.execute_(t,e,i,this.instructions,a,void 0,void 0,o)},r.prototype.executeHitDetection=function(t,e,i,n,a){return this.viewRotation_=i,this.execute_(t,1,e,this.hitDetectionInstructions,!0,n,a)},r}();const VI=WI;var As=[mt.POLYGON,mt.CIRCLE,mt.LINE_STRING,mt.IMAGE,mt.TEXT,mt.DEFAULT],qI=function(){function r(t,e,i,n,a,o){this.maxExtent_=t,this.overlaps_=n,this.pixelRatio_=i,this.resolution_=e,this.renderBuffer_=o,this.executorsByZIndex_={},this.hitDetectionContext_=null,this.hitDetectionTransform_=ar(),this.createExecutors_(a)}return r.prototype.clip=function(t,e){var i=this.getClipCoords(e);t.beginPath(),t.moveTo(i[0],i[1]),t.lineTo(i[2],i[3]),t.lineTo(i[4],i[5]),t.lineTo(i[6],i[7]),t.clip()},r.prototype.createExecutors_=function(t){for(var e in t){var i=this.executorsByZIndex_[e];i===void 0&&(i={},this.executorsByZIndex_[e]=i);var n=t[e];for(var a in n){var o=n[a];i[a]=new VI(this.resolution_,this.pixelRatio_,this.overlaps_,o)}}},r.prototype.hasExecutors=function(t){for(var e in this.executorsByZIndex_)for(var i=this.executorsByZIndex_[e],n=0,a=t.length;n<a;++n)if(t[n]in i)return!0;return!1},r.prototype.forEachFeatureAtCoordinate=function(t,e,i,n,a,o){n=Math.round(n);var s=n*2+1,l=Me(this.hitDetectionTransform_,n+.5,n+.5,1/e,-1/e,-i,-t[0],-t[1]),u=!this.hitDetectionContext_;u&&(this.hitDetectionContext_=le(s,s));var h=this.hitDetectionContext_;h.canvas.width!==s||h.canvas.height!==s?(h.canvas.width=s,h.canvas.height=s):u||h.clearRect(0,0,s,s);var c;this.renderBuffer_!==void 0&&(c=oe(),Gi(c,t),Wi(c,e*(this.renderBuffer_+n),c));var d=HI(n),f;function p(x,E){for(var A=h.getImageData(0,0,s,s).data,M=0,I=d.length;M<I;M++)if(A[d[M]]>0){if(!o||f!==mt.IMAGE&&f!==mt.TEXT||o.indexOf(x)!==-1){var k=(d[M]-3)/4,N=n-k%s,F=n-(k/s|0),j=a(x,E,N*N+F*F);if(j)return j}h.clearRect(0,0,s,s);break}}var v=Object.keys(this.executorsByZIndex_).map(Number);v.sort(li);var m,_,g,y,b;for(m=v.length-1;m>=0;--m){var w=v[m].toString();for(g=this.executorsByZIndex_[w],_=As.length-1;_>=0;--_)if(f=As[_],y=g[f],y!==void 0&&(b=y.executeHitDetection(h,l,i,p,c),b))return b}},r.prototype.getClipCoords=function(t){var e=this.maxExtent_;if(!e)return null;var i=e[0],n=e[1],a=e[2],o=e[3],s=[i,n,i,o,a,o,a,n];return Er(s,0,8,2,t,s),s},r.prototype.isEmpty=function(){return ji(this.executorsByZIndex_)},r.prototype.execute=function(t,e,i,n,a,o,s){var l=Object.keys(this.executorsByZIndex_).map(Number);l.sort(li),this.maxExtent_&&(t.save(),this.clip(t,i));var u=o||As,h,c,d,f,p,v;for(s&&l.reverse(),h=0,c=l.length;h<c;++h){var m=l[h].toString();for(p=this.executorsByZIndex_[m],d=0,f=u.length;d<f;++d){var _=u[d];v=p[_],v!==void 0&&v.execute(t,e,i,n,a,s)}}this.maxExtent_&&t.restore()},r}(),Es={};function HI(r){if(Es[r]!==void 0)return Es[r];for(var t=r*2+1,e=r*r,i=new Array(e+1),n=0;n<=r;++n)for(var a=0;a<=r;++a){var o=n*n+a*a;if(o>e)break;var s=i[o];s||(s=[],i[o]=s),s.push(((r+n)*t+(r+a))*4+3),n>0&&s.push(((r-n)*t+(r+a))*4+3),a>0&&(s.push(((r+n)*t+(r-a))*4+3),n>0&&s.push(((r-n)*t+(r-a))*4+3))}for(var l=[],n=0,u=i.length;n<u;++n)i[n]&&l.push.apply(l,i[n]);return Es[r]=l,l}const $f=qI;var XI=globalThis&&globalThis.__extends||function(){var r=function(t,e){return r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(i,n){i.__proto__=n}||function(i,n){for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(i[a]=n[a])},r(t,e)};return function(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");r(t,e);function i(){this.constructor=t}t.prototype=e===null?Object.create(e):(i.prototype=e.prototype,new i)}}(),ZI=function(r){XI(t,r);function t(e,i,n,a,o,s,l){var u=r.call(this)||this;return u.context_=e,u.pixelRatio_=i,u.extent_=n,u.transform_=a,u.viewRotation_=o,u.squaredTolerance_=s,u.userTransform_=l,u.contextFillState_=null,u.contextStrokeState_=null,u.contextTextState_=null,u.fillState_=null,u.strokeState_=null,u.image_=null,u.imageAnchorX_=0,u.imageAnchorY_=0,u.imageHeight_=0,u.imageOpacity_=0,u.imageOriginX_=0,u.imageOriginY_=0,u.imageRotateWithView_=!1,u.imageRotation_=0,u.imageScale_=[0,0],u.imageWidth_=0,u.text_="",u.textOffsetX_=0,u.textOffsetY_=0,u.textRotateWithView_=!1,u.textRotation_=0,u.textScale_=[0,0],u.textFillState_=null,u.textStrokeState_=null,u.textState_=null,u.pixelCoordinates_=[],u.tmpLocalTransform_=ar(),u}return t.prototype.drawImages_=function(e,i,n,a){if(this.image_){var o=Er(e,i,n,a,this.transform_,this.pixelCoordinates_),s=this.context_,l=this.tmpLocalTransform_,u=s.globalAlpha;this.imageOpacity_!=1&&(s.globalAlpha=u*this.imageOpacity_);var h=this.imageRotation_;this.imageRotateWithView_&&(h+=this.viewRotation_);for(var c=0,d=o.length;c<d;c+=2){var f=o[c]-this.imageAnchorX_,p=o[c+1]-this.imageAnchorY_;if(h!==0||this.imageScale_[0]!=1||this.imageScale_[1]!=1){var v=f+this.imageAnchorX_,m=p+this.imageAnchorY_;Me(l,v,m,1,1,h,-v,-m),s.setTransform.apply(s,l),s.translate(v,m),s.scale(this.imageScale_[0],this.imageScale_[1]),s.drawImage(this.image_,this.imageOriginX_,this.imageOriginY_,this.imageWidth_,this.imageHeight_,-this.imageAnchorX_,-this.imageAnchorY_,this.imageWidth_,this.imageHeight_),s.setTransform(1,0,0,1,0,0)}else s.drawImage(this.image_,this.imageOriginX_,this.imageOriginY_,this.imageWidth_,this.imageHeight_,f,p,this.imageWidth_,this.imageHeight_)}this.imageOpacity_!=1&&(s.globalAlpha=u)}},t.prototype.drawText_=function(e,i,n,a){if(!(!this.textState_||this.text_==="")){this.textFillState_&&this.setContextFillState_(this.textFillState_),this.textStrokeState_&&this.setContextStrokeState_(this.textStrokeState_),this.setContextTextState_(this.textState_);var o=Er(e,i,n,a,this.transform_,this.pixelCoordinates_),s=this.context_,l=this.textRotation_;for(this.textRotateWithView_&&(l+=this.viewRotation_);i<n;i+=a){var u=o[i]+this.textOffsetX_,h=o[i+1]+this.textOffsetY_;if(l!==0||this.textScale_[0]!=1||this.textScale_[1]!=1){var c=Me(this.tmpLocalTransform_,u,h,1,1,l,-u,-h);s.setTransform.apply(s,c),s.translate(u,h),s.scale(this.textScale_[0],this.textScale_[1]),this.textStrokeState_&&s.strokeText(this.text_,0,0),this.textFillState_&&s.fillText(this.text_,0,0),s.setTransform(1,0,0,1,0,0)}else this.textStrokeState_&&s.strokeText(this.text_,u,h),this.textFillState_&&s.fillText(this.text_,u,h)}}},t.prototype.moveToLineTo_=function(e,i,n,a,o){var s=this.context_,l=Er(e,i,n,a,this.transform_,this.pixelCoordinates_);s.moveTo(l[0],l[1]);var u=l.length;o&&(u-=2);for(var h=2;h<u;h+=2)s.lineTo(l[h],l[h+1]);return o&&s.closePath(),n},t.prototype.drawRings_=function(e,i,n,a){for(var o=0,s=n.length;o<s;++o)i=this.moveToLineTo_(e,i,n[o],a,!0);return i},t.prototype.drawCircle=function(e){if(zt(this.extent_,e.getExtent())){if(this.fillState_||this.strokeState_){this.fillState_&&this.setContextFillState_(this.fillState_),this.strokeState_&&this.setContextStrokeState_(this.strokeState_);var i=cO(e,this.transform_,this.pixelCoordinates_),n=i[2]-i[0],a=i[3]-i[1],o=Math.sqrt(n*n+a*a),s=this.context_;s.beginPath(),s.arc(i[0],i[1],o,0,2*Math.PI),this.fillState_&&s.fill(),this.strokeState_&&s.stroke()}this.text_!==""&&this.drawText_(e.getCenter(),0,2,2)}},t.prototype.setStyle=function(e){this.setFillStrokeStyle(e.getFill(),e.getStroke()),this.setImageStyle(e.getImage()),this.setTextStyle(e.getText())},t.prototype.setTransform=function(e){this.transform_=e},t.prototype.drawGeometry=function(e){var i=e.getType();switch(i){case X.POINT:this.drawPoint(e);break;case X.LINE_STRING:this.drawLineString(e);break;case X.POLYGON:this.drawPolygon(e);break;case X.MULTI_POINT:this.drawMultiPoint(e);break;case X.MULTI_LINE_STRING:this.drawMultiLineString(e);break;case X.MULTI_POLYGON:this.drawMultiPolygon(e);break;case X.GEOMETRY_COLLECTION:this.drawGeometryCollection(e);break;case X.CIRCLE:this.drawCircle(e);break}},t.prototype.drawFeature=function(e,i){var n=i.getGeometryFunction()(e);!n||!zt(this.extent_,n.getExtent())||(this.setStyle(i),this.drawGeometry(n))},t.prototype.drawGeometryCollection=function(e){for(var i=e.getGeometriesArray(),n=0,a=i.length;n<a;++n)this.drawGeometry(i[n])},t.prototype.drawPoint=function(e){this.squaredTolerance_&&(e=e.simplifyTransformed(this.squaredTolerance_,this.userTransform_));var i=e.getFlatCoordinates(),n=e.getStride();this.image_&&this.drawImages_(i,0,i.length,n),this.text_!==""&&this.drawText_(i,0,i.length,n)},t.prototype.drawMultiPoint=function(e){this.squaredTolerance_&&(e=e.simplifyTransformed(this.squaredTolerance_,this.userTransform_));var i=e.getFlatCoordinates(),n=e.getStride();this.image_&&this.drawImages_(i,0,i.length,n),this.text_!==""&&this.drawText_(i,0,i.length,n)},t.prototype.drawLineString=function(e){if(this.squaredTolerance_&&(e=e.simplifyTransformed(this.squaredTolerance_,this.userTransform_)),!!zt(this.extent_,e.getExtent())){if(this.strokeState_){this.setContextStrokeState_(this.strokeState_);var i=this.context_,n=e.getFlatCoordinates();i.beginPath(),this.moveToLineTo_(n,0,n.length,e.getStride(),!1),i.stroke()}if(this.text_!==""){var a=e.getFlatMidpoint();this.drawText_(a,0,2,2)}}},t.prototype.drawMultiLineString=function(e){this.squaredTolerance_&&(e=e.simplifyTransformed(this.squaredTolerance_,this.userTransform_));var i=e.getExtent();if(zt(this.extent_,i)){if(this.strokeState_){this.setContextStrokeState_(this.strokeState_);var n=this.context_,a=e.getFlatCoordinates(),o=0,s=e.getEnds(),l=e.getStride();n.beginPath();for(var u=0,h=s.length;u<h;++u)o=this.moveToLineTo_(a,o,s[u],l,!1);n.stroke()}if(this.text_!==""){var c=e.getFlatMidpoints();this.drawText_(c,0,c.length,2)}}},t.prototype.drawPolygon=function(e){if(this.squaredTolerance_&&(e=e.simplifyTransformed(this.squaredTolerance_,this.userTransform_)),!!zt(this.extent_,e.getExtent())){if(this.strokeState_||this.fillState_){this.fillState_&&this.setContextFillState_(this.fillState_),this.strokeState_&&this.setContextStrokeState_(this.strokeState_);var i=this.context_;i.beginPath(),this.drawRings_(e.getOrientedFlatCoordinates(),0,e.getEnds(),e.getStride()),this.fillState_&&i.fill(),this.strokeState_&&i.stroke()}if(this.text_!==""){var n=e.getFlatInteriorPoint();this.drawText_(n,0,2,2)}}},t.prototype.drawMultiPolygon=function(e){if(this.squaredTolerance_&&(e=e.simplifyTransformed(this.squaredTolerance_,this.userTransform_)),!!zt(this.extent_,e.getExtent())){if(this.strokeState_||this.fillState_){this.fillState_&&this.setContextFillState_(this.fillState_),this.strokeState_&&this.setContextStrokeState_(this.strokeState_);var i=this.context_,n=e.getOrientedFlatCoordinates(),a=0,o=e.getEndss(),s=e.getStride();i.beginPath();for(var l=0,u=o.length;l<u;++l){var h=o[l];a=this.drawRings_(n,a,h,s)}this.fillState_&&i.fill(),this.strokeState_&&i.stroke()}if(this.text_!==""){var c=e.getFlatInteriorPoints();this.drawText_(c,0,c.length,2)}}},t.prototype.setContextFillState_=function(e){var i=this.context_,n=this.contextFillState_;n?n.fillStyle!=e.fillStyle&&(n.fillStyle=e.fillStyle,i.fillStyle=e.fillStyle):(i.fillStyle=e.fillStyle,this.contextFillState_={fillStyle:e.fillStyle})},t.prototype.setContextStrokeState_=function(e){var i=this.context_,n=this.contextStrokeState_;n?(n.lineCap!=e.lineCap&&(n.lineCap=e.lineCap,i.lineCap=e.lineCap),i.setLineDash&&(mi(n.lineDash,e.lineDash)||i.setLineDash(n.lineDash=e.lineDash),n.lineDashOffset!=e.lineDashOffset&&(n.lineDashOffset=e.lineDashOffset,i.lineDashOffset=e.lineDashOffset)),n.lineJoin!=e.lineJoin&&(n.lineJoin=e.lineJoin,i.lineJoin=e.lineJoin),n.lineWidth!=e.lineWidth&&(n.lineWidth=e.lineWidth,i.lineWidth=e.lineWidth),n.miterLimit!=e.miterLimit&&(n.miterLimit=e.miterLimit,i.miterLimit=e.miterLimit),n.strokeStyle!=e.strokeStyle&&(n.strokeStyle=e.strokeStyle,i.strokeStyle=e.strokeStyle)):(i.lineCap=e.lineCap,i.setLineDash&&(i.setLineDash(e.lineDash),i.lineDashOffset=e.lineDashOffset),i.lineJoin=e.lineJoin,i.lineWidth=e.lineWidth,i.miterLimit=e.miterLimit,i.strokeStyle=e.strokeStyle,this.contextStrokeState_={lineCap:e.lineCap,lineDash:e.lineDash,lineDashOffset:e.lineDashOffset,lineJoin:e.lineJoin,lineWidth:e.lineWidth,miterLimit:e.miterLimit,strokeStyle:e.strokeStyle})},t.prototype.setContextTextState_=function(e){var i=this.context_,n=this.contextTextState_,a=e.textAlign?e.textAlign:rn;n?(n.font!=e.font&&(n.font=e.font,i.font=e.font),n.textAlign!=a&&(n.textAlign=a,i.textAlign=a),n.textBaseline!=e.textBaseline&&(n.textBaseline=e.textBaseline,i.textBaseline=e.textBaseline)):(i.font=e.font,i.textAlign=a,i.textBaseline=e.textBaseline,this.contextTextState_={font:e.font,textAlign:a,textBaseline:e.textBaseline})},t.prototype.setFillStrokeStyle=function(e,i){var n=this;if(!e)this.fillState_=null;else{var a=e.getColor();this.fillState_={fillStyle:we(a||$e)}}if(!i)this.strokeState_=null;else{var o=i.getColor(),s=i.getLineCap(),l=i.getLineDash(),u=i.getLineDashOffset(),h=i.getLineJoin(),c=i.getWidth(),d=i.getMiterLimit(),f=l||Ki;this.strokeState_={lineCap:s!==void 0?s:Ro,lineDash:this.pixelRatio_===1?f:f.map(function(p){return p*n.pixelRatio_}),lineDashOffset:(u||Ji)*this.pixelRatio_,lineJoin:h!==void 0?h:hi,lineWidth:(c!==void 0?c:nn)*this.pixelRatio_,miterLimit:d!==void 0?d:tn,strokeStyle:we(o||en)}}},t.prototype.setImageStyle=function(e){var i;if(!e||!(i=e.getSize())){this.image_=null;return}var n=e.getAnchor(),a=e.getOrigin();this.image_=e.getImage(this.pixelRatio_),this.imageAnchorX_=n[0]*this.pixelRatio_,this.imageAnchorY_=n[1]*this.pixelRatio_,this.imageHeight_=i[1]*this.pixelRatio_,this.imageOpacity_=e.getOpacity(),this.imageOriginX_=a[0],this.imageOriginY_=a[1],this.imageRotateWithView_=e.getRotateWithView(),this.imageRotation_=e.getRotation(),this.imageScale_=e.getScaleArray(),this.imageWidth_=i[0]*this.pixelRatio_},t.prototype.setTextStyle=function(e){if(!e)this.text_="";else{var i=e.getFill();if(!i)this.textFillState_=null;else{var n=i.getColor();this.textFillState_={fillStyle:we(n||$e)}}var a=e.getStroke();if(!a)this.textStrokeState_=null;else{var o=a.getColor(),s=a.getLineCap(),l=a.getLineDash(),u=a.getLineDashOffset(),h=a.getLineJoin(),c=a.getWidth(),d=a.getMiterLimit();this.textStrokeState_={lineCap:s!==void 0?s:Ro,lineDash:l||Ki,lineDashOffset:u||Ji,lineJoin:h!==void 0?h:hi,lineWidth:c!==void 0?c:nn,miterLimit:d!==void 0?d:tn,strokeStyle:we(o||en)}}var f=e.getFont(),p=e.getOffsetX(),v=e.getOffsetY(),m=e.getRotateWithView(),_=e.getRotation(),g=e.getScaleArray(),y=e.getText(),b=e.getTextAlign(),w=e.getTextBaseline();this.textState_={font:f!==void 0?f:am,textAlign:b!==void 0?b:rn,textBaseline:w!==void 0?w:Po},this.text_=y!==void 0?Array.isArray(y)?y.reduce(function(x,E,A){return x+=A%2?" ":E},""):y:"",this.textOffsetX_=p!==void 0?this.pixelRatio_*p:0,this.textOffsetY_=v!==void 0?this.pixelRatio_*v:0,this.textRotateWithView_=m!==void 0?m:!1,this.textRotation_=_!==void 0?_:0,this.textScale_=[this.pixelRatio_*g[0],this.pixelRatio_*g[1]]}},t}(hm);const QI=ZI,Ze={FRACTION:"fraction",PIXELS:"pixels"},re={BOTTOM_LEFT:"bottom-left",BOTTOM_RIGHT:"bottom-right",TOP_LEFT:"top-left",TOP_RIGHT:"top-right"};var KI=function(){function r(){this.cache_={},this.cacheSize_=0,this.maxCacheSize_=32}return r.prototype.clear=function(){this.cache_={},this.cacheSize_=0},r.prototype.canExpireCache=function(){return this.cacheSize_>this.maxCacheSize_},r.prototype.expire=function(){if(this.canExpireCache()){var t=0;for(var e in this.cache_){var i=this.cache_[e];!(t++&3)&&!i.hasListener()&&(delete this.cache_[e],--this.cacheSize_)}}},r.prototype.get=function(t,e,i){var n=Nf(t,e,i);return n in this.cache_?this.cache_[n]:null},r.prototype.set=function(t,e,i,n){var a=Nf(t,e,i);this.cache_[a]=n,++this.cacheSize_},r.prototype.setSize=function(t){this.maxCacheSize_=t,this.expire()},r}();function Nf(r,t,e){var i=e?Gv(e):"null";return t+":"+r+":"+i}var Bf=new KI,JI=globalThis&&globalThis.__extends||function(){var r=function(t,e){return r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(i,n){i.__proto__=n}||function(i,n){for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(i[a]=n[a])},r(t,e)};return function(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");r(t,e);function i(){this.constructor=t}t.prototype=e===null?Object.create(e):(i.prototype=e.prototype,new i)}}(),Ri=null,tR=function(r){JI(t,r);function t(e,i,n,a,o,s){var l=r.call(this)||this;return l.hitDetectionImage_=null,l.image_=e||new Image,a!==null&&(l.image_.crossOrigin=a),l.canvas_={},l.color_=s,l.unlisten_=null,l.imageState_=o,l.size_=n,l.src_=i,l.tainted_,l}return t.prototype.isTainted_=function(){if(this.tainted_===void 0&&this.imageState_===Z.LOADED){Ri||(Ri=le(1,1)),Ri.drawImage(this.image_,0,0);try{Ri.getImageData(0,0,1,1),this.tainted_=!1}catch{Ri=null,this.tainted_=!0}}return this.tainted_===!0},t.prototype.dispatchChangeEvent_=function(){this.dispatchEvent(kt.CHANGE)},t.prototype.handleImageError_=function(){this.imageState_=Z.ERROR,this.unlistenImage_(),this.dispatchChangeEvent_()},t.prototype.handleImageLoad_=function(){this.imageState_=Z.LOADED,this.size_?(this.image_.width=this.size_[0],this.image_.height=this.size_[1]):this.size_=[this.image_.width,this.image_.height],this.unlistenImage_(),this.dispatchChangeEvent_()},t.prototype.getImage=function(e){return this.replaceColor_(e),this.canvas_[e]?this.canvas_[e]:this.image_},t.prototype.getPixelRatio=function(e){return this.replaceColor_(e),this.canvas_[e]?e:1},t.prototype.getImageState=function(){return this.imageState_},t.prototype.getHitDetectionImage=function(){if(!this.hitDetectionImage_)if(this.isTainted_()){var e=this.size_[0],i=this.size_[1],n=le(e,i);n.fillRect(0,0,e,i),this.hitDetectionImage_=n.canvas}else this.hitDetectionImage_=this.image_;return this.hitDetectionImage_},t.prototype.getSize=function(){return this.size_},t.prototype.getSrc=function(){return this.src_},t.prototype.load=function(){if(this.imageState_==Z.IDLE){this.imageState_=Z.LOADING;try{this.image_.src=this.src_}catch{this.handleImageError_()}this.unlisten_=Yu(this.image_,this.handleImageLoad_.bind(this),this.handleImageError_.bind(this))}},t.prototype.replaceColor_=function(e){if(!(!this.color_||this.canvas_[e]||this.imageState_!==Z.LOADED)){var i=document.createElement("canvas");this.canvas_[e]=i,i.width=Math.ceil(this.image_.width*e),i.height=Math.ceil(this.image_.height*e);var n=i.getContext("2d");if(n.scale(e,e),n.drawImage(this.image_,0,0),n.globalCompositeOperation="multiply",n.globalCompositeOperation==="multiply"||this.isTainted_())n.fillStyle=Gv(this.color_),n.fillRect(0,0,i.width/e,i.height/e),n.globalCompositeOperation="destination-in",n.drawImage(this.image_,0,0);else{for(var a=n.getImageData(0,0,i.width,i.height),o=a.data,s=this.color_[0]/255,l=this.color_[1]/255,u=this.color_[2]/255,h=this.color_[3],c=0,d=o.length;c<d;c+=4)o[c]*=s,o[c+1]*=l,o[c+2]*=u,o[c+3]*=h;n.putImageData(a,0,0)}}},t.prototype.unlistenImage_=function(){this.unlisten_&&(this.unlisten_(),this.unlisten_=null)},t}(wn);function eR(r,t,e,i,n,a){var o=Bf.get(t,i,a);return o||(o=new tR(r,t,e,i,n,a),Bf.set(t,i,a,o)),o}var rR=globalThis&&globalThis.__extends||function(){var r=function(t,e){return r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(i,n){i.__proto__=n}||function(i,n){for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(i[a]=n[a])},r(t,e)};return function(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");r(t,e);function i(){this.constructor=t}t.prototype=e===null?Object.create(e):(i.prototype=e.prototype,new i)}}(),iR=function(r){rR(t,r);function t(e){var i=this,n=e||{},a=n.opacity!==void 0?n.opacity:1,o=n.rotation!==void 0?n.rotation:0,s=n.scale!==void 0?n.scale:1,l=n.rotateWithView!==void 0?n.rotateWithView:!1;i=r.call(this,{opacity:a,rotation:o,scale:s,displacement:n.displacement!==void 0?n.displacement:[0,0],rotateWithView:l})||this,i.anchor_=n.anchor!==void 0?n.anchor:[.5,.5],i.normalizedAnchor_=null,i.anchorOrigin_=n.anchorOrigin!==void 0?n.anchorOrigin:re.TOP_LEFT,i.anchorXUnits_=n.anchorXUnits!==void 0?n.anchorXUnits:Ze.FRACTION,i.anchorYUnits_=n.anchorYUnits!==void 0?n.anchorYUnits:Ze.FRACTION,i.crossOrigin_=n.crossOrigin!==void 0?n.crossOrigin:null;var u=n.img!==void 0?n.img:null;i.imgSize_=n.imgSize;var h=n.src;et(!(h!==void 0&&u),4),et(!u||u&&i.imgSize_,5),(h===void 0||h.length===0)&&u&&(h=u.src||ut(u)),et(h!==void 0&&h.length>0,6);var c=n.src!==void 0?Z.IDLE:Z.LOADED;return i.color_=n.color!==void 0?So(n.color):null,i.iconImage_=eR(u,h,i.imgSize_!==void 0?i.imgSize_:null,i.crossOrigin_,c,i.color_),i.offset_=n.offset!==void 0?n.offset:[0,0],i.offsetOrigin_=n.offsetOrigin!==void 0?n.offsetOrigin:re.TOP_LEFT,i.origin_=null,i.size_=n.size!==void 0?n.size:null,i}return t.prototype.clone=function(){var e=this.getScale();return new t({anchor:this.anchor_.slice(),anchorOrigin:this.anchorOrigin_,anchorXUnits:this.anchorXUnits_,anchorYUnits:this.anchorYUnits_,color:this.color_&&this.color_.slice?this.color_.slice():this.color_||void 0,crossOrigin:this.crossOrigin_,imgSize:this.imgSize_,offset:this.offset_.slice(),offsetOrigin:this.offsetOrigin_,opacity:this.getOpacity(),rotateWithView:this.getRotateWithView(),rotation:this.getRotation(),scale:Array.isArray(e)?e.slice():e,size:this.size_!==null?this.size_.slice():void 0,src:this.getSrc()})},t.prototype.getAnchor=function(){var e=this.normalizedAnchor_;if(!e){e=this.anchor_;var i=this.getSize();if(this.anchorXUnits_==Ze.FRACTION||this.anchorYUnits_==Ze.FRACTION){if(!i)return null;e=this.anchor_.slice(),this.anchorXUnits_==Ze.FRACTION&&(e[0]*=i[0]),this.anchorYUnits_==Ze.FRACTION&&(e[1]*=i[1])}if(this.anchorOrigin_!=re.TOP_LEFT){if(!i)return null;e===this.anchor_&&(e=this.anchor_.slice()),(this.anchorOrigin_==re.TOP_RIGHT||this.anchorOrigin_==re.BOTTOM_RIGHT)&&(e[0]=-e[0]+i[0]),(this.anchorOrigin_==re.BOTTOM_LEFT||this.anchorOrigin_==re.BOTTOM_RIGHT)&&(e[1]=-e[1]+i[1])}this.normalizedAnchor_=e}var n=this.getDisplacement();return[e[0]-n[0],e[1]+n[1]]},t.prototype.setAnchor=function(e){this.anchor_=e,this.normalizedAnchor_=null},t.prototype.getColor=function(){return this.color_},t.prototype.getImage=function(e){return this.iconImage_.getImage(e)},t.prototype.getPixelRatio=function(e){return this.iconImage_.getPixelRatio(e)},t.prototype.getImageSize=function(){return this.iconImage_.getSize()},t.prototype.getImageState=function(){return this.iconImage_.getImageState()},t.prototype.getHitDetectionImage=function(){return this.iconImage_.getHitDetectionImage()},t.prototype.getOrigin=function(){if(this.origin_)return this.origin_;var e=this.offset_;if(this.offsetOrigin_!=re.TOP_LEFT){var i=this.getSize(),n=this.iconImage_.getSize();if(!i||!n)return null;e=e.slice(),(this.offsetOrigin_==re.TOP_RIGHT||this.offsetOrigin_==re.BOTTOM_RIGHT)&&(e[0]=n[0]-i[0]-e[0]),(this.offsetOrigin_==re.BOTTOM_LEFT||this.offsetOrigin_==re.BOTTOM_RIGHT)&&(e[1]=n[1]-i[1]-e[1])}return this.origin_=e,this.origin_},t.prototype.getSrc=function(){return this.iconImage_.getSrc()},t.prototype.getSize=function(){return this.size_?this.size_:this.iconImage_.getSize()},t.prototype.listenImageChange=function(e){this.iconImage_.addEventListener(kt.CHANGE,e)},t.prototype.load=function(){this.iconImage_.load()},t.prototype.unlistenImageChange=function(e){this.iconImage_.removeEventListener(kt.CHANGE,e)},t}(nm);const cm=iR;var ye=.5;function nR(r,t,e,i,n,a,o){var s=r[0]*ye,l=r[1]*ye,u=le(s,l);u.imageSmoothingEnabled=!1;for(var h=u.canvas,c=new QI(u,ye,n,null,o),d=e.length,f=Math.floor((256*256*256-1)/d),p={},v=1;v<=d;++v){var m=e[v-1],_=m.getStyleFunction()||i;if(i){var g=_(m,a);if(g){Array.isArray(g)||(g=[g]);for(var y=v*f,b="#"+("000000"+y.toString(16)).slice(-6),w=0,x=g.length;w<x;++w){var E=g[w],A=E.getGeometryFunction()(m);if(!(!A||!zt(n,A.getExtent()))){var M=E.clone(),I=M.getFill();I&&I.setColor(b);var k=M.getStroke();k&&(k.setColor(b),k.setLineDash(null)),M.setText(void 0);var N=E.getImage();if(N&&N.getOpacity()!==0){var F=N.getImageSize();if(!F)continue;var j=le(F[0],F[1],void 0,{alpha:!1}),D=j.canvas;j.fillStyle=b,j.fillRect(0,0,D.width,D.height),M.setImage(new cm({img:D,imgSize:F,anchor:N.getAnchor(),anchorXUnits:Ze.PIXELS,anchorYUnits:Ze.PIXELS,offset:N.getOrigin(),opacity:1,size:N.getSize(),scale:N.getScale(),rotation:N.getRotation(),rotateWithView:N.getRotateWithView()}))}var B=M.getZIndex()||0,$=p[B];$||($={},p[B]=$,$[X.POLYGON]=[],$[X.CIRCLE]=[],$[X.LINE_STRING]=[],$[X.POINT]=[]),$[A.getType().replace("Multi","")].push(A,M)}}}}}for(var K=Object.keys(p).map(Number).sort(li),v=0,q=K.length;v<q;++v){var $=p[K[v]];for(var Q in $)for(var lt=$[Q],w=0,x=lt.length;w<x;w+=2){c.setStyle(lt[w+1]);for(var C=0,dt=t.length;C<dt;++C)c.setTransform(t[C]),c.drawGeometry(lt[w])}}return u.getImageData(0,0,h.width,h.height)}function aR(r,t,e){var i=[];if(e){var n=Math.floor(Math.round(r[0])*ye),a=Math.floor(Math.round(r[1])*ye),o=(xt(n,0,e.width-1)+xt(a,0,e.height-1)*e.width)*4,s=e.data[o],l=e.data[o+1],u=e.data[o+2],h=u+256*(l+256*s),c=Math.floor((256*256*256-1)/t.length);h&&h%c===0&&i.push(t[h/c-1])}return i}var oR=.5,dm={Point:vR,LineString:dR,Polygon:_R,MultiPoint:mR,MultiLineString:fR,MultiPolygon:pR,GeometryCollection:cR,Circle:uR};function sR(r,t){return parseInt(ut(r),10)-parseInt(ut(t),10)}function lR(r,t){var e=eu(r,t);return e*e}function eu(r,t){return oR*r/t}function uR(r,t,e,i,n){var a=e.getFill(),o=e.getStroke();if(a||o){var s=r.getBuilder(e.getZIndex(),mt.CIRCLE);s.setFillStrokeStyle(a,o),s.drawCircle(t,i)}var l=e.getText();if(l&&l.getText()){var u=(n||r).getBuilder(e.getZIndex(),mt.TEXT);u.setTextStyle(l),u.drawText(t,i)}}function zf(r,t,e,i,n,a,o){var s=!1,l=e.getImage();if(l){var u=l.getImageState();u==Z.LOADED||u==Z.ERROR?l.unlistenImageChange(n):(u==Z.IDLE&&l.load(),u=l.getImageState(),l.listenImageChange(n),s=!0)}return hR(r,t,e,i,a,o),s}function hR(r,t,e,i,n,a){var o=e.getGeometryFunction()(t);if(o){var s=o.simplifyTransformed(i,n),l=e.getRenderer();if(l)fm(r,s,e,t);else{var u=dm[s.getType()];u(r,s,e,t,a)}}}function fm(r,t,e,i){if(t.getType()==X.GEOMETRY_COLLECTION){for(var n=t.getGeometries(),a=0,o=n.length;a<o;++a)fm(r,n[a],e,i);return}var s=r.getBuilder(e.getZIndex(),mt.DEFAULT);s.drawCustom(t,i,e.getRenderer(),e.getHitDetectionRenderer())}function cR(r,t,e,i,n){var a=t.getGeometriesArray(),o,s;for(o=0,s=a.length;o<s;++o){var l=dm[a[o].getType()];l(r,a[o],e,i,n)}}function dR(r,t,e,i,n){var a=e.getStroke();if(a){var o=r.getBuilder(e.getZIndex(),mt.LINE_STRING);o.setFillStrokeStyle(null,a),o.drawLineString(t,i)}var s=e.getText();if(s&&s.getText()){var l=(n||r).getBuilder(e.getZIndex(),mt.TEXT);l.setTextStyle(s),l.drawText(t,i)}}function fR(r,t,e,i,n){var a=e.getStroke();if(a){var o=r.getBuilder(e.getZIndex(),mt.LINE_STRING);o.setFillStrokeStyle(null,a),o.drawMultiLineString(t,i)}var s=e.getText();if(s&&s.getText()){var l=(n||r).getBuilder(e.getZIndex(),mt.TEXT);l.setTextStyle(s),l.drawText(t,i)}}function pR(r,t,e,i,n){var a=e.getFill(),o=e.getStroke();if(o||a){var s=r.getBuilder(e.getZIndex(),mt.POLYGON);s.setFillStrokeStyle(a,o),s.drawMultiPolygon(t,i)}var l=e.getText();if(l&&l.getText()){var u=(n||r).getBuilder(e.getZIndex(),mt.TEXT);u.setTextStyle(l),u.drawText(t,i)}}function vR(r,t,e,i,n){var a=e.getImage(),o=e.getText(),s;if(n&&(r=n,s=a&&o&&o.getText()?{}:void 0),a){if(a.getImageState()!=Z.LOADED)return;var l=r.getBuilder(e.getZIndex(),mt.IMAGE);l.setImageStyle(a,s),l.drawPoint(t,i)}if(o&&o.getText()){var u=r.getBuilder(e.getZIndex(),mt.TEXT);u.setTextStyle(o,s),u.drawText(t,i)}}function mR(r,t,e,i,n){var a=e.getImage(),o=e.getText(),s;if(n&&(r=n,s=a&&o&&o.getText()?{}:void 0),a){if(a.getImageState()!=Z.LOADED)return;var l=r.getBuilder(e.getZIndex(),mt.IMAGE);l.setImageStyle(a,s),l.drawMultiPoint(t,i)}if(o&&o.getText()){var u=(n||r).getBuilder(e.getZIndex(),mt.TEXT);u.setTextStyle(o,s),u.drawText(t,i)}}function _R(r,t,e,i,n){var a=e.getFill(),o=e.getStroke();if(a||o){var s=r.getBuilder(e.getZIndex(),mt.POLYGON);s.setFillStrokeStyle(a,o),s.drawPolygon(t,i)}var l=e.getText();if(l&&l.getText()){var u=(n||r).getBuilder(e.getZIndex(),mt.TEXT);u.setTextStyle(l),u.drawText(t,i)}}var gR=globalThis&&globalThis.__extends||function(){var r=function(t,e){return r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(i,n){i.__proto__=n}||function(i,n){for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(i[a]=n[a])},r(t,e)};return function(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");r(t,e);function i(){this.constructor=t}t.prototype=e===null?Object.create(e):(i.prototype=e.prototype,new i)}}(),yR=function(r){gR(t,r);function t(e){var i=r.call(this,e)||this;return i.boundHandleStyleImageChange_=i.handleStyleImageChange_.bind(i),i.animatingOrInteracting_,i.dirty_=!1,i.hitDetectionImageData_=null,i.renderedFeatures_=null,i.renderedRevision_=-1,i.renderedResolution_=NaN,i.renderedExtent_=oe(),i.wrappedRenderedExtent_=oe(),i.renderedRotation_,i.renderedCenter_=null,i.renderedProjection_=null,i.renderedRenderOrder_=null,i.replayGroup_=null,i.replayGroupChanged=!0,i.declutterExecutorGroup=null,i.clipping=!0,i}return t.prototype.renderWorlds=function(e,i,n){var a=i.extent,o=i.viewState,s=o.center,l=o.resolution,u=o.projection,h=o.rotation,c=u.getExtent(),d=this.getLayer().getSource(),f=i.pixelRatio,p=i.viewHints,v=!(p[Wt.ANIMATING]||p[Wt.INTERACTING]),m=this.context,_=Math.round(i.size[0]*f),g=Math.round(i.size[1]*f),y=d.getWrapX()&&u.canWrapX(),b=y?ht(c):null,w=y?Math.ceil((a[2]-c[2])/b)+1:1,x=y?Math.floor((a[0]-c[0])/b):0;do{var E=this.getRenderTransform(s,l,h,f,_,g,x*b);e.execute(m,1,E,h,v,void 0,n)}while(++x<w)},t.prototype.renderDeclutter=function(e){this.declutterExecutorGroup&&this.renderWorlds(this.declutterExecutorGroup,e,e.declutterTree)},t.prototype.renderFrame=function(e,i){var n=e.pixelRatio,a=e.layerStatesArray[e.layerIndex];eO(this.pixelTransform,1/n,1/n),ku(this.inversePixelTransform,this.pixelTransform);var o=Lu(this.pixelTransform);this.useContainer(i,o,a.opacity,this.getBackground(e));var s=this.context,l=s.canvas,u=this.replayGroup_,h=this.declutterExecutorGroup;if((!u||u.isEmpty())&&(!h||h.isEmpty()))return null;var c=Math.round(e.size[0]*n),d=Math.round(e.size[1]*n);l.width!=c||l.height!=d?(l.width=c,l.height=d,l.style.transform!==o&&(l.style.transform=o)):this.containerReused||s.clearRect(0,0,c,d),this.preRender(s,e);var f=e.viewState,p=f.projection,v=!1,m=!0;if(a.extent&&this.clipping){var _=Le(a.extent,p);m=zt(_,e.extent),v=m&&!Je(_,e.extent),v&&this.clipUnrotated(s,e,_)}m&&this.renderWorlds(u,e),v&&s.restore(),this.postRender(s,e);var g=tm(a.opacity),y=this.container;return g!==y.style.opacity&&(y.style.opacity=g),this.renderedRotation_!==f.rotation&&(this.renderedRotation_=f.rotation,this.hitDetectionImageData_=null),this.container},t.prototype.getFeatures=function(e){return new Promise(function(i){if(!this.hitDetectionImageData_&&!this.animatingOrInteracting_){var n=[this.context.canvas.width,this.context.canvas.height];Mt(this.pixelTransform,n);var a=this.renderedCenter_,o=this.renderedResolution_,s=this.renderedRotation_,l=this.renderedProjection_,u=this.wrappedRenderedExtent_,h=this.getLayer(),c=[],d=n[0]*ye,f=n[1]*ye;c.push(this.getRenderTransform(a,o,s,ye,d,f,0).slice());var p=h.getSource(),v=l.getExtent();if(p.getWrapX()&&l.canWrapX()&&!Je(v,u)){for(var m=u[0],_=ht(v),g=0,y=void 0;m<v[0];)--g,y=_*g,c.push(this.getRenderTransform(a,o,s,ye,d,f,y).slice()),m+=_;for(g=0,m=u[2];m>v[2];)++g,y=_*g,c.push(this.getRenderTransform(a,o,s,ye,d,f,y).slice()),m-=_}this.hitDetectionImageData_=nR(n,c,this.renderedFeatures_,h.getStyleFunction(),u,o,s)}i(aR(e,this.renderedFeatures_,this.hitDetectionImageData_))}.bind(this))},t.prototype.forEachFeatureAtCoordinate=function(e,i,n,a,o){var s=this;if(this.replayGroup_){var l=i.viewState.resolution,u=i.viewState.rotation,h=this.getLayer(),c={},d=function(v,m,_){var g=ut(v),y=c[g];if(y){if(y!==!0&&_<y.distanceSq){if(_===0)return c[g]=!0,o.splice(o.lastIndexOf(y),1),a(v,h,m);y.geometry=m,y.distanceSq=_}}else{if(_===0)return c[g]=!0,a(v,h,m);o.push(c[g]={feature:v,layer:h,geometry:m,distanceSq:_,callback:a})}},f,p=[this.replayGroup_];return this.declutterExecutorGroup&&p.push(this.declutterExecutorGroup),p.some(function(v){return f=v.forEachFeatureAtCoordinate(e,l,u,n,d,v===s.declutterExecutorGroup&&i.declutterTree?i.declutterTree.all().map(function(m){return m.value}):null)}),f}},t.prototype.handleFontsChanged=function(){var e=this.getLayer();e.getVisible()&&this.replayGroup_&&e.changed()},t.prototype.handleStyleImageChange_=function(e){this.renderIfReadyAndVisible()},t.prototype.prepareFrame=function(e){var i=this.getLayer(),n=i.getSource();if(!n)return!1;var a=e.viewHints[Wt.ANIMATING],o=e.viewHints[Wt.INTERACTING],s=i.getUpdateWhileAnimating(),l=i.getUpdateWhileInteracting();if(!this.dirty_&&!s&&a||!l&&o)return this.animatingOrInteracting_=!0,!0;this.animatingOrInteracting_=!1;var u=e.extent,h=e.viewState,c=h.projection,d=h.resolution,f=e.pixelRatio,p=i.getRevision(),v=i.getRenderBuffer(),m=i.getRenderOrder();m===void 0&&(m=sR);var _=h.center.slice(),g=Wi(u,v*d),y=g.slice(),b=[g.slice()],w=c.getExtent();if(n.getWrapX()&&c.canWrapX()&&!Je(w,e.extent)){var x=ht(w),E=Math.max(ht(g)/2,x);g[0]=w[0]-E,g[2]=w[2]+E,Xx(_,c);var A=Vx(b[0],c);A[0]<w[0]&&A[2]<w[2]?b.push([A[0]+x,A[1],A[2]+x,A[3]]):A[0]>w[0]&&A[2]>w[2]&&b.push([A[0]-x,A[1],A[2]-x,A[3]])}if(!this.dirty_&&this.renderedResolution_==d&&this.renderedRevision_==p&&this.renderedRenderOrder_==m&&Je(this.wrappedRenderedExtent_,g))return mi(this.renderedExtent_,y)||(this.hitDetectionImageData_=null,this.renderedExtent_=y),this.renderedCenter_=_,this.replayGroupChanged=!1,!0;this.replayGroup_=null,this.dirty_=!1;var M=new kf(eu(d,f),g,d,f),I;this.getLayer().getDeclutter()&&(I=new kf(eu(d,f),g,d,f));var k=iv(),N;if(k){for(var F=0,j=b.length;F<j;++F){var D=b[F],B=ql(D,c);n.loadFeatures(B,eA(d,c),k)}N=Xo(k,c)}else for(var F=0,j=b.length;F<j;++F)n.loadFeatures(b[F],d,c);var $=lR(d,f),K=function(dt){var Y,ft=dt.getStyleFunction()||i.getStyleFunction();if(ft&&(Y=ft(dt,d)),Y){var Ot=this.renderFeature(dt,$,Y,M,N,I);this.dirty_=this.dirty_||Ot}}.bind(this),q=ql(g,c),Q=n.getFeaturesInExtent(q);m&&Q.sort(m);for(var F=0,j=Q.length;F<j;++F)K(Q[F]);this.renderedFeatures_=Q;var lt=M.finish(),C=new $f(g,d,f,n.getOverlaps(),lt,i.getRenderBuffer());return I&&(this.declutterExecutorGroup=new $f(g,d,f,n.getOverlaps(),I.finish(),i.getRenderBuffer())),this.renderedResolution_=d,this.renderedRevision_=p,this.renderedRenderOrder_=m,this.renderedExtent_=y,this.wrappedRenderedExtent_=g,this.renderedCenter_=_,this.renderedProjection_=c,this.replayGroup_=C,this.hitDetectionImageData_=null,this.replayGroupChanged=!0,!0},t.prototype.renderFeature=function(e,i,n,a,o,s){if(!n)return!1;var l=!1;if(Array.isArray(n))for(var u=0,h=n.length;u<h;++u)l=zf(a,e,n[u],i,this.boundHandleStyleImageChange_,o,s)||l;else l=zf(a,e,n,i,this.boundHandleStyleImageChange_,o,s);return l},t}(Gu);const bR=yR;var wR=globalThis&&globalThis.__extends||function(){var r=function(t,e){return r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(i,n){i.__proto__=n}||function(i,n){for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(i[a]=n[a])},r(t,e)};return function(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");r(t,e);function i(){this.constructor=t}t.prototype=e===null?Object.create(e):(i.prototype=e.prototype,new i)}}(),xR=function(r){wR(t,r);function t(e){return r.call(this,e)||this}return t.prototype.createRenderer=function(){return new bR(this)},t}(xI);const AR=xR;/**
 * @license
 * Copyright 2000-2023 Vaadin Ltd.
 *
 * This program is available under Vaadin Commercial License and Service Terms.
 *
 * See <https://vaadin.com/commercial-license-and-service-terms> for the full
 * license.
 */function Lo(r){return[r.x,r.y]}function ER(r){return[r.width,r.height]}function pm(r,t,e){if(!(t.length!==r.getLength()||r.getArray().some((a,o)=>a.id!==t[o])))return;const n=t.map(a=>e.lookup.get(a)).filter(a=>!!a);r.clear(),n.forEach(a=>r.push(a))}function Be(r){const t={...r};return Object.keys(r).forEach(e=>{r[e]===null&&delete t[e]}),t}/**
 * @license
 * Copyright 2000-2023 Vaadin Ltd.
 *
 * This program is available under Vaadin Commercial License and Service Terms.
 *
 * See <https://vaadin.com/commercial-license-and-service-terms> for the full
 * license.
 */function Uu(r,t,e){if(!r)throw new Error("Can not instantiate base class: ol/layer/Layer");return r.setOpacity(t.opacity),r.setVisible(t.visible),r.setZIndex(t.zIndex||void 0),r.setMinZoom(t.minZoom||-1/0),r.setMaxZoom(t.maxZoom||1/0),r.setBackground(t.background||void 0),r}function CR(r,t,e){return r||(r=new HS(Be({...t,source:e.lookup.get(t.source)}))),Uu(r,t),r.setSource(e.lookup.get(t.source)),r}function TR(r,t,e){return r||(r=new AR(Be({...t,source:e.lookup.get(t.source)}))),Uu(r,t),r.setSource(e.lookup.get(t.source)),r}function MR(r,t,e){return r||(r=new xS(Be({...t,source:e.lookup.get(t.source)}))),Uu(r,t),r.setSource(e.lookup.get(t.source)),r}const Zr={ADD:"add",REMOVE:"remove"};var vm=globalThis&&globalThis.__extends||function(){var r=function(t,e){return r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(i,n){i.__proto__=n}||function(i,n){for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(i[a]=n[a])},r(t,e)};return function(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");r(t,e);function i(){this.constructor=t}t.prototype=e===null?Object.create(e):(i.prototype=e.prototype,new i)}}(),Gf={LENGTH:"length"},qn=function(r){vm(t,r);function t(e,i,n){var a=r.call(this,e)||this;return a.element=i,a.index=n,a}return t}(Sr),OR=function(r){vm(t,r);function t(e,i){var n=r.call(this)||this;n.on,n.once,n.un;var a=i||{};if(n.unique_=!!a.unique,n.array_=e||[],n.unique_)for(var o=0,s=n.array_.length;o<s;++o)n.assertUnique_(n.array_[o],o);return n.updateLength_(),n}return t.prototype.clear=function(){for(;this.getLength()>0;)this.pop()},t.prototype.extend=function(e){for(var i=0,n=e.length;i<n;++i)this.push(e[i]);return this},t.prototype.forEach=function(e){for(var i=this.array_,n=0,a=i.length;n<a;++n)e(i[n],n,i)},t.prototype.getArray=function(){return this.array_},t.prototype.item=function(e){return this.array_[e]},t.prototype.getLength=function(){return this.get(Gf.LENGTH)},t.prototype.insertAt=function(e,i){this.unique_&&this.assertUnique_(i),this.array_.splice(e,0,i),this.updateLength_(),this.dispatchEvent(new qn(Zr.ADD,i,e))},t.prototype.pop=function(){return this.removeAt(this.getLength()-1)},t.prototype.push=function(e){this.unique_&&this.assertUnique_(e);var i=this.getLength();return this.insertAt(i,e),this.getLength()},t.prototype.remove=function(e){for(var i=this.array_,n=0,a=i.length;n<a;++n)if(i[n]===e)return this.removeAt(n)},t.prototype.removeAt=function(e){var i=this.array_[e];return this.array_.splice(e,1),this.updateLength_(),this.dispatchEvent(new qn(Zr.REMOVE,i,e)),i},t.prototype.setAt=function(e,i){var n=this.getLength();if(e<n){this.unique_&&this.assertUnique_(i,e);var a=this.array_[e];this.array_[e]=i,this.dispatchEvent(new qn(Zr.REMOVE,a,e)),this.dispatchEvent(new qn(Zr.ADD,i,e))}else{for(var o=n;o<e;++o)this.insertAt(o,void 0);this.insertAt(e,i)}},t.prototype.updateLength_=function(){this.set(Gf.LENGTH,this.array_.length)},t.prototype.assertUnique_=function(e,i){for(var n=0,a=this.array_.length;n<a;++n)if(this.array_[n]===e&&n!==i)throw new qp(58)},t}(Ir);const mm=OR;var er="1.3.0",SR=globalThis&&globalThis.__extends||function(){var r=function(t,e){return r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(i,n){i.__proto__=n}||function(i,n){for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(i[a]=n[a])},r(t,e)};return function(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");r(t,e);function i(){this.constructor=t}t.prototype=e===null?Object.create(e):(i.prototype=e.prototype,new i)}}(),IR=function(r){SR(t,r);function t(e,i,n,a,o,s,l){var u=this,h=e.getExtent(),c=i.getExtent(),d=c?Jr(n,c):n,f=or(d),p=Qi(e,i,f,a),v=Uv,m=new Hv(e,i,d,h,p*v,a),_=m.calculateSourceExtent(),g=s(_,p,o),y=g?Z.IDLE:Z.EMPTY,b=g?g.getPixelRatio():1;return u=r.call(this,n,a,b,y)||this,u.targetProj_=i,u.maxSourceExtent_=h,u.triangulation_=m,u.targetResolution_=a,u.targetExtent_=n,u.sourceImage_=g,u.sourcePixelRatio_=b,u.interpolate_=l,u.canvas_=null,u.sourceListenerKey_=null,u}return t.prototype.disposeInternal=function(){this.state==Z.LOADING&&this.unlistenSource_(),r.prototype.disposeInternal.call(this)},t.prototype.getImage=function(){return this.canvas_},t.prototype.getProjection=function(){return this.targetProj_},t.prototype.reproject_=function(){var e=this.sourceImage_.getState();if(e==Z.LOADED){var i=ht(this.targetExtent_)/this.targetResolution_,n=Ft(this.targetExtent_)/this.targetResolution_;this.canvas_=Xv(i,n,this.sourcePixelRatio_,this.sourceImage_.getResolution(),this.maxSourceExtent_,this.targetResolution_,this.targetExtent_,this.triangulation_,[{extent:this.sourceImage_.getExtent(),image:this.sourceImage_.getImage()}],0,void 0,this.interpolate_)}this.state=e,this.changed()},t.prototype.load=function(){if(this.state==Z.IDLE){this.state=Z.LOADING,this.changed();var e=this.sourceImage_.getState();e==Z.LOADED||e==Z.ERROR?this.reproject_():(this.sourceListenerKey_=ve(this.sourceImage_,kt.CHANGE,function(i){var n=this.sourceImage_.getState();(n==Z.LOADED||n==Z.ERROR)&&(this.unlistenSource_(),this.reproject_())},this),this.sourceImage_.load())}},t.prototype.unlistenSource_=function(){ne(this.sourceListenerKey_),this.sourceListenerKey_=null},t}(Vv);const RR=IR;var PR=globalThis&&globalThis.__extends||function(){var r=function(t,e){return r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(i,n){i.__proto__=n}||function(i,n){for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(i[a]=n[a])},r(t,e)};return function(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");r(t,e);function i(){this.constructor=t}t.prototype=e===null?Object.create(e):(i.prototype=e.prototype,new i)}}(),DR=function(r){PR(t,r);function t(e){var i=r.call(this)||this;i.projection=At(e.projection),i.attributions_=Yf(e.attributions),i.attributionsCollapsible_=e.attributionsCollapsible!==void 0?e.attributionsCollapsible:!0,i.loading=!1,i.state_=e.state!==void 0?e.state:es.READY,i.wrapX_=e.wrapX!==void 0?e.wrapX:!1,i.interpolate_=!!e.interpolate,i.viewResolver=null,i.viewRejector=null;var n=i;return i.viewPromise_=new Promise(function(a,o){n.viewResolver=a,n.viewRejector=o}),i}return t.prototype.getAttributions=function(){return this.attributions_},t.prototype.getAttributionsCollapsible=function(){return this.attributionsCollapsible_},t.prototype.getProjection=function(){return this.projection},t.prototype.getResolutions=function(){return J()},t.prototype.getView=function(){return this.viewPromise_},t.prototype.getState=function(){return this.state_},t.prototype.getWrapX=function(){return this.wrapX_},t.prototype.getInterpolate=function(){return this.interpolate_},t.prototype.refresh=function(){this.changed()},t.prototype.setAttributions=function(e){this.attributions_=Yf(e),this.changed()},t.prototype.setState=function(e){this.state_=e,this.changed()},t}(Ir);function Yf(r){return r?Array.isArray(r)?function(t){return r}:typeof r=="function"?r:function(t){return[r]}:null}const ju=DR;var _m=globalThis&&globalThis.__extends||function(){var r=function(t,e){return r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(i,n){i.__proto__=n}||function(i,n){for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(i[a]=n[a])},r(t,e)};return function(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");r(t,e);function i(){this.constructor=t}t.prototype=e===null?Object.create(e):(i.prototype=e.prototype,new i)}}(),Cs={IMAGELOADSTART:"imageloadstart",IMAGELOADEND:"imageloadend",IMAGELOADERROR:"imageloaderror"},kR=function(r){_m(t,r);function t(e,i){var n=r.call(this,e)||this;return n.image=i,n}return t}(Sr),LR=function(r){_m(t,r);function t(e){var i=this,n=e.imageSmoothing!==void 0?e.imageSmoothing:!0;return e.interpolate!==void 0&&(n=e.interpolate),i=r.call(this,{attributions:e.attributions,projection:e.projection,state:e.state,interpolate:n})||this,i.on,i.once,i.un,i.resolutions_=e.resolutions!==void 0?e.resolutions:null,i.reprojectedImage_=null,i.reprojectedRevision_=0,i}return t.prototype.getResolutions=function(){return this.resolutions_},t.prototype.findNearestResolution=function(e){if(this.resolutions_){var i=Ko(this.resolutions_,e,0);e=this.resolutions_[i]}return e},t.prototype.getImage=function(e,i,n,a){var o=this.getProjection();if(!o||!a||Qe(o,a))return o&&(a=o),this.getImageInternal(e,i,n,a);if(this.reprojectedImage_){if(this.reprojectedRevision_==this.getRevision()&&Qe(this.reprojectedImage_.getProjection(),a)&&this.reprojectedImage_.getResolution()==i&&Wo(this.reprojectedImage_.getExtent(),e))return this.reprojectedImage_;this.reprojectedImage_.dispose(),this.reprojectedImage_=null}return this.reprojectedImage_=new RR(o,a,e,i,n,function(s,l,u){return this.getImageInternal(s,l,u,o)}.bind(this),this.getInterpolate()),this.reprojectedRevision_=this.getRevision(),this.reprojectedImage_},t.prototype.getImageInternal=function(e,i,n,a){return J()},t.prototype.handleImageChange=function(e){var i=e.target,n;switch(i.getState()){case Z.LOADING:this.loading=!0,n=Cs.IMAGELOADSTART;break;case Z.LOADED:this.loading=!1,n=Cs.IMAGELOADEND;break;case Z.ERROR:this.loading=!1,n=Cs.IMAGELOADERROR;break;default:return}this.hasListener(n)&&this.dispatchEvent(new kR(n,i))},t}(ju);function FR(r,t){r.getImage().src=t}const $R=LR,rr={CARMENTA_SERVER:"carmentaserver",GEOSERVER:"geoserver",MAPSERVER:"mapserver",QGIS:"qgis"};function Fo(r,t){var e=[];Object.keys(t).forEach(function(n){t[n]!==null&&t[n]!==void 0&&e.push(n+"="+encodeURIComponent(t[n]))});var i=e.join("&");return r=r.replace(/[?&]$/,""),r=r.indexOf("?")===-1?r+"?":r+"&",r+i}var NR=globalThis&&globalThis.__extends||function(){var r=function(t,e){return r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(i,n){i.__proto__=n}||function(i,n){for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(i[a]=n[a])},r(t,e)};return function(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");r(t,e);function i(){this.constructor=t}t.prototype=e===null?Object.create(e):(i.prototype=e.prototype,new i)}}(),qe=4,Uf=[101,101],BR=function(r){NR(t,r);function t(e){var i=this,n=e||{},a=n.imageSmoothing!==void 0?n.imageSmoothing:!0;return n.interpolate!==void 0&&(a=n.interpolate),i=r.call(this,{attributions:n.attributions,interpolate:a,projection:n.projection,resolutions:n.resolutions})||this,i.crossOrigin_=n.crossOrigin!==void 0?n.crossOrigin:null,i.url_=n.url,i.imageLoadFunction_=n.imageLoadFunction!==void 0?n.imageLoadFunction:FR,i.params_=n.params||{},i.v13_=!0,i.updateV13_(),i.serverType_=n.serverType,i.hidpi_=n.hidpi!==void 0?n.hidpi:!0,i.image_=null,i.imageSize_=[0,0],i.renderedRevision_=0,i.ratio_=n.ratio!==void 0?n.ratio:1.5,i}return t.prototype.getFeatureInfoUrl=function(e,i,n,a){if(this.url_!==void 0){var o=At(n),s=this.getProjection();s&&s!==o&&(i=Qi(s,o,e,i),e=vn(e,o,s));var l=Da(e,i,0,Uf),u={SERVICE:"WMS",VERSION:er,REQUEST:"GetFeatureInfo",FORMAT:"image/png",TRANSPARENT:!0,QUERY_LAYERS:this.params_.LAYERS};ct(u,this.params_,a);var h=Ur((e[0]-l[0])/i,qe),c=Ur((l[3]-e[1])/i,qe);return u[this.v13_?"I":"X"]=h,u[this.v13_?"J":"Y"]=c,this.getRequestUrl_(l,Uf,1,s||o,u)}},t.prototype.getLegendUrl=function(e,i){if(this.url_!==void 0){var n={SERVICE:"WMS",VERSION:er,REQUEST:"GetLegendGraphic",FORMAT:"image/png"};if(i===void 0||i.LAYER===void 0){var a=this.params_.LAYERS,o=!Array.isArray(a)||a.length===1;if(!o)return;n.LAYER=a}if(e!==void 0){var s=this.getProjection()?this.getProjection().getMetersPerUnit():1,l=28e-5;n.SCALE=e*s/l}return ct(n,i),Fo(this.url_,n)}},t.prototype.getParams=function(){return this.params_},t.prototype.getImageInternal=function(e,i,n,a){if(this.url_===void 0)return null;i=this.findNearestResolution(i),n!=1&&(!this.hidpi_||this.serverType_===void 0)&&(n=1);var o=i/n,s=or(e),l=Ke(ht(e)/o,qe),u=Ke(Ft(e)/o,qe),h=Da(s,o,0,[l,u]),c=Ke(this.ratio_*ht(e)/o,qe),d=Ke(this.ratio_*Ft(e)/o,qe),f=Da(s,o,0,[c,d]),p=this.image_;if(p&&this.renderedRevision_==this.getRevision()&&p.getResolution()==i&&p.getPixelRatio()==n&&Je(p.getExtent(),h))return p;var v={SERVICE:"WMS",VERSION:er,REQUEST:"GetMap",FORMAT:"image/png",TRANSPARENT:!0};ct(v,this.params_),this.imageSize_[0]=Fd(ht(f)/o,qe),this.imageSize_[1]=Fd(Ft(f)/o,qe);var m=this.getRequestUrl_(f,this.imageSize_,n,a,v);return this.image_=new PS(f,i,n,m,this.crossOrigin_,this.imageLoadFunction_),this.renderedRevision_=this.getRevision(),this.image_.addEventListener(kt.CHANGE,this.handleImageChange.bind(this)),this.image_},t.prototype.getImageLoadFunction=function(){return this.imageLoadFunction_},t.prototype.getRequestUrl_=function(e,i,n,a,o){if(et(this.url_!==void 0,9),o[this.v13_?"CRS":"SRS"]=a.getCode(),"STYLES"in this.params_||(o.STYLES=""),n!=1)switch(this.serverType_){case rr.GEOSERVER:var s=90*n+.5|0;"FORMAT_OPTIONS"in o?o.FORMAT_OPTIONS+=";dpi:"+s:o.FORMAT_OPTIONS="dpi:"+s;break;case rr.MAPSERVER:o.MAP_RESOLUTION=90*n;break;case rr.CARMENTA_SERVER:case rr.QGIS:o.DPI=90*n;break;default:et(!1,8);break}o.WIDTH=i[0],o.HEIGHT=i[1];var l=a.getAxisOrientation(),u;return this.v13_&&l.substr(0,2)=="ne"?u=[e[1],e[0],e[3],e[2]]:u=e,o.BBOX=u.join(","),Fo(this.url_,o)},t.prototype.getUrl=function(){return this.url_},t.prototype.setImageLoadFunction=function(e){this.image_=null,this.imageLoadFunction_=e,this.changed()},t.prototype.setUrl=function(e){e!=this.url_&&(this.url_=e,this.image_=null,this.changed())},t.prototype.updateParams=function(e){ct(this.params_,e),this.updateV13_(),this.image_=null,this.changed()},t.prototype.updateV13_=function(){var e=this.params_.VERSION||er;this.v13_=Kp(e,"1.3")>=0},t}($R);const zR=BR;var GR=function(){function r(t){this.highWaterMark=t!==void 0?t:2048,this.count_=0,this.entries_={},this.oldest_=null,this.newest_=null}return r.prototype.canExpireCache=function(){return this.highWaterMark>0&&this.getCount()>this.highWaterMark},r.prototype.expireCache=function(t){for(;this.canExpireCache();)this.pop()},r.prototype.clear=function(){this.count_=0,this.entries_={},this.oldest_=null,this.newest_=null},r.prototype.containsKey=function(t){return this.entries_.hasOwnProperty(t)},r.prototype.forEach=function(t){for(var e=this.oldest_;e;)t(e.value_,e.key_,this),e=e.newer},r.prototype.get=function(t,e){var i=this.entries_[t];return et(i!==void 0,15),i===this.newest_||(i===this.oldest_?(this.oldest_=this.oldest_.newer,this.oldest_.older=null):(i.newer.older=i.older,i.older.newer=i.newer),i.newer=null,i.older=this.newest_,this.newest_.newer=i,this.newest_=i),i.value_},r.prototype.remove=function(t){var e=this.entries_[t];return et(e!==void 0,15),e===this.newest_?(this.newest_=e.older,this.newest_&&(this.newest_.newer=null)):e===this.oldest_?(this.oldest_=e.newer,this.oldest_&&(this.oldest_.older=null)):(e.newer.older=e.older,e.older.newer=e.newer),delete this.entries_[t],--this.count_,e.value_},r.prototype.getCount=function(){return this.count_},r.prototype.getKeys=function(){var t=new Array(this.count_),e=0,i;for(i=this.newest_;i;i=i.older)t[e++]=i.key_;return t},r.prototype.getValues=function(){var t=new Array(this.count_),e=0,i;for(i=this.newest_;i;i=i.older)t[e++]=i.value_;return t},r.prototype.peekLast=function(){return this.oldest_.value_},r.prototype.peekLastKey=function(){return this.oldest_.key_},r.prototype.peekFirstKey=function(){return this.newest_.key_},r.prototype.pop=function(){var t=this.oldest_;return delete this.entries_[t.key_],t.newer&&(t.newer.older=null),this.oldest_=t.newer,this.oldest_||(this.newest_=null),--this.count_,t.value_},r.prototype.replace=function(t,e){this.get(t),this.entries_[t].value_=e},r.prototype.set=function(t,e){et(!(t in this.entries_),16);var i={key_:t,newer:null,older:this.newest_,value_:e};this.newest_?this.newest_.newer=i:this.oldest_=i,this.newest_=i,this.entries_[t]=i,++this.count_},r.prototype.setSize=function(t){this.highWaterMark=t},r}();const YR=GR;function jf(r,t,e,i){return i!==void 0?(i[0]=r,i[1]=t,i[2]=e,i):[r,t,e]}function rs(r,t,e){return r+"/"+t+"/"+e}function gm(r){return rs(r[0],r[1],r[2])}function UR(r){return r.split("/").map(Number)}function ym(r){return(r[1]<<r[0])+r[2]}function jR(r,t){var e=r[0],i=r[1],n=r[2];if(t.getMinZoom()>e||e>t.getMaxZoom())return!1;var a=t.getFullTileRange(e);return a?a.containsXY(i,n):!0}var WR=globalThis&&globalThis.__extends||function(){var r=function(t,e){return r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(i,n){i.__proto__=n}||function(i,n){for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(i[a]=n[a])},r(t,e)};return function(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");r(t,e);function i(){this.constructor=t}t.prototype=e===null?Object.create(e):(i.prototype=e.prototype,new i)}}(),VR=function(r){WR(t,r);function t(){return r!==null&&r.apply(this,arguments)||this}return t.prototype.expireCache=function(e){for(;this.canExpireCache();){var i=this.peekLast();if(i.getKey()in e)break;this.pop().release()}},t.prototype.pruneExceptNewestZ=function(){if(this.getCount()!==0){var e=this.peekFirstKey(),i=UR(e),n=i[0];this.forEach(function(a){a.tileCoord[0]!==n&&(this.remove(gm(a.tileCoord)),a.release())}.bind(this))}},t}(YR);const bm=VR,Ts={TILELOADSTART:"tileloadstart",TILELOADEND:"tileloadend",TILELOADERROR:"tileloaderror"};var qR=[0,0,0],He=5,HR=function(){function r(t){this.minZoom=t.minZoom!==void 0?t.minZoom:0,this.resolutions_=t.resolutions,et(zM(this.resolutions_,function(o,s){return s-o},!0),17);var e;if(!t.origins){for(var i=0,n=this.resolutions_.length-1;i<n;++i)if(!e)e=this.resolutions_[i]/this.resolutions_[i+1];else if(this.resolutions_[i]/this.resolutions_[i+1]!==e){e=void 0;break}}this.zoomFactor_=e,this.maxZoom=this.resolutions_.length-1,this.origin_=t.origin!==void 0?t.origin:null,this.origins_=null,t.origins!==void 0&&(this.origins_=t.origins,et(this.origins_.length==this.resolutions_.length,20));var a=t.extent;a!==void 0&&!this.origin_&&!this.origins_&&(this.origin_=Or(a)),et(!this.origin_&&this.origins_||this.origin_&&!this.origins_,18),this.tileSizes_=null,t.tileSizes!==void 0&&(this.tileSizes_=t.tileSizes,et(this.tileSizes_.length==this.resolutions_.length,19)),this.tileSize_=t.tileSize!==void 0?t.tileSize:this.tileSizes_?null:$u,et(!this.tileSize_&&this.tileSizes_||this.tileSize_&&!this.tileSizes_,22),this.extent_=a!==void 0?a:null,this.fullTileRanges_=null,this.tmpSize_=[0,0],this.tmpExtent_=[0,0,0,0],t.sizes!==void 0?this.fullTileRanges_=t.sizes.map(function(o,s){var l=new Kv(Math.min(0,o[0]),Math.max(o[0]-1,-1),Math.min(0,o[1]),Math.max(o[1]-1,-1));if(a){var u=this.getTileRangeForExtentAndZ(a,s);l.minX=Math.max(u.minX,l.minX),l.maxX=Math.min(u.maxX,l.maxX),l.minY=Math.max(u.minY,l.minY),l.maxY=Math.min(u.maxY,l.maxY)}return l},this):a&&this.calculateTileRanges_(a)}return r.prototype.forEachTileCoord=function(t,e,i){for(var n=this.getTileRangeForExtentAndZ(t,e),a=n.minX,o=n.maxX;a<=o;++a)for(var s=n.minY,l=n.maxY;s<=l;++s)i([e,a,s])},r.prototype.forEachTileCoordParentTileRange=function(t,e,i,n){var a,o,s,l=null,u=t[0]-1;for(this.zoomFactor_===2?(o=t[1],s=t[2]):l=this.getTileCoordExtent(t,n);u>=this.minZoom;){if(this.zoomFactor_===2?(o=Math.floor(o/2),s=Math.floor(s/2),a=$r(o,o,s,s,i)):a=this.getTileRangeForExtentAndZ(l,u,i),e(u,a))return!0;--u}return!1},r.prototype.getExtent=function(){return this.extent_},r.prototype.getMaxZoom=function(){return this.maxZoom},r.prototype.getMinZoom=function(){return this.minZoom},r.prototype.getOrigin=function(t){return this.origin_?this.origin_:this.origins_[t]},r.prototype.getResolution=function(t){return this.resolutions_[t]},r.prototype.getResolutions=function(){return this.resolutions_},r.prototype.getTileCoordChildTileRange=function(t,e,i){if(t[0]<this.maxZoom){if(this.zoomFactor_===2){var n=t[1]*2,a=t[2]*2;return $r(n,n+1,a,a+1,e)}var o=this.getTileCoordExtent(t,i||this.tmpExtent_);return this.getTileRangeForExtentAndZ(o,t[0]+1,e)}return null},r.prototype.getTileRangeForTileCoordAndZ=function(t,e,i){if(e>this.maxZoom||e<this.minZoom)return null;var n=t[0],a=t[1],o=t[2];if(e===n)return $r(a,o,a,o,i);if(this.zoomFactor_){var s=Math.pow(this.zoomFactor_,e-n),l=Math.floor(a*s),u=Math.floor(o*s);if(e<n)return $r(l,l,u,u,i);var h=Math.floor(s*(a+1))-1,c=Math.floor(s*(o+1))-1;return $r(l,h,u,c,i)}var d=this.getTileCoordExtent(t,this.tmpExtent_);return this.getTileRangeForExtentAndZ(d,e,i)},r.prototype.getTileRangeExtent=function(t,e,i){var n=this.getOrigin(t),a=this.getResolution(t),o=Qt(this.getTileSize(t),this.tmpSize_),s=n[0]+e.minX*o[0]*a,l=n[0]+(e.maxX+1)*o[0]*a,u=n[1]+e.minY*o[1]*a,h=n[1]+(e.maxY+1)*o[1]*a;return Ce(s,u,l,h,i)},r.prototype.getTileRangeForExtentAndZ=function(t,e,i){var n=qR;this.getTileCoordForXYAndZ_(t[0],t[3],e,!1,n);var a=n[1],o=n[2];return this.getTileCoordForXYAndZ_(t[2],t[1],e,!0,n),$r(a,n[1],o,n[2],i)},r.prototype.getTileCoordCenter=function(t){var e=this.getOrigin(t[0]),i=this.getResolution(t[0]),n=Qt(this.getTileSize(t[0]),this.tmpSize_);return[e[0]+(t[1]+.5)*n[0]*i,e[1]-(t[2]+.5)*n[1]*i]},r.prototype.getTileCoordExtent=function(t,e){var i=this.getOrigin(t[0]),n=this.getResolution(t[0]),a=Qt(this.getTileSize(t[0]),this.tmpSize_),o=i[0]+t[1]*a[0]*n,s=i[1]-(t[2]+1)*a[1]*n,l=o+a[0]*n,u=s+a[1]*n;return Ce(o,s,l,u,e)},r.prototype.getTileCoordForCoordAndResolution=function(t,e,i){return this.getTileCoordForXYAndResolution_(t[0],t[1],e,!1,i)},r.prototype.getTileCoordForXYAndResolution_=function(t,e,i,n,a){var o=this.getZForResolution(i),s=i/this.getResolution(o),l=this.getOrigin(o),u=Qt(this.getTileSize(o),this.tmpSize_),h=s*(t-l[0])/i/u[0],c=s*(l[1]-e)/i/u[1];return n?(h=Ke(h,He)-1,c=Ke(c,He)-1):(h=Ur(h,He),c=Ur(c,He)),jf(o,h,c,a)},r.prototype.getTileCoordForXYAndZ_=function(t,e,i,n,a){var o=this.getOrigin(i),s=this.getResolution(i),l=Qt(this.getTileSize(i),this.tmpSize_),u=(t-o[0])/s/l[0],h=(o[1]-e)/s/l[1];return n?(u=Ke(u,He)-1,h=Ke(h,He)-1):(u=Ur(u,He),h=Ur(h,He)),jf(i,u,h,a)},r.prototype.getTileCoordForCoordAndZ=function(t,e,i){return this.getTileCoordForXYAndZ_(t[0],t[1],e,!1,i)},r.prototype.getTileCoordResolution=function(t){return this.resolutions_[t[0]]},r.prototype.getTileSize=function(t){return this.tileSize_?this.tileSize_:this.tileSizes_[t]},r.prototype.getFullTileRange=function(t){return this.fullTileRanges_?this.fullTileRanges_[t]:this.extent_?this.getTileRangeForExtentAndZ(this.extent_,t):null},r.prototype.getZForResolution=function(t,e){var i=Ko(this.resolutions_,t,e||0);return xt(i,this.minZoom,this.maxZoom)},r.prototype.calculateTileRanges_=function(t){for(var e=this.resolutions_.length,i=new Array(e),n=this.minZoom;n<e;++n)i[n]=this.getTileRangeForExtentAndZ(t,n);this.fullTileRanges_=i},r}();const wm=HR;function xm(r){var t=r.getDefaultTileGrid();return t||(t=KR(r),r.setDefaultTileGrid(t)),t}function XR(r,t,e){var i=t[0],n=r.getTileCoordCenter(t),a=Wu(e);if(pi(a,n))return t;var o=ht(a),s=Math.ceil((a[0]-n[0])/o);return n[0]+=o*s,r.getTileCoordForCoordAndZ(n,i)}function ZR(r,t,e,i){var n=i!==void 0?i:Di.TOP_LEFT,a=Am(r,t,e);return new wm({extent:r,origin:Yx(r,n),resolutions:a,tileSize:e})}function QR(r){var t=r||{},e=t.extent||At("EPSG:3857").getExtent(),i={extent:e,minZoom:t.minZoom,tileSize:t.tileSize,resolutions:Am(e,t.maxZoom,t.tileSize,t.maxResolution)};return new wm(i)}function Am(r,t,e,i){for(var n=t!==void 0?t:mO,a=Ft(r),o=ht(r),s=Qt(e!==void 0?e:$u),l=i>0?i:Math.max(o/s[0],a/s[1]),u=n+1,h=new Array(u),c=0;c<u;++c)h[c]=l/Math.pow(2,c);return h}function KR(r,t,e,i){var n=Wu(r);return ZR(n,t,e,i)}function Wu(r){r=At(r);var t=r.getExtent();if(!t){var e=180*ae[Fe.DEGREES]/r.getMetersPerUnit();t=Ce(-e,-e,e,e)}return t}var Em=globalThis&&globalThis.__extends||function(){var r=function(t,e){return r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(i,n){i.__proto__=n}||function(i,n){for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(i[a]=n[a])},r(t,e)};return function(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");r(t,e);function i(){this.constructor=t}t.prototype=e===null?Object.create(e):(i.prototype=e.prototype,new i)}}(),JR=function(r){Em(t,r);function t(e){var i=r.call(this,{attributions:e.attributions,attributionsCollapsible:e.attributionsCollapsible,projection:e.projection,state:e.state,wrapX:e.wrapX,interpolate:e.interpolate})||this;i.on,i.once,i.un,i.opaque_=e.opaque!==void 0?e.opaque:!1,i.tilePixelRatio_=e.tilePixelRatio!==void 0?e.tilePixelRatio:1,i.tileGrid=e.tileGrid!==void 0?e.tileGrid:null;var n=[256,256];return i.tileGrid&&Qt(i.tileGrid.getTileSize(i.tileGrid.getMinZoom()),n),i.tileCache=new bm(e.cacheSize||0),i.tmpSize=[0,0],i.key_=e.key||"",i.tileOptions={transition:e.transition,interpolate:e.interpolate},i.zDirection=e.zDirection?e.zDirection:0,i}return t.prototype.canExpireCache=function(){return this.tileCache.canExpireCache()},t.prototype.expireCache=function(e,i){var n=this.getTileCacheForProjection(e);n&&n.expireCache(i)},t.prototype.forEachLoadedTile=function(e,i,n,a){var o=this.getTileCacheForProjection(e);if(!o)return!1;for(var s=!0,l,u,h,c=n.minX;c<=n.maxX;++c)for(var d=n.minY;d<=n.maxY;++d)u=rs(i,c,d),h=!1,o.containsKey(u)&&(l=o.get(u),h=l.getState()===W.LOADED,h&&(h=a(l)!==!1)),h||(s=!1);return s},t.prototype.getGutterForProjection=function(e){return 0},t.prototype.getKey=function(){return this.key_},t.prototype.setKey=function(e){this.key_!==e&&(this.key_=e,this.changed())},t.prototype.getOpaque=function(e){return this.opaque_},t.prototype.getResolutions=function(){return this.tileGrid?this.tileGrid.getResolutions():null},t.prototype.getTile=function(e,i,n,a,o){return J()},t.prototype.getTileGrid=function(){return this.tileGrid},t.prototype.getTileGridForProjection=function(e){return this.tileGrid?this.tileGrid:xm(e)},t.prototype.getTileCacheForProjection=function(e){return et(Qe(this.getProjection(),e),68),this.tileCache},t.prototype.getTilePixelRatio=function(e){return this.tilePixelRatio_},t.prototype.getTilePixelSize=function(e,i,n){var a=this.getTileGridForProjection(n),o=this.getTilePixelRatio(i),s=Qt(a.getTileSize(e),this.tmpSize);return o==1?s:em(s,o,this.tmpSize)},t.prototype.getTileCoordForTileUrlFunction=function(e,i){var n=i!==void 0?i:this.getProjection(),a=this.getTileGridForProjection(n);return this.getWrapX()&&n.isGlobal()&&(e=XR(a,e,n)),jR(e,a)?e:null},t.prototype.clear=function(){this.tileCache.clear()},t.prototype.refresh=function(){this.clear(),r.prototype.refresh.call(this)},t.prototype.updateCacheSize=function(e,i){var n=this.getTileCacheForProjection(i);e>n.highWaterMark&&(n.highWaterMark=e)},t.prototype.useTile=function(e,i,n,a){},t}(ju),tP=function(r){Em(t,r);function t(e,i){var n=r.call(this,e)||this;return n.tile=i,n}return t}(Sr);const eP=JR;function rP(r,t){var e=/\{z\}/g,i=/\{x\}/g,n=/\{y\}/g,a=/\{-y\}/g;return function(o,s,l){if(o)return r.replace(e,o[0].toString()).replace(i,o[1].toString()).replace(n,o[2].toString()).replace(a,function(){var u=o[0],h=t.getFullTileRange(u);et(h,55);var c=h.getHeight()-o[2]-1;return c.toString()})}}function iP(r,t){for(var e=r.length,i=new Array(e),n=0;n<e;++n)i[n]=rP(r[n],t);return nP(i)}function nP(r){return r.length===1?r[0]:function(t,e,i){if(t){var n=ym(t),a=Ar(n,r.length);return r[a](t,e,i)}else return}}function aP(r){var t=[],e=/\{([a-z])-([a-z])\}/.exec(r);if(e){var i=e[1].charCodeAt(0),n=e[2].charCodeAt(0),a=void 0;for(a=i;a<=n;++a)t.push(r.replace(e[0],String.fromCharCode(a)));return t}if(e=/\{(\d+)-(\d+)\}/.exec(r),e){for(var o=parseInt(e[2],10),s=parseInt(e[1],10);s<=o;s++)t.push(r.replace(e[0],s.toString()));return t}return t.push(r),t}var oP=globalThis&&globalThis.__extends||function(){var r=function(t,e){return r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(i,n){i.__proto__=n}||function(i,n){for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(i[a]=n[a])},r(t,e)};return function(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");r(t,e);function i(){this.constructor=t}t.prototype=e===null?Object.create(e):(i.prototype=e.prototype,new i)}}(),sP=function(r){oP(t,r);function t(e){var i=r.call(this,{attributions:e.attributions,cacheSize:e.cacheSize,opaque:e.opaque,projection:e.projection,state:e.state,tileGrid:e.tileGrid,tilePixelRatio:e.tilePixelRatio,wrapX:e.wrapX,transition:e.transition,interpolate:e.interpolate,key:e.key,attributionsCollapsible:e.attributionsCollapsible,zDirection:e.zDirection})||this;return i.generateTileUrlFunction_=i.tileUrlFunction===t.prototype.tileUrlFunction,i.tileLoadFunction=e.tileLoadFunction,e.tileUrlFunction&&(i.tileUrlFunction=e.tileUrlFunction),i.urls=null,e.urls?i.setUrls(e.urls):e.url&&i.setUrl(e.url),i.tileLoadingKeys_={},i}return t.prototype.getTileLoadFunction=function(){return this.tileLoadFunction},t.prototype.getTileUrlFunction=function(){return Object.getPrototypeOf(this).tileUrlFunction===this.tileUrlFunction?this.tileUrlFunction.bind(this):this.tileUrlFunction},t.prototype.getUrls=function(){return this.urls},t.prototype.handleTileChange=function(e){var i=e.target,n=ut(i),a=i.getState(),o;a==W.LOADING?(this.tileLoadingKeys_[n]=!0,o=Ts.TILELOADSTART):n in this.tileLoadingKeys_&&(delete this.tileLoadingKeys_[n],o=a==W.ERROR?Ts.TILELOADERROR:a==W.LOADED?Ts.TILELOADEND:void 0),o!=null&&this.dispatchEvent(new tP(o,i))},t.prototype.setTileLoadFunction=function(e){this.tileCache.clear(),this.tileLoadFunction=e,this.changed()},t.prototype.setTileUrlFunction=function(e,i){this.tileUrlFunction=e,this.tileCache.pruneExceptNewestZ(),typeof i<"u"?this.setKey(i):this.changed()},t.prototype.setUrl=function(e){var i=aP(e);this.urls=i,this.setUrls(i)},t.prototype.setUrls=function(e){this.urls=e;var i=e.join(`
`);this.generateTileUrlFunction_?this.setTileUrlFunction(iP(e,this.tileGrid),i):this.setKey(i)},t.prototype.tileUrlFunction=function(e,i,n){},t.prototype.useTile=function(e,i,n){var a=rs(e,i,n);this.tileCache.containsKey(a)&&this.tileCache.get(a)},t}(eP);const lP=sP;var uP=globalThis&&globalThis.__extends||function(){var r=function(t,e){return r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(i,n){i.__proto__=n}||function(i,n){for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(i[a]=n[a])},r(t,e)};return function(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");r(t,e);function i(){this.constructor=t}t.prototype=e===null?Object.create(e):(i.prototype=e.prototype,new i)}}(),hP=function(r){uP(t,r);function t(e){var i=this,n=e.imageSmoothing!==void 0?e.imageSmoothing:!0;return e.interpolate!==void 0&&(n=e.interpolate),i=r.call(this,{attributions:e.attributions,cacheSize:e.cacheSize,opaque:e.opaque,projection:e.projection,state:e.state,tileGrid:e.tileGrid,tileLoadFunction:e.tileLoadFunction?e.tileLoadFunction:cP,tilePixelRatio:e.tilePixelRatio,tileUrlFunction:e.tileUrlFunction,url:e.url,urls:e.urls,wrapX:e.wrapX,transition:e.transition,interpolate:n,key:e.key,attributionsCollapsible:e.attributionsCollapsible,zDirection:e.zDirection})||this,i.crossOrigin=e.crossOrigin!==void 0?e.crossOrigin:null,i.tileClass=e.tileClass!==void 0?e.tileClass:qv,i.tileCacheForProjection={},i.tileGridForProjection={},i.reprojectionErrorThreshold_=e.reprojectionErrorThreshold,i.renderReprojectionEdges_=!1,i}return t.prototype.canExpireCache=function(){if(this.tileCache.canExpireCache())return!0;for(var e in this.tileCacheForProjection)if(this.tileCacheForProjection[e].canExpireCache())return!0;return!1},t.prototype.expireCache=function(e,i){var n=this.getTileCacheForProjection(e);this.tileCache.expireCache(this.tileCache==n?i:{});for(var a in this.tileCacheForProjection){var o=this.tileCacheForProjection[a];o.expireCache(o==n?i:{})}},t.prototype.getGutterForProjection=function(e){return this.getProjection()&&e&&!Qe(this.getProjection(),e)?0:this.getGutter()},t.prototype.getGutter=function(){return 0},t.prototype.getKey=function(){var e=r.prototype.getKey.call(this);return this.getInterpolate()||(e+=":disable-interpolation"),e},t.prototype.getOpaque=function(e){return this.getProjection()&&e&&!Qe(this.getProjection(),e)?!1:r.prototype.getOpaque.call(this,e)},t.prototype.getTileGridForProjection=function(e){var i=this.getProjection();if(this.tileGrid&&(!i||Qe(i,e)))return this.tileGrid;var n=ut(e);return n in this.tileGridForProjection||(this.tileGridForProjection[n]=xm(e)),this.tileGridForProjection[n]},t.prototype.getTileCacheForProjection=function(e){var i=this.getProjection();if(!i||Qe(i,e))return this.tileCache;var n=ut(e);return n in this.tileCacheForProjection||(this.tileCacheForProjection[n]=new bm(this.tileCache.highWaterMark)),this.tileCacheForProjection[n]},t.prototype.createTile_=function(e,i,n,a,o,s){var l=[e,i,n],u=this.getTileCoordForTileUrlFunction(l,o),h=u?this.tileUrlFunction(u,a,o):void 0,c=new this.tileClass(l,h!==void 0?W.IDLE:W.EMPTY,h!==void 0?h:"",this.crossOrigin,this.tileLoadFunction,this.tileOptions);return c.key=s,c.addEventListener(kt.CHANGE,this.handleTileChange.bind(this)),c},t.prototype.getTile=function(e,i,n,a,o){var s=this.getProjection();if(!s||!o||Qe(s,o))return this.getTileInternal(e,i,n,a,s||o);var l=this.getTileCacheForProjection(o),u=[e,i,n],h=void 0,c=gm(u);l.containsKey(c)&&(h=l.get(c));var d=this.getKey();if(h&&h.key==d)return h;var f=this.getTileGridForProjection(s),p=this.getTileGridForProjection(o),v=this.getTileCoordForTileUrlFunction(u,o),m=new Zv(s,f,o,p,u,v,this.getTilePixelRatio(a),this.getGutter(),function(_,g,y,b){return this.getTileInternal(_,g,y,b,s)}.bind(this),this.reprojectionErrorThreshold_,this.renderReprojectionEdges_,this.getInterpolate());return m.key=d,h?(m.interimTile=h,m.refreshInterimChain(),l.replace(c,m)):l.set(c,m),m},t.prototype.getTileInternal=function(e,i,n,a,o){var s=null,l=rs(e,i,n),u=this.getKey();if(!this.tileCache.containsKey(l))s=this.createTile_(e,i,n,a,o,u),this.tileCache.set(l,s);else if(s=this.tileCache.get(l),s.key!=u){var h=s;s=this.createTile_(e,i,n,a,o,u),h.getState()==W.IDLE?s.interimTile=h.interimTile:s.interimTile=h,s.refreshInterimChain(),this.tileCache.replace(l,s)}return s},t.prototype.setRenderReprojectionEdges=function(e){if(this.renderReprojectionEdges_!=e){this.renderReprojectionEdges_=e;for(var i in this.tileCacheForProjection)this.tileCacheForProjection[i].clear();this.changed()}},t.prototype.setTileGridForProjection=function(e,i){{var n=At(e);if(n){var a=ut(n);a in this.tileGridForProjection||(this.tileGridForProjection[a]=i)}}},t}(lP);function cP(r,t){r.getImage().src=t}const Cm=hP;var dP=globalThis&&globalThis.__extends||function(){var r=function(t,e){return r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(i,n){i.__proto__=n}||function(i,n){for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(i[a]=n[a])},r(t,e)};return function(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");r(t,e);function i(){this.constructor=t}t.prototype=e===null?Object.create(e):(i.prototype=e.prototype,new i)}}(),fP=function(r){dP(t,r);function t(e){var i=e||{},n=i.imageSmoothing!==void 0?i.imageSmoothing:!0;i.interpolate!==void 0&&(n=i.interpolate);var a=i.projection!==void 0?i.projection:"EPSG:3857",o=i.tileGrid!==void 0?i.tileGrid:QR({extent:Wu(a),maxResolution:i.maxResolution,maxZoom:i.maxZoom,minZoom:i.minZoom,tileSize:i.tileSize});return r.call(this,{attributions:i.attributions,cacheSize:i.cacheSize,crossOrigin:i.crossOrigin,interpolate:n,opaque:i.opaque,projection:a,reprojectionErrorThreshold:i.reprojectionErrorThreshold,tileGrid:o,tileLoadFunction:i.tileLoadFunction,tilePixelRatio:i.tilePixelRatio,tileUrlFunction:i.tileUrlFunction,url:i.url,urls:i.urls,wrapX:i.wrapX!==void 0?i.wrapX:!0,transition:i.transition,attributionsCollapsible:i.attributionsCollapsible,zDirection:i.zDirection})||this}return t}(Cm);const Tm=fP;var pP=globalThis&&globalThis.__extends||function(){var r=function(t,e){return r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(i,n){i.__proto__=n}||function(i,n){for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(i[a]=n[a])},r(t,e)};return function(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");r(t,e);function i(){this.constructor=t}t.prototype=e===null?Object.create(e):(i.prototype=e.prototype,new i)}}(),Mm='&#169; <a href="https://www.openstreetmap.org/copyright" target="_blank">OpenStreetMap</a> contributors.',vP=function(r){pP(t,r);function t(e){var i=e||{},n=i.imageSmoothing!==void 0?i.imageSmoothing:!0;i.interpolate!==void 0&&(n=i.interpolate);var a;i.attributions!==void 0?a=i.attributions:a=[Mm];var o=i.crossOrigin!==void 0?i.crossOrigin:"anonymous",s=i.url!==void 0?i.url:"https://{a-c}.tile.openstreetmap.org/{z}/{x}/{y}.png";return r.call(this,{attributions:a,attributionsCollapsible:!1,cacheSize:i.cacheSize,crossOrigin:o,interpolate:n,maxZoom:i.maxZoom!==void 0?i.maxZoom:19,opaque:i.opaque!==void 0?i.opaque:!0,reprojectionErrorThreshold:i.reprojectionErrorThreshold,tileLoadFunction:i.tileLoadFunction,transition:i.transition,url:s,wrapX:i.wrapX,zDirection:i.zDirection})||this}return t}(Tm);const mP=vP;var _P=globalThis&&globalThis.__extends||function(){var r=function(t,e){return r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(i,n){i.__proto__=n}||function(i,n){for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(i[a]=n[a])},r(t,e)};return function(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");r(t,e);function i(){this.constructor=t}t.prototype=e===null?Object.create(e):(i.prototype=e.prototype,new i)}}(),gP=function(r){_P(t,r);function t(e){var i=this,n=e||{},a=n.imageSmoothing!==void 0?n.imageSmoothing:!0;n.interpolate!==void 0&&(a=n.interpolate);var o=n.params||{},s="TRANSPARENT"in o?o.TRANSPARENT:!0;return i=r.call(this,{attributions:n.attributions,attributionsCollapsible:n.attributionsCollapsible,cacheSize:n.cacheSize,crossOrigin:n.crossOrigin,interpolate:a,opaque:!s,projection:n.projection,reprojectionErrorThreshold:n.reprojectionErrorThreshold,tileClass:n.tileClass,tileGrid:n.tileGrid,tileLoadFunction:n.tileLoadFunction,url:n.url,urls:n.urls,wrapX:n.wrapX!==void 0?n.wrapX:!0,transition:n.transition,zDirection:n.zDirection})||this,i.gutter_=n.gutter!==void 0?n.gutter:0,i.params_=o,i.v13_=!0,i.serverType_=n.serverType,i.hidpi_=n.hidpi!==void 0?n.hidpi:!0,i.tmpExtent_=oe(),i.updateV13_(),i.setKey(i.getKeyForParams_()),i}return t.prototype.getFeatureInfoUrl=function(e,i,n,a){var o=At(n),s=this.getProjection(),l=this.getTileGrid();l||(l=this.getTileGridForProjection(o));var u=l.getZForResolution(i,this.zDirection),h=l.getTileCoordForCoordAndZ(e,u);if(!(l.getResolutions().length<=h[0])){var c=l.getResolution(h[0]),d=l.getTileCoordExtent(h,this.tmpExtent_),f=Qt(l.getTileSize(h[0]),this.tmpSize),p=this.gutter_;p!==0&&(f=Mf(f,p,this.tmpSize),d=Wi(d,c*p,d)),s&&s!==o&&(c=Qi(s,o,e,c),d=Ou(d,o,s),e=vn(e,o,s));var v={SERVICE:"WMS",VERSION:er,REQUEST:"GetFeatureInfo",FORMAT:"image/png",TRANSPARENT:!0,QUERY_LAYERS:this.params_.LAYERS};ct(v,this.params_,a);var m=Math.floor((e[0]-d[0])/c),_=Math.floor((d[3]-e[1])/c);return v[this.v13_?"I":"X"]=m,v[this.v13_?"J":"Y"]=_,this.getRequestUrl_(h,f,d,1,s||o,v)}},t.prototype.getLegendUrl=function(e,i){if(this.urls[0]!==void 0){var n={SERVICE:"WMS",VERSION:er,REQUEST:"GetLegendGraphic",FORMAT:"image/png"};if(i===void 0||i.LAYER===void 0){var a=this.params_.LAYERS,o=!Array.isArray(a)||a.length===1;if(!o)return;n.LAYER=a}if(e!==void 0){var s=this.getProjection()?this.getProjection().getMetersPerUnit():1,l=28e-5;n.SCALE=e*s/l}return ct(n,i),Fo(this.urls[0],n)}},t.prototype.getGutter=function(){return this.gutter_},t.prototype.getParams=function(){return this.params_},t.prototype.getRequestUrl_=function(e,i,n,a,o,s){var l=this.urls;if(l){if(s.WIDTH=i[0],s.HEIGHT=i[1],s[this.v13_?"CRS":"SRS"]=o.getCode(),"STYLES"in this.params_||(s.STYLES=""),a!=1)switch(this.serverType_){case rr.GEOSERVER:var u=90*a+.5|0;"FORMAT_OPTIONS"in s?s.FORMAT_OPTIONS+=";dpi:"+u:s.FORMAT_OPTIONS="dpi:"+u;break;case rr.MAPSERVER:s.MAP_RESOLUTION=90*a;break;case rr.CARMENTA_SERVER:case rr.QGIS:s.DPI=90*a;break;default:et(!1,52);break}var h=o.getAxisOrientation(),c=n;if(this.v13_&&h.substr(0,2)=="ne"){var d=void 0;d=n[0],c[0]=n[1],c[1]=d,d=n[2],c[2]=n[3],c[3]=d}s.BBOX=c.join(",");var f;if(l.length==1)f=l[0];else{var p=Ar(ym(e),l.length);f=l[p]}return Fo(f,s)}},t.prototype.getTilePixelRatio=function(e){return!this.hidpi_||this.serverType_===void 0?1:e},t.prototype.getKeyForParams_=function(){var e=0,i=[];for(var n in this.params_)i[e++]=n+"-"+this.params_[n];return i.join("/")},t.prototype.updateParams=function(e){ct(this.params_,e),this.updateV13_(),this.setKey(this.getKeyForParams_())},t.prototype.updateV13_=function(){var e=this.params_.VERSION||er;this.v13_=Kp(e,"1.3")>=0},t.prototype.tileUrlFunction=function(e,i,n){var a=this.getTileGrid();if(a||(a=this.getTileGridForProjection(n)),!(a.getResolutions().length<=e[0])){i!=1&&(!this.hidpi_||this.serverType_===void 0)&&(i=1);var o=a.getResolution(e[0]),s=a.getTileCoordExtent(e,this.tmpExtent_),l=Qt(a.getTileSize(e[0]),this.tmpSize),u=this.gutter_;u!==0&&(l=Mf(l,u,this.tmpSize),s=Wi(s,o*u,s)),i!=1&&(l=em(l,i,this.tmpSize));var h={SERVICE:"WMS",VERSION:er,REQUEST:"GetMap",FORMAT:"image/png",TRANSPARENT:!0};return ct(h,this.params_),this.getRequestUrl_(e,l,s,i,n,h)}},t}(Cm);const yP=gP;var bP=function(){function r(t){this.rbush_=new im(t),this.items_={}}return r.prototype.insert=function(t,e){var i={minX:t[0],minY:t[1],maxX:t[2],maxY:t[3],value:e};this.rbush_.insert(i),this.items_[ut(e)]=i},r.prototype.load=function(t,e){for(var i=new Array(e.length),n=0,a=e.length;n<a;n++){var o=t[n],s=e[n],l={minX:o[0],minY:o[1],maxX:o[2],maxY:o[3],value:s};i[n]=l,this.items_[ut(s)]=l}this.rbush_.load(i)},r.prototype.remove=function(t){var e=ut(t),i=this.items_[e];return delete this.items_[e],this.rbush_.remove(i)!==null},r.prototype.update=function(t,e){var i=this.items_[ut(e)],n=[i.minX,i.minY,i.maxX,i.maxY];Wo(n,t)||(this.remove(e),this.insert(t,e))},r.prototype.getAll=function(){var t=this.rbush_.all();return t.map(function(e){return e.value})},r.prototype.getInExtent=function(t){var e={minX:t[0],minY:t[1],maxX:t[2],maxY:t[3]},i=this.rbush_.search(e);return i.map(function(n){return n.value})},r.prototype.forEach=function(t){return this.forEach_(this.getAll(),t)},r.prototype.forEachInExtent=function(t,e){return this.forEach_(this.getInExtent(t),e)},r.prototype.forEach_=function(t,e){for(var i,n=0,a=t.length;n<a;n++)if(i=e(t[n]),i)return i;return i},r.prototype.isEmpty=function(){return ji(this.items_)},r.prototype.clear=function(){this.rbush_.clear(),this.items_={}},r.prototype.getExtent=function(t){var e=this.rbush_.toJSON();return Ce(e.minX,e.minY,e.maxX,e.maxY,t)},r.prototype.concat=function(t){this.rbush_.load(t.rbush_.all());for(var e in t.items_)this.items_[e]=t.items_[e]},r}();const Wf=bP,he={ADDFEATURE:"addfeature",CHANGEFEATURE:"changefeature",CLEAR:"clear",REMOVEFEATURE:"removefeature",FEATURESLOADSTART:"featuresloadstart",FEATURESLOADEND:"featuresloadend",FEATURESLOADERROR:"featuresloaderror"};function wP(r,t){return[[-1/0,-1/0,1/0,1/0]]}const Pi={ARRAY_BUFFER:"arraybuffer",JSON:"json",TEXT:"text",XML:"xml"};var xP=!1;function AP(r,t,e,i,n,a,o){var s=new XMLHttpRequest;s.open("GET",typeof r=="function"?r(e,i,n):r,!0),t.getType()==Pi.ARRAY_BUFFER&&(s.responseType="arraybuffer"),s.withCredentials=xP,s.onload=function(l){if(!s.status||s.status>=200&&s.status<300){var u=t.getType(),h=void 0;u==Pi.JSON||u==Pi.TEXT?h=s.responseText:u==Pi.XML?(h=s.responseXML,h||(h=new DOMParser().parseFromString(s.responseText,"application/xml"))):u==Pi.ARRAY_BUFFER&&(h=s.response),h?a(t.readFeatures(h,{extent:e,featureProjection:n}),t.readProjection(h)):o()}else o()},s.onerror=o,s.send()}function Vf(r,t){return function(e,i,n,a,o){var s=this;AP(r,t,e,i,n,function(l,u){s.addFeatures(l),a!==void 0&&a(l)},o||Zi)}}var Om=globalThis&&globalThis.__extends||function(){var r=function(t,e){return r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(i,n){i.__proto__=n}||function(i,n){for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(i[a]=n[a])},r(t,e)};return function(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");r(t,e);function i(){this.constructor=t}t.prototype=e===null?Object.create(e):(i.prototype=e.prototype,new i)}}(),Xe=function(r){Om(t,r);function t(e,i,n){var a=r.call(this,e)||this;return a.feature=i,a.features=n,a}return t}(Sr),EP=function(r){Om(t,r);function t(e){var i=this,n=e||{};i=r.call(this,{attributions:n.attributions,interpolate:!0,projection:void 0,state:es.READY,wrapX:n.wrapX!==void 0?n.wrapX:!0})||this,i.on,i.once,i.un,i.loader_=Zi,i.format_=n.format,i.overlaps_=n.overlaps===void 0?!0:n.overlaps,i.url_=n.url,n.loader!==void 0?i.loader_=n.loader:i.url_!==void 0&&(et(i.format_,7),i.loader_=Vf(i.url_,i.format_)),i.strategy_=n.strategy!==void 0?n.strategy:wP;var a=n.useSpatialIndex!==void 0?n.useSpatialIndex:!0;i.featuresRtree_=a?new Wf:null,i.loadedExtentsRtree_=new Wf,i.loadingExtentsCount_=0,i.nullGeometryFeatures_={},i.idIndex_={},i.uidIndex_={},i.featureChangeKeys_={},i.featuresCollection_=null;var o,s;return Array.isArray(n.features)?s=n.features:n.features&&(o=n.features,s=o.getArray()),!a&&o===void 0&&(o=new mm(s)),s!==void 0&&i.addFeaturesInternal(s),o!==void 0&&i.bindFeaturesCollection_(o),i}return t.prototype.addFeature=function(e){this.addFeatureInternal(e),this.changed()},t.prototype.addFeatureInternal=function(e){var i=ut(e);if(!this.addToIndex_(i,e)){this.featuresCollection_&&this.featuresCollection_.remove(e);return}this.setupChangeEvents_(i,e);var n=e.getGeometry();if(n){var a=n.getExtent();this.featuresRtree_&&this.featuresRtree_.insert(a,e)}else this.nullGeometryFeatures_[i]=e;this.dispatchEvent(new Xe(he.ADDFEATURE,e))},t.prototype.setupChangeEvents_=function(e,i){this.featureChangeKeys_[e]=[ve(i,kt.CHANGE,this.handleFeatureChange_,this),ve(i,Mv.PROPERTYCHANGE,this.handleFeatureChange_,this)]},t.prototype.addToIndex_=function(e,i){var n=!0,a=i.getId();return a!==void 0&&(a.toString()in this.idIndex_?n=!1:this.idIndex_[a.toString()]=i),n&&(et(!(e in this.uidIndex_),30),this.uidIndex_[e]=i),n},t.prototype.addFeatures=function(e){this.addFeaturesInternal(e),this.changed()},t.prototype.addFeaturesInternal=function(e){for(var i=[],n=[],a=[],o=0,s=e.length;o<s;o++){var l=e[o],u=ut(l);this.addToIndex_(u,l)&&n.push(l)}for(var o=0,h=n.length;o<h;o++){var l=n[o],u=ut(l);this.setupChangeEvents_(u,l);var c=l.getGeometry();if(c){var d=c.getExtent();i.push(d),a.push(l)}else this.nullGeometryFeatures_[u]=l}if(this.featuresRtree_&&this.featuresRtree_.load(i,a),this.hasListener(he.ADDFEATURE))for(var o=0,f=n.length;o<f;o++)this.dispatchEvent(new Xe(he.ADDFEATURE,n[o]))},t.prototype.bindFeaturesCollection_=function(e){var i=!1;this.addEventListener(he.ADDFEATURE,function(n){i||(i=!0,e.push(n.feature),i=!1)}),this.addEventListener(he.REMOVEFEATURE,function(n){i||(i=!0,e.remove(n.feature),i=!1)}),e.addEventListener(Zr.ADD,function(n){i||(i=!0,this.addFeature(n.element),i=!1)}.bind(this)),e.addEventListener(Zr.REMOVE,function(n){i||(i=!0,this.removeFeature(n.element),i=!1)}.bind(this)),this.featuresCollection_=e},t.prototype.clear=function(e){if(e){for(var i in this.featureChangeKeys_){var n=this.featureChangeKeys_[i];n.forEach(ne)}this.featuresCollection_||(this.featureChangeKeys_={},this.idIndex_={},this.uidIndex_={})}else if(this.featuresRtree_){var a=function(l){this.removeFeatureInternal(l)}.bind(this);this.featuresRtree_.forEach(a);for(var o in this.nullGeometryFeatures_)this.removeFeatureInternal(this.nullGeometryFeatures_[o])}this.featuresCollection_&&this.featuresCollection_.clear(),this.featuresRtree_&&this.featuresRtree_.clear(),this.nullGeometryFeatures_={};var s=new Xe(he.CLEAR);this.dispatchEvent(s),this.changed()},t.prototype.forEachFeature=function(e){if(this.featuresRtree_)return this.featuresRtree_.forEach(e);this.featuresCollection_&&this.featuresCollection_.forEach(e)},t.prototype.forEachFeatureAtCoordinateDirect=function(e,i){var n=[e[0],e[1],e[0],e[1]];return this.forEachFeatureInExtent(n,function(a){var o=a.getGeometry();if(o.intersectsCoordinate(e))return i(a)})},t.prototype.forEachFeatureInExtent=function(e,i){if(this.featuresRtree_)return this.featuresRtree_.forEachInExtent(e,i);this.featuresCollection_&&this.featuresCollection_.forEach(i)},t.prototype.forEachFeatureIntersectingExtent=function(e,i){return this.forEachFeatureInExtent(e,function(n){var a=n.getGeometry();if(a.intersectsExtent(e)){var o=i(n);if(o)return o}})},t.prototype.getFeaturesCollection=function(){return this.featuresCollection_},t.prototype.getFeatures=function(){var e;return this.featuresCollection_?e=this.featuresCollection_.getArray().slice(0):this.featuresRtree_&&(e=this.featuresRtree_.getAll(),ji(this.nullGeometryFeatures_)||Ov(e,Rx(this.nullGeometryFeatures_))),e},t.prototype.getFeaturesAtCoordinate=function(e){var i=[];return this.forEachFeatureAtCoordinateDirect(e,function(n){i.push(n)}),i},t.prototype.getFeaturesInExtent=function(e){return this.featuresRtree_?this.featuresRtree_.getInExtent(e):this.featuresCollection_?this.featuresCollection_.getArray().slice(0):[]},t.prototype.getClosestFeatureToCoordinate=function(e,i){var n=e[0],a=e[1],o=null,s=[NaN,NaN],l=1/0,u=[-1/0,-1/0,1/0,1/0],h=i||GM;return this.featuresRtree_.forEachInExtent(u,function(c){if(h(c)){var d=c.getGeometry(),f=l;if(l=d.closestPointXY(n,a,s,l),l<f){o=c;var p=Math.sqrt(l);u[0]=n-p,u[1]=a-p,u[2]=n+p,u[3]=a+p}}}),o},t.prototype.getExtent=function(e){return this.featuresRtree_.getExtent(e)},t.prototype.getFeatureById=function(e){var i=this.idIndex_[e.toString()];return i!==void 0?i:null},t.prototype.getFeatureByUid=function(e){var i=this.uidIndex_[e];return i!==void 0?i:null},t.prototype.getFormat=function(){return this.format_},t.prototype.getOverlaps=function(){return this.overlaps_},t.prototype.getUrl=function(){return this.url_},t.prototype.handleFeatureChange_=function(e){var i=e.target,n=ut(i),a=i.getGeometry();if(!a)n in this.nullGeometryFeatures_||(this.featuresRtree_&&this.featuresRtree_.remove(i),this.nullGeometryFeatures_[n]=i);else{var o=a.getExtent();n in this.nullGeometryFeatures_?(delete this.nullGeometryFeatures_[n],this.featuresRtree_&&this.featuresRtree_.insert(o,i)):this.featuresRtree_&&this.featuresRtree_.update(o,i)}var s=i.getId();if(s!==void 0){var l=s.toString();this.idIndex_[l]!==i&&(this.removeFromIdIndex_(i),this.idIndex_[l]=i)}else this.removeFromIdIndex_(i),this.uidIndex_[n]=i;this.changed(),this.dispatchEvent(new Xe(he.CHANGEFEATURE,i))},t.prototype.hasFeature=function(e){var i=e.getId();return i!==void 0?i in this.idIndex_:ut(e)in this.uidIndex_},t.prototype.isEmpty=function(){return this.featuresRtree_?this.featuresRtree_.isEmpty()&&ji(this.nullGeometryFeatures_):this.featuresCollection_?this.featuresCollection_.getLength()===0:!0},t.prototype.loadFeatures=function(e,i,n){for(var a=this.loadedExtentsRtree_,o=this.strategy_(e,i,n),s=function(c,d){var f=o[c],p=a.forEachInExtent(f,function(v){return Je(v.extent,f)});p||(++l.loadingExtentsCount_,l.dispatchEvent(new Xe(he.FEATURESLOADSTART)),l.loader_.call(l,f,i,n,function(v){--this.loadingExtentsCount_,this.dispatchEvent(new Xe(he.FEATURESLOADEND,void 0,v))}.bind(l),function(){--this.loadingExtentsCount_,this.dispatchEvent(new Xe(he.FEATURESLOADERROR))}.bind(l)),a.insert(f,{extent:f.slice()}))},l=this,u=0,h=o.length;u<h;++u)s(u);this.loading=this.loader_.length<4?!1:this.loadingExtentsCount_>0},t.prototype.refresh=function(){this.clear(!0),this.loadedExtentsRtree_.clear(),r.prototype.refresh.call(this)},t.prototype.removeLoadedExtent=function(e){var i=this.loadedExtentsRtree_,n;i.forEachInExtent(e,function(a){if(Wo(a.extent,e))return n=a,!0}),n&&i.remove(n)},t.prototype.removeFeature=function(e){if(e){var i=ut(e);i in this.nullGeometryFeatures_?delete this.nullGeometryFeatures_[i]:this.featuresRtree_&&this.featuresRtree_.remove(e);var n=this.removeFeatureInternal(e);n&&this.changed()}},t.prototype.removeFeatureInternal=function(e){var i=ut(e),n=this.featureChangeKeys_[i];if(n){n.forEach(ne),delete this.featureChangeKeys_[i];var a=e.getId();return a!==void 0&&delete this.idIndex_[a.toString()],delete this.uidIndex_[i],this.dispatchEvent(new Xe(he.REMOVEFEATURE,e)),e}},t.prototype.removeFromIdIndex_=function(e){var i=!1;for(var n in this.idIndex_)if(this.idIndex_[n]===e){delete this.idIndex_[n],i=!0;break}return i},t.prototype.setLoader=function(e){this.loader_=e},t.prototype.setUrl=function(e){et(this.format_,7),this.url_=e,this.setLoader(Vf(e,this.format_))},t}(ju);const Sm=EP;/**
 * @license
 * Copyright 2000-2023 Vaadin Ltd.
 *
 * This program is available under Vaadin Commercial License and Service Terms.
 *
 * See <https://vaadin.com/commercial-license-and-service-terms> for the full
 * license.
 */function Vu(r,t,e){if(!r)throw new Error("Can not instantiate base class: ol/source/Source");return r.setAttributions(t.attributions),r}function CP(r,t,e){if(!r)throw new Error("Can not instantiate base class: ol/source/Tile");return Vu(r,t),r}function TP(r,t,e){if(!r)throw new Error("Can not instantiate base class: ol/source/UrlTile");return CP(r,t),t.url&&r.setUrl(t.url),r}function Im(r,t,e){if(!r)throw new Error("Can not instantiate base class: ol/source/TileImage");return TP(r,t),r}function MP(r,t,e){return r||(r=new yP(Be(t))),Im(r,t),r}function Rm(r,t,e){return r||(r=new Tm(Be(t))),Im(r,t),r}function OP(r,t,e){return r||(r=new mP(Be(t))),t.attributions||(t.attributions=Mm),Rm(r,t),r}function SP(r,t,e){if(!r)throw new Error("Can not instantiate base class: ol/source/Image");return Vu(r,t),r}function IP(r,t,e){return r||(r=new zR(Be(t))),SP(r,t),t.url&&r.setUrl(t.url),r}function RP(r,t,e){return r||(r=new Sm(Be({...t,features:new mm}))),Vu(r,t),pm(r.getFeaturesCollection(),t.features,e),r}/**
 * @license
 * Copyright 2000-2023 Vaadin Ltd.
 *
 * This program is available under Vaadin Commercial License and Service Terms.
 *
 * See <https://vaadin.com/commercial-license-and-service-terms> for the full
 * license.
 */function PP(r,t,e){return r||(r=new sm),r.setColor(t.color),e.connector.forceRender(),r}function DP(r,t,e){return r||(r=new lm),r.setColor(t.color),r.setWidth(t.width),e.connector.forceRender(),r}function kP(r,t,e){if(!r)throw new Error("Can not instantiate base class: ol/style/Image");return r.setOpacity(t.opacity),r.setRotateWithView(t.rotateWithView),r.setRotation(t.rotation),r.setScale(t.scale),r}function LP(r){return r.toLowerCase().replace(/_/,"-")}function FP(r,t,e){if(!r){const i=t.img||t.src;r=new cm(Be({...t,img:void 0,src:i,imgSize:t.imgSize?ER(t.imgSize):void 0,anchor:t.anchor?Lo(t.anchor):void 0,anchorOrigin:t.anchorOrigin?LP(t.anchorOrigin):void 0}))}return kP(r,t),e.connector.forceRender(),r}function $P(r,t,e){return r||(r=new yI),r.setImage(t.image?e.lookup.get(t.image):void 0),r.setFill(t.fill?e.lookup.get(t.fill):void 0),r.setStroke(t.stroke?e.lookup.get(t.stroke):void 0),e.connector.forceRender(),r}/**
 * @license
 * Copyright 2000-2023 Vaadin Ltd.
 *
 * This program is available under Vaadin Commercial License and Service Terms.
 *
 * See <https://vaadin.com/commercial-license-and-service-terms> for the full
 * license.
 */function NP(r,t,e){if(!r)throw new Error("Existing map instance must be provided");return pm(r.getLayers(),t.layers,e),r.setView(e.lookup.get(t.view)),r}function BP(r,t,e){return r||(r=new HO({projection:t.projection})),r.setCenter(t.center?Lo(t.center):[0,0]),r.setRotation(t.rotation||0),r.setZoom(t.zoom||0),r}function zP(r,t,e){return r||(r=new Dv(Lo(t.coordinates))),r.setCoordinates(Lo(t.coordinates)),r}function GP(r,t,e){return r||(r=new QM),r.setGeometry(e.lookup.get(t.geometry)),r.setStyle(e.lookup.get(t.style)),r}const YP={"ol/Feature":GP,"ol/Map":NP,"ol/View":BP,"ol/layer/Image":MR,"ol/layer/Tile":CR,"ol/layer/Vector":TR,"ol/source/ImageWMS":IP,"ol/source/OSM":OP,"ol/source/TileWMS":MP,"ol/source/Vector":RP,"ol/source/XYZ":Rm,"ol/geom/Point":zP,"ol/style/Icon":FP,"ol/style/Fill":PP,"ol/style/Stroke":DP,"ol/style/Style":$P};function qf(r,t){const e=r.type;if(!e)throw new Error("Configuration object must have a type");if(!r.id)throw new Error("Configuration object must have an ID");let i=t.lookup.get(r.id);const n=YP[e];if(!n)throw new Error(`Unsupported configuration object type: ${e}`);return i=n(i,r,t),t.lookup.put(r.id,i),i.id=r.id,i.typeName=e,i}/**
 * @license
 * Copyright 2000-2023 Vaadin Ltd.
 *
 * This program is available under Vaadin Commercial License and Service Terms.
 *
 * See <https://vaadin.com/commercial-license-and-service-terms> for the full
 * license.
 */class UP{constructor(){this.map=new Map}get(t){return this.map.get(t)}put(t,e){this.map.set(t,e)}}class jP{constructor(){this.map=new Map,this.registry=new FinalizationRegistry(t=>{this.map.delete(t)})}get(t){const e=this.map.get(t);return e?e.deref():void 0}put(t,e){if(this.map.has(t))return;const i=new WeakRef(e);this.map.set(t,i),this.registry.register(e,t)}}const WP=window.WeakRef&&window.FinalizationRegistry;function VP(){return WP?new jP:new UP}function qP(r,t){return r.find(e=>{const i=e.getSource&&e.getSource();return i&&i instanceof Sm&&i.getFeatures().includes(t)})}/**
 * @license
 * Copyright 2000-2023 Vaadin Ltd.
 *
 * This program is available under Vaadin Commercial License and Service Terms.
 *
 * See <https://vaadin.com/commercial-license-and-service-terms> for the full
 * license.
 */rv("EPSG:4326");(function(){function r(i){i.$connector={lookup:VP(),synchronize(n){const a={synchronize:qf,lookup:this.lookup,mapElement:i,connector:i.$connector};n.forEach(o=>{o.type==="ol/Map"&&this.lookup.put(o.id,i.configuration),qf(o,a)})},forceRender(){this._forceRenderTimeout||(this._forceRenderTimeout=setTimeout(()=>{this._forceRenderTimeout=null,i.configuration.getLayers().getArray().forEach(n=>n.changed())}))}},i.configuration.on("moveend",n=>{const a=i.configuration.getView(),o=a.getCenter(),s=a.getRotation(),l=a.getZoom(),u=a.calculateExtent(),h=new CustomEvent("map-view-moveend",{detail:{center:o,rotation:s,zoom:l,extent:u}});i.dispatchEvent(h)}),i.configuration.on("singleclick",n=>{const a=n.coordinate,o=n.pixel,l=i.configuration.getFeaturesAtPixel(o).map(h=>{const c=qP(i.configuration.getLayers().getArray(),h);return{feature:h,layer:c}}),u=new CustomEvent("map-click",{detail:{coordinate:a,features:l,originalEvent:n.originalEvent}});if(i.dispatchEvent(u),l.length>0){const h=l[0],c=new CustomEvent("map-feature-click",{detail:{feature:h.feature,layer:h.layer,originalEvent:n.originalEvent}});i.dispatchEvent(c)}})}function t(i){rv(i)}function e(i,n){qt.defs(i,n),iA(qt)}window.Vaadin.Flow.mapConnector={init:r,setUserProjection:t,defineProjection:e}})();const HP={"\\u0660":"0","\\u0661":"1","\\u0662":"2","\\u0663":"3","\\u0664":"4","\\u0665":"5","\\u0666":"6","\\u0667":"7","\\u0668":"8","\\u0669":"9"};function XP(r){return r.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function Pm(r){return r.replace(/[\u0660-\u0669]/g,function(t){const e="\\u0"+t.charCodeAt(0).toString(16);return HP[e]})}function Dm(r,t){const e=t.toLocaleTimeString(r),i=/[^\d\u0660-\u0669]/,n=e.match(new RegExp(`${i.source}+$`,"g"))||e.match(new RegExp(`^${i.source}+`,"g"));return n&&n[0].trim()}function ZP(r){let t=qu.toLocaleTimeString(r);const e=km(r);e&&t.startsWith(e)&&(t=t.replace(e,""));const i=t.match(/[^\u0660-\u0669\s\d]/);return i&&i[0]}function Hf(r,t){if(!t)return null;const e=t.split(/\s*/).map(XP).join("\\s*"),i=new RegExp(e,"i"),n=r.match(i);if(n)return n[0]}const qu=new Date("August 19, 1975 23:15:30"),QP=new Date("August 19, 1975 05:15:30");function km(r){return Dm(r,qu)}function KP(r){return Dm(r,QP)}function Ms(r){return parseInt(Pm(r))}function JP(r){return r=Pm(r),r.length===1?r+="00":r.length===2&&(r+="0"),parseInt(r)}function t2(r,t,e,i){let n=r;if(r.endsWith(e)?n=r.replace(" "+e,""):r.endsWith(i)&&(n=r.replace(" "+i,"")),t){let a=t<10?"0":"";a+=t<100?"0":"",a+=t,n+="."+a}else n+=".000";return r.endsWith(e)?n=n+" "+e:r.endsWith(i)&&(n=n+" "+i),n}(function(){const r=function(e){return window.Vaadin.Flow.tryCatchWrapper(e,"Vaadin Time Picker")};function t(e,i,n=0){e()?i():setTimeout(()=>t(e,i,200),n)}window.Vaadin.Flow.timepickerConnector={initLazy:e=>r(function(i){i.$connector||(i.$connector={},i.$connector.setLocale=r(function(n){let a;i.value&&i.value!==""&&(a=i.i18n.parseTime(i.value));try{qu.toLocaleTimeString(n)}catch{throw n="en-US",new Error("vaadin-time-picker: The locale "+n+" is not supported, falling back to default locale setting(en-US).")}const o=km(n),s=KP(n),l=ZP(n),u=function(){return i.step&&i.step<60},h=function(){return i.step&&i.step<1};let c,d;i.i18n={formatTime:r(function(f){if(!f)return;const p=new Date;p.setHours(f.hours),p.setMinutes(f.minutes),p.setSeconds(f.seconds!==void 0?f.seconds:0);let v=p.toLocaleTimeString(n,{hour:"numeric",minute:"numeric",second:u()?"numeric":void 0});return h()&&(v=t2(v,f.milliseconds,s,o)),v}),parseTime:r(function(f){if(f&&f===c&&d)return d;if(!f)return;const p=Hf(f,s),v=Hf(f,o),m=f.replace(p||"","").replace(v||"","").trim(),_=new RegExp("([\\d\\u0660-\\u0669]){1,2}(?:"+l+")?","g");let g=_.exec(m);if(g){g=Ms(g[0].replace(l,"")),p!==v&&(g===12&&p&&(g=0),g!==12&&v&&(g+=12));const y=_.exec(m),b=y&&_.exec(m),w=/[[\.][\d\u0660-\u0669]{1,3}$/;let x=b&&h()&&w.exec(m);return x&&x.index<=b.index&&(x=void 0),d=g!==void 0&&{hours:g,minutes:y?Ms(y[0].replace(l,"")):0,seconds:b?Ms(b[0].replace(l,"")):0,milliseconds:y&&b&&x?JP(x[0].replace(".","")):0},c=f,d}})},a&&t(()=>i.$,()=>{const f=i.i18n.formatTime(a);i.inputElement.value!==f&&(i.inputElement.value=f,i.$.comboBox.value=f)})}))})(e)}})();window.Vaadin.Flow.virtualListConnector={initLazy:function(r){if(r.$connector)return;const t=20;let e=[0,0];r.$connector={},r.$connector.placeholderItem={__placeholder:!0};const i=function(){const a=[...r.children].filter(h=>"__virtualListIndex"in h).map(h=>h.__virtualListIndex),o=Math.min(...a),s=Math.max(...a);let l=Math.max(0,o-t),u=Math.min(s+t,r.items.length);if(e[0]!=l||e[1]!=u){e=[l,u];const h=1+u-l;r.$server.setRequestedRange(l,h)}},n=function(){r.__requestDebounce=tp.debounce(r.__requestDebounce,ep.after(50),i)};requestAnimationFrame(()=>i),r.patchVirtualListRenderer=function(){if(!r.renderer||r.renderer.__virtualListConnectorPatched)return;const a=r.renderer,o=(s,l,u)=>{s.__virtualListIndex=u.index,u.item===void 0?l.$connector.placeholderElement?s.__hasComponentRendererPlaceholder||(s.innerHTML="",delete s._$litPart$,s.appendChild(l.$connector.placeholderElement.cloneNode(!0)),s.__hasComponentRendererPlaceholder=!0):a.call(l,s,l,{...u,item:l.$connector.placeholderItem}):(s.__hasComponentRendererPlaceholder&&(s.innerHTML="",s.__hasComponentRendererPlaceholder=!1),a.call(l,s,l,u)),n()};o.__virtualListConnectorPatched=!0,o.__rendererId=a.__rendererId,r.renderer=o},r._createPropertyObserver("renderer","patchVirtualListRenderer",!0),r.patchVirtualListRenderer(),r.items=[],r.$connector.set=function(a,o){r.items.splice(a,o.length,...o),r.items=[...r.items]},r.$connector.clear=function(a,o){const s=Math.min(o,r.items.length-a);r.$connector.set(a,[...Array(s)])},r.$connector.updateData=function(a){const o=a.reduce((s,l)=>(s[l.key]=l,s),{});r.items=r.items.map(s=>s&&(o[s.key]||s))},r.$connector.updateSize=function(a){const o=a-r.items.length;o>0?r.items=[...r.items,...Array(o)]:o<0&&(r.items=r.items.slice(0,a))},r.$connector.setPlaceholderItem=function(a={},o){a.__placeholder=!0,r.$connector.placeholderItem=a;const s=Object.entries(a).find(([l])=>l.endsWith("_nodeid"));r.$connector.placeholderElement=s?Vaadin.Flow.clients[o].getByNodeId(s[1]):null}}};const h2=function(r,t=!1){const e=document.createElement("template");e.innerHTML=r,document.head[t?"insertBefore":"appendChild"](e.content,document.head.firstChild)};export{h2 as addCssBlock};
