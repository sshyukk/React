import React, { useRef, useState } from 'react'
import Hello from './Hello'
import Wrapper from './Wrapper'
import Counter from './Counter'
import InputSample from './InputSample'

import UserList from './UserList'
import CreateUser from './CreateUser'
import './App.css'

function App() {
  const name = 'react'
  const style = {
    backgroundColor: 'black',
    color: 'aqua',
    fontSize: 24,
    padding: '1rem'
  }
  
  const [inputs, setInputs] = useState({
    username: '',
    email: ''
  })
  const { username, email } = inputs
  const onChange = e => {
    const { name, value } = e.target
    setInputs({
      ...inputs,
      [name]: value
    })
  }
  const [users, setUsers] = useState([
    {
        id: 1,
        username: 'velopert',
        email: 'aaa'
    },
    {
        id: 2,
        username: 'sshyukk',
        email: 'bbb'
    },
    {
        id: 3,
        username: 'sanghyuk',
        email: 'ccc'
    },
  ])
  const nextId = useRef(4)
  const onCreate = () => {
    const user = {
      id: nextId.current,
      username,
      email
    }
    setUsers([...users, user])
    setInputs({
      username: '',
      email: ''
    })
    nextId.current += 1
  }
  const onRemove = id => {
    setUsers(users.filter(user => user.id !== id))
  }
  return (
    <div>
      <div>
      <Hello name="react" color="red"/>
      <Hello name="vue" color="green"/>
      <Hello color="blue" />

      <div style={style}>{name}</div>
      <div className="gray-box"></div>

      <Wrapper>
        <Hello name="react" color="red" isSpecial></Hello>
        <Hello color="pink"></Hello>
      </Wrapper>

      <Counter />
      <InputSample />
      </div>

      <div>
        <CreateUser
          username={username}
          email={email}
          onChange={onChange}
          onCreate={onCreate} 
        />
        <UserList users={users} onRemove={onRemove} />
      </div>
    </div>
  )
}

export default App;
