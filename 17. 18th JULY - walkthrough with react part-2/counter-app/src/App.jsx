import { useState } from 'react'

function App() {
  const [ counter, setCounter ] = useState(0)

  function increment() {
    setCounter(counter + 1)
  }
  
  function decrement() {
    setCounter(counter - 1)
  }

  return (
      <div className="container">
          <h1>{counter}</h1>
          <div className="buttons">
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
          </div>
      </div>
  )
}

export default App
