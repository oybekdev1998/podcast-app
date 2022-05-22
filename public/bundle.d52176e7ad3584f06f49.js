(()=>{"use strict";var t={28:(t,e,n)=>{n.d(e,{Z:()=>c});var r=n(81),o=n.n(r),a=n(645),i=n.n(a)()(o());i.push([t.id,"/**\r\n * Body CSS\r\n */\r\n\r\nhtml,\r\nbody {\r\n    height: 100%;\r\n}\r\n\r\nhtml,\r\nbody,\r\ninput,\r\ntextarea,\r\nbutton {\r\n    -webkit-font-smoothing: antialiased;\r\n    -moz-osx-font-smoothing: grayscale;\r\n    text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.004);\r\n}\r\n\r\n\r\n/**\r\n * Sidebar CSS\r\n */\r\n\r\n#sidebar {\r\n    background-color: #2196F3;\r\n    padding: 15px;\r\n}\r\n\r\n@media (min-width: 768px) {\r\n    #sidebar {\r\n        position: fixed;\r\n        top: 0;\r\n        bottom: 0;\r\n        width: 180px;\r\n        height: 100%;\r\n        padding-top: 30px;\r\n    }\r\n}\r\n\r\n\r\n/**\r\n * Content CSS\r\n */\r\n@media (min-width: 768px) {\r\n    #content {\r\n        margin-left: 180px;\r\n    }\r\n}\r\n\r\n.author {\r\n    font-size: 0.8rem\r\n}\r\n#content-text {\r\n    margin-bottom: 20px;\r\n}\r\n.float-btn {\r\n    position: fixed;\r\n    right: 35px;\r\n    bottom: 35px;\r\n\r\n}\r\n\r\n.modal{\r\n    max-width: 600px;\r\n    max-height: 300px;\r\n    overflow-y: auto;\r\n    background: #fff;\r\n    margin: 100px auto;\r\n    padding: 15px;\r\n}\r\n.modal > h1 {\r\n    text-align: center;\r\n}",""]);const c=i},645:t=>{t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var n="",r=void 0!==e[5];return e[4]&&(n+="@supports (".concat(e[4],") {")),e[2]&&(n+="@media ".concat(e[2]," {")),r&&(n+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),n+=t(e),r&&(n+="}"),e[2]&&(n+="}"),e[4]&&(n+="}"),n})).join("")},e.i=function(t,n,r,o,a){"string"==typeof t&&(t=[[null,t,void 0]]);var i={};if(r)for(var c=0;c<this.length;c++){var u=this[c][0];null!=u&&(i[u]=!0)}for(var s=0;s<t.length;s++){var l=[].concat(t[s]);r&&i[l[0]]||(void 0!==a&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=a),n&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=n):l[2]=n),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),e.push(l))}},e}},81:t=>{t.exports=function(t){return t[1]}},379:t=>{var e=[];function n(t){for(var n=-1,r=0;r<e.length;r++)if(e[r].identifier===t){n=r;break}return n}function r(t,r){for(var a={},i=[],c=0;c<t.length;c++){var u=t[c],s=r.base?u[0]+r.base:u[0],l=a[s]||0,d="".concat(s," ").concat(l);a[s]=l+1;var f=n(d),p={css:u[1],media:u[2],sourceMap:u[3],supports:u[4],layer:u[5]};if(-1!==f)e[f].references++,e[f].updater(p);else{var m=o(p,r);r.byIndex=c,e.splice(c,0,{identifier:d,updater:m,references:1})}i.push(d)}return i}function o(t,e){var n=e.domAPI(e);return n.update(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap&&e.supports===t.supports&&e.layer===t.layer)return;n.update(t=e)}else n.remove()}}t.exports=function(t,o){var a=r(t=t||[],o=o||{});return function(t){t=t||[];for(var i=0;i<a.length;i++){var c=n(a[i]);e[c].references--}for(var u=r(t,o),s=0;s<a.length;s++){var l=n(a[s]);0===e[l].references&&(e[l].updater(),e.splice(l,1))}a=u}}},569:t=>{var e={};t.exports=function(t,n){var r=function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(t){n=null}e[t]=n}return e[t]}(t);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},216:t=>{t.exports=function(t){var e=document.createElement("style");return t.setAttributes(e,t.attributes),t.insert(e,t.options),e}},565:(t,e,n)=>{t.exports=function(t){var e=n.nc;e&&t.setAttribute("nonce",e)}},795:t=>{t.exports=function(t){var e=t.insertStyleElement(t);return{update:function(n){!function(t,e,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var o=void 0!==n.layer;o&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,o&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var a=n.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleTagTransform(r,t,e.options)}(e,t,n)},remove:function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(e)}}}},589:t=>{t.exports=function(t,e){if(e.styleSheet)e.styleSheet.cssText=t;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(t))}}}},e={};function n(r){var o=e[r];if(void 0!==o)return o.exports;var a=e[r]={id:r,exports:{}};return t[r](a,a.exports,n),a.exports}n.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return n.d(e,{a:e}),e},n.d=(t,e)=>{for(var r in e)n.o(e,r)&&!n.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})},n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),n.nc=void 0,(()=>{function t(t){return t.length>=10}function e(t,e){var n=document.createElement("div");n.classList.add("modal"),n.innerHTML="\n    <h1>".concat(t,"</h1>\n    <div>").concat(e,"</div>\n  "),mui.overlay("on",n)}function r(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var c=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t)}var e,n;return e=t,null,n=[{key:"create",value:function(e){fetch("https://podcast-app-f7f9c-default-rtdb.firebaseio.com/questions.json",{method:"POST",body:JSON.stringify(e),headers:{"Content-Type":"application/json"}}).then((function(t){return t.json()})).then((function(t){return e.id=t.name,e})).then(u).then(t.renderList)}},{key:"renderList",value:function(){var t=s(),e=t.length?t.map(l).join(""):'<div className="mui--text-headline">\n            Вы пока ничего не спрашивали\n        </div>';document.getElementById("list").innerHTML=e}},{key:"fetch",value:function(t){function e(e){return t.apply(this,arguments)}return e.toString=function(){return t.toString()},e}((function(t){return t?fetch("https://podcast-app-f7f9c-default-rtdb.firebaseio.com/questions.json?auth=".concat(t)).then((function(t){return t.json()})).then((function(t){return t&&t.error?'<p class="error">'.concat(t.error,"</p>"):t?Object.keys(t).map((function(e){return o(o({},t[e]),{},{id:e})})):[]})):Promise.resolve('<p class="error">У вас нет токена</p>')}))},{key:"listToHTML",value:function(t){return t.length?"<ol>".concat(t.map((function(t){return"<li>".concat(t.text,"</li>")})).join(""),"</ol>"):"<p>Вопросов пока нет</p>"}}],n&&i(e,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function u(t){var e=s();e.push(t),localStorage.setItem("questions",JSON.stringify(e))}function s(){return JSON.parse(localStorage.getItem("questions")||"[]")}function l(t){return'\n    <div class="mui--text-black-54">\n      '.concat(new Date(t.date).toLocaleDateString(),"\n      ").concat(new Date(t.date).toLocaleTimeString(),'\n    </div>\n    <div id="content-text">').concat(t.text,"</div>\n  ")}var d=n(379),f=n.n(d),p=n(795),m=n.n(p),v=n(569),h=n.n(v),b=n(565),y=n.n(b),g=n(216),x=n.n(g),w=n(589),S=n.n(w),O=n(28),j={};j.styleTagTransform=S(),j.setAttributes=y(),j.insert=h().bind(null,"head"),j.domAPI=m(),j.insertStyleElement=x(),f()(O.Z,j),O.Z&&O.Z.locals&&O.Z.locals;var T=document.getElementById("form"),E=T.querySelector("#question-text"),P=T.querySelector("#submit-button"),L=document.getElementById("auth-btn");function k(t){t.preventDefault();var e=t.target.querySelector("#button"),n=t.target.querySelector("#email").value,r=t.target.querySelector("#password").value;e.disabled=!0,function(t,e){return fetch("https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=".concat("AIzaSyA49S0fDVoy4Grg9OmBwf_Bm-IPhFrjCxU"),{method:"POST",body:JSON.stringify({email:t,password:e,returnSecureToken:!0}),headers:{"Content-Type":"application/json"}}).then((function(t){return t.json()})).then((function(t){return t.idToken}))}(n,r).then(c.fetch).then(C).then((function(){return L.disabled=!1}))}function C(t){"string"==typeof t?e("Ошибка!",t):e("Список вопросов",c.listToHTML(t))}window.addEventListener("load",c.renderList),T.addEventListener("submit",(function(e){if(e.preventDefault(),t(E.value)){var n={text:E.value.trim(),date:(new Date).toJSON()};P.disabled=!0,c.create(n).then((function(){E.value="",E.className="",P.disabled=!1}))}})),L.addEventListener("click",(function(){e("Авторизация",'\n    <form class="mui-form" id="auth-form">\n       <div class="mui-textfield mui-textfield--float-label">\n         <input type="email" id="email" >\n         <label for="email">Email</label>\n       </div>\n        <div class="mui-textfield mui-textfield--float-label">\n         <input type="password" id="password" >\n         <label for="password">Пароль</label>\n       </div>\n       <button id="button" type="submit" class="mui-btn mui-btn--primary">Войти</button>\n    </form>\n  '),document.getElementById("auth-form").addEventListener("submit",k)})),E.addEventListener("input",(function(){P.disabled=!t(E.value)}))})()})();