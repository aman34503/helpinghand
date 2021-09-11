import React,{useState} from "react"
import './App.css';

import {useSpring,animated}from 'react-spring';


import Start from "./loginPage/Start";

function App() {
  const [flip, set] = useState(false)
  const props=useSpring({to:{opacity:1},from:{opacity:0.4}, 
    reset: true,
    reverse: flip,
    delay: 700,

    onRest: () => set(!flip),
})
  return (
    <>
    <animated.div style={props}>
      <center>
            <h1 className="heading">Helping Hands, Welcomes You!</h1>
            </center>
            </animated.div>
        <Start/>
    </>
  );
}

export default App;