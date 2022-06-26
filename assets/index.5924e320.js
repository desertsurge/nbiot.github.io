import{i as $,k as x,j as Y,J as B,x as J,y as be,l as D,A as he,h as i,K as y,I,s as z,L as ve,M as ye,O as Ce,P as Se,Q as xe,R,m as ke,S as Ie,T as we,U as q,z as Te,V as Pe,C as E,q as Ve,W as Me,X as Ee,Y as Le,Z as L,$ as Be,a0 as Re,a1 as j,E as Q,a2 as _e,a3 as Ae,a4 as K,a5 as Oe,a6 as $e,F as De}from"./index.d33c2df8.js";const[ze,S]=$("cell"),X={icon:String,size:String,title:x,value:x,label:x,center:Boolean,isLink:Boolean,border:Y,required:Boolean,iconPrefix:String,valueClass:B,labelClass:B,titleClass:B,titleStyle:null,arrowDirection:String,clickable:{type:Boolean,default:null}},Fe=J({},X,be);var Ne=D({name:ze,props:Fe,setup(e,{slots:n}){const l=he(),c=()=>{if(n.label||y(e.label))return i("div",{class:[S("label"),e.labelClass]},[n.label?n.label():e.label])},r=()=>{if(n.title||y(e.title))return i("div",{class:[S("title"),e.titleClass],style:e.titleStyle},[n.title?n.title():i("span",null,[e.title]),c()])},u=()=>{const s=n.value||n.default;if(s||y(e.value)){const b=n.title||y(e.title);return i("div",{class:[S("value",{alone:!b}),e.valueClass]},[s?s():i("span",null,[e.value])])}},k=()=>{if(n.icon)return n.icon();if(e.icon)return i(I,{name:e.icon,class:S("left-icon"),classPrefix:e.iconPrefix},null)},f=()=>{if(n["right-icon"])return n["right-icon"]();if(e.isLink){const s=e.arrowDirection?`arrow-${e.arrowDirection}`:"arrow";return i(I,{name:s,class:S("right-icon")},null)}};return()=>{var s,d;const{size:b,center:w,border:_,isLink:C,required:T}=e,h=(s=e.clickable)!=null?s:C,P={center:w,required:T,clickable:h,borderless:!_};return b&&(P[b]=!!b),i("div",{class:S(P),role:h?"button":void 0,tabindex:h?0:void 0,onClick:l},[k(),r(),u(),f(),(d=n.extra)==null?void 0:d.call(n)])}}});const We=z(Ne);function qe(e){return Array.isArray(e)?!e.length:e===0?!1:!e}function je(e,n){return!(n.required&&qe(e)||n.pattern&&!n.pattern.test(String(e)))}function Ke(e,n){return new Promise(l=>{const c=n.validator(e,n);if(Ce(c)){c.then(l);return}l(c)})}function G(e,n){const{message:l}=n;return Se(l)?l(e,n):l||""}function Ge({target:e}){e.composing=!0}function H({target:e}){e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}function He(e,n){const l=ve();e.style.height="auto";let c=e.scrollHeight;if(xe(n)){const{maxHeight:r,minHeight:u}=n;r!==void 0&&(c=Math.min(c,r)),u!==void 0&&(c=Math.max(c,u))}c&&(e.style.height=`${c}px`,ye(l))}function Ue(e){return e==="number"?{type:"text",inputmode:"decimal"}:e==="digit"?{type:"tel",inputmode:"numeric"}:{type:e}}function O(e){return[...e].length}function Ye(e,n){return[...e].slice(0,n).join("")}const[Je,m]=$("field"),Qe={id:String,name:String,leftIcon:String,rightIcon:String,autofocus:Boolean,clearable:Boolean,maxlength:x,formatter:Function,clearIcon:R("clear"),modelValue:ke(""),inputAlign:String,placeholder:String,autocomplete:String,errorMessage:String,enterkeyhint:String,clearTrigger:R("focus"),formatTrigger:R("onChange"),error:{type:Boolean,default:null},disabled:{type:Boolean,default:null},readonly:{type:Boolean,default:null}},Xe=J({},X,Qe,{rows:x,type:R("text"),rules:Array,autosize:[Boolean,Object],labelWidth:x,labelClass:B,labelAlign:String,showWordLimit:Boolean,errorMessageAlign:String,colon:{type:Boolean,default:null}});var Ze=D({name:Je,props:Xe,emits:["blur","focus","clear","keypress","click-input","click-left-icon","click-right-icon","update:modelValue"],setup(e,{emit:n,slots:l}){const c=Ie(),r=we({status:"unvalidated",focused:!1,validateMessage:""}),u=q(),k=q(),{parent:f}=Te(Pe),s=()=>{var t;return String((t=e.modelValue)!=null?t:"")},d=t=>{if(y(e[t]))return e[t];if(f&&y(f.props[t]))return f.props[t]},b=E(()=>{const t=d("readonly");if(e.clearable&&!t){const a=s()!=="",o=e.clearTrigger==="always"||e.clearTrigger==="focus"&&r.focused;return a&&o}return!1}),w=E(()=>k.value&&l.input?k.value():e.modelValue),_=t=>t.reduce((a,o)=>a.then(()=>{if(r.status==="failed")return;let{value:g}=w;if(o.formatter&&(g=o.formatter(g,o)),!je(g,o)){r.status="failed",r.validateMessage=G(g,o);return}if(o.validator)return Ke(g,o).then(v=>{v&&typeof v=="string"?(r.status="failed",r.validateMessage=v):v===!1&&(r.status="failed",r.validateMessage=G(g,o))})}),Promise.resolve()),C=()=>{r.status="unvalidated",r.validateMessage=""},T=(t=e.rules)=>new Promise(a=>{C(),t?_(t).then(()=>{r.status==="failed"?a({name:e.name,message:r.validateMessage}):(r.status="passed",a())}):a()}),h=t=>{if(f&&e.rules){const{validateTrigger:a}=f.props,o=K(a).includes(t),g=e.rules.filter(v=>v.trigger?K(v.trigger).includes(t):o);g.length&&T(g)}},P=t=>{const{maxlength:a}=e;if(y(a)&&O(t)>a){const o=s();return o&&O(o)===+a?o:Ye(t,+a)}return t},V=(t,a="onChange")=>{if(t=P(t),e.type==="number"||e.type==="digit"){const o=e.type==="number";t=Be(t,o,o)}e.formatter&&a===e.formatTrigger&&(t=e.formatter(t)),u.value&&u.value.value!==t&&(u.value.value=t),t!==e.modelValue&&n("update:modelValue",t)},Z=t=>{t.target.composing||V(t.target.value)},A=()=>{var t;return(t=u.value)==null?void 0:t.blur()},p=()=>{var t;return(t=u.value)==null?void 0:t.focus()},M=()=>{const t=u.value;e.type==="textarea"&&e.autosize&&t&&He(t,e.autosize)},ee=t=>{r.focused=!0,n("focus",t),L(M),d("readonly")&&A()},te=t=>{d("readonly")||(r.focused=!1,V(s(),"onBlur"),n("blur",t),h("onBlur"),L(M),Oe())},F=t=>n("click-input",t),ne=t=>n("click-left-icon",t),ae=t=>n("click-right-icon",t),ie=t=>{j(t),n("update:modelValue",""),n("clear",t)},N=E(()=>{if(typeof e.error=="boolean")return e.error;if(f&&f.props.showError&&r.status==="failed")return!0}),le=E(()=>{const t=d("labelWidth");if(t)return{width:Ve(t)}}),re=t=>{t.keyCode===13&&(!(f&&f.props.submitOnEnter)&&e.type!=="textarea"&&j(t),e.type==="search"&&A()),n("keypress",t)},W=()=>e.id||`${c}-input`,oe=()=>r.status,ce=()=>{const t=m("control",[d("inputAlign"),{error:N.value,custom:!!l.input,"min-height":e.type==="textarea"&&!e.autosize}]);if(l.input)return i("div",{class:t,onClick:F},[l.input()]);const a={id:W(),ref:u,name:e.name,rows:e.rows!==void 0?+e.rows:void 0,class:t,disabled:d("disabled"),readonly:d("readonly"),autofocus:e.autofocus,placeholder:e.placeholder,autocomplete:e.autocomplete,enterkeyhint:e.enterkeyhint,"aria-labelledby":e.label?`${c}-label`:void 0,onBlur:te,onFocus:ee,onInput:Z,onClick:F,onChange:H,onKeypress:re,onCompositionend:H,onCompositionstart:Ge};return e.type==="textarea"?i("textarea",a,null):i("input",Q(Ue(e.type),a),null)},se=()=>{const t=l["left-icon"];if(e.leftIcon||t)return i("div",{class:m("left-icon"),onClick:ne},[t?t():i(I,{name:e.leftIcon,classPrefix:e.iconPrefix},null)])},ue=()=>{const t=l["right-icon"];if(e.rightIcon||t)return i("div",{class:m("right-icon"),onClick:ae},[t?t():i(I,{name:e.rightIcon,classPrefix:e.iconPrefix},null)])},de=()=>{if(e.showWordLimit&&e.maxlength){const t=O(s());return i("div",{class:m("word-limit")},[i("span",{class:m("word-num")},[t]),_e("/"),e.maxlength])}},fe=()=>{if(f&&f.props.showErrorMessage===!1)return;const t=e.errorMessage||r.validateMessage;if(t){const a=l["error-message"],o=d("errorMessageAlign");return i("div",{class:m("error-message",o)},[a?a({message:t}):t])}},ge=()=>{const t=d("colon")?":":"";if(l.label)return[l.label(),t];if(e.label)return i("label",{id:`${c}-label`,for:W()},[e.label+t])},me=()=>[i("div",{class:m("body")},[ce(),b.value&&i(I,{name:e.clearIcon,class:m("clear"),onTouchstart:ie},null),ue(),l.button&&i("div",{class:m("button")},[l.button()])]),de(),fe()];return Me({blur:A,focus:p,validate:T,formValue:w,resetValidation:C,getValidationStatus:oe}),Re(Ae,{customValue:k,resetValidation:C,validateWithTrigger:h}),Ee(()=>e.modelValue,()=>{V(s()),C(),h("onChange"),L(M)}),Le(()=>{V(s(),e.formatTrigger),L(M)}),()=>{const t=d("disabled"),a=d("labelAlign"),o=ge(),g=se();return i(We,{size:e.size,icon:e.leftIcon,class:m({error:N.value,disabled:t,[`label-${a}`]:a}),center:e.center,border:e.border,isLink:e.isLink,clickable:e.clickable,titleStyle:le.value,valueClass:m("value"),titleClass:[m("label",[a,{required:e.required}]),e.labelClass],arrowDirection:e.arrowDirection},{icon:g?()=>g:null,title:o?()=>o:null,value:me,extra:l.extra})}}});const at=z(Ze),[pe,U]=$("cell-group"),et={title:String,inset:Boolean,border:Y};var tt=D({name:pe,inheritAttrs:!1,props:et,setup(e,{slots:n,attrs:l}){const c=()=>{var u;return i("div",Q({class:[U({inset:e.inset}),{[$e]:e.border&&!e.inset}]},l),[(u=n.default)==null?void 0:u.call(n)])},r=()=>i("div",{class:U("title",{inset:e.inset})},[n.title?n.title():e.title]);return()=>e.title||n.title?i(De,null,[r(),c()]):c()}});const it=z(tt);export{it as C,at as F,We as a};
