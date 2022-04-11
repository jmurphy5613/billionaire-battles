import { useState, useEffect } from 'react';

import { ethers } from 'ethers';

import BillionaireBattles from '../../server/artifacts/contracts/BillionaireBattles.sol/BillionaireBattles.json';
import { BillionaireBattlesAddress } from '../helpers/addresses';


const OwnedBillionaires = (props) => {

    const [ownedBillionaires, setOwnedBillionaires] = useState([]);


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
            const nftIndexesInt = [];
            if(nftIndexesHex.length > 0) {
                for(let i = 0; i < nftIndexesHex.length; i++) {
                    console.log(parseInt(nftIndexesHex[i], 16));
                    nftIndexesInt.push(parseInt(nftIndexesHex[i], 16));
                }
                
            }
        }
    }


    useEffect(() => {
        getOwnedBillionaires();
    }, []);


    return (
        <div>

        </div>
    )
}

export default OwnedBillionaires;