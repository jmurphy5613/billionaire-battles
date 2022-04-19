//mui imports
import makeStyles from '@material-ui/core/styles/makeStyles';
import Typography from '@material-ui/core/Typography';

import HealthOnItem from '../HealthOnItem';

const useStyles = makeStyles(theme => ({
    gridItem: {
        height: '30vh',
        display: 'inline-flex',
        flexDirection: 'column',
        backgroundColor: theme.palette.secondary.main,
        borderRadius: '5px',
        border: '1px solid #3750A8',
        transition: '0.5s',
        '&:hover': {
            transform: 'scale(1.1)'
        }
    },
    pictureFrame: {
        height: '80%',
        width: '100%',
        backgroundSize: 'cover',
        backgroundRepeat: 'none',
        borderTopLeftRadius: '5px',
        borderTopRightRadius: '5px',

    },
    bioFrame: {
        height: '20%',
        width: '100%',
        color: 'white',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    nftName: {
        fontSize: '1rem',
        fontFamily: 'Ubuntu'
    }
}))

const MarketItemGridItem = (props) => {

    const classes = useStyles();

    /* 
    Organization of the grid item:
    1. picture
    2. name  with health
    3. if the health is 0, offer a heal option
    */
    return (
        <div className={classes.gridItem}>
            <div className={classes.pictureFrame} 
                style={{
                    backgroundImage: `url(${props.img})`
                }}
                
            >
            <HealthOnItem health={50} />
            </div>

            <div className={classes.bioFrame}>
                <Typography variant="h4" className={classes.nftName}>
                    {props.name}
                </Typography>
            </div>
        </div>
    )
}

export default MarketItemGridItem;