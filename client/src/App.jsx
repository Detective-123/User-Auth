import React, { useState } from 'react';
import { Mail, Lock, User, ArrowRight, Facebook, Chrome, Eye, EyeOff, AtSign, ShieldCheck, UserPlus } from 'lucide-react';

/**
 * SHARED SOCIAL LOGINS
 */
const SocialLogins = () => (
  <div className="mt-6">
    <div className="relative">
      <div className="absolute inset-0 flex items-center">
        <div className="w-full border-t border-slate-200" />
      </div>
      <div className="relative flex justify-center text-sm">
        <span className="px-2 bg-white text-slate-500 font-medium">Or continue with</span>
      </div>
    </div>

    <div className="mt-6 grid grid-cols-2 gap-3">
      <button
        type="button"
        className="w-full inline-flex justify-center py-2.5 px-4 border border-slate-300 rounded-lg bg-white text-sm font-medium text-slate-500 hover:bg-slate-50 transition-colors group"
      >
        <Chrome className="h-5 w-5 group-hover:text-red-500 transition-colors" />
      </button>
      <button
        type="button"
        className="w-full inline-flex justify-center py-2.5 px-4 border border-slate-300 rounded-lg bg-white text-sm font-medium text-slate-500 hover:bg-slate-50 transition-colors group"
      >
        <Facebook className="h-5 w-5 group-hover:text-blue-600 transition-colors" />
      </button>
    </div>
  </div>
);

/**
 * LOGIN FORM COMPONENT
 */
const LoginForm = () => {
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => setLoading(false), 1500);
  };

  return (
    <div className="w-full px-4 sm:px-10 py-8">
      <div className="flex justify-center mb-6">
        <div className="h-12 w-12 rounded-xl bg-indigo-600 flex items-center justify-center shadow-lg shadow-indigo-200 transition-transform hover:rotate-12">
          <Lock className="h-6 w-6 text-white" />
        </div>
      </div>
      <h2 className="text-center text-2xl font-extrabold text-slate-900 tracking-tight">Welcome back</h2>
      <p className="mt-2 text-center text-sm text-slate-600 mb-8">Enter your credentials to access your account</p>

      <form className="space-y-5" onSubmit={handleSubmit}>
        <div>
          <label className="block text-sm font-medium text-slate-700">Email address</label>
          <div className="mt-1 relative">
            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
            <input
              type="email"
              required
              className="block w-full pl-10 pr-3 py-2.5 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm outline-none transition-all"
              placeholder="name@example.com"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-700">Password</label>
          <div className="mt-1 relative">
            <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
            <input
              type={showPassword ? "text" : "password"}
              required
              className="block w-full pl-10 pr-10 py-2.5 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm outline-none transition-all"
              placeholder="••••••••"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-indigo-600 transition-colors p-1"
            >
              {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
            </button>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <input type="checkbox" className="h-4 w-4 text-indigo-600 border-slate-300 rounded cursor-pointer" />
            <label className="ml-2 block text-sm text-slate-900 cursor-pointer">Remember me</label>
          </div>
          <a href="#" className="text-sm font-medium text-indigo-600 hover:text-indigo-500">Forgot password?</a>
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full flex justify-center items-center py-3 px-4 bg-indigo-600 text-white rounded-lg font-semibold hover:bg-indigo-700 transition-all disabled:opacity-70 shadow-md shadow-indigo-100 active:scale-[0.98]"
        >
          {loading ? "Signing in..." : <><span className="mr-2">Sign in</span> <ArrowRight className="h-4 w-4" /></>}
        </button>
      </form>
      <SocialLogins />
    </div>
  );
};

/**
 * REGISTER FORM COMPONENT
 */
