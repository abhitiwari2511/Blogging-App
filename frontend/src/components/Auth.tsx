import { useNavigate } from "react-router-dom"
import InputComponent from "./InputComponent"
import { useState, useEffect } from "react"
import { SignUpInput } from "@abhit2511/common/dist/users"
import AuthHeader from "./AuthHeader"
import axios from "axios"
import { BACKEND_URL } from "../config"

const Auth = ({ type }: { type: "signup" | "signin" }) => {
    const navigate = useNavigate()
    const [inputValues, setInputValues] = useState<SignUpInput>({
        name: "",
        email: "",
        password: ""
    })

    useEffect(() => {
        localStorage.removeItem("token")
    }, [])

    const sendRequest = async () => {
        try {
            const res = await axios.post(`${BACKEND_URL}/api/v1/user/${type}`, inputValues)
            const jwt = res.data.jwt;
            localStorage.setItem("token", jwt)
            navigate("/blogs")
        } catch (error) {
            console.log(error)
            alert("Unable to fetch data")
        }
    }
    
    return (
        <div className="h-screen flex justify-center flex-col">
            <div className="flex justify-center">
                <div>
                    <AuthHeader type={type} />
                    <div className="mt-8">
                        {type === "signup" ? <InputComponent label="Name" placeholder="Enter Your Name" onChange={(e) => {
                            setInputValues(c => ({
                                ...c,
                                name: (e.target as HTMLInputElement).value
                            }))
                        }} /> : null}
                        <InputComponent label="Email" placeholder="Enter Your Email" onChange={(e) => {
                            setInputValues(c => ({
                                ...c,
                                email: (e.target as HTMLInputElement).value
                            }))
                        }} />
                        <InputComponent label="Password" type="password" placeholder="Enter Your Password" onChange={(e) => {
                            setInputValues(c => ({
                                ...c,
                                password: (e.target as HTMLInputElement).value
                            }))
                        }} />
                    </div>
                    <button onClick={sendRequest} type="button" className="text-white w-full mt-8 bg-gray-800 font-medium rounded-lg text-sm px-5 py-2.5">{type === "signup" ? "Sign Up" : "Sign In"}</button>
                </div>
            </div>
        </div>
    )
}

export default Auth