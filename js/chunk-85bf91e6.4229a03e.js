(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-85bf91e6"],{"042c":function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"nr"},[n("page-header",{attrs:{backUrl:"grid",title:"SSB互转"}}),n("van-cell-group",{staticClass:"settings output-container"},[n("van-field",{attrs:{type:"number",label:"SSB中心频点H",placeholder:"请输入SSB中心频点H"},on:{focusin:t.focusInB},model:{value:t.ssbCenterH,callback:function(e){t.ssbCenterH=e},expression:"ssbCenterH"}}),n("van-field",{attrs:{type:"number",label:"SSB绝对频点",placeholder:"请输入SSB绝对频点"},on:{focusin:t.focusInB},model:{value:t.ssbAbs,callback:function(e){t.ssbAbs=e},expression:"ssbAbs"}}),n("div",{staticStyle:{margin:"16px 16px 50px","text-align":"center"}},[n("van-button",{staticStyle:{width:"45%"},attrs:{round:"",size:"small",type:"danger"},on:{click:t.clearB}},[t._v(" 清除 ")]),t._v(" "),n("van-button",{staticStyle:{width:"45%"},attrs:{round:"",size:"small",type:"primary"},on:{click:t.computeB}},[t._v(" 计算 ")])],1)],1)],1)},o=[],r=(n("68ef"),n("9d70"),n("3743"),n("e3b3"),n("bc1b"),n("c31d")),s=n("2638"),c=n.n(s),a=n("d282"),u=n("ba31"),l=n("b1d2"),p=n("48f4"),d=n("ad06"),f=n("543e"),h=Object(a["a"])("button"),b=h[0],g=h[1];function A(t,e,n,i){var o,r=e.tag,s=e.icon,a=e.type,h=e.color,b=e.plain,A=e.disabled,m=e.loading,S=e.hairline,v=e.loadingText,N=e.iconPosition,y={};function x(t){m||A||(Object(u["a"])(i,"click",t),Object(p["a"])(i))}function w(t){Object(u["a"])(i,"touchstart",t)}h&&(y.color=b?h:"white",b||(y.background=h),-1!==h.indexOf("gradient")?y.border=0:y.borderColor=h);var C=[g([a,e.size,{plain:b,loading:m,disabled:A,hairline:S,block:e.block,round:e.round,square:e.square}]),(o={},o[l["b"]]=S,o)];function B(){return m?n.loading?n.loading():t(f["a"],{class:g("loading"),attrs:{size:e.loadingSize,type:e.loadingType,color:"currentColor"}}):s?t(d["a"],{attrs:{name:s,classPrefix:e.iconPrefix},class:g("icon")}):void 0}function P(){var i,o=[];return"left"===N&&o.push(B()),i=m?v:n.default?n.default():e.text,i&&o.push(t("span",{class:g("text")},[i])),"right"===N&&o.push(B()),o}return t(r,c()([{style:y,class:C,attrs:{type:e.nativeType,disabled:A},on:{click:x,touchstart:w}},Object(u["b"])(i)]),[t("div",{class:g("content")},[P()])])}A.props=Object(r["a"])({},p["c"],{text:String,icon:String,color:String,block:Boolean,plain:Boolean,round:Boolean,square:Boolean,loading:Boolean,hairline:Boolean,disabled:Boolean,iconPrefix:String,nativeType:String,loadingText:String,loadingType:String,tag:{type:String,default:"button"},type:{type:String,default:"default"},size:{type:String,default:"normal"},loadingSize:{type:String,default:"20px"},iconPosition:{type:String,default:"left"}});var m=b(A),S=(n("0653"),n("34e9")),v=(n("be7f"),n("565f")),N=(n("a9e3"),n("b680"),n("36ad")),y={name:"nr",components:{vanField:v["a"],vanCellGroup:S["a"],vanButton:m,PageHeader:N["a"]},data:function(){return{ctype:1,a:0,b:100,c:.03,d:273,e:0,f:48,arfcnValueNr:0,pArfcnValueNr:0,pCenterA:0,pPointA:0,pPointAAbs:0,ssbCenterH:0,ssbAbs:0,mark:0}},computed:{computedM:function(){return 1==this.ctype?3:1},computedG:function(){var t=this.a-12*this.d*this.c/2;return Number(t.toFixed(2))},computedSSBN:function(){var t=this.computedG,e=this.computedM;return 24==this.f?this.roundUp((t+120*this.c-.05*e)/1.2):48==this.f?this.roundUp((t+144*this.c+120*this.c-.05*e)/1.2):0},computedGSCN:function(){return 3*this.computedSSBN},computedH:function(){return Number((1.2*this.computedSSBN+.05*this.computedM).toFixed(2))},computedPointA:function(){return this.computedG-this.e*this.c*12},computedKSSB:function(){return Math.round((this.computedH-120*this.c-this.computedPointA)/.015%24)},computedOffsetToPointA:function(){return Math.round((this.computedH-120*this.c-.015*this.computedKSSB-this.computedPointA)/.18)},computedSSBAbs:function(){return Math.round(200*this.computedH)},computedPointAAbs:function(){return 200*this.computedPointA},computedA:function(){return window.console.log("computeA"),this.methodA(),this.arfcnValueNr/200},computedArfcn:function(){return 1e3*this.a/5}},methods:{roundUp:function(t){return t<0?Math.floor(t):Math.floor(t)==t?t:Math.floor(t)+1},toFixed:function(t){return Number(t).toFixed(2)},methodArfcnValueNr:function(){this.arfcnValueNr=1e3*this.a/5},methodA:function(){this.a=this.arfcnValueNr/200},focusIn:function(t){t.currentTarget.select()},clearA:function(){this.pCenterA=0,this.pArfcnValueNr=0,this.pPointA=0,this.pPointAAbs=0},compute:function(){window.console.log("计算"),0!=this.pCenterA?(window.console.log("计算pCenterA"),this.pCenterA<3e3?(this.a=this.pCenterA,this.arfcnValueNr=200*this.pCenterA):window.console.log("大于")):0!=this.pArfcnValueNr?(window.console.log("计算arfcnValueNr"),this.pArfcnValueNr<6e5?this.arfcnValueNr=this.pArfcnValueNr:window.console.log("大于")):0!=this.pPointA?(window.console.log("计算pPointA"),this.pPointA<3e3?(this.a=this.pPointA,this.arfcnValueNr=200*this.pPointA):window.console.log("大于")):0!=this.pPointAAbs&&(window.console.log("计算pPointAAbs"),this.pPointAAbs<6e5?this.a=.005*this.pPointAAbs:(window.console.log("大于"),this.a=this.pPointAAbs-9e3+3e3))},focusInB:function(t){t.currentTarget.select()},clearB:function(){this.ssbAbs=0,this.ssbCenterH=0},computeB:function(){window.console.log("计算"),0!=this.ssbCenterH?(this.ssbAbs=0,this.ssbCenterH<=3e3?this.ssbAbs=200*this.ssbCenterH:this.ssbCenterH>3e3&&(this.ssbAbs=this.toFixed(6e5+(this.ssbCenterH-3e3)/.015))):this.ssbAbs<=599999?this.ssbCenterH=.005*this.ssbAbs:this.ssbAbs>599999&&(this.ssbCenterH=this.toFixed(.015*(this.ssbAbs-6e5)+3e3))}}},x=y,w=(n("73c2"),n("2877")),C=Object(w["a"])(x,i,o,!1,null,null,null);e["default"]=C.exports},"3c12":function(t,e,n){},"543e":function(t,e,n){"use strict";var i=n("2638"),o=n.n(i),r=n("d282"),s=n("ea8e"),c=n("ba31"),a=Object(r["a"])("loading"),u=a[0],l=a[1];function p(t,e){if("spinner"===e.type){for(var n=[],i=0;i<12;i++)n.push(t("i"));return n}return t("svg",{class:l("circular"),attrs:{viewBox:"25 25 50 50"}},[t("circle",{attrs:{cx:"50",cy:"50",r:"20",fill:"none"}})])}function d(t,e,n){if(n.default){var i,o={fontSize:Object(s["a"])(e.textSize),color:null!=(i=e.textColor)?i:e.color};return t("span",{class:l("text"),style:o},[n.default()])}}function f(t,e,n,i){var r=e.color,a=e.size,u=e.type,f={color:r};if(a){var h=Object(s["a"])(a);f.width=h,f.height=h}return t("div",o()([{class:l([u,{vertical:e.vertical}])},Object(c["b"])(i,!0)]),[t("span",{class:l("spinner",u),style:f},[p(t,e)]),d(t,e,n)])}f.props={color:String,size:[Number,String],vertical:Boolean,textSize:[Number,String],textColor:String,type:{type:String,default:"circular"}},e["a"]=u(f)},5899:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"58a8":function(t,e,n){var i=n("1d80"),o=n("5899"),r="["+o+"]",s=RegExp("^"+r+r+"*"),c=RegExp(r+r+"*$"),a=function(t){return function(e){var n=String(i(e));return 1&t&&(n=n.replace(s,"")),2&t&&(n=n.replace(c,"")),n}};t.exports={start:a(1),end:a(2),trim:a(3)}},7156:function(t,e,n){var i=n("861d"),o=n("d2bb");t.exports=function(t,e,n){var r,s;return o&&"function"==typeof(r=e.constructor)&&r!==n&&i(s=r.prototype)&&s!==n.prototype&&o(t,s),t}},"73c2":function(t,e,n){"use strict";n("3c12")},a9e3:function(t,e,n){"use strict";var i=n("83ab"),o=n("da84"),r=n("94ca"),s=n("6eeb"),c=n("5135"),a=n("c6b6"),u=n("7156"),l=n("c04e"),p=n("d039"),d=n("7c73"),f=n("241c").f,h=n("06cf").f,b=n("9bf2").f,g=n("58a8").trim,A="Number",m=o[A],S=m.prototype,v=a(d(S))==A,N=function(t){var e,n,i,o,r,s,c,a,u=l(t,!1);if("string"==typeof u&&u.length>2)if(u=g(u),e=u.charCodeAt(0),43===e||45===e){if(n=u.charCodeAt(2),88===n||120===n)return NaN}else if(48===e){switch(u.charCodeAt(1)){case 66:case 98:i=2,o=49;break;case 79:case 111:i=8,o=55;break;default:return+u}for(r=u.slice(2),s=r.length,c=0;c<s;c++)if(a=r.charCodeAt(c),a<48||a>o)return NaN;return parseInt(r,i)}return+u};if(r(A,!m(" 0o1")||!m("0b1")||m("+0x1"))){for(var y,x=function(t){var e=arguments.length<1?0:t,n=this;return n instanceof x&&(v?p((function(){S.valueOf.call(n)})):a(n)!=A)?u(new m(N(e)),n,x):N(e)},w=i?f(m):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger,fromString,range".split(","),C=0;w.length>C;C++)c(m,y=w[C])&&!c(x,y)&&b(x,y,h(m,y));x.prototype=S,S.constructor=x,s(o,A,x)}},bc1b:function(t,e,n){},e3b3:function(t,e,n){}}]);
//# sourceMappingURL=chunk-85bf91e6.4229a03e.js.map