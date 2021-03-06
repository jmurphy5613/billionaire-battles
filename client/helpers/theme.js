import createTheme from '@material-ui/core/styles/createTheme';

const theme = createTheme({
    palette: {
        primary: {
            main: '#282c44',
        },
        secondary: {
            main: '#0d1944'
        }
    },
    typography: {
        fontFamily: {
            primary: '"Inter", sans-serif',
            secondary: 'Poppins, sans-serif',
            tertiary: 'Noto Sans, sans-serif',
            
        }
    },
    breakpoints: {
        values: {

        }
    }
});

export default theme;