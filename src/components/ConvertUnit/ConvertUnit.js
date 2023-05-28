import React from 'react'
import{ Box, IconButton} from "@material-ui/core";
import useStyles from "./styles";

export const ConvertUnit = (props) => {

    const classes = useStyles();

  return (
       <Box className={classes.tempButton}>
         <IconButton onClick={props.unit_change}> ْ C</IconButton>
         <IconButton onClick={props.unit_change}> ْ F</IconButton>
       </Box>
  )
}

