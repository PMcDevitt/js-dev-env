webpackJsonp([0],[function(e,t,n){(function(e){"use strict";var t=n(1);n(4),(0,t.getUsers)().then(function(n){var r="";n.forEach(function(e){r+='<tr>\n    <td><a href="#" data-id="'+e.id+'" class="deleteUser">Delete</a></td>\n    <td>'+e.id+"</td>\n    <td>"+e.firstName+"</td>\n    <td>"+e.lastName+"</td>\n    <td>"+e.email+"</td>\n    </tr>"}),e.document.getElementById("users").innerHTML=r;var o=e.document.getElementsByClassName("deleteUser");Array.from(o,function(e){e.onclick=function(e){var n=e.target;e.preventDefault(),(0,t.deleteUser)(n.attributes["data-id"].value);var r=n.parentNode.parentNode;r.parentNode.removeChild(r)}})})}).call(t,function(){return this}())},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.deleteUser=t.getUsers=void 0,n(2);var r=n(3),o=(0,r.getBaseUrl)(),u=(t.getUsers=function(){return s("users")},t.deleteUser=function(e){return u("users/"+e)},function(e){var t=new Request(o+e,{method:"DELETE"});return fetch(t).then(a,c)}),s=function(e){return fetch(o+e).then(a,c)},a=function(e){return e.json()},c=function(e){console.log(e)}},,function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=(t.getBaseUrl=function(){return n("useMockApi")?"http://localhost:3001/":"/"},function(e,t){t||(t=window.location.href),e=e.replace(/[\[\]]/g,"\\$&");var n=new RegExp("[?&]"+e+"(=([^&#]*)|&|#|$)"),r=n.exec(t);return r?r[2]?decodeURIComponent(r[2].replace(/\+/g," ")):"":null})},function(e,t){}]);
//# sourceMappingURL=main.6ee05adaa17a496b2b8b.js.map