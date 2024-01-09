import { useNavigate } from "react-router-dom";

export const Denied = () => {
  const navigate = useNavigate();
  return (
    <div className="h-screen w-full flex flex-col justify-center items-center bg-[#1A2238]">
      <h1 className="text-9xl font-bold text-white"> 403 </h1>
      <div className="bg-black text-white px-2 text-sm rounded rotate-12 absolute">
        Access Denied
      </div>
      <button onClick={() => navigate(-1)} className="mt-5">
        <span className="relative block px-8 py-3 border rounded-md font-semibold border-current hover:bg-yellow-500 ease-in-out duration-100 bg-orange-500 text-white">
          Go Back
        </span>
      </button>
    </div>
  );
};
