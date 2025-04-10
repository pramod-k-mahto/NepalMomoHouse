import { NavLink } from "react-router-dom";
import { FaFacebookF } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import momologo from "../assets/Navbar/MomoLogo.png";

import { BsCart4 } from "react-icons/bs";
import { useContext } from "react";
import { CartContext } from "../Context/CartProvider";
import { useAuth0 } from "@auth0/auth0-react";

function Navigation() {
  const { user, logout, isAuthenticated } = useAuth0();

  console.log(isAuthenticated);

  const { state } = useContext(CartContext);
  let totalItem = state.items.reduce((acc, product) => {
    return acc + product.qty;
  }, 0);

  return (
    <div className=" border-1  flex  text-[17px]  fixed p-5 w-full  bg-white  z-10 justify-around  ">
      <div className="flex   gap-x-2  justify-center  items-center ">
        <img src={momologo} alt="" />
        <NavLink to="/" className="text-green-950 text-[22px]  font-bold  ">
          Momos
        </NavLink>
      </div>
      <div className="   w-[500]  flex  space-x-3.5 font-Roboto  ">
        <NavLink to="/about">About US</NavLink>
        <NavLink to="/menu">Our Menu</NavLink>
        <NavLink to="/services">Our Services</NavLink>
        <NavLink to="/allergyAdvice">AllergyAdvice</NavLink>
        <NavLink to="/cartPage" className=" relative">
          <span
            className="absolute  bg-gray-200 rounded-full 
           text-center inline-block h-6 w-6   left-2 -top-3   text-red-500   "
          >
            {totalItem}
          </span>
          <BsCart4 size={28} />
        </NavLink>

        {isAuthenticated ? (
          <button
            onClick={() => {
              logout();
            }}
            className="    font-Roboto  mb-2"
          >
            Logout
          </button>
        ) : (
          <NavLink to="/login">Login</NavLink>
        )}
      </div>

      <div className="flex      justify-center  items-center   gap-x-3">
        <NavLink
          target="_blank"
          to="https://www.facebook.com/login/?next=https%3A%2F%2Fwww.facebook.com%2F"
        >
          <FaFacebookF />
        </NavLink>
        <NavLink
          target="_blank"
          to="https://www.facebook.com/login/?next=https%3A%2F%2Fwww.facebook.com%2F"
        >
          <FaTiktok />
        </NavLink>
        <NavLink
          target="_blank"
          to="https://www.facebook.com/login/?next=https%3A%2F%2Fwww.facebook.com%2F"
        >
          <FiInstagram />
        </NavLink>
        <NavLink
          className="bg-orange-700 py-1.5 px-3 rounded-3xl  text-white  "
          to="/contact"
        >
          Contact US
        </NavLink>
        <NavLink className="  " to="/profile">
          <img className="h-7 rounded-full" src={user?.picture} alt="" />
        </NavLink>
      </div>
    </div>
  );
}

export default Navigation;
