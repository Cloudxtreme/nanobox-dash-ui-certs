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
    @options.main = @

  #
  build : () -> @loadView(@options.view)

  # view:         The string id of the view we want to show
  # @currentView: This is set by each view when it's "build()" method is called
  loadView : (view) =>
    newView = switch view
      when "index" then new IndexView @$el, @options
      when "new"   then new NewView   @$el, @options
      when "show"  then new ShowView  @$el, @options
      when "edit"  then new EditView  @$el, @options

    # If there is no existing view, just show the new one, otherwise destroy the
    # previous view and then load the new one
    if !@currentView? then newView.build()
    else @currentView.destroy(newView.build)

  #
  _getCertByID: (id) =>
    for cert in @options.certs
      return cert if "#{cert.id}" == "#{id}"

  #
  _destroyCert: (id) =>

    # open confirmation modal
    $modal = $(".nanobox-dash-ui-certs #overlay").addClass("open")

    #
    $modal.find("#close-x").click (e) => $modal.removeClass("open")

    # issue destroy if "confirmed"
    $modal.find(".destroy").click (e) =>

      #
      $(e.currentTarget).addClass("destroying")

      # issue destroy
      res = @options.onDestroy(id)

      # if success, destroy the node; for now "destroying" the node will just be
      # accomplished by refreshing the page.

      # Maybe rails just does this if the model is destroyed?
      if res.success then location.reload()

window.nanobox ||= {}
nanobox.Certs = Certs
