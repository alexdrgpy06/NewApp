import React, { useState } from 'react';
import QRCode from 'qrcode.react';
import QRCodeGenerator from './components/QRCodeGenerator';
import QRCodeDisplay from './components/QRCodeDisplay';
import './styles/theme.css';

const App: React.FC = () => {
    const [url, setUrl] = useState<string>('');
    const [qrCode, setQrCode] = useState<string | null>(null);

    const handleGenerateQRCode = (inputUrl: string) => {
        setUrl(inputUrl);
        setQrCode(inputUrl);
    };

    return (
        <div className="app-container">
            <h1>QR Code Generator</h1>
            <QRCodeGenerator onGenerate={handleGenerateQRCode} />
            {qrCode && <QRCodeDisplay qrCode={qrCode} />}
        </div>
    );
};

export default App;