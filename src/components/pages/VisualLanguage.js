import React from 'react'

// Style Imports
import { Row, Col } from 'antd'

// Layout Imports
import { VisualSidebar } from '../shared/VisualSidebar'
import { Color } from '../layouts/Visual/Color'
import { TypographyComponent } from '../layouts/Visual/Typography'
import { Grid } from '../layouts/Visual/Grid'
import { Iconography } from '../layouts/Visual/Iconography'
import { Motion } from '../layouts/Visual/Motion'

export const VisualLanguage = () => {
  const [currentMenu, setCurrentMenu] = React.useState('1')

  React.useEffect(() => {
    console.log(currentMenu)
  }, [currentMenu])

  return (
    <Row>
      <Col xs={0} sm={0} md={5}>
        <VisualSidebar currentMenu={currentMenu} setCurrentMenu={setCurrentMenu} />
      </Col>
      <Col xs={24} sm={24} md={19}>
        {
          currentMenu === '1'
            ? <Color />
            : currentMenu === '2'
              ? <TypographyComponent />
              : currentMenu === '3'
                ? <Grid />
                : currentMenu === '4'
                  ? <Iconography />
                  : currentMenu === '5'
                    ? <Motion />
                    : undefined
        }
      </Col>
    </Row>
  )
}
