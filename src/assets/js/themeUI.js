
import {createTheme} from '@material-ui/core/styles';
import * as locales from '@material-ui/core/locale';

const theme = createTheme({
  typography: {
    fontFamily: 'Open Sans',
  },
  palette: {
    primary: {
      main: '#4DB8C0',
    },
    secondary: {
      main: '#128A95'
    },
    tonalOffset: 0.1,
    background: {
      default: '#FAFAFA'
    }
  }
}, locales['esES']);

export default theme;