import React from 'react'
import Sliders from '../../components/Slider/Slider.jsx'
import le1 from '../../img/d-wave.webp'
import le2 from '../../img/product-top-wave.webp'
import Iintroductions from '../../components/introductions/Iintroductions.jsx'
import './Home.css'
import Heart from '../../components/Heart/Heart.jsx'
import Listcake from '../../components/Listcake/Listcake.jsx'
import Policies from '../../components/policies/policies.jsx'
const Homepages = () => {
  return (
    <div >
      <div className='div' style={{padding:'0 110px',marginTop:'20px'}}>
      <Heart />
      <Sliders />
      <img src={le1} style={{width:'1000px'}} />
      <Iintroductions />
      <img src={le2} style={{width:'1000px'}} />
      <div className='listcake'>
        <h1 className='bosungtap'>Bộ sưu tập bánh kem, bánh sinh nhật Savor Cake</h1>
        <div className='duoi'></div>
        <p  className='pbosungtap' > Mời bạn xem ngay hơn 100 mẫu bánh kem, bánh sinh nhật tươi ngon, đa dạng, giá chỉ từ 120k</p>
      <Listcake />
      <Policies />
      </div>

      </div>
      none
    </div>
  )
}

export default Homepages