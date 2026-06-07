import React from 'react';
import { Construction, Home, ArrowLeft, Clock, Hammer, Rocket } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

/**
 * ComingSoon Component - A placeholder for features under development
 * @param {Function} onBack - Navigation function to return to the previous page or dashboard
 */
const ComingSoon = ({ onBack }) => {
  const navigate = useNavigate()

  return (
    <div className="h-screen w-full bg-slate-100 flex flex-col justify-center items-center p-4 font-sans overflow-hidden">
      <div className="w-full max-w-md flex flex-col items-center">
        
        {/* Header Section */}
        <div className="sm:mx-auto sm:w-full relative z-10 text-center mb-6">
          <div className="inline-flex items-center justify-center">
            <div className="bg-indigo-600 p-2.5 rounded-2xl shadow-xl shadow-indigo-200 ring-4 ring-white animate-pulse">
              <Construction className="h-6 w-6 text-white" />
            </div>
          </div>
          <h2 className="mt-4 text-2xl font-extrabold text-slate-900 tracking-tight">
            Work in Progress
          </h2>
          <p className="mt-2 text-sm text-slate-500 font-medium">
            We're building something great for you.
          </p>
        </div>

        {/* Card Section */}
        <div className="w-full relative z-20">
          <div className="bg-white py-8 px-7 shadow-[0_20px_50px_rgba(8,112,184,0.1)] rounded-3xl border-2 border-slate-200 text-center">
            
            <div className="space-y-6">
              {/* Illustration/Status Area */}
              <div className="flex justify-around items-center py-4 text-slate-300">
                <Clock className="h-8 w-8" />
                <Hammer className="h-10 w-10 text-indigo-500 animate-bounce" />
                <Rocket className="h-8 w-8" />
              </div>

              <div className="space-y-2">
                <h3 className="text-lg font-bold text-slate-800">Feature Under Construction</h3>
                <p className="text-xs text-slate-600 leading-relaxed px-4">
                  This module is currently being developed by our team. Check back soon for updates or subscribe to our newsletter to stay informed.
                </p>
              </div>

              {/* Progress Bar Mockup */}
              <div className="w-full bg-slate-100 rounded-full h-2.5 mb-2 overflow-hidden">
                <div 
                  className="bg-indigo-600 h-2.5 rounded-full transition-all duration-1000" 
                  style={{ width: '65%' }}
                ></div>
              </div>
              <p className="text-[10px] uppercase tracking-widest font-bold text-slate-400">
                Development Progress: 65%
              </p>

              {/* Action Button */}
              <div className="pt-4 border-t border-slate-100">
                <button
                  onClick={onBack}
                  className="w-full flex justify-center items-center py-2.5 px-4 border-2 border-slate-100 rounded-xl text-sm font-bold text-slate-700 hover:bg-slate-50 transition-all active:scale-[0.98]"
                >
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Go back to Dashboard
                </button>
              </div>
            </div>

          </div>
        </div>

        {/* Home Link */}
        <button 
          onClick={() => navigate("/")}
          className="mt-8 flex items-center text-xs font-bold text-slate-500 hover:text-indigo-600 transition-colors"
        >
          <Home className="mr-1.5 h-3.5 w-3.5" />
          Back to Home
        </button>
      </div>
    </div>
  );
};

export default ComingSoon;