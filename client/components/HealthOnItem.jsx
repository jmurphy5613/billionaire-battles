import makeStyles from '@material-ui/core/styles/makeStyles';
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles(theme => ({
    healthCounter: {
        position: 'relative',
        height: '1.3rem',
        width: '8rem',
        left: '45%',
        bottom: '0.5rem',
        fontFamily: 'Ubuntu',
        backgroundColor: '#17EF97',
        borderRadius: '5px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    healthCounterRed: {
        position: 'relative',
        height: '1.3rem',
        width: '8rem',
        left: '45%',
        bottom: '0.5rem',
        fontFamily: 'Ubuntu',
        backgroundColor: '#c9163a',
        borderRadius: '5px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    healthCounterTitle: {
        fontSize: '0.9rem', 
        fontWeight: '600'
    }
}));

const HealthOnItem = (props) => {

    const classes = useStyles();

    if(props.health === 0) {
        return (
            <div className={classes.healthCounterRed}>
                <Typography variant="h5" className={classes.healthCounterTitle}>
                    {`${props.health}/${props.maxHealth}`}
                </Typography>
            </div>
        )
    }

    return (
        <div className={classes.healthCounter}>
            <Typography variant="h5" className={classes.healthCounterTitle}>
                {`${props.health}/${props.maxHealth}`}
            </Typography>
        </div>
    )
}

export default HealthOnItem;