import { useFormik } from 'formik'
import React, { useEffect } from 'react'
import { AdminLoginSchema } from '../Validation/Schema'
import { useDispatch, useSelector } from 'react-redux'
import { AdminApi } from '../Redux/Slices/AuthSlice'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
const initial = {
    email: '',
    password: ''
}
const AdminLogin = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { adminData } = useSelector((state) => {
        console.log(state?.Auth);
        return state?.Auth
    })
    const { values, handleChange, handleBlur, handleSubmit, touched, errors } = useFormik({
        initialValues: initial,
        validationSchema: AdminLoginSchema,
        onSubmit: (value) => {
            console.log(value);
            if (adminData[0].email === value.email && adminData[0].password === value.password) {
                toast.success(`Hi ${adminData[0].name} login successful`)
                localStorage.setItem("admin_token",adminData[0].id)
                localStorage.setItem("admin_name",adminData[0].name)
                navigate('/admin')
            } else {
                toast.error("Please Enter right credentials")
            }
        }
    })
    useEffect(() => {
        dispatch(AdminApi())
    }, [])
    return (
        <>
            <div class="container-fluid my-5 px-0">
                <div class="container position-relative wow fadeInUp" data-wow-delay="0.1s" style={{ marginTop: "6rem" }}>
                    <div class="row justify-content-center">
                        <div class="col-lg-5">
                            <div class="bg-light text-center p-5">
                                <h1 class="mb-4">Admin Login</h1>
                                <form onSubmit={handleSubmit}>
                                    <div class="row g-3 text-start">
                                        <div class="col-12">
                                            {errors.email && touched.email ? (<label className='text-danger'>{errors.email}</label>) : <label htmlFor="name">Email Address</label>}
                                            <input type="email" class="form-control border-0 mt-2" placeholder="Enter Admin Email" style={{ height: "55px" }} name='email' onChange={handleChange} onBlur={handleBlur} value={values.email} />
                                        </div>
                                        <div class="col-12">
                                            {errors.password && touched.password ? (<label className='text-danger'>{errors.password}</label>) : <label htmlFor="name">Your Password</label>}
                                            <input type="password" class="form-control border-0 mt-2" placeholder="Enter Admin Password" style={{ height: "55px" }} name='password' onChange={handleChange} onBlur={handleBlur} value={values.password} />
                                        </div>
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

export default AdminLogin
