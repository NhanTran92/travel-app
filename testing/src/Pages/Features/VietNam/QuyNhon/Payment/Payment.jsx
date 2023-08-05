import React, { useState } from 'react'
import "./Payment.scss"
import HomeOfFooter from '../../../Home/HomeOfFooter/HomeOfFooter'

export default function Payment() {
    const [showDetails, setShowDetails] = useState(Array(8).fill(false));
  
    const toggleDetails = (index) => {
      const updatedDetails = [...showDetails];
      updatedDetails[index] = !updatedDetails[index];
      setShowDetails(updatedDetails);
    };
  
    const boxContent = [
      'Thông tin ô 1...',
      'Thông tin ô 2...',
      'Thông tin ô 3...',
      'Thông tin ô 4...',
      'Thông tin ô 5...',
      'Thông tin ô 6...',
      'Thông tin ô 7...',
      'Thông tin ô 8...',
    ];
  
    const boxTitles = [
      'Tiêu đề ô 1',
      'Tiêu đề ô 2',
      'Tiêu đề ô 3',
      'Tiêu đề ô 4',
      'Tiêu đề ô 5',
      'Tiêu đề ô 6',
      'Tiêu đề ô 7',
      'Tiêu đề ô 8',
    ];
  
    return (
      <div>
      <div className="qn">
      <span style={{ color: 'blue' }}>1. Nhập thông tin ></span>{' '}
      <span style={{ color: 'blue' }}> 2. Thanh toán</span>
    </div>
    <div className="headerpm">
      <h1>Thanh toán</h1>
      <h2>Các hình thức thanh toán</h2>
    </div>
    <div className="container">
      <div className="left">
        {boxContent.slice(0, 4).map((content, index) => (
          <div key={index} className="box">
            <div
              className={`icon ${showDetails[index] ? 'active' : ''}`}
              onClick={() => toggleDetails(index)}
            >
              {showDetails[index] ? 'X' : 'O'}
            </div>
            <div className="title">{boxTitles[index]}</div>
            {showDetails[index] && <div className="details">{content}</div>}
          </div>
        ))}
      </div>
      <div className="right">
        {boxContent.slice(4).map((content, index) => (
          <div key={index + 4} className="box">
            <div
              className={`icon ${showDetails[index + 4] ? 'active' : ''}`}
              onClick={() => toggleDetails(index + 4)}
            >
              {showDetails[index + 4] ? 'X' : 'O'}
            </div>
            <div className="title">{boxTitles[index + 4]}</div>
            {showDetails[index + 4] && <div className="details">{content}</div>}
          </div>
        ))}
      </div>
    </div>
    {/* Other components if needed */}
      </div>
    );
  }