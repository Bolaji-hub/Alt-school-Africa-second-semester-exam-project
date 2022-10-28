import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

const useCounter = (initialValue = 0) => {
  const [count, setCount] = useState(initialValue)
  const reset = () => setCount(initialValue)
  const increment = () => setCount(count => count + 1)
  const decrement = () => setCount(count => count - 1)
  const setValue = (value) => setCount(value)

  return {
    count,
    reset,
    increment,
    decrement,
    setValue
  }

}

function App() {
  const { count, increment, decrement, reset, setValue } = useCounter()

  return (
    <div className="App">
      <h1>{count}</h1>
      <form onSubmit={event => {
        event.preventDefault()
        setValue(parseInt(event.target.elements[0].value))
        }}>
        <input type="number" />
        <button>Set Value</button>
      </form>
      <div className="buttons">
        <button onClick={increment}>
          Increment
        </button>
        <button onClick={decrement}>
          Decrement
        </button>
        <button onClick={reset}>
          Reset
        </button>
        
      </div>
    </div>
  )
}

export default App
