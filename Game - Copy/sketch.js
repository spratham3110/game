const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, pig1,pig3;
var backgroundImg,platform;
var bird, slingshot;
var l,r;
var o1,o2,o3;
var g1,g2;

function preload() {
    backgroundImg = loadImage("sprites/bg.png");
    l = loadImage("sprites/signLeft.png");
    r = loadImage("sprites/signRight.png");

    o1 = loadImage("sprites/crate.png");
    o2 = loadImage("sprites/stone.png");
    o3 = loadImage("sprites/tree.png");

    g1 = loadImage("sprites/bush.png");
    g2 = loadImage("sprites/bush2.png");

    f1 = loadImage("sprites/food.png");
    f2 = loadImage("sprites/food2.png");

    e1 = loadAnimation("sprites/enemy/Idle (1).png",
                   "sprites/enemy/Idle (2).png",
                   "sprites/enemy/Idle (3).png",
                   "sprites/enemy/Idle (4).png",
                   "sprites/enemy/Idle (5).png",
                   "sprites/enemy/Idle (6).png",
                   "sprites/enemy/Idle (7).png",
                   "sprites/enemy/Idle (8).png",
                   "sprites/enemy/Idle (9).png",
                   "sprites/enemy/Idle (10).png");

    p1 = loadAnimation("sprites/player/Idle (1).png",
                       "sprites/player/Idle (2).png",
                       "sprites/player/Idle (3).png",
                       "sprites/player/Idle (4).png",
                       "sprites/player/Idle (5).png",
                       "sprites/player/Idle (6).png",
                       "sprites/player/Idle (7).png",
                       "sprites/player/Idle (8).png",
                       "sprites/player/Idle (9).png",
                       "sprites/player/Idle (10).png",
                       "sprites/player/Idle (11).png",
                       "sprites/player/Idle (12).png",
                       "sprites/player/Idle (13).png",
                       "sprites/player/Idle (14).png",
                       "sprites/player/Idle (15).png");

    p2 = loadAnimation("sprites/player/Run (1).png",
                       "sprites/player/Run (2).png",
                       "sprites/player/Run (3).png",
                       "sprites/player/Run (4).png",
                       "sprites/player/Run (5).png",
                       "sprites/player/Run (6).png",
                       "sprites/player/Run (7).png",
                       "sprites/player/Run (8).png",
                       "sprites/player/Run (9).png",
                       "sprites/player/Run (10).png",
                       "sprites/player/Run (11).png",
                       "sprites/player/Run (12).png",
                       "sprites/player/Run (13).png",
                       "sprites/player/Run (14).png",
                       "sprites/player/Run (15).png");
}

function setup(){
    var canvas = createCanvas(1200,1000);
    engine = Engine.create();
    world = engine.world;

    ground1 = new Ground(600,height-15,1200);
    ground2 = new Ground2(670,height*3/4-15,1060);
    ground3 = new Ground1(530,height/2-15,1060);
    ground4 = new Ground2(670,height*1/4-15,1060);

    obstacle1 = createSprite(410,180);
    obstacle1.addImage(o1);
    obstacle2 = createSprite(850,680);
    obstacle2.addImage(o1);
    obstacle3 = createSprite(400,442);
    obstacle3.addImage(o2);
    obstacle4 = createSprite(650,447);
    obstacle4.addImage(o3);
    obstacle5 = createSprite(700,930);
    obstacle5.addImage(o1);

    grass1 = createSprite(710,185);
    grass1.addImage(g1);
    grass1.scale = 1.5;
    grass2 = createSprite(710,685);
    grass2.addImage(g2);
    grass2.scale = 1.5;
    grass3 = createSprite(710,935);
    grass3.addImage(g2);
    grass3.scale = 1.5;
    grass4 = createSprite(410,685);
    grass4.addImage(g1);
    grass4.scale = 1.5;
    grass5 = createSprite(410,185);
    grass5.addImage(g1);
    grass5.scale = 1.5;
    grass6 = createSprite(910,935);
    grass6.addImage(g1);
    grass6.scale = 1.5;
    grass7 = createSprite(510,435);
    grass7.addImage(g1);
    grass7.scale = 1.5;

    enemy1 = createSprite(210, 410);
    enemy1.addAnimation("idle",e1);
    enemy1.scale = 0.25;
    enemy2 = createSprite(110, 410);
    enemy2.addAnimation("idle",e1);
    enemy2.scale = 0.25;
    enemy3 = createSprite(310, 410);
    enemy3.addAnimation("idle",e1);
    enemy3.scale = 0.25;

    food1 = createSprite(180,952);
    food1.addImage(f1);
    food1.scale = 0.75;
    food2 = createSprite(810,702);
    food2.addImage(f2);
    food2.scale = 0.75;
    food3 = createSprite(760,452);
    food3.addImage(f1);
    food3.scale = 0.75;
    food4 = createSprite(970,202);
    food4.addImage(f2);
    food4.scale = 0.75;

    player = createSprite(400,915);
    player.addAnimation("idle",p1);
    player.scale = 0.25
    right = createSprite(250,185,70,70);
    right.addImage(r);
    left = createSprite(950,435,70,70);
    left.addImage(l);
    rightA = createSprite(250,685,70,70);
    rightA.addImage(r);


}

function draw(){
    background(backgroundImg);
    Engine.update(engine);

    ground1.display();
    ground2.display();
    ground3.display();
    ground4.display();


    if(keyIsDown(RIGHT_ARROW)){
        player.addAnimation("run",p2);
        player.x +=10
    }

    if(keyIsDown(LEFT_ARROW)){
        player.x -=10
    }

      player.collide(obstacle5)

    drawSprites();
}