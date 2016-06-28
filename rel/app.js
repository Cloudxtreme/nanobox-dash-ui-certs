!function e(t,i,n){function s(r,a){if(!i[r]){if(!t[r]){var c="function"==typeof require&&require;if(!a&&c)return c(r,!0);if(o)return o(r,!0);var d=new Error("Cannot find module '"+r+"'");throw d.code="MODULE_NOT_FOUND",d}var l=i[r]={exports:{}};t[r][0].call(l.exports,function(e){var i=t[r][1][e];return s(i?i:e)},l,l.exports,e,t,i,n)}return i[r].exports}for(var o="function"==typeof require&&require,r=0;r<n.length;r++)s(n[r]);return s}({1:[function(e,t,i){var n,s,o,r,a,c=function(e,t){return function(){return e.apply(t,arguments)}};o=e("views/index-view"),r=e("views/new-view"),a=e("views/show-view"),s=e("views/edit-view"),n=function(){function e(e,t){this.$el=e,this.options=null!=t?t:{},this._destroyCert=c(this._destroyCert,this),this._getCertByID=c(this._getCertByID,this),this.loadView=c(this.loadView,this),this.options.logsEnabled||(this.options.logsEnabled=!1),this.options.loglevel||(this.options.logLevel="INFO"),this.options.view||(this.options.view="index"),this.options.main=this}return e.prototype.build=function(){return this.loadView(this.options.view)},e.prototype.loadView=function(e){var t;return t=function(){switch(e){case"index":return new o(this.$el,this.options);case"new":return new r(this.$el,this.options);case"show":return new a(this.$el,this.options);case"edit":return new s(this.$el,this.options)}}.call(this),null==this.currentView?t.build():this.currentView.destroy(t.build)},e.prototype._getCertByID=function(e){var t,i,n,s;for(s=this.options.certs,i=0,n=s.length;n>i;i++)if(t=s[i],""+t.id==""+e)return t},e.prototype._destroyCert=function(e){var t;return t=$(".nanobox-dash-ui-certs #overlay").addClass("open"),t.find("#close-x").click(function(e){return function(e){return t.removeClass("open")}}(this)),t.find(".destroy").click(function(t){return function(i){var n;return $(i.currentTarget).addClass("destroying"),n=t.options.onDestroy(e),n.success?location.reload():void 0}}(this))},e}(),window.nanobox||(window.nanobox={}),nanobox.Certs=n},{"views/edit-view":3,"views/index-view":4,"views/new-view":5,"views/show-view":6}],2:[function(e,t,i){var n;t.exports=n=function(){function e(){this.$node.css("opacity",0)}return e.prototype.fadeIn=function(e){return this.$node.velocity({opacity:1},{duration:300,complete:e})},e.prototype.fadeOut=function(e){return this.$node.velocity({opacity:0},{duration:150,complete:e})},e.prototype.destroy=function(e){return this.fadeOut(function(t){return function(){return t.$node.remove(),"function"==typeof e?e():void 0}}(this))},e}()},{}],3:[function(e,t,i){var n,s,o,r=function(e,t){function i(){this.constructor=e}for(var n in t)a.call(t,n)&&(e[n]=t[n]);return i.prototype=t.prototype,e.prototype=new i,e.__super__=t.prototype,e},a={}.hasOwnProperty;s=e("view"),o=e("jade/edit-view"),t.exports=n=function(e){function t(e,i){this.$el=e,this.options=null!=i?i:{},this.main=this.options.main,this.$node=$(o()),this.$el.append(this.$node),t.__super__.constructor.apply(this,arguments)}return r(t,e),t.prototype._step=1,t.prototype.build=function(){return castShadows($(".shadow-parent")),this.main.currentView=this,this._determineStep(),this.$node.find("textarea").focus(function(e){var t;return t=$(e.currentTarget),t.val()?void 0:t.parent().addClass("focus")}),this.$node.find("textarea").blur(function(e){var t;return t=$(e.currentTarget),t.val()?void 0:t.parent().removeClass("focus")}),this.$node.find(".save-zone .continue").click(function(e){return function(t){return e.next(),e._determineStep()}}(this)),this.$node.find(".save-zone .back").click(function(e){return function(t){return e.previous(),e._determineStep()}}(this)),this.fadeIn()},t.prototype.next=function(){return this._step++},t.prototype.previous=function(){return this._step--},t.prototype._determineStep=function(){var e;return e=function(){switch(!1){case!(this._step<=1):return this._step=1,"one";case!(this._step>=2):return this._step=2,"two"}}.call(this),this.$node.find(".step").hide(),this.$node.find(".step."+e).fadeIn()},t}(s)},{"jade/edit-view":7,view:2}],4:[function(e,t,i){var n,s,o,r=function(e,t){return function(){return e.apply(t,arguments)}},a=function(e,t){function i(){this.constructor=e}for(var n in t)c.call(t,n)&&(e[n]=t[n]);return i.prototype=t.prototype,e.prototype=new i,e.__super__=t.prototype,e},c={}.hasOwnProperty;s=e("view"),o=e("jade/index-view"),t.exports=n=function(e){function t(e,i){this.$el=e,this.options=null!=i?i:{},this.build=r(this.build,this),this.main=this.options.main,this.$node=$(o({certs:this.options.certs})),this.$el.append(this.$node),t.__super__.constructor.apply(this,arguments)}return a(t,e),t.prototype.build=function(){return castShadows($(".shadow-parent")),this.main.currentView=this,this.$node.find(".cert.incomplete .action").click(function(e){return function(t){return e.options.cert=e.main._getCertByID($(t.currentTarget).data("id")),e.main.loadView("show")}}(this)),this.$node.find(".cert.installed").click(function(e){return function(t){return e.options.cert=e.main._getCertByID($(t.currentTarget).data("id")),e.main.loadView("show")}}(this)),this.$node.find(".cert svg#close-x").click(function(e){return function(t){return e.main._destroyCert($(t.currentTarget).parent().data("id")),t.stopPropagation()}}(this)),this.$node.find(".new-cert").click(function(e){return function(t){return e.main.loadView("new")}}(this)),this.fadeIn()},t}(s)},{"jade/index-view":8,view:2}],5:[function(e,t,i){var n,s,o,r=function(e,t){return function(){return e.apply(t,arguments)}},a=function(e,t){function i(){this.constructor=e}for(var n in t)c.call(t,n)&&(e[n]=t[n]);return i.prototype=t.prototype,e.prototype=new i,e.__super__=t.prototype,e},c={}.hasOwnProperty;s=e("view"),o=e("jade/new-view"),t.exports=n=function(e){function t(e,i){this.$el=e,this.options=null!=i?i:{},this.build=r(this.build,this),this.main=this.options.main,this.step=this.options.step||1,this.$node=$(o({key:this.options.getKey()})),this.$el.append(this.$node),t.__super__.constructor.apply(this,arguments)}return a(t,e),t.prototype.build=function(){var e,t,i,n,s;for(castShadows($(".shadow-parent")),this.main.currentView=this,this.$node.find("textarea").focus(function(e){var t;return t=$(e.currentTarget),t.val()?void 0:t.parent().addClass("focus")}),this.$node.find("textarea").blur(function(e){var t;return t=$(e.currentTarget),t.val()?void 0:t.parent().removeClass("focus")}),n="letsencrypt",i=this.$node.find(".toggle"),e=0,t=i.length;t>e;e++)s=i[e],$(s).click(function(e){return function(t){return e.$node.find(".toggle").removeClass("checked"),$(t.currentTarget).addClass("checked"),n=$(t.currentTarget).data("selection")}}(this));return this.$node.find(".options .start").click(function(e){return function(t){return e.$node.find(".selections .selection."+n).fadeIn(),e.$node.find(".options").hide()}}(this)),this.$node.find(".save-zone .cancel").click(function(e){return function(t){return e._cancel()}}(this)),this.$node.find(".save-zone .reset").click(function(e){return function(t){return e._reset()}}(this)),this.$node.find(".save-zone .continue").click(function(e){return function(t){return e._next()}}(this)),this.$node.find(".save-zone .back").click(function(e){return function(t){return e._previous()}}(this)),this.$node.find(".save-zone .finish").click(function(e){return function(t){return e._finish()}}(this)),this._determineStep(),this.fadeIn()},t.prototype._cancel=function(){return this.main.loadView("index")},t.prototype._reset=function(){return this.$node.find(".selections .selection").hide(),this.$node.find(".options").fadeIn()},t.prototype._next=function(){return this.step++,this._determineStep()},t.prototype._previous=function(){return this.step--,this._determineStep()},t.prototype._finish=function(){return this._cancel()},t.prototype._determineStep=function(){var e;return e=function(){switch(!1){case!(this.step<=1):return this.step=1,"one";case 2!==this.step:return this.step=2,"two";case!(this.step>=3):return this.step=3,"three"}}.call(this),this.$node.find(".step").hide(),this.$node.find(".step."+e).fadeIn()},t}(s)},{"jade/new-view":9,view:2}],6:[function(e,t,i){var n,s,o,r=function(e,t){return function(){return e.apply(t,arguments)}},a=function(e,t){function i(){this.constructor=e}for(var n in t)c.call(t,n)&&(e[n]=t[n]);return i.prototype=t.prototype,e.prototype=new i,e.__super__=t.prototype,e},c={}.hasOwnProperty;s=e("view"),o=e("jade/show-view"),t.exports=n=function(e){function t(e,i){this.$el=e,this.options=null!=i?i:{},this.build=r(this.build,this),this.main=this.options.main,this.step=this.options.step||1,this.$node=$(o({key:this.options.getKey(),cert:this.options.cert})),this.$el.append(this.$node),t.__super__.constructor.apply(this,arguments)}return a(t,e),t.prototype.build=function(){var e,t,i,n,s;for(castShadows($(".shadow-parent")),this.main.currentView=this,this.$node.find("textarea").focus(function(e){var t;return t=$(e.currentTarget),t.val()?void 0:t.parent().addClass("focus")}),this.$node.find("textarea").blur(function(e){var t;return t=$(e.currentTarget),t.val()?void 0:t.parent().removeClass("focus")}),n="edit",i=this.$node.find(".toggle"),e=0,t=i.length;t>e;e++)s=i[e],$(s).click(function(e){return function(t){return e.$node.find(".toggle").removeClass("checked"),$(t.currentTarget).addClass("checked"),n=$(t.currentTarget).data("selection")}}(this));return this.$node.find(".options .start").click(function(e){return function(t){return e.$node.find(".selections .selection."+n).fadeIn(),e.$node.find(".options").hide()}}(this)),this.$node.find(".save-zone .cancel").click(function(e){return function(t){return e._cancel()}}(this)),this.$node.find(".save-zone .reset").click(function(e){return function(t){return e._reset()}}(this)),this.$node.find(".save-zone .continue").click(function(e){return function(t){return e._next()}}(this)),this.$node.find(".save-zone .back").click(function(e){return function(t){return e._previous()}}(this)),this.$node.find(".save-zone .finish").click(function(e){return function(t){return e._finish()}}(this)),this._determineStep(),this.fadeIn()},t.prototype._cancel=function(){return this.main.loadView("index")},t.prototype._reset=function(){return this.$node.find(".selections .selection").hide(),this.$node.find(".options").fadeIn()},t.prototype._next=function(){return this.step++,this._determineStep()},t.prototype._previous=function(){return this.step--,this._determineStep()},t.prototype._finish=function(){return this._cancel()},t.prototype._determineStep=function(){var e;return e=function(){switch(!1){case!(this.step<=1):return this.step=1,"one";case!(this.step>=2):return this.step=2,"two"}}.call(this),this.$node.find(".step").hide(),this.$node.find(".step."+e).fadeIn()},t}(s)},{"jade/show-view":10,view:2}],7:[function(e,t,i){t.exports=function(e){var t=[];return t.push('<div class="nanobox-dash-ui-certs edit"><div class="step one"><p>Copy <em>all</em> of the following text and paste it into your 3rd party\'s SSL generation form. Within the next few days you should receive from them your <strong>SSL Certificate (cert)</strong> and <strong>Certificate Authority (ca)</strong>, which you\'ll need for the next step.</p><textarea readonly="readonly" spellcheck="false"></textarea><div class="save-zone renew-cert"><div class="cancel">Save &amp; Finish Later</div><button class="forward continue"><div class="label">Continue</div></button></div></div><div class="step two"><form><div id="errors"></div><fieldset><div class="form-group ssl-cert"><textarea spellcheck="false"></textarea></div><div class="form-group ssl-ca"><textarea spellcheck="false"></textarea></div></fieldset><div class="save-zone renew-cert"><span class="back">Back</span><div class="cancel">Cancel</div><button class="save"><div class="label">Renew</div></button></div></form></div></div>'),t.join("")}},{}],8:[function(e,t,i){t.exports=function(e){var t,i=[],n=e||{};return function(e,n){i.push('<div class="nanobox-dash-ui-certs index"><div id="overlay"><div id="modal" class="shadow-parent"><img data-src="close-x" class="shadow-icon"/><div class="body"><div class="title">Destroy Cert?</div><div class="message">Please confirm that you want to destroy this cert. <strong>This action cannot be undone!</strong></div></div><button class="action destroy"></button></div></div><div class="certs">'),function(){var n=e;if("number"==typeof n.length)for(var s=0,o=n.length;o>s;s++){var r=n[s];i.push("<div"+jade.attr("id",r.id,!0,!1)+jade.attr("data-id",r.id,!0,!1)+jade.cls(["cert","shadow-parent",r.state],[null,null,!0])+'><div class="action">Continue</div><img data-src="check-mark" class="shadow-icon"/><div class="cert-domain">'+jade.escape(null==(t=r.domain)?"":t)+' <span>- SSL creation in progress</span></div><img data-src="close-x" class="shadow-icon"/></div>')}else{var o=0;for(var s in n){o++;var r=n[s];i.push("<div"+jade.attr("id",r.id,!0,!1)+jade.attr("data-id",r.id,!0,!1)+jade.cls(["cert","shadow-parent",r.state],[null,null,!0])+'><div class="action">Continue</div><img data-src="check-mark" class="shadow-icon"/><div class="cert-domain">'+jade.escape(null==(t=r.domain)?"":t)+' <span>- SSL creation in progress</span></div><img data-src="close-x" class="shadow-icon"/></div>')}}}.call(this),i.push('</div><div class="new-cert shadow-parent"><img data-src="new-btn" class="shadow-icon"/><div class="label">Add an SSL Certificate</div></div></div>')}.call(this,"certs"in n?n.certs:"undefined"!=typeof certs?certs:void 0,"undefined"in n?n.undefined:void 0),i.join("")}},{}],9:[function(e,t,i){t.exports=function(e){var t,i=[],n=e||{};return function(e){i.push('<div class="nanobox-dash-ui-certs new"><div class="options"><div data-selection="letsencrypt" class="option toggle checked">Use <a href="" target="_blank">LetsEncrypt</a></div><div data-selection="thirdparty" class="option toggle">Key &amp; Install a 3rd party cert</div><div data-selection="import" class="option toggle">Import an existing cert</div><div class="save-zone shadow-parent"><div class="cancel">Cancel</div><button class="forward start"><div class="label">Lets Go!</div></button></div></div><div class="selections"><div class="selection letsencrypt"><form><div id="errors"></div><div class="row"><div class="form-group ssl-domain"><label>Domain Name</label><input/></div><div class="form-group ssl-email"><label>Email</label><input/></div></div><div class="row"><div class="form-group ssl-orginization"><label>Organization (eg, company)</label><input/></div><div class="form-group ssl-department"><label>Department (eg, development)</label><input/></div></div><div class="row"><div class="form-group ssl-city"><label>City</label><input/></div><div class="form-group ssl-state"><label>State/Province (full name)</label><input/></div></div><div class="row"><div class="form-group ssl-country"><label>Country</label></div></div></form><div class="save-zone shadow-parent"><div class="reset">Cancel</div><button class="save finish"><img data-src="check-mark" class="shadow-icon"/><div class="label">Save &amp; Finish</div></button></div></div><div class="selection thirdparty"><div class="step one"><form><div id="errors"></div><div class="row"><div class="form-group ssl-domain"><label>Domain Name</label><input/></div><div class="form-group ssl-email"><label>Email</label><input/></div></div><div class="row"><div class="form-group ssl-orginization"><label>Organization (eg, company)</label><input/></div><div class="form-group ssl-department"><label>Department (eg, development)</label><input/></div></div><div class="row"><div class="form-group ssl-city"><label>City</label><input/></div><div class="form-group ssl-state"><label>State/Province (full name)</label><input/></div></div><div class="row"><div class="form-group ssl-country"><label>Country</label></div></div></form><div class="save-zone renew-cert"><div class="reset">Cancel</div><button class="forward continue"><div class="label">Save &amp; Continue</div></button></div></div><div class="step two"><p>Copy <em>all</em> of the following text and paste it into your 3rd party\'s SSL generation form. Within the next few days you should receive from them your <strong>SSL Certificate (cert)</strong> and <strong>Certificate Authority (ca)</strong>, which you\'ll need for the next step.</p><textarea readonly="readonly" spellcheck="false">'+jade.escape(null==(t=e)?"":t)+'</textarea><div class="save-zone renew-cert"><div class="cancel">Save &amp; Finish Later</div><button class="forward continue"><div class="label">Continue</div></button></div></div><div class="step three"><form><div id="errors"></div><fieldset><div class="form-group ssl-cert"><label>Certificate</label><textarea spellcheck="false"></textarea></div><div class="form-group ssl-ca"><label>Certificate Authority</label><textarea spellcheck="false"></textarea></div></fieldset><div class="save-zone renew-cert"><span class="back">Back</span><div class="reset">Cancel</div><button class="save finish"><div class="label">Save &amp; Finish</div></button></div></form></div></div><div class="selection import"><p>To import an existing SSL Certificate, simply copy and paste your existing <strong>Key</strong>, <strong>Certificate (cert)</strong>, and <strong>Certificate Authority (ca)</strong> then select "import".</p><form><div id="errors"></div><fieldset><div class="form-group cert-key"><label>Key</label><textarea spellcheck="false"></textarea></div><div class="form-group ssl-cert"><label>Certificate</label><textarea spellcheck="false"></textarea></div><div class="form-group ssl-ca"><label>Certificate Authority</label><textarea spellcheck="false"></textarea></div></fieldset><div class="save-zone shadow-parent"><div class="reset">Cancel</div><button class="save finish"><img data-src="check-mark" class="shadow-icon"/><div class="label">Import</div></button></div></form></div></div></div>')}.call(this,"key"in n?n.key:"undefined"!=typeof key?key:void 0),i.join("")}},{}],10:[function(e,t,i){t.exports=function(e){var t,i=[],n=e||{};return function(e,n){i.push('<div class="nanobox-dash-ui-certs show"><div class="options"><div data-selection="edit" class="option toggle checked">View/Edit the Certificate and Certificate Authority for your SSL certificate.</div><div data-selection="renew" class="option toggle">Renew/Rekey your SSL certificate.</div><div class="save-zone shadow-parent"><div class="cancel">Cancel</div><button class="forward start"><div class="label">Continue</div></button></div></div><div class="selections"><div class="selection renew"><div class="step one"><p>Copy <em>all</em> of the following text and paste it into your 3rd party\'s SSL generation form. Within the next few days you should receive from them your <strong>SSL Certificate (cert)</strong> and <strong>Certificate Authority (ca)</strong>, which you\'ll need for the next step.</p><textarea readonly="readonly" spellcheck="false">'+jade.escape(null==(t=n)?"":t)+'</textarea><div class="save-zone renew-cert"><div class="cancel">Save &amp; Finish Later</div><button class="forward continue"><div class="label">Continue</div></button></div></div><div class="step two"><form><div id="errors"></div><fieldset><div class="form-group ssl-cert"><label>Certificate</label><textarea spellcheck="false"></textarea></div><div class="form-group ssl-ca"><label>Certificate Authority</label><textarea spellcheck="false"></textarea></div></fieldset><div class="save-zone"><span class="back">Back</span><div class="reset">Cancel</div><button class="save finish"><div class="label">Save &amp; Finish</div></button></div></form></div></div><div class="selection edit"><form><div id="errors"></div><fieldset><div class="form-group cert-key focus"><label>Key</label><textarea spellcheck="false">'+jade.escape(null==(t=e.key)?"":t)+'</textarea></div><div class="form-group ssl-cert focus"><label>Certificate</label><textarea spellcheck="false">'+jade.escape(null==(t=e.cert)?"":t)+'</textarea></div><div class="form-group ssl-ca focus"><label>Certificate Authority</label><textarea spellcheck="false">'+jade.escape(null==(t=e.ca)?"":t)+'</textarea></div></fieldset><div class="save-zone shadow-parent"><div class="reset">Cancel</div><button class="save finish"><img data-src="check-mark" class="shadow-icon"/><div class="label">Save</div></button></div></form></div></div></div>')}.call(this,"cert"in n?n.cert:"undefined"!=typeof cert?cert:void 0,"key"in n?n.key:"undefined"!=typeof key?key:void 0),i.join("")}},{}]},{},[1]);