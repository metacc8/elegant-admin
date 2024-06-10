
/**
 * 由 MrZhang 提供技术支持
 * Powered by elegant-admin
 * Github https://github.com/zhangyao1990/elegant-admin
 */

import{m as c,B as f}from"./element-plus-C6knWGiR.js";import{d as h,j as o,R as a}from"./@vue-DJ53MWs5.js";import"./lodash-es-l8Yk8yFo.js";import"./@vueuse-DVujDNXP.js";import"./nprogress-BdJdCxhg.js";import"./@imengyu-BQwzwvVc.js";import"./vue-CAygiDOH.js";import"./@element-plus-Ngrzdf6G.js";import"./@sxzz-D9SI2xQl.js";import"./@ctrl-r5W6hzzQ.js";import"./dayjs-p2P62yYc.js";import"./async-validator-CRbnkQr6.js";import"./memoize-one-BdPwpGay.js";import"./normalize-wheel-es-B6fDCfyv.js";import"./@floating-ui-Y0iFLo_g.js";const R=h({props:{componentSchema:{type:Object,default:()=>({})}},emits:["ok","close","update:modelValue"],setup(m,{attrs:u,slots:t,emit:l}){return()=>{var p;const e={...m.componentSchema,...u,title:((p=m.componentSchema)==null?void 0:p.label)??"",class:"elegant-modal-el","destroy-on-close":!0,"onUpdate:modelValue":d},r=e.children??[];delete e.children;let n=null;r.length?n=()=>r.map(i=>a(t,"node",{componentSchema:i})):n=()=>[a(t,"default")];function s(){l("ok")}function d(i){l("update:modelValue",!1),l("close")}return o(f,e,{default:()=>[a(t,"edit-node",{},n),o("div",{class:"elegant-modal-footer"},[o(c,{onClick:d},{default:()=>"关闭"}),o(c,{type:"primary",onClick:s},{default:()=>e.okText??"确定"})])]})}}});export{R as default};
