import React from 'react'
import { Row, Col } from 'antd'

export const Color = () => {
  return (
    <div className='color__page'>
      <h1>Color</h1>
      <p>Color is a form of non verbal communication. It is not a static energy and its meaning can change from one day to the next with any individual - it all depends on what energy they are expressing at that point in time.
        <br />
        <br />
        Cloud Design's systems takes advantage of the psychology behind color and equips it's users with a multi-dimensional amplitude of colors.
      </p>

      <h2>Color Palette</h2>
      <p>Cloud Design's color palette totals 60 colors, including 6 primary colors and their derivatives.</p>

      <Row style={{ marginTop: '3em' }}>
        <Col xs={24} sm={24} md={12} lg={8}>
          <Row className='color__container'>
            <Col style={{ backgroundColor: '#FFF1F0' }} className='color__block' span={24}>
              #FFF1F0
            </Col>
            <Col style={{ backgroundColor: '#FFCCC7' }} className='color__block' span={24}>
            #FFCCC7
            </Col>
            <Col style={{ backgroundColor: '#FFA39E' }} className='color__block' span={24}>
            #FFA39E
            </Col>
            <Col style={{ backgroundColor: '#FF7875' }} className='color__block' span={24}>
            #FF7875
            </Col>
            <Col style={{ backgroundColor: '#FF4D4F' }} className='color__block' span={24}>
            #FF4D4F
            </Col>
            <Col style={{ backgroundColor: '#F5222D' }} className='color__block' span={24}>
            #F5222D
            </Col>
            <Col style={{ backgroundColor: '#CF1322' }} className='color__block' span={24}>
            #CF1322
            </Col>
            <Col style={{ backgroundColor: '#A8071A' }} className='color__block' span={24}>
            #A8071A
            </Col>
            <Col style={{ backgroundColor: '#820014' }} className='color__block' span={24}>
            #820014
            </Col>
            <Col style={{ backgroundColor: '#5C0011' }} className='color__block' span={24}>
            #5C0011
            </Col>
          </Row>
        </Col>

        <Col xs={24} sm={24} md={12} lg={8}>
          <Row className='color__container'>
            <Col style={{ backgroundColor: '#F0F5FF' }} className='color__block' span={24}>
            #F0F5FF
            </Col>
            <Col style={{ backgroundColor: '#D6E4FF' }} className='color__block' span={24}>
            #D6E4FF
            </Col>
            <Col style={{ backgroundColor: '#ADC6FF' }} className='color__block' span={24}>
            #ADC6FF
            </Col>
            <Col style={{ backgroundColor: '#85A5FF' }} className='color__block' span={24}>
            #85A5FF
            </Col>
            <Col style={{ backgroundColor: '#597EF7' }} className='color__block' span={24}>
            #597EF7
            </Col>
            <Col style={{ backgroundColor: '#2F54EB' }} className='color__block' span={24}>
            #2F54EB
            </Col>
            <Col style={{ backgroundColor: '#1D39C4' }} className='color__block' span={24}>
            #1D39C4
            </Col>
            <Col style={{ backgroundColor: '#10239E' }} className='color__block' span={24}>
            #10239E
            </Col>
            <Col style={{ backgroundColor: '#061178' }} className='color__block' span={24}>
            #061178
            </Col>
            <Col style={{ backgroundColor: '#030852' }} className='color__block' span={24}>
            #030852
            </Col>
          </Row>
        </Col>
        <Col xs={24} sm={24} md={12} lg={8}>
          <Row className='color__container'>
            <Col style={{ backgroundColor: '#FCFFE6' }} className='color__block' span={24}>
            #FCFFE6
            </Col>
            <Col style={{ backgroundColor: '#F4FFB8' }} className='color__block' span={24}>
            #F4FFB8
            </Col>
            <Col style={{ backgroundColor: '#EAFF8F' }} className='color__block' span={24}>
            #EAFF8F
            </Col>
            <Col style={{ backgroundColor: '#D3F261' }} className='color__block' span={24}>
            #D3F261
            </Col>
            <Col style={{ backgroundColor: '#BAE637' }} className='color__block' span={24}>
            #BAE637
            </Col>
            <Col style={{ backgroundColor: '#A0D911' }} className='color__block' span={24}>
            #A0D911
            </Col>
            <Col style={{ backgroundColor: '#7CB305' }} className='color__block' span={24}>
            #7CB305
            </Col>
            <Col style={{ backgroundColor: '#5B8C00' }} className='color__block' span={24}>
            #5B8C00
            </Col>
            <Col style={{ backgroundColor: '#3F6600' }} className='color__block' span={24}>
            #3F6600
            </Col>
            <Col style={{ backgroundColor: '#254000' }} className='color__block' span={24}>
            #254000
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  )
}
