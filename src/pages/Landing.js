import React, { useState } from 'react';
import { fadeIn } from '../utils/springs';
import { useSpring, animated } from "react-spring";

// components
// import MintButton from '../components/MintButton'

// hooks
import { useAccount } from '../hooks/useAccount'

function Landing(props) {
  const [accountBalance] = useAccount(props);

  // show states
  const styles = useSpring(fadeIn)
  if(props.addresses) {
    const loaded = accountBalance >= 0
    if(loaded) {
      return (
        <>
        <animated.div style={styles} className="flex flex-row items-center justify-center">
          <div className="px-6 md:px-12 lg:px-24 flex flex-col items-center justify-center">
            {accountBalance}
          </div>
        </animated.div>
        </>
      )
    } else {
      return (
        <p className="w-full text-center">Loading...</p>
      )
    }
  } else {
    return (
      <></>
    )
  }
}

export default Landing;
