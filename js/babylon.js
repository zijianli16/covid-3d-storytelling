//import type auto completion file
///<reference path='babylon.d.ts' />

function initBabylonScene() {

let value;

var canvas = document.getElementById("canvas");

var engine = new BABYLON.Engine(canvas, true);

var createScene = function (canvas, engine) {
    var scene = new BABYLON.Scene(engine);

    // engine.displayLoadingUI(scene);

    //scene background color
    scene.clearColor = new BABYLON.Color3.FromHexString('#808080');

    createHemisphericLight(scene);

    blenderCameraAnimation(scene);

    //----------Aboves are basic setup---------------

    //debug(scene);

    return scene;
}

//pass local scene to global scene
const scene = createScene(canvas, engine);

engine.runRenderLoop(function () {
    scene.render();
});

window.addEventListener("resize", function () {
    engine.resize();
});

//****************************************BASIC SETUP IS ABOVE ***********************************/
//****************************************BASIC SETUP IS ABOVE ***********************************/
//****************************************BASIC SETUP IS ABOVE ***********************************/


//***************************************Set Lighting************************************** */
//***************************************Set Lighting************************************** */
function createHemisphericLight(scene) {
    const hemisphericLight = new BABYLON.HemisphericLight('hemisphericLight', BABYLON.Vector3(0, 5, 0), scene);

    //adjust light intensity
    hemisphericLight.intensity = 1;
    hemisphericLight.groundColor = new BABYLON.Color3.FromHexString('#ffffff');
}
//***************************************Set Lighting************************************** */
//***************************************Set Lighting************************************** */

function blenderCameraAnimation(scene) {
    //creating a skybox
    scene.clearColor = new BABYLON.Color3.FromHexString('#808080');

    // This creates and positions a free camera (non-mesh) requried, and position does not matter 
    var camera_not_in_use = new BABYLON.FreeCamera("camera_not_in_use", new BABYLON.Vector3(0, 100, 0), scene);

    // new BABYLON.SceneLoader.ImportMesh('', 'models/', 'GreatWallWholeView.gltf', scene, () => {
    //     //scene.createDefaultCameraOrLight(true, true, true)
    //     console.log("scene =" + scene);

    //     let camera_active = scene.getCameraByName("blenderCamera")
    //     scene.activeCamera = camera_active

    //     let cameraAnimation = scene.getAnimationGroupByName("Action");
    //     //stop animation loop
    //     cameraAnimation.play(false);
    //     //animatio play speed
    //     //cameraAnimation.speedRatio = 2;
    //     cameraAnimation.goToFrame(0);
    //     cameraAnimation.pause();

    //     document.getElementById("loadingScreen").style.display = "none";

    //     setInterval(() => {
    //         cameraAnimation.goToFrame(value);
    //     }, 1000 / 24);
    // })

    BABYLON.SceneLoader.ImportMeshAsync('https://zijianli16.github.io/covid-3d-storytelling', '/models/', 'covidRoom.gltf', scene).then(() => {
        //scene.createDefaultCameraOrLight(true, true, true)
        console.log("scene =" + scene);

        let camera_active = scene.getCameraByName("blenderCamera")
        scene.activeCamera = camera_active

        let cameraAnimation = scene.getAnimationGroupByName("Action");
        //stop animation loop
        cameraAnimation.play(false);
        //animatio play speed
        //cameraAnimation.speedRatio = 2;
        cameraAnimation.goToFrame(0);
        cameraAnimation.pause();

        document.getElementById("loading-screen").style.display = "none";

        setInterval(() => {
            cameraAnimation.goToFrame(value);
        }, 1000 / 24);
    });
}

//Debug: show Scene Explore and Inspector
function debug(scene) {
    //Debug: show Scene Explore and Inspector
    scene.debugLayer.show();
}
//==============================Scrollmagic code are below================================
//==============================Scrollmagic code are below================================
//==============================Scrollmagic code are below================================

//=========================Allow Video to Play Only When Video Has Reached the Top========================
var shouldVideoStart = false;
var videoDistanceFromTop = $('#babylon-container').offset().top;

$(window).on('scroll', function () {
    var scrollFromTop = $(window).scrollTop();
    var currentVidDistanceFromTop = ($('#babylon-container').offset().top - scrollFromTop);
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

let videoDuration = 19;
//how long is the video? i.e 14 means that video is 14 seconds long. 
let videoFrameRate = 24;
//what is the video frame rate? i.e: 25fps/30fps
let yOffsetToVidTimeRate = 1000;
//how long do you want the scroll to be? The bigger the number, the longer the scroll. Defaul as 1000 recommended. 
let acceleration = 0.2;
//how do you want the momentum to be? The smaller the number, the stronger the momentum. 
//======================Input Your Customized Value Above ========================

//======================Video Section ========================
let videoDurationInPx = videoDuration * yOffsetToVidTimeRate;
let windowHeight = window.innerHeight;
document.getElementById("babylon-content-container").style.height = videoDurationInPx + windowHeight;

let midVideoTime = 0;
let targetVideoTime = 0;

//build the video scene
let videoScene = new ScrollMagic.Scene({
    triggerHook: 0,
    triggerElement: "#babylon-video-spacer",
    //must use a container to cover the video element
    offset: 0,
    duration: videoDurationInPx,
})
    .setPin("#babylon-container")
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
    value = targetVideoTime;
    console.log("value = " + value);
    //console.log("video current time =" + targetVideoTime);
}, 1000 / videoFrameRate);
//======================Video Section ========================

//====================== START of Texts Section ========================

//------------------------OverlayText01---------------------
//set text01 mergining from bottom of viewport at 2 second
let text01TargetShowTime = 0.2;
let overlayText01DisFromTop = text01TargetShowTime * yOffsetToVidTimeRate + windowHeight * 0.5;
//videoCurrentTime *yOffsetToVideoTimeRate + TriggerHookRate (i.e 0.3) * windowHeight
document.getElementById("babylon-spacer0001").style.marginTop = overlayText01DisFromTop + "px";

//set text01 pin duration, i.e 800px or 0.8 second of video duration
let text01Stay = 600;

let text01Scene = new ScrollMagic.Scene({
    triggerHook: 0.5,
    triggerElement: "#babylon-trigger1",
    duration: text01Stay,
})
    .setPin("#babylon-pin1")
    .addTo(controller)
//.addIndicators({ name: "--- text01 Scene" });

//------------------------OverlayText01---------------------

//------------------------OverlayText02---------------------
//set text02 mergining from bottom of viewport at 4 second
let text02TargetShowTime = 2.5;
//set text02 pin duration, i.e 800px or 0.8 second of video duration
let text02Stay = 600;
document.getElementById("babylon-spacer0102").style.marginTop = (text02TargetShowTime - text01TargetShowTime) * yOffsetToVidTimeRate - text01Stay + "px"

let text02Scene = new ScrollMagic.Scene({
    triggerHook: 0.5,
    triggerElement: "#babylon-trigger2",
    duration: text02Stay,
})
    .setPin("#babylon-pin2")
    .addTo(controller)
//.addIndicators({ name: "--- text02 Scene" });
//------------------------OverlayText02---------------------

//------------------------OverlayText03---------------------
//set text03 mergining from bottom of viewport at 6 second
let text03TargetShowTime = 4.5;
//set text03 pin duration, i.e 1000px or 1 second of video duration
let text03Stay = 1000;
document.getElementById("babylon-spacer0203").style.marginTop = (text03TargetShowTime - text02TargetShowTime) * yOffsetToVidTimeRate - text02Stay + "px";

let text03Scene = new ScrollMagic.Scene({
    triggerHook: 0.5,
    triggerElement: "#babylon-trigger3",
    duration: text03Stay,
})
    .setPin("#babylon-pin3")
    .addTo(controller)
//.addIndicators({ name: "--- text03 Scene" });
//------------------------OverlayText03---------------------

//------------------------OverlayText04---------------------
//set text04 mergining from bottom of viewport at 6 second
let text04TargetShowTime = 6.5;
//set text04 pin duration, i.e 1000px or 1 second of video duration
let text04Stay = 1000;
document.getElementById("babylon-spacer0304").style.marginTop = (text04TargetShowTime - text03TargetShowTime) * yOffsetToVidTimeRate - text03Stay + "px";

let text04Scene = new ScrollMagic.Scene({
    triggerHook: 0.5,
    triggerElement: "#babylon-trigger4",
    duration: text04Stay,
})
    .setPin("#babylon-pin4")
    .addTo(controller)
//.addIndicators({ name: "--- text04 Scene" });
//------------------------OverlayText04---------------------

//------------------------OverlayText05---------------------
//set text05 mergining from bottom of viewport at 6 second
let text05TargetShowTime = 8.5;
//set text05 pin duration, i.e 1000px or 1 second of video duration
let text05Stay = 400;
document.getElementById("babylon-spacer0405").style.marginTop = (text05TargetShowTime - text04TargetShowTime) * yOffsetToVidTimeRate - text04Stay + "px";

let text05Scene = new ScrollMagic.Scene({
    triggerHook: 0.5,
    triggerElement: "#babylon-trigger5",
    duration: text05Stay,
})
    .setPin("#babylon-pin5")
    .addTo(controller)
//.addIndicators({ name: "--- text04 Scene" });
//------------------------OverlayText05---------------------

//------------------------OverlayText06---------------------
//set text06 mergining from bottom of viewport at 6 second
let text06TargetShowTime = 12;
//set text05 pin duration, i.e 1000px or 1 second of video duration
let text06Stay = 1000;
document.getElementById("babylon-spacer0506").style.marginTop = (text06TargetShowTime - text05TargetShowTime) * yOffsetToVidTimeRate - text05Stay + "px";

let text06Scene = new ScrollMagic.Scene({
    triggerHook: 0.5,
    triggerElement: "#babylon-trigger6",
    duration: text06Stay,
})
    .setPin("#babylon-pin6")
    .addTo(controller)
    //.addIndicators({ name: "--- text04 Scene" });
//------------------------OverlayText06---------------------

//------------------------OverlayText07---------------------
//set text06 mergining from bottom of viewport at 6 second
let text07TargetShowTime = 15.5;
//set text05 pin duration, i.e 1000px or 1 second of video duration
let text07Stay = 1000;
document.getElementById("babylon-spacer0607").style.marginTop = (text07TargetShowTime - text06TargetShowTime) * yOffsetToVidTimeRate - text06Stay + "px";

let text07Scene = new ScrollMagic.Scene({
    triggerHook: 0.5,
    triggerElement: "#babylon-trigger7",
    duration: text07Stay,
})
    .setPin("#babylon-pin7")
    .addTo(controller)
    //.addIndicators({ name: "--- text04 Scene" });
//------------------------OverlayText07---------------------

//------------------------OverlayText08---------------------
//set text06 mergining from bottom of viewport at 6 second
let text08TargetShowTime = 17.5;
//set text05 pin duration, i.e 1000px or 1 second of video duration
let text08Stay = 800;
document.getElementById("babylon-spacer0708").style.marginTop = (text08TargetShowTime - text07TargetShowTime) * yOffsetToVidTimeRate - text07Stay + "px";

let text08Scene = new ScrollMagic.Scene({
    triggerHook: 0.5,
    triggerElement: "#babylon-trigger7",
    duration: text08Stay,
})
    .setPin("#babylon-pin8")
    .addTo(controller)
    //.addIndicators({ name: "--- text04 Scene" });
//------------------------OverlayText08---------------------



//======================Texts Section END========================
}

initBabylonScene();