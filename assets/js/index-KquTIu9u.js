
/**
 * 由 MrZhang 提供技术支持
 * Powered by elegant-admin
 * Github https://github.com/zhangyao1990/elegant-admin
 */

import{p as b}from"./index-CF0Df7v0.js";import{_ as C}from"./icon.vue_vue_type_script_setup_true_lang-CXPPfzEY.js";import{d as y,i as N,a as t,c as a,F as x,aa as $,u as o,_ as u,W as w,f as i,a0 as M,a8 as f,r as g,b as S,s as z,a1 as k,m as v,Z as H}from"./@vue-DJ53MWs5.js";import"./vite-plugin-fake-server-4rIte7rE.js";import"./mockjs-Dd0W0IWH.js";import"./@imengyu-BQwzwvVc.js";import"./vue-CAygiDOH.js";import"./floating-vue-DjZaMi6K.js";import"./@floating-ui-Y0iFLo_g.js";import"./vue-m-message-BxJX2Zqc.js";import"./overlayscrollbars-CZjZ1Dbc.js";import"./@iconify-C4HLlXtv.js";import"./overlayscrollbars-vue-BxfA_dC8.js";import"./@headlessui-Bm2TyfRI.js";import"./mitt-DJ65BbbF.js";import"./crypto-js-RCkyKLW7.js";import"./lodash-es-l8Yk8yFo.js";import"./pinia-DmVFObHF.js";import"./vue-demi-Dq6ymT-8.js";import"./vue-router-Bg2mojPD.js";import"./hotkeys-js-BfWqkGRU.js";import"./element-plus-C6knWGiR.js";import"./@vueuse-DVujDNXP.js";import"./nprogress-BdJdCxhg.js";import"./@element-plus-Ngrzdf6G.js";import"./@sxzz-D9SI2xQl.js";import"./@ctrl-r5W6hzzQ.js";import"./dayjs-p2P62yYc.js";import"./async-validator-CRbnkQr6.js";import"./memoize-one-BdPwpGay.js";import"./normalize-wheel-es-B6fDCfyv.js";import"./vue-i18n-BnGu2oZ8.js";import"./@intlify-CEEhciFb.js";import"./colord-CrBFWQzZ.js";import"./monaco-editor-PTJBK6lV.js";import"./path-browserify-DTVwunqE.js";import"./axios-DmypytPv.js";const R={class:"elegant-breadcrumb h-40px flex items-center truncate pl-4"},V={key:0},j={key:0},D=["onClick","onMouseenter"],F=y({__name:"breadcrumb",setup(B){const e=N("design");function m(r){e.setCheckedNode(r)}return(r,n)=>(t(),a("div",R,[(t(!0),a(x,null,$(o(e).state.matched,(l,c)=>{var p;return t(),a("span",{key:c},[c>o(e).state.matched.length-4?(t(),a("span",V,[o(e).state.matched.length>3&&c===o(e).state.matched.length-3?(t(),a("span",j,"...")):u("",!0),c!==0?(t(),w(o(C),{key:1,class:"m-1",name:"icon-zhankai"})):u("",!0),i("span",{class:"node-item cursor-pointer",onClick:s=>m(l),onMouseenter:f(s=>o(e).setHoverNode(l),["stop"]),onMouseleave:n[0]||(n[0]=f(s=>o(e).setHoverNode(null),["stop"]))},M(l.label??((p=o(b).getComponentConfingByType(l.type))==null?void 0:p.defaultSchema.label)),41,D)])):u("",!0)])}),128))]))}}),E={key:0,class:"elegant-right-sidebar-container relative"},I=i("div",{class:"w-10px"},null,-1),L={class:"w-280px"},T={class:"elegant-actions-container"},W=["title","onClick"],Z={class:"elegant-sidebar-content"},Be=y({__name:"index",setup(B){var p;const e=g(!1),m=S(()=>b.viewsContainers.rightSidebars.value.filter(s=>s.visible)),r=g(0),n=z(null);n.value=(p=m.value[0])==null?void 0:p.component;function l(){e.value=!e.value}function c(s,d){if(r.value===d)return!1;n.value=s.component,r.value=d}return(s,d)=>n.value?(t(),a("div",E,[i("div",{class:"elegant-right-sidebar-hide-btn absolute left--18px top-80px z-9 h-28px w-28px flex cursor-pointer items-center justify-center rounded-full",onClick:l},[k(o(C),{prefix:"",class:v(["iconfont transition-all",{"rotate-180":e.value}]),name:"elegant-icon-zhankai"},null,8,["class"])]),I,i("div",{class:v(["elegant-right-sidebar w-280px",{hide:e.value}])},[i("div",L,[k(F),i("ul",T,[(t(!0),a(x,null,$(m.value,(h,_)=>(t(),a("li",{key:_,class:v(["elegant-action-item",{checked:r.value===_}]),title:h.title,onClick:q=>c(h,_)},M(h.title),11,W))),128))]),i("div",Z,[(t(),w(H(n.value)))])])],2)])):u("",!0)}});export{Be as default};
