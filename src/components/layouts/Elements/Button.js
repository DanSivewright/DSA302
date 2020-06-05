import React from 'react'
import { Row, Col, Button as AntButton, Divider } from 'antd'
import { SearchOutlined } from '@ant-design/icons'

export const Button = () => {
  return (
    <div className='button__page'>
      <h1>Buttons</h1>
      <p>Buttons indicate an operation can take place. Interacting with a button should encourage the user that their action was noted and the corresponding business logic was triggered.</p>

      <h2 style={{ marginTop: '2em' }}>Button Types</h2>
      <ol>
        <li>Primary: Indicating the primary interaction</li>
        <li>Default: Signifies non-priority interaction</li>
        <li>Link: Used for linking external items/ linking within a page </li>
      </ol>

      <h4>These button types come baked with 3 button styles/ properties</h4>
      <ol>
        <li>Danger</li>
        <li>Disabled</li>
        <li>Loading</li>
      </ol>

      <h2 style={{ marginTop: '2em' }}>Examples</h2>
      <Row>
        <Col style={{ paddingRight: '1em' }} md={12}>
          <Row className='button_card'>
            <div className='button__container'>
              <AntButton type='primary'>Primary</AntButton>
              <AntButton type='default'>Default</AntButton>
              <AntButton type='dashed'>Dashed</AntButton>
              <AntButton type='link'>Link</AntButton>
            </div>
            <Divider />
            <div className='button__container'>
              <AntButton type='primary' loading>Primary</AntButton>
            </div>
            <Divider />
            <div className='button__container'>
              <AntButton danger type='primary'>Danger</AntButton>
              <AntButton danger type='default'>Default</AntButton>
              <AntButton danger type='dashed'>Dashed</AntButton>
              <AntButton danger type='link'>Link</AntButton>
            </div>
            <Divider />
            <div className='button__container'>
              <AntButton disabled type='primary'>Primary</AntButton>
              <AntButton disabled type='default'>Default</AntButton>
              <AntButton disabled type='dashed'>Dashed</AntButton>
              <AntButton disabled type='link'>Link</AntButton>
            </div>
          </Row>
        </Col>
        <Col style={{ paddingLeft: '1em' }} md={12}>
          <Row className='button_card'>
            <div className='button__container close'>
              <AntButton type='primary' icon={<SearchOutlined />}>Primary</AntButton>
              <AntButton type='default' icon={<SearchOutlined />}>Primary</AntButton>
            </div>
            <Divider />
            <div className='button__container close'>
              <AntButton shape='circle' type='primary' icon={<SearchOutlined />} />
              <AntButton shape='circle' type='default' icon={<SearchOutlined />} />
            </div>
          </Row>
          <Row className='button_card'>
            <AntButton style={{ margin: '1em 0' }} block type='primary'>Primary</AntButton>
            <AntButton style={{ margin: '1em 0' }} block type='default'>Default</AntButton>
            <AntButton style={{ margin: '1em 0' }} block type='dashed'>Dashed</AntButton>
            <AntButton style={{ margin: '1em 0' }} block type='link'>Link</AntButton>
          </Row>
        </Col>
      </Row>
    </div>
  )
}
