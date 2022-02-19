import React, { useEffect } from 'react'
import Web3 from 'web3';
import abi from './abi/abis.json';
import { accountUpdate, contractLoaded, ethtodollar } from '../redux/actions';
import { connect, useSelector } from 'react-redux';


function BlockchainProvider(props) {
    useEffect(() => {
        console.log(props.eth)
        //const contractAddr = Config.CONTRACT_ADDRESS
        const web3 = new Web3(Web3.givenProvider);
        try {
            account(web3)
            const SimpleContract = new web3.eth.Contract(abi, "0x28171BC1CE4545851b13D1c0d57e7086bcD58c77");
            props.dispatch(contractLoaded(SimpleContract))
            console.log(SimpleContract, "contract")
            props.dispatch(ethtodollar(props.eth))
        }
        catch (err) {
            console.log(err)
        }
        return () => { }
    }, [])

    async function account(web3) {
        const accounts = await web3.eth.getAccounts()

        //console.log(accounts[0],"accounts")
        props.dispatch(accountUpdate(accounts[0]))

    }




    return (
        <div>

        </div>
    )
}
const mapStateToProps = function (state) {
    return {
    }
}

export default connect(mapStateToProps)(BlockchainProvider)
