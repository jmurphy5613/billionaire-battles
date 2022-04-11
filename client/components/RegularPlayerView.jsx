//mui imports
import makeStyles from "@material-ui/core/styles/makeStyles";
import Typography from "@material-ui/core/Typography";
import Button from '@material-ui/core/Button';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

import { useState } from "react";

const useStyles = makeStyles(theme => ({
    root: {
        backgroundColor: theme.palette.primary.main,
        height: '100vh',
        width: '100vw',
    },
    tabs: {
        color: '#fe5b77',
        fontFamily: theme.typography.fontFamily.secondary,
        fontSize: '1.0rem',
        fontWeight: '500',
        textTransform: 'none',
    }
}));

const RegularPlayerView = () => {

    const classes = useStyles();

    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    }

    return (
        <div className={classes.root}>
            <Tabs value={value} onChange={handleChange} TabIndicatorProps={{style: {backgroundColor: "white"}}} centered>
                <Tab className={classes.tabs} label="Market Place" />
                <Tab className={classes.tabs} label="Owned Billionaires" />
                <Tab className={classes.tabs} label="Fight" />
            </Tabs>
        </div>
    )
}

export default RegularPlayerView;