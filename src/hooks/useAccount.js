import { useState, useEffect } from "react";
import { ethers } from "ethers";

function useAccount(props) {
    const [accountBalance, setAccountBalance] = useState();

    useEffect(() => {
        async function getBalance() {
            let newBalance = await props.library.getBalance(props.account)
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