const RegisterForm = () => {
  const [loading, setLoading] = useState(false);
  const [showPass, setShowPass] = useState(false);
  const [showConfirmPass, setShowConfirmPass] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => setLoading(false), 1500);
  };

  return (
    <div className="w-full px-4 sm:px-10 py-8">
      <div className="flex justify-center mb-6">
        <div className="h-12 w-12 rounded-xl bg-indigo-600 flex items-center justify-center shadow-lg shadow-indigo-200 transition-transform hover:rotate-12">
          <UserPlus className="h-6 w-6 text-white" />
        </div>
      </div>
      <h2 className="text-center text-2xl font-extrabold text-slate-900 tracking-tight">Create account</h2>
      <p className="mt-2 text-center text-sm text-slate-600 mb-8">Join our community and start your journey</p>

      <form className="space-y-4" onSubmit={handleSubmit}>
        <div>
          <label className="block text-sm font-medium text-slate-700">Full Name</label>
          <div className="mt-1 relative">
            <User className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
            <input
              type="text"
              required
              className="block w-full pl-10 pr-3 py-2.5 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm outline-none transition-all"
              placeholder="Enter your full name"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-700">Username</label>
          <div className="mt-1 relative">
            <AtSign className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
            <input
              type="text"
              required
              className="block w-full pl-10 pr-3 py-2.5 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm outline-none transition-all"
              placeholder="unique_username"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-700">Email address</label>
          <div className="mt-1 relative">
            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
            <input
              type="email"
              required
              className="block w-full pl-10 pr-3 py-2.5 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm outline-none transition-all"
              placeholder="your@email.com"
            />
          </div>
        </div>

        {/* Stacked Password Fields */}
        <div>
          <label className="block text-sm font-medium text-slate-700">Password</label>
          <div className="mt-1 relative">
            <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
            <input
              type={showPass ? "text" : "password"}
              required
              className="block w-full pl-10 pr-10 py-2.5 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm outline-none transition-all"
              placeholder="Create a strong password"
            />
            <button
              type="button"
              onClick={() => setShowPass(!showPass)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-indigo-600 transition-colors p-1"
            >
              {showPass ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
            </button>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-700">Confirm Password</label>
          <div className="mt-1 relative">
            <ShieldCheck className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
            <input
              type={showConfirmPass ? "text" : "password"}
              required
              className="block w-full pl-10 pr-10 py-2.5 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm outline-none transition-all"
              placeholder="Re-type your password"
            />
            <button
              type="button"
              onClick={() => setShowConfirmPass(!showConfirmPass)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-indigo-600 transition-colors p-1"
            >
              {showConfirmPass ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
            </button>
          </div>
        </div>

        <div className="pt-2">
          <button
            type="submit"
            disabled={loading}
            className="w-full flex justify-center items-center py-3 px-4 bg-indigo-600 text-white rounded-lg font-semibold hover:bg-indigo-700 transition-all shadow-md shadow-indigo-100 disabled:opacity-70 active:scale-[0.98]"
          >
            {loading ? "Processing..." : "Create Account"}
          </button>
        </div>
      </form>
      <SocialLogins />
    </div>
  );
};

/**
 * MAIN APP CONTAINER
 */
const App = () => {
  const [view, setView] = useState('login'); // 'login' or 'register'

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col justify-center py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden selection:bg-indigo-100 selection:text-indigo-900">
      
      {/* Visual background elements */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-indigo-100 rounded-full blur-3xl opacity-50" />
        <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-50" />
      </div>

      <div className="relative z-10 w-full max-w-md mx-auto">
        
        {/* Sliding Navigation Toggles */}
        <div className="mb-8 p-1 bg-slate-200/60 rounded-xl flex relative">
          {/* Animated Background Pill */}
          <div 
            className={`absolute top-1 bottom-1 w-[calc(50%-4px)] bg-white rounded-lg shadow-sm transition-all duration-300 ease-in-out ${
              view === 'login' ? 'left-1' : 'left-[50%]'
            }`}
          />
          
          <button
            onClick={() => setView('login')}
            className={`relative z-10 flex-1 py-2 text-sm font-semibold transition-colors duration-300 ${
              view === 'login' ? 'text-indigo-600' : 'text-slate-500'
            } ${view !== 'login' ? 'opacity-60' : ''}`}
          >
            Login
          </button>
          <button
            onClick={() => setView('register')}
            className={`relative z-10 flex-1 py-2 text-sm font-semibold transition-colors duration-300 ${
              view === 'register' ? 'text-indigo-600' : 'text-slate-500'
            } ${view !== 'register' ? 'opacity-60' : ''}`}
          >
            Registration
          </button>
        </div>

        {/* Content Card with Slide Animation */}
        <div className="bg-white shadow-xl shadow-slate-200/50 rounded-2xl border border-slate-100 overflow-hidden">
          <div 
            className={`flex transition-transform duration-500 ease-in-out`}
            style={{ 
              width: '200%', 
              transform: view === 'login' ? 'translateX(0%)' : 'translateX(-50%)' 
            }}
          >
            <div className="w-1/2">
              <LoginForm />
            </div>
            <div className="w-1/2">
              <RegisterForm />
            </div>
          </div>
        </div>
      </div>
      
      <div className="mt-12 text-center text-xs text-slate-400 relative z-10">
        &copy; 2024 YourBrand Inc. • All systems operational • Security Verified
      </div>
    </div>
  );
};

export default App;