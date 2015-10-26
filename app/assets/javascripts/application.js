// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require_tree


$(window).load(function(){

  var body = $("body"),
      universe = $("#universe"),
      solarsys = $("#solar-system");

  var init = function() {
    body.addClass("view-3D").delay(2000).queue(function() {
    });
  };

  $("#data a").click(function(e) {
    var ref = $(this).attr("class");
    solarsys.removeClass().addClass(ref);
    $(this).parent().find('a').removeClass('active');
    $(this).addClass('active');
    e.preventDefault();
  });

  $('#data a').on('click', function(){
   var target = $(this).attr('rel');
   $("#"+target).show().siblings("div").hide();
});

  // function toggle(id) {
  //   if ($('#'+id).is(":hidden")) {
  //     $('#'+id).slideDown("fast");
  //   } else {
  //     $('#'+id).slideUp("fast");
  //   }
  // }

  // });

  // $(".pos").hover(function(e) {
  //   var ref = $(this).attr("@keyframes orbit");
  //   solarsys.removeClass().addClass(ref);
  //   $(this).parent().find('a').removeClass('active');
  //   $(this).remove('active'); 
  //   e.preventDefault();
  // }); 
// need to turn of @keyframes orbit, and @keyframes invert, or wherever they appear
   $("#mercury").hover(function(){
    $(this).pauseKeyframe("orbit");   
    }, 
    function() {
      $(this).resumeKeyframe("orbit");
   });

  init();

});