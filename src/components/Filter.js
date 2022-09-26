import React from 'react'

const Filter = ({handleClick}) => {

  return (
    <div>
       <button onClick={() => handleClick('name')} className='button'>Sort by Name</button>
       <button onClick={() => handleClick('username')} className='button'>Sort by Username</button>
       <button onClick={() => handleClick('email')} className='button'>Sort by Email</button>
    </div>
  )
}

export default Filter