import React, { useEffect } from 'react'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { useDispatch, useSelector } from 'react-redux';
import { MainServiceApi } from '../Redux/Slices/HomeDataSlice';
import { Link } from 'react-router-dom';
const HomeServices = () => {
    const dispatch = useDispatch()
    const data = useSelector((state) => {
        console.log(state?.Banner?.mainservice);
        return state?.Banner?.mainservice
    })
    useEffect(() => {
        dispatch(MainServiceApi())
    }, [])
    return (
        <>

            <div class="container-fluid py-5 px-4 px-lg-0">
                <div class="row g-0">
                    <div class="col-lg-3 d-none d-lg-flex">
                        <div class="d-flex align-items-center justify-content-center bg-primary w-100 h-100">
                            <h1 class="display-3 text-white m-0" style={{ transform: "rotate(-90deg)" }}>15 Years Experience</h1>
                        </div>
                    </div>
                    <div class="col-md-12 col-lg-9">
                        <div class="ms-lg-5 ps-lg-5">
                            <div class="text-center text-lg-start wow fadeInUp" data-wow-delay="0.1s">
                                <h6 class="text-secondary text-uppercase">Our Services</h6>
                                <h1 class="mb-5">Explore Our Services</h1>
                            </div>
                            <div class="service-carousel position-relative wow fadeInUp" data-wow-delay="0.1s">
                                <OwlCarousel className='owl-theme' center={true} nav={true} items={1} margin={20} dots={false} loop={true} autoplay={true} smartSpeed={1000} navText={['<i class="bi bi-arrow-left"></i>', '<i class="bi bi-arrow-right"></i>']} responsive={
                                    {
                                        0: {
                                            items: 1
                                        },
                                        576: {
                                            items: 2
                                        },
                                        768: {
                                            items: 3
                                        },
                                        992: {
                                            items: 2
                                        },
                                        1200: {
                                            items: 3
                                        }
                                    }
                                }>
                                    {
                                        data && data?.map((e) => {
                                            return (
                                                <>
                                                    <div class="bg-light p-4">
                                                        <div class="d-flex align-items-center justify-content-center border border-5 border-white mb-4" style={{ width: "75px", height: "75px" }}>
                                                            <i class={e.icon}></i>
                                                        </div>
                                                        <h4 class="mb-3">{e.heading}</h4>
                                                        <p>{e.subheading}</p>
                                                        {
                                                            e?.list && e?.list.map((element)=>{
                                                                return(
                                                                    <>
                                                                     <p class="text-primary fw-medium"><i class="fa fa-check text-success me-2"></i>{element}</p>
                                                                    </>
                                                                )
                                                            })
                                                        }
                                                        <Link to={`/mainservice/${e.id}`} class="btn bg-white text-primary w-100 mt-2">Read More<i class="fa fa-arrow-right text-secondary ms-2"></i></Link>
                                                    </div>
                                                </>
                                            )
                                        })
                                    }
                                </OwlCarousel>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </>
    )
}
export default HomeServices