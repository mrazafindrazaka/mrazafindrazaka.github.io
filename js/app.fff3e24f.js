(function(e){function t(t){for(var o,r,s=t[0],d=t[1],i=t[2],b=0,p=[];b<s.length;b++)r=s[b],Object.prototype.hasOwnProperty.call(a,r)&&a[r]&&p.push(a[r][0]),a[r]=0;for(o in d)Object.prototype.hasOwnProperty.call(d,o)&&(e[o]=d[o]);l&&l(t);while(p.length)p.shift()();return n.push.apply(n,i||[]),c()}function c(){for(var e,t=0;t<n.length;t++){for(var c=n[t],o=!0,s=1;s<c.length;s++){var d=c[s];0!==a[d]&&(o=!1)}o&&(n.splice(t--,1),e=r(r.s=c[0]))}return e}var o={},a={app:0},n=[];function r(t){if(o[t])return o[t].exports;var c=o[t]={i:t,l:!1,exports:{}};return e[t].call(c.exports,c,c.exports,r),c.l=!0,c.exports}r.m=e,r.c=o,r.d=function(e,t,c){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:c})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var c=Object.create(null);if(r.r(c),Object.defineProperty(c,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(c,o,function(t){return e[t]}.bind(null,o));return c},r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],d=s.push.bind(s);s.push=t,s=s.slice();for(var i=0;i<s.length;i++)t(s[i]);var l=d;n.push([0,"chunk-vendors"]),c()})({0:function(e,t,c){e.exports=c("56d7")},"39c5":function(e,t,c){},"44c7":function(e,t,c){},4678:function(e,t,c){var o={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn-bd":"9686","./bn-bd.js":"9686","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-in":"ec2e","./en-in.js":"ec2e","./en-nz":"6f50","./en-nz.js":"6f50","./en-sg":"b7e9","./en-sg.js":"b7e9","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-mx":"b5b7","./es-mx.js":"b5b7","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fil":"d69a","./fil.js":"d69a","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-deva":"aaf2","./gom-deva.js":"aaf2","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./oc-lnc":"167b","./oc-lnc.js":"167b","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tk":"5aff","./tk.js":"5aff","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-mo":"3a6c","./zh-mo.js":"3a6c","./zh-tw":"90ea","./zh-tw.js":"90ea"};function a(e){var t=n(e);return c(t)}function n(e){if(!c.o(o,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return o[e]}a.keys=function(){return Object.keys(o)},a.resolve=n,e.exports=a,a.id="4678"},"56d7":function(e,t,c){"use strict";c.r(t);c("e260"),c("e6cf"),c("cca6"),c("a79d");var o=c("7a23"),a=(c("b0c0"),Object(o["withScopeId"])("data-v-5c387096"));Object(o["pushScopeId"])("data-v-5c387096");var n=Object(o["createVNode"])("h1",{class:"text-center text-white bg-dark p-3 m-0"},"Miranto's playground",-1),r={key:0,class:"d-flex justify-content-center align-items-center bg-danger p-3"},s=Object(o["createTextVNode"])("Back to menu");Object(o["popScopeId"])();var d=a((function(e,t,c,d,i,l){var b=Object(o["resolveComponent"])("router-link"),p=Object(o["resolveComponent"])("router-view"),j=Object(o["resolveComponent"])("Loading");return Object(o["openBlock"])(),Object(o["createBlock"])(o["Fragment"],null,[n,"Home"!==e.$route.name?(Object(o["openBlock"])(),Object(o["createBlock"])("div",r,[Object(o["createVNode"])(b,{class:"btn btn-dark",to:"/"},{default:a((function(){return[s]})),_:1})])):Object(o["createCommentVNode"])("",!0),Object(o["createVNode"])(p),Object(o["createVNode"])(j)],64)})),i=Object(o["withScopeId"])("data-v-032d21d0");Object(o["pushScopeId"])("data-v-032d21d0");var l={key:0,class:"loading-box"},b=Object(o["createVNode"])("div",{class:"spinner-border text-danger",role:"status"},[Object(o["createVNode"])("span",{class:"visually-hidden"},"Loading...")],-1);Object(o["popScopeId"])();var p=i((function(e,t,c,a,n,r){return r.loading.state.show?(Object(o["openBlock"])(),Object(o["createBlock"])("div",l,[b])):Object(o["createCommentVNode"])("",!0)})),j={inject:["loading"]};c("a39e");j.render=p,j.__scopeId="data-v-032d21d0";var u=j,f={components:{Loading:u}};f.render=d,f.__scopeId="data-v-5c387096";var m=f,h=(c("c1c3"),Object(o["reactive"])({show:!1})),O=function(){h.show=!0},g=function(){setTimeout((function(){return h.show=!1}),200)},v={state:Object(o["readonly"])(h),show_load:O,hide_load:g},y=Object(o["reactive"])({name:""}),k=function(e){y.name=e},S={state:Object(o["readonly"])(y),update_name:k},w=c("6c02"),x=Object(o["withScopeId"])("data-v-6d4804fc");Object(o["pushScopeId"])("data-v-6d4804fc");var _={class:"container-fluid"},N={class:"row"};Object(o["popScopeId"])();var V=x((function(e,t,c,a,n,r){var s=Object(o["resolveComponent"])("router-link");return Object(o["openBlock"])(),Object(o["createBlock"])("div",_,[Object(o["createVNode"])("div",N,[(Object(o["openBlock"])(!0),Object(o["createBlock"])(o["Fragment"],null,Object(o["renderList"])(n.menus,(function(e,t){return Object(o["openBlock"])(),Object(o["createBlock"])("div",{key:t,class:[t%2===0?"bg-danger":"bg-warning","d-flex justify-content-center align-items-center p-3 col-sm-6 col-md-4"]},[Object(o["createVNode"])(s,{class:"btn btn-dark",to:e.path},{default:x((function(){return[Object(o["createTextVNode"])(Object(o["toDisplayString"])(e.name),1)]})),_:2},1032,["to"])],2)})),128))])])})),B={data:function(){return{menus:[{path:"/crypto",name:"Crypto"},{path:"/todolist",name:"ToDoList"}]}}};B.render=V,B.__scopeId="data-v-6d4804fc";var I=B,D=Object(o["createVNode"])("h2",{class:"bg-warning p-3 m-0 text-center"},"To the moon!",-1),C={class:"container-fluid"},z={class:"row"},T={class:"col-md-4 col-sm-12 p-3 bg-dark"},F={class:"col-md-8 col-sm-12 p-3 bg-dark"};function M(e,t,c,a,n,r){var s=Object(o["resolveComponent"])("Panel"),d=Object(o["resolveComponent"])("Chart");return Object(o["openBlock"])(),Object(o["createBlock"])(o["Fragment"],null,[D,Object(o["createVNode"])("div",C,[Object(o["createVNode"])("div",z,[Object(o["createVNode"])("div",T,[Object(o["createVNode"])(s)]),Object(o["createVNode"])("div",F,[Object(o["createVNode"])(d)])])])],64)}c("b680");var L=Object(o["withScopeId"])("data-v-27ced215");Object(o["pushScopeId"])("data-v-27ced215");var A=Object(o["createVNode"])("h3",{class:"bg-danger text-white text-center p-3"},"Top 10 coins by market cap",-1),P=Object(o["createVNode"])("option",{value:""},"Select coin",-1),Y={key:0,class:"d-flex flex-column justify-content-center align-items-center bg-white p-3 mt-3"},E={class:"text-center p-3"};Object(o["popScopeId"])();var H=L((function(e,t,c,a,n,r){return Object(o["openBlock"])(),Object(o["createBlock"])(o["Fragment"],null,[A,Object(o["withDirectives"])(Object(o["createVNode"])("select",{class:"form-select mt-3","onUpdate:modelValue":t[1]||(t[1]=function(e){return n.cryptoSelected=e}),"aria-label":"Default select example",onChange:t[2]||(t[2]=function(e){return r.selected(e,e.target.selectedIndex)})},[P,(Object(o["openBlock"])(!0),Object(o["createBlock"])(o["Fragment"],null,Object(o["renderList"])(n.top10,(function(e,t){return Object(o["openBlock"])(),Object(o["createBlock"])("option",{key:t,value:e.id},Object(o["toDisplayString"])(t+1)+". "+Object(o["toDisplayString"])(e.id),9,["value"])})),128))],544),[[o["vModelSelect"],n.cryptoSelected]]),n.cryptoSelectedInfo?(Object(o["openBlock"])(),Object(o["createBlock"])("div",Y,[Object(o["createVNode"])("img",{src:n.cryptoSelectedInfo.image,alt:"tmp",class:"w-25 h-25"},null,8,["src"]),Object(o["createVNode"])("div",E,[Object(o["createVNode"])("p",null,"Current price : "+Object(o["toDisplayString"])(n.cryptoSelectedInfo.current_price.toFixed(2))+" €",1),Object(o["createVNode"])("p",null,"Highest price in 24h : "+Object(o["toDisplayString"])(n.cryptoSelectedInfo.high_24h.toFixed(2))+" €",1),Object(o["createVNode"])("p",null,"Lowest price in 24h : "+Object(o["toDisplayString"])(n.cryptoSelectedInfo.low_24h.toFixed(2))+" €",1),Object(o["createVNode"])("p",null,"Market cap : "+Object(o["toDisplayString"])(n.cryptoSelectedInfo.market_cap.toFixed(2))+" €",1),Object(o["createVNode"])("p",null,"Latest update on : "+Object(o["toDisplayString"])(r.formatDate(n.cryptoSelectedInfo.last_updated)),1)])])):Object(o["createCommentVNode"])("",!0)],64)})),U=c("c1df"),Z=c.n(U),$={inject:["loading","cryptoStore"],data:function(){return{cryptoSelected:"",baseApi:"https://api.coingecko.com/api/v3",top10:[],cryptoSelectedInfo:null}},methods:{formatDate:function(e){return Z()(e).format("DD/MM/YYYY HH:mm:ss")},selected:function(e,t){this.cryptoStore.update_name(this.cryptoSelected),this.cryptoSelectedInfo=0!==t?this.top10[t-1]:null},getTop10Crypto:function(){var e=this;this.loading.show_load(),this.axios.get(this.baseApi+"/coins/markets?vs_currency=eur&order=market_cap_desc&per_page=10&page=1&sparkline=false").then((function(t){e.loading.hide_load(),e.top10=t.data})).catch((function(t){e.loading.hide_load(),console.error(t)}))}},mounted:function(){this.getTop10Crypto()}};$.render=H,$.__scopeId="data-v-27ced215";var q=$,J=Object(o["withScopeId"])("data-v-20a61b60");Object(o["pushScopeId"])("data-v-20a61b60");var G={key:0,class:"bg-danger p-3 m-0 text-white text-center"},K={key:1,class:"m-3 spinner-border text-danger",role:"status"},Q=Object(o["createVNode"])("span",{class:"visually-hidden"},"Loading...",-1),R={key:2};Object(o["popScopeId"])();var W=J((function(e,t,c,a,n,r){var s=Object(o["resolveComponent"])("apexchart");return Object(o["openBlock"])(),Object(o["createBlock"])(o["Fragment"],null,[r.cryptoStore.state.name?(Object(o["openBlock"])(),Object(o["createBlock"])("h2",G," Value of "+Object(o["toDisplayString"])(r.cryptoStore.state.name)+" last 24h (minutely data) ",1)):Object(o["createCommentVNode"])("",!0),e.miniload?(Object(o["openBlock"])(),Object(o["createBlock"])("div",K,[Q])):Object(o["createCommentVNode"])("",!0),r.cryptoStore.state.name&&!e.miniload?(Object(o["openBlock"])(),Object(o["createBlock"])("div",R,[Object(o["createVNode"])(s,{height:"500",type:"line",options:e.options,series:e.series,class:"bg-white p-3"},null,8,["options","series"])])):Object(o["createCommentVNode"])("",!0)],64)})),X=(c("4160"),c("159b"),{inject:["loading","cryptoStore"],data:function(){return{miniload:!1,options:{chart:{id:"coin-chart"},xaxis:{categories:[0]}},series:[{name:"",data:[0]}],baseApi:"https://api.coingecko.com/api/v3",list:[]}},computed:{getCryptoState:function(){return this.cryptoStore.state.name}},watch:{getCryptoState:function(){this.cryptoStore.state.name&&this.getInfo()}},methods:{formatUnixDate:function(e){return Z()(e).format("DD/MM/YYYY HH:mm")},getInfo:function(){var e=this;this.miniload=!0,this.axios.get(this.baseApi+"/coins/"+this.cryptoStore.state.name+"/market_chart?vs_currency=eur&days=1").then((function(t){var c=[],o=[];e.miniload=!1,e.list=t.data.prices,e.list.forEach((function(t){t[0]=e.formatUnixDate(t[0]),t[1]=t[1].toFixed(2),c.push(t[0]),o.push(t[1]),e.options={chart:{id:"crypto-chart"},colors:["#dc3545"],xaxis:{labels:{show:!1},categories:c,axisTicks:{show:!1}},yaxis:{labels:{style:{colors:["#dc3545"],fontSize:"0.8rem"}}}},e.series=[{name:e.cryptoStore.state.name,data:o}]}))})).catch((function(t){e.miniload=!1,console.error(t)}))}}});X.render=W,X.__scopeId="data-v-20a61b60";var ee=X,te={components:{Chart:ee,Panel:q},inject:["loading","cryptoStore"],data:function(){return{baseApi:"https://api.coingecko.com/api/v3",crypto:""}},methods:{test:function(){var e=this;this.loading.show_load(),this.axios.get(this.baseApi+"/ping").then((function(t){e.loading.hide_load(),console.log(t.data)})).catch((function(t){e.loading.hide_load(),console.error(t)}))}},beforeUnmount:function(){this.cryptoStore.update_name("")}};te.render=M;var ce=te,oe=Object(o["withScopeId"])("data-v-c21ed8ac");Object(o["pushScopeId"])("data-v-c21ed8ac");var ae=Object(o["createVNode"])("h2",{class:"bg-warning p-3 m-0 text-center"},"Baby Trello",-1),ne={class:"container-fluid"},re={class:"row"},se={class:"col-md-4 col-sm-12 bg-dark p-0"},de={class:"bg-warning p-3 position-fixed w-50 bottom-0 text-center"},ie={class:"bg-danger p-3 position-fixed w-50 bottom-0 right-0 text-center"};Object(o["popScopeId"])();var le=oe((function(e,t,c,a,n,r){var s=Object(o["resolveComponent"])("Card"),d=Object(o["resolveComponent"])("DropZone");return Object(o["openBlock"])(),Object(o["createBlock"])(o["Fragment"],null,[ae,Object(o["createVNode"])("div",ne,[Object(o["createVNode"])("div",re,[Object(o["createVNode"])("div",se,[Object(o["createVNode"])(d,null,{default:oe((function(){return[(Object(o["openBlock"])(!0),Object(o["createBlock"])(o["Fragment"],null,Object(o["renderList"])(n.cards,(function(e,t){return Object(o["openBlock"])(),Object(o["createBlock"])(s,{key:t,id:"card-"+t},{default:oe((function(){return[Object(o["createTextVNode"])(Object(o["toDisplayString"])(e),1)]})),_:2},1032,["id"])})),128))]})),_:1})]),(Object(o["openBlock"])(!0),Object(o["createBlock"])(o["Fragment"],null,Object(o["renderList"])(n.dropZones,(function(e){return Object(o["openBlock"])(),Object(o["createBlock"])("div",{key:e,class:[e%2===0?"bg-dark":"bg-secondary","col-md-4 col-sm-12 p-0"]},[Object(o["createVNode"])(d)],2)})),128))])]),Object(o["createVNode"])("div",de,[Object(o["createVNode"])("button",{class:"btn btn-dark",onClick:t[1]||(t[1]=function(e){return r.pushCard()})},"Add card")]),Object(o["createVNode"])("div",ie,[Object(o["createVNode"])("button",{class:"btn btn-dark",onClick:t[2]||(t[2]=function(){n.dropZones++})},"Add dropzone")])],64)})),be=(c("d3b7"),c("25f0"),Object(o["withScopeId"])("data-v-84dcf3d8")),pe=be((function(e,t,c,a,n,r){return Object(o["openBlock"])(),Object(o["createBlock"])("div",{id:c.id,onDragover:t[1]||(t[1]=Object(o["withModifiers"])((function(){}),["prevent"])),onDrop:t[2]||(t[2]=Object(o["withModifiers"])((function(){return r.drop&&r.drop.apply(r,arguments)}),["prevent"])),class:"p-3 dropzone"},[Object(o["renderSlot"])(e.$slots,"default")],40,["id"])})),je={props:{id:String},methods:{drop:function(e){var t=document.getElementById(e.dataTransfer.getData("card_id"));e.target.appendChild(t)}}};c("d4c3");je.render=pe,je.__scopeId="data-v-84dcf3d8";var ue=je,fe=Object(o["withScopeId"])("data-v-200ac916");Object(o["pushScopeId"])("data-v-200ac916");var me={class:"card-body text-center fw-bolder text-uppercase p-3"};Object(o["popScopeId"])();var he=fe((function(e,t,c,a,n,r){return Object(o["openBlock"])(),Object(o["createBlock"])("div",{id:c.id,class:"card mb-3",draggable:"true",onDragstart:t[1]||(t[1]=function(){return r.onDragStart&&r.onDragStart.apply(r,arguments)}),onDragend:t[2]||(t[2]=function(){return r.onDragEnd&&r.onDragEnd.apply(r,arguments)}),onDragover:t[3]||(t[3]=Object(o["withModifiers"])((function(){}),["stop"]))},[Object(o["createVNode"])("div",me,[Object(o["renderSlot"])(e.$slots,"default")])],40,["id"])})),Oe={props:{id:String},data:function(){return{}},methods:{onDragStart:function(e){var t=e.target;e.dataTransfer.setData("card_id",e.target.id),setTimeout((function(){t.style.display="none"}),0)},onDragEnd:function(e){e.target.style.display="block"}}};Oe.render=he,Oe.__scopeId="data-v-200ac916";var ge=Oe,ve={components:{DropZone:ue,Card:ge},data:function(){return{dropZones:0,cards:[]}},methods:{pushCard:function(){this.cards.push("card "+(this.cards.length+1).toString())}}};c("da04");ve.render=le,ve.__scopeId="data-v-c21ed8ac";var ye=ve,ke=[{path:"/",name:"Home",component:I},{path:"/crypto",name:"Crypto",component:ce},{path:"/todolist",name:"ToDoList",component:ye}],Se=Object(w["a"])({history:Object(w["b"])("/"),routes:ke}),we=Se,xe=c("bc3a"),_e=c.n(xe),Ne=c("2106"),Ve=c.n(Ne),Be=c("ae27"),Ie=c.n(Be),De=Object(o["createApp"])(m);De.use(we),De.use(Ve.a,_e.a),De.use(Ie.a),De.provide("loading",v),De.provide("cryptoStore",S),De.mount("#app")},a39e:function(e,t,c){"use strict";c("44c7")},c1c3:function(e,t,c){},ce14:function(e,t,c){},d4c3:function(e,t,c){"use strict";c("39c5")},da04:function(e,t,c){"use strict";c("ce14")}});
//# sourceMappingURL=app.fff3e24f.js.map