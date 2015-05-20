'use strict'

export const colorProps = [
  'success',
  'primary',
  'default',
  'info',
  'warning',
  'danger'
]

export const sizeProps = [
  'xs',
  'sm',
  'lg'
]

export function propertify (definedProps) {
  return function (propTypes) {
    const newProps = {}
    for (let prop of definedProps) {
      newProps[prop] = {
        type: 'boolean',
        optional: true
      }
    }

    return Object.assign(propTypes, newProps)
  }
}

export function addClassify (prefix, definedProps) {

  return function (props, classes={}) {

    for (let prop of definedProps) {
      classes[prefix + prop] = props[prop]
    }

    return classes
  }
}
