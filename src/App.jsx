import { useState } from 'react'
import AppHeader from './AppHeader'
import AppMain from './AppMain'

  function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <AppHeader />
      <AppMain />  
    </>
  )
} 

export default App
