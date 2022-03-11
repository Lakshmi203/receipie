import React from 'react'

function Loader() {
  return (
    <div className='loader-container'>
        <svg>
            <circle className="stroke stroke--1" cx="50%" cy="50%" r="120" />
            <circle className="stroke stroke--2" cx="50%" cy="50%" r="140" />
            <circle className='stroke stroke--3' cx="50%" cy="50%" r="160" />
            <circle className="stroke stroke--4" cx="50%" cy="50%" r="180" />
            <circle className="stroke stroke--5" cx="50%" cy="50%" r="200" />
        </svg>
  
  
  </div>
  )
}

export default Loader