import React from 'react'
import { Row, Col, Card, Avatar } from 'antd'
import { SettingOutlined, EditOutlined, EllipsisOutlined } from '@ant-design/icons'
const { Meta } = Card

export const Cards = () => {
  return (
    <div className='card__page'>
      <h1>Cards</h1>
      <p>Component used to display content in a sequence</p>
      <Row style={{ marginTop: '2em' }}>
        <Col className='card__card'>
          <div className='card__container'>
            <Card title='Default size card' extra={<a href='#'>More</a>} style={{ width: 300 }}>
              <p>Card content</p>
              <p>Card content</p>
              <p>Card content</p>
            </Card>
            <Card
              style={{ width: '300px' }}
              actions={[
                <SettingOutlined key='setting' />,
                <EditOutlined key='edit' />,
                <EllipsisOutlined key='ellipsis' />
              ]}
            >
              <Meta
                avatar={
                  <Avatar src='https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png' />
                }
                title='Card title'
                description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae nulla necessitatibus deleniti, iste reprehenderit itaque illum tempora fugit, officia asperiores possimus hic libero officiis veritatis illo quisquam odio dolore sint!'
              />
            </Card>
            <Card
              style={{ width: 300 }}
              cover={
                <img
                  alt='example'
                  src='https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png'
                />
              }
              actions={[
                <SettingOutlined key='setting' />,
                <EditOutlined key='edit' />,
                <EllipsisOutlined key='ellipsis' />
              ]}
            >
              <Meta
                avatar={<Avatar src='https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png' />}
                title='Card title'
                description='This is the description'
              />
            </Card>,
          </div>
        </Col>
      </Row>
    </div>
  )
}
