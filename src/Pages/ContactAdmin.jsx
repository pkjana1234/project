import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getApiContact } from '../Redux/Slices/AdminSlice'

const ContactAdmin = () => {
  const dispatch = useDispatch()
  const {contactData, loader } = useSelector((state) => {
    console.log(state?.Admin);
    return state?.Admin
  })
  useEffect(() => {
    dispatch(getApiContact())
  }, [])
  return (
    <>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">NAME</th>
            <th scope="col">EMAIL</th>
            <th scope="col">SUBJECT</th>
            <th scope="col">MASSAGE</th>

          </tr>
        </thead>
        <tbody>
          {
            contactData && contactData?.map((e) => {
              return (
                <>
                  <tr>
                    <th scope="row">{e.id}</th>
                    <td>{e.name}</td>
                    <td>{e.email}</td>
                    <td>{e.subject}</td>
                    {/* <td>{e.keyword}</td> */}
                    <td>{e.massage}</td>
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

export default ContactAdmin
