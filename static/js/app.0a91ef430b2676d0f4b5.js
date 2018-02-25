webpackJsonp([1],{

/***/ "+ren":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 0:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ "07PK":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'HelloWorld',
  data() {
    return {
      msg: 'Welcome to Jacena\'s HOME PAGE'
    };
  }
});

/***/ }),

/***/ "8HOU":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["a"] = ({
  // props: ['srcImg','height','width','stylez'],
  props: {
    src: {
      // required: true
    },
    height: {
      required: true
    },
    width: {
      required: true
    },
    stylez: {
      default: ''
    }
  },
  data() {
    return {
      defaultImg: gconfig.defaultImg
    };
  }
});

/***/ }),

/***/ "8NBs":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["a"] = ({
  data() {
    return {
      zheight: [],
      zweight: [],
      chest: [],
      shoulder: [],
      biwei: [],
      yaowei: [],
      tunwei: [],
      max_wt: [],
      max_yl: [],
      max_sd: [],

      ruleForm: {
        name: '',
        url: '',
        height: '',
        weight: [],
        chest: [],
        shoulder: [],
        biwei: [],
        yaowei: [],
        tunwei: [],
        max_wt: [],
        max_yl: [],
        max_sd: []
      },
      rules: {
        name: [{ required: true, message: '请输入姓名', trigger: 'blur' }, { min: 2, max: 10, message: '长度在 3 到 5 个字符', trigger: 'blur' }],
        url: [{ required: true, message: '请输入链接地址', trigger: 'blur' }, { type: 'url', message: '必须是链接地址', trigger: 'blur' }]
        // height: [
        //   { required: true, message: '请选择身高', trigger: 'blur' ,type: 'number'},
        // ],
        // weight: [
        //   { required: true, message: '请选择体重', trigger: 'blur' ,type: 'number'},
        // ],
        // chest: [
        //   { required: true, message: '请选择胸围', trigger: 'blur' ,type: 'number'},
        // ],
        // shoulder: [
        //   { required: true, message: '请选择肩宽', trigger: 'blur' ,type: 'number'},
        // ],
        // biwei: [
        //   { required: true, message: '请选择臂围', trigger: 'blur' ,type: 'number'},
        // ],
        // yaowei: [
        //   { required: true, message: '请选择腰围', trigger: 'blur' ,type: 'number'},
        // ],
        // tunwei: [
        //   { required: true, message: '请选择臀围', trigger: 'blur' ,type: 'number'},
        // ],
        // max_wt: [
        //   { required: true, message: '请选择卧推重量', trigger: 'blur' ,type: 'number'},
        // ],
        // max_yl: [
        //   { required: true, message: '请选择硬拉重量', trigger: 'blur' ,type: 'number'},
        // ],
        // max_sd: [
        //   { required: true, message: '请选择深蹲重量', trigger: 'blur' ,type: 'number'},
        // ],

      }
    };
  },
  methods: {
    changeTitle() {
      document.title = this.ruleForm.name + "个人资料填写中ing";
      return true;
    },
    getArr(start, end) {
      var hei = Array();
      for (var i = start; i <= end; i++) {
        hei.push(i);
      }
      return hei;
    },
    getheight() {
      return this.getArr(155, 190);
    },
    getweight() {
      return this.getArr(60, 110);
    },
    getchest() {
      return this.getArr(80, 125);
    },
    getshoulder() {
      return this.getArr(40, 60);
    },
    getbiwei() {
      return this.getArr(35, 60);
    },
    getyaowei() {
      return this.getArr(70, 90);
    },
    gettunwei() {
      return this.getArr(80, 110);
    },
    getmax_wt() {
      return this.getArr(70, 200);
    },
    getmax_yl() {
      return this.getArr(80, 300);
    },
    getmax_sd() {
      return this.getArr(70, 250);
    },
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          this.$http.post(gconfig.apiClient + '/zhijia/phone/test/image/merge', { name: this.ruleForm.name, img: this.ruleForm.url, height: this.ruleForm.height, weight: this.ruleForm.weight, chest: this.ruleForm.chest, shoulder: this.ruleForm.shoulder, biwei: this.ruleForm.biwei, yaowei: this.ruleForm.yaowei, tunwei: this.ruleForm.tunwei, max_wt: this.ruleForm.max_wt, max_yl: this.ruleForm.max_yl, max_sd: this.ruleForm.max_sd }, {
            headers: {},
            emulateJSON: true
          }).then(function (response) {
            // 这里是处理正确的回调
            // router.push('j')
            // this.$router.push({ path: '/j' })
            // this.$router.push({ path: '/u/100714'})

          }, function (response) {
            // 这里是处理错误的回调
            // this.$router.push({ path: '/u/100714'})
            // console.log(response)
            window.location.href = 'http://x.3long.cc/meger_aaa.jpg';
          });

          // alert('submit!');
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }

  },
  mounted: function () {
    document.title = "个人资料";
    this.zheight = this.getheight();
    this.zweight = this.getweight();
    this.chest = this.getchest();
    this.shoulder = this.getshoulder();
    this.biwei = this.getbiwei();
    this.yaowei = this.getyaowei();
    this.tunwei = this.gettunwei();
    this.max_wt = this.getmax_wt();
    this.max_yl = this.getmax_yl();
    this.max_sd = this.getmax_sd();
  }
});

