define(["exports","jquery","websockets/binary_websockets","windows/windows","common/rivetsExtra","text!cashier/currency.html","lodash"],function(a,b,c,d,e,f,g){"use strict";function h(a){return a&&a.__esModule?a:{"default":a}}Object.defineProperty(a,"__esModule",{value:!0}),a.check_currency=void 0;var i=h(b),j=h(c),k=h(d),l=h(e),m=h(f),n=h(g);require(["common/util"]);var o=null,p=function(){return new Promise(function(a,b){var c=i["default"](m["default"]),d=k["default"].createBlankWindow(c,{dialogClass:"dialog-confirm",width:500,height:210,resizable:!1,collapsable:!1,minimizable:!1,maximizable:!1,modal:!0,ignoreTileAction:!0,close:function(){d.dialog("destroy"),d.remove(),d=null},destroy:function(){f&&f.unbind(),f=null}}),e={disabled:!0,value:"Select a value",array:["Select a value"],"continue":function(){e.disabled=!0,j["default"].send({set_account_currency:e.value}).then(a,b).then(function(){local_storage.set("currency",e.value);var a=local_storage.get("oauth");a[0].currency=e.value,local_storage.set("oauth",a),j["default"].switch_account(a[0].id),j["default"].send({balance:1,subscribe:1})["catch"](function(a){}),d.dialog("close")})},cancel:function(){d.dialog("close"),b({message:"Please set currency.".i18n()})}};j["default"].cached.send({payout_currencies:1}).then(function(a){e.disabled=!1,e.array=[],a.payout_currencies.forEach(function(a){var b=local_storage.get("currencies_config")||{},c={value:a,type:b[a]?b[a].type:""};e.array.push(c)}),e.categories=n["default"].uniqBy(e.array,"type").map(function(a){return a.type}),e.value=a.payout_currencies[0]})["catch"](function(){return b({message:"Please try again after few minutes.".i18n()})}),l["default"].formatters.format_category=function(a){return n["default"].capitalize(a)+" Currencies"};var f=l["default"].bind(c[0],e);d.dialog("open")})},q=a.check_currency=function(){return o?o:o=p().then(function(){return o=null})["catch"](function(a){throw o=null,a})};a["default"]={check_currency:q}});