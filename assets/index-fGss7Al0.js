var He=Object.defineProperty;var Ue=(e,t,n)=>t in e?He(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var oe=(e,t,n)=>(Ue(e,typeof t!="symbol"?t+"":t,n),n);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const u of s.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&i(u)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();function L(){}const Ae=e=>e;function ke(e){return e()}function Ee(){return Object.create(null)}function A(e){e.forEach(ke)}function pe(e){return typeof e=="function"}function Fe(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}function Ve(e){return Object.keys(e).length===0}const je=typeof window<"u";let Ke=je?()=>window.performance.now():()=>Date.now(),he=je?e=>requestAnimationFrame(e):L;const D=new Set;function Be(e){D.forEach(t=>{t.c(e)||(D.delete(t),t.f())}),D.size!==0&&he(Be)}function Ye(e){let t;return D.size===0&&he(Be),{promise:new Promise(n=>{D.add(t={c:e,f:n})}),abort(){D.delete(t)}}}function c(e,t){e.appendChild(t)}function Ie(e){if(!e)return document;const t=e.getRootNode?e.getRootNode():e.ownerDocument;return t&&t.host?t:e.ownerDocument}function Ge(e){const t=h("style");return t.textContent="/* empty */",Je(Ie(e),t),t.sheet}function Je(e,t){return c(e.head||e,t),t.sheet}function ne(e,t,n){e.insertBefore(t,n||null)}function z(e){e.parentNode&&e.parentNode.removeChild(e)}function Qe(e,t){for(let n=0;n<e.length;n+=1)e[n]&&e[n].d(t)}function h(e){return document.createElement(e)}function P(e){return document.createTextNode(e)}function x(){return P(" ")}function We(){return P("")}function Q(e,t,n,i){return e.addEventListener(t,n,i),()=>e.removeEventListener(t,n,i)}function p(e,t,n){n==null?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function Xe(e){return e===""?null:+e}function Ze(e){return Array.from(e.childNodes)}function xe(e,t){t=""+t,e.data!==t&&(e.data=t)}function fe(e,t){e.value=t??""}function et(e,t,{bubbles:n=!1,cancelable:i=!1}={}){return new CustomEvent(e,{detail:t,bubbles:n,cancelable:i})}const ee=new Map;let te=0;function tt(e){let t=5381,n=e.length;for(;n--;)t=(t<<5)-t^e.charCodeAt(n);return t>>>0}function nt(e,t){const n={stylesheet:Ge(t),rules:{}};return ee.set(e,n),n}function Ne(e,t,n,i,r,s,u,o=0){const f=16.666/i;let l=`{
`;for(let y=0;y<=1;y+=f){const N=t+(n-t)*s(y);l+=y*100+`%{${u(N,1-N)}}
`}const b=l+`100% {${u(n,1-n)}}
}`,d=`__svelte_${tt(b)}_${o}`,E=Ie(e),{stylesheet:_,rules:a}=ee.get(E)||nt(E,e);a[d]||(a[d]=!0,_.insertRule(`@keyframes ${d} ${b}`,_.cssRules.length));const v=e.style.animation||"";return e.style.animation=`${v?`${v}, `:""}${d} ${i}ms linear ${r}ms 1 both`,te+=1,d}function it(e,t){const n=(e.style.animation||"").split(", "),i=n.filter(t?s=>s.indexOf(t)<0:s=>s.indexOf("__svelte")===-1),r=n.length-i.length;r&&(e.style.animation=i.join(", "),te-=r,te||rt())}function rt(){he(()=>{te||(ee.forEach(e=>{const{ownerNode:t}=e.stylesheet;t&&z(t)}),ee.clear())})}let Y;function V(e){Y=e}function st(){if(!Y)throw new Error("Function called outside component initialization");return Y}function lt(e){st().$$.on_mount.push(e)}const R=[],Oe=[];let T=[];const Ce=[],ot=Promise.resolve();let ae=!1;function ut(){ae||(ae=!0,ot.then(Re))}function q(e){T.push(e)}const ue=new Set;let I=0;function Re(){if(I!==0)return;const e=Y;do{try{for(;I<R.length;){const t=R[I];I++,V(t),ct(t.$$)}}catch(t){throw R.length=0,I=0,t}for(V(null),R.length=0,I=0;Oe.length;)Oe.pop()();for(let t=0;t<T.length;t+=1){const n=T[t];ue.has(n)||(ue.add(n),n())}T.length=0}while(R.length);for(;Ce.length;)Ce.pop()();ae=!1,ue.clear(),V(e)}function ct(e){if(e.fragment!==null){e.update(),A(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(q)}}function ft(e){const t=[],n=[];T.forEach(i=>e.indexOf(i)===-1?t.push(i):n.push(i)),n.forEach(i=>i()),T=t}let U;function at(){return U||(U=Promise.resolve(),U.then(()=>{U=null})),U}function ce(e,t,n){e.dispatchEvent(et(`${t?"intro":"outro"}${n}`))}const Z=new Set;let O;function dt(){O={r:0,c:[],p:O}}function pt(){O.r||A(O.c),O=O.p}function K(e,t){e&&e.i&&(Z.delete(e),e.i(t))}function de(e,t,n,i){if(e&&e.o){if(Z.has(e))return;Z.add(e),O.c.push(()=>{Z.delete(e),i&&(n&&e.d(1),i())}),e.o(t)}else i&&i()}const ht={duration:0};function W(e,t,n,i){let s=t(e,n,{direction:"both"}),u=i?0:1,o=null,f=null,l=null,b;function d(){l&&it(e,l)}function E(a,v){const y=a.b-u;return v*=Math.abs(y),{a:u,b:a.b,d:y,duration:v,start:a.start,end:a.start+v,group:a.group}}function _(a){const{delay:v=0,duration:y=300,easing:N=Ae,tick:k=L,css:M}=s||ht,F={start:Ke()+v,b:a};a||(F.group=O,O.r+=1),"inert"in e&&(a?b!==void 0&&(e.inert=b):(b=e.inert,e.inert=!0)),o||f?f=F:(M&&(d(),l=Ne(e,u,a,y,v,N,M)),a&&k(0,1),o=E(F,y),q(()=>ce(e,a,"start")),Ye($=>{if(f&&$>f.start&&(o=E(f,y),f=null,ce(e,o.b,"start"),M&&(d(),l=Ne(e,u,o.b,o.duration,0,N,s.css))),o){if($>=o.end)k(u=o.b,1-u),ce(e,o.b,"end"),f||(o.b?d():--o.group.r||A(o.group.c)),o=null;else if($>=o.start){const H=$-o.start;u=o.a+o.d*N(H/o.duration),k(u,1-u)}}return!!(o||f)}))}return{run(a){pe(s)?at().then(()=>{s=s({direction:a?"in":"out"}),_(a)}):_(a)},end(){d(),o=f=null}}}function Le(e){return(e==null?void 0:e.length)!==void 0?e:Array.from(e)}function mt(e){e&&e.c()}function De(e,t,n){const{fragment:i,after_update:r}=e.$$;i&&i.m(t,n),q(()=>{const s=e.$$.on_mount.map(ke).filter(pe);e.$$.on_destroy?e.$$.on_destroy.push(...s):A(s),e.$$.on_mount=[]}),r.forEach(q)}function Te(e,t){const n=e.$$;n.fragment!==null&&(ft(n.after_update),A(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function _t(e,t){e.$$.dirty[0]===-1&&(R.push(e),ut(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function qe(e,t,n,i,r,s,u=null,o=[-1]){const f=Y;V(e);const l=e.$$={fragment:null,ctx:[],props:s,update:L,not_equal:r,bound:Ee(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(f?f.$$.context:[])),callbacks:Ee(),dirty:o,skip_bound:!1,root:t.target||f.$$.root};u&&u(l.root);let b=!1;if(l.ctx=n?n(e,t.props||{},(d,E,..._)=>{const a=_.length?_[0]:E;return l.ctx&&r(l.ctx[d],l.ctx[d]=a)&&(!l.skip_bound&&l.bound[d]&&l.bound[d](a),b&&_t(e,d)),E}):[],l.update(),b=!0,A(l.before_update),l.fragment=i?i(l.ctx):!1,t.target){if(t.hydrate){const d=Ze(t.target);l.fragment&&l.fragment.l(d),d.forEach(z)}else l.fragment&&l.fragment.c();t.intro&&K(e.$$.fragment),De(e,t.target,t.anchor),Re()}V(f)}class ze{constructor(){oe(this,"$$");oe(this,"$$set")}$destroy(){Te(this,1),this.$destroy=L}$on(t,n){if(!pe(n))return L;const i=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return i.push(n),()=>{const r=i.indexOf(n);r!==-1&&i.splice(r,1)}}$set(t){this.$$set&&!Ve(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const gt="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(gt);function X(e,{delay:t=0,duration:n=400,easing:i=Ae}={}){const r=+getComputedStyle(e).opacity;return{delay:t,duration:n,easing:i,css:s=>`opacity: ${s*r}`}}function Me(e,t,n){const i=e.slice();return i[10]=t[n],i}function Se(e){let t,n=e[10]+"",i;return{c(){t=h("option"),i=P(n),t.__value=e[10],fe(t,t.__value)},m(r,s){ne(r,t,s),c(t,i)},p:L,d(r){r&&z(t)}}}function vt(e){let t,n,i,r,s=e[4].format(e[1])+"",u,o,f,l,b,d,E,_,a,v,y=e[2].toFixed(2)+"",N,k,M,F,$,H,me,j,S,_e,ie,ge,re,ve,G,ye,se,$e,J,le,we,B=Le(e[3]),w=[];for(let m=0;m<B.length;m+=1)w[m]=Se(Me(e,B,m));return{c(){t=h("article"),n=h("div"),i=h("h3"),r=h("span"),u=P(s),o=P(" Pageviews"),f=x(),l=h("input"),b=x(),d=h("datalist");for(let m=0;m<w.length;m+=1)w[m].c();E=x(),_=h("div"),a=h("span"),v=P("$"),N=P(y),k=x(),M=h("p"),M.textContent="/ month",F=x(),$=h("div"),H=h("p"),H.textContent="Monthly Billing",me=x(),j=h("label"),S=h("input"),_e=x(),ie=h("span"),ge=x(),re=h("p"),re.textContent="Yearly Billing",ve=x(),G=h("p"),G.innerHTML='-25%<span class="hidden-sm">discount</span>',ye=x(),se=h("div"),$e=x(),J=h("div"),J.innerHTML='<ul class="svelte-19he5ne"><li><p class="svelte-19he5ne">Unlimited websites</p></li> <li><p class="svelte-19he5ne">100% data ownership</p></li> <li><p class="svelte-19he5ne">Email reports</p></li></ul> <button class="primary-button svelte-19he5ne" type="button">Start my trial</button>',p(r,"class","uppercase"),p(i,"class","uppercase svelte-19he5ne"),p(l,"class","range-indicator svelte-19he5ne"),p(l,"type","range"),p(l,"min","10000"),p(l,"max","1000000"),p(l,"list","views-list"),p(d,"id","views-list"),p(a,"class","monthly-price svelte-19he5ne"),p(_,"class","price svelte-19he5ne"),p(S,"class","toggle-input svelte-19he5ne"),p(S,"type","checkbox"),p(ie,"class","toggle svelte-19he5ne"),p(j,"class","toggle-container svelte-19he5ne"),p(G,"class","discount svelte-19he5ne"),p($,"class","billing-component svelte-19he5ne"),p(n,"class","pricing-component-header svelte-19he5ne"),p(se,"class","divider svelte-19he5ne"),p(J,"class","pricing-component-footer svelte-19he5ne"),p(t,"class","pricing-component svelte-19he5ne")},m(m,C){ne(m,t,C),c(t,n),c(n,i),c(i,r),c(r,u),c(i,o),c(n,f),c(n,l),fe(l,e[1]),c(n,b),c(n,d);for(let g=0;g<w.length;g+=1)w[g]&&w[g].m(d,null);c(n,E),c(n,_),c(_,a),c(a,v),c(a,N),c(_,k),c(_,M),c(n,F),c(n,$),c($,H),c($,me),c($,j),c(j,S),S.checked=e[0],c(j,_e),c(j,ie),c($,ge),c($,re),c($,ve),c($,G),c(t,ye),c(t,se),c(t,$e),c(t,J),le||(we=[Q(l,"change",e[7]),Q(l,"input",e[7]),Q(l,"change",e[5]),Q(S,"change",e[8])],le=!0)},p(m,[C]){if(C&2&&s!==(s=m[4].format(m[1])+"")&&xe(u,s),C&2&&fe(l,m[1]),C&8){B=Le(m[3]);let g;for(g=0;g<B.length;g+=1){const be=Me(m,B,g);w[g]?w[g].p(be,C):(w[g]=Se(be),w[g].c(),w[g].m(d,null))}for(;g<w.length;g+=1)w[g].d(1);w.length=B.length}C&4&&y!==(y=m[2].toFixed(2)+"")&&xe(N,y),C&1&&(S.checked=m[0])},i:L,o:L,d(m){m&&z(t),Qe(w,m),le=!1,A(we)}}}function yt(e,t,n){let i=!1,r=1e4,s=[1e4,5e4,1e5,5e5,1e6],u=8,o=1e4;const f=Intl.NumberFormat("en",{notation:"compact"});let l={1e4:8,5e4:12,1e5:16,5e5:24,1e6:32};function b(_){n(6,o=s.reduce((a,v)=>Math.abs(_.target.value-a)<Math.abs(_.target.value-v)?a:v))}function d(){r=Xe(this.value),n(1,r)}function E(){i=this.checked,n(0,i)}return e.$$.update=()=>{e.$$.dirty&65&&(i?n(2,u=l[o]*.75):n(2,u=l[o]))},[i,r,u,s,f,b,o,d,E]}class $t extends ze{constructor(t){super(),qe(this,t,yt,vt,Fe,{})}}function Pe(e){let t,n,i,r,s,u,o;return s=new $t({}),{c(){t=h("main"),n=h("div"),n.innerHTML='<h1 class="svelte-1arfslf">Simple, traffic-based pricing</h1> <p>Sign-up for our 30-day trial. <br/> No credit card required.</p>',r=x(),mt(s.$$.fragment),p(n,"class","heading svelte-1arfslf"),p(t,"class","svelte-1arfslf")},m(f,l){ne(f,t,l),c(t,n),c(t,r),De(s,t,null),o=!0},i(f){o||(f&&q(()=>{o&&(i||(i=W(n,X,{},!0)),i.run(1))}),K(s.$$.fragment,f),f&&q(()=>{o&&(u||(u=W(t,X,{duration:1e3},!0)),u.run(1))}),o=!0)},o(f){f&&(i||(i=W(n,X,{},!1)),i.run(0)),de(s.$$.fragment,f),f&&(u||(u=W(t,X,{duration:1e3},!1)),u.run(0)),o=!1},d(f){f&&z(t),f&&i&&i.end(),Te(s),f&&u&&u.end()}}}function wt(e){let t,n,i=e[0]&&Pe();return{c(){i&&i.c(),t=We()},m(r,s){i&&i.m(r,s),ne(r,t,s),n=!0},p(r,[s]){r[0]?i?s&1&&K(i,1):(i=Pe(),i.c(),K(i,1),i.m(t.parentNode,t)):i&&(dt(),de(i,1,1,()=>{i=null}),pt())},i(r){n||(K(i),n=!0)},o(r){de(i),n=!1},d(r){r&&z(t),i&&i.d(r)}}}function bt(e,t,n){let i=!1;return lt(()=>{n(0,i=!0)}),[i]}class Et extends ze{constructor(t){super(),qe(this,t,bt,wt,Fe,{})}}new Et({target:document.getElementById("app"),intro:!0});