/***/ }),

/***/ "AKhK":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "DDTj":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "Doul":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('el-container',[_c('el-header',{staticClass:"content-vaglin"},[_vm._v("\n        运动员X档案生成器\n      ")]),_vm._v(" "),_c('el-main',[_c('el-form',{ref:"ruleForm",staticClass:"demo-ruleForm",attrs:{"model":_vm.ruleForm,"rules":_vm.rules,"label-width":"100px"}},[_c('el-form-item',{attrs:{"label":"姓名","prop":"name"}},[_c('el-input',{model:{value:(_vm.ruleForm.name),callback:function ($$v) {_vm.$set(_vm.ruleForm, "name", $$v)},expression:"ruleForm.name"}})],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"图片地址","prop":"url"}},[_c('el-input',{model:{value:(_vm.ruleForm.url),callback:function ($$v) {_vm.$set(_vm.ruleForm, "url", $$v)},expression:"ruleForm.url"}})],1),_vm._v(" "),_c('tr',[_c('td',[_c('el-form-item',{attrs:{"label":"身高","prop":"height"}},[_c('el-select',{staticStyle:{"width":"100%"},attrs:{"placeholder":"请选择身高","filterable":""},model:{value:(_vm.ruleForm.height),callback:function ($$v) {_vm.$set(_vm.ruleForm, "height", $$v)},expression:"ruleForm.height"}},_vm._l((_vm.zheight),function(item){return _c('el-option',{attrs:{"label":item + 'cm',"value":item}})}))],1)],1),_c('td',[_c('el-form-item',{attrs:{"label":"体重","prop":"weight"}},[_c('el-select',{staticStyle:{"width":"100%"},attrs:{"placeholder":"请选择体重","filterable":""},model:{value:(_vm.ruleForm.weight),callback:function ($$v) {_vm.$set(_vm.ruleForm, "weight", $$v)},expression:"ruleForm.weight"}},_vm._l((_vm.zweight),function(item){return _c('el-option',{attrs:{"label":item + 'kg',"value":item}})}))],1)],1)]),_vm._v(" "),_c('tr',[_c('td',[_c('el-form-item',{attrs:{"label":"胸围","prop":"chest"}},[_c('el-select',{staticStyle:{"width":"100%"},attrs:{"placeholder":"请选择胸围","filterable":""},model:{value:(_vm.ruleForm.chest),callback:function ($$v) {_vm.$set(_vm.ruleForm, "chest", $$v)},expression:"ruleForm.chest"}},_vm._l((_vm.chest),function(item){return _c('el-option',{attrs:{"label":item + 'cm',"value":item}})}))],1)],1),_c('td',[_c('el-form-item',{attrs:{"label":"肩宽","prop":"shoulder"}},[_c('el-select',{staticStyle:{"width":"100%"},attrs:{"placeholder":"请选择肩宽","filterable":""},model:{value:(_vm.ruleForm.shoulder),callback:function ($$v) {_vm.$set(_vm.ruleForm, "shoulder", $$v)},expression:"ruleForm.shoulder"}},_vm._l((_vm.shoulder),function(item){return _c('el-option',{attrs:{"label":item + 'cm',"value":item}})}))],1)],1)]),_vm._v(" "),_c('tr',[_c('td',[_c('el-form-item',{attrs:{"label":"臂围","prop":"biwei"}},[_c('el-select',{staticStyle:{"width":"100%"},attrs:{"placeholder":"请选择臂围","filterable":""},model:{value:(_vm.ruleForm.biwei),callback:function ($$v) {_vm.$set(_vm.ruleForm, "biwei", $$v)},expression:"ruleForm.biwei"}},_vm._l((_vm.biwei),function(item){return _c('el-option',{attrs:{"label":item + 'cm',"value":item}})}))],1)],1),_c('td',[_c('el-form-item',{attrs:{"label":"腰围","prop":"yaowei"}},[_c('el-select',{staticStyle:{"width":"100%"},attrs:{"placeholder":"请选择腰围","filterable":""},model:{value:(_vm.ruleForm.yaowei),callback:function ($$v) {_vm.$set(_vm.ruleForm, "yaowei", $$v)},expression:"ruleForm.yaowei"}},_vm._l((_vm.yaowei),function(item){return _c('el-option',{attrs:{"label":item + 'cm',"value":item}})}))],1)],1)]),_vm._v(" "),_c('tr',[_c('td',[_c('el-form-item',{attrs:{"label":"臀围","prop":"tunwei"}},[_c('el-select',{staticStyle:{"width":"100%"},attrs:{"placeholder":"请选择臀围","filterable":""},model:{value:(_vm.ruleForm.tunwei),callback:function ($$v) {_vm.$set(_vm.ruleForm, "tunwei", $$v)},expression:"ruleForm.tunwei"}},_vm._l((_vm.tunwei),function(item){return _c('el-option',{attrs:{"label":item + 'cm',"value":item}})}))],1)],1),_c('td',[_c('el-form-item',{attrs:{"label":"最大卧推","prop":"max_wt"}},[_c('el-select',{staticStyle:{"width":"100%"},attrs:{"placeholder":"请选择最大卧推","filterable":""},model:{value:(_vm.ruleForm.max_wt),callback:function ($$v) {_vm.$set(_vm.ruleForm, "max_wt", $$v)},expression:"ruleForm.max_wt"}},_vm._l((_vm.max_wt),function(item){return _c('el-option',{attrs:{"label":item + 'kg',"value":item}})}))],1)],1)]),_vm._v(" "),_c('tr',[_c('td',[_c('el-form-item',{attrs:{"label":"最大硬拉","prop":"max_yl"}},[_c('el-select',{staticStyle:{"width":"100%"},attrs:{"placeholder":"请选择最大硬拉","filterable":""},model:{value:(_vm.ruleForm.max_yl),callback:function ($$v) {_vm.$set(_vm.ruleForm, "max_yl", $$v)},expression:"ruleForm.max_yl"}},_vm._l((_vm.max_yl),function(item){return _c('el-option',{attrs:{"label":item + 'kg',"value":item}})}))],1)],1),_c('td',[_c('el-form-item',{attrs:{"label":"最大深蹲","prop":"max_sd"}},[_c('el-select',{staticStyle:{"width":"100%"},attrs:{"placeholder":"请选择最大深蹲","filterable":""},model:{value:(_vm.ruleForm.max_sd),callback:function ($$v) {_vm.$set(_vm.ruleForm, "max_sd", $$v)},expression:"ruleForm.max_sd"}},_vm._l((_vm.max_sd),function(item){return _c('el-option',{attrs:{"label":item + 'kg',"value":item}})}))],1)],1)]),_vm._v(" "),_c('el-form-item',[_c('el-button',{attrs:{"type":"primary"},on:{"click":function($event){_vm.submitForm('ruleForm')}}},[_vm._v("立即创建")]),_vm._v(" "),_c('el-button',{on:{"click":function($event){_vm.resetForm('ruleForm')}}},[_vm._v("重置")])],1)],1)],1)],1)],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ "M93x":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_App_vue__ = __webpack_require__("xJD8");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_b05f0166_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_App_vue__ = __webpack_require__("xq6C");
function injectStyle (ssrContext) {
  __webpack_require__("eyBS")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */

/* template */

/* template functional */
  var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_App_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_b05f0166_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_App_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ "NHnr":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__("7+uW");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__App__ = __webpack_require__("M93x");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__router__ = __webpack_require__("YaEn");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_element_ui__ = __webpack_require__("zL8q");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_element_ui___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_element_ui__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__node_modules_element_ui_lib_theme_chalk_index_css__ = __webpack_require__("tvR6");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__node_modules_element_ui_lib_theme_chalk_index_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__node_modules_element_ui_lib_theme_chalk_index_css__);
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.





