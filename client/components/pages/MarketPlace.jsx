//react imports
import { useEffect, useState } from 'react';

//mui imports
import makeStyles from "@material-ui/core/styles/makeStyles";
import Typography from "@material-ui/core/Typography";
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
    grid: {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr 1fr 1fr',
        width: '65vw',
    }
}));

const MarketPlace = () => {

    const classes = useStyles();

    return (
        <div className={classes.grid}>
            
        </div>
    )
}

export default MarketPlace;