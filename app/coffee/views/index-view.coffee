View    = require 'view'
NewView = require 'views/new-view'
view    = require 'jade/index-view'

#
module.exports = class IndexView extends View

  #
  constructor: (@$el, @options={}) ->

    #
    @$node = $(view({certs: @options.certs}))
    @$el.append @$node

  #
  build: () =>

    # add svg icons
    castShadows($(".shadow-parent"))

    #
    @$node.find(".new-cert").click (e) =>
      newView = new NewView @$el, @options
      @destroy(newView.build)
