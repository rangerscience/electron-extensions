var lpResizeEvent=function(){"use strict";var e,t;function n(){e=e||setTimeout(function(){e=null,i()},66)}function i(){t&&t()}function o(e){t=e,window.addEventListener("resize",n)}function r(){t=null,window.removeEventListener("resize",n)}return{attachWindowResizeEvent:o,detachWindowResizeEvent:r}}(),LPInfieldFrame=function(){"use strict";var i,t="contentScriptPopup.html",o,n,r;function f(n,i){var o;return function(){var e=this,t=arguments;clearTimeout(o),o=setTimeout(function(){o=null,n.apply(e,t)},i)}}function e(e){(r=r||f(l,100))(e)}function l(e){if(n)n=!1;else{if(e.iframe&&!e.fieldEl)try{e.fieldEl=$(e.iframe).contents().find("#"+e.id)[0]}catch(e){}if(e){if(i){if(o.id===e.id)return;a("away")}!0===bg.get("LPContentScriptFeatures").better_generate_password_enabled&&(t="betterContentScriptPopup.html"),e.url=t,o=e,(i=LPFrame.openFrame({url:t,interfaceDefinition:Interfaces.InfieldPopupInterface})).onClose(function(){i=null}),u(),v(),lpResizeEvent.attachWindowResizeEvent(v),window.addEventListener("click",s,!0),bg.sendLpImprove("newinfieldopen",{source:"formv2",option:e.eventType})}}}function s(e){return(!o||e.target.id!==o.id&&e.target!==o.fieldEl)&&(a("away"),!0)}function a(e){i&&(e&&(n="action"==e,bg.sendLpImprove("newinfieldclose",{source:"formv2",option:e})),window.removeEventListener("click",s),lpResizeEvent.detachWindowResizeEvent(),i&&(i.close(),Topics.publish(Topics.INFIELD_NOTIFICATION_CLOSED)),o=i=null)}function c(e,t){var n={};return e&&(n.height=e),t&&(n.width=t),n}function d(e){var t=375;!0===bg.get("LPContentScriptFeatures").better_generate_password_enabled&&(t=310);var n={top:0,left:0};if(e){var i={top:0,left:0};e.iframe&&(i=e.iframe.getBoundingClientRect());var o={bottom:parseInt(e.posy),left:parseInt(e.posx),width:e.width};if(e.fieldEl&&e.fieldEl.getBoundingClientRect?o=e.fieldEl.getBoundingClientRect():e.fieldBox&&(o=e.fieldBox),n.top=window.pageYOffset+i.top+o.bottom,n.left=window.pageXOffset+i.left+o.left+o.width,g_issafari_appext){var r=LPContentScriptTools.getZoom();n.left-=(t-15)/r+15}else n.left-=t;n.left<=0&&(n.left=window.pageXOffset+i.left+o.left-10)}return n}function p(e){i&&i.getInterface().lpInfield.setArrowPosition({position:e})}function u(){i&&i.css({display:"block",position:"absolute",height:"0px"})}function w(e,t){i&&i.css(c(e,t))}function v(e){var t=null;if(o.fieldEl&&!LPContentScriptTools.isVisible(o.fieldEl))a();else if(i){var n;(t=d(o)).infieldOffset=360,!0===bg.get("LPContentScriptFeatures").better_generate_password_enabled&&(t.infieldOffset=295),(10<Math.abs(parseInt(o.posx)-t.left)||t.left>t.infieldOffset&&t.left<window.outerWidth)&&p(t.left<=0?25:t.infieldOffset),i.css(t),e&&"function"==typeof e&&e(t),csTop.Topics.publish(Topics.INFIELD_FRAME_POSITION_CHANGED,t)}}function m(e,t,n,i){e!=punycode.URLToASCII(document.location.href)&&!has_same_tld(e,document.location.href,i)||populategeneratedpassword(e,t,n)}return{close:a,show:u,openFrame:e,resizeFrame:w,positionFrame:v,fillGeneratedPassword:m}}();function LP_keypress_handler(e){"use strict";27!=e.keyCode?9!=e.keyCode||csTop.LPInfieldFrame.close("away"):csTop.LPInfieldFrame.close("close")}
//# sourceMappingURL=sourcemaps/contentScriptInfieldFrame.js.map
