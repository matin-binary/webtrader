function load_ondemand(e,r,i,s,t){var o=null;e.one(r,o=function(){e.hasClass("disabled")?e.one(r,o):require([s],function(e){i&&require(["jquery","jquery-growl"],function(e){e.growl.notice({message:i})}),t&&t(e)})})}window.requirejs.config({baseUrl:"./",paths:{jquery:"lib/jquery/dist/jquery.min","jquery-ui":"lib/jquery-ui-dist/jquery-ui.min","jquery.dialogextend":"lib/binary-com-jquery-dialogextended/jquery.dialogextend.min","jquery-growl":"lib/jquery.growl/javascripts/jquery.growl",modernizr:"lib/npm-modernizr/modernizr","color-picker":"lib/vanderlee-colorpicker/jquery.colorpicker",datatables:"lib/datatables.net/js/jquery.dataTables","datatables-jquery-ui":"lib/datatables.net-jqui/js/dataTables.jqueryui",currentPriceIndicator:"charts/indicators/highcharts_custom/currentprice","es6-promise":"lib/es6-promise/promise.min",rivets:"lib/rivets/dist/rivets.min",sightglass:"lib/sightglass/index",timepicker:"lib/binary-com-jquery-ui-timepicker/jquery.ui.timepicker",lodash:"lib/lodash/lodash.min","jquery-sparkline":"lib/jquery-sparkline/jquery.sparkline.min",moment:"lib/moment/min/moment.min","moment-locale":"lib/moment/locale",clipboard:"lib/clipboard/dist/clipboard.min",indicator_levels:"charts/indicators/level","binary-style":"lib/@binary-com/binary-style/binary","babel-runtime/regenerator":"lib/regenerator-runtime/runtime","webtrader-charts":"lib/@binary-com/webtrader-charts/dist/webtrader-charts.iife",chosen:"lib/chosen-js/chosen.jquery","highstock-release":"lib/highstock-release","jquery-ui-touch-punch":"lib/jquery-ui-touch-punch/jquery.ui.touch-punch.min"},map:{"*":{css:"lib/require-css/css.min",text:"lib/requirejs-text/text.js"}},waitSeconds:0,shim:{"webtrader-charts":{exports:"WebtraderCharts",deps:["moment","jquery","highstock-release/highstock"]},"babel-runtime/regenerator":{exports:"regeneratorRuntime"},timepicker:{deps:["jquery-ui","jquery"]},"jquery.dialogextend":{deps:["jquery-ui"]},"jquery-ui":{deps:["jquery"]},"highstock-release/highstock":{deps:["jquery"],exports:"Highcharts"},"highstock-release/modules/exporting":{deps:["highstock-release/highstock"]},"highstock-release/modules/offline-exporting":{deps:["highstock-release/modules/exporting"]},"jquery-growl":{deps:["jquery"]},datatables:{deps:["jquery-ui"]},"datatables-jquery-ui":{deps:["datatables"]},currentPriceIndicator:{deps:["highstock-release/highstock"]},sightglass:{exports:"sightglass"},rivets:{deps:["sightglass"],exports:"rivets"},"highstock-release/highcharts-more":{deps:["highstock-release/highstock"]},"color-picker":{deps:["jquery","jquery-ui"]},"jquery-ui-touch-punch":{deps:["jquery","jquery-ui"]}}}),window.requirejs.onError=function(e){if("scripterror"===e.requireType)throw e;throw e},require(["modernizr"],function(){var e=window.Modernizr;e.svg&&e.websockets&&(!e.touch||!window.isSmallView())&&e.localstorage&&e.webworkers&&Object.defineProperty||window.location.assign("unsupported_browsers/unsupported_browsers.html")}),require(["websockets/binary_websockets","text!./oauth/app_id.json"]);var i18n_name=(window.local_storage.get("i18n")||{value:"en"}).value;require(["jquery","text!i18n/"+i18n_name+".json"],function(e,r){"use strict";window.setupi18nTranslation(JSON.parse(r)),require(["jquery-ui","highstock-release/highstock"]),require(["css!lib/jquery-ui-dist/jquery-ui.min.css","css!lib/jquery-ui-iconfont/jquery-ui.icon-font.css","css!lib/chosen-js/chosen.css","css!lib/jquery.growl/stylesheets/jquery.growl.css","css!lib/datatables.net-dt/css/jquery.dataTables.css","css!lib/datatables.net-jqui/css/dataTables.jqueryui.css","css!lib/vanderlee-colorpicker/jquery.colorpicker.css"]),function(){if(self===top){require(["navigation/navigation","websockets/binary_websockets","jquery-ui","css!main.css","css!binary-style"],function(e,r){r.send({website_status:1}).then(function(e){e.website_status.clients_country;local_storage.get("oauth")?r.cached.authorize().then(function(e){window.location.href=moveToDerivUrl()}):window.location.href=moveToDerivUrl()})}),require(["selfexclusion/selfexclusion","accountstatus/accountstatus","realitycheck/realitycheck","websitestatus/websitestatus"]),require(["jquery","jquery-ui-touch-punch"],function(e){e(".ui-dialog").draggable()})}else top.location=self.location}()}),require(["jquery","jquery-growl"],function(i){["error","notice","warning"].forEach(function(e){var r=i.growl[e].bind(i.growl);i.growl[e]=function(e){e.message&&-1<e.message.indexOf("rate limit")&&(e.message+=" Please try again after 1 minute.".i18n()),e.title||(e.title=""),i('#growls .growl:contains("'+e.message+'")').remove(),r(e)}})});