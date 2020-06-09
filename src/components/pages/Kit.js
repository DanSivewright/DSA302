import React from 'react'
import { Row, Col, Button } from 'antd'

export const Kit = () => {
  return (
    <div className='kit__page'>
      <h1>User Interface Kit</h1>
      <p>Basic implementation using the components provided in the Cloud Design system</p>

      <Row align='middle'>
        <Col className='image1' span={12} />
        <Col span={12}>
          <h2>Travel Select Page</h2>
          <p>Components used: card, statistics, avatar, bottom navigation, button</p>
          <Button type='primary'>View Components</Button>
        </Col>
      </Row>
      <Row align='middle' justify='end'>
        <Col className='left-font' span={12}>
          <h2>Routes Page</h2>
          <p>Components used: card, statistics, avatar, bottom navigation, button</p>
          <Button type='primary'>View Components</Button>
        </Col>
        <Col className='image2' span={12} />
      </Row>
      <Row align='middle'>
        <Col className='image3' span={12} />
        <Col span={12}>
          <h2>Profile Page</h2>
          <p>Components used: card, statistics, avatar, bottom navigation, button, accordian</p>
          <Button type='primary'>View Components</Button>
        </Col>
      </Row>
    </div>
  )
}
