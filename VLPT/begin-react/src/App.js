import React, { useRef } from 'react'
import Hello from './Hello'
import Wrapper from './Wrapper'
import Counter from './Counter'
import InputSample from './InputSample'
import UserList from './UserList'
import './App.css'

function App() {
  const name = 'react'
  const style = {
    backgroundColor: 'black',
    color: 'aqua',
    fontSize: 24,
    padding: '1rem'
  }
  const users = [
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
  ]
  const nextId = useRef(4)
  const onCreate = () => {
    nextId.current += 1
  }
  return (
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
      <UserList users={users} />

    </div>
  )
}

export default App;
