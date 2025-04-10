import { FcGoogle } from "react-icons/fc";
import { useAuth0 } from "@auth0/auth0-react";

function Login() {
  const { loginWithRedirect } = useAuth0();

  const login = (e) => {
    e.preventDefault();
  };
  return (
    <div className="pt-20">
      <div>
        <form
          onSubmit={login}
          className="shadow-2xl  shadow-gray-900 w-96 m-auto p-9 mt-10  flex  flex-col"
        >
          <label htmlFor="email">Email</label>
          <input
            type="email"
            placeholder="Enter your Email"
            className="outline-none  border-1 p-2  rounded-2xl"
          />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            placeholder="Enter Your Password"
            className="outline-none  border-1 p-2  rounded-2xl"
          />
          <button
            className="outline-none  bg-green-900  text-white
            border-1 p-2  mt-4  rounded-2xl"
          >
            Login
          </button>
          <p className="text-center">or</p>
          <button
            onClick={() => {
              loginWithRedirect();
            }}
            className="outline-none  flex  gap-x-3 
            justify-center  items-center  border-1 p-2  rounded-2xl"
          >
            Login With Google
            <FcGoogle size={20} />
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
