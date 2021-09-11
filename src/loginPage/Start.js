import React,{useState} from "react"
import SignInOutContainer from "./combine";
import Button from '@material-ui/core/Button';
import  Fade  from "@material-ui/core/Fade";

const Start=()=>{

    const[checked,setChecked]=useState(false);
      const handleChange=()=>{
          setChecked((prev)=>!prev);
      };
    return (
        <>
        <div className="getStarted">
        <Button variant="outlined" color="secondary" checked={checked} onClick={handleChange} >Get Started</Button>
        </div>
        
       <Fade in={checked}>
           <SignInOutContainer/>
           </Fade>
      </>
    )
}
export default Start;