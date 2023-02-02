import { FC, ReactNode } from 'react'
import Header from './components/Header'

interface Props {
  children: ReactNode
}
const Layout: FC<Props> = ({ children }) => (
  <>
    <Header />
    <main>{children}</main>
  </>
)

export default Layout