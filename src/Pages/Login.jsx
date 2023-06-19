import { useFormik } from 'formik'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { UsersApi, redirectTo } from '../Redux/Slices/AuthSlice'
import { LoginSchema } from '../Validation/Schema'
import { toast } from 'react-toastify'

const initial = {
    email: '',
    password: ''
}
const Login = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { data, loading, loginToggle } = useSelector((state) => {
        console.log(state?.Auth);
        return state?.Auth
    })
    const { values, handleChange, handleBlur, handleSubmit, errors, touched } = useFormik({
        initialValues: initial,
        validationSchema: LoginSchema,
        onSubmit: (value) => {
            let a = data && data.filter((e) => {
                return (
                    e.email == value.email
                )
            })
            // console.log(a.length);
            if (a.length > 0) {
                if (a[0].password === value.password) {
                    localStorage.setItem("name", a[0].fname)
                    localStorage.setItem("token", a[0].id)
                    toast.success(`Hi ${a[0].fname}. You Login Successfully`)
                    const token = localStorage.getItem('token')
                    const name = localStorage.getItem('name')
                    if (token !== '' || token !== null || token !== undefined && name !== '' || name !== null || name !== undefined) {
                        navigate('/')
                    }
                } else {
                    toast.error('You Entered a Wrong Password')
                }
            } else {
                toast.error('Email is not registered')
            }
        }
    })
    useEffect(() => {
        dispatch(UsersApi())
    }, [])
    const handelClick = () => {
        dispatch(redirectTo())
    }
    return (
        <>
            <div class="container-fluid my-5 px-0">
                <div class="container position-relative wow fadeInUp" data-wow-delay="0.1s" style={{ marginTop: "6rem" }}>
                    <div class="row justify-content-center">
                        <div class="col-lg-5">
                            <div class="bg-light text-center p-5">
                                <h1 class="mb-4">Login Account</h1>
                                <form onSubmit={handleSubmit}>
                                    <div class="row g-3 text-start">
                                        <div class="col-12">
                                            {errors.email && touched.email ? (<label className='text-danger'>{errors.email}</label>) : <label htmlFor="name">Email Address</label>}
                                            <input type="email" class="form-control border-0 mt-2" onChange={handleChange} onBlur={handleBlur} value={values.email} placeholder="Enter Your Email" style={{ height: "55px" }} name='email' />
                                        </div>
                                        <div class="col-12">
                                            {errors.password && touched.password ? (<label className='text-danger'>{errors.password}</label>) : <label htmlFor="name">Your Password</label>}
                                            <input type="password" class="form-control border-0 mt-2" onChange={handleChange} onBlur={handleBlur} value={values.password} placeholder="Enter Your Password" style={{ height: "55px" }} name='password' />
                                        </div>
                                        <p className='text-start'>Don't have any account? <Link to='/register' onClick={handelClick}>click here</Link></p>
                                        <div class="col-12">
                                            <button class="btn btn-primary w-100 py-3" type="submit">Log In</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login