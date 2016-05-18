View    = require 'view'
# NewView = require 'views/new-view'
view    = require 'jade/index-view'

#
module.exports = class IndexView extends View

  #
  constructor: (@$el, @options={}, @changeViewCb) ->
    #
    @$node = $(view({certs: @options.certs}))
    @$el.append @$node
    super @$el, @options={}, @changeViewCb

  #
  build: () =>

    # add svg icons
    castShadows($(".shadow-parent"))

    #
    @$node.find(".new-cert").click (e) => @changeViewCb( this, 'new' )
