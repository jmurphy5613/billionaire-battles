import makeStyles from '@material-ui/core/styles/makeStyles';
import HomeIcon from '@mui/icons-material/Home';
import IconButton from '@material-ui/core/IconButton';

import router from 'next/router';


const useStyles = makeStyles(theme => ({
    homeButton: {
        position: 'absolute',
        top: '0',
        left: '0',
        zIndex: '9999',
    },

}));

const HomeButton = () => {

    const classes = useStyles();

    const pushToHomepage = () => {
        router.push('/');
    }

    return (
        <IconButton onClick={pushToHomepage} className={classes.homeButton} >
            <HomeIcon htmlColor={'#fe5b77'} sx={{ fontSize: '2rem' }}  />
        </IconButton>
    )
}

export default HomeButton;