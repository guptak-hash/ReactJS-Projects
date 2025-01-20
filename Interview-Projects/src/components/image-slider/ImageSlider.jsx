import { useEffect, useState } from "react"
import {BsArrowLeftCircleFill, BsArrowRightCircleFill } from 'react-icons/bs'
import './style.css'

const ImageSlider=({url,limit=5})=>{
    const [images,setImages]=useState([])
    const [loading,setLoading]=useState(false)
    const [errorMsg,setErrorMsg] = useState(null)
    const [currentSlide,setCurrentSlide] = useState(0)

    const fetchUrl=async(getUrl,no)=>{
        try{
            setLoading(true)

            let res=await fetch(`${getUrl}${no}`)
            let data=await res.json()
            if(data){
                setImages(data)
                setLoading(false)
            }
        }
        catch(e){
            setErrorMsg(e.message)
            setLoading(false)
        }
    }
  
    useEffect(()=>{
        if(url !=='')  fetchUrl(url,limit)

    },[url])

    console.log(images)

    function handleNext(){
        setCurrentSlide(currentSlide===images.length-1 ? 0 : currentSlide+1 )
    }

    function handlePrevious(){
        setCurrentSlide(currentSlide===0 ? images.length-1 : currentSlide-1)
    }

    if(loading){
        return (
            <div>Loading data! Please wait.</div>
        )
    }
    if(errorMsg!==null){
        return (
            <div>Error occured! {errorMsg}</div>
        )
    }

    return (
        <div className="container">
            <BsArrowLeftCircleFill onClick={handlePrevious} className="arrow arrow-left"/>
             {
                images && images.length  ?
                images.map((elem,index)=>(
                    <img
                    key={elem.id}
                    src={elem.download_url}
                    className={currentSlide==index ? "current-image": "hidden-image"}  />
                ))
                :
                null
             }
             <BsArrowRightCircleFill onClick={handleNext} className="arrow arrow-right"/>
             <span className="circle-indicators">
                 {
                    images && images.length ?
                    images.map((_,index)=>(<button
                    key={index}
                    className={currentSlide===index ? "current-indicator": "hiddenindicator"}
                    onClick={()=>setCurrentSlide(index)} >

                    </button>))
                    :
                    null
                 }
             </span>
        </div>
    )
}

export default ImageSlider