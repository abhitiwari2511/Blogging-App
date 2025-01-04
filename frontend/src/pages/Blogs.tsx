import Appbar from "../components/Appbar"
import BlogsCard from "../components/BlogsCard"
import { useBlogs } from "../hooks";

const Blogs = () => {
  const {loading, blogs} = useBlogs();
  console.log(blogs); 

  if (loading) {
    return <div>
      loading...
    </div>
  }

  return (
    <div>
      <Appbar blog={blogs[0]} />
      <div className="max-w-xl flex flex-col mx-auto">
      {blogs && blogs.length > 0 ? (
        blogs.map(blog => (
          <BlogsCard
            key={blog.id}
            id={blog.id}
            authorName={blog.author.name || "Anonymous"} 
            title={blog.title}
            content={blog.content}
            publishedDate={blog.publishedDate}
          />
        ))
      ) : (
        <div>No blogs available</div>
      )}
      </div>
    </div>
  )
}

export default Blogs