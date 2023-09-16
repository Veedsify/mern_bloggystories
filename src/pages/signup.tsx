import { Link } from "react-router-dom";
import Footer from "./components/footer";

const SignupPage = () => {
  return (
    <>
      <section className="py-10 min-h-screen">
        <div className="max-w-screen-xl mx-auto px-4 py-5 md:px-7 md:py-5">
          <div className="mt-10 md:mt-48 flex flex-col justify-center items-center">
            <div className="max-w-lg w-full my-10 bg-white p-8 rounded shadow shadow-slate-300">
              <h1 className="text-4xl font-medium mb-2">Register</h1>
              <p className="text-slate-500">Hi, Get Started 👋</p>

              <div className="my-5">
                <button className="w-full text-center py-5 my-3 border flex space-x-2 items-center justify-center border-slate-200 rounded text-slate-700 hover:border-slate-400 hover:text-slate-900 hover:shadow transition duration-150">
                  <img
                    src="https://www.svgrepo.com/show/355037/google.svg"
                    className="w-6 h-6"
                    alt=""
                  />
                  <span>Signup with Google</span>
                </button>
              </div>
              <form action="" className="my-10">
                <div className="flex flex-col space-y-5">
                  <label htmlFor="email">
                    <p className="font-medium text-slate-700 pb-2">Full Name</p>
                    <input
                      id="fulname"
                      name="fullname"
                      type="text"
                      className="w-full py-5 border border-slate-200 rounded px-3 focus:outline-none focus:border-slate-500 hover:shadow"
                      placeholder="Enter Full Name"
                    />
                  </label>
                  <label htmlFor="email">
                    <p className="font-medium text-slate-700 pb-2">
                      Email address
                    </p>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      className="w-full py-5 border border-slate-200 rounded px-3 focus:outline-none focus:border-slate-500 hover:shadow"
                      placeholder="Enter email address"
                    />
                  </label>
                  <label htmlFor="password">
                    <p className="font-medium text-slate-700 pb-2">Password</p>
                    <input
                      id="password"
                      name="password"
                      type="password"
                      className="w-full py-5 border border-slate-200 rounded px-3 focus:outline-none focus:border-slate-500 hover:shadow"
                      placeholder="Enter your password"
                    />
                  </label>
                  <div className="flex flex-row justify-between">
                    <div>
                      <label
                        htmlFor="remember"
                        className="flex items-center gap-1"
                      >
                        <input
                          type="checkbox"
                          id="remember"
                          className="w-4 h-4 border-slate-200 focus:bg-red-600"
                        />
                        Remember me
                      </label>
                    </div>
                    <div>
                      <a href="#" className="font-medium text-red-600">
                        Forgot Password?
                      </a>
                    </div>
                  </div>
                  <button className="w-full py-5 font-medium text-white bg-red-600 hover:bg-red-500 rounded border-red-500 hover:shadow inline-flex space-x-2 items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"
                      />
                    </svg>
                    <span>Signup</span>
                  </button>
                  <p className="text-center">
                    Have an account?
                    <Link
                      to="/login"
                      className="text-red-600 font-medium inline-flex space-x-1 items-center"
                    >
                      <span> Login now </span>
                      <span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth="2"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                          />
                        </svg>
                      </span>
                    </Link>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default SignupPage;
