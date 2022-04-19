import { useState, useEffect } from 'react';

import { ethers } from 'ethers';

import makeStyles from '@material-ui/core/styles/makeStyles';

import BillionaireBattles from '../../../server/artifacts/contracts/BillionaireBattles.sol/BillionaireBattles.json';
import { BillionaireBattlesAddress } from '../../helpers/addresses';

//component imports
import MarketItemGrid from '../nft-grid/MarketItemGrid';


const useStyles = makeStyles(theme => ({
    root: {
        width: '100vw',
        display: 'flex',
        justifyContent: 'center'
    },
}));


const OwnedBillionaires = (props) => {

    const classes = useStyles();

    const [ownedBillionaires, setOwnedBillionaires] = useState([
        {
            img: 'https://i.imgur.com/kgFwxcX.jpg',
            name: 'Nikil Viswanathan',
            health: 100,
            maxHealth: 125
        },
        {
            img: 'https://i.imgur.com/Zmh5ZFQ.jpg',
            name: 'Adam Neumann',
            health: 75,
            maxHealth: 100
        }
    ]);


    const getOwnedBillionaires = async () => {
        const etherConnection = window.ethereum;

        if(etherConnection) {
            const provider = new ethers.providers.Web3Provider(etherConnection);
            const signer = provider.getSigner();
            const contract = new ethers.Contract(BillionaireBattlesAddress, BillionaireBattles.abi, signer);

            //get the users wallet
            const wallet = await etherConnection.request({ method: 'eth_accounts' })
            console.log(wallet);

            //get the users nfts
            const nftIndexesHex = await contract.getCharactersFromAddress(wallet[0]);
            if(nftIndexesHex) {
                //get the indexes of the nfts that are owned
                const nftIndexesInt = [];
                if(nftIndexesHex.length > 0) {
                    for(let i = 0; i < nftIndexesHex.length; i++) {
                        nftIndexesInt.push(parseInt(nftIndexesHex[i], 16));
                    }
                    
                }
                console.log(nftIndexesInt);
                //get the metadata from the nfts owned
                const characterMetaData = [];

                for(let i = 0; i < nftIndexesInt.length; i++) {
                    const currentData = await contract.getCharacterDisplayDataById(nftIndexesInt[i]+1);
                    characterMetaData.push(currentData);
                }
                console.log(characterMetaData);

            }

        }
    }


    useEffect(() => {
        getOwnedBillionaires();
    }, []);


    return (

        <div className={classes.root}>
            <MarketItemGrid gridItems={ownedBillionaires} paddingTop={2} />
        </div>
    )
}

export default OwnedBillionaires;