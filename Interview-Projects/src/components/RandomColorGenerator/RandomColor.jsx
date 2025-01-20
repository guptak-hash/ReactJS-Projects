import { useEffect, useState } from "react"



const RandomColor=()=>{
    const [typeOfColor,setTypeOfColor]=useState('hex')
    const [color,setColor]=useState("#000000")

    function generateRandom(len){
        return Math.random()*len
    }

  function handleHex(){
    let hex=[0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];
    let hexColor='#'
    for(let i=0;i<6;i++){
        hexColor+=hex[Math.floor(generateRandom(hex.length))]
    }
    console.log(hexColor)
    setColor(hexColor)
  }

  function handleRgb(){
    let r=Math.floor(generateRandom(256))
    let g=Math.floor(generateRandom(256))
    let b=Math.floor(generateRandom(256))
    setColor(`rgb(${r},${g},${b})`)
  }

  useEffect(()=>{
    if(typeOfColor==='hex'){
        handleHex()
    }
    else{
        handleRgb()
    }
  },[typeOfColor])
    return (
        <>
         <div style={{
            height:"100vh",
            width:"100vw",
            backgroundColor:color,
            
        }}>
            <button onClick={()=>setTypeOfColor('hex')}>Create Hex Color</button>
            <button onClick={()=>setTypeOfColor('rgb')}>Create RGB Color</button>
            <button onClick={typeOfColor=='hex' ? handleHex : handleRgb}>Generate Random Color</button>
            <h1>{typeOfColor=='hex' ? "Hex Color " : "RGB Color "} : {color}</h1>
            
        </div>
        
        </>
       
    )
}

export default RandomColor