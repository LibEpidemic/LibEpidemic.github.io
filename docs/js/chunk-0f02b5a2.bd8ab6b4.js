(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0f02b5a2"],{1148:function(e,t,r){"use strict";var s=r("a691"),a=r("1d80");e.exports="".repeat||function(e){var t=String(a(this)),r="",n=s(e);if(n<0||n==1/0)throw RangeError("Wrong number of repetitions");for(;n>0;(n>>>=1)&&(t+=t))1&n&&(r+=t);return r}},"159b":function(e,t,r){var s=r("da84"),a=r("fdbc"),n=r("17c2"),i=r("9112");for(var o in a){var p=s[o],c=p&&p.prototype;if(c&&c.forEach!==n)try{i(c,"forEach",n)}catch(l){c.forEach=n}}},"17c2":function(e,t,r){"use strict";var s=r("b727").forEach,a=r("a640"),n=r("ae40"),i=a("forEach"),o=n("forEach");e.exports=i&&o?[].forEach:function(e){return s(this,e,arguments.length>1?arguments[1]:void 0)}},"408a":function(e,t,r){var s=r("c6b6");e.exports=function(e){if("number"!=typeof e&&"Number"!=s(e))throw TypeError("Incorrect invocation");return+e}},4160:function(e,t,r){"use strict";var s=r("23e7"),a=r("17c2");s({target:"Array",proto:!0,forced:[].forEach!=a},{forEach:a})},"65f0":function(e,t,r){var s=r("861d"),a=r("e8b5"),n=r("b622"),i=n("species");e.exports=function(e,t){var r;return a(e)&&(r=e.constructor,"function"!=typeof r||r!==Array&&!a(r.prototype)?s(r)&&(r=r[i],null===r&&(r=void 0)):r=void 0),new(void 0===r?Array:r)(0===t?0:t)}},a640:function(e,t,r){"use strict";var s=r("d039");e.exports=function(e,t){var r=[][e];return!!r&&s((function(){r.call(null,t||function(){throw 1},1)}))}},ae40:function(e,t,r){var s=r("83ab"),a=r("d039"),n=r("5135"),i=Object.defineProperty,o={},p=function(e){throw e};e.exports=function(e,t){if(n(o,e))return o[e];t||(t={});var r=[][e],c=!!n(t,"ACCESSORS")&&t.ACCESSORS,l=n(t,0)?t[0]:p,m=n(t,1)?t[1]:void 0;return o[e]=!!r&&!a((function(){if(c&&!s)return!0;var e={length:-1};c?i(e,1,{enumerable:!0,get:p}):e[1]=1,r.call(e,l,m)}))}},b227:function(e,t,r){},b55f:function(e,t,r){"use strict";r.r(t);var s=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"container"},[e._m(0),r("div",{staticClass:"content"},[r("div",{staticClass:"metric"},[e._v(" View "),r("a-select",{staticStyle:{width:"180px","font-size":"14px","margin-left":"10px"},attrs:{"default-value":"MAE3"},on:{change:e.metricsChange}},[r("a-select-option",{attrs:{value:"MAE3"}},[e._v(" MAE @ 3 STEP ")]),r("a-select-option",{attrs:{value:"RMSE3"}},[e._v(" RMSE @ 3 STEP ")])],1)],1),r("div",{staticClass:"model-ranking"},[r("table",[r("thead",[r("tr",[r("th",[e._v("RANK")]),r("th",[e._v("MODEL")]),r("th",[e._v("PAPER")]),r("th",[e._v("YEAR")]),r("th",[e._v("1 STEP"),r("a-button",{staticStyle:{color:"white"},attrs:{type:"link",icon:"caret-down",size:"small"},on:{click:e.sortBy1}})],1),r("th",[e._v("2 STEP"),r("a-button",{staticStyle:{color:"white"},attrs:{type:"link",icon:"caret-down",size:"small"},on:{click:e.sortBy2}})],1),r("th",[e._v("3 STEP"),r("a-button",{staticStyle:{color:"white"},attrs:{type:"link",icon:"caret-down",size:"small"},on:{click:e.sortBy3}})],1)])]),r("tbody",e._l(e.rankingData,(function(t){return r("tr",{key:t.model},[r("td",{attrs:{width:"6%"}},[e._v(e._s(t.rank))]),r("td",{attrs:{width:"8%"}},[e._v(e._s(t.model))]),r("td",{attrs:{width:"39%"}},[r("a",{staticClass:"paper",attrs:{href:t.plink,target:"_blank"}},[e._v(e._s(t.paper))])]),r("td",{attrs:{width:"5%"}},[e._v(e._s(t.year))]),r("td",{attrs:{width:"14%"}},[e._v(e._s(t.step1))]),r("td",{attrs:{width:"14%"}},[e._v(e._s(t.step2))]),r("td",{attrs:{width:"14%"}},[e._v(e._s(t.step3))])])})),0)])]),r("br"),r("br")])])},a=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"header"},[r("div",{staticStyle:{"padding-top":"20px",color:"white"}},[r("p",{staticStyle:{margin:"20px 0 30px 130px","font-size":"60px"}},[e._v("T-Drive20150206")])])])}],n=(r("4160"),r("b680"),r("159b"),[{rank:0,model:"MTGNN",mlink:"#",paper:"Connecting the Dots: Multivariate Time Series Forecasting with Graph Neural Networks",plink:"https://arxiv.org/abs/2005.11650",year:"2020",step1:13.74689102,step2:15.27115917,step3:16.77351189,mae_step1:13.74689102,mae_step2:15.27115917,mae_step3:16.77351189,rmse_step1:31.55865288,rmse_step2:35.0679512,rmse_step3:38.00547791},{rank:0,model:"AGCRN",mlink:"#",paper:"Adaptive Graph Convolutional Recurrent Network for Traffic Forecasting",plink:"https://arxiv.org/abs/2007.02842",year:"2020",step1:14.17639446,step2:16.22584724,step3:17.62712097,mae_step1:14.17639446,mae_step2:16.22584724,mae_step3:17.62712097,rmse_step1:32.01177979,rmse_step2:37.80277634,rmse_step3:41.55196381},{rank:0,model:"GWNET",mlink:"#",paper:"Graph Wavenet for Deep Spatial-Temporal Graph Modeling",plink:"https://arxiv.org/abs/1906.00121",year:"2019",step1:14.97860622,step2:16.68260574,step3:18.08253479,mae_step1:14.97860622,mae_step2:16.68260574,mae_step3:18.08253479,rmse_step1:35.14050674,rmse_step2:39.26478577,rmse_step3:42.89715958},{rank:0,model:"STResNet",mlink:"#",paper:"Deep Spatio-Temporal Residual Networks for Citywide Crowd Flows Prediction",plink:"https://arxiv.org/abs/1610.00081",year:"2017",step1:16.75712204,step2:17.81740952,step3:18.66376305,mae_step1:16.75712204,mae_step2:17.81740952,mae_step3:18.66376305,rmse_step1:33.97605133,rmse_step2:37.78026962,rmse_step3:40.36789322},{rank:0,model:"STGCN",mlink:"#",paper:"Spatio-temporal graph convolutional networks: A deep learning framework for traffic forecasting",plink:"https://www.ijcai.org/Proceedings/2018/0505",year:"2018",step1:16.05446434,step2:17.7893219,step3:18.80679131,mae_step1:16.05446434,mae_step2:17.7893219,mae_step3:18.80679131,rmse_step1:36.23188019,rmse_step2:41.0978241,rmse_step3:43.96533966},{rank:0,model:"ACFM",mlink:"#",paper:"Attentive Crowd Flow Machines",plink:"https://dl.acm.org/doi/10.1145/3240508.3240681",year:"2018",step1:16.85341835,step2:18.28788376,step3:19.23842621,mae_step1:16.85341835,mae_step2:18.28788376,mae_step3:19.23842621,rmse_step1:33.65074158,rmse_step2:38.01238251,rmse_step3:40.74593353},{rank:0,model:"STG2Seq",mlink:"#",paper:"STG2Seq: Spatial-temporal Graph to Sequence Model for Multi-step Passenger Demand Forecasting",plink:"https://arxiv.org/abs/1905.10069",year:"2019",step1:20.3590374,step2:23.62875175,step3:26.91706467,mae_step1:20.3590374,mae_step2:23.62875175,mae_step3:26.91706467,rmse_step1:41.7979393,rmse_step2:54.63908386,rmse_step3:65.13134766},{rank:0,model:"DCRNN",mlink:"#",paper:"Diffusion convolutional recurrent neural network: Data-driven traffic forecasting",plink:"https://arxiv.org/abs/1707.01926",year:"2018",step1:17.45099068,step2:21.89573669,step3:24.30697441,mae_step1:17.45099068,mae_step2:21.89573669,mae_step3:24.30697441,rmse_step1:37.01754379,rmse_step2:46.28843307,rmse_step3:50.93449783},{rank:0,model:"TGCN",mlink:"#",paper:"T-gcn: A temporal graph convolutional network for traffic prediction",plink:"https://ieeexplore.ieee.org/abstract/document/8809901/",year:"2020",step1:21.09132004,step2:24.21822166,step3:26.93297005,mae_step1:21.09132004,mae_step2:24.21822166,mae_step3:26.93297005,rmse_step1:42.27409363,rmse_step2:50.06852341,rmse_step3:55.01656342},{rank:0,model:"ASTGCN",mlink:"#",paper:"Attention based spatial-temporal graph convolutional networks for traffic flow forecasting",plink:"https://ojs.aaai.org//index.php/AAAI/article/view/3881",year:"2019",step1:26.08333206,step2:20.69397163,step3:29.63371468,mae_step1:26.08333206,mae_step2:20.69397163,mae_step3:29.63371468,rmse_step1:56.4733696,rmse_step2:44.39962769,rmse_step3:66.05281067},{rank:0,model:"Seq2Seq",mlink:"#",paper:"Sequence to Sequence Learning with Neural Networks",plink:"https://papers.nips.cc/paper/2014/hash/a14ac55a4f27472c5d894ec1c3c743d2-Abstract.html",year:"2014",step1:32.11812973,step2:34.5651741,step3:38.60456467,mae_step1:32.11812973,mae_step2:34.5651741,mae_step3:38.60456467,rmse_step1:63.86069489,rmse_step2:69.91119385,rmse_step3:78.48886871},{rank:0,model:"GRU",mlink:"#",paper:"Using LSTM and GRU neural network methods for traffic flow prediction",plink:"https://ieeexplore.ieee.org/abstract/document/7804912",year:"2016",step1:35.39633179,step2:42.33786774,step3:49.56669235,mae_step1:35.39633179,mae_step2:42.33786774,mae_step3:49.56669235,rmse_step1:74.23458099,rmse_step2:88.16832733,rmse_step3:102.8905106},{rank:0,model:"AE",mlink:"#",paper:"Generalized Autoencoder: A Neural Network Framework for Dimensionality Reduction",plink:"https://ieeexplore.ieee.org/document/6910027",year:"2014",step1:71.19487,step2:71.55797577,step3:71.82874298,mae_step1:71.19487,mae_step2:71.55797577,mae_step3:71.82874298,rmse_step1:136.1842346,rmse_step2:136.7357178,rmse_step3:136.9564209}]),i={data:function(){return{T_Drive20150206_origin:n,rankingData:[],metrics:"MAE3"}},mounted:function(){this.rankingData=n,this.metricsChange("MAE3")},methods:{sortBy1:function(){this.rankingData.sort((function(e,t){return e.step1-t.step1}));var e=0;this.rankingData.forEach((function(t){e+=1,t.rank=e}))},sortBy2:function(){this.rankingData.sort((function(e,t){return e.step2-t.step2}));var e=0;this.rankingData.forEach((function(t){e+=1,t.rank=e}))},sortBy3:function(){this.rankingData.sort((function(e,t){return e.step3-t.step3}));var e=0;this.rankingData.forEach((function(t){e+=1,t.rank=e}))},metricsChange:function(e){"MAE3"==e?this.rankingData.forEach((function(e){e.step1=e.mae_step1.toFixed(5),e.step2=e.mae_step2.toFixed(5),e.step3=e.mae_step3.toFixed(5)})):"RMSE3"==e&&this.rankingData.forEach((function(e){e.step1=e.rmse_step1.toFixed(5),e.step2=e.rmse_step2.toFixed(5),e.step3=e.rmse_step3.toFixed(5)})),this.sortBy3()}}},o=i,p=(r("dd74"),r("2877")),c=Object(p["a"])(o,s,a,!1,null,"3785586b",null);t["default"]=c.exports},b680:function(e,t,r){"use strict";var s=r("23e7"),a=r("a691"),n=r("408a"),i=r("1148"),o=r("d039"),p=1..toFixed,c=Math.floor,l=function(e,t,r){return 0===t?r:t%2===1?l(e,t-1,r*e):l(e*e,t/2,r)},m=function(e){var t=0,r=e;while(r>=4096)t+=12,r/=4096;while(r>=2)t+=1,r/=2;return t},f=p&&("0.000"!==8e-5.toFixed(3)||"1"!==.9.toFixed(0)||"1.25"!==1.255.toFixed(2)||"1000000000000000128"!==(0xde0b6b3a7640080).toFixed(0))||!o((function(){p.call({})}));s({target:"Number",proto:!0,forced:f},{toFixed:function(e){var t,r,s,o,p=n(this),f=a(e),u=[0,0,0,0,0,0],d="",_="0",h=function(e,t){var r=-1,s=t;while(++r<6)s+=e*u[r],u[r]=s%1e7,s=c(s/1e7)},v=function(e){var t=6,r=0;while(--t>=0)r+=u[t],u[t]=c(r/e),r=r%e*1e7},k=function(){var e=6,t="";while(--e>=0)if(""!==t||0===e||0!==u[e]){var r=String(u[e]);t=""===t?r:t+i.call("0",7-r.length)+r}return t};if(f<0||f>20)throw RangeError("Incorrect fraction digits");if(p!=p)return"NaN";if(p<=-1e21||p>=1e21)return String(p);if(p<0&&(d="-",p=-p),p>1e-21)if(t=m(p*l(2,69,1))-69,r=t<0?p*l(2,-t,1):p/l(2,t,1),r*=4503599627370496,t=52-t,t>0){h(0,r),s=f;while(s>=7)h(1e7,0),s-=7;h(l(10,s,1),0),s=t-1;while(s>=23)v(1<<23),s-=23;v(1<<s),h(1,1),v(2),_=k()}else h(0,r),h(1<<-t,0),_=k()+i.call("0",f);return f>0?(o=_.length,_=d+(o<=f?"0."+i.call("0",f-o)+_:_.slice(0,o-f)+"."+_.slice(o-f))):_=d+_,_}})},b727:function(e,t,r){var s=r("0366"),a=r("44ad"),n=r("7b0b"),i=r("50c4"),o=r("65f0"),p=[].push,c=function(e){var t=1==e,r=2==e,c=3==e,l=4==e,m=6==e,f=7==e,u=5==e||m;return function(d,_,h,v){for(var k,g,w=n(d),S=a(w),y=s(_,h,3),b=i(S.length),x=0,E=v||o,A=t?E(d,b):r||f?E(d,0):void 0;b>x;x++)if((u||x in S)&&(k=S[x],g=y(k,x,w),e))if(t)A[x]=g;else if(g)switch(e){case 3:return!0;case 5:return k;case 6:return x;case 2:p.call(A,k)}else switch(e){case 4:return!1;case 7:p.call(A,k)}return m?-1:c||l?l:A}};e.exports={forEach:c(0),map:c(1),filter:c(2),some:c(3),every:c(4),find:c(5),findIndex:c(6),filterOut:c(7)}},dd74:function(e,t,r){"use strict";r("b227")},e8b5:function(e,t,r){var s=r("c6b6");e.exports=Array.isArray||function(e){return"Array"==s(e)}},fdbc:function(e,t){e.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}}}]);
//# sourceMappingURL=chunk-0f02b5a2.bd8ab6b4.js.map