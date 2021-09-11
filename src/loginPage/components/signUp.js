import React from  "react"
import {Avatar, Grid,Paper, TextField, Typography,Button,Checkbox} from "@material-ui/core"
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
const SignUp=()=>{
    const paperStyle={padding:20,width:300,margin:'0px auto'}
    const headerStyle={margin:0}
    const avatarStyle={backgroundColor:'purple'}
    const labelStyle={margin:'9px 0'}
    const btnStyle={margin:'8px 0'}
     const marginTop={margin:'5px'}   
        
    return (
        <Grid>
            <Paper  style={paperStyle}>
                <Grid align="center">
                    <Avatar style={avatarStyle}>
                        <AddCircleOutlineIcon/>
                    </Avatar>
                   
                <h2 style={headerStyle}>Sign Up</h2>
                <Typography variant='caption' >Create an Account!</Typography>
                </Grid>
                
                    <TextField fullWidth required label="First Name" placeholder="Enter First Name" style={labelStyle}/>
                    <TextField fullWidth required label="Last Name" placeholder="Enter Last Name"style={labelStyle}/>
                    <TextField fullWidth required label="Email Id"type="email" placeholder="Enter Email Id"style={labelStyle}/>

               <FormControl component="fieldset" style={marginTop}>
  <FormLabel component="legend">Gender</FormLabel>
  <RadioGroup aria-label="gender" name="gender1" style={{display:'initial'}} >
    <FormControlLabel value="female" control={<Radio />} label="Female" />
    <FormControlLabel value="male" control={<Radio />} label="Male" />
    </RadioGroup>
    </FormControl>    
    <TextField fullWidth required label="Password" type="password"placeholder="Enter your Password"style={labelStyle}/>
    <TextField fullWidth  required label="Confirm Pasword" type="password" placeholder="Confirm your Password"style={labelStyle}/>
   
    <FormControlLabel
     control={
         <Checkbox
         name="checkedB"
         color="secondary"
         />
     }label="Accept the terms and conditions"
     />

    <Button type="submit" color="primary" variant="contained"  fullWidth style={btnStyle}>Sign Up</Button>
            </Paper>
        </Grid>
    )
}
export default SignUp;