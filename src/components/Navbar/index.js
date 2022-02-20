import React from 'react';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'

function shortenAccount(account) {
  return account ? account.slice(0, 4) + "..." + account.slice(account.length-4, account.length) : ""
}

function Navbar({
  account,
  web3Modal,
  loadWeb3Modal,
  logoutOfWeb3Modal
}) {
  return (
    <div className="mt-2 mb-4 px-4 flex flex-row items-center justify-between">
      <div className="flex flex-col items-center">
        <img className="h-12" src='./images/skew_you.png' alt="logo" />
      </div>

      <div>
        {web3Modal &&
          (web3Modal?.cachedProvider ? (
            <div className='flex flex-row'>
              <OverlayTrigger
                trigger="click"
                rootClose
                placement="bottom"
                overlay={
                  <button className="disconnect-btn mt-2" onClick={logoutOfWeb3Modal}>Disconnect</button>
                }
              >
                <div className="connect-btn mr-1 flex flex-row items-center" id="account-display">
                  <p className="mr-2">{shortenAccount(account)}</p>
                </div>
              </OverlayTrigger>
            </div>
          ) : (
            <button type="button" className="connect-btn" onClick={loadWeb3Modal}>Connect Wallet</button>
          ))}
      </div>
    </div>
  )
}

export default Navbar;