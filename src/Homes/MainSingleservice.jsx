import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axiosInstance from '../ApiBuild/ApiInstance'
import ContactBanR from '../Components/Contact/ContactBanR'

const MainSingleservice = () => {
    const { id } = useParams()
    const [data, setData] = useState([])
    const mainsingleserviceapi = async () => {
        const res = await axiosInstance.get(`mainservice/${id}`)
        setData(res.data)
    }
    useEffect(() => {
        mainsingleserviceapi()
    }, [])
    // console.log(data);
    return (
        <>
            <ContactBanR />
            <div className="container">
                <div className="row">
                    <div className="col-md-6 align-self-center">
                        <div className="container text-center ">
                            <img src={data && data.image} className='img-fluid' alt="" srcset="" />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="bg-light p-4">
                            <div class="d-flex align-items-center justify-content-center border border-5 border-white mb-4" style={{ width: "75px", height: "75px" }}>
                                <i class={data && data.icon}></i>
                            </div>
                            <h2>{data && data.heading}</h2>
                            <p className="text-muted lh-lg">{data.content}</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MainSingleservice
