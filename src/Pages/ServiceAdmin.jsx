import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getApiService } from '../Redux/Slices/AdminSlice'
import AuthInstance from '../ApiBuild/AuthInstance'
import { toast } from 'react-toastify'
const ServiceAdmin = () => {
  const dispatch = useDispatch()
  const { serviceData, contactData, loader } = useSelector((state) => {
    console.log(state?.Admin);
    return state?.Admin
  })
  useEffect(() => {
    dispatch(getApiService())
  }, [])

  const handelEdit = async (id) => {
    const res = await AuthInstance.patch(`servicebook/${id}`, {
      "accepted": "true"
    })
    if (res?.status === 200) {
      toast.success("Service Accepted")
    } else {
      toast.error("something Went Wrong")
    }
    dispatch(getApiService())

  }
  const handelRemove = async (id) => {
    const res = await AuthInstance.delete(`servicebook/${id}`)
    console.log(res);
    if (res?.status === 200) {
      toast.success("Service has been Removed Successfully")
    } else {
      toast.error("something Went Wrong")
    }
    dispatch(getApiService())
  }
  return (
    <>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">NAME</th>
            <th scope="col">SERVICE</th>
            <th scope="col">DATE</th>
            <th scope="col">STATUS</th>
            <th scope="col">ACTION</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          {
            serviceData && serviceData?.map((e) => {
              return (
                <>
                  <tr>
                    <th scope="row">{e.id}</th>
                    <td>{e.name}</td>
                    <td>{e.service}</td>
                    <td>{e.date}</td>
                    {/* <td>{e.keyword}</td> */}
                    <td>{e.accepted}</td>
                    <td>
                      <button class='btn btn-outline-success' onClick={() => { handelEdit(e.id) }} >Accept</button>
                      <button class='btn btn-outline-danger ms-3' onClick={() => { handelRemove(e.id) }}>Remove</button>
                    </td>
                  </tr>
                </>
              )
            })
          }

        </tbody>
      </table>
    </>
  )
}

export default ServiceAdmin
