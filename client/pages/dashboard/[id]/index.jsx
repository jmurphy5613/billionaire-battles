import { useRouter } from "next/router";
import { useState, useEffect } from "react";

import { makeStyles } from "@material-ui/styles";

import { ethers } from 'ethers';

import { BillionaireBattlesAddress } from "../../../helpers/addresses";
import BillionaireBattles from '../../../../server/artifacts/contracts/BillionaireBattles.sol/BillionaireBattles.json';


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

    const fetchCharacterData = async () => {
        const etherConnection = window.ethereum;

        if(etherConnection) {
            const provider = new ethers.providers.Web3Provider(etherConnection);
            const signer = provider.getSigner();
            const contract = new ethers.Contract(BillionaireBattlesAddress, BillionaireBattles.abi, signer);

            await contract.getCharacterDisplayDataById(id).then(res => {
                setCharacterData(res);
                setDataLoaded(true);
            })
        }
    }

    const [characterData, setCharacterData] = useState();
    const [dataLoaded, setDataLoaded] = useState();

    useEffect( async () => {
        if(!id) {
            return;
        }
        await fetchCharacterData();
    }, [id])

    if(!dataLoaded) {
        return (
            <div>

            </div>
        )
    }

    return (
        <div className={classes.root}>
            {console.log(characterData[0])}
            <div style={{
                backgroundColor: '#ffffff',
                height: '500px',
                width: '500px',
                borderRadius: '2rem',
                backgroundImage: `url(${characterData[0]})`,
                backgroundSize: 'cover'
            }}>

            </div>
        </div>
    )
}

export default ItemProfile;