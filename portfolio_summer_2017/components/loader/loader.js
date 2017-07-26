var data = new Object();
var data =    {
  circle1 : {
    frame: 1,
  },
  circle2 : {
    frame: 2,
  },
  circle3: {
    frame: 3,
  },
};


/*ever x seconds, call function to move*/
/*!!!!!!transition ease and interval need to be same*/
setInterval( function() {
  setNewFrame();
}, 1000);



function setNewFrame() {
  for (i = 1; i < 4; i ++) {
    var currentObject = "circle" + i;
    var currentFrame = data[currentObject].frame;

    $(".circle" + i).removeClass("pos" + currentFrame);
    /*if frame is 4, restart at 0*/
    if (currentFrame == 4) {
      data[currentObject].frame = "0";
    };
    data[currentObject].frame ++;
    $(".circle" + i).addClass("pos" + (data[currentObject].frame));
    console.log("circle " + data[currentObject] + "frame" + data[currentObject].frame);
  };
};
