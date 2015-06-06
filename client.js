/*

var cats = {};

Leap.loop(function(frame) {

  frame.hands.forEach(function(hand, index) {
    
    var cat = ( cats[index] || (cats[index] = new Cat()) );    
    cat.setTransform(hand.screenPosition(), hand.roll());
    
  });
  
}).use('screenPosition', {scale: 0.25});


var Cat = function() {
  var cat = this;
  var img = document.createElement('img');
  img.src = 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/109794/cat_2.png';
  img.style.position = 'absolute';
  img.onload = function () {
    cat.setTransform([window.innerWidth/2,window.innerHeight/2], 0);
    document.body.appendChild(img);
  }
  
  cat.setTransform = function(position, rotation) {

    img.style.left = position[0] - img.width  / 2 + 'px';
    img.style.top  = position[1] - img.height / 2 + 'px';

    img.style.transform = 'scaleX(' + -rotation + ')';
    console.log(rotation);
    
    img.style.webkitTransform = img.style.MozTransform = img.style.msTransform =
    img.style.OTransform = img.style.transform;

  };

};

cats[0] = new Cat();

// This allows us to move the cat even whilst in an iFrame.
Leap.loopController.setBackground(true)

*/

var controller = Leap.loop({enableGestures: true}, function(frame){
  if(frame.valid && frame.gestures.length > 0){
    frame.gestures.forEach(function(gesture){
        switch (gesture.type){
          case "swipe":
          	  if (gesture.state == "stop") {
              	console.log("Screenshotted");
          	  	snap();
          	  }
              console.log("Swipe Gesture" + gesture.state);
              break;
        }
    });
  }
});

// Define some vars required later
var new_screenshot_index = 0;
var w, h, ratio;
var video;

//accordion shit
function setup_acc(title, content){
	$(title).click(function(){$(content).toggle(500);});
	$(title).click();
}

$(function(){ 
	$("#video-active").on(
 	   "timeupdate", 
    	function(event){
    		onTrackedVideoFrame(this.currentTime, this.duration);
    	}
    );

	// Get handles on the video and canvas elements
	video = document.querySelector('video');

	// Add a listener to wait for the 'loadedmetadata' state so the video's dimensions can be read
	video.addEventListener('loadedmetadata', function() {
		// Calculate the ratio of the video's width to height
		ratio = video.videoHeight / video.videoWidth;
		w = parseInt(video.videoWidth/4.0);
		h = parseInt(w * ratio, 10);
	}, false);

	$('#leap_motion_short').click(function(){snap();});
	$('#leap_motion_average').click(function(){snap();});
	$('#leap_motion_long').click(function(){snap();});
});

function onTrackedVideoFrame(currentTime, duration){
    $("#current").text(currentTime);
    $("#duration").text(duration);
}

// Takes a snapshot of the video
function snap() {
	this.width = w;
    this.height = h;
    this.element = document.createElement('canvas');
    $('.screenshots').append('<div class="screenshot screenshot_'+new_screenshot_index+'"></div>');

    $(this.element)
       .attr('id', 'screenshot_'+new_screenshot_index)
       .text('unsupported browser')
       .width(this.width)
       .height(this.height)
       .appendTo('.screenshot_'+new_screenshot_index);

    var fake_data_html = '<b>Movie:</b> Ex Machina' +
    					 '<br>' +
    					 '<b>User:</b> Gary' +
    					 '<br>' +
    					 '<b>Time:</b> ' + $('#current').text();

    $('.screenshot_'+new_screenshot_index).append('<div class="description"></div>');
    $('.screenshot_'+new_screenshot_index+' .description').html(fake_data_html);

    this.context = this.element.getContext("2d");

	//var canvas = $('#screenshot_'+new_screenshot_index);
	//console.log(canvas);
	// Set the canvas width and height to the values just calculated
	//canvas.width = w;
	//canvas.height = h;			

	// Get a handle on the 2d context of the canvas element
	//var context = canvas.element.get(0).getContext('2d');
	this.context.fillRect(0, 0, w, h);
	this.context.drawImage(video, 0, 0, w, h);

	new_screenshot_index++;
}