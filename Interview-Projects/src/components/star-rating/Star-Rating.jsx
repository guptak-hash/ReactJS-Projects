import { useState } from 'react'
import {FaStar} from 'react-icons/fa'
import './style.css'

 const StarRating=({noOfStars=5})=>{
 
    const [rating,setRating]=useState(0);
    const [hover,setHover]=useState(0);

    function handleClick(currIndex){
        setRating(currIndex)
    }

    function handleMouseEnter(currIndex){
        setHover(currIndex)
    }

    function handleMouseLeave(){
        setHover(rating)
    }


    return (
       <div className="stars">
        {
           [...Array(noOfStars)].map((_,index)=>{
               index+=1;
              return (
              <FaStar
              className={index<=hover ? 'active':'inactive'}
              key={index}
              size={40}
              onClick={()=>handleClick(index)}
              onMouseMove={()=>handleMouseEnter(index)}
              onMouseLeave={()=>handleMouseLeave()}/>)
           }
           
           
           )
        }
           
       </div>
    )
}

export default StarRating