
import {createTheme} from '@material-ui/core/styles';
import * as locales from '@material-ui/core/locale';

const theme = createTheme({
  typography: {
    fontFamily: 'Roboto',
  },
  palette: {
    primary: {
      main: '#fbc02d',
    },
    secondary: {
      main: '#05353D'
    },
    tonalOffset: 0.1,
    background: {
      default: '#FAFAFA'
    }
  }
}, locales['esES']);

export default theme;