import { useState } from 'react'
import Counter from '../componenets/Counter';


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

export default function UseCounter() {
  const counterProps = useCounter()
  
  return (<Counter {...counterProps} />)
}
