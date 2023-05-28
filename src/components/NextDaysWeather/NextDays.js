import React from 'react';
import {Grid, Box, Card, CardHeader, CardContent, Typography } from '@material-ui/core';
import useStyles from "./styles";
import {useTheme} from "@material-ui/core/styles";
import useMediaQuery from '@material-ui/core/useMediaQuery';

const WeatherCard = (props) => {

  const classes = useStyles();
  const theme = useTheme();
    const isSmall = useMediaQuery(theme.breakpoints.only('sm'));

  return (
    <>
       <Card className={classes.nextWeather}>
              <CardHeader className={classes.cardDate} titleTypographyProps={{variant: isSmall ? 'body2' : 'h6' }} title={props.day} />
              <Box component='img' src={require('../../images/'+props.day_weath+'.png')} alt='weather Condition' className={classes.imageIcon} />
              <CardContent className={classes.cardContent}>
                <Typography variant='body2' >{props.max_temp} ْ {props.unit}</Typography>
                <Typography variant='body2' >{props.min_temp} ْ {props.unit}</Typography>
              </CardContent>
            </Card>
    </>
    )
  }

export const NextDaysWeather = ({ForeTemp, ForeIcon, ForeDate, unit}) => {

  const classes = useStyles();
  const theme = useTheme();
  const isSmall = useMediaQuery(theme.breakpoints.down('sm'));

  const Temp = ForeTemp;
  const Icon = ForeIcon;
  const Date = ForeDate

  return (
    <Grid container spacing={isSmall ? 3 : 1} justifyContent='space-between' className={classes.grid} >
      
        <Grid item lg={2} md={4} sm={6} xs={12} >
           <WeatherCard day={"Tomorrow"} day_weath={Icon[0]} max_temp={Temp[0].max} min_temp={Temp[0].min} unit={unit}/>
        </Grid>

        <Grid item lg={2} md={4} sm={6} xs={12}>
           <WeatherCard day={Date[1]} day_weath={Icon[1]} max_temp={Temp[1].max} min_temp={Temp[1].min} unit={unit} />
        </Grid>

        <Grid item lg={2} md={4} sm={6} xs={12}>
           <WeatherCard day={Date[2]} day_weath={Icon[2]} max_temp={Temp[2].max} min_temp={Temp[2].min} unit={unit} />
        </Grid>

        <Grid item lg={2} md={4} sm={6} xs={12}>
           <WeatherCard day={Date[3]} day_weath={Icon[3]} max_temp={Temp[3].max} min_temp={Temp[3].min} unit={unit} />
        </Grid>

        <Grid item lg={2} md={4} sm={6} xs={12}>
           <WeatherCard day={Date[4]} day_weath={Icon[4]} max_temp={Temp[4].max} min_temp={Temp[4].min} unit={unit} />
        </Grid>
    
    </Grid>
   )
}


