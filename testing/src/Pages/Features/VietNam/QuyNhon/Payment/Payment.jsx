import React, { useState } from 'react';
import './Payment.scss'; // Import your SCSS file

export default function PaymentPage() {
  const [totalPrice, setTotalPrice] = useState(5490000);
  const [showDetails, setShowDetails] = useState(Array(8).fill(false));

  const toggleDetails = (index) => {
    const updatedDetails = [...showDetails];
    updatedDetails[index] = !updatedDetails[index];
    setShowDetails(updatedDetails);
  };
  const money = "Quý khách vui lòng thanh toán tại bất kỳ văn phòng Vietravel trên toàn quốc và các chi nhánh tại nước ngoài. Xem chi tiết.";
  const boxContent = [
    money,
    'Thông tin ô 2...',
    'Thông tin ô 3...',
    'Thông tin ô 4...',
    'Thông tin ô 5...',
    'Thông tin ô 6...',
    'Thông tin ô 7...',
    'Thông tin ô 8...',
  ];

  const moneyInfo = "Tiền mặt"
  const boxTitles = [
    moneyInfo,
    'Tiêu đề 2',
    'Tiêu đề 3',
    'Tiêu đề 4',
    'Tiêu đề 5',
    'Tiêu đề 6',
    'Tiêu đề 7',
    'Tiêu đề 8',
  ];

  return (
    <div className="payment-page">
      <button className="payment-button" onClick={() => alert('Thanh toán thành công')}>
        Thanh toán
      </button>
      <div className="payment-details">
        <div className="total-price">
          Tổng cộng: {totalPrice.toLocaleString()}₫
        </div>
        <div className="payment-content">
          <div className="box">
            {boxContent.map((content, index) => (
              <div
                key={index}
                className={`box-item ${showDetails[index] ? 'active' : ''}`}
                style={{ width: '300px', height: showDetails[index] ? 'auto' : '200px' }}
              >
                <div className="title" onClick={() => toggleDetails(index)}>
                  {boxTitles[index]}
                </div>
                {showDetails[index] && <div className="details">{content}</div>}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
