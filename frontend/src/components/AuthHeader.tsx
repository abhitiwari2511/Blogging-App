import { Link } from "react-router-dom"

const AuthHeader = ({ type }: { type: "signup" | "signin" }) => {
  return (
    <div>
        <div className="text-3xl font-extrabold">
            {type === "signup" ? "Create An Account" : "Welcome Back!"}
        </div>
        <div className="text-slate-400 font-medium">
            {type === "signup" ? "Already have an account?" : "Don't have an account?"}
            <Link to={type === "signup" ? "/signin" : "/signup"} className="pl-1 text-violet-800 underline">{type === "signup" ? "Login" : "Sign Up"}</Link>
        </div>
    </div>
  )
}

export default AuthHeader