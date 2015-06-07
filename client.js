//default variables
var debugging = false;

//default variables - Leap Motion
var hand_located = false; //if a single hand is currently located over leap motion
var gesture_action = "swap"; //current action to be performed if the hand goes off
var delay = 0; //current delay in frames
var delay_value = 15; //default delay assigned if any action is triggered by Leap Motion
var pinch_strength = 0; //pinch strength indicator
var startFrame, startAngle;

//show console messages if debugging variable is on
function debug(message) {
  if(debugging) {
    console.log(message);
  }
}

//var lastDate = Date.now();

//Define some vars required later
var new_screenshot_index = 0; //how many screenshots did we take
var w, h, ratio; //needed for screenshots
var video; //video element

//configure the behavior of the Leap Motion device
var controller = Leap.loop( {}, function(frame) {
  //show all the response shit from the device
  debug(frame);
  /*
  if(frame.valid && frame.gestures.length > 0) {
    frame.gestures.forEach(function(gesture) {
        switch (gesture.type){
          case "screenTap":
              if (Date.now() - lastDate > 1000) {
                lastDate = Date.now();
                if (video.paused) {
                  video.play();
                  debug("Resumed");
                } else {
                  video.pause();
                  debug("Paused");
                }
              }
              break;
        }
    });
    frame.gestures.forEach(function(gesture){
        switch (gesture.type){
          case "swipe":
              var isToScreen = gesture.direction[2] > 0.8 || gesture.direction[2] < -0.8;
              if (!isToScreen && !video.paused && Date.now() - lastDate > 1000) {
                lastDate = Date.now();
                debug("Screenshotted" + gesture.duration);
                snap();
              }
              break;
        }
    });
  }
  */

  //ok, if we are allowed to process the input from the Leap Motion and if it shouldnt be delayed
  if(frame.valid && delay == 0) {
    if(!startFrame) { startFrame = frame; }
    //if we lost the hand
    if (hand_located && frame.hands.length == 0) {
      if(gesture_action == "swap"){
        action_snapshot();
        /* hack for exiting a full-screen mode: doesnt work for security reasons
        $('#video-active').trigger({
          type: 'keyup',
          which: 27 // Escape key
        });
        */
      }

      //reset values
      gesture_action = "swap";
      hand_located = false;
    } else if (frame.hands.length == 1) { //recognized a single hand
      if(hand_located){
        rotation = frame.hands[0].rotationAngle(startFrame);
        rotation_diff = rotation - startAngle;
      } else {
        startFrame = frame;
        startAngle = frame.hands[0].rotationAngle(startFrame);
      }

      //single-handed gestures
      if((gesture_action != "tap") && (gesture_action != "pinch")) {
        for(var gesture_index = 0; gesture_index < frame.gestures.length; gesture_index++) {
          if(frame.hands[0].pinch_strength > 0.5){
            gesture_action = "pinch";
            console.log(frame.hands[0].pinch_strength);
          }
        }
        if(gesture_action != "pinch") {
          for(var gesture_index = 0; gesture_index < frame.gestures.length; gesture_index++) {
            if(frame.fingers[1].carpPosition[1] > -10 || frame.fingers[1].carpPosition[1] < 10){
              gesture_action = "tap";
              action_toggle_play();
            }
          }
        }
      }
      hand_located = true;
    }
  } else { delay--; } //reduce delay by one frame
});

//accordion shit
function setup_acc(title, content){
	$(title).click(function(){$(content).toggle(500);});
	$(title).click();
}

function errorHandler(e) {
  var msg = '';

  switch (e.code) {
    case FileError.QUOTA_EXCEEDED_ERR:
      msg = 'QUOTA_EXCEEDED_ERR';
      break;
    case FileError.NOT_FOUND_ERR:
      msg = 'NOT_FOUND_ERR';
      break;
    case FileError.SECURITY_ERR:
      msg = 'SECURITY_ERR';
      break;
    case FileError.INVALID_MODIFICATION_ERR:
      msg = 'INVALID_MODIFICATION_ERR';
      break;
    case FileError.INVALID_STATE_ERR:
      msg = 'INVALID_STATE_ERR';
      break;
    default:
      msg = 'Unknown Error';
      break;
  };

  console.log('Error: ' + msg);
}

$(function(){
  // Note: The file system has been prefixed as of Google Chrome 12:
  /*
  window.requestFileSystem  = window.requestFileSystem || window.webkitRequestFileSystem;
  window.requestFileSystem(window.PERSISTENT, 100*1024*1024, function onInitFs(fs) {
    console.log('Opened file system: ' + fs.name);
  }, errorHandler(e));
  */
  
  //during playback just update the time
	$(".video-stream").on(
 	   "timeupdate",
    	function(event){
        //update timers
    		onTrackedVideoFrame(this.currentTime.toFixed(1), this.duration.toFixed(1));
    	}
    );

	//Get handles on the video and canvas elements
	video = document.querySelector('video');

	//Add a listener to wait for the 'loadedmetadata' state so the video's dimensions can be read
	video.addEventListener('loadedmetadata', function() {
		// Calculate the ratio of the video's width to height
		ratio = video.videoHeight / video.videoWidth;
		w = parseInt(video.videoWidth/4.0);
		h = parseInt(w * ratio, 10);
	}, false);
});

