import React from 'react'
import "./LastOfEndow.scss"
import { Link } from 'react-router-dom'

export default function LastOfEndow() {

  const style = {
    height : "300px" , width : "420px"
  }
  return (
    <div className='last'>
      <div className='last-4'>
        <h3>Ưu đãi tour giờ chót</h3>
      </div>
        <div className='container-last'>

        <div className="box ">
          <div className='image'>  <img style={style} src='https://media.travel.com.vn/LastMinute/lm_230718035417_682512_Eo%20Gio%203.webp'></img>
          <div className='text'>03/08/2023 - 4 ngày</div>
          <div className='title'><Link className='a' to={"/booking/quynhon"}>Quy Nhơn - Eo Gió - Kỳ Co - Phú Yên - Gành Đá Dĩa - Kích cầu du lịch</Link></div>
          <div className='text code'>Mã tour :
          <div> NNSGN350-003-050823CA-D</div>
          </div>
          <p className='p'>Nơi khởi hành: TP. Hồ Chí Minh</p>
          <div className='price'>
            Giá :
          <span className='cost'>5,900,000đ</span>
          <div className='span'>
          <h3 className='newcost'>5,590,000đ</h3>
          <span className='discount'>7% Giảm</span>
          </div>
          
          </div>


          </div>
        </div>

        <div className="box ">
          <div className='image'>  <img style={style} src='https://media.travel.com.vn/LastMinute/lm_230720023146_332238_GHOTP.webp'></img>
          <div className='text'>05/08/2023 - 7 ngày</div>
          <div className='title'>Trung Quốc: Trùng Khánh - Cửu Trại Câu - Thành Đô - Trùng Khánh</div>
          <div className='text code'>Mã tour :
            <div> NNSGN350-003-050823CA-D</div>
          </div>
          <p className='p'>Nơi khởi hành: TP. Hồ Chí Minh</p>
          <div className='price'>
            Giá :
          <span className='cost'>20,990,000₫</span>
          <div className='span'>
          <h3 className='newcost'>18,990,000₫</h3>
          <span className='discount'>10% Giảm</span>
          </div>
          </div>


          </div>
        </div>

        <div className="box ">
          <div className='image'>  <img style={style} src='https://media.travel.com.vn/LastMinute/lm_230721060622_304548_CAP%20TREO%20FANSIPAN.webp'></img>
          <div className='text'>26/07/2023 - 7 ngày</div>
          <div className='title'>Tây Bắc: Hà Nội - Nghĩa Lộ - Tú Lệ - Mù Cang Chải - Sapa - Fansipan - Lai Châu - Điện Biên - Sơn La - Mộc Châu Island</div>
          <div className='text code'>Mã tour :
          <div> NNSGN350-003-050823CA-D</div>
          </div>
          <p className='p'>Nơi khởi hành: TP. Hồ Chí Minh</p>
          <div className='price'>
            Giá :
          <span className='cost'>10,990,000₫</span>
          <div className='span'>
          <h3 className='newcost'>9,790,000₫</h3>
          <span className='discount'>11% Giảm</span>
          </div>
          </div>


          </div>
        </div>

       
    </div>
    </div>
  )
}
