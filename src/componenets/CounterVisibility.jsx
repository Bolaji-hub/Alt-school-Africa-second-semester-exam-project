import { useState } from 'react'

export default function CounterVisibility({ children }) {
  const [isShown, setIsShown] = useState(true)
  
  return (
  <>
    {isShown && children}
    <button onClick={() => setIsShown((shown) => !shown)}>{isShown ? 'Hide' : 'Show'}</button>
  </>)
}