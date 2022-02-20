import React, { useState } from 'react';
import Nav from 'react-bootstrap/Nav'
import Form from 'react-bootstrap/Form';

function WithdrawalInterface(props) {
  let [withdrawalAmount, setWithdrawalAmount] = useState('');

  // check if approved
//   const isApproved = props.tokenApproval && (withdrawalAmount <= props.tokenApproval)

  const handleWithdrawalAmountChange = (event) => {
    // handle blank
    if (event.target.value === '') setWithdrawalAmount('')

    // handle number
    let newAmount = parseFloat(event.target.value)
    if(newAmount <= props.tokenBalance) {
      setWithdrawalAmount(newAmount)
    } else {
      // throw an error
    }
  }

  function handleWithdrawalMax() {
    setWithdrawalAmount(props.tokenBalance)
  }

  return (
    <>
      <div className="flex flex-col items-center py-6 w-2/5 border-2 border-white mx-2 mt-2 px-4 max-w-3xl rounded-lg shadow-md text-center">
        <p className="text-2xl">
          {props.title}
        </p>
        <div className="flex flex-col items-center w-full px-8">
          <Form className="flex flex-col items-center w-full">
            <Nav
              className="w-full mt-2 mb-2 grid grid-cols-2 gap-1 text-center"
              variant="pills"
            >
            </Nav>

            <div className="w-full mb-2">
              <p className="text-sm text-right">
                Balance: {parseFloat(0.00).toFixed(2)}
              </p>
              <div className="flex flex-row items-center">
                <Form.Control placeholder="0.0" value={withdrawalAmount} disabled={false} onChange={handleWithdrawalAmountChange} />
                <button type="button" className="connect-btn text-center my-2 w-half" onClick={handleWithdrawalMax}>Max</button>
              </div>
            </div>
            <button type="button" className="connect-btn text-center my-2 w-full">Withdraw</button>
          </Form>
        </div>
      </div>
    </>
  )
}

export default WithdrawalInterface;