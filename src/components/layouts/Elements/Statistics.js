import React from 'react'
import { Row, Col, Statistic, Card } from 'antd'
import { EnvironmentOutlined, ArrowUpOutlined, ArrowDownOutlined } from '@ant-design/icons'

export const Statistics = () => {
  const { Countdown } = Statistic
  const deadline = Date.now() + 1000 * 60 * 60 * 24 * 2 + 1000 * 30
  return (
    <div className='stat__page'>
      <h1>Statistics</h1>
      <p>Component used to provide statistical feedback to users.</p>

      <h2 style={{ marginTop: '2em' }}>Examples</h2>

      <Row style={{ marginTop: '2em' }}>
        <Col style={{ paddingRight: '1em' }} md={12}>
          <Row className='stat__card'>
            <div className='stat__container-feedback'>
              <Statistic className='stat__content' title='Active Users' value={112893} />
              <Statistic className='stat__content' title='Total Distance' value='112893 km' />
              <Statistic className='stat__content' title='Feedback' value='20.4 km left' prefix={<EnvironmentOutlined />} />
              <Statistic className='stat__content' title='Statistic' value={93} suffix='/ 100' />
              <Countdown className='stat__content' title='Time left' value={deadline} format='HH:mm:ss:SSS' />
            </div>
          </Row>
        </Col>
        <Col style={{ paddingRight: '1em' }} md={12}>
          <Row className='stat__card'>
            <Row gutter={16}>
              <Col span={12}>
                <Card>
                  <Statistic
                    title='Incline'
                    value={11.28}
                    precision={2}
                    valueStyle={{ color: '#3f8600' }}
                    prefix={<ArrowUpOutlined />}
                    suffix='%'
                  />
                </Card>
              </Col>
              <Col span={12}>
                <Card>
                  <Statistic
                    title='Decline'
                    value={9.3}
                    precision={2}
                    valueStyle={{ color: '#cf1322' }}
                    prefix={<ArrowDownOutlined />}
                    suffix='%'
                  />
                </Card>
              </Col>
            </Row>
          </Row>
        </Col>
      </Row>
    </div>
  )
}
