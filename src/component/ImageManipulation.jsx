import React, { useState } from 'react'
import cat from '../images/cat.jpg'
function ImageManipulation() {
const [increaseHeight,setIncreseHeight]=useState(200);
// const [decreaseHeight,setDecreaseHeight]=useState(200);
const [increaseWidth,setIncreaseWidth]=useState(200);
// const [decreaseWidth,setDecreaseWidth]=useState(200);
const [rotate,setRotate]=useState(0);
const [red,setRed]=useState(0);
const [green,setGreen]=useState(0);
const [blue,setBlue]=useState(0);


function increasecatHeight(){
    setIncreseHeight(increaseHeight+20);
}
function decreasecatHeight(){
    setIncreseHeight(increaseHeight-20);
}
function increasecatWidth(){
    setIncreaseWidth(increaseWidth+20);
}
function decreasecatWidth(){
    setIncreaseWidth(increaseWidth-20);
}
function setcatImage(){
    setRotate(rotate+20);
}

function setColor(){
    setRed(Math.random()*255);
    setGreen(Math.random()*255);
    setBlue(Math.random()*255);
}

    return (
    <div style={{border:'10px solid blue'}}>
<div style={{ border:'2px solid red',backgroundColor:`rgb(${red},${green},${blue})` }} height={increaseHeight}>
<img src={cat} height={increaseHeight} width={increaseWidth}  style={{transform:`rotate(${rotate}deg)`}}/>
</div>

<div>

<button onClick={increasecatHeight}>increaseHeight</button>
<button onClick={decreasecatHeight}>decreaseHeight</button>
<button onClick={increasecatWidth}>increaseWidth</button>
<button onClick={decreasecatWidth}>decreaseWidth</button>
<button onClick={setColor}>ChangeBackgroundColor</button>
<button onClick={setcatImage}>RotateImage</button>
</div>


    </div>
  )
}

export default ImageManipulation