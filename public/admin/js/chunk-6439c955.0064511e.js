(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6439c955"],{"1ee4":function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("form",{on:{submit:function(t){t.preventDefault()}}},[i("label",{staticClass:"type-label"},[t._v(t._s(t.$t("layouts.tabular.fields")))]),i("draggable",{attrs:{direction:"vertical"},on:{end:t.sort},model:{value:t.sortList,callback:function(e){t.sortList=e},expression:"sortList"}},t._l(t.sortList,(function(e){return i("div",{key:"tabular-layout-options-field-"+e.field,staticClass:"draggable"},[i("v-checkbox",{key:e.field,staticClass:"checkbox",attrs:{id:"tabular-layout-options-field-"+e.field,label:e.name,value:e.field,inputValue:t.fieldsInUse.includes(e.field)},on:{change:function(i){return t.toggleField(e.field)}}}),i("v-icon",{staticClass:"handle",attrs:{name:"drag_handle",color:"--input-border-color"}})],1)})),0),i("label",{staticClass:"type-label",attrs:{for:"spacing"}},[t._v(t._s(t.$t("spacing")))]),i("v-select",{staticClass:"select",attrs:{id:"spacing",value:t.viewOptions.spacing||"comfortable",options:{compact:t.$t("compact"),cozy:t.$t("cozy"),comfortable:t.$t("comfortable")},icon:"reorder"},on:{input:t.setSpacing}})],1)},s=[],l=(i("99af"),i("4de4"),i("caad"),i("c975"),i("a15b"),i("d81d"),i("fb6a"),i("a434"),i("07ac"),i("ac1f"),i("2532"),i("1276"),i("5530")),r=i("2909"),a=i("c3ff"),o=i.n(a),c={mixins:[o.a],data:function(){return{sortList:null}},computed:{fieldsInUse:function(){var t=this;return this.viewQuery&&this.viewQuery.fields?""===this.viewQuery.fields?[]:this.viewQuery.fields.split(",").filter((function(e){return t.fields[e]})):Object.values(this.fields).filter((function(t){return!1===t.primary_key||"0"===t.primary_key})).filter((function(t){return!0!==t.hidden_browse})).slice(0,4).map((function(t){return t.field}))}},watch:{fields:function(){this.initSortList()}},created:function(){this.initSortList()},methods:{setSpacing:function(t){this.$emit("options",{spacing:t})},toggleField:function(t){var e=Object(r["a"])(this.fieldsInUse);e.includes(t)?e.splice(e.indexOf(t),1):e.push(t);var i=this.sortList.map((function(t){return t.field})).filter((function(t){return e.includes(t)})).join();this.$emit("query",{fields:i})},sort:function(){var t=this;this.$emit("query",Object(l["a"])(Object(l["a"])({},this.viewQuery),{},{fields:this.sortList.map((function(t){return t.field})).filter((function(e){return t.fieldsInUse.includes(e)})).join()}))},initSortList:function(){var t=this;this.sortList=[].concat(Object(r["a"])(this.fieldsInUse.map((function(e){return t.fields[e]}))),Object(r["a"])(Object.values(this.fields).filter((function(e){return!t.fieldsInUse.includes(e.field)}))))}}},u=c,f=(i("8f75"),i("2877")),d=Object(f["a"])(u,n,s,!1,null,"40782548",null);e["default"]=d.exports},7786:function(t,e,i){},"8f75":function(t,e,i){"use strict";var n=i("7786"),s=i.n(n);s.a},c3ff:function(t,e){t.exports={props:{primaryKeyField:{type:String,required:!0},fields:{type:Object,required:!0},items:{type:Array,default:()=>[]},viewOptions:{type:Object,default:()=>({})},viewQuery:{type:Object,default:()=>({})},loading:{type:Boolean,default:!1},lazyLoading:{type:Boolean,default:!1},selection:{type:Array,default:()=>[]},link:{type:String,default:null},sortField:{type:String,default:null},collection:{type:String,default:null}}}}}]);
//# sourceMappingURL=chunk-6439c955.0064511e.js.map