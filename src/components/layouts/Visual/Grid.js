import React from 'react'
import { Row, Col } from 'antd'

export const Grid = () => {
  return (
    <div className='grid__page'>

      <h1>Grid System</h1>
      <p>Cloud Design uses the tried and tested bootstrap grid system. Bootstrap's grid system allows for up to 12 individual column, you can group columns together to create wider ones.</p>

      <div className='grid__container'>
        <Row>
          <Col className='grid__block' span={24}>col 12</Col>
        </Row>
        <Row>
          <Col className='grid__block' span={12}>col-6</Col>
          <Col className='grid__block dark' span={12}>col-6</Col>
        </Row>
        <Row>
          <Col className='grid__block' span={8}>col-4</Col>
          <Col className='grid__block dark' span={8}>col-4</Col>
          <Col className='grid__block' span={8}>col-4</Col>
        </Row>
        <Row>
          <Col className='grid__block' span={6}>col-3</Col>
          <Col className='grid__block dark' span={6}>col-3</Col>
          <Col className='grid__block' span={6}>col-3</Col>
          <Col className='grid__block dark' span={6}>col-3</Col>
        </Row>
        <Row>
          <Col className='grid__block' span={2}>col-1</Col>
          <Col className='grid__block dark' span={2}>col-1</Col>
          <Col className='grid__block' span={2}>col-1</Col>
          <Col className='grid__block dark' span={2}>col-1</Col>
          <Col className='grid__block' span={2}>col-1</Col>
          <Col className='grid__block dark' span={2}>col-1</Col>
          <Col className='grid__block' span={2}>col-1</Col>
          <Col className='grid__block dark' span={2}>col-1</Col>
          <Col className='grid__block' span={2}>col-1</Col>
          <Col className='grid__block dark' span={2}>col-1</Col>
          <Col className='grid__block' span={2}>col-1</Col>
          <Col className='grid__block dark' span={2}>col-1</Col>
        </Row>
      </div>
    </div>
  )
}
