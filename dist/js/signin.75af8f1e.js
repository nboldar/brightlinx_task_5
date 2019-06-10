(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["signin"],{"0bfb":function(t,e,r){"use strict";var n=r("cb7c");t.exports=function(){var t=n(this),e="";return t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.unicode&&(e+="u"),t.sticky&&(e+="y"),e}},"11e9":function(t,e,r){var n=r("52a7"),s=r("4630"),a=r("6821"),o=r("6a99"),i=r("69a8"),c=r("c69a"),u=Object.getOwnPropertyDescriptor;e.f=r("9e1e")?u:function(t,e){if(t=a(t),e=o(e,!0),c)try{return u(t,e)}catch(r){}if(i(t,e))return s(!n.f.call(t,e),t[e])}},"34c3":function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"container"},[r("div",{staticClass:"row justify-content-center"},[r("b-card",{staticClass:"col-md-6 justify-content-md-start",attrs:{title:"Registration form"}},[r("b-form",{on:{submit:function(e){return e.preventDefault(),t.onSubmit(e)},reset:function(e){return e.preventDefault(),t.onReset(e)}}},[r("b-form-group",{attrs:{id:"input-group-1",label:"Email address:","label-for":"input-1",description:"Enter your email in format user@domain.com"}},[r("b-form-input",{attrs:{id:"input-1",type:"email",required:"",placeholder:"Enter email",state:t.isRegistered},model:{value:t.form.email,callback:function(e){t.$set(t.form,"email",e)},expression:"form.email"}})],1),r("b-form-group",{attrs:{id:"input-group-2",label:"Your Password:","label-for":"input-2"}},[r("b-form-input",{attrs:{id:"input-2",type:"password",required:"",placeholder:"Enter password",state:t.isPasswordValid},on:{input:t.validatePassword},model:{value:t.form.password,callback:function(e){t.$set(t.form,"password",e)},expression:"form.password"}}),r("b-form-invalid-feedback",{attrs:{state:t.isPasswordValid}},[t._v("\n            Пароль должен быть минимум 6 символов, содержать цифры и спецсимволы\n          ")])],1),r("b-form-group",{attrs:{id:"input-group-3",label:"Repeat Your Password:","label-for":"input-3"}},[r("b-form-input",{attrs:{id:"input-3",type:"password",required:"",placeholder:"Repeat password",state:t.isPasswordRepeatValid},on:{input:t.validatePasswordRepeat},model:{value:t.form.password_repeat,callback:function(e){t.$set(t.form,"password_repeat",e)},expression:"form.password_repeat"}}),r("b-form-invalid-feedback",{attrs:{state:t.isPasswordRepeatValid}},[t._v("\n            Пароли не совпадают\n          ")])],1),r("b-form-checkbox",{attrs:{id:"checkbox-1",name:"checkbox-1",state:t.state,required:""}},[t._v("\n          I accept the terms and use\n        ")]),r("div",{staticClass:"row justify-content-between"},[r("SubmitBtn",{attrs:{btn_sign:t.btn_sign1,btn_class:t.btn_class1,btn_type:t.btn_type1}}),r("SubmitBtn",{attrs:{btn_sign:t.btn_sign2,btn_class:t.btn_class2,btn_type:t.btn_type2}})],1)],1)],1)],1),r("b-modal",{attrs:{id:"my-modal"}},[t._v("Вы зарегистрированы, Ваш ID: "+t._s(t.user_id))])],1)},s=[],a=(r("3b2b"),r("afa5")),o={name:"Signup",components:{SubmitBtn:a["a"]},data:function(){return{user_id:null,isPasswordRepeatValid:null,isPasswordValid:null,isRegistered:null,btn_sign1:"Подтвердить",btn_sign2:"Очистить",btn_class1:"primary",btn_class2:"secondary",btn_type1:"submit",btn_type2:"reset",form:{email:"",password:"",password_repeat:""}}},methods:{onSubmit:function(){var t=this;this.$http.post(window.location.origin+"/api/v1/signup",{email:this.form.email,password:this.form.password}).then(function(t){return t.json()}).then(function(e){t.isRegistered=e.isRegistered,t.isRegistered&&t.$bvModal.show("my-modal"),t.user_id=e.user_id}).catch(function(e){t.isRegistered=!1,console.log("Произошла ошибка с ajax запросом на регистрацию: "+e.message)})},onReset:function(){this.form.email="",this.form.password="",this.form.password_repeat="",this.isRegistered=null},validatePassword:function(){var t=new RegExp("[0-9a-zA-Z!@#$%^&*]{6,}");this.isPasswordValid=t.test(this.form.password)},validatePasswordRepeat:function(){this.isPasswordRepeatValid=this.form.password===this.form.password_repeat}},computed:{state:function(){return this.value}}},i=o,c=r("2877"),u=Object(c["a"])(i,n,s,!1,null,"734f3829",null);e["default"]=u.exports},"3b2b":function(t,e,r){var n=r("7726"),s=r("5dbc"),a=r("86cc").f,o=r("9093").f,i=r("aae3"),c=r("0bfb"),u=n.RegExp,p=u,l=u.prototype,d=/a/g,f=/a/g,b=new u(d)!==d;if(r("9e1e")&&(!b||r("79e5")(function(){return f[r("2b4c")("match")]=!1,u(d)!=d||u(f)==f||"/a/i"!=u(d,"i")}))){u=function(t,e){var r=this instanceof u,n=i(t),a=void 0===e;return!r&&n&&t.constructor===u&&a?t:s(b?new p(n&&!a?t.source:t,e):p((n=t instanceof u)?t.source:t,n&&a?c.call(t):e),r?this:l,u)};for(var m=function(t){t in u||a(u,t,{configurable:!0,get:function(){return p[t]},set:function(e){p[t]=e}})},_=o(p),w=0;_.length>w;)m(_[w++]);l.constructor=u,u.prototype=l,r("2aba")(n,"RegExp",u)}r("7a56")("RegExp")},"5dbc":function(t,e,r){var n=r("d3f4"),s=r("8b97").set;t.exports=function(t,e,r){var a,o=e.constructor;return o!==r&&"function"==typeof o&&(a=o.prototype)!==r.prototype&&n(a)&&s&&s(t,a),t}},"8b97":function(t,e,r){var n=r("d3f4"),s=r("cb7c"),a=function(t,e){if(s(t),!n(e)&&null!==e)throw TypeError(e+": can't set as prototype!")};t.exports={set:Object.setPrototypeOf||("__proto__"in{}?function(t,e,n){try{n=r("9b43")(Function.call,r("11e9").f(Object.prototype,"__proto__").set,2),n(t,[]),e=!(t instanceof Array)}catch(s){e=!0}return function(t,r){return a(t,r),e?t.__proto__=r:n(t,r),t}}({},!1):void 0),check:a}},9093:function(t,e,r){var n=r("ce10"),s=r("e11e").concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return n(t,s)}},aae3:function(t,e,r){var n=r("d3f4"),s=r("2d95"),a=r("2b4c")("match");t.exports=function(t){var e;return n(t)&&(void 0!==(e=t[a])?!!e:"RegExp"==s(t))}},afa5:function(t,e,r){"use strict";var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("b-col",{attrs:{lg:"4"}},[r("b-button",{attrs:{type:t.btn_type,variant:t.btn_class}},[t._v(t._s(t.btn_sign))])],1)},s=[],a={name:"SubmitBtn",props:{btn_sign:String,btn_class:String,btn_type:String}},o=a,i=r("2877"),c=Object(i["a"])(o,n,s,!1,null,"4e95aeb2",null);e["a"]=c.exports}}]);
//# sourceMappingURL=signin.75af8f1e.js.map