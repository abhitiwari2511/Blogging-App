import axios from "axios";
import { useEffect, useState } from "react";
import { BACKEND_URL } from "../config";

interface Blogs {
    id: string;
    title: string;
    content: string;
    publishedDate: string;
    author: {
        name: string;
    }
}


export const useBlogs = () => {
    const [blogs, setBlogs] = useState<Blogs[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get(`${BACKEND_URL}/api/v1/blog/bulk`, {
            headers: {
                Authorization: localStorage.getItem("token")
            }
        })
        .then((res) => {
            setBlogs(res.data.blogs);
            setLoading(false);
        })
    }, [])

    return { blogs, loading }
}