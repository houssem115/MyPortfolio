import React from 'react';
import {makeStyles} from "@material-ui/core/styles"
import{Box,Grid,Avatar} from "@material-ui/core"
import img from '../certificat.jpg'
import img2 from "../Reactjs.jpg"
import Navbar from './Navbar';


const useStyles= makeStyles(theme=>({
    typedContainer:{
        position:"absolute",
        top:"30%",
        left:"50%",
        transform:"translate(-50%, -50%)",
        width:"100vw",
        textAlign:"center",
       
    },
    image:{
        width:theme.spacing(30),
        height:theme.spacing(30),
        margin:theme.spacing(1)
    },
}))

export default function MediaCard() {
  const classes = useStyles();

  return (
      <>
    <Navbar/>
       <Box className={classes.typedContainer}>
           
           <Grid container justify="center">
           <Avatar  className={classes.image} src={img} alt="Dziri"></Avatar>
           <Avatar  className={classes.image} src={img2} alt="Dziri"></Avatar>
           <Avatar  className={classes.image} src={img} alt="Dziri"></Avatar>
           </Grid>
           </Box>
           </>
            
)}