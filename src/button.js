'use strict'

import {element} from 'deku'
import classnames from 'classnames'

let propTypes = {
  kind: {
    type: 'string',
    expects: ['submit', 'button', 'anchor']
  },
  success: {
    type: 'boolean',
    optional: true
  },
  lg: {
    type: 'boolean',
    optional: true
  }
}

function render (component) {
  let {props} = component
  console.dir(props)

  const classes = classnames('btn',
  {
	'btn-success': props.success,
	'btn-lg': props.lg
  })

  if (props.kind === 'anchor') {
    return <a class={classes}>{props.children}</a>
  }

  return <button class={classes} type={props.kind}>{props.children}</button>

}

export default {propTypes, render}
