(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0d600f"],{7165:function(t,r,e){"use strict";e.r(r);var n=function(){var t=this,r=t.$createElement,e=t._self._c||r;return t.currentProduct&&t.relatedProducts.length>0?e("base-section",{staticClass:"grey lighten-2 mb-n3 mb-md-n12",attrs:{id:"product-related-products"}},[e("v-container",{staticClass:"pt-12"},[e("base-heading",{staticClass:"text-center"},[t._v("\n      You Might Also Like\n    ")]),e("v-row",t._l(t.relatedProducts,(function(r){return e("v-col",{key:r.title,attrs:{cols:"12",md:"6",lg:"4"}},[e("base-product-card",{attrs:{item:r,height:t.$vuetify.breakpoint.mdAndUp?400:250,dense:"",responsive:""}})],1)})),1)],1)],1):t._e()},c=[],o=e("7ffd"),u={name:"ProductRelatedProducts",computed:{currentProduct:Object(o["c"])("products/currentProduct"),productsByCategory:Object(o["c"])("products/productsByCategory"),relatedProducts:function(){var t=this;if(!this.currentProduct)return[];var r=[],e=this.productsByCategory[this.currentProduct.productType]||[],n=e.filter((function(r){return r.id!==t.currentProduct.id}));if(!n.length)return[];if(n.length<4)return n;for(var c=0;c<3;c++)r.push(n.splice(Math.floor(Math.random()*n.length),1).shift());return r}}},s=u,d=e("2877"),a=e("6544"),i=e.n(a),l=e("62ad"),p=e("a523"),h=e("0fd9"),f=Object(d["a"])(s,n,c,!1,null,null,null);r["default"]=f.exports;i()(f,{VCol:l["a"],VContainer:p["a"],VRow:h["a"]})}}]);
//# sourceMappingURL=chunk-2d0d600f.d94bc497.js.map