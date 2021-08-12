
import {createTheme} from '@material-ui/core/styles';
import * as locales from '@material-ui/core/locale';

const theme = createTheme({
  typography: {
    fontFamily: 'Open Sans',
  },
  palette: {
    primary: {
      main: '#FBC02D',
    },
    secondary: {
      main: '#F9A825'
    },
    tonalOffset: 0.1,
    background: {
      default: '#FAFAFA'
    }
  }
}, locales['esES']);

export default theme;