import React from 'react'
import { Menu, Divider } from 'antd'

export const ElementsSidebar = ({ setCurrentMenu, currentMenu }) => {
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
      <Menu.ItemGroup title='Interactions'>
        <Divider />
        <Menu.Item key='1'>Buttons</Menu.Item>
        <Menu.Item key='2'>Form Inputs</Menu.Item>
      </Menu.ItemGroup>
      <Menu.ItemGroup title='Navigation'>
        <Divider />
        <Menu.Item key='3'>Menu</Menu.Item>
      </Menu.ItemGroup>
      <Menu.ItemGroup title='Data Display'>
        <Divider />
        <Menu.Item key='4'>Accordian</Menu.Item>
        <Menu.Item key='5'>Timeline</Menu.Item>
        <Menu.Item key='5'>Cards</Menu.Item>
        <Menu.Item key='6'>Popover</Menu.Item>
      </Menu.ItemGroup>
      <Menu.ItemGroup title='Feedback'>
        <Divider />
        <Menu.Item key='8'>Statistics</Menu.Item>
      </Menu.ItemGroup>
    </Menu>
  )
}
