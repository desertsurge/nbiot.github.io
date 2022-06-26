import{l as n}from"./localStorage.42bb8409.js";import{P as m}from"./PageHeader.dc88eb8a.js";import{_ as w,g as b,o as a,c as s,h as v,b as t,F as p,r as _,t as r,w as k,v as F,d as c,n as h,p as B,e as y,f as x}from"./index.6ddc2597.js";const C={1:{down:{low:2110,high:2170,off:0}},2:{down:{low:1930,high:1990,off:600}},3:{down:{low:1805,high:1880,off:1200}},4:{down:{low:2110,high:2155,off:1950}},5:{down:{low:869,high:894,off:2400}},6:{down:{low:875,high:885,off:2650}},7:{down:{low:2620,high:2690,off:2750}},8:{down:{low:925,high:960,off:3450}},9:{down:{low:1844.9,high:1879.9,off:3800}},10:{down:{low:2110,high:2170,off:4150}},11:{down:{low:1475.9,high:1495.9,off:4750}},12:{down:{low:729,high:746,off:5010}},13:{down:{low:746,high:756,off:5180}},14:{down:{low:758,high:768,off:5280}},17:{down:{low:734,high:746,off:5730}},18:{down:{low:860,high:875,off:5850}},19:{down:{low:875,high:890,off:6e3}},20:{down:{low:791,high:821,off:6150}},21:{down:{low:1495.9,high:1510.9,off:6450}},22:{down:{low:3510,high:3590,off:6600}},23:{down:{low:2180,high:2200,off:7500}},24:{down:{low:1525,high:1559,off:7700}},25:{down:{low:1930,high:1995,off:8040}},26:{down:{low:859,high:894,off:8690}},27:{down:{low:852,high:869,off:9040}},28:{down:{low:758,high:803,off:9210}}},H={data(){return{bands:[1,2,3,4,5,6,7,8,9,10,11,12,13,14,17,18,19,20,21,22,23,24,25,26,27,28],role:{low:0,high:0,off:0},selectedBand:0,showAlert:!1,value:"",curHomeBackTriggerTimes:1,maxHomeBackTriggerTimes:2,statusBarHeight:40,touchBarHeight:20}},components:{PageHeader:m},created(){let e=this,d=n.getItem("ftt.band.select");d?e.bandClick(d):e.bandClick(1)},computed:{result(){let e=this.changeShowAlert();return e==""?e:(this.value-this.role.low)*10+this.role.off},itemHeight(){return this.scrollHeight/this.bands.length},scrollHeight(){let e=window.outerHeight;return this.realPx(e)-50}},methods:{bandClick(e){let d=C[e];this.selectedBand=e,this.role=d.down,n.setItem("ftt.band.select",e)},realPx(e){return e},changeShowAlert(){return this.showAlert=!1,!this.value||(this.value+"").length<3?"":this.value<this.role.low||this.value>this.role.high?(this.showAlert=!0,""):null}}},f=e=>(B("data-v-29fccad4"),e=e(),y(),e),A={class:"wrapper"},S={class:"band-ctt"},z=["onClick"],I={class:"band-name"},T={key:0,class:"icon-right"},D={class:"main-ctt"},N={class:"label"},P={class:"alert information"},V={key:0,class:"alert danger"},E=f(()=>t("div",null,"\u8F93\u5165\u6570\u503C\u5FC5\u987B\u5728\u8303\u56F4\u4E4B\u5185\uFF1A",-1)),U={class:"result-ctt"},L=f(()=>t("div",{class:"result-title"},"ARFCN",-1)),M={key:0,class:"result-body"};function O(e,d,R,j,o,l){const u=b("page-header");return a(),s("div",A,[v(u,{backUrl:"grid",title:"FDD\u9891\u70B9"}),t("div",{class:"main",style:h({height:l.scrollHeight+"px"})},[t("div",S,[(a(!0),s(p,null,_(o.bands,(i,g)=>(a(),s("div",{onClick:q=>l.bandClick(i),class:x(["band-item",o.selectedBand==i?"active":""]),key:g,style:h({height:l.itemHeight+"px",lineHeight:l.itemHeight+"px"})},[t("div",I,"Band "+r(i),1),o.selectedBand==i?(a(),s("div",T)):c("",!0)],14,z))),128))]),t("div",D,[t("div",N,"\u9891\u6BB5\uFF1ABand "+r(o.selectedBand),1),k(t("input",{class:"input",type:"number","onUpdate:modelValue":d[0]||(d[0]=i=>o.value=i),placeholder:"\u5B9E\u9645\u9891\u70B9\u503C"},null,512),[[F,o.value]]),t("div",P,"\u8303\u56F4\uFF1A\uFF08"+r(o.role.low)+" - "+r(o.role.high)+"\uFF09 OFF:"+r(o.role.off),1),o.showAlert?(a(),s("div",V,[E,t("div",null,"\uFF08"+r(o.role.low)+" - "+r(o.role.high)+"\uFF09",1)])):c("",!0),t("div",U,[L,l.result?(a(),s("div",M,r(l.result),1)):c("",!0)])])],4)])}var Q=w(H,[["render",O],["__scopeId","data-v-29fccad4"]]);export{Q as default};
