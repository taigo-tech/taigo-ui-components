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
            fontSize: 36,
        },
        h2: {
            fontSize: 28,
        },
        h3: {
            fontSize: 24,
        },
        h4: {
            fontSize: 28,
        },
        h5: {
            fontSize: 16,
        },
        h6: {
            fontSize: 14,
        },
    },
    spacing: 10,
}

export default createMuiTheme(taigoTheme);