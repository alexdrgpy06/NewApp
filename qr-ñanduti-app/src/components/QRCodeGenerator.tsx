import React, { useState } from 'react';
import QRCode from 'qrcode.react';

const QRCodeGenerator: React.FC = () => {
    const [url, setUrl] = useState('');
    const [qrCodeValue, setQrCodeValue] = useState<string | null>(null);

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUrl(event.target.value);
    };

    const generateQRCode = () => {
        if (url) {
            setQrCodeValue(url);
        }
    };

    return (
        <div className="qr-code-generator">
            <input
                type="text"
                value={url}
                onChange={handleInputChange}
                placeholder="Enter URL"
            />
            <button onClick={generateQRCode}>Generate QR Code</button>
            {qrCodeValue && <QRCode value={qrCodeValue} className="qr-code" />}
        </div>
    );
};

export default QRCodeGenerator;