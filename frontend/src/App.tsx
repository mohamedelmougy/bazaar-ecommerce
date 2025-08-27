import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router'
import HomePage from './pages/Home/HomePage'
import RootLayout from './layouts/RootLayout'
import LoginPage from './pages/Auth/LoginPage'
import RegisterPage from './pages/Auth/RegisterPage'

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route index element={<HomePage />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="register" element={<RegisterPage />} />
      </Route>,
    ),
  )

  return <RouterProvider router={router} />
}

export default App
