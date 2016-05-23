View = require 'view'
view = require 'jade/index-view'

#
module.exports = class IndexView extends View

  #
  constructor: (@$el, @options={}) ->

    #
    @main = @options.main

    #
    @$node = $(view({certs: @options.certs}))
    @$el.append @$node

    #
    super

  #
  build: () =>

    # add svg icons
    castShadows($(".shadow-parent"))

    # set current view
    @main.currentView = @

    # add event handlers

    # load "edit/show" view
    @$node.find(".cert.incomplete .action").click (e) =>
      @options.cert = @main._getCertByID($(e.currentTarget).data("id"))
      @main.loadView('show')

    # load "edit/show" view
    @$node.find(".cert.installed").click (e) =>
      @options.cert = @main._getCertByID($(e.currentTarget).data("id"))
      @main.loadView('show')

    # destroy cert (show destroy modal)
    @$node.find(".cert svg#close-x").click (e) => @main._destroyCert($(e.currentTarget).parent().data("id")); e.stopPropagation()

    # load "new" view
    @$node.find(".new-cert").click (e) => @main.loadView('new')

    #
    @fadeIn()
