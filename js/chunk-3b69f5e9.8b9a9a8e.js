(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3b69f5e9"],{1858:function(t,e,o){(function(e){(function(){"use strict";var o;function i(){}o=i,o.prototype.getItem=function(t){return this.hasOwnProperty(t)?String(this[t]):null},o.prototype.setItem=function(t,e){this[t]=String(e)},o.prototype.removeItem=function(t){delete this[t]},o.prototype.clear=function(){var t=this;Object.keys(t).forEach((function(e){t[e]=void 0,delete t[e]}))},o.prototype.key=function(t){return t=t||0,Object.keys(this)[t]},o.prototype.__defineGetter__("length",(function(){return Object.keys(this).length})),e.localStorage?t.exports=localStorage:t.exports=new i})()}).call(this,o("c8ba"))},"36ad":function(t,e,o){"use strict";var i=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"page-header-content"},[o("div",{staticClass:"page-header-left",attrs:{"v-if":t.backUrl},on:{click:t.back}},[o("i",{staticClass:"van-icon van-icon-arrow-left page-header-icon"}),o("span",{staticClass:"page-header-left-text"},[t._v("返回")])]),o("div",{staticClass:"page-header-title van-ellipsis"},[t._v(t._s(t.title))])])},n=[],a={name:"PageHeader",props:{title:String,backUrl:String},methods:{back:function(){this.$router.push(this.backUrl)}}},s=a,l=(o("d81f"),o("2877")),r=Object(l["a"])(s,i,n,!1,null,"70c356f8",null);e["a"]=r.exports},ab8a:function(t,e,o){},cd3b:function(t,e,o){"use strict";o.r(e);var i=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"wrapper"},[o("page-header",{attrs:{backUrl:"grid",title:"FDD频点"}}),o("div",{staticClass:"main",style:{height:t.scrollHeight+"px"}},[o("div",{staticClass:"band-ctt"},t._l(t.bands,(function(e,i){return o("div",{key:i,class:["band-item",t.selectedBand==e?"active":""],style:{height:t.itemHeight+"px",lineHeight:t.itemHeight+"px"},on:{click:function(o){return t.bandClick(e)}}},[o("div",{staticClass:"band-name"},[t._v("Band "+t._s(e))]),t.selectedBand==e?o("div",{staticClass:"icon-right"}):t._e()])})),0),o("div",{staticClass:"main-ctt"},[o("div",{staticClass:"label"},[t._v("频段：Band "+t._s(t.selectedBand))]),o("input",{directives:[{name:"model",rawName:"v-model",value:t.value,expression:"value"}],staticClass:"input",attrs:{type:"number",placeholder:"实际频点值"},domProps:{value:t.value},on:{input:function(e){e.target.composing||(t.value=e.target.value)}}}),o("div",{staticClass:"alert information"},[t._v("范围：（"+t._s(t.role.low)+" - "+t._s(t.role.high)+"） OFF:"+t._s(t.role.off))]),t.showAlert?o("div",{staticClass:"alert danger"},[o("div",[t._v("输入数值必须在范围之内：")]),o("div",[t._v("（"+t._s(t.role.low)+" - "+t._s(t.role.high)+"）")])]):t._e(),o("div",{staticClass:"result-ctt"},[o("div",{staticClass:"result-title"},[t._v("ARFCN")]),t.result?o("div",{staticClass:"result-body"},[t._v(t._s(t.result))]):t._e()])])])],1)},n=[],a=o("1858"),s=o.n(a),l=o("36ad"),r={1:{down:{low:2110,high:2170,off:0}},2:{down:{low:1930,high:1990,off:600}},3:{down:{low:1805,high:1880,off:1200}},4:{down:{low:2110,high:2155,off:1950}},5:{down:{low:869,high:894,off:2400}},6:{down:{low:875,high:885,off:2650}},7:{down:{low:2620,high:2690,off:2750}},8:{down:{low:925,high:960,off:3450}},9:{down:{low:1844.9,high:1879.9,off:3800}},10:{down:{low:2110,high:2170,off:4150}},11:{down:{low:1475.9,high:1495.9,off:4750}},12:{down:{low:729,high:746,off:5010}},13:{down:{low:746,high:756,off:5180}},14:{down:{low:758,high:768,off:5280}},17:{down:{low:734,high:746,off:5730}},18:{down:{low:860,high:875,off:5850}},19:{down:{low:875,high:890,off:6e3}},20:{down:{low:791,high:821,off:6150}},21:{down:{low:1495.9,high:1510.9,off:6450}},22:{down:{low:3510,high:3590,off:6600}},23:{down:{low:2180,high:2200,off:7500}},24:{down:{low:1525,high:1559,off:7700}},25:{down:{low:1930,high:1995,off:8040}},26:{down:{low:859,high:894,off:8690}},27:{down:{low:852,high:869,off:9040}},28:{down:{low:758,high:803,off:9210}}},h={data:function(){return{bands:[1,2,3,4,5,6,7,8,9,10,11,12,13,14,17,18,19,20,21,22,23,24,25,26,27,28],role:{low:0,high:0,off:0},selectedBand:0,showAlert:!1,value:"",curHomeBackTriggerTimes:1,maxHomeBackTriggerTimes:2,statusBarHeight:40,touchBarHeight:20}},components:{PageHeader:l["a"]},created:function(){var t=this,e=s.a.getItem("ftt.band.select");e?t.bandClick(e):t.bandClick(1)},computed:{result:function(){var t=this.changeShowAlert();return""==t?t:10*(this.value-this.role.low)+this.role.off},itemHeight:function(){return this.scrollHeight/this.bands.length},scrollHeight:function(){var t=window.outerHeight;return this.realPx(t)-50}},methods:{bandClick:function(t){var e=r[t];this.selectedBand=t,this.role=e.down,s.a.setItem("ftt.band.select",t)},realPx:function(t){return t},changeShowAlert:function(){return this.showAlert=!1,!this.value||(this.value+"").length<3?"":this.value<this.role.low||this.value>this.role.high?(this.showAlert=!0,""):null}}},c=h,f=(o("e213"),o("2877")),d=Object(f["a"])(c,i,n,!1,null,"262f293e",null);e["default"]=d.exports},d1b2:function(t,e,o){},d81f:function(t,e,o){"use strict";o("d1b2")},e213:function(t,e,o){"use strict";o("ab8a")}}]);
//# sourceMappingURL=chunk-3b69f5e9.8b9a9a8e.js.map