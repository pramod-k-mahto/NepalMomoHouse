import { NavLink } from "react-router-dom";
import circle from "../assets/Home/circle.png";
import Momo from "../assets/Home/Momo.png";
import OneBg from "../assets/Home/OneBg.png";
import { BsArrowRightShort } from "react-icons/bs";
import NavigateToMenu from "../Components/NavigateToMenu";
import { useEffect, useState } from "react";
import Loading from "../Components/Loading";

function Home() {
  const [recipes, setRecipes] = useState([]);
  const [filterProduct, setFilterProduct] = useState([]);
  const getProduct = async () => {
    let response = await fetch("https://dummyjson.com/recipes");
    response = await response.json();
    console.log(response.recipes);
    setRecipes(response.recipes);
    const filterItems = response.recipes.filter((item) => {
      return item.cuisine == "Italian";
    });
    setFilterProduct(filterItems);
  };

  const filterRecipes = (country) => {
    const filterItems = recipes.filter((item) => {
      return item.cuisine == country;
    });
    setFilterProduct(filterItems);
  };

  useEffect(() => {
    getProduct();
  }, []);
  return (
    <div>
      <div className="flex justify-end  ">
        <div className=" mr-48  mt-28 pt-7 ">
          <div>
            <p className="font-Roboto">RESTAURANT</p>
            <h1 className="text-[61px]   flex ">
              The
              <span
                style={{ backgroundImage: `url(${OneBg}) ` }}
                className="h-20 text-white bg-bottom bg-no-repeat w-48 flex  justify-center items-center  border-2"
              >
                #One
              </span>
            </h1>
            <h1 className="text-[61px] ">
              Momo <span className="text-[#D95103]">Restaurant</span>
            </h1>
            <p className="text-[20px] font-medium     ">
              More than
              <span className="text-[#D95103]  mx-2 text-[20px] ">
                20+ Varieties
              </span>
              of momo available for you
            </p>
          </div>

          <NavigateToMenu />
        </div>
        <div className="  mt-8  overflow-hidden  w-96  relative   flex justify-end ">
          <img
            className="h-52 top-14 left-8 absolute  "
            src={Momo}
            alt="Momo"
          />
          <img className="h-96  -mt-4   " src={circle} alt="circle" />
        </div>
      </div>

      <div className="my-28">{/* Why Customers Love Us */}</div>

      <div className="">
        <div className="text-center  ">
          <h1 className="text-[39px]">
            Our <span className="text-[#D95103]">Most Popular</span> Recipes
          </h1>
          <p className="text-[20px]">
            Browse through a varieties of recipes with fresh ingredients
            selected only from the best places
          </p>
        </div>
        <div className="text-center space-x-2 p-2   ">
          <button
            onClick={() => {
              filterRecipes("Italian");
            }}
            className="border-1   hover:bg-gray-400  rounded-2xl p-1  w-24  "
          >
            Italian
          </button>
          <button
            onClick={() => {
              filterRecipes("Korean");
            }}
            className="border-1  hover:bg-gray-400  rounded-2xl p-1  w-24  "
          >
            Korean
          </button>
          <button
            onClick={() => {
              filterRecipes("Indian");
            }}
            className="border-1   hover:bg-gray-400 rounded-2xl p-1   w-24 "
          >
            Indian
          </button>
        </div>
        <div className=" ">
          <div>
            {filterProduct.length > 0 ? (
              <div className="flex  flex-wrap justify-center gap-5 p-5 px-14  ">
                {filterProduct.map((item) => {
                  return (
                    <div
                      key={item.id}
                      className="shadow-2xl  shadow-gray-800   rounded-2xl   w-52  h-52  flex  justify-center flex-col  items-center "
                    >
                      <img
                        className="h-32 rounded-2xl  "
                        src={item.image}
                        alt=""
                      />
                      <NavLink
                        className=""
                        to={`/productDescription/${item.id}`}
                      >
                        <h1>{item.name}</h1>
                        <p>Rs.{item.caloriesPerServing}</p>
                        <p>{item.cuisine}</p>
                      </NavLink>
                    </div>
                  );
                })}
              </div>
            ) : (
              <div className="w-44  m-auto">
                <Loading />
              </div>
            )}
          </div>
        </div>

        <div className=" flex  justify-center">
          <NavigateToMenu />
        </div>
      </div>
      <div>We Offer People The Service They Want</div>
      <div>Quality Food</div>
      <div>200+ Happy Customers</div>
      <div>Get In Touch</div>

      <div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d8268.267322590047!2d85.32809763592358!3d27.662726918927284!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2snp!4v1743050647548!5m2!1sen!2snp"
          width={"1250"}
          height={"450"}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
}

export default Home;
