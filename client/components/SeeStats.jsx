import Button from '@material-ui/core/Button';
import makeStyles from '@material-ui/core/styles/makeStyles';


const useStyles = makeStyles(theme => ({
    seeStatsButton: {
        position: 'relative',
        zIndex: '999'
    }
}))

const SeeStats = () => {

    const classes = useStyles();

    return (
        <Button variant="outlined" className={classes.seeStatsButton}>
            See Profile
        </Button>
    )
}

export default SeeStats;