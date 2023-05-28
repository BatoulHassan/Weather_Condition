import { Card, CardHeader, CardContent, Typography, Grid, Box, LinearProgress } from '@material-ui/core';
import React from 'react';
import useStyles from "./styles";
import {useTheme} from "@material-ui/core/styles";
import useMediaQuery from '@material-ui/core/useMediaQuery';



const WindStatus = ({windS, windD}) => {

    const classes = useStyles();
    const theme = useTheme();
    const isSmall = useMediaQuery(theme.breakpoints.only('sm'));

    return(
        <Card className={classes.card}>
              <CardHeader title='Wind status' titleTypographyProps={{variant: isSmall ? 'body2' : 'h5' }}/>
              <CardContent className={classes.cardContent}>
                <Typography variant={isSmall ? 'h6' : 'h4'} style={{marginRight: 10}}>{windS}</Typography>
                <Typography variant='body1'>mph</Typography>
              </CardContent>
              <Typography variant='body2' align='center'>{windD} deg</Typography>
            </Card>
    )
}

const Humidity = ({humidity}) => {

    const classes = useStyles();
    const theme = useTheme();
    const isSmall = useMediaQuery(theme.breakpoints.only('sm'));

    return(
        <Card className={classes.card}>
              <CardHeader title='Humidity' titleTypographyProps={{variant: isSmall ? 'body2' : 'h5' }}/>
              <CardContent className={classes.cardContent}>
                <Typography variant={isSmall ? 'h6' : 'h4'}>{humidity} % </Typography>
              </CardContent>
              <Box className={classes.progressContainer}>
                <LinearProgress variant='determinate' value={humidity} className={classes.progress} />
              </Box>
        </Card>
    )
}

const Visibility = ({visibility}) => {

    const classes = useStyles();
    const theme = useTheme();
    const isSmall = useMediaQuery(theme.breakpoints.only('sm'));

    return(
        <Card className={classes.card}>
            <CardHeader title='Visibility'  titleTypographyProps={{variant: isSmall ? 'body2' : 'h5' }}/>
            <CardContent className={classes.cardContent}>
                <Typography variant={isSmall ? 'h6' : 'h4'} style={{marginRight: 10}}>{visibility}</Typography>
                <Typography variant='body1'>miles</Typography>
              </CardContent>
        </Card>
    )
}

const AirPressure = ({pressure}) => {

    const classes = useStyles();
    const theme = useTheme();
    const isSmall = useMediaQuery(theme.breakpoints.only('sm'));

    return(
        <Card className={classes.card}>
            <CardHeader title='Air Pressure'  titleTypographyProps={{variant: isSmall ? 'body2' : 'h5' }}/>
            <CardContent className={classes.cardContent}>
                <Typography variant={isSmall ? 'h6' : 'h4'} style={{marginRight: 10}}>{pressure}</Typography>
                <Typography variant='body1'>mb</Typography>
              </CardContent>
        </Card>
    )
}

export const TodaysHightLight = ({windS, windD, humidity, visibility ,pressure}) => {
  return (
    <>
    <Typography variant='h5' style={{marginBottom: 30, fontWeight: 600}}>Today's HightLights</Typography>
    <Grid container spacing={3}>
        <Grid item xs={12} sm={6} md={6} lg={6}>
            <WindStatus windS={windS} windD={windD}/>
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={6}>
            <Humidity humidity={humidity}/>
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={6}>
            <Visibility visibility={visibility}/>
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={6}>
            <AirPressure pressure={pressure}/>
        </Grid>
    </Grid>
    </>
  )
}
