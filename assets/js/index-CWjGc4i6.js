
/**
 * 由 MrZhang 提供技术支持
 * Powered by elegant-admin
 * Github https://github.com/zhangyao1990/elegant-admin
 */

import{_ as C}from"./index.vue_vue_type_script_setup_true_lang-BmGMOJDS.js";import{_ as T}from"./index.vue_vue_type_script_setup_true_lang-CnEVPEzX.js";import{U as A,W as L,V as N,P}from"./@element-plus-Ngrzdf6G.js";import{g as $,a as D,e as S,d as O}from"./sys_role-pd-h5iUC.js";import{_ as E}from"./roleDrawer.vue_vue_type_script_setup_true_lang-DQlKEBZ3.js";import V from"./roleAuthDrawer-DujxQU5F.js";import{u as W}from"./useHandleData-jH7BNk8h.js";import{d as B,r as c,k as h,a1 as t,aj as v,a as j,c as H,f as d,X as o,u as l,$ as m}from"./@vue-DJ53MWs5.js";import"./sortablejs-C_eVYoc1.js";import"./@imengyu-BQwzwvVc.js";import"./vue-CAygiDOH.js";import"./vue-esign-BNnrYaMl.js";import"./index-Cq3st1AW.js";import"./vite-plugin-fake-server-4rIte7rE.js";import"./mockjs-Dd0W0IWH.js";import"./floating-vue-DjZaMi6K.js";import"./@floating-ui-Y0iFLo_g.js";import"./vue-m-message-BxJX2Zqc.js";import"./overlayscrollbars-CZjZ1Dbc.js";import"./@iconify-C4HLlXtv.js";import"./overlayscrollbars-vue-BxfA_dC8.js";import"./@headlessui-Bm2TyfRI.js";import"./mitt-DJ65BbbF.js";import"./crypto-js-RCkyKLW7.js";import"./lodash-es-l8Yk8yFo.js";import"./pinia-DmVFObHF.js";import"./vue-demi-Dq6ymT-8.js";import"./vue-router-Bg2mojPD.js";import"./hotkeys-js-BfWqkGRU.js";import"./element-plus-DdTkCxgE.js";import"./@vueuse-Bz9Gvxjd.js";import"./nprogress-BdJdCxhg.js";import"./@sxzz-D9SI2xQl.js";import"./@ctrl-r5W6hzzQ.js";import"./dayjs-p2P62yYc.js";import"./async-validator-CRbnkQr6.js";import"./memoize-one-BdPwpGay.js";import"./normalize-wheel-es-B6fDCfyv.js";import"./vue-i18n-BnGu2oZ8.js";import"./@intlify-CEEhciFb.js";import"./colord-CrBFWQzZ.js";import"./monaco-editor-PTJBK6lV.js";import"./path-browserify-DTVwunqE.js";import"./axios-DmypytPv.js";import"./GridItem.vue_vue_type_script_setup_true_lang-B-s0jwix.js";import"./sys_menu-ZaxVPWkR.js";const q={class:"table-container"},U={class:"table-box"},X={class:"flex"},z={class:"flex flex-wrap justify-center"},Be=B({name:"SysRoleList",__name:"index",setup(F){const n=c(),w=h({});function k(e){return{list:e&&e.records||[],total:e&&e.total||0}}function g(e){let a={...e};return $(a)}const x=h([{type:"index",label:"排序",width:80},{prop:"roleName",label:"角色名称",minWidth:100,search:{el:"input"}},{prop:"alias",label:"角色别名",minWidth:100},{prop:"openStatus",label:"状态",enum:[{label:"启用",value:"OPEN"},{label:"停用",value:"CLOSE"}],fieldNames:{label:"label",value:"value"},minWidth:100,search:{el:"tree-select",props:{filterable:!0}},render:e=>t(v("el-tag"),{type:e.row.openStatus==="OPEN"?"success":"danger"},{default:()=>[e.row.openStatus==="OPEN"?"启用":"停用"]})},{prop:"sort",label:"排序值",minWidth:100},{prop:"operation",label:"操作",fixed:"right",width:260}]),u=c();function y(e={}){var r;let a={rowData:{...e},getTableList:(r=n.value)==null?void 0:r.getTableList};u.value.acceptParams(a)}const f=c();function _(e,a){var i,s;const r={title:e==="add"?"新增":e==="edit"?"编辑":"查看",isView:e==="show",row:{...a},api:e==="add"?D:e==="edit"?S:void 0,getTableList:(i=n.value)==null?void 0:i.getTableList};(s=f.value)==null||s.acceptParams(r)}async function R(e){var a;await W(O,{id:e.id},`删除【${e.roleName}】`),(a=n.value)==null||a.getTableList()}return(e,a)=>{const r=v("el-button"),i=T,s=C;return j(),H("div",q,[d("div",U,[t(s,{ref_key:"proTableRef",ref:n,border:!1,title:"角色列表","request-api":g,columns:l(x),"data-callback":k,"init-param":l(w),"show-pagination":!0,"highlight-current-row":""},{tableHeader:o(()=>[d("div",X,[t(i,{value:["add:role:btn"]},{default:o(()=>[t(r,{type:"primary",icon:l(A),onClick:a[0]||(a[0]=p=>_("add"))},{default:o(()=>[m(" 新增角色 ")]),_:1},8,["icon"])]),_:1})])]),operation:o(p=>[d("div",z,[t(i,{class:"mr-5px",value:["role:auth:btn"]},{default:o(()=>[t(r,{type:"primary",link:"",icon:l(L),onClick:b=>y(p.row)},{default:o(()=>[m(" 权限配置 ")]),_:2},1032,["icon","onClick"])]),_:2},1024),t(i,{class:"mr-5px",value:["edit:role:btn"]},{default:o(()=>[t(r,{type:"primary",link:"",icon:l(N),onClick:b=>_("edit",p.row)},{default:o(()=>[m(" 编辑 ")]),_:2},1032,["icon","onClick"])]),_:2},1024),t(i,{class:"mr-5px",value:["del:role:btn"]},{default:o(()=>[t(r,{type:"danger",link:"",icon:l(P),onClick:b=>R(p.row)},{default:o(()=>[m(" 删除 ")]),_:2},1032,["icon","onClick"])]),_:2},1024)])]),_:1},8,["columns","init-param"]),t(E,{ref_key:"drawerRef",ref:f},null,512),t(V,{ref_key:"roleAuthDrawerRef",ref:u},null,512)])])}}});export{Be as default};
