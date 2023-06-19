import React, { useEffect } from 'react'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { useDispatch, useSelector } from 'react-redux';
import { BannerApi } from '../Redux/Slices/HomeDataSlice';
import { Link } from 'react-router-dom';
const HomeCarousels = () => {
    const dispatch = useDispatch()
    const data = useSelector((state) => {
        return state?.Banner?.bannerdata
    })
    useEffect(() => {
        dispatch(BannerApi())
    }, [])
    return (
        <>
            <div class="container-fluid p-0 mb-5">
                <div class=" header-carousel position-relative" >
                    <OwlCarousel className='owl-theme' center={true} nav={true} items={1} margin={20} dots={false} loop={true} autoplay={true} smartSpeed={1500} navText={['<i class="bi bi-chevron-left"></i>', '<i class="bi bi-chevron-right"></i>']}>
                        {
                            data && data?.map((e) => {
                                return (
                                    <>
                                        <div class="owl-carousel-item position-relative" key={e.id} >
                                            <img class="img-fluid" src={e.image} alt="" />
                                            <div class="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center" style={{ background: "rgba(0, 0, 0, .4);" }}>
                                                <div class="container">
                                                    <div class="row justify-content-start">
                                                        <div class="col-10 col-lg-8">
                                                            <h5 class="text-white text-uppercase mb-3 animated slideInDown">{e.subheading}</h5>
                                                            <h1 class="display-3 text-white animated slideInDown mb-4">{e.heading}</h1>
                                                            <p class="fs-5 fw-medium text-white mb-4 pb-2">{e.content}</p>
                                                            <Link to="/service" class="btn btn-primary py-md-3 px-md-5 me-3 animated slideInLeft">Read More</Link>
                                                            <Link to="/contact" class="btn btn-secondary py-md-3 px-md-5 animated slideInRight">Free Quote</Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </>
                                )
                            })
                        }
                    </OwlCarousel>
                </div>
            </div>
        </>
    )
}

export default HomeCarousels