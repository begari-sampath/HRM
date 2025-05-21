import React from 'react';
import { useAuth } from '../context/AuthContext';
import LoginForm from '../components/login/LoginForm';
import { getCurrentUser } from '../data/mockData';

interface LoginPageProps {
  onSuccess: () => void;
}

const LoginPage: React.FC<LoginPageProps> = ({ onSuccess }) => {
  const { login } = useAuth();
  
  const handleLogin = async (email: string, password: string) => {
    const success = await login(email, password);
    
    if (success) {
      onSuccess();
    }
    
    return success;
  };
  
  const handleDemoLogin = async (role: string) => {
    const user = getCurrentUser(role);
    const success = await login(user.email, 'password');
    
    if (success) {
      onSuccess();
    }
  };
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 to-teal-100 flex items-center justify-center p-4">
      <LoginForm onLogin={handleLogin} onDemoLogin={handleDemoLogin} />
    </div>
  );
};

export default LoginPage;