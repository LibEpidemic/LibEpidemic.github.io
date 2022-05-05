(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-ca9c34b8"],{"1d21":function(e,t,i){"use strict";i.r(t);var a=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"container"},[e._m(0),i("div",{staticClass:"content"},[i("p",{staticClass:"title"},[e._v("Basic Model")]),i("a-divider",{staticStyle:{margin:"10px 0","background-image":"linear-gradient(to right,  rgb(103, 179, 241),  rgb(103, 179, 241), #f6f6f6, #f6f6f6)"}}),i("p",[e._v('LibEpidemic provides 5 SEIR-class model, with Multi-stage and Dynamic-parameters strategy. LibEpidemic also provides no-code "one-fits-all" policy to help epidemiologists:')]),i("br"),i("p",{staticClass:"sectitle"},[e._v("SEIR-class Model")]),i("a-divider",{staticStyle:{margin:"10px 0","background-image":"linear-gradient(to right,  rgb(103, 179, 241),  rgb(103, 179, 241), #f6f6f6, #f6f6f6)"}}),i("p",[e._v("5 SEIR-class model are preset in LibEpidemic:")]),e._m(1),i("p",[e._v("They come from textbooks or cups for early COVID-19 predictions.")]),i("p",[e._v("Users can view and modify the code of these basic models, fill in any parameter settings, complete the model simulation, and view the results.")]),i("br"),i("p",{staticClass:"sectitle"},[e._v("Multi-stage and Dynamic-parameters Model")]),i("p",[e._v("Every models in LibEpidemic can use multi-stage or dynamic-parameters strategy.")]),e._m(2),i("p",[e._v("Dynamic-parameters means only the parameters can change with time, not the structure.")]),i("br"),i("p",{staticClass:"sectitle"},[e._v("One-fits-all Model")]),i("p",[e._v("Considering that the inputs to the underlying SEIR model are similar, LibEpidemic provide Mixed-strategy Model to Epidemiologists . The mixed-strategy model is used with the multi-stage method, and the optimal model in the model library is automatically selected through the given loss function in each stage.")]),e._m(3),i("p",[e._v('Mixed-strategy models can be used to build a "one fits all model“. Using this model, combined with multi-stage global predictions (tests), the total error is less than or equal to any single model.')]),i("br"),i("p",{staticClass:"title"},[e._v("NPI Model")]),i("a-divider",{staticStyle:{margin:"10px 0","background-image":"linear-gradient(to right,  rgb(103, 179, 241),  rgb(103, 179, 241), #f6f6f6, #f6f6f6)"}}),i("p",{staticClass:"sectitle"},[e._v("Modeling NPI")]),i("p",[e._v("Epidemiologists are very concerned about the process by which infectious diseases spread. In the era of COVID-19 outbreak, the SEPIAR mechanism can completely describe the transmission process. With the subdivided extension, the modeling of most scenes can be completed.")]),i("p",[e._v("Based on this model, epidemiologists can: * Introduce a subdivided model to model any factors that may affect the spread of the epidemic, such as age, income, country, population mobility, etc. * Review or deduce the effects of arbitrary policies(More than 20 categories in total, covering the vast majority of specific policies for all countries) by writing code-free configuration files.")]),e._m(4),i("p",[e._v("Obtain the model's review(history) or deduction(future) results for the epidemic without using code.")]),i("br"),i("p",{staticClass:"sectitle"},[e._v("NPI Deduction")]),i("p",[e._v("LibEpidemic use SEPIAR model and the deduction library to help you modeling NPI. The deduction library consists of several items, each of which contains a policy, a 0/1 flag, several data and several parameters. Among them, the policy is described by a natural language string, and the 0/1 mark indicates whether the policy participates in the deduction. The data includes the settings of the policy itself and other data that need to affect the parameters. The parameters are the parameters corresponding to this deduction item.")]),i("p",[e._v("For example, the policy of “deduce the effect of vaccines” has a 0/1 mark. The data are divided into 4 categories: VEI (infection protection rate), VES (symptomatic protection rate), correction of vaccination shots, and vaccination coverage. The first two categories are the settings of the policy itself, usually constants or epidemiological characteristic numbers, and the last two categories are other data affecting parameters. The parameters corresponding to this deduction item are β(S->E) and trans_PA(P->A).")]),i("br"),i("p",{staticClass:"title"},[e._v("Complex Paper Model")]),i("a-divider",{staticStyle:{margin:"10px 0","background-image":"linear-gradient(to right,  rgb(103, 179, 241),  rgb(103, 179, 241), #f6f6f6, #f6f6f6)"}}),i("p",[e._v("LibEpidemic provides 5 complex models from Papers to guide user simplify their research work with the support of LibEpidemic.")]),i("br")],1)])},s=[function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"header"},[i("div",{staticStyle:{"padding-top":"20px",color:"white"}},[i("p",{staticStyle:{margin:"20px 0 30px 130px","font-size":"60px"}},[e._v("Model")]),i("p",{staticStyle:{margin:"0px 0 20px 130px","font-size":"30px"}},[e._v(" LibEpidemic has 3 types of models "),i("br"),e._v(" with preset structure, parameter and several applications. ")])])])},function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("ul",[i("li",[e._v("SIR")]),i("li",[e._v("SEIR")]),i("li",[e._v("SIR with natural birth/death")]),i("li",[e._v("SEIR with natural birth/death")]),i("li",[e._v("SEPIR")])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticStyle:{width:"80%",margin:"10px auto 20px auto","text-align":"center"}},[a("img",{attrs:{src:i("ebcd"),alt:"toolkit",height:"300"}})])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticStyle:{width:"80%",margin:"10px auto 20px auto","text-align":"center"}},[a("img",{attrs:{src:i("23c8"),alt:"toolkit",height:"300"}})])},function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("ul",[i("li",[e._v("social control policy")]),i("li",[e._v("Case handling policy")]),i("li",[e._v("vaccine policy")])])}],o={data:function(){return{}},components:{}},r=o,n=(i("5aa0"),i("2877")),c=Object(n["a"])(r,a,s,!1,null,"01f31257",null);t["default"]=c.exports},"23c8":function(e,t,i){e.exports=i.p+"img/select.d2855087.png"},"5aa0":function(e,t,i){"use strict";i("ab7f")},ab7f:function(e,t,i){},ebcd:function(e,t,i){e.exports=i.p+"img/multi.05292d01.png"}}]);
//# sourceMappingURL=chunk-ca9c34b8.52e6e117.js.map