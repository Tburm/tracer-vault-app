import React from 'react'

function NotLoaded({ loadWeb3Modal, chainInfo }) {
    function handleSwitchArb() {
        if (chainInfo?.provider) {
            chainInfo.provider.provider.request({
                method: 'wallet_switchEthereumChain',
                params: [{ chainId: "0xA4B1" }]
            })
            loadWeb3Modal()
        }
    }

    return (
        <div className="flex flex-col items-center w-full">
            <div className="flex flex-col items-center py-6 w-2/5 border-2 border-white mt-2 px-4 max-w-3xl rounded-lg shadow-md text-center">
                <p className="text-center">Connect your wallet to Arbitrum mainnet</p>
                {chainInfo?.provider &&
                    <div className='flex flex-row items-center'>
                        <p className="switch-btn text-xs mx-1 mt-4" onClick={handleSwitchArb} >Switch to Arbitrum</p>
                    </div>
                }
            </div>
        </div>
    )
}

export default NotLoaded;
