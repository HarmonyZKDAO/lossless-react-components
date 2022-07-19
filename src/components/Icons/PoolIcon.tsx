import React from 'react'
import { NETWORK } from '@losslessproject/utilities'

import { POOL_ADDRESS } from '../../constants'
import { TokenIcon } from './TokenIcon'

export const PoolIcon = (props) => {
  return <TokenIcon {...props} chainId={NETWORK.mainnet} address={POOL_ADDRESS} />
}
