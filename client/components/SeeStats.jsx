import Button from '@material-ui/core/Button';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Typography from '@material-ui/core/Typography';

import { useRouter } from 'next/router';


const useStyles = makeStyles(theme => ({
    seeStatsButton: {
        position: 'absolute',
        color: '#ffffff',
        zIndex: '999',
        width: '70%',
        fontSize: '1.5rem',
        fontFamily: theme.typography.fontFamily.primary,
        fontWeight: '500',
        left: '50%',
        top: '35%',
        transform: 'translate(-50%, 40%)',
        width: '100%',
        textAlign: 'center'

    }
}))

const SeeStats = (props) => {

    const classes = useStyles();

    return (
        <a target="_blank" href={`/dashboard/${props.id}`}>
            <Typography variant="h2" className={classes.seeStatsButton}>
                See Stats
            </Typography>
        </a>
    )
}

export default SeeStats;