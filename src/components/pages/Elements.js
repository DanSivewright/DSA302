import React from 'react'
import { Row, Col } from 'antd'
import { ElementsSidebar } from '../shared/ElementsSidebar'
import { Button } from '../layouts/Elements/Button'

export const Elements = () => {
  const [currentMenu, setCurrentMenu] = React.useState('1')
  return (
    <Row>
      <Col xs={0} sm={0} md={5}>
        <ElementsSidebar currentMenu={currentMenu} setCurrentMenu={setCurrentMenu} />
      </Col>
      <Col xs={24} sm={24} md={19}>
        <Button />
      </Col>
    </Row>
  )
}
