import { useState } from "react";
import { Link } from "react-router-dom";
import SearchNav from "./SearchNav";
import user from "../../../assets/icons/user.png";
import cart from "../../../assets/icons/shopping-cart.png";
import burgerMenu from "../../../assets/icons/burger-menu.svg";
import closeMenu from "../../../assets/icons/close-menu.svg";
import MobileNav from "./MobileNav";
import { logo } from "../../../assets/images";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className="bg-[#212529] h-[64px]">
      <nav className="container w-full flex items-center justify-between gap-3">
        <Link to="/" className="p-1">
          <img loading="lazy" src={logo} alt="logo" width={50} height={50} />
        </Link>
        <div className="w-full hidden sm:flex items-center justify-center">
          <SearchNav />
        </div>
        <div className="hidden sm:flex space-x-7">
          <div className="flex cursor-pointer">
            <img src={user} width={30} height={30} alt="user icon" />
            <button className="text-white ml-1">Login</button>
          </div>
          <div className="flex cursor-pointer">
            <img src={cart} width={30} height={30} alt="cart icon" />
            <button className="text-white ml-1">Cart</button>
          </div>
        </div>

        <div
          className="sm:hidden p-1 cursor-pointer"
          onClick={() => setIsOpen((prev) => !prev)}
        >
          <img
            src={isOpen ? closeMenu : burgerMenu}
            alt="logo"
            width={42}
            height={42}
            role="img"
          />
        </div>
        <MobileNav isOpen={isOpen} />
      </nav>
    </header>
  );
};

export default Navbar;
