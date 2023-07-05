import logo from '/logo.svg'
import classes from './header.module.scss'
import { FunctionComponent } from 'react'
import { HamburgerMenu } from '../Menu/Menu.tsx'

export const Header: FunctionComponent = () => {

  return (
    <header className={classes.header}>
      <div>
          <img src={logo} className={classes.logo} alt="Caesar's Game" />
      </div>
      <HamburgerMenu />
    </header>
  )
}
