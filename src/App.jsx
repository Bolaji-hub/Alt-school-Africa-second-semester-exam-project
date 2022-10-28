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
  const { count, increment, decrement } = useCounter()

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={decrement}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  )
}

export default App
