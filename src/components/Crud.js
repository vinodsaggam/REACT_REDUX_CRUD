import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers, getUserById, addUser, updateUser } from '../Actions/users';
import Users from '../components/Users';
import Filter from '../components/Filter';
import UserForm from '../components/UserForm';
import '../App.css';


function Crud() {
  const dispatch = useDispatch();

  const { users } = useSelector(state => state.users)

  useEffect(() => {
    dispatch(fetchUsers())
  }, [dispatch])


  const filterUsers = (val) => {
    dispatch(getUserById(val))
  }

  const createUser = (e) => {

    e.preventDefault();
    const newUser =
    {
      "name": e.target[0].value,
      "username": e.target[1].value,
      "email": e.target[2].value,
      "phone": e.target[3].value,
      "id": e.target[4].value
    }
    if (e.target[4].value === 'new') {
      dispatch(addUser(newUser))
    } else {
      dispatch(updateUser(newUser))
    }



    e.target.reset();

  }

  const handleUpdateUser = (id) => {
    var user = users.filter(obj => obj.id === id)
    let name = document.getElementById('name');
    let username = document.getElementById('username');
    let email = document.getElementById('email');
    let phone = document.getElementById('phone');
    let status = document.getElementById('status');
    name.value = user[0].name;
    phone.value = user[0].phone;
    username.value = user[0].username;
    email.value = user[0].email;
    status.value = id;
  }

  return (
    <div className='app'>
      <h1>React CRUD using React-Redux</h1>
      <section>
        <UserForm handleSubmit={(e) => createUser(e)} />
      </section>
      <section>
        <Filter handleClick={(val) => filterUsers(val)} />
      </section>
      <br />
      <section>
        <Users users={users} handleUpdate={(id) => handleUpdateUser(id)} />
      </section>


    </div>
  );
}

export default Crud;
