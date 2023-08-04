import React from 'react'
import  "./HomeOfFooter.scss"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareFacebook, faInstagram ,faViber,faYoutube} from '@fortawesome/free-brands-svg-icons';



export default function HomeOfFooter() {
   
  return (
    <div className='container'>
        <div className='footer menu'>
            <h4 >
                <a className='a' href='https://travel.com.vn/du-lich-viet-nam.aspx'>Du Lịch Trong Nước</a></h4>
            <ul className='menu'>
            <li className='menu-li'>Hà Nội</li>
            <li className='menu-li'>Hạ Long</li>
            <li className='menu-li'>Huế</li>
            <li className='menu-li'>Quảng Bình</li>
            <li className='menu-li'>Đà Nẵng</li>
            <li className='menu-li'>Quảng Nam</li>
            <li className='menu-li'>Nha Trang</li>
            <li className='menu-li'>Đà Lạt</li>
            </ul>
            {/* <ul className='menu'>
            <li className='menu-li'>Phan Thiết</li>
            <li className='menu-li'>Bà Rịa-vũng Tàu</li>
            <li className='menu-li'>Phú Quốc</li>
            <li className='menu-li'>Cần Thơ</li>
            <li className='menu-li'>Hà Tiên</li>
            <li className='menu-li'>Bắc Cạn</li>
            <li className='menu-li'>Hà Giang</li>
            <li className='menu-li'>Côn Đảo</li>
            </ul> */}
           
        </div>


        <div className='footer menu'>
          
            <h4>
                <a className='a' href='https://travel.com.vn/du-lich-nuoc-ngoai.aspx'>Du Lịch Nước Ngoài</a></h4>
                <ul className='menu'>
            <li className='menu-li'>Trung Quốc</li>
            <li className='menu-li'>Thái lan</li>
            <li className='menu-li'>Malaysia</li>
            <li className='menu-li'>Singapore</li>
            <li className='menu-li'>Hàn Quốc</li>
            <li className='menu-li'>Úc</li>
            <li className='menu-li'>Mỹ-Hoa Kỳ</li>
            <li className='menu-li'>Nhật Bản</li>
            </ul>
            {/* <ul className='menu'>
            <li className='menu-li'>Ấn Độ</li>
            <li className='menu-li'>Philippines</li>
            <li className='menu-li'>Maldives</li>
            <li className='menu-li'>Na Uy</li>
            <li className='menu-li'>Tây Ban Nha</li>
            <li className='menu-li'>Hà Lan</li>
            <li className='menu-li'>Đức</li>
            <li className='menu-li'>Anh</li>
            </ul> */}
        </div>
      

        <div className='footer'>
            <h4>Dòng Tour</h4>
            <ul className='menu'>
            <li className='li'>Cao Cấp</li>
            <li className='li'>Tiêu Chuẩn</li>
            <li className='li'>Tiết Kiệm</li>
            <li className='li'>Giá Tốt</li>
            </ul>
        </div>


        <div className='footer'>
            <h3>Ứng dụng di động</h3>
            <div className='fpt-app'>
            <a href='https://play.google.com/store/apps/details?id=vn.com.vietravel'>
                <img src='https://travel.com.vn/Content/Theme/images/ggp.webp'></img>
            </a>
            <a href='https://apps.apple.com/us/app/vietravel/id623123001?l=vi&ls=1'>
                <img src='https://travel.com.vn/Content/Theme/images/aps.webp'></img>
            </a>
            </div>
         
         <div className='mb-app'>
         <div className='android'>
                <p>Android</p>
                <a href='https://play.google.com/store/apps/details?id=vn.com.vietravel'>
                    <img src='https://travel.com.vn/Content/Theme/images/image42.webp'></img>
                </a>
            </div>
            <div className='ios'>
                <p>IOS</p>
                <a href='https://apps.apple.com/us/app/vietravel/id623123001?l=vi&ls=1'>
                    <img src='https://travel.com.vn/Content/Theme/images/image43.webp'></img>
                </a>
            </div>
         </div> 
        </div>

        <div className='info' >
            <h4>Liên Hệ</h4>
            <div className='contact-info'>
            190 Pasteur, Phường Võ Thị Sáu, Quận 3
            <br />
            TP.HCM<br />
            (+84 28) 3822 8898<br />
            (+84 28) 3829 9142<br />
            info@vietravel.com
            <h4>Mạng xã hội</h4>
            <ul className='socials'>
                <li className='socials-li'>
                    <a href='https://www.facebook.com/vietravel/'>
                        <i>
                        <FontAwesomeIcon icon={faSquareFacebook} size="3x" color="#3b5998"/>
                        </i>
                    </a>
                </li>

                <li className='socials-li'>
                    <a href='https://www.instagram.com/vietravel/'>
                        <i>
                        <FontAwesomeIcon icon={faInstagram}  size="3x" color="#3b5998"/>
                        </i>
                    </a>
                </li>

                <li className='socials-li'>
                    <a href='https://invite.viber.com/?g2=AQB8wC0DUgDueEuLGo5BAeemjjx4ry%2Fe5vhdAApryxsvJron7Hxr0xmLNk%2FISS2j&lang=vi'>
                        <i>
                        <FontAwesomeIcon icon={faViber}  size="3x" color="#3b5998"/>
                        </i>
                    </a>
                </li>

                <li className='socials-li'>
                    <a href='https://www.youtube.com/channel/UCY4diIi4ZvrcZIfpLTTM11g'>
                        <i>
                        <FontAwesomeIcon icon={faYoutube} size="3x" color="#3b5998"/>
                        </i>
                    </a>
                </li>
            </ul>
           
           </div>

           <div className='call'>
            <a href='tel:1900 1839'>
            <h1 >
                1900 1839
            </h1>
            </a>
           </div>
           <p>Từ 8:00 - 22:00 hàng ngày</p>
        </div>

        <div className='info'>
            <h4>Thông tin</h4>
            <ul className='menu'>
            <li className='menu-li'>Tạp chí du lịch</li>
            <li className='menu-li'>Cẩm nang du lịch</li>
            <li className='menu-li'>Tin tức</li>
            <li className='menu-li'>Sitemap</li>
            <li className='menu-li'>FAQs</li>
            <li className='menu-li'>Úc</li>
            <li className='menu-li'>Chính sách riêng tư</li>
            <li className='menu-li'>Chính sách riêng tư</li>
            </ul>
        </div>

        <div className='info'>
            <h4>Newsletter</h4>
            <div className=' form'>
                <input className='input' type='email' name='email' placeholder='Email của quý khách' id='email'></input>  
            </div>

            <h4>Tìm kiếm thông tin</h4>
            <div className=' form'>
            <input className='input' type='text' name='search' placeholder='Tour duc lịch, điểm đến....' id='search'></input>
            </div>
            <div className='form'>
            <div className='info securi'>
                <h4>Chứng Nhận</h4>
                <a href='https://www.dmca.com/Protection/Status.aspx?ID=9e50a0bf-95f9-4d51-9a58-0c1e0eddc3c7'>
                    <img src="https://travel.com.vn/Content/Theme/images/image39.webp"></img>
                </a>
                <a href='http://online.gov.vn/(X(1)S(511g13wnvguod5macmxaqj5v))/Home/WebDetails/646?AspxAutoDetectCookieSupport=1'>
                    <img src='https://travel.com.vn/Content/Theme/images/image40.webp'></img>
                </a>
            </div>
           <div className='form securi'>
            <h4 className='securi img'>Chấp nhận thanh toán</h4>
            <ul className='socials'>
                <li className='socials-li'><img style={{width : "71px" , height : "27px"}} src='https://travel.com.vn/Content/Theme/images/image41.webp'></img></li>
                <li className='socials-li'><img style={{width : "71px" , height : "27px"}} src='https://travel.com.vn/Content/Theme/images/vnpay_qr1_1.webp'></img></li>
                <li className='socials-li'><img style={{width : "71px" , height : "27px"}} src='https://travel.com.vn/Content/Theme/images/vs.webp'></img></li>
                <li className='socials-li'><img style={{width : "71px" , height : "27px"}} src='https://travel.com.vn/Content/Theme/images/mtc.webp'></img></li>
                <li className='socials-li'><img style={{width : "71px" , height : "27px"}} src='https://travel.com.vn/Content/Theme/images/jcb.webp'></img></li>
                <li className='socials-li'><img style={{width : "71px" , height : "27px"}} src='https://travel.com.vn/Content/Theme/images/vrvs.webp'></img></li>
                <li className='socials-li'><img style={{width : "71px" , height : "27px"}} src='https://travel.com.vn/Content/Theme/images/shopeepay.webp'></img></li>
                <li className='socials-li'><img style={{width : "71px" , height : "27px"}} src='https://travel.com.vn/Content/Theme/images/msb.webp'></img></li>
            </ul>
           </div>

            </div>
            
        
        </div>
       
    </div>
  )
}
