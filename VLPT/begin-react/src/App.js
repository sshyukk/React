import React from 'react'
import Hello from './Hello'
import Wrapper from './Wrapper'
import Counter from './Counter'
import './App.css'

function App() {
  const name = 'react'
  const style = {
    backgroundColor: 'black',
    color: 'aqua',
    fontSize: 24,
    padding: '1rem'
  }

  return (
    <>
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
    </>
  )
}

export default App;
