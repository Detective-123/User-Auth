import React, { useState } from 'react';
import { Key, Eye, EyeOff, ArrowLeft, ShieldCheck, Check } from 'lucide-react';

/**
 * UpdatePassword Component
 * Designed to be a standalone route (e.g., /settings/password)
 * @param {Function} onBack - Navigation function to return to settings
 */
const ChangePassword = ({ onBack }) => {
  const [showCurrent, setShowCurrent] = useState(false);
  const [showNew, setShowNew] = useState(false);
  const [isSaved, setIsSaved] = useState(false);
  
  const [formData, setFormData] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.newPassword !== formData.confirmPassword) {
      alert("New passwords do not match");
      return;
    }
    // Simulate API call
    setIsSaved(true);
    setTimeout(() => {
      setIsSaved(false);
      if (onBack) onBack();
    }, 2000);
  };

  return (
    <div className="h-screen w-full bg-slate-100 flex flex-col justify-center items-center p-4 font-sans overflow-hidden">
      <div className="w-full max-w-md flex flex-col items-center">
        
        {/* Header Section */}
        <div className="sm:mx-auto sm:w-full relative z-10 text-center mb-6">
          <div className="inline-flex items-center justify-center">
            <div className="bg-indigo-600 p-2.5 rounded-2xl shadow-xl shadow-indigo-200 ring-4 ring-white">
              <Key className="h-6 w-6 text-white" />
            </div>
          </div>
          <h2 className="mt-4 text-2xl font-extrabold text-slate-900 tracking-tight">
            Change Password
          </h2>
          <p className="mt-2 text-xs text-slate-500">
            Choose a strong password to keep your account secure.
          </p>
        </div>

        {/* Card Section */}
        <div className="w-full relative z-20">
          <div className="bg-white py-6 px-7 shadow-[0_20px_50px_rgba(8,112,184,0.1)] rounded-3xl border-2 border-slate-200">
            
            <form className="space-y-4" onSubmit={handleSubmit}>
              
              {/* Current Password */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1 ml-1">
                  Current Password
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Key className="h-4 w-4 text-slate-400" />
                  </div>
                  <input
                    type={showCurrent ? 'text' : 'password'}
                    required
                    className="block w-full pl-10 pr-10 py-2 border-2 border-slate-100 rounded-xl leading-5 bg-slate-50 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:bg-white sm:text-sm transition-all"
                    placeholder="Enter current password"
                    value={formData.currentPassword}
                    onChange={(e) => setFormData({ ...formData, currentPassword: e.target.value })}
                  />
                  <button
                    type="button"
                    className="absolute inset-y-0 right-0 pr-3 flex items-center"
                    onClick={() => setShowCurrent(!showCurrent)}
                  >
                    {showCurrent ? (
                      <EyeOff className="h-4 w-4 text-slate-400 hover:text-slate-600" />
                    ) : (
                      <Eye className="h-4 w-4 text-slate-400 hover:text-slate-600" />
                    )}
                  </button>
                </div>
              </div>

              {/* New Password */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1 ml-1">
                  New Password
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <ShieldCheck className="h-4 w-4 text-slate-400" />
                  </div>
                  <input
                    type={showNew ? 'text' : 'password'}
                    required
                    className="block w-full pl-10 pr-10 py-2 border-2 border-slate-100 rounded-xl leading-5 bg-slate-50 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:bg-white sm:text-sm transition-all"
                    placeholder="Min. 8 characters"
                    value={formData.newPassword}
                    onChange={(e) => setFormData({ ...formData, newPassword: e.target.value })}
                  />
                  <button
                    type="button"
                    className="absolute inset-y-0 right-0 pr-3 flex items-center"
                    onClick={() => setShowNew(!showNew)}
                  >
                    {showNew ? (
                      <EyeOff className="h-4 w-4 text-slate-400 hover:text-slate-600" />
                    ) : (
                      <Eye className="h-4 w-4 text-slate-400 hover:text-slate-600" />
                    )}
                  </button>
                </div>
              </div>

              {/* Confirm Password */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1 ml-1">
                  Confirm New Password
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <ShieldCheck className="h-4 w-4 text-slate-400" />
                  </div>
                  <input
                    type={showNew ? 'text' : 'password'}
                    required
                    className="block w-full pl-10 pr-10 py-2 border-2 border-slate-100 rounded-xl leading-5 bg-slate-50 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:bg-white sm:text-sm transition-all"
                    placeholder="Re-enter new password"
                    value={formData.confirmPassword}
                    onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                  />
                </div>
              </div>

              {/* Password Requirements Hint */}
              <div className="p-3 bg-slate-50 rounded-xl border border-slate-100">
                <p className="text-[10px] text-slate-500 leading-relaxed">
                  <span className="font-bold text-slate-700">Tip:</span> Use at least 8 characters, including a number, to make your password stronger.
                </p>
              </div>

              {/* Footer Actions */}
              <div className="pt-2 flex flex-col gap-3">
                <button
                  type="submit"
                  className="w-full flex justify-center items-center py-2.5 px-4 border border-transparent rounded-xl shadow-lg shadow-indigo-200 text-sm font-bold text-white bg-indigo-600 hover:bg-indigo-700 transition-all active:scale-[0.98]"
                >
                  {isSaved ? <><Check className="h-4 w-4 mr-2" />Password Changed</> : 'Update Password'}
                </button>
                
                <button
                  type="button"
                  onClick={onBack}
                  className="w-full flex justify-center items-center py-2.5 px-4 border border-transparent rounded-xl text-sm font-bold text-slate-500 hover:text-slate-700 hover:bg-slate-50 transition-all"
                >
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Cancel
                </button>
              </div>
            </form>

          </div>
        </div>
      </div>
    </div>
  );
};

export default ChangePassword;