import React from "react"
import {Avatar, Checkbox, Grid,Paper, TextField, Typography,Link} from "@material-ui/core"
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Button from '@material-ui/core/Button';


const Login=({handleChange})=>{
   
    const paperStyle={padding:20,height:'70vh',width:300,margin:"0 auto"}
    const avatarStyle={background: 'purple'}
    const btnStyle={margin:'8px 0'}
    const labelStyle={margin:'9px 0'}
   
  
   
    return (
     <>
     <Grid>
     <Paper  style={paperStyle}>
         <Grid align="center"> 
         <Avatar style={avatarStyle}><LockOutlinedIcon/></Avatar>
     <h2>Sign In</h2>
     </Grid>
     <TextField label="Email" placeholder="Enter Email Id" type="email"fullWidth required style={labelStyle}/>
     <TextField label="Username" placeholder="Enter Username" fullWidth required style={labelStyle}/>
     <TextField label="Password" placeholder="Enter Password" type="password" fullWidth required style={labelStyle}/>
     
     <FormControlLabel
     control={
         <Checkbox
         name="checkedB"
         color="primary"
         />
     }label="Remember Me"
     />
     <Button type="submit" color="primary" variant="contained" fullWidth style={btnStyle}>Sign In</Button>
     <Typography style={{margin:'5px'}}>
         <Link href="#">
             Forgot Password?
         </Link>
     </Typography>
     <Typography > Not Registered?
         <Link href="#"onClick={()=>handleChange("event",1)}>
             Create An Account!
         </Link>
     </Typography>
     </Paper>
     </Grid>
   </>
    );
}
export default Login