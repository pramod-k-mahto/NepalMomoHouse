import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { CartContext } from "../Context/CartProvider";

function ProductDescription() {
  let navigate = useNavigate();
  const [quantity, setQuantity] = useState(1);
  const { dispatch } = useContext(CartContext);
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const getProduct = async () => {
    let response = await fetch(`https://dummyjson.com/recipes/${id}`);
    response = await response.json();
    setProduct(response);
  };
  let totalPrice = product?.caloriesPerServing * quantity;
  useEffect(() => {
    getProduct();
  }, []);
  return (
    <div>
      <div className="pt-16">
        <div className="mt-5">
          <div className="flex shadow-xl  shadow-gray-500   ml-28 gap-x-2  ">
            <div className="">
              <img className="h-80" src={product?.image} alt="product_name" />
            </div>
            <div className="   py-3  space-y-3   w-[500px]">
              <div>
                <h1 className="text-3xl">{product?.name}</h1>
              </div>
              <div>
                <p className="text-orange-500">Rating {product?.rating}</p>
              </div>
              <div>
                <p className="text-3xl  text-amber-500">
                  Rs.{product?.caloriesPerServing}
                </p>
              </div>
              <div>
                <div className="flex  ">
                  <p>Quantity</p>
                  <div className="ml-7">
                    <button
                      onClick={() => {
                        if (quantity > 1) {
                          setQuantity(quantity - 1);
                        }
                      }}
                      className="bg-gray-300  h-7 w-7  hover:text-white "
                    >
                      -
                    </button>
                    <span className="inline-block  h-7 w-7  text-center">
                      {quantity}
                    </span>
                    <button
                      onClick={() => {
                        setQuantity(quantity + 1);
                      }}
                      className="bg-gray-300   h-7 w-7  hover:text-white "
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
              <div className="mt-5">
                <button
                  onClick={() => {
                    navigate("/payment", {
                      state: {
                        totalPrice: totalPrice,
                      },
                    });
                  }}
                  className="bg-blue-700  text-white  w-52   p-3"
                >
                  Buy Now
                </button>
                <button
                  onClick={() => {
                    dispatch({ type: "AddToCart", payload: product });
                  }}
                  className="bg-orange-700 text-white ml-2  w-52  p-3"
                >
                  Add To Cart
                </button>
              </div>
            </div>
          </div>

          <div>Description</div>
        </div>
      </div>
    </div>
  );
}

export default ProductDescription;
