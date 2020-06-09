import React from 'react'
import { Row, Col } from 'antd'
import { AndroidOutlined, AppleOutlined, WindowsOutlined, IeOutlined, StepBackwardOutlined, StepForwardOutlined, FastBackwardOutlined, FastForwardOutlined, ShrinkOutlined, EditOutlined, FormOutlined, ScissorOutlined, BgColorsOutlined, DragOutlined, AreaChartOutlined, BarChartOutlined, BoxPlotFilled, GithubOutlined, Html5Outlined, YoutubeOutlined, DropboxCircleFilled } from '@ant-design/icons'

export const Iconography = () => {
  return (
    <div className='icon__page'>
      <h1>Iconography</h1>
      <p>Cloud Design uses the FontAwesome Icon Library. This library is in extremely common in aspect of web and digital design</p>

      <Row style={{ marginTop: '5em' }}>
        <Col className='icon__container' xs={6} sm={6} md={3}>
          <AndroidOutlined style={{ fontSize: '3em' }} />
        </Col>
        <Col className='icon__container' xs={6} sm={6} md={3}>
          <AppleOutlined style={{ fontSize: '3em' }} />
        </Col>
        <Col className='icon__container' xs={6} sm={6} md={3}>
          <WindowsOutlined style={{ fontSize: '3em' }} />
        </Col>
        <Col className='icon__container' xs={6} sm={6} md={3}>
          <IeOutlined style={{ fontSize: '3em' }} />
        </Col>
        <Col className='icon__container' xs={6} sm={6} md={3}>
          <StepBackwardOutlined style={{ fontSize: '3em' }} />
        </Col>
        <Col className='icon__container' xs={6} sm={6} md={3}>
          <StepForwardOutlined style={{ fontSize: '3em' }} />
        </Col>
        <Col className='icon__container' xs={6} sm={6} md={3}>
          <FastBackwardOutlined style={{ fontSize: '3em' }} />
        </Col>
        <Col className='icon__container' xs={6} sm={6} md={3}>
          <FastForwardOutlined style={{ fontSize: '3em' }} />
        </Col>
        <Col className='icon__container' xs={6} sm={6} md={3}>
          <ShrinkOutlined style={{ fontSize: '3em' }} />
        </Col>
        <Col className='icon__container' xs={6} sm={6} md={3}>
          <EditOutlined style={{ fontSize: '3em' }} />
        </Col>
        <Col className='icon__container' xs={6} sm={6} md={3}>
          <FormOutlined style={{ fontSize: '3em' }} />
        </Col>
        <Col className='icon__container' xs={6} sm={6} md={3}>
          <ScissorOutlined style={{ fontSize: '3em' }} />
        </Col>
        <Col className='icon__container' xs={6} sm={6} md={3}>
          <BgColorsOutlined style={{ fontSize: '3em' }} />
        </Col>
        <Col className='icon__container' xs={6} sm={6} md={3}>
          <DragOutlined style={{ fontSize: '3em' }} />
        </Col>
        <Col className='icon__container' xs={6} sm={6} md={3}>
          <AreaChartOutlined style={{ fontSize: '3em' }} />
        </Col>
        <Col className='icon__container' xs={6} sm={6} md={3}>
          <BarChartOutlined style={{ fontSize: '3em' }} />
        </Col>
        <Col className='icon__container' xs={6} sm={6} md={3}>
          <BoxPlotFilled style={{ fontSize: '3em' }} />
        </Col>
        <Col className='icon__container' xs={6} sm={6} md={3}>
          <GithubOutlined style={{ fontSize: '3em' }} />
        </Col>
        <Col className='icon__container' xs={6} sm={6} md={3}>
          <Html5Outlined style={{ fontSize: '3em' }} />
        </Col>
        <Col className='icon__container' xs={6} sm={6} md={3}>
          <YoutubeOutlined style={{ fontSize: '3em' }} />
        </Col>
        <Col className='icon__container' xs={6} sm={6} md={3}>
          <DropboxCircleFilled style={{ fontSize: '3em' }} />
        </Col>
      </Row>
    </div>
  )
}
