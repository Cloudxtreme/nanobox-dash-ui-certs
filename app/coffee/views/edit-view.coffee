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

# class Dashboard[_name="CertEditView"] extends Dashboard.BaseView
#   @_name = _name
#   @option 'optCert'
#
#   #
#   ready : () ->
#     @$node    = $(@node)
#     @optCert  = @get('optCert')
#
#     # 'new' cert
#     unless @optCert?.get('complete?')
#       @set_step_title('New', 2, 3)
#       @set 'step_action_text', 'Finish & Create'
#
#       @$node.find('.step.one').fadeIn()
#
#     # complete
#     else
#       @set_step_title('Edit SSL Certificate')
#       @set 'step_action_text', 'Update'
#
#       @$node.find('.step.two').fadeIn()
#
#
#   #
#   next_step : (step) ->
#     @$node.find('.step').hide()
#
#     # if there are more steps in the future we'll want a new way to do this
#     @set 'step', (if /^one$/.test(step) then 2 else 3)
#
#     @set_step_title('Edit', @get('step'), 3)
#
#     @$node.find(".step.#{step}").fadeIn()
#
#   #
#   set_step_title : (action, step, steps) ->
#     unless step && steps then stepOfSteps = ''
#     else stepOfSteps =  "- #{step} of #{steps}"
#
#     @set 'step_title', "#{action} SSL Certificate #{stepOfSteps}"
