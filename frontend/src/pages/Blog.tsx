import { useParams } from "react-router-dom"
import { useBlog } from "../hooks"
import CompleteBlog from "../components/CompleteBlog";

const Blog = () => {
  const { id } = useParams();
  const {blog, loading} = useBlog({id : id || ""});
  
  if (loading) {
    return <div>Loading...</div>
  }
  if (!blog) {
    return <div>Blog Not Found</div>
  }

  return (
    <div>
      <CompleteBlog blog={blog} />
    </div>
  )
}

export default Blog