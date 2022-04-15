import makeStyles from '@material-ui/core/styles/makeStyles';



const useStyles = makeStyles(theme => ({
    gridItem: {
        height: '30vh',
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: ''
    },
    pictureFrame: {
        height: '70%',
        width: '100%'
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
            <div className={}>

            </div>
        </div>
    )
}

export default MarketItemGridItem;