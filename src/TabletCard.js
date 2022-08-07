import {
  Button,
  Grid,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import { makeStyles } from '@mui/styles';
import Image from './assets/tv.png';
import Amazon from './assets/amazon.svg';

const useStyles = makeStyles((theme) => {
  return {
    cardContainer: {
      borderRadius: '8px',
      boxShadow: '0 0 20px rgba(0,0,0,.1)',
      backgroundColor: theme.palette.background.paper,
    },
    image: {
      width: '155px',
    },
    description: {
      '&.MuiTypography-root': {
        fontWeight: 500,
        color: '#55626E',
        lineHeight: '140%',
      },
    },
    hdSmart: {
      '&.MuiTypography-root': {
        fontSize: '14px',
        color: '#9FA9B3',
      },
    },
    viewDeal: {
      '&.MuiButton-root': {
        borderRadius: '12px',
      },
    },
    price: {
      '&.MuiTypography-root': {
        fontSize: '14px',
      },
    },
    priceOff: {
      '&.MuiTypography-root': {
        color: '#DF0923',
        fontSize: '10px',
      },
    },
    viewButton: {
      '&.MuiButton-root': {
        color: '#0B76E0',
        textTransform: 'capitalize',
        fontSize: '16px',
        borderRadius: '12px',
        lineHeight: 1,
        padding: '8px 0',
      },
    },
  };
});

const TabletCard = () => {
  const theme = useTheme();
  const queryMatch = useMediaQuery(theme.breakpoints.down('sm'));

  const classes = useStyles();

  return (
    <Grid
      container
      rowGap={2}
      sx={{ px: 2, pb: 3, pt: 4 }}
      className={classes.cardContainer}
    >
      <Grid item xs={12} alignSelf='center' textAlign='center'>
        <img src={Image} className={classes.image} />
      </Grid>
      <Grid item xs={12} align='center'>
        <img src={Amazon} />
      </Grid>
      <Grid item xs={12}>
        <Grid container align='left' rowSpacing={{ xs: '5px', sm: 0 }}>
          <Grid item xs={12}>
            <Typography className={classes.description}>
              Sony X95J 85 Inch TV: BRAVIA XR Full Array LED 4K Ultra HD Smart
            </Typography>
          </Grid>
          <Grid item xs={12} align={queryMatch && 'center'}>
            <Typography className={classes.hdSmart}>
              4K Ultra HD Smart Google
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <Grid
          container
          columnSpacing={1}
          justifyContent='start'
          alignItems='center'
        >
          <Grid item>
            <Typography className={classes.lineThroughText}>$199.00</Typography>
          </Grid>
          <Grid item>
            <Typography className={classes.priceOff}>(26% off)</Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <Button
          fullWidth
          align='center'
          variant='contained'
          className={classes.viewDeal}
        >
          View Deal
        </Button>
      </Grid>
    </Grid>
  );
};

export default TabletCard;
