import React from 'react'

const UserForm = ({handleSubmit}) => {
  return (
    <div>
        <form onSubmit={(e) => handleSubmit(e)} id='myForm'>
            <input type="text" id='name' placeholder='Enter Name'/>
            <input type="text" id='username' placeholder='Enter Username'/>
            <input type="text" id='email' placeholder='Enter Email'/>
            <input type="text" id='phone' placeholder='Enter Phone no.'/>
            <input type="hidden" id="status" value="new"/>
            <button className='button' type='submit'>create User</button>
        </form>
    </div>
  )
}

export default UserForm