import React from 'react'
import { Col, Row, Menu } from 'antd'
import { MailOutlined, AppstoreOutlined, SettingOutlined, CaretRightFilled, PlayCircleOutlined, EnvironmentOutlined, CompassOutlined } from '@ant-design/icons'

const { SubMenu } = Menu

export const MenuLayout = () => {
  return (
    <div className='menu__page'>
      <h1>Menu</h1>
      <p>Navigation is fundamental to any website. Good navigation system should have the user intuitively move throughout your application without them cognizant of what they are doing. Cloud Designs simple to use navigation system scaffolds this for the users of your sight.</p>

      <h2 style={{ marginTop: '2em' }}>Top Menu</h2>

      <Row style={{ marginTop: '2em' }}>
        <Col className='menu__card'>
          <Menu className='menu__container' mode='horizontal'>
            <Menu.Item key='mail' icon={<MailOutlined />}>
              Navigation One
            </Menu.Item>
            <Menu.Item key='app' disabled icon={<AppstoreOutlined />}>
              Navigation Two
            </Menu.Item>
            <SubMenu icon={<SettingOutlined />} title='Navigation Three - Submenu'>
              <Menu.ItemGroup title='Item 1'>
                <Menu.Item key='setting:1'>Option 1</Menu.Item>
                <Menu.Item key='setting:2'>Option 2</Menu.Item>
              </Menu.ItemGroup>
              <Menu.ItemGroup title='Item 2'>
                <Menu.Item key='setting:3'>Option 3</Menu.Item>
                <Menu.Item key='setting:4'>Option 4</Menu.Item>
              </Menu.ItemGroup>
            </SubMenu>
            <Menu.Item key='alipay'>
              <a href='#' target='_blank' rel='noopener noreferrer'>
                Navigation Four - Link
              </a>
            </Menu.Item>
          </Menu>
        </Col>
      </Row>

      <h2 style={{ marginTop: '2em' }}>Bottom Menu</h2>
      <p>Used to swap between tabs or as a bottom navigation on a mobile device.</p>

      <Row style={{ marginTop: '2em' }}>
        <Col className='menu__card2'>
          <Menu className='menu__container' mode='horizontal'>
            <Menu.Item key='1' icon={<MailOutlined />} />
            <Menu.Item key='2' icon={<CaretRightFilled />} />
            <Menu.Item key='3' icon={<PlayCircleOutlined />} />
            <Menu.Item key='4' icon={<EnvironmentOutlined />} />
            <Menu.Item key='5' icon={<CompassOutlined />} />
          </Menu>
        </Col>
      </Row>
    </div>
  )
}
