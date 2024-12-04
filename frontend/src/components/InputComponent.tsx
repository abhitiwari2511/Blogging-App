import { ChangeEvent } from "react";

interface InuputComponentTypes {
    label: string,
    placeholder: string,
    onChange: (e: ChangeEvent) => void;
    type?: string
}

const InputComponent = ({ label, placeholder, onChange, type }: InuputComponentTypes) => {
  return (
    <div className="mt-2">
        <label className="block mb-2 text-md font-semibold text-gray-800">{label}</label>
        <input type={type} onChange={onChange} className="border text-sm rounded-md w-full p-2.5" placeholder={placeholder} />
    </div>
  )
}

export default InputComponent