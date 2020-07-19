import React from 'react'
import './Loading.css'

const Loading = (props = false) => {
  return (
    <div className={`LoadingWrapper ${props.status ? 'show' : 'hide'}`}>
      <div className="lds-roller">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  )
}

export default Loading