import React from 'react'
import { Row, Col } from 'antd'
import { ElementsSidebar } from '../shared/ElementsSidebar'
import { Button } from '../layouts/Elements/Button'
import { FormBlock } from '../layouts/Elements/FormBlock'
import { MenuLayout } from '../layouts/Elements/MenuLayout'
import { Accordian } from '../layouts/Elements/Accordian'
import { Timeline } from '../layouts/Elements/Timeline'
import { Cards } from '../layouts/Elements/Cards'
import { PopoverComp } from '../layouts/Elements/Popover'
import { Statistics } from '../layouts/Elements/Statistics'

export const Elements = () => {
  const [currentMenu, setCurrentMenu] = React.useState('1')
  return (
    <Row>
      <Col xs={0} sm={0} md={5}>
        <ElementsSidebar currentMenu={currentMenu} setCurrentMenu={setCurrentMenu} />
      </Col>
      <Col xs={24} sm={24} md={19}>
        {
          currentMenu === '1'
            ? <Button />
            : currentMenu === '2'
              ? <FormBlock />
              : currentMenu === '3'
                ? <MenuLayout />
                : currentMenu === '4'
                  ? <Accordian />
                  : currentMenu === '5'
                    ? <Timeline />
                    : currentMenu === '6'
                      ? <Cards />
                      : currentMenu === '7'
                        ? <PopoverComp />
                        : currentMenu === '8'
                          ? <Statistics />
                          : undefined

        }
      </Col>
    </Row>
  )
}
