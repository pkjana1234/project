import React from 'react'
import { Link } from 'react-router-dom'

const Admin = () => {

    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <div className="card">
                            <div className="card-header">
                                <h4 className="text-center">
                                    Service Requests
                                </h4>
                            </div>
                            <img style={{ "height": "300px", "width": "100%", "object-fit": "cover" }} src="https://img.freepik.com/free-vector/flat-illustration-customer-support_23-2148878580.jpg?w=826&t=st=1687178426~exp=1687179026~hmac=4dfe02711e60b14c2e37d757fa95fc08362be957ffe0c112e334a59aeaf9b7c2" className='img-fluid card-top-img' alt="" />
                            <div className="card-body">
                                <p className="text-muted text-center">Here has all the Service requests that entered by the users</p>
                                <div className="text-center">
                                    <Link to='/admin/servicerequest'><button className='btn btn-outline-info text-center'>View all</button></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="card">
                            <div className="card-header">
                                <h4 className="text-center">
                                    Contact Requests
                                </h4>
                            </div>
                            <img style={{ "height": "300px", "width": "100%", "object-fit": "cover" }} src="https://img.freepik.com/free-vector/flat-design-illustration-customer-support_23-2148887720.jpg?w=826&t=st=1687178716~exp=1687179316~hmac=e05b729dd90774e971e5f3758eb300cbabfe0f7f1c7952fe0d058ba349ccabc8" className='img-fluid card-top-img' alt="" />
                            <div className="card-body">
                                <p className="text-muted text-center">Here has all the Contact request that entered by the users</p>
                                <div className="text-center">
                                    <Link to='/admin/contactrequest'><button className='btn btn-outline-info text-center'>View all</button></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Admin
