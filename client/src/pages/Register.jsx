import React, { useState } from "react";
import {
  User,
  Mail,
  Lock,
  ShieldCheck,
  ArrowRight,
  Eye,
  EyeOff,
  Github,
  Chrome,
} from "lucide-react";
import toast from "react-hot-toast";

// to navigate to pages
import { useNavigate } from "react-router-dom";

// api call
import { register } from "../services/authServices.js";

/**
 * Shared Social Login Component for reusable OAuth buttons
 */
const SocialLogin = () => {
  const navigate = useNavigate();

  return (
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
          onClick={() => navigate("/comingsoon")}
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
};

/**
 * Register Component - Full Page Version
 * @param {Function} onToggle - Use this for navigation, e.g., () => navigate('/login')
 */

const Register = ({ onToggle }) => {
  const initialFormState = {
    username: "",
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    terms: false,
  };

  // states
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPass, setShowConfirmPass] = useState(false);
  const [formData, setFormData] = useState(initialFormState);
  const [message, setMessage] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }
    
    const payload = {
      fullname: formData.name,
      username: formData.username,
      email: formData.email,
      password: formData.password,
    };
    try {
      await toast.promise(
        register(payload),
        {
          loading: "Creating account...",
          success: (res) => {
            setFormData(initialFormState);

            return res.message || "Account created successfully!"
          },
          error: (err) => 
            err?.response?.data?.message || "Registration Failed"
        },
      )
    } catch (error) {
      console.error(error);
      // alert(error?.response?.data?.message || "Registration failed");
      // toast.error(error?.response?.data?.message || "Registration failed");
    } finally {
    }
  };

  // use navigate to switch to login page
  const navigate = useNavigate();

  return (
    <div className="h-screen w-full bg-slate-100 flex flex-col justify-center items-center p-4 font-sans overflow-hidden">
      <div className="w-full max-w-md flex flex-col items-center">
        {/* Header Section */}
        <div className="sm:mx-auto sm:w-full relative z-10 text-center mb-6">
          <div className="inline-flex items-center justify-center">
            <div className="bg-indigo-600 p-2.5 rounded-2xl shadow-xl shadow-indigo-200 ring-4 ring-white">
              <User className="h-6 w-6 text-white" />
            </div>
          </div>
          <h2 className="mt-4 text-2xl font-extrabold text-slate-900 tracking-tight">
            Create account
          </h2>
        </div>

        {/* Card Section */}
        <div className="w-full relative z-20">
          <div className="bg-white py-6 px-7 shadow-[0_20px_50px_rgba(8,112,184,0.1)] rounded-3xl border-2 border-slate-200">
            {message && (
              <div className="mb-3 p-2 rounded-lg bg-green-100 text-green-700 text-sm text-center">
                {message}
              </div>
            )}

            {errorMsg && (
              <div className="mb-3 p-2 rounded-lg bg-red-100 text-red-700 text-sm text-center">
                {errorMsg}
              </div>
            )}
            <form className="space-y-3" onSubmit={handleSubmit}>
              <div className="grid grid-cols-2 gap-3">
                {/* Username */}
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1 ml-1">
                    Username
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <User className="h-4 w-4 text-slate-400" />
                    </div>
                    <input
                      type="text"
                      required
                      className="block w-full pl-9 pr-2 py-1.5 border-2 border-slate-100 rounded-xl bg-slate-50 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:text-sm transition-all"
                      placeholder="user123"
                      value={formData.username}
                      onChange={(e) =>
                        setFormData({ ...formData, username: e.target.value })
                      }
                    />
                  </div>
                </div>

                {/* Full Name */}
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1 ml-1">
                    Full Name
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400 font-bold text-[10px]">
                      FN
                    </div>
                    <input
                      type="text"
                      required
                      className="block w-full pl-9 pr-2 py-1.5 border-2 border-slate-100 rounded-xl bg-slate-50 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:text-sm transition-all"
                      placeholder="John Doe"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                    />
                  </div>
                </div>
              </div>

              {/* Email */}
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
                    className="block w-full pl-9 pr-3 py-1.5 border-2 border-slate-100 rounded-xl bg-slate-50 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:text-sm transition-all"
                    placeholder="name@company.com"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                  />
                </div>
              </div>

              {/* Passwords Grid */}
              <div className="grid grid-cols-2 gap-3">
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
                      className="block w-full pl-9 pr-2 py-1.5 border-2 border-slate-100 rounded-xl bg-slate-50 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:text-sm transition-all"
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

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1 ml-1">
                    Confirm
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <ShieldCheck className="h-4 w-4 text-slate-400" />
                    </div>
                    <input
                      type={showConfirmPass ? "text" : "password"}
                      required
                      className="block w-full pl-9 pr-2 py-1.5 border-2 border-slate-100 rounded-xl bg-slate-50 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:text-sm transition-all"
                      placeholder="••••••••"
                      value={formData.confirmPassword}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          confirmPassword: e.target.value,
                        })
                      }
                    />
                    <button
                      type="button"
                      className="absolute inset-y-0 right-0 pr-3 flex items-center"
                      onClick={() => setShowConfirmPass(!showConfirmPass)}
                    >
                      {showConfirmPass ? (
                        <EyeOff className="h-4 w-4 text-slate-400 hover:text-slate-600" />
                      ) : (
                        <Eye className="h-4 w-4 text-slate-400 hover:text-slate-600" />
                      )}
                    </button>
                  </div>
                </div>
              </div>

              {/* Terms */}
              <div className="flex items-center px-1">
                <input
                  id="terms"
                  type="checkbox"
                  required
                  className="h-3.5 w-3.5 text-indigo-600 focus:ring-indigo-500 border-slate-300 rounded cursor-pointer"
                  checked={formData.terms}
                  onChange={(e) =>
                    setFormData({ ...formData, terms: e.target.checked })
                  }
                />
                <label
                  htmlFor="terms"
                  className="ml-2 text-[11px] text-slate-600"
                >
                  Accept{" "}
                  <a href="#" className="font-medium text-indigo-600">
                    Terms & Privacy
                  </a>
                </label>
              </div>

              {/* Social Options */}
              <SocialLogin />

              {/* Footer Actions */}
              <div className="pt-1">
                <div className="mb-4 pt-3 border-t border-slate-100 text-center">
                  <p className="text-xs text-slate-600">
                    Already have an account?{" "}
                    <button
                      type="button"
                      onClick={() => navigate("/login")}
                      className="font-bold text-indigo-600 hover:text-indigo-500 transition-colors underline-offset-4 hover:underline"
                    >
                      Log in here
                    </button>
                  </p>
                </div>

                <button
                  type="submit"
                  className="w-full flex justify-center items-center py-2.5 px-4 border border-transparent rounded-xl shadow-lg shadow-indigo-200 text-sm font-bold text-white bg-indigo-600 hover:bg-indigo-700 transition-all active:scale-[0.98]"
                >
                  Create Account
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

export default Register;
