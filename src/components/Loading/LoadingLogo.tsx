import React from 'react'
import classnames from 'classnames'

// import { ThemeContext } from '../ThemeContextProvider'
import { LoadingDots } from './LoadingDots'

// import LogoDark from '../../assets/PoolTogetherLogos/pooltogether-p.svg'
// import Logo from '../../assets/PoolTogetherLogos/pooltogether-p-purple.svg'

import Logo from '../../assets/LosslessLogo/Lossless_favicon.png'

export function LoadingLogo(props) {
  // const { theme } = useContext(ThemeContext)

  return (
    <div className={classnames('flex flex-col', props.className)} style={{ width: 'min-content' }}>
      <img src={Logo} className='w-16 mx-auto' style={{ borderWidth: 0 }} />
      <LoadingDots />
    </div>
  )
}
