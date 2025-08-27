import Divider from '@/components/Shared/Divider'
import InputField from '@/components/Shared/InputField'
import { Link } from 'react-router-dom'

const LoginPage = () => {
  return (
    <div className="h-[calc(100vh-164px)]">
      <h1 className="text-gray-900 text-center mt-10 text-4xl font-bold">Welcome Back</h1>
      <p className="text-gray-400 text-center mt-3 text-md">Sign in to your account to continue</p>
      <div className="max-w-[600px] mx-auto mt-10 bg-white p-9 space-y-6 rounded-3xl shadow-xl">
        <form className="bg-white space-y-6">
          <InputField id="email" label="Email:" name="email" placeholder="Enter your email" type="email" />
          <InputField
            id="password"
            label="Password:"
            name="password"
            placeholder="Enter your password"
            type="password"
          />

          <span className="text-end block">
            <Link className="text-red-600 hover:text-red-800 transition-colors duration-200 cursor-pointer" to="/">
              Forgot password?
            </Link>
          </span>

          <button className="bg-[#272727] text-white hover:text-[#cecccc] w-full py-3 rounded-md cursor-pointer">
            sign In
          </button>
        </form>

        <Divider>or</Divider>
        <p className="text-center">
          Don't have an account?{' '}
          <Link className="text-red-600 hover:text-red-800 transition-colors duration-200" to="/register">
            Create one now
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

export default LoginPage
