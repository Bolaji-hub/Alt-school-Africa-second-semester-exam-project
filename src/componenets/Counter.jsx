export default function Counter(props) {
  const { count, increment, decrement, reset, setValue } = props
  

  return (
    <div className={props.className}>
      <h1>{count}</h1>
      <form onSubmit={event => {
        event.preventDefault()
        setValue(parseInt(event.target.elements[0].value))
        }}>
        <input type="number" required />
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
