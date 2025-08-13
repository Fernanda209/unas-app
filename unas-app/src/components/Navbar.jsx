import React from 'react';
import { Link } from 'react-router-dom'
import '../css/nav.css'

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg">
            <div className="container-fluid">
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarTogglerDemo03"
                    aria-controls="navbarTogglerDemo03"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <Link className="nav-link active" aria-current="page" to="/"><i id='home' className="bi bi-house-door-fill"></i></Link>
                <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link" to="/products">Productos</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/citas">Citas</Link>
                        </li>
                        
                    </ul>
                    
                </div>
                <div>
                    <img src="https://imgs.search.brave.com/h8cvjID4bekPNs5gCm8MyIjmIkSRqIIbMYzgS2NpquQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/bmFtZXNuYWNrLmNv/bS9pbWFnZXMvemFy/bGEtdHJlbmR5LW5h/aWxzLTF4MS0yNDAw/eDI0MDAtMjAyNDAz/MjctaGdtd3E3dm1m/OWpiaDR4N2txNGcu/cG5nP2Nyb3A9MTox/LHNtYXJ0JndpZHRo/PTI1MCZkcHI9Mg" alt="" width={"50px"} height={"auto"}/>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
