import { useRouter } from "next/router";

import { useState, useEffect } from "react";

import { makeStyles } from "@material-ui/styles";


const useStyles = makeStyles(theme => ({
    root: {
        backgroundColor: theme.palette.primary.main,
        height: '100vh',
        width: '100vw',
    }
}));

const ItemProfile = () => {

    const router = useRouter();
    const { id } = router.query;

    const classes = useStyles();

    const fetchData = async () => {
        
    }

    return (
        <div>
            
        </div>
    )
}

export default ItemProfile;