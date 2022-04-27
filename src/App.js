import {useState, useEffect} from 'react';
import React from 'react';




const soundone = [
  {
    keyCode: 81,
    keyTrigger: 'Q',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3'
  },
  {
    keyCode: 87,
    keyTrigger: 'W',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3'
  },
  {
    keyCode: 69,
    keyTrigger: 'E',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3'
  },
  {
    keyCode: 65,
    keyTrigger: 'A',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3'
  },
  {
    keyCode: 83,
    keyTrigger: 'S',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3'
  },
  {
    keyCode: 68,
    keyTrigger: 'D',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3'
  },
  {
    keyCode: 90,
    keyTrigger: 'Z',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3'
  },
  {
    keyCode: 88,
    keyTrigger: 'X',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3'
  },
  {
    keyCode: 67,
    keyTrigger: 'C',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3'
  }
];
 

 
 

 function App(){

 const [pressKey, setPressKey] = useState("");

 
 useEffect(()=>{
  	 document.addEventListener('keydown', (event)=>{
  	 	playAudio(event.key.toUpperCase());
  	 });},[]);

    function playAudio(selector) {
    	const audio = document.getElementById(selector);
        audio.CurrentTime=0;
    	audio.play();  
    	setPressKey(selector + " Is Playing");	
        }
        
    
  return (
    <div className="App">
    
     <div className="container" id="drum-machine">
    <div><h2>Drum Machine</h2></div>
     <div id="display" className="card p-3 mb-2 bg-success">
     <p>{pressKey}</p>
     </div>
     
     
     {soundone.map((sound)=>(
       <div className= "btn btn-warning p-4 m-3 drum-pad"
        id={sound.url} onClick={()=>{playAudio(sound.keyTrigger)}}>
       <div className="text"> {sound.keyTrigger}</div>
         <audio src={sound.url} className="clip" id={sound.keyTrigger} />
             </div>     
             ))}
         
     </div>
    </div>
  );
}

export default App;
