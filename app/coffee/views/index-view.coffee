#
view = require 'jade/index-view'

#
module.exports = class IndexView

  #
  constructor: ($el, @options) ->

    #
    @$node = $(view())
    $el.append @$node

    # add svg icons
    castShadows($(".shadow-parent"))

    #
    @build()

  #
  build: () ->
