document.addEventListener("DOMContentLoaded", function () {
  var elems = document.querySelectorAll(".slider");
  var instances = M.Slider.init(elems, options);
});
// Or with jQuery
$(document).ready(function () {
  $(".slider").slider();
  $(".button-collapse").sideNav();
});
var instance = M.Slider.getInstance(elem);
instance.pause();
instance.start();
instance.next();
instance.prev();
