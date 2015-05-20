'use strict'

import 'babelify/polyfill'
import {Button, Col, Row} from '..'
import {tree, render, element} from 'deku'

let app = tree(
  <main>
    <Row>
      <Col md={12}>
        <h2>Various colors:</h2>
      </Col>
    </Row>
    <Row>
      <Col md={2}><Button kind='button' success lg>success</Button></Col>
      <Col md={2}><Button kind='button' primary lg>primary</Button></Col>
      <Col md={2}><Button kind='button' default lg>default</Button></Col>
      <Col md={2}><Button kind='button' warning lg>warning</Button></Col>
      <Col md={2}><Button kind='button' info lg>info</Button></Col>
      <Col md={2}><Button kind='button' danger lg>danger</Button></Col>
    </Row>

    <Row>
      <Col md={12}>
        <h2>Various size:</h2>
      </Col>
    </Row>
    <Row>
      <Col md={2}><Button kind='button' success lg>Large</Button></Col>
      <Col md={2}><Button kind='button' success>Normal</Button></Col>
      <Col md={2}><Button kind='button' success sm>Small</Button></Col>
      <Col md={2}><Button kind='button' success xs>Extra small</Button></Col>
    </Row>
  </main>
)

app.option('validateProps', true)

window.onload = e => render(app, document.body)
