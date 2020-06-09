import React from 'react'
import { Row, Col, Timeline as TimelineComp } from 'antd'
import { ClockCircleOutlined } from '@ant-design/icons'

export const Timeline = () => {
  return (
    <div className='timeline__page'>
      <h1>Timeline</h1>
      <p>Component used to display content in a sequence</p>
      <Row>
        <Col style={{ paddingRight: '1em' }} md={12}>
          <Row className='timeline__card'>
            <div className='timeline__container'>
              <TimelineComp>
                <TimelineComp.Item color='green'>Create a services site 2015-09-01</TimelineComp.Item>
                <TimelineComp.Item color='green'>Create a services site 2015-09-01</TimelineComp.Item>
                <TimelineComp.Item color='red'>
                  <p>Solve initial network problems 1</p>
                  <p>Solve initial network problems 2</p>
                  <p>Solve initial network problems 3 2015-09-01</p>
                </TimelineComp.Item>
                <TimelineComp.Item>
                  <p>Technical testing 1</p>
                  <p>Technical testing 2</p>
                  <p>Technical testing 3 2015-09-01</p>
                </TimelineComp.Item>
                <TimelineComp.Item color='gray'>
                  <p>Technical testing 1</p>
                  <p>Technical testing 2</p>
                  <p>Technical testing 3 2015-09-01</p>
                </TimelineComp.Item>
                <TimelineComp.Item color='gray'>
                  <p>Technical testing 1</p>
                  <p>Technical testing 2</p>
                  <p>Technical testing 3 2015-09-01</p>
                </TimelineComp.Item>
              </TimelineComp>
            </div>
          </Row>
        </Col>
        <Col style={{ paddingRight: '1em' }} md={12}>
          <Row className='timeline__card'>
            <div className='timeline__container'>
              <TimelineComp mode='alternate'>
                <TimelineComp.Item>Create a services site 2015-09-01</TimelineComp.Item>
                <TimelineComp.Item color='green'>Solve initial network problems 2015-09-01</TimelineComp.Item>
                <TimelineComp.Item dot={<ClockCircleOutlined style={{ fontSize: '16px' }} />}>
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
                  laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto
                  beatae vitae dicta sunt explicabo.
                </TimelineComp.Item>
                <TimelineComp.Item color='red'>Network problems being solved 2015-09-01</TimelineComp.Item>
                <TimelineComp.Item>Create a services site 2015-09-01</TimelineComp.Item>
                <TimelineComp.Item dot={<ClockCircleOutlined style={{ fontSize: '16px' }} />}>
                  Technical testing 2015-09-01
                </TimelineComp.Item>
              </TimelineComp>
            </div>
          </Row>
        </Col>
      </Row>
    </div>
  )
}
