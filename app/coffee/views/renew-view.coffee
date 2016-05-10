#
view = require 'jade/renew-view'

#
module.exports = class RenewView

  #
  constructor: ($el, @options) ->

    #
    @$node = $(view())
    $el.append @$node

    #
    @build()

  #
  build: () ->

# class Dashboard[_name="CertRenewView"] extends Dashboard.BaseView
#   @_name = _name
#   @option 'optCert'
#
#   #
#   ready : () ->
#     @optCert = @get('optCert')
#
#     @set 'step', 1
#
#     @optCert.set 'ca',  ''
#     @optCert.set 'crt', ''
#
#   #
#   next_step : (step) ->
#     @set 'step', (@get('step') + 1)
#
#     $('.step').hide()
#     $(step).fadeIn()