// import 'element-ui/lib/theme-default/index.css'

__WEBPACK_IMPORTED_MODULE_0_vue__["default"].use(__WEBPACK_IMPORTED_MODULE_3_element_ui___default.a);

__WEBPACK_IMPORTED_MODULE_0_vue__["default"].config.debug = true;
__WEBPACK_IMPORTED_MODULE_0_vue__["default"].config.productionTip = false;

/* eslint-disable no-new */
new __WEBPACK_IMPORTED_MODULE_0_vue__["default"]({
  el: '#app',
  router: __WEBPACK_IMPORTED_MODULE_2__router__["a" /* default */],
  template: '<App/>',
  components: { App: __WEBPACK_IMPORTED_MODULE_1__App__["a" /* default */] }
});

/***/ }),

/***/ "PgRy":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('img',{style:(_vm.stylez),attrs:{"onerror":_vm.defaultImg,"src":_vm.src,"height":_vm.height,"width":_vm.width}})])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ "Q6FB":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["a"] = ({
  data() {
    return {
      // activeIndex: '1',
      // activeIndex2: '0'
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    }
  }
});

/***/ }),

/***/ "Ugmc":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('el-carousel',{staticStyle:{"height":"250px"},attrs:{"interval":5000,"arrow":"always"}},_vm._l((_vm.items),function(item){return _c('el-carousel-item',{key:item},[_c('imagez',{attrs:{"src":item,"height":"250px","width":"100%"}})],1)})),_vm._v(" "),_c('div',[_c('el-row',{staticClass:"div-under",staticStyle:{"height":"50px","vertical-align":"center"}},[_c('el-col',{attrs:{"xs":24,"sm":24,"md":24,"lg":24}},[_c('div',{staticClass:"float-l",staticStyle:{"vertical-align":"middle","line-height":"60px"}},_vm._l((_vm.tags),function(tag){return _c('el-tag',{key:tag,staticStyle:{"margin":"0 3px 0 3px"},attrs:{"size":"mini"}},[_vm._v(_vm._s(tag))])}))])],1)],1),_vm._v(" "),_c('div',{staticClass:"div_height22"}),_vm._v(" "),_c('div',[_c('el-row',[_c('el-col',{attrs:{"xs":4,"sm":4,"md":4,"lg":4}},[_c('div',{staticStyle:{"font-size":"14px","color":"gray"}},[_vm._v("简介")])]),_vm._v(" "),_c('el-col',{attrs:{"xs":20,"sm":20,"md":20,"lg":20}},[_c('div',{staticClass:"text-size14 float-l",staticStyle:{"line-height":"20px","font-size":"14px","text-align":"left"}},[_vm._v(_vm._s(_vm.intro))])])],1)],1),_vm._v(" "),_c('div',{staticClass:"div_height22"}),_vm._v(" "),_c('div',[_c('el-row',[_c('el-col',{attrs:{"xs":12,"sm":12,"md":12,"lg":12}},[_c('div',{class:[_vm.divred?'div-bottom-red':'div-bottom-gray'],staticStyle:{"height":"30px","line-height":"30px"},on:{"click":function($event){_vm.divred = true}}},[_vm._v("氮泵")])]),_vm._v(" "),_c('el-col',{attrs:{"xs":12,"sm":12,"md":12,"lg":12}},[_c('div',{class:[_vm.divred?'div-bottom-gray':'div-bottom-red'],staticStyle:{"height":"30px","line-height":"30px"},on:{"click":function($event){_vm.divred = false}}},[_vm._v("铁友")])])],1)],1),_vm._v(" "),_c('div',{directives:[{name:"show",rawName:"v-show",value:(!_vm.divred),expression:"!divred"}],staticClass:"div-hy"},_vm._l((_vm.students),function(stu){return _c('div',{key:stu.id,staticStyle:{"border-bottom":"solid 1px #e6e6e6","padding-top":"15px","padding-bottom":"15px"}},[_c('el-row',[_c('el-col',{attrs:{"xs":6,"sm":6,"md":6,"lg":6}},[_c('div',[_c('imagez',{staticStyle:{"padding-left":"10px","float":"left"},attrs:{"src":stu.avatar,"height":"80px","width":"80px"}}),_vm._v(" "),_c('div',{staticStyle:{"font-weight":"bold"}},[_vm._v("2017.01 - 2017.06")]),_vm._v(" "),_c('div',{staticClass:"div_height10"})],1)]),_vm._v(" "),_c('el-col',{attrs:{"xs":18,"sm":18,"md":18,"lg":18}},[_c('div',{staticClass:"text-size12",staticStyle:{"padding-left":"10px","text-align":"left","padding-top":"5px"}},[_c('div',{staticClass:"text-size14"},[_c('strong',[_vm._v(_vm._s(stu.username))])]),_vm._v(" "),_c('div',[_vm._v(_vm._s(stu.intro))]),_vm._v(" "),_c('div',{staticClass:"div-under div_height10"}),_vm._v(" "),_c('div',[_c('imagez',{attrs:{"src":stu.pic,"width":"100%","height":"auto"}})],1)])])],1)],1)})),_vm._v(" "),_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.divred),expression:"divred"}],staticClass:"div-rc"},[_c('feedcom',{attrs:{"feeds":_vm.feeds}})],1)],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ "YF26":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Global_vue__ = __webpack_require__("q/Hl");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_7535b5a8_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Global_vue__ = __webpack_require__("Z6UQ");
var normalizeComponent = __webpack_require__("VU/8")
/* script */

