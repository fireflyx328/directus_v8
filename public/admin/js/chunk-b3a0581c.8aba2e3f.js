(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-b3a0581c"],{1148:function(e,t,i){"use strict";var n=i("a691"),r=i("1d80");e.exports="".repeat||function(e){var t=String(r(this)),i="",a=n(e);if(a<0||a==1/0)throw RangeError("Wrong number of repetitions");for(;a>0;(a>>>=1)&&(t+=t))1&a&&(i+=t);return i}},"281c":function(e,t,i){"use strict";i.d(t,"a",(function(){return n}));i("99af"),i("b6802");function n(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],i=t?1e3:1024;if(!1===Boolean(e))return"--";if(Math.abs(e)<i)return"".concat(e," B");var n=t?["kB","MB","GB","TB","PB","EB","ZB","YB"]:["KiB","MiB","GiB","TiB","PiB","EiB","ZiB","YiB"],r=-1,a=e;do{a/=i,r+=1}while(Math.abs(a)>=i&&r<n.length-1);return"".concat(a.toFixed(1)," ").concat(n[r])}},"408a":function(e,t,i){var n=i("c6b6");e.exports=function(e){if("number"!=typeof e&&"Number"!=n(e))throw TypeError("Incorrect invocation");return+e}},"53ca":function(e,t,i){"use strict";i.d(t,"a",(function(){return n}));i("a4d3"),i("e01a"),i("d28b"),i("d3b7"),i("3ca3"),i("ddb0");function n(e){return n="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(e)}},"6aac":function(e,t,i){},"8db2":function(e,t){e.exports={props:{id:{type:String,required:!0},name:{type:String,required:!0},value:{type:null,default:null},type:{type:String,required:!0},length:{type:[String,Number],default:null},readonly:{type:Boolean,default:!1},collection:{type:String,default:null},primaryKey:{type:[Number,String],default:null},required:{type:Boolean,default:!1},options:{type:Object,default:()=>({})},newItem:{type:Boolean,default:!1},relation:{type:Object,default:null},fields:{type:Object,default:null},values:{type:Object,default:null},width:{type:String,default:null,validator(e){return["half","half-left","half-right","full","fill"].includes(e)}}}}},b6802:function(e,t,i){"use strict";var n=i("23e7"),r=i("a691"),a=i("408a"),o=i("1148"),s=i("d039"),c=1..toFixed,l=Math.floor,u=function(e,t,i){return 0===t?i:t%2===1?u(e,t-1,i*e):u(e*e,t/2,i)},d=function(e){var t=0,i=e;while(i>=4096)t+=12,i/=4096;while(i>=2)t+=1,i/=2;return t},f=c&&("0.000"!==8e-5.toFixed(3)||"1"!==.9.toFixed(0)||"1.25"!==1.255.toFixed(2)||"1000000000000000128"!==(0xde0b6b3a7640080).toFixed(0))||!s((function(){c.call({})}));n({target:"Number",proto:!0,forced:f},{toFixed:function(e){var t,i,n,s,c=a(this),f=r(e),p=[0,0,0,0,0,0],h="",v="0",m=function(e,t){var i=-1,n=t;while(++i<6)n+=e*p[i],p[i]=n%1e7,n=l(n/1e7)},g=function(e){var t=6,i=0;while(--t>=0)i+=p[t],p[t]=l(i/e),i=i%e*1e7},b=function(){var e=6,t="";while(--e>=0)if(""!==t||0===e||0!==p[e]){var i=String(p[e]);t=""===t?i:t+o.call("0",7-i.length)+i}return t};if(f<0||f>20)throw RangeError("Incorrect fraction digits");if(c!=c)return"NaN";if(c<=-1e21||c>=1e21)return String(c);if(c<0&&(h="-",c=-c),c>1e-21)if(t=d(c*u(2,69,1))-69,i=t<0?c*u(2,-t,1):c/u(2,t,1),i*=4503599627370496,t=52-t,t>0){m(0,i),n=f;while(n>=7)m(1e7,0),n-=7;m(u(10,n,1),0),n=t-1;while(n>=23)g(1<<23),n-=23;g(1<<n),m(1,1),g(2),v=b()}else m(0,i),m(1<<-t,0),v=b()+o.call("0",f);return f>0?(s=v.length,v=h+(s<=f?"0."+o.call("0",f-s)+v:v.slice(0,s-f)+"."+v.slice(s-f))):v=h+v,v}})},c2cd:function(e,t,i){"use strict";var n=i("6aac"),r=i.n(n);r.a},dea2:function(e,t,i){"use strict";i.r(t);var n=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"input-single-file"},[e.noFileAccess?i("v-notice",{staticClass:"notice"},[e._v(" "+e._s(e.$t("this_item_is_not_available"))+" "),i("button",{on:{click:function(t){return e.$emit("input",null)}}},[i("v-icon",{directives:[{name:"tooltip",rawName:"v-tooltip",value:e.$t("deselect"),expression:"$t('deselect')"}],attrs:{name:"clear"}})],1)]):null===e.image&&null!==e.value?i("v-spinner"):[!1===Array.isArray(e.value)&&e.value?i("v-card",{staticClass:"card",attrs:{title:e.image.title,subtitle:e.subtitle+e.subtitleExtra,src:e.src,icon:e.icon,"text-background":"",color:"black",options:e.cardOptions,"medium-image":e.width.startsWith("half"),"big-image":"full"===e.width,"only-show-on-hover":e.isImage},on:{download:e.downloadFile,deselect:function(t){return e.$emit("input",null)},remove:e.removeFile}}):i("v-upload",{staticClass:"uploader",attrs:{small:"",disabled:e.readonly,accept:e.options.accept,multiple:!1},on:{upload:e.saveUpload}}),e.value?e._e():i("div",{staticClass:"buttons"},[i("v-button",{attrs:{type:"button",disabled:e.readonly},on:{click:function(t){e.existing=!0}}},[i("v-icon",{attrs:{name:"playlist_add",left:""}}),e._v(" "+e._s(e.$t("existing"))+" ")],1)],1),e.existing?i("portal",{attrs:{to:"modal"}},[i("v-modal",{attrs:{title:e.$t("choose_one"),buttons:{done:{text:e.$t("done")}}},on:{cancel:function(t){e.existing=!1},close:function(t){e.existing=!1},done:function(t){e.existing=!1}}},[i("div",{staticClass:"content"},[i("div",{staticClass:"search"},[i("v-input",{staticClass:"search-input",attrs:{type:"search",placeholder:e.$t("search_for_item")},on:{input:e.onSearchInput}})],1),i("v-items",{staticClass:"items",attrs:{collection:"directus_files","view-type":e.viewType,selection:e.value?[e.value]:[],filters:e.filters,"view-query":e.viewQuery,"view-options":e.viewOptions},on:{options:e.setViewOptions,query:e.setViewQuery,select:e.saveSelection}})],1)])],1):e._e()]],2)},r=[],a=(i("99af"),i("7db0"),i("45fc"),i("ac1f"),i("5319"),i("1276"),i("2ca0"),i("498a"),i("53ca")),o=(i("96cf"),i("1da1")),s=i("2909"),c=i("5530"),l=i("8db2"),u=i.n(l),d=i("281c"),f=i("fe76"),p=i("2f62"),h=i("2ef0"),v={mixins:[u.a],data:function(){return{existing:!1,viewOptionsOverride:{},viewTypeOverride:null,viewQueryOverride:{},filtersOverride:[],image:null,noFileAccess:!1}},computed:Object(c["a"])(Object(c["a"])({},Object(p["e"])(["currentProjectKey"])),{},{cardOptions:function(){var e={download:{text:this.$t("file_download"),icon:"file_download"},deselect:{text:this.$t("deselect"),icon:"clear"}};return!0===this.options.allowDelete&&(e.remove={text:this.$t("delete"),icon:"delete"}),e},subtitle:function(){return this.image?this.image.filename_disk.split(".").pop().toUpperCase()+" • "+this.$d(new Date(this.image.uploaded_on.replace(/-/g,"/")),"short"):""},subtitleExtra:function(){return this.image.type&&this.image.type.startsWith("image")?" • "+Object(d["a"])(this.image.filesize):""},src:function(){var e,t;if(!this.image.type||!this.image.type.startsWith("image"))return null;if("image/svg+xml"===this.image.type)return this.image.data.asset_url;var i="full"===this.width?"large":"medium",n=this.options.crop?"crop":"contain";return null===(e=this.image.data)||void 0===e||null===(t=e.thumbnails.find((function(e){return e.key==="directus-".concat(i,"-").concat(n)})))||void 0===t?void 0:t.url},isImage:function(){return this.image.type&&this.image.type.startsWith("image")},icon:function(){return this.image.type&&!this.image.type.startsWith("image")?Object(f["a"])(this.image.type):null},viewOptions:function(){var e=this.options.viewOptions;return Object(c["a"])(Object(c["a"])({},e),this.viewOptionsOverride)},viewType:function(){return this.viewTypeOverride?this.viewTypeOverride:this.options.viewType},viewQuery:function(){var e=this.options.viewQuery;return Object(c["a"])(Object(c["a"])({sort:"-id"},e),this.viewQueryOverride)},filters:function(){return[].concat(Object(s["a"])(this.options.filters||[]),Object(s["a"])(this.fileTypeFilters),Object(s["a"])(this.filtersOverride))},fileTypeFilters:function(){return!this.options.accept||this.filtersOverride.length>0||(this.options.filters||[]).some((function(e){return"type"===e.field}))?[]:[{field:"type",operator:"in",value:(this.options.accept||"").trim().split(/,\s*/)}]}}),created:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!e.value){t.next=3;break}return t.next=3,e.fetchImage();case 3:e.onSearchInput=Object(h["debounce"])(e.onSearchInput,200);case 4:case"end":return t.stop()}}),t)})))()},watch:{value:function(){this.fetchImage()}},methods:{fetchImage:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function t(){var i,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(e.noFileAccess=!1,e.image=null,e.value){t.next=4;break}return t.abrupt("return");case 4:return i="object"===Object(a["a"])(e.value)?e.value.id:e.value,t.prev=5,t.next=8,e.$api.getFile(String(i));case 8:n=t.sent,e.image=n.data,t.next=15;break;case 12:t.prev=12,t.t0=t["catch"](5),e.noFileAccess=!0;case 15:case"end":return t.stop()}}),t,null,[[5,12]])})))()},downloadFile:function(){window.open(this.image.data.full_url)},saveUpload:function(e){this.image=e.data,this.$emit("input",this.image.id)},setViewOptions:function(e){this.viewOptionsOverride=Object(c["a"])(Object(c["a"])({},this.viewOptionsOverride),e)},setViewQuery:function(e){this.viewQueryOverride=Object(c["a"])(Object(c["a"])({},this.viewQueryOverride),e)},onSearchInput:function(e){this.setViewQuery({q:e})},saveSelection:function(e){var t=e[e.length-1];t?(this.image=t,this.$emit("input",t)):(this.image=null,this.$emit("input",null)),this.existing=!1},removeFile:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function t(){var i;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return i=e.image,t.next=3,e.$api.deleteItem("directus_files",i.id);case 3:e.$notify({title:e.$t("item_deleted"),color:"green",iconMain:"check"}),e.image=null,e.$emit("input",null);case 6:case"end":return t.stop()}}),t)})))()}}},m=v,g=(i("c2cd"),i("2877")),b=Object(g["a"])(m,n,r,!1,null,"4b93e88a",null);t["default"]=b.exports},fe76:function(e,t,i){"use strict";i.d(t,"a",(function(){return n}));i("2ca0");function n(e){return"application/pdf"===e?"picture_as_pdf":e.startsWith("application")?"insert_drive_file":e.startsWith("image")?"crop_original":e.startsWith("video")?"videocam":e.startsWith("code")?"code":e.startsWith("audio")?"audiotrack":"save"}}}]);
//# sourceMappingURL=chunk-b3a0581c.8aba2e3f.js.map