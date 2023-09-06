import React from 'react'
import './Main.css'
import '../App.css'
function Main(props) {
  return (
    <div className='Main'>
      <div className='flex'>
        <div className='flex-1'>
          {props.SubContent}
          {props.SubContent}
          {props.SubContent}
        </div>
      </div>
      {props.Advertisement}
    </div>
  )
}

export default Main