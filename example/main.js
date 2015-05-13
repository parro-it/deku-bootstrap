'use strict'

import {Button} from '..'
import {tree, render, element} from 'deku'

let app = tree(
  <Button kind='anchor' success lg>Hello World!</Button>
)

app.option('validateProps', true)

window.onload = e => render(app, document.body)
