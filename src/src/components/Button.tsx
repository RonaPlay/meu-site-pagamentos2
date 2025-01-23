import React, { useState } from 'react';

interface ButtonProps {
  qrCodeUrl: string;
  label: string;
}

const Button = ({ qrCodeUrl, label }: ButtonProps) => {
  const [showQrCode, setShowQrCode] = useState(false);

  return (
    <div style={{ margin: '10px' }}>
      <button
        onClick={() => setShowQrCode(!showQrCode)}
        style={{
          padding: '10px 20px',
          fontSize: '16px',
          cursor: 'pointer',
        }}
      >
        {label}
      </button>
      {showQrCode && (
        <div style={{ marginTop: '10px' }}>
          <img src={qrCodeUrl} alt="QR Code" style={{ width: '200px', height: '200px' }} />
        </div>
      )}
    </div>
  );
};

export default Button;
