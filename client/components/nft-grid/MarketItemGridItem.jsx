//mui imports
import makeStyles from '@material-ui/core/styles/makeStyles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
    gridItem: {
        height: '30vh',
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: theme.palette.secondary.main,
        padding: '1px',
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
    },
    bioFrame: {
        height: '20%',
        wdith: '100%'
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
            />
            <div className={classes.bioFrame}>
                
            </div>
        </div>
    )
}

export default MarketItemGridItem;