import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinus, faPlus,faEnvelope ,faPhone,faCalendar,faPlane,faStar,faUserGroup } from '@fortawesome/free-solid-svg-icons';
import "./QuyNhon.scss"
import HomeOfFooter from '../../Home/HomeOfFooter/HomeOfFooter';

export default function QuyNhon() {

  const money = 5490000;

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleAddressChange = (e) => {
    setAddress(e.target.value);
  };

  const handlePhoneNumberChange = (e) => {
    setPhoneNumber(e.target.value);
  };


  const [age, setAge] = useState(0);

  const handleIncrement = () => {
    setAge(age + 1);
    setPrice((prevTotal) => prevTotal +  money);
   
  };

  const handleDecrement = () => {
    setAge(age - 1);
    setPrice((prevTotal) => prevTotal - money);
  };

  const [young, setYoung] = useState(0);

  const handleIncrementYoung = () => {
    setYoung(young + 1);
    setPriceOfYoung((prevTotal) => prevTotal +  (money/2));
  
  };

  const handleDecrementYoung = () => {
    setYoung(young - 1);
    setPriceOfYoung((prevTotal) => prevTotal -  (money/2));
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
  
  const [price, setPrice] = useState(0);

  const [priceOfYoung, setPriceOfYoung] = useState(0);

  const [total, setTotal] = useState(0);

  React.useEffect(() => {
    setTotal(price + priceOfYoung);
  }, [price, priceOfYoung]);
  
  return (
    <div>
      <div className='qn'><span style={{color : "blue"}}>1. Nhập thông tin  ></span>       2. Thanh toán</div>
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
        <div className="left-box1">
          {/* Khung 1 */}
          <div className="form-column">
          <label htmlFor="fullName">Họ và tên <span>*</span></label>
          <input
          type="text"
          id="fullName"
          placeholder="Nhập họ và tên"
          value={fullName}
          onChange={handleNameChange}
        />

        <label htmlFor="email">Email <span>*</span></label>
        <input
          type="email"
          id="email"
          placeholder="Nhập email"
          value={email}
          onChange={handleEmailChange}
        />
      </div>
      <div className="form-column">
      <label htmlFor="address">Địa chỉ:</label>
      <input
        type="text"
        id="address"
        placeholder="Nhập địa chỉ"
        value={address}
        onChange={handleAddressChange}
      />
      <label htmlFor="phoneNumber">Số điện thoại <span>*</span></label>
      <input
        type="tel"
        id="phoneNumber"
        placeholder="Nhập số điện thoại"
        value={phoneNumber}
        onChange={handlePhoneNumberChange}
      />
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
      <div className="flight-info-container">
      <div className="left-section">
      <div className='calendar'>
       <FontAwesomeIcon icon={faCalendar}/>
       <p></p>
      </div>

      <div className='pan'>
      <span >Khởi hành - T3, 15 Tháng 8 2023</span>
      <p >SGN  <FontAwesomeIcon icon={faPlane} />    QN</p>
      <p >Vietravel Airlines</p>
      </div>

      <div className='img'><img src='https://media.travel.com.vn/ImageAirlines/logo_VIETRAVELAIRLINES.png'></img>
      </div>
       
      </div>
    </div>

    <div className="flight-info-container">
    <div className="left-section">
    <div className='calendar'>
     <FontAwesomeIcon icon={faCalendar}/>
    </div>

    <div className='pan'>
    <span >Khởi hành - T5, 17 Tháng 8 2023</span>
    <p >QN  <FontAwesomeIcon icon={faPlane} />    SGN</p>
    <p >Vietravel Airlines</p>
    </div>

    <div className='img'><img src='https://media.travel.com.vn/ImageAirlines/logo_VIETRAVELAIRLINES.png'></img>
    </div>
     
    </div>
  </div>
      
      <p style={{textAlign : "left"}}>Khách sạn Quy Nhơn</p>

      <div className='hotel'>
      <div style={{textAlign : "left"}}>
      <img style={{width : "150px" ,height : "100px"}} src='https://media.travel.com.vn/Combo/img_28062023_94ac12e0-d115-4b69-afcc-0bbe43758e96_Untitled.png'></img>
      </div>
      <div style={{textAlign : "left"}}>
        <span>
        <FontAwesomeIcon icon={faStar} style={{color: "#ddc10e",}} />
        <FontAwesomeIcon icon={faStar} style={{color: "#ddc10e",}} />
        <FontAwesomeIcon icon={faStar} style={{color: "#ddc10e",}} />
        <FontAwesomeIcon icon={faStar} style={{color: "#ddc10e",}} />
        <FontAwesomeIcon icon={faStar} style={{color: "#ddc10e",}} />
        </span>
        <p >Combo 3N2Đ Wyndham Grand Phú Quốc (Vinoasis) 5 sao: Vé máy bay khứ hồi + Phòng Standard + Ăn sáng + Khám phá Vinpearl Safari </p>
      </div>
 
      </div>

    <div class="passenger-info">
  <div class="passenger-row">
    <span class="passenger-label">Hành khách</span>
    <span class="icon"><FontAwesomeIcon icon={faUserGroup} /></span>
  </div>
  <div class="passenger-row">
    <span>{age} người lớn</span>
    <span>{price}đ</span>
  </div>
  <div class="passenger-row">
    <span>{young} trẻ em</span>
    <span>{priceOfYoung}₫</span>
  </div>
  <div class="passenger-row">
    <span>{children} trẻ nhỏ</span>
    <span>0₫</span>
  </div>
  <div class="passenger-row">
    <span>{baby} em bé</span>
    <span>0₫</span>
  </div>

  <div class="passenger-row">
  <span class="promo-label">Phụ thu phòng riêng</span>
  <span>0₫</span>
</div>

<div class="passenger-row">
<span class="promo-label">Khuyến mãi mở mùa 2023</span>
</div>

<div class="passenger-row">
<span>Đăng nhập để nhận giảm giá tour online</span>
</div>

<div class="promotion-info">
  <div class="promo-row">
    <span class="promo-label">Mã giảm giá</span>
    <div class="promo-input">
      <input type="text" placeholder="Nhập mã giảm giá" />
      <button class="apply-button">Áp dụng</button>
    </div>
  </div>
</div>
</div>

<div class="summary">
  <div class="total">TỔNG CỘNG {total}đ</div>
  <div> <button class="booking-button">Đặt ngay</button></div>
 
</div>


      </div>
    </div>
    <HomeOfFooter/>
    </div>
  )
}
