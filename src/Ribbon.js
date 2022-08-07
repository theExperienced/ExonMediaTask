import {
  Box,
  Button,
  Chip,
  Collapse,
  Grid,
  Rating,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import { makeStyles } from '@mui/styles';
import { useState } from 'react';
import Image from './assets/rami.png';
import Amazon from './assets/amazon.svg';

const useStyles = makeStyles({
  ribbon: (props) => ({
    position: 'absolute',
    display: 'flex',
    top: 0,
    left: 0,
    width: '140px',
    height: '32px',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '0 8px 8px 0',
    transform: 'translate(-6px,-50%)',
    backgroundColor: props.backgroundColor,
    '&::before': {
      content: '""',
      position: 'absolute',
      bottom: 0,
      left: 0,
      borderTop: '3px solid black',
      borderRight: '3px solid black',
      borderBottom: '3px solid transparent',
      borderLeft: '3px solid transparent',
      transform: 'translateY(6px)',
    },
  }),
  ribbonText: (props) => ({
    '&.MuiTypography-root': {
      color: props.color,
      fontSize: '16px',
      fontWeight: 600,
    },
  }),
});

const Ribbon = ({ index }) => {
  const classes = useStyles({
    color: index === 1 ? '#0B76E0' : 'white',
    backgroundColor: index === 1 ? '#D5EAFF' : '#FF5C00',
  });

  return (
    <Box className={classes.ribbon}>
      <Typography className={classes.ribbonText}>
        Best {index === 1 ? 'Choice' : 'Value'}
      </Typography>
    </Box>
  );
};

export default Ribbon;
