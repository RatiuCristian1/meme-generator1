import { useState } from 'react'
import AppHeader from './AppHeader'
import AppMain from './AppMain'
import AppFooter from './AppFooter'

  function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='main--app--container'>
      <AppHeader />
      <AppMain />
      <AppFooter />
    </div>  
  )
} 

export default App
