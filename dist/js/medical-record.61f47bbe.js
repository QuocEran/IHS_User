(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["medical-record"],{"242b":function(e,t,c){"use strict";function l(e){var t=new Date(1e3*e),c=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],l=t.getFullYear(),a=c[t.getMonth()],n=t.getDate(),o=t.getHours(),r=t.getMinutes(),s=t.getSeconds(),b=n+"/"+a+"/"+l+" - "+o+":"+r+":"+s;return b}function a(){return{timeConverter:l}}c.d(t,"a",(function(){return a}))},"26ac":function(e,t,c){"use strict";c.r(t);var l=c("7a23"),a={class:"appointments mt-4"},n={key:1,class:"w-full text-center flex-col flex justify-center items-center h-16 text-xl font-semibold text-gray-500"};function o(e,t,c,o,r,s){var b=Object(l["resolveComponent"])("MedicalRecordComponent");return Object(l["openBlock"])(),Object(l["createElementBlock"])("div",a,[o.userInfo?(Object(l["openBlock"])(),Object(l["createBlock"])(b,{key:0,data:o.userInfo},null,8,["data"])):(Object(l["openBlock"])(),Object(l["createElementBlock"])("div",n," Loading... "))])}c("b0c0");var r=c("5502"),s=c("6c02"),b=c("dfab"),d=c.n(b),i={key:0,class:"flex-col flex gap-4 p-2 mb-24"},m={class:"py-3 bg-white rounded-xl px-4"},f=Object(l["createElementVNode"])("div",{class:"w-full font-semibold text-black text-left text-xl my-2"}," THÔNG TIN CƠ BẢN ",-1),u={class:"w-full"},x=Object(l["createElementVNode"])("th",{class:"font-semibold text-black w-1/3 text-left"}," Mã bệnh nhân: ",-1),j={class:"text-gray-500 text-left break-all"},O=Object(l["createElementVNode"])("th",{class:"font-semibold text-black w-1/3 text-left"},"Họ và tên:",-1),N={class:"text-gray-500 text-left"},p=Object(l["createElementVNode"])("th",{class:"font-semibold text-black w-1/3 text-left"},"Tuổi:",-1),g={class:"text-gray-500 text-left"},E=Object(l["createElementVNode"])("th",{class:"font-semibold text-black w-1/3 text-left"}," Số điện thoại: ",-1),V={class:"text-gray-500 text-left"},y=Object(l["createElementVNode"])("th",{class:"font-semibold text-black w-1/3 text-left"},"Chẩn đoán:",-1),h={class:"text-gray-500 text-left"},k=Object(l["createElementVNode"])("th",{class:"font-semibold text-black w-1/3 text-left"},"Ghi chú:",-1),w={class:"text-gray-500 text-left"},v=Object(l["createElementVNode"])("th",{class:"font-semibold text-black w-1/3 text-left"}," Ngày cập nhật: ",-1),S={class:"text-gray-500 text-left"},D={class:"py-3 bg-white rounded-xl px-4"},C=Object(l["createElementVNode"])("div",{class:"w-full font-semibold text-black text-left text-xl my-2"}," CHỈ SỐ SỨC KHỎE ",-1),B={class:"w-full"},I=Object(l["createElementVNode"])("th",{class:"font-semibold text-black w-1/3 text-left"},"Nhóm máu:",-1),M={class:"text-gray-500 text-left"},H=Object(l["createElementVNode"])("th",{class:"font-semibold text-black w-1/3 text-left"},"Chiều cao:",-1),T={class:"text-gray-500 text-left"},J=Object(l["createElementVNode"])("th",{class:"font-semibold text-black w-1/3 text-left"},"Cân nặng:",-1),A={class:"text-gray-500 text-left"},F=Object(l["createElementVNode"])("th",{class:"font-semibold text-black w-1/3 text-left"},"BMI:",-1),R={class:"text-gray-500 text-left"},G={key:1,class:"w-full p-8"},L=Object(l["createElementVNode"])("img",{src:d.a,alt:"No Data",class:"h-44 w-44 mx-auto"},null,-1),K=Object(l["createElementVNode"])("p",{class:"w-full text-center font-bold text-xl mt-4"}," RẤT TIẾC, CHƯA CÓ DỮ LIỆU HIỂN THỊ ",-1),U=[L,K];function X(e,t,c,a,n,o){return c.data?(Object(l["openBlock"])(),Object(l["createElementBlock"])("div",i,[Object(l["createElementVNode"])("div",m,[f,Object(l["createElementVNode"])("table",u,[Object(l["createElementVNode"])("tr",null,[x,Object(l["createElementVNode"])("td",j,Object(l["toDisplayString"])(c.data.patientId),1)]),Object(l["createElementVNode"])("tr",null,[O,Object(l["createElementVNode"])("td",N,Object(l["toDisplayString"])(c.data.name),1)]),Object(l["createElementVNode"])("tr",null,[p,Object(l["createElementVNode"])("td",g,Object(l["toDisplayString"])(c.data.age),1)]),Object(l["createElementVNode"])("tr",null,[E,Object(l["createElementVNode"])("td",V,Object(l["toDisplayString"])(c.data.phoneNumber),1)]),Object(l["createElementVNode"])("tr",null,[y,Object(l["createElementVNode"])("td",h,Object(l["toDisplayString"])(c.data.diagnostic),1)]),Object(l["createElementVNode"])("tr",null,[k,Object(l["createElementVNode"])("td",w,Object(l["toDisplayString"])(c.data.notes),1)]),Object(l["createElementVNode"])("tr",null,[v,Object(l["createElementVNode"])("td",S,Object(l["toDisplayString"])(a.timeConverter(c.data.createdDate/1e3)),1)])])]),Object(l["createElementVNode"])("div",D,[C,Object(l["createElementVNode"])("table",B,[Object(l["createElementVNode"])("tr",null,[I,Object(l["createElementVNode"])("td",M,Object(l["toDisplayString"])(c.data.blood),1)]),Object(l["createElementVNode"])("tr",null,[H,Object(l["createElementVNode"])("td",T,Object(l["toDisplayString"])(c.data.height)+" cm",1)]),Object(l["createElementVNode"])("tr",null,[J,Object(l["createElementVNode"])("td",A,Object(l["toDisplayString"])(c.data.weight)+" kg",1)]),Object(l["createElementVNode"])("tr",null,[F,Object(l["createElementVNode"])("td",R,Object(l["toDisplayString"])(c.data.BMI),1)])])])])):(Object(l["openBlock"])(),Object(l["createElementBlock"])("div",G,U))}var Y=c("242b"),q={setup:function(){var e=Object(Y["a"])(),t=e.timeConverter;return{timeConverter:t}},props:["data"]},z=c("6b0d"),P=c.n(z);const Q=P()(q,[["render",X]]);var W=Q,Z={setup:function(){var e=Object(s["c"])(),t=Object(r["b"])();return t.dispatch("changeNavState",{stateName:e.name}),{userInfo:Object(l["computed"])((function(){return t.state.userInfo}))}},components:{MedicalRecordComponent:W}};const $=P()(Z,[["render",o]]);t["default"]=$},b0c0:function(e,t,c){var l=c("83ab"),a=c("5e77").EXISTS,n=c("e330"),o=c("9bf2").f,r=Function.prototype,s=n(r.toString),b=/function\b(?:\s|\/\*[\S\s]*?\*\/|\/\/[^\n\r]*[\n\r]+)*([^\s(/]*)/,d=n(b.exec),i="name";l&&!a&&o(r,i,{configurable:!0,get:function(){try{return d(b,s(this))[1]}catch(e){return""}}})},dfab:function(e,t,c){e.exports=c.p+"img/NoData.ad17058e.svg"}}]);
//# sourceMappingURL=medical-record.61f47bbe.js.map