(function(e){function t(t){for(var a,r,s=t[0],d=t[1],i=t[2],b=0,j=[];b<s.length;b++)r=s[b],Object.prototype.hasOwnProperty.call(o,r)&&o[r]&&j.push(o[r][0]),o[r]=0;for(a in d)Object.prototype.hasOwnProperty.call(d,a)&&(e[a]=d[a]);l&&l(t);while(j.length)j.shift()();return n.push.apply(n,i||[]),c()}function c(){for(var e,t=0;t<n.length;t++){for(var c=n[t],a=!0,s=1;s<c.length;s++){var d=c[s];0!==o[d]&&(a=!1)}a&&(n.splice(t--,1),e=r(r.s=c[0]))}return e}var a={},o={app:0},n=[];function r(t){if(a[t])return a[t].exports;var c=a[t]={i:t,l:!1,exports:{}};return e[t].call(c.exports,c,c.exports,r),c.l=!0,c.exports}r.m=e,r.c=a,r.d=function(e,t,c){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:c})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var c=Object.create(null);if(r.r(c),Object.defineProperty(c,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)r.d(c,a,function(t){return e[t]}.bind(null,a));return c},r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],d=s.push.bind(s);s.push=t,s=s.slice();for(var i=0;i<s.length;i++)t(s[i]);var l=d;n.push([0,"chunk-vendors"]),c()})({0:function(e,t,c){e.exports=c("56d7")},"44c7":function(e,t,c){},4678:function(e,t,c){var a={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn-bd":"9686","./bn-bd.js":"9686","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-in":"ec2e","./en-in.js":"ec2e","./en-nz":"6f50","./en-nz.js":"6f50","./en-sg":"b7e9","./en-sg.js":"b7e9","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-mx":"b5b7","./es-mx.js":"b5b7","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fil":"d69a","./fil.js":"d69a","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-deva":"aaf2","./gom-deva.js":"aaf2","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./oc-lnc":"167b","./oc-lnc.js":"167b","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tk":"5aff","./tk.js":"5aff","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-mo":"3a6c","./zh-mo.js":"3a6c","./zh-tw":"90ea","./zh-tw.js":"90ea"};function o(e){var t=n(e);return c(t)}function n(e){if(!c.o(a,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return a[e]}o.keys=function(){return Object.keys(a)},o.resolve=n,e.exports=o,o.id="4678"},"56d7":function(e,t,c){"use strict";c.r(t);c("e260"),c("e6cf"),c("cca6"),c("a79d");var a=c("7a23"),o=(c("b0c0"),Object(a["withScopeId"])("data-v-5c387096"));Object(a["pushScopeId"])("data-v-5c387096");var n=Object(a["createVNode"])("h1",{class:"text-center text-white bg-dark p-3 m-0"},"Miranto's playground",-1),r={key:0,class:"d-flex justify-content-center align-items-center bg-danger p-3"},s=Object(a["createTextVNode"])("Back to menu");Object(a["popScopeId"])();var d=o((function(e,t,c,d,i,l){var b=Object(a["resolveComponent"])("router-link"),j=Object(a["resolveComponent"])("router-view"),p=Object(a["resolveComponent"])("Loading");return Object(a["openBlock"])(),Object(a["createBlock"])(a["Fragment"],null,[n,"Home"!==e.$route.name?(Object(a["openBlock"])(),Object(a["createBlock"])("div",r,[Object(a["createVNode"])(b,{class:"btn btn-dark",to:"/"},{default:o((function(){return[s]})),_:1})])):Object(a["createCommentVNode"])("",!0),Object(a["createVNode"])(j),Object(a["createVNode"])(p)],64)})),i=Object(a["withScopeId"])("data-v-032d21d0");Object(a["pushScopeId"])("data-v-032d21d0");var l={key:0,class:"loading-box"},b=Object(a["createVNode"])("div",{class:"spinner-border text-danger",role:"status"},[Object(a["createVNode"])("span",{class:"visually-hidden"},"Loading...")],-1);Object(a["popScopeId"])();var j=i((function(e,t,c,o,n,r){return r.loading.state.show?(Object(a["openBlock"])(),Object(a["createBlock"])("div",l,[b])):Object(a["createCommentVNode"])("",!0)})),p={inject:["loading"]};c("a39e");p.render=j,p.__scopeId="data-v-032d21d0";var f=p,u={components:{Loading:f}};u.render=d,u.__scopeId="data-v-5c387096";var m=u,h=(c("c1c3"),Object(a["reactive"])({show:!1})),O=function(){h.show=!0},g=function(){setTimeout((function(){return h.show=!1}),200)},v={state:Object(a["readonly"])(h),show_load:O,hide_load:g},y=Object(a["reactive"])({name:""}),k=function(e){y.name=e},S={state:Object(a["readonly"])(y),update_name:k},w=c("6c02"),x=Object(a["withScopeId"])("data-v-8cfde2c6");Object(a["pushScopeId"])("data-v-8cfde2c6");var _={class:"container-fluid"},N={class:"row"};Object(a["popScopeId"])();var V=x((function(e,t,c,o,n,r){var s=Object(a["resolveComponent"])("router-link");return Object(a["openBlock"])(),Object(a["createBlock"])("div",_,[Object(a["createVNode"])("div",N,[(Object(a["openBlock"])(!0),Object(a["createBlock"])(a["Fragment"],null,Object(a["renderList"])(n.menus,(function(e,t){return Object(a["openBlock"])(),Object(a["createBlock"])("div",{key:t,class:[t%2===0?"bg-danger":"bg-warning","d-flex justify-content-center align-items-center p-3 col-sm-6 col-md-4"]},[Object(a["createVNode"])(s,{class:"btn btn-dark",to:e.path},{default:x((function(){return[Object(a["createTextVNode"])(Object(a["toDisplayString"])(e.name),1)]})),_:2},1032,["to"])],2)})),128))])])})),I={data:function(){return{menus:[{path:"/crypto",name:"Crypto"}]}}};I.render=V,I.__scopeId="data-v-8cfde2c6";var B=I,z=Object(a["createVNode"])("h2",{class:"bg-warning p-3 m-0 text-center"},"To the moon!",-1),C={class:"container-fluid"},D={class:"row"},F={class:"col-md-4 col-sm-12 p-3 bg-dark"},M={class:"col-md-8 col-sm-12 p-3 bg-dark"};function T(e,t,c,o,n,r){var s=Object(a["resolveComponent"])("Panel"),d=Object(a["resolveComponent"])("Chart");return Object(a["openBlock"])(),Object(a["createBlock"])(a["Fragment"],null,[z,Object(a["createVNode"])("div",C,[Object(a["createVNode"])("div",D,[Object(a["createVNode"])("div",F,[Object(a["createVNode"])(s)]),Object(a["createVNode"])("div",M,[Object(a["createVNode"])(d)])])])],64)}c("b680");var L=Object(a["withScopeId"])("data-v-27ced215");Object(a["pushScopeId"])("data-v-27ced215");var P=Object(a["createVNode"])("h3",{class:"bg-danger text-white text-center p-3"},"Top 10 coins by market cap",-1),Y=Object(a["createVNode"])("option",{value:""},"Select coin",-1),A={key:0,class:"d-flex flex-column justify-content-center align-items-center bg-white p-3 mt-3"},H={class:"text-center p-3"};Object(a["popScopeId"])();var U=L((function(e,t,c,o,n,r){return Object(a["openBlock"])(),Object(a["createBlock"])(a["Fragment"],null,[P,Object(a["withDirectives"])(Object(a["createVNode"])("select",{class:"form-select mt-3","onUpdate:modelValue":t[1]||(t[1]=function(e){return n.cryptoSelected=e}),"aria-label":"Default select example",onChange:t[2]||(t[2]=function(e){return r.selected(e,e.target.selectedIndex)})},[Y,(Object(a["openBlock"])(!0),Object(a["createBlock"])(a["Fragment"],null,Object(a["renderList"])(n.top10,(function(e,t){return Object(a["openBlock"])(),Object(a["createBlock"])("option",{key:t,value:e.id},Object(a["toDisplayString"])(t+1)+". "+Object(a["toDisplayString"])(e.id),9,["value"])})),128))],544),[[a["vModelSelect"],n.cryptoSelected]]),n.cryptoSelectedInfo?(Object(a["openBlock"])(),Object(a["createBlock"])("div",A,[Object(a["createVNode"])("img",{src:n.cryptoSelectedInfo.image,alt:"tmp",class:"w-25 h-25"},null,8,["src"]),Object(a["createVNode"])("div",H,[Object(a["createVNode"])("p",null,"Current price : "+Object(a["toDisplayString"])(n.cryptoSelectedInfo.current_price.toFixed(2))+" €",1),Object(a["createVNode"])("p",null,"Highest price in 24h : "+Object(a["toDisplayString"])(n.cryptoSelectedInfo.high_24h.toFixed(2))+" €",1),Object(a["createVNode"])("p",null,"Lowest price in 24h : "+Object(a["toDisplayString"])(n.cryptoSelectedInfo.low_24h.toFixed(2))+" €",1),Object(a["createVNode"])("p",null,"Market cap : "+Object(a["toDisplayString"])(n.cryptoSelectedInfo.market_cap.toFixed(2))+" €",1),Object(a["createVNode"])("p",null,"Latest update on : "+Object(a["toDisplayString"])(r.formatDate(n.cryptoSelectedInfo.last_updated)),1)])])):Object(a["createCommentVNode"])("",!0)],64)})),E=c("c1df"),q=c.n(E),J={inject:["loading","cryptoStore"],data:function(){return{cryptoSelected:"",baseApi:"https://api.coingecko.com/api/v3",top10:[],cryptoSelectedInfo:null}},methods:{formatDate:function(e){return q()(e).format("DD/MM/YYYY HH:mm:ss")},selected:function(e,t){this.cryptoStore.update_name(this.cryptoSelected),this.cryptoSelectedInfo=0!==t?this.top10[t-1]:null},getTop10Crypto:function(){var e=this;this.loading.show_load(),this.axios.get(this.baseApi+"/coins/markets?vs_currency=eur&order=market_cap_desc&per_page=10&page=1&sparkline=false").then((function(t){e.loading.hide_load(),e.top10=t.data})).catch((function(t){e.loading.hide_load(),console.error(t)}))}},mounted:function(){this.getTop10Crypto()}};J.render=U,J.__scopeId="data-v-27ced215";var $=J,G=Object(a["withScopeId"])("data-v-20a61b60");Object(a["pushScopeId"])("data-v-20a61b60");var K={key:0,class:"bg-danger p-3 m-0 text-white text-center"},Q={key:1,class:"m-3 spinner-border text-danger",role:"status"},R=Object(a["createVNode"])("span",{class:"visually-hidden"},"Loading...",-1),W={key:2};Object(a["popScopeId"])();var X=G((function(e,t,c,o,n,r){var s=Object(a["resolveComponent"])("apexchart");return Object(a["openBlock"])(),Object(a["createBlock"])(a["Fragment"],null,[r.cryptoStore.state.name?(Object(a["openBlock"])(),Object(a["createBlock"])("h2",K," Value of "+Object(a["toDisplayString"])(r.cryptoStore.state.name)+" last 24h (minutely data) ",1)):Object(a["createCommentVNode"])("",!0),e.miniload?(Object(a["openBlock"])(),Object(a["createBlock"])("div",Q,[R])):Object(a["createCommentVNode"])("",!0),r.cryptoStore.state.name&&!e.miniload?(Object(a["openBlock"])(),Object(a["createBlock"])("div",W,[Object(a["createVNode"])(s,{height:"500",type:"line",options:e.options,series:e.series,class:"bg-white p-3"},null,8,["options","series"])])):Object(a["createCommentVNode"])("",!0)],64)})),Z=(c("4160"),c("159b"),{inject:["loading","cryptoStore"],data:function(){return{miniload:!1,options:{chart:{id:"coin-chart"},xaxis:{categories:[0]}},series:[{name:"",data:[0]}],baseApi:"https://api.coingecko.com/api/v3",list:[]}},computed:{getCryptoState:function(){return this.cryptoStore.state.name}},watch:{getCryptoState:function(){this.cryptoStore.state.name&&this.getInfo()}},methods:{formatUnixDate:function(e){return q()(e).format("DD/MM/YYYY HH:mm")},getInfo:function(){var e=this;this.miniload=!0,this.axios.get(this.baseApi+"/coins/"+this.cryptoStore.state.name+"/market_chart?vs_currency=eur&days=1").then((function(t){var c=[],a=[];e.miniload=!1,e.list=t.data.prices,e.list.forEach((function(t){t[0]=e.formatUnixDate(t[0]),t[1]=t[1].toFixed(2),c.push(t[0]),a.push(t[1]),e.options={chart:{id:"crypto-chart"},colors:["#dc3545"],xaxis:{labels:{show:!1},categories:c,axisTicks:{show:!1}},yaxis:{labels:{style:{colors:["#dc3545"],fontSize:"0.8rem"}}}},e.series=[{name:e.cryptoStore.state.name,data:a}]}))})).catch((function(t){e.miniload=!1,console.error(t)}))}}});Z.render=X,Z.__scopeId="data-v-20a61b60";var ee=Z,te={components:{Chart:ee,Panel:$},inject:["loading","cryptoStore"],data:function(){return{baseApi:"https://api.coingecko.com/api/v3",crypto:""}},methods:{test:function(){var e=this;this.loading.show_load(),this.axios.get(this.baseApi+"/ping").then((function(t){e.loading.hide_load(),console.log(t.data)})).catch((function(t){e.loading.hide_load(),console.error(t)}))}},beforeUnmount:function(){this.cryptoStore.update_name("")}};te.render=T;var ce=te,ae=[{path:"/",name:"Home",component:B},{path:"/crypto",name:"Crypto",component:ce}],oe=Object(w["a"])({history:Object(w["b"])("/"),routes:ae}),ne=oe,re=c("bc3a"),se=c.n(re),de=c("2106"),ie=c.n(de),le=c("ae27"),be=c.n(le),je=Object(a["createApp"])(m);je.use(ne),je.use(ie.a,se.a),je.use(be.a),je.provide("loading",v),je.provide("cryptoStore",S),je.mount("#app")},a39e:function(e,t,c){"use strict";c("44c7")},c1c3:function(e,t,c){}});
//# sourceMappingURL=app.13a0d813.js.map