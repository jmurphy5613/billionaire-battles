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

            const ownedBillionaires = await contract.getCharactersFromAddress(
                etherConnection.request({ method: 'eth_accounts' })[0]
            );
            console.log(ownedBillionaires);
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