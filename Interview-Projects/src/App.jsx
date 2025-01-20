import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Accordion from './components/accordion/Accordion'
import RandomColor from './components/RandomColorGenerator/RandomColor'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        {/* <Accordion/> */}
        <RandomColor/>
      </div>
    </>
  )
}

export default App
