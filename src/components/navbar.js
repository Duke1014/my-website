import React from 'react'
import { Link } from 'react-router-dom'

export default function () {
  return (
    <div className="nav-bar">
        <a>
            <Link to="/">Home</Link>
        </a>
        <a>
            <Link to="/music">Music</Link>
        </a>
        <a>
            <Link to="/gallery">Gallery</Link>
        </a>
        <a>
            <Link to="/contact">Contact</Link>
        </a>
    </div>
  )
}
