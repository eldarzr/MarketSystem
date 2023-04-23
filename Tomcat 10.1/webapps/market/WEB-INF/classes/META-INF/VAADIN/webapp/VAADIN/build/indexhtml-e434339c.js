(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))o(i);new MutationObserver(i=>{for(const n of i)if(n.type==="childList")for(const a of n.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&o(a)}).observe(document,{childList:!0,subtree:!0});function t(i){const n={};return i.integrity&&(n.integrity=i.integrity),i.referrerPolicy&&(n.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?n.credentials="include":i.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function o(i){if(i.ep)return;i.ep=!0;const n=t(i);fetch(i.href,n)}})();window.Vaadin=window.Vaadin||{};window.Vaadin.featureFlags=window.Vaadin.featureFlags||{};window.Vaadin.featureFlags.exampleFeatureFlag=!1;window.Vaadin.featureFlags.collaborationEngineBackend=!1;const vr="modulepreload",xr=function(r,e){return new URL(r,e).href},dt={},Ge=function(e,t,o){if(!t||t.length===0)return e();const i=document.getElementsByTagName("link");return Promise.all(t.map(n=>{if(n=xr(n,o),n in dt)return;dt[n]=!0;const a=n.endsWith(".css"),c=a?'[rel="stylesheet"]':"";if(!!o)for(let p=i.length-1;p>=0;p--){const h=i[p];if(h.href===n&&(!a||h.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${n}"]${c}`))return;const l=document.createElement("link");if(l.rel=a?"stylesheet":vr,a||(l.as="script",l.crossOrigin=""),l.href=n,document.head.appendChild(l),a)return new Promise((p,h)=>{l.addEventListener("load",p),l.addEventListener("error",()=>h(new Error(`Unable to preload CSS for ${n}`)))})})).then(()=>e())};function Ee(r){return r=r||[],Array.isArray(r)?r:[r]}function O(r){return`[Vaadin.Router] ${r}`}function yr(r){if(typeof r!="object")return String(r);const e=Object.prototype.toString.call(r).match(/ (.*)\]$/)[1];return e==="Object"||e==="Array"?`${e} ${JSON.stringify(r)}`:e}const $e="module",Ce="nomodule",Ke=[$e,Ce];function ut(r){if(!r.match(/.+\.[m]?js$/))throw new Error(O(`Unsupported type for bundle "${r}": .js or .mjs expected.`))}function Ut(r){if(!r||!L(r.path))throw new Error(O('Expected route config to be an object with a "path" string property, or an array of such objects'));const e=r.bundle,t=["component","redirect","bundle"];if(!U(r.action)&&!Array.isArray(r.children)&&!U(r.children)&&!Ae(e)&&!t.some(o=>L(r[o])))throw new Error(O(`Expected route config "${r.path}" to include either "${t.join('", "')}" or "action" function but none found.`));if(e)if(L(e))ut(e);else if(Ke.some(o=>o in e))Ke.forEach(o=>o in e&&ut(e[o]));else throw new Error(O('Expected route bundle to include either "'+Ce+'" or "'+$e+'" keys, or both'));r.redirect&&["bundle","component"].forEach(o=>{o in r&&console.warn(O(`Route config "${r.path}" has both "redirect" and "${o}" properties, and "redirect" will always override the latter. Did you mean to only use "${o}"?`))})}function mt(r){Ee(r).forEach(e=>Ut(e))}function pt(r,e){let t=document.head.querySelector('script[src="'+r+'"][async]');return t||(t=document.createElement("script"),t.setAttribute("src",r),e===$e?t.setAttribute("type",$e):e===Ce&&t.setAttribute(Ce,""),t.async=!0),new Promise((o,i)=>{t.onreadystatechange=t.onload=n=>{t.__dynamicImportLoaded=!0,o(n)},t.onerror=n=>{t.parentNode&&t.parentNode.removeChild(t),i(n)},t.parentNode===null?document.head.appendChild(t):t.__dynamicImportLoaded&&o()})}function br(r){return L(r)?pt(r):Promise.race(Ke.filter(e=>e in r).map(e=>pt(r[e],e)))}function ne(r,e){return!window.dispatchEvent(new CustomEvent(`vaadin-router-${r}`,{cancelable:r==="go",detail:e}))}function Ae(r){return typeof r=="object"&&!!r}function U(r){return typeof r=="function"}function L(r){return typeof r=="string"}function Vt(r){const e=new Error(O(`Page not found (${r.pathname})`));return e.context=r,e.code=404,e}const Q=new class{};function wr(r){const e=r.port,t=r.protocol,n=t==="http:"&&e==="80"||t==="https:"&&e==="443"?r.hostname:r.host;return`${t}//${n}`}function ht(r){if(r.defaultPrevented||r.button!==0||r.shiftKey||r.ctrlKey||r.altKey||r.metaKey)return;let e=r.target;const t=r.composedPath?r.composedPath():r.path||[];for(let c=0;c<t.length;c++){const s=t[c];if(s.nodeName&&s.nodeName.toLowerCase()==="a"){e=s;break}}for(;e&&e.nodeName.toLowerCase()!=="a";)e=e.parentNode;if(!e||e.nodeName.toLowerCase()!=="a"||e.target&&e.target.toLowerCase()!=="_self"||e.hasAttribute("download")||e.hasAttribute("router-ignore")||e.pathname===window.location.pathname&&e.hash!==""||(e.origin||wr(e))!==window.location.origin)return;const{pathname:i,search:n,hash:a}=e;ne("go",{pathname:i,search:n,hash:a})&&(r.preventDefault(),r&&r.type==="click"&&window.scrollTo(0,0))}const _r={activate(){window.document.addEventListener("click",ht)},inactivate(){window.document.removeEventListener("click",ht)}},Sr=/Trident/.test(navigator.userAgent);Sr&&!U(window.PopStateEvent)&&(window.PopStateEvent=function(r,e){e=e||{};var t=document.createEvent("Event");return t.initEvent(r,Boolean(e.bubbles),Boolean(e.cancelable)),t.state=e.state||null,t},window.PopStateEvent.prototype=window.Event.prototype);function ft(r){if(r.state==="vaadin-router-ignore")return;const{pathname:e,search:t,hash:o}=window.location;ne("go",{pathname:e,search:t,hash:o})}const Er={activate(){window.addEventListener("popstate",ft)},inactivate(){window.removeEventListener("popstate",ft)}};var te=Gt,$r=Ze,Cr=Rr,Ar=Ht,Tr=qt,jt="/",Bt="./",zr=new RegExp(["(\\\\.)","(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?"].join("|"),"g");function Ze(r,e){for(var t=[],o=0,i=0,n="",a=e&&e.delimiter||jt,c=e&&e.delimiters||Bt,s=!1,l;(l=zr.exec(r))!==null;){var p=l[0],h=l[1],u=l.index;if(n+=r.slice(i,u),i=u+p.length,h){n+=h[1],s=!0;continue}var f="",k=r[i],T=l[2],me=l[3],Oe=l[4],A=l[5];if(!s&&n.length){var P=n.length-1;c.indexOf(n[P])>-1&&(f=n[P],n=n.slice(0,P))}n&&(t.push(n),n="",s=!1);var j=f!==""&&k!==void 0&&k!==f,B=A==="+"||A==="*",Pe=A==="?"||A==="*",I=f||a,pe=me||Oe;t.push({name:T||o++,prefix:f,delimiter:I,optional:Pe,repeat:B,partial:j,pattern:pe?Lr(pe):"[^"+N(I)+"]+?"})}return(n||i<r.length)&&t.push(n+r.substr(i)),t}function Rr(r,e){return Ht(Ze(r,e))}function Ht(r){for(var e=new Array(r.length),t=0;t<r.length;t++)typeof r[t]=="object"&&(e[t]=new RegExp("^(?:"+r[t].pattern+")$"));return function(o,i){for(var n="",a=i&&i.encode||encodeURIComponent,c=0;c<r.length;c++){var s=r[c];if(typeof s=="string"){n+=s;continue}var l=o?o[s.name]:void 0,p;if(Array.isArray(l)){if(!s.repeat)throw new TypeError('Expected "'+s.name+'" to not repeat, but got array');if(l.length===0){if(s.optional)continue;throw new TypeError('Expected "'+s.name+'" to not be empty')}for(var h=0;h<l.length;h++){if(p=a(l[h],s),!e[c].test(p))throw new TypeError('Expected all "'+s.name+'" to match "'+s.pattern+'"');n+=(h===0?s.prefix:s.delimiter)+p}continue}if(typeof l=="string"||typeof l=="number"||typeof l=="boolean"){if(p=a(String(l),s),!e[c].test(p))throw new TypeError('Expected "'+s.name+'" to match "'+s.pattern+'", but got "'+p+'"');n+=s.prefix+p;continue}if(s.optional){s.partial&&(n+=s.prefix);continue}throw new TypeError('Expected "'+s.name+'" to be '+(s.repeat?"an array":"a string"))}return n}}function N(r){return r.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1")}function Lr(r){return r.replace(/([=!:$/()])/g,"\\$1")}function Wt(r){return r&&r.sensitive?"":"i"}function Or(r,e){if(!e)return r;var t=r.source.match(/\((?!\?)/g);if(t)for(var o=0;o<t.length;o++)e.push({name:o,prefix:null,delimiter:null,optional:!1,repeat:!1,partial:!1,pattern:null});return r}function Pr(r,e,t){for(var o=[],i=0;i<r.length;i++)o.push(Gt(r[i],e,t).source);return new RegExp("(?:"+o.join("|")+")",Wt(t))}function kr(r,e,t){return qt(Ze(r,t),e,t)}function qt(r,e,t){t=t||{};for(var o=t.strict,i=t.start!==!1,n=t.end!==!1,a=N(t.delimiter||jt),c=t.delimiters||Bt,s=[].concat(t.endsWith||[]).map(N).concat("$").join("|"),l=i?"^":"",p=r.length===0,h=0;h<r.length;h++){var u=r[h];if(typeof u=="string")l+=N(u),p=h===r.length-1&&c.indexOf(u[u.length-1])>-1;else{var f=u.repeat?"(?:"+u.pattern+")(?:"+N(u.delimiter)+"(?:"+u.pattern+"))*":u.pattern;e&&e.push(u),u.optional?u.partial?l+=N(u.prefix)+"("+f+")?":l+="(?:"+N(u.prefix)+"("+f+"))?":l+=N(u.prefix)+"("+f+")"}}return n?(o||(l+="(?:"+a+")?"),l+=s==="$"?"$":"(?="+s+")"):(o||(l+="(?:"+a+"(?="+s+"))?"),p||(l+="(?="+a+"|"+s+")")),new RegExp(l,Wt(t))}function Gt(r,e,t){return r instanceof RegExp?Or(r,e):Array.isArray(r)?Pr(r,e,t):kr(r,e,t)}te.parse=$r;te.compile=Cr;te.tokensToFunction=Ar;te.tokensToRegExp=Tr;const{hasOwnProperty:Ir}=Object.prototype,Je=new Map;Je.set("|false",{keys:[],pattern:/(?:)/});function gt(r){try{return decodeURIComponent(r)}catch{return r}}function Nr(r,e,t,o,i){t=!!t;const n=`${r}|${t}`;let a=Je.get(n);if(!a){const l=[];a={keys:l,pattern:te(r,l,{end:t,strict:r===""})},Je.set(n,a)}const c=a.pattern.exec(e);if(!c)return null;const s=Object.assign({},i);for(let l=1;l<c.length;l++){const p=a.keys[l-1],h=p.name,u=c[l];(u!==void 0||!Ir.call(s,h))&&(p.repeat?s[h]=u?u.split(p.delimiter).map(gt):[]:s[h]=u&&gt(u))}return{path:c[0],keys:(o||[]).concat(a.keys),params:s}}function Kt(r,e,t,o,i){let n,a,c=0,s=r.path||"";return s.charAt(0)==="/"&&(t&&(s=s.substr(1)),t=!0),{next(l){if(r===l)return{done:!0};const p=r.__children=r.__children||r.children;if(!n&&(n=Nr(s,e,!p,o,i),n))return{done:!1,value:{route:r,keys:n.keys,params:n.params,path:n.path}};if(n&&p)for(;c<p.length;){if(!a){const u=p[c];u.parent=r;let f=n.path.length;f>0&&e.charAt(f)==="/"&&(f+=1),a=Kt(u,e.substr(f),t,n.keys,n.params)}const h=a.next(l);if(!h.done)return{done:!1,value:h.value};a=null,c++}return{done:!0}}}}function Mr(r){if(U(r.route.action))return r.route.action(r)}function Dr(r,e){let t=e;for(;t;)if(t=t.parent,t===r)return!0;return!1}function Fr(r){let e=`Path '${r.pathname}' is not properly resolved due to an error.`;const t=(r.route||{}).path;return t&&(e+=` Resolution had failed on route: '${t}'`),e}function Ur(r,e){const{route:t,path:o}=e;if(t&&!t.__synthetic){const i={path:o,route:t};if(!r.chain)r.chain=[];else if(t.parent){let n=r.chain.length;for(;n--&&r.chain[n].route&&r.chain[n].route!==t.parent;)r.chain.pop()}r.chain.push(i)}}class ae{constructor(e,t={}){if(Object(e)!==e)throw new TypeError("Invalid routes");this.baseUrl=t.baseUrl||"",this.errorHandler=t.errorHandler,this.resolveRoute=t.resolveRoute||Mr,this.context=Object.assign({resolver:this},t.context),this.root=Array.isArray(e)?{path:"",__children:e,parent:null,__synthetic:!0}:e,this.root.parent=null}getRoutes(){return[...this.root.__children]}setRoutes(e){mt(e);const t=[...Ee(e)];this.root.__children=t}addRoutes(e){return mt(e),this.root.__children.push(...Ee(e)),this.getRoutes()}removeRoutes(){this.setRoutes([])}resolve(e){const t=Object.assign({},this.context,L(e)?{pathname:e}:e),o=Kt(this.root,this.__normalizePathname(t.pathname),this.baseUrl),i=this.resolveRoute;let n=null,a=null,c=t;function s(l,p=n.value.route,h){const u=h===null&&n.value.route;return n=a||o.next(u),a=null,!l&&(n.done||!Dr(p,n.value.route))?(a=n,Promise.resolve(Q)):n.done?Promise.reject(Vt(t)):(c=Object.assign(c?{chain:c.chain?c.chain.slice(0):[]}:{},t,n.value),Ur(c,n.value),Promise.resolve(i(c)).then(f=>f!=null&&f!==Q?(c.result=f.result||f,c):s(l,p,f)))}return t.next=s,Promise.resolve().then(()=>s(!0,this.root)).catch(l=>{const p=Fr(c);if(l?console.warn(p):l=new Error(p),l.context=l.context||c,l instanceof DOMException||(l.code=l.code||500),this.errorHandler)return c.result=this.errorHandler(l),c;throw l})}static __createUrl(e,t){return new URL(e,t)}get __effectiveBaseUrl(){return this.baseUrl?this.constructor.__createUrl(this.baseUrl,document.baseURI||document.URL).href.replace(/[^\/]*$/,""):""}__normalizePathname(e){if(!this.baseUrl)return e;const t=this.__effectiveBaseUrl,o=this.constructor.__createUrl(e,t).href;if(o.slice(0,t.length)===t)return o.slice(t.length)}}ae.pathToRegexp=te;const{pathToRegexp:vt}=ae,xt=new Map;function Jt(r,e,t){const o=e.name||e.component;if(o&&(r.has(o)?r.get(o).push(e):r.set(o,[e])),Array.isArray(t))for(let i=0;i<t.length;i++){const n=t[i];n.parent=e,Jt(r,n,n.__children||n.children)}}function yt(r,e){const t=r.get(e);if(t&&t.length>1)throw new Error(`Duplicate route with name "${e}". Try seting unique 'name' route properties.`);return t&&t[0]}function bt(r){let e=r.path;return e=Array.isArray(e)?e[0]:e,e!==void 0?e:""}function Vr(r,e={}){if(!(r instanceof ae))throw new TypeError("An instance of Resolver is expected");const t=new Map;return(o,i)=>{let n=yt(t,o);if(!n&&(t.clear(),Jt(t,r.root,r.root.__children),n=yt(t,o),!n))throw new Error(`Route "${o}" not found`);let a=xt.get(n.fullPath);if(!a){let s=bt(n),l=n.parent;for(;l;){const f=bt(l);f&&(s=f.replace(/\/$/,"")+"/"+s.replace(/^\//,"")),l=l.parent}const p=vt.parse(s),h=vt.tokensToFunction(p),u=Object.create(null);for(let f=0;f<p.length;f++)L(p[f])||(u[p[f].name]=!0);a={toPath:h,keys:u},xt.set(s,a),n.fullPath=s}let c=a.toPath(i,e)||"/";if(e.stringifyQueryParams&&i){const s={},l=Object.keys(i);for(let h=0;h<l.length;h++){const u=l[h];a.keys[u]||(s[u]=i[u])}const p=e.stringifyQueryParams(s);p&&(c+=p.charAt(0)==="?"?p:`?${p}`)}return c}}let wt=[];function jr(r){wt.forEach(e=>e.inactivate()),r.forEach(e=>e.activate()),wt=r}const Br=r=>{const e=getComputedStyle(r).getPropertyValue("animation-name");return e&&e!=="none"},Hr=(r,e)=>{const t=()=>{r.removeEventListener("animationend",t),e()};r.addEventListener("animationend",t)};function _t(r,e){return r.classList.add(e),new Promise(t=>{if(Br(r)){const o=r.getBoundingClientRect(),i=`height: ${o.bottom-o.top}px; width: ${o.right-o.left}px`;r.setAttribute("style",`position: absolute; ${i}`),Hr(r,()=>{r.classList.remove(e),r.removeAttribute("style"),t()})}else r.classList.remove(e),t()})}const Wr=256;function Me(r){return r!=null}function qr(r){const e=Object.assign({},r);return delete e.next,e}function z({pathname:r="",search:e="",hash:t="",chain:o=[],params:i={},redirectFrom:n,resolver:a},c){const s=o.map(l=>l.route);return{baseUrl:a&&a.baseUrl||"",pathname:r,search:e,hash:t,routes:s,route:c||s.length&&s[s.length-1]||null,params:i,redirectFrom:n,getUrl:(l={})=>we(D.pathToRegexp.compile(Qt(s))(Object.assign({},i,l)),a)}}function St(r,e){const t=Object.assign({},r.params);return{redirect:{pathname:e,from:r.pathname,params:t}}}function Gr(r,e){e.location=z(r);const t=r.chain.map(o=>o.route).indexOf(r.route);return r.chain[t].element=e,e}function be(r,e,t){if(U(r))return r.apply(t,e)}function Et(r,e,t){return o=>{if(o&&(o.cancel||o.redirect))return o;if(t)return be(t[r],e,t)}}function Kr(r,e){if(!Array.isArray(r)&&!Ae(r))throw new Error(O(`Incorrect "children" value for the route ${e.path}: expected array or object, but got ${r}`));e.__children=[];const t=Ee(r);for(let o=0;o<t.length;o++)Ut(t[o]),e.__children.push(t[o])}function xe(r){if(r&&r.length){const e=r[0].parentNode;for(let t=0;t<r.length;t++)e.removeChild(r[t])}}function we(r,e){const t=e.__effectiveBaseUrl;return t?e.constructor.__createUrl(r.replace(/^\//,""),t).pathname:r}function Qt(r){return r.map(e=>e.path).reduce((e,t)=>t.length?e.replace(/\/$/,"")+"/"+t.replace(/^\//,""):e,"")}class D extends ae{constructor(e,t){const o=document.head.querySelector("base"),i=o&&o.getAttribute("href");super([],Object.assign({baseUrl:i&&ae.__createUrl(i,document.URL).pathname.replace(/[^\/]*$/,"")},t)),this.resolveRoute=a=>this.__resolveRoute(a);const n=D.NavigationTrigger;D.setTriggers.apply(D,Object.keys(n).map(a=>n[a])),this.baseUrl,this.ready,this.ready=Promise.resolve(e),this.location,this.location=z({resolver:this}),this.__lastStartedRenderId=0,this.__navigationEventHandler=this.__onNavigationEvent.bind(this),this.setOutlet(e),this.subscribe(),this.__createdByRouter=new WeakMap,this.__addedByRouter=new WeakMap}__resolveRoute(e){const t=e.route;let o=Promise.resolve();U(t.children)&&(o=o.then(()=>t.children(qr(e))).then(n=>{!Me(n)&&!U(t.children)&&(n=t.children),Kr(n,t)}));const i={redirect:n=>St(e,n),component:n=>{const a=document.createElement(n);return this.__createdByRouter.set(a,!0),a}};return o.then(()=>{if(this.__isLatestRender(e))return be(t.action,[e,i],t)}).then(n=>{if(Me(n)&&(n instanceof HTMLElement||n.redirect||n===Q))return n;if(L(t.redirect))return i.redirect(t.redirect);if(t.bundle)return br(t.bundle).then(()=>{},()=>{throw new Error(O(`Bundle not found: ${t.bundle}. Check if the file name is correct`))})}).then(n=>{if(Me(n))return n;if(L(t.component))return i.component(t.component)})}setOutlet(e){e&&this.__ensureOutlet(e),this.__outlet=e}getOutlet(){return this.__outlet}setRoutes(e,t=!1){return this.__previousContext=void 0,this.__urlForName=void 0,super.setRoutes(e),t||this.__onNavigationEvent(),this.ready}render(e,t){const o=++this.__lastStartedRenderId,i=Object.assign({search:"",hash:""},L(e)?{pathname:e}:e,{__renderId:o});return this.ready=this.resolve(i).then(n=>this.__fullyResolveChain(n)).then(n=>{if(this.__isLatestRender(n)){const a=this.__previousContext;if(n===a)return this.__updateBrowserHistory(a,!0),this.location;if(this.location=z(n),t&&this.__updateBrowserHistory(n,o===1),ne("location-changed",{router:this,location:this.location}),n.__skipAttach)return this.__copyUnchangedElements(n,a),this.__previousContext=n,this.location;this.__addAppearingContent(n,a);const c=this.__animateIfNeeded(n);return this.__runOnAfterEnterCallbacks(n),this.__runOnAfterLeaveCallbacks(n,a),c.then(()=>{if(this.__isLatestRender(n))return this.__removeDisappearingContent(),this.__previousContext=n,this.location})}}).catch(n=>{if(o===this.__lastStartedRenderId)throw t&&this.__updateBrowserHistory(i),xe(this.__outlet&&this.__outlet.children),this.location=z(Object.assign(i,{resolver:this})),ne("error",Object.assign({router:this,error:n},i)),n}),this.ready}__fullyResolveChain(e,t=e){return this.__findComponentContextAfterAllRedirects(t).then(o=>{const n=o!==t?o:e,c=we(Qt(o.chain),o.resolver)===o.pathname,s=(l,p=l.route,h)=>l.next(void 0,p,h).then(u=>u===null||u===Q?c?l:p.parent!==null?s(l,p.parent,u):u:u);return s(o).then(l=>{if(l===null||l===Q)throw Vt(n);return l&&l!==Q&&l!==o?this.__fullyResolveChain(n,l):this.__amendWithOnBeforeCallbacks(o)})})}__findComponentContextAfterAllRedirects(e){const t=e.result;return t instanceof HTMLElement?(Gr(e,t),Promise.resolve(e)):t.redirect?this.__redirect(t.redirect,e.__redirectCount,e.__renderId).then(o=>this.__findComponentContextAfterAllRedirects(o)):t instanceof Error?Promise.reject(t):Promise.reject(new Error(O(`Invalid route resolution result for path "${e.pathname}". Expected redirect object or HTML element, but got: "${yr(t)}". Double check the action return value for the route.`)))}__amendWithOnBeforeCallbacks(e){return this.__runOnBeforeCallbacks(e).then(t=>t===this.__previousContext||t===e?t:this.__fullyResolveChain(t))}__runOnBeforeCallbacks(e){const t=this.__previousContext||{},o=t.chain||[],i=e.chain;let n=Promise.resolve();const a=()=>({cancel:!0}),c=s=>St(e,s);if(e.__divergedChainIndex=0,e.__skipAttach=!1,o.length){for(let s=0;s<Math.min(o.length,i.length)&&!(o[s].route!==i[s].route||o[s].path!==i[s].path&&o[s].element!==i[s].element||!this.__isReusableElement(o[s].element,i[s].element));s=++e.__divergedChainIndex);if(e.__skipAttach=i.length===o.length&&e.__divergedChainIndex==i.length&&this.__isReusableElement(e.result,t.result),e.__skipAttach){for(let s=i.length-1;s>=0;s--)n=this.__runOnBeforeLeaveCallbacks(n,e,{prevent:a},o[s]);for(let s=0;s<i.length;s++)n=this.__runOnBeforeEnterCallbacks(n,e,{prevent:a,redirect:c},i[s]),o[s].element.location=z(e,o[s].route)}else for(let s=o.length-1;s>=e.__divergedChainIndex;s--)n=this.__runOnBeforeLeaveCallbacks(n,e,{prevent:a},o[s])}if(!e.__skipAttach)for(let s=0;s<i.length;s++)s<e.__divergedChainIndex?s<o.length&&o[s].element&&(o[s].element.location=z(e,o[s].route)):(n=this.__runOnBeforeEnterCallbacks(n,e,{prevent:a,redirect:c},i[s]),i[s].element&&(i[s].element.location=z(e,i[s].route)));return n.then(s=>{if(s){if(s.cancel)return this.__previousContext.__renderId=e.__renderId,this.__previousContext;if(s.redirect)return this.__redirect(s.redirect,e.__redirectCount,e.__renderId)}return e})}__runOnBeforeLeaveCallbacks(e,t,o,i){const n=z(t);return e.then(a=>{if(this.__isLatestRender(t))return Et("onBeforeLeave",[n,o,this],i.element)(a)}).then(a=>{if(!(a||{}).redirect)return a})}__runOnBeforeEnterCallbacks(e,t,o,i){const n=z(t,i.route);return e.then(a=>{if(this.__isLatestRender(t))return Et("onBeforeEnter",[n,o,this],i.element)(a)})}__isReusableElement(e,t){return e&&t?this.__createdByRouter.get(e)&&this.__createdByRouter.get(t)?e.localName===t.localName:e===t:!1}__isLatestRender(e){return e.__renderId===this.__lastStartedRenderId}__redirect(e,t,o){if(t>Wr)throw new Error(O(`Too many redirects when rendering ${e.from}`));return this.resolve({pathname:this.urlForPath(e.pathname,e.params),redirectFrom:e.from,__redirectCount:(t||0)+1,__renderId:o})}__ensureOutlet(e=this.__outlet){if(!(e instanceof Node))throw new TypeError(O(`Expected router outlet to be a valid DOM Node (but got ${e})`))}__updateBrowserHistory({pathname:e,search:t="",hash:o=""},i){if(window.location.pathname!==e||window.location.search!==t||window.location.hash!==o){const n=i?"replaceState":"pushState";window.history[n](null,document.title,e+t+o),window.dispatchEvent(new PopStateEvent("popstate",{state:"vaadin-router-ignore"}))}}__copyUnchangedElements(e,t){let o=this.__outlet;for(let i=0;i<e.__divergedChainIndex;i++){const n=t&&t.chain[i].element;if(n)if(n.parentNode===o)e.chain[i].element=n,o=n;else break}return o}__addAppearingContent(e,t){this.__ensureOutlet(),this.__removeAppearingContent();const o=this.__copyUnchangedElements(e,t);this.__appearingContent=[],this.__disappearingContent=Array.from(o.children).filter(n=>this.__addedByRouter.get(n)&&n!==e.result);let i=o;for(let n=e.__divergedChainIndex;n<e.chain.length;n++){const a=e.chain[n].element;a&&(i.appendChild(a),this.__addedByRouter.set(a,!0),i===o&&this.__appearingContent.push(a),i=a)}}__removeDisappearingContent(){this.__disappearingContent&&xe(this.__disappearingContent),this.__disappearingContent=null,this.__appearingContent=null}__removeAppearingContent(){this.__disappearingContent&&this.__appearingContent&&(xe(this.__appearingContent),this.__disappearingContent=null,this.__appearingContent=null)}__runOnAfterLeaveCallbacks(e,t){if(t)for(let o=t.chain.length-1;o>=e.__divergedChainIndex&&this.__isLatestRender(e);o--){const i=t.chain[o].element;if(i)try{const n=z(e);be(i.onAfterLeave,[n,{},t.resolver],i)}finally{this.__disappearingContent.indexOf(i)>-1&&xe(i.children)}}}__runOnAfterEnterCallbacks(e){for(let t=e.__divergedChainIndex;t<e.chain.length&&this.__isLatestRender(e);t++){const o=e.chain[t].element||{},i=z(e,e.chain[t].route);be(o.onAfterEnter,[i,{},e.resolver],o)}}__animateIfNeeded(e){const t=(this.__disappearingContent||[])[0],o=(this.__appearingContent||[])[0],i=[],n=e.chain;let a;for(let c=n.length;c>0;c--)if(n[c-1].route.animate){a=n[c-1].route.animate;break}if(t&&o&&a){const c=Ae(a)&&a.leave||"leaving",s=Ae(a)&&a.enter||"entering";i.push(_t(t,c)),i.push(_t(o,s))}return Promise.all(i).then(()=>e)}subscribe(){window.addEventListener("vaadin-router-go",this.__navigationEventHandler)}unsubscribe(){window.removeEventListener("vaadin-router-go",this.__navigationEventHandler)}__onNavigationEvent(e){const{pathname:t,search:o,hash:i}=e?e.detail:window.location;L(this.__normalizePathname(t))&&(e&&e.preventDefault&&e.preventDefault(),this.render({pathname:t,search:o,hash:i},!0))}static setTriggers(...e){jr(e)}urlForName(e,t){return this.__urlForName||(this.__urlForName=Vr(this)),we(this.__urlForName(e,t),this)}urlForPath(e,t){return we(D.pathToRegexp.compile(e)(t),this)}static go(e){const{pathname:t,search:o,hash:i}=L(e)?this.__createUrl(e,"http://a"):e;return ne("go",{pathname:t,search:o,hash:i})}}const Jr=/\/\*[\*!]\s+vaadin-dev-mode:start([\s\S]*)vaadin-dev-mode:end\s+\*\*\//i,_e=window.Vaadin&&window.Vaadin.Flow&&window.Vaadin.Flow.clients;function Qr(){function r(){return!0}return Xt(r)}function Xr(){try{return Yr()?!0:Zr()?_e?!eo():!Qr():!1}catch{return!1}}function Yr(){return localStorage.getItem("vaadin.developmentmode.force")}function Zr(){return["localhost","127.0.0.1"].indexOf(window.location.hostname)>=0}function eo(){return!!(_e&&Object.keys(_e).map(e=>_e[e]).filter(e=>e.productionMode).length>0)}function Xt(r,e){if(typeof r!="function")return;const t=Jr.exec(r.toString());if(t)try{r=new Function(t[1])}catch(o){console.log("vaadin-development-mode-detector: uncommentAndRun() failed",o)}return r(e)}window.Vaadin=window.Vaadin||{};const $t=function(r,e){if(window.Vaadin.developmentMode)return Xt(r,e)};window.Vaadin.developmentMode===void 0&&(window.Vaadin.developmentMode=Xr());function to(){}const ro=function(){if(typeof $t=="function")return $t(to)};window.Vaadin=window.Vaadin||{};window.Vaadin.registrations=window.Vaadin.registrations||[];window.Vaadin.registrations.push({is:"@vaadin/router",version:"1.7.4"});ro();D.NavigationTrigger={POPSTATE:Er,CLICK:_r};var De,x;(function(r){r.CONNECTED="connected",r.LOADING="loading",r.RECONNECTING="reconnecting",r.CONNECTION_LOST="connection-lost"})(x||(x={}));class oo{constructor(e){this.stateChangeListeners=new Set,this.loadingCount=0,this.connectionState=e,this.serviceWorkerMessageListener=this.serviceWorkerMessageListener.bind(this),navigator.serviceWorker&&(navigator.serviceWorker.addEventListener("message",this.serviceWorkerMessageListener),navigator.serviceWorker.ready.then(t=>{var o;(o=t==null?void 0:t.active)===null||o===void 0||o.postMessage({method:"Vaadin.ServiceWorker.isConnectionLost",id:"Vaadin.ServiceWorker.isConnectionLost"})}))}addStateChangeListener(e){this.stateChangeListeners.add(e)}removeStateChangeListener(e){this.stateChangeListeners.delete(e)}loadingStarted(){this.state=x.LOADING,this.loadingCount+=1}loadingFinished(){this.decreaseLoadingCount(x.CONNECTED)}loadingFailed(){this.decreaseLoadingCount(x.CONNECTION_LOST)}decreaseLoadingCount(e){this.loadingCount>0&&(this.loadingCount-=1,this.loadingCount===0&&(this.state=e))}get state(){return this.connectionState}set state(e){if(e!==this.connectionState){const t=this.connectionState;this.connectionState=e,this.loadingCount=0;for(const o of this.stateChangeListeners)o(t,this.connectionState)}}get online(){return this.connectionState===x.CONNECTED||this.connectionState===x.LOADING}get offline(){return!this.online}serviceWorkerMessageListener(e){typeof e.data=="object"&&e.data.id==="Vaadin.ServiceWorker.isConnectionLost"&&(e.data.result===!0&&(this.state=x.CONNECTION_LOST),navigator.serviceWorker.removeEventListener("message",this.serviceWorkerMessageListener))}}const no=r=>!!(r==="localhost"||r==="[::1]"||r.match(/^127\.\d+\.\d+\.\d+$/)),ye=window;if(!(!((De=ye.Vaadin)===null||De===void 0)&&De.connectionState)){let r;no(window.location.hostname)?r=!0:r=navigator.onLine,ye.Vaadin=ye.Vaadin||{},ye.Vaadin.connectionState=new oo(r?x.CONNECTED:x.CONNECTION_LOST)}function $(r,e,t,o){var i=arguments.length,n=i<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,t):o,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(r,e,t,o);else for(var c=r.length-1;c>=0;c--)(a=r[c])&&(n=(i<3?a(n):i>3?a(e,t,n):a(e,t))||n);return i>3&&n&&Object.defineProperty(e,t,n),n}/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Se=window,et=Se.ShadowRoot&&(Se.ShadyCSS===void 0||Se.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,tt=Symbol(),Ct=new WeakMap;let rt=class{constructor(e,t,o){if(this._$cssResult$=!0,o!==tt)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(et&&e===void 0){const o=t!==void 0&&t.length===1;o&&(e=Ct.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),o&&Ct.set(t,e))}return e}toString(){return this.cssText}};const io=r=>new rt(typeof r=="string"?r:r+"",void 0,tt),y=(r,...e)=>{const t=r.length===1?r[0]:e.reduce((o,i,n)=>o+(a=>{if(a._$cssResult$===!0)return a.cssText;if(typeof a=="number")return a;throw Error("Value passed to 'css' function must be a 'css' function result: "+a+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+r[n+1],r[0]);return new rt(t,r,tt)},ao=(r,e)=>{et?r.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet):e.forEach(t=>{const o=document.createElement("style"),i=Se.litNonce;i!==void 0&&o.setAttribute("nonce",i),o.textContent=t.cssText,r.appendChild(o)})},At=et?r=>r:r=>r instanceof CSSStyleSheet?(e=>{let t="";for(const o of e.cssRules)t+=o.cssText;return io(t)})(r):r;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Fe;const Te=window,Tt=Te.trustedTypes,so=Tt?Tt.emptyScript:"",zt=Te.reactiveElementPolyfillSupport,Qe={toAttribute(r,e){switch(e){case Boolean:r=r?so:null;break;case Object:case Array:r=r==null?r:JSON.stringify(r)}return r},fromAttribute(r,e){let t=r;switch(e){case Boolean:t=r!==null;break;case Number:t=r===null?null:Number(r);break;case Object:case Array:try{t=JSON.parse(r)}catch{t=null}}return t}},Yt=(r,e)=>e!==r&&(e==e||r==r),Ue={attribute:!0,type:String,converter:Qe,reflect:!1,hasChanged:Yt};let J=class extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this.u()}static addInitializer(e){var t;this.finalize(),((t=this.h)!==null&&t!==void 0?t:this.h=[]).push(e)}static get observedAttributes(){this.finalize();const e=[];return this.elementProperties.forEach((t,o)=>{const i=this._$Ep(o,t);i!==void 0&&(this._$Ev.set(i,o),e.push(i))}),e}static createProperty(e,t=Ue){if(t.state&&(t.attribute=!1),this.finalize(),this.elementProperties.set(e,t),!t.noAccessor&&!this.prototype.hasOwnProperty(e)){const o=typeof e=="symbol"?Symbol():"__"+e,i=this.getPropertyDescriptor(e,o,t);i!==void 0&&Object.defineProperty(this.prototype,e,i)}}static getPropertyDescriptor(e,t,o){return{get(){return this[t]},set(i){const n=this[e];this[t]=i,this.requestUpdate(e,n,o)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)||Ue}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const e=Object.getPrototypeOf(this);if(e.finalize(),e.h!==void 0&&(this.h=[...e.h]),this.elementProperties=new Map(e.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const t=this.properties,o=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const i of o)this.createProperty(i,t[i])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const o=new Set(e.flat(1/0).reverse());for(const i of o)t.unshift(At(i))}else e!==void 0&&t.push(At(e));return t}static _$Ep(e,t){const o=t.attribute;return o===!1?void 0:typeof o=="string"?o:typeof e=="string"?e.toLowerCase():void 0}u(){var e;this._$E_=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$Eg(),this.requestUpdate(),(e=this.constructor.h)===null||e===void 0||e.forEach(t=>t(this))}addController(e){var t,o;((t=this._$ES)!==null&&t!==void 0?t:this._$ES=[]).push(e),this.renderRoot!==void 0&&this.isConnected&&((o=e.hostConnected)===null||o===void 0||o.call(e))}removeController(e){var t;(t=this._$ES)===null||t===void 0||t.splice(this._$ES.indexOf(e)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((e,t)=>{this.hasOwnProperty(t)&&(this._$Ei.set(t,this[t]),delete this[t])})}createRenderRoot(){var e;const t=(e=this.shadowRoot)!==null&&e!==void 0?e:this.attachShadow(this.constructor.shadowRootOptions);return ao(t,this.constructor.elementStyles),t}connectedCallback(){var e;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$ES)===null||e===void 0||e.forEach(t=>{var o;return(o=t.hostConnected)===null||o===void 0?void 0:o.call(t)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$ES)===null||e===void 0||e.forEach(t=>{var o;return(o=t.hostDisconnected)===null||o===void 0?void 0:o.call(t)})}attributeChangedCallback(e,t,o){this._$AK(e,o)}_$EO(e,t,o=Ue){var i;const n=this.constructor._$Ep(e,o);if(n!==void 0&&o.reflect===!0){const a=(((i=o.converter)===null||i===void 0?void 0:i.toAttribute)!==void 0?o.converter:Qe).toAttribute(t,o.type);this._$El=e,a==null?this.removeAttribute(n):this.setAttribute(n,a),this._$El=null}}_$AK(e,t){var o;const i=this.constructor,n=i._$Ev.get(e);if(n!==void 0&&this._$El!==n){const a=i.getPropertyOptions(n),c=typeof a.converter=="function"?{fromAttribute:a.converter}:((o=a.converter)===null||o===void 0?void 0:o.fromAttribute)!==void 0?a.converter:Qe;this._$El=n,this[n]=c.fromAttribute(t,a.type),this._$El=null}}requestUpdate(e,t,o){let i=!0;e!==void 0&&(((o=o||this.constructor.getPropertyOptions(e)).hasChanged||Yt)(this[e],t)?(this._$AL.has(e)||this._$AL.set(e,t),o.reflect===!0&&this._$El!==e&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(e,o))):i=!1),!this.isUpdatePending&&i&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(t){Promise.reject(t)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var e;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((i,n)=>this[n]=i),this._$Ei=void 0);let t=!1;const o=this._$AL;try{t=this.shouldUpdate(o),t?(this.willUpdate(o),(e=this._$ES)===null||e===void 0||e.forEach(i=>{var n;return(n=i.hostUpdate)===null||n===void 0?void 0:n.call(i)}),this.update(o)):this._$Ek()}catch(i){throw t=!1,this._$Ek(),i}t&&this._$AE(o)}willUpdate(e){}_$AE(e){var t;(t=this._$ES)===null||t===void 0||t.forEach(o=>{var i;return(i=o.hostUpdated)===null||i===void 0?void 0:i.call(o)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(e){return!0}update(e){this._$EC!==void 0&&(this._$EC.forEach((t,o)=>this._$EO(o,this[o],t)),this._$EC=void 0),this._$Ek()}updated(e){}firstUpdated(e){}};J.finalized=!0,J.elementProperties=new Map,J.elementStyles=[],J.shadowRootOptions={mode:"open"},zt==null||zt({ReactiveElement:J}),((Fe=Te.reactiveElementVersions)!==null&&Fe!==void 0?Fe:Te.reactiveElementVersions=[]).push("1.6.1");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Ve;const ze=window,Y=ze.trustedTypes,Rt=Y?Y.createPolicy("lit-html",{createHTML:r=>r}):void 0,Xe="$lit$",M=`lit$${(Math.random()+"").slice(9)}$`,Zt="?"+M,lo=`<${Zt}>`,Z=document,se=()=>Z.createComment(""),le=r=>r===null||typeof r!="object"&&typeof r!="function",er=Array.isArray,co=r=>er(r)||typeof(r==null?void 0:r[Symbol.iterator])=="function",je=`[ 	
\f\r]`,re=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Lt=/-->/g,Ot=/>/g,F=RegExp(`>|${je}(?:([^\\s"'>=/]+)(${je}*=${je}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Pt=/'/g,kt=/"/g,tr=/^(?:script|style|textarea|title)$/i,rr=r=>(e,...t)=>({_$litType$:r,strings:e,values:t}),uo=rr(1),sn=rr(2),V=Symbol.for("lit-noChange"),b=Symbol.for("lit-nothing"),It=new WeakMap,X=Z.createTreeWalker(Z,129,null,!1),mo=(r,e)=>{const t=r.length-1,o=[];let i,n=e===2?"<svg>":"",a=re;for(let s=0;s<t;s++){const l=r[s];let p,h,u=-1,f=0;for(;f<l.length&&(a.lastIndex=f,h=a.exec(l),h!==null);)f=a.lastIndex,a===re?h[1]==="!--"?a=Lt:h[1]!==void 0?a=Ot:h[2]!==void 0?(tr.test(h[2])&&(i=RegExp("</"+h[2],"g")),a=F):h[3]!==void 0&&(a=F):a===F?h[0]===">"?(a=i??re,u=-1):h[1]===void 0?u=-2:(u=a.lastIndex-h[2].length,p=h[1],a=h[3]===void 0?F:h[3]==='"'?kt:Pt):a===kt||a===Pt?a=F:a===Lt||a===Ot?a=re:(a=F,i=void 0);const k=a===F&&r[s+1].startsWith("/>")?" ":"";n+=a===re?l+lo:u>=0?(o.push(p),l.slice(0,u)+Xe+l.slice(u)+M+k):l+M+(u===-2?(o.push(void 0),s):k)}const c=n+(r[t]||"<?>")+(e===2?"</svg>":"");if(!Array.isArray(r)||!r.hasOwnProperty("raw"))throw Error("invalid template strings array");return[Rt!==void 0?Rt.createHTML(c):c,o]};class ce{constructor({strings:e,_$litType$:t},o){let i;this.parts=[];let n=0,a=0;const c=e.length-1,s=this.parts,[l,p]=mo(e,t);if(this.el=ce.createElement(l,o),X.currentNode=this.el.content,t===2){const h=this.el.content,u=h.firstChild;u.remove(),h.append(...u.childNodes)}for(;(i=X.nextNode())!==null&&s.length<c;){if(i.nodeType===1){if(i.hasAttributes()){const h=[];for(const u of i.getAttributeNames())if(u.endsWith(Xe)||u.startsWith(M)){const f=p[a++];if(h.push(u),f!==void 0){const k=i.getAttribute(f.toLowerCase()+Xe).split(M),T=/([.?@])?(.*)/.exec(f);s.push({type:1,index:n,name:T[2],strings:k,ctor:T[1]==="."?ho:T[1]==="?"?go:T[1]==="@"?vo:Re})}else s.push({type:6,index:n})}for(const u of h)i.removeAttribute(u)}if(tr.test(i.tagName)){const h=i.textContent.split(M),u=h.length-1;if(u>0){i.textContent=Y?Y.emptyScript:"";for(let f=0;f<u;f++)i.append(h[f],se()),X.nextNode(),s.push({type:2,index:++n});i.append(h[u],se())}}}else if(i.nodeType===8)if(i.data===Zt)s.push({type:2,index:n});else{let h=-1;for(;(h=i.data.indexOf(M,h+1))!==-1;)s.push({type:7,index:n}),h+=M.length-1}n++}}static createElement(e,t){const o=Z.createElement("template");return o.innerHTML=e,o}}function ee(r,e,t=r,o){var i,n,a,c;if(e===V)return e;let s=o!==void 0?(i=t._$Co)===null||i===void 0?void 0:i[o]:t._$Cl;const l=le(e)?void 0:e._$litDirective$;return(s==null?void 0:s.constructor)!==l&&((n=s==null?void 0:s._$AO)===null||n===void 0||n.call(s,!1),l===void 0?s=void 0:(s=new l(r),s._$AT(r,t,o)),o!==void 0?((a=(c=t)._$Co)!==null&&a!==void 0?a:c._$Co=[])[o]=s:t._$Cl=s),s!==void 0&&(e=ee(r,s._$AS(r,e.values),s,o)),e}class po{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){var t;const{el:{content:o},parts:i}=this._$AD,n=((t=e==null?void 0:e.creationScope)!==null&&t!==void 0?t:Z).importNode(o,!0);X.currentNode=n;let a=X.nextNode(),c=0,s=0,l=i[0];for(;l!==void 0;){if(c===l.index){let p;l.type===2?p=new ue(a,a.nextSibling,this,e):l.type===1?p=new l.ctor(a,l.name,l.strings,this,e):l.type===6&&(p=new xo(a,this,e)),this._$AV.push(p),l=i[++s]}c!==(l==null?void 0:l.index)&&(a=X.nextNode(),c++)}return n}v(e){let t=0;for(const o of this._$AV)o!==void 0&&(o.strings!==void 0?(o._$AI(e,o,t),t+=o.strings.length-2):o._$AI(e[t])),t++}}class ue{constructor(e,t,o,i){var n;this.type=2,this._$AH=b,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=o,this.options=i,this._$Cp=(n=i==null?void 0:i.isConnected)===null||n===void 0||n}get _$AU(){var e,t;return(t=(e=this._$AM)===null||e===void 0?void 0:e._$AU)!==null&&t!==void 0?t:this._$Cp}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return t!==void 0&&(e==null?void 0:e.nodeType)===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=ee(this,e,t),le(e)?e===b||e==null||e===""?(this._$AH!==b&&this._$AR(),this._$AH=b):e!==this._$AH&&e!==V&&this._(e):e._$litType$!==void 0?this.g(e):e.nodeType!==void 0?this.$(e):co(e)?this.T(e):this._(e)}k(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}$(e){this._$AH!==e&&(this._$AR(),this._$AH=this.k(e))}_(e){this._$AH!==b&&le(this._$AH)?this._$AA.nextSibling.data=e:this.$(Z.createTextNode(e)),this._$AH=e}g(e){var t;const{values:o,_$litType$:i}=e,n=typeof i=="number"?this._$AC(e):(i.el===void 0&&(i.el=ce.createElement(i.h,this.options)),i);if(((t=this._$AH)===null||t===void 0?void 0:t._$AD)===n)this._$AH.v(o);else{const a=new po(n,this),c=a.u(this.options);a.v(o),this.$(c),this._$AH=a}}_$AC(e){let t=It.get(e.strings);return t===void 0&&It.set(e.strings,t=new ce(e)),t}T(e){er(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let o,i=0;for(const n of e)i===t.length?t.push(o=new ue(this.k(se()),this.k(se()),this,this.options)):o=t[i],o._$AI(n),i++;i<t.length&&(this._$AR(o&&o._$AB.nextSibling,i),t.length=i)}_$AR(e=this._$AA.nextSibling,t){var o;for((o=this._$AP)===null||o===void 0||o.call(this,!1,!0,t);e&&e!==this._$AB;){const i=e.nextSibling;e.remove(),e=i}}setConnected(e){var t;this._$AM===void 0&&(this._$Cp=e,(t=this._$AP)===null||t===void 0||t.call(this,e))}}class Re{constructor(e,t,o,i,n){this.type=1,this._$AH=b,this._$AN=void 0,this.element=e,this.name=t,this._$AM=i,this.options=n,o.length>2||o[0]!==""||o[1]!==""?(this._$AH=Array(o.length-1).fill(new String),this.strings=o):this._$AH=b}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(e,t=this,o,i){const n=this.strings;let a=!1;if(n===void 0)e=ee(this,e,t,0),a=!le(e)||e!==this._$AH&&e!==V,a&&(this._$AH=e);else{const c=e;let s,l;for(e=n[0],s=0;s<n.length-1;s++)l=ee(this,c[o+s],t,s),l===V&&(l=this._$AH[s]),a||(a=!le(l)||l!==this._$AH[s]),l===b?e=b:e!==b&&(e+=(l??"")+n[s+1]),this._$AH[s]=l}a&&!i&&this.j(e)}j(e){e===b?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class ho extends Re{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===b?void 0:e}}const fo=Y?Y.emptyScript:"";class go extends Re{constructor(){super(...arguments),this.type=4}j(e){e&&e!==b?this.element.setAttribute(this.name,fo):this.element.removeAttribute(this.name)}}class vo extends Re{constructor(e,t,o,i,n){super(e,t,o,i,n),this.type=5}_$AI(e,t=this){var o;if((e=(o=ee(this,e,t,0))!==null&&o!==void 0?o:b)===V)return;const i=this._$AH,n=e===b&&i!==b||e.capture!==i.capture||e.once!==i.once||e.passive!==i.passive,a=e!==b&&(i===b||n);n&&this.element.removeEventListener(this.name,this,i),a&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t,o;typeof this._$AH=="function"?this._$AH.call((o=(t=this.options)===null||t===void 0?void 0:t.host)!==null&&o!==void 0?o:this.element,e):this._$AH.handleEvent(e)}}class xo{constructor(e,t,o){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=o}get _$AU(){return this._$AM._$AU}_$AI(e){ee(this,e)}}const Nt=ze.litHtmlPolyfillSupport;Nt==null||Nt(ce,ue),((Ve=ze.litHtmlVersions)!==null&&Ve!==void 0?Ve:ze.litHtmlVersions=[]).push("2.7.2");const yo=(r,e,t)=>{var o,i;const n=(o=t==null?void 0:t.renderBefore)!==null&&o!==void 0?o:e;let a=n._$litPart$;if(a===void 0){const c=(i=t==null?void 0:t.renderBefore)!==null&&i!==void 0?i:null;n._$litPart$=a=new ue(e.insertBefore(se(),c),c,void 0,t??{})}return a._$AI(r),a};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Be,He;class ie extends J{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var e,t;const o=super.createRenderRoot();return(e=(t=this.renderOptions).renderBefore)!==null&&e!==void 0||(t.renderBefore=o.firstChild),o}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=yo(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)===null||e===void 0||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)===null||e===void 0||e.setConnected(!1)}render(){return V}}ie.finalized=!0,ie._$litElement$=!0,(Be=globalThis.litElementHydrateSupport)===null||Be===void 0||Be.call(globalThis,{LitElement:ie});const Mt=globalThis.litElementPolyfillSupport;Mt==null||Mt({LitElement:ie});((He=globalThis.litElementVersions)!==null&&He!==void 0?He:globalThis.litElementVersions=[]).push("3.3.1");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const bo=(r,e)=>e.kind==="method"&&e.descriptor&&!("value"in e.descriptor)?{...e,finisher(t){t.createProperty(e.key,r)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:e.key,initializer(){typeof e.initializer=="function"&&(this[e.key]=e.initializer.call(this))},finisher(t){t.createProperty(e.key,r)}};function C(r){return(e,t)=>t!==void 0?((o,i,n)=>{i.constructor.createProperty(n,o)})(r,e,t):bo(r,e)}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var We;((We=window.HTMLSlotElement)===null||We===void 0?void 0:We.prototype.assignedElements)!=null;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const wo={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},_o=r=>(...e)=>({_$litDirective$:r,values:e});class So{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,o){this._$Ct=e,this._$AM=t,this._$Ci=o}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}}/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Eo=_o(class extends So{constructor(r){var e;if(super(r),r.type!==wo.ATTRIBUTE||r.name!=="class"||((e=r.strings)===null||e===void 0?void 0:e.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(r){return" "+Object.keys(r).filter(e=>r[e]).join(" ")+" "}update(r,[e]){var t,o;if(this.it===void 0){this.it=new Set,r.strings!==void 0&&(this.nt=new Set(r.strings.join(" ").split(/\s/).filter(n=>n!=="")));for(const n in e)e[n]&&!(!((t=this.nt)===null||t===void 0)&&t.has(n))&&this.it.add(n);return this.render(e)}const i=r.element.classList;this.it.forEach(n=>{n in e||(i.remove(n),this.it.delete(n))});for(const n in e){const a=!!e[n];a===this.it.has(n)||!((o=this.nt)===null||o===void 0)&&o.has(n)||(a?(i.add(n),this.it.add(n)):(i.remove(n),this.it.delete(n)))}return V}}),qe="css-loading-indicator";var R;(function(r){r.IDLE="",r.FIRST="first",r.SECOND="second",r.THIRD="third"})(R||(R={}));class w extends ie{constructor(){super(),this.firstDelay=450,this.secondDelay=1500,this.thirdDelay=5e3,this.expandedDuration=2e3,this.onlineText="Online",this.offlineText="Connection lost",this.reconnectingText="Connection lost, trying to reconnect...",this.offline=!1,this.reconnecting=!1,this.expanded=!1,this.loading=!1,this.loadingBarState=R.IDLE,this.applyDefaultThemeState=!0,this.firstTimeout=0,this.secondTimeout=0,this.thirdTimeout=0,this.expandedTimeout=0,this.lastMessageState=x.CONNECTED,this.connectionStateListener=()=>{this.expanded=this.updateConnectionState(),this.expandedTimeout=this.timeoutFor(this.expandedTimeout,this.expanded,()=>{this.expanded=!1},this.expandedDuration)}}static create(){var e,t;const o=window;return!((e=o.Vaadin)===null||e===void 0)&&e.connectionIndicator||(o.Vaadin=o.Vaadin||{},o.Vaadin.connectionIndicator=document.createElement("vaadin-connection-indicator"),document.body.appendChild(o.Vaadin.connectionIndicator)),(t=o.Vaadin)===null||t===void 0?void 0:t.connectionIndicator}render(){return uo`
      <div class="v-loading-indicator ${this.loadingBarState}" style=${this.getLoadingBarStyle()}></div>

      <div
        class="v-status-message ${Eo({active:this.reconnecting})}"
      >
        <span class="text"> ${this.renderMessage()} </span>
      </div>
    `}connectedCallback(){var e;super.connectedCallback();const t=window;!((e=t.Vaadin)===null||e===void 0)&&e.connectionState&&(this.connectionStateStore=t.Vaadin.connectionState,this.connectionStateStore.addStateChangeListener(this.connectionStateListener),this.updateConnectionState()),this.updateTheme()}disconnectedCallback(){super.disconnectedCallback(),this.connectionStateStore&&this.connectionStateStore.removeStateChangeListener(this.connectionStateListener),this.updateTheme()}get applyDefaultTheme(){return this.applyDefaultThemeState}set applyDefaultTheme(e){e!==this.applyDefaultThemeState&&(this.applyDefaultThemeState=e,this.updateTheme())}createRenderRoot(){return this}updateConnectionState(){var e;const t=(e=this.connectionStateStore)===null||e===void 0?void 0:e.state;return this.offline=t===x.CONNECTION_LOST,this.reconnecting=t===x.RECONNECTING,this.updateLoading(t===x.LOADING),this.loading?!1:t!==this.lastMessageState?(this.lastMessageState=t,!0):!1}updateLoading(e){this.loading=e,this.loadingBarState=R.IDLE,this.firstTimeout=this.timeoutFor(this.firstTimeout,e,()=>{this.loadingBarState=R.FIRST},this.firstDelay),this.secondTimeout=this.timeoutFor(this.secondTimeout,e,()=>{this.loadingBarState=R.SECOND},this.secondDelay),this.thirdTimeout=this.timeoutFor(this.thirdTimeout,e,()=>{this.loadingBarState=R.THIRD},this.thirdDelay)}renderMessage(){return this.reconnecting?this.reconnectingText:this.offline?this.offlineText:this.onlineText}updateTheme(){if(this.applyDefaultThemeState&&this.isConnected){if(!document.getElementById(qe)){const e=document.createElement("style");e.id=qe,e.textContent=this.getDefaultStyle(),document.head.appendChild(e)}}else{const e=document.getElementById(qe);e&&document.head.removeChild(e)}}getDefaultStyle(){return`
      @keyframes v-progress-start {
        0% {
          width: 0%;
        }
        100% {
          width: 50%;
        }
      }
      @keyframes v-progress-delay {
        0% {
          width: 50%;
        }
        100% {
          width: 90%;
        }
      }
      @keyframes v-progress-wait {
        0% {
          width: 90%;
          height: 4px;
        }
        3% {
          width: 91%;
          height: 7px;
        }
        100% {
          width: 96%;
          height: 7px;
        }
      }
      @keyframes v-progress-wait-pulse {
        0% {
          opacity: 1;
        }
        50% {
          opacity: 0.1;
        }
        100% {
          opacity: 1;
        }
      }
      .v-loading-indicator,
      .v-status-message {
        position: fixed;
        z-index: 251;
        left: 0;
        right: auto;
        top: 0;
        background-color: var(--lumo-primary-color, var(--material-primary-color, blue));
        transition: none;
      }
      .v-loading-indicator {
        width: 50%;
        height: 4px;
        opacity: 1;
        pointer-events: none;
        animation: v-progress-start 1000ms 200ms both;
      }
      .v-loading-indicator[style*='none'] {
        display: block !important;
        width: 100%;
        opacity: 0;
        animation: none;
        transition: opacity 500ms 300ms, width 300ms;
      }
      .v-loading-indicator.second {
        width: 90%;
        animation: v-progress-delay 3.8s forwards;
      }
      .v-loading-indicator.third {
        width: 96%;
        animation: v-progress-wait 5s forwards, v-progress-wait-pulse 1s 4s infinite backwards;
      }

      vaadin-connection-indicator[offline] .v-loading-indicator,
      vaadin-connection-indicator[reconnecting] .v-loading-indicator {
        display: none;
      }

      .v-status-message {
        opacity: 0;
        width: 100%;
        max-height: var(--status-height-collapsed, 8px);
        overflow: hidden;
        background-color: var(--status-bg-color-online, var(--lumo-primary-color, var(--material-primary-color, blue)));
        color: var(
          --status-text-color-online,
          var(--lumo-primary-contrast-color, var(--material-primary-contrast-color, #fff))
        );
        font-size: 0.75rem;
        font-weight: 600;
        line-height: 1;
        transition: all 0.5s;
        padding: 0 0.5em;
      }

      vaadin-connection-indicator[offline] .v-status-message,
      vaadin-connection-indicator[reconnecting] .v-status-message {
        opacity: 1;
        background-color: var(--status-bg-color-offline, var(--lumo-shade, #333));
        color: var(
          --status-text-color-offline,
          var(--lumo-primary-contrast-color, var(--material-primary-contrast-color, #fff))
        );
        background-image: repeating-linear-gradient(
          45deg,
          rgba(255, 255, 255, 0),
          rgba(255, 255, 255, 0) 10px,
          rgba(255, 255, 255, 0.1) 10px,
          rgba(255, 255, 255, 0.1) 20px
        );
      }

      vaadin-connection-indicator[reconnecting] .v-status-message {
        animation: show-reconnecting-status 2s;
      }

      vaadin-connection-indicator[offline] .v-status-message:hover,
      vaadin-connection-indicator[reconnecting] .v-status-message:hover,
      vaadin-connection-indicator[expanded] .v-status-message {
        max-height: var(--status-height, 1.75rem);
      }

      vaadin-connection-indicator[expanded] .v-status-message {
        opacity: 1;
      }

      .v-status-message span {
        display: flex;
        align-items: center;
        justify-content: center;
        height: var(--status-height, 1.75rem);
      }

      vaadin-connection-indicator[reconnecting] .v-status-message span::before {
        content: '';
        width: 1em;
        height: 1em;
        border-top: 2px solid
          var(--status-spinner-color, var(--lumo-primary-color, var(--material-primary-color, blue)));
        border-left: 2px solid
          var(--status-spinner-color, var(--lumo-primary-color, var(--material-primary-color, blue)));
        border-right: 2px solid transparent;
        border-bottom: 2px solid transparent;
        border-radius: 50%;
        box-sizing: border-box;
        animation: v-spin 0.4s linear infinite;
        margin: 0 0.5em;
      }

      @keyframes v-spin {
        100% {
          transform: rotate(360deg);
        }
      }
    `}getLoadingBarStyle(){switch(this.loadingBarState){case R.IDLE:return"display: none";case R.FIRST:case R.SECOND:case R.THIRD:return"display: block";default:return""}}timeoutFor(e,t,o,i){return e!==0&&window.clearTimeout(e),t?window.setTimeout(o,i):0}static get instance(){return w.create()}}$([C({type:Number})],w.prototype,"firstDelay",void 0);$([C({type:Number})],w.prototype,"secondDelay",void 0);$([C({type:Number})],w.prototype,"thirdDelay",void 0);$([C({type:Number})],w.prototype,"expandedDuration",void 0);$([C({type:String})],w.prototype,"onlineText",void 0);$([C({type:String})],w.prototype,"offlineText",void 0);$([C({type:String})],w.prototype,"reconnectingText",void 0);$([C({type:Boolean,reflect:!0})],w.prototype,"offline",void 0);$([C({type:Boolean,reflect:!0})],w.prototype,"reconnecting",void 0);$([C({type:Boolean,reflect:!0})],w.prototype,"expanded",void 0);$([C({type:Boolean,reflect:!0})],w.prototype,"loading",void 0);$([C({type:String})],w.prototype,"loadingBarState",void 0);$([C({type:Boolean})],w.prototype,"applyDefaultTheme",null);customElements.get("vaadin-connection-indicator")===void 0&&customElements.define("vaadin-connection-indicator",w);w.instance;const de=window;de.Vaadin=de.Vaadin||{};de.Vaadin.registrations=de.Vaadin.registrations||[];de.Vaadin.registrations.push({is:"@vaadin/common-frontend",version:"0.0.18"});class Dt extends Error{}const oe=window.document.body,v=window;class $o{constructor(e){this.response=void 0,this.pathname="",this.isActive=!1,this.baseRegex=/^\//,oe.$=oe.$||[],this.config=e||{},v.Vaadin=v.Vaadin||{},v.Vaadin.Flow=v.Vaadin.Flow||{},v.Vaadin.Flow.clients={TypeScript:{isActive:()=>this.isActive}};const t=document.head.querySelector("base");this.baseRegex=new RegExp(`^${(document.baseURI||t&&t.href||"/").replace(/^https?:\/\/[^/]+/i,"")}`),this.appShellTitle=document.title,this.addConnectionIndicator()}get serverSideRoutes(){return[{path:"(.*)",action:this.action}]}loadingStarted(){this.isActive=!0,v.Vaadin.connectionState.loadingStarted()}loadingFinished(){this.isActive=!1,v.Vaadin.connectionState.loadingFinished()}get action(){return async e=>{if(this.pathname=e.pathname,v.Vaadin.connectionState.online)try{await this.flowInit()}catch(t){if(t instanceof Dt)return v.Vaadin.connectionState.state=x.CONNECTION_LOST,this.offlineStubAction();throw t}else return this.offlineStubAction();return this.container.onBeforeEnter=(t,o)=>this.flowNavigate(t,o),this.container.onBeforeLeave=(t,o)=>this.flowLeave(t,o),this.container}}async flowLeave(e,t){const{connectionState:o}=v.Vaadin;return this.pathname===e.pathname||!this.isFlowClientLoaded()||o.offline?Promise.resolve({}):new Promise(i=>{this.loadingStarted(),this.container.serverConnected=n=>{i(t&&n?t.prevent():{}),this.loadingFinished()},oe.$server.leaveNavigation(this.getFlowRoutePath(e),this.getFlowRouteQuery(e))})}async flowNavigate(e,t){return this.response?new Promise(o=>{this.loadingStarted(),this.container.serverConnected=(i,n)=>{t&&i?o(t.prevent()):t&&t.redirect&&n?o(t.redirect(n.pathname)):(this.container.style.display="",o(this.container)),this.loadingFinished()},oe.$server.connectClient(this.container.localName,this.container.id,this.getFlowRoutePath(e),this.getFlowRouteQuery(e),this.appShellTitle,history.state)}):Promise.resolve(this.container)}getFlowRoutePath(e){return decodeURIComponent(e.pathname).replace(this.baseRegex,"")}getFlowRouteQuery(e){return e.search&&e.search.substring(1)||""}async flowInit(e=!1){if(!this.isFlowClientLoaded()){this.loadingStarted(),this.response=await this.flowInitUi(e),this.response.appConfig.clientRouting=!e;const{pushScript:t,appConfig:o}=this.response;typeof t=="string"&&await this.loadScript(t);const{appId:i}=o;await(await Ge(()=>import("./FlowBootstrap-feff2646.js"),[],import.meta.url)).init(this.response),typeof this.config.imports=="function"&&(this.injectAppIdScript(i),await this.config.imports());const a=await Ge(()=>import("./FlowClient-e0ae8105.js"),[],import.meta.url);if(await this.flowInitClient(a),!e){const c=`flow-container-${i.toLowerCase()}`;this.container=document.createElement(c),oe.$[i]=this.container,this.container.id=i}this.loadingFinished()}return this.container&&!this.container.isConnected&&(this.container.style.display="none",document.body.appendChild(this.container)),this.response}async loadScript(e){return new Promise((t,o)=>{const i=document.createElement("script");i.onload=()=>t(),i.onerror=o,i.src=e,document.body.appendChild(i)})}injectAppIdScript(e){const t=e.substring(0,e.lastIndexOf("-")),o=document.createElement("script");o.type="module",o.setAttribute("data-app-id",t),document.body.append(o)}async flowInitClient(e){return e.init(),new Promise(t=>{const o=setInterval(()=>{Object.keys(v.Vaadin.Flow.clients).filter(n=>n!=="TypeScript").reduce((n,a)=>n||v.Vaadin.Flow.clients[a].isActive(),!1)||(clearInterval(o),t())},5)})}async flowInitUi(e){const t=v.Vaadin&&v.Vaadin.TypeScript&&v.Vaadin.TypeScript.initial;return t?(v.Vaadin.TypeScript.initial=void 0,Promise.resolve(t)):new Promise((o,i)=>{const a=new XMLHttpRequest,c=e?"&serverSideRouting":"",s=`?v-r=init&location=${encodeURIComponent(this.getFlowRoutePath(location))}&query=${encodeURIComponent(this.getFlowRouteQuery(location))}${c}`;a.open("GET",s),a.onerror=()=>i(new Dt(`Invalid server response when initializing Flow UI.
        ${a.status}
        ${a.responseText}`)),a.onload=()=>{const l=a.getResponseHeader("content-type");l&&l.indexOf("application/json")!==-1?o(JSON.parse(a.responseText)):a.onerror()},a.send()})}addConnectionIndicator(){w.create(),v.addEventListener("online",()=>{if(!this.isFlowClientLoaded()){v.Vaadin.connectionState.state=x.RECONNECTING;const e=new XMLHttpRequest;e.open("HEAD","sw.js"),e.onload=()=>{v.Vaadin.connectionState.state=x.CONNECTED},e.onerror=()=>{v.Vaadin.connectionState.state=x.CONNECTION_LOST},setTimeout(()=>e.send(),50)}}),v.addEventListener("offline",()=>{this.isFlowClientLoaded()||(v.Vaadin.connectionState.state=x.CONNECTION_LOST)})}async offlineStubAction(){const e=document.createElement("iframe"),t="./offline-stub.html";e.setAttribute("src",t),e.setAttribute("style","width: 100%; height: 100%; border: 0"),this.response=void 0;let o;const i=()=>{o!==void 0&&(v.Vaadin.connectionState.removeStateChangeListener(o),o=void 0)};return e.onBeforeEnter=(n,a,c)=>{o=()=>{v.Vaadin.connectionState.online&&(i(),c.render(n,!1))},v.Vaadin.connectionState.addStateChangeListener(o)},e.onBeforeLeave=(n,a,c)=>{i()},e}isFlowClientLoaded(){return this.response!==void 0}}const{serverSideRoutes:Co}=new $o({imports:()=>Ge(()=>import("./generated-flow-imports-8fa8e918.js").then(r=>r.az),[],import.meta.url)}),Ao=[...Co],To=new D(document.querySelector("#outlet"));To.setRoutes(Ao);(function(){if(typeof document>"u"||"adoptedStyleSheets"in document)return;var r="ShadyCSS"in window&&!ShadyCSS.nativeShadow,e=document.implementation.createHTMLDocument(""),t=new WeakMap,o=typeof DOMException=="object"?Error:DOMException,i=Object.defineProperty,n=Array.prototype.forEach,a=/@import.+?;?$/gm;function c(d){var m=d.replace(a,"");return m!==d&&console.warn("@import rules are not allowed here. See https://github.com/WICG/construct-stylesheets/issues/119#issuecomment-588352418"),m.trim()}function s(d){return"isConnected"in d?d.isConnected:document.contains(d)}function l(d){return d.filter(function(m,g){return d.indexOf(m)===g})}function p(d,m){return d.filter(function(g){return m.indexOf(g)===-1})}function h(d){d.parentNode.removeChild(d)}function u(d){return d.shadowRoot||t.get(d)}var f=["addRule","deleteRule","insertRule","removeRule"],k=CSSStyleSheet,T=k.prototype;T.replace=function(){return Promise.reject(new o("Can't call replace on non-constructed CSSStyleSheets."))},T.replaceSync=function(){throw new o("Failed to execute 'replaceSync' on 'CSSStyleSheet': Can't call replaceSync on non-constructed CSSStyleSheets.")};function me(d){return typeof d=="object"?H.isPrototypeOf(d)||T.isPrototypeOf(d):!1}function Oe(d){return typeof d=="object"?T.isPrototypeOf(d):!1}var A=new WeakMap,P=new WeakMap,j=new WeakMap,B=new WeakMap;function Pe(d,m){var g=document.createElement("style");return j.get(d).set(m,g),P.get(d).push(m),g}function I(d,m){return j.get(d).get(m)}function pe(d,m){j.get(d).delete(m),P.set(d,P.get(d).filter(function(g){return g!==m}))}function ot(d,m){requestAnimationFrame(function(){m.textContent=A.get(d).textContent,B.get(d).forEach(function(g){return m.sheet[g.method].apply(m.sheet,g.args)})})}function he(d){if(!A.has(d))throw new TypeError("Illegal invocation")}function ke(){var d=this,m=document.createElement("style");e.body.appendChild(m),A.set(d,m),P.set(d,[]),j.set(d,new WeakMap),B.set(d,[])}var H=ke.prototype;H.replace=function(m){try{return this.replaceSync(m),Promise.resolve(this)}catch(g){return Promise.reject(g)}},H.replaceSync=function(m){if(he(this),typeof m=="string"){var g=this;A.get(g).textContent=c(m),B.set(g,[]),P.get(g).forEach(function(S){S.isConnected()&&ot(g,I(g,S))})}},i(H,"cssRules",{configurable:!0,enumerable:!0,get:function(){return he(this),A.get(this).sheet.cssRules}}),i(H,"media",{configurable:!0,enumerable:!0,get:function(){return he(this),A.get(this).sheet.media}}),f.forEach(function(d){H[d]=function(){var m=this;he(m);var g=arguments;B.get(m).push({method:d,args:g}),P.get(m).forEach(function(E){if(E.isConnected()){var _=I(m,E).sheet;_[d].apply(_,g)}});var S=A.get(m).sheet;return S[d].apply(S,g)}}),i(ke,Symbol.hasInstance,{configurable:!0,value:me});var nt={childList:!0,subtree:!0},it=new WeakMap;function W(d){var m=it.get(d);return m||(m=new lt(d),it.set(d,m)),m}function at(d){i(d.prototype,"adoptedStyleSheets",{configurable:!0,enumerable:!0,get:function(){return W(this).sheets},set:function(m){W(this).update(m)}})}function Ie(d,m){for(var g=document.createNodeIterator(d,NodeFilter.SHOW_ELEMENT,function(E){return u(E)?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_REJECT},null,!1),S=void 0;S=g.nextNode();)m(u(S))}var fe=new WeakMap,q=new WeakMap,ge=new WeakMap;function fr(d,m){return m instanceof HTMLStyleElement&&q.get(d).some(function(g){return I(g,d)})}function st(d){var m=fe.get(d);return m instanceof Document?m.body:m}function Ne(d){var m=document.createDocumentFragment(),g=q.get(d),S=ge.get(d),E=st(d);S.disconnect(),g.forEach(function(_){m.appendChild(I(_,d)||Pe(_,d))}),E.insertBefore(m,null),S.observe(E,nt),g.forEach(function(_){ot(_,I(_,d))})}function lt(d){var m=this;m.sheets=[],fe.set(m,d),q.set(m,[]),ge.set(m,new MutationObserver(function(g,S){if(!document){S.disconnect();return}g.forEach(function(E){r||n.call(E.addedNodes,function(_){_ instanceof Element&&Ie(_,function(G){W(G).connect()})}),n.call(E.removedNodes,function(_){_ instanceof Element&&(fr(m,_)&&Ne(m),r||Ie(_,function(G){W(G).disconnect()}))})})}))}if(lt.prototype={isConnected:function(){var d=fe.get(this);return d instanceof Document?d.readyState!=="loading":s(d.host)},connect:function(){var d=st(this);ge.get(this).observe(d,nt),q.get(this).length>0&&Ne(this),Ie(d,function(m){W(m).connect()})},disconnect:function(){ge.get(this).disconnect()},update:function(d){var m=this,g=fe.get(m)===document?"Document":"ShadowRoot";if(!Array.isArray(d))throw new TypeError("Failed to set the 'adoptedStyleSheets' property on "+g+": Iterator getter is not callable.");if(!d.every(me))throw new TypeError("Failed to set the 'adoptedStyleSheets' property on "+g+": Failed to convert value to 'CSSStyleSheet'");if(d.some(Oe))throw new TypeError("Failed to set the 'adoptedStyleSheets' property on "+g+": Can't adopt non-constructed stylesheets");m.sheets=d;var S=q.get(m),E=l(d),_=p(S,E);_.forEach(function(G){h(I(G,m)),pe(G,m)}),q.set(m,E),m.isConnected()&&E.length>0&&Ne(m)}},window.CSSStyleSheet=ke,at(Document),"ShadowRoot"in window){at(ShadowRoot);var ct=Element.prototype,gr=ct.attachShadow;ct.attachShadow=function(m){var g=gr.call(this,m);return m.mode==="closed"&&t.set(this,g),g}}var ve=W(document);ve.isConnected()?ve.connect():document.addEventListener("DOMContentLoaded",ve.connect.bind(ve))})();const{toString:zo}=Object.prototype;function Ro(r){return zo.call(r)==="[object RegExp]"}function Lo(r,{preserve:e=!0,whitespace:t=!0,all:o}={}){if(o)throw new Error("The `all` option is no longer supported. Use the `preserve` option instead.");let i=e,n;typeof e=="function"?(i=!1,n=e):Ro(e)&&(i=!1,n=p=>e.test(p));let a=!1,c="",s="",l="";for(let p=0;p<r.length;p++){if(c=r[p],r[p-1]!=="\\"&&(c==='"'||c==="'")&&(a===c?a=!1:a||(a=c)),!a&&c==="/"&&r[p+1]==="*"){const h=r[p+2]==="!";let u=p+2;for(;u<r.length;u++){if(r[u]==="*"&&r[u+1]==="/"){i&&h||n&&n(s)?l+=`/*${s}*/`:t||(r[u+2]===`
`?u++:r[u+2]+r[u+3]===`\r
`&&(u+=2)),s="";break}s+=r[u]}p=u+1;continue}l+=c}return l}const Oo=y``;/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class Po extends HTMLElement{static get version(){return"24.0.2"}}customElements.define("vaadin-lumo-styles",Po);/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const ko=r=>class extends r{static get properties(){return{_theme:{type:String,readOnly:!0}}}static get observedAttributes(){return[...super.observedAttributes,"theme"]}attributeChangedCallback(t,o,i){super.attributeChangedCallback(t,o,i),t==="theme"&&this._set_theme(i)}};/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const or=[];function nr(r){return r&&Object.prototype.hasOwnProperty.call(r,"__themes")}function Io(r){return nr(customElements.get(r))}function No(r=[]){return[r].flat(1/0).filter(e=>e instanceof rt?!0:(console.warn("An item in styles is not of type CSSResult. Use `unsafeCSS` or `css`."),!1))}function Le(r,e,t={}){r&&Io(r)&&console.warn(`The custom element definition for "${r}"
      was finalized before a style module was registered.
      Make sure to add component specific style modules before
      importing the corresponding custom element.`),e=No(e),window.Vaadin&&window.Vaadin.styleModules?window.Vaadin.styleModules.registerStyles(r,e,t):or.push({themeFor:r,styles:e,include:t.include,moduleId:t.moduleId})}function Ye(){return window.Vaadin&&window.Vaadin.styleModules?window.Vaadin.styleModules.getAllThemes():or}function Mo(r,e){return(r||"").split(" ").some(t=>new RegExp(`^${t.split("*").join(".*")}$`,"u").test(e))}function Do(r=""){let e=0;return r.startsWith("lumo-")||r.startsWith("material-")?e=1:r.startsWith("vaadin-")&&(e=2),e}function ir(r){const e=[];return r.include&&[].concat(r.include).forEach(t=>{const o=Ye().find(i=>i.moduleId===t);o?e.push(...ir(o),...o.styles):console.warn(`Included moduleId ${t} not found in style registry`)},r.styles),e}function Fo(r,e){const t=document.createElement("style");t.innerHTML=r.map(o=>o.cssText).join(`
`),e.content.appendChild(t)}function Uo(r){const e=`${r}-default-theme`,t=Ye().filter(o=>o.moduleId!==e&&Mo(o.themeFor,r)).map(o=>({...o,styles:[...ir(o),...o.styles],includePriority:Do(o.moduleId)})).sort((o,i)=>i.includePriority-o.includePriority);return t.length>0?t:Ye().filter(o=>o.moduleId===e)}const cn=r=>class extends ko(r){static finalize(){if(super.finalize(),this.elementStyles)return;const t=this.prototype._template;!t||nr(this)||Fo(this.getStylesForThis(),t)}static finalizeStyles(t){const o=this.getStylesForThis();return t?[...super.finalizeStyles(t),...o]:o}static getStylesForThis(){const t=Object.getPrototypeOf(this.prototype),o=(t?t.constructor.__themes:[])||[];this.__themes=[...o,...Uo(this.is)];const i=this.__themes.flatMap(n=>n.styles);return i.filter((n,a)=>a===i.lastIndexOf(n))}};/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Vo=y`
  :host {
    /* prettier-ignore */
    --lumo-font-family: -apple-system, BlinkMacSystemFont, 'Roboto', 'Segoe UI', Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';

    /* Font sizes */
    --lumo-font-size-xxs: 0.75rem;
    --lumo-font-size-xs: 0.8125rem;
    --lumo-font-size-s: 0.875rem;
    --lumo-font-size-m: 1rem;
    --lumo-font-size-l: 1.125rem;
    --lumo-font-size-xl: 1.375rem;
    --lumo-font-size-xxl: 1.75rem;
    --lumo-font-size-xxxl: 2.5rem;

    /* Line heights */
    --lumo-line-height-xs: 1.25;
    --lumo-line-height-s: 1.375;
    --lumo-line-height-m: 1.625;
  }
`,ar=y`
  body,
  :host {
    font-family: var(--lumo-font-family);
    font-size: var(--lumo-font-size-m);
    line-height: var(--lumo-line-height-m);
    -webkit-text-size-adjust: 100%;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  small,
  [theme~='font-size-s'] {
    font-size: var(--lumo-font-size-s);
    line-height: var(--lumo-line-height-s);
  }

  [theme~='font-size-xs'] {
    font-size: var(--lumo-font-size-xs);
    line-height: var(--lumo-line-height-xs);
  }

  :where(h1, h2, h3, h4, h5, h6) {
    font-weight: 600;
    line-height: var(--lumo-line-height-xs);
    margin: 0;
  }

  :where(h1) {
    font-size: var(--lumo-font-size-xxxl);
  }

  :where(h2) {
    font-size: var(--lumo-font-size-xxl);
  }

  :where(h3) {
    font-size: var(--lumo-font-size-xl);
  }

  :where(h4) {
    font-size: var(--lumo-font-size-l);
  }

  :where(h5) {
    font-size: var(--lumo-font-size-m);
  }

  :where(h6) {
    font-size: var(--lumo-font-size-xs);
    text-transform: uppercase;
    letter-spacing: 0.03em;
  }

  p,
  blockquote {
    margin-top: 0.5em;
    margin-bottom: 0.75em;
  }

  a {
    text-decoration: none;
  }

  a:where(:any-link):hover {
    text-decoration: underline;
  }

  hr {
    display: block;
    align-self: stretch;
    height: 1px;
    border: 0;
    padding: 0;
    margin: var(--lumo-space-s) calc(var(--lumo-border-radius-m) / 2);
    background-color: var(--lumo-contrast-10pct);
  }

  blockquote {
    border-left: 2px solid var(--lumo-contrast-30pct);
  }

  b,
  strong {
    font-weight: 600;
  }

  /* RTL specific styles */
  blockquote[dir='rtl'] {
    border-left: none;
    border-right: 2px solid var(--lumo-contrast-30pct);
  }
`;Le("",ar,{moduleId:"lumo-typography"});const sr=document.createElement("template");sr.innerHTML=`<style>${Vo.toString().replace(":host","html")}</style>`;document.head.appendChild(sr.content);/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const jo=y`
  :host {
    /* Base (background) */
    --lumo-base-color: #fff;

    /* Tint */
    --lumo-tint-5pct: hsla(0, 0%, 100%, 0.3);
    --lumo-tint-10pct: hsla(0, 0%, 100%, 0.37);
    --lumo-tint-20pct: hsla(0, 0%, 100%, 0.44);
    --lumo-tint-30pct: hsla(0, 0%, 100%, 0.5);
    --lumo-tint-40pct: hsla(0, 0%, 100%, 0.57);
    --lumo-tint-50pct: hsla(0, 0%, 100%, 0.64);
    --lumo-tint-60pct: hsla(0, 0%, 100%, 0.7);
    --lumo-tint-70pct: hsla(0, 0%, 100%, 0.77);
    --lumo-tint-80pct: hsla(0, 0%, 100%, 0.84);
    --lumo-tint-90pct: hsla(0, 0%, 100%, 0.9);
    --lumo-tint: #fff;

    /* Shade */
    --lumo-shade-5pct: hsla(214, 61%, 25%, 0.05);
    --lumo-shade-10pct: hsla(214, 57%, 24%, 0.1);
    --lumo-shade-20pct: hsla(214, 53%, 23%, 0.16);
    --lumo-shade-30pct: hsla(214, 50%, 22%, 0.26);
    --lumo-shade-40pct: hsla(214, 47%, 21%, 0.38);
    --lumo-shade-50pct: hsla(214, 45%, 20%, 0.52);
    --lumo-shade-60pct: hsla(214, 43%, 19%, 0.6);
    --lumo-shade-70pct: hsla(214, 42%, 18%, 0.69);
    --lumo-shade-80pct: hsla(214, 41%, 17%, 0.83);
    --lumo-shade-90pct: hsla(214, 40%, 16%, 0.94);
    --lumo-shade: hsl(214, 35%, 15%);

    /* Contrast */
    --lumo-contrast-5pct: var(--lumo-shade-5pct);
    --lumo-contrast-10pct: var(--lumo-shade-10pct);
    --lumo-contrast-20pct: var(--lumo-shade-20pct);
    --lumo-contrast-30pct: var(--lumo-shade-30pct);
    --lumo-contrast-40pct: var(--lumo-shade-40pct);
    --lumo-contrast-50pct: var(--lumo-shade-50pct);
    --lumo-contrast-60pct: var(--lumo-shade-60pct);
    --lumo-contrast-70pct: var(--lumo-shade-70pct);
    --lumo-contrast-80pct: var(--lumo-shade-80pct);
    --lumo-contrast-90pct: var(--lumo-shade-90pct);
    --lumo-contrast: var(--lumo-shade);

    /* Text */
    --lumo-header-text-color: var(--lumo-contrast);
    --lumo-body-text-color: var(--lumo-contrast-90pct);
    --lumo-secondary-text-color: var(--lumo-contrast-70pct);
    --lumo-tertiary-text-color: var(--lumo-contrast-50pct);
    --lumo-disabled-text-color: var(--lumo-contrast-30pct);

    /* Primary */
    --lumo-primary-color: hsl(214, 100%, 48%);
    --lumo-primary-color-50pct: hsla(214, 100%, 49%, 0.76);
    --lumo-primary-color-10pct: hsla(214, 100%, 60%, 0.13);
    --lumo-primary-text-color: hsl(214, 100%, 43%);
    --lumo-primary-contrast-color: #fff;

    /* Error */
    --lumo-error-color: hsl(3, 85%, 48%);
    --lumo-error-color-50pct: hsla(3, 85%, 49%, 0.5);
    --lumo-error-color-10pct: hsla(3, 85%, 49%, 0.1);
    --lumo-error-text-color: hsl(3, 89%, 42%);
    --lumo-error-contrast-color: #fff;

    /* Success */
    --lumo-success-color: hsl(145, 72%, 30%);
    --lumo-success-color-50pct: hsla(145, 72%, 31%, 0.5);
    --lumo-success-color-10pct: hsla(145, 72%, 31%, 0.1);
    --lumo-success-text-color: hsl(145, 85%, 25%);
    --lumo-success-contrast-color: #fff;
  }
`,lr=document.createElement("template");lr.innerHTML=`<style>${jo.toString().replace(":host","html")}</style>`;document.head.appendChild(lr.content);const cr=y`
  [theme~='dark'] {
    /* Base (background) */
    --lumo-base-color: hsl(214, 35%, 21%);

    /* Tint */
    --lumo-tint-5pct: hsla(214, 65%, 85%, 0.06);
    --lumo-tint-10pct: hsla(214, 60%, 80%, 0.14);
    --lumo-tint-20pct: hsla(214, 64%, 82%, 0.23);
    --lumo-tint-30pct: hsla(214, 69%, 84%, 0.32);
    --lumo-tint-40pct: hsla(214, 73%, 86%, 0.41);
    --lumo-tint-50pct: hsla(214, 78%, 88%, 0.5);
    --lumo-tint-60pct: hsla(214, 82%, 90%, 0.58);
    --lumo-tint-70pct: hsla(214, 87%, 92%, 0.69);
    --lumo-tint-80pct: hsla(214, 91%, 94%, 0.8);
    --lumo-tint-90pct: hsla(214, 96%, 96%, 0.9);
    --lumo-tint: hsl(214, 100%, 98%);

    /* Shade */
    --lumo-shade-5pct: hsla(214, 0%, 0%, 0.07);
    --lumo-shade-10pct: hsla(214, 4%, 2%, 0.15);
    --lumo-shade-20pct: hsla(214, 8%, 4%, 0.23);
    --lumo-shade-30pct: hsla(214, 12%, 6%, 0.32);
    --lumo-shade-40pct: hsla(214, 16%, 8%, 0.41);
    --lumo-shade-50pct: hsla(214, 20%, 10%, 0.5);
    --lumo-shade-60pct: hsla(214, 24%, 12%, 0.6);
    --lumo-shade-70pct: hsla(214, 28%, 13%, 0.7);
    --lumo-shade-80pct: hsla(214, 32%, 13%, 0.8);
    --lumo-shade-90pct: hsla(214, 33%, 13%, 0.9);
    --lumo-shade: hsl(214, 33%, 13%);

    /* Contrast */
    --lumo-contrast-5pct: var(--lumo-tint-5pct);
    --lumo-contrast-10pct: var(--lumo-tint-10pct);
    --lumo-contrast-20pct: var(--lumo-tint-20pct);
    --lumo-contrast-30pct: var(--lumo-tint-30pct);
    --lumo-contrast-40pct: var(--lumo-tint-40pct);
    --lumo-contrast-50pct: var(--lumo-tint-50pct);
    --lumo-contrast-60pct: var(--lumo-tint-60pct);
    --lumo-contrast-70pct: var(--lumo-tint-70pct);
    --lumo-contrast-80pct: var(--lumo-tint-80pct);
    --lumo-contrast-90pct: var(--lumo-tint-90pct);
    --lumo-contrast: var(--lumo-tint);

    /* Text */
    --lumo-header-text-color: var(--lumo-contrast);
    --lumo-body-text-color: var(--lumo-contrast-90pct);
    --lumo-secondary-text-color: var(--lumo-contrast-70pct);
    --lumo-tertiary-text-color: var(--lumo-contrast-50pct);
    --lumo-disabled-text-color: var(--lumo-contrast-30pct);

    /* Primary */
    --lumo-primary-color: hsl(214, 90%, 48%);
    --lumo-primary-color-50pct: hsla(214, 90%, 70%, 0.69);
    --lumo-primary-color-10pct: hsla(214, 90%, 55%, 0.13);
    --lumo-primary-text-color: hsl(214, 90%, 77%);
    --lumo-primary-contrast-color: #fff;

    /* Error */
    --lumo-error-color: hsl(3, 79%, 49%);
    --lumo-error-color-50pct: hsla(3, 75%, 62%, 0.5);
    --lumo-error-color-10pct: hsla(3, 75%, 62%, 0.14);
    --lumo-error-text-color: hsl(3, 100%, 80%);

    /* Success */
    --lumo-success-color: hsl(145, 72%, 30%);
    --lumo-success-color-50pct: hsla(145, 92%, 51%, 0.5);
    --lumo-success-color-10pct: hsla(145, 92%, 51%, 0.1);
    --lumo-success-text-color: hsl(145, 85%, 46%);
  }

  html {
    color: var(--lumo-body-text-color);
    background-color: var(--lumo-base-color);
    color-scheme: light;
  }

  [theme~='dark'] {
    color: var(--lumo-body-text-color);
    background-color: var(--lumo-base-color);
    color-scheme: dark;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    color: var(--lumo-header-text-color);
  }

  a:where(:any-link) {
    color: var(--lumo-primary-text-color);
  }

  a:not(:any-link) {
    color: var(--lumo-disabled-text-color);
  }

  blockquote {
    color: var(--lumo-secondary-text-color);
  }

  code,
  pre {
    background-color: var(--lumo-contrast-10pct);
    border-radius: var(--lumo-border-radius-m);
  }
`;Le("",cr,{moduleId:"lumo-color"});/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const dr=y`
  :host {
    /* Square */
    --lumo-space-xs: 0.25rem;
    --lumo-space-s: 0.5rem;
    --lumo-space-m: 1rem;
    --lumo-space-l: 1.5rem;
    --lumo-space-xl: 2.5rem;

    /* Wide */
    --lumo-space-wide-xs: calc(var(--lumo-space-xs) / 2) var(--lumo-space-xs);
    --lumo-space-wide-s: calc(var(--lumo-space-s) / 2) var(--lumo-space-s);
    --lumo-space-wide-m: calc(var(--lumo-space-m) / 2) var(--lumo-space-m);
    --lumo-space-wide-l: calc(var(--lumo-space-l) / 2) var(--lumo-space-l);
    --lumo-space-wide-xl: calc(var(--lumo-space-xl) / 2) var(--lumo-space-xl);

    /* Tall */
    --lumo-space-tall-xs: var(--lumo-space-xs) calc(var(--lumo-space-xs) / 2);
    --lumo-space-tall-s: var(--lumo-space-s) calc(var(--lumo-space-s) / 2);
    --lumo-space-tall-m: var(--lumo-space-m) calc(var(--lumo-space-m) / 2);
    --lumo-space-tall-l: var(--lumo-space-l) calc(var(--lumo-space-l) / 2);
    --lumo-space-tall-xl: var(--lumo-space-xl) calc(var(--lumo-space-xl) / 2);
  }
`,ur=document.createElement("template");ur.innerHTML=`<style>${dr.toString().replace(":host","html")}</style>`;document.head.appendChild(ur.content);/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Bo=y`
  :host {
    /* Border radius */
    --lumo-border-radius-s: 0.25em; /* Checkbox, badge, date-picker year indicator, etc */
    --lumo-border-radius-m: var(--lumo-border-radius, 0.25em); /* Button, text field, menu overlay, etc */
    --lumo-border-radius-l: 0.5em; /* Dialog, notification, etc */

    /* Shadow */
    --lumo-box-shadow-xs: 0 1px 4px -1px var(--lumo-shade-50pct);
    --lumo-box-shadow-s: 0 2px 4px -1px var(--lumo-shade-20pct), 0 3px 12px -1px var(--lumo-shade-30pct);
    --lumo-box-shadow-m: 0 2px 6px -1px var(--lumo-shade-20pct), 0 8px 24px -4px var(--lumo-shade-40pct);
    --lumo-box-shadow-l: 0 3px 18px -2px var(--lumo-shade-20pct), 0 12px 48px -6px var(--lumo-shade-40pct);
    --lumo-box-shadow-xl: 0 4px 24px -3px var(--lumo-shade-20pct), 0 18px 64px -8px var(--lumo-shade-40pct);

    /* Clickable element cursor */
    --lumo-clickable-cursor: default;
  }
`;y`
  html {
    --vaadin-checkbox-size: calc(var(--lumo-size-m) / 2);
    --vaadin-radio-button-size: calc(var(--lumo-size-m) / 2);
    --vaadin-input-field-border-radius: var(--lumo-border-radius-m);
  }
`;const mr=document.createElement("template");mr.innerHTML=`<style>${Bo.toString().replace(":host","html")}$</style>`;document.head.appendChild(mr.content);/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const pr=y`
  [theme~='badge'] {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
    padding: 0.4em calc(0.5em + var(--lumo-border-radius-s) / 4);
    color: var(--lumo-primary-text-color);
    background-color: var(--lumo-primary-color-10pct);
    border-radius: var(--lumo-border-radius-s);
    font-family: var(--lumo-font-family);
    font-size: var(--lumo-font-size-s);
    line-height: 1;
    font-weight: 500;
    text-transform: initial;
    letter-spacing: initial;
    min-width: calc(var(--lumo-line-height-xs) * 1em + 0.45em);
    flex-shrink: 0;
  }

  /* Ensure proper vertical alignment */
  [theme~='badge']::before {
    display: inline-block;
    content: '\\2003';
    width: 0;
  }

  [theme~='badge'][theme~='small'] {
    font-size: var(--lumo-font-size-xxs);
    line-height: 1;
  }

  /* Colors */

  [theme~='badge'][theme~='success'] {
    color: var(--lumo-success-text-color);
    background-color: var(--lumo-success-color-10pct);
  }

  [theme~='badge'][theme~='error'] {
    color: var(--lumo-error-text-color);
    background-color: var(--lumo-error-color-10pct);
  }

  [theme~='badge'][theme~='contrast'] {
    color: var(--lumo-contrast-80pct);
    background-color: var(--lumo-contrast-5pct);
  }

  /* Primary */

  [theme~='badge'][theme~='primary'] {
    color: var(--lumo-primary-contrast-color);
    background-color: var(--lumo-primary-color);
  }

  [theme~='badge'][theme~='success'][theme~='primary'] {
    color: var(--lumo-success-contrast-color);
    background-color: var(--lumo-success-color);
  }

  [theme~='badge'][theme~='error'][theme~='primary'] {
    color: var(--lumo-error-contrast-color);
    background-color: var(--lumo-error-color);
  }

  [theme~='badge'][theme~='contrast'][theme~='primary'] {
    color: var(--lumo-base-color);
    background-color: var(--lumo-contrast);
  }

  /* Links */

  [theme~='badge'][href]:hover {
    text-decoration: none;
  }

  /* Icon */

  [theme~='badge'] vaadin-icon {
    margin: -0.25em 0;
  }

  [theme~='badge'] vaadin-icon:first-child {
    margin-left: -0.375em;
  }

  [theme~='badge'] vaadin-icon:last-child {
    margin-right: -0.375em;
  }

  vaadin-icon[theme~='badge'][icon] {
    min-width: 0;
    padding: 0;
    font-size: 1rem;
    width: var(--lumo-icon-size-m);
    height: var(--lumo-icon-size-m);
  }

  vaadin-icon[theme~='badge'][icon][theme~='small'] {
    width: var(--lumo-icon-size-s);
    height: var(--lumo-icon-size-s);
  }

  /* Empty */

  [theme~='badge']:not([icon]):empty {
    min-width: 0;
    width: 1em;
    height: 1em;
    padding: 0;
    border-radius: 50%;
    background-color: var(--lumo-primary-color);
  }

  [theme~='badge'][theme~='small']:not([icon]):empty {
    width: 0.75em;
    height: 0.75em;
  }

  [theme~='badge'][theme~='contrast']:not([icon]):empty {
    background-color: var(--lumo-contrast);
  }

  [theme~='badge'][theme~='success']:not([icon]):empty {
    background-color: var(--lumo-success-color);
  }

  [theme~='badge'][theme~='error']:not([icon]):empty {
    background-color: var(--lumo-error-color);
  }

  /* Pill */

  [theme~='badge'][theme~='pill'] {
    --lumo-border-radius-s: 1em;
  }

  /* RTL specific styles */

  [dir='rtl'][theme~='badge'] vaadin-icon:first-child {
    margin-right: -0.375em;
    margin-left: 0;
  }

  [dir='rtl'][theme~='badge'] vaadin-icon:last-child {
    margin-left: -0.375em;
    margin-right: 0;
  }
`;Le("",pr,{moduleId:"lumo-badge"});/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Ho=y`
  /* === Screen readers === */
  .sr-only {
    border-width: 0;
    clip: rect(0, 0, 0, 0);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    white-space: nowrap;
    width: 1px;
  }
`;/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Wo=y`
  /* === Background color === */
  .bg-base {
    background-color: var(--lumo-base-color);
  }

  .bg-transparent {
    background-color: transparent;
  }

  .bg-contrast-5 {
    background-color: var(--lumo-contrast-5pct);
  }
  .bg-contrast-10 {
    background-color: var(--lumo-contrast-10pct);
  }
  .bg-contrast-20 {
    background-color: var(--lumo-contrast-20pct);
  }
  .bg-contrast-30 {
    background-color: var(--lumo-contrast-30pct);
  }
  .bg-contrast-40 {
    background-color: var(--lumo-contrast-40pct);
  }
  .bg-contrast-50 {
    background-color: var(--lumo-contrast-50pct);
  }
  .bg-contrast-60 {
    background-color: var(--lumo-contrast-60pct);
  }
  .bg-contrast-70 {
    background-color: var(--lumo-contrast-70pct);
  }
  .bg-contrast-80 {
    background-color: var(--lumo-contrast-80pct);
  }
  .bg-contrast-90 {
    background-color: var(--lumo-contrast-90pct);
  }
  .bg-contrast {
    background-color: var(--lumo-contrast);
  }

  .bg-primary {
    background-color: var(--lumo-primary-color);
  }
  .bg-primary-50 {
    background-color: var(--lumo-primary-color-50pct);
  }
  .bg-primary-10 {
    background-color: var(--lumo-primary-color-10pct);
  }

  .bg-error {
    background-color: var(--lumo-error-color);
  }
  .bg-error-50 {
    background-color: var(--lumo-error-color-50pct);
  }
  .bg-error-10 {
    background-color: var(--lumo-error-color-10pct);
  }

  .bg-success {
    background-color: var(--lumo-success-color);
  }
  .bg-success-50 {
    background-color: var(--lumo-success-color-50pct);
  }
  .bg-success-10 {
    background-color: var(--lumo-success-color-10pct);
  }
`;/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const qo=y`
  /* === Border === */
  .border-0 {
    border: none;
  }
  .border {
    border: 1px solid;
  }
  .border-b {
    border-bottom: 1px solid;
  }
  .border-l {
    border-left: 1px solid;
  }
  .border-r {
    border-right: 1px solid;
  }
  .border-t {
    border-top: 1px solid;
  }

  /* === Border color === */
  .border-contrast-5 {
    border-color: var(--lumo-contrast-5pct);
  }
  .border-contrast-10 {
    border-color: var(--lumo-contrast-10pct);
  }
  .border-contrast-20 {
    border-color: var(--lumo-contrast-20pct);
  }
  .border-contrast-30 {
    border-color: var(--lumo-contrast-30pct);
  }
  .border-contrast-40 {
    border-color: var(--lumo-contrast-40pct);
  }
  .border-contrast-50 {
    border-color: var(--lumo-contrast-50pct);
  }
  .border-contrast-60 {
    border-color: var(--lumo-contrast-60pct);
  }
  .border-contrast-70 {
    border-color: var(--lumo-contrast-70pct);
  }
  .border-contrast-80 {
    border-color: var(--lumo-contrast-80pct);
  }
  .border-contrast-90 {
    border-color: var(--lumo-contrast-90pct);
  }
  .border-contrast {
    border-color: var(--lumo-contrast);
  }

  .border-primary {
    border-color: var(--lumo-primary-color);
  }
  .border-primary-50 {
    border-color: var(--lumo-primary-color-50pct);
  }
  .border-primary-10 {
    border-color: var(--lumo-primary-color-10pct);
  }

  .border-error {
    border-color: var(--lumo-error-color);
  }
  .border-error-50 {
    border-color: var(--lumo-error-color-50pct);
  }
  .border-error-10 {
    border-color: var(--lumo-error-color-10pct);
  }

  .border-success {
    border-color: var(--lumo-success-color);
  }
  .border-success-50 {
    border-color: var(--lumo-success-color-50pct);
  }
  .border-success-10 {
    border-color: var(--lumo-success-color-10pct);
  }

  /* === Border radius === */
  .rounded-none {
    border-radius: 0;
  }
  .rounded-s {
    border-radius: var(--lumo-border-radius-s);
  }
  .rounded-m {
    border-radius: var(--lumo-border-radius-m);
  }
  .rounded-l {
    border-radius: var(--lumo-border-radius-l);
  }
`;/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Go=y`
  /* === Align content === */
  .content-center {
    align-content: center;
  }
  .content-end {
    align-content: flex-end;
  }
  .content-start {
    align-content: flex-start;
  }
  .content-around {
    align-content: space-around;
  }
  .content-between {
    align-content: space-between;
  }
  .content-evenly {
    align-content: space-evenly;
  }
  .content-stretch {
    align-content: stretch;
  }

  /* === Align items === */
  .items-baseline {
    align-items: baseline;
  }
  .items-center {
    align-items: center;
  }
  .items-end {
    align-items: flex-end;
  }
  .items-start {
    align-items: flex-start;
  }
  .items-stretch {
    align-items: stretch;
  }

  /* === Align self === */
  .self-auto {
    align-self: auto;
  }
  .self-baseline {
    align-self: baseline;
  }
  .self-center {
    align-self: center;
  }
  .self-end {
    align-self: flex-end;
  }
  .self-start {
    align-self: flex-start;
  }
  .self-stretch {
    align-self: stretch;
  }

  /* === Flex === */
  .flex-auto {
    flex: auto;
  }
  .flex-none {
    flex: none;
  }

  /* === Flex direction === */
  .flex-col {
    flex-direction: column;
  }
  .flex-col-reverse {
    flex-direction: column-reverse;
  }
  .flex-row {
    flex-direction: row;
  }
  .flex-row-reverse {
    flex-direction: row-reverse;
  }

  /* === Flex grow === */
  .flex-grow-0 {
    flex-grow: 0;
  }
  .flex-grow {
    flex-grow: 1;
  }

  /* === Flex shrink === */
  .flex-shrink-0 {
    flex-shrink: 0;
  }
  .flex-shrink {
    flex-shrink: 1;
  }

  /* === Flex wrap === */
  .flex-nowrap {
    flex-wrap: nowrap;
  }
  .flex-wrap {
    flex-wrap: wrap;
  }
  .flex-wrap-reverse {
    flex-wrap: wrap-reverse;
  }

  /* === Gap === */
  .gap-xs {
    gap: var(--lumo-space-xs);
  }
  .gap-s {
    gap: var(--lumo-space-s);
  }
  .gap-m {
    gap: var(--lumo-space-m);
  }
  .gap-l {
    gap: var(--lumo-space-l);
  }
  .gap-xl {
    gap: var(--lumo-space-xl);
  }

  /* === Gap (column) === */
  .gap-x-xs {
    column-gap: var(--lumo-space-xs);
  }
  .gap-x-s {
    column-gap: var(--lumo-space-s);
  }
  .gap-x-m {
    column-gap: var(--lumo-space-m);
  }
  .gap-x-l {
    column-gap: var(--lumo-space-l);
  }
  .gap-x-xl {
    column-gap: var(--lumo-space-xl);
  }

  /* === Gap (row) === */
  .gap-y-xs {
    row-gap: var(--lumo-space-xs);
  }
  .gap-y-s {
    row-gap: var(--lumo-space-s);
  }
  .gap-y-m {
    row-gap: var(--lumo-space-m);
  }
  .gap-y-l {
    row-gap: var(--lumo-space-l);
  }
  .gap-y-xl {
    row-gap: var(--lumo-space-xl);
  }

  /* === Grid auto flow === */
  .grid-flow-col {
    grid-auto-flow: column;
  }
  .grid-flow-row {
    grid-auto-flow: row;
  }

  /* === Grid columns === */
  .grid-cols-1 {
    grid-template-columns: repeat(1, minmax(0, 1fr));
  }
  .grid-cols-2 {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
  .grid-cols-3 {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
  .grid-cols-4 {
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }
  .grid-cols-5 {
    grid-template-columns: repeat(5, minmax(0, 1fr));
  }
  .grid-cols-6 {
    grid-template-columns: repeat(6, minmax(0, 1fr));
  }
  .grid-cols-7 {
    grid-template-columns: repeat(7, minmax(0, 1fr));
  }
  .grid-cols-8 {
    grid-template-columns: repeat(8, minmax(0, 1fr));
  }
  .grid-cols-9 {
    grid-template-columns: repeat(9, minmax(0, 1fr));
  }
  .grid-cols-10 {
    grid-template-columns: repeat(10, minmax(0, 1fr));
  }
  .grid-cols-11 {
    grid-template-columns: repeat(11, minmax(0, 1fr));
  }
  .grid-cols-12 {
    grid-template-columns: repeat(12, minmax(0, 1fr));
  }

  /* === Grid rows === */
  .grid-rows-1 {
    grid-template-rows: repeat(1, minmax(0, 1fr));
  }
  .grid-rows-2 {
    grid-template-rows: repeat(2, minmax(0, 1fr));
  }
  .grid-rows-3 {
    grid-template-rows: repeat(3, minmax(0, 1fr));
  }
  .grid-rows-4 {
    grid-template-rows: repeat(4, minmax(0, 1fr));
  }
  .grid-rows-5 {
    grid-template-rows: repeat(5, minmax(0, 1fr));
  }
  .grid-rows-6 {
    grid-template-rows: repeat(6, minmax(0, 1fr));
  }

  /* === Justify content === */
  .justify-center {
    justify-content: center;
  }
  .justify-end {
    justify-content: flex-end;
  }
  .justify-start {
    justify-content: flex-start;
  }
  .justify-around {
    justify-content: space-around;
  }
  .justify-between {
    justify-content: space-between;
  }
  .justify-evenly {
    justify-content: space-evenly;
  }

  /* === Span (column) === */
  .col-span-1 {
    grid-column: span 1 / span 1;
  }
  .col-span-2 {
    grid-column: span 2 / span 2;
  }
  .col-span-3 {
    grid-column: span 3 / span 3;
  }
  .col-span-4 {
    grid-column: span 4 / span 4;
  }
  .col-span-5 {
    grid-column: span 5 / span 5;
  }
  .col-span-6 {
    grid-column: span 6 / span 6;
  }
  .col-span-7 {
    grid-column: span 7 / span 7;
  }
  .col-span-8 {
    grid-column: span 8 / span 8;
  }
  .col-span-9 {
    grid-column: span 9 / span 9;
  }
  .col-span-10 {
    grid-column: span 10 / span 10;
  }
  .col-span-11 {
    grid-column: span 11 / span 11;
  }
  .col-span-12 {
    grid-column: span 12 / span 12;
  }

  /* === Span (row) === */
  .row-span-1 {
    grid-row: span 1 / span 1;
  }
  .row-span-2 {
    grid-row: span 2 / span 2;
  }
  .row-span-3 {
    grid-row: span 3 / span 3;
  }
  .row-span-4 {
    grid-row: span 4 / span 4;
  }
  .row-span-5 {
    grid-row: span 5 / span 5;
  }
  .row-span-6 {
    grid-row: span 6 / span 6;
  }

  /* === Responsive design === */
  @media (min-width: 640px) {
    .sm\\:flex-col {
      flex-direction: column;
    }
    .sm\\:flex-row {
      flex-direction: row;
    }
    .sm\\:grid-cols-1 {
      grid-template-columns: repeat(1, minmax(0, 1fr));
    }
    .sm\\:grid-cols-2 {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }
    .sm\\:grid-cols-3 {
      grid-template-columns: repeat(3, minmax(0, 1fr));
    }
    .sm\\:grid-cols-4 {
      grid-template-columns: repeat(4, minmax(0, 1fr));
    }
    .sm\\:grid-cols-5 {
      grid-template-columns: repeat(5, minmax(0, 1fr));
    }
    .sm\\:grid-cols-6 {
      grid-template-columns: repeat(6, minmax(0, 1fr));
    }
    .sm\\:grid-cols-7 {
      grid-template-columns: repeat(7, minmax(0, 1fr));
    }
    .sm\\:grid-cols-8 {
      grid-template-columns: repeat(8, minmax(0, 1fr));
    }
    .sm\\:grid-cols-9 {
      grid-template-columns: repeat(9, minmax(0, 1fr));
    }
    .sm\\:grid-cols-10 {
      grid-template-columns: repeat(10, minmax(0, 1fr));
    }
    .sm\\:grid-cols-11 {
      grid-template-columns: repeat(11, minmax(0, 1fr));
    }
    .sm\\:grid-cols-12 {
      grid-template-columns: repeat(12, minmax(0, 1fr));
    }
  }

  @media (min-width: 768px) {
    .md\\:flex-col {
      flex-direction: column;
    }
    .md\\:flex-row {
      flex-direction: row;
    }
    .md\\:grid-cols-1 {
      grid-template-columns: repeat(1, minmax(0, 1fr));
    }
    .md\\:grid-cols-2 {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }
    .md\\:grid-cols-3 {
      grid-template-columns: repeat(3, minmax(0, 1fr));
    }
    .md\\:grid-cols-4 {
      grid-template-columns: repeat(4, minmax(0, 1fr));
    }
    .md\\:grid-cols-5 {
      grid-template-columns: repeat(5, minmax(0, 1fr));
    }
    .md\\:grid-cols-6 {
      grid-template-columns: repeat(6, minmax(0, 1fr));
    }
    .md\\:grid-cols-7 {
      grid-template-columns: repeat(7, minmax(0, 1fr));
    }
    .md\\:grid-cols-8 {
      grid-template-columns: repeat(8, minmax(0, 1fr));
    }
    .md\\:grid-cols-9 {
      grid-template-columns: repeat(9, minmax(0, 1fr));
    }
    .md\\:grid-cols-10 {
      grid-template-columns: repeat(10, minmax(0, 1fr));
    }
    .md\\:grid-cols-11 {
      grid-template-columns: repeat(11, minmax(0, 1fr));
    }
    .md\\:grid-cols-12 {
      grid-template-columns: repeat(12, minmax(0, 1fr));
    }
  }
  @media (min-width: 1024px) {
    .lg\\:flex-col {
      flex-direction: column;
    }
    .lg\\:flex-row {
      flex-direction: row;
    }
    .lg\\:grid-cols-1 {
      grid-template-columns: repeat(1, minmax(0, 1fr));
    }
    .lg\\:grid-cols-2 {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }
    .lg\\:grid-cols-3 {
      grid-template-columns: repeat(3, minmax(0, 1fr));
    }
    .lg\\:grid-cols-4 {
      grid-template-columns: repeat(4, minmax(0, 1fr));
    }
    .lg\\:grid-cols-5 {
      grid-template-columns: repeat(5, minmax(0, 1fr));
    }
    .lg\\:grid-cols-6 {
      grid-template-columns: repeat(6, minmax(0, 1fr));
    }
    .lg\\:grid-cols-7 {
      grid-template-columns: repeat(7, minmax(0, 1fr));
    }
    .lg\\:grid-cols-8 {
      grid-template-columns: repeat(8, minmax(0, 1fr));
    }
    .lg\\:grid-cols-9 {
      grid-template-columns: repeat(9, minmax(0, 1fr));
    }
    .lg\\:grid-cols-10 {
      grid-template-columns: repeat(10, minmax(0, 1fr));
    }
    .lg\\:grid-cols-11 {
      grid-template-columns: repeat(11, minmax(0, 1fr));
    }
    .lg\\:grid-cols-12 {
      grid-template-columns: repeat(12, minmax(0, 1fr));
    }
  }
  @media (min-width: 1280px) {
    .xl\\:flex-col {
      flex-direction: column;
    }
    .xl\\:flex-row {
      flex-direction: row;
    }
    .xl\\:grid-cols-1 {
      grid-template-columns: repeat(1, minmax(0, 1fr));
    }
    .xl\\:grid-cols-2 {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }
    .xl\\:grid-cols-3 {
      grid-template-columns: repeat(3, minmax(0, 1fr));
    }
    .xl\\:grid-cols-4 {
      grid-template-columns: repeat(4, minmax(0, 1fr));
    }
    .xl\\:grid-cols-5 {
      grid-template-columns: repeat(5, minmax(0, 1fr));
    }
    .xl\\:grid-cols-6 {
      grid-template-columns: repeat(6, minmax(0, 1fr));
    }
    .xl\\:grid-cols-7 {
      grid-template-columns: repeat(7, minmax(0, 1fr));
    }
    .xl\\:grid-cols-8 {
      grid-template-columns: repeat(8, minmax(0, 1fr));
    }
    .xl\\:grid-cols-9 {
      grid-template-columns: repeat(9, minmax(0, 1fr));
    }
    .xl\\:grid-cols-10 {
      grid-template-columns: repeat(10, minmax(0, 1fr));
    }
    .xl\\:grid-cols-11 {
      grid-template-columns: repeat(11, minmax(0, 1fr));
    }
    .xl\\:grid-cols-12 {
      grid-template-columns: repeat(12, minmax(0, 1fr));
    }
  }
  @media (min-width: 1536px) {
    .\\32xl\\:flex-col {
      flex-direction: column;
    }
    .\\32xl\\:flex-row {
      flex-direction: row;
    }
    .\\32xl\\:grid-cols-1 {
      grid-template-columns: repeat(1, minmax(0, 1fr));
    }
    .\\32xl\\:grid-cols-2 {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }
    .\\32xl\\:grid-cols-3 {
      grid-template-columns: repeat(3, minmax(0, 1fr));
    }
    .\\32xl\\:grid-cols-4 {
      grid-template-columns: repeat(4, minmax(0, 1fr));
    }
    .\\32xl\\:grid-cols-5 {
      grid-template-columns: repeat(5, minmax(0, 1fr));
    }
    .\\32xl\\:grid-cols-6 {
      grid-template-columns: repeat(6, minmax(0, 1fr));
    }
    .\\32xl\\:grid-cols-7 {
      grid-template-columns: repeat(7, minmax(0, 1fr));
    }
    .\\32xl\\:grid-cols-8 {
      grid-template-columns: repeat(8, minmax(0, 1fr));
    }
    .\\32xl\\:grid-cols-9 {
      grid-template-columns: repeat(9, minmax(0, 1fr));
    }
    .\\32xl\\:grid-cols-10 {
      grid-template-columns: repeat(10, minmax(0, 1fr));
    }
    .\\32xl\\:grid-cols-11 {
      grid-template-columns: repeat(11, minmax(0, 1fr));
    }
    .\\32xl\\:grid-cols-12 {
      grid-template-columns: repeat(12, minmax(0, 1fr));
    }
  }
`;/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Ko=y`
  /* === Box sizing === */
  .box-border {
    box-sizing: border-box;
  }
  .box-content {
    box-sizing: content-box;
  }

  /* === Display === */
  .block {
    display: block;
  }
  .flex {
    display: flex;
  }
  .hidden {
    display: none;
  }
  .inline {
    display: inline;
  }
  .inline-block {
    display: inline-block;
  }
  .inline-flex {
    display: inline-flex;
  }
  .inline-grid {
    display: inline-grid;
  }
  .grid {
    display: grid;
  }

  /* === Overflow === */
  .overflow-auto {
    overflow: auto;
  }
  .overflow-hidden {
    overflow: hidden;
  }
  .overflow-scroll {
    overflow: scroll;
  }

  /* === Position === */
  .absolute {
    position: absolute;
  }
  .fixed {
    position: fixed;
  }
  .static {
    position: static;
  }
  .sticky {
    position: sticky;
  }
  .relative {
    position: relative;
  }

  /* === Responsive design === */
  @media (min-width: 640px) {
    .sm\\:flex {
      display: flex;
    }
    .sm\\:hidden {
      display: none;
    }
  }
  @media (min-width: 768px) {
    .md\\:flex {
      display: flex;
    }
    .md\\:hidden {
      display: none;
    }
  }
  @media (min-width: 1024px) {
    .lg\\:flex {
      display: flex;
    }
    .lg\\:hidden {
      display: none;
    }
  }
  @media (min-width: 1280px) {
    .xl\\:flex {
      display: flex;
    }
    .xl\\:hidden {
      display: none;
    }
  }
  @media (min-width: 1536px) {
    .\\32xl\\:flex {
      display: flex;
    }
    .\\32xl\\:hidden {
      display: none;
    }
  }
`;/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Jo=y`
  /* === Box shadows === */
  .shadow-xs {
    box-shadow: var(--lumo-box-shadow-xs);
  }
  .shadow-s {
    box-shadow: var(--lumo-box-shadow-s);
  }
  .shadow-m {
    box-shadow: var(--lumo-box-shadow-m);
  }
  .shadow-l {
    box-shadow: var(--lumo-box-shadow-l);
  }
  .shadow-xl {
    box-shadow: var(--lumo-box-shadow-xl);
  }
`;/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Qo=y`
  /* === Height === */
  .h-0 {
    height: 0;
  }
  .h-xs {
    height: var(--lumo-size-xs);
  }
  .h-s {
    height: var(--lumo-size-s);
  }
  .h-m {
    height: var(--lumo-size-m);
  }
  .h-l {
    height: var(--lumo-size-l);
  }
  .h-xl {
    height: var(--lumo-size-xl);
  }
  .h-auto {
    height: auto;
  }
  .h-full {
    height: 100%;
  }
  .h-screen {
    height: 100vh;
  }

  /* === Height (max) === */
  .max-h-full {
    max-height: 100%;
  }
  .max-h-screen {
    max-height: 100vh;
  }

  /* === Height (min) === */
  .min-h-0 {
    min-height: 0;
  }
  .min-h-full {
    min-height: 100%;
  }
  .min-h-screen {
    min-height: 100vh;
  }

  /* === Icon sizing === */
  .icon-s {
    height: var(--lumo-icon-size-s);
    width: var(--lumo-icon-size-s);
  }
  .icon-m {
    height: var(--lumo-icon-size-m);
    width: var(--lumo-icon-size-m);
  }
  .icon-l {
    height: var(--lumo-icon-size-l);
    width: var(--lumo-icon-size-l);
  }

  /* === Width === */
  .w-xs {
    width: var(--lumo-size-xs);
  }
  .w-s {
    width: var(--lumo-size-s);
  }
  .w-m {
    width: var(--lumo-size-m);
  }
  .w-l {
    width: var(--lumo-size-l);
  }
  .w-xl {
    width: var(--lumo-size-xl);
  }
  .w-auto {
    width: auto;
  }
  .w-full {
    width: 100%;
  }

  /* === Width (max) === */
  .max-w-full {
    max-width: 100%;
  }
  .max-w-screen-sm {
    max-width: 640px;
  }
  .max-w-screen-md {
    max-width: 768px;
  }
  .max-w-screen-lg {
    max-width: 1024px;
  }
  .max-w-screen-xl {
    max-width: 1280px;
  }
  .max-w-screen-2xl {
    max-width: 1536px;
  }

  /* === Width (min) === */
  .min-w-0 {
    min-width: 0;
  }
  .min-w-full {
    min-width: 100%;
  }
`;/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Xo=y`
  /* === Margin === */
  .m-auto {
    margin: auto;
  }
  .m-0 {
    margin: 0;
  }
  .m-xs {
    margin: var(--lumo-space-xs);
  }
  .m-s {
    margin: var(--lumo-space-s);
  }
  .m-m {
    margin: var(--lumo-space-m);
  }
  .m-l {
    margin: var(--lumo-space-l);
  }
  .m-xl {
    margin: var(--lumo-space-xl);
  }

  /* === Margin (bottom) === */
  .mb-auto {
    margin-bottom: auto;
  }
  .mb-0 {
    margin-bottom: 0;
  }
  .mb-xs {
    margin-bottom: var(--lumo-space-xs);
  }
  .mb-s {
    margin-bottom: var(--lumo-space-s);
  }
  .mb-m {
    margin-bottom: var(--lumo-space-m);
  }
  .mb-l {
    margin-bottom: var(--lumo-space-l);
  }
  .mb-xl {
    margin-bottom: var(--lumo-space-xl);
  }

  /* === Margin (end) === */
  .me-auto {
    margin-inline-end: auto;
  }
  .me-0 {
    margin-inline-end: 0;
  }
  .me-xs {
    margin-inline-end: var(--lumo-space-xs);
  }
  .me-s {
    margin-inline-end: var(--lumo-space-s);
  }
  .me-m {
    margin-inline-end: var(--lumo-space-m);
  }
  .me-l {
    margin-inline-end: var(--lumo-space-l);
  }
  .me-xl {
    margin-inline-end: var(--lumo-space-xl);
  }

  /* === Margin (horizontal) === */
  .mx-auto {
    margin-left: auto;
    margin-right: auto;
  }
  .mx-0 {
    margin-left: 0;
    margin-right: 0;
  }
  .mx-xs {
    margin-left: var(--lumo-space-xs);
    margin-right: var(--lumo-space-xs);
  }
  .mx-s {
    margin-left: var(--lumo-space-s);
    margin-right: var(--lumo-space-s);
  }
  .mx-m {
    margin-left: var(--lumo-space-m);
    margin-right: var(--lumo-space-m);
  }
  .mx-l {
    margin-left: var(--lumo-space-l);
    margin-right: var(--lumo-space-l);
  }
  .mx-xl {
    margin-left: var(--lumo-space-xl);
    margin-right: var(--lumo-space-xl);
  }

  /* === Margin (left) === */
  .ml-auto {
    margin-left: auto;
  }
  .ml-0 {
    margin-left: 0;
  }
  .ml-xs {
    margin-left: var(--lumo-space-xs);
  }
  .ml-s {
    margin-left: var(--lumo-space-s);
  }
  .ml-m {
    margin-left: var(--lumo-space-m);
  }
  .ml-l {
    margin-left: var(--lumo-space-l);
  }
  .ml-xl {
    margin-left: var(--lumo-space-xl);
  }

  /* === Margin (right) === */
  .mr-auto {
    margin-right: auto;
  }
  .mr-0 {
    margin-right: 0;
  }
  .mr-xs {
    margin-right: var(--lumo-space-xs);
  }
  .mr-s {
    margin-right: var(--lumo-space-s);
  }
  .mr-m {
    margin-right: var(--lumo-space-m);
  }
  .mr-l {
    margin-right: var(--lumo-space-l);
  }
  .mr-xl {
    margin-right: var(--lumo-space-xl);
  }

  /* === Margin (start) === */
  .ms-auto {
    margin-inline-start: auto;
  }
  .ms-0 {
    margin-inline-start: 0;
  }
  .ms-xs {
    margin-inline-start: var(--lumo-space-xs);
  }
  .ms-s {
    margin-inline-start: var(--lumo-space-s);
  }
  .ms-m {
    margin-inline-start: var(--lumo-space-m);
  }
  .ms-l {
    margin-inline-start: var(--lumo-space-l);
  }
  .ms-xl {
    margin-inline-start: var(--lumo-space-xl);
  }

  /* === Margin (top) === */
  .mt-auto {
    margin-top: auto;
  }
  .mt-0 {
    margin-top: 0;
  }
  .mt-xs {
    margin-top: var(--lumo-space-xs);
  }
  .mt-s {
    margin-top: var(--lumo-space-s);
  }
  .mt-m {
    margin-top: var(--lumo-space-m);
  }
  .mt-l {
    margin-top: var(--lumo-space-l);
  }
  .mt-xl {
    margin-top: var(--lumo-space-xl);
  }

  /* === Margin (vertical) === */
  .my-auto {
    margin-bottom: auto;
    margin-top: auto;
  }
  .my-0 {
    margin-bottom: 0;
    margin-top: 0;
  }
  .my-xs {
    margin-bottom: var(--lumo-space-xs);
    margin-top: var(--lumo-space-xs);
  }
  .my-s {
    margin-bottom: var(--lumo-space-s);
    margin-top: var(--lumo-space-s);
  }
  .my-m {
    margin-bottom: var(--lumo-space-m);
    margin-top: var(--lumo-space-m);
  }
  .my-l {
    margin-bottom: var(--lumo-space-l);
    margin-top: var(--lumo-space-l);
  }
  .my-xl {
    margin-bottom: var(--lumo-space-xl);
    margin-top: var(--lumo-space-xl);
  }

  /* === Padding === */
  .p-0 {
    padding: 0;
  }
  .p-xs {
    padding: var(--lumo-space-xs);
  }
  .p-s {
    padding: var(--lumo-space-s);
  }
  .p-m {
    padding: var(--lumo-space-m);
  }
  .p-l {
    padding: var(--lumo-space-l);
  }
  .p-xl {
    padding: var(--lumo-space-xl);
  }

  /* === Padding (bottom) === */
  .pb-0 {
    padding-bottom: 0;
  }
  .pb-xs {
    padding-bottom: var(--lumo-space-xs);
  }
  .pb-s {
    padding-bottom: var(--lumo-space-s);
  }
  .pb-m {
    padding-bottom: var(--lumo-space-m);
  }
  .pb-l {
    padding-bottom: var(--lumo-space-l);
  }
  .pb-xl {
    padding-bottom: var(--lumo-space-xl);
  }

  /* === Padding (end) === */
  .pe-0 {
    padding-inline-end: 0;
  }
  .pe-xs {
    padding-inline-end: var(--lumo-space-xs);
  }
  .pe-s {
    padding-inline-end: var(--lumo-space-s);
  }
  .pe-m {
    padding-inline-end: var(--lumo-space-m);
  }
  .pe-l {
    padding-inline-end: var(--lumo-space-l);
  }
  .pe-xl {
    padding-inline-end: var(--lumo-space-xl);
  }

  /* === Padding (horizontal) === */
  .px-0 {
    padding-left: 0;
    padding-right: 0;
  }
  .px-xs {
    padding-left: var(--lumo-space-xs);
    padding-right: var(--lumo-space-xs);
  }
  .px-s {
    padding-left: var(--lumo-space-s);
    padding-right: var(--lumo-space-s);
  }
  .px-m {
    padding-left: var(--lumo-space-m);
    padding-right: var(--lumo-space-m);
  }
  .px-l {
    padding-left: var(--lumo-space-l);
    padding-right: var(--lumo-space-l);
  }
  .px-xl {
    padding-left: var(--lumo-space-xl);
    padding-right: var(--lumo-space-xl);
  }

  /* === Padding (left) === */
  .pl-0 {
    padding-left: 0;
  }
  .pl-xs {
    padding-left: var(--lumo-space-xs);
  }
  .pl-s {
    padding-left: var(--lumo-space-s);
  }
  .pl-m {
    padding-left: var(--lumo-space-m);
  }
  .pl-l {
    padding-left: var(--lumo-space-l);
  }
  .pl-xl {
    padding-left: var(--lumo-space-xl);
  }

  /* === Padding (right) === */
  .pr-0 {
    padding-right: 0;
  }
  .pr-xs {
    padding-right: var(--lumo-space-xs);
  }
  .pr-s {
    padding-right: var(--lumo-space-s);
  }
  .pr-m {
    padding-right: var(--lumo-space-m);
  }
  .pr-l {
    padding-right: var(--lumo-space-l);
  }
  .pr-xl {
    padding-right: var(--lumo-space-xl);
  }

  /* === Padding (start) === */
  .ps-0 {
    padding-inline-start: 0;
  }
  .ps-xs {
    padding-inline-start: var(--lumo-space-xs);
  }
  .ps-s {
    padding-inline-start: var(--lumo-space-s);
  }
  .ps-m {
    padding-inline-start: var(--lumo-space-m);
  }
  .ps-l {
    padding-inline-start: var(--lumo-space-l);
  }
  .ps-xl {
    padding-inline-start: var(--lumo-space-xl);
  }

  /* === Padding (top) === */
  .pt-0 {
    padding-top: 0;
  }
  .pt-xs {
    padding-top: var(--lumo-space-xs);
  }
  .pt-s {
    padding-top: var(--lumo-space-s);
  }
  .pt-m {
    padding-top: var(--lumo-space-m);
  }
  .pt-l {
    padding-top: var(--lumo-space-l);
  }
  .pt-xl {
    padding-top: var(--lumo-space-xl);
  }

  /* === Padding (vertical) === */
  .py-0 {
    padding-bottom: 0;
    padding-top: 0;
  }
  .py-xs {
    padding-bottom: var(--lumo-space-xs);
    padding-top: var(--lumo-space-xs);
  }
  .py-s {
    padding-bottom: var(--lumo-space-s);
    padding-top: var(--lumo-space-s);
  }
  .py-m {
    padding-bottom: var(--lumo-space-m);
    padding-top: var(--lumo-space-m);
  }
  .py-l {
    padding-bottom: var(--lumo-space-l);
    padding-top: var(--lumo-space-l);
  }
  .py-xl {
    padding-bottom: var(--lumo-space-xl);
    padding-top: var(--lumo-space-xl);
  }
`;/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Yo=y`
  /* === Font size === */
  .text-2xs {
    font-size: var(--lumo-font-size-xxs);
  }
  .text-xs {
    font-size: var(--lumo-font-size-xs);
  }
  .text-s {
    font-size: var(--lumo-font-size-s);
  }
  .text-m {
    font-size: var(--lumo-font-size-m);
  }
  .text-l {
    font-size: var(--lumo-font-size-l);
  }
  .text-xl {
    font-size: var(--lumo-font-size-xl);
  }
  .text-2xl {
    font-size: var(--lumo-font-size-xxl);
  }
  .text-3xl {
    font-size: var(--lumo-font-size-xxxl);
  }

  /* === Font weight === */
  .font-thin {
    font-weight: 100;
  }
  .font-extralight {
    font-weight: 200;
  }
  .font-light {
    font-weight: 300;
  }
  .font-normal {
    font-weight: 400;
  }
  .font-medium {
    font-weight: 500;
  }
  .font-semibold {
    font-weight: 600;
  }
  .font-bold {
    font-weight: 700;
  }
  .font-extrabold {
    font-weight: 800;
  }
  .font-black {
    font-weight: 900;
  }

  /* === Line height === */
  .leading-none {
    line-height: 1;
  }
  .leading-xs {
    line-height: var(--lumo-line-height-xs);
  }
  .leading-s {
    line-height: var(--lumo-line-height-s);
  }
  .leading-m {
    line-height: var(--lumo-line-height-m);
  }

  /* === List style type === */
  .list-none {
    list-style-type: none;
  }

  /* === Text alignment === */
  .text-left {
    text-align: left;
  }
  .text-center {
    text-align: center;
  }
  .text-right {
    text-align: right;
  }
  .text-justify {
    text-align: justify;
  }

  /* === Text color === */
  .text-header {
    color: var(--lumo-header-text-color);
  }
  .text-body {
    color: var(--lumo-body-text-color);
  }
  .text-secondary {
    color: var(--lumo-secondary-text-color);
  }
  .text-tertiary {
    color: var(--lumo-tertiary-text-color);
  }
  .text-disabled {
    color: var(--lumo-disabled-text-color);
  }
  .text-primary {
    color: var(--lumo-primary-text-color);
  }
  .text-primary-contrast {
    color: var(--lumo-primary-contrast-color);
  }
  .text-error {
    color: var(--lumo-error-text-color);
  }
  .text-error-contrast {
    color: var(--lumo-error-contrast-color);
  }
  .text-success {
    color: var(--lumo-success-text-color);
  }
  .text-success-contrast {
    color: var(--lumo-success-contrast-color);
  }

  /* === Text overflow === */
  .overflow-clip {
    text-overflow: clip;
  }
  .overflow-ellipsis {
    text-overflow: ellipsis;
  }

  /* === Text transform === */
  .capitalize {
    text-transform: capitalize;
  }
  .lowercase {
    text-transform: lowercase;
  }
  .uppercase {
    text-transform: uppercase;
  }

  /* === Whitespace === */
  .whitespace-normal {
    white-space: normal;
  }
  .whitespace-nowrap {
    white-space: nowrap;
  }
  .whitespace-pre {
    white-space: pre;
  }
  .whitespace-pre-line {
    white-space: pre-line;
  }
  .whitespace-pre-wrap {
    white-space: pre-wrap;
  }

  /* === Responsive design === */
  @media (min-width: 640px) {
    .sm\\:text-2xs {
      font-size: var(--lumo-font-size-xxs);
    }
    .sm\\:text-xs {
      font-size: var(--lumo-font-size-xs);
    }
    .sm\\:text-s {
      font-size: var(--lumo-font-size-s);
    }
    .sm\\:text-m {
      font-size: var(--lumo-font-size-m);
    }
    .sm\\:text-l {
      font-size: var(--lumo-font-size-l);
    }
    .sm\\:text-xl {
      font-size: var(--lumo-font-size-xl);
    }
    .sm\\:text-2xl {
      font-size: var(--lumo-font-size-xxl);
    }
    .sm\\:text-3xl {
      font-size: var(--lumo-font-size-xxxl);
    }
  }
  @media (min-width: 768px) {
    .md\\:text-2xs {
      font-size: var(--lumo-font-size-xxs);
    }
    .md\\:text-xs {
      font-size: var(--lumo-font-size-xs);
    }
    .md\\:text-s {
      font-size: var(--lumo-font-size-s);
    }
    .md\\:text-m {
      font-size: var(--lumo-font-size-m);
    }
    .md\\:text-l {
      font-size: var(--lumo-font-size-l);
    }
    .md\\:text-xl {
      font-size: var(--lumo-font-size-xl);
    }
    .md\\:text-2xl {
      font-size: var(--lumo-font-size-xxl);
    }
    .md\\:text-3xl {
      font-size: var(--lumo-font-size-xxxl);
    }
  }
  @media (min-width: 1024px) {
    .lg\\:text-2xs {
      font-size: var(--lumo-font-size-xxs);
    }
    .lg\\:text-xs {
      font-size: var(--lumo-font-size-xs);
    }
    .lg\\:text-s {
      font-size: var(--lumo-font-size-s);
    }
    .lg\\:text-m {
      font-size: var(--lumo-font-size-m);
    }
    .lg\\:text-l {
      font-size: var(--lumo-font-size-l);
    }
    .lg\\:text-xl {
      font-size: var(--lumo-font-size-xl);
    }
    .lg\\:text-2xl {
      font-size: var(--lumo-font-size-xxl);
    }
    .lg\\:text-3xl {
      font-size: var(--lumo-font-size-xxxl);
    }
  }
  @media (min-width: 1280px) {
    .xl\\:text-2xs {
      font-size: var(--lumo-font-size-xxs);
    }
    .xl\\:text-xs {
      font-size: var(--lumo-font-size-xs);
    }
    .xl\\:text-s {
      font-size: var(--lumo-font-size-s);
    }
    .xl\\:text-m {
      font-size: var(--lumo-font-size-m);
    }
    .xl\\:text-l {
      font-size: var(--lumo-font-size-l);
    }
    .xl\\:text-xl {
      font-size: var(--lumo-font-size-xl);
    }
    .xl\\:text-2xl {
      font-size: var(--lumo-font-size-xxl);
    }
    .xl\\:text-3xl {
      font-size: var(--lumo-font-size-xxxl);
    }
  }
  @media (min-width: 1536px) {
    .\\32xl\\:text-2xs {
      font-size: var(--lumo-font-size-xxs);
    }
    .\\32xl\\:text-xs {
      font-size: var(--lumo-font-size-xs);
    }
    .\\32xl\\:text-s {
      font-size: var(--lumo-font-size-s);
    }
    .\\32xl\\:text-m {
      font-size: var(--lumo-font-size-m);
    }
    .\\32xl\\:text-l {
      font-size: var(--lumo-font-size-l);
    }
    .\\32xl\\:text-xl {
      font-size: var(--lumo-font-size-xl);
    }
    .\\32xl\\:text-2xl {
      font-size: var(--lumo-font-size-xxl);
    }
    .\\32xl\\:text-3xl {
      font-size: var(--lumo-font-size-xxxl);
    }
  }
`;/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const hr=y`
${Ho}
${Wo}
${qo}
${Jo}
${Go}
${Ko}
${Qo}
${Xo}
${Yo}
`;Le("",hr,{moduleId:"lumo-utility"});const Zo=(r,e)=>{const t=/(?:@media\s(.+?))?(?:\s{)?\@import\s*(?:url\(\s*['"]?(.+?)['"]?\s*\)|(["'])((?:\\.|[^\\])*?)\3)([^;]*);(?:})?/g;/\/\*(.|[\r\n])*?\*\//gm.exec(r)!=null&&(r=Lo(r));for(var o,i=r;(o=t.exec(r))!==null;){i=i.replace(o[0],"");const n=document.createElement("link");n.rel="stylesheet",n.href=o[2]||o[4];const a=o[1]||o[5];a&&(n.media=a),e===document?document.head.appendChild(n):e.appendChild(n)}return i},K=(r,e,t)=>{if(e===document){const i=en(r);if(window.Vaadin.theme.injectedGlobalCss.indexOf(i)!==-1)return;window.Vaadin.theme.injectedGlobalCss.push(i)}const o=new CSSStyleSheet;o.replaceSync(Zo(r,e)),t?e.adoptedStyleSheets=[o,...e.adoptedStyleSheets]:e.adoptedStyleSheets=[...e.adoptedStyleSheets,o]};window.Vaadin=window.Vaadin||{};window.Vaadin.theme=window.Vaadin.theme||{};window.Vaadin.theme.injectedGlobalCss=[];function Ft(r){let e,t,o=2166136261;for(e=0,t=r.length;e<t;e++)o^=r.charCodeAt(e),o+=(o<<1)+(o<<4)+(o<<7)+(o<<8)+(o<<24);return("0000000"+(o>>>0).toString(16)).substr(-8)}function en(r){let e=Ft(r);return e+Ft(e+r)}const tn=r=>{K(Oo.toString(),r),document._vaadintheme_mytodo_componentCss||(document._vaadintheme_mytodo_componentCss=!0),K(ar.cssText,r,!0),K(cr.cssText,r,!0),K(dr.cssText,r,!0),K(pr.cssText,r,!0),K(hr.cssText,r,!0)},rn=tn;rn(document);export{b as A,yo as B,cn as T,Ge as _,ko as a,io as b,So as c,wo as d,V as e,_o as f,sn as g,cr as h,y as i,ar as j,Le as r,or as t,uo as x};
