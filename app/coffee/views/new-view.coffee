View = require 'view'
view = require 'jade/new-view'

#
module.exports = class NewView extends View

  # ".start" should start the process
  # ".cancel" should send a user back to the "index" page
  # ".reset" should "reset" the current process back to "start" (option selection)
  # ".back" should take a user back one step in the process
  # ".continue" should move a user forward one step in the process
  # ".finish" should complete the process and send a user back to "start"

  #
  constructor: (@$el, @options={}) ->

    #
    @main = @options.main
    @step = @options.step || 1

    #
    @$node = $(view({key: @options.getKey()}))
    @$el.append @$node

    #
    super

  #
  build: () =>

    # add svg icons
    castShadows($(".shadow-parent"))

    #
    @main.currentView = @

    # if there isn't anything in the textarea then "focus" the parent
    @$node.find("textarea").focus (e) ->
      $target = $(e.currentTarget)
      if !$target.val() then $target.parent().addClass("focus")

    # if there isn't anything in the textarea then "blur" (unfocus) the parent
    @$node.find("textarea").blur (e) ->
      $target = $(e.currentTarget)
      if !$target.val() then $target.parent().removeClass("focus")

    # activate toggles
    selection = "letsencrypt"
    for toggle in @$node.find(".toggle")
      $(toggle).click (e) =>

        @$node.find(".toggle").removeClass("checked")
        $(e.currentTarget).addClass("checked")

        #
        selection = $(e.currentTarget).data("selection")

    # this is a special case that drops us into the process so it's handled on
    # it's own
    @$node.find(".options .start").click (e) =>
      @$node.find(".selections .selection.#{selection}").fadeIn()
      @$node.find(".options").hide()

    #
    @$node.find(".save-zone .cancel").click (e) => @_cancel()
    @$node.find(".save-zone .reset").click (e) => @_reset()
    @$node.find(".save-zone .continue").click (e) => @_next()
    @$node.find(".save-zone .back").click (e) => @_previous()
    @$node.find(".save-zone .finish").click (e) => @_finish()

    #
    @_determineStep()

    #
    @fadeIn()

  # cancel; unload this view and load the "index" view
  _cancel: () -> @main.loadView('index')

  # reset; set the view back to "start"
  _reset: () ->
    @$node.find(".selections .selection").hide()
    @$node.find(".options").fadeIn()

  # next
  _next: () -> @step++; @_determineStep()

  # previous
  _previous: () -> @step-- ; @_determineStep()

  # finish; persist the final data to rails and "cancel"
  _finish: () ->
    # run some callback to persist everything to rails or something...
    @_cancel()

  #
  _determineStep: () ->

    #
    curStep = switch
      when @step <= 1 then @step = 1; "one"
      when @step == 2 then @step = 2; "two"
      when @step >= 3 then @step = 3; "three"

    # hide all steps then show the current step
    @$node.find(".step").hide()
    @$node.find(".step.#{curStep}").fadeIn()
