import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Accordion from './components/accordion/Accordion'
import RandomColor from './components/RandomColorGenerator/RandomColor'
import StarRating from './components/star-rating/Star-Rating'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        {/* <Accordion/> */}
        {/* <RandomColor/> */}
        <StarRating/>
      </div>
    </>
  )
}

export default App
