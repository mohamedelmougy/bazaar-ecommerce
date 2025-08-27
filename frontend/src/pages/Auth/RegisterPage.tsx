import { Link } from 'react-router-dom'
import InputField from '@/components/Shared/InputField'
import Divider from '@/components/Shared/Divider'

const RegisterPage = () => {
  return (
    <div className="mb-10">
      <h1 className="text-gray-900 text-center mt-10 text-4xl font-bold">Create Account</h1>
      <p className="text-gray-400 text-center mt-3 text-md">Join us today and get started</p>
      <div className="max-w-[600px] mx-auto mt-10 bg-white p-9 space-y-6 rounded-3xl shadow-xl">
        <form className="bg-white space-y-6">
          <InputField id="username" label="Username:" name="username" placeholder="Choose a username" type="text" />
          <InputField id="email" label="Email:" name="email" placeholder="Enter your email" type="email" />
          <InputField id="phone" label="Phone Number:" name="phone" placeholder="Enter your phone number" type="text" />

          <InputField
            id="password"
            label="Password:"
            name="password"
            placeholder="Enter your password"
            type="password"
          />
          <InputField
            id="confirmPassword"
            label="Confirm Password:"
            name="confirmPassword"
            placeholder="confirm your password"
            type="password"
          />

          <button className="bg-[#272727] text-white hover:text-[#cecccc] w-full py-3 rounded-md cursor-pointer">
            sign In
          </button>
        </form>

        <Divider>or</Divider>
        <p className="text-center">
          Already have an account?{' '}
          <Link className="text-red-600 hover:text-red-800 transition-colors duration-200" to="/login">
            Sign in here
          </Link>
        </p>
      </div>
      <p className="text-center text-xs text-gray-500 mt-8">
        By signing in, you agree to our{' '}
        <span className="text-red-600 hover:text-red-800 transition-colors duration-200 cursor-pointer">
          Terms of Service
        </span>{' '}
        and{' '}
        <span className="text-red-600 hover:text-red-800 transition-colors duration-200 cursor-pointer">
          Privacy Policy
        </span>
      </p>
    </div>
  )
}

export default RegisterPage
