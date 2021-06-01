import React from 'react'
import{ makeStyles } from "@material-ui/core/styles"
import {BottomNavigation,BottomNavigationAction} from "@material-ui/core"
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import DescriptionTwoToneIcon from '@material-ui/icons/DescriptionTwoTone';



const useStyles = makeStyles({
    root:{
      "& .MuiBottomNavigationAction-root":{
          minWidth:0,
          maxWidth:250,
      },
      "& .MuiSvgIcon-root":{
          fill:"tan",
          "&:hover":{
              fill:"tomato",
              fontSize:"1.8rem"
          },
      },
    },
})

const Footer = () => {
    const classes = useStyles()
    return (
        <BottomNavigation width="auto" style={{background:"#222"}}>
             <BottomNavigationAction
             className={classes.root}
            style={{padding:0}}
            icon={<a href="https://www.linkedin.com/in/houcem-dziri-550a951a3/"><LinkedInIcon/></a>}
            />
           
            
             <BottomNavigationAction
             className={classes.root}
            style={{padding:0}}
            icon={<a href="https://github.com/houssem115"><GitHubIcon/></a>}
            />

        

            <BottomNavigationAction
            className={classes.root}
           style={{padding:0}}
           icon={<a href="https://drive.google.com/file/d/16IuQyTDpiqgkNoOFkAEpldSe1i-2elQK/view?usp=sharing"><DescriptionTwoToneIcon  /></a>}
           />

           </BottomNavigation>
          
        
    )
}

export default Footer
