(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7eb3bfdb"],{"1d21":function(e,t,o){"use strict";o.r(t);var i=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"container"},[e._m(0),o("div",{staticClass:"content"},[o("p",{staticClass:"title"},[e._v("Standard Track")]),o("a-divider",{staticStyle:{margin:"10px 0","background-image":"linear-gradient(to right,  rgb(103, 179, 241),  rgb(103, 179, 241), #f6f6f6, #f6f6f6)"}}),o("p",[e._v("LibEpidemic has implemented a set of standard tracks for each task. On the standard track, the original data set, standard data module (Data module), and standard evaluation module (Evaluator module) provided by LibEpidemic are used to constrain different models to use the same data input and evaluation indicators to improve the comparability of evaluation results.")]),o("p",[e._v("The standard data input format and evaluation input format for different tasks are explained below:")]),o("br"),o("p",{staticClass:"sectitle"},[e._v("Traffic State Prediction")]),o("a-divider",{staticStyle:{margin:"10px 0","background-image":"linear-gradient(to right,  rgb(103, 179, 241),  rgb(103, 179, 241), #f6f6f6, #f6f6f6)"}}),o("p",[e._v("According to the different spatial structure of traffic data, traffic state data can generally be represented by tensors in the following formats:")]),e._m(1),e._m(2),o("p",[e._v("The standard evaluation input format is a dictionary object, and the dictionary has the following key names:")]),e._m(3),o("br"),o("p",{staticClass:"sectitle"},[e._v("Trajectory Next-Location Prediction")]),o("a-divider",{staticStyle:{margin:"10px 0","background-image":"linear-gradient(to right,  rgb(103, 179, 241),  rgb(103, 179, 241), #f6f6f6, #f6f6f6)"}}),e._m(4),o("p",[e._v("The standard evaluation input format is a dictionary object, and the dictionary has the following key names:")]),e._m(5),o("br"),o("p",{staticClass:"sectitle"},[e._v("Map Matching")]),o("a-divider",{staticStyle:{margin:"10px 0","background-image":"linear-gradient(to right,  rgb(103, 179, 241),  rgb(103, 179, 241), #f6f6f6, #f6f6f6)"}}),o("p",[e._v("The standard data input format is a dictionary. The key names of this object are as follows:")]),e._m(6),o("p",[e._v("The standard evaluation input format is a dictionary object, and the dictionary has the following key names:")]),e._m(7),o("br"),o("p",{staticClass:"sectitle"},[e._v("Estimated Time of Arrival")]),o("a-divider",{staticStyle:{margin:"10px 0","background-image":"linear-gradient(to right,  rgb(103, 179, 241),  rgb(103, 179, 241), #f6f6f6, #f6f6f6)"}}),e._m(8),o("p",[e._v("The standard evaluation input format is a dictionary object, and the dictionary has the following key names:")]),e._m(9),o("br")],1)])},c=[function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"header"},[o("div",{staticStyle:{"padding-top":"20px",color:"white"}},[o("p",{staticStyle:{margin:"20px 0 30px 130px","font-size":"60px"}},[e._v("Task")]),o("p",{staticStyle:{margin:"0px 0 20px 130px","font-size":"30px"}},[e._v(" LibEpidemic has implemented a set of standard tracks for each supported "),o("br"),e._v(" spatio-temporal data mining task to improve comparability of models. ")])])])},function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ul",[o("li",[e._v("A three-dimensional tensor shaped like "),o("code",{staticStyle:{color:"#e83e8c","font-size":"90%"}},[e._v("(N,T,F)")]),e._v(", "),o("code",{staticStyle:{color:"#e83e8c","font-size":"90%"}},[e._v("T")]),e._v(" is the length of time, "),o("code",{staticStyle:{color:"#e83e8c","font-size":"90%"}},[e._v("F")]),e._v(" is the feature dimension, and "),o("code",{staticStyle:{color:"#e83e8c","font-size":"90%"}},[e._v("N")]),e._v(" is the number of sensors.")]),o("li",[e._v("A four-dimensional tensor shaped like "),o("code",{staticStyle:{color:"#e83e8c","font-size":"90%"}},[e._v("(T,F,I,J)")]),e._v(", "),o("code",{staticStyle:{color:"#e83e8c","font-size":"90%"}},[e._v("T")]),e._v(" is the length of time, "),o("code",{staticStyle:{color:"#e83e8c","font-size":"90%"}},[e._v("F")]),e._v(" is the feature dimension, and "),o("code",{staticStyle:{color:"#e83e8c","font-size":"90%"}},[e._v("I,J")]),e._v(" represents the row and column index of the grid data.")]),o("li",[e._v("A four-dimensional tensor shaped like "),o("code",{staticStyle:{color:"#e83e8c","font-size":"90%"}},[e._v("(T,F,S,T)")]),e._v(", "),o("code",{staticStyle:{color:"#e83e8c","font-size":"90%"}},[e._v("T")]),e._v(" is the length of time, "),o("code",{staticStyle:{color:"#e83e8c","font-size":"90%"}},[e._v("F")]),e._v(" is the feature dimension, and "),o("code",{staticStyle:{color:"#e83e8c","font-size":"90%"}},[e._v("S,T")]),e._v(" represents the id of the origin and destination of the "),o("code",{staticStyle:{color:"#e83e8c","font-size":"90%"}},[e._v("od")]),e._v(" data.")]),o("li",[e._v("A six-dimensional tensor shaped like "),o("code",{staticStyle:{color:"#e83e8c","font-size":"90%"}},[e._v("(T,F,SI,SJ,TI,TJ)")]),e._v(", "),o("code",{staticStyle:{color:"#e83e8c","font-size":"90%"}},[e._v("T")]),e._v(" is the length of time, "),o("code",{staticStyle:{color:"#e83e8c","font-size":"90%"}},[e._v("F")]),e._v(" is the feature dimension, "),o("code",{staticStyle:{color:"#e83e8c","font-size":"90%"}},[e._v("(SI,SJ,TI,TJ)")]),e._v(" represents the row and column index of the origin and destination of the "),o("code",{staticStyle:{color:"#e83e8c","font-size":"90%"}},[e._v("grid-od")]),e._v(" data.")])])},function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ul",[o("li",[o("code",{staticStyle:{color:"#e83e8c","font-size":"90%"}},[e._v("X")]),e._v(": The multi-dimensional tensor input by the model, "),o("code",{staticStyle:{color:"#e83e8c","font-size":"90%"}},[e._v("shape = (batch_size, T_in, space_dim, feature_dim)")]),e._v(", each dimension represents the total number of samples in the batch, the width of the input time window, the spatial dimension, and the data feature dimension. In particular, the spatial dimension can be "),o("code",{staticStyle:{color:"#e83e8c","font-size":"90%"}},[e._v("N")]),e._v(" or "),o("code",{staticStyle:{color:"#e83e8c","font-size":"90%"}},[e._v("I,J")]),e._v(" or "),o("code",{staticStyle:{color:"#e83e8c","font-size":"90%"}},[e._v("S,T")]),e._v(" or "),o("code",{staticStyle:{color:"#e83e8c","font-size":"90%"}},[e._v("SI, SJ, TI, TJ")]),e._v(" as mentioned above.")]),o("li",[o("code",{staticStyle:{color:"#e83e8c","font-size":"90%"}},[e._v("y")]),e._v(": The multi-dimensional tensor that the model expects to output, "),o("code",{staticStyle:{color:"#e83e8c","font-size":"90%"}},[e._v("shape = (batch_size, T_out, space_dim, feature_dim)")]),e._v(", each dimension represents the total number of samples in the batch, the width of the output time window, the spatial dimension, and the data feature dimension. Among them, the spatial dimension can be "),o("code",{staticStyle:{color:"#e83e8c","font-size":"90%"}},[e._v("N")]),e._v(" or "),o("code",{staticStyle:{color:"#e83e8c","font-size":"90%"}},[e._v("I,J")]),e._v(" or "),o("code",{staticStyle:{color:"#e83e8c","font-size":"90%"}},[e._v("S,T")]),e._v(" or "),o("code",{staticStyle:{color:"#e83e8c","font-size":"90%"}},[e._v("SI, SJ, TI, TJ")]),e._v(" as mentioned above.")]),o("li",[o("code",{staticStyle:{color:"#e83e8c","font-size":"90%"}},[e._v("X_ext")]),e._v(": Optional external data, "),o("code",{staticStyle:{color:"#e83e8c","font-size":"90%"}},[e._v("shape = (batch_size, T_in, ext_dim)")]),e._v(", each dimension represents the total number of samples in the batch, the width of the input time window, and the feature dimension of the external data. "),o("strong",[e._v("In particular, some models may directly incorporate "),o("code",{staticStyle:{color:"#e83e8c","font-size":"90%"}},[e._v("X_ext")]),e._v(" into "),o("code",{staticStyle:{color:"#e83e8c","font-size":"90%"}},[e._v("X")]),e._v(" as the input of the model.")])]),o("li",[o("code",{staticStyle:{color:"#e83e8c","font-size":"90%"}},[e._v("y_ext")]),e._v(": Optional external data, "),o("code",{staticStyle:{color:"#e83e8c","font-size":"90%"}},[e._v("shape = (batch_size, T_out, ext_dim)")]),e._v(", each dimension represents the total number of samples in the batch, the width of the output time window, and the feature dimension of the external data.")])])},function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ul",[o("li",[o("code",{staticStyle:{color:"#e83e8c","font-size":"90%"}},[e._v("y_true")]),e._v(": The ground-truth value, the format is the same as the "),o("code",{staticStyle:{color:"#e83e8c","font-size":"90%"}},[e._v("y")]),e._v(" in the input.")]),o("li",[o("code",{staticStyle:{color:"#e83e8c","font-size":"90%"}},[e._v("y_pred")]),e._v(": The prediction value, the format is the same as the "),o("code",{staticStyle:{color:"#e83e8c","font-size":"90%"}},[e._v("y")]),e._v(" in the input.")])])},function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ul",[o("li",[o("code",{staticStyle:{color:"#e83e8c","font-size":"90%"}},[e._v("history_loc")]),e._v(": Historical trajectory location information, "),o("code",{staticStyle:{color:"#e83e8c","font-size":"90%"}},[e._v("shape = (batch_size, history_len)")]),e._v(", "),o("code",{staticStyle:{color:"#e83e8c","font-size":"90%"}},[e._v("history_len")]),e._v(" is the length of the historical trajectory.")]),o("li",[o("code",{staticStyle:{color:"#e83e8c","font-size":"90%"}},[e._v("history_tim")]),e._v(": Historical trajectory time information, "),o("code",{staticStyle:{color:"#e83e8c","font-size":"90%"}},[e._v("shape = (batch_size, history_len)")]),e._v(".")]),o("li",[o("code",{staticStyle:{color:"#e83e8c","font-size":"90%"}},[e._v("current_loc")]),e._v(": Current trajectory location information, "),o("code",{staticStyle:{color:"#e83e8c","font-size":"90%"}},[e._v("shape = (batch_size, current_len)")]),e._v(", "),o("code",{staticStyle:{color:"#e83e8c","font-size":"90%"}},[e._v("current_len")]),e._v(" is the length of the current trajectory.")]),o("li",[o("code",{staticStyle:{color:"#e83e8c","font-size":"90%"}},[e._v("current_tim")]),e._v(": Current trajectory time information, "),o("code",{staticStyle:{color:"#e83e8c","font-size":"90%"}},[e._v("shape = (batch_size, current_len)")]),e._v(".")]),o("li",[o("code",{staticStyle:{color:"#e83e8c","font-size":"90%"}},[e._v("uid")]),e._v(": The ID of the user for each trajectory, "),o("code",{staticStyle:{color:"#e83e8c","font-size":"90%"}},[e._v("shape = (batch_size)")]),e._v(".")]),o("li",[o("code",{staticStyle:{color:"#e83e8c","font-size":"90%"}},[e._v("target")]),e._v(": Expected next hop location, "),o("code",{staticStyle:{color:"#e83e8c","font-size":"90%"}},[e._v("shape = (batch_size)")]),e._v(".")])])},function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ul",[o("li",[o("code",{staticStyle:{color:"#e83e8c","font-size":"90%"}},[e._v("uid")]),e._v(": The id of the user for each trajectory, "),o("code",{staticStyle:{color:"#e83e8c","font-size":"90%"}},[e._v("shape = (batch_size)")]),e._v(".")]),o("li",[o("code",{staticStyle:{color:"#e83e8c","font-size":"90%"}},[e._v("loc_true")]),e._v(": Expected next hop location, "),o("code",{staticStyle:{color:"#e83e8c","font-size":"90%"}},[e._v("shape = (batch_size)")]),e._v(".")]),o("li",[o("code",{staticStyle:{color:"#e83e8c","font-size":"90%"}},[e._v("loc_pred")]),e._v(": Model prediction output, "),o("code",{staticStyle:{color:"#e83e8c","font-size":"90%"}},[e._v("shape = (batch_size, output_dim)")]),e._v(".")])])},function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ul",[o("li",[o("code",{staticStyle:{color:"#e83e8c","font-size":"90%"}},[e._v("trajectory")]),e._v(": The format of "),o("code",{staticStyle:{color:"#e83e8c","font-size":"90%"}},[e._v("trajectory")]),e._v(" can be denoted as "),o("code",{staticStyle:{color:"#e83e8c","font-size":"90%"}},[e._v('{"usr_id":{"traj_id":{numpy.ndarray}}}')]),e._v(". That is to say, the key of "),o("code",{staticStyle:{color:"#e83e8c","font-size":"90%"}},[e._v("trajectory")]),e._v(" is "),o("code",{staticStyle:{color:"#e83e8c","font-size":"90%"}},[e._v("usr_id")]),e._v(". Each "),o("code",{staticStyle:{color:"#e83e8c","font-size":"90%"}},[e._v("usr_id")]),e._v(" has a dictionary, the key of which is "),o("code",{staticStyle:{color:"#e83e8c","font-size":"90%"}},[e._v("traj_id")]),e._v(". For each "),o("code",{staticStyle:{color:"#e83e8c","font-size":"90%"}},[e._v("traj_id")]),e._v(", there’s a "),o("code",{staticStyle:{color:"#e83e8c","font-size":"90%"}},[e._v("numpy.ndarray")]),e._v(", representing a sequence of chronologically ordered spatial points sampled from a continuously moving object, with "),o("code",{staticStyle:{color:"#e83e8c","font-size":"90%"}},[e._v("columns=(index,longitude,latitude,time)")]),e._v(" or "),o("code",{staticStyle:{color:"#e83e8c","font-size":"90%"}},[e._v("columns=(index,longitude,latitude)")]),e._v(". The length of trajectory is noted as "),o("code",{staticStyle:{color:"#e83e8c","font-size":"90%"}},[e._v("num_sample")]),e._v(".")]),o("li",[o("code",{staticStyle:{color:"#e83e8c","font-size":"90%"}},[e._v("rd_nwk")]),e._v(": A road network with type "),o("code",{staticStyle:{color:"#e83e8c","font-size":"90%"}},[e._v("networkx.classes.digraph.DiGraph")]),e._v(".")]),o("li",[o("code",{staticStyle:{color:"#e83e8c","font-size":"90%"}},[e._v("route")]),e._v(": The format of "),o("code",{staticStyle:{color:"#e83e8c","font-size":"90%"}},[e._v("route")]),e._v(" can be denoted as "),o("code",{staticStyle:{color:"#e83e8c","font-size":"90%"}},[e._v('{"usr_id":{"traj_id":{numpy.ndarray}}}')]),e._v(". It is similar to "),o("code",{staticStyle:{color:"#e83e8c","font-size":"90%"}},[e._v("trajectory")]),e._v(". The value of "),o("code",{staticStyle:{color:"#e83e8c","font-size":"90%"}},[e._v("route")]),e._v(" is a "),o("code",{staticStyle:{color:"#e83e8c","font-size":"90%"}},[e._v("numpy.ndarray")]),e._v(" of "),o("code",{staticStyle:{color:"#e83e8c","font-size":"90%"}},[e._v("geo_id")]),e._v(" with "),o("code",{staticStyle:{color:"#e83e8c","font-size":"90%"}},[e._v("shape=(num_road,)")]),e._v(", representing ground truth. "),o("code",{staticStyle:{color:"#e83e8c","font-size":"90%"}},[e._v("num_road")]),e._v(" is the length of real route.")])])},function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ul",[o("li",[o("code",{staticStyle:{color:"#e83e8c","font-size":"90%"}},[e._v("result")]),e._v(": The format of "),o("code",{staticStyle:{color:"#e83e8c","font-size":"90%"}},[e._v("result")]),e._v(" is almost the same as that of "),o("code",{staticStyle:{color:"#e83e8c","font-size":"90%"}},[e._v("route")]),e._v(" in standard data input. The value of "),o("code",{staticStyle:{color:"#e83e8c","font-size":"90%"}},[e._v("result")]),e._v(" is a "),o("code",{staticStyle:{color:"#e83e8c","font-size":"90%"}},[e._v("numpy.ndarray")]),e._v(" of "),o("code",{staticStyle:{color:"#e83e8c","font-size":"90%"}},[e._v("geo_id")]),e._v(" with "),o("code",{staticStyle:{color:"#e83e8c","font-size":"90%"}},[e._v("shape=(num_sample,)")]),e._v(", representing matching result. "),o("code",{staticStyle:{color:"#e83e8c","font-size":"90%"}},[e._v("num_sample")]),e._v(" is the number of GPS samples in the trajectory.")]),o("li",[o("code",{staticStyle:{color:"#e83e8c","font-size":"90%"}},[e._v("route")]),e._v(": As depicted in standard data input.")]),o("li",[o("code",{staticStyle:{color:"#e83e8c","font-size":"90%"}},[e._v("rd_nwk")]),e._v(": As depicted in standard data input.")])])},function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ul",[o("li",[o("code",{staticStyle:{color:"#e83e8c","font-size":"90%"}},[e._v("current_loc/(current_longi, current_lati)")]),e._v(": Trajectory location information, "),o("code",{staticStyle:{color:"#e83e8c","font-size":"90%"}},[e._v("shape = (batch_size, traj_len)")]),e._v(", "),o("code",{staticStyle:{color:"#e83e8c","font-size":"90%"}},[e._v("traj_len")]),e._v(" is the length of the trajectory.")]),o("li",[o("code",{staticStyle:{color:"#e83e8c","font-size":"90%"}},[e._v("uid")]),e._v(": The id of the user for each trajectory, "),o("code",{staticStyle:{color:"#e83e8c","font-size":"90%"}},[e._v("shape = (batch_size)")]),e._v(".")]),o("li",[o("code",{staticStyle:{color:"#e83e8c","font-size":"90%"}},[e._v("timeid(weekid)")]),e._v(": Time information when the trajectory starts, "),o("code",{staticStyle:{color:"#e83e8c","font-size":"90%"}},[e._v("shape = (batch_size)")]),e._v(".")]),o("li",[o("code",{staticStyle:{color:"#e83e8c","font-size":"90%"}},[e._v("dist")]),e._v(": The total distance of the trajectory, "),o("code",{staticStyle:{color:"#e83e8c","font-size":"90%"}},[e._v("shape = (batch_size)")]),e._v(".")]),o("li",[e._v("Other information, such as "),o("code",{staticStyle:{color:"#e83e8c","font-size":"90%"}},[e._v("current_dis")]),e._v(" (the distance from starting point to current point, "),o("code",{staticStyle:{color:"#e83e8c","font-size":"90%"}},[e._v("shape = (batch_size, traj_len)")]),e._v("), "),o("code",{staticStyle:{color:"#e83e8c","font-size":"90%"}},[e._v("current_state")]),e._v(" (the current taxi state is available or unavailable, "),o("code",{staticStyle:{color:"#e83e8c","font-size":"90%"}},[e._v("shape = (batch_size, traj_len)")]),e._v("). (Optional)")])])},function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ul",[o("li",[o("code",{staticStyle:{color:"#e83e8c","font-size":"90%"}},[e._v("y_true")]),e._v(": The real travel time from starting point to finishing point, "),o("code",{staticStyle:{color:"#e83e8c","font-size":"90%"}},[e._v("shape = (batch_size)")]),e._v(".")]),o("li",[o("code",{staticStyle:{color:"#e83e8c","font-size":"90%"}},[e._v("y_pred")]),e._v(": The predicted travel time from starting point to finishing point, "),o("code",{staticStyle:{color:"#e83e8c","font-size":"90%"}},[e._v("shape = (batch_size)")]),e._v(".")])])}],a={data:function(){return{}},components:{}},s=a,n=(o("21c2"),o("2877")),r=Object(n["a"])(s,i,c,!1,null,"4a060ec6",null);t["default"]=r.exports},"21c2":function(e,t,o){"use strict";o("cb2e")},cb2e:function(e,t,o){}}]);
//# sourceMappingURL=chunk-7eb3bfdb.c7955b8e.js.map