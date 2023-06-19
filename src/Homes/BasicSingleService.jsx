import React, { useEffect, useState } from 'react'
import ContactBanR from '../Components/Contact/ContactBanR'
import axiosInstance from '../ApiBuild/ApiInstance'
import { useParams } from 'react-router-dom'

const BasicSingleService = () => {
    const { id } = useParams()
    const [data, setData] = useState([])
    const singleserviceApi = async () => {
        const res = await axiosInstance.get(`basicservice/${id}`)
        console.log(res.data);
        setData(res?.data)
    }
    useEffect(() => {
        singleserviceApi()
    }, [])
    return (
        <>
            <ContactBanR />
            <div className="container">
                <div className="singelbasicservice">
                    <img src={`.${data.image}`} className='img-fluid' alt="" />
                    <div className="mt-5">
                        <h2 className="fw-bold pb-3">{data.heading}</h2>
                        <p className="text-mute lh-lg">{data.content}</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default BasicSingleService
