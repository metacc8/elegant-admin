
/**
 * 由 MrZhang 提供技术支持
 * Powered by elegant-admin
 * Github https://github.com/zhangyao1990/elegant-admin
 */

import{f as p}from"./micromark-factory-space-CzQmd71p.js";import{j as F}from"./micromark-util-character-BqvJsIbw.js";import{n as b}from"./micromark-util-normalize-identifier-C9ANKk3v.js";import{b as x}from"./micromark-core-commonmark-DChVrM7W.js";const D={tokenize:d,partial:!0};function T(){return{document:{91:{tokenize:L,continuation:{tokenize:z},exit:c}},text:{91:{tokenize:y},93:{add:"after",tokenize:M,resolveTo:S}}}}function M(t,o,n){const r=this;let u=r.events.length;const l=r.parser.gfmFootnotes||(r.parser.gfmFootnotes=[]);let a;for(;u--;){const g=r.events[u][1];if(g.type==="labelImage"){a=g;break}if(g.type==="gfmFootnoteCall"||g.type==="labelLink"||g.type==="label"||g.type==="image"||g.type==="link")break}return s;function s(g){if(!a||!a._balanced)return n(g);const m=b(r.sliceSerialize({start:a.end,end:r.now()}));return m.codePointAt(0)!==94||!l.includes(m.slice(1))?n(g):(t.enter("gfmFootnoteCallLabelMarker"),t.consume(g),t.exit("gfmFootnoteCallLabelMarker"),o(g))}}function S(t,o){let n=t.length;for(;n--;)if(t[n][1].type==="labelImage"&&t[n][0]==="enter"){t[n][1];break}t[n+1][1].type="data",t[n+3][1].type="gfmFootnoteCallLabelMarker";const r={type:"gfmFootnoteCall",start:Object.assign({},t[n+3][1].start),end:Object.assign({},t[t.length-1][1].end)},u={type:"gfmFootnoteCallMarker",start:Object.assign({},t[n+3][1].end),end:Object.assign({},t[n+3][1].end)};u.end.column++,u.end.offset++,u.end._bufferIndex++;const l={type:"gfmFootnoteCallString",start:Object.assign({},u.end),end:Object.assign({},t[t.length-1][1].start)},a={type:"chunkString",contentType:"string",start:Object.assign({},l.start),end:Object.assign({},l.end)},s=[t[n+1],t[n+2],["enter",r,o],t[n+3],t[n+4],["enter",u,o],["exit",u,o],["enter",l,o],["enter",a,o],["exit",a,o],["exit",l,o],t[t.length-2],t[t.length-1],["exit",r,o]];return t.splice(n,t.length-n+1,...s),t}function y(t,o,n){const r=this,u=r.parser.gfmFootnotes||(r.parser.gfmFootnotes=[]);let l=0,a;return s;function s(i){return t.enter("gfmFootnoteCall"),t.enter("gfmFootnoteCallLabelMarker"),t.consume(i),t.exit("gfmFootnoteCallLabelMarker"),g}function g(i){return i!==94?n(i):(t.enter("gfmFootnoteCallMarker"),t.consume(i),t.exit("gfmFootnoteCallMarker"),t.enter("gfmFootnoteCallString"),t.enter("chunkString").contentType="string",m)}function m(i){if(l>999||i===93&&!a||i===null||i===91||F(i))return n(i);if(i===93){t.exit("chunkString");const k=t.exit("gfmFootnoteCallString");return u.includes(b(r.sliceSerialize(k)))?(t.enter("gfmFootnoteCallLabelMarker"),t.consume(i),t.exit("gfmFootnoteCallLabelMarker"),t.exit("gfmFootnoteCall"),o):n(i)}return F(i)||(a=!0),l++,t.consume(i),i===92?f:m}function f(i){return i===91||i===92||i===93?(t.consume(i),l++,m):m(i)}}function L(t,o,n){const r=this,u=r.parser.gfmFootnotes||(r.parser.gfmFootnotes=[]);let l,a=0,s;return g;function g(e){return t.enter("gfmFootnoteDefinition")._container=!0,t.enter("gfmFootnoteDefinitionLabel"),t.enter("gfmFootnoteDefinitionLabelMarker"),t.consume(e),t.exit("gfmFootnoteDefinitionLabelMarker"),m}function m(e){return e===94?(t.enter("gfmFootnoteDefinitionMarker"),t.consume(e),t.exit("gfmFootnoteDefinitionMarker"),t.enter("gfmFootnoteDefinitionLabelString"),t.enter("chunkString").contentType="string",f):n(e)}function f(e){if(a>999||e===93&&!s||e===null||e===91||F(e))return n(e);if(e===93){t.exit("chunkString");const C=t.exit("gfmFootnoteDefinitionLabelString");return l=b(r.sliceSerialize(C)),t.enter("gfmFootnoteDefinitionLabelMarker"),t.consume(e),t.exit("gfmFootnoteDefinitionLabelMarker"),t.exit("gfmFootnoteDefinitionLabel"),k}return F(e)||(s=!0),a++,t.consume(e),e===92?i:f}function i(e){return e===91||e===92||e===93?(t.consume(e),a++,f):f(e)}function k(e){return e===58?(t.enter("definitionMarker"),t.consume(e),t.exit("definitionMarker"),u.includes(l)||u.push(l),p(t,h,"gfmFootnoteDefinitionWhitespace")):n(e)}function h(e){return o(e)}}function z(t,o,n){return t.check(x,o,t.attempt(D,o,n))}function c(t){t.exit("gfmFootnoteDefinition")}function d(t,o,n){const r=this;return p(t,u,"gfmFootnoteDefinitionIndent",5);function u(l){const a=r.events[r.events.length-1];return a&&a[1].type==="gfmFootnoteDefinitionIndent"&&a[2].sliceSerialize(a[1],!0).length===4?o(l):n(l)}}export{T as g};
