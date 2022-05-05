(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-8598bd06"],{"0a65":function(t,e,a){},4320:function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container"},[t._m(0),a("div",{staticClass:"content"},[a("p",{staticClass:"title"},[t._v("Modeling NPI")]),a("a-divider",{staticStyle:{margin:"10px 0","background-image":"linear-gradient(to right,  rgb(103, 179, 241),  rgb(103, 179, 241), #f6f6f6, #f6f6f6)"}}),a("p",[t._v("Epidemiologists are very concerned about the process by which infectious diseases spread. In the era of COVID-19 outbreak, the SEPIAR mechanism can completely describe the transmission process. With the subdivided extension, the modeling of most scenes can be completed.")]),a("p",[t._v("Based on this model, epidemiologists can: * Introduce a subdivided model to model any factors that may affect the spread of the epidemic, such as age, income, country, population mobility, etc. * Review or deduce the effects of arbitrary policies(More than 20 categories in total, covering the vast majority of specific policies for all countries) by writing code-free configuration files.")]),t._m(1),a("p",[t._v("Obtain the model’s review(history) or deduction(future) results for the epidemic without using code.")]),a("br"),a("p",{staticClass:"title"},[t._v("NPI Deduction")]),a("a-divider",{staticStyle:{margin:"10px 0","background-image":"linear-gradient(to right,  rgb(103, 179, 241),  rgb(103, 179, 241), #f6f6f6, #f6f6f6)"}}),a("p",[t._v("LibEpidemic use SEPIAR model and the deduction library to help you modeling NPI. The deduction library consists of several items, each of which contains a policy, a 0/1 flag, several data and several parameters. Among them, the policy is described by a natural language string, and the 0/1 mark indicates whether the policy participates in the deduction. The data includes the settings of the policy itself and other data that need to affect the parameters. The parameters are the parameters corresponding to this deduction item.")]),a("p",[t._v("For example, the policy of “deduce the effect of vaccines” has a 0/1 mark. The data are divided into 4 categories: VEI (infection protection rate), VES (symptomatic protection rate), correction of vaccination shots, and vaccination coverage. The first two categories are the settings of the policy itself, usually constants or epidemiological characteristic numbers, and the last two categories are other data affecting parameters. The parameters corresponding to this deduction item are β(S->E) and trans_PA(P->A).")]),a("br"),a("p",{staticClass:"title"},[t._v("SEPIAR Model")]),a("a-divider",{staticStyle:{margin:"10px 0","background-image":"linear-gradient(to right,  rgb(103, 179, 241),  rgb(103, 179, 241), #f6f6f6, #f6f6f6)"}}),a("p",[t._v("The strcture of SEPIAR model can be seen at NPI/SEPIAR_graph.py.")]),t._m(2),a("p",[t._v("The formula and default parameters of SEPIAR model can be seen at NPI/base_NPI_model.py.")]),t._m(3),a("p",[t._v("LibEpidemic use these structure and formula to construct SEPIAR model, then use no-code setting file to help user deduct NPI.")]),a("br")],1)])},i=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"header"},[a("div",{staticStyle:{"padding-top":"20px",color:"white"}},[a("p",{staticStyle:{margin:"20px 0 30px 130px","font-size":"60px"}},[t._v("NPI Modeling")]),a("p",{staticStyle:{margin:"0px 0 20px 130px","font-size":"30px"}},[t._v(" This page will help you quickly know the how to modeling and deducting NPI with LibEpidemic. ")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ul",[a("li",[t._v("social control policy")]),a("li",[t._v("Case handling policy")]),a("li",[t._v("vaccine policy")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"code"},[a("code",{attrs:{"data-lang":"python"}},[t._v(" def get_eqs():"),a("br"),t._v(" graph = Graph('SEPIIsR', 'S')"),a("br"),t._v(" vertical_divide(graph, 'S', ['E', 'P', 'I', 'R'])"),a("br"),t._v(" horizontal_divide(graph, 'I', ['A'])"),a("br"),t._v(" vertical_divide(graph, 'I', ['Is'])"),a("br"),t._v(" horizontal_divide(graph, 'Is', ['Is_ct'])"),a("br"),t._v(" graph.add_single_node('Income')"),a("br"),t._v(" add_path(graph, 'E', 'Is')"),a("br"),t._v(" add_path(graph, 'Income', 'I')"),a("br"),t._v(" add_path(graph, 'P', 'Is')"),a("br"),t._v(" model = Model('SEIR_eqs', graph)"),a("br"),t._v(" return model ")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"code"},[a("code",{attrs:{"data-lang":"python"}},[t._v(" def get_model(r0, hidden, infect, confirm, sym_ratio, ct_ratio, remove, income, contact_ratio, s0, i0):"),a("br"),t._v(" model = get_eqs()"),a("br"),t._v(" inf = 2147483647.0"),a("br"),t._v(" popu = s0 + i0"),a("br"),a("br"),t._v(" set_path_exp(model, 'Income', 'I', 'income')"),a("br"),t._v(" set_path_parameters(model, 'Income', 'I', 'income', income)"),a("br"),a("br"),t._v(" set_path_exp(model, 'S', 'E', 'betaI*I*S*n+betaP*P*S*n+betaasym*Is_ct*S*n+betaasym*A*S*n')"),a("br"),t._v(" set_path_parameters(model, 'S', 'E', 'betaI', 0.1 * r0)"),a("br"),t._v(" set_path_parameters(model, 'S', 'E', 'betaP', r0)"),a("br"),t._v(" set_path_parameters(model, 'S', 'E', 'betaasym', 0.2 * r0)"),a("br"),t._v(" set_path_parameters(model, 'S', 'E', 'n', 1.0 / popu)"),a("br"),a("br"),t._v(" set_path_exp(model, 'E', 'P', 'gamma*E*nocontact')"),a("br"),t._v(" set_path_parameters(model, 'E', 'P', 'gamma', 1.0 / hidden)"),a("br"),t._v(" set_path_parameters(model, 'E', 'P', 'nocontact', 1.0 - contact_ratio)"),a("br"),a("br"),t._v(" set_path_exp(model, 'E', 'Is', 'E*contact')"),a("br"),t._v(" set_path_parameters(model, 'E', 'Is', 'contact', contact_ratio)"),a("br"),a("br"),t._v(" set_path_exp(model, 'P', 'I', 'alpha*P*sym*nocontact')"),a("br"),t._v(" set_path_parameters(model, 'P', 'I', 'alpha', 1.0 / infect)"),a("br"),t._v(" set_path_parameters(model, 'P', 'I', 'sym', sym_ratio)"),a("br"),t._v(" set_path_parameters(model, 'P', 'I', 'nocontact', 1.0 - contact_ratio)"),a("br"),a("br"),t._v(" set_path_exp(model, 'P', 'A', 'alpha*P*asym*nocontact')"),a("br"),t._v(" set_path_parameters(model, 'P', 'A', 'alpha', 1.0 / infect)"),a("br"),t._v(" set_path_parameters(model, 'P', 'A', 'asym', 1.0 - sym_ratio)"),a("br"),t._v(" set_path_parameters(model, 'P', 'A', 'nocontact', 1.0 - contact_ratio)"),a("br"),a("br"),t._v(" set_path_exp(model, 'P', 'Is', 'P*contact')"),a("br"),t._v(" set_path_parameters(model, 'P', 'Is', 'contact', contact_ratio)"),a("br"),a("br"),t._v(" set_path_exp(model, 'I', 'Is', 'confirm*I*noct')"),a("br"),t._v(" set_path_parameters(model, 'I', 'Is', 'confirm', 1.0 / confirm)"),a("br"),t._v(" set_path_parameters(model, 'I', 'Is', 'noct', 1.0 - ct_ratio)"),a("br"),a("br"),t._v(" set_path_exp(model, 'I', 'Is_ct', 'confirm*I*ct')"),a("br"),t._v(" set_path_parameters(model, 'I', 'Is_ct', 'confirm', 1.0 / confirm)"),a("br"),t._v(" set_path_parameters(model, 'I', 'Is_ct', 'ct', ct_ratio)"),a("br"),a("br"),t._v(" set_path_exp(model, 'Is', 'R', 'remove*Is')"),a("br"),t._v(" set_path_parameters(model, 'Is', 'R', 'remove', 1.0 / remove)"),a("br"),a("br"),t._v(" set_path_exp(model, 'Is_ct', 'R', 'remove_ct*Is_ct')"),a("br"),t._v(" set_path_parameters(model, 'Is_ct', 'R', 'remove_ct', 1.0 / remove)"),a("br"),a("br"),t._v(" set_path_exp(model, 'A', 'R', 'remove_A*A')"),a("br"),t._v(" set_path_parameters(model, 'A', 'R', 'remove_A', 1.0 / remove)"),a("br"),a("br"),t._v(" init_value = {'S': s0, 'E': 10.0 * i0, 'P': 3.0 * i0, 'I': i0, 'Is_ct': 0.0, 'Is': 0.0, 'A': 0.0, 'R': 0.0,"),a("br"),t._v(" 'Income': inf}"),a("br"),t._v(" init_compartment(model, init_value)"),a("br"),t._v(" return model ")])])}],s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("table",[t._m(0),a("tbody",t._l(t.rankdata,(function(e){return a("tr",{key:e.dataset},[a("td",{attrs:{width:"15%"}},[a("a",{staticClass:"dataset",attrs:{href:e.datasetlink,target:"_blank"}},[t._v(t._s(e.dataset))])]),a("td",{attrs:{width:"15%"}},[a("a-icon",{staticStyle:{color:"gold","font-size":"20px"},attrs:{type:"crown"}}),t._v(t._s(e.best)+" ")],1),a("td",{attrs:{width:"55%"}},[a("a",{staticClass:"paper",attrs:{href:e.plink,target:"_blank"}},[t._v(t._s(e.paper))])]),a("td",{attrs:{width:"15%"}},[a("a-button",{attrs:{type:"primary",shape:"round"},on:{click:function(a){return t.toDatasetRanking(e.dlink)}}},[t._v("See All")])],1)])})),0)])},o=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("thead",[a("tr",[a("th",[t._v("DATASET")]),a("th",[t._v("BEST METHOD")]),a("th",[t._v("PAPER")]),a("th",[t._v("COMAPRE")])])])}],n={name:"table",props:{rankdata:{type:Array,required:!0}},data:function(){return{}},methods:{toDatasetRanking:function(t){this.$router.push({name:t})}}},d=n,c=(a("6071"),a("2877")),l=Object(c["a"])(d,s,o,!1,null,null,null),p=l.exports,_=[{dataset:"METR-LA",best:"MTGNN",paper:"[KDD2020]Connecting the Dots: Multivariate Time Series Forecasting with Graph Neural Networks",datasetlink:"https://bigscity-libcity-docs.readthedocs.io/en/latest/user_guide/data/raw_data.html#metr-la",mlink:"#",plink:"https://arxiv.org/abs/2005.11650",dlink:"METR-LA"},{dataset:"PEMS-BAY",best:"GWNET",paper:"[IJCAI2019]Graph Wavenet for Deep Spatial-Temporal Graph Modeling",datasetlink:"https://bigscity-libcity-docs.readthedocs.io/en/latest/user_guide/data/raw_data.html#pems-bay",mlink:"#",plink:"https://arxiv.org/abs/1906.00121",dlink:"PEMS-BAY"},{dataset:"PEMSD4",best:"GWNET",paper:"[IJCAI2019]Graph Wavenet for Deep Spatial-Temporal Graph Modeling",datasetlink:"https://bigscity-libcity-docs.readthedocs.io/en/latest/user_guide/data/raw_data.html#pemsd4",mlink:"#",plink:"https://arxiv.org/abs/1906.00121",dlink:"PEMSD4"},{dataset:"PEMSD8",best:"GWNET",paper:"[IJCAI2019]Graph Wavenet for Deep Spatial-Temporal Graph Modeling",datasetlink:"https://bigscity-libcity-docs.readthedocs.io/en/latest/user_guide/data/raw_data.html#pemsd8",mlink:"#",plink:"https://arxiv.org/abs/1906.00121",dlink:"PEMSD8"},{dataset:"T-Drive20150206",best:"MTGNN",paper:"[KDD2020]Connecting the Dots: Multivariate Time Series Forecasting with Graph Neural Networks",datasetlink:"https://bigscity-libcity-docs.readthedocs.io/en/latest/user_guide/data/raw_data.html#t-drive20150206",mlink:"#",plink:"https://arxiv.org/abs/2005.11650",dlink:"T-Drive20150206"},{dataset:"TAXIBJ2015",best:"AGCRN",paper:"[NeurIPS2020]Adaptive Graph Convolutional Recurrent Network for Traffic Forecasting",datasetlink:"https://bigscity-libcity-docs.readthedocs.io/en/latest/user_guide/data/raw_data.html#taxibj",mlink:"#",plink:"https://arxiv.org/abs/2007.02842",dlink:"TAXIBJ2015"},{dataset:"NYCTAXI202001-202003-3600",best:"DCRNN",paper:"[ICLR2018]Diffusion Convolutional Recurrent Neural Network: Data-Driven Traffic Forecasting",datasetlink:"#",mlink:"#",plink:"https://arxiv.org/abs/1707.01926",dlink:"NYCTAXI202001-202003-3600"},{dataset:"NYCBike20140409",best:"MTGNN",paper:"[KDD2020]Connecting the Dots: Multivariate Time Series Forecasting with Graph Neural Networks",datasetlink:"https://bigscity-libcity-docs.readthedocs.io/en/latest/user_guide/data/raw_data.html#nycbike20140409",mlink:"#",plink:"https://arxiv.org/abs/2005.11650",dlink:"NYCBike20140409"}],m=[{dataset:"foursqaure-tky",best:"DeepMove",paper:"[WWW2018]DeepMove: Predicting Human Mobility with Attentional Recurrent Networks",datasetlink:"https://bigscity-libcity-docs.readthedocs.io/en/latest/user_guide/data/raw_data.html#foursquare",mlink:"#",plink:"https://dl.acm.org/doi/10.1145/3178876.3186058",dlink:"foursqaure-tky"},{dataset:"Gowalla",best:"DeepMove",paper:"[WWW2018]DeepMove: Predicting Human Mobility with Attentional Recurrent Networks",datasetlink:"https://bigscity-libcity-docs.readthedocs.io/en/latest/user_guide/data/raw_data.html#gowalla",mlink:"#",plink:"https://dl.acm.org/doi/10.1145/3178876.3186058",dlink:"Gowalla"}],h={data:function(){return{speed:_,location:m}},components:{rankTable:p}},b=h,v=(a("c7a6"),Object(c["a"])(b,r,i,!1,null,"394ebe95",null));e["default"]=v.exports},6071:function(t,e,a){"use strict";a("0a65")},c7a6:function(t,e,a){"use strict";a("d412")},d412:function(t,e,a){}}]);
//# sourceMappingURL=chunk-8598bd06.b65dedc4.js.map