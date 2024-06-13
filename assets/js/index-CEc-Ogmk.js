
/**
 * 由 MrZhang 提供技术支持
 * Powered by elegant-admin
 * Github https://github.com/zhangyao1990/elegant-admin
 */

import{_ as C}from"./index.vue_vue_type_script_setup_true_lang-BmGMOJDS.js";import{_ as y}from"./index.vue_vue_type_script_setup_true_lang-CnEVPEzX.js";import{U as P,V as R,P as T}from"./@element-plus-Ngrzdf6G.js";import{g as $,a as L,e as N,d as A}from"./sys_resource-CvtIe74L.js";import{_ as S}from"./resourceDrawer.vue_vue_type_script_setup_true_lang-C_YB_j_l.js";import{u as E}from"./useHandleData-jH7BNk8h.js";import{d as O,r as f,k as _,a1 as o,aj as b,a as V,c as W,f as m,X as a,u as l,$ as c}from"./@vue-DJ53MWs5.js";import"./sortablejs-C_eVYoc1.js";import"./@imengyu-BQwzwvVc.js";import"./vue-CAygiDOH.js";import"./vue-esign-BNnrYaMl.js";import"./index-Cq3st1AW.js";import"./vite-plugin-fake-server-4rIte7rE.js";import"./mockjs-Dd0W0IWH.js";import"./floating-vue-DjZaMi6K.js";import"./@floating-ui-Y0iFLo_g.js";import"./vue-m-message-BxJX2Zqc.js";import"./overlayscrollbars-CZjZ1Dbc.js";import"./@iconify-C4HLlXtv.js";import"./overlayscrollbars-vue-BxfA_dC8.js";import"./@headlessui-Bm2TyfRI.js";import"./mitt-DJ65BbbF.js";import"./crypto-js-RCkyKLW7.js";import"./lodash-es-l8Yk8yFo.js";import"./pinia-DmVFObHF.js";import"./vue-demi-Dq6ymT-8.js";import"./vue-router-Bg2mojPD.js";import"./hotkeys-js-BfWqkGRU.js";import"./element-plus-DdTkCxgE.js";import"./@vueuse-Bz9Gvxjd.js";import"./nprogress-BdJdCxhg.js";import"./@sxzz-D9SI2xQl.js";import"./@ctrl-r5W6hzzQ.js";import"./dayjs-p2P62yYc.js";import"./async-validator-CRbnkQr6.js";import"./memoize-one-BdPwpGay.js";import"./normalize-wheel-es-B6fDCfyv.js";import"./vue-i18n-BnGu2oZ8.js";import"./@intlify-CEEhciFb.js";import"./colord-CrBFWQzZ.js";import"./monaco-editor-PTJBK6lV.js";import"./path-browserify-DTVwunqE.js";import"./axios-DmypytPv.js";import"./GridItem.vue_vue_type_script_setup_true_lang-B-s0jwix.js";const B={class:"table-container"},D={class:"table-box"},j={class:"flex"},H={class:"flex flex-wrap justify-center"},Se=O({name:"ResourceList",__name:"index",setup(q){const s=f(),h=_({});function v(e){return{list:e&&e.records||[],total:e&&e.total||0}}function w(e){let t={...e};return $(t)}const g=_([{type:"index",label:"排序",width:80},{prop:"name",label:"资源名称",minWidth:100,search:{el:"input"}},{prop:"method",label:"API方法类型",minWidth:100},{prop:"openStatus",label:"用户状态",enum:[{label:"启用",value:"OPEN"},{label:"停用",value:"CLOSE"}],fieldNames:{label:"label",value:"value"},minWidth:100,search:{el:"tree-select",props:{filterable:!0}},render:e=>o(b("el-tag"),{type:e.row.openStatus==="OPEN"?"success":"danger"},{default:()=>[e.row.openStatus==="OPEN"?"启用":"停用"]})},{prop:"sort",label:"排序值",minWidth:120},{prop:"operation",label:"操作",fixed:"right",width:200}]),d=f();function u(e,t){var r,n;const i={title:e==="add"?"新增资源":e==="edit"?"编辑资源":"查看资源",isView:e==="show",row:{...t},api:e==="add"?L:e==="edit"?N:void 0,getTableList:(r=s.value)==null?void 0:r.getTableList};(n=d.value)==null||n.acceptParams(i)}async function k(e){var t;await E(A,{id:e.id},`删除【${e.name}】`),(t=s.value)==null||t.getTableList()}return(e,t)=>{const i=b("el-button"),r=y,n=C;return V(),W("div",B,[m("div",D,[o(n,{ref_key:"proTableRef",ref:s,border:!1,title:"资源管理","request-api":w,columns:l(g),"data-callback":v,"init-param":l(h),"show-pagination":!0,"highlight-current-row":""},{tableHeader:a(()=>[m("div",j,[o(r,{value:["add:resource:btn"]},{default:a(()=>[o(i,{type:"primary",icon:l(P),onClick:t[0]||(t[0]=p=>u("add"))},{default:a(()=>[c(" 新增资源 ")]),_:1},8,["icon"])]),_:1})])]),operation:a(p=>[m("div",H,[o(r,{class:"mr-5px",value:["edit:resource:btn"]},{default:a(()=>[o(i,{type:"primary",link:"",icon:l(R),onClick:x=>u("edit",p.row)},{default:a(()=>[c(" 编辑 ")]),_:2},1032,["icon","onClick"])]),_:2},1024),o(r,{class:"mr-5px",value:["del:resource:btn"]},{default:a(()=>[o(i,{type:"danger",link:"",icon:l(T),onClick:x=>k(p.row)},{default:a(()=>[c(" 删除 ")]),_:2},1032,["icon","onClick"])]),_:2},1024)])]),_:1},8,["columns","init-param"]),o(S,{ref_key:"drawerRef",ref:d},null,512)])])}}});export{Se as default};
