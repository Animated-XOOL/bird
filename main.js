noseX=0;
noseY=0;

function preload() {
  clown_nose = loadImage('bird.png');
}

function setup() {
  canvas = createCanvas(700, 400);
  canvas.center();
  video = createCapture(VIDEO);
  video.size(300, 300);
  video.hide();

  poseNet = ml5.poseNet(video, modelLoaded);
  poseNet.on('pose', gotPoses);
}

function modelLoaded() {
  console.log('PoseNet has been synced with the motion of thy face');
}

function gotPoses(results)
{
  if(results.length > 0)
  {
    console.log(results);
    noseX = results[0].pose.nose.x-0;
    noseY = results[0].pose.nose.y-0;
  }
}

function draw() {
  image(video, 0, 0, 700, 400);
  image(clown_nose, noseX, noseY, 200, 200);
}

function take_snapshot(){    
  save('me_and_my_bird.png');
}
