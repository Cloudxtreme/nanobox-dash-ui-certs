#
view = require 'jade/new-view'

#
module.exports = class NewView

  #
  constructor: ($el, @options) ->

    #
    @$node = $(view())
    $el.append @$node

    #
    @build()

  #
  build: () ->
