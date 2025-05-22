import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider, useAuth } from './context/AuthContext';
import LoginPage from './pages/LoginPage';
import AppLayout from './layouts/AppLayout';
import ApplyLeave from './pages/employees/ApplyLeave';
import AddEmployeeForm from './pages/employees/Addemployee';
import ProfilePage from './components/dashboard/profilepage';
import FileUploadPage from './pages/documents/uploadDoc';


function AppContent() {
  const { user, isAuthenticated, logout } = useAuth();
  const [isLoggedIn, setIsLoggedIn] = useState(isAuthenticated);

  const handleLoginSuccess = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    logout();
    setIsLoggedIn(false);
  };

  if (!isLoggedIn) {
    return <LoginPage onSuccess={handleLoginSuccess} />;
  }

  return (
    <Router>
      <Routes>
        <Route path="/*" element={<AppLayout user={user!} onLogout={handleLogout} />} />
        <Route path="/applyleave" element={<ApplyLeave />} />
        <Route path="/addemployee" element={<AddEmployeeForm />} />
        <Route path="/profile" element={<ProfilePage/>} />
        {/* Add other routes here */}
        {/* <Route path="/leaves" element={<LeavesPage />} /> */}
        {/* <Route path="/employees" element={<EmployeesPage />} /> */}
        {/* <Route path="/addemployee" element={<AddEmployeeForm />} /> */}
        {/* <Route path="/applyleave" element={<ApplyLeave />} /> */}
        {/* <Route path="/profile" element={<ProfilePage user={user!} />} /> */}
        <Route path="/upload" element={<FileUploadPage />} />
        {/* <Route path="/attendance" element={<AttendancePage />} /> */}
        {/* <Route path="/performance" element={<PerformancePage />} /> */}
        {/*
        {<Route/* Add other routes    here */}
      </Routes>
    </Router>
  );
}

function App() {
  return (
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  );
}

export default App;
