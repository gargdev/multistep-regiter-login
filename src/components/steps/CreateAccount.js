import React, {useState} from "react";
import regimg from "../../assets/edwin-andrade-4V1dC_eoCwg-unsplash 1.png";

export default function CreateAccount({ onNext, onGoToLogin }) {
  const [data, setData] = useState({ fullName: '', email: '', password: '' });

  const handleChange = (e) => {
    setData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = () => {
    onNext(data);
  };

  return (
    <>
      {/* <!-- login container --> */}
      <div className="flex flex-row-reverse rounded-2xl max-w-3xl p-0 items-center">
        {/* <!-- form --> */}
        <div className="flex-1 space-y-3.5 px-12 ml-5">
          <div className="text-left">
            <h2 className="text-2xl font-medium text-gray-600">Sign Up</h2>
            <p class="text-xs text-orange-500 mb-3">
            If you are not already a member, easily SignUp
          </p>
          </div>

          <div className="flex flex-row gap-2">
            <button className="flex px-3 py-2 gap-2 text-center text-sm font-medium w-full items-center justify-center rounded-xl border border-gray-300 hover:bg-gray-50">
              <svg className="h-4 w-4" viewBox="0 0 24 24">
                <path
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  fill="#4285F4"
                />
                <path
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  fill="#34A853"
                />
                <path
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                  fill="#FBBC05"
                />
                <path
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                  fill="#EA4335"
                />
              </svg>
              Use Google
            </button>

            <button className="flex px-3 py-2 gap-2 text-sm font-medium w-full items-center justify-center rounded-xl border border-gray-300 hover:bg-gray-50">
              <svg className="h-4 w-4" viewBox="0 0 24 24">
                <path d="M12 2C6.477 2 2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.879V14.89h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.989C18.343 21.129 22 16.99 22 12c0-5.523-4.477-10-10-10z" />
              </svg>
              Use Apple
            </button>
          </div>

          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t"></span>
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-white px-2 text-gray-500">Or</span>
            </div>
          </div>

          <div className="space-y-4">
            <div className="space-y-2">
              {/* <label
                htmlFor="fullName"
                className="block text-sm font-medium text-gray-700"
              >
                Full Name
              </label> */}
              <input
                id="fullName"
                type="text" name="fullName"
                placeholder="Full Name" 
                onChange={handleChange}
                required
                className="w-full rounded-xl border border-gray-300 px-3 py-2 focus:border-orange-500 focus:outline-none focus:ring-1 focus:ring-orange-500"
              />
            </div>
            <div className="space-y-2">
              {/* <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label> */}
              <input
                id="email"
                type="email" 
                name="email" 
                placeholder="Email or phone number" 
                onChange={handleChange}
                required
                className="w-full rounded-xl border border-gray-300 px-3 py-2 focus:border-orange-500 focus:outline-none focus:ring-1 focus:ring-orange-500"
              />
            </div>
            <div className="space-y-2">
              {/* <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Password
              </label> */}
              <input
                id="password"
                type="password" 
                name="password" 
                placeholder="Password" 
                onChange={handleChange}
                required
                className="w-full rounded-xl border border-gray-300 px-3 py-2 focus:border-orange-500 focus:outline-none focus:ring-1 focus:ring-orange-500"
              />
            </div>
            <button
              type="submit"
              onClick={handleSubmit}
              className="w-full rounded-xl bg-orange-500 px-4 py-2 text-white hover:scale-105 duration-300 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
            >
              Create Account
            </button>
          </div>

          <div className="mt-4 text-center">
            <p className="text-sm text-gray-500">
              Already have an account?{" "}
              <button
                onClick={onGoToLogin}
                className="text-orange-500 hover:underline"
              >
                Login
              </button>
            </p>
          </div>
        </div>

        {/* <!-- image --> */}
        <div className="md:block hidden w-1/2">
          <img
            className="rounded-2xl"
            alt="register"
            src={regimg}
          />
        </div>
      </div>
    </>
  );
}
