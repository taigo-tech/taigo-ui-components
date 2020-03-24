import { createMuiTheme } from '@material-ui/core/styles';

export const taigoTheme = {
    palette: {
        primary: {
            main: '#263675',
        },
        secondary: {
            main: '#4ec9ed',
        },
        error: {
            main: '#FF4646',
        },
        success: {
            main: '#51D32A',
        },
        grey: {
            300: '#CCCCCC',
            500: '#A7A7A7',
            700: '#707070',
            900: '#464646',
        },
    },
    typography: {
        fontFamily: 'Ubuntu, sans-serif',
        h1: {
            fontSize: '3rem',
        },
        h2: {
            fontSize: '2.3rem',
        },
        h3: {
            fontSize: '2rem',
        },
        h4: {
            fontSize: '1.5rem',
        },
        h5: {
            fontSize: '1.4rem',
        },
        h6: {
            fontSize: '1.2rem',
        },
    },
    spacing: 8,
}

export default createMuiTheme(taigoTheme);