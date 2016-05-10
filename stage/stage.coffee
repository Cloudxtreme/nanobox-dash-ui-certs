window.init = () ->
  certs = new nanobox.Certs $(".certs")
  certs.build()

  #
  $(".toggle.state").click (e) ->
    target = $(".cert")
    state = $(e.currentTarget).data("state")

    target.removeClass("installed incomplete editing")
    target.addClass(state)
