webpackJsonp([0],{0:function(e,exports,t){t(1),e.exports=t(298)},298:function(e,exports,t){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}var a=t(299),u=n(a),l=t(301),i=n(l),r=t(302),s=n(r),o=t(304),d=n(o),c=t(353),f=n(c),v=t(402),p=n(v),b=t(417),m=n(b);t(421),u.default.module("app",[i.default,s.default,f.default,d.default,p.default]).config(["$locationProvider",function(e){"ngInject";e.html5Mode(!0).hashPrefix("!")}]).config(["$stateProvider","$urlRouterProvider",function(e,t){"ngInject";t.otherwise("/"),e.state("home",{url:"/",template:"<div></div>"})}]).component("app",m.default)},304:function(e,exports,t){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(exports,"__esModule",{value:!0});var a=t(299),u=n(a),l=t(305),i=n(l),r=t(327),s=n(r),o=t(335),d=n(o),c=t(341),f=n(c),v=t(347),p=n(v),b=u.default.module("app.mail",[i.default,s.default,d.default,f.default,p.default]).name;exports.default=b},305:function(e,exports,t){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(exports,"__esModule",{value:!0});var a=t(299),u=n(a),l=t(306),i=n(l),r=u.default.module("mail",[]).service("MailService",i.default).name;exports.default=r},306:function(e,exports,t){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(exports,"__esModule",{value:!0});var a=t(307),u=n(a),l=t(308),i=n(l),r=function(){function e(t){(0,u.default)(this,e),this.$http=t}return(0,i.default)(e,[{key:"getBoxes",value:function(){return this.$http.get("http://test-api.javascript.ru/v1/vbuyanov/mailboxes").then(function(e){return e.data})}},{key:"getMails",value:function(e){return this.$http.get("http://test-api.javascript.ru/v1/vbuyanov/letters").then(function(t){return t.data.filter(function(t){return t.mailbox==e})})}}]),e}();r.$inject=["$http"],exports.default=r},327:function(e,exports,t){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(exports,"__esModule",{value:!0});var a=t(299),u=n(a),l=t(301),i=n(l),r=t(328),s=n(r),o=u.default.module("mailView",[i.default]).config(["$stateProvider","$urlRouterProvider",function(e,t){"ngInject";t.otherwise("/"),e.state("mail",{url:"/mail",component:"mailView"})}]).component("mailView",s.default).name;exports.default=o},328:function(e,exports,t){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(exports,"__esModule",{value:!0});var a=t(329),u=n(a),l=t(330),i=n(l);t(331);var r={restrict:"E",bindings:{},template:u.default,controller:i.default};exports.default=r},329:function(e,exports){e.exports='<div class="container">\n  <div class="row">\n    <div class="col-md-2">\n      <mailbox-list on-select="$ctrl.onSelectBox(box)"></mailbox-list>\n    </div>\n    <div class="col-md-4">\n      <mail-list data-mailbox="$ctrl.box" on-select="$ctrl.onSelectMail(mail)"></mail-list>\n    </div>\n    <div class="col-md-6">\n      <mail-card ng-if="$ctrl.email" data-email="$ctrl.email" data-showtext="true"></mail-card>\n    </div>\n  </div>\n</div>\n'},330:function(e,exports,t){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(exports,"__esModule",{value:!0});var a=t(307),u=n(a),l=t(308),i=n(l),r=function(){function e(t){(0,u.default)(this,e),this.name="mailView",this._MailService=t}return(0,i.default)(e,[{key:"$onInit",value:function(){this.email=null,this.box=null}},{key:"onSelectMail",value:function(e){this.email=e}},{key:"onSelectBox",value:function(e){this.email=null,this.box=e}}]),e}();r.$inject=["MailService"],exports.default=r},331:function(e,exports,t){var n=t(332);"string"==typeof n&&(n=[[e.id,n,""]]);t(334)(n,{});n.locals&&(e.exports=n.locals)},332:function(e,exports,t){exports=e.exports=t(333)(),exports.push([e.id,".mailView{color:red}",""])},335:function(e,exports,t){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(exports,"__esModule",{value:!0});var a=t(299),u=n(a),l=t(301),i=n(l),r=t(336),s=n(r),o=u.default.module("mailCard",[i.default]).component("mailCard",s.default).name;exports.default=o},336:function(e,exports,t){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(exports,"__esModule",{value:!0});var a=t(337),u=n(a),l=t(338),i=n(l);t(339);var r={restrict:"E",bindings:{email:"<",showtext:"@"},template:u.default,controller:i.default};exports.default=r},337:function(e,exports){e.exports='<div class="panel panel-info">\n  <div class="panel-heading">\n    <h3 class="panel-title">{{$ctrl.email.subject}}</h3>\n  </div>\n  <div class="panel-body">\n    <div class="row">\n      <div class="">\n        <table class="table table-user-information">\n          <tbody>\n          <tr><td>Тема</td><td>{{$ctrl.email.subject}}</td></tr>\n          <tr><td>Email</td><td><a href="mailto:{{$ctrl.email.to}}">{{$ctrl.email.to}}</a></td>\n          <tr class="success" ng-show="$ctrl.showtext"><td>Текст</td><td>{{$ctrl.email.body}}</td>\n          </tbody>\n        </table>\n      </div>\n    </div>\n  </div>\n</div>\n'},338:function(e,exports,t){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(exports,"__esModule",{value:!0});var a=t(307),u=n(a),l=function e(){(0,u.default)(this,e),this.name="mailCard"};exports.default=l},339:function(e,exports,t){var n=t(340);"string"==typeof n&&(n=[[e.id,n,""]]);t(334)(n,{});n.locals&&(e.exports=n.locals)},340:function(e,exports,t){exports=e.exports=t(333)(),exports.push([e.id,".mailCard{color:red}",""])},341:function(e,exports,t){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(exports,"__esModule",{value:!0});var a=t(299),u=n(a),l=t(301),i=n(l),r=t(342),s=n(r),o=u.default.module("mailList",[i.default]).component("mailList",s.default).name;exports.default=o},342:function(e,exports,t){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(exports,"__esModule",{value:!0});var a=t(343),u=n(a),l=t(344),i=n(l);t(345);var r={restrict:"E",bindings:{mailbox:"<",onSelect:"&"},template:u.default,controller:i.default};exports.default=r},343:function(e,exports){e.exports='<div ng-repeat="email in $ctrl.emails">\n  <mail-card data-email="email" ng-click="$ctrl.onSelect({mail: email})"></mail-card>\n</div>\n'},344:function(e,exports,t){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(exports,"__esModule",{value:!0});var a=t(307),u=n(a),l=t(308),i=n(l),r=function(){function e(t){(0,u.default)(this,e),this.name="mailList",this._MailService=t}return(0,i.default)(e,[{key:"$onInit",value:function(){this.emails=[]}},{key:"$onChanges",value:function(e){var t=this;e.mailbox&&e.mailbox.currentValue&&(this.emails=[],this._MailService.getMails(this.mailbox).then(function(e){t.emails=e,t.onSelect({mail:t.emails[0]})}))}}]),e}();r.$inject=["MailService"],exports.default=r},345:function(e,exports,t){var n=t(346);"string"==typeof n&&(n=[[e.id,n,""]]);t(334)(n,{});n.locals&&(e.exports=n.locals)},346:function(e,exports,t){exports=e.exports=t(333)(),exports.push([e.id,".mailList{color:red}",""])},347:function(e,exports,t){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(exports,"__esModule",{value:!0});var a=t(299),u=n(a),l=t(301),i=n(l),r=t(348),s=n(r),o=u.default.module("mailboxList",[i.default]).component("mailboxList",s.default).name;exports.default=o},348:function(e,exports,t){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(exports,"__esModule",{value:!0});var a=t(349),u=n(a),l=t(350),i=n(l);t(351);var r={restrict:"E",bindings:{onSelect:"&"},template:u.default,controller:i.default};exports.default=r},349:function(e,exports){e.exports='<div class="list-group" ng-repeat="box in $ctrl.boxes">\n  <button type="button" class="list-group-item" data-box="box" ng-click="$ctrl.onSelect({box: box._id})">{{box.title}}</button>\n</div>\n'},350:function(e,exports,t){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(exports,"__esModule",{value:!0});var a=t(307),u=n(a),l=t(308),i=n(l),r=function(){function e(t){(0,u.default)(this,e),this.name="mailboxList",this._MailService=t}return(0,i.default)(e,[{key:"$onInit",value:function(){var e=this;this.boxes=[],this._MailService.getBoxes().then(function(t){return e.boxes=t})}}]),e}();r.$inject=["MailService"],exports.default=r},351:function(e,exports,t){var n=t(352);"string"==typeof n&&(n=[[e.id,n,""]]);t(334)(n,{});n.locals&&(e.exports=n.locals)},352:function(e,exports,t){exports=e.exports=t(333)(),exports.push([e.id,".mailboxList{color:red}",""])},353:function(e,exports,t){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(exports,"__esModule",{value:!0});var a=t(299),u=n(a),l=t(354),i=n(l),r=t(356),s=n(r),o=t(362),d=n(o),c=t(390),f=n(c),v=t(396),p=n(v),b=u.default.module("app.user",[i.default,s.default,d.default,f.default,p.default]).name;exports.default=b},354:function(e,exports,t){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(exports,"__esModule",{value:!0});var a=t(299),u=n(a),l=t(355),i=n(l),r=u.default.module("user",[]).service("UserService",i.default).name;exports.default=r},355:function(e,exports,t){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(exports,"__esModule",{value:!0});var a=t(307),u=n(a),l=t(308),i=n(l),r=function(){function e(t){(0,u.default)(this,e),this.$http=t}return(0,i.default)(e,[{key:"getUsers",value:function(){return this.$http.get("http://test-api.javascript.ru/v1/vbuyanov/users").then(function(e){return e.data})}},{key:"createUser",value:function(e){return this.$http.post("http://test-api.javascript.ru/v1/vbuyanov/users",e).then(function(e){return e.data})}},{key:"updateUser",value:function(e){return this.$http.patch("http://test-api.javascript.ru/v1/vbuyanov/users/"+e._id,e).then(function(e){return e.data})}},{key:"deleteUser",value:function(e){return this.$http.delete("http://test-api.javascript.ru/v1/vbuyanov/users/"+e._id).then(function(e){return e.data})}}]),e}();r.$inject=["$http"],exports.default=r},356:function(e,exports,t){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(exports,"__esModule",{value:!0});var a=t(299),u=n(a),l=t(301),i=n(l),r=t(357),s=n(r),o=u.default.module("userView",[i.default]).config(["$stateProvider",function(e){"ngInject";e.state("user",{url:"/user",component:"userView"})}]).component("userView",s.default).name;exports.default=o},357:function(e,exports,t){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(exports,"__esModule",{value:!0});var a=t(358),u=n(a),l=t(359),i=n(l);t(360);var r={restrict:"E",bindings:{},template:u.default,controller:i.default};exports.default=r},358:function(e,exports){e.exports='<div class="container">\n  <div class="row">\n    <div class="col-md-2">\n      <button class="btn btn-success" type="button" ng-click="$ctrl.onCreateUser()">Новый пользователь</button>\n    </div>\n    <div class="col-md-4">\n      <user-list on-select="$ctrl.onSelect(user)"></user-list>\n    </div>\n    <!--div class="col-md-6">\n      <mail-card data-email="$ctrl.email" data-showtext="true"></mail-card>\n    </div-->\n  </div>\n</div>\n'},359:function(e,exports,t){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(exports,"__esModule",{value:!0});var a=t(307),u=n(a),l=t(308),i=n(l),r=function(){function e(t,n,a){(0,u.default)(this,e),this.name="userView",this._$scope=t,this._$uibModal=n,this._UserService=a}return(0,i.default)(e,[{key:"onCreateUser",value:function(){var e=this,t=this._$uibModal.open({component:"userDialog",resolve:{user:function(){var e={fullName:"new user",birthdate:"1970-01-01",gender:"M",address:"new address",email:"email@site.com"};return e}}});t.result.then(function(t){e._UserService.createUser(t).then(function(t){return e._$scope.$broadcast("userCreated",t)})})}}]),e}();r.$inject=["$scope","$uibModal","UserService"],exports.default=r},360:function(e,exports,t){var n=t(361);"string"==typeof n&&(n=[[e.id,n,""]]);t(334)(n,{});n.locals&&(e.exports=n.locals)},361:function(e,exports,t){exports=e.exports=t(333)(),exports.push([e.id,".userView{color:red}",""])},362:function(e,exports,t){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(exports,"__esModule",{value:!0});var a=t(299),u=n(a),l=t(363),i=n(l),r=u.default.module("userCard",[]).component("userCard",i.default).name;exports.default=r},363:function(e,exports,t){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(exports,"__esModule",{value:!0});var a=t(364),u=n(a),l=t(365),i=n(l);t(388);var r={restrict:"E",bindings:{user:"<",onDelete:"&"},template:u.default,controller:i.default};exports.default=r},364:function(e,exports){e.exports='<div class="panel panel-info">\n  <div class="panel-heading">\n    <h3 class="panel-title">{{$ctrl.user.fullName}}</h3>\n  </div>\n  <div class="panel-body">\n    <div class="row">\n        <table class="table table-user-information">\n          <tbody>\n          <tr><td>Дата рождения</td><td>{{$ctrl.user.birthdate | date:\'yyyy-MM-dd\'}}</td></tr>\n          <tr><td>Пол</td><td>{{$ctrl.user.gender}}</td></tr>\n          <tr><td>Адрес</td><td>{{$ctrl.user.address}}</td></tr>\n          <tr><td>Email</td><td><a href="mailto:{{user.email}}">{{$ctrl.user.email}}</a></td>\n          <tr><td><button type="button" class="btn btn-success" ng-click="$ctrl.onEdit()">Edit</button></td><td><button type="button" class="btn btn-warning" ng-click="$ctrl.onDelete({user: $ctrl.user})">Delete</button></td>\n          </tbody>\n        </table>\n    </div>\n  </div>\n</div>\n'},365:function(e,exports,t){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(exports,"__esModule",{value:!0});var a=t(366),u=n(a),l=t(307),i=n(l),r=t(308),s=n(r),o=function(){function e(t,n){(0,i.default)(this,e),this.name="userCard",this._$uibModal=t,this._UserService=n}return(0,s.default)(e,[{key:"onEdit",value:function(){var e=this,t=this._$uibModal.open({component:"userDialog",resolve:{user:function(){return(0,u.default)({},e.user)}}});t.result.then(function(t){e._UserService.updateUser(t).then(function(t){return e.user=t})})}},{key:"__onDelete",value:function(){alert("Delete "+this.user)}}]),e}();o.$inject=["$uibModal","UserService"],exports.default=o},388:function(e,exports,t){var n=t(389);"string"==typeof n&&(n=[[e.id,n,""]]);t(334)(n,{});n.locals&&(e.exports=n.locals)},389:function(e,exports,t){exports=e.exports=t(333)(),exports.push([e.id,".userCard{color:red}",""])},390:function(e,exports,t){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(exports,"__esModule",{value:!0});var a=t(299),u=n(a),l=t(301),i=n(l),r=t(391),s=n(r),o=u.default.module("userList",[i.default]).component("userList",s.default).name;exports.default=o},391:function(e,exports,t){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(exports,"__esModule",{value:!0});var a=t(392),u=n(a),l=t(393),i=n(l);t(394);var r={restrict:"E",bindings:{},template:u.default,controller:i.default};exports.default=r},392:function(e,exports){e.exports='<div ng-repeat="user in $ctrl.users">\n  <user-card data-user="user" on-delete="$ctrl.onDeleteUser(user)"></user-card>\n</div>\n'},393:function(e,exports,t){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(exports,"__esModule",{value:!0});var a=t(307),u=n(a),l=t(308),i=n(l),r=function(){function e(t,n){(0,u.default)(this,e),this.name="userList",this._$scope=t,this.userService=n}return(0,i.default)(e,[{key:"$onInit",value:function(){var e=this;this.users=[],this._$scope.$on("userCreated",function(t,n){e.users.push(n)}),this.userService.getUsers().then(function(t){return e.users=t})}},{key:"onDeleteUser",value:function(e){var t=this;this.userService.deleteUser(e).then(function(e){return t.$onInit()})}}]),e}();r.$inject=["$scope","UserService"],exports.default=r},394:function(e,exports,t){var n=t(395);"string"==typeof n&&(n=[[e.id,n,""]]);t(334)(n,{});n.locals&&(e.exports=n.locals)},395:function(e,exports,t){exports=e.exports=t(333)(),exports.push([e.id,".userList{color:red}",""])},396:function(e,exports,t){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(exports,"__esModule",{value:!0});var a=t(299),u=n(a),l=t(301),i=n(l),r=t(397),s=n(r),o=u.default.module("userDialog",[i.default]).component("userDialog",s.default).name;exports.default=o},397:function(e,exports,t){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(exports,"__esModule",{value:!0});var a=t(398),u=n(a),l=t(399),i=n(l);t(400);var r={restrict:"E",bindings:{resolve:"<",close:"&",dismiss:"&"},template:u.default,controller:i.default};exports.default=r},398:function(e,exports){e.exports='<div class="modal-header">\n  <h3 class="modal-title" id="modal-title">Редактирование профиля пользователя</h3>\n</div>\n<div class="modal-body" id="modal-body">\n  <div class="form-group">\n    <label for="inputFullname">Имя</label>\n    <input type="text" class="form-control" id="inputFullname" placeholder="Name" ng-model="$ctrl.user.fullName">\n  </div>\n  <div class="form-group">\n    <label for="inputBirthdate">Дата рождения</label>\n    <input type="date" class="form-control" id="inputBirthdate" placeholder="yyyy-mm-dd" ng-model="$ctrl.user.birthdate">\n  </div>\n  <div class="form-group">\n    <label for="inputEmail">Email</label>\n    <input type="email" class="form-control" id="inputEmail" placeholder="Email" ng-model="$ctrl.user.email">\n  </div>\n  <div class="form-group">\n    <label for="inputAddress">Адрес</label>\n    <input type="text" class="form-control" id="inputAddress" placeholder="Address" ng-model="$ctrl.user.address">\n  </div>\n</div>\n<div class="modal-footer">\n  <button class="btn btn-success" type="button" ng-click="$ctrl.ok()">OK</button>\n  <button class="btn btn-warning" type="button" ng-click="$ctrl.cancel()">Cancel</button>\n</div>\n'},399:function(e,exports,t){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(exports,"__esModule",{value:!0});var a=t(307),u=n(a),l=t(308),i=n(l),r=function(){function e(){(0,u.default)(this,e),this.name="userDialog"}return(0,i.default)(e,[{key:"$onInit",value:function(){this.user=this.resolve.user}},{key:"ok",value:function(){this.close({$value:this.user})}},{key:"cancel",value:function(){this.dismiss({$value:"cancel"})}}]),e}();exports.default=r},400:function(e,exports,t){var n=t(401);"string"==typeof n&&(n=[[e.id,n,""]]);t(334)(n,{});n.locals&&(e.exports=n.locals)},401:function(e,exports,t){exports=e.exports=t(333)(),exports.push([e.id,".userDialog{color:red}",""])},402:function(e,exports,t){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(exports,"__esModule",{value:!0});var a=t(299),u=n(a),l=t(403),i=n(l),r=t(405),s=n(r),o=t(411),d=n(o),c=u.default.module("app.News",[i.default,s.default,d.default]).name;exports.default=c},403:function(e,exports,t){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(exports,"__esModule",{value:!0});var a=t(299),u=n(a),l=t(404),i=n(l),r=u.default.module("news",[]).service("NewsService",i.default).name;exports.default=r},404:function(e,exports,t){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(exports,"__esModule",{value:!0});var a=t(307),u=n(a),l=t(308),i=n(l),r=function(){function e(t,n){(0,u.default)(this,e),this._$http=t,this._$q=n}return(0,i.default)(e,[{key:"getNews",value:function(e){}}]),e}();r.$inject=["$http","$q"],exports.default=r},405:function(e,exports,t){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(exports,"__esModule",{value:!0});var a=t(299),u=n(a),l=t(301),i=n(l),r=t(406),s=n(r),o=u.default.module("newsView",[i.default]).config(["$stateProvider",function(e){"ngInject";e.state("news",{url:"/news",component:"newsView"})}]).component("newsView",s.default).name;exports.default=o},406:function(e,exports,t){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(exports,"__esModule",{value:!0});var a=t(407),u=n(a),l=t(408),i=n(l);t(409);var r={restrict:"E",bindings:{},template:u.default,controller:i.default};exports.default=r},407:function(e,exports){e.exports='<div>NEWSVIEW</div>\n<div class="container">\n  <div class="row">\n    <div class="col-md-2">\n      <input type="text" class="form-control" placeholder="RSS url" ng-model="$ctrl.feed">\n      <button class="btn btn-default" type="button" ng-click="$ctrl.onUpdate()">Update</button>\n    </div>\n    <div class="col-md-4">\n      <!--user-list on-select="$ctrl.onSelect(user)"></user-list-->\n    </div>\n    <!--div class="col-md-6">\n      <mail-card data-email="$ctrl.email" data-showtext="true"></mail-card>\n    </div-->\n  </div>\n</div>\n'},408:function(e,exports,t){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(exports,"__esModule",{value:!0});var a=t(307),u=n(a),l=t(308),i=n(l),r=function(){function e(t){(0,u.default)(this,e),this.name="newsView",this._NewsService=t}return(0,i.default)(e,[{key:"$onInit",value:function(){this.feed="https://habrahabr.ru/rss/interesting/"}},{key:"onUpdate",value:function(){this._NewsService.getNews(this.feed)}}]),e}();r.$inject=["NewsService"],exports.default=r},409:function(e,exports,t){var n=t(410);"string"==typeof n&&(n=[[e.id,n,""]]);t(334)(n,{});n.locals&&(e.exports=n.locals)},410:function(e,exports,t){exports=e.exports=t(333)(),exports.push([e.id,".newsView{color:red}",""])},411:function(e,exports,t){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(exports,"__esModule",{value:!0});var a=t(299),u=n(a),l=t(301),i=n(l),r=t(412),s=n(r),o=u.default.module("newsCard",[i.default]).component("newsCard",s.default).name;exports.default=o},412:function(e,exports,t){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(exports,"__esModule",{value:!0});var a=t(413),u=n(a),l=t(414),i=n(l);t(415);var r={restrict:"E",bindings:{},template:u.default,controller:i.default};exports.default=r},413:function(e,exports){e.exports="<div>\n  <h1>{{ $ctrl.name }}</h1>\n</div>\n"},414:function(e,exports,t){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(exports,"__esModule",{value:!0});var a=t(307),u=n(a),l=function e(){(0,u.default)(this,e),this.name="newsCard"};exports.default=l},415:function(e,exports,t){var n=t(416);"string"==typeof n&&(n=[[e.id,n,""]]);t(334)(n,{});n.locals&&(e.exports=n.locals)},416:function(e,exports,t){exports=e.exports=t(333)(),exports.push([e.id,".newsCard{color:red}",""])},417:function(e,exports,t){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(exports,"__esModule",{value:!0});var a=t(418),u=n(a);t(419);var l={template:u.default,restrict:"E"};exports.default=l},418:function(e,exports){e.exports='<!-- Place all UI elements intended to be present across all routes in this file -->\n\n<nav class="navbar navbar-static-top">\n  <div class="container">\n    <div class="navbar-header">\n      <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">\n        <span class="sr-only">Toggle navigation</span>\n        <span class="icon-bar"></span>\n        <span class="icon-bar"></span>\n        <span class="icon-bar"></span>\n      </button>\n      <a class="navbar-brand" ui-sref="home">PORTAL</a>\n    </div>\n    <!--div class="navbar-header">\n      <uib-tabset class="navbar-collapse collapse">\n      <uib-tab index="0" heading="USER" ui-sref="user"></uib-tab>\n      <uib-tab index="1" heading="MAIL" ui-sref="mail"></uib-tab>\n      <uib-tab index="2" heading="NEWS" ui-sref="news"></uib-tab>\n      </uib-tabset>\n    </div-->\n\n    <div class="navbar-collapse collapse">\n      <ul class="nav navbar-nav">\n        <li><a ui-sref="user">USER</a></li>\n        <li><a ui-sref="mail">MAIL</a></li>\n        <li><a ui-sref="news">NEWS</a></li>\n      </ul>\n    <!--/div>\n\n    <div class="navbar-collapse collapse"-->\n      <form class="navbar-form navbar-right">\n        <div class="form-group">\n          <input type="text" placeholder="Email" class="form-control">\n        </div>\n        <div class="form-group">\n          <input type="password" placeholder="Password" class="form-control">\n        </div>\n        <button type="submit" class="btn btn-success">Sign in</button>\n      </form>\n    </div><!--/.navbar-collapse -->\n  </div>\n</nav>\n\n<div class="app">\n  <!--uib-tabset active="activeForm">\n    <uib-tab index="0" heading="USER" ui-sref="user"></uib-tab>\n    <uib-tab index="1" heading="MAIL" ui-sref="mail"></uib-tab>\n    <uib-tab index="2" heading="NEWS" ui-sref="news"></uib-tab>\n  </uib-tabset-->\n  <div ui-view></div>\n</div>\n'},419:function(e,exports,t){var n=t(420);"string"==typeof n&&(n=[[e.id,n,""]]);t(334)(n,{});n.locals&&(e.exports=n.locals)},420:function(e,exports,t){exports=e.exports=t(333)(),exports.push([e.id,".app{height:100%;background-color:$lightBgColor}",""])}});
//# sourceMappingURL=app.bundle.js.map