
/**
 * 由 MrZhang 提供技术支持
 * Powered by elegant-admin
 * Github https://github.com/zhangyao1990/elegant-admin
 */

class f{constructor(o,r,a){this.property=o,this.normal=r,a&&(this.space=a)}}f.prototype.property={};f.prototype.normal={};f.prototype.space=null;function x(e,o){const r={},a={};let p=-1;for(;++p<e.length;)Object.assign(r,e[p].property),Object.assign(a,e[p].normal);return new f(r,a,o)}function v(e){return e.toLowerCase()}class c{constructor(o,r){this.property=o,this.attribute=r}}c.prototype.space=null;c.prototype.boolean=!1;c.prototype.booleanish=!1;c.prototype.overloadedBoolean=!1;c.prototype.number=!1;c.prototype.commaSeparated=!1;c.prototype.spaceSeparated=!1;c.prototype.commaOrSpaceSeparated=!1;c.prototype.mustUseProperty=!1;c.prototype.defined=!1;let T=0;const l=g(),u=g(),w=g(),n=g(),t=g(),h=g(),s=g();function g(){return 2**++T}const k=Object.freeze(Object.defineProperty({__proto__:null,boolean:l,booleanish:u,commaOrSpaceSeparated:s,commaSeparated:h,number:n,overloadedBoolean:w,spaceSeparated:t},Symbol.toStringTag,{value:"Module"})),y=Object.keys(k);class S extends c{constructor(o,r,a,p){let i=-1;if(super(o,r),b(this,"space",p),typeof a=="number")for(;++i<y.length;){const d=y[i];b(this,y[i],(a&k[d])===k[d])}}}S.prototype.defined=!0;function b(e,o,r){r&&(e[o]=r)}const E={}.hasOwnProperty;function m(e){const o={},r={};let a;for(a in e.properties)if(E.call(e.properties,a)){const p=e.properties[a],i=new S(a,e.transform(e.attributes||{},a),p,e.space);e.mustUseProperty&&e.mustUseProperty.includes(a)&&(i.mustUseProperty=!0),o[a]=i,r[v(a)]=a,r[v(i.attribute)]=a}return new f(o,r,e.space)}const P=m({space:"xlink",transform(e,o){return"xlink:"+o.slice(5).toLowerCase()},properties:{xLinkActuate:null,xLinkArcRole:null,xLinkHref:null,xLinkRole:null,xLinkShow:null,xLinkTitle:null,xLinkType:null}}),M=m({space:"xml",transform(e,o){return"xml:"+o.slice(3).toLowerCase()},properties:{xmlLang:null,xmlBase:null,xmlSpace:null}});function D(e,o){return o in e?e[o]:o}function L(e,o){return D(e,o.toLowerCase())}const O=m({space:"xmlns",attributes:{xmlnsxlink:"xmlns:xlink"},transform:L,properties:{xmlns:null,xmlnsXLink:null}}),R=m({transform(e,o){return o==="role"?o:"aria-"+o.slice(4).toLowerCase()},properties:{ariaActiveDescendant:null,ariaAtomic:u,ariaAutoComplete:null,ariaBusy:u,ariaChecked:u,ariaColCount:n,ariaColIndex:n,ariaColSpan:n,ariaControls:t,ariaCurrent:null,ariaDescribedBy:t,ariaDetails:null,ariaDisabled:u,ariaDropEffect:t,ariaErrorMessage:null,ariaExpanded:u,ariaFlowTo:t,ariaGrabbed:u,ariaHasPopup:null,ariaHidden:u,ariaInvalid:null,ariaKeyShortcuts:null,ariaLabel:null,ariaLabelledBy:t,ariaLevel:n,ariaLive:null,ariaModal:u,ariaMultiLine:u,ariaMultiSelectable:u,ariaOrientation:null,ariaOwns:t,ariaPlaceholder:null,ariaPosInSet:n,ariaPressed:u,ariaReadOnly:u,ariaRelevant:null,ariaRequired:u,ariaRoleDescription:t,ariaRowCount:n,ariaRowIndex:n,ariaRowSpan:n,ariaSelected:u,ariaSetSize:n,ariaSort:null,ariaValueMax:n,ariaValueMin:n,ariaValueNow:n,ariaValueText:null,role:null}}),A=m({space:"html",attributes:{acceptcharset:"accept-charset",classname:"class",htmlfor:"for",httpequiv:"http-equiv"},transform:L,mustUseProperty:["checked","multiple","muted","selected"],properties:{abbr:null,accept:h,acceptCharset:t,accessKey:t,action:null,allow:null,allowFullScreen:l,allowPaymentRequest:l,allowUserMedia:l,alt:null,as:null,async:l,autoCapitalize:null,autoComplete:t,autoFocus:l,autoPlay:l,blocking:t,capture:null,charSet:null,checked:l,cite:null,className:t,cols:n,colSpan:null,content:null,contentEditable:u,controls:l,controlsList:t,coords:n|h,crossOrigin:null,data:null,dateTime:null,decoding:null,default:l,defer:l,dir:null,dirName:null,disabled:l,download:w,draggable:u,encType:null,enterKeyHint:null,fetchPriority:null,form:null,formAction:null,formEncType:null,formMethod:null,formNoValidate:l,formTarget:null,headers:t,height:n,hidden:l,high:n,href:null,hrefLang:null,htmlFor:t,httpEquiv:t,id:null,imageSizes:null,imageSrcSet:null,inert:l,inputMode:null,integrity:null,is:null,isMap:l,itemId:null,itemProp:t,itemRef:t,itemScope:l,itemType:t,kind:null,label:null,lang:null,language:null,list:null,loading:null,loop:l,low:n,manifest:null,max:null,maxLength:n,media:null,method:null,min:null,minLength:n,multiple:l,muted:l,name:null,nonce:null,noModule:l,noValidate:l,onAbort:null,onAfterPrint:null,onAuxClick:null,onBeforeMatch:null,onBeforePrint:null,onBeforeToggle:null,onBeforeUnload:null,onBlur:null,onCancel:null,onCanPlay:null,onCanPlayThrough:null,onChange:null,onClick:null,onClose:null,onContextLost:null,onContextMenu:null,onContextRestored:null,onCopy:null,onCueChange:null,onCut:null,onDblClick:null,onDrag:null,onDragEnd:null,onDragEnter:null,onDragExit:null,onDragLeave:null,onDragOver:null,onDragStart:null,onDrop:null,onDurationChange:null,onEmptied:null,onEnded:null,onError:null,onFocus:null,onFormData:null,onHashChange:null,onInput:null,onInvalid:null,onKeyDown:null,onKeyPress:null,onKeyUp:null,onLanguageChange:null,onLoad:null,onLoadedData:null,onLoadedMetadata:null,onLoadEnd:null,onLoadStart:null,onMessage:null,onMessageError:null,onMouseDown:null,onMouseEnter:null,onMouseLeave:null,onMouseMove:null,onMouseOut:null,onMouseOver:null,onMouseUp:null,onOffline:null,onOnline:null,onPageHide:null,onPageShow:null,onPaste:null,onPause:null,onPlay:null,onPlaying:null,onPopState:null,onProgress:null,onRateChange:null,onRejectionHandled:null,onReset:null,onResize:null,onScroll:null,onScrollEnd:null,onSecurityPolicyViolation:null,onSeeked:null,onSeeking:null,onSelect:null,onSlotChange:null,onStalled:null,onStorage:null,onSubmit:null,onSuspend:null,onTimeUpdate:null,onToggle:null,onUnhandledRejection:null,onUnload:null,onVolumeChange:null,onWaiting:null,onWheel:null,open:l,optimum:n,pattern:null,ping:t,placeholder:null,playsInline:l,popover:null,popoverTarget:null,popoverTargetAction:null,poster:null,preload:null,readOnly:l,referrerPolicy:null,rel:t,required:l,reversed:l,rows:n,rowSpan:n,sandbox:t,scope:null,scoped:l,seamless:l,selected:l,shadowRootClonable:l,shadowRootDelegatesFocus:l,shadowRootMode:null,shape:null,size:n,sizes:null,slot:null,span:n,spellCheck:u,src:null,srcDoc:null,srcLang:null,srcSet:null,start:n,step:null,style:null,tabIndex:n,target:null,title:null,translate:null,type:null,typeMustMatch:l,useMap:null,value:u,width:n,wrap:null,writingSuggestions:null,align:null,aLink:null,archive:t,axis:null,background:null,bgColor:null,border:n,borderColor:null,bottomMargin:n,cellPadding:null,cellSpacing:null,char:null,charOff:null,classId:null,clear:null,code:null,codeBase:null,codeType:null,color:null,compact:l,declare:l,event:null,face:null,frame:null,frameBorder:null,hSpace:n,leftMargin:n,link:null,longDesc:null,lowSrc:null,marginHeight:n,marginWidth:n,noResize:l,noHref:l,noShade:l,noWrap:l,object:null,profile:null,prompt:null,rev:null,rightMargin:n,rules:null,scheme:null,scrolling:u,standby:null,summary:null,text:null,topMargin:n,valueType:null,version:null,vAlign:null,vLink:null,vSpace:n,allowTransparency:null,autoCorrect:null,autoSave:null,disablePictureInPicture:l,disableRemotePlayback:l,prefix:null,property:null,results:n,security:null,unselectable:null}}),U=m({space:"svg",attributes:{accentHeight:"accent-height",alignmentBaseline:"alignment-baseline",arabicForm:"arabic-form",baselineShift:"baseline-shift",capHeight:"cap-height",className:"class",clipPath:"clip-path",clipRule:"clip-rule",colorInterpolation:"color-interpolation",colorInterpolationFilters:"color-interpolation-filters",colorProfile:"color-profile",colorRendering:"color-rendering",crossOrigin:"crossorigin",dataType:"datatype",dominantBaseline:"dominant-baseline",enableBackground:"enable-background",fillOpacity:"fill-opacity",fillRule:"fill-rule",floodColor:"flood-color",floodOpacity:"flood-opacity",fontFamily:"font-family",fontSize:"font-size",fontSizeAdjust:"font-size-adjust",fontStretch:"font-stretch",fontStyle:"font-style",fontVariant:"font-variant",fontWeight:"font-weight",glyphName:"glyph-name",glyphOrientationHorizontal:"glyph-orientation-horizontal",glyphOrientationVertical:"glyph-orientation-vertical",hrefLang:"hreflang",horizAdvX:"horiz-adv-x",horizOriginX:"horiz-origin-x",horizOriginY:"horiz-origin-y",imageRendering:"image-rendering",letterSpacing:"letter-spacing",lightingColor:"lighting-color",markerEnd:"marker-end",markerMid:"marker-mid",markerStart:"marker-start",navDown:"nav-down",navDownLeft:"nav-down-left",navDownRight:"nav-down-right",navLeft:"nav-left",navNext:"nav-next",navPrev:"nav-prev",navRight:"nav-right",navUp:"nav-up",navUpLeft:"nav-up-left",navUpRight:"nav-up-right",onAbort:"onabort",onActivate:"onactivate",onAfterPrint:"onafterprint",onBeforePrint:"onbeforeprint",onBegin:"onbegin",onCancel:"oncancel",onCanPlay:"oncanplay",onCanPlayThrough:"oncanplaythrough",onChange:"onchange",onClick:"onclick",onClose:"onclose",onCopy:"oncopy",onCueChange:"oncuechange",onCut:"oncut",onDblClick:"ondblclick",onDrag:"ondrag",onDragEnd:"ondragend",onDragEnter:"ondragenter",onDragExit:"ondragexit",onDragLeave:"ondragleave",onDragOver:"ondragover",onDragStart:"ondragstart",onDrop:"ondrop",onDurationChange:"ondurationchange",onEmptied:"onemptied",onEnd:"onend",onEnded:"onended",onError:"onerror",onFocus:"onfocus",onFocusIn:"onfocusin",onFocusOut:"onfocusout",onHashChange:"onhashchange",onInput:"oninput",onInvalid:"oninvalid",onKeyDown:"onkeydown",onKeyPress:"onkeypress",onKeyUp:"onkeyup",onLoad:"onload",onLoadedData:"onloadeddata",onLoadedMetadata:"onloadedmetadata",onLoadStart:"onloadstart",onMessage:"onmessage",onMouseDown:"onmousedown",onMouseEnter:"onmouseenter",onMouseLeave:"onmouseleave",onMouseMove:"onmousemove",onMouseOut:"onmouseout",onMouseOver:"onmouseover",onMouseUp:"onmouseup",onMouseWheel:"onmousewheel",onOffline:"onoffline",onOnline:"ononline",onPageHide:"onpagehide",onPageShow:"onpageshow",onPaste:"onpaste",onPause:"onpause",onPlay:"onplay",onPlaying:"onplaying",onPopState:"onpopstate",onProgress:"onprogress",onRateChange:"onratechange",onRepeat:"onrepeat",onReset:"onreset",onResize:"onresize",onScroll:"onscroll",onSeeked:"onseeked",onSeeking:"onseeking",onSelect:"onselect",onShow:"onshow",onStalled:"onstalled",onStorage:"onstorage",onSubmit:"onsubmit",onSuspend:"onsuspend",onTimeUpdate:"ontimeupdate",onToggle:"ontoggle",onUnload:"onunload",onVolumeChange:"onvolumechange",onWaiting:"onwaiting",onZoom:"onzoom",overlinePosition:"overline-position",overlineThickness:"overline-thickness",paintOrder:"paint-order",panose1:"panose-1",pointerEvents:"pointer-events",referrerPolicy:"referrerpolicy",renderingIntent:"rendering-intent",shapeRendering:"shape-rendering",stopColor:"stop-color",stopOpacity:"stop-opacity",strikethroughPosition:"strikethrough-position",strikethroughThickness:"strikethrough-thickness",strokeDashArray:"stroke-dasharray",strokeDashOffset:"stroke-dashoffset",strokeLineCap:"stroke-linecap",strokeLineJoin:"stroke-linejoin",strokeMiterLimit:"stroke-miterlimit",strokeOpacity:"stroke-opacity",strokeWidth:"stroke-width",tabIndex:"tabindex",textAnchor:"text-anchor",textDecoration:"text-decoration",textRendering:"text-rendering",transformOrigin:"transform-origin",typeOf:"typeof",underlinePosition:"underline-position",underlineThickness:"underline-thickness",unicodeBidi:"unicode-bidi",unicodeRange:"unicode-range",unitsPerEm:"units-per-em",vAlphabetic:"v-alphabetic",vHanging:"v-hanging",vIdeographic:"v-ideographic",vMathematical:"v-mathematical",vectorEffect:"vector-effect",vertAdvY:"vert-adv-y",vertOriginX:"vert-origin-x",vertOriginY:"vert-origin-y",wordSpacing:"word-spacing",writingMode:"writing-mode",xHeight:"x-height",playbackOrder:"playbackorder",timelineBegin:"timelinebegin"},transform:D,properties:{about:s,accentHeight:n,accumulate:null,additive:null,alignmentBaseline:null,alphabetic:n,amplitude:n,arabicForm:null,ascent:n,attributeName:null,attributeType:null,azimuth:n,bandwidth:null,baselineShift:null,baseFrequency:null,baseProfile:null,bbox:null,begin:null,bias:n,by:null,calcMode:null,capHeight:n,className:t,clip:null,clipPath:null,clipPathUnits:null,clipRule:null,color:null,colorInterpolation:null,colorInterpolationFilters:null,colorProfile:null,colorRendering:null,content:null,contentScriptType:null,contentStyleType:null,crossOrigin:null,cursor:null,cx:null,cy:null,d:null,dataType:null,defaultAction:null,descent:n,diffuseConstant:n,direction:null,display:null,dur:null,divisor:n,dominantBaseline:null,download:l,dx:null,dy:null,edgeMode:null,editable:null,elevation:n,enableBackground:null,end:null,event:null,exponent:n,externalResourcesRequired:null,fill:null,fillOpacity:n,fillRule:null,filter:null,filterRes:null,filterUnits:null,floodColor:null,floodOpacity:null,focusable:null,focusHighlight:null,fontFamily:null,fontSize:null,fontSizeAdjust:null,fontStretch:null,fontStyle:null,fontVariant:null,fontWeight:null,format:null,fr:null,from:null,fx:null,fy:null,g1:h,g2:h,glyphName:h,glyphOrientationHorizontal:null,glyphOrientationVertical:null,glyphRef:null,gradientTransform:null,gradientUnits:null,handler:null,hanging:n,hatchContentUnits:null,hatchUnits:null,height:null,href:null,hrefLang:null,horizAdvX:n,horizOriginX:n,horizOriginY:n,id:null,ideographic:n,imageRendering:null,initialVisibility:null,in:null,in2:null,intercept:n,k:n,k1:n,k2:n,k3:n,k4:n,kernelMatrix:s,kernelUnitLength:null,keyPoints:null,keySplines:null,keyTimes:null,kerning:null,lang:null,lengthAdjust:null,letterSpacing:null,lightingColor:null,limitingConeAngle:n,local:null,markerEnd:null,markerMid:null,markerStart:null,markerHeight:null,markerUnits:null,markerWidth:null,mask:null,maskContentUnits:null,maskUnits:null,mathematical:null,max:null,media:null,mediaCharacterEncoding:null,mediaContentEncodings:null,mediaSize:n,mediaTime:null,method:null,min:null,mode:null,name:null,navDown:null,navDownLeft:null,navDownRight:null,navLeft:null,navNext:null,navPrev:null,navRight:null,navUp:null,navUpLeft:null,navUpRight:null,numOctaves:null,observer:null,offset:null,onAbort:null,onActivate:null,onAfterPrint:null,onBeforePrint:null,onBegin:null,onCancel:null,onCanPlay:null,onCanPlayThrough:null,onChange:null,onClick:null,onClose:null,onCopy:null,onCueChange:null,onCut:null,onDblClick:null,onDrag:null,onDragEnd:null,onDragEnter:null,onDragExit:null,onDragLeave:null,onDragOver:null,onDragStart:null,onDrop:null,onDurationChange:null,onEmptied:null,onEnd:null,onEnded:null,onError:null,onFocus:null,onFocusIn:null,onFocusOut:null,onHashChange:null,onInput:null,onInvalid:null,onKeyDown:null,onKeyPress:null,onKeyUp:null,onLoad:null,onLoadedData:null,onLoadedMetadata:null,onLoadStart:null,onMessage:null,onMouseDown:null,onMouseEnter:null,onMouseLeave:null,onMouseMove:null,onMouseOut:null,onMouseOver:null,onMouseUp:null,onMouseWheel:null,onOffline:null,onOnline:null,onPageHide:null,onPageShow:null,onPaste:null,onPause:null,onPlay:null,onPlaying:null,onPopState:null,onProgress:null,onRateChange:null,onRepeat:null,onReset:null,onResize:null,onScroll:null,onSeeked:null,onSeeking:null,onSelect:null,onShow:null,onStalled:null,onStorage:null,onSubmit:null,onSuspend:null,onTimeUpdate:null,onToggle:null,onUnload:null,onVolumeChange:null,onWaiting:null,onZoom:null,opacity:null,operator:null,order:null,orient:null,orientation:null,origin:null,overflow:null,overlay:null,overlinePosition:n,overlineThickness:n,paintOrder:null,panose1:null,path:null,pathLength:n,patternContentUnits:null,patternTransform:null,patternUnits:null,phase:null,ping:t,pitch:null,playbackOrder:null,pointerEvents:null,points:null,pointsAtX:n,pointsAtY:n,pointsAtZ:n,preserveAlpha:null,preserveAspectRatio:null,primitiveUnits:null,propagate:null,property:s,r:null,radius:null,referrerPolicy:null,refX:null,refY:null,rel:s,rev:s,renderingIntent:null,repeatCount:null,repeatDur:null,requiredExtensions:s,requiredFeatures:s,requiredFonts:s,requiredFormats:s,resource:null,restart:null,result:null,rotate:null,rx:null,ry:null,scale:null,seed:null,shapeRendering:null,side:null,slope:null,snapshotTime:null,specularConstant:n,specularExponent:n,spreadMethod:null,spacing:null,startOffset:null,stdDeviation:null,stemh:null,stemv:null,stitchTiles:null,stopColor:null,stopOpacity:null,strikethroughPosition:n,strikethroughThickness:n,string:null,stroke:null,strokeDashArray:s,strokeDashOffset:null,strokeLineCap:null,strokeLineJoin:null,strokeMiterLimit:n,strokeOpacity:n,strokeWidth:null,style:null,surfaceScale:n,syncBehavior:null,syncBehaviorDefault:null,syncMaster:null,syncTolerance:null,syncToleranceDefault:null,systemLanguage:s,tabIndex:n,tableValues:null,target:null,targetX:n,targetY:n,textAnchor:null,textDecoration:null,textRendering:null,textLength:null,timelineBegin:null,title:null,transformBehavior:null,type:null,typeOf:s,to:null,transform:null,transformOrigin:null,u1:null,u2:null,underlinePosition:n,underlineThickness:n,unicode:null,unicodeBidi:null,unicodeRange:null,unitsPerEm:n,values:null,vAlphabetic:n,vMathematical:n,vectorEffect:null,vHanging:n,vIdeographic:n,version:null,vertAdvY:n,vertOriginX:n,vertOriginY:n,viewBox:null,viewTarget:null,visibility:null,width:null,widths:null,wordSpacing:null,writingMode:null,x:null,x1:null,x2:null,xChannelSelector:null,xHeight:n,y:null,y1:null,y2:null,yChannelSelector:null,z:null,zoomAndPan:null}}),z=/^data[-\w.:]+$/i,C=/-[a-z]/g,B=/[A-Z]/g;function F(e,o){const r=v(o);let a=o,p=c;if(r in e.normal)return e.property[e.normal[r]];if(r.length>4&&r.slice(0,4)==="data"&&z.test(o)){if(o.charAt(4)==="-"){const i=o.slice(5).replace(C,H);a="data"+i.charAt(0).toUpperCase()+i.slice(1)}else{const i=o.slice(4);if(!C.test(i)){let d=i.replace(B,I);d.charAt(0)!=="-"&&(d="-"+d),o="data"+d}}p=S}return new p(a,o)}function I(e){return"-"+e.toLowerCase()}function H(e){return e.charAt(1).toUpperCase()}const V=x([M,P,O,R,A],"html"),j=x([M,P,O,R,U],"svg");export{F as f,V as h,v as n,j as s};
