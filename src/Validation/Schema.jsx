import * as Yup from 'yup'

export const RegisterSchema = Yup.object({
    fname: Yup.string().min(2).max(10).required("Please Enter Your First Name"),
    lname: Yup.string().min(2).max(10).required("Please Enter Your Last Name"),
    email: Yup.string().email().required("Please Enter Your Email Address"),
    phone: Yup.number().required("Please Enter Your Mobile Number"),
    password: Yup.string().min(6).max(12).required("Please Enter Your Password")
})
export const LoginSchema = Yup.object({
    email: Yup.string().email().required("Please Enter Your Email Address"),
    password: Yup.string().min(6).max(12).required("Please Enter Your Password")
})
export const AdminLoginSchema = Yup.object({
    email: Yup.string().email().required("Please Enter Admin Email Address"),
    password: Yup.string().min(6).max(12).required("Please Enter Admin Password")
})

export const BookServiceSchema = Yup.object({
    name : Yup.string().min(2).max(20).required("Please Enter Your Name"),
    email : Yup.string().email().required("Please Enter Your Email Address"),
    service : Yup.string().required("Please Select Your Service"),
    date : Yup.string().required("Please Pick up a date"),
})
export const ContactSchema = Yup.object({
    name : Yup.string().min(2).max(20).required("Please Enter Your Name"),
    email : Yup.string().email().required("Please Enter Your Email"),
    subject : Yup.string().required("Please Enter Your Subject"),
})