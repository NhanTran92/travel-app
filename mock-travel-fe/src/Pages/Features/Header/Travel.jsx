import React, { useState } from 'react'

export default function Travel() {

  const [currentMenu, setCurrentMenu] = useState('menu1');

  const handleClick = (menuId) => {
    setCurrentMenu(menuId);
  };

  return (
    <div >
      <div className={`style ${currentMenu === 'menu1' ? 'active' : ''}`} onClick={() => handleClick('menu1')}>
        <h3 className="menu" style={{ cursor: "pointer"}}>Du lịch trong nước</h3>
      </div>

      {currentMenu === 'menu1' && (
        <div className="container" >
          <ul className='north ul'><h3>Tour Miền Bắc</h3>
            <li className='li'><a>Du lịch Hà Nội</a></li>
            <li className='li'><a>Du lịch Hạ Long</a></li>
            <li className='li'><a>Du lịch Bắc Ninh</a></li>
            <li className='li'><a>Du lịch Phú Thọ</a></li>
            <li className='li'><a>Du lịch Ninh Bình</a></li>
            <li className='li'><a>Xem tất cả</a></li>
          </ul>

          <ul className='centralRegion ul'><h3>Tour Miền Trung</h3>
          <li className='li'><a>Du lịch Huế</a></li>
            <li className='li'><a>Du lịch Quảng Trị</a></li>
            <li className='li'><a>Du lịch Quảng Bình</a></li>
            <li className='li'><a>Du lịch Đà Nẵng</a></li>
            <li className='li'><a>Du lịch Quảng Nam</a></li>
            <li className='li'><a>Xem tất cả</a></li>
          </ul>
          
          <ul className='southern ul'><h3>Tour Miền Tây Nam Bộ</h3>
          <li className='li'><a>Du lịch Phú Quốc</a></li>
            <li className='li'><a>Du lịch Tiền Giang</a></li>
            <li className='li'><a>Du lịch Cần Thơ</a></li>
            <li className='li'><a>Du lịch Vĩnh Long</a></li>
            <li className='li'><a>Du lịch Sóc Trăng</a></li>
            <li className='li'><a>Xem tất cả</a></li>
          </ul>

          <ul className='east ul'><h3>Tour Miền Đông Nam Bộ</h3>
          <li className='li'><a>Du lịch Đồng Nai</a></li>
            <li className='li'><a>Du lịch Bà Rịa-Vũng Tàu</a></li>
            <li className='li'><a>Du lịch Côn Đảo</a></li>
            <li className='li'><a>Du lịch Tp. Hồ Chí Minh</a></li>
            <li className='li'><a>Du lịch Tây Ninh</a></li>
            <li className='li'><a>Xem tất cả</a></li>
          </ul>

         
        </div>
      )}

      <div className={`style ${currentMenu === 'menu2' ? 'active' : ''}`} onClick={() => handleClick('menu2')}>
        <h3 className="menu" style={{ cursor: "pointer"}}>Du lịch nước ngoài</h3>
      </div>

      {currentMenu === 'menu2' && (
        <div className="container">
         
         <ul className='africa ul'><h3>Tour Châu Phi</h3>
          <li className='li'><a>Du lịch Ai Cập</a></li>
            <li className='li'><a>Du lịch Nam Phi</a></li>
            <li className='li'><a>Du lịch Mauritius</a></li>
            <li className='li'><a>Du lịch Kenya</a></li>
            <li className='li'><a>Du lịch Madagascar</a></li>
            <li className='li'><a>Xem tất cả</a></li>
          </ul>

          <ul className='asia ul'><h3>Tour Châu Á</h3>
          <li className='li'><a>Du lịch Campuchia</a></li>
            <li className='li'><a>Du lịch Trung Quốc</a></li>
            <li className='li'><a>Du lịch Hồng Kông-Macau</a></li>
            <li className='li'><a>Du lịch Thái Lan</a></li>
            <li className='li'><a>Du lịch Malaysia</a></li>
            <li className='li'><a>Xem tất cả</a></li>
          </ul>

          <ul className='americas ul'><h3>Tour Châu Mỹ</h3>
          <li className='li'><a>Du lịch Mỹ-Hoa Kỳ</a></li>
            <li className='li'><a>Du lịch Canada</a></li>
            <li className='li'><a>Du lịch Cuba</a></li>
            <li className='li'><a>Du lịch Brazill</a></li>
            <li className='li'><a>Du lịch Argentina</a></li>
            <li className='li'><a>Xem tất cả</a></li>
          </ul>

          <ul className='europe ul'><h3>Tour Châu Âu</h3>
          <li className='li'><a>Du lịch Nga</a></li>
            <li className='li'><a>Du lịch Pháp</a></li>
            <li className='li'><a>Du lịch Hy Lạp</a></li>
            <li className='li'><a>Du lịch Na Uy</a></li>
            <li className='li'><a>Du lịch Đan Mạch</a></li>
            <li className='li'><a>Xem tất cả</a></li>
          </ul>
        </div>
      )}
    </div>
  )
}


