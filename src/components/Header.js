import React from 'react'
import {makeStyles} from "@material-ui/core/styles"
import{
    Typography,Avatar,Grid,Box} from "@material-ui/core"
import Typed from "react-typed";    
import avatar from '../avatar.jpg' ;
//CSS STYLES
const usesStyles =makeStyles(theme=> ({
    avater:{
        width:theme.spacing(15),
        height:theme.spacing(15),
        margin:theme.spacing(1)
    },
    title:{
        color:"tan"
    },
    subtitle:{
        color:"tan",
        marginBottom:"3rem"

    },
    typedContainer:{
        position:"absolute",
        top:"50%",
        left:"50%",
        transform:"translate(-50%, -50%)",
        width:"100vw",
        textAlign:"center",
        zIndex:1
    }

}))
const Header = () => {
    const classes =usesStyles(); 
    return (
       <Box className={classes.typedContainer}>
           <Grid container justify="center">
           <Avatar  className={classes.avater} src={avatar} alt="Dziri"></Avatar>
           </Grid>
           <Typography  className={classes.title} variant="h4">
              <Typed strings ={["Dziri Houcem"]} type Speed={40}/>
           </Typography>
          <br />
          
          <Typography className={classes.subtitle}variant="h5">
              <Typed 
              strings={["Web Development" ," Front-End ","Back-End","MERN Stack"]} 
              typeSpeed={50}
              backSpeed={60}
              loop
              />
             
           </Typography> 
          
          <br />
       </Box>

            
        
    )
}

export default Header
