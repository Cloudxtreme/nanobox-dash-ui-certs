IndexView = require 'views/index-view'
NewView = require 'views/new-view'
ShowView = require 'views/show-view'
EditView = require 'views/edit-view'

class Certs

  # builds the initial state of the component
  constructor : (@$el, @options={}) ->

    # set defaults
    if !@options.logsEnabled then @options.logsEnabled = false
    if !@options.loglevel then @options.logLevel = "INFO"
    if !@options.view then @options.view = "index"

  #
  build : () ->
    view = switch @options.view
      when "index" then new IndexView @$el, @options
      when "new"   then new NewView @$el, @options
      when "show"  then new ShowView @$el, @options
      when "edit"  then new EditView @$el, @options

    #
    view.build()

window.nanobox ||= {}
nanobox.Certs = Certs
