import React from 'react'
import { Divider, Collapse } from 'antd'

const { Panel } = Collapse

export const Accordian = () => {
  return (
    <div className='accordian__page'>
      <h1>Accordian</h1>
      <p>Used as a content area which can be collapsed and expanded</p>
      <Divider />
      <Collapse accordion>
        <Panel header='This is panel header 1' key='1'>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum odio officiis possimus quidem debitis iusto necessitatibus provident quod beatae assumenda. Ex architecto blanditiis animi velit illum quidem temporibus eligendi sint.</p>
        </Panel>
        <Panel header='This is panel header 2' key='2'>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto atque accusantium, ratione, nulla consequuntur quibusdam repudiandae vero sint quos temporibus deserunt sequi voluptates nisi iure voluptas, impedit pariatur perferendis harum.</p>
        </Panel>
        <Panel header='This is panel header 3' key='3'>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure facilis ullam, deserunt blanditiis consectetur tempora ad. Perferendis numquam itaque quae possimus ipsa, ut ullam in voluptatem, sed accusamus cupiditate architecto?</p>
        </Panel>
      </Collapse>
    </div>
  )
}
