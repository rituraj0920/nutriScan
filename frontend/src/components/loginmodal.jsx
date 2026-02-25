import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/auth';
import { GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from 'jwt-decode'; // To read Google's secure token

export default function LoginModal({ isOpen, onClose }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();

  if (!isOpen) return null;

  // Handle traditional Email/Password login
  const handleEmailSubmit = (e) => {
    e.preventDefault();
    if (email === "admin@test.com" && password === "password") {
      login({ name: 'Alex', role: 'Admin', picture: null });
      onClose();
      navigate('/dashboard');
    } else {
      alert("Invalid credentials!");
    }
  };

  // Handle successful Google Login
  const handleGoogleSuccess = (credentialResponse) => {
    // Decode the secure token from Google
    const decoded = jwtDecode(credentialResponse.credential);
    
    // Log the user in using their Google info
    login({ 
      name: decoded.name, 
      email: decoded.email, 
      picture: decoded.picture, // Google profile picture
      role: 'User' 
    });
    
    onClose();
    navigate('/dashboard');
  };

  return (
    <div className="modal d-block" style={{ backgroundColor: 'rgba(0,0,0,0.5)' }} tabIndex="-1">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content shadow">
          
          <div className="modal-header border-0 pb-0">
            <h5 className="modal-title fw-bold">Sign In</h5>
            <button type="button" className="btn-close" onClick={onClose}></button>
          </div>

          <div className="modal-body p-4">
            {/* The Google Sign-In Button */}
            <div className="d-flex justify-content-center mb-3">
              <GoogleLogin
                onSuccess={handleGoogleSuccess}
                onError={() => console.log('Google Login Failed')}
                theme="outline"
                size="large"
                width="100%"
              />
            </div>

            {/* Divider */}
            <div className="d-flex align-items-center my-3">
              <hr className="flex-grow-1" />
              <span className="mx-2 text-muted small">OR</span>
              <hr className="flex-grow-1" />
            </div>

            {/* Traditional Form */}
            <form onSubmit={handleEmailSubmit}>
              <div className="mb-3">
                <label className="form-label">Email address</label>
                <input 
                  type="email" 
                  className="form-control" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required 
                />
              </div>
              <div className="mb-4">
                <label className="form-label">Password</label>
                <input 
                  type="password" 
                  className="form-control" 
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required 
                />
              </div>
              <button type="submit" className="btn btn-primary w-100 py-2">Login</button>
            </form>
          </div>

        </div>
      </div>
    </div>
  );
}