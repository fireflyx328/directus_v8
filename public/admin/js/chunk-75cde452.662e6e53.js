(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-75cde452"],{"78d9":function(e,t,n){"use strict";var i=n("860f"),a=n.n(i);a.a},8485:function(e,t,n){"use strict";n.r(t);var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.relationshipSetup?n("v-sheet",[n("v-select",{staticClass:"language-picker",attrs:{options:e.options.languages,icon:"translate"},model:{value:e.currentLanguage,callback:function(t){e.currentLanguage=t},expression:"currentLanguage"}}),n("hr"),!1===e.loading&&null!==e.initialValues?n("div",{staticClass:"body"},[n("v-form",{key:e.currentLanguage,attrs:{"full-width":"",collection:e.relation.collection_many.collection,fields:e.translatedFields,values:e.currentLanguageValues,"primary-key":e.existing&&e.existing[e.translationsCollectionPrimaryKeyField]},on:{"stage-value":e.saveLanguage}})],1):n("v-spinner")],1):n("v-notice",{attrs:{color:"warning",icon:"warning"}},[e._v(" "+e._s(e.$t("relationship_not_setup"))+" ")])},a=[],l=(n("99af"),n("4de4"),n("7db0"),n("4160"),n("d81d"),n("b64b"),n("d3b7"),n("07ac"),n("159b"),n("ddb0"),n("96cf"),n("1da1")),r=n("2909"),u=n("ade3"),s=n("8db2"),o=n.n(s),c=n("2ef0"),d={mixins:[o.a],data:function(){return{currentLanguage:Object.keys(this.options.languages)[0],loading:!1,initialValues:null,relationalChanges:[]}},computed:{translatedFields:function(){var e=this;if(!1!==this.relationshipSetup)return Object(c["mapValues"])(this.relation.collection_many.fields,(function(t){return t=Object(c["clone"])(t),t.field===e.relation.field_many.field&&(t.readonly=!0),t}))},defaults:function(){return Object(c["mapValues"])(Object(c["clone"])(this.translatedFields),(function(e){return e.default_value}))},existing:function(){return Object(c["find"])(this.initialValues,Object(u["a"])({},this.options.languageField,this.currentLanguage))},translationsCollectionPrimaryKeyField:function(){return Object.values(this.relation.collection_many.fields).find((function(e){return!0===e.primary_key})).field},currentLanguageValues:function(){var e=Object(c["find"])(this.relationalChanges,Object(u["a"])({},this.options.languageField,this.currentLanguage));return Object(c["merge"])({},this.existing||this.defaults,e)},relationshipSetup:function(){var e;return!!(null===(e=this.relation)||void 0===e?void 0:e.collection_many)},currentPrimaryKey:function(){var e=Object(c["find"])(this.fields,{primary_key:!0}),t=e.field;return this.values[t]}},watch:{relationalChanges:{deep:!0,handler:function(e){e&&this.emitValue(e)}}},created:function(){this.fetchInitial()},methods:{saveLanguage:function(e){var t=this,n=e.field,i=e.value,a=Object(c["find"])(this.relationalChanges,Object(u["a"])({},this.options.languageField,this.currentLanguage));if(a)this.relationalChanges=this.relationalChanges.map((function(e){return e[t.options.languageField]===t.currentLanguage?Object(c["merge"])({},e,Object(u["a"])({},n,i)):e}));else{var l,s=(l={},Object(u["a"])(l,n,i),Object(u["a"])(l,this.options.languageField,this.currentLanguage),l);if(this.existing){var o=Object(c["find"])(this.translatedFields,{primary_key:!0}).field,d=this.existing[o];s[o]=d}this.relationalChanges=[].concat(Object(r["a"])(this.relationalChanges),[s])}},emitValue:function(e){if(0!=this.initialValues.length){var t=this.options.languageField,n=this.initialValues.map((function(n){var i=n[t],a=e.find((function(e){return e[t]===i}));return a?Object(c["merge"])({},n,a):n})).filter((function(e){return e}));e.forEach((function(e){var i=e[t],a=n.find((function(e){return e[t]===i}));a||n.push(e)})),this.$emit("input",n)}else this.$emit("input",e)},fetchInitial:function(){var e=this;return Object(l["a"])(regeneratorRuntime.mark((function t(){var n,i,a,l;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!1!==e.relationshipSetup){t.next=2;break}return t.abrupt("return");case 2:if(!e.values||!e.values[e.relation.field_one.field]){t.next=5;break}return e.initialValues=e.values[e.relation.field_one.field],t.abrupt("return");case 5:return e.loading=!0,n=e.relation.collection_many.collection,i=e.relation.field_many.field,t.next=10,e.$api.getItems(n,{filter:Object(u["a"])({},i,{eq:e.currentPrimaryKey})});case 10:a=t.sent,l=a.data,e.initialValues=l,e.loading=!1;case 14:case"end":return t.stop()}}),t)})))()}}},f=d,g=(n("78d9"),n("2877")),h=Object(g["a"])(f,i,a,!1,null,"1e8b7cbe",null);t["default"]=h.exports},"860f":function(e,t,n){},"8db2":function(e,t){e.exports={props:{id:{type:String,required:!0},name:{type:String,required:!0},value:{type:null,default:null},type:{type:String,required:!0},length:{type:[String,Number],default:null},readonly:{type:Boolean,default:!1},collection:{type:String,default:null},primaryKey:{type:[Number,String],default:null},required:{type:Boolean,default:!1},options:{type:Object,default:()=>({})},newItem:{type:Boolean,default:!1},relation:{type:Object,default:null},fields:{type:Object,default:null},values:{type:Object,default:null},width:{type:String,default:null,validator(e){return["half","half-left","half-right","full","fill"].includes(e)}}}}}}]);
//# sourceMappingURL=chunk-75cde452.662e6e53.js.map