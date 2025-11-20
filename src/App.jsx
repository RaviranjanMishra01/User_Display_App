import { useEffect, useState } from "react";

export default function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const res = await fetch("https://dummyjson.com/users");
      const data = await res.json();
      setUsers(data.users);
    } catch (err) {
      console.log("Error fetching data", err);
    }
  };

  return (
    <div className="layout-wrapper">
      <h1 className="title">User Directory</h1>

      <div className="cards-container">
        {users.map((u) => (
          <div className="profile-card" key={u.id}>
            <img src={u.image} alt={u.firstName} className="profile-photo" />
            <h3 className="user-name">
              {u.firstName} {u.lastName}
            </h3>
            <p className="user-email">{u.email}</p>
            <span className="user-age">Age: {u.age}</span>
            <p className="user-address">
             {u.address.state}, {u.address.country}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}



