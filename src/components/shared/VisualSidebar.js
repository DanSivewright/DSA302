import React from 'react'
import { Menu, Divider } from 'antd'

export const VisualSidebar = ({ setCurrentMenu, currentMenu }) => {
  const handleClick = e => {
    setCurrentMenu(e.key)
  }

  return (
    <Menu
      className='sidebar__container'
      onClick={handleClick}
      defaultSelectedKeys={['1']}
      mode='inline'
    >
      <Menu.ItemGroup title='General'>
        <Divider />
        <Menu.Item key='1'>Color</Menu.Item>
        <Menu.Item key='2'>Typography</Menu.Item>
        <Menu.Item key='3'>Grid</Menu.Item>
      </Menu.ItemGroup>
      <Menu.ItemGroup title='Visual Aid'>
        <Divider />
        <Menu.Item key='4'>Iconography</Menu.Item>
      </Menu.ItemGroup>
    </Menu>
  )
}
