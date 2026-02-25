import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/auth';
import Sidebar from '../components/sidebar';
import StatCard from '../components/statcard';

export default function Dashboard() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  // Protect the route: if no user, go to login
  useEffect(() => {
    if (!user) navigate('/');
  }, [user, navigate]);

  if (!user) return null; // Prevent flash of content

  return (
    <div className="d-flex min-vh-100 bg-light">
      {/* Sidebar Component */}
      <Sidebar onLogout={logout} />

      {/* Main Content */}
      <div className="flex-grow-1 p-4">
        {/* Inside Dashboard.jsx Header */}
<header className="d-flex justify-content-between align-items-center mb-4">
  <h2>Welcome, {user.name}!</h2>
  
  <div className="d-flex align-items-center gap-3">
    <span className="text-muted">{user.role}</span>
    
    {/* Show Google Picture if it exists, otherwise show a letter */}
    {user.picture ? (
      <img 
        src={user.picture} 
        alt="Profile" 
        className="rounded-circle shadow-sm" 
        style={{ width: '40px', height: '40px', objectFit: 'cover' }} 
      />
    ) : (
      <div className="bg-secondary rounded-circle d-flex align-items-center justify-content-center text-white fw-bold" style={{ width: '40px', height: '40px' }}>
        {user.name.charAt(0)}
      </div>
    )}
  </div>
</header>

        <div className="row">
          <StatCard title="Views" value="10k" icon="eye" colorClass="primary" />
          <StatCard title="Orders" value="45" icon="cart" colorClass="success" />
          <StatCard title="Issues" value="3" icon="bug" colorClass="danger" />
        </div>
      </div>
    </div>
  );
}