/* template */

/* template functional */
  var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Global_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_7535b5a8_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Global_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ "YaEn":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__("7+uW");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue_router__ = __webpack_require__("/ocq");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_vue_resource__ = __webpack_require__("ORbq");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_HelloWorld__ = __webpack_require__("gORT");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_Jiaolian__ = __webpack_require__("fXeO");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_User__ = __webpack_require__("jyJz");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_Global__ = __webpack_require__("YF26");









global.gconfig = __WEBPACK_IMPORTED_MODULE_6__components_Global__["a" /* default */];
// Vue.prototype.GLOBAL = Global_

__WEBPACK_IMPORTED_MODULE_0_vue__["default"].use(__WEBPACK_IMPORTED_MODULE_1_vue_router__["a" /* default */]);
__WEBPACK_IMPORTED_MODULE_0_vue__["default"].use(__WEBPACK_IMPORTED_MODULE_2_vue_resource__["a" /* default */]);

/* harmony default export */ __webpack_exports__["a"] = (new __WEBPACK_IMPORTED_MODULE_1_vue_router__["a" /* default */]({
  routes: [
  // {
  //   path: '/',
  //   name: 'Hello',
  //   component: HelloWorld
  // },
  {
    path: '/',
    name: 'Hello',
    component: __WEBPACK_IMPORTED_MODULE_4__components_Jiaolian__["a" /* default */]
  }, {
    path: '/j',
    component: __WEBPACK_IMPORTED_MODULE_4__components_Jiaolian__["a" /* default */]
  }, {
    path: '/u/:id',
    component: __WEBPACK_IMPORTED_MODULE_5__components_User__["a" /* default */]
  }]
}));
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("DuR2")))

