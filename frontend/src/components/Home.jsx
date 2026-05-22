import React, { useEffect, useRef, useState } from "react";
import { toast } from "react-toastify";

const Home = () => {
  const [user, setUser] = useState({ image: "", name: "", email: "" });

  const toastShown = useRef(false);

  useEffect(() => {
    const getInfo = async () => {
      const response = await fetch("http://localhost:5000/user/info", {
        method: "GET",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
      });

      const result = await response.json();

      if (result?.status) {
        setUser({
          image: result?.user?.picture,
          name: result?.user?.name,
          email: result?.user?.email,
        });

        if (!toastShown.current) {
          toast.success("Login Successful");
          toastShown.current = true;
        }
      }
    };

    getInfo();
  }, []);

  const logoutHandler = async () => {
    try {
      const response = await fetch("http://localhost:5000/logout", {
        method: "GET",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
      });

      const result = await response.json();

      if (result?.status) {
        toast.success("Logout Successful");

        setTimeout(() => {
          window.location.href = "http://localhost:5173/";
        }, 1000);
      }
    } catch (error) {
      console.log(error.message);
      toast.error("Something went wrong");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-sky-100 via-blue-200 to-cyan-200">
      <div className="bg-white rounded-xl shadow-xl px-10 py-12 flex flex-col items-center gap-5 w-80">
        <img
          src={user?.image || "https://via.placeholder.com/100"}
          alt="profile"
          className="w-20 h-20 rounded-full border-0 border-purple-100 shadow-md"
        />

        <h1 className="text-2xl font-bold text-gray-800">{user?.name}</h1>

        <p className="text-gray-400 text-sm">{user?.email}</p>

        <hr className="w-full border-gray-200" />

        <button
          onClick={logoutHandler}
          className="w-full bg-red-500 hover:bg-red-600 text-white font-semibold py-2 rounded-md transition-all duration-200 cursor-pointer"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default Home;