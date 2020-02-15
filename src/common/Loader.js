import React from 'react'
import './style.css'

export default function Loader(props) {
  return props.visible ? <div className='loader'></div> : null
}
