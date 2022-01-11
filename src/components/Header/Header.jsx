import React from 'react'
import logo from '../../logo.svg'

const Navbar = () => {
    return (
        <header>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">
                        <img src={logo} width="50px"/>
                        React Course
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link" href="#">Home</a>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Levels
                            </a>
                            <ul className="dropdown-menu bg-dark" aria-labelledby="navbarDropdown">
                                <li><a className="dropdown-item text-light" href="#">Basic</a></li>
                                <li><hr className="dropdown-divider text-light" /></li>
                                <li><a className="dropdown-item text-light" href="#">Intermediate</a></li>
                                <li><hr className="dropdown-divider text-light" /></li>
                                <li><a className="dropdown-item text-light" href="#">Advance</a></li>
                            </ul>
                        </li>
                    </ul>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Navbar
