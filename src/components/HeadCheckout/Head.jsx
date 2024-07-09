import { Col, Row } from 'antd'
import React from 'react'
// import { Imagelogo } from ''
import './Navbar.css'
const Head = () => {
  return (
    <div className='Header-checkout'>
      <div className='item'>
          <Row>
      <Col span={5}>
        {/* <Imagelogo src={Anhlogo} alt='logo'/> */}
        <img className='img' src='https://www.savor.vn/static/d5cd465e6d0385ccbfcf8b6a1da81dd4/e5a38/savor-cakes-logo-green.webp' />
      </Col>

      <Col className='col' span={6}>
        <samp className='samp'>Menu Bánh</samp>
      </Col>
      <Col className='col' span={6}>
        <samp className='samp'>Tư vần</samp>
      </Col>
      <Col className='col' span={6}>
        <samp className='samp'>Liên hệ</samp>
      </Col>
    </Row>

      </div>
    </div>
  )
}

export default Head