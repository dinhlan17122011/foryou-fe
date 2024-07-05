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
        <img className='img-he' src='https://www.savor.vn/static/d5cd465e6d0385ccbfcf8b6a1da81dd4/e5a38/savor-cakes-logo-green.webp' />
      </Col>

      <Col className='col-head' span={6}>
        <samp className='samp-head'>Menu</samp>
      </Col>
      <Col className='col-head' span={6}>
        <samp className='samp-head'>Tư vần</samp>
      </Col>
      <Col className='col-head' span={6}>
        <samp className='samp'>Liên hệ</samp>
      </Col>
    </Row>
    </div>
  )
}

export default Head