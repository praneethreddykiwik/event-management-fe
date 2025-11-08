import axios from "axios";
import "./users.css";
import { useEffect, useState } from "react";

const Users = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const res = await axios.get("http://localhost:4000/users");
      console.log("res", res);
      setUsers(res.data);
    } catch (error) {
      console.log("Get users error", error);
    }
  };

  return (
    <div className="users">
      <h1>Users</h1>

      <button onClick={fetchUsers}>Fetch users</button>

      {users.map((user) => {
        return (
          <div className="users-list-container">
            <p>{user.name}</p>
            <p>{user.age}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Users;

// SPA
