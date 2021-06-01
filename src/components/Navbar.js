import React,{useState} from 'react'
import {Link} from "react-router-dom"  
import CardMembershipIcon from '@material-ui/icons/CardMembership';
import {makeStyles} from '@material-ui/core/styles';
import{
    AppBar,Toolbar,LisItem,IconButton,ListItemText,Avatar,
    Divider,List,Typography,Box, ListItemIcon, ListItem} 
from "@material-ui/core";
import MobilRigthMenuSlder from "@material-ui/core/Drawer"
import{ArrowBack,AssignmentInd,Home,Apps,ContactMail} from "@material-ui/icons"
import avatar from '../avatar.jpg' 
import Footer from './Footer';
import MediaCard from './Cerif';

// CSS STYLES
const useStyles =makeStyles(theme=>({
    menuSliderContainer:{
        width:250,
        background:"#511",
        height:"100%",
        
    },
    avatar:{
        display:"block",
        margin :"0.5rem auto",
        width: theme.spacing(13),
        height: theme.spacing(13)
    },
    listItem: {
        color:"tan"
    }

}));

const menuItems=[
    {
        listIcon: <Home/>,
        listText:"Home",
        listPath:"/"
    },
    {
        listIcon: <AssignmentInd/>,
        listText:"Resume",
        listPath:"/resume"
    },
    {
        listIcon: <Apps/>,
        listText:"Portfolio",
        listPath:"/portfolio"
    },
    {
        listIcon: <ContactMail/>,
        listText:"Contact",
        listPath:"/contact"
    },
    
]
const Navbar = () => {
    const [state,setState]=useState({
        rigth:false
    })
    const toggleSlider=((slider , open)=>() => {
setState({...state,[slider]: open });
    });

    const classes = useStyles();
    const sideList= slider =>(
        <Box className={classes.menuSliderContainer} 
        component="div"
        onClick={toggleSlider(slider,false)}>
        <Avatar className={classes.avatar} src={avatar} alt="DZIRI"/>
        <Divider/>
        <List>
            {menuItems.map((lsItem, key)=>(
             <ListItem button key={key} component={Link} to={lsItem.listPath}>
            <ListItemIcon className={classes.listItem}>
             {lsItem.listIcon}
            </ListItemIcon>
            <ListItemText className={classes.listItem} 
             primary={lsItem.listText}
            />
            </ListItem>
            ))}
            
        </List>
        </Box> 
    )
    return (
       <>
      
        <Box component="nav">
            <AppBar position='static'style={{background:"#222"}}>
                <Toolbar>
                    <IconButton onClick={toggleSlider("right",true)}>
                    <ArrowBack style={{color:"tomato"}}>

                    </ArrowBack>
                    </IconButton>
                    <Typography variant="h5" style={{ color: "tan"}}>
                       Portfolio
                      <MobilRigthMenuSlder 
                      anchor="right"
                      open={state.right}
                         
                          onClose={toggleSlider("right", false)}
                          >
                          {sideList("right")}
                          <Footer/>
                          </MobilRigthMenuSlder> 
                        </Typography>
                </Toolbar>
            </AppBar>
        </Box>
        </>
    )
}

export default Navbar
