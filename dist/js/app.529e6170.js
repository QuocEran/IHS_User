(function(e){function t(t){for(var o,r,c=t[0],u=t[1],f=t[2],d=0,l=[];d<c.length;d++)r=c[d],Object.prototype.hasOwnProperty.call(a,r)&&a[r]&&l.push(a[r][0]),a[r]=0;for(o in u)Object.prototype.hasOwnProperty.call(u,o)&&(e[o]=u[o]);s&&s(t);while(l.length)l.shift()();return i.push.apply(i,f||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],o=!0,r=1;r<n.length;r++){var c=n[r];0!==a[c]&&(o=!1)}o&&(i.splice(t--,1),e=u(u.s=n[0]))}return e}var o={},r={app:0},a={app:0},i=[];function c(e){return u.p+"js/"+({device:"device","edit-profile":"edit-profile",home:"home",login:"login",logout:"logout","medical-record":"medical-record","not-found":"not-found",profile:"profile",register:"register",stats:"stats"}[e]||e)+"."+{"chunk-0834a8fa":"d75d8c11","chunk-2d21d639":"77cc3024","chunk-f9617f96":"3c89d885",device:"315931c2","edit-profile":"9f33ab78",home:"e1694500",login:"07638c8e",logout:"d36cb184","medical-record":"61f47bbe","not-found":"c9d2d8b3",profile:"7452485d",register:"7a76d535",stats:"f3da6ba0"}[e]+".js"}function u(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.e=function(e){var t=[],n={"chunk-0834a8fa":1};r[e]?t.push(r[e]):0!==r[e]&&n[e]&&t.push(r[e]=new Promise((function(t,n){for(var o="css/"+({device:"device","edit-profile":"edit-profile",home:"home",login:"login",logout:"logout","medical-record":"medical-record","not-found":"not-found",profile:"profile",register:"register",stats:"stats"}[e]||e)+"."+{"chunk-0834a8fa":"6b7f748d","chunk-2d21d639":"31d6cfe0","chunk-f9617f96":"31d6cfe0",device:"31d6cfe0","edit-profile":"31d6cfe0",home:"31d6cfe0",login:"31d6cfe0",logout:"31d6cfe0","medical-record":"31d6cfe0","not-found":"31d6cfe0",profile:"31d6cfe0",register:"31d6cfe0",stats:"31d6cfe0"}[e]+".css",a=u.p+o,i=document.getElementsByTagName("link"),c=0;c<i.length;c++){var f=i[c],d=f.getAttribute("data-href")||f.getAttribute("href");if("stylesheet"===f.rel&&(d===o||d===a))return t()}var l=document.getElementsByTagName("style");for(c=0;c<l.length;c++){f=l[c],d=f.getAttribute("data-href");if(d===o||d===a)return t()}var s=document.createElement("link");s.rel="stylesheet",s.type="text/css",s.onload=t,s.onerror=function(t){var o=t&&t.target&&t.target.src||a,i=new Error("Loading CSS chunk "+e+" failed.\n("+o+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=o,delete r[e],s.parentNode.removeChild(s),n(i)},s.href=a;var p=document.getElementsByTagName("head")[0];p.appendChild(s)})).then((function(){r[e]=0})));var o=a[e];if(0!==o)if(o)t.push(o[2]);else{var i=new Promise((function(t,n){o=a[e]=[t,n]}));t.push(o[2]=i);var f,d=document.createElement("script");d.charset="utf-8",d.timeout=120,u.nc&&d.setAttribute("nonce",u.nc),d.src=c(e);var l=new Error;f=function(t){d.onerror=d.onload=null,clearTimeout(s);var n=a[e];if(0!==n){if(n){var o=t&&("load"===t.type?"missing":t.type),r=t&&t.target&&t.target.src;l.message="Loading chunk "+e+" failed.\n("+o+": "+r+")",l.name="ChunkLoadError",l.type=o,l.request=r,n[1](l)}a[e]=void 0}};var s=setTimeout((function(){f({type:"timeout",target:d})}),12e4);d.onerror=d.onload=f,document.head.appendChild(d)}return Promise.all(t)},u.m=e,u.c=o,u.d=function(e,t,n){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)u.d(n,o,function(t){return e[t]}.bind(null,o));return n},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="/",u.oe=function(e){throw console.error(e),e};var f=window["webpackJsonp"]=window["webpackJsonp"]||[],d=f.push.bind(f);f.push=t,f=f.slice();for(var l=0;l<f.length;l++)t(f[l]);var s=d;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"022b":function(e,t,n){"use strict";n.d(t,"a",(function(){return a})),n.d(t,"b",(function(){return i}));var o=n("32be"),r=(n("256a"),n("1862"),n("24ee"),{apiKey:"AIzaSyAlyzUq8AbyQg-yO65s8cceLbojlxYtEfE",authDomain:"pei-v1.firebaseapp.com",projectId:"pei-v1",storageBucket:"pei-v1.appspot.com",messagingSenderId:"969332427406",appId:"1:969332427406:web:dbec202de73cf7845c17df",measurementId:"G-BC2BLYT84V"});o["a"].initializeApp(r);var a=o["a"].auth(),i=o["a"].firestore();o["a"].storage()},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("7a23");function r(e,t,n,r,a,i){var c=Object(o["resolveComponent"])("router-view");return Object(o["openBlock"])(),Object(o["createBlock"])(Object(o["resolveDynamicComponent"])(r.layout),null,{default:Object(o["withCtx"])((function(){return[Object(o["createVNode"])(c)]})),_:1})}var a=n("6c02"),i=n("5a50"),c={setup:function(){var e=Object(a["c"])();return{layout:Object(o["computed"])((function(){return(e.meta.layout||i["c"])+"-layout"}))}}},u=n("6b0d"),f=n.n(u);const d=f()(c,[["render",r]]);var l,s=d,p=(n("d3b7"),n("3ca3"),n("ddb0"),n("022b")),m=function(e,t,n){var o=p["a"].currentUser;o?n():n({name:"Login",params:{}})},h=[{path:"/",name:"Home",meta:{layout:"default",isHome:!0,isShowHeader:!0,isShowFooter:!0},component:function(){return n.e("home").then(n.bind(null,"bb51"))},beforeEnter:m},{path:"/appointments",name:"Appointments",meta:{layout:"default",isShowHeader:!0,isShowFooter:!0,name:"Bệnh án",icon:"file-medical"},component:function(){return n.e("medical-record").then(n.bind(null,"26ac"))},beforeEnter:m},{path:"/device",name:"Device",meta:{layout:"default",isShowHeader:!0,isShowFooter:!0,name:"Thiết bị",icon:"satellite-dish"},component:function(){return n.e("device").then(n.bind(null,"3d70"))},beforeEnter:m},{path:"/profile",name:"Profile",meta:{layout:"default",isShowHeader:!1,isShowFooter:!0},component:function(){return n.e("profile").then(n.bind(null,"c66d"))},beforeEnter:m},{path:"/edit-profile",name:"EditProfile",meta:{layout:"default",name:"Chỉnh sửa thông tin",icon:"user-edit",isShowHeader:!0,isShowFooter:!1},component:function(){return n.e("edit-profile").then(n.bind(null,"fb5e"))},beforeEnter:m},{path:"/login",name:"Login",meta:{layout:"auth"},component:function(){return n.e("login").then(n.bind(null,"a55b"))}},{path:"/logout",name:"Logout",meta:{layout:"auth"},component:function(){return n.e("logout").then(n.bind(null,"c100"))}},{path:"/register",name:"Register",meta:{layout:"auth"},component:function(){return n.e("register").then(n.bind(null,"73cf"))}},{path:"/:pathMatch(.*)*",name:"not-found",meta:{layout:"sub"},component:function(){return n.e("not-found").then(n.bind(null,"8cdb"))}},{path:"/stats",name:"stats",meta:{layout:"default",name:"Theo dõi chỉ số cơ thể",icon:"heartbeat",isShowHeader:!0,isShowFooter:!1},component:function(){return n.e("stats").then(n.bind(null,"ed93"))}}],b=Object(a["a"])({history:Object(a["b"])("/"),routes:h}),v=b,g=n("5502"),y=n("bfa9"),w=new y["a"]({storage:window.localStorage}),S=Object(g["a"])({state:{NavState:"Home",userInfo:null,deviceInfo:null},getters:{getNavState:function(e){return e.NavState},getUserInfo:function(e){return e.userInfo},getDeviceInfo:function(e){return e.deviceInfo}},mutations:{setNavState:function(e,t){e.NavState=t},saveUserInfo:function(e,t){e.userInfo=t},saveDeviceInfo:function(e,t){e.deviceInfo=t}},actions:{changeNavState:function(e,t){var n=e.commit,o=t.stateName;n("setNavState",o)},saveUserInfo:function(e,t){var n=e.commit,o=t.userInfo;n("saveUserInfo",o)},saveDeviceInfo:function(e,t){var n=e.commit,o=t.deviceInfo;n("saveDeviceInfo",o)}},plugins:[w.plugin]}),j=n("ecee"),O=n("c074"),I=n("ad3d"),k=n("f2d1");n("9c9e"),n("f95d");function C(e){e.component("auth-layout",Object(o["defineAsyncComponent"])((function(){return n.e("chunk-f9617f96").then(n.bind(null,"3bb0"))}))),e.component("default-layout",Object(o["defineAsyncComponent"])((function(){return n.e("chunk-0834a8fa").then(n.bind(null,"7b3d"))}))),e.component("sub-layout",Object(o["defineAsyncComponent"])((function(){return n.e("chunk-2d21d639").then(n.bind(null,"d0a8"))})))}j["c"].add(O["a"]),j["c"].add(k["a"]),p["a"].onAuthStateChanged((function(){l||(l=Object(o["createApp"])(s),C(l),l.component("fa",I["a"]),l.use(S),l.use(v),l.mount("#app"))}))},"5a50":function(e,t,n){"use strict";n.d(t,"c",(function(){return o})),n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return a}));var o="default",r=[{icon:"home",text:"Trang chủ",name:"Home"},{icon:"file-medical",text:"Bệnh án",name:"Appointments"},{icon:"satellite-dish",text:"Thiết bị",name:"Device"},{icon:"user",text:"Cá nhân",name:"Profile"}],a=[{name:"Chỉnh sửa thông tin",icon:"user-edit",route:"/edit-profile"},{name:"Giới thiệu",icon:"info-circle",route:{name:"not-found",params:{}}},{name:"Đăng xuất",icon:"power-off",route:{name:"Logout",params:{}}}]},"9c9e":function(e,t,n){},f95d:function(e,t,n){}});
//# sourceMappingURL=app.529e6170.js.map