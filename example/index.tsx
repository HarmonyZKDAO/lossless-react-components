import 'react-app-polyfill/ie11'
import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { HeaderLogo } from '../src/components/PageHeader/HeaderLogo'
const App = () => {
  return (
    <div>
      <HeaderLogo />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
