import{P as B}from"./PageHeader.dc88eb8a.js";import{i as w,R as x,j as E,m as k,l as C,u as G,C as _,h as i,k as M,z as N,s as S,_ as j,g as m,o as I,c as R,b as s,w as h,v as b,H as u,p as V,e as z}from"./index.6ddc2597.js";const[P,D]=w("row"),y=Symbol(P),U={tag:x("div"),wrap:E,align:String,gutter:k(0),justify:String};var H=C({name:P,props:U,setup(c,{slots:e}){const{children:p,linkChildren:f}=G(y),d=_(()=>{const n=[[]];let t=0;return p.forEach((a,o)=>{t+=Number(a.span),t>24?(n.push([o]),t-=24):n[n.length-1].push(o)}),n}),r=_(()=>{const n=Number(c.gutter),t=[];return n&&d.value.forEach(a=>{const o=n*(a.length-1)/a.length;a.forEach((v,F)=>{if(F===0)t.push({right:o});else{const g=n-t[v-1].right,$=o-g;t.push({left:g,right:$})}})}),t});return f({spaces:r}),()=>{const{tag:n,wrap:t,align:a,justify:o}=c;return i(n,{class:D({[`align-${a}`]:a,[`justify-${o}`]:o,nowrap:!t})},{default:()=>{var v;return[(v=e.default)==null?void 0:v.call(e)]}})}}});const[K,L]=w("col"),O={tag:x("div"),span:k(0),offset:M};var T=C({name:K,props:O,setup(c,{slots:e}){const{parent:p,index:f}=N(y),d=_(()=>{if(!p)return;const{spaces:r}=p;if(r&&r.value&&r.value[f.value]){const{left:n,right:t}=r.value[f.value];return{paddingLeft:n?`${n}px`:null,paddingRight:t?`${t}px`:null}}});return()=>{const{tag:r,span:n,offset:t}=c;return i(r,{style:d.value,class:L({[n]:n,[`offset-${t}`]:t})},{default:()=>{var a;return[(a=e.default)==null?void 0:a.call(e)]}})}}});const W=S(T),Y=S(H);const q={data(){return{f:"",p:""}},components:{vanRow:Y,vanCol:W,PageHeader:B},created(){},methods:{pgsm2point(){this.p=((this.f-935)*5).toFixed(0)},pgsm2fre(){this.f=(935+.2*this.p).toFixed(1)},egsm2point(){this.p=((this.f-935)*5+1024).toFixed(0)},egsm2fre(){this.f=(935+.2*(this.p-1024)).toFixed(1)},dcs2point(){this.p=((this.f-1805.2)*5+512).toFixed(0)},dcs2fre(){this.f=(1805.2+.2*(this.p-512)).toFixed(1)}}},l=c=>(V("data-v-310c242c"),c=c(),z(),c),A={class:"wrapper"},J={class:"content"},Q={class:"convert-btns"},X=l(()=>s("div",null,"PGSM",-1)),Z=l(()=>s("div",null,"935-960",-1)),tt=l(()=>s("div",null,"EGSM",-1)),et=l(()=>s("div",null,"925.2-935",-1)),nt=l(()=>s("div",null,"DCS",-1)),ot=l(()=>s("div",null,"1805-1880",-1)),st=l(()=>s("div",null,"1-124",-1)),rt=l(()=>s("div",null,"PGSM",-1)),at=l(()=>s("div",null,"975-1023",-1)),lt=l(()=>s("div",null,"EGSM",-1)),it=l(()=>s("div",null,"512-885",-1)),ct=l(()=>s("div",null,"DCS",-1));function dt(c,e,p,f,d,r){const n=m("page-header"),t=m("van-col"),a=m("van-row");return I(),R("div",A,[i(n,{backUrl:"grid",title:"GMS\u9891\u70B9"}),s("div",J,[h(s("input",{type:"number","onUpdate:modelValue":e[0]||(e[0]=o=>d.f=o),placeholder:"\u8BF7\u8F93\u5165\u9891\u7387",class:"input input-top"},null,512),[[b,d.f]]),s("div",Q,[i(a,null,{default:u(()=>[i(t,{span:"8",onClick:e[1]||(e[1]=o=>r.pgsm2point())},{default:u(()=>[X,Z]),_:1}),i(t,{span:"8",onClick:e[2]||(e[2]=o=>r.egsm2point())},{default:u(()=>[tt,et]),_:1}),i(t,{span:"8",onClick:e[3]||(e[3]=o=>r.dcs2point())},{default:u(()=>[nt,ot]),_:1})]),_:1}),i(a,null,{default:u(()=>[i(t,{span:"8",onClick:e[4]||(e[4]=o=>r.pgsm2fre())},{default:u(()=>[st,rt]),_:1}),i(t,{span:"8",onClick:e[5]||(e[5]=o=>r.egsm2fre())},{default:u(()=>[at,lt]),_:1}),i(t,{span:"8",onClick:e[6]||(e[6]=o=>r.dcs2fre())},{default:u(()=>[it,ct]),_:1})]),_:1})]),h(s("input",{type:"number","onUpdate:modelValue":e[7]||(e[7]=o=>d.p=o),placeholder:"\u8BF7\u8F93\u5165\u9891\u70B9",class:"input input-bottom"},null,512),[[b,d.p]])])])}var ft=j(q,[["render",dt],["__scopeId","data-v-310c242c"]]);export{ft as default};
