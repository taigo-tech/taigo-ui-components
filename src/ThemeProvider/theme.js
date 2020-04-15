import { createMuiTheme } from '@material-ui/core/styles';
import colors from '../utils/colors';

export const taigoTheme = {
    palette: {
        primary: {
            main: colors.primary,
        },
        secondary: {
            main: colors.cyan,
        },
        error: {
            main: colors.red,
        },
        success: {
            main: colors.green,
        },
        info: {
            main: colors.cyan,
        },
        warning: {
            main: colors.orange,
        },
        grey: {
            300: '#CCCCCC',
            500: '#A7A7A7',
            700: '#707070',
            900: '#464646',
        },
    },
    typography: {
        htmlFontSize: 16,
        fontSize: 13,
        fontFamily: 'Ubuntu, sans-serif',
        h1: {
            fontSize: 32,
        },
        h2: {
            fontSize: 26,
        },
        h3: {
            fontSize: 22,
        },
        h4: {
            fontSize: 18,
        },
        h5: {
            fontSize: 15,
        },
        h6: {
            fontSize: 13,
        },
    },
    spacing: 10,
}

export default createMuiTheme(taigoTheme);