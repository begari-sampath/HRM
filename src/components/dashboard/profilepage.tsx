import React from 'react';
import {
  User,
  Briefcase,
  Mail,
  Phone,
  Trash2,
  Calendar,
  ToggleRight,
  ToggleLeft,
  ChevronDown,
  ClipboardCheck,
  FileText,
} from 'lucide-react';

const ProfilePage = () => {
  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      {/* <aside className="w-20 bg-gray-900 text-white flex flex-col items-center py-6 space-y-6">
        <div className="text-lg font-bold bg-primary text-white p-2 rounded">HR</div>
        <div className="space-y-6 mt-10">
          <User className="w-6 h-6 text-gray-300 hover:text-white" />
          <Briefcase className="w-6 h-6 text-gray-300 hover:text-white" />
          <Calendar className="w-6 h-6 text-gray-300 hover:text-white" />
          <ClipboardCheck className="w-6 h-6 text-gray-300 hover:text-white" />
        </div>
        <img
          src="https://randomuser.me/api/portraits/women/44.jpg"
          alt="user"
          className="mt-auto w-10 h-10 rounded-full ring-2 ring-white"
        />
      </aside> */}

      {/* Main Content */}
      <main className="flex-1 p-8">
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center space-x-4">
            <img
              src="https://randomuser.me/api/portraits/men/32.jpg"
              alt="profile"
              className="w-20 h-20 rounded-full border-4 border-white shadow-md"
            />
            <div>
              <h2 className="text-2xl font-bold text-gray-800">Russel Sims</h2>
              <p className="text-sm text-gray-400">Added on 21.04.2022</p>
            </div>
          </div>
          <button className="flex items-center px-4 py-2 bg-red-100 text-red-600 rounded-lg hover:bg-red-200">
            <Trash2 className="mr-2 w-4 h-4" />
            Delete
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Left: Profile Info */}
          <div className="md:col-span-1 space-y-6">
            <div className="bg-white p-6 rounded-2xl shadow-md">
              <p className="font-medium text-gray-700 mb-2">Change Profile Image</p>
              <button className="text-blue-600 hover:underline text-sm">Upload Image</button>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-md space-y-4">
              <div>
                <label className="text-sm text-gray-500">First Name</label>
                <input type="text" defaultValue="Russel" className="input-field" />
              </div>
              <div>
                <label className="text-sm text-gray-500">Last Name</label>
                <input type="text" defaultValue="Sims" className="input-field" />
              </div>
              <div>
                <label className="text-sm text-gray-500">Email</label>
                <div className="flex items-center">
                  <input type="email" defaultValue="russel@mycompany.com" className="input-field" />
                  <ClipboardCheck className="ml-2 w-4 h-4 text-gray-400" />
                </div>
              </div>
              <div>
                <label className="text-sm text-gray-500">Phone Number</label>
                <div className="flex items-center">
                  <input type="text" defaultValue="+1 255 29345690" className="input-field" />
                  <ClipboardCheck className="ml-2 w-4 h-4 text-gray-400" />
                </div>
              </div>
              <div>
                <label className="text-sm text-gray-500">Position</label>
                <input type="text" defaultValue="iOS Developer" className="input-field" />
              </div>
            </div>

            <div className="flex gap-4">
              <button className="w-full py-2 bg-gray-200 rounded-xl text-gray-700 hover:bg-gray-300">
                Cancel
              </button>
              <button className="w-full py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700">
                Save Changes
              </button>
            </div>
          </div>

          {/* Right: Role & Onboarding */}
          <div className="md:col-span-2 space-y-6">
            <div className="bg-white p-6 rounded-2xl shadow-md space-y-4">
              <div>
                <label className="text-sm text-gray-500">Role</label>
                <div className="relative">
                  <select className="input-field pr-10 appearance-none">
                    <option>Employee</option>
                    <option>Manager</option>
                    <option>Admin</option>
                  </select>
                  <ChevronDown className="absolute right-3 top-2.5 w-4 h-4 text-gray-400" />
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-4 mt-4">
                <div className="space-y-1">
                  <p className="text-sm text-gray-500">HR</p>
                  <p className="text-sm font-medium text-gray-700 flex items-center gap-2">
                    <img src="https://randomuser.me/api/portraits/women/65.jpg" className="w-6 h-6 rounded-full" />
                    Kate Middleton
                  </p>
                </div>
                <div className="space-y-1">
                  <p className="text-sm text-gray-500">Manager</p>
                  <p className="text-sm font-medium text-gray-700 flex items-center gap-2">
                    <img src="https://randomuser.me/api/portraits/men/74.jpg" className="w-6 h-6 rounded-full" />
                    Kirk Mitrohin
                  </p>
                </div>
                <div className="space-y-1">
                  <p className="text-sm text-gray-500">Lead</p>
                  <p className="text-sm font-medium text-gray-700 flex items-center gap-2">
                    <img src="https://randomuser.me/api/portraits/men/51.jpg" className="w-6 h-6 rounded-full" />
                    Eugene Hummell
                  </p>
                </div>
              </div>
            </div>

            {/* Onboarding */}
            <div className="bg-white p-6 rounded-2xl shadow-md">
              <div className="flex justify-between items-center">
                <p className="text-sm text-gray-500">Starts on</p>
                <div className="flex items-center gap-2 text-sm text-gray-700">
                  <Calendar className="w-4 h-4" />
                  21.05.2022
                </div>
              </div>

              <div className="flex justify-between items-center my-4">
                <p className="text-sm text-gray-500">Onboarding Required</p>
                <ToggleRight className="w-6 h-6 text-blue-500" />
              </div>

              <div className="mt-4">
                <div className="flex justify-between text-sm text-gray-500 mb-1">
                  <span>Current Status</span>
                  <span>35%</span>
                </div>
                <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                  <div className="h-full w-[35%] bg-green-400 rounded-full"></div>
                </div>
                <button className="text-blue-600 hover:underline text-sm mt-2">View Answers</button>
              </div>

              <div className="mt-6 space-y-3">
                {[
                  ['Office Tour', true, '100%'],
                  ['Management Introductory', false, '0%'],
                  ['Work Tools', true, '20%'],
                  ['Meet Your Colleagues', true, '0%'],
                  ['Duties Journal', true, '0%'],
                  ['Requests Handling', true, '0%'],
                  ['Activity Tracking', true, '0%'],
                ].map(([label, active, percent], i) => (
                  <div key={i} className="flex justify-between text-sm">
                    <div className="flex items-center gap-2">
                      {active ? (
                        <ToggleRight className="text-blue-500 w-5 h-5" />
                      ) : (
                        <ToggleLeft className="text-gray-400 w-5 h-5" />
                      )}
                      <span className="text-gray-600">{label}</span>
                    </div>
                    <span className="text-gray-500">{percent}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ProfilePage;
