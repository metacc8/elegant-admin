
/**
 * 由 MrZhang 提供技术支持
 * Powered by elegant-admin
 * Github https://github.com/zhangyao1990/elegant-admin
 */

import{_ as d}from"./index.vue_vue_type_script_setup_true_lang-Dj6CjgGH.js";import{g as b}from"./monitor-JvW-EHFd.js";import{d as f,r as i,k as a,a1 as r,aj as h,a as _,c as g,f as v,u as p}from"./@vue-DJ53MWs5.js";import"./@element-plus-Ngrzdf6G.js";import"./sortablejs-C_eVYoc1.js";import"./@imengyu-BQwzwvVc.js";import"./vue-CAygiDOH.js";import"./vue-esign-BNnrYaMl.js";import"./index-CF0Df7v0.js";import"./vite-plugin-fake-server-4rIte7rE.js";import"./mockjs-Dd0W0IWH.js";import"./floating-vue-DjZaMi6K.js";import"./@floating-ui-Y0iFLo_g.js";import"./vue-m-message-BxJX2Zqc.js";import"./overlayscrollbars-CZjZ1Dbc.js";import"./@iconify-C4HLlXtv.js";import"./overlayscrollbars-vue-BxfA_dC8.js";import"./@headlessui-Bm2TyfRI.js";import"./mitt-DJ65BbbF.js";import"./crypto-js-RCkyKLW7.js";import"./lodash-es-l8Yk8yFo.js";import"./pinia-DmVFObHF.js";import"./vue-demi-Dq6ymT-8.js";import"./vue-router-Bg2mojPD.js";import"./hotkeys-js-BfWqkGRU.js";import"./element-plus-C6knWGiR.js";import"./@vueuse-DVujDNXP.js";import"./nprogress-BdJdCxhg.js";import"./@sxzz-D9SI2xQl.js";import"./@ctrl-r5W6hzzQ.js";import"./dayjs-p2P62yYc.js";import"./async-validator-CRbnkQr6.js";import"./memoize-one-BdPwpGay.js";import"./normalize-wheel-es-B6fDCfyv.js";import"./vue-i18n-BnGu2oZ8.js";import"./@intlify-CEEhciFb.js";import"./colord-CrBFWQzZ.js";import"./monaco-editor-PTJBK6lV.js";import"./path-browserify-DTVwunqE.js";import"./axios-DmypytPv.js";import"./GridItem.vue_vue_type_script_setup_true_lang-B-s0jwix.js";const S={class:"table-container"},C={class:"table-box"},se=f({name:"LoginLogs",__name:"index",setup(W){const l=i(),m=a({});function n(e){return{list:e&&e.records||[],total:e&&e.total||0}}const t=i({});function s(e){t.value=e;let o={...e};return b(o)}const c=a([{prop:"index",label:"排序",width:80,render:e=>r("span",null,[e.$index+(t.value.pageNum-1)*t.value.pageSize+1])},{prop:"name",label:"用户名",minWidth:100,search:{el:"input"}},{prop:"ip",label:"登录IP",minWidth:100},{prop:"address",label:"登录地点",minWidth:100},{prop:"system",label:"操作系统",minWidth:100},{prop:"browser",label:"流览器类型",minWidth:100},{label:"登录行为",prop:"behavior",minWidth:100},{prop:"status",label:"登录状态",enum:[{label:"成功",value:"SUCCESS"},{label:"失败",value:"FAIL"}],fieldNames:{label:"label",value:"value"},minWidth:100,search:{el:"tree-select",props:{filterable:!0}},render:e=>r(h("el-tag"),{type:e.row.status==="SUCCESS"?"success":"danger"},{default:()=>[e.row.status==="SUCCESS"?"成功":"失败"]})},{prop:"loginTime",label:"登录时间",minWidth:100,search:{el:"date-picker",span:1,props:{type:"datetimerange",valueFormat:"YYYY-MM-DD HH:mm:ss"}}}]);return(e,o)=>{const u=d;return _(),g("div",S,[v("div",C,[r(u,{ref_key:"proTableRef",ref:l,border:!1,title:"登录日志","request-api":s,columns:p(c),"data-callback":n,"init-param":p(m),"show-pagination":!0,"highlight-current-row":""},null,8,["columns","init-param"])])])}}});export{se as default};
