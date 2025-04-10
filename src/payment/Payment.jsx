import { v4 as uuidv4 } from "uuid";
import CryptoJS from "crypto-js";
import { NavLink, useLocation } from "react-router-dom";

function Payment() {
  let transaction_uuid = uuidv4();
  const location = useLocation();
  let total_amount = location.state?.totalPrice;
  let Message = `total_amount=${total_amount},transaction_uuid=${transaction_uuid},product_code=EPAYTEST`;
  var hash = CryptoJS.HmacSHA256(Message, "8gBm/:&EnhH.1/q");
  var hashInBase64 = CryptoJS.enc.Base64.stringify(hash);

  return (
    <div className="pt-32">
      <div>
        <form
          className="shadow-2xl  shadow-gray-800 w-96  p-5 m-auto   space-y-5  flex  flex-col items-center"
          action="https://rc-epay.esewa.com.np/api/epay/main/v2/form"
          method="POST"
        >
          <input
            type="hidden"
            id="amount"
            name="amount"
            value={total_amount}
            required
          />
          <input
            type="hidden"
            id="tax_amount"
            name="tax_amount"
            value="0"
            required
          />
          <input
            type="hidden"
            id="total_amount"
            name="total_amount"
            value={total_amount}
            required
          />
          <input
            type="hidden"
            id="transaction_uuid"
            name="transaction_uuid"
            value={transaction_uuid}
            required
          />
          <input
            type="hidden"
            id="product_code"
            name="product_code"
            value="EPAYTEST"
            required
          />
          <input
            type="hidden"
            id="product_service_charge"
            name="product_service_charge"
            value="0"
            required
          />
          <input
            type="hidden"
            id="product_delivery_charge"
            name="product_delivery_charge"
            value="0"
            required
          />
          <input
            type="hidden"
            id="success_url"
            name="success_url"
            value="http://localhost:5173/success/"
            required
          />
          <input
            type="hidden"
            id="failure_url"
            name="failure_url"
            value="http://localhost:5173/failure"
            required
          />
          <input
            type="hidden"
            id="signed_field_names"
            name="signed_field_names"
            value="total_amount,transaction_uuid,product_code"
            required
          />
          <input
            type="hidden"
            id="signature"
            name="signature"
            value={hashInBase64}
            required
          />
          <p className="text-2xl">Total Price : Rs.{total_amount}</p>
          <input
            className="bg-green-950  text-white p-2 py-3 w-48"
            value="Submit"
            type="submit"
          />

          <NavLink
            to="/menu"
            className="bg-red-500  font-Roboto text-center  py-3  ml-2 p-2 w-48 text-white"
          >
            Cancel
          </NavLink>
        </form>
      </div>
    </div>
  );
}

export default Payment;
