import React, { useState } from 'react'
import { Drawer, Box, TextField, IconButton, Button} from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import useStyles from "./style";
import { useUIContext } from '../../ContextUi';

//const API_KEY= "6930215e0e73f413a76aa5dbf275ac25";
const API_KEY = process.env.REACT_APP_Weather_Api;

export const SearhDrawer = ({setPosition, positionHandler, showPosition}) => {

    const classes = useStyles();
    const {drawerOpen, setDrawerOpen} = useUIContext();
    const [searchValue, setSearchValue] = useState("");

    const fetch_City = async () => {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&appid=${API_KEY}&units=metric`;

      if (searchValue !== "") {
        try{
           const response = await fetch(url);
           const data = await response.json();
           const LAT = data.coord.lat;
           const LON = data.coord.lon;
           setPosition({latitude:LAT,longitude:LON});
           setSearchValue("");
           setDrawerOpen(false);
        }
        catch(err){
          console.log(err)
        }
      } else {
        console.log("Please enter a city name")
      }
    }

    const handleClick = (e) => {
      e.preventDefault();
      fetch_City();
    }

  return (
    <>
      <Drawer  classes={{
                 paper: classes.drawerPaper,
             }}
             open={drawerOpen}
      > 
       <Box className={classes.closeButtonContainer}>
            <IconButton  className={classes.closeButton} onClick={() => setDrawerOpen(false)}>
                <CloseIcon style={{color:'white'}}/>
            </IconButton>
        </Box>
       
         <Box className={classes.box}>
           <TextField
                      className={classes.textField}
                      label="Search for places"
                      variant="filled" value={searchValue}
                      onChange={(e) => setSearchValue(e.target.value)} />
           <Button onClick={handleClick} >Search</Button>
        </Box>
      </Drawer>
    </>
  )
}
