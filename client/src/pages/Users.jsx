import { useEffect, useState } from "react";
import { config } from "../config";

export default function Users() {
  const [users, setUsers] = useState([]);

  async function fetchUsers() {
    const url = new URL("/users", config.API_URL);
    const response = await fetch(url);
    const data = await response.json();
    setUsers(data);
  }

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div>
      <h1>Users</h1>
      <div style={{ marginBottom: "15rem" }}>
        {users.map(({ _id, name, age }) => (
          <div key={_id}>
            <p>
              {name} ({age})
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
