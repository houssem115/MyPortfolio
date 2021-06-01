import React from 'react'
import Navbar from './Navbar'
import {makeStyles , withStyles} from "@material-ui/core/styles"
import{Typography,Box,Grid,TextField ,Button} from "@material-ui/core"
    import SendIcon from "@material-ui/icons/Send"
    import Typed from "react-typed";  

    const useStyles= makeStyles(theme=>({
        form:{
            top:"50%",
            left:"50%",
            transform:"translate(-50%, -50%)",
            position:"absolute",
        },
        button:{
            marginTop:"1rem",
            color:"tomato",
            borderColor:"tomato",
        }
    }))
    const InputField = withStyles({
        root:{
            "& label.Mui-focused":{
                color:"tomato"
            },
            "& label":{
                color:"tan"
            },
            "& .MuiOutlinedInput-root":{
                "& fieldset":{
                borderColor: "tan",
            },

            "&:hover fieldset":{
                borderColor: "tan",  
            },

            "&.Mui-focused fieldset":{

                borderColor: "tan",
            }

            },
        },
    })(TextField);

const Contact = () => {
    const classes=useStyles()
    return (
        <Box component="div" style={{ background:"#233",height:"100vh"}}>
        <Navbar/>
        <Grid container justify="center">
        <Box> <Typography  className={classes.title} variant="h5" style={{color:"tan",marginTop:"8px"}}>
              <Typed strings ={["Tel: 95 120 822                ","E-mail:houcemdzr@gmail.com                   "]} 
               typeSpeed={250}
               backSpeed={200}
               loop/>
           </Typography>
           </Box>
           </Grid>
        <Grid container justify="center">
            <Box component="form" className={classes.form}>
                <Typography variant ="5" 
                style={{color:"tomato",
                textAlign:"center",
                textTransform:"uppercase",
                }}>
                 hire or contact me...
               
                </Typography>
                
                <InputField 
                fullWidth={true}
                label="Name"
                variant="outlined" 
                inputProps={{style:{ color :"white"}}}
                margin="dense"
                size="medium"
                >
                </InputField>
               <br /> 
                <InputField 
                fullWidth={true}
                label="Email"
                variant="outlined"
                inputProps={{style:{ color :"white"}}}
                margin="dense"
                size="medium">
                </InputField>
                <br />
                <InputField 
                fullWidth={true}
                label="Your Message"
                variant="outlined"
                inputProps={{style:{ color :"white"}}}
                margin="dense"
                size="medium">
                </InputField>
               <br/>
               <Button  className={classes.button} variant="outlined" fullWidth={true} endIcon={<SendIcon/>}>
                 contact me
               </Button>
            </Box>

        </Grid>
        </Box>
    )
}

export default Contact
