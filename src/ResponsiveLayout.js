import { Grid, Paper } from '@mui/material';
import ResponsiveCard from './ResponsiveCard';

const ResponsiveLayout = () => {
  return (
    <Grid container rowSpacing={{ xs: 6, sm: 4 }}>
      {[...new Array(10)].map((item, i) => (
        <Grid item>
          {/* <Paper elevation={7}> */}
          <ResponsiveCard index={i + 1} />
          {/* </Paper> */}
        </Grid>
      ))}
    </Grid>
  );
};

export default ResponsiveLayout;
