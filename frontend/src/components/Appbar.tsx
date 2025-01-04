import { Blogs } from "../hooks"
import Avatar from "./Avatar"
import { Link } from "react-router-dom"

const Appbar = ({ blog } : {blog: Blogs}) => {
  return (
    <div className="border-b flex justify-between px-10 py-4">
      <Link className="font-bold cursor-pointer flex items-center text-lg" to={"/blogs"}>
          Blogging App
      </Link>
      <div>
        <Link to={"/publish"}>
          <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2.5 px-5 text-sm mr-2 rounded-full">
            New Blog
          </button>
        </Link>
        <Avatar name={blog.author.name}/>
      </div>
    </div>
  )
}

export default Appbar