import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { MembersApi } from '../Redux/Slices/HomeDataSlice'

const Team = () => {
    const dispatch = useDispatch()
    const data = useSelector((state) => {
        console.log(state?.Banner?.memberData);
        return state?.Banner?.memberData
    })
    useEffect(() => {
        dispatch(MembersApi())
    }, [])
    return (
        <>
            <div class="container-xxl py-5">
                <div class="container">
                    <div class="text-center wow fadeInUp" data-wow-delay="0.1s">
                        <h6 class="text-secondary text-uppercase">Our Technicians</h6>
                        <h1 class="mb-5">Our Expert Technicians</h1>
                    </div>
                    <div class="row g-4">
                        {
                            data && data?.map((e) => {
                                return (
                                    <>
                                        <div class="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                                            <div class="team-item">
                                                <div class="position-relative overflow-hidden">
                                                    <img class="img-fluid" src={e.image} alt="" />
                                                </div>
                                                <div class="team-text">
                                                    <div class="bg-light">
                                                        <h5 class="fw-bold mb-0 text-uppercase">{e.name}</h5>
                                                        <small>{e.designation}</small>
                                                    </div>
                                                    <div class="bg-primary">
                                                        <a class="btn btn-square mx-1" href={e.facebookID} target='_blank' ><i class="fab fa-facebook-f"></i></a>
                                                        {/* <a class="btn btn-square mx-1" href=""><i class="fab fa-twitter"></i></a> */}
                                                        <a class="btn btn-square mx-1" href={e.instaID} target='_blank' ><i class="fab fa-instagram"></i></a>
                                                    </div>
                                                </div>
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

export default Team