window.init = () ->
  certs = new nanobox.Certs $("body")
  certs.build()
