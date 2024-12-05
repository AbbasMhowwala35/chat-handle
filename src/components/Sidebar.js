import React from 'react';

const users = [
  { id: 1, name: 'John Doe', avatar: 'avatar1.png', message: 'Hello!', timestamp: '2m ago', unread: 1 },
];

const Sidebar = () => {
  return (
    <div className="sidebar bg-light p-3" style={{ width: '300px' }}>
      <div className="d-flex justify-content-between mb-3">
        <button className="btn btn-outline-secondary">☰</button>
        <input type="text" className="form-control" placeholder="Search..." />
      </div>
      <ul className="list-group">
        {users.map(user => (
          <li key={user.id} className="list-group-item d-flex justify-content-between align-items-center">
            <img src={user.avatar} alt={user.name} style={{ width: '40px', borderRadius: '50%' }} />
            <div>
              <strong>{user.name}</strong>
              <p>{user.message}</p>
            </div>
            {user.unread > 0 && <span className="badge bg-danger">{user.unread}</span>}
            <small>{user.timestamp}</small>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
