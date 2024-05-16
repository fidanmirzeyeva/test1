import React, { useEffect, useState } from 'react'
import './Admin.scss'
function Admin() {
  const [admin, setAdmin] = useState([])
  useEffect(() => {
   showAdmin()
  }, [])

  async function showAdmin() {
    const res = await fetch("http://localhost:5000/fa")
    const data =  await res.json()
    setAdmin(data)
    
  }
  async function deleteAdmin(id) {
    const res = await fetch("http://localhost:5000/fa/"+id,{method:"delete"});
      const data = await res.json()
     showAdmin()
    



    
  }
  return (
   <>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
            <th>Image</th>
            <th>Options</th>
          </tr>
        </thead>

        <tbody>
          {admin.map((x)=>(
            <tr key={x._id}>
              <td>{x.name}</td>
              <td>{x.price}</td>
              <td><img src={x.image} alt="" /></td>
              <td>
                <button onClick={()=>deleteAdmin(x._id)}>Delete</button>
                
              </td>
            </tr>
          ))}
        </tbody>
      </table>
   </>
  )
}

export default Admin
