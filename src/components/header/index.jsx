import React from 'react'
import { Link } from 'gatsby'

import './index.scss'

export const Header = ({ title, location, rootPath }) => {
  const isRoot = location.pathname === rootPath
  return (
    isRoot && (
      <div className="presentation">
        <h1 className="home-header">
          <Link to={`/about`} className="link">
            Hey, <span className="name">{title}</span> here
          </Link>
        </h1>
        <p>Web engineer. I write here to not google it.</p>
      </div>
    )
  )
}
