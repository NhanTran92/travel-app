import React from 'react'
import "./Reason.scss"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faServicestack ,faViber,faYoutube} from '@fortawesome/free-brands-svg-icons';
import { faThumbsUp ,faDollarSign,faCalendarCheck,faMoneyCheckDollar,faHeadset} from '@fortawesome/free-solid-svg-icons';


export default function Reason() {
    
  return (
    <div className='reason'>
        <div className='p-ra'>
            <h1>Vì sao chọn Vietravel</h1>
        </div>


        <div class="container-ra">

  <div class="column-ra">
    <div className='icon-ra'><FontAwesomeIcon icon={faServicestack} size="5x" color="#3b5998" /></div>
    <h3>Mạng bán tour</h3>
    <p>Đầu tiên tại Việt Nam</p>
    <p>Ứng dụng công nghệ mới nhất</p>
  </div>

  <div class="column-ra">
    <div className='icon-ra'><FontAwesomeIcon icon={faThumbsUp} size="5x" color="#3b5998" /></div>
    <h3>Sản phẩm & Dịch vụ</h3>
    <p>Đa dạng – Chất lượng – An toàn</p>
  </div>

  <div class="column-ra">
    <div className='icon-ra'><FontAwesomeIcon icon={faDollarSign} size="5x" color="#3b5998" /></div>
    <h3>Giá cả</h3>
    <p>Luôn có mức giá tốt nhất</p>
  </div>


  <div class="column-ra">
    <div className='icon-ra'><FontAwesomeIcon icon={faCalendarCheck} size="5x" color="#3b5998" /></div>
    <h3>Đặt tour</h3>
    <p>Dễ dàng & nhanh chóng chỉ với 3 bước</p>
  </div>

  <div class="column-ra">
    <div className='icon-ra'><FontAwesomeIcon icon={faMoneyCheckDollar} size="5x" color="#3b5998" /></div>
    <h3>Thanh toán</h3>
    <p>An toàn & linh hoạt</p>
  </div>


  <div class="column-ra">
    <div className='icon-ra'><FontAwesomeIcon icon={faHeadset} size="5x" color="#3b5998" /></div>
    <h3>Hỗ trợ</h3>
    <p>Hotline & trực tuyến (08h00 - 22h00)</p>
  </div>
  
 
</div>

    </div>
  )
}
