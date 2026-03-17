import { useState } from 'react'
import './App.css'
import Todolist from './todolist.jsx'
import Recipes from './api-call.jsx'
import Counter from './useref-counter.jsx'
import Todolist1 from './useref-todolist.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (

      <div>
        
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
     <Todolist/>
      <Recipes/>
      <Counter/>
      <Todolist1/>
      </div>
  )
}

export default App
