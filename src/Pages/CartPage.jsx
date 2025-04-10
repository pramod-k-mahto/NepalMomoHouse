import React, { useContext } from "react";
import { CartContext } from "../Context/CartProvider";
import { RiDeleteBin6Line } from "react-icons/ri";
import { NavLink, useNavigate } from "react-router-dom";

function CartPage() {
  const { state, dispatch } = useContext(CartContext);
  const navigate = useNavigate();
  console.log(state);
  let totalPrice = state.items.reduce((acc, product) => {
    return acc + product.qty * product.caloriesPerServing;
  }, 0);

  let totalItem = state.items.reduce((acc, product) => {
    return acc + product.qty;
  }, 0);
  let ShippingFee = totalItem * 5;

  return (
    <div className=" pt-16">
      <div>
        {state.items.length > 0 ? (
          <div className="flex gap-3">
            <div className=" bg-gray-50  w-[900px] space-y-5 p-7 ">
              {state.items.map((item) => {
                return (
                  <div
                    key={item.id}
                    className=" flex   justify-around  bg-white  shadow-2xl shadow-gray-200 rounded-2xl    "
                  >
                    <div>
                      <img
                        className="h-28  rounded-2xl"
                        src={item.image}
                        alt=""
                      />
                    </div>
                    <div className="  w-96 p-3 ">
                      <h1 className="font-Roboto text-xl">{item.name}</h1>
                    </div>
                    <div className="   w-32 p-3  text-2xl   ">
                      <h1 className="text-orange-800">
                        Rs.{item.caloriesPerServing}
                      </h1>
                      <button
                        onClick={() => {
                          dispatch({
                            type: "RemoveFromCart",
                            payload: item.id,
                          });
                        }}
                      >
                        <RiDeleteBin6Line />
                      </button>
                    </div>
                    <div className=" w-32  p-3 ">
                      <button
                        onClick={() => {
                          dispatch({ type: "Decrement", payload: item.id });
                        }}
                        className="bg-gray-300  h-7 w-7  hover:text-white "
                      >
                        -
                      </button>
                      <span className="inline-block  h-7 w-7  text-center">
                        {item.qty}
                      </span>
                      <button
                        onClick={() => {
                          dispatch({ type: "Increment", payload: item.id });
                        }}
                        className="bg-gray-300   h-7 w-7  hover:text-white "
                      >
                        +
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="  w-80 h-80 flex flex-col    shadow-2xl  shadow-gray-500 rounded-2xl mt-5 gap-y-6 p-10  ">
              <h1 className="text-2xl"> Order Summary</h1>
              <p>Subtotal: Rs. {totalPrice}</p>
              <p>Shipping Fee Rs.{ShippingFee} </p>
              <button
                onClick={() => {
                  navigate("/payment", {
                    state: {
                      totalPrice: totalPrice,
                    },
                  });
                }}
                className="bg-orange-700  p-3 rounded-sm  text-white"
              >
                Proceed to Checkout ({totalItem})
              </button>
              <button
                onClick={() => {
                  dispatch({ type: "ClearCart" });
                }}
                className="text-white bg-red-500  p-3 rounded-sm "
              >
                Clear Cart
              </button>
            </div>
          </div>
        ) : (
          <div>
            <div className=" w-96 m-auto  mt-14  text-center">
              <img
                src="https://cdni.iconscout.com/illustration/premium/thumb/empty-cart-illustration-download-in-svg-png-gif-file-formats--wishlist-bucket-shopping-state-pack-design-development-illustrations-1800917.png"
                alt=""
              />
              <h1 className="text-2xl">Cart is Empty </h1>
              <NavLink to="/menu" className="underline text-xl  text-green-700">
                Shop Now
              </NavLink>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default CartPage;
