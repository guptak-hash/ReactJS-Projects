import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Accordion from './components/accordion/Accordion'
import RandomColor from './components/RandomColorGenerator/RandomColor'
import StarRating from './components/star-rating/Star-Rating'
import ImageSlider from './components/image-slider/ImageSlider'
import LoadMoreItems from './components/load-more-items/index'

function App() {


  return (
    <>
      <div>
        {/* <Accordion/> */}
        {/* <RandomColor/> */}
        {/* <StarRating/> */}
        {/* <ImageSlider url={'https://picsum.photos/v2/list?page=1&limit='} limit={5}/> */}
        <LoadMoreItems/>
      </div>
    </>
  )
}

export default App
