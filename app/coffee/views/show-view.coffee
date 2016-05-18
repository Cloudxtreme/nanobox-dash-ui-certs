View = require 'view'
view = require 'jade/show-view'

#
module.exports = class ShowView extends View

  #
  constructor: ($el, @options={}, @changeViewCb) ->

    #
    @$node = $(view())
    $el.append @$node
    super @$el, @options, @changeViewCb

  #
  build: () ->
