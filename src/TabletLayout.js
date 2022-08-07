import { Grid } from '@mui/material';
import TabletCard from './TabletCard';

const TabletLayout = () => {
  return (
    <Grid container columnSpacing={2} rowSpacing={4}>
      {[...new Array(6)].map(() => (
        <Grid item xs={4}>
          <TabletCard />
        </Grid>
      ))}
    </Grid>
  );
};

export default TabletLayout;
