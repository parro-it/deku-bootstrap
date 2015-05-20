'use strict'

import {element} from 'deku'
import classnames from 'classnames'
import { propertify, addClassify, colorProps, sizeProps } from './utils'

const colorify = propertify(colorProps)
const sizeify = propertify(sizeProps)
const addSizeClasses = addClassify('btn-', sizeProps)
const addColorClasses = addClassify('btn-', colorProps)

let propTypes = sizeify(colorify({
  kind: {
    type: 'string',
    expects: ['submit', 'button', 'anchor']
  }
}))

function render (component) {
  let {props} = component

  const classes = classnames(
    'btn',
    addSizeClasses(props, addColorClasses(props))
  )

  if (props.kind === 'anchor') {
    return <a class={classes}>{props.children}</a>
  }

  return <button class={classes} type={props.kind}>{props.children}</button>

}

export default {propTypes, render}
