import { useState  } from "react"

export default function ErrorBoundary () {
  const [hasError, setHasError] = useState(false)
  if (hasError) {
    throw new Error('Error triggered')
  }

  return (<div>

    <button onClick={() => {setHasError(true)}}>trigger button </button>
    <h1>Oops!</h1>
  </div>)
}