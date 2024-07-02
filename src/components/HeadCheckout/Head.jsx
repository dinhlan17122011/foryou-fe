import { Col, Row } from 'antd'
import React from 'react'
// import { Imagelogo } from ''
import './Header.css'
const Head = () => {
  return (
    <div className='Header-checkout'>
          <Row>
      <Col span={5}>
        {/* <Imagelogo src={Anhlogo} alt='logo'/> */}
        <img src='https://www.savor.vn/static/7a33cf9210ab26cbacce1da794c12bf7/f57bd/savor-cakes-logo-white.webp' />
      </Col>

      <Col className='col' span={3}>
        <samp className='samp'>Giời thiệu</samp>
      </Col>
      <Col className='col' span={3}>
        <samp className='samp'>Danh mục</samp>
      </Col>
      <Col className='col' span={3}>
        <samp className='samp'>Chính sánh</samp>
      </Col>
    </Row>
    </div>
  )
}

export default Head