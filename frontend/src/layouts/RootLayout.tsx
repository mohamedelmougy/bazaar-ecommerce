import { Outlet } from "react-router";
import Navbar from "../components/Shared/Navbar";

const RootLayout = () => {
  return (
    <main className="container">
      <Navbar />
      <Outlet />
    </main>
  );
};

export default RootLayout;
