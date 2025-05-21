import React, { useState } from 'react';
import Button from '../ui/Button';
import Input from '../ui/Input';
import { User, Users } from 'lucide-react';

interface LoginFormProps {
  onLogin: (email: string, password: string) => Promise<boolean>;
  onDemoLogin: (role: string) => void;
}

const LoginForm: React.FC<LoginFormProps> = ({ onLogin, onDemoLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    
    if (!email || !password) {
      setError('Please enter both email and password');
      return;
    }
    
    setIsLoading(true);
    
    try {
      const success = await onLogin(email, password);
      
      if (!success) {
        setError('Invalid email or password');
      }
    } catch (err) {
      setError('Login failed. Please try again later.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full max-w-md p-8 bg-white rounded-xl shadow-md">
      <div className="text-center mb-6">
        <div className="inline-flex items-center justify-center p-2 bg-indigo-600 rounded-lg mb-4">
          <Users className="h-8 w-8 text-white" />
        </div>
        <h1 className="text-2xl font-bold text-gray-900">HRMS System</h1>
        <p className="mt-2 text-gray-600">Sign in to your account</p>
      </div>
      
      {error && (
        <div className="mb-4 p-3 bg-red-50 border border-red-200 text-red-700 rounded-md text-sm">
          {error}
        </div>
      )}
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <Input
            label="Email"
            type="email"
            id="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            fullWidth
            required
          />
        </div>
        
        <div>
          <Input
            label="Password"
            type="password"
            id="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            fullWidth
            required
          />
        </div>
        
        <div className="pt-2">
          <Button
            type="submit"
            variant="primary"
            fullWidth
            isLoading={isLoading}
          >
            Sign in
          </Button>
        </div>
      </form>
      
      <div className="mt-8">
        <p className="text-sm text-center text-gray-600 mb-4">
          Demo Accounts
        </p>
        <div className="grid grid-cols-3 gap-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => onDemoLogin('admin')}
          >
            Admin
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => onDemoLogin('hr')}
          >
            HR
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => onDemoLogin('employee')}
          >
            Employee
          </Button>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;