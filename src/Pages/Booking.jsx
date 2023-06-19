import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { MainServiceApi } from '../Redux/Slices/HomeDataSlice'
import { useFormik } from 'formik'
import { BookServiceSchema } from '../Validation/Schema'
import { ApiServiceBooks } from '../Redux/Slices/ServicebookingSlice'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
const initial = {
    id: new Date().getTime(),
    name: '',
    email: '',
    service: '',
    date: '',
    keyword: '',
    accepted: 'false'
}
const Booking = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const data = useSelector((state) => {
        console.log(state);
        return state?.Banner?.mainservice
    })
    const { servicedata, loader } = useSelector((state) => {
        console.log(state?.Service);
        return state?.Service

    })
    const { values, handleChange, handleBlur, handleSubmit, errors, touched, handleReset } = useFormik({
        initialValues: initial,
        validationSchema: BookServiceSchema,
        onSubmit: (value) => {
            // console.log(value);
            const token = localStorage.getItem('token')
            const name = localStorage.getItem('name')
            if (token === '' || token === null || token === undefined && name === '' || name === null || name === undefined){
                navigate('/login')
                toast.error("Please Login First")
            }else{
                dispatch(ApiServiceBooks(value))
                handleReset()
            }
        }
    })
    useEffect(() => {
        dispatch(MainServiceApi())
    }, [])
    return (
        <>
            <div class="container-fluid my-5 px-0">
                <div class="video wow fadeInUp" data-wow-delay="0.1s">
                    <button type="button" class="btn-play" data-bs-toggle="modal" data-src="https://www.youtube.com/embed/DWRcNpR6Kdc" data-bs-target="#videoModal">
                        <span></span>
                    </button>

                    <div class="modal fade" id="videoModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div class="modal-dialog">
                            <div class="modal-content rounded-0">
                                <div class="modal-header">
                                    <h5 class="modal-title" id="exampleModalLabel">Youtube Video</h5>
                                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div class="modal-body">
                                    <div class="ratio ratio-16x9">
                                        <iframe width="560" height="315" src="https://www.youtube.com/embed/8jxRn-T_LCs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <h1 class="text-white mb-4">Emergency Plumbing Service</h1>
                    <h3 class="text-white mb-0">24 Hours 7 Days a Week</h3>
                </div>
                <div class="container position-relative wow fadeInUp" data-wow-delay="0.1s" style={{ marginTop: "-6rem" }}>
                    <div class="row justify-content-center">
                        <div class="col-lg-8">
                            <div class="bg-light text-center p-5">
                                <h1 class="mb-4">Book For A Service</h1>
                                <form onSubmit={handleSubmit}>
                                    <div class="row g-3 text-start">
                                        <div class="col-12 col-sm-6">
                                            {errors.name && touched.name ? <label className='text-danger'>{errors.name}</label> : <label>Enter Your Name</label>}
                                            <input type="text" class="form-control border-0 mt-2" style={{ height: "55px" }} name='name' onChange={handleChange} onBlur={handleBlur} value={values.name} />
                                        </div>
                                        <div class="col-12 col-sm-6">
                                            {errors.email && touched.email ? <label className='text-danger'>{errors.email}</label> : <label>Enter Your Email</label>}
                                            <input type="email" class="form-control border-0 mt-2" style={{ height: "55px" }} name='email' onChange={handleChange} onBlur={handleBlur} value={values.email} />
                                        </div>
                                        <div class="col-12 col-sm-6">
                                            {errors.service && touched.service ? <label className='text-danger'>{errors.service}</label> : <label>Select Your Service</label>}
                                            <select class="form-select border-0 mt-2" style={{ height: "55px" }} name='service' onChange={handleChange} onBlur={handleBlur} value={values.service} >
                                                <option selected ></option>
                                                {
                                                    data && data?.map((e) => {
                                                        return (
                                                            <>
                                                                <option value={e.heading}>{e.heading}</option>
                                                            </>
                                                        )
                                                    })
                                                }
                                            </select>
                                        </div>
                                        <div class="col-12 col-sm-6">
                                            <div class="date" id="date1" data-target-input="nearest">
                                                {errors.date && touched.date ? <label className='text-danger'>{errors.date}</label> : <label>Pick a Date</label>}
                                                <input type="date" class="form-control border-0 datetimepicker-input mt-2" placeholder="Service Date" style={{ height: "55px" }} name='date' onChange={handleChange} onBlur={handleBlur} value={values.date} />
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <textarea class="form-control border-0 mt-2" placeholder="Special Request (optional)" rows={6} onChange={handleChange} onBlur={handleBlur} value={values.keyword} name='keyword' ></textarea>
                                        </div>
                                        <div class="col-12">
                                            <button class="btn btn-primary w-100 py-3" type="submit">{loader && loader === true ? "Loading...." : "Book Now"}</button>
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

export default Booking