webpackJsonp([1],{"2Yix":function(t,e,n){t.exports=n.p+"static/img/vrra_background.1b98919.jpg"},"4Uwr":function(t,e,n){t.exports=n.p+"static/img/logo.8aa2a97.jpg"},"7zck":function(t,e){},HIl7:function(t,e){},NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n("7+uW"),o={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("link",{attrs:{rel:"stylesheet",href:"https://cdn.jsdelivr.net/npm/@mdi/font@latest/css/materialdesignicons.min.css"}}),this._v(" "),e("link",{attrs:{href:"https://fonts.googleapis.com/css2?family=Material+Icons",rel:"stylesheet"}}),this._v(" "),e("link",{attrs:{href:"https://fonts.googleapis.com/css2?family=Material+Icons+Outlined",rel:"stylesheet"}}),this._v(" "),e("link",{attrs:{href:"https://fonts.googleapis.com/css2?family=Material+Icons+Round",rel:"stylesheet"}}),this._v(" "),e("link",{attrs:{href:"https://fonts.googleapis.com/css2?family=Material+Icons+Sharp",rel:"stylesheet"}}),this._v(" "),e("link",{attrs:{href:"https://fonts.googleapis.com/css2?family=Material+Icons+Two+Tone",rel:"stylesheet"}}),this._v(" "),e("router-view")],1)},staticRenderFns:[]};var i=n("VU/8")({name:"App"},o,!1,function(t){n("foxG")},null,null).exports,r=n("/ocq"),s={data:function(){return{web_at:"Home",search_text:"",setting_items:[{title:"User info",action:"user"},{title:"Sign out",action:"logout"}],arrayEvents:null,dates:new Date(Date.now()-6e4*(new Date).getTimezoneOffset()).toISOString().substr(0,10)}},methods:{HomeLogo:function(){this.$router.replace("home"),this.Home()},Home:function(){this.web_at="Home"},Activity:function(){this.web_at="Activity"},Booking:function(){this.web_at="Booking"},settingAction:function(t){"user"===t?this.$router.replace("signup"):"logout"===t&&this.$router.replace("home")}}},l={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",[a("v-app-bar",{attrs:{color:"light-blue lighten-5",height:"100%",app:"","justify-space-between":""}},[a("v-img",{attrs:{alt:"VRRA",src:n("4Uwr"),"max-height":"50%","max-width":"50%",position:"center left",contain:""},on:{click:t.HomeLogo}}),t._v(" "),a("v-col",[a("v-card",{attrs:{flat:"",color:"light-blue lighten-5"}},[a("v-row",[a("v-col",{directives:[{name:"show",rawName:"v-show",value:"Home"!==t.web_at,expression:"web_at!=='Home'"}]},[a("v-btn",{attrs:{color:"blue darken-1",text:"",to:{path:"/home"}},on:{click:t.Home}},[t._v("\n                            Home\n                        ")])],1),t._v(" "),a("v-col",{directives:[{name:"show",rawName:"v-show",value:"Activity"!==t.web_at,expression:"web_at!=='Activity'"}]},[a("v-btn",{attrs:{color:"blue darken-1",text:"",to:{name:"Activity"}},on:{click:t.Activity}},[t._v("\n                            Activity\n                        ")])],1),t._v(" "),a("v-col",{directives:[{name:"show",rawName:"v-show",value:"Booking"!==t.web_at,expression:"web_at!=='Booking'"}]},[a("v-btn",{attrs:{color:"blue darken-1",text:"",to:{name:"Booking"}},on:{click:t.Booking}},[t._v("\n                            Booking\n                        ")])],1),t._v(" "),a("v-col",[a("div",[a("v-toolbar",{attrs:{rounded:"",width:"300",dense:""}},[a("v-text-field",{attrs:{flat:"",solo:"",dense:"","hide-details":""},model:{value:t.search_text,callback:function(e){t.search_text=e},expression:"search_text"}}),t._v(" "),a("v-btn",{staticClass:"hidden-xs-only",attrs:{icon:""}},[a("v-icon",[t._v("mdi-magnify")])],1)],1)],1)]),t._v(" "),a("v-col",[a("v-menu",{attrs:{left:"",bottom:""},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on,o=e.attrs;return[a("v-btn",t._g(t._b({attrs:{icon:""}},"v-btn",o,!1),n),[a("v-icon",[t._v("mdi-cog")])],1)]}}])},[t._v(" "),a("v-list",t._l(t.setting_items,function(e){return a("v-list-item",{key:e,on:{click:function(n){return t.settingAction(e.action)}}},[a("v-list-item-title",[t._v("\n                                        "+t._s(e.title)+"\n                                    ")])],1)}),1)],1)],1)],1)],1)],1)],1),t._v(" "),a("v-main",[a("router-view")],1)],1)},staticRenderFns:[]},c=n("VU/8")(s,l,!1,null,null,null).exports,u=n("d7EF"),v=n.n(u),d=n("Gu7T"),m=n.n(d),p={data:function(){return{search_text:"",setting_items:[{title:"User info",action:"user"},{title:"Sign out",action:"logout"}],arrayEvents:null,dates:new Date(Date.now()-6e4*(new Date).getTimezoneOffset()).toISOString().substr(0,10)}},mounted:function(){this.arrayEvents=[].concat(m()(Array(6))).map(function(){var t=Math.floor(30*Math.random()),e=new Date;return e.setDate(t),e.toISOString().substr(0,10)})},methods:{functionEvents:function(t){var e=t.split("-"),n=v()(e,3)[2];return!![12,17,28].includes(parseInt(n,10))||!![1,19,22].includes(parseInt(n,10))&&["red","#00f"]}}},f={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-layout",{attrs:{"justify-end":"",rowc:""}},[n("v-col",{attrs:{cols:"12",rows:"36",sm:"6"}},[n("v-date-picker",{attrs:{"no-title":"","input-class":"datetime-picker",width:"100%","event-color":function(t){return t[9]%2?"red":"yellow"},events:t.functionEvents},model:{value:t.dates,callback:function(e){t.dates=e},expression:"dates"}})],1)],1)},staticRenderFns:[]};var _=n("VU/8")(p,f,!1,function(t){n("jqub")},null,null).exports,h={name:"登入",data:function(){return{logining:!1,note:{position:"absolute",top:"0px",left:"0px",width:"100%",height:"100%",backgroundImage:"url("+n("2Yix")+")",backgroundSize:"100% 100%",backgroundRepeat:"no-repeat"},account:{username:"admin",password:"123456"},rules:{username:[{required:!0,message:"請輸入賬號",trigger:"blur"}],password:[{required:!0,message:"請輸入密碼",trigger:"blur"}]},checked:!1}},methods:{login:function(){this.$router.replace("/home")},signup:function(){this.$router.replace("/signup")}}},b={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",[a("div",{staticClass:"note",style:t.note},[a("div",{staticClass:"loginFrame"},[a("el-form",{ref:"AccountForm",staticClass:"demo-ruleForm login-container",attrs:{model:t.account,rules:"rules","label-position":"left","label-width":"0px"}},[a("el-tabs",{staticClass:"users",on:{"tab-click":t.handleClick},model:{value:t.activeName,callback:function(e){t.activeName=e},expression:"activeName"}},[a("img",{attrs:{src:n("4Uwr"),width:"100%",height:"30%"}})]),t._v(" "),a("el-form-item",{attrs:{prop:"username"}},[a("el-input",{attrs:{type:"text","auto-complete":"off",placeholder:"Acount"},model:{value:t.account.username,callback:function(e){t.$set(t.account,"username",e)},expression:"account.username"}})],1),t._v(" "),a("el-form-item",{attrs:{prop:"password"}},[a("el-input",{attrs:{type:"password","auto-complete":"off",placeholder:"Password"},model:{value:t.account.password,callback:function(e){t.$set(t.account,"password",e)},expression:"account.password"}})],1),t._v(" "),a("div",[a("v-layout",{attrs:{"justify-end":"",row0:""}},[a("a",{staticClass:"Signup",on:{click:t.signup}},[t._v("Sign up？")])])],1),t._v(" "),a("el-form-item",{staticStyle:{width:"100%"}},[a("el-button",{staticStyle:{width:"100%"},attrs:{type:"primary"},on:{click:t.login}},[t._v("Sign in")])],1)],1)],1)])])},staticRenderFns:[]};var g=n("VU/8")(h,b,!1,function(t){n("ZLD3")},null,null).exports,w={data:function(){var t=this;return{logining:!1,note:{position:"absolute",top:"0px",left:"0px",width:"100%",height:"100%",backgroundImage:"url("+n("2Yix")+")",backgroundSize:"100% 100%",backgroundRepeat:"no-repeat"},show1:!1,show2:!1,password:"",confirmpassword:"",rules:{required:function(t){return!!t||"Required."},min:function(t){return t.length>=8||"Min 8 characters"},confirm:function(e){return e===t.password||"Must same as password"},emailMatch:function(t){return!t||/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(t)||"E-mail must be valid"}}}},methods:{save:function(){this.$router.replace("/login")}}},y={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"note",style:t.note},[n("v-form",{staticClass:"demo-ruleForm login-container"},[n("v-container",[n("v-row",[n("v-col",{attrs:{rows:"12",sm:"6",md:"3"}},[n("p",[t._v("User Info")])])],1),t._v(" "),n("v-divider"),t._v(" "),n("v-row",[n("v-col",{attrs:{rows:"12"}},[n("v-text-field",{attrs:{label:"First Name"}})],1),t._v(" "),n("v-col",{attrs:{rows:"12"}},[n("v-text-field",{attrs:{label:"Last Name"}})],1)],1),t._v(" "),n("v-row",[n("v-col",{attrs:{rows:"12"}},[n("v-text-field",{attrs:{label:"Account"}}),t._v(" "),n("v-text-field",{attrs:{"append-icon":t.show1?"mdi-eye":"mdi-eye-off",rules:[t.rules.required,t.rules.min],type:t.show1?"text":"password",name:"input-Password",label:"Password",hint:"At least 8 characters",value:"",error:""},on:{"click:append":function(e){t.show1=!t.show1}},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}}),t._v(" "),n("v-text-field",{attrs:{"append-icon":t.show2?"mdi-eye":"mdi-eye-off",rules:[t.rules.required,t.rules.confirm],type:t.show2?"text":"password",name:"input-Confirm Password",label:"Confirm Password",value:"",error:""},on:{"click:append":function(e){t.show2=!t.show2}}}),t._v(" "),n("v-text-field",{attrs:{rules:[t.rules.required,t.rules.emailMatch],name:"input-E-mail",label:"E-mail",value:"",error:""}})],1)],1),t._v(" "),n("el-button",{staticStyle:{width:"100%"},attrs:{type:"primary"},on:{click:t.save}},[t._v("Save")])],1)],1)],1)},staticRenderFns:[]};var k=n("VU/8")(w,y,!1,function(t){n("ZyqW")},null,null).exports,x={data:function(){return{logining:!1,note:{position:"absolute",top:"0px",left:"0px",width:"100%",height:"100%",backgroundImage:"url("+n("2Yix")+")",backgroundSize:"100% 100%",backgroundRepeat:"no-repeat"},rules:{required:function(t){return!!t||"Required."},emailMatch:function(t){return!t||/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(t)||"E-mail must be valid"}},theme:"",chairperson:"",tab:null,items:["Day","Month"],text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit",begin_date:new Date(Date.now()).toISOString().substr(0,10),end_date:new Date(Date.now()).toISOString().substr(0,10),menu_visible1:!1,menu_visible2:!1,agenda:"",notes:"",dialog:!1}},methods:{submit:function(){this.$router.replace("/login")},cancel:function(){this.dialog=!1,this.$router.replace("/login")}}},A={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"note",style:t.note},[n("v-app",[n("v-form",{staticClass:"demo-ruleForm login-container"},[n("v-container",[n("v-row",[n("v-col",{attrs:{cols:"12"}},[n("v-text-field",{attrs:{label:"Theme"},model:{value:t.theme,callback:function(e){t.theme=e},expression:"theme"}})],1)],1),t._v(" "),n("v-row",[n("v-col",{attrs:{cols:"3"}},[n("v-subheader",[t._v("Chairperson")])],1),t._v(" "),n("v-col",{attrs:{cols:"8"}},[n("v-text-field",{model:{value:t.chairperson,callback:function(e){t.chairperson=e},expression:"chairperson"}})],1)],1),t._v(" "),n("v-row",[n("v-col",{attrs:{cols:"2"}},[n("v-subheader",[t._v("Time")])],1),t._v(" "),n("v-col",{attrs:{cols:"4"}},[n("v-menu",{ref:"menu_visible1",attrs:{"close-on-content-click":!1,"return-value":t.begin_date,transition:"scale-transition","offset-y":"","min-width":"auto"},on:{"update:returnValue":function(e){t.begin_date=e},"update:return-value":function(e){t.begin_date=e}},scopedSlots:t._u([{key:"activator",fn:function(e){var a=e.on,o=e.attrs;return[n("v-text-field",t._g(t._b({attrs:{"append-icon":"event",readonly:""},on:{"click:append":a.click},model:{value:t.begin_date,callback:function(e){t.begin_date=e},expression:"begin_date"}},"v-text-field",o,!1),a))]}}]),model:{value:t.menu_visible1,callback:function(e){t.menu_visible1=e},expression:"menu_visible1"}},[t._v(" "),n("v-tabs",{attrs:{"align-with-title":"","justify-end":""},model:{value:t.tab,callback:function(e){t.tab=e},expression:"tab"}},[n("v-tabs-slider",{attrs:{color:"yellow"}}),t._v(" "),t._l(t.items,function(e){return n("v-tab",{key:e},[t._v("\n                                    "+t._s(e)+"\n                                ")])})],2),t._v(" "),n("v-tabs-items",{model:{value:t.tab,callback:function(e){t.tab=e},expression:"tab"}},[n("v-tab-item",[n("v-card",{attrs:{flat:""}})],1),t._v(" "),n("v-tab-item",[n("v-card",{attrs:{flat:""}},[n("v-date-picker",{attrs:{"no-title":"",scrollable:"",value:"yyyy/MM/dd"},model:{value:t.begin_date,callback:function(e){t.begin_date=e},expression:"begin_date"}},[n("v-layout",{attrs:{"justify-end":"",row1:""}},[n("v-btn",{attrs:{text:"",color:"primary"},on:{click:function(e){return t.$refs.menu_visible1.save(t.begin_date)}}},[t._v("\n                                                    confirm\n                                                ")])],1)],1)],1)],1)],1)],1)],1),t._v(" "),n("v-col",{attrs:{cols:"1"}},[n("v-subheader",[t._v("~")])],1),t._v(" "),n("v-col",{attrs:{cols:"4"}},[n("v-menu",{ref:"menu_visible2",attrs:{"close-on-content-click":!1,"return-value":t.end_date,transition:"scale-transition","offset-y":"","min-width":"auto"},on:{"update:returnValue":function(e){t.end_date=e},"update:return-value":function(e){t.end_date=e}},scopedSlots:t._u([{key:"activator",fn:function(e){var a=e.on,o=e.attrs;return[n("v-text-field",t._g(t._b({attrs:{"append-icon":"event",readonly:""},on:{"click:append":a.click},model:{value:t.end_date,callback:function(e){t.end_date=e},expression:"end_date"}},"v-text-field",o,!1),a))]}}]),model:{value:t.menu_visible2,callback:function(e){t.menu_visible2=e},expression:"menu_visible2"}},[t._v(" "),n("v-tabs",{attrs:{"align-with-title":"","justify-end":""},model:{value:t.tab,callback:function(e){t.tab=e},expression:"tab"}},[n("v-tabs-slider",{attrs:{color:"yellow"}}),t._v(" "),t._l(t.items,function(e){return n("v-tab",{key:e},[t._v("\n                                    "+t._s(e)+"\n                                ")])})],2),t._v(" "),n("v-tabs-items",{model:{value:t.tab,callback:function(e){t.tab=e},expression:"tab"}},[n("v-tab-item",[n("v-card",{attrs:{flat:""}})],1),t._v(" "),n("v-tab-item",[n("v-card",{attrs:{flat:""}},[n("v-date-picker",{attrs:{"no-title":"",scrollable:"",value:"yyyy/MM/dd"},model:{value:t.end_date,callback:function(e){t.end_date=e},expression:"end_date"}},[n("v-layout",{attrs:{"justify-end":"",row2:""}},[n("v-btn",{attrs:{text:"",color:"primary"},on:{click:function(e){return t.$refs.menu_visible2.save(t.end_date)}}},[t._v("\n                                                    confirm\n                                                ")])],1)],1)],1)],1)],1)],1)],1)],1),t._v(" "),n("v-spacer"),t._v(" "),n("v-row",[n("v-col",{attrs:{cols:"8",sm:"6",md:"3"}},[n("v-subheader",[t._v("Invited")])],1),t._v(" "),n("v-col",{attrs:{cols:"8"}},[n("v-text-field",{attrs:{rules:[t.rules.required,t.rules.emailMatch],name:"input-E-mail",value:"",error:""}})],1)],1),t._v(" "),n("v-row",[n("v-textarea",{attrs:{label:"Agenda","auto-grow":"",outlined:"","row-height":"25"},model:{value:t.agenda,callback:function(e){t.agenda=e},expression:"agenda"}})],1),t._v(" "),n("v-row",[n("v-col",{attrs:{cols:"12"}},[n("v-text-field",{attrs:{label:"Notes for self"},model:{value:t.notes,callback:function(e){t.notes=e},expression:"notes"}})],1)],1),t._v(" "),n("v-layout",{attrs:{"justify-center":"",rowb:""}},[n("el-button",{staticStyle:{width:"30%"},attrs:{type:"primary"},on:{click:t.submit}},[t._v("Submit")]),t._v(" "),n("v-dialog",{attrs:{persistent:"","max-width":"290"},scopedSlots:t._u([{key:"activator",fn:function(e){var a=e.on,o=e.attrs;return[n("v-btn",t._g(t._b({staticStyle:{width:"30%"},attrs:{color:"primary",dark:""}},"v-btn",o,!1),a),[t._v("\n                            Cancel\n                            ")])]}}]),model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[t._v(" "),n("v-card",[n("v-card-title",{staticClass:"text-h5"},[t._v("Cancel?")]),t._v(" "),n("v-card-text",[t._v("Are you sure you would like to cancel this appoiuntment?")]),t._v(" "),n("v-card-actions",[n("v-spacer"),t._v(" "),n("v-btn",{attrs:{color:"green darken-1",text:""},on:{click:t.cancel}},[t._v("\n                                Yes\n                            ")]),t._v(" "),n("v-btn",{attrs:{color:"green darken-1",text:""},on:{click:function(e){t.dialog=!1}}},[t._v("\n                                No\n                            ")])],1)],1)],1)],1)],1)],1)],1)],1)},staticRenderFns:[]};var S=n("VU/8")(x,A,!1,function(t){n("HIl7")},null,null).exports,D={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"text-center"},[n("v-dialog",{attrs:{width:"500"},scopedSlots:t._u([{key:"activator",fn:function(e){var a=e.on,o=e.attrs;return[n("v-btn",t._g(t._b({attrs:{color:"red lighten-2",dark:""}},"v-btn",o,!1),a),[t._v("\n        Click Me\n      ")])]}}]),model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[t._v(" "),n("v-card",[n("v-card-title",{staticClass:"text-h5 grey lighten-2"},[t._v("\n        Privacy Policy\n      ")]),t._v(" "),n("v-card-text",[t._v("\n        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n      ")]),t._v(" "),n("v-divider"),t._v(" "),n("v-card-actions",[n("v-spacer"),t._v(" "),n("v-btn",{attrs:{color:"primary",text:""},on:{click:function(e){t.dialog=!1}}},[t._v("\n          I accept\n        ")])],1)],1)],1)],1)},staticRenderFns:[]},$=n("VU/8")({data:function(){return{dialog:!1}}},D,!1,null,null,null).exports,E={data:function(){return{dates:new Date(Date.now()-6e4*(new Date).getTimezoneOffset()).toISOString().substr(0,10)}}},I={render:function(){var t=this.$createElement;return(this._self._c||t)("p",[this._v("AAAAAAAAAAAAAAAAAAAAAAAArc!")])},staticRenderFns:[]},q=n("VU/8")(E,I,!1,null,null,null).exports,M={data:function(){return{dates:new Date(Date.now()-6e4*(new Date).getTimezoneOffset()).toISOString().substr(0,10)}}},C={render:function(){var t=this.$createElement;return(this._self._c||t)("p",[this._v("Boooooooooooooooooooooooooooook!")])},staticRenderFns:[]},R=n("VU/8")(M,C,!1,null,null,null).exports;a.default.use(r.a);var F=new r.a({routes:[{path:"/",name:"HomeMain",component:c,children:[{path:"home",name:"Home",component:_},{path:"activity",name:"Activity",component:q},{path:"booking",name:"Booking",component:R}]},{path:"/login",name:"Login",component:g},{path:"/signup",name:"Signup",component:k},{path:"/activityWindow",name:"ActivityWindow",component:S},{path:"/dateSelect",name:"DateSelect",component:$},{path:"/*",redirect:"/home"}]}),H=n("zL8q"),U=n.n(H),j=(n("tvR6"),n("3EgV")),O=n.n(j);n("7zck");a.default.use(O.a);var V=new O.a({});n("gJtD");a.default.use(U.a),a.default.config.productionTip=!1,new a.default({el:"#app",router:F,components:{App:i},template:"<App/>",vuetify:V}).$mount("#app")},ZLD3:function(t,e){},ZyqW:function(t,e){},foxG:function(t,e){},gJtD:function(t,e){},jqub:function(t,e){},tvR6:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.40a7bc42f4dbb409cc7a.js.map