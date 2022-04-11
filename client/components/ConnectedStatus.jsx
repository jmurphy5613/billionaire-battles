import makeStyles from '@material-ui/core/styles/makeStyles';
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles(theme => ({
    connection: {
        position: 'absolute',
        top: '1rem',
        right: '1rem',
        width: 'auto',
        height: '100px',
    },
    text: {
        fontFamily: theme.typography.fontFamily.secondary,
        fontSize: '1.0rem',
        fontWeight: '500',
        textTransform: 'none',
        color: '#ffffff',
        backgroundColor: '#6c56d2',
        padding: '0.8rem',
        borderRadius: '0.5rem',
    }
}));

const ConnectedStatus = (props) => {

    const classes = useStyles();

    return (
        <div className={classes.connection}>
            <Typography variant="h6" className={classes.text}>
                { props.connected ? 'Wallet Connected' : 'Wallet Not Connected' }
            </Typography>
        </div>
    )
}

export default ConnectedStatus;