import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { Admin_logout, logout } from '../../Redux/Slices/AuthSlice'

const Navbar = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { loginToggle } = useSelector((state) => {
        // console.log(state?.Auth);
        return state?.Auth
    })
    console.log(loginToggle);
    const name = localStorage.getItem('name')
    const adminName = localStorage.getItem('admin_name')
    const handelClick = () => {
        dispatch(logout())
        navigate('/login')
    }
    const adminlogoutHandel =()=>{
        dispatch(Admin_logout())
        navigate('/adminlogin')
    }
    return (
        <>
            <div class="container-fluid nav-bar bg-light">
                <nav class="navbar navbar-expand-lg navbar-light bg-white p-3 py-lg-0 px-lg-4">
                    <a href="" class="navbar-brand d-flex align-items-center m-0 p-0 d-lg-none">
                        <h1 class="text-primary m-0">Plumberz</h1>
                    </a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                        <span class="fa fa-bars"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarCollapse">
                        <div class="navbar-nav me-auto">
                            <Link to="/" class="nav-item nav-link active">Home</Link>

                            <Link to="/service" class="nav-item nav-link">Services</Link>

                            <Link to="/contact" class="nav-item nav-link">Contact</Link>
                            {
                                name && name === '' || name === undefined || name === null ?
                                    <>
                                        <Link to="/login" class="nav-item nav-link">Login</Link>
                                    </>
                                    :
                                    <>
                                        <p class="nav-item nav-link" style={{ "cursor": "pointer" }} onClick={handelClick} >Logout</p>
                                        <p class="nav-item nav-link">{`Hi ${name && name}`}</p>
                                    </>
                            }
                            {
                                adminName && adminName === '' || adminName === undefined || adminName === null ?
                                    <>
                                        <Link to="/admin" class="nav-item nav-link">Admin</Link>
                                    </>
                                    :
                                    <>
                                        <Link to="/admin" class="nav-item nav-link">{`Hi ${adminName && adminName}`}</Link>
                                        <p class="nav-item nav-link" style={{ "cursor": "pointer" }} onClick={adminlogoutHandel}>Admin Logout</p>
                                    </>
                            }

                        </div>
                        <div class="mt-4 mt-lg-0 me-lg-n4 py-3 px-4 bg-primary d-flex align-items-center">

                            <div class="d-flex flex-shrink-0 align-items-center justify-content-center bg-white" style={{ width: "45px", height: "45px" }} >
                                <i class="fa fa-phone-alt text-primary"></i>
                            </div>
                            <div class="ms-3">
                                <p class="mb-1 text-white">Emergency 24/7</p>
                                <h5 class="m-0 text-secondary">+012 345 6789</h5>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        </>
    )
}

export default Navbar