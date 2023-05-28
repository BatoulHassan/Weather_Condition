import React from 'react';
import {Container} from "@material-ui/core";
import {Footer} from "../components/Footer/Footer";
import useStyles from "./styles";
import { SearhDrawer } from '../components/SearhDrawer/SearhDrawer';
import { ConvertUnit } from '../components/ConvertUnit/ConvertUnit';
import { NextDaysWeather } from '../components/NextDaysWeather/NextDays';
import { TodaysHightLight } from '../components/TodaysHightLight/TodaysHightLight';

export function Home(props) {

  const classes = useStyles();

  return (
    <Container className={classes.container}>
        <ConvertUnit unit_change = {props.unit_change} />

        <NextDaysWeather ForeTemp={props.ForeTemp}
                         ForeIcon={props.ForeIcon}
                         ForeDate={props.ForeDate}
                         unit={props.unit} />

        <TodaysHightLight windS={props.windS}
                          windD={props.windD}
                          humidity={props.humidity}
                          visibility={props.visibility}
                          pressure={props.pressure}  />

        <Footer/>
        <SearhDrawer setPosition={props.setPosition}/>
      
    </Container>
  )
}

