import React, { useState } from 'react';
import { fadeIn } from '../utils/springs';
import { useSpring, animated } from "react-spring";

// components
// import MintButton from '../components/MintButton'

// hooks
import { useAccount } from '../hooks/useAccount'
import StakingInterface from '../components/StakingInterface';
import WithdrawalInterface from '../components/WithdrawaInterface';

// constant
const SLIDE_LINK = "https://docs.google.com/presentation/d/e/2PACX-1vRb_awnDPSYAswfO60MXBCfIYvWISz6Xc-fEo2qHyVbNwOS1as-mybPUfE17iNaZppz2Bg2erHeYxCE/pub?start=false&loop=true&delayms=30000"

function Landing(props) {
  const [accountBalance] = useAccount(props);

  // show states
  const styles = useSpring(fadeIn)
  if(props.addresses) {
    const loaded = accountBalance >= 0
    if(loaded) {
      return (
        <>
        <animated.div style={styles} className="flex flex-col items-center justify-center">
          <StakingInterface tokenBalance={0} />
          <WithdrawalInterface tokenBalance={0} />
          <div className="mt-2">
              <a className="text-xl" target="_blank" rel="noreferrer" href={SLIDE_LINK}>Strategy Overview</a>
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
