import { useEffect, useState } from "react";
import "./App.css";
// import { QrReader } from "@cmdnio/react-qr-reader";
// import QRCode from "react-qr-code";
import { config } from "./config";

function App() {
  const [users, setUsers] = useState([]);
  // const [data, setData] = useState("No result");

  async function fetchUsers() {
    const url = new URL("/users", config.API_URL);
    console.debug("fetching users from", url);
    const response = await fetch(url);
    if (!response.ok) {
      console.warn("Response is not OK!");
    }
    const data = await response.json();
    console.log(data);
    setUsers(data);
  }

  useEffect(() => {
    fetchUsers();
  }, []);

  // async function handleUserOnClick() {
  //   const response = await fetch("http://localhost:3000/users", {
  //     method: "POST",
  //     headers: { "Content-Type": "application/json" },
  //     body: JSON.stringify({
  //       name: "John Doe",
  //       age: 29,
  //     }),
  //   });
  //   if (!response.ok) {
  //     console.warn("Response is not OK!");
  //   }
  //   fetchUsers();
  //   console.debug("Good!");
  // }

  return (
    <div>
      <div>
        {/* <QRCode
          size={256}
          style={{
            height: "auto",
            maxWidth: "100%",
            width: "100%",
            marginBottom: "15rem",
          }}
          value={"ich wünsche euch einen schönen Tag"}
          viewBox={`0 0 256 256`}
        />
        <QrReader
          onResult={(result, error) => {
            if (result) {
              setData(result?.text);
            }

            if (error) {
              console.info(error);
            }
          }}
          containerStyle={{ width: 300, height: 400 }}
          constraints={{
            facingMode: "environment",
          }}
        />
        <pre>{data}</pre> */}
      </div>
      <div style={{ marginBottom: "15rem" }}>
        {users.map(({ _id, name, age }) => (
          <div key={_id}>
            <p>
              {name} ({age})
            </p>
          </div>
        ))}
      </div>
      {/* <button onClick={handleUserOnClick}>add user</button> */}
    </div>
  );
}

export default App;
