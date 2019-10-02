import React from 'react';
import Header from './Header';
import Footer from './Footer';
import { ThemeProvider } from '@material-ui/styles';
import {
  createMuiTheme,
  makeStyles,
  createStyles,
  Theme as AugmentedTheme,
} from '@material-ui/core/styles'
import { blueGrey } from '@material-ui/core/colors';
import Particles from 'react-particles-js';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: blueGrey[400]
    }
  },
});

const withLayout = ( Page ) => () => (
    <>

      <ThemeProvider theme={theme}>
        <Header />
        <Page />
        <Footer/>

      </ThemeProvider>

    </>
);

export default withLayout;