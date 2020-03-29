import { createMuiTheme } from '@material-ui/core';
import primary from '@material-ui/core/colors/blue';
import secondary from '@material-ui/core/colors/amber';

export default createMuiTheme({
  typography: {
    fontFamily: [
      'Roboto',
      '-apple-system',
      'BlinkMacSystemFont',
      'Segoe UI',
      'Oxygen',
      'Ubuntu',
      'Cantarell',
      'Fira Sans',
      'Droid Sans',
      'Helvetica Neue',
      'Comfortaa',
      'sans-serif'
    ].join(',')
  },
  palette: {
    primary: primary,
    secondary: secondary
  }
});
