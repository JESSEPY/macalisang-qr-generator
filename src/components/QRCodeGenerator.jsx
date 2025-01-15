import { useState } from "react";
import QRious from "qrious";

const QRCodeGenerator = () => {
  const [value, setValue] = useState("");
  const [qrCodeUrl, setQrCodeUrl] = useState("");

  const generateQRCode = () => {
    const qr = new QRious({
      value: value,
      size: 400,
      level: "H",
    });
    setQrCodeUrl(qr.toDataURL());
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-green-400 to-blue-500 flex items-center justify-center">
      <div className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-lg shadow-lg p-8 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="flex flex-col items-center">
          <h2 className="text-white text-2xl mb-4">
            UI QR Code Basic Generator
          </h2>
          <input
            type="text"
            id="qr-code-value"
            placeholder="Enter text or URL"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            className="mb-4 p-2 border border-gray-300 rounded w-full"
          />
          <button
            onClick={generateQRCode}
            className="mb-4 p-2 bg-blue-500 text-white rounded w-full"
          >
            Generate QR Code
          </button>
        </div>
        <div className="flex items-center justify-center">
          {qrCodeUrl && (
            <img id="qr-code-image" src={qrCodeUrl} alt="QR code" />
          )}
        </div>
      </div>
    </div>
  );
};

export default QRCodeGenerator;
