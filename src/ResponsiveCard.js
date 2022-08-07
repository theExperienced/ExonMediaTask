import { useState } from 'react';
import {
  Button,
  Chip,
  Collapse,
  Grid,
  Rating,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { makeStyles } from '@mui/styles';
import Image from './assets/tv.png';
import Amazon from './assets/amazon.svg';

const useStyles = makeStyles((theme) => {
  const flexGrows = ['auto', 2, 4, 1, 3];
  const cardItem = {};
  for (let i = 0; i < 5; i++) {
    if (i === 3) {
      cardItem[`&:nth-child(${i + 2})`] = {
        [theme.breakpoints.not('xs')]: {
          flexGrow: flexGrows[i],
        },
      };
    } else
      cardItem[`&:nth-child(${i + 1})`] = {
        flexGrow: flexGrows[i],
      };
  }

  return {
    cardContainer: {
      position: 'relative',
      borderRadius: '8px',
      boxShadow: '0 0 20px rgba(0,0,0,.1)',
      backgroundColor: theme.palette.background.paper,
      [theme.breakpoints.up('sm')]: {
        minHeight: '132px',
      },
    },
    cardItem: {
      flexBasis: 0,
      textAlign: 'center',
      ...cardItem,
    },
    index: {
      '& > .MuiTypography-root': {
        fontWeight: 700,
        color: '#55626E40',
      },
      [theme.breakpoints.down('lg')]: {
        position: 'absolute',
        top: 0,
        right: 0,
        transform: 'translate(-30%, -50%)',
        '& > .MuiTypography-root': {
          fontSize: '50px',
        },
      },
      [theme.breakpoints.down('sm')]: {
        '& > .MuiTypography-root': {
          fontSize: '64px',
        },
      },
      [theme.breakpoints.up('lg')]: {
        '& > .MuiTypography-root': {
          fontSize: '80px',
        },
      },
    },
    image: {
      [theme.breakpoints.up('xs')]: {
        width: '160px',
      },
      [theme.breakpoints.up('sm')]: {
        width: '118px',
      },
      [theme.breakpoints.up('lg')]: {
        width: '202px',
      },
    },
    description: {
      '&.MuiTypography-root': {
        color: '#55626E',
        fontWeight: 600,
        lineHeight: '140%',

        [theme.breakpoints.up('sm')]: {
          paddingTop: '0px',
        },
      },
    },
    sony: {
      '&.MuiTypography-root': {
        fontSize: '14px',
        color: '#626E79',
        [theme.breakpoints.only('md')]: {
          fontSize: '12px',
        },
      },
    },
    chip: {
      '&.MuiChip-root': {
        fontSize: '12px',
        borderRadius: '4px',
        padding: '6px 0',
        lineHeight: 1,
      },
    },
    ratingContainer: {
      [theme.breakpoints.down('sm')]: {
        position: 'absolute',
        top: 0,
        right: 0,
        transform: 'translate(10px,120%)',
      },
    },
    ratingLabel: {
      '&.MuiTypography-root': {
        fontSize: '32px',
        fontWeight: 700,
        color: '#55626E',
        [theme.breakpoints.down('sm')]: {
          fontSize: '24px',
        },
        [theme.breakpoints.down('lg')]: {
          fontSize: '20px',
        },
      },
    },
    rating: {
      transformOrigin: 'center',
      [theme.breakpoints.down('xl')]: {
        transform: 'scale(.7,.7)',
      },
      [theme.breakpoints.down('sm')]: {
        transform: 'scale(.45,.45)',
      },
      '& svg': {
        stroke: '#0B76E0',
        fill: '#0B76E0',
      },
    },
    viewDealContainer: {
      [theme.breakpoints.up('sm')]: {
        transform: 'translateY(24%)',
      },
    },
    viewDeal: {
      '&.MuiButton-root': {
        borderRadius: '12px',
      },
    },
    onAmazon: {
      '&.MuiTypography-root': {
        paddingTop: '3px',
        fontSize: '12px',
        [theme.breakpoints.not('md')]: {
          fontSize: '14px',
        },
      },
    },
    showMoreButton: {
      '&.MuiButton-root': {
        color: '#55626E',
        textTransform: 'capitalize',
        fontSize: '12px',
        padding: 0,
        [theme.breakpoints.not('md')]: {
          fontSize: '14px',
        },
      },
    },
    collapseInfoContainer: { paddingTop: '10px' },
    infoList: {
      '& > .MuiTypography-root': {
        fontSize: '12px',
        [theme.breakpoints.only('lg')]: {
          fontSize: '14px',
        },
      },
    },
    mainHighlights: {
      '&.MuiTypography-root': {
        fontSize: '18px',
        fontWeight: 700,
      },
    },
    price: {
      '&.MuiTypography-root': {
        fontSize: '14px',
      },
    },
    lineThroughText: {
      '&.MuiTypography-root': {
        color: '#9FA9B3',
        fontSize: '14px',
        textDecoration: 'line-through',
      },
    },
    priceOff: {
      '&.MuiTypography-root': {
        color: '#DF0923',
        fontSize: '10px',
      },
    },
    amazonLogo: {
      [theme.breakpoints.up('lg')]: {
        transform: 'translateY(15px)',
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

const Card = ({ index }) => {
  const [isExpanded, setExpanded] = useState(false);
  const theme = useTheme();
  const queryMatch = useMediaQuery(theme.breakpoints.down('sm'));

  const classes = useStyles();

  return (
    <Grid
      container
      alignItems='center'
      justifyContent={'flex-end'}
      columnGap={{ xs: 0, sm: 2 }}
      rowGap={{ xs: 1, sm: 2 }}
      sx={{
        p: {
          xs: '3rem 20px 12px',
          sm: '4px 16px 12px',
          md: '4px 12px 12px',
          lg: '7px 12px 12px',
        },
      }}
      className={classes.cardContainer}
    >
      {/* {index < 3 && <Ribbon index={index} />} */}
      <Grid
        item
        xs={queryMatch && 12}
        className={`${classes.cardItem} ${classes.index}`}
      >
        <Typography align='center'>
          {index < 10 ? '0' + index : index}
        </Typography>
      </Grid>
      <Grid
        item
        alignSelf='center'
        // sx={{ pr: { xs: 2 } }}
        order={{ xs: -2, sm: 0 }}
        className={classes.cardItem}
        // textAlign={queryMatch && 'right'}
      >
        <img src={Image} alt='' className={classes.image} />
      </Grid>
      <Grid item xs={queryMatch && 12} className={classes.cardItem}>
        <Grid
          container
          align='left'
          alignContent='start'
          rowSpacing={{ xs: '5px', sm: 0 }}
        >
          <Grid item xs={12}>
            <Typography className={classes.description}>
              Sony X95J 85 Inch TV: BRAVIA XR Full Array LED 4K Ultra HD Smart
            </Typography>
          </Grid>
          <Grid
            item
            xs={12}
            order={{ xs: -2, sm: 0 }}
            align={queryMatch && 'center'}
          >
            <Typography className={classes.sony}>SONY</Typography>
          </Grid>
          <Grid item xs={12} order={{ xs: -1, sm: 0 }}>
            <Chip
              label='50% OFF'
              color='primary'
              size='small'
              className={classes.chip}
            />
          </Grid>
        </Grid>
      </Grid>
      <Grid
        item
        order={{ xs: -1, sm: 0 }}
        className={`${classes.cardItem} ${classes.ratingContainer}`}
      >
        <Grid container justifyContent='center'>
          <Grid item xs={12}>
            <Typography align='center' className={classes.ratingLabel}>
              5
            </Typography>
          </Grid>
          <Grid item>
            <Rating
              defaultValue={4}
              size='small'
              readOnly
              className={classes.rating}
            />
          </Grid>
        </Grid>
      </Grid>
      <Grid
        item
        xs={queryMatch && 12}
        className={`${classes.cardItem} ${classes.viewDealContainer}`}
      >
        <Grid container justifyContent='space-between' rowSpacing={2}>
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
          <Grid item>
            <Typography className={classes.onAmazon}>On Amazon</Typography>
          </Grid>
          <Grid item>
            <Button
              onClick={() => setExpanded(!isExpanded)}
              className={classes.showMoreButton}
            >
              Show&nbsp;
              {isExpanded ? (
                <>
                  Less <ExpandLessIcon />
                </>
              ) : (
                <>
                  More <ExpandMoreIcon />
                </>
              )}
            </Button>
          </Grid>
        </Grid>
      </Grid>
      <Collapse in={isExpanded}>
        <Grid
          container
          justifyContent='space-between'
          alignItems={{ xs: 'center', md: 'end' }}
          rowGap={3}
          className={classes.collapseInfoContainer}
        >
          <Grid item xs={12} sm={9} className={classes.infoList}>
            <Typography className={classes.mainHighlights}>
              Main Highlights
            </Typography>
            <Typography>• Packaging may vary.</Typography>
            <Typography>• An ideal gift set.</Typography>
            <Typography>
              • Helps you brush longer with the 2 minutes embedded timer.
            </Typography>
            <Typography>
              • Battery lasts more than 2 weeks with 1 charge with the
              Lithium-ION battery.
            </Typography>
            <Typography>
              • 3 BRUSHING MODES: daily clean, whitening and sensitive.
            </Typography>
            <Typography>
              • For a clean that wow – remove bacteria by removing up to 100%
              more plaque vs. a manual toothbrush.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={3}>
            <Grid
              container
              rowGap={1}
              justifyContent='center'
              alignItems='center'
            >
              <Grid item xs={12} lg={7}>
                <Grid
                  container
                  columnSpacing={1}
                  justifyContent={{ xs: 'center', md: 'start' }}
                  alignItems='center'
                >
                  <Grid item md={12}>
                    <Typography className={classes.price}>$99.00</Typography>
                  </Grid>
                  <Grid item>
                    <Typography className={classes.lineThroughText}>
                      $199.00
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Typography className={classes.priceOff}>
                      (26% off)
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
              <Grid
                item
                xs={6}
                lg={5}
                textAlign={{ xs: 'center', md: 'start', lg: 'end' }}
                className={classes.amazonLogo}
              >
                <img src={Amazon} />
              </Grid>
              <Grid item xs={6} lg={12}>
                <Button
                  fullWidth
                  variant='outlined'
                  className={classes.viewButton}
                >
                  view
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Collapse>
    </Grid>
  );
};

export default Card;
