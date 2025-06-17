import React from 'react';
import QRCode from 'qrcode.react';

interface QRCodeDisplayProps {
    qrCodeValue: string;
}

const QRCodeDisplay: React.FC<QRCodeDisplayProps> = ({ qrCodeValue }) => {
    const downloadQRCode = () => {
        const canvas = document.getElementById('qr-code-canvas') as HTMLCanvasElement;
        if (canvas) {
            const link = document.createElement('a');
            link.href = canvas.toDataURL('image/png');
            link.download = 'qrcode.png';
            link.click();
        }
    };

    return (
        <div className="qr-code-display">
            <QRCode id="qr-code-canvas" value={qrCodeValue} size={256} bgColor="#ffffff" fgColor="#ff0000" />
            <button onClick={downloadQRCode}>Download QR Code</button>
        </div>
    );
};

export default QRCodeDisplay;