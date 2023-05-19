function setup()
{
    video = createCapture(VIDEO);
    video.size(500,500);
    canvas = createCanvas(500,500);
    canvas.position(600,100);
    canvas.center();
    poseNet = ml5.poseNet(video, modelLoaded)
    poseNet.on('pose', gotPoses)
}

function draw()
{
    background("#32CD32");
    fill("#000000");
    textSize(difference);
    text(Ishan, 100, 160);
}

function modelLoaded()
{
    console.log('Pose Net is Initialized');
}

function gotPoses(results)
{
    if(results.length > 0)
    {
       console.log(results);
       leftWristX = results[0].pose.leftWrist.x;
       rightWristX = results[0].pose.rightWrist.x;
       difference = floor(leftWristX - rightWristX);

       console.log("leftWristX = " + leftWristX + "rightWristY = " + rightWristX);
    }
}