/***/ }),

/***/ "Z6UQ":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div')}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ "aPTA":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Feed_vue__ = __webpack_require__("nGxh");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_00ec7963_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Feed_vue__ = __webpack_require__("xmY3");
var normalizeComponent = __webpack_require__("VU/8")
/* script */

/* template */

/* template functional */
  var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Feed_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_00ec7963_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Feed_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ "aQOx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Image_vue__ = __webpack_require__("8HOU");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_4ce55be6_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Image_vue__ = __webpack_require__("PgRy");
var normalizeComponent = __webpack_require__("VU/8")
/* script */

/* template */

/* template functional */
  var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Image_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_4ce55be6_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Image_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ "eyBS":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "fXeO":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Jiaolian_vue__ = __webpack_require__("8NBs");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_9e283348_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Jiaolian_vue__ = __webpack_require__("Doul");
function injectStyle (ssrContext) {
  __webpack_require__("+ren")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */

/* template */

/* template functional */
  var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Jiaolian_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_9e283348_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Jiaolian_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ "gORT":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_HelloWorld_vue__ = __webpack_require__("07PK");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_cf465a36_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_HelloWorld_vue__ = __webpack_require__("h/yK");
function injectStyle (ssrContext) {
  __webpack_require__("DDTj")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */

/* template */

/* template functional */
  var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-cf465a36"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_HelloWorld_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_cf465a36_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_HelloWorld_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* unused harmony default export */ var _unused_webpack_default_export = (Component.exports);


/***/ }),

