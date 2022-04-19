(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5b93f2b7"],{"1f91":function(t,a,e){"use strict";e("46e9")},"2dc9":function(t,a,e){},"46e9":function(t,a,e){},"70b4":function(t,a,e){},7718:function(t,a,e){t.exports=e.p+"img/data_flow.4565f1b5.png"},"79f4":function(t,a,e){"use strict";e("ca20")},"8ae8":function(t,a,e){"use strict";e.r(a);var i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"container"},[t._m(0),e("div",{staticClass:"content"},[e("div",[e("p",{staticClass:"title"},[t._v("Data Flow")]),e("a-divider",{staticStyle:{margin:"10px 0","background-image":"linear-gradient(to right,  rgb(103, 179, 241),  rgb(103, 179, 241), #f6f6f6, #f6f6f6)"}}),e("p",[t._v("In consideration of extensibiliy, flexibility and reusability, the data module designs an elegant data flow that transforms raw data into the unified input of model module. The overall data flow can be described as follows:")]),t._m(1),e("br"),e("p",{staticClass:"title"},[t._v("Atomic Files")]),e("a-divider",{staticStyle:{margin:"10px 0","background-image":"linear-gradient(to right,  rgb(103, 179, 241),  rgb(103, 179, 241), #f6f6f6, #f6f6f6)"}}),e("p",[t._v("LibEpidemic introduces and implements 6 atomic file types for formating various spatio-temporal datasets, which are able to characterize most forms of the input data required by different spatio-temporal data mining tasks. These atomic files can be identified by their filenames:")]),t._m(2),e("br"),e("p",{staticClass:"title"},[t._v("Dataset List")]),e("a-divider",{staticStyle:{margin:"10px 0","background-image":"linear-gradient(to right,  rgb(103, 179, 241),  rgb(103, 179, 241), #f6f6f6, #f6f6f6)"}}),e("a-divider",{staticStyle:{"font-size":"24px"}},[t._v("Traffic State Dataset")]),e("condition-data-table",{attrs:{content:t.condition}}),e("br"),e("a-divider",{staticStyle:{"font-size":"24px"}},[t._v("Vehicle Trajectory Dataset")]),e("vehicle-data-table",{attrs:{content:t.vehicle}}),e("br"),e("a-divider",{staticStyle:{"font-size":"24px"}},[t._v("POI Check-in Dataset")]),e("people-data-table",{attrs:{content:t.people}}),e("br")],1)])])},s=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"header"},[e("div",{staticStyle:{"padding-top":"20px",color:"white"}},[e("p",{staticStyle:{margin:"20px 0 30px 130px","font-size":"60px"}},[t._v("Data")]),e("p",{staticStyle:{margin:"0px 0 20px 130px","font-size":"30px"}},[t._v(" LibEpidemic provides 35 spatio-temporal datasets and introduces unified "),e("br"),t._v(" data structures to format representations of datas and the input of algorithms. ")])])])},function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("div",{staticStyle:{margin:"10px auto 10px auto","text-align":"center"}},[i("img",{attrs:{src:e("7718"),alt:"Data Flow",height:"120"}})])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("table",{staticStyle:{width:"1200px"}},[e("thead",{staticStyle:{"font-size":"16px"}},[e("tr",[e("th",{attrs:{width:"12%"}},[t._v("FILENAME")]),e("th",{attrs:{width:"58%"}},[t._v("CONTENT")]),e("th",{attrs:{width:"30%"}},[t._v("EXAMPLE FORMAT")])])]),e("tbody",[e("tr",[e("td",[t._v("xxx.geo")]),e("td",[t._v("Store geographic entity attribute information.")]),e("td",[t._v("geo_id, type, coordinates")])]),e("tr",[e("td",[t._v("xxx.usr")]),e("td",[t._v("Store traffic user information.")]),e("td",[t._v("usr_id, gender, birth_date")])]),e("tr",[e("td",[t._v("xxx.rel")]),e("td",[t._v("Store the relationship information between entities, such as road networks. ")]),e("td",[t._v("rel_id, type, origin_id, destination_id")])]),e("tr",[e("td",[t._v("xxx.dyna")]),e("td",[t._v("Store traffic condition information.")]),e("td",[t._v("dyna_id, type, time, entity_id, location_id")])]),e("tr",[e("td",[t._v("xxx.ext")]),e("td",[t._v("Store external information, such as weather, temperature, etc.")]),e("td",[t._v("ext_id, time, properties")])]),e("tr",[e("td",[t._v("config.json")]),e("td",[t._v("Used to supplement the description of the above table information.")]),e("td",[t._v("-")])])])])}],r=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("table",[t._m(0),e("tbody",t._l(t.content,(function(a){return e("tr",{key:a.dataset},[e("td",{attrs:{width:"14%"}},[e("a",{attrs:{href:a.plink,target:"_blank"}},[t._v(t._s(a.dataset))])]),e("td",{attrs:{width:"4%"}},[t._v(t._s(a.geo))]),e("td",{attrs:{width:"4%"}},[t._v(t._s(a.rel))]),e("td",{attrs:{width:"6%"}},[t._v(t._s(a.dyna))]),e("td",{attrs:{width:"6%"}},[t._v(t._s(a.feature))]),e("td",{attrs:{width:"16%"}},[t._v(t._s(a.place))]),e("td",{attrs:{width:"19%"}},[t._v(t._s(a.duration))]),e("td",{attrs:{width:"8%"}},[t._v(t._s(a.interval))]),e("td",{attrs:{width:"23%"}},[e("a-button",{attrs:{type:"primary",shape:"round"}},[e("a",{attrs:{href:a.source,target:"_blank"}},[t._v("Source")])]),e("a-button",{staticStyle:{"margin-left":"5px"},attrs:{type:"primary",shape:"round"}},[e("a",{attrs:{href:a.slink,target:"_blank"}},[t._v("Script")])])],1)])})),0)])},o=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("thead",{staticStyle:{"font-size":"16px"}},[e("tr",[e("th",[t._v("DATASET")]),e("th",[t._v("#GEO")]),e("th",[t._v("#REL")]),e("th",[t._v("#DYNA")]),e("th",[t._v("FEATURES")]),e("th",[t._v("PLACE")]),e("th",[t._v("DURATION")]),e("th",[t._v("INTERVAL")]),e("th",[t._v("LINK")])])])}],n={props:{content:{type:Array,required:!0}},data:function(){return{}}},d=n,l=(e("79f4"),e("2877")),c=Object(l["a"])(d,r,o,!1,null,null,null),h=c.exports,u=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("table",[t._m(0),e("tbody",t._l(t.content,(function(a){return e("tr",{key:a.dataset},[e("td",{attrs:{width:"14%"}},[e("a",{attrs:{href:a.plink,target:"_blank"}},[t._v(t._s(a.dataset))])]),e("td",{attrs:{width:"4%"}},[t._v(t._s(a.geo))]),e("td",{attrs:{width:"4%"}},[t._v(t._s(a.rel))]),e("td",{attrs:{width:"6%"}},[t._v(t._s(a.usr))]),e("td",{attrs:{width:"6%"}},[t._v(t._s(a.dyna))]),e("td",{attrs:{width:"16%"}},[t._v(t._s(a.place))]),e("td",{attrs:{width:"19%"}},[t._v(t._s(a.duration))]),e("td",{attrs:{width:"8%"}},[t._v(t._s(a.interval))]),e("td",{attrs:{width:"23%"}},[e("a-button",{attrs:{type:"primary",shape:"round"}},[e("a",{attrs:{href:a.source,target:"_blank"}},[t._v("Source")])]),e("a-button",{staticStyle:{"margin-left":"5px"},attrs:{type:"primary",shape:"round"}},[e("a",{attrs:{href:a.slink,target:"_blank"}},[t._v("Script")])])],1)])})),0)])},p=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("thead",{staticStyle:{"font-size":"16px"}},[e("tr",[e("th",[t._v("DATASET")]),e("th",[t._v("#GEO")]),e("th",[t._v("#REL")]),e("th",[t._v("#USR")]),e("th",[t._v("#DYNA")]),e("th",[t._v("PLACE")]),e("th",[t._v("DURATION")]),e("th",[t._v("INTERVAL")]),e("th",[t._v("LINK")])])])}],b={props:{content:{type:Array,required:!0}},data:function(){return{}}},y=b,g=(e("1f91"),Object(l["a"])(y,u,p,!1,null,null,null)),m=g.exports,_=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("table",[t._m(0),e("tbody",t._l(t.content,(function(a){return e("tr",{key:a.dataset},[e("td",{attrs:{width:"14%"}},[e("a",{attrs:{href:a.plink,target:"_blank"}},[t._v(t._s(a.dataset))])]),e("td",{attrs:{width:"4%"}},[t._v(t._s(a.geo))]),e("td",{attrs:{width:"4%"}},[t._v(t._s(a.rel))]),e("td",{attrs:{width:"6%"}},[t._v(t._s(a.dyna))]),e("td",{attrs:{width:"6%"}},[t._v(t._s(a.vehicle))]),e("td",{attrs:{width:"16%"}},[t._v(t._s(a.place))]),e("td",{attrs:{width:"19%"}},[t._v(t._s(a.duration))]),e("td",{attrs:{width:"8%"}},[t._v(t._s(a.interval))]),e("td",{attrs:{width:"23%"}},[e("a-button",{attrs:{type:"primary",shape:"round"}},[e("a",{attrs:{href:a.source,target:"_blank"}},[t._v("Source")])]),e("a-button",{staticStyle:{"margin-left":"5px"},attrs:{type:"primary",shape:"round"}},[e("a",{attrs:{href:a.slink,target:"_blank"}},[t._v("Script")])])],1)])})),0)])},v=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("thead",{staticStyle:{"font-size":"16px"}},[e("tr",[e("th",[t._v("DATASET")]),e("th",[t._v("#GEO")]),e("th",[t._v("#REL")]),e("th",[t._v("#DYNA")]),e("th",[t._v("TYPE")]),e("th",[t._v("PLACE")]),e("th",[t._v("DURATION")]),e("th",[t._v("INTERVAL")]),e("th",[t._v("LINK")])])])}],f={props:{content:{type:Array,required:!0}},data:function(){return{}}},w=f,k=(e("b7b5"),Object(l["a"])(w,_,v,!1,null,null,null)),C=k.exports,S=[{dataset:"METR_LA",geo:"207",rel:"11,753",dyna:"7,094,304",feature:"speed",place:"Los Angeles, USA",duration:"Mar. 1, 2012 - Jun. 27, 2012",interval:"5min",source:"https://github.com/liyaguang/DCRNN",plink:"https://bigscity-libcity-docs.readthedocs.io/en/latest/user_guide/data/raw_data.html#metr-la",slink:"https://github.com/LibCity/Bigscity-LibCity-Datasets/blob/master/metr_la.py"},{dataset:"LOS_LOOP",geo:"207",rel:"42,849",dyna:"7,094,304",feature:"speed",place:"Los Angeles, USA",duration:"Mar. 1, 2012 - Jun. 27, 2012",interval:"5min",source:"https://github.com/lehaifeng/T-GCN/tree/master/data",plink:"https://bigscity-libcity-docs.readthedocs.io/en/latest/user_guide/data/raw_data.html#los-loop",slink:"https://github.com/LibCity/Bigscity-LibCity-Datasets/blob/master/los_loop.py"},{dataset:"SZ_TAXI",geo:"156",rel:"24,336",dyna:"464,256",feature:"speed",place:"Shenzhen, China",duration:"Jan. 1, 2015 - Jan. 31, 2015",interval:"15min",source:"https://github.com/lehaifeng/T-GCN/tree/master/data",plink:"https://bigscity-libcity-docs.readthedocs.io/en/latest/user_guide/data/raw_data.html#sz-taxi",slink:"https://github.com/LibCity/Bigscity-LibCity-Datasets/blob/master/sz_taxi.py"},{dataset:"LOOP_SEATTLE",geo:"323",rel:"104,329",dyna:"33,953,760",feature:"speed",place:"Greater Seattle Area, USA",duration:"over the entirely of 2015",interval:"5min",source:"https://github.com/zhiyongc/Seattle-Loop-Data",plink:"https://bigscity-libcity-docs.readthedocs.io/en/latest/user_guide/data/raw_data.html#loop-seattle",slink:"https://github.com/LibCity/Bigscity-LibCity-Datasets/blob/master/loop_seattle.py"},{dataset:"Q_TRAFFIC",geo:"45,148",rel:"63,422",dyna:"264,386,688",feature:"speed",place:"Beijing, China",duration:"Apr. 1, 2017 - May 31, 2017",interval:"15min",source:"https://github.com/JingqingZ/BaiduTraffic",plink:"https://bigscity-libcity-docs.readthedocs.io/en/latest/user_guide/data/raw_data.html#q-traffic",slink:"https://github.com/LibCity/Bigscity-LibCity-Datasets/blob/master/q_traffic.py"},{dataset:"PEMSD3",geo:"358",rel:"547",dyna:"9,382,464",feature:"flow",place:"California, USA",duration:"Sept. 1, 2018 - Nov. 30, 2018",interval:"5min",source:"https://github.com/Davidham3/STSGCN",plink:"https://bigscity-libcity-docs.readthedocs.io/en/latest/user_guide/data/raw_data.html#pemsd3",slink:"https://github.com/LibCity/Bigscity-LibCity-Datasets/blob/master/pemsd3.py"},{dataset:"PEMSD4",geo:"307",rel:"340",dyna:"\t5,216,544",feature:"flow, speed, occupancy",place:"San Francisco Bay Area, USA",duration:"Jan. 1, 2018 - Feb. 28, 2018",interval:"5min",source:"https://github.com/Davidham3/ASTGCN/tree/master/data/PEMS04",plink:"https://bigscity-libcity-docs.readthedocs.io/en/latest/user_guide/data/raw_data.html#pemsd4",slink:"https://github.com/LibCity/Bigscity-LibCity-Datasets/blob/master/pemsd4.py"},{dataset:"PEMSD7",geo:"883",rel:"866",dyna:"24,921,792",feature:"flow",place:"California, USA",duration:"Jul. 1, 2016 - Aug. 31, 2016",interval:"5min",source:"https://github.com/Davidham3/STSGCN",plink:"https://bigscity-libcity-docs.readthedocs.io/en/latest/user_guide/data/raw_data.html#pemsd7",slink:"https://github.com/LibCity/Bigscity-LibCity-Datasets/blob/master/pemsd7.py"},{dataset:"PEMSD8",geo:"170",rel:"277",dyna:"3,035,520",feature:"flow, speed, occupancy",place:"San Bernardino Area, USA",duration:"Jul. 1, 2016 - Aug. 31, 2016",interval:"5min",source:"https://github.com/Davidham3/ASTGCN/tree/master/data/PEMS08",plink:"https://bigscity-libcity-docs.readthedocs.io/en/latest/user_guide/data/raw_data.html#pemsd8",slink:"https://github.com/LibCity/Bigscity-LibCity-Datasets/blob/master/pemsd8.py"},{dataset:"PEMSD7(M)",geo:"228",rel:"51,984",dyna:"2,889,216",feature:"speed",place:"California, USA",duration:"weekdays of May and June, 2012",interval:"5min",source:"https://github.com/Davidham3/STGCN/tree/master/datasets",plink:"https://bigscity-libcity-docs.readthedocs.io/en/latest/user_guide/data/raw_data.html#pemsd7-m",slink:"https://github.com/LibCity/Bigscity-LibCity-Datasets/blob/master/pemsd7(m).py"},{dataset:"PEMS_BAY",geo:"325",rel:"8,358",dyna:"16,937,700",feature:"speed",place:"San Francisco Bay Area, USA",duration:"Jan. 1, 2017 - Jun. 30, 2017",interval:"5min",source:"https://github.com/liyaguang/DCRNN",plink:"https://bigscity-libcity-docs.readthedocs.io/en/latest/user_guide/data/raw_data.html#pems-bay",slink:"https://github.com/LibCity/Bigscity-LibCity-Datasets/blob/master/pems_bay.py"},{dataset:"BEIJING_SUBWAY",geo:"276",rel:"76,176",dyna:"248,400",feature:"people flow",place:"Beijing, China",duration:"Feb. 29, 2016 - Apr. 3, 2016",interval:"30min",source:"https://github.com/JinleiZhangBJTU/ResNet-LSTM-GCN",plink:"https://bigscity-libcity-docs.readthedocs.io/en/latest/user_guide/data/raw_data.html#beijing-subway",slink:"https://github.com/LibCity/Bigscity-LibCity-Datasets/blob/master/beijing_subway.py"},{dataset:"M_DENSE",geo:"30",rel:"-",dyna:"525,600",feature:"car flow",place:"Madrid, Spain",duration:"Jan. 1, 2018 - Dec. 21, 2019",interval:"60min",source:"https://github.com/Davidham3/STSGCN",plink:"https://bigscity-libcity-docs.readthedocs.io/en/latest/user_guide/data/raw_data.html#m-dense",slink:"https://github.com/LibCity/Bigscity-LibCity-Datasets/blob/master/m_dense.py"},{dataset:"ROTTERDAM",geo:"208",rel:"-",dyna:"4,813,536",feature:"speed",place:"Rotterdam, Holland",duration:"135 days of 2018",interval:"2min",source:"https://github.com/RomainLITUD/DGCN_traffic_forecasting",plink:"https://bigscity-libcity-docs.readthedocs.io/en/latest/user_guide/data/raw_data.html#rotterdam",slink:"https://github.com/LibCity/Bigscity-LibCity-Datasets/blob/master/rotterdam.py"},{dataset:"SHMETRO",geo:"288",rel:"82,944",dyna:"1,934,208",feature:"people flow",place:"Shanghai, China",duration:"Jul. 1, 2016 - Sept. 30, 2016",interval:"15min",source:"https://github.com/ivechan/PVCGN",plink:"https://bigscity-libcity-docs.readthedocs.io/en/latest/user_guide/data/raw_data.html#shmetro",slink:"https://github.com/LibCity/Bigscity-LibCity-Datasets/blob/master/sh_metro.py"},{dataset:"HZMETRO",geo:"80",rel:"6400",dyna:"146,000",feature:"people flow",place:"Hangzhou, China",duration:"Jan. 1, 2019 - Jan. 25, 2019",interval:"15min",source:"https://github.com/ivechan/PVCGN",plink:"https://bigscity-libcity-docs.readthedocs.io/en/latest/user_guide/data/raw_data.html#hzmetro",slink:"https://github.com/LibCity/Bigscity-LibCity-Datasets/blob/master/hz_metro.py"},{dataset:"TAXIBJ",geo:"32*32",rel:"-",dyna:"5,652,480",feature:"people flow",place:"Beijing, China",duration:"Mar. 1, 2015 - Jun. 30, 2015",interval:"30min",source:"https://github.com/TolicWang/DeepST/issues/3",plink:"https://bigscity-libcity-docs.readthedocs.io/en/latest/user_guide/data/raw_data.html#taxibj",slink:"https://github.com/LibCity/Bigscity-LibCity-Datasets/blob/master/taxibj.py"},{dataset:"NYCTAXI_DYNA",geo:"263",rel:"69,169",dyna:"574,392",feature:"flow (irregular area)",place:"New York, USA",duration:"Jan. 1, 2020 - Mar. 30, 2020",interval:"60min",source:"https://www1.nyc.gov/site/tlc/about/tlc-trip-record-data.page",plink:"https://bigscity-libcity-docs.readthedocs.io/en/latest/user_guide/data/raw_data.html#nyctaxi-dyna",slink:"https://github.com/LibCity/Bigscity-LibCity-Datasets/blob/master/nyctaxi_dyna.py"},{dataset:"NYCTAXI_OD",geo:"263",rel:"69,169",dyna:"150,995,927",feature:"OD flow (irregular area)",place:"New York, USA",duration:"Apr. 1, 2020 - Jun. 30, 2020",interval:"60min",source:"https://www1.nyc.gov/site/tlc/about/tlc-trip-record-data.page",plink:"https://bigscity-libcity-docs.readthedocs.io/en/latest/user_guide/data/raw_data.html#nyctaxi-od",slink:"https://github.com/LibCity/Bigscity-LibCity-Datasets/blob/master/nyctaxi_od.py"},{dataset:"NYCTAXI_GRID",geo:"10*20",rel:"-",dyna:"\t432,000",feature:"flow (grid-base)",place:"New York, USA",duration:"Jan. 1, 2014 - Mar. 31, 2014",interval:"60min",source:"https://www1.nyc.gov/site/tlc/about/tlc-trip-record-data.page",plink:"https://bigscity-libcity-docs.readthedocs.io/en/latest/user_guide/data/raw_data.html#nyctaxi-grid",slink:"https://github.com/LibCity/Bigscity-LibCity-Datasets/blob/master/nyctaxi_grid.py"}],L=[{dataset:"Foursquare_TKY",geo:"94,890",rel:"-",usr:"11,589",dyna:"1,112,156",place:"Tokyo, Japan",duration:"Apr. 3, 2012 - Sep. 16, 2013",interval:"-",source:"https://sites.google.com/site/yangdingqi/home/foursquare-dataset",plink:"https://bigscity-libcity-docs.readthedocs.io/en/latest/user_guide/data/raw_data.html#foursquare",slink:"https://github.com/LibCity/Bigscity-LibCity-Datasets/blob/master/foursquare.py"},{dataset:"Foursquare_NYC",geo:"64,735",rel:"-",usr:"17,175",dyna:"568,444",place:"New York, USA",duration:"Apr. 3, 2012 - Sep. 16, 2013",interval:"-",source:"https://sites.google.com/site/yangdingqi/home/foursquare-dataset",plink:"https://bigscity-libcity-docs.readthedocs.io/en/latest/user_guide/data/raw_data.html#foursquare",slink:"https://github.com/LibCity/Bigscity-LibCity-Datasets/blob/master/foursquare.py"},{dataset:"Gowalla",geo:"1,280,969",rel:"913,660",usr:"107,092",dyna:"6,442,892",place:"Global",duration:"Feb. 4, 2009 - Oct. 23, 2010",interval:"-",source:"https://snap.stanford.edu/data/loc-gowalla.html",plink:"https://bigscity-libcity-docs.readthedocs.io/en/latest/user_guide/data/raw_data.html#gowalla",slink:"https://github.com/LibCity/Bigscity-LibCity-Datasets/blob/master/gowalla.py"},{dataset:"Brightkite",geo:"772,966",rel:"394,334",usr:"51,406",dyna:"4,747,287",place:"Global",duration:"Mar. 21, 2008 - Oct. 18, 2010",interval:"-",source:"http://snap.stanford.edu/data/loc-brightkite.html",plink:"https://bigscity-libcity-docs.readthedocs.io/en/latest/user_guide/data/raw_data.html#brightkite",slink:"https://github.com/LibCity/Bigscity-LibCity-Datasets/blob/master/brightkite.py"},{dataset:"Instagram",geo:"13,187",rel:"-",usr:"78,233",dyna:"2,205,794",place:"New York, USA",duration:"Jun. 15, 2011 - Nov. 8, 2016",interval:"-",source:"https://dmis.korea.ac.kr/cape",plink:"https://bigscity-libcity-docs.readthedocs.io/en/latest/user_guide/data/raw_data.html#instagram",slink:"https://github.com/LibCity/Bigscity-LibCity-Datasets/blob/master/instagram.py"}],D=[{dataset:"T_DRIVE",geo:"32*32",rel:"1,048,576",dyna:"3,686,400",vehicle:"taxi",place:"Beijing, China",duration:"Feb. 1, 2015 - Jun. 30, 2015",interval:"60min",source:"https://www.microsoft.com/en-us/research/publication/t-drive-trajectory-data-sample/",plink:"https://bigscity-libcity-docs.readthedocs.io/en/latest/user_guide/data/raw_data.html#t-drive",slink:"https://github.com/LibCity/Bigscity-LibCity-Datasets/blob/master/t_drive_small.py"},{dataset:"PORTO",geo:"20*10",rel:"-",dyna:"441,600",vehicle:"taxi",place:"Porto, Portugal",duration:"Jul. 1, 2013 - Sept. 30, 2013",interval:"60min",source:"https://archive.ics.uci.edu/ml/datasets/Taxi+Service+Trajectory+-+Prediction+Challenge%2C+ECML+PKDD+2015",plink:"https://bigscity-libcity-docs.readthedocs.io/en/latest/user_guide/data/raw_data.html#porto",slink:"https://github.com/LibCity/Bigscity-LibCity-Datasets/blob/master/porto.py"},{dataset:"NYCBIKE",geo:"10*20",rel:"-",dyna:"441,600",vehicle:"bike",place:"New York, USA",duration:"Jul. 1, 2020 - Sept. 30, 2020",interval:"60min",source:"https://www.citibikenyc.com/system-data",plink:"https://bigscity-libcity-docs.readthedocs.io/en/latest/user_guide/data/raw_data.html#nyc-bike",slink:"#"},{dataset:"AUSTINRIDE",geo:"16*8",rel:"-",dyna:"282,624",vehicle:"bike",place:"Austin, USA",duration:"Jul. 1, 2016 - Sept. 30, 2016",interval:"60min",source:"https://data.world/ride-austin/ride-austin-june-6-april-13",plink:"https://bigscity-libcity-docs.readthedocs.io/en/latest/user_guide/data/raw_data.html#austinride",slink:"https://github.com/LibCity/Bigscity-LibCity-Datasets/blob/master/austinride.py"},{dataset:"BIKEDC",geo:"16*8",rel:"-",dyna:"282,624",vehicle:"bike",place:"Washington, USA",duration:"Jul. 1, 2020 - Sept. 30, 2020",interval:"60min",source:"https://www.capitalbikeshare.com/system-data",plink:"https://bigscity-libcity-docs.readthedocs.io/en/latest/user_guide/data/raw_data.html#bikedc",slink:"https://github.com/LibCity/Bigscity-LibCity-Datasets/blob/master/bikedc.py"},{dataset:"BIKECHI",geo:"15*18",rel:"-",dyna:"670,680",vehicle:"bike",place:"Chicago, USA",duration:"Jul. 1, 2020 - Sept. 30, 2020",interval:"60min",source:"https://www.divvybikes.com/system-data",plink:"https://bigscity-libcity-docs.readthedocs.io/en/latest/user_guide/data/raw_data.html#bikechi",slink:"https://github.com/LibCity/Bigscity-LibCity-Datasets/blob/master/bikechi.py"}],A={data:function(){return{condition:S,people:L,vehicle:D,path:""}},components:{conditionDataTable:h,peopleDataTable:m,vehicleDataTable:C}},x=A,E=(e("92bf"),Object(l["a"])(x,i,s,!1,null,"467abc63",null));a["default"]=E.exports},"92bf":function(t,a,e){"use strict";e("70b4")},b7b5:function(t,a,e){"use strict";e("2dc9")},ca20:function(t,a,e){}}]);
//# sourceMappingURL=chunk-5b93f2b7.ebe80a7f.js.map