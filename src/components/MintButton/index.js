import React from 'react';
import Spinner from 'react-bootstrap/Spinner'
import { ethers } from 'ethers';
import { useContractFunction } from '@usedapp/core'

function getPrice(isGold) {
  if(isGold) {
    return ".1"
  } else {
    return "0"
  }
}

function MintButton(props) {
  const signer = props.library.getSigner()
  let contract = new ethers.Contract(props.addresses.sniperNFT, props.abis.sniperNFT, signer)
  const { state, send } = useContractFunction(contract, 'mint', { transactionName: 'Mint' })

  const onMintPressed = async () => {
    send(props.isGold, props.proof, { value: ethers.utils.parseEther(getPrice(props.isGold)) })
  };

  return (
    <>
      <button
        type="button"
        className="connect-btn text-center my-2 w-full"
        onClick={onMintPressed}
        disabled={props.disabled || state.status === 'Mining'}
      >
        {state.status === 'Mining' ?
          <Spinner size="sm" animation="border" role="status">
            <span className="visually-hidden">"In progress..."</span>
          </Spinner>
          :
          props.title
        }
      </button>
    </>
  )
}

export default MintButton;
