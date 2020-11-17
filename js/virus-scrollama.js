const scrollamaVirus = scrollama();
// setup the instance, pass callback functions

scrollamaVirus
    .setup({
        step: ".step",
        debug: true,
        offset: 0
    })

    .onStepEnter(response => {
        // { element, index, direction }

        function changeCameraOrbit01_01() {

            let newIndex = response.index;
            let direction = response.direction;

            if (newIndex == 0 && direction == 'down') {
                $("#virus-model-viewer").attr("camera-orbit", "-180.31deg 38.24deg 2.53m");
                $("#tuchu").css("visibility", "visble");
                $("#yellow-p").css("visibility", "hidden");
                $("#green-p").css("visibility", "hidden");
                $("#purple-p").css("visibility", "hidden");
                $("#dna").css("visibility", "hidden");
            }
            else if (newIndex == 0 && direction == 'up') {
               
            }
            else if (newIndex == 1 && direction == "down") {
                $("#virus-model-viewer").attr("camera-orbit", "-200.31deg 60.24deg 1.5m");
                $("#tuchu").css("visibility", "hidden");
                $("#yellow-p").css("visibility", "visible");
                $("#green-p").css("visibility", "hidden");
                $("#purple-p").css("visibility", "hidden");
                $("#dna").css("visibility", "hidden");

            }
            else if (newIndex == 1 && direction == "up") {
                
            }
            else if (newIndex == 2 && direction == "down") {
                $("#virus-model-viewer").attr("camera-orbit", "-200.31deg 30.24deg 1.5m");
                $("#tuchu").css("visibility", "hidden");
                $("#yellow-p").css("visibility", "hidden");
                $("#green-p").css("visibility", "visible");
                $("#purple-p").css("visibility", "hidden");
                $("#dna").css("visibility", "hidden");
            }
            else if (newIndex == 2 && direction == "up") {
                $("#virus-model-viewer").attr("camera-orbit", "-200.31deg 60.24deg 1.5m");
                $("#tuchu").css("visibility", "hidden");
                $("#yellow-p").css("visibility", "visible");
                $("#green-p").css("visibility", "hidden");
                $("#purple-p").css("visibility", "hidden");
                $("#dna").css("visibility", "hidden");
            }
            else if (newIndex == 3 && direction == "down") {
                $("#virus-model-viewer").attr("camera-orbit", "-180.31deg 70.24deg 1.5m");
                $("#tuchu").css("visibility", "hidden");
                $("#yellow-p").css("visibility", "hidden");
                $("#green-p").css("visibility", "hidden");
                $("#purple-p").css("visibility", "visible");
                $("#dna").css("visibility", "hidden");
            }
            else if (newIndex == 3 && direction == "up") {
                //$("#virus-model-viewer").attr("camera-orbit", "43.2deg 130deg 0.1966m");
            }
            else if (newIndex == 4 && direction == "down") {
                $("#virus-model-viewer").attr("camera-orbit", "-235.31deg 70.24deg 0.5m");
                $("#tuchu").css("visibility", "hidden");
                $("#yellow-p").css("visibility", "hidden");
                $("#green-p").css("visibility", "hidden");
                $("#purple-p").css("visibility", "hidden");
                $("#dna").css("visibility", "visible");
            }
            else if (newIndex == 4 && direction == "up") {
                //$("#virus-model-viewer").attr("camera-orbit", "43.2deg 130deg 0.1966m");
            }
        }

        changeCameraOrbit01_01();

        console.log("Entered");
        console.log(response.index);
        console.log(response.direction);

        // var newOrbit = document.getElementsByTagName('model-viewer')[0].getAttribute('camera-orbit');
        // console.log('newOrbit = ' + newOrbit);
    })

    .onStepExit(response => {
        // { element, index, direction }
        function changeCameraOrbit01_02() {

            let newIndex = response.index;
            let direction = response.direction;

            if (newIndex == 0 && direction == "down") {
                $("#virus-model-viewer").attr("camera-orbit", "-180.31deg 38.24deg 2.53m");
                $("#tuchu").css("visibility", "visible");
                $("#green-p").css("visibility", "hidden");
                $("#yellow-p").css("visibility", "hidden");
                $("#purple-p").css("visibility", "hidden");
                $("#dna").css("visibility", "hidden");
            }
            else if (newIndex == 0 && direction == "up") {
                $("#virus-model-viewer").attr("camera-orbit", "-344.5deg 76.65deg 3m");
                $("#tuchu").css("visibility", "hidden");
                $("#green-p").css("visibility", "hidden");
                $("#yellow-p").css("visibility", "hidden");
                $("#purple-p").css("visibility", "hidden");
                $("#dna").css("visibility", "hidden");
            }
            else if (newIndex == 1 && direction == "down") {
                //$("#virus-model-viewer").attr("camera-orbit", "-27.36deg 125.7deg 0.1966m")
            }
            else if (newIndex == 1 && direction == "up") {
                $("#virus-model-viewer").attr("camera-orbit", "-180.31deg 38.24deg 2.53m");
                $("#tuchu").css("visibility", "visible");
                $("#green-p").css("visibility", "hidden");
                $("#yellow-p").css("visibility", "hidden");
                $("#purple-p").css("visibility", "hidden");
                $("#dna").css("visibility", "hidden");
               
            }
            else if (newIndex == 2 && direction == "down") {
                //$("#virus-model-viewer").attr("camera-orbit", "43.2deg 130deg 0.1966m");

            }
            else if (newIndex == 2 && direction == "up") {
                $("#virus-model-viewer").attr("camera-orbit", "-200.31deg 60.24deg 1.5m");
                $("#tuchu").css("visibility", "hidden");
                $("#yellow-p").css("visibility", "visible");
                $("#green-p").css("visibility", "hidden");
                $("#purple-p").css("visibility", "hidden");
                $("#dna").css("visibility", "hidden");
            }
            else if (newIndex == 3 && direction == "down") {
                //$("#virus-model-viewer").attr("camera-orbit", "43.2deg 130deg 0.1966m");

            }
            else if (newIndex == 3 && direction == "up") {
                $("#virus-model-viewer").attr("camera-orbit", "-200.31deg 30.24deg 1.5m");
                $("#tuchu").css("visibility", "hidden");
                $("#yellow-p").css("visibility", "hidden");
                $("#green-p").css("visibility", "visible");
                $("#purple-p").css("visibility", "hidden");
                $("#dna").css("visibility", "hidden");
            }
            else if (newIndex == 4 && direction == "down") {
                //$("#virus-model-viewer").attr("camera-orbit", "43.2deg 130deg 0.1966m");

            }
            else if (newIndex == 4 && direction == "up") {
                $("#virus-model-viewer").attr("camera-orbit", "-180.31deg 70.24deg 1.5m");
                $("#tuchu").css("visibility", "hidden");
                $("#yellow-p").css("visibility", "hidden");
                $("#green-p").css("visibility", "hidden");
                $("#purple-p").css("visibility", "visible");
                $("#dna").css("visibility", "hidden");
            }
        }

        changeCameraOrbit01_02();

        console.log("Exit");
        console.log(response.index);
        console.log(response.direction);
    })

// setup resize event
window.addEventListener("resize", scrollamaVirus.resize);