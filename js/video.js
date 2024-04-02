// var video;

// window.addEventListener("load", function() {
// 	console.log("Good job opening the window")

// });

// document.querySelector("#play").addEventListener("click", function() {
// 	console.log("Play Video");
// });

var video;

window.addEventListener("load", function () {
  console.log("Good job opening the window");
  video = document.querySelector("#player1");
  video.autoplau = false;
  video.loop = false;
  console.log("auto play is set to " + video.autoplay);
  console.log("loop is set to " + video.loop);
});
window.onload=function(){
	document.getElementById("play").addEventListener("click",function(){
		console.log("Play Video");
		video.play();
	});
	document.getElementById("pause").addEventListener("click", function () {
    console.log("Pause Video");
    video.pause();
  });
  document.getElementById("slower").addEventListener("click", function () {
	console.log("Slow Down Video");
	video.playbackRate *= 0.90;
	console.log("Speed is " + video.playbackRate);
  });
  document.getElementById("faster").addEventListener("click", function () {
	console.log("Speed Up Video");
	video.playbackRate /= 0.90;
	console.log("Speed is " + video.playbackRate);
  });
  document.getElementById("skip").addEventListener("click", function () {
	console.log("Skip Ahead");
	if(video.currentTime + 10 < video.duration){
		video.currentTime += 10;
		console.log("Video Current Time is " + video.currentTime);
	}else{
		video.currentTime = 0;
		console.log("Video Current Time is " + video.currentTime);
	}
  });
  document.getElementById("mute").addEventListener("click", function () {
	if(video.muted == false){
		video.muted = true;
		console.log("Muted");
		document.getElementById("mute").innerHTML = "Unmute";
	}
	else{
		video.muted = false;
		console.log("Unmuted");
		document.getElementById("mute").innerHTML = "Mute";
	}
  });
  document.getElementById("slider").addEventListener("change", function () {
	console.log("The current value is " + this.value);
	video.volume = this.value / 100;
	document.getElementById("volume").innerHTML = this.value + "%";
	console.log("The current value is " + video.volume);
  });
  document.getElementById("vintage").addEventListener("click", function () {
	console.log("Changing CSS");
	video.classList.add("oldSchool");
  });
  document.getElementById("orig").addEventListener("click", function () {
	console.log("Removing CSS");	
	video.classList.remove("oldSchool");
  });
};