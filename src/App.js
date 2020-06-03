import React from 'react'

// Style Imports
import { Row, Col } from 'antd'

// Package Imports
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

// Layout imports
import { Research } from './components/pages/Research'
import { VisualLanguage } from './components/pages/VisualLanguage'
import { Elements } from './components/pages/Elements'
import { Kit } from './components/pages/Kit'

// Shared Components
import { Navbar } from './components/shared/Navbar'

export const App = () => {
  return (
    <Router>
      <Switch>
        <div className='App'>
          <Navbar />
          <Row>
            <Col span={24}>
              <Route exact path='/' component={Research} />
              <Route exact path='/research' component={Research} />
              <Route exact path='/visual' component={VisualLanguage} />
              <Route exact path='/elements' component={Elements} />
              <Route exact path='/kit' component={Kit} />
            </Col>
          </Row>
        </div>
      </Switch>
    </Router>
  )
}