/***/ "h/yK":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"hello"},[_c('h1',[_vm._v(_vm._s(_vm.msg))]),_vm._v(" "),_c('h2',[_vm._v("Tools")]),_vm._v(" "),_c('ul',[_vm._m(0),_vm._v(" "),_c('li',[_c('router-link',{attrs:{"to":"/myip","title":"VUE+elementui"}},[_vm._v("局域网IP")])],1),_vm._v(" "),_c('li',[_c('router-link',{attrs:{"to":"/u/100714","title":"VUE+elementui"}},[_vm._v("动态数据")])],1),_vm._v(" "),_c('li',[_c('router-link',{attrs:{"to":"/j","title":"VUE+elementui"}},[_vm._v("教练示例页面")])],1)])])}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('li',[_c('a',{attrs:{"href":"https://jacena.github.io/chrome2wx","target":"_blank","title":"把pc端的网页地址发送到微信，还可以自定义保存"}},[_vm._v("chrome浏览器插件")])])}]
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ "jyJz":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_User_vue__ = __webpack_require__("qgpy");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_070abde0_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_User_vue__ = __webpack_require__("Ugmc");
function injectStyle (ssrContext) {
  __webpack_require__("AKhK")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */

/* template */

/* template functional */
  var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_User_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_070abde0_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_User_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ "kvT1":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/img/404.ab2ba31.jpg";

/***/ }),

/***/ "lBdU":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('el-row',[_c('el-col')],1)],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ "mj/X":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "nGxh":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["a"] = ({
  props: ['feeds'],
  data() {
    return {
      defaultImg: 'this.src="' + __webpack_require__("kvT1") + '"'
    };
  },
  mounted: function () {
    // console.log(this.feeds)

  }
});

/***/ }),

/***/ "q/Hl":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//
//


const apiClient = 'http://5wang.me';
/* harmony default export */ __webpack_exports__["a"] = ({
  defaultImg: 'this.src="' + __webpack_require__("kvT1") + '"',
  apiClient
});

/***/ }),

