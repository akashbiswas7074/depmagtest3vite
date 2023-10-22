import { useState } from 'react'

import './App.css'
import Mag from './component/Mag' 
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Mag/>
    </>
  )
}


export default App
