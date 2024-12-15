import Appbar from "../components/Appbar"
import BlogsCard from "../components/BlogsCard"
import { useBlogs } from "../hooks";

const Blogs = () => {
  const {loading, blogs} = useBlogs();

  if (loading) {
    return <div>
      loading...
    </div>
  }

  return (
    <div>
      <Appbar />
      <div className="max-w-xl flex flex-col mx-auto">
        {blogs.map(blog => <BlogsCard
        authorName={blog.author.name || "Anonymous"} 
        title={blog.title}
        content={blog.content}
        publishedDate={blog.publishedDate} />)}
      </div>
    </div>
  )
}

export default Blogs