import React from 'react';
import { Typography } from '@material-ui/core';
import useStyles from "./styles";

export function Footer() {

  const classes = useStyles();

  return (
    <Typography variant='body2' className={classes.footer}>created by Batoul Hassan - devchallenges.io</Typography>
  )
}
