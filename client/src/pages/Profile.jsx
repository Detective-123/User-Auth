import React, { useState } from 'react';
import { 
  User, 
  Mail, 
  Camera, 
  Shield, 
  Bell, 
  ChevronRight, 
  ArrowLeft, 
  Check, 
  Globe,
  Trash2,
  BadgeCheck,
  Key,
  Smartphone,
  RotateCcw,
  LogOut,
  AlertTriangle,
  Lock,
  Eye,
  Link as LinkIcon,
  SmartphoneNfc,
  Moon,
  Sun,
  Monitor,
  RefreshCw
} from 'lucide-react';

/**
 * ProfileSettings Component
 * Updated: Enabled hover tooltip for Email Verified badge by removing pointer-events-none.
 */
const ProfileSettings = ({ onBack }) => {
  const [activeTab, setActiveTab] = useState('edit-profile');
  const [isSaved, setIsSaved] = useState(false);
  const [resendStatus, setResendStatus] = useState('idle'); // idle, sending, sent
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  
  const [profile, setProfile] = useState({
    fullName: 'John Doe',
    username: 'johndoe_dev',
    website: 'https://johndoe.com',
    bio: 'Fullstack developer & UI enthusiast. Building the future of the web.',
    email: 'john@example.com',
    isEmailVerified: true, // Set to true to show the badge
    phone: '+1 (555) 000-0000',
    twoFactorEnabled: false,
    isPrivate: false,
    showActivityStatus: true,
    theme: 'system'
  });

  const handleSave = (e) => {
    e.preventDefault();
    setIsSaved(true);
    setTimeout(() => setIsSaved(false), 3000);
  };

  const handleResendVerification = () => {
    setResendStatus('sending');
    setTimeout(() => setResendStatus('sent'), 1500);
    setTimeout(() => setResendStatus('idle'), 5000);
  };

  const tabs = [
    { id: 'edit-profile', label: 'Edit Profile', icon: User },
    { id: 'security', label: 'Security', icon: Shield },
    { id: 'privacy', label: 'Privacy', icon: Lock },
    { id: 'connected', label: 'Connected Apps', icon: LinkIcon },
    { id: 'appearance', label: 'Appearance', icon: Moon },
  ];

  return (
    <div className="h-screen w-full bg-slate-100 flex flex-col justify-center items-center p-4 font-sans overflow-hidden">
      <div className="w-full max-w-4xl h-155 bg-white shadow-[0_20px_50px_rgba(8,112,184,0.1)] rounded-3xl border-2 border-slate-200 flex overflow-hidden relative">
        
        {/* Delete Confirmation Modal Overlay */}
        {showDeleteModal && (
          <div className="absolute inset-0 z-50 bg-slate-900/40 backdrop-blur-sm flex items-center justify-center p-6">
            <div className="bg-white rounded-2xl p-6 max-w-sm w-full shadow-2xl animate-in zoom-in-95 duration-200">
              <div className="bg-red-50 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <AlertTriangle className="text-red-600 h-6 w-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Delete Account?</h3>
              <p className="text-sm text-slate-500 mb-6 leading-relaxed">
                This action is permanent and cannot be undone. All your data, projects, and settings will be erased forever.
              </p>
              <div className="flex space-x-3">
                <button 
                  onClick={() => setShowDeleteModal(false)}
                  className="flex-1 py-2 text-sm font-bold text-slate-600 bg-slate-100 rounded-xl hover:bg-slate-200 transition-colors"
                >
                  Cancel
                </button>
                <button className="flex-1 py-2 text-sm font-bold text-white bg-red-600 rounded-xl hover:bg-red-700 transition-colors shadow-lg shadow-red-100">
                  Delete
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Sidebar */}
        <div className="w-64 border-r border-slate-100 bg-slate-50/50 flex flex-col">
          <div className="p-6 border-b border-slate-100 flex items-center space-x-3">
            <button onClick={onBack} className="p-2 hover:bg-white rounded-lg transition-colors text-slate-500">
              <ArrowLeft className="h-4 w-4" />
            </button>
            <h2 className="font-bold text-slate-800 tracking-tight">Settings</h2>
          </div>
          
          <nav className="flex-1 p-3 space-y-1">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`w-full flex items-center justify-between px-4 py-3 rounded-xl text-sm font-semibold transition-all ${
                  activeTab === tab.id 
                    ? 'bg-white text-indigo-600 shadow-sm border border-slate-100' 
                    : 'text-slate-500 hover:bg-slate-100 hover:text-slate-700'
                }`}
              >
                <div className="flex items-center">
                  <tab.icon className={`h-4 w-4 mr-3 ${activeTab === tab.id ? 'text-indigo-600' : 'text-slate-400'}`} />
                  {tab.label}
                </div>
                {activeTab === tab.id && <ChevronRight className="h-3 w-3" />}
              </button>
            ))}
          </nav>

          <div className="p-4 border-t border-slate-100">
            <button className="w-full flex items-center px-4 py-2 text-xs font-bold text-red-500 hover:bg-red-50 rounded-lg transition-colors">
              <LogOut className="h-3.5 w-3.5 mr-2" />
              Sign Out
            </button>
          </div>
        </div>

        {/* Main Content Area */}
        <div className="flex-1 flex flex-col overflow-y-auto">
          {activeTab === 'edit-profile' && (
            <form onSubmit={handleSave} className="p-8 max-w-2xl animate-in fade-in slide-in-from-bottom-2 duration-300">
              <div className="flex items-center space-x-6 mb-8">
                <div className="relative group cursor-pointer">
                  <div className="h-20 w-20 rounded-full bg-linear-to-tr from-indigo-500 to-purple-500 p-0.5 shadow-lg shadow-indigo-100 group-hover:scale-105 transition-transform">
                    <div className="h-full w-full rounded-full bg-white p-0.5">
                      <img 
                        src="https://api.dicebear.com/7.x/avataaars/svg?seed=John" 
                        alt="Profile" 
                        className="rounded-full bg-slate-100 h-full w-full object-cover"
                      />
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-black/20 rounded-full opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity">
                    <Camera className="text-white h-6 w-6" />
                  </div>
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 leading-tight">@{profile.username}</h3>
                  <button type="button" className="text-xs font-bold text-indigo-600 hover:text-indigo-500">
                    Change profile photo
                  </button>
                </div>
              </div>

              <div className="space-y-4">
                <div className="grid grid-cols-3 items-center">
                  <label className="text-sm font-bold text-slate-700">Full Name</label>
                  <input
                    type="text"
                    className="col-span-2 px-3 py-1.5 border-2 border-slate-100 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-slate-50 focus:bg-white transition-all"
                    value={profile.fullName}
                    onChange={(e) => setProfile({...profile, fullName: e.target.value})}
                  />
                </div>

                <div className="grid grid-cols-3 items-center">
                  <label className="text-sm font-bold text-slate-700">Username</label>
                  <input
                    type="text"
                    className="col-span-2 px-3 py-1.5 border-2 border-slate-100 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-slate-50 focus:bg-white transition-all"
                    value={profile.username}
                    onChange={(e) => setProfile({...profile, username: e.target.value})}
                  />
                </div>

                <div className="grid grid-cols-3 items-start pt-2">
                  <label className="text-sm font-bold text-slate-700 pt-1.5">Bio</label>
                  <div className="col-span-2 space-y-1">
                    <textarea
                      rows="3"
                      className="w-full px-3 py-2 border-2 border-slate-100 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-slate-50 focus:bg-white transition-all resize-none"
                      value={profile.bio}
                      onChange={(e) => setProfile({...profile, bio: e.target.value})}
                    />
                    <div className="flex justify-between items-center px-1">
                       <p className="text-[10px] text-slate-400 font-medium uppercase tracking-wider">Public Bio</p>
                       <p className="text-[10px] text-slate-400 font-bold">{profile.bio.length}/150</p>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-3 items-center pt-2">
                  <label className="text-sm font-bold text-slate-700">Email Address</label>
                  <div className="col-span-2 relative flex items-center">
                    <input
                      type="email"
                      className={`w-full px-3 py-1.5 border-2 border-slate-100 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-slate-50 focus:bg-white transition-all ${profile.isEmailVerified ? 'pr-10' : ''}`}
                      value={profile.email}
                      onChange={(e) => setProfile({...profile, email: e.target.value})}
                    />
                    {profile.isEmailVerified && (
                      <div 
                        className="absolute right-3 flex items-center cursor-help group" 
                        title="Email Verified"
                      >
                        <BadgeCheck className="h-4 w-4 text-green-500 fill-green-50" />
                      </div>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-3 items-center pt-2">
                  <label className="text-sm font-bold text-slate-700">Phone</label>
                  <input
                    type="text"
                    className="col-span-2 px-3 py-1.5 border-2 border-slate-100 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-slate-50 focus:bg-white transition-all"
                    value={profile.phone}
                    onChange={(e) => setProfile({...profile, phone: e.target.value})}
                  />
                </div>

                <div className="grid grid-cols-3 pt-6">
                  <div />
                  <div className="col-span-2">
                    <button
                      type="submit"
                      className="px-8 py-2.5 bg-indigo-600 text-white text-sm font-bold rounded-xl shadow-lg shadow-indigo-100 hover:bg-indigo-700 active:scale-95 transition-all flex items-center"
                    >
                      {isSaved ? <><Check className="h-4 w-4 mr-2" />Saved</> : 'Save Changes'}
                    </button>
                  </div>
                </div>
              </div>
            </form>
          )}

          {activeTab === 'security' && (
            <div className="p-8 max-w-2xl animate-in fade-in slide-in-from-bottom-2 duration-300">
              <div className="mb-8">
                <h3 className="text-lg font-bold text-slate-900 mb-1 flex items-center">
                    <Shield className="h-5 w-5 mr-2 text-indigo-600" />
                    Account Security
                </h3>
                <p className="text-xs text-slate-500">Manage protection and verification.</p>
              </div>

              <div className="space-y-6">
                {/* Email Verification Section */}
                <div className="bg-slate-50 rounded-2xl p-5 border border-slate-100">
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="text-sm font-bold text-slate-800 flex items-center">
                      <Mail className="h-4 w-4 mr-2 text-indigo-500" />
                      Email Verification
                    </h4>
                    {profile.isEmailVerified ? (
                       <span className="flex items-center text-[10px] font-bold text-green-600 bg-green-50 px-2 py-1 rounded-md">
                         <BadgeCheck className="h-3 w-3 mr-1" /> VERIFIED
                       </span>
                    ) : (
                       <span className="text-[10px] font-bold text-amber-600 bg-amber-50 px-2 py-1 rounded-md uppercase">Pending</span>
                    )}
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <div className="flex-1 px-3 py-1.5 border-2 border-slate-100 rounded-lg text-sm bg-white text-slate-500 italic">
                      {profile.email}
                    </div>
                    {!profile.isEmailVerified && (
                      <button 
                        onClick={handleResendVerification}
                        disabled={resendStatus !== 'idle'}
                        className="px-4 py-1.5 bg-indigo-600 text-white text-xs font-bold rounded-lg hover:bg-indigo-700 transition-colors flex items-center disabled:opacity-50"
                      >
                        {resendStatus === 'sending' && <RefreshCw className="h-3 w-3 mr-2 animate-spin" />}
                        {resendStatus === 'sent' ? 'Sent!' : 'Resend Email'}
                      </button>
                    )}
                  </div>
                </div>

                {/* Two Factor Auth Section */}
                <div className="bg-slate-50 rounded-2xl p-5 border border-slate-100">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="text-sm font-bold text-slate-800 flex items-center">
                        <SmartphoneNfc className="h-4 w-4 mr-2 text-indigo-500" />
                        Two-Factor Auth (2FA)
                      </h4>
                      <p className="text-[11px] text-slate-500 mt-1">Add an extra layer of security to your account.</p>
                    </div>
                    <button 
                      onClick={() => setProfile({...profile, twoFactorEnabled: !profile.twoFactorEnabled})}
                      className={`w-11 h-6 rounded-full transition-colors relative ${profile.twoFactorEnabled ? 'bg-indigo-600' : 'bg-slate-300'}`}
                    >
                      <div className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-all ${profile.twoFactorEnabled ? 'left-6' : 'left-1'}`} />
                    </button>
                  </div>
                </div>

                {/* Password Change Form */}
                <div className="bg-slate-50 rounded-2xl p-5 border border-slate-100">
                  <h4 className="text-sm font-bold text-slate-800 mb-4 flex items-center">
                    <Key className="h-4 w-4 mr-2 text-indigo-500" />
                    Update Password
                  </h4>
                  <div className="space-y-3">
                    <input type="password" placeholder="Current Password" className="w-full px-3 py-2 border-2 border-slate-100 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-white" />
                    <input type="password" placeholder="New Password" className="w-full px-3 py-2 border-2 border-slate-100 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-white" />
                    <button className="w-full py-2 bg-slate-800 text-white text-xs font-bold rounded-lg hover:bg-slate-900 transition-colors">
                      Change Password
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'privacy' && (
            <div className="p-8 max-w-2xl animate-in fade-in slide-in-from-bottom-2 duration-300">
              <div className="mb-8">
                <h3 className="text-lg font-bold text-slate-900 mb-1">Privacy & Safety</h3>
                <p className="text-xs text-slate-500">Control who can see your activity.</p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-slate-50 rounded-2xl border border-slate-100">
                  <div>
                    <h4 className="text-sm font-bold text-slate-800">Private Account</h4>
                    <p className="text-[11px] text-slate-500">Only approved people can see your profile.</p>
                  </div>
                  <button 
                    onClick={() => setProfile({...profile, isPrivate: !profile.isPrivate})}
                    className={`w-11 h-6 rounded-full transition-colors relative ${profile.isPrivate ? 'bg-indigo-600' : 'bg-slate-300'}`}
                  >
                    <div className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-all ${profile.isPrivate ? 'left-6' : 'left-1'}`} />
                  </button>
                </div>

                <div className="pt-8 mt-8 border-t border-slate-100">
                  <h4 className="text-xs font-bold text-red-500 uppercase tracking-widest mb-4">Danger Zone</h4>
                  <button 
                    onClick={() => setShowDeleteModal(true)}
                    className="flex items-center px-4 py-3 w-full border-2 border-red-50 rounded-xl text-red-600 hover:bg-red-50 transition-all font-bold text-sm"
                  >
                    <Trash2 className="h-4 w-4 mr-3" />
                    Delete Account Permanently
                  </button>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'connected' && (
            <div className="p-8 max-w-2xl animate-in fade-in slide-in-from-bottom-2 duration-300 text-center flex flex-col items-center justify-center h-full">
              <div className="bg-indigo-50 p-4 rounded-full mb-4">
                <LinkIcon className="h-8 w-8 text-indigo-600" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Connected Accounts</h3>
              <div className="w-full space-y-3">
                <div className="flex items-center justify-between p-4 bg-white border-2 border-slate-100 rounded-xl">
                  <div className="flex items-center">
                    <div className="bg-slate-900 p-2 rounded-lg mr-3">
                       <svg className="h-4 w-4 text-white fill-current" viewBox="0 0 24 24"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.43.372.823 1.102.823 2.222 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>
                    </div>
                    <span className="text-sm font-bold text-slate-800">GitHub</span>
                  </div>
                  <span className="text-xs font-bold text-green-500">CONNECTED</span>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'appearance' && (
            <div className="p-8 max-w-2xl animate-in fade-in slide-in-from-bottom-2 duration-300">
              <div className="mb-8">
                <h3 className="text-lg font-bold text-slate-900 mb-1">Appearance</h3>
                <p className="text-xs text-slate-500">Theme preferences.</p>
              </div>

              <div className="grid grid-cols-3 gap-4">
                {[
                  { id: 'light', label: 'Light', icon: Sun },
                  { id: 'dark', label: 'Dark', icon: Moon },
                  { id: 'system', label: 'System', icon: Monitor },
                ].map((mode) => (
                  <button
                    key={mode.id}
                    onClick={() => setProfile({...profile, theme: mode.id})}
                    className={`flex flex-col items-center justify-center p-6 rounded-2xl border-2 transition-all ${
                      profile.theme === mode.id 
                        ? 'border-indigo-600 bg-indigo-50/50 shadow-md' 
                        : 'border-slate-100 bg-slate-50 hover:bg-white'
                    }`}
                  >
                    <mode.icon className={`h-6 w-6 mb-3 ${profile.theme === mode.id ? 'text-indigo-600' : 'text-slate-400'}`} />
                    <span className={`text-xs font-bold ${profile.theme === mode.id ? 'text-indigo-700' : 'text-slate-500'}`}>
                      {mode.label}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProfileSettings;