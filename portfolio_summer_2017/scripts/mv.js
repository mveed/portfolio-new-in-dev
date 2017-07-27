/* make sure data for projects cant continually be loaded */
var projectsReset = true;
var circleMenu = false;

/* loader should be running, begin move left animation
on complete */
$( window ).on( "load", function() {
$(document).ready( function loaded(){
  moveLoader();
  setTimeout(function () {
    $(".container-nav").addClass("project-main-fade-in");
  }, 2000);
});


/*on site loaded, move loader left */
function moveLoader() {
  window.setTimeout( function() {
  $(".loader-upper").addClass("animate");
    $(".loader-lower").addClass("anim-color");
  }, 1500);
  window.setTimeout(function () {
    $(".loader").addClass("loading-position-left");
    window.setTimeout(function() {
      loadHomepageText();
    }, 1000);
  }, 2000);
}
});
/* Load up the name and sub on loader moved left */
function loadHomepageText() {
  $(".homepage-text").load("components/homepage_text.html", function() {
  $(".homepage-text").addClass("homepage-text-fade");
});
}


/*main functions */
$(document).ready(function() {
  createProjectsParticleSystem();



/* underline animation for nav buttons */
$(".nav-item").hover(function(){
    $(this).children().addClass("underline-scaled");
}, function(){
  $(this).children().removeClass("underline-scaled");
});


/* Dynamic slide in animations */

/* Hide the homepage on anything clicked */
  function hideHomepage() {
    $(".container-main").css("display", "none");
  }

  /*About slide in */
  $("#nav-about").click(function() {
    $(".about-background").css("z-index", "11");
    $(".contact-background").css("z-index", "5");
    $(".project-background").css("z-index", "5");
    slideInAbout();
  });

  function slideInAbout() {
    $(".about-slider0, .about-slider1").addClass("about-slider-slide-in");
    $(".about-background").addClass("about-slide-in");
    $(".about-main").addClass("about-main-fade-in");
    setTimeout(function() {
      slideInProjectsReset();
      slideInContactReset();
      hideHomepage();
    }, 1000);
  }

  function slideInAboutReset() {
    $(".about-slider0, .about-slider1").removeClass("about-slider-slide-in");
    $(".about-background").removeClass("about-slide-in");
    $(".about-main").removeClass("about-main-fade-in");
  }

/*Contact slide in */
$("#nav-contact").click(function() {
  $(".contact-background").css("z-index", "11");
  $(".project-background").css("z-index", "5");
  $(".about-background").css("z-index", "5");
  slideInContact();
});

function slideInContact() {
  $(".contact-slider0, .contact-slider1").addClass("contact-slider-slide-in");
  $(".contact-background").addClass("contact-slide-in");
  $(".contact-main").addClass("contact-main-fade-in");
  setTimeout(function() {
    slideInProjectsReset();
    slideInAboutReset();
    hideHomepage();
  }, 1000);
}

function slideInContactReset() {
  $(".contact-slider0, .contact-slider1").removeClass("contact-slider-slide-in");
  $(".contact-background").removeClass("contact-slide-in");
  $(".contact-main").removeClass("contact-main-fade-in");
}

/*PROJECTS slide in */
$("#nav-projects").click(function() {
  if (projectsReset === true) {
    $(".contact-background").css("z-index", "5");
    $(".about-background").css("z-index", "5");
    $(".project-background").css("z-index", "11");
    slideInProjects();
  }
});

function slideInProjects() {
  $("html").css("overflow", "hidden");
  $(".project-slider0, project-slider1").addClass("project-slider-slide-in");
  $(".project-background").addClass("project-slide-in");
  $(".project-main").addClass("project-main-fade-in");
  $(".projects-particle-system").css("display", "inherit");
  setTimeout(function() {
      $(".project-slider0, .project-slider1").css("display", "none");
      $("html").css({"overflow": "initial", "overflow-x": "hidden"});
  }, 900);
  setTimeout(function() {
    slideInContactReset();
    slideInAboutReset();
    hideHomepage();
  }, 1000);
  setTimeout(function() {
    loadProjectsText();
  }, 1500);
}

function slideInProjectsReset() {
  $(".project-slider0, project-slider1").removeClass("project-slider-slide-in");
  $(".project-background").removeClass("project-slide-in");
  $(".project-main").removeClass("project-main-fade-in");
  $(".project-slider0, .project-slider1").css("display", "initial");
  $(".projects-particle-system").css("display", "none");
  $(".project-appended").remove();
  projectsReset = true;

}

/* PROJECTS PARTICLE SYSTEM */
    function createProjectsParticleSystem() {
      var windowX = $(".projects-particle-system").offset();
      var windowY = (window.innerHeight / 3.5);
  for (i = 0; i < 180; i ++) {
  $(".projects-particle-system").append("<div class='p p" + i + "'></div>");
  $(".p" + i).css({"left": particleValues(windowX.left + 400, windowX.left - 125) +"px", "top": "" + particleValues((windowY + 250), (windowY + 5)) + "px", "opacity": "" + Math.random() + ""});
}
}

  function particleValues (max, min) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }


setInterval(function () {
  var windowX = $(".projects-particle-system").offset();
  var windowY = (window.innerHeight / 3.5);
  for (j = 0; j < 180; j ++) {
  $(".p" + j).css({"left": particleValues((windowX.left + 400),(windowX.left - 125)) +"px", "top": "" + particleValues((windowY + 250), (windowY + 5)) + "px", "opacity": "" + Math.random() + ""});
    var size = particleValues(6, 3);
    $(".p" + j).css({"width": + size + "px", "height": + size + "px"});
  }
}, 2000);
/*  END PARTICLE SYSTEM PROJECTS */

/* START CONTACT IMAGE FADER SYSTEM */

$(".square").hover(function enterSquare() {
  $(this).addClass("trans").removeClass("trans-out");
}, function exitSquare() {
  $(this).removeClass("trans").addClass("trans-out");
}
);

/* ordered image fader functions */
var orderSquare = 0;
var removeSquare = -7;
setInterval(function () {
  $(".square" + orderSquare).addClass("trans").removeClass("trans-out");
  orderSquare++;
  console.log("second" + orderSquare);
  if (orderSquare > 24) {
    orderSquare = 0;
  }
}, 300);

setInterval(function () {
  $(".square" + removeSquare).removeClass("trans").addClass("trans-out");
  removeSquare++;
  console.log("second" + orderSquare);
  if (removeSquare > 24) {
    removeSquare = 0;
  }
}, 300);


/* random image fader functions
if (window.innerWidth < 1) {
setInterval(function() {
  var randomSquare = randomSquareValue(24, 1);
  console.log(randomSquare);
  activateSquare(randomSquare);
}, 700);

function activateSquare(randomSquare) {
  var currentSquare = randomSquare;
  $(".square" + randomSquare).addClass("trans").removeClass("trans-out");
  setTimeout(function removeit(currentSquare) {
    $(".square" + randomSquareValue(24, 1)).addClass("trans-out").removeClass("trans");
  }, 20);
}


 function randomSquareValue(max, min) {
    return Math.floor((Math.random() * (max - min + 1) + min));
 }

}
*/
/* END CONTACT PAGE IMAGE FADER SYSTEM


/*PROJECTS load html below main screen */

function loadProjectsText() {

  /* create new element to load data onto */
  if (projectsReset === true) {
    $(".project-background").append("<div class='project-appended'></div>");
    $(".project-appended").load("components/projects.html");
    projectsReset = false;
  }
}

/*PROJECTS appended data, fade in */

setInterval(function () {
  if (projectsReset === false) {
    for (i = 0; i < 5; i++) {
      if (($("#project-row" + i).offset().top) < ($(window).scrollTop() + ($(window).height()/2 + 200))) {
        $(".project-row" + i).addClass("projects-container-row-fade-in");
      }
    }
    if (($("#project-row0").offset().top) < ($(window).scrollTop() + ($(window).height()/2))) {
      $(".nav-circle").addClass("nav-circle-fade-in");
      circleMenu = true;
    } else {
      $(".nav-circle").removeClass("nav-circle-fade-in");
      $(".nav-circle-box").removeClass("nav-circle-box-scale");
      $(".nav-circle").removeClass("nav-circle-rotate");
      $(".nav-circle-box-text").removeClass("nav-circle-box-text-fade-in");
      circleMenu = false;
    }
  }
}, 100);

/* circle menu stuff */

    bindClickNav();

/* ABOUT page PARTICLE CONTAINER */
var browserWidth = $(window).width();

function particleEndValues(classNumber) {
    $(".about-p" + classNumber).css({"left": particleValues(browserWidth + 250, browserWidth + 50) +"px", "top": particleValues(550, 150) + "px", "opacity": Math.random(), "transition": "left " + particleValues(15, 13.5) + "s ease, top " + particleValues(15, 13.5) + "s ease, opacity " + particleValues(15, 13) + "s ease"});
}


 function particleValuesAbout (max, min) {
    return (Math.random() * (max - min + 1) + min);
 }

function createParticle(classNumber) {
  $(".about-particle-container").append("<div class='about-p about-p" + classNumber + "'></div>");
}

var particlesTotal = 0;

setInterval( function() {
  particlesTotal ++;
  createParticle(particlesTotal);
  $(".about-p" + particlesTotal).css({"left": particleValuesAbout(-25, -5) + "px", "top": particleValues(550, 150) + "px"});
  particleEndValues(particlesTotal - 1);
}, 50);


setTimeout(function() {
  deleteParticle(0);
}, 9000);


function deleteParticle(particleNumber) {
  setInterval(function() {
    $(".about-p" + particleNumber).remove();
  particleNumber ++;
  }, 50);
}

/* ABOUT PAGE PARTICAL CONTAINER END */

/* end of document.ready */
});


function bindClickNav() {
$("body").on("click", ".nav-circle", function() {
  if (circleMenu === true) {
    $(".nav-circle-box").toggleClass("nav-circle-box-scale");
    $(".nav-circle-box-text").toggleClass("nav-circle-box-text-fade-in");
    $(".nav-circle").toggleClass("nav-circle-rotate");
  }
});
$("body").on("click", ".nav-circle-box", function() {
  if (circleMenu === true) {
    $("html, body").animate({ scrollTop: 0 }, "slow");
    console.log("slideup");
  }
});
}
