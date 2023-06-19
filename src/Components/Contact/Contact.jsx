import { useFormik } from 'formik'
import React from 'react'
import { ContactSchema } from '../../Validation/Schema'
import { useDispatch } from 'react-redux'
import { ApiContact } from '../../Redux/Slices/ContactSlice'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'
const initial = {
    name: '',
    email: '',
    subject: '',
    massage: ''
}
const Contact = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { values, handleChange, handleBlur, handleSubmit, touched, handleReset, errors } = useFormik({
        initialValues: initial,
        validationSchema: ContactSchema,
        onSubmit: (value) => {
            console.log(value);
            const token = localStorage.getItem('token')
            const name = localStorage.getItem('name')
            if (token === '' || token === null || token === undefined && name === '' || name === null || name === undefined) {
                navigate('/login')
                toast.error("Please Login First")
            }else{
                dispatch(ApiContact(value))
                handleReset()
            }
        }
    })
    return (
        <>
            <div class="container-xxl py-5">
                <div class="container">
                    <div class="row g-4">
                        <div class="col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                            <h6 class="text-secondary text-uppercase">Get In Touch</h6>
                            <h1 class="mb-4">Contact For Any Query</h1>
                            <p class="mb-4">The contact form is currently inactive. Get a functional and working contact form with Ajax & PHP in a few minutes. Just copy and paste the files, add a little code and you're done. <a href="https://htmlcodex.com/contact-form">Download Now</a>.</p>
                            <iframe class="position-relative w-100"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3001156.4288297426!2d-78.01371936852176!3d42.72876761954724!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4ccc4bf0f123a5a9%3A0xddcfc6c1de189567!2sNew%20York%2C%20USA!5e0!3m2!1sen!2sbd!4v1603794290143!5m2!1sen!2sbd"
                                frameborder="0" style={{ height: "300px", border: "0", allowFullScreen: "", ariaHidden: "false", tabIndex: "0" }}></iframe>
                            {/* please check style part */}
                        </div>
                        <div class="col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                            <div class="bg-light p-5 h-100 d-flex align-items-center">
                                <form onSubmit={handleSubmit}>
                                    <div class="row g-3">
                                        <div class="col-md-6">
                                            <div class="form-floating">
                                                <input type="text" class="form-control" id="name" placeholder="Your Name" onChange={handleChange} onBlur={handleBlur} name='name' value={values.name} />
                                                {errors.name && touched.name ? <label className='text-danger'>{errors.name}</label> : <label for="name">Your Name</label>}
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="form-floating">
                                                <input type="email" class="form-control" id="email" placeholder="Your Email" onChange={handleChange} onBlur={handleBlur} name='email' value={values.email} />
                                                {errors.email && touched.email ? <label className='text-danger'>{errors.email}</label> : <label for="name">Your Email Address</label>}
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <div class="form-floating">
                                                <input type="text" class="form-control" id="subject" placeholder="Subject" onChange={handleChange} onBlur={handleBlur} name='subject' value={values.subject} />
                                                {errors.subject && touched.subject ? <label className='text-danger'>{errors.subject}</label> : <label for="name">Your Subject</label>}
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <div class="form-floating">
                                                <textarea class="form-control" placeholder="Leave a message here" id="message" style={{ height: "150px" }} onChange={handleChange} onBlur={handleBlur} name='massage' value={values.massage} ></textarea>
                                                <label for="message">Message(optional)</label>
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <button class="btn btn-primary w-100 py-3" type="submit">Send Message</button>
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

export default Contact