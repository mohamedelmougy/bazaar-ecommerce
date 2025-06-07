import SearchNav from "./SearchNav";
import user from "../../../assets/icons/user.png";
import cart from "../../../assets/icons/shopping-cart.png";

const MobileNav = ({ isOpen }: { isOpen: boolean }) => {
  return (
    <div
      className={
        isOpen
          ? "fixed md:hidden top-[64px] left-0 bg-[#212529] h-full w-full flex flex-col px-4 space-y-4 ease-in-out duration-500 z-100"
          : "h-full w-full fixed -top-[100%] left-0 ease-in-out duration-500 z-100"
      }
    >
      <div className="w-full flex items-center justify-center">
        <SearchNav />
      </div>
      <div className="flex flex-col items-center justify-center space-y-7">
        <div className="flex cursor-pointer border-b border-gray-500 p-3 w-[100%] items-center justify-center">
          <img src={user} width={30} height={30} alt="user icon" />
          <button className="text-white ml-1">Login</button>
        </div>
        <div className="flex cursor-pointer border-b border-gray-500 p-3 w-[100%] items-center justify-center">
          <img src={cart} width={30} height={30} alt="cart icon" />
          <button className="text-white ml-1">Cart</button>
        </div>
      </div>
    </div>
  );
};

export default MobileNav;
