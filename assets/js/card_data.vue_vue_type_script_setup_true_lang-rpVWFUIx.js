
/**
 * 由 MrZhang 提供技术支持
 * Powered by elegant-admin
 * Github https://github.com/zhangyao1990/elegant-admin
 */

import{_ as D,a as G}from"./GridItem.vue_vue_type_script_setup_true_lang-B-s0jwix.js";import{T as S,C as E,D as F}from"./@vueuse-DVujDNXP.js";import{d as V,r as I,b as y,w as N,a as s,c as b,a0 as $,u as d,n as R,a1 as o,X as c,f as v,S as j,W as w,Z as z,F as L,aa as P}from"./@vue-DJ53MWs5.js";import{_ as W}from"./index-CF0Df7v0.js";const X=V({name:"CountTo",__name:"index",props:{startValue:{default:0},endValue:{default:2021},duration:{default:1500},autoplay:{type:Boolean,default:!0},decimals:{default:0},prefix:{default:""},suffix:{default:""},separator:{default:","},decimal:{default:"."},useEasing:{type:Boolean,default:!0},transition:{default:"linear"}},setup(h){const t=h,r=I(t.startValue),f=y(()=>t.useEasing?S[t.transition]:void 0),p=E(r,{disabled:!1,duration:t.duration,transition:f.value}),n=y(()=>k(p.value));function k(l){const{decimals:i,decimal:_,separator:e,suffix:a,prefix:B}=t;let x=l.toFixed(i);x=String(x);const g=x.split(".");let u=g[0];const T=g.length>1?_+g[1]:"",C=/(\d+)(\d{3})/;if(e)for(;C.test(u);)u=u.replace(C,`$1${e}$2`);return B+u+T+a}async function m(){await R(),r.value=t.endValue}return N([()=>t.startValue,()=>t.endValue],()=>{t.autoplay&&m()},{immediate:!0}),(l,i)=>(s(),b("span",null,$(d(n)),1))}}),Z={class:"text-16px"},q={class:"flex justify-between pt-12px"},M=V({name:"CardData",__name:"card_data",setup(h){const t=y(()=>[{key:"visitCount",title:"访问量",value:5188,unit:"",color:{start:"#ec4786",end:"#b955a4"},icon:"ant-design:bar-chart-outlined"},{key:"turnover",title:"成交额",value:6188,unit:"$",color:{start:"#865ec0",end:"#5144b4"},icon:"ant-design:money-collect-outlined"},{key:"downloadCount",title:"下载量",value:718888,unit:"",color:{start:"#56cdf3",end:"#719de3"},icon:"carbon:document-download"},{key:"dealCount",title:"成交量",value:5173,unit:"",color:{start:"#fcbc25",end:"#f68057"},icon:"ant-design:trademark-circle-outlined"}]),[r,f]=F();function p(n){return`linear-gradient(to bottom right, ${n.start}, ${n.end})`}return(n,k)=>{const m=W,l=X,i=D,_=G;return s(),b("div",null,[o(d(r),null,{default:c(({$slots:e,gradientColor:a})=>[v("div",{class:"rd-8px px-16px pb-4px pt-8px text-white",style:j({backgroundImage:a})},[(s(),w(z(e.default)))],4)]),_:1}),o(_,{ref:"gridRef",collapsed:!1,gap:[10,10],cols:{xs:1,sm:2,md:2,lg:4,xl:4}},{default:c(()=>[(s(!0),b(L,null,P(d(t),(e,a)=>(s(),w(i,{key:a,index:a},{default:c(()=>[o(d(f),{"gradient-color":p(e.color),class:"flex-1"},{default:c(()=>[v("h3",Z,$(e.title),1),v("div",q,[o(m,{name:e.icon,class:"text-32px"},null,8,["name"]),o(l,{prefix:e.unit,"start-value":1,"end-value":e.value,class:"text-30px text-white dark:text-dark"},null,8,["prefix","end-value"])])]),_:2},1032,["gradient-color"])]),_:2},1032,["index"]))),128))]),_:1},512)])}}});export{M as _};
