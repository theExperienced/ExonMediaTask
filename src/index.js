import { createMuiTheme, CssBaseline } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/system';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

let theme = createMuiTheme({
  typography: {
    fontFamily: 'Inter',
  },
});

theme = createTheme(theme, {
  palette: { background: { default: '#f5f5f5' } },
  components: {
    MuiButton: {
      styleOverrides: { textTransform: 'capitalize' },
    },
  },
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
