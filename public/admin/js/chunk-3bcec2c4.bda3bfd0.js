(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3bcec2c4"],{"3f04":function(e,t,l){"use strict";l.r(t);var n=function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("v-ext-input",{attrs:{id:"repeater",type:"json",name:e.name,"input-name":e.id,value:e.formattedValue,length:e.length,readonly:e.readonly,required:e.required,options:e.repeaterOptions,"new-item":e.newItem,relation:e.relation,fields:e.fields,collection:e.collection,values:e.values,width:"full"},on:{input:e.emitValue}})},i=[],u=(l("4160"),l("d81d"),l("b64b"),l("159b"),l("8db2")),a=l.n(u),r={mixins:[a.a],computed:{repeaterOptions:function(){return{fields:[{field:"key",interface:this.options.keyInterface,options:this.options.keyOptions,type:this.options.keyType,width:"half"},{field:"value",interface:this.options.valueInterface,options:this.options.valueOptions,type:this.options.valueType,width:"half"}]}},formattedValue:function(){var e=this;return null===this.value?null:Object.keys(this.value).map((function(t){return{key:t,value:e.value[t]}}))}},methods:{emitValue:function(e){if(null===e)this.$emit("input",null);else{var t={};e.forEach((function(e){var l=e.key,n=e.value;return t[l]=n})),this.$emit("input",t)}}}},o=r,p=l("2877"),s=Object(p["a"])(o,n,i,!1,null,null,null);t["default"]=s.exports},"8db2":function(e,t){e.exports={props:{id:{type:String,required:!0},name:{type:String,required:!0},value:{type:null,default:null},type:{type:String,required:!0},length:{type:[String,Number],default:null},readonly:{type:Boolean,default:!1},collection:{type:String,default:null},primaryKey:{type:[Number,String],default:null},required:{type:Boolean,default:!1},options:{type:Object,default:()=>({})},newItem:{type:Boolean,default:!1},relation:{type:Object,default:null},fields:{type:Object,default:null},values:{type:Object,default:null},width:{type:String,default:null,validator(e){return["half","half-left","half-right","full","fill"].includes(e)}}}}}}]);
//# sourceMappingURL=chunk-3bcec2c4.bda3bfd0.js.map