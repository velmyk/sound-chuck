import { createMuiTheme } from '@material-ui/core/styles';
import blue from '@material-ui/core/colors/blue';
import blueGrey from '@material-ui/core/colors/blueGrey';

export default createMuiTheme({
    props: {
        MuiButtonBase: {
            disableRipple: true,
        },
        MuiTypography: {
            variantMapping: {
                h1: 'h1',
                h2: 'h2',
                h3: 'h2',
                h4: 'h2',
                h5: 'h2',
                h6: 'h2',
                subtitle1: 'h3',
                subtitle2: 'h3',
                body1: 'p',
                body2: 'p',
            },
        },
    },
    typography: {
        fontFamily: ['Montserrat', '"Helvetica Neue"', 'Arial', 'sans-serif'].join(','),
        h1: {
            fontSize: '1.125rem',
            fontWeight: 600,
        },
        h2: {
            fontSize: '1rem',
            fontWeight: 700,
        },
        subtitle1: {
            fontSize: '1rem',
            fontWeight: 500,
            lineHeight: '1.25rem',
        },
        subtitle2: {
            fontWeight: 600,
            fontSize: '0.875rem',
        },
        body1: {
            fontSize: '0.875rem',
            fontWeight: 400,
        },
        body2: {
            fontSize: '0.75rem',
            fontWeight: 400,
        },
        caption: {
            fontSize: '0.625rem',
            fontWeight: 400,
        },
        overline: {
            fontSize: '0.5rem',
            fontWeight: 600,
        },
    },
    palette: {
        primary: blue,
        secondary: blueGrey,
        background: {
            default: 'rgba(0, 0, 0, 0.8)',
            paper: 'rgba(255, 255, 255, 0.1)',
        },
        text: {
            primary: 'rgba(255, 255, 255, 1)',
            secondary: 'rgba(255, 255, 255, 0.8)',
        },
    },
    shape: {
        borderRadius: 8,
    },
});
