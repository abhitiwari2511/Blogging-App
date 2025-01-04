import { Blogs } from "../hooks"
import Appbar from "./Appbar"
import Avatar from "./Avatar"

const CompleteBlog = ({ blog }: {blog: Blogs}) => {
  return (
      <div>
        <Appbar blog={blog} />
        <div className="flex justify-center items-center">
          <div className="grid grid-cols-3 pt-4 max-w-screen-xl px-10 w-full">
            <div className="col-span-2">
              <div className="text-5xl font-extrabold">
                {blog.title}
              </div>
              <div className="text-sm text-slate-500 pt-2">
                Posted on 25 Novemeber
              </div>
              <div className="text-2xl text-slate-600 pt-4">
                {blog.content}
              </div>
            </div>

            <div className="col-span-1">
              <div className="text-slate-600 text-lg">
                Author
              </div>
              <div className="flex">
                  <div className="pr-3 flex justify-center items-center">
                    <Avatar name={blog.author.name || "Anonymous"} />             
                  </div>
                <div>
                  <div className="font-bold text-xl">
                    {blog.author.name || "Anonymous"}
                  </div>
                  <div className="text-slate-700 text-md">
                    Random description about the author and his works. Lorem ipsum dolor sit.
                  </div>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </div>
  )
}

export default CompleteBlog