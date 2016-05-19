View = require 'view'
view = require 'jade/edit-view'

#
module.exports = class EditView extends View

  #
  _step: 1

  #
  constructor: ($el, @options={}) ->

    #
    @main = @options.main

    #
    @$node = $(view())
    $el.append @$node

    #
    super

  #
  build: () ->

    # add svg icons
    castShadows($(".shadow-parent"))

    #
    @main.currentView = @

    #
    @_determineStep()

    # if there isn't anything in the textarea then "focus" the parent
    @$node.find("textarea").focus (e) ->
      $target = $(e.currentTarget)
      if !$target.val() then $target.parent().addClass("focus")

    # if there isn't anything in the textarea then "blur" (unfocus) the parent
    @$node.find("textarea").blur (e) ->
      $target = $(e.currentTarget)
      if !$target.val() then $target.parent().removeClass("focus")

    #
    @$node.find(".save-zone .continue").click (e) => @next(); @_determineStep()

    #
    @$node.find(".save-zone .back").click (e) => @previous(); @_determineStep()

    #
    @fadeIn()

  # next
  next: () -> @_step++

  # previous
  previous: () -> @_step--

  #
  _determineStep: () ->

    #
    curStep = switch
      when @_step <= 1 then @_step = 1; "one"
      when @_step >= 2 then @_step = 2; "two"

    # hide all steps then show the current step
    @$node.find(".step").hide()
    @$node.find(".step.#{curStep}").fadeIn()
