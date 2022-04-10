import Typed from 'react-typed';

//react imports
import { useEffect, useState } from 'react';

//mui imports
import makeStyles from "@material-ui/core/styles/makeStyles";
import Typography from "@material-ui/core/Typography";
import Button from '@material-ui/core/Button';

import { ethers } from 'ethers';

import BillionaireBattles from '../../server/artifacts/contracts/BillionaireBattles.sol/BillionaireBattles.json';
import { BillionaireBattlesAddress } from '../helpers/addresses';


const useStyles = makeStyles(theme => ({
    root: {
        backgroundColor: theme.palette.primary.main,
        height: '100vh',
        width: '100vw',
    },
    textContainer: {
        marginLeft: '20%'
    },
    smallTitle: {
        fontFamily: theme.typography.fontFamily.secondary,
        fontSize: '1rem',
        color: '#fe5b77',
        marginBottom: '1.7rem'
    },
    mainTitle: {
        fontFamily: theme.typography.fontFamily.primary,
        color: '#ffffff',
        fontWeight: '600'
    },
    descriptionTitle: {
        fontFamily: theme.typography.fontFamily.tertiary,
        color: '#b2bAc2',
        marginTop: '1.7rem'
    },
    titleMargin: {
        width: '50%',
        paddingTop: '12%',
        marginLeft: '15%',
        
    },
    inerMainTitle: {
        color: '#fe5b77',
    },
    landingPageButton: {
        backgroundColor: '#6c56d2',
        color: '#ffffff',
        fontFamily: theme.typography.fontFamily.secondary,
        textTransform: 'none',
        marginTop: '1.7rem',
        width: '12rem',
        height: '3.2rem',
        '&:hover': {
            backgroundColor: '#6c56d2',
        }
    },
    image: {
        position: 'absolute',
        bottom: '0',
        right: '5%',
        width: 'auto',
        height: 'auto'
    }
}));

const Home = () => {

    const [connectedWallet, setConnectedWallet] = useState('');
    const [walletIsConnected, setWalletIsConnected] = useState(true);
    const [isNewPlayer, setIsNewPlayer] = useState();


    useEffect(() => {
        checkConnection();
    }, []);

    const checkConnection = async () => {
        const provider = window.ethereum;
        provider.request({ method: 'eth_accounts' }).then(async (response) => {
            if(response.length == 0) {
                setWalletIsConnected(false);
            } else {
                setConnectedWallet(response[0]);
                setWalletIsConnected(true);
            }
        });
    }


    const connectWallet = () => {
        let provider = window.ethereum;

        if(typeof provider != 'undefined') {
            provider.request({ method: 'eth_requestAccounts' }).then(accounts => {
                setConnectedWallet(accounts);
                setWalletIsConnected(true);
            })
        }
        window.ethereum.on('accountsChanged', function(accounts) {
            setWalletIsConnected(true);
            setConnectedWallet(accounts);
        });
    }

    const checkIfNewPlayer = async() => {
        //check if the connected wallet has and nfts

        if(walletIsConnected) {
            let etherConnection = window.ethereum;

            if(etherConnection) {
                //set up connection
                const provider = new ethers.providers.Web3Provider(etherConnection);
                const signer = provider.getSigner();
                const billionaireBattlesContract = new ethers.Contract(BillionaireBattlesAddress, BillionaireBattles.abi, signer);
                
                //check if they own any nfts
                const nftCount = await billionaireBattlesContract.getCharactersFromAddress(BillionaireBattlesAddress);
                if(nftCount.length == 0) {
                    setIsNewPlayer(true);
                }
            }
        }

    }

    const classes = useStyles();

    if(walletIsConnected) {
        return (
            <div className={classes.root}>

            </div>
        )
    }

    return (
        <div className={classes.root}>
            <div className={classes.titleMargin}>
                <Typography variant="h5" className={classes.smallTitle}>
                    Billionaire Beatdown
                </Typography>
                <Typography variant="h2" className={classes.mainTitle}>
                    {`Fight the richest tech pioneers on a platform built with ` }
                    
                    <Typed 
                        className={classes.inerMainTitle}
                        strings={['Hardhat', 'Ethers', 'Solidity', 'Web3', 'Metamask', 'Truffle']}
                        loop
                        typeSpeed={60}
                        backSpeed={60}
                    />
                </Typography>
                <Typography variant="h6" className={classes.descriptionTitle}>
                    This is a browser game that is built on the Ethereum blockchain on the rinkeby testnet.
                </Typography>
                
                <Button onClick={connectWallet} variant="contained" className={classes.landingPageButton}>Connect Wallet</Button>

            </div>
        </div>
    )
}

export default Home;