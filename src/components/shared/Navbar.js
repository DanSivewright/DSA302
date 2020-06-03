import React from 'react'

// Package Imports
import { useHistory } from 'react-router-dom'

// Style imports
import { Row, Col, Menu } from 'antd'

export const Navbar = () => {
  const [tab, setTab] = React.useState('')

  const history = useHistory()

  const handleClick = (e) => {
    setTab(e.key)
    history.push(e.key)
  }

  return (
    <Row className='navbar__container' justify='center'>
      <Col>
        <Menu onClick={handleClick} selectedKeys={tab} mode='horizontal'>
          <Menu.Item key='/research'>
            Research
          </Menu.Item>
          <Menu.Item key='/visual'>
            Visual Language
          </Menu.Item>
          <Menu.Item key='/elements'>
            UI Elements
          </Menu.Item>
          <Menu.Item key='/kit'>
            UI Kit
          </Menu.Item>
        </Menu>
      </Col>
    </Row>
  )
}
