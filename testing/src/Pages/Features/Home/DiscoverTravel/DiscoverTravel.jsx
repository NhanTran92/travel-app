import React from 'react'
import "./DiscoverTravel.scss"

export default function DiscoverTravel() {
  return (
    <div className='home-page__title mb-5'>
        <h1 className='home-page__title mb-4'>Khám phá sản phẩm Vietravel</h1>
        <div className='container-tv'>
        <div className='discover '>
            <img className='image-overlay' src='https://media.travel.com.vn/Advertisings/bn_230629_1-2.webp'></img>
            <div class="text-overlay">
            <p>Tự hào nét Việt: Ưu đãi kích cầu du lịch trong nước</p>
        </div>
        </div>

        <div className='discover'>
            <img src='https://media.travel.com.vn/Advertisings/bn_230714_216x324%20le30-4.webp'></img>
            <div class="text-overlay">
            <p>Chùm Tour dịp lễ 2/9</p>
        </div>
        </div>

        <div className='discover '>
            <img src='https://media.travel.com.vn/Advertisings/bn_230628_bromo3.webp'></img>
            <div class="text-overlay">
            <p>[MỚI] Tour trải nghiệm giới trẻ, sự kiện, thể thao</p>
         </div>
        </div>

        <div className='discover'>
            <img src='https://media.travel.com.vn/Advertisings/bn_230629_1-1.webp'></img>
            <div class="text-overlay">
            <p>[MỚI] Tour trải nghiệm cao cấp</p>
        </div>
        </div>

        <div className='discover'>
            <img src='https://media.travel.com.vn/Advertisings/bn_220512_statue-liberty-and-american-flag-new-york.webp' style={{width : "216px" , height :"328px"}}></img>
            <div class="text-overlay">
            <p>Du lịch thăm thân nhân tại Mỹ- Canada</p>
        </div>
        </div>
    </div>
    </div>
  )
}
