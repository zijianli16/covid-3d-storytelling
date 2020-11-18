//=========================Prevent Video from autoplay=========================
//=========================Autoplay is required for showing video bg for mobile end
let bgVideo = document.getElementById("bg-video");
//OR let byVideo = $("#bgVideo")[0];
//# is not neccessary when using document.getElementById

function setVidPlaybackSpeed() {
    bgVideo.playbackRate = 0;
}
//=========================Prevent Video from autoplay=========================

//=========================START OF Responsive Windows SECTION======================
//For screensize smaller than 1200px, load mobile video
window.addEventListener("resize", switchBGVideo);

function switchBGVideo() {
    var bgVideo = $("#bg-video");
    var windowWidth = $(window).width();
    if (windowWidth < 1200) {
        bgVideo.attr("src", "/videos/hosLocations_Mobile.mp4");
    }
    else {
        bgVideo.attr("src", "/videos/hosLocations_Desktop.mp4");
    }
}
switchBGVideo();
//=========================END OF Responsive Windows SECTION========================

//=========================Allow Video to Play Only When Video Has Reached the Top========================
var shouldVideoStart = false;
var videoDistanceFromTop = $('#video-container').offset().top;

$(window).on('scroll', function () {
    var scrollFromTop = $(window).scrollTop();
    var currentVidDistanceFromTop = (videoDistanceFromTop - scrollFromTop);
    if (currentVidDistanceFromTop <= 0) {
        shouldVideoStart = true;
    }
    else {
        shouldVideoStart = false;
    }
});
//=========================Allow Video to Play Only When Video Has Reached the Top ========================

//init scroll magic controller
let controller = new ScrollMagic.Controller();

//creating video animation

//========================Input Your Customized Value Below =====================

let videoDuration = 29;
//how long is the video? i.e 14 means that video is 14 seconds long. 
let videoFrameRate = 30;
//what is the video frame rate? i.e: 25fps/30fps
let yOffsetToVidTimeRate = 1000;
//how long do you want the scroll to be? The bigger the number, the longer the scroll. Defaul as 1000 recommended. 
let acceleration = 0.2;
//how do you want the momentum to be? The smaller the number, the stronger the momentum. 
//======================Input Your Customized Value Above ========================

//======================Video Section ========================
let videoDurationInPx = videoDuration * yOffsetToVidTimeRate;
let windowHeight = window.innerHeight;
document.getElementById("map-container").style.height = videoDurationInPx + windowHeight;

let midVideoTime = 0;
let targetVideoTime = 0;

//build the video scene
let videoScene = new ScrollMagic.Scene({
    triggerHook: 0,
    triggerElement: "#video-spacer",
    //must use a container to cover the video element
    offset: 0,
    duration: videoDurationInPx,
})
    .setPin("#video-container")
    .addTo(controller)
//.addIndicators({ name: "--- Video Scene" });

videoScene.on("update", e => {
    if (shouldVideoStart == true) {
        midVideoTime = (e.scrollPos - videoDistanceFromTop) / yOffsetToVidTimeRate;
    }
    //update is a predifined event by scroll magic, e.scrollPos: the current scroll position of the container, e.scrollPos == the amount of px away from top 
});

setInterval(() => {
    targetVideoTime += (midVideoTime - targetVideoTime) * acceleration;
    //targetVideoTime = targetVideoTime + (midVideoTime - targetVideoTime)* acceleration
    bgVideo.currentTime = targetVideoTime;

    console.log("video current time =" + targetVideoTime);

    setVidPlaybackSpeed();

}, 1000 / videoFrameRate);

//======================Video Section ========================

//====================== START of Texts Section ========================

//------------------------OverlayText01---------------------
//set text01 mergining from bottom of viewport at 2 second
let text01TargetShowTime = 1;
let overlayText01DisFromTop = text01TargetShowTime * yOffsetToVidTimeRate + windowHeight * 0.5;
//videoCurrentTime *yOffsetToVideoTimeRate + TriggerHookRate (i.e 0.3) * windowHeight
document.getElementById("spacer0001").style.marginTop = overlayText01DisFromTop + "px";

//set text01 pin duration, i.e 800px or 0.8 second of video duration
let text01Stay = 2000;

let text01Scene = new ScrollMagic.Scene({
    triggerHook: 0.2,
    triggerElement: "#trigger1",
    duration: text01Stay,
})
    .setPin("#pin1")
    .addTo(controller)
//.addIndicators({ name: "--- text01 Scene" });

//------------------------OverlayText01---------------------

//------------------------OverlayText02---------------------
//set text02 mergining from bottom of viewport at 4 second
let text02TargetShowTime = 4;
//set text02 pin duration, i.e 800px or 0.8 second of video duration
let text02Stay = 2500;
document.getElementById("spacer0102").style.marginTop = (text02TargetShowTime - text01TargetShowTime) * yOffsetToVidTimeRate - text01Stay + "px"

let text02Scene = new ScrollMagic.Scene({
    triggerHook: 0.2,
    triggerElement: "#trigger2",
    duration: text02Stay,
})
    .setPin("#pin2")
    .addTo(controller)
//.addIndicators({ name: "--- text02 Scene" });
//------------------------OverlayText02---------------------

//------------------------OverlayText03---------------------
//set text03 mergining from bottom of viewport at 6 second
let text03TargetShowTime = 7;
//set text03 pin duration, i.e 1000px or 1 second of video duration
let text03Stay = 1000;
document.getElementById("spacer0203").style.marginTop = (text03TargetShowTime - text02TargetShowTime) * yOffsetToVidTimeRate - text02Stay + "px";

let text03Scene = new ScrollMagic.Scene({
    triggerHook: 0.2,
    triggerElement: "#trigger3",
    duration: text03Stay,
})
    .setPin("#pin3")
    .addTo(controller)
//.addIndicators({ name: "--- text03 Scene" });
//------------------------OverlayText03---------------------
//======================Texts Section END========================

//------------------------OverlayText04---------------------
//set text04 mergining from bottom of viewport at 6 second
let text04TargetShowTime = 13.5;
//set text04 pin duration, i.e 1000px or 1 second of video duration
let text04Stay = 2000;
document.getElementById("spacer0304").style.marginTop = (text04TargetShowTime - text03TargetShowTime) * yOffsetToVidTimeRate - text03Stay + "px";

let text04Scene = new ScrollMagic.Scene({
    triggerHook: 0.2,
    triggerElement: "#trigger4",
    duration: text04Stay,
})
    .setPin("#pin4")
    .addTo(controller)
//.addIndicators({ name: "--- text04 Scene" });
//------------------------OverlayText04---------------------

//------------------------OverlayText05---------------------
//set text05 mergining from bottom of viewport at 6 second
let text05TargetShowTime = 25;
//set text05 pin duration, i.e 1000px or 1 second of video duration
let text05Stay = 2000;
document.getElementById("spacer0405").style.marginTop = (text05TargetShowTime - text04TargetShowTime) * yOffsetToVidTimeRate - text04Stay + "px";

let text05Scene = new ScrollMagic.Scene({
    triggerHook: 0.2,
    triggerElement: "#trigger5",
    duration: text05Stay,
})
    .setPin("#pin5")
    .addTo(controller)
//.addIndicators({ name: "--- text04 Scene" });
//------------------------OverlayText05---------------------