(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{1094:function(module,exports,__webpack_require__){"use strict";__webpack_require__(9),__webpack_require__(3),__webpack_require__(51),__webpack_require__(314),__webpack_require__(42),__webpack_require__(43),__webpack_require__(1095),__webpack_require__(33),__webpack_require__(32);var _clientApi=__webpack_require__(57),_clientLogger=__webpack_require__(40),_configFilename=__webpack_require__(1096);function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}function _defineProperty(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}(_configFilename.args||_configFilename.argTypes)&&_clientLogger.logger.warn("Invalid args/argTypes in config, ignoring.",JSON.stringify({args:_configFilename.args,argTypes:_configFilename.argTypes})),_configFilename.decorators&&_configFilename.decorators.forEach((function(decorator){return(0,_clientApi.addDecorator)(decorator,!1)})),_configFilename.loaders&&_configFilename.loaders.forEach((function(loader){return(0,_clientApi.addLoader)(loader,!1)})),(_configFilename.parameters||_configFilename.globals||_configFilename.globalTypes)&&(0,_clientApi.addParameters)(_objectSpread(_objectSpread({},_configFilename.parameters),{},{globals:_configFilename.globals,globalTypes:_configFilename.globalTypes}),!1),_configFilename.argTypesEnhancers&&_configFilename.argTypesEnhancers.forEach((function(enhancer){return(0,_clientApi.addArgTypesEnhancer)(enhancer)}))},1096:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"parameters",(function(){return parameters}));var parameters={actions:{argTypesRegex:"^on[A-Z].*"}}},1097:function(module,exports,__webpack_require__){"use strict";(function(module){(0,__webpack_require__(366).configure)([__webpack_require__(1098)],module,!1)}).call(this,__webpack_require__(114)(module))},1098:function(module,exports,__webpack_require__){var map={"./button/stories/button.stories.js":1099,"./form/stories/form.stories.js":1104,"./input/stories/input.stories.js":1100};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id=1098},1099:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"Text",(function(){return Text}));__webpack_require__(4);var ___WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(172);__webpack_exports__.default={title:"TanButton",component:___WEBPACK_IMPORTED_MODULE_1__.a};var Text=function Text(){return{components:{TanButton:___WEBPACK_IMPORTED_MODULE_1__.a},template:'<tan-button @click="handleClick"></tan-button>',data:function data(){return{value:"admin"}},methods:{handleClick:function handleClick(evt){console.log(evt),this.$emit("click",evt),evt.preventDefault()}}}};Text.parameters=Object.assign({storySource:{source:"() => ({\n  components: { TanButton },\n  template: '<tan-button @click=\"handleClick\"></tan-button>',\n  data () {\n    return {\n      value: 'admin'\n    }\n  },\n  methods: {\n    handleClick (evt) {\n      console.log(evt)\n      this.$emit('click', evt)\n      evt.preventDefault();\n    }\n  }\n})"}},Text.parameters)},1100:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"Text",(function(){return Text})),__webpack_require__.d(__webpack_exports__,"Password",(function(){return Password}));__webpack_require__(4);var ___WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(139);__webpack_exports__.default={title:"LgInput",component:___WEBPACK_IMPORTED_MODULE_1__.a};var Text=function Text(){return{components:{LgInput:___WEBPACK_IMPORTED_MODULE_1__.a},template:'<lg-input v-model="value"></lg-input>',data:function data(){return{value:"admin"}}}},Password=function Password(){return{components:{LgInput:___WEBPACK_IMPORTED_MODULE_1__.a},template:'<lg-input type="password" v-model="value"></lg-input>',data:function data(){return{value:"admin"}}}};Text.parameters=Object.assign({storySource:{source:"() => ({\r\n  components: { LgInput },\r\n  template: '<lg-input v-model=\"value\"></lg-input>',\r\n  data () {\r\n    return {\r\n      value: 'admin'\r\n    }\r\n  }\r\n})"}},Text.parameters),Password.parameters=Object.assign({storySource:{source:"() => ({\r\n  components: { LgInput },\r\n  template: '<lg-input type=\"password\" v-model=\"value\"></lg-input>',\r\n  data () {\r\n    return {\r\n      value: 'admin'\r\n    }\r\n  }\r\n})"}},Password.parameters)},1104:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"Login",(function(){return form_stories_Login}));__webpack_require__(4),__webpack_require__(6),__webpack_require__(24),__webpack_require__(51),__webpack_require__(91),__webpack_require__(12),__webpack_require__(14),__webpack_require__(13),__webpack_require__(17);var src_formvue_type_script_lang_js_={name:"LgForm",provide:function provide(){return{form:this}},props:{model:{type:Object},rules:{type:Object}},methods:{validate:function validate(cb){var tasks=this.$children.filter((function(child){return child.prop})).map((function(child){return child.validate()}));Promise.all(tasks).then((function(){return cb(!0)})).catch((function(){return cb(!1)}))}}},componentNormalizer=__webpack_require__(106);const __vuedocgen_export_0=Object(componentNormalizer.a)(src_formvue_type_script_lang_js_,(function(){var _h=this.$createElement;return(this._self._c||_h)("form",[this._t("default")],2)}),[],!1,null,null,null).exports;var src_form=__vuedocgen_export_0;__vuedocgen_export_0.__docgenInfo={displayName:"LgForm",exportName:"default",description:"",tags:{},props:[{name:"model",type:{name:"object"}},{name:"rules",type:{name:"object"}}],slots:[{name:"default"}]},src_form.install=function(Vue){Vue.component(src_form.name,src_form)},console.log("test");var packages_form=src_form,dist_web=(__webpack_require__(32),__webpack_require__(489));function _defineProperty(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}var src_formitemvue_type_script_lang_js_={name:"LgFormItem",inject:["form"],props:{label:{type:String},prop:{type:String}},mounted:function mounted(){var _this=this;this.$on("validate",(function(){console.log("xxxxx"),_this.validate()}))},data:function data(){return{errMessage:""}},methods:{validate:function validate(){var _this2=this;if(this.prop){var value=this.form.model[this.prop],rules=this.form.rules[this.prop],descriptor=_defineProperty({},this.prop,rules);return new dist_web.a(descriptor).validate(_defineProperty({},this.prop,value),(function(errors){_this2.errMessage=errors?errors[0].message:""}))}}}};const formitem_vuedocgen_export_0=Object(componentNormalizer.a)(src_formitemvue_type_script_lang_js_,(function(){var _vm=this,_h=_vm.$createElement,_c=_vm._self._c||_h;return _c("div",[_c("label",[_vm._v(_vm._s(_vm.label))]),_vm._v(" "),_c("div",[_vm._t("default"),_vm._v(" "),_vm.errMessage?_c("p",[_vm._v(_vm._s(_vm.errMessage))]):_vm._e()],2)])}),[],!1,null,null,null).exports;var formitem=formitem_vuedocgen_export_0;formitem_vuedocgen_export_0.__docgenInfo={displayName:"LgFormItem",exportName:"default",description:"",tags:{},props:[{name:"label",type:{name:"string"}},{name:"prop",type:{name:"string"}}],slots:[{name:"default"}]},formitem.install=function(Vue){Vue.component(formitem.name,formitem)};var packages_formitem=formitem,input=__webpack_require__(139),packages_button=__webpack_require__(172),form_stories_Login=(__webpack_exports__.default={title:"LgForm",component:packages_form},function Login(){return{components:{LgForm:packages_form,LgFormItem:packages_formitem,LgInput:input.a,LgButton:packages_button.a},template:'\n    <lg-form class="form" ref="form" :model="user" :rules="rules">\n      <lg-form-item label="用户名" prop="username">\n        \x3c!-- <lg-input v-model="user.username"></lg-input> --\x3e\n        <lg-input :value="user.username" @input="user.username=$event" placeholder="请输入用户名"></lg-input>\n      </lg-form-item>\n      <lg-form-item label="密码" prop="password">\n        <lg-input type="password" v-model="user.password"></lg-input>\n      </lg-form-item>\n      <lg-form-item>\n        <lg-button type="primary" @click="login">登 录</lg-button>\n      </lg-form-item>\n    </lg-form>\n  ',data:function data(){return{user:{username:"",password:""},rules:{username:[{required:!0,message:"请输入用户名"}],password:[{required:!0,message:"请输入密码"},{min:6,max:12,message:"请输入6-12位密码"}]}}},methods:{login:function login(){console.log("button"),this.$refs.form.validate((function(valid){if(!valid)return alert("验证失败"),!1;alert("验证成功")}))}}}});form_stories_Login.parameters=Object.assign({storySource:{source:'() => ({\r\n  components: { LgForm, LgFormItem, LgInput, LgButton },\r\n  template: `\r\n    <lg-form class="form" ref="form" :model="user" :rules="rules">\r\n      <lg-form-item label="用户名" prop="username">\r\n        \x3c!-- <lg-input v-model="user.username"></lg-input> --\x3e\r\n        <lg-input :value="user.username" @input="user.username=$event" placeholder="请输入用户名"></lg-input>\r\n      </lg-form-item>\r\n      <lg-form-item label="密码" prop="password">\r\n        <lg-input type="password" v-model="user.password"></lg-input>\r\n      </lg-form-item>\r\n      <lg-form-item>\r\n        <lg-button type="primary" @click="login">登 录</lg-button>\r\n      </lg-form-item>\r\n    </lg-form>\r\n  `,\r\n  data () {\r\n    return {\r\n      user: {\r\n        username: \'\',\r\n        password: \'\'\r\n      },\r\n      rules: {\r\n        username: [\r\n          {\r\n            required: true,\r\n            message: \'请输入用户名\'\r\n          }\r\n        ],\r\n        password: [\r\n          {\r\n            required: true,\r\n            message: \'请输入密码\'\r\n          },\r\n          {\r\n            min: 6,\r\n            max: 12,\r\n            message: \'请输入6-12位密码\'\r\n          }\r\n        ]\r\n      }\r\n    }\r\n  },\r\n  methods: {\r\n    login () {\r\n      console.log(\'button\')\r\n      this.$refs.form.validate(valid => {\r\n        if (valid) {\r\n          alert(\'验证成功\')\r\n        } else {\r\n          alert(\'验证失败\')\r\n          return false\r\n        }\r\n      })\r\n    }\r\n  }\r\n})'}},form_stories_Login.parameters)},139:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__(6);var src_inputvue_type_script_lang_js_={name:"LgInput",inheritAttrs:!1,props:{value:{type:String},type:{type:String,default:"text"}},methods:{handleInput:function handleInput(evt){this.$emit("input",evt.target.value);var parent=function findParent(parent){for(;parent&&"LgFormItem"!==parent.$options.name;)parent=parent.$parent;return parent}(this.$parent);parent&&parent.$emit("validate")}}},componentNormalizer=__webpack_require__(106);const __vuedocgen_export_0=Object(componentNormalizer.a)(src_inputvue_type_script_lang_js_,(function(){var _h=this.$createElement,_c=this._self._c||_h;return _c("div",[_c("input",this._b({attrs:{type:this.type},domProps:{value:this.value},on:{input:this.handleInput}},"input",this.$attrs,!1))])}),[],!1,null,null,null).exports;var input=__vuedocgen_export_0;__vuedocgen_export_0.__docgenInfo={displayName:"LgInput",exportName:"default",description:"",tags:{},props:[{name:"value",type:{name:"string"}},{name:"type",type:{name:"string"},defaultValue:{func:!1,value:"'text'"}}],events:[{name:"input",type:{names:["undefined"]}}]},input.install=function(Vue){Vue.component(input.name,input)};__webpack_exports__.a=input},172:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__(6);var src_buttonvue_type_script_lang_js_={name:"TanButton",methods:{handleClick:function handleClick(evt){this.$emit("click",evt),evt.preventDefault()}}},componentNormalizer=__webpack_require__(106);const __vuedocgen_export_0=Object(componentNormalizer.a)(src_buttonvue_type_script_lang_js_,(function(){var _h=this.$createElement,_c=this._self._c||_h;return _c("div",[_c("button",{on:{click:this.handleClick}},[this._t("default")],2)])}),[],!1,null,null,null).exports;var src_button=__vuedocgen_export_0;__vuedocgen_export_0.__docgenInfo={displayName:"TanButton",exportName:"default",description:"",tags:{},events:[{name:"click",type:{names:["undefined"]}}],slots:[{name:"default"}]},src_button.install=function(Vue){Vue.component(src_button.name,src_button)};__webpack_exports__.a=src_button},492:function(module,exports,__webpack_require__){__webpack_require__(493),__webpack_require__(646),__webpack_require__(647),__webpack_require__(801),__webpack_require__(1014),__webpack_require__(1068),__webpack_require__(1073),__webpack_require__(1085),__webpack_require__(1087),__webpack_require__(1092),__webpack_require__(1094),module.exports=__webpack_require__(1097)},560:function(module,exports){},647:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);__webpack_require__(366)}},[[492,1,2]]]);
//# sourceMappingURL=main.a20f55bfd84c22aa4abb.bundle.js.map