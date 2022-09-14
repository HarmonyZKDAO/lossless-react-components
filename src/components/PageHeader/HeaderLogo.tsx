import React from 'react'
import classNames from 'classnames'

import MobileLogoDark from '../../assets/LosslessLogo/Lossless_favicon.png'
import MobileLogo from '../../assets/LosslessLogo/Lossless_favicon.png'
import DesktopLogoDark from '../../assets/LosslessLogo/Lossless_logo.svg'
import DesktopLogo from '../../assets/LosslessLogo/Lossless_logo.svg'

export const HeaderLogo = (props) => {
  const { desktopSizeClassNames, centered } = props

  const extendedClassNames = {
    'mx-auto': centered
  }

  return (
    <>
      <ImageContainer
        className={classNames('hidden sm:dark:block', desktopSizeClassNames, extendedClassNames)}
        src={DesktopLogo}
      />
      <ImageContainer
        className={classNames(
          'hidden dark:hidden sm:block',
          desktopSizeClassNames,
          extendedClassNames
        )}
        src={DesktopLogoDark}
      />
      <ImageContainer
        className={classNames('hidden dark:block sm:dark:hidden w-11 h-12', extendedClassNames)}
        src={MobileLogo}
      />
      <ImageContainer
        className={classNames('block sm:hidden dark:hidden w-11 h-12', extendedClassNames)}
        src={MobileLogoDark}
      />
    </>
  )
}

const ImageContainer = (props) => {
  const { className, ...imageProps } = props
  return (
    <div className={classNames(className)}>
      <img {...imageProps} alt='Lossless Logo' />
    </div>
  )
}

HeaderLogo.defaultProps = {
  centered: false,
  desktopSizeClassNames: 'w-48 h-12'
}
