import { useState, useEffect } from 'react';

import { ethers } from 'ethers';

import makeStyles from '@material-ui/core/styles/makeStyles';

import BillionaireBattles from '../../../server/artifacts/contracts/BillionaireBattles.sol/BillionaireBattles.json';
import { BillionaireBattlesAddress } from '../../helpers/addresses';

//component imports
import MarketItemGrid from '../nft-grid/MarketItemGrid';


const useStyles = makeStyles(theme => ({
    grid: {
        gridTemplateColumns: '1fr 1fr 1fr 1fr',
        width: '60vw',
        display: 'grid'
    },
    gridItem: {
        display: 'flex',
        height: '100px',
        flexDirection: 'column'
    }
}));


const OwnedBillionaires = (props) => {

    const classes = useStyles();

    const [ownedBillionaires, setOwnedBillionaires] = useState([
        {
            img: 'https://i.imgur.com/kgFwxcX.jpg',
            name: 'Nikil Viswanathan'
        },
        {
            img: 'https://i.imgur.com/Zmh5ZFQ.jpg',
            name: 'Adam Neumann'
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
                const nftIndexesInt = [];
                if(nftIndexesHex.length > 0) {
                    for(let i = 0; i < nftIndexesHex.length; i++) {
                        console.log(parseInt(nftIndexesHex[i], 16));
                        nftIndexesInt.push(parseInt(nftIndexesHex[i], 16));
                    }
                    
                }
            }
        }
    }


    useEffect(() => {
        getOwnedBillionaires();
    }, []);


    return (
        <div className={classes.grid}>
            <MarketItemGrid gridItems={ownedBillionaires} />
        </div>
    )
}

export default OwnedBillionaires;