//update visuals of the timers
function onTrackedVideoFrame(currentTime, duration){
    $("#current").text(currentTime);
    $("#duration").text(duration);
}

//toggle fullscreen mode
function action_toggle_fullscreen() {
  var elem = document.getElementById("video-active");

  if (
    document.fullscreenEnabled || 
    document.webkitFullscreenEnabled || 
    document.mozFullScreenEnabled ||
    document.msFullscreenEnabled
  ) {
    if (elem.requestFullscreen) { elem.requestFullscreen(); } 
    else if (elem.msRequestFullscreen) { elem.msRequestFullscreen(); }
    else if (elem.mozRequestFullScreen) { elem.mozRequestFullScreen(); }
    else if (elem.webkitRequestFullscreen) { elem.webkitRequestFullscreen(); }
  } else {
    if (elem.exitFullscreen) { elem.exitFullscreen(); }
    else if (elem.msExitFullscreen) { elem.msExitFullscreen(); }
    else if (elem.mozCancelFullScreen) { elem.mozCancelFullScreen(); }
    else { Document.exitFullscreen(); } 
  }
}

//play-pause toggle of the video element
function action_toggle_play() {
  if (video.paused) {
    video.play();
    change_icon('play');    
  } else {
    video.pause();
    change_icon('pause');    
  }
  delay = delay_value;
}

// Takes a snapshot of the video
function action_snapshot() {
  //dimensions
	this.width = w;
  this.height = h;
  //create canvas old-school style
  this.element = document.createElement('canvas');
  $('.screenshots').append('<div class="screenshot screenshot_'+new_screenshot_index+'"></div>');

  //update attributes
  $(this.element)
     .attr('id', 'screenshot_'+new_screenshot_index)
     .text('unsupported browser')
     .width(this.width)
     .height(this.height)
     .appendTo('.screenshot_'+new_screenshot_index);

  //some fake data
  var fake_data_html = '<b>title:</b> Ex Machina | <b>user:</b> Gary' +
  					 '<br><b>time:</b> ' + $('#current').text() + 's';

  $('.screenshot_'+new_screenshot_index).append('<div class="description" value="'+$("#current").text()+'"></div>');
  $('.screenshot_'+new_screenshot_index+' .description').html(fake_data_html);
  $('.screenshot_'+new_screenshot_index).click(function(){
    $('.screenshot').removeClass('selected');
    $(this).addClass('selected');

    countdown = 5;
    adjusted_time = parseFloat($(this).find('.description').attr('value')) - countdown;
    if(adjusted_time < 0){adjusted_time = 0;}

    video.currentTime = adjusted_time;
    video.play();
    change_icon ('countdown', countdown);
  });

  this.context = this.element.getContext("2d");

	// Get a handle on the 2d context of the canvas element
	//var context = canvas.element.get(0).getContext('2d');
	this.context.fillRect(0, 0, w, h);
	this.context.drawImage(video, 0, 0, w, h);

  //just slowly add the screenshot and scroll to the bottom
	new_screenshot_index++;
  $('.screenshots').animate({
    scrollTop: $('.screenshots').get(0).scrollHeight
  }, 2000);

  //blink with the heart
  change_icon('love');

  //configure fingerprint
  var mar_100 = parseInt($('.fingerprint').css('width').replace('px', ''));
  var mar = -15 + Math.floor(mar_100*parseFloat($("#current").text())/parseFloat($("#duration").text()));
  $('.fingerprint').append('<i style="color: #FFF; float:left; margin-top: -55px; position:relative; left:'+mar+'px;" class="fa fa-arrows-v fa-2x"></i>');

  delay = delay_value;
}

//blinking confirmation beakon effect
function change_icon (action, countdown) {
  countdown = countdown || 0;

  $('.overlay').html('');
  $('.overlay').css('opacity', '1');

  if(action == 'play'){
    $('.overlay').html('<i class="fa fa-play fa-2x"></i>');
  } else if (action == 'pause') {
    $('.overlay').html('<i class="fa fa-pause fa-2x"></i>');
  } else if (action == 'love') {
    $('.overlay').html('<i class="fa fa-heart fa-2x"></i>');
  } else if (action == 'countdown' && countdown > 0) {
    $('.overlay').html('<i class="fa fa-clock-o fa-2x"></i>'+countdown);
    countdown--;
    console.log(countdown);
    setTimeout( function() { change_icon('countdown', countdown); }, 1000);
  }

  $('.overlay').animate( { opacity: 0 }, 800 );
}