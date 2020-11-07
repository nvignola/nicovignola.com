import React from 'react'
import { Link } from 'gatsby'
import { rhythm } from '../../utils/typography'
import { ThemeSwitch } from '../theme-switch'

import logo from '../../../assets/logo.svg'

import './index.scss'

export const Top = ({ title, location, rootPath }) => {
  const isRoot = location.pathname === rootPath
  return (
    <nav className="top">
      <div
        className="container"
        style={{
          marginLeft: `auto`,
          marginRight: `auto`,
          maxWidth: rhythm(29),
          padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
        }}
      >
        <Link to={`/`} className="logo">
          <img src={logo} className="rocket" />
          &nbsp;{!isRoot && title}
        </Link>
        <div className="links">
          <Link className="link" to={`/about`}>
            About
          </Link>
        </div>
        <ThemeSwitch />
      </div>
    </nav>
  )
}
