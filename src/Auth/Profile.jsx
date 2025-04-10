import { useAuth0 } from "@auth0/auth0-react";

function Profile() {
  const { user,logout , isAuthenticated, isLoading } = useAuth0();
  console.log(user);

  return (
    <div className="pt-20">
      <div className=" w-[700px] mt-14 gap-5 p-1 shadow-2xl  shadow-gray-800 rounded-2xl m-auto  flex">
        <div>
          <img className="h-52   rounded-2xl " src={user?.picture} alt="" />
        </div>

        <div className="mt-5  space-y-4">
          <h1>Name:{user?.name}</h1>
          <p>Email:{user?.email}</p>
          <p>Email Verification :{user?.email_verified}</p>

          <hr />

          <button
          onClick={()=>{
            logout()
          }}
          
          className="bg-black text-white p-2  w-28 rounded-sm">
            Logout
          </button>
        </div>
      </div>
    </div>
  );
}

export default Profile;
