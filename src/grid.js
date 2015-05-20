'use strict'

import {element} from 'deku'
import classnames from 'classnames'

let propTypes = {
  xs: { type: 'number', optional: true },
  sm: { type: 'number', optional: true },
  md: { type: 'number', optional: true },
  lg: { type: 'number', optional: true }
}

function renderCol (component) {
  const {props} = component
  const classes = {}

  for (let size of ['xs', 'sm', 'md', 'lg']) {
    if (size in props) {
      const className = ['col', size, props[size]].join('-')
      classes[className] = true
    }
  }

  return (
    <div class={classnames(classes)}>
      {props.children}
    </div>
  )

}

function renderRow (component) {
  const {props} = component
  return <div class='row'>{props.children}</div>
}

export const Col = {propTypes, render: renderCol}
export const Row = {render: renderRow}
