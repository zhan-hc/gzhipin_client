import React from 'react'
import logo from './zhaopin.png'
import './logo.css'
class Logo extends React.Component {
  render () {
    return (
      <div className='logo-container'>
        <img src={logo} alt="logo" className='logo-img'/>
      </div>
    )
  }
}

export default Logo
