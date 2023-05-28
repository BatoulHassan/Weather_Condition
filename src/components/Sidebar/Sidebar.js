import React from 'react';
import { Container, Box, Typography, Button } from '@material-ui/core';
import MyLocationIcon from '@material-ui/icons/MyLocation';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import useStyles from "./styles";
import { useUIContext } from '../../ContextUi';

export const Sidebar = ({temp, city, weatherType, weatherIcon, todayDate, unit}) => {

  const classes = useStyles();
  const {setDrawerOpen} = useUIContext();

  return (
   <Container className={classes.container}>
      <Box className={classes.box}>
        <Button className={classes.searchButton} onClick={() => setDrawerOpen(true)}>Search for places</Button>
        <MyLocationIcon/>
      </Box>
      <Box
            component="img"
            alt="weather-img"
            className={classes.todayIcon}
            src={require('../../images/'+weatherIcon+'.png')} />
      <Box className={classes.todayTempContainer}>
        <Typography variant='h1'>{temp}</Typography>
        <Typography className={classes.tempUnit} variant='h4'> ْ {unit}</Typography>
      </Box>
      <Box>
        <Typography className={classes.weatherType} variant='h5'>{weatherType}</Typography>
      </Box>
      <Box className={classes.todayDateContainer}>
        <Typography variant='body2' style={{marginRight: 10}}>Today</Typography>
        <Typography variant='body2' noWrap>{todayDate}</Typography>
      </Box>
      <Box className={classes.locationContainer}>
        <LocationOnIcon fontSize='small'/>
        <Typography className={classes.location} variant='body2'>{city}</Typography>
      </Box>
    </Container>
  
    
  )
}
