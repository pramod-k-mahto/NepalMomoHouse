import React, { useEffect, useState } from "react";
import Loading from "../Components/Loading";
import { NavLink } from "react-router-dom";

function Menu() {
  const [product, setProduct] = useState([]);
  const getProduct = async () => {
    let response = await fetch("https://dummyjson.com/recipes/");
    response = await response.json();
   // console.log(response.recipes);
    setProduct(response.recipes);
  };
  useEffect(() => {
    getProduct();
  }, []);

  return (
    <div className="pt-16   ">
      <div>
        {product.length > 0 ? (
          <div className="flex  my-20   flex-wrap  gap-5  justify-center    ">
            {product.map((product) => {
              return (
                <div
                  key={product.id}
                  className="  shadow-2xl  shadow-gray-400 rounded-2xl "
                >
                  <img
                    className="h-52  rounded-2xl"
                    src={product.image}
                    alt=""
                  />

                  <NavLink  to={`/productDescription/${product.id}` } >
                    <div className="flex flex-col  justify-center items-center">
                      <p className="text-orange-500">
                        Rs.{product.caloriesPerServing}
                      </p>
                      <p>{product.name}</p>
                      <p className="text-orange-800">{product.rating}</p>
                    </div>
                  </NavLink>
                </div>
              );
            })}
          </div>
        ) : (
          <div>
            <Loading />
          </div>
        )}
      </div>
    </div>
  );
}

export default Menu;
