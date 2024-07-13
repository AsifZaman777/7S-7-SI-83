import zim from "/zim.js";

const {
  Frame,
  Circle,
  Button,
  Label,
  Rectangle,
  GlowEffect,
  Pic,
  Ticker,
  Emitter,
  Sprite,
} = zim;

const canvasWidth = 1920;
const canvasHeight = 1080;

new Frame(
  zim.FIT,
  canvasWidth,
  canvasHeight,
  "white",
  "#333",
  ready,
  interstellar,
  "assets/",
  new zim.Waiter()
);

function ready() {
  const bg =new Pic("assets/images/bg2.png").center();
  const blackLayer = new Rectangle({
    width: 1920,
    height: 1080,
    color: "black",
  }).center();
  blackLayer.alpha = 0;
  const waterLater = new Pic("assets/images/drop.png").centerReg().mov(60,40);
  waterLater.scale = 0.2;

  const waterSlide = new Pic("assets/images/waterLayer.png").centerReg().mov(0,0);
  waterSlide.alpha = 0.08;
  waterSlide.scale = 1;


  

    let inputPanelX = 700;
    let inputPanelY = -300;

    STYLE = {sound:true, vertical:false}; //slider style

    const inputPanel = new Rectangle(
        {
            width: 300,
            height: 450,
            color: "#f8f9f5",
            corner: 20,
            borderColor: "black",
            borderWidth: 3,
        }
    ).center().mov(inputPanelX, inputPanelY);

    //slider start
    const SliderLabel = new Label({
        text: "Temperature",
        color: "#112233",
        size: 30,
    }).center().mov(inputPanelX, inputPanelY-190);

    const slider = new Slider({
        min: 10,
        max: 50,
        currentValue: 10,
        barWidth: 3,
        step:10,
        vertical: true,
    }).center();

    slider.center().mov(inputPanelX-100, inputPanelY+10);
    

    const meterDisplay = new Rectangle({
        width: 100,
        height: 50,
        color: "#f8f9f5",
        corner: 8,
        borderColor: "gray",
        borderWidth: 2,
    }).center().mov(inputPanelX+50, inputPanelY+100);

    const meterLabel = new Label({
        text: "10 °C",
        color: "#112233",
        size: 30,
    }).center(meterDisplay).mov(0,0);

    
    const temperatureLine = new Line({
      length: 1,
      color: red,
      thickness: 9,
    })
      .center()
      .rot(-90)
      .mov(745, -250);

   slider.on("change", () => {
        meterLabel.text = parseInt(slider.currentValue) + "°C";
       

        //tempLine logic

        if (slider.currentValue >= 20) {
          temperatureLine.animate({
            target: temperatureLine,
            props: { length: 120 },
            time: 10,
            rewind: false,
            loop: false,
            ease: "easeInOut",
            call: () => {
             
            }
          });
        } else {
          temperatureLine.animate({
            target: temperatureLine,
            props: { length: 20 },
            time: 15,
            rewind: false,
            loop: false,
            ease: "easeInOut",
           
          });
        }
        
    });


    
    const thermo = new Pic("assets/images/thermometer.png").centerReg().mov(745,-310);


  waterLater.animate({
    target: waterLater,
    props: { y:700, scale: 1.5, alpha: 0},
    time: 4,
    loop: true,
    ease: "quadIn",

  });


  const waterLayerPath = new Squiggle(
    {
      points:[[-4.3,-63.2,0,0,-26.5,-34,26.5,34],[103.2,13.7,0,0,-38.7,-20.7,38.7,20.7],[179.4,90.7,0,0,-37.5,-21.9,37.5,21.9],[330.8,169.5,0,0,1.2,-20,-1.2,20]]
    }
  )
  waterLayerPath.alp(0);

  var waterLayerBeads = new Beads({
    path: waterLayerPath,
    angle:0,
    count:100,
    obj:waterSlide,
  }).center().mov(225,250);

  waterLayerBeads.beads.animate({
    props: { path: waterLayerPath,
       orient: false,
       scale: 1.8, alpha: 0.08
      },
    loop: true,
    time: 2,
    ease: "quadInOut",
});


const cloud1 = new Pic("assets/images/cloud1.png").centerReg().mov(0,-300);
const cloud2 = new Pic("assets/images/cloud2.png").centerReg().mov(-400,-300);
const cloud3 = new Pic("assets/images/cloud3.png").centerReg().pos(-400,0);
cloud1.alpha = 0;
cloud2.alpha = 0;








///rain



let waterEmitter1 = new Emitter({
    width: 1, // Emitting horizontally
    height: 100, // Line height for horizontal emission
    vertical:true,
    obj: new Circle(3, "black").alp(1).center().mov(-1490,-150)
    .effect(new GlowEffect({color:white, blurX:1, blurY:20, knockout:true, strength: 1})),
    gravity: 0,
    angle: {min: 100, max: 130}, // Adjusted for horizontal emission
    animation: {props: {rotation:0}, time: {min: 1, max: 5}},
    interval: 0.4/10,
    force: {min: 1, max: 4},
    sinkForce: {min: 3, max: 6},
    life: 3,
    num: 2,
  }).center(cloud3).mov(60,60);

  let waterEmitter2 = new Emitter({
    width: 1, // Emitting horizontally
    height: 100, // Line height for horizontal emission
    vertical:true,
    obj: new Circle(3, "black").alp(1).center().mov(-1490,-150)
    .effect(new GlowEffect({color:white, blurX:1, blurY:20, knockout:true, strength: 1})),
    gravity: 0,
    angle: {min: 100, max: 130}, // Adjusted for horizontal emission
    animation: {props: {rotation:0}, time: {min: 1, max: 5}},
    interval: 0.4/10,
    force: {min: 1, max: 4},
    sinkForce: {min: 3, max: 6},
    life: 3,
    num: 2,
  }).center(cloud3).mov(60,60);

  let waterEmitter3 = new Emitter({
    width: 1, // Emitting horizontally
    height: 100, // Line height for horizontal emission
    vertical:true,
    obj: new Circle(3, "black").alp(1).center().mov(-1490,-150)
    .effect(new GlowEffect({color:white, blurX:1, blurY:20, knockout:true, strength: 1})),
    gravity: 0,
    angle: {min: 100, max: 130}, // Adjusted for horizontal emission
    animation: {props: {rotation:0}, time: {min: 1, max: 5}},
    interval: 0.4/10,
    force: {min: 1, max: 4},
    sinkForce: {min: 3, max: 6},
    life: 3,
    num: 2,
  }).center(cloud3).mov(80,30);

 

const waterCycle = ()=>
{
  
  slider.on("change", () => {
    blackLayer.animate({
      target: blackLayer,
      props: { alpha: slider.currentValue/150},
      time: 0.2,
      loop: false,
      ease: "quadIn",
    });
  });
  
    const consoleTicker = Ticker.add(() => {

      if(temperatureLine.length> 40)
      {
       
        cloud3.animate({
          target: cloud3,
          props: { x:1200},
          time: 40,
          loop: false,
          rewind: true,
          ease: "quadIn",
          call: () => {
            waterEmitter1.addTo(Frame.stage);
            waterEmitter2.addTo(Frame.stage);
            waterEmitter3.addTo(Frame.stage);

          }
    
        });
      }

      if(temperatureLine.length> 20)
      {
        cloud1.animate({
          target: cloud1,
          props: { alpha: 1},
          time: 0.25,
          loop: false,
          ease: "quadIn",
    
        });

        cloud2.animate({
          target: cloud2,
          props: { alpha: 1},
          time: 0.25,
          loop: false,
          ease: "quadIn",
    
        });
      }

      else
      {
        cloud1.animate({
          target: cloud1,
          props: { alpha: 0},
          time: 0.2,
          loop: false,
          ease: "quadIn",
    
        });

        cloud2.animate({
          target: cloud2,
          props: { alpha: 0},
          time: 0.2,
          loop: false,
          ease: "quadIn",
      });
    }


    });
}
waterCycle();
  

  

  
}
