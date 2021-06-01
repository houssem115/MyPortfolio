import React from 'react'
import Navbar from './Navbar'
import {Link} from "react-router-dom"  
import {makeStyles} from "@material-ui/core/styles"
import{Typography,Box,Grid,Button,Card,CardActionArea,CardActions,
CardContent,CardMedia} from "@material-ui/core"
import project1 from "../html-css-javascript-lg.jpg";
import project2 from "../javascript-fullstack.jpg"



const useStyles= makeStyles({
    mainContainer:{
       
        height:"100%"
    },
    cardContainer:{
        maxWidth:345,
        margin:"5rem auto"
    }
})

const Portfolio = () => {
    const classes =useStyles();
    return (
        <>
        <Box component="div" className={classes.mainContainer}>
        <Navbar/>
        <Grid container justify="center"alignItems="center">
           {     /*Project 1*/   }
            <Grid item xs={12} sm={8} md={6}>
            
            <Card className={classes.cardContainer}>
                <CardActionArea>
                    <CardMedia
                    component="img" alt="Project 1"
                    heigth="140"
                    image={project1}/>
                 
                   <CardContent>
                       <Typography gutterBottom variant="h5">
                        Project1
                       </Typography>
                       <Typography  variant="body2" color="textSecondary" component="p">
                       Weather App:
                       
                       </Typography>
                       </CardContent> 
                       </CardActionArea>
                       
                       <CardActions>
                          <Button size="small"color="primary">
                              <a href=" https://github.com/houssem115/Project-API.git">View</a>
                              </Button>
                              <Button size="small"color="primary">
                              <a href="https://www.loom.com/share/f1fc30e72174424785f7e440bba1b0ff">Live Demo</a>
                              </Button> 
                       </CardActions>
                
            </Card>
            </Grid>
            {     /*Project 2*/   }
            <Grid item xs={12} sm={8} md={6}>
            <Card className={classes.cardContainer}>
                <CardActionArea>
                    <CardMedia
                    component="img" alt="Project 2"
                    heigth="140"
                    image={project2}/>

                   <CardContent>
                       <Typography gutterBottom variant="h5">
                        project2
                       </Typography>
                       <Typography  variant="body2" color="textSecondary" component="p">
                       Online store application :
                       </Typography>
                       </CardContent>
                       </CardActionArea> 
                       <CardActions>
                          <Button size="small"color="primary">
                            <a href="https://github.com/houssem115/Project-MERN.git">View</a>
                              </Button>
                              <Button size="small"color="primary">
                              Live Demo
                              </Button> 
                       </CardActions>
                
            </Card>
            </Grid>
        </Grid>
        </Box>
       
        
            
        </>
    )
}

export default Portfolio
