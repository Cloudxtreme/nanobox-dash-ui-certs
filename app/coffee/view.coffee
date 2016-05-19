module.exports = class View

  # set opacity to 0; it's assumed that anything that extends this view wants to
  # fadein/out and so on instantiation the node is set to opacity:0 to allow for
  # an initial fadein
  constructor: () -> @$node.css("opacity", 0)

  #
  fadeIn  : (cb) -> @$node.velocity {opacity:1}, {duration:300, complete:cb}
  fadeOut : (cb) -> @$node.velocity {opacity:0}, {duration:150, complete:cb}
  destroy : (cb) -> @fadeOut ()=> @$node.remove(); cb?()
