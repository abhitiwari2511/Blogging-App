import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { Hono } from "hono";
import { verify } from "hono/jwt";
import { blogPostInput, updatePostInput } from "@abhit2511/common/dist/blogs";

export const blogRouter = new Hono<{
  Bindings: {
    DATABASE_URL: string;
    JWT_SECRET: string;
  },
  Variables: {
    userId: string;
  }
}>();

// middleware to check if user is logged in
blogRouter.use("/*", async (c, next) => {
  const headers = await c.req.header();
  // bearer token
  const jwt = headers.authorization;
  try {
    const user = await verify(jwt, c.env.JWT_SECRET) as { id: string };
    if (user) {
      c.set("userId", user.id);
      await next();
    } else {
      c.status(403);
      return c.json({ error: "You are not logged in" });
    }
  } catch (error) {
    c.status(403);
    return c.json({ error: "You are not logged in" });
    
  }
});


blogRouter.post("/", async (c) => {
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate());
    const body = await c.req.json();
    const { success } = blogPostInput.safeParse(body);
    if(!success) {
      console.log(success);
      
      c.status(411);
      return c.json({
        message: "Inputs are not correct"
      });
    }
    const authorId = c.get("userId");

    const blog = await prisma.post.create({
        data : {
            title : body.title,
            content : body.content,
            authorId : authorId
        }
    })

    return c.json({
        id : blog.id
    })
});

blogRouter.put("/", async (c) => {
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
      }).$extends(withAccelerate());
    const body = await c.req.json();
    const { success } = updatePostInput.safeParse(body);
    if(!success) {
      console.log(success);
      
      c.status(411);
      return c.json({
        message: "Inputs are not correct"
      });
    }

    const blog = await prisma.post.update({
        where : {
            id : body.id
        },
        data : {
            title : body.title,
            content : body.content,
        }
    })
    
    return c.json({
        id : blog.id
    })
});

// to do: here pagination to be added
blogRouter.get("/bulk", async (c) => {
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate());

    const blogs = await prisma.post.findMany({
      select: {
        title: true,
        content: true,
        id: true,
        author: {
          select: {
            name: true
          }
        }        
      }
    });
    return c.json({
        blogs
    });
});


blogRouter.get("/:id", async (c) => {
    const id = c.req.param("id");
    // console.log(id);

    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL
    }).$extends(withAccelerate());

    try { 
        const blog = await prisma.post.findUnique({
            where : {
                id : id
            },
            select: {
              title: true,
              content: true,
              id: true,
              author: {
                select: {
                  name: true
                }
              }        
            }
        })

        if (!blog) {
          return c.json({ message: "Blog not found", id }, 404);
        }

        return c.json({
            blog
        })
    } catch (error) {
        c.status(403)
        console.error("Backend Error:", error);
        return c.json({
          message : "Error while fetching blogs"
        })
    }
});