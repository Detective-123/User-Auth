import React, { useState } from "react";
import {
  Mail,
  Lock,
  Eye,
  EyeOff,
  ArrowRight,
  Github,
  Chrome,
} from "lucide-react";
import { redirect, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

// axios api call function
import { login } from "../services/authServices";

/**
 * Shared Social Login Component for reusable OAuth buttons
 */
const SocialLogin = () => (
  <div className="mb-4">
    <div className="relative mb-4">
      <div className="absolute inset-0 flex items-center">
        <div className="w-full border-t border-slate-200" />
      </div>
      <div className="relative flex justify-center text-sm">
        <span className="px-2 bg-white text-slate-400 font-medium uppercase tracking-wider text-[10px]">
          Or continue with
        </span>
      </div>
    </div>
    <div className="grid grid-cols-2 gap-3">
      <button
        type="button"
        className="w-full inline-flex justify-center py-2 px-4 border border-slate-200 rounded-xl bg-white text-sm font-medium text-slate-700 hover:bg-slate-50 transition-all active:scale-95 shadow-sm"
      >
        <Chrome className="h-4 w-4 mr-2 text-red-500" />
        Google
      </button>
      <button
        type="button"
        className="w-full inline-flex justify-center py-2 px-4 border border-slate-200 rounded-xl bg-white text-sm font-medium text-slate-700 hover:bg-slate-50 transition-all active:scale-95 shadow-sm"
      >
        <Github className="h-4 w-4 mr-2 text-slate-900" />
        GitHub
      </button>
    </div>
  </div>
);

/**
 * Login Component - Full Page Version
 * @param {Function} onToggle - Use this for navigation, e.g., () => navigate('/register')
 */
const Login = ({ onToggle }) => {
  const initialFormState = { email: "", password: "" };

  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState(initialFormState);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      email: formData.email,
      password: formData.password,
    };

    try {
      await toast.promise(login(payload), {
        loading: "Logging in...",
        success: (res) => {
          setFormData(initialFormState);

          setTimeout(() => {
            navigate("/profile");
          }, 1500);
          return res.message || "Logged in successfully!";
        },
        error: (err) => err?.response?.data?.message || "Failed to Login",
      });
    } catch (error) {
      console.error(error);
    }
  };

  // use navigate to move to register page
  const navigate = useNavigate();
  return (
    <div className="h-screen w-full bg-slate-100 flex flex-col justify-center items-center p-4 font-sans overflow-hidden">
      <div className="w-full max-w-md flex flex-col items-center">
        {/* Header Section */}
        <div className="sm:mx-auto sm:w-full relative z-10 text-center mb-6">
          <div className="inline-flex items-center justify-center">
            <div className="bg-indigo-600 p-2.5 rounded-2xl shadow-xl shadow-indigo-200 ring-4 ring-white">
              <Lock className="h-6 w-6 text-white" />
            </div>
          </div>
          <h2 className="mt-4 text-2xl font-extrabold text-slate-900 tracking-tight">
            Welcome back
          </h2>
        </div>

        {/* Card Section */}
        <div className="w-full relative z-20">
          <div className="bg-white py-6 px-7 shadow-[0_20px_50px_rgba(8,112,184,0.1)] rounded-3xl border-2 border-slate-200">
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div className="space-y-4">
                {/* Email Field */}
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1 ml-1">
                    Email address
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Mail className="h-4 w-4 text-slate-400" />
                    </div>
                    <input
                      type="email"
                      required
                      className="block w-full pl-10 pr-3 py-2 border-2 border-slate-100 rounded-xl leading-5 bg-slate-50 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:bg-white sm:text-sm transition-all"
                      placeholder="you@example.com"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                    />
                  </div>
                </div>

                {/* Password Field */}
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1 ml-1">
                    Password
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Lock className="h-4 w-4 text-slate-400" />
                    </div>
                    <input
                      type={showPassword ? "text" : "password"}
                      required
                      className="block w-full pl-10 pr-10 py-2 border-2 border-slate-100 rounded-xl leading-5 bg-slate-50 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:bg-white sm:text-sm transition-all"
                      placeholder="••••••••"
                      value={formData.password}
                      onChange={(e) =>
                        setFormData({ ...formData, password: e.target.value })
                      }
                    />
                    <button
                      type="button"
                      className="absolute inset-y-0 right-0 pr-3 flex items-center"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? (
                        <EyeOff className="h-4 w-4 text-slate-400 hover:text-slate-600" />
                      ) : (
                        <Eye className="h-4 w-4 text-slate-400 hover:text-slate-600" />
                      )}
                    </button>
                  </div>
                </div>

                {/* Remember Me & Forgot Password */}
                <div className="flex items-center justify-between px-1">
                  <div className="flex items-center">
                    <input
                      id="remember-me"
                      type="checkbox"
                      className="h-3.5 w-3.5 text-indigo-600 focus:ring-indigo-500 border-slate-300 rounded transition-all cursor-pointer"
                    />
                    <label
                      htmlFor="remember-me"
                      className="ml-2 block text-xs text-slate-700 cursor-pointer"
                    >
                      Remember me
                    </label>
                  </div>
                  <div className="text-xs">
                    <a
                      href="#"
                      className="font-medium text-indigo-600 hover:text-indigo-500 transition-colors"
                    >
                      Forgot?
                    </a>
                  </div>
                </div>
              </div>

              {/* Social Login Options */}
              <SocialLogin />

              {/* Footer & Submit */}
              <div className="pt-1">
                <div className="mb-4 pt-4 border-t border-slate-100 text-center">
                  <p className="text-xs text-slate-600">
                    Don't have an account?{" "}
                    <button
                      type="button"
                      onClick={() => navigate("/register")}
                      className="font-bold text-indigo-600 hover:text-indigo-500 transition-colors underline-offset-4 hover:underline"
                    >
                      Create account
                    </button>
                  </p>
                </div>

                <button
                  type="submit"
                  className="w-full flex justify-center items-center py-2.5 px-4 border border-transparent rounded-xl shadow-lg shadow-indigo-200 text-sm font-bold text-white bg-indigo-600 hover:bg-indigo-700 transition-all active:scale-[0.98]"
                >
                  Sign in
                  <ArrowRight className="ml-2 h-4 w-4" />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
