import Button from '@material-ui/core/Button';
import makeStyles from '@material-ui/core/styles/makeStyles';

import { useRouter } from 'next/router';


const useStyles = makeStyles(theme => ({
    seeStatsButton: {
        position: 'absolute',
        color: '#c9163a',
        borderColor: '#c9163a',
        zIndex: '999',
        left: '50%',
        top: '50%',
        transform: 'translate(-50%, -50%)',
        width: '70%'

    }
}))

const SeeStats = (props) => {

    const classes = useStyles();
    const router = useRouter();

    return (
        <a target="_blank" href={`/dashboard/${props.id}`}>
            <Button variant="outlined" className={classes.seeStatsButton}>
                See Profile
            </Button>
        </a>
    )
}

export default SeeStats;