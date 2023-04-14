import { useState } from 'react'
import './App.css'
import Form from './Form'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <h1>hola</h1>
      <Form />
    </div>
  )
}

export default App
