!function e(t,i,s){function n(r,a){if(!i[r]){if(!t[r]){var d="function"==typeof require&&require;if(!a&&d)return d(r,!0);if(o)return o(r,!0);var c=new Error("Cannot find module '"+r+"'");throw c.code="MODULE_NOT_FOUND",c}var l=i[r]={exports:{}};t[r][0].call(l.exports,function(e){var i=t[r][1][e];return n(i?i:e)},l,l.exports,e,t,i,s)}return i[r].exports}for(var o="function"==typeof require&&require,r=0;r<s.length;r++)n(s[r]);return n}({1:[function(e,t,i){var s,n,o,r,a;o=e("views/index-view"),r=e("views/new-view"),a=e("views/show-view"),n=e("views/edit-view"),s=function(){function e(e,t){this.$el=e,this.options=null!=t?t:{},this.options.logsEnabled||(this.options.logsEnabled=!1),this.options.loglevel||(this.options.logLevel="INFO"),this.options.view||(this.options.view="index")}return e.prototype.build=function(){var e;return e=function(){switch(this.options.view){case"index":return new o(this.$el,this.options);case"new":return new r(this.$el,this.options);case"show":return new a(this.$el,this.options);case"edit":return new n(this.$el,this.options)}}.call(this),e.build()},e}(),window.nanobox||(window.nanobox={}),nanobox.Certs=s},{"views/edit-view":3,"views/index-view":4,"views/new-view":5,"views/show-view":6}],2:[function(e,t,i){var s;t.exports=s=function(){function e(e,t,i){this.id=t,this.adminCb=i}return e.prototype.destroy=function(e){return this.fadeOut(function(t){return function(){return t.$node.remove(),"function"==typeof e?e():void 0}}(this))},e.prototype.fadeIn=function(e){return this.$node.velocity({opacity:1},{duration:300,complete:e})},e.prototype.fadeOut=function(e){return this.$node.velocity({opacity:0},{duration:150,complete:e})},e}()},{}],3:[function(e,t,i){var s,n,o,r=function(e,t){function i(){this.constructor=e}for(var s in t)a.call(t,s)&&(e[s]=t[s]);return i.prototype=t.prototype,e.prototype=new i,e.__super__=t.prototype,e},a={}.hasOwnProperty;n=e("view"),o=e("jade/edit-view"),t.exports=s=function(e){function t(e,t){this.options=null!=t?t:{},this.$node=$(o()),e.append(this.$node)}return r(t,e),t.prototype._step=1,t.prototype.build=function(){return this._determineStep(),this.$node.find("textarea").focus(function(e){var t;return t=$(e.currentTarget),t.val()?void 0:t.parent().addClass("focus")}),this.$node.find("textarea").blur(function(e){var t;return t=$(e.currentTarget),t.val()?void 0:t.parent().removeClass("focus")}),this.$node.find(".save-zone .continue").click(function(e){return function(t){return e.next(),e._determineStep()}}(this)),this.$node.find(".save-zone .back").click(function(e){return function(t){return e.previous(),e._determineStep()}}(this))},t.prototype.next=function(){return this._step++},t.prototype.previous=function(){return this._step--},t.prototype._determineStep=function(){var e;return e=function(){switch(!1){case!(this._step<=1):return this._step=1,"one";case!(this._step>=2):return this._step=2,"two"}}.call(this),this.$node.find(".step").hide(),this.$node.find(".step."+e).fadeIn()},t}(n)},{"jade/edit-view":7,view:2}],4:[function(e,t,i){var s,n,o,r,a=function(e,t){return function(){return e.apply(t,arguments)}},d=function(e,t){function i(){this.constructor=e}for(var s in t)c.call(t,s)&&(e[s]=t[s]);return i.prototype=t.prototype,e.prototype=new i,e.__super__=t.prototype,e},c={}.hasOwnProperty;o=e("view"),n=e("views/new-view"),r=e("jade/index-view"),t.exports=s=function(e){function t(e,t){this.$el=e,this.options=null!=t?t:{},this.build=a(this.build,this),this.$node=$(r({certs:this.options.certs})),this.$el.append(this.$node)}return d(t,e),t.prototype.build=function(){return castShadows($(".shadow-parent")),this.$node.find(".new-cert").click(function(e){return function(t){var i;return i=new n(e.$el,e.options),e.destroy(i.build)}}(this))},t}(o)},{"jade/index-view":8,view:2,"views/new-view":5}],5:[function(e,t,i){var s,n,o,r,a=function(e,t){return function(){return e.apply(t,arguments)}},d=function(e,t){function i(){this.constructor=e}for(var s in t)c.call(t,s)&&(e[s]=t[s]);return i.prototype=t.prototype,e.prototype=new i,e.__super__=t.prototype,e},c={}.hasOwnProperty;o=e("view"),s=e("views/index-view"),r=e("jade/new-view"),t.exports=n=function(e){function t(e,t){this.$el=e,this.options=null!=t?t:{},this.build=a(this.build,this),this.step=this.options.step||1,this.$node=$(r({key:this.options.getKey()})),this.$el.append(this.$node)}return d(t,e),t.prototype.build=function(){var e,t,i,s,n;for(castShadows($(".shadow-parent")),this._determineStep(),this.$node.find("textarea").focus(function(e){var t;return t=$(e.currentTarget),t.val()?void 0:t.parent().addClass("focus")}),this.$node.find("textarea").blur(function(e){var t;return t=$(e.currentTarget),t.val()?void 0:t.parent().removeClass("focus")}),s="letsencrypt",i=this.$node.find(".toggle"),e=0,t=i.length;t>e;e++)n=i[e],$(n).click(function(e){return function(t){return e.$node.find(".toggle").removeClass("checked"),$(t.currentTarget).addClass("checked"),s=$(t.currentTarget).data("selection")}}(this));return this.$node.find(".options .start").click(function(e){return function(t){return e.$node.find(".selections .selection."+s).fadeIn(),e.$node.find(".options").hide()}}(this)),this.$node.find(".save-zone .cancel").click(function(e){return function(t){return e._cancel()}}(this)),this.$node.find(".save-zone .reset").click(function(e){return function(t){return e._reset()}}(this)),this.$node.find(".save-zone .continue").click(function(e){return function(t){return e._next()}}(this)),this.$node.find(".save-zone .back").click(function(e){return function(t){return e._previous()}}(this)),this.$node.find(".save-zone .finish").click(function(e){return function(t){return e._finish()}}(this))},t.prototype._cancel=function(){var e;return e=new s(this.$el,this.options),this.destroy(e.build)},t.prototype._reset=function(){return this.$node.find(".selections .selection").hide(),this.$node.find(".options").fadeIn()},t.prototype._next=function(){return this.step++,this._determineStep()},t.prototype._previous=function(){return this.step--,this._determineStep()},t.prototype._finish=function(){return this._cancel()},t.prototype._determineStep=function(){var e;return e=function(){switch(!1){case!(this.step<=1):return this.step=1,"one";case 2!==this.step:return this.step=2,"two";case!(this.step>=3):return this.step=3,"three"}}.call(this),this.$node.find(".step").hide(),this.$node.find(".step."+e).fadeIn()},t}(o)},{"jade/new-view":9,view:2,"views/index-view":4}],6:[function(e,t,i){var s,n,o,r=function(e,t){function i(){this.constructor=e}for(var s in t)a.call(t,s)&&(e[s]=t[s]);return i.prototype=t.prototype,e.prototype=new i,e.__super__=t.prototype,e},a={}.hasOwnProperty;n=e("view"),o=e("jade/show-view"),t.exports=s=function(e){function t(e,t){this.options=null!=t?t:{},this.$node=$(o()),e.append(this.$node)}return r(t,e),t.prototype.build=function(){},t}(n)},{"jade/show-view":10,view:2}],7:[function(e,t,i){t.exports=function(e){var t=[];return t.push('<div class="nanobox-dash-ui-certs edit"><div class="step one"><p>Copy <em>all</em> of the following text and paste it into your 3rd party\'s SSL generation form. Within the next few days you should receive from them your <strong>SSL Certificate (cert)</strong> and <strong>Certificate Authority (ca)</strong>, which you\'ll need for the next step.</p><textarea readonly="readonly" spellcheck="false"></textarea><div class="save-zone renew-cert"><div class="cancel">Save &amp; Finish Later</div><button class="forward continue"><div class="label">Continue</div></button></div></div><div class="step two"><form><div id="errors"></div><fieldset><div class="form-group ssl-cert"><textarea spellcheck="false"></textarea></div><div class="form-group ssl-ca"><textarea spellcheck="false"></textarea></div></fieldset><div class="save-zone renew-cert"><span class="back">Back</span><div class="cancel">Cancel</div><button class="save"><div class="label">Renew</div></button></div></form></div></div>'),t.join("")}},{}],8:[function(e,t,i){t.exports=function(e){var t,i=[],s=e||{};return function(e,s){i.push('<div class="nanobox-dash-ui-certs index"><!----><div class="certs">'),function(){var s=e;if("number"==typeof s.length)for(var n=0,o=s.length;o>n;n++){var r=s[n];i.push("<div"+jade.cls(["cert","shadow-parent",r.state],[null,null,!0])+'><div class="action">Continue</div><img data-src="check-mark" class="shadow-icon"/><div class="cert-domain">'+jade.escape(null==(t=r.domain)?"":t)+' <span>- SSL creation in progress</span></div><img data-src="close-x" class="shadow-icon"/><img data-src="gear" class="edit-cert shadow-icon"/></div>')}else{var o=0;for(var n in s){o++;var r=s[n];i.push("<div"+jade.cls(["cert","shadow-parent",r.state],[null,null,!0])+'><div class="action">Continue</div><img data-src="check-mark" class="shadow-icon"/><div class="cert-domain">'+jade.escape(null==(t=r.domain)?"":t)+' <span>- SSL creation in progress</span></div><img data-src="close-x" class="shadow-icon"/><img data-src="gear" class="edit-cert shadow-icon"/></div>')}}}.call(this),i.push('</div><div class="new-cert shadow-parent"><img data-src="new-btn" class="shadow-icon"/><div class="label">Add an SSL Certificate</div></div></div>')}.call(this,"certs"in s?s.certs:"undefined"!=typeof certs?certs:void 0,"undefined"in s?s.undefined:void 0),i.join("")}},{}],9:[function(e,t,i){t.exports=function(e){var t,i=[],s=e||{};return function(e){i.push('<div class="nanobox-dash-ui-certs new"><div class="options"><div data-selection="letsencrypt" class="option toggle checked">Use <a href="" target="_blank">LetsEncrypt</a></div><div data-selection="thirdparty" class="option toggle">Key &amp; Install a 3rd party cert</div><div data-selection="import" class="option toggle">Import an existing cert</div><div class="save-zone shadow-parent"><div class="cancel">Cancel</div><button class="forward start"><div class="label">Lets Go!</div></button></div></div><div class="selections"><div class="selection letsencrypt"><form><div id="errors"></div><fieldset><div class="row"><div class="form-group ssl-domain errored"><div class="label">Domain Name</div><input/></div><div class="form-group ssl-email"><div class="label">Email</div><input/></div></div><div class="row"><div class="form-group ssl-orginization"><div class="label">Organization (eg, company)</div><input/></div><div class="form-group ssl-department"><div class="label">Department (eg, development)</div><input/></div></div><div class="row"><div class="form-group ssl-city"><div class="label">City</div><input/></div><div class="form-group ssl-state"><div class="label">State/Province (full name)</div><input/></div></div><div class="row"><div class="form-group ssl-country"><div class="label">Country</div></div></div></fieldset></form><div class="save-zone shadow-parent"><div class="reset">Cancel</div><button class="save finish"><img data-src="check-mark" class="shadow-icon"/><div class="label">Save &amp; Finish</div></button></div></div><div class="selection thirdparty"><div class="step one"><form><div id="errors"></div><fieldset><div class="row"><div class="form-group ssl-domain errored"><div class="label">Domain Name</div><input/></div><div class="form-group ssl-email"><div class="label">Email</div><input/></div></div><div class="row"><div class="form-group ssl-orginization"><div class="label">Organization (eg, company)</div><input/></div><div class="form-group ssl-department"><div class="label">Department (eg, development)</div><input/></div></div><div class="row"><div class="form-group ssl-city"><div class="label">City</div><input/></div><div class="form-group ssl-state"><div class="label">State/Province (full name)</div><input/></div></div><div class="row"><div class="form-group ssl-country"><div class="label">Country</div></div></div></fieldset></form><div class="save-zone renew-cert"><div class="reset">Cancel</div><button class="forward continue"><div class="label">Save &amp; Continue</div></button></div></div><div class="step two"><p>Copy <em>all</em> of the following text and paste it into your 3rd party\'s SSL generation form. Within the next few days you should receive from them your <strong>SSL Certificate (cert)</strong> and <strong>Certificate Authority (ca)</strong>, which you\'ll need for the next step.</p><textarea readonly="readonly" spellcheck="false">'+jade.escape(null==(t=e)?"":t)+'</textarea><div class="save-zone renew-cert"><div class="cancel">Save &amp; Finish Later</div><button class="forward continue"><div class="label">Continue</div></button></div></div><div class="step three"><form><div id="errors"></div><fieldset><div class="form-group ssl-cert"><textarea spellcheck="false"></textarea></div><div class="form-group ssl-ca"><textarea spellcheck="false"></textarea></div></fieldset><div class="save-zone renew-cert"><span class="back">Back</span><div class="reset">Cancel</div><button class="save finish"><div class="label">Save &amp; Finish</div></button></div></form></div></div><div class="selection import"><p>To import an existing SSL Certificate, simply copy and paste your existing <strong>Key</strong>, <strong>Certificate (cert)</strong>, and <strong>Certificate Authority (ca)</strong> then select "import".</p><form><div id="errors"></div><fieldset><div class="form-group cert-key"><textarea spellcheck="false"></textarea></div><div class="form-group ssl-cert"><textarea spellcheck="false"></textarea></div><div class="form-group ssl-ca"><textarea spellcheck="false"></textarea></div></fieldset><div class="save-zone shadow-parent"><div class="reset">Cancel</div><button class="save finish"><img data-src="check-mark" class="shadow-icon"/><div class="label">Import</div></button></div></form></div></div></div>')}.call(this,"key"in s?s.key:"undefined"!=typeof key?key:void 0),i.join("")}},{}],10:[function(e,t,i){t.exports=function(e){var t=[];return t.push('<div class="nanobox-dash-ui-certs show"><p>Use “Edit / View Details” to view and/or modify the Certificate and Certificate Authority tied to your SSL certificate. “Renew / Rekey” will provide you with what you need to renew or rekey your SSL certificate. Your current certificate will remain active and unchanged until these processes are completely finished.</p><div class="actions"><div class="action edit">Edit / View Details</div><div class="action renew">Renew / Rekey</div><div class="action delete">Delete Cert</div></div></div>'),t.join("")}},{}]},{},[1]);