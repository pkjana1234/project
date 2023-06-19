import { useFormik } from 'formik'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { RegisterApi, UsersApi, redirectTo } from '../Redux/Slices/AuthSlice'
import { RegisterSchema } from '../Validation/Schema'
import { toast } from 'react-toastify'

const initial = {
    id: new Date().getTime(),
    fname: '',
    lname: '',
    email: '',
    phone: '',
    password: ''
}
const Register = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { loginToggle, loading, data } = useSelector((state) => {
        // console.log(state?.Auth);
        return state?.Auth
    })
    const { values, handleChange, handleBlur, handleSubmit, errors, touched } = useFormik({

        initialValues: initial,
        validationSchema : RegisterSchema,
        onSubmit: (value) => {
            const checkmail = data && data.filter((e)=>{
                return(
                    e.email == value.email
                )
            })
            if(checkmail.length > 0 ){
                toast.warning("Email already registered")
            }else{
                dispatch(RegisterApi(value))
            }
        }
    })

    useEffect(() => {
        navigate(loginToggle)
        dispatch(UsersApi())
    }, [loginToggle])

    return (
        <>
            <div className="container-xxl py-5">
                <div className="container">
                    <div className="row g-4">
                        <div className="col-md-6 mx-auto wow fadeInUp" data-wow-delay="0.1s">
                            <div className="bg-light p-5 h-100 d-flex align-items-center">
                                <form onSubmit={handleSubmit}>
                                    <div className="row g-3">
                                        <h2 className="fw-bold text-center">Register Account</h2>
                                        <div className="col-md-6">
                                            <div className="form-floating">
                                                <input type="text" className="form-control" placeholder="First Name" name='fname' value={values.fname} onChange={handleChange} onBlur={handleBlur} />
                                                {errors.fname && touched.fname ? (<label className='text-danger'>{errors.fname}</label>) : <label htmlFor="name">First Name</label>}
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-floating">
                                                <input type="text" className="form-control" placeholder="Last Name" name='lname' value={values.lname} onChange={handleChange} onBlur={handleBlur} />
                                                 {errors.lname && touched.lname ? (<label className='text-danger'>{errors.lname}</label>) : <label htmlFor="name">Last Name</label>}
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="form-floating">
                                                <input type="email" className="form-control" placeholder="Enter your Email here" name='email' value={values.email} onChange={handleChange} onBlur={handleBlur} />
                                                 {errors.email && touched.email ? (<label className='text-danger'>{errors.email}</label>) : <label htmlFor="email">Email here</label>}
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="form-floating">
                                                <input type="text" className="form-control" placeholder="Enter your phone number" name='phone' value={values.phone} onChange={handleChange} onBlur={handleBlur} />
                                                 {errors.phone && touched.phone ? (<label className='text-danger'>{errors.phone}</label>) : <label htmlFor="text">Phone Number</label>}
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="form-floating">
                                                <input type="password" className="form-control" placeholder="password" name='password' value={values.password} onChange={handleChange} onBlur={handleBlur} />
                                                 {errors.password && touched.password ? (<label className='text-danger'>{errors.password}</label>) : <label htmlFor="password">Password</label>}
                                            </div>
                                        </div>
                                        <p>already have an account? <Link to='/login'>click here</Link></p>
                                        <div className="col-12">
                                            <button className="btn btn-primary w-100 py-3" type="submit">Submit</button>
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

export default Register