import QRCode from "react-qr-code";

export default function QrCode() {
  return (
    <div>
      <h1>QR Code</h1>
      <QRCode
        size={256}
        style={{
          height: "auto",
          maxWidth: "100%",
          width: "100%",
          marginBottom: "15rem",
        }}
        value={"Ich wünsche euch viel Spaß beim Programmieren!"}
        viewBox={`0 0 256 256`}
      />
    </div>
  );
}
