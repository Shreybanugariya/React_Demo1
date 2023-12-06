/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar(mode) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${mode.mode} bg-${mode.mode}`}>
    <Link className="navbar-brand" to="/">Todos  </Link>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
  
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mr-auto">
        <li className="nav-item active">
          <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
        </li>
        <li className="nav-item active">
          <Link className="nav-link" to="/todos">Notes</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/about">About</Link>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Status
          </a>
          <div className="dropdown-menu" aria-labelledby="navbarDropdown">
            <a className="dropdown-item" href="#">To DO</a>
            <a className="dropdown-item" href="#">In action</a>
            <a className="dropdown-item" href="#">Completed</a>
          </div>
        </li>
      </ul>
      <form className="form-inline my-2 my-lg-0">
        {/* <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/> */}
        {/* <button className="btn btn-outline-primary my-2 my-sm-0" type="submit">Search</button> */}
        <div className={`custom-control custom-checkbox text-${mode.mode === 'light' ? 'dark' : 'light'}`}>
          <input type="checkbox" onClick={mode.toggleMode} className="custom-control-input" id="customCheck1" />
          <label className="custom-control-label" htmlFor="customCheck1">Dark Mode</label>
        </div>
      </form>
    </div>
  </nav>
  )
}
