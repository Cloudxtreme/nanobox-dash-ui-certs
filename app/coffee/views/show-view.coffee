#
view = require 'jade/show-view'

#
module.exports = class ShowView

  #
  constructor: ($el, @options) ->

    #
    @$node = $(view())
    $el.append @$node

    #
    @build()

  #
  build: () ->
