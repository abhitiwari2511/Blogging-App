import { Hono } from "hono";
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import { sign } from 'hono/jwt'
import { signUpInput, signInInput } from '@abhit2511/common/dist/users'

export const userRouter = new Hono<{
    Bindings: {
        DATABASE_URL: string
        JWT_SECRET: string
      }
}>();

userRouter.post('/signup', async (c) => {
    const body = await c.req.json();
    const { success } = signUpInput.safeParse(body);
    if(!success) {
      console.log(success);
      
      c.status(411);
      return c.json({
        message: "Invalid input"
      });
    }

    const prisma = new PrismaClient({
      datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate());
    
    try {
      const user = await prisma.user.create({
        data: {
          email: body.email,
          password: body.password,
          name: body.name
        }
      })
  
      const token = await sign({id:user.id}, c.env.JWT_SECRET)
      return c.json({
        jwt : token
      })
  
    } catch (e) {
      return c.status(403)
    }
  })
  
  userRouter.post('/signin', async (c) => {
    const body = await c.req.json();
    const { success } = signInInput.safeParse(body);
    if(!success) {
      console.log(success);
      
      c.status(411);
      return c.json({
        message: "Invalid input"
      });
    }

    const prisma = new PrismaClient({
      datasourceUrl: c.env?.DATABASE_URL,
    }).$extends(withAccelerate());
    try {
      const user = await prisma.user.findUnique({
        where: {
          email: body.email,
          password: body.password
        }
      })
  
      if (!user) {
        c.status(403);
        return c.json({ error: "user not found" });
      }
  
      const token = await sign({id: user.id}, c.env.JWT_SECRET)
      return c.json({
        jwt: token
      })
  
    } catch (error) {
      return c.status(403)
    }
  })