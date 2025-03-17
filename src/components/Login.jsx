import { useState } from "react";
import { loginUser } from "../api/auth";
import { useNavigate, Link } from "react-router-dom";
import { LogIn, Mail, Lock } from 'lucide-react';

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    const { session, error } = await loginUser(email, password);
    if (error) return setError(error.message);
    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="w-full max-w-md glass-effect p-8 rounded-2xl shadow-xl">
        <div className="flex justify-center mb-8">
          <div className="bg-blue-100 p-4 rounded-full shadow-inner">
            <LogIn className="h-8 w-8 text-blue-600" />
          </div>
        </div>
        
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Welcome Back</h2>
        
        {error && (
          <div className="mb-6 p-4 bg-red-50 border-l-4 border-red-500 text-red-700 rounded">
            <p className="text-sm">{error}</p>
          </div>
        )}

        <form onSubmit={handleLogin} className="space-y-6">
          <div className="relative group">
            <div className="absolute left-3 top-1/2 transform -translate-y-1/2 p-2 rounded-full group-focus-within:bg-blue-50 transition-all duration-200">
              <Mail className="h-5 w-5 text-gray-400 group-focus-within:text-blue-500" />
            </div>
            <input
              type="email"
              placeholder="Email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="input-field pl-14"
              required
            />
          </div>

          <div className="relative group">
            <div className="absolute left-3 top-1/2 transform -translate-y-1/2 p-2 rounded-full group-focus-within:bg-blue-50 transition-all duration-200">
              <Lock className="h-5 w-5 text-gray-400 group-focus-within:text-blue-500" />
            </div>
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="input-field pl-14"
              required
            />
          </div>

          <button type="submit" className="btn-primary w-full">
            Sign in
          </button>
        </form>

        <p className="mt-8 text-center text-gray-600">
          Don't have an account?{' '}
          <Link to="/signup" className="text-blue-600 hover:text-blue-700 font-medium">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;