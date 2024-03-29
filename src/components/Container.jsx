import React from 'react'

function Container(props) {
  return (
    <div className="container mx-auto max-w-6xl px-2 ">
      {props.children}
    </div>
  )
}

export default Container