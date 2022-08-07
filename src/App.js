import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import { Container, Box } from '@mui/material';
import ResponsiveLayout from './ResponsiveLayout';
import TabletLayout from './TabletLayout';
import NavBar from './NavBar';

const App = () => {
  return (
    <Router>
      <Container maxWidth='lg'>
        <NavBar />
        <Switch>
          <Box sx={{ pt: 8 }}>
            <Route exact path='/'>
              <ResponsiveLayout />
            </Route>
            <Route path='/tablet'>
              <TabletLayout />
            </Route>
          </Box>
        </Switch>
      </Container>
    </Router>
  );
};

export default App;
