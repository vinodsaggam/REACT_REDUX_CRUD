import React from 'react'

function Users({ users, handleUpdate}) {
    return (
        <table className="users">
            <tbody>
            <tr>
                <th>Name</th>
                <th>Username</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Update</th>
            </tr>
            {
                users.length > 0 && users.map((item, index) => {
                    const id = Math.random(9)
                    return (
                        <tr key={id}>
                            <td>{item.name}</td>
                            <td>{item.username}</td>
                            <td>{item.email}</td>
                            <td>{item.phone}</td>
                            <td>
                                <button className='button' onClick={(id) => handleUpdate(item.id)}>Edit</button>
                                </td>
                        </tr>
                    )
                })
            }
</tbody>
        </table>
    )
}

export default Users