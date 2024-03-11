import axios from 'axios'
import React, { useState } from 'react'
import { DELETEUSER_URL} from '../Routes/urls'
import { getAxiosStatus } from '../utils/utils'
import { useNavigate } from 'react-router-dom'


const Deleteacount = () => {
  const [formValues, setFormValues] = useState({email: "", password: "" })
  const [error,setError]=useState("")
  const nav=useNavigate()
  const deleteacount = async (e) => {
      e.preventDefault()
      try{
          await axios.delete(DELETEUSER_URL, formValues)
          nav("/register")
      }
      catch (error){
          if(getAxiosStatus(error)==409){
              setError("Details Error")
          }
      }
  }
  return (
      <div className="max-w-md mx-auto mt-8 p-8 bg-white rounded shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Delete User</h2>
          <form onSubmit={deleteacount}>
              <div className="mb-4">
                  <label htmlFor="email" className="block text-gray-600 text-sm font-medium mb-2">
                      Email
                  </label>
                  <input
                      className="w-full border p-2 rounded focus:outline-none focus:border-blue-500"
                      onChange={e => setFormValues({ ...formValues, email: e.target.value })}
                  />
              </div>
              <div className="mb-6">
                  <label htmlFor="password" className="block text-gray-600 text-sm font-medium mb-2">
                      Password
                  </label>
                  <input
                      className="w-full border p-2 rounded focus:outline-none focus:border-blue-500"
                      onChange={e => setFormValues({ ...formValues, password: e.target.value })}
                  />
              </div>
              <button
                  type="submit"
                  className="w-full bg-blue-500 text-white p-3 rounded focus:outline-none hover:bg-blue-600"
              >
                  Delete User
              </button>
              {error&&<span className='text-red-600 ma-auto'>{error}</span>}
          </form>
      </div>
  )
}

export default Deleteacount
