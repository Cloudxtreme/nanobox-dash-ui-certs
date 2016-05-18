View = require 'view'
view = require 'jade/show-view'

#
module.exports = class ShowView extends View

  #
  constructor: ($el, @options={}) ->

    #
    @$node = $(view())
    $el.append @$node

  #
  build: () ->
