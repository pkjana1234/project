import React from 'react'
import { Link } from 'react-router-dom'

const ContactBanR = () => {
  let a = window.location.href
  return (
    <>
     <div class="container-fluid page-header mb-5 py-5">
        <div class="container">
            <h1 class="display-3 text-white mb-3 animated slideInDown">{a.slice(22,40)}</h1>
            <nav aria-label="breadcrumb animated slideInDown">
                <ol class="breadcrumb text-uppercase">
                    <li class="breadcrumb-item"><Link class="text-white" to="/">Home</Link></li>
                    {/* <li class="breadcrumb-item"><a class="text-white" href="#">Pages</a></li> */}
                    <li class="breadcrumb-item text-white active" aria-current="page">{a.slice(22,40)}</li>
                </ol>
            </nav>
        </div>
      </div>
    </>
  )
}

export default ContactBanR