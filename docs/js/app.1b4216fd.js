(function(t){function e(e){for(var a,i,c=e[0],o=e[1],u=e[2],l=0,d=[];l<c.length;l++)i=c[l],Object.prototype.hasOwnProperty.call(s,i)&&s[i]&&d.push(s[i][0]),s[i]=0;for(a in o)Object.prototype.hasOwnProperty.call(o,a)&&(t[a]=o[a]);p&&p(e);while(d.length)d.shift()();return r.push.apply(r,u||[]),n()}function n(){for(var t,e=0;e<r.length;e++){for(var n=r[e],a=!0,i=1;i<n.length;i++){var c=n[i];0!==s[c]&&(a=!1)}a&&(r.splice(e--,1),t=o(o.s=n[0]))}return t}var a={},i={app:0},s={app:0},r=[];function c(t){return o.p+"js/"+({}[t]||t)+"."+{"chunk-0954533d":"89e40f95","chunk-0f02b5a2":"bd8ab6b4","chunk-138a220b":"75d56cb2","chunk-13b3d585":"19714d1c","chunk-13e2f148":"d65bfbfb","chunk-19989bea":"f430f070","chunk-2cd45dfa":"4a6910a9","chunk-33901b48":"3a77d54a","chunk-390c352f":"71d0ae15","chunk-3b83200c":"75722a17","chunk-5b93f2b7":"ebe80a7f","chunk-6e99a00a":"c5bde98e","chunk-6faef10c":"681c2ded","chunk-727e6a02":"973729ac","chunk-729aa1d9":"a3066587","chunk-7328e142":"f2a25368","chunk-7eb3bfdb":"c7955b8e","chunk-89094538":"659b04c8","chunk-8cdbdaf2":"f899fc56","chunk-bee70fe0":"46b4c15c","chunk-f8a13160":"fd82e627"}[t]+".js"}function o(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.e=function(t){var e=[],n={"chunk-0954533d":1,"chunk-0f02b5a2":1,"chunk-138a220b":1,"chunk-13b3d585":1,"chunk-13e2f148":1,"chunk-19989bea":1,"chunk-2cd45dfa":1,"chunk-33901b48":1,"chunk-390c352f":1,"chunk-3b83200c":1,"chunk-5b93f2b7":1,"chunk-6e99a00a":1,"chunk-6faef10c":1,"chunk-727e6a02":1,"chunk-729aa1d9":1,"chunk-7328e142":1,"chunk-7eb3bfdb":1,"chunk-89094538":1,"chunk-8cdbdaf2":1,"chunk-bee70fe0":1,"chunk-f8a13160":1};i[t]?e.push(i[t]):0!==i[t]&&n[t]&&e.push(i[t]=new Promise((function(e,n){for(var a="css/"+({}[t]||t)+"."+{"chunk-0954533d":"627b1b0b","chunk-0f02b5a2":"7b60ec63","chunk-138a220b":"31c66021","chunk-13b3d585":"b3f03875","chunk-13e2f148":"21249c19","chunk-19989bea":"3516b4ff","chunk-2cd45dfa":"ab83c9ee","chunk-33901b48":"f8ebeee2","chunk-390c352f":"00fa9a13","chunk-3b83200c":"0e41bdaf","chunk-5b93f2b7":"2c4e3a42","chunk-6e99a00a":"bb5557a1","chunk-6faef10c":"2b63e1f1","chunk-727e6a02":"fbadd562","chunk-729aa1d9":"b2ef3491","chunk-7328e142":"c184248b","chunk-7eb3bfdb":"4d837a2b","chunk-89094538":"b3e82a8d","chunk-8cdbdaf2":"ab039766","chunk-bee70fe0":"76bdc2ee","chunk-f8a13160":"793a16e6"}[t]+".css",s=o.p+a,r=document.getElementsByTagName("link"),c=0;c<r.length;c++){var u=r[c],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===a||l===s))return e()}var d=document.getElementsByTagName("style");for(c=0;c<d.length;c++){u=d[c],l=u.getAttribute("data-href");if(l===a||l===s)return e()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=e,p.onerror=function(e){var a=e&&e.target&&e.target.src||s,r=new Error("Loading CSS chunk "+t+" failed.\n("+a+")");r.code="CSS_CHUNK_LOAD_FAILED",r.request=a,delete i[t],p.parentNode.removeChild(p),n(r)},p.href=s;var f=document.getElementsByTagName("head")[0];f.appendChild(p)})).then((function(){i[t]=0})));var a=s[t];if(0!==a)if(a)e.push(a[2]);else{var r=new Promise((function(e,n){a=s[t]=[e,n]}));e.push(a[2]=r);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,o.nc&&l.setAttribute("nonce",o.nc),l.src=c(t);var d=new Error;u=function(e){l.onerror=l.onload=null,clearTimeout(p);var n=s[t];if(0!==n){if(n){var a=e&&("load"===e.type?"missing":e.type),i=e&&e.target&&e.target.src;d.message="Loading chunk "+t+" failed.\n("+a+": "+i+")",d.name="ChunkLoadError",d.type=a,d.request=i,n[1](d)}s[t]=void 0}};var p=setTimeout((function(){u({type:"timeout",target:l})}),12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(e)},o.m=t,o.c=a,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)o.d(n,a,function(e){return t[e]}.bind(null,a));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="",o.oe=function(t){throw console.error(t),t};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=e,u=u.slice();for(var d=0;d<u.length;d++)e(u[d]);var p=l;r.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";n("85ec")},1:function(t,e){},"167f":function(t,e,n){"use strict";n("ce86")},2967:function(t,e,n){t.exports=n.p+"img/algorithm.7cf29c50.png"},"3ee2":function(t,e,n){t.exports=n.p+"media/LibCity_Chinese.3f07bf5f.mp4"},"44a5":function(t,e,n){},4678:function(t,e,n){var a={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn-bd":"9686","./bn-bd.js":"9686","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-in":"ec2e","./en-in.js":"ec2e","./en-nz":"6f50","./en-nz.js":"6f50","./en-sg":"b7e9","./en-sg.js":"b7e9","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-mx":"b5b7","./es-mx.js":"b5b7","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fil":"d69a","./fil.js":"d69a","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-deva":"aaf2","./gom-deva.js":"aaf2","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./oc-lnc":"167b","./oc-lnc.js":"167b","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tk":"5aff","./tk.js":"5aff","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-mo":"3a6c","./zh-mo.js":"3a6c","./zh-tw":"90ea","./zh-tw.js":"90ea"};function i(t){var e=s(t);return n(e)}function s(t){if(!n.o(a,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return a[t]}i.keys=function(){return Object.keys(a)},i.resolve=s,t.exports=i,i.id="4678"},"4ffd":function(t,e,n){t.exports=n.p+"img/logo.d8af0d00.png"},5688:function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e),n.d(e,"axiosInstance",(function(){return nt}));n("d3b7"),n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("a-layout",{attrs:{id:"components-layout-demo-fixed"}},[a("a-layout-header",{staticClass:"header",style:{height:"80px",position:"fixed",zIndex:1,width:"100%"}},[t.lang?a("a-menu",{style:{width:"1200px",margin:"auto",lineHeight:"80px"},attrs:{theme:"dark",mode:"horizontal"}},[a("a-menu-item",{key:"1",on:{click:function(e){return t.menuItemClick("Home")}}},[a("img",{staticClass:"logo",attrs:{src:n("4ffd")}})]),a("a-menu-item",{key:"2",staticStyle:{width:"135px","font-size":"20px",textalign:"center"}},[a("a-dropdown",[a("span",{staticClass:"ant-dropdown-link"},[t._v(" Get Started "),a("a-icon",{attrs:{type:"down"}})],1),a("a-menu",{staticStyle:{width:"130px"},attrs:{slot:"overlay"},slot:"overlay"},[a("a-menu-item",{staticStyle:{"font-size":"16px","line-height":"24px"},on:{click:function(e){return t.menuItemClick("InstallLibEpidemic")}}},[a("a",{attrs:{href:"javascript:;"}},[t._v("Install LibEpidemic")])]),a("a-menu-item",{staticStyle:{"font-size":"16px","line-height":"24px"},on:{click:function(e){return t.menuItemClick("QuickStart")}}},[a("a",{attrs:{href:"javascript:;"}},[t._v("Quick Start")])])],1)],1)],1),a("a-menu-item",{key:"3",staticStyle:{width:"55px","font-size":"20px",textalign:"center"},on:{click:function(e){return t.menuItemClick("Task")}}},[t._v(" Task ")]),a("a-menu-item",{key:"4",staticStyle:{width:"80px","font-size":"20px",textalign:"center"}},[a("a-dropdown",[a("span",{staticClass:"ant-dropdown-link"},[t._v(" Toolkit "),a("a-icon",{attrs:{type:"down"}})],1),a("a-menu",{staticStyle:{width:"100px"},attrs:{slot:"overlay"},slot:"overlay"},[a("a-menu-item",{staticStyle:{"font-size":"16px","line-height":"24px"},on:{click:function(e){return t.menuItemClick("Data")}}},[a("a",{attrs:{href:"javascript:;"}},[t._v("Data")])]),a("a-menu-item",{staticStyle:{"font-size":"16px","line-height":"24px"},on:{click:function(e){return t.menuItemClick("Model")}}},[a("a",{attrs:{href:"javascript:;"}},[t._v("Model")])]),a("a-menu-item",{staticStyle:{"font-size":"16px","line-height":"24px"},on:{click:function(e){return t.menuItemClick("Evaluation")}}},[a("a",{attrs:{href:"javascript:;"}},[t._v("Evaluation")])])],1)],1)],1),a("a-menu-item",{key:"5",staticStyle:{width:"110px","font-size":"20px",textalign:"center","margin-left":"10px"}},[a("a",{attrs:{href:"https://readthedocs.org/projects/libepidemic-docs/",target:"_blank"}},[t._v("Document")])]),a("a-menu-item",{key:"7",staticStyle:{width:"90px","font-size":"20px",textalign:"center"},on:{click:function(e){return t.menuItemClick("Ranking")}}},[t._v(" Ranking ")]),a("a-menu-item",{key:"8",staticStyle:{width:"85px","font-size":"20px",textalign:"center"},on:{click:function(e){return t.menuItemClick("Tutorial")}}},[t._v(" Tutorial ")]),a("a-menu-item",{key:"11",staticStyle:{width:"65px","font-size":"20px",textalign:"center"},on:{click:function(e){return t.menuItemClick("Paper")}}},[t._v(" Paper ")]),a("a-menu-item",{key:"9",staticStyle:{width:"70px","font-size":"20px",textalign:"center"},on:{click:function(e){return t.menuItemClick("About")}}},[t._v(" About ")]),a("a-menu-item",{key:"10",staticStyle:{width:"95px","font-size":"20px",textalign:"center"}},[a("a",{attrs:{href:"https://github.com/Bigscity-epidemic/Epidemic-Modeling-survey",target:"_blank"}},[t._v("GitHub")])])],1):t._e()],1),a("a-layout-content",[a("div",{style:{marginTop:"80px",backgroundColor:"transparent",minHeight:"680px",height:"auto"}},[a("router-view")],1)]),t.lang?a("a-layout-footer",{style:{backgroundColor:"#ddd"}},[a("div",{staticStyle:{width:"80%",margin:"auto","min-width":"1000px"}},[a("div",{staticStyle:{display:"inline-block",border:"red solid 0px",width:"160px",height:"160px","vertical-align":"top"}},[a("a",{attrs:{href:"https://clustrmaps.com/site/1biw6",title:"Visit tracker"}},[a("img",{staticStyle:{width:"200px",height:"127px"},attrs:{src:"//clustrmaps.com/map_v2.png?cl=ffffff&w=a&t=tt&d=lIAqix0OUQ3-odCYrKKkfjqRbakJACtJCPHfUkqRc48"}})]),a("div",{staticStyle:{width:"160px"},attrs:{id:"counter"}},[a("p",{staticStyle:{float:"left","font-size":"16px"}},[t._v("Current:")]),a("a",{staticStyle:{float:"right"},attrs:{href:"https://statcounter.com"}},[a("img",{staticClass:"statcounter",attrs:{src:"https://c.statcounter.com/12660855/0/b2a6fe31/0/",alt:"Web Analytics",referrerPolicy:"no-referrer-when-downgrade"}})])])]),a("div",{staticStyle:{display:"block",float:"right",width:"150px",height:"160px"}},[a("h3",{staticStyle:{color:"rgb(27, 140, 233)"}},[t._v("Useful Links")]),a("dl",[a("dt",[a("a-button",{staticClass:"footer-btn",attrs:{type:"link"}},[a("a",{staticStyle:{"font-size":"16px"},attrs:{href:"https://www.bigcity.ai/"}},[t._v("BIGSCity")])])],1)])]),a("div",{staticStyle:{display:"block",float:"right",width:"150px",height:"160px","vertical-align":"top"}},[a("h3",{staticStyle:{color:"rgb(27, 140, 233)"}},[t._v("Resources")]),a("dl",[a("dt",[a("a-button",{staticClass:"footer-btn",attrs:{type:"link"}},[a("a",{staticStyle:{"font-size":"16px"},attrs:{href:"https://readthedocs.org/projects/libepidemic-docs/",target:"_blank"}},[t._v("Document")])])],1),a("dt",[a("a-button",{staticClass:"footer-btn",attrs:{type:"link"}},[a("a",{staticStyle:{"font-size":"16px"},attrs:{href:"https://github.com/Bigscity-epidemic/Epidemic-Modeling-survey",target:"_blank"}},[t._v("GitHub")])])],1),a("dt",[a("a-button",{staticClass:"footer-btn",staticStyle:{"font-size":"16px"},attrs:{type:"link",href:"https://github.com/Bigscity-epidemic/Bigscity-epidemic-survey-paperlist",target:"_blank"}},[t._v("Paper Library")])],1),a("dt",[a("a-button",{staticClass:"footer-btn",staticStyle:{"font-size":"16px"},attrs:{type:"link"},on:{click:t.toAbout}},[t._v("About Us")])],1)])]),a("div",{staticStyle:{"text-align":"center","font-size":"16px",color:"black","margin-top":"20px"}},[t._v(" Copyright © 2022 LibEpidemic All rights served. ")])])]):t._e()],1)},s=[],r=document.createElement("script");r.type="text/javascript",r.src="https://www.statcounter.com/counter/counter.js",console.log(r),document.getElementsByTagName("head")[0].appendChild(r),r.onload=function(){console.log("js加载成功")},r.onerror=function(){console.log("js加载失败")};var c={data:function(){return{lang:!0,isActive:!0}},created:function(){this.showStatus()},methods:{menuItemClick:function(t){this.$router.push({name:t})},toPaper:function(){this.$router.push({name:"Paper"})},toAbout:function(){this.$router.push({name:"About"})},showStatus:function(){var t="https://";document.write("<script type='text/javascript' src='"+t+"statcounter.com/counter/counter.js'><\/script>")}}},o=c,u=(n("034f"),n("2877")),l=Object(u["a"])(o,i,s,!1,null,null,null),d=l.exports,p=n("8c4f"),f=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[n("div",{staticClass:"header"},[n("div",{staticStyle:{"padding-top":"20px",color:"white"}},[n("p",{staticStyle:{width:"200px",margin:"30px 0 20px 150px","font-size":"64px"}},[t._v("LibEpidemic")]),n("p",{staticStyle:{width:"1000px",margin:"0px 0 20px 150px","font-size":"32px"}},[t._v(" A unified, comprehensive and extensible library for traffic prediction. ")]),n("div",{staticClass:"btn-list"},[n("a-button",{staticClass:"btn",attrs:{type:"primary",shape:"round"},on:{click:function(e){return t.toInstallToolkit()}}},[t._v("Install")]),n("a-button",{staticClass:"btn",attrs:{id:"long_btn",type:"primary",shape:"round"},on:{click:function(e){return t.toQuickStart()}}},[t._v("Quick Start")]),n("a-button",{staticClass:"btn",attrs:{type:"primary",shape:"round"},on:{click:function(e){return t.toPaper()}}},[t._v("Paper")]),n("a-button",{staticClass:"btn",attrs:{id:"btn",type:"primary",shape:"round"},on:{click:function(e){return t.toTutorial()}}},[t._v("Tutorial")])],1)])]),n("div",{staticClass:"main"},[n("div",{staticStyle:{"min-height":"340px"}},[n("feat-card",{staticClass:"feature"})],1),n("div",{staticClass:"video"},[t._m(0),n("a-button-group",{staticClass:"lang-btn-group"},[n("a-button",{staticClass:"lang-btn",attrs:{id:"english-btn",type:"primary",disabled:""},on:{click:function(e){return t.changeVideoLang()}}},[t._v(" English Version ")]),n("a-button",{staticClass:"lang-btn",attrs:{id:"chinese-btn",type:"primary"},on:{click:function(e){return t.changeVideoLang()}}},[t._v(" Chinese Version ")])],1),n("video-player",{ref:"videoPlayer",staticClass:"video-player vjs-custom-skin",attrs:{playsline:!1,options:t.playerOptions}}),n("div",{staticClass:"video-notes"},[t._v("* These statistics are updated to November 2021.")])],1),t._m(1),n("div",{staticClass:"platform"},[t._m(2),n("div",[n("plat-card",{staticClass:"feature"})],1)])])])},h=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"video-header"},[n("span",{staticClass:"block-title"},[t._v("VIDEO")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"toolkit"},[a("div",{staticClass:"news-header"},[a("span",{staticClass:"block-title"},[t._v("FRAMEWORK")])]),a("div",{staticStyle:{width:"80%",margin:"10px auto 20px auto","text-align":"center"}},[a("img",{attrs:{src:n("6310"),alt:"toolkit",height:"550"}})])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"news-header"},[n("span",{staticClass:"block-title"},[t._v("PLATFORM")])])}],m=(n("a9e3"),function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticStyle:{"background-color":"transparent",padding:"5px 20px 20px 20px"}},[a("a-row",{staticStyle:{"margin-bottom":"30px"},attrs:{gutter:[48,16]}},[a("a-col",{attrs:{span:8}},[a("div",{staticClass:"fcard"},[a("a-card",{attrs:{bordered:!1}},[a("div",{staticStyle:{"text-align":"center"}},[a("img",{staticStyle:{"margin-bottom":"10px"},attrs:{src:n("c235"),alt:"data",height:"80"}}),a("h3",{staticStyle:{"font-size":"20px"}},[t._v("Comprehensive Datasets and Unified Data Structures")]),a("p",{staticStyle:{"text-align":"left"}},[t._v("LibEpidemic provides 35 spatio-temporal datasets and introduces unified data structures to format representations of datas and the input of algorithms.")])])])],1)]),a("a-col",{attrs:{span:8}},[a("div",{staticClass:"fcard"},[a("a-card",{attrs:{bordered:!1}},[a("div",{staticStyle:{"text-align":"center"}},[a("img",{staticStyle:{"margin-bottom":"10px"},attrs:{src:n("2967"),alt:"algorithm",height:"80"}}),a("h3",{staticStyle:{"font-size":"20px"}},[t._v("Mainstream Tasks and Intelligence Algorithms")]),a("p",{staticStyle:{"text-align":"left"}},[t._v("LibEpidemic supports 9 mainstream spatio-temporal data mining tasks and implements 60 commonly used intelligence algorithms.")])])])],1)]),a("a-col",{attrs:{span:8}},[a("div",{staticClass:"fcard"},[a("a-card",{attrs:{bordered:!1}},[a("div",{staticStyle:{"text-align":"center"}},[a("img",{staticStyle:{"margin-bottom":"10px"},attrs:{src:n("d9ae"),alt:"algorithm",height:"80"}}),a("h3",{staticStyle:{"font-size":"20px"}},[t._v("Extensive and Standard Evaluation Metrics")]),a("p",{staticStyle:{"text-align":"left"}},[t._v("LibEpidemic incorporates extensive and standard evaluation metrics for testing and comparing spatio-temporal data mining algorithms.")])])])],1)])],1)],1)}),b=[],g={name:"featCard",data:function(){return{}}},k=g,A=(n("6ac6"),Object(u["a"])(k,m,b,!1,null,null,null)),v=A.exports,y=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticStyle:{padding:"20px"}},[n("a-row",{attrs:{gutter:[48,16]}},[n("a-col",{attrs:{span:8}},[n("div",{staticClass:"pcard"},[n("a-card",{staticStyle:{"border-radius":"5px"},attrs:{title:"PaperList",bordered:!0}},[n("p",{staticStyle:{"margin-bottom":"0px",height:"120px"}},[t._v("LibEpidemic offers more than 300 research papers on spatio-temporal data mining from top conferences or journals.")]),n("a-button",{staticStyle:{"padding-left":"180px","margin-top":"5px","font-size":"15px"},attrs:{type:"link"}},[n("a",{attrs:{href:"https://github.com/Bigscity-epidemic/Bigscity-epidemic-survey-paperlist",target:"_blank"}},[t._v("See More >>")])])],1)],1)]),n("a-col",{attrs:{span:8}},[n("div",{staticClass:"pcard"},[n("a-card",{staticStyle:{"border-radius":"5px"},attrs:{title:"Ranking",bordered:!0}},[n("p",{staticStyle:{"margin-bottom":"0px",height:"120px"}},[t._v("LibEpidemic tests existing models on different datasets and shows performances and rankings of these models for each dataset.")]),n("a-button",{staticStyle:{"padding-left":"180px","margin-top":"5px","font-size":"15px"},attrs:{type:"link"},on:{click:t.toRanking}},[t._v("See More >>")])],1)],1)]),n("a-col",{attrs:{span:8}},[n("div",{staticClass:"pcard"},[n("a-card",{staticStyle:{"border-radius":"5px"},attrs:{title:"Tutorial",bordered:!0}},[n("p",{staticStyle:{"margin-bottom":"0px",height:"120px"}},[t._v("This website provides a demonstration video for researchers to know the basic usage of LibEpidemic quickly.")]),n("a-button",{staticStyle:{"padding-left":"180px","margin-top":"5px","font-size":"15px"},attrs:{type:"link"},on:{click:t.toTutorial}},[t._v("See More >>")])],1)],1)])],1)],1)},j=[],x={name:"platCard",data:function(){return{}},methods:{toTask:function(){this.$router.push({name:"Task"})},toPaper:function(){this.$router.push({name:"Paper"})},toRanking:function(){this.$router.push({name:"Ranking"})},toChart:function(){this.$router.push({name:"Chart"})},toTutorial:function(){this.$router.push({name:"Tutorial"})}}},C=x,S=(n("aa1a"),Object(u["a"])(C,y,j,!1,null,null,null)),w=S.exports,E=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticStyle:{"background-color":"transparent",padding:"20px"}},[a("a-row",{staticStyle:{"margin-bottom":"30px"},attrs:{gutter:[48,16]}},[a("a-col",{attrs:{span:8}},[a("div",[a("a-card",{staticClass:"newscard"},[a("img",{attrs:{slot:"cover",alt:"example",src:n("d2c1")},slot:"cover"}),a("a-card-meta",{attrs:{title:"LibEpidemic v0.1.0 Has Released!"}},[a("template",{slot:"description"},[t._v(" Today we are announcing ... ")])],2)],1)],1)])],1)],1)},B=[],T={name:"newCard",data:function(){return{}}},P=T,D=(n("167f"),Object(u["a"])(P,E,B,!1,null,null,null)),z=D.exports,L={data:function(){return{videoLang:"English",videoSrc:"../assets/video/LibCity_English.mp4",focus:0,playerOptions:{playbackRates:[.7,1,1.5,2],autoplay:!1,muted:!1,loop:!1,preload:"auto",language:"zh-CN",aspectRatio:"16:9",fluid:!0,sources:[{type:"video/mp4",src:n("95d4")}],poster:n("bb3a"),width:document.documentElement.clientWidth,notSupportedMessage:"此视频暂无法播放，请稍后再试",controlBar:{timeDivider:!0,durationDisplay:!0,remainingTimeDisplay:!1,fullscreenToggle:!0}}}},mounted:function(){var t=document.getElementById("iframe1"),e=document.getElementById("iframe2"),n=(document.documentElement.clientWidth,document.documentElement.clientHeight),a=document.documentElement.clientHeight;t.style.height=Number(n)-160+"px",e.style.height=Number(a)-160+"px"},components:{featCard:v,newCard:z,platCard:w},methods:{changeVideoLang:function(){if("English"==this.videoLang){this.videoLang="Chinese",this.playerOptions["sources"][0]["src"]=n("3ee2");var t=document.getElementById("chinese-btn");t.disabled=!0,t.style.background="#1890ff",t.style.color="white";var e=document.getElementById("english-btn");e.disabled=!1,e.style.background="whitesmoke",e.style.color="black"}else if("Chinese"==this.videoLang){this.videoLang="English",this.playerOptions["sources"][0]["src"]=n("95d4");var a=document.getElementById("english-btn");a.disabled=!0,a.style.background="#1890ff",a.style.color="white";var i=document.getElementById("chinese-btn");i.disabled=!1,i.style.background="whitesmoke",i.style.color="black"}},toTutorial:function(){this.$router.push({name:"Tutorial"})},toNews:function(){this.$router.push({name:"News"})},toInstallToolkit:function(){this.$router.push({name:"InstallLibEpidemic"})},toQuickStart:function(){this.$router.push({name:"QuickStart"})},toPaperList:function(){this.$router.push({name:"PaperList"})},toPaper:function(){this.$router.push({name:"Paper"})}}},Q=L,I=(n("9019"),Object(u["a"])(Q,f,h,!1,null,"507ea812",null)),G=I.exports;a["a"].use(p["a"]);var M=[{path:"/",name:"Home",component:G},{path:"/paper/LibEpidemic-An-Open-Library-For-Traffic-Prediction",name:"LibEpidemic-An-Open-Library-For-Traffic-Prediction",component:function(){return n.e("chunk-2cd45dfa").then(n.bind(null,"00e1"))}},{path:"/paper",name:"Paper",component:function(){return n.e("chunk-8cdbdaf2").then(n.bind(null,"112a"))}},{path:"/tutorial",name:"Tutorial",component:function(){return n.e("chunk-13e2f148").then(n.bind(null,"818d"))}},{path:"/ranking",name:"Ranking",component:function(){return n.e("chunk-89094538").then(n.bind(null,"4320"))}},{path:"/install_libepidemic",name:"InstallLibEpidemic",component:function(){return n.e("chunk-33901b48").then(n.bind(null,"7dd6"))}},{path:"/quick_start",name:"QuickStart",component:function(){return n.e("chunk-729aa1d9").then(n.bind(null,"b216"))}},{path:"/task",name:"Task",component:function(){return n.e("chunk-7eb3bfdb").then(n.bind(null,"1d21"))}},{path:"/data",name:"Data",component:function(){return n.e("chunk-5b93f2b7").then(n.bind(null,"8ae8"))}},{path:"/model",name:"Model",component:function(){return n.e("chunk-7328e142").then(n.bind(null,"d9f4"))}},{path:"/evaluation",name:"Evaluation",component:function(){return n.e("chunk-13b3d585").then(n.bind(null,"f683"))}},{path:"/ranking/METR-LA",name:"METR-LA",component:function(){return n.e("chunk-0954533d").then(n.bind(null,"97de"))}},{path:"/ranking/PEMS-BAY",name:"PEMS-BAY",component:function(){return n.e("chunk-138a220b").then(n.bind(null,"8e04"))}},{path:"/ranking/PEMSD4",name:"PEMSD4",component:function(){return n.e("chunk-390c352f").then(n.bind(null,"40e4"))}},{path:"/ranking/PEMSD8",name:"PEMSD8",component:function(){return n.e("chunk-bee70fe0").then(n.bind(null,"3143"))}},{path:"/ranking/T-Drive20150206",name:"T-Drive20150206",component:function(){return n.e("chunk-0f02b5a2").then(n.bind(null,"b55f"))}},{path:"/ranking/TAXIBJ2015",name:"TAXIBJ2015",component:function(){return n.e("chunk-727e6a02").then(n.bind(null,"7bd4"))}},{path:"/ranking/NYCTAXI202001-202003-3600",name:"NYCTAXI202001-202003-3600",component:function(){return n.e("chunk-19989bea").then(n.bind(null,"11c9"))}},{path:"/ranking/NYCBike20140409",name:"NYCBike20140409",component:function(){return n.e("chunk-3b83200c").then(n.bind(null,"74f3"))}},{path:"/about",name:"About",component:function(){return n.e("chunk-6faef10c").then(n.bind(null,"f820"))}},{path:"/news",name:"News",component:function(){return n.e("chunk-f8a13160").then(n.bind(null,"5884"))}},{path:"/news/LibEpidemic-v0.1.0-has-released",name:"LibEpidemic-V0.1.0-Has-Released",component:function(){return n.e("chunk-6e99a00a").then(n.bind(null,"88ed"))}}],_=new p["a"]({routes:M,scrollBehavior:function(t,e,n){return{x:0,y:0}}}),N=_,O=n("bc3a"),R=n.n(O),Y=n("2f62");a["a"].use(Y["a"]);var K=new Y["a"].Store({state:{},mutations:{},actions:{},modules:{}}),U=n("313e"),F=n.n(U),V=n("f23d");n("202f"),n("ac1f"),n("466d"),n("498a");function q(t){return{}.toString.call(t).match(/\s([a-zA-Z]+)/)[1].toLowerCase()}function J(t){for(var e in t)null===t[e]&&delete t[e],"string"===q(t[e])?t[e]=t[e].trim():("object"===q(t[e])||"array"===q(t[e]))&&(t[e]=J(t[e]));return t}function H(t){R.a.defaults.headers.school_id=t.school_id,R.a.defaults.headers.token=t.token}function X(t,e,n,a,i,s){n&&(n=J(n),H(n)),a&&(a=J(a)),R()({method:t,url:e,data:"POST"===t||"PUT"===t?a:null,params:"GET"===t||"DELETE"===t?a:null,withCredentials:!1}).then((function(t){t.data?i&&i(t.data):s(t.data)})).catch((function(t){var e=t.response;t&&window.alert("api error, HTTP CODE: "+e.status)}))}R.a.defaults.withCredentials=!0;var Z={get:function(t,e,n,a,i){return X("GET",t,e,n,a,i)},post:function(t,e,n,a,i){return X("POST",t,e,n,a,i)},put:function(t,e,n,a,i){return X("PUT",t,e,n,a,i)},delete:function(t,e,n,a,i){return X("DELETE",t,e,n,a,i)}},W=n("69f6"),$=n.n(W),tt=n("d6d3"),et=n.n(tt);n("a151"),n("b5c1");n("fda2"),n("451f"),a["a"].use(et.a),a["a"].prototype.$echarts=F.a,a["a"].config.productionTip=!1,a["a"].use(V["a"]),a["a"].use(F.a),a["a"].prototype.$api=Z,a["a"].prototype.$urlPath=$.a,a["a"].config.productionTip=!1,a["a"].prototype.$axios=R.a;var nt=R.a.create({baseURL:"http://112.124.28.130:8088/",timeout:6e5});nt.interceptors.response.use((function(t){return t}),(function(t){return Promise.reject(t)})),a["a"].prototype.$axios=nt,new a["a"]({router:N,store:K,render:function(t){return t(d)}}).$mount("#app")},6310:function(t,e,n){t.exports=n.p+"img/toolkit.5c089aec.png"},"69f6":function(t,e){},"6ac6":function(t,e,n){"use strict";n("44a5")},"85ec":function(t,e,n){},"8cc0":function(t,e,n){},9019:function(t,e,n){"use strict";n("5688")},"95d4":function(t,e,n){t.exports=n.p+"media/LibCity_English.60e4921c.mp4"},aa1a:function(t,e,n){"use strict";n("8cc0")},bb3a:function(t,e,n){t.exports=n.p+"img/LibCity_English.3847be7e.png"},c235:function(t,e){t.exports="data:image/png;base64,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"},ce86:function(t,e,n){},d2c1:function(t,e,n){t.exports=n.p+"img/smart_city.91195cd6.jpg"},d9ae:function(t,e){t.exports="data:image/png;base64,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"}});
//# sourceMappingURL=app.1b4216fd.js.map