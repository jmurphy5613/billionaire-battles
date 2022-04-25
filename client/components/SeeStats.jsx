import Button from '@material-ui/core/Button';
import makeStyles from '@material-ui/core/styles/makeStyles';


const useStyles = makeStyles(theme => ({
    seeStatsButton: {
        position: 'absolute',
        color: '#c9163a',
        borderColor: '#c9163a',
        zIndex: '999',
        margin: 'auto'
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