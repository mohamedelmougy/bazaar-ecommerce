import { Input } from '../ui/input'

interface InputFieldProps {
  label: string
  type: React.HTMLInputTypeAttribute
  id: string
  name: string
  placeholder: string
}

const InputField = ({ label, type, id, name, placeholder }: InputFieldProps) => {
  return (
    <fieldset>
      <label className="text-gray-700" htmlFor={id}>
        {label}
      </label>
      <Input
        className="p-3 h-[50px] border-gray-200 placeholder-gray-500 text-gray-900 bg-gray-50 hover:bg-white focus:bg-white transition-all duration-200 mt-2 text-sm md:text-xl"
        type={type}
        id={id}
        name={name}
        placeholder={placeholder}
      />
    </fieldset>
  )
}

export default InputField
