import { useState } from 'react'
import './App.css'
import Header from './components/Header.jsx'
import Container from './components/Container'

const App = () => {
  const [count, setCount] = useState(0)
  const [multiplier, setMultiplier] = useState(1);

  return (
    <div className="App">
      <Header multiplier={multiplier} setCount={setCount} count={count}/>
      <Container setMultiplier={setMultiplier} multiplier={multiplier} count={count} setCount={setCount}/>
    </div>
  )
}

export default App
