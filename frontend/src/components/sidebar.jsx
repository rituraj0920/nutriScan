export default function Sidebar({ onLogout }) {
  return (
    <div className="d-flex flex-column p-3 text-white bg-dark vh-100" style={{ width: '250px' }}>
      <h4 className="mb-4">MyApp</h4>
      <ul className="nav nav-pills flex-column mb-auto">
        <li className="nav-item"><a href="#" className="nav-link active">Home</a></li>
        <li className="nav-item"><a href="#" className="nav-link text-white">Profile</a></li>
      </ul>
      <button onClick={onLogout} className="btn btn-danger mt-auto">Logout</button>
    </div>
  );
}

