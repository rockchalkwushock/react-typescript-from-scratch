import * as React from 'react'
import { hot } from 'react-hot-loader/root'

import { Title } from 'app/components'

interface Props {
  compiler: string
}

const App: React.SFC<Props> = ({ compiler }) => (
  <Title>Hello React with {compiler}</Title>
)

export default hot(App)
