(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["login"],{"1da1":function(e,t,r){"use strict";r.d(t,"a",(function(){return o}));r("d3b7");function n(e,t,r,n,o,a,i){try{var c=e[a](i),l=c.value}catch(u){return void r(u)}c.done?t(l):Promise.resolve(l).then(n,o)}function o(e){return function(){var t=this,r=arguments;return new Promise((function(o,a){var i=e.apply(t,r);function c(e){n(i,o,a,c,l,"next",e)}function l(e){n(i,o,a,c,l,"throw",e)}c(void 0)}))}}},"96cf":function(e,t,r){var n=function(e){"use strict";var t,r=Object.prototype,n=r.hasOwnProperty,o="function"===typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",i=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function l(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{l({},"")}catch(T){l=function(e,t,r){return e[t]=r}}function u(e,t,r,n){var o=t&&t.prototype instanceof y?t:y,a=Object.create(o.prototype),i=new _(n||[]);return a._invoke=L(e,r,i),a}function s(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(T){return{type:"throw",arg:T}}}e.wrap=u;var f="suspendedStart",h="suspendedYield",p="executing",d="completed",m={};function y(){}function v(){}function b(){}var g={};l(g,a,(function(){return this}));var w=Object.getPrototypeOf,x=w&&w(w(P([])));x&&x!==r&&n.call(x,a)&&(g=x);var j=b.prototype=y.prototype=Object.create(g);function O(e){["next","throw","return"].forEach((function(t){l(e,t,(function(e){return this._invoke(t,e)}))}))}function E(e,t){function r(o,a,i,c){var l=s(e[o],e,a);if("throw"!==l.type){var u=l.arg,f=u.value;return f&&"object"===typeof f&&n.call(f,"__await")?t.resolve(f.__await).then((function(e){r("next",e,i,c)}),(function(e){r("throw",e,i,c)})):t.resolve(f).then((function(e){u.value=e,i(u)}),(function(e){return r("throw",e,i,c)}))}c(l.arg)}var o;function a(e,n){function a(){return new t((function(t,o){r(e,n,t,o)}))}return o=o?o.then(a,a):a()}this._invoke=a}function L(e,t,r){var n=f;return function(o,a){if(n===p)throw new Error("Generator is already running");if(n===d){if("throw"===o)throw a;return S()}r.method=o,r.arg=a;while(1){var i=r.delegate;if(i){var c=k(i,r);if(c){if(c===m)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===f)throw n=d,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=p;var l=s(e,t,r);if("normal"===l.type){if(n=r.done?d:h,l.arg===m)continue;return{value:l.arg,done:r.done}}"throw"===l.type&&(n=d,r.method="throw",r.arg=l.arg)}}}function k(e,r){var n=e.iterator[r.method];if(n===t){if(r.delegate=null,"throw"===r.method){if(e.iterator["return"]&&(r.method="return",r.arg=t,k(e,r),"throw"===r.method))return m;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return m}var o=s(n,e.iterator,r.arg);if("throw"===o.type)return r.method="throw",r.arg=o.arg,r.delegate=null,m;var a=o.arg;return a?a.done?(r[e.resultName]=a.value,r.next=e.nextLoc,"return"!==r.method&&(r.method="next",r.arg=t),r.delegate=null,m):a:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,m)}function N(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function V(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function _(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(N,this),this.reset(!0)}function P(e){if(e){var r=e[a];if(r)return r.call(e);if("function"===typeof e.next)return e;if(!isNaN(e.length)){var o=-1,i=function r(){while(++o<e.length)if(n.call(e,o))return r.value=e[o],r.done=!1,r;return r.value=t,r.done=!0,r};return i.next=i}}return{next:S}}function S(){return{value:t,done:!0}}return v.prototype=b,l(j,"constructor",b),l(b,"constructor",v),v.displayName=l(b,c,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"===typeof e&&e.constructor;return!!t&&(t===v||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,b):(e.__proto__=b,l(e,c,"GeneratorFunction")),e.prototype=Object.create(j),e},e.awrap=function(e){return{__await:e}},O(E.prototype),l(E.prototype,i,(function(){return this})),e.AsyncIterator=E,e.async=function(t,r,n,o,a){void 0===a&&(a=Promise);var i=new E(u(t,r,n,o),a);return e.isGeneratorFunction(r)?i:i.next().then((function(e){return e.done?e.value:i.next()}))},O(j),l(j,c,"Generator"),l(j,a,(function(){return this})),l(j,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=[];for(var r in e)t.push(r);return t.reverse(),function r(){while(t.length){var n=t.pop();if(n in e)return r.value=n,r.done=!1,r}return r.done=!0,r}},e.values=P,_.prototype={constructor:_,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(V),!e)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function(){this.done=!0;var e=this.tryEntries[0],t=e.completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var r=this;function o(n,o){return c.type="throw",c.arg=e,r.next=n,o&&(r.method="next",r.arg=t),!!o}for(var a=this.tryEntries.length-1;a>=0;--a){var i=this.tryEntries[a],c=i.completion;if("root"===i.tryLoc)return o("end");if(i.tryLoc<=this.prev){var l=n.call(i,"catchLoc"),u=n.call(i,"finallyLoc");if(l&&u){if(this.prev<i.catchLoc)return o(i.catchLoc,!0);if(this.prev<i.finallyLoc)return o(i.finallyLoc)}else if(l){if(this.prev<i.catchLoc)return o(i.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return o(i.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===e||"continue"===e)&&a.tryLoc<=t&&t<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=e,i.arg=t,a?(this.method="next",this.next=a.finallyLoc,m):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),m},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),V(r),m}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var o=n.arg;V(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(e,r,n){return this.delegate={iterator:P(e),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=t),m}},e}(e.exports);try{regeneratorRuntime=n}catch(o){"object"===typeof globalThis?globalThis.regeneratorRuntime=n:Function("r","regeneratorRuntime = r")(n)}},a55b:function(e,t,r){"use strict";r.r(t);var n=r("7a23"),o={class:"mt-8"},a={class:"container mx-auto px-8"},i={class:"row"},c={for:"email",class:"flex flex-col"},l=Object(n["createElementVNode"])("span",{class:"font-semibold"},"Email Address",-1),u={class:"row"},s={for:"password",class:"flex flex-col"},f=Object(n["createElementVNode"])("span",{class:"font-semibold"},"Password",-1),h={class:"row"},p={key:0,type:"submit",class:"py-3 text-center w-full border rounded-xl border-gray-400 text-white font-bold bg-blue-600"},d={key:1,type:"button",class:"py-3 text-center w-full border rounded-xl border-gray-400 text-white font-bold cursor-not-allowed bg-blue-600",disabled:""},m={class:"text-left mt-6 text-yellow-800"},y={key:0},v={class:"w-full text-center my-6 inline-block"},b=Object(n["createElementVNode"])("span",{class:"font-medium"},"I'm a new user.",-1),g={class:"ml-1"},w=Object(n["createTextVNode"])("Sign Up ");function x(e,t,r,x,j,O){var E=Object(n["resolveComponent"])("router-link");return Object(n["openBlock"])(),Object(n["createElementBlock"])("div",o,[Object(n["createElementVNode"])("div",a,[Object(n["createElementVNode"])("form",{class:"flex flex-col justify-start space-y-6",onSubmit:t[2]||(t[2]=Object(n["withModifiers"])((function(){return x.onSubmit&&x.onSubmit.apply(x,arguments)}),["prevent"]))},[Object(n["createElementVNode"])("div",i,[Object(n["createElementVNode"])("label",c,[l,Object(n["withDirectives"])(Object(n["createElementVNode"])("input",{id:"email",class:"px-4 py-3 rounded-xl border border-gray-400 mt-1 bg-gray-200",type:"email",placeholder:"vanA@gmail.com","onUpdate:modelValue":t[0]||(t[0]=function(e){return x.email=e})},null,512),[[n["vModelText"],x.email]])])]),Object(n["createElementVNode"])("div",u,[Object(n["createElementVNode"])("label",s,[f,Object(n["withDirectives"])(Object(n["createElementVNode"])("input",{id:"password",class:"px-4 py-3 rounded-xl border border-gray-400 mt-1 bg-gray-200",type:"password",placeholder:"Example","onUpdate:modelValue":t[1]||(t[1]=function(e){return x.password=e})},null,512),[[n["vModelText"],x.password]])])]),Object(n["createElementVNode"])("div",h,[x.isPending?(Object(n["openBlock"])(),Object(n["createElementBlock"])("button",d," Loading..... ")):(Object(n["openBlock"])(),Object(n["createElementBlock"])("button",p," Sign In "))])],32),Object(n["createElementVNode"])("div",m,[x.error?(Object(n["openBlock"])(),Object(n["createElementBlock"])("span",y,Object(n["toDisplayString"])(x.error),1)):Object(n["createCommentVNode"])("",!0)]),Object(n["createElementVNode"])("div",v,[b,Object(n["createElementVNode"])("span",g,[Object(n["createVNode"])(E,{to:{name:"Register",params:{}},class:"font-bold"},{default:Object(n["withCtx"])((function(){return[w]})),_:1})])])])])}var j=r("1da1"),O=(r("96cf"),r("6c02")),E=r("022b"),L=Object(n["ref"])(null),k=Object(n["ref"])(!1),N=Object(n["ref"])(null);function V(e,t){return _.apply(this,arguments)}function _(){return _=Object(j["a"])(regeneratorRuntime.mark((function e(t,r){var n,o;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return k.value=!0,L.value=null,N.value=null,e.prev=3,e.next=6,E["a"].signInWithEmailAndPassword(t,r);case 6:return n=e.sent,e.next=9,n.user.getIdToken();case 9:if(o=e.sent,n){e.next=12;break}throw new Error("Could not create a new user");case 12:return e.abrupt("return",{response:n,result:o});case 15:e.prev=15,e.t0=e["catch"](3),console.log(e.t0),L.value=e.t0.message;case 19:return e.prev=19,k.value=!1,e.finish(19);case 22:case"end":return e.stop()}}),e,null,[[3,15,19,22]])}))),_.apply(this,arguments)}function P(){return{error:L,isPending:k,signin:V}}var S={setup:function(){var e=P(),t=e.error,r=e.isPending,o=e.signin,a=Object(O["d"])(),i=Object(n["ref"])(""),c=Object(n["ref"])("");function l(){return u.apply(this,arguments)}function u(){return u=Object(j["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,o(i.value,c.value);case 2:if(t.value){e.next=5;break}return e.next=5,a.push({name:"Home",params:{}});case 5:case"end":return e.stop()}}),e)}))),u.apply(this,arguments)}return{onSubmit:l,email:i,password:c,error:t,isPending:r}}},T=r("6b0d"),B=r.n(T);const G=B()(S,[["render",x]]);t["default"]=G}}]);
//# sourceMappingURL=login.07638c8e.js.map