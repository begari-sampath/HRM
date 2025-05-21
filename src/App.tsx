import React, { useState } from 'react';
import { AuthProvider, useAuth } from './context/AuthContext';
import LoginPage from './pages/LoginPage';
import AppLayout from './layouts/AppLayout';

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
  
  return (
    <>
      {!isLoggedIn ? (
        <LoginPage onSuccess={handleLoginSuccess} />
      ) : (
        <AppLayout user={user!} onLogout={handleLogout} />
      )}
    </>
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