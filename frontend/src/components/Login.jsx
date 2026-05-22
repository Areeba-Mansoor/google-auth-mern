import React from "react";
import { toast } from "react-toastify";

const App = () => {
  const loginHandler = () => {
    toast.info("Redirecting to Google...");

    setTimeout(() => {
      window.location.href = "http://localhost:5000/auth/google";
    }, 300);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-sky-100 via-blue-200 to-cyan-200">
      <div className="bg-white rounded-xl shadow-xl px-10 py-12 flex flex-col items-center gap-4 w-100">
        {/* Title */}
        <h1 className="text-2xl font-semibold text-blue-500">
          Sign in with google
        </h1>

        {/* Subtitle */}
        <p className="text-gray-600 text-sm">Sign in to continue</p>

        {/* Divider */}
        <hr className="w-full border-gray-200" />

        {/* Google Button */}
        <button
          onClick={loginHandler}
          className="flex items-center gap-3 border border-gray-300 rounded-full px-6 py-2 text-gray-700 text-sm font-medium hover:shadow-md transition-all duration-200 hover:bg-gray-50 cursor-pointer"
        >
          {/* Google Icon */}
          <svg width="20" height="20" viewBox="0 0 48 48">
            <path
              fill="#EA4335"
              d="M24 9.5c3.14 0 5.95 1.08 8.17 2.85l6.09-6.09C34.46 3.09 29.5 1 24 1 14.82 1 7.07 6.48 3.64 14.18l7.08 5.5C12.4 13.02 17.73 9.5 24 9.5z"
            />
            <path
              fill="#4285F4"
              d="M46.52 24.5c0-1.64-.15-3.22-.42-4.75H24v9h12.68c-.55 2.96-2.2 5.47-4.68 7.15l7.18 5.57C43.36 37.07 46.52 31.27 46.52 24.5z"
            />
            <path
              fill="#FBBC05"
              d="M10.72 28.32A14.6 14.6 0 0 1 9.5 24c0-1.5.26-2.95.72-4.32l-7.08-5.5A23.94 23.94 0 0 0 0 24c0 3.87.93 7.53 2.56 10.76l8.16-6.44z"
            />
            <path
              fill="#34A853"
              d="M24 47c5.5 0 10.12-1.82 13.5-4.95l-7.18-5.57C28.6 38.3 26.42 39 24 39c-6.27 0-11.6-3.52-13.28-8.68l-8.16 6.44C6.07 43.52 14.36 47 24 47z"
            />
          </svg>
          Sign in with Google
        </button>
      </div>
    </div>
  );
};

export default App;
