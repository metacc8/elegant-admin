
/**
 * 由 MrZhang 提供技术支持
 * Powered by elegant-admin
 * Github https://github.com/zhangyao1990/elegant-admin
 */

import{y as c,m as h,a as g}from"./element-plus-DdTkCxgE.js";import{d as v,r as F,w as t,b as E,j as o,n as y}from"./@vue-DJ53MWs5.js";import"./lodash-es-l8Yk8yFo.js";import"./@vueuse-Bz9Gvxjd.js";import"./nprogress-BdJdCxhg.js";import"./@imengyu-BQwzwvVc.js";import"./vue-CAygiDOH.js";import"./@element-plus-Ngrzdf6G.js";import"./@sxzz-D9SI2xQl.js";import"./@ctrl-r5W6hzzQ.js";import"./dayjs-p2P62yYc.js";import"./async-validator-CRbnkQr6.js";import"./memoize-one-BdPwpGay.js";import"./normalize-wheel-es-B6fDCfyv.js";import"./@floating-ui-Y0iFLo_g.js";const q=v({props:{modelValue:{type:Array,default:()=>[]}},emits:["update:modelValue"],setup(r,{emit:n,attrs:p}){const l=F([]);t(l,e=>{n("update:modelValue",e)}),t(()=>r.modelValue,e=>{if(e!=null&&e.length>0&&l.value!=null){if(l.value===e)return;l.value.length=0,l.value.push(...e)}},{deep:!0,immediate:!0});const u=(e,a)=>{y(()=>{l.value=a})},s=e=>{},i=(e,a,f)=>{},d=(e,a,f)=>{g.error("上传失败")},m=E(()=>({...p,"file-list":l.value,onBeforeUpload:s,onChange:u,onSuccess:i,onError:d}));return()=>o("div",null,{default:()=>[o(c,m.value,{default:()=>[o(h,{},{default:()=>[o("span",{class:"iconfont elegant-icon-shangchuan-file",style:{"margin-right":"2px"}}),o("span",null,{default:()=>"上传文件"})]})]})]})}});export{q as default};
