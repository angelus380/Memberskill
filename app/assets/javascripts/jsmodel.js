$(document).ready(function(){

  $(".title").click(function(){
    $(this)
    .parents(".box")
    .find(".hidden")
    .slideToggle()
  })

  $("select").change(function(){
    $(".calculator").removeClass("bgred bgyellow bgblue red yellow blue");
    $(".fitbar").removeClass("bgred bgyellow bgblue red yellow blue");
    $(this).closest(".project").removeClass("pscale-0 pscale-1 pscale-2 pscale-3 pscale-4 pscale-5");
    $(this).closest(".skill").removeClass("sscale-0 sscale-1 sscale-2 sscale-3 sscale-4 sscale-5");
    
    var fit = $("#fit").text();
    if (fit < 50){
      $(".fitbar")
      .addClass("bgred");
      }else if (fit < 75){  
      $(".fitbar")
      .addClass("bgyellow");
      }else
      $(".fitbar")
      .addClass("bgblue");

    var finalFit = fit + "%";
    $(".fitbar").css("width", finalFit)

    var total = $("#fit").text();
    if (total < 50){
      $("#fit").parent()
      .addClass("red");
      }else if (total <75){
      $("#fit").parent()
      .addClass("yellow");
      }else
      $("#fit").parent()
      .addClass("blue");

    var ta = +$("#bill").text();
    if (ta < 50){
      $("#bill").parent()
      .addClass("bgred");
      }else if (ta <75){
      $("#bill").parent()
      .addClass("bgyellow");
      }else
      $("#bill").parent()
      .addClass("bgblue");
    
    var tb = +$("#steve").text();
    if (tb < 50){
      $("#steve").parent()
      .addClass("bgred");
      }else if (tb <75){
      $("#steve").parent()
      .addClass("bgyellow");
      }else
      $("#steve").parent()
      .addClass("bgblue");
    
    var tc = +$("#dennis").text();
    if (tc < 50){
      $("#dennis").parent()
      .addClass("bgred");
      }else if (tc <75){
      $("#dennis").parent()
      .addClass("bgyellow");
      }else
      $("#dennis").parent()
      .addClass("bgblue");
    
    var td = +$("#bruce").text();
    if (td < 50){
      $("#bruce").parent()
      .addClass("bgred");
      }else if (td <75){
      $("#bruce").parent()
      .addClass("bgyellow");
      }else
      $("#bruce").parent()
      .addClass("bgblue");

    var project = +$(this).closest(".project").val();
    switch (project){
      case 0:
        $(this).closest(".project")
        .addClass("pscale-0")
        break;
      case 1:
        $(this).closest(".project")
        .addClass("pscale-1")
        break;
      case 2:
       $(this).closest(".project")
        .addClass("pscale-2")
        break;
      case 3:
        $(this).closest(".project")
        .addClass("pscale-3")
        break;
      case 4:
        $(this).closest(".project")
        .addClass("pscale-4")
        break;
      case 5:
        $(this).closest(".project")
        .addClass("pscale-5")
        break;
      default:
    }

    var skill = +$(this).closest(".skill").val();
    switch (skill){
      case 0:
        $(this).closest(".skill")
        .addClass("sscale-0")
        break;
      case 1:
        $(this).closest(".skill")
        .addClass("sscale-1")
        break;
      case 2:
        $(this).closest(".skill")
        .addClass("sscale-2")
        break;
      case 3:
        $(this).closest(".skill")
        .addClass("sscale-3")
        break;
      case 4:
        $(this).closest(".skill")
        .addClass("sscale-4")
        break;
      case 5:
        $(this).closest(".skill")
        .addClass("sscale-5")
        break;
      default:
    }


  }).change();
})