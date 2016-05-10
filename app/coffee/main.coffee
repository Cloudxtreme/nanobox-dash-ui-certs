EditView = require 'views/edit-view'
IndexView = require 'views/index-view'
NewView = require 'views/new-view'
RenewView = require 'views/renew-view'
ShowView = require 'views/show-view'


class Certs

  # builds the initial state of the component
  constructor : (@$el, @options={}) ->

    # set defaults
    if !@options.logsEnabled then @options.logsEnabled = false
    if !@options.loglevel then @options.logLevel = "INFO"
    if !@options.view then @options.view = "index"

  #
  build : () ->
    switch @options.view
      when "edit"  then new EditView @$el, @options
      when "index" then new IndexView @$el, @options
      when "new"   then new NewView @$el, @options
      when "renew" then new RenewView @$el, @options
      when "show"  then new ShowView @$el, @options

window.nanobox ||= {}
nanobox.Certs = Certs
