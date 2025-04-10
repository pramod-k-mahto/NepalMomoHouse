import React from "react";
import { useSearchParams } from "react-router-dom";

function Failure() {
  const [searchParams] = useSearchParams();
  let val = searchParams.get("data");
  let info = atob(val);
  info = JSON.parse(info);
  console.log(info);

  return (
    <>
      <div className="pt-20">
        <div className="shadow-2xl  shadow-gray-700  space-y-2  w-96 m-auto mt-5 flex  flex-col  items-center p-5">
          <img
            className="h-44"
            src="https://cdn.printme.online/wp-content/uploads/2020/04/payment_fail_icon.png"
            alt=""
          />
          <div>
            <h1>
              Status:
              <span className="underline   bg-amber-300 ">{info?.status}</span>
            </h1>
          </div>
        </div>
      </div>
    </>
  );
}

export default Failure;
