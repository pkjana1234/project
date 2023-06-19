import React, { useEffect } from 'react'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { useDispatch, useSelector } from 'react-redux';
import { TestimonialApi } from '../Redux/Slices/HomeDataSlice';
const Testimonials = () => {
    const dispatch = useDispatch()
    const data = useSelector((state) => {
        console.log(state?.Banner?.testData);
        return state?.Banner?.testData
    })
    useEffect(() => {
        dispatch(TestimonialApi())
    }, [])
    return (
        <>
            <div class="container-xxl py-5 wow fadeInUp" data-wow-delay="0.1s">
                <div class="container">
                    <div class="text-center">
                        <h6 class="text-secondary text-uppercase">Testimonial</h6>
                        <h1 class="mb-5">Our Clients Say!</h1>
                    </div>
                    <div class="testimonial-carousel position-relative wow fadeInUp" data-wow-delay="0.1s">
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
                                data && data.map((e) => {
                                    return (
                                        <>
                                            <div class="testimonial-item text-center">
                                                <div class="testimonial-text bg-light text-center p-4 mb-4">
                                                    <p class="mb-0">{e.content}</p>
                                                </div>
                                                <img class="bg-light rounded-circle p-2 mx-auto mb-2" src={e.image} style={{ width: "80px", height: "80px" }} />
                                                <div class="mb-2">
                                                    <small class="fa fa-star text-secondary"></small>
                                                    <small class="fa fa-star text-secondary"></small>
                                                    <small class="fa fa-star text-secondary"></small>
                                                    <small class="fa fa-star text-secondary"></small>
                                                    <small class="fa fa-star text-secondary"></small>
                                                </div>
                                                <h5 class="mb-1">{e.name}</h5>
                                                <p class="m-0">{e.designation}</p>
                                            </div>
                                        </>
                                    )
                                })
                            }
                        </OwlCarousel>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Testimonials