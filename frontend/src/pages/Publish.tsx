import axios from "axios"
import Appbar from "../components/Appbar"
import { BACKEND_URL } from "../config"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

const Publish = () => {
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const navigate = useNavigate()

  return (
    <div>
        <Appbar />      
        <div className="pt-10 max-w-screen-md mx-auto">
            <div className="pb-5">
                <input onChange={e => (
                    setTitle(e.target.value)
                )} className="bg-gray-50 border outline-none border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5" placeholder="Title" />
            </div>
            <div>
                <div className="mb-4 border border-slate-300 rounded-lg">
                    <div className="px-3 py-2">
                        <textarea onChange={e => (
                            setDescription(e.target.value)
                        )} rows={11} className="outline-none block w-full px-0 text-md text-gray-800" placeholder="Write Your Blog..." required />
                    </div>
                </div>
            </div>
            <div>
                <button onClick={async () => {
                    const res = await axios.post(`${BACKEND_URL}/api/v1/blog`, {
                        title,
                        content: description
                    },{
                        headers: {
                            Authorization: localStorage.getItem("token")
                        }
                    })
                    navigate(`/blog/${res.data.id}`)
                }} type="submit" className="inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800">
                    Publish Blog
                </button>
            </div>  
        </div>
    </div>
  )
}

export default Publish