webpackJsonp([1],{"7wPG":function(t,e){},NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=n("7+uW"),a={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},staticRenderFns:[]};var r=n("VU/8")({name:"App"},a,!1,function(t){n("hz2y")},null,null).exports,i=n("/ocq"),c={render:function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"ac_header"},[this._v("\n  刘爽最美\n")])},staticRenderFns:[]};var l=n("VU/8")({name:"Header",data:function(){return{msg:""}}},c,!1,function(t){n("t+qy")},"data-v-6ac9b94f",null).exports,o={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"ac_header"},[this._v("\n  张奥博真帅\n  "),e("router-link",{staticClass:"tolist",attrs:{to:"/"}},[e("i",{staticClass:"el-icon-s-fold"})])],1)},staticRenderFns:[]};var w=n("VU/8")({name:"Footer",data:function(){return{msg:""}}},o,!1,function(t){n("k2+s")},"data-v-93894d02",null).exports,h=n("hA09"),u=n.n(h),p={name:"Detail",components:{Header:l,Footer:w},data:function(){return{qa:[],surenum:0}},created:function(){var t=this._routerRoot._route.query.id;u.a[t].forEach(function(t){t.ishow=!1}),this.qa=u.a[t],console.log(u.a[t])},methods:{answer:function(t,e){0==this.qa[t].ishow?(this.qa[t].correct==e?(this.$message({message:"刘爽厉害啊！",type:"success"}),this.surenum+=1):this.$message.error("加油啊刘爽！"),this.qa[t].ishow=!0):this.$message.error("亲，不要重复选择哦！")},endbtn:function(){var t=100/this.qa.length,e=!0;try{this.qa.forEach(function(t){if(0==t.ishow)throw new Error("err")})}catch(t){e=!1,this.$message.error("刘爽同学你没有答完哦！")}if(e){var n=Math.round(this.surenum*t);this.$message({message:"恭喜刘爽同学获得"+n+"分",type:"success"})}}}},d={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"ac_detail"},[n("Header"),t._v(" "),t._l(t.qa,function(e,s){return n("el-card",{key:s,staticClass:"box-card"},[n("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[t._v("\n        "+t._s(s+1)+"."),n("span",[t._v(t._s(e.title))])]),t._v(" "),t._l(e.answer,function(e,a){return n("div",{key:a,staticClass:"text"},[n("div",{on:{click:function(e){return t.answer(s,a)}}},[t._v("\n        "+t._s(e)+"\n        ")])])}),t._v(" "),e.ishow?n("div",{staticClass:"footer"},[n("p",[t._v("答案解析:"),n("br"),t._v(t._s(e.analysis))]),t._v(" "),n("p",[t._v("相关链接:"),n("br"),n("a",{attrs:{href:e.link}},[t._v("点击跳转")])])]):t._e()],2)}),t._v(" "),n("el-button",{staticClass:"endbtn",attrs:{type:"primary"},on:{click:t.endbtn}},[t._v("交卷")]),t._v(" "),n("Footer")],2)},staticRenderFns:[]};var m=n("VU/8")(p,d,!1,function(t){n("7wPG")},"data-v-1308a72e",null).exports,f=n("Ztsc"),v=n.n(f),_={name:"List",components:{Header:l,Footer:w},data:function(){return{list:[]}},created:function(){this.list=v.a.list}},y={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"ac_list"},[n("Header"),t._v(" "),n("ul",t._l(t.list,function(e,s){return n("li",{key:s},[n("router-link",{attrs:{to:{name:"Detail",query:{id:s}}}},[t._v(t._s(e))])],1)}),0),t._v(" "),n("Footer")],1)},staticRenderFns:[]};var b=n("VU/8")(_,y,!1,function(t){n("y+jM")},"data-v-2f5341ea",null).exports;s.default.use(i.a);var k=new i.a({routes:[{path:"/",name:"List",component:b},{path:"/Detail",name:"Detail",component:m}]}),C=n("bQIR"),j=n.n(C);n("gFLX");s.default.use(j.a),s.default.config.productionTip=!1,new s.default({el:"#app",router:k,components:{App:r},template:"<App/>"})},Ztsc:function(t,e){t.exports={list:["第一道题第二到底","第一道题第二到底","第一道题第二到底","第一道题第二到底"]}},gFLX:function(t,e){},hA09:function(t,e){t.exports=[[{title:"这是第一道题",answer:["A.张奥博真帅","B.张奥博真帅","C.张奥博真帅"],correct:0,analysis:"因为张奥博真帅因为张奥博真帅因为张奥博真帅因为张奥博真帅因为张奥博真帅因为张奥博真帅因为张奥博真帅",link:"https://www.jb51.net/article/140370.htmhttps://www.jb51.net/article/140370.htmhttps://www.jb51.net/article/140370.htm"},{title:"这是第二道题",answer:["A.张奥博真帅","B.张奥博真帅","C.张奥博真帅"],correct:1,analysis:"因为张奥博真帅",link:"https://www.jb51.net/article/140370.htm"},{title:"这是第三道题",answer:["A.张奥博真帅","B.张奥博真帅","C.张奥博真帅"],correct:2,analysis:"因为张奥博真帅",link:"https://www.jb51.net/article/140370.htm"},{title:"这是第四道题",answer:["A.张奥博真帅","B.张奥博真帅","C.张奥博真帅"],correct:0,analysis:"因为张奥博真帅",link:"https://www.jb51.net/article/140370.htm"},{title:"这是第一道题",answer:["A.张奥博真帅","B.张奥博真帅","C.张奥博真帅"],correct:0,analysis:"因为张奥博真帅",link:"https://www.jb51.net/article/140370.htm"},{title:"这是第一道题",answer:["A.张奥博真帅","B.张奥博真帅","C.张奥博真帅"],correct:0,analysis:"因为张奥博真帅",link:"https://www.jb51.net/article/140370.htm"},{title:"这是第一道题",answer:["A.张奥博真帅","B.张奥博真帅","C.张奥博真帅"],correct:0,analysis:"因为张奥博真帅",link:"https://www.jb51.net/article/140370.htm"}],[{title:"这是第一道题",answer:["A.张奥博真帅","B.张奥博真帅","C.张奥博真帅"],correct:0,analysis:"因为张奥博真帅",link:"https://www.jb51.net/article/140370.htm"},{title:"这是第二道题",answer:["A.张奥博真帅","B.张奥博真帅","C.张奥博真帅"],correct:0,analysis:"因为张奥博真帅",link:"https://www.jb51.net/article/140370.htm"},{title:"这是第三道题",answer:["A.张奥博真帅","B.张奥博真帅","C.张奥博真帅"],correct:0,analysis:"因为张奥博真帅",link:"https://www.jb51.net/article/140370.htm"},{title:"这是第四道题",answer:["A.张奥博真帅","B.张奥博真帅","C.张奥博真帅"],correct:0,analysis:"因为张奥博真帅",link:"https://www.jb51.net/article/140370.htm"},{title:"这是第一道题",answer:["A.张奥博真帅","B.张奥博真帅","C.张奥博真帅"],correct:0,analysis:"因为张奥博真帅",link:"https://www.jb51.net/article/140370.htm"},{title:"这是第一道题",answer:["A.张奥博真帅","B.张奥博真帅","C.张奥博真帅"],correct:0,analysis:"因为张奥博真帅",link:"https://www.jb51.net/article/140370.htm"},{title:"这是第一道题",answer:["A.张奥博真帅","B.张奥博真帅","C.张奥博真帅"],correct:0,analysis:"因为张奥博真帅",link:"https://www.jb51.net/article/140370.htm"}],[{title:"这是第一道题",answer:["A.张奥博真帅","B.张奥博真帅","C.张奥博真帅"],correct:0,analysis:"因为张奥博真帅",link:"https://www.jb51.net/article/140370.htm"},{title:"这是第二道题",answer:["A.张奥博真帅","B.张奥博真帅","C.张奥博真帅"],correct:0,analysis:"因为张奥博真帅",link:"https://www.jb51.net/article/140370.htm"},{title:"这是第三道题",answer:["A.张奥博真帅","B.张奥博真帅","C.张奥博真帅"],correct:0,analysis:"因为张奥博真帅",link:"https://www.jb51.net/article/140370.htm"},{title:"这是第四道题",answer:["A.张奥博真帅","B.张奥博真帅","C.张奥博真帅"],correct:0,analysis:"因为张奥博真帅",link:"https://www.jb51.net/article/140370.htm"},{title:"这是第一道题",answer:["A.张奥博真帅","B.张奥博真帅","C.张奥博真帅"],correct:0,analysis:"因为张奥博真帅",link:"https://www.jb51.net/article/140370.htm"},{title:"这是第一道题",answer:["A.张奥博真帅","B.张奥博真帅","C.张奥博真帅"],correct:0,analysis:"因为张奥博真帅",link:"https://www.jb51.net/article/140370.htm"},{title:"这是第一道题",answer:["A.张奥博真帅","B.张奥博真帅","C.张奥博真帅"],correct:0,analysis:"因为张奥博真帅",link:"https://www.jb51.net/article/140370.htm"}]]},hz2y:function(t,e){},"k2+s":function(t,e){},"t+qy":function(t,e){},"y+jM":function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.51c8e8bde43d4f5cad61.js.map