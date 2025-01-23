import React from 'react';
import Button from './components/Button';

const App = () => {
  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <h1>Escolha sua Forma de Pagamento</h1>
      <Button
        qrCodeUrl="https://exemplo.com/qr-code-pix.png"
        label="Pagar com PIX"
      />
      <Button
        qrCodeUrl="https://exemplo.com/qr-code-picpay.png"
        label="Pagar com PicPay"
      />
    </div>
  );
};

export default App;