/***/ "qgpy":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Feed_vue__ = __webpack_require__("aPTA");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Image_vue__ = __webpack_require__("aQOx");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["a"] = ({
  data() {
    return {
      uid: 0,
      username: '',
      intro: '',
      tags: [],
      students: [],
      feeds: [],
      msg2: '这是第二个组件',
      activeNames: ['1'],
      activeName2: "first",
      divred: true,
      items: [
        // "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1508749491723&di=c7fcbc2e0950fa7ec5138cf626059343&imgtype=0&src=http%3A%2F%2Fwww.jianshenjiaolian.com.cn%2Fwp-content%2Fuploads%2F2017%2F07%2F212393.jpg",
        // "https://p0.meituan.net/dpdeal/71719d3d81ad69faf3c6da12c57ee8fe1024615.jpg%40450w_280h_1e_1c_1l%7Cwatermark%3D1%26%26r%3D1%26p%3D9%26x%3D2%26y%3D2%26relative%3D1%26o%3D20",
        // "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1508749581195&di=4bc5ca2afe10b25a984fb6a5c41a95e8&imgtype=0&src=http%3A%2F%2Fe.hiphotos.baidu.com%2Fnuomi%2Fwh%253D470%252C285%2Fsign%3Da204f94488d4b31cf0699cbfb0e60b4d%2F71cf3bc79f3df8dc39e96d96ce11728b461028e5.jpg",
        // "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1508749632082&di=704b329f65aea279d33924e047e67138&imgtype=0&src=http%3A%2F%2Fsports.eastday.com%2Fimages%2Fthumbnailimg%2Fmonth_1604%2F201604261313347263.jpg"
      ],
      defaultImg: gconfig.defaultImg
    };
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    },
    testmsg: function (text) {
      console.log(text);
    }
  },
  mounted: function () {
    document.title = "张教练";
    this.uid = this.$route.params.id;
    this.$http.post(gconfig.apiClient + '/api/user/home', { uid: this.uid }, {
      headers: {},
      emulateJSON: true
    }).then(function (response) {
      // 这里是处理正确的回调
      var u_data = response.data.data;
      this.username = response.data.data.username;
      this.intro = u_data.intro;
      this.tags = u_data.tags;
      this.items = u_data.slide_pic;
      this.students = u_data.student;
      this.feeds = u_data.feed;
      // this.articles = response.data["subjects"] 也可以
    }, function (response) {
      // 这里是处理错误的回调
      console.log(response);
    });
  },
  components: { feedcom: __WEBPACK_IMPORTED_MODULE_0__Feed_vue__["a" /* default */], imagez: __WEBPACK_IMPORTED_MODULE_1__Image_vue__["a" /* default */] }
});

/***/ }),

/***/ "tvR6":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "uL8o":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Nav_vue__ = __webpack_require__("Q6FB");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_ef100f24_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Nav_vue__ = __webpack_require__("lBdU");
function injectStyle (ssrContext) {
  __webpack_require__("mj/X")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */

/* template */

/* template functional */
  var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Nav_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_ef100f24_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Nav_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ "xJD8":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_Nav_vue__ = __webpack_require__("uL8o");
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'app',
  components: { navz: __WEBPACK_IMPORTED_MODULE_0__components_Nav_vue__["a" /* default */] }
});

/***/ }),

/***/ "xmY3":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',_vm._l((_vm.feeds),function(feed){return _c('div',{key:feed.id},[_c('div',{staticStyle:{"border-bottom":"solid 1px #e6e6e6","padding-top":"15px","padding-bottom":"15px"}},[_c('el-row',[_c('el-col',{attrs:{"xs":24,"sm":24,"md":24,"lg":24}},[_c('div',{staticClass:"text-size12",staticStyle:{"padding-left":"0px","text-align":"left","padding-top":"5px"}},[_c('div',{staticStyle:{"padding-left":"20px","padding-right":"20px"}},[_c('div',[_vm._v(_vm._s(feed.feed_text))])]),_vm._v(" "),(feed.feed_pic)?_c('div',[(feed.type === '1')?_c('div',[_c('div',{staticClass:"div_height15"}),_vm._v(" "),_c('center',[_c('img',{attrs:{"onerror":_vm.defaultImg,"src":feed.feed_pic,"width":"80%","height":"auto"}})])],1):_vm._e(),_vm._v(" "),(feed.type === '2')?_c('div',[_c('div',{staticStyle:{"padding-left":"20px","padding-right":"20px"}},[_c('div',{staticClass:"div-link",staticStyle:{"background-color":"#f5f5f5","height":"30px","line-height":"30px"}},[_c('a',{staticClass:"div-pad10",attrs:{"href":feed.feed_pic}},[_vm._v(_vm._s(feed.feed_pic))])])])]):_vm._e()]):_vm._e()])])],1)],1)])}))}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ "xq6C":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{"id":"app"}},[_c('navz'),_vm._v(" "),_c('router-view')],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ })

},["NHnr"]);
//# sourceMappingURL=app.0a91ef430b2676d0f4b5.js.map