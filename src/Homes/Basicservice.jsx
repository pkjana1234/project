import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { BasicServiceApi } from '../Redux/Slices/HomeDataSlice'
import { Link } from 'react-router-dom'

const Basicservice = () => {
    const dispatch = useDispatch()
    const data = useSelector((state) => {
        // console.log(state?.Banner?.basicservice);
        return state?.Banner?.basicservice
    })
    useEffect(() => {
        dispatch(BasicServiceApi())
    }, [])
    return (
        <>
            <div className="container-xxl py-5">
                <div className="container">
                    <div className="row g-4">
                        {
                            data && data.map((e) => {
                                return (
                                    <>
                                        <div className="col-lg-4 col-md-6 service-item-top wow fadeInUp" data-wow-delay="0.1s">
                                            <div className="overflow-hidden">
                                                <img className="img-fluid w-100 h-100" src={e.image} alt />
                                            </div>
                                            <div className="d-flex align-items-center justify-content-between bg-light p-4">
                                                <h5 className="text-truncate me-3 mb-0">{e.heading}</h5>
                                                <Link className="btn btn-square btn-outline-primary border-2 border-white flex-shrink-0" to={`/service/${e.id}`}><i className="fa fa-arrow-right" /></Link>
                                            </div>
                                        </div>
                                    </>
                                )
                            })
                        }
                    </div>
                </div>
            </div>

        </>
    )
}

export default Basicservice
