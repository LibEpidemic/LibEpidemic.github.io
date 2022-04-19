(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-729aa1d9"],{"7c12":function(e,t,o){},"7dfa":function(e,t,o){"use strict";o("7c12")},b216:function(e,t,o){"use strict";o.r(t);var a=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"container"},[e._m(0),o("div",{staticClass:"content"},[o("p",{staticClass:"title"},[e._v("Download One Dataset")]),o("a-divider",{staticStyle:{margin:"10px 0","background-image":"linear-gradient(to right,  rgb(103, 179, 241),  rgb(103, 179, 241), #f6f6f6, #f6f6f6)"}}),e._m(1),o("p",[e._v("For example, if you download the METR_LA dataset, the directorys structure is as follows:")]),o("br"),o("p",{staticClass:"title"},[e._v("Run Model Pipeline")]),o("a-divider",{staticStyle:{margin:"10px 0","background-image":"linear-gradient(to right,  rgb(103, 179, 241),  rgb(103, 179, 241), #f6f6f6, #f6f6f6)"}}),e._m(2),e._m(3),e._m(4),o("p",[e._v("This script will run the GRU model on the METR_LA dataset for traffic state prediction task under the default configuration.")]),o("p",[e._v("Furthermore, the script supports the input of the following command line parameters to adjust the parameter settings of the pipeline.")]),o("p",[e._v("Supporting parameters:")]),e._m(5),o("br")],1)])},i=[function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"header"},[o("div",{staticStyle:{"padding-top":"20px",color:"white"}},[o("p",{staticStyle:{margin:"20px 0 30px 130px","font-size":"60px"}},[e._v("Quick Start")]),o("p",{staticStyle:{margin:"0px 0 20px 130px","font-size":"30px"}},[e._v(" This page will help you quickly know the basic usages of LibEpidemic. ")])])])},function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("p",[e._v("You can simply download the datasets we have processed, the data link is "),o("a",{attrs:{href:"https://pan.baidu.com/s/1qEfcXBO-QwZfiT0G3IYMpQ#list/path=%2F",target:"_blank"}},[e._v("BaiduDisk with code 1231")]),e._v(" or "),o("a",{attrs:{href:"https://drive.google.com/drive/folders/1g5v2Gq1tkOq8XO0HDCZ9nOTtRpB6-gPe?usp=sharing"}},[e._v("Google Drive")]),e._v(".")])},function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("p",[e._v("The script "),o("code",{staticStyle:{color:"#e83e8c","font-size":"90%"}},[e._v("run_model.py")]),e._v(" used for training and evaluating a single model is provided in the root directory of the framework, and a series of command line parameters are provided to allow users to adjust the running parameter configuration.")])},function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("p",[e._v("When run the "),o("code",{staticStyle:{color:"#e83e8c","font-size":"90%"}},[e._v("run_model.py")]),e._v(", you must specify the following three parameters, namely "),o("b",[e._v("task")]),e._v(", "),o("b",[e._v("dataset")]),e._v(" and "),o("b",[e._v("model")]),e._v(". For example:")])},function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"code"},[o("code",{attrs:{"data-lang":"bash"}},[e._v(" python run_model.py --task traffic_state_pred --model GRU --dataset METR_LA ")])])},function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ul",[o("li",[o("code",{staticStyle:{color:"#e83e8c","font-size":"90%"}},[e._v("task")]),e._v(": The name of the task to be performed, including "),o("code",{staticStyle:{color:"#e83e8c","font-size":"90%"}},[e._v("traffic_state_pred")]),e._v(" and "),o("code",{staticStyle:{color:"#e83e8c","font-size":"90%"}},[e._v("traj_loc_pred")]),e._v(". Defaults to "),o("code",{staticStyle:{color:"#e83e8c","font-size":"90%"}},[e._v("None")]),e._v(".")]),o("li",[o("code",{staticStyle:{color:"#e83e8c","font-size":"90%"}},[e._v("saved_model")]),e._v("：Whether to save the trained model. Defaults to "),o("code",{staticStyle:{color:"#e83e8c","font-size":"90%"}},[e._v("True")]),e._v(".")]),o("li",[o("code",{staticStyle:{color:"#e83e8c","font-size":"90%"}},[e._v("train")]),e._v("：If the model has been pre-trained, whether to retrain the model. Defaults to "),o("code",{staticStyle:{color:"#e83e8c","font-size":"90%"}},[e._v("True")]),e._v(".")]),o("li",[o("code",{staticStyle:{color:"#e83e8c","font-size":"90%"}},[e._v("batch_size")]),e._v("：The training and evaluation batch size.")]),o("li",[o("code",{staticStyle:{color:"#e83e8c","font-size":"90%"}},[e._v("train_rate")]),e._v("：The proportion of the training set to the total dataset. (The order of division is training set, validation set, test set)")]),o("li",[o("code",{staticStyle:{color:"#e83e8c","font-size":"90%"}},[e._v("eval_rate")]),e._v("：The proportion of the validation set.")]),o("li",[o("code",{staticStyle:{color:"#e83e8c","font-size":"90%"}},[e._v("learning_rate")]),e._v("：Learning_rate. The default learning rate of different models may be different, please refer to the corresponding configuration file for details.")]),o("li",[o("code",{staticStyle:{color:"#e83e8c","font-size":"90%"}},[e._v("max_epoch")]),e._v("：Maximum rounds of training. The default value varies with the model.")]),o("li",[o("code",{staticStyle:{color:"#e83e8c","font-size":"90%"}},[e._v("gpu")]),e._v("：Whether to use GPU. Defaults to "),o("code",{staticStyle:{color:"#e83e8c","font-size":"90%"}},[e._v("True")]),e._v(".")]),o("li",[o("code",{staticStyle:{color:"#e83e8c","font-size":"90%"}},[e._v("gpu_id")]),e._v("：The id of the GPU used. Defaults to "),o("code",{staticStyle:{color:"#e83e8c","font-size":"90%"}},[e._v("0")]),e._v(".")])])}],r={data:function(){return{}},components:{}},s=r,n=(o("7dfa"),o("2877")),c=Object(n["a"])(s,a,i,!1,null,"58619b37",null);t["default"]=c.exports}}]);
//# sourceMappingURL=chunk-729aa1d9.a3066587.js.map