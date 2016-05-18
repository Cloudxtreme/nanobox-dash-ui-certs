IndexView = require 'views/index-view'
NewView   = require 'views/new-view'
ShowView  = require 'views/show-view'
EditView  = require 'views/edit-view'

class Certs

  # builds the initial state of the component
  constructor : (@$el, @options={}) ->

    # set defaults
    if !@options.logsEnabled then @options.logsEnabled = false
    if !@options.loglevel then @options.logLevel = "INFO"
    if !@options.view then @options.view = "index"

  #
  build : () ->
    @changeView null, @options.view

  changeView : (oldView, viewId) =>
    newView = switch viewId
      when "index" then new IndexView @$el, @options, @changeView
      when "new"   then new NewView @$el, @options,   @changeView
      when "show"  then new ShowView @$el, @options,  @changeView
      when "edit"  then new EditView @$el, @options,  @changeView

    if !oldView?
      newView.build()
    else
      oldView.destroy newView.build


window.nanobox ||= {}
nanobox.Certs = Certs
