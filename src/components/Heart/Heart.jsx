import React from 'react'
import {Row,Col} from 'antd'
import { Colitems, Imagelogo } from './Giaodien'
import Anhlogo  from './img/savor-cakes-logo-green.png'
import imgtest from '../../img/test.jpg'
import './Heard.css'
const Heart = () => {
  return (
    <div style={{fontWeight:'bold',color:'green',paddingBottom:'20px'}}>
    <Row>
      <Col span={5}>
        <Imagelogo src={Anhlogo} alt='logo'/>
      </Col>

      <Colitems className='col' span={3}>
        <samp className='samp'>Giời thiệu</samp>
      </Colitems>
      <Colitems className='col' span={3}>
        <samp className='samp'>Danh mục</samp>
      </Colitems>
      <Colitems className='col' span={3}>
        <samp className='samp'>Chính sánh</samp>
      </Colitems>
      <Colitems className='col' span={3}>
        <samp className='samp'>Cửa hàng</samp>
      </Colitems>
      <Colitems className='col' span={3}>
        <samp className='samp'>Feedback</samp>
      </Colitems>
      <Colitems className='col' span={3}>
        <samp className='samp'>Liên hệ</samp>
      </Colitems>
    </Row>
    </div>
  )
}

export default Heart