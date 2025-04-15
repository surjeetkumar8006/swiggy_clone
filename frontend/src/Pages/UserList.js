import React, { useEffect, useState } from "react";

const UserList = () => {
  const [users, setUsers] = useState([]);

  const fetchUsers = async () => {
    const res = await fetch("http://localhost:5000/user"); 
    const data = await res.json();
    setUsers(data);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div className="user-list-container">
      <h2 className="title">All Users</h2>
      <div className="user-cards">
        {users.map((user) => (
          <div className="user-card" key={user.id}>
            <div className="user-info">
              <h3 className="user-name">{user.name}</h3>
              <p className="user-username">{user.username}</p>
              <p className="user-email"><strong>Email: </strong>{user.email}</p>
              <p className="user-password"><strong>Password: </strong>{user.password}</p>
              <p className="user-role"><strong>Role: </strong>{user.usertype}</p>
            </div>
            <button className="view-details-btn" onClick={() => alert(`Details for ${user.name}`)}>
              View Details
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserList;
