webpackJsonp([2,0],[function(t,e,n){"use strict";function a(t){return t&&t.__esModule?t:{default:t}}var s=n(8),o=a(s),r=n(188),i=a(r);n(155);var c=n(2),u=a(c),l=n(157),d=a(l),f=n(207),h=a(f),p=n(156),m=a(p),v=n(187),_=a(v);n(159),o.default.use(h.default),o.default.use(m.default),o.default.use(_.default);new o.default({el:"#app",template:"<App/>",store:u.default,router:d.default,components:{App:i.default}})},,function(t,e,n){"use strict";function a(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var s=n(8),o=a(s),r=n(208),i=a(r),c=n(158),u=a(c);o.default.use(i.default),e.default=new i.default.Store({state:{Title:""},getters:{Title:function(t){return t.Title}},mutations:{TITLE_CHANGED:function(t,e){t.Title=e}},modules:{session:u.default}})},,,,,,,,function(t,e,n){var a,s,o=n(192);s=a=a||{},"object"!=typeof a.default&&"function"!=typeof a.default||(s=a=a.default),"function"==typeof s&&(s=s.options),s.render=o.render,s.staticRenderFns=o.staticRenderFns,t.exports=a},function(t,e,n){var a,s;a=n(141);var o=n(201);s=a=a||{},"object"!=typeof a.default&&"function"!=typeof a.default||(s=a=a.default),"function"==typeof s&&(s=s.options),s.render=o.render,s.staticRenderFns=o.staticRenderFns,t.exports=a},function(t,e,n){var a,s;n(177),a=n(142);var o=n(191);s=a=a||{},"object"!=typeof a.default&&"function"!=typeof a.default||(s=a=a.default),"function"==typeof s&&(s=s.options),s.render=o.render,s.staticRenderFns=o.staticRenderFns,s._scopeId="data-v-1a22d48e",t.exports=a},function(t,e,n){var a,s;a=n(143);var o=n(204);s=a=a||{},"object"!=typeof a.default&&"function"!=typeof a.default||(s=a=a.default),"function"==typeof s&&(s=s.options),s.render=o.render,s.staticRenderFns=o.staticRenderFns,t.exports=a},function(t,e,n){var a,s;a=n(144);var o=n(198);s=a=a||{},"object"!=typeof a.default&&"function"!=typeof a.default||(s=a=a.default),"function"==typeof s&&(s=s.options),s.render=o.render,s.staticRenderFns=o.staticRenderFns,t.exports=a},function(t,e,n){var a,s;n(178),a=n(145);var o=n(202);s=a=a||{},"object"!=typeof a.default&&"function"!=typeof a.default||(s=a=a.default),"function"==typeof s&&(s=s.options),s.render=o.render,s.staticRenderFns=o.staticRenderFns,t.exports=a},function(t,e,n){var a,s;a=n(146);var o=n(197);s=a=a||{},"object"!=typeof a.default&&"function"!=typeof a.default||(s=a=a.default),"function"==typeof s&&(s=s.options),s.render=o.render,s.staticRenderFns=o.staticRenderFns,t.exports=a},function(t,e,n){var a,s;a=n(147);var o=n(190);s=a=a||{},"object"!=typeof a.default&&"function"!=typeof a.default||(s=a=a.default),"function"==typeof s&&(s=s.options),s.render=o.render,s.staticRenderFns=o.staticRenderFns,t.exports=a},function(t,e,n){var a,s;a=n(148);var o=n(200);s=a=a||{},"object"!=typeof a.default&&"function"!=typeof a.default||(s=a=a.default),"function"==typeof s&&(s=s.options),s.render=o.render,s.staticRenderFns=o.staticRenderFns,t.exports=a},function(t,e,n){var a,s;a=n(149);var o=n(199);s=a=a||{},"object"!=typeof a.default&&"function"!=typeof a.default||(s=a=a.default),"function"==typeof s&&(s=s.options),s.render=o.render,s.staticRenderFns=o.staticRenderFns,t.exports=a},function(t,e,n){var a,s;a=n(150);var o=n(195);s=a=a||{},"object"!=typeof a.default&&"function"!=typeof a.default||(s=a=a.default),"function"==typeof s&&(s=s.options),s.render=o.render,s.staticRenderFns=o.staticRenderFns,t.exports=a},function(t,e,n){var a,s;a=n(151);var o=n(196);s=a=a||{},"object"!=typeof a.default&&"function"!=typeof a.default||(s=a=a.default),"function"==typeof s&&(s=s.options),s.render=o.render,s.staticRenderFns=o.staticRenderFns,t.exports=a},function(t,e,n){var a,s;a=n(152);var o=n(193);s=a=a||{},"object"!=typeof a.default&&"function"!=typeof a.default||(s=a=a.default),"function"==typeof s&&(s=s.options),s.render=o.render,s.staticRenderFns=o.staticRenderFns,t.exports=a},function(t,e,n){"use strict";function a(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var s=n(19),o=a(s),r=n(18),i=a(r),c=function(t){return!function(){var e=[n(11)];t.apply(null,e)}.call(this)},u=function(t){return!function(){var e=[n(14)];t.apply(null,e)}.call(this)},l=function(t){return!function(){var e=[n(22)];t.apply(null,e)}.call(this)};e.default=[{path:"/",redirect:"/Home"},{path:"/Home",component:o.default,meta:{ShowInMenu:!0,Display:"Home",Icon:"fa-home"}},{path:"/Balance",component:u,meta:{RequiresAuth:!0,ShowInMenu:!0,Display:"Balance",Icon:"fa-line-chart"}},{path:"/Transactions",redirect:"/Transactions/New",meta:{ShowInMenu:!0,Display:"Transactions",Icon:"fa-exchange"}},{path:"/Transactions/New",component:l,meta:{RequiresAuth:!0}},{path:"/Accounts/:Mode?/:Id?",component:c,meta:{RequiresAuth:!0}},{path:"/Accounts",redirect:"/Accounts/All",component:c,meta:{ShowInMenu:!0,Display:"Accounts",Icon:"fa-bank"}},{path:"/:ComponentName",component:i.default}]},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(t,e,n){var a,s;a=n(153);var o=n(194);s=a=a||{},"object"!=typeof a.default&&"function"!=typeof a.default||(s=a=a.default),"function"==typeof s&&(s=s.options),s.render=o.render,s.staticRenderFns=o.staticRenderFns,t.exports=a},,,function(t,e,n){"use strict";function a(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0}),n(174),n(175),n(176);var s=n(21),o=a(s),r=n(20),i=a(r);e.default={name:"app",computed:{Title:function(){return this.$store.getters.Title},isAuthenticated:function(){return null!=this.$store.getters.CurrentUser}},watch:{isAuthenticated:function(t){if(t){var e=this.$route.query.redirect;e&&this.$router.replace(e)}else this.$router.push("Home")}},components:{SessionState:o.default,NavMenu:i.default}}},function(t,e,n){"use strict";function a(t){return t&&t.__esModule?t:{default:t}}function s(t,e){var n=u.indexOf(t)!=-1;return n||e.replace("/Accounts/All"),n}Object.defineProperty(e,"__esModule",{value:!0});var o=n(13),r=a(o),i=n(12),c=a(i),u=["All","New","Edit"];e.default={data:function(){return{Mode:""}},computed:{IsBrowse:function(){return"All"==this.Mode}},watch:{$route:function(t,e){var n=t.params.Mode;s(n,this.$router)&&(this.Mode=n)},Mode:function(t,e){var n=void 0;switch(t){case"New":n="Create Account";break;case"Edit":n="Edit Account";break;default:n="Accounts"}this.$store.commit("TITLE_CHANGED",n)}},beforeMount:function(){var t=this.$route.params.Mode;s(t,this.$router)&&(this.Mode=t)},components:{EditAccount:r.default,BrowseAccounts:c.default}}},function(t,e,n){"use strict";function a(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var s=n(3),o=a(s),r=n(2),i=a(r),c=n(5),u=a(c),l=i.default.getters.Uid,d=o.default.database().ref(l+"/Accounts");e.default={data:function(){return{Filter:""}},firebase:{Accounts:d},computed:{HasEntries:function(){return u.default.any(this.Accounts)},AccountsFiltered:function(){var t=this;return this.Accounts.filter(function(e){return e.Name.toLowerCase().indexOf(t.Filter.toLowerCase())!=-1})}},methods:{ToggleIsEnabled:function(t){if(t.Balance)return void this.$log.warning("Cannot disable","Balance must to be 0");var e=t[".key"],n={IsEnabled:!t.IsEnabled};d.child(e).update(n),this.$log.success("Account "+(t.IsEnabled?"disabled":"enabled"))}}}},function(t,e,n){"use strict";function a(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var s=n(5),o=a(s),r=n(3),i=a(r),c=n(138),u=a(c),l={Name:"",Type:"Active",IsEnabled:!0,Balance:0};e.default={data:function(){return{Options:["Active","Passive"],Account:o.default.clone(l),Mode:null,Id:null}},methods:{Save:function(){if(this.ValidateAccount()){switch(this.Mode){case"New":this.InsertAccount();break;case"Edit":this.UpdateAccount()}this.$router.replace("/Accounts")}},ValidateAccount:function(){return!!this.Account.Name||(this.$log.warning("Name is required"),!1)},InsertAccount:function(){var t=i.default.database().ref(this.$store.getters.Uid+"/Accounts");t.push(this.Account);this.$log.success("Account created!")},UpdateAccount:function(){var t=i.default.database().ref(this.$store.getters.Uid+"/Accounts/"+this.Id);t.update(this.Account),this.$log.success("Account updated!")},MapRouteParams:function(t){var e=this;switch(this.Mode=t.Mode,this.Id=t.Id,this.Mode){case"New":this.Account=o.default.clone(l);break;case"Edit":i.default.database().ref(this.$store.getters.Uid+"/Accounts/"+this.Id).once("value").then(function(t){var n=t.val();e.Account={Name:n.Name,Type:n.Type,Balance:n.Balance}})}},UpdateType:function(t){this.Account.Type=t}},watch:{$route:function(t,e){this.MapRouteParams(t)}},beforeMount:function(){this.MapRouteParams(this.$route.params)},components:{Multiselect:u.default}}},function(t,e,n){"use strict";function a(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var s=n(3),o=a(s),r=n(2),i=a(r),c=n(5),u=(a(c),n(15)),l=a(u),d=n(16),f=a(d),h=i.default.getters.Uid,p=o.default.database().ref(h+"/Accounts"),m=o.default.database().ref(h+"/Transactions").orderByChild("Date");e.default={data:function(){return{Title:"Balance",CurrentTransaction:void 0}},firebase:{RawAccounts:{source:p.orderByChild("IsEnabled").equalTo(!0),asObject:!0},RawTransactions:m},methods:{UpdateTransaction:function(t){this.CurrentTransaction=t}},mounted:function(){this.$store.commit("TITLE_CHANGED","Balance")},components:{GraphicBalance:l.default,TransactionDetail:f.default}}},function(t,e,n){"use strict";function a(t){return t&&t.__esModule?t:{default:t}}function s(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e}Object.defineProperty(e,"__esModule",{value:!0});var o=n(173),r=s(o),i=n(5),c=a(i),u=n(6),l=a(u),d=2;e.default={name:"GraphicBalance",props:["Accounts","Transactions"],data:function(){return{svg:void 0,margin:{top:20,right:80,bottom:30,left:50},width:void 0,height:void 0,g:void 0,viewBox:void 0}},computed:{AccountTransactions:function(){if(!this.Transactions.length)return[];var t={BalanceGeneral:{Name:"Balance General",BalanceFinal:0,Balance:0,Transactions:[]}};for(var e in this.Accounts)".key"!=e&&(t[e]={Name:this.Accounts[e].Name,BalanceFinal:this.Accounts[e].Balance,Balance:0,Transactions:[]},t.BalanceGeneral.BalanceFinal+=this.Accounts[e].Balance);return c.default.each(this.Transactions,function(e){e.From&&t[e.From]&&(t.BalanceGeneral.Balance-=e.Amount,t[e.From].Balance-=e.Amount,t[e.From].Transactions.push({Name:t[e.From].Name,Balance:t[e.From].Balance,Date:e.Date,RawTransaction:e})),e.To&&t[e.To]&&(t.BalanceGeneral.Balance+=e.Amount,t[e.To].Balance+=e.Amount,t[e.To].Transactions.push({Name:t[e.To].Name,Balance:t[e.To].Balance,Date:e.Date,RawTransaction:e})),t.BalanceGeneral.Transactions.push({Name:t.BalanceGeneral.Name,Balance:t.BalanceGeneral.Balance,Date:e.Date,RawTransaction:e})}),c.default.values(t)}},watch:{AccountTransactions:function(){this.PaintData()}},methods:{UpdateSize:function(){this.svg=r.select("svg");var t=this.$el.clientWidth,e=t/d;this.svg.attr("width",t),this.svg.attr("height",e),this.viewBox||(this.viewBox="0 0 "+t+" "+e,this.svg.attr("viewBox",this.viewBox)),this.svg.style("height",e)},PaintData:function(){if(r.selectAll("svg > *").remove(),this.Transactions.length){var t=this;this.width=this.svg.attr("width")-this.margin.left-this.margin.right,this.height=this.svg.attr("height")-this.margin.top-this.margin.bottom,this.g=this.svg.append("g").attr("transform","translate("+this.margin.left+","+this.margin.top+")");var e=(this.svg,r.timeParse("%Y%m%d"),r.bisector(function(t){return t.Date}).left,r.scaleTime().range([0,this.width])),n=r.scaleLinear().range([this.height,0]),a=r.scaleOrdinal(r.schemeCategory10),s=r.voronoi().x(function(t){return e(t.Date)}).y(function(t){return n(t.Balance)}).extent([[-this.margin.left,-this.margin.top],[this.width+this.margin.right,this.height+this.margin.bottom]]),o=r.line().curve(r.curveMonotoneX).x(function(t){return e(t.Date)}).y(function(t){return n(t.Balance)}),i=r.extent(this.Transactions,function(t){return t.Date});e.domain(i),n.domain([r.min(this.AccountTransactions,function(t){return r.min(t.Transactions,function(t){return t.Balance})}),r.max(this.AccountTransactions,function(t){return r.max(t.Transactions,function(t){return t.Balance})})]),a.domain(this.AccountTransactions.map(function(t){return t.Name})),this.g.append("g").attr("class","axis axis--x").attr("transform","translate(0,"+this.height+")").call(r.axisBottom(e)),this.g.append("g").attr("class","axis axis--y").call(r.axisLeft(n).ticks(6).tickFormat(function(t){return l.default.formatMoney(t/100)})).append("text").attr("transform","rotate(-90)").attr("y",6).attr("dy","0.71em").attr("fill","#000").text("Balance");var c=this.g.selectAll(".transaction").data(this.AccountTransactions).enter().append("g").attr("class","transaction");c.append("path").attr("class","line").attr("d",function(t){return t.line=this,o(t.Transactions)}).style("stroke",function(t){return a(t.Name)}),c.append("text").attr("transform",function(t){return"translate("+e(i[1])+","+n(t.BalanceFinal)+")"}).attr("x",3).attr("dy","0.35em").style("font","10px sans-serif").text(function(t){return t.Name});var u=r.merge(t.AccountTransactions.map(function(t){return t.Transactions}));this.g.selectAll(".dot").data(u).enter().append("circle").attr("class","dot").attr("cx",function(t){return t.point=this,o.x()(t)}).attr("cy",o.y()).attr("r",3.5).style("stroke",function(t){return a(t.Name)});var d=this.g.append("g").attr("transform","translate(-100,-100)").attr("class","focus");d.append("circle").attr("r",2),d.append("text").attr("y",-10);var f=this.g.append("g").attr("class","voronoi"),h=s.polygons(u);f.selectAll("path").data(h).enter().append("path").attr("d",function(t){return t?"M"+t.join("L")+"Z":null}).on("mouseover",function(t){d.attr("transform","translate("+e(t.data.Date)+","+n(t.data.Balance)+")"),d.select("text").text(l.default.formatMoney(t.data.Balance/100))}).on("mouseout",function(t){d.attr("transform","translate(-100,-100)")}).on("click",function(e){t.$emit("TransactionSelected",e.data.RawTransaction)})}}},mounted:function(){this.UpdateSize(),this.PaintData(),window.addEventListener("resize",this.UpdateSize)},beforeDestroy:function(){window.removeEventListener("resize",this.UpdateSize)}}},function(t,e,n){"use strict";function a(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var s=n(1),o=a(s),r=n(6),i=a(r);e.default={name:"TransactionDetail",props:["Accounts","Transaction"],computed:{SelectedTransaction:function(){return{From:this.Transaction.From?this.Accounts[this.Transaction.From].Name:"",To:this.Transaction.To?this.Accounts[this.Transaction.To].Name:"",Amount:i.default.formatMoney(this.Transaction.Amount/100),Date:(0,o.default)(this.Transaction.Date).format(),Note:this.Transaction.Note}}}}},function(t,e,n){"use strict";function a(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var s=n(6),o=a(s);e.default={name:"InputMoney",props:{value:{type:Number,default:0}},data:function(){return{hasFocus:!1}},mounted:function(){this.formatValue()},watch:{value:function(t){this.formatValue()}},methods:{updateValue:function(t,e){var n=o.default.unformat(t);n=parseInt(100*n),this.$emit("input",n)},blur:function(){this.hasFocus=!1,this.formatValue()},formatValue:function(){this.hasFocus||(this.$refs.input.value=o.default.formatMoney(this.value/100))},selectAll:function(t){this.hasFocus=!0,setTimeout(function(){t.target.select()},0)}}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{CurrentComponent:void 0}},methods:{load:function(t){try{this.CurrentComponent=n(210)("./"+t)}catch(t){this.CurrentComponent=n(10)}}},watch:{$route:function(t,e){this.load(t.params.ComponentName)}},beforeMount:function(){this.load(this.$route.params.ComponentName)}}},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={mounted:function(){this.$store.commit("TITLE_CHANGED","Arc Accounting")}}},function(t,e,n){"use strict";function a(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var s=n(23),o=a(s);e.default={name:"NavMenu",data:function(){var t={routes:o.default.filter(function(t){return!!t.meta&&t.meta.ShowInMenu}).map(function(t){return{path:t.meta.defaultPath?t.meta.defaultPath:t.path,Icon:t.meta.Icon,Display:t.meta.Display}})};return t}}},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"SessionState",computed:{CurrentUser:function(){return this.$store.getters.CurrentUser}},methods:{signin:function(){this.$store.dispatch("signin")},signout:function(){this.$store.dispatch("signout")}},created:function(){this.$store.dispatch("initSession")}}},function(t,e,n){"use strict";function a(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var s=n(138),o=a(s),r=n(17),i=a(r),c=n(3),u=a(c),l=n(2),d=a(l),f=n(5),h=a(f),p=n(1),m=a(p),v=n(160),_=a(v),y=d.default.getters.Uid,g=u.default.database().ref(y+"/Accounts"),b=u.default.database().ref(y+"/Transactions"),A={Name:"n/a"},j={From:A,To:A,Amount:0,Note:"",Date:+(0,m.default)()};e.default={data:function(){return h.default.clone(j)},firebase:{RawAccounts:g.orderByChild("IsEnabled").equalTo(!0)},computed:{Accounts:function(){return[A].concat(this.RawAccounts)},AccountsFrom:function(){var t=this;return h.default.filter(this.Accounts,function(e){return e[".key"]!=t.To[".key"]})},AccountsTo:function(){var t=this;return h.default.filter(this.Accounts,function(e){return e[".key"]!=t.From[".key"]})},FlatPickrOptions:function(){return{allowInput:!0,defaultDate:new Date,enableTime:!0}}},methods:{UpdateDate:function(t){this.Date=+(0,m.default)(t)},UpdateFrom:function(t){this.From=t},UpdateTo:function(t){this.To=t},Save:function(){var t=this.From[".key"],e=this.To[".key"];if(t===e)return void this.$log.warning("Cannot transfer to same account");var n={Amount:this.Amount,Note:this.Note,Date:this.Date};t&&(n.From=t,this.UpdateBalance(n,"From")),e&&(n.To=e,this.UpdateBalance(n,"To")),b.push(n),this.$log.success("Transaction saved!"),this.Clear()},Clear:function(){_.default.assing(this,j)},UpdateBalance:function(t,e){var n=this,a=t[e],s="To"===e?t.Amount:-1*t.Amount,o=u.default.database().ref(y+"/Accounts/"+a+"/Balance");o.transaction(function(t){return null===t?{}:t+s},function(t,e){t&&n.$log.error(t.toString())},!0)}},mounted:function(){this.$store.commit("TITLE_CHANGED","New transaction")},components:{Multiselect:o.default,InputMoney:i.default}}},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{Title:"Transaction history"}},mounted:function(){this.$store.commit("TITLE_CHANGED",this.Title)}}},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"arc-notifications",computed:{alerts:function(){return this.$store.getters.Notifications}},methods:{dismiss:function(t){this.$store.dispatch("Dismiss",t)}}}},function(t,e,n){"use strict";function a(t){return t&&t.__esModule?t:{default:t}}var s=n(139),o=(a(s),n(3)),r=a(o),i=n(185),c=a(i);r.default.initializeApp(c.default)},function(t,e,n){"use strict";function a(t){return t&&t.__esModule?t:{default:t}}function s(t,e){function n(e,n,a){e="error"==e?"danger":e,t.dispatch("Add",{title:n,text:a,type:e})}e.prototype.$log={error:function(t,e){n("danger",t,e)},warning:function(t,e){n("warning",t,e)},info:function(t,e){n("info",t,e)},success:function(t,e){n("success",t,e)},log:n}}function o(t,e){var n,a={Notifications:[]},s={Notifications:function(t){return t.Notifications.map(function(t){return t.Raw})}},o={Add:function(t,n){var a=t.commit,s=setTimeout(function(){a(p,n)},e);a(h,{Raw:n,TimeOut:s})},Dismiss:function(t,e){var n=t.commit;n(p,e)}},r=(n={},(0,c.default)(n,h,function(t,e){t.Notifications.push(e)}),(0,c.default)(n,p,function(t,e){var n=t.Notifications.map(function(t){return t.Raw}).indexOf(e);n!=-1&&(clearTimeout(t.Notifications[n].TimeOut),t.Notifications.splice(n,1))}),n);t.registerModule("arcLogger",{state:a,getters:s,actions:o,mutations:r})}function r(t){t.component("arc-notifications",f.default)}Object.defineProperty(e,"__esModule",{value:!0});var i=n(24),c=a(i),u=n(2),l=a(u),d=n(189),f=a(d),h="NOTIFICATION_ADDED",p="NOTIFICATION_DISMISSED";e.default={install:function(t,e){e=e||{};var n=e.duration||8e3;s(l.default,t),o(l.default,n),r(t)}}},function(t,e,n){"use strict";function a(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var s=n(8),o=a(s),r=n(206),i=a(r),c=n(23),u=a(c),l=n(2),d=a(l);o.default.use(i.default);var f=new i.default({mode:"history",routes:u.default,linkActiveClass:"active",base:"/ArcAccounts/"});f.beforeEach(function(t,e,n){return t.matched.some(function(t){return t.meta.RequiresAuth})?void(d.default.getters.CurrentUser?n():n({path:"Home",query:{redirect:t.fullPath}})):void n()}),e.default=f},function(t,e,n){"use strict";function a(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var s,o=n(24),r=a(o),i=n(3),c=a(i),u="AUTH_REQUEST",l="SINGIN_SUCCESS",d="SINGIN_FAILURE",f="SINGOUT_SUCCESS",h="SINGOUT_FAILURE",p={CurrentUser:c.default.auth().currentUser,AuthenticationInProgress:!1,Error:null},m={CurrentUser:function(t){return t.CurrentUser},Uid:function(t){return t.CurrentUser?t.CurrentUser.uid:void 0}},v={signin:function(t){var e=t.commit;e(u),c.default.auth().signInWithPopup(new c.default.auth.GoogleAuthProvider).then(function(t){e(l,t.user)}).catch(function(t){e(d,t.message)})},signout:function(t){var e=t.commit;e(u),c.default.auth().signOut().then(function(){e(f)}).catch(function(t){e(h,t.message)})},initSession:function(t){var e=t.commit,n=t.state;if(!n.CurrentUser){var a=c.default.auth().currentUser;return a?void e(l,a):void!function(){var t=c.default.auth().onAuthStateChanged(function(n){n&&(e(l,n),t())})}()}}},_=(s={},(0,r.default)(s,u,function(t){t.AuthenticationInProgress=!0,t.Error=null}),(0,r.default)(s,l,function(t,e){t.AuthenticationInProgress=!1,t.CurrentUser=e}),(0,r.default)(s,d,function(t,e){t.AuthenticationInProgress=!1,t.CurrentUser=null,t.Error=e}),(0,r.default)(s,f,function(t){t.AuthenticationInProgress=!1,t.CurrentUser=null}),(0,r.default)(s,h,function(t,e){t.AuthenticationInProgress=!1,t.Error=e}),s);e.default={state:p,getters:m,actions:v,mutations:_}},function(t,e,n){"use strict";function a(t){return t&&t.__esModule?t:{default:t}}var s=n(8),o=a(s),r=n(6),i=a(r);o.default.filter("money",function(t){return i.default.formatMoney(t/100)})},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n={assing:function(t,e){for(var n in e)t.hasOwnProperty(n)&&(t[n]=e[n])}};e.default=n},,,,,,,,,,,,,,function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},,,,,function(t,e){t.exports={apiKey:"AIzaSyC8Hs2xWkCDRMz6kK35FLVWxzUHtkGkwpc",authDomain:"arcaccounting-fa21a.firebaseapp.com",storageBucket:"arcaccounting-fa21a.appspot.com",databaseURL:"https://arcaccounting-fa21a.firebaseio.com",messagingSenderId:"523474972127"}},function(t,e,n){function a(t){return n(s(t))}function s(t){return o[t]||function(){throw new Error("Cannot find module '"+t+"'.")}()}var o={"./af":29,"./af.js":29,"./ar":35,"./ar-dz":30,"./ar-dz.js":30,"./ar-ly":31,"./ar-ly.js":31,"./ar-ma":32,"./ar-ma.js":32,"./ar-sa":33,"./ar-sa.js":33,"./ar-tn":34,"./ar-tn.js":34,"./ar.js":35,"./az":36,"./az.js":36,"./be":37,"./be.js":37,"./bg":38,"./bg.js":38,"./bn":39,"./bn.js":39,"./bo":40,"./bo.js":40,"./br":41,"./br.js":41,"./bs":42,"./bs.js":42,"./ca":43,"./ca.js":43,"./cs":44,"./cs.js":44,"./cv":45,"./cv.js":45,"./cy":46,"./cy.js":46,"./da":47,"./da.js":47,"./de":49,"./de-at":48,"./de-at.js":48,"./de.js":49,"./dv":50,"./dv.js":50,"./el":51,"./el.js":51,"./en-au":52,"./en-au.js":52,"./en-ca":53,"./en-ca.js":53,"./en-gb":54,"./en-gb.js":54,"./en-ie":55,"./en-ie.js":55,"./en-nz":56,"./en-nz.js":56,"./eo":57,"./eo.js":57,"./es":59,"./es-do":58,"./es-do.js":58,"./es.js":59,"./et":60,"./et.js":60,"./eu":61,"./eu.js":61,"./fa":62,"./fa.js":62,"./fi":63,"./fi.js":63,"./fo":64,"./fo.js":64,"./fr":67,"./fr-ca":65,"./fr-ca.js":65,"./fr-ch":66,"./fr-ch.js":66,"./fr.js":67,"./fy":68,"./fy.js":68,"./gd":69,"./gd.js":69,"./gl":70,"./gl.js":70,"./he":71,"./he.js":71,"./hi":72,"./hi.js":72,"./hr":73,"./hr.js":73,"./hu":74,"./hu.js":74,"./hy-am":75,"./hy-am.js":75,"./id":76,"./id.js":76,"./is":77,"./is.js":77,"./it":78,"./it.js":78,"./ja":79,"./ja.js":79,"./jv":80,"./jv.js":80,"./ka":81,"./ka.js":81,"./kk":82,"./kk.js":82,"./km":83,"./km.js":83,"./ko":84,"./ko.js":84,"./ky":85,"./ky.js":85,"./lb":86,"./lb.js":86,"./lo":87,"./lo.js":87,"./lt":88,"./lt.js":88,"./lv":89,"./lv.js":89,"./me":90,"./me.js":90,"./mi":91,"./mi.js":91,"./mk":92,"./mk.js":92,"./ml":93,"./ml.js":93,"./mr":94,"./mr.js":94,"./ms":96,"./ms-my":95,"./ms-my.js":95,"./ms.js":96,"./my":97,"./my.js":97,"./nb":98,"./nb.js":98,"./ne":99,"./ne.js":99,"./nl":101,"./nl-be":100,"./nl-be.js":100,"./nl.js":101,"./nn":102,"./nn.js":102,"./pa-in":103,"./pa-in.js":103,"./pl":104,"./pl.js":104,"./pt":106,"./pt-br":105,"./pt-br.js":105,"./pt.js":106,"./ro":107,"./ro.js":107,"./ru":108,"./ru.js":108,"./se":109,"./se.js":109,"./si":110,"./si.js":110,"./sk":111,"./sk.js":111,"./sl":112,"./sl.js":112,"./sq":113,"./sq.js":113,"./sr":115,"./sr-cyrl":114,"./sr-cyrl.js":114,"./sr.js":115,"./ss":116,"./ss.js":116,"./sv":117,"./sv.js":117,"./sw":118,"./sw.js":118,"./ta":119,"./ta.js":119,"./te":120,"./te.js":120,"./tet":121,"./tet.js":121,"./th":122,"./th.js":122,"./tl-ph":123,"./tl-ph.js":123,"./tlh":124,"./tlh.js":124,"./tr":125,"./tr.js":125,"./tzl":126,"./tzl.js":126,"./tzm":128,"./tzm-latn":127,"./tzm-latn.js":127,"./tzm.js":128,"./uk":129,"./uk.js":129,"./uz":130,"./uz.js":130,"./vi":131,"./vi.js":131,"./x-pseudo":132,"./x-pseudo.js":132,"./yo":133,"./yo.js":133,"./zh-cn":134,"./zh-cn.js":134,"./zh-hk":135,"./zh-hk.js":135,"./zh-tw":136,"./zh-tw.js":136};a.keys=function(){return Object.keys(o)},a.resolve=s,t.exports=a,a.id=186},,function(t,e,n){var a,s;n(180),a=n(140);var o=n(205);s=a=a||{},"object"!=typeof a.default&&"function"!=typeof a.default||(s=a=a.default),"function"==typeof s&&(s=s.options),s.render=o.render,s.staticRenderFns=o.staticRenderFns,t.exports=a},function(t,e,n){var a,s;n(179),a=n(154);var o=n(203);s=a=a||{},"object"!=typeof a.default&&"function"!=typeof a.default||(s=a=a.default),"function"==typeof s&&(s=s.options),s.render=o.render,s.staticRenderFns=o.staticRenderFns,s._scopeId="data-v-6fb17200",t.exports=a},function(t,e){t.exports={render:function(){var t=this;return t._h("input",{ref:"input",attrs:{model:t.value},on:{input:function(e){t.updateValue(e.target.value)},focus:t.selectAll,blur:t.blur}})},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this;return t._h("div",{staticClass:"col-xs-12"},[t._h("div",{staticClass:"row"},[t.Accounts?t._h("div",{staticClass:"col-xs-9 col-sm-8 col-md-7 col-lg-6"},[t._h("div",{staticClass:"input-group"},[t._h("input",{directives:[{name:"model",rawName:"v-model",value:t.Filter,expression:"Filter"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Search"},domProps:{value:t._s(t.Filter)},on:{input:function(e){e.target.composing||(t.Filter=e.target.value)}}})," ",t._m(0)])]):t._e()," ",t._h("div",{staticClass:"col-xs-3 col-sm-4 col-md-5 col-lg-6"},[t._h("router-link",{staticClass:"btn btn-success",attrs:{to:"New",tag:"button"}},["New"])])])," ",t._h("div",{staticClass:"row"},[t._h("div",{staticClass:"col-xs-12 col-sm-11 col-md-10 col-lg-8"},[t.HasEntries?t._h("div",{staticClass:"table-responsive"},[t._h("table",{staticClass:"table table-condensed"},[t._m(1)," ",t._h("tbody",[t._l(t.AccountsFiltered,function(e){return t._h("tr",{class:{warning:!e.IsEnabled}},[t._h("td",{staticClass:"actions"},[t._h("div",{staticClass:"btn-group btn-group-sm",attrs:{role:"group"}},[t._h("router-link",{staticClass:"btn btn-default",attrs:{to:"Edit/"+e[".key"],title:"Edit"}},[t._h("i",{staticClass:"fa fa-pencil"})])," ",t._h("button",{staticClass:"btn btn-default",attrs:{title:e.IsEnabled?"Disable":"Enable"},on:{click:function(n){t.ToggleIsEnabled(e)}}},[t._h("i",{staticClass:"fa",class:e.IsEnabled?"fa-toggle-on":"fa-toggle-off"})])])])," ",t._h("td",[t._s(e.Name)])," ",t._h("td",[t._s(e.Type)])," ",t._h("td",[t._s(t._f("money")("Active"==e.Type?e.Balance:e.Balance*-1))])])})])])]):t._h("div",[t._h("span",["No accounts available, create your first account!"])])," "])])])},staticRenderFns:[function(){var t=this;return t._h("span",{staticClass:"input-group-btn"},[t._h("button",{staticClass:"btn btn-default",attrs:{type:"button"}},[t._h("i",{staticClass:"fa fa-search"})])])},function(){var t=this;return t._h("thead",[t._h("tr",[t._h("td",{staticClass:"actionsHeader"})," ",t._h("td",["Cuenta"])," ",t._h("td",["Type"])," ",t._h("td",["Balance"])])])}]}},function(t,e){t.exports={render:function(){var t=this;return t._h("h2",["Invalid route"])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this;return t._h("div",{staticClass:"col-xs-12 col-sm-8 col-md-6 col-lg-5"},[t._h("div",{staticClass:"form-group"},[t._h("label",["From"])," ",t._h("Multiselect",{key:".key",attrs:{options:t.AccountsFrom,value:t.From,"show-labels":!1,label:"Name"},on:{select:t.UpdateFrom}})])," ",t._h("div",{staticClass:"form-group"},[t._h("label",["To"])," ",t._h("Multiselect",{key:".key",attrs:{options:t.AccountsTo,value:t.To,"show-labels":!1,label:"Name"},on:{select:t.UpdateTo}})])," ",t._h("div",{staticClass:"form-group"},[t._h("label",["Amount"])," ",t._h("InputMoney",{directives:[{name:"model",rawName:"v-model",value:t.Amount,expression:"Amount"}],staticClass:"form-control",domProps:{value:t.Amount},on:{input:function(e){t.Amount=e}}})])," ",t._h("div",{staticClass:"form-group"},[t._h("label",["Note"])," ",t._h("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.Note,expression:"Note",modifiers:{trim:!0}}],staticClass:"form-control",domProps:{value:t._s(t.Note)},on:{input:function(e){e.target.composing||(t.Note=e.target.value.trim())}}})])," ",t._h("div",{staticClass:"form-group"},[t._h("label",["Date"])," ",t._h("Flatpickr",{staticClass:"form-control",attrs:{options:t.FlatPickrOptions},on:{input:t.UpdateDate}})])," ",t._h("button",{staticClass:"btn btn-success",on:{click:t.Save}},["Save"])," ",t._h("button",{staticClass:"btn btn-default",on:{click:t.Clear}},["Clear"])])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this;return t._h("h1",[t._s(t.Title)])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this;return t._h("ul",{staticClass:"nav nav-pills nav-stacked",staticStyle:{"margin-top":"5px"}},[t._l(t.routes,function(e){return t._h("router-link",{attrs:{to:e.path,tag:"li"}},[t._h("a",[t._h("span",[t._h("li",{staticClass:"fa",class:e.Icon})])," "+t._s(e.Display)+"\n    "])])})])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this;return t._h("div",{staticClass:"row",attrs:{id:"session-state"}},[t._h("div",{staticClass:"col-xs-12"},[t._h("div",{staticClass:"pull-right"},[t.CurrentUser?t._h("div",[t._h("span",[t._s(t.CurrentUser.displayName)])," ",t._h("button",{staticClass:"btn btn-danger",on:{click:t.signout}},["Sign out"])]):t._h("div",[t._h("span",["Please sign in to use this application"])," ",t._h("button",{staticClass:"btn btn-primary",on:{click:t.signin}},["Sign in!"])])," "])])])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this;return t.Transaction?t._h("div",[t._h("div",{staticClass:"form-group"},[t._h("label",["From"])," "+t._s(t.SelectedTransaction.From)+"\n  "])," ",t._h("div",{staticClass:"form-group"},[t._h("label",["To"])," "+t._s(t.SelectedTransaction.To)+"\n  "])," ",t._h("div",{staticClass:"form-group"
},[t._h("label",["Amount"])," "+t._s(t.SelectedTransaction.Amount)+"\n  "])," ",t._h("div",{staticClass:"form-group"},[t._h("label",["Note"])," "+t._s(t.SelectedTransaction.Note)+"\n  "])," ",t._h("div",{staticClass:"form-group"},[t._h("label",["Date"])," "+t._s(t.SelectedTransaction.Date)+"\n  "])]):t._e()},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this;return t._h("div",{staticClass:"col-xs-12"},[t._h("div",{staticClass:"row"},[t._h("div",{staticClass:"col-xs-12 col-sm-12 col-md-10 col-lg-6"},[t._h("GraphicBalance",{attrs:{Accounts:t.RawAccounts,Transactions:t.RawTransactions},on:{TransactionSelected:t.UpdateTransaction}})])," ",t._h("div",{staticClass:"col-xs-12 col-sm-6 col-md-5 col-lg-4"},[t._h("TransactionDetail",{attrs:{Accounts:t.RawAccounts,Transaction:t.CurrentTransaction}})])])])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this;return t._m(0)},staticRenderFns:[function(){var t=this;return t._h("div",[t._h("p",["\n    Hello!\n  "])," ",t._h("p",["\n    Thank you for try Arc Accounting, this is an alpha version so is highly probable that your data could be lost without previous warn\n  "])," ",t._h("p",["\n    Please send me any feedback or just say hi to ",t._h("a",{attrs:{href:"mailto:aldoromo88@gmail.com",target:"_top"}},["aldoromo88@gmail.com"])])])}]}},function(t,e){t.exports={render:function(){var t=this;return t._h(t.CurrentComponent,{tag:"component"})},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this;return t._h("div",{staticClass:"row"},[t._h("transition",{attrs:{name:"slide"}},[t.IsBrowse?t._h("BrowseAccounts",{key:t.IsBrowse,staticClass:"slide"}):t._h("EditAccount",{key:t.IsBrowse,staticClass:"slide"})," "])])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this;return t._h("svg",{staticStyle:{width:"100%"},attrs:{width:"400",height:"200",perserveAspectRatio:"xMaxYMax"}})},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this;return t._h("transition-group",{staticClass:"top-right",attrs:{name:"notification-list",tag:"div"}},[t._l(t.alerts,function(e){return t._h("div",{key:e,staticClass:"notification alert alert-dismissible",class:"alert-"+e.type},[t._h("button",{staticClass:"close",attrs:{type:"button","aria-label":"Close"},on:{click:function(n){t.dismiss(e)}}},[t._h("span",{attrs:{"aria-hidden":"true"}},["×"])])," ",t._h("div",[t._h("div",[t._h("strong",[t._s(e.title)])])," ",t._h("div",["\n        "+t._s(e.text)+"\n      "])])])})])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this;return t._h("div",{staticClass:"col-xs-12 col-sm-8 col-md-6 col-lg-5"},[t._h("div",{staticClass:"form-group"},[t._h("label",{attrs:{for:"name"}},["Account name"])," ",t._h("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.Account.Name,expression:"Account.Name",modifiers:{trim:!0}}],staticClass:"form-control",attrs:{type:"text",id:"name",placeholder:"Name"},domProps:{value:t._s(t.Account.Name)},on:{input:function(e){e.target.composing||(t.Account.Name=e.target.value.trim())}}})])," ",t._h("div",{staticClass:"form-group"},[t._h("label",{attrs:{for:"type"}},["Type"])," ",t._h("Multiselect",{attrs:{options:t.Options,value:t.Account.Type,"allow-empty":!1,"show-labels":!1},on:{select:t.UpdateType}})])," ",t._h("div",{staticClass:"form-group"},[t._h("label",{attrs:{for:"name"}},["Balance"])," ",t._h("span",[t._s(t._f("money")("Active"==t.Account.Type?t.Account.Balance:t.Account.Balance*-1))])])," ",t._h("button",{staticClass:"btn btn-success",on:{click:t.Save}},["Save"])," ",t._h("router-link",{staticClass:"btn btn-danger",attrs:{to:"/Accounts"}},["Cancel"])])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this;return t._h("div",{staticClass:"container-fluid",attrs:{id:"app"}},[t._h("div",{staticClass:"row"},[t._h("div",{staticClass:"col-xs-2 col-sm-1"})," ",t._h("div",{staticClass:"col-xs-10 col-sm-11"},[t._h("session-state")])])," ",t._h("div",{staticClass:"row"},[t._h("div",{staticClass:"col-xs-12 col-sm-3 col-md-2 "},[t._h("nav-menu")])," ",t._h("div",{staticClass:"col-xs-12 col-sm-9 col-md-10"},[t._h("h3",[t._s(t.Title)])," ",t._h("transition",{attrs:{name:"slide"}},[t._h("router-view",{staticClass:"slide"})])])])," ",t._h("arc-notifications")])},staticRenderFns:[]}},,,,,function(t,e,n){function a(t){return n(s(t))}function s(t){return o[t]||function(){throw new Error("Cannot find module '"+t+"'.")}()}var o={"./404":10,"./404.vue":10,"./Accounts/Accounts":11,"./Accounts/Accounts.vue":11,"./Accounts/BrowseAccounts":12,"./Accounts/BrowseAccounts.vue":12,"./Accounts/EditAccount":13,"./Accounts/EditAccount.vue":13,"./Balance/Balance":14,"./Balance/Balance.vue":14,"./Balance/GraphicBalance":15,"./Balance/GraphicBalance.vue":15,"./Balance/TransactionDetail":16,"./Balance/TransactionDetail.vue":16,"./Commons/InputMoney":17,"./Commons/InputMoney.vue":17,"./DynamicLoader":18,"./DynamicLoader.vue":18,"./Hello":19,"./Hello.vue":19,"./NavMenu":20,"./NavMenu.vue":20,"./SessionState":21,"./SessionState.vue":21,"./Transactions/NewTransaction":22,"./Transactions/NewTransaction.vue":22,"./Transactions/TransactionHistory":137,"./Transactions/TransactionHistory.vue":137};a.keys=function(){return Object.keys(o)},a.resolve=s,t.exports=a,a.id=210}]);
//# sourceMappingURL=app.6d9f313eab4f02b8ad2b.js.map