import { useState, useEffect } from "react";
import { ethers } from "ethers";

function useAccount(props) {
    const [accountBalance, setAccountBalance] = useState();

    useEffect(() => {
        async function getBalance() {
            var newBalance = await props.library.getBalance(props.account)
            newBalance = ethers.utils.formatEther(newBalance)
            setAccountBalance(newBalance)
        }

        if (props.addresses) {
            getBalance()
        }
    }, [props])
    return [accountBalance]
}

export {
    useAccount
}
