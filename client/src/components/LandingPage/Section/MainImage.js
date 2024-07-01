import React from 'react'

function MainImage(props) {
  return (
    <div style={{
      position: 'relative',
      backgroundImage: `url(${props.image})`,
      width: '100%',
      height: '500px',
      backgroundSize: 'cover',
      backgroundPosition: 'center center'
    }}>
      <div style={{
        position: 'absolute',
        maxWidth: '500px',
        bottom: '25px',
        left: '25px',
        color: '#fff',
        // backgroundColor: '#ff0'
      }}>
        <h2>{props.title}</h2>
        <p>{props.overview}</p>
      </div>
    </div>
  )
}

export default MainImage