
var lastDate = Date.now();

// Define some vars required later
var new_screenshot_index = 0;
var w, h, ratio;
var video;

var controller = Leap.loop({}, function(frame){
  console.log(frame);
  if(frame.valid && frame.gestures.length > 0){
    frame.gestures.forEach(function(gesture){
        switch (gesture.type){
          case "screenTap":
              if (Date.now() - lastDate > 1000) {
                lastDate = Date.now();
                if (video.paused) {
                  video.play();
                  console.log("Resumed");
                } else {
                  video.pause();
                  console.log("Paused");
                }
              }
              break;
        }
    });
    frame.gestures.forEach(function(gesture){
        switch (gesture.type){
          case "swipe":
              console.log(gesture.pointableIds);
              var isToScreen = gesture.direction[2] > 0.9 || gesture.direction[2] < -0.9;
          	  if (!isToScreen && !video.paused && Date.now() - lastDate > 1000) {
                lastDate = Date.now();
                console.log("Screenshotted" + gesture.duration);
          	  	snap();
          	  }
              break;
        }
    });
  }
});

//accordion shit
function setup_acc(title, content){
	$(title).click(function(){$(content).toggle(500);});
	$(title).click();
}

$(function(){
	$("#video-active").on(
 	   "timeupdate",
    	function(event){
    		onTrackedVideoFrame(this.currentTime.toFixed(1), this.duration.toFixed(1));
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

    var fake_data_html = '<b>Movie:</b> Ex Machina (@Gary)' +
    					 '<br>' +
    					 '<b>Snapshot taken:</b> ' + $('#current').text() + 's';

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
  $('.screenshots').animate({
    scrollTop: $('.screenshots').get(0).scrollHeight
  }, 2000);
}
