import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinus, faPlus,faEnvelope ,faPhone } from '@fortawesome/free-solid-svg-icons';
import "./QuyNhon.scss"
import HomeOfFooter from '../../Home/HomeOfFooter/HomeOfFooter';

export default function QuyNhon() {

  const [age, setAge] = useState(0);

  const handleIncrement = () => {
    setAge(age + 1);
  };

  const handleDecrement = () => {
    setAge(age - 1);
  };

  const [children, setChildren] = useState(0);

  const handleIncrementChildren = () => {
    setChildren(children + 1);
  };

  const handleDecrementChildren = () => {
    setChildren(children - 1);
  };

  const [baby, setBaby] = useState(0);

  const handleIncrementBaby = () => {
    setBaby(baby + 1);
  };

  const handleDecrementBaby = () => {
    setBaby(baby - 1);
  };

  const [young, setYoung] = useState(0);

  const handleIncrementYoung = () => {
    setYoung(young + 1);
  };

  const handleDecrementYoung = () => {
    setYoung(young - 1);
  };


  const [salutation, setSalutation] = useState('Ông');
  const [fullName, setFullName] = useState('');
  const [day, setDay] = useState(1);
  const [month, setMonth] = useState(1);
  const [year, setYear] = useState(1900);

  const handleSalutationChange = (event) => {
    setSalutation(event.target.value);
  };

  const handleFullNameChange = (event) => {
    setFullName(event.target.value);
  };

  const handleDayChange = (event) => {
    setDay(event.target.value);
  };

  const handleMonthChange = (event) => {
    setMonth(event.target.value);
  };

  const handleYearChange = (event) => {
    setYear(event.target.value);
  };


  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };

  const [selectedOptionBed, setSelectedOptionBed] = useState(null);

  const handleOptionSelectBed = (bed) => {
    setSelectedOptionBed(bed);
  };

  const [selectedOptionRoom, setSelectedOptionRoom] = useState(null);

  const handleOptionSelectRoom = (room) => {
    setSelectedOptionRoom(room);
  };
  
  return (
    <div>
      <div className='qn'>1. Nhập thông tin    2. Thanh toán</div>
      <div className='qnheader'>
      <div className='img'>
        <img className='img' src='https://media.travel.com.vn/tour/tfd_230317043554_485930.jpg'></img>
      </div>
      <div className='info'>
         <div className='box-container'> <span className='box'>9</span>
            <h4>Rất tốt </h4> <span className='lable'>358 quan tâm</span>
         </div>
        <h2>Phú Yên - Quy Nhơn - Eo Gió - Biển Kỳ Co - Kích cầu du lịch</h2>
        <p>Mã Tour NDSGN593-043-060823VN-D-7</p>
        <p>Khởi hành 06/08/2023</p>
        <p>Thời gian 4 ngày</p>
        <p>Nơi khởi hành TP. Hồ Chí Minh</p>
        <p>Số chỗ còn nhận 4</p>
        <p>Dịch vụ tùy chọn Khách sạn tương đương 4* - Bay Vietnam Airlines</p>
      </div>
      </div>


      <h2 className='qnh2'>Tổng quan về chuyến đi</h2>
      <div className="flex-container">
      <div className="left-container">
      <div > <h3 style={{textAlign:'left'}}>Thông tin liên lạc</h3></div>
        <div className="left-box">
          {/* Khung 1 */}
          <div className="form-column">
        <input type="text" placeholder="Họ và tên" />
        <input type="email" placeholder="Email" />
      </div>
      <div className="form-column">
        <input type="text" placeholder="Địa chỉ" />
        <input type="text" placeholder="Số điện thoại" />
      </div>
        </div>


        <div > <h2 style={{textAlign:'left'}}>Hành khách</h2></div>
        <div className="left-box">
          {/* Khung 2 */}
          <div className="form-column">
          <div className="age-container">
          <div className="age-label">
            Người lớn &gt; 12 tuổi
          </div>
          <div className="age-control">
            <button onClick={handleDecrement}>
              <FontAwesomeIcon icon={faMinus} />
            </button>
            <div className="age-value">{age}</div>
            <button onClick={handleIncrement}>
              <FontAwesomeIcon icon={faPlus} />
            </button>
          </div>
        </div>
         <div>
         <div className="age-container">
         <div className="age-label">
           Trẻ em Từ 2- 4 tuổi
         </div>
         <div className="age-control">
           <button onClick={handleDecrementChildren}>
             <FontAwesomeIcon icon={faMinus} />
           </button>
           <div className="age-value">{children}</div>
           <button onClick={handleIncrementChildren}>
             <FontAwesomeIcon icon={faPlus} />
           </button>
         </div>
       </div>
         </div>
        
        </div>
        <div className="form-column">
          <div>
          <div className="age-container">
          <div className="age-label">
            Trẻ em Từ 5 -11 tuổi
          </div>
          <div className="age-control">
            <button onClick={handleDecrementYoung}>
              <FontAwesomeIcon icon={faMinus} />
            </button>
            <div className="age-value">{young}</div>
            <button onClick={handleIncrementYoung}>
              <FontAwesomeIcon icon={faPlus} />
            </button>
          </div>
        </div>
          </div>
         <div>
         <div className="age-container">
         <div className="age-label">
           Em bé Từ 0 - 2 tuổi
         </div>
         <div className="age-control">
           <button onClick={handleDecrementBaby}>
             <FontAwesomeIcon icon={faMinus} />
           </button>
           <div className="age-value">{baby}</div>
           <button onClick={handleIncrementBaby}>
             <FontAwesomeIcon icon={faPlus} />
           </button>
         </div>
       </div>
         </div>
        </div>
        </div>


        <div style={{textAlign:'left'}}><h2>Thông tin hành khách</h2>
        <h3>Người lớn</h3>
        </div>
        <div className="left-box">
          {/* Khung 3 */}

          <div className="form-container">
          <div className="form-box">
            <div className="input-group">
              <label htmlFor="salutation">Danh xưng</label>
              <select id="salutation" value={salutation} onChange={handleSalutationChange}>
                <option value="Ông">Ông</option>
                <option value="Bà">Bà</option>
              </select>
            </div>
    
            <div className="input-group">
              <label htmlFor="fullName">Họ và tên</label>
              <input type="text" id="fullName" value={fullName} onChange={handleFullNameChange} />
            </div>
    
            <div className="input-group">
              <label htmlFor="day">Ngày</label>
              <select id="day" value={day} onChange={handleDayChange}>
                {Array.from({ length: 31 }, (_, i) => i + 1).map((day) => (
                  <option key={day} value={day}>
                    {day}
                  </option>
                ))}
              </select>
            </div>
    
            <div className="input-group">
              <label htmlFor="month">Tháng</label>
              <select id="month" value={month} onChange={handleMonthChange}>
                {Array.from({ length: 12 }, (_, i) => i + 1).map((month) => (
                  <option key={month} value={month}>
                    {month}
                  </option>
                ))}
              </select>
            </div>
    
            <div className="input-group">
              <label htmlFor="year">Năm sinh</label>
              <select id="year" value={year} onChange={handleYearChange}>
                {Array.from({ length: 124 }, (_, i) => 2023 - i).map((year) => (
                  <option key={year} value={year}>
                    {year}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>


        </div>


        <div  style={{textAlign:'left'}}>
        <h2>Quý khách có thêm yêu cầu gì về khách sạn hãy nói với chúng tôi</h2>
        <p>Quý khách có yêu cầu đặc biệt? Gửi yêu cầu và khách sạn sẽ cố gắng đáp ứng nguyện vọng của Quý khách.</p>
        <p>Xin lưu ý yêu cầu đặc biệt không được bảo đảm trước và có thể thu phí</p>
        </div>
        <div className="left-box2">
          {/* Khung 4 */}

          <div className="smoking-policy-container">
      <div className="header">Quy định hút thuốc (nếu có phòng)</div>
      <div className="option-container">
        <div
          className={`option ${selectedOption === 'smoking' ? 'selected' : ''}`}
          onClick={() => handleOptionSelect('smoking')}
        >
          Phòng hút thuốc
        </div>
        <div
          className={`option ${selectedOption === 'no' ? 'selected' : ''}`}
          onClick={() => handleOptionSelect('no')}
        >
          Phòng không hút thuốc
        </div>
      </div>
    </div>


        </div>
        <div className="left-box2">
          {/* Khung 5 */}

          <div className="smoking-policy-container">
          <div className="header">Chọn loại giường (nếu có phòng)</div>
          <div className="option-container">
            <div
              className={`option ${selectedOptionBed === 'smoking' ? 'selected' : ''}`}
              onClick={() => handleOptionSelectBed('smoking')}
            >
              1 giường đôi
            </div>
            <div
              className={`option ${selectedOptionBed === 'no' ? 'selected' : ''}`}
              onClick={() => handleOptionSelectBed('no')}
            >
              2 giường đơn
            </div>
          </div>
        </div>
        </div>


        <div className="left-box2">
          {/* Khung 6 */}

          <div className="smoking-policy-container">
          <div className="header">Vui lòng lưu ý tất cả các yêu cầu chỉ được đáp ứng tùy theo khách sạn</div>
          <div className="option-container">
            <div
              className={`option ${selectedOptionRoom === 'smoking' ? 'selected' : ''}`}
              onClick={() => handleOptionSelectRoom('smoking')}
            >
            Phòng tầng cao
            </div>
            <div
              className={`option ${selectedOptionRoom === 'no' ? 'selected' : ''}`}
              onClick={() => handleOptionSelectRoom('no')}
            >
            Tôi muốn có nôi trẻ em
            </div>
            <div
            className={`option ${selectedOptionRoom === 'no' ? 'selected' : ''}`}
            onClick={() => handleOptionSelectRoom('no')}
          >
          Phòng yên tĩnh
          </div>
          </div>
        </div>


        </div>
      </div>
      <div className="right-box">

      <p style={{textAlign : "left"}}>Quý khách cần hỗ trợ ? </p>
        {/* Khung bên phải */}

        <div className="support-container">
        <div className="support-item">
        <FontAwesomeIcon icon={faPhone}  size='3x'/>
          <span>Gọi miễn phí qua internet</span>
        </div>
        <div className="support-item">
        <FontAwesomeIcon icon={faEnvelope}  size='3x'/>
          <span>Gửi yêu cầu hỗ trợ ngay</span>
        </div>
      </div>

      <h2 style={{textAlign : "left"}}>Tóm tắt đặt chỗ</h2>
      <p style={{textAlign : "left"}}>Chuyến bay (358 du khách)</p>
      </div>
    </div>
    <HomeOfFooter/>
    </div>
  )
}
