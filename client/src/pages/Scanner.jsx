import { QrReader } from "@cmdnio/react-qr-reader";
import { useState } from "react";

export default function Scanner() {
  const [data, setData] = useState("No result");

  return (
    <div>
      <h1>Scanner</h1>
      <pre>{data}</pre>
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
    </div>
  );